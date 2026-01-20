/**
 * 微信公众号文章同步脚本 (官方 API 版)
 * 功能: 使用 AppID 和 AppSecret 获取 Access Token，进而同步已发布的文章
 * 作者: 太阳鸟
 * 日期: 2025-12-30
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
    // 微信公众号 API 配置
    wechat: {
        appId: 'wx322ff120e757e1b0',
        appSecret: '9025976bd848dcce82c94102374b1e9e',
        tokenUrl: 'https://api.weixin.qq.com/cgi-bin/token',
        batchGetUrl: 'https://api.weixin.qq.com/cgi-bin/freepublish/batchget', // 获取已发布文章
    },

    // 文件路径配置
    paths: {
        articleMd: path.join(__dirname, '../公众号文章分类.md'),
        outputJson: path.join(__dirname, '../wechat-articles.json'),
    },

    // 分页配置
    pagination: {
        offset: 0,
        count: 20, // 每次获取的文章数量
        maxPages: 10, // 最多获取的页数
    },
};

/**
 * 从时间戳转换为日期字符串
 */
function timestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * 根据文章标题智能分类
 * (复用原逻辑)
 */
function categorizeArticle(title, digest = '') {
    const content = title + ' ' + digest;
    const categories = {
        'AI 编程工具': ['AI 编程', 'Cursor', 'Claude Code', 'GitHub Copilot', 'Antigravity', 'Vibe Coding', 'AI 编程操作系统', 'MCP', '编程助手', 'VSCode'],
        'AI 相关开源项目': ['GitHub 开源', 'Star', 'SmolVLM', '视觉语言模型', '开源项目', '开源神器', '开源合集'],
        '入门教程': ['小白', '保姆级', '入门', '从零开始', '5分钟', '快速上手', '新手', '教程', '指南'],
        '进阶教程': ['LangChain', 'DeepSeek', '大模型', '部署', '开发详解', '全流程', '实战'],
        'AI 智能体': ['Agent', '智能体', 'Manus', 'Coze', '多智能体', '协作'],
        'AI 工具推荐': ['ChatGPT', 'Claude', 'Midjourney', 'AI 绘画', 'AI工具', '工具推荐', 'DeepSeek'],
        '副业与创业': ['副业', '创业', '赚钱', '月入', '搞钱', '一人企业'],
        '视频制作': ['视频', '剪辑', 'UP主', '直播', '录播', '短视频'],
        '自媒体运营': ['自媒体', '公众号', '小红书', '抖音', '一键分发', '内容创作', '运营'],
    };

    for (const [category, keywords] of Object.entries(categories)) {
        for (const keyword of keywords) {
            if (content.includes(keyword)) return category;
        }
    }
    return '其他';
}

/**
 * 获取 Access Token
 */
async function getAccessToken() {
    try {
        const url = `${CONFIG.wechat.tokenUrl}?grant_type=client_credential&appid=${CONFIG.wechat.appId}&secret=${CONFIG.wechat.appSecret}`;
        const response = await axios.get(url);

        if (response.data.access_token) {
            console.log('✅ 成功获取 Access Token');
            return response.data.access_token;
        } else if (response.data.errcode) {
            console.error(`❌ 获取 Access Token 失败: [${response.data.errcode}] ${response.data.errmsg}`);
            return null;
        }
    } catch (error) {
        console.error('❌ 获取 Access Token 网络错误:', error.message);
        return null;
    }
}

/**
 * 获取已发布的文章列表
 */
async function fetchArticles(accessToken, offset = 0, count = 20) {
    try {
        const url = `${CONFIG.wechat.batchGetUrl}?access_token=${accessToken}`;
        const response = await axios.post(url, {
            offset: offset,
            count: count,
            no_content: 0 // 0: 返回 content, 1: 不返回
        });

        if (response.data.item) {
            return response.data; // { item: [], total_count: 530, item_count: 20 }
        } else if (response.data.errcode) {
            console.error(`❌ 获取文章列表失败: [${response.data.errcode}] ${response.data.errmsg}`);
            return null;
        }
    } catch (error) {
        console.error('❌ 获取文章列表网络错误:', error.message);
        return null;
    }
}

/**
 * 解析官方 API 返回的数据
 */
function parseArticles(apiResponse) {
    const articles = [];
    if (!apiResponse || !apiResponse.item) return articles;

    for (const item of apiResponse.item) {
        // item 结构: { article_id, content: { news_item: [ ... ] }, update_time }
        // 注意：一次群发可能包含多篇文章 (news_item 是数组)
        const newsItems = item.content.news_item || [];
        const updateTime = item.update_time; // 发布时间戳

        for (const article of newsItems) {
            articles.push({
                title: article.title,
                link: article.url,
                digest: article.digest || '',
                publishDate: timestampToDate(updateTime),
                timestamp: updateTime,
                author: article.author || '太阳鸟',
                category: categorizeArticle(article.title, article.digest),
                // 官方 API freepublish 接口不直接返回阅读/点赞数 (需单独调用 datacube 接口，且有权限限制)
                // 这里暂时设为 0 或保留原有逻辑 (如果文件已存在)
                readNum: 0,
                likeNum: 0,
            });
        }
    }
    return articles;
}

/**
 * 批量获取所有文章
 */
async function fetchAllArticles() {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

    const allArticles = [];
    const { offset, count, maxPages } = CONFIG.pagination;

    console.log('开始同步文章...\n');

    // 第一次请求以获取总数
    const firstPage = await fetchArticles(accessToken, offset, count);
    if (!firstPage) return null;

    const totalCount = firstPage.total_count;
    console.log(`📚 公众号总文章数: ${totalCount}`);

    // 解析第一页
    allArticles.push(...parseArticles(firstPage));
    console.log(`已获取 1/${Math.ceil(totalCount / count)} 页`);

    // 计算还需要获取多少页
    const totalPages = Math.ceil(totalCount / count);
    const pagesToFetch = Math.min(totalPages, maxPages);

    for (let page = 1; page < pagesToFetch; page++) {
        const currentOffset = offset + (page * count);
        console.log(`正在获取 ${(page + 1)}/${totalPages} 页 (offset: ${currentOffset})...`);

        const response = await fetchArticles(accessToken, currentOffset, count);
        if (response) {
            const newArticles = parseArticles(response);
            allArticles.push(...newArticles);
            console.log(`  + ${newArticles.length} 篇`);
        }

        // 简单限流
        await new Promise(r => setTimeout(r, 500));
    }

    return allArticles;
}

/**
 * 保存与更新文档 (复用原逻辑简化版)
 */
function saveAndGenerateReport(articles) {
    // 1. 保存 JSON
    const jsonData = {
        updateTime: new Date().toISOString(),
        totalCount: articles.length,
        articles: articles,
    };
    fs.writeFileSync(CONFIG.paths.outputJson, JSON.stringify(jsonData, null, 2), 'utf-8');
    console.log(`\n文章数据已保存: ${CONFIG.paths.outputJson}`);

    // 2. 更新 Markdown
    let mdContent = fs.readFileSync(CONFIG.paths.articleMd, 'utf-8');

    // 更新统计
    mdContent = mdContent.replace(/- \*\*总文章数\*\*: .+/, `- **总文章数**: ${articles.length} 篇`);
    const now = new Date();
    mdContent = mdContent.replace(/- \*\*最后更新\*\*: .+/, `- **最后更新**: ${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`);

    // 更新热门推荐 (前10篇)
    const latest = [...articles].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
    let hotSection = '## 🔥 热门推荐\n\n### 最新发布\n';
    latest.forEach(a => {
        hotSection += `- [${a.title}](${a.link}) - 发布日期: ${a.publishDate}\n`;
    });
    mdContent = mdContent.replace(/## 🔥 热门推荐[\s\S]*?(?=---)/, hotSection + '\n');

    fs.writeFileSync(CONFIG.paths.articleMd, mdContent, 'utf-8');
    console.log(`Markdown 文档已更新: ${CONFIG.paths.articleMd}`);
}

async function main() {
    console.log('='.repeat(60));
    console.log('微信公众号文章同步工具 (官方 API 版)');
    console.log('='.repeat(60));

    const articles = await fetchAllArticles();
    if (articles && articles.length > 0) {
        saveAndGenerateReport(articles);
        console.log('\n✅ 同步完成！');
    } else {
        console.log('\n❌ 同步失败或无数据');
    }
}

main();
