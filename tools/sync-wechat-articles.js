/**
 * 微信公众号文章同步脚本
 * 功能: 从微信公众号 API 获取文章列表并自动更新到分类文档
 * 作者: 太阳鸟
 * 日期: 2025-12-25
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
    // 微信公众号 API 配置
    wechat: {
        apiUrl: 'https://mp.weixin.qq.com/cgi-bin/appmsgpublish',
        token: '12359247', // 从浏览器请求中获取
        fakeid: '',
        cookie: 'appmsglist_action_3593704948=card; wxuin=49979974884298; mm_lang=zh_CN; pgv_pvid=3274745332; ts_uid=2089898620; yyb_muid=165CE98C2D2A67B30652FF802C606657; qq_domain_video_guid_verify=c0d5b50794d59dc4; _qimei_uuid42=196131518021009e72d2ef079b9d9937e47dd02fef; _qimei_fingerprint=142cac50177c2084f9e84bb54941c5c2; _qimei_q36=; _qimei_h38=969d071872d2ef079b9d993702000001f19613; RK=4X3N5wMba/; ptcz=67d99c22c3de04bf37e2b19c9e5dbfe5e3ddc33da20b9b512008ad4d7c84492c; pac_uid=0_Xx13NkK5F1Jx4; omgid=0_Xx13NkK5F1Jx4; _hp2_id.1405110977=%7B%22userId%22%3A%227905684737679069%22%2C%22pageviewId%22%3A%226144639135585601%22%2C%22sessionId%22%3A%225613094879634153%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; markHashId_L=f4ad0da6-2165-48de-87df-81a88836a9bf; ua_id=2cRPiy96I2Vx7vN7AAAAAKGallFATPHihw84lH-tKHk=; poc_sid=HCqMRmmjv41rzauOQhcGej04PWQs7RmeIDhDiDiE; xid=7aa56fe976feb3e0847f55505ef7491f; _clck=3593704948|1|g25|0; rewardsn=; wxtokenkey=777; cert=KNGke_5YY6DHtu2ofhpx9pjTefqqVo1r; slave_sid=YkZmSmhIN1M0QzVlN1hKbmNlMTFIM2ZSVURZVlJ6MUFwcjhhU3BLZVlidGJ3M1VBd3RTUUdEam1JMWIxTEFrUnhuNGRoY1RsZXVNbnk0VTlhRjdDbW9EOFlTMkV4YWZDcFNtTmEwUjdBRXlyVzFaZDZWMHdUYUlUSUVmeFdacmhXd05JR2tkcE5sNWk4c3FP; slave_user=gh_ccff5ba2362f; rand_info=CAESIADW7thwnDilLbo0UDYsJaCWLaNmJ01/DmlDfRwLaQ6l; slave_bizuin=3924628841; bizuin=3924628841', // 完整的 Cookie
    },

    // 文件路径配置
    paths: {
        articleMd: path.join(__dirname, '../公众号文章分类.md'),
        outputJson: path.join(__dirname, '../wechat-articles.json'),
    },

    // 分页配置
    pagination: {
        begin: 0,
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
 */
function categorizeArticle(title, digest = '') {
    const content = title + ' ' + digest;

    // 分类规则
    const categories = {
        'AI 编程工具': [
            'AI 编程', 'Cursor', 'Claude Code', 'GitHub Copilot', 'Antigravity',
            'Vibe Coding', 'AI 编程操作系统', 'MCP', '编程助手', 'VSCode'
        ],
        'AI 相关开源项目': [
            'GitHub 开源', 'Star', 'SmolVLM', '视觉语言模型', '开源项目',
            '开源神器', '开源合集'
        ],
        '入门教程': [
            '小白', '保姆级', '入门', '从零开始', '5分钟', '快速上手',
            '新手', '教程', '指南'
        ],
        '进阶教程': [
            'LangChain', 'DeepSeek', '大模型', '部署', '开发详解',
            '全流程', '实战'
        ],
        'AI 智能体': [
            'Agent', '智能体', 'Manus', 'Coze', '多智能体', '协作'
        ],
        'AI 工具推荐': [
            'ChatGPT', 'Claude', 'Midjourney', 'AI 绘画', 'AI工具',
            '工具推荐', 'DeepSeek'
        ],
        '副业与创业': [
            '副业', '创业', '赚钱', '月入', '搞钱', '一人企业'
        ],
        '视频制作': [
            '视频', '剪辑', 'UP主', '直播', '录播', '短视频'
        ],
        '自媒体运营': [
            '自媒体', '公众号', '小红书', '抖音', '一键分发',
            '内容创作', '运营'
        ],
    };

    // 匹配分类
    for (const [category, keywords] of Object.entries(categories)) {
        for (const keyword of keywords) {
            if (content.includes(keyword)) {
                return category;
            }
        }
    }

    return '其他';
}

/**
 * 从微信公众号 API 获取文章列表
 */
async function fetchArticles(begin = 0, count = 20) {
    try {
        const params = {
            sub: 'list',
            search_field: 'null',
            begin: begin,
            count: count,
            query: '',
            fakeid: CONFIG.wechat.fakeid,
            type: '101_1',
            free_publish_type: '1',
            sub_action: 'list_ex',
            token: CONFIG.wechat.token,
            lang: 'zh_CN',
            f: 'json',
            ajax: '1',
        };

        const response = await axios.get(CONFIG.wechat.apiUrl, {
            params,
            headers: {
                'Cookie': CONFIG.wechat.cookie,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://mp.weixin.qq.com/',
            },
        });

        return response.data;
    } catch (error) {
        console.error('获取文章失败:', error.message);
        return null;
    }
}

/**
 * 解析文章数据
 */
function parseArticles(apiResponse) {
    const articles = [];

    if (!apiResponse || !apiResponse.publish_page) {
        console.log('⚠️ API 响应格式异常');
        console.log('响应数据:', JSON.stringify(apiResponse).substring(0, 500));
        return articles;
    }

    try {
        const publishPage = JSON.parse(apiResponse.publish_page);
        const publishList = publishPage.publish_list || [];

        for (const item of publishList) {
            const publishInfo = JSON.parse(item.publish_info);
            const appmsgex = publishInfo.appmsgex || [];

            // 检查 sent_info 是否存在
            if (!publishInfo.sent_info || !publishInfo.sent_info.time) {
                console.log('⚠️ 跳过无效文章数据');
                continue;
            }

            for (const article of appmsgex) {
                articles.push({
                    title: article.title,
                    link: article.link,
                    digest: article.digest || '',
                    publishDate: timestampToDate(publishInfo.sent_info.time),
                    timestamp: publishInfo.sent_info.time,
                    author: article.author_name || '太阳鸟',
                    category: categorizeArticle(article.title, article.digest),
                });
            }
        }
    } catch (error) {
        console.error('解析文章数据时出错:', error.message);
    }

    return articles;
}

/**
 * 批量获取所有文章
 */
async function fetchAllArticles() {
    const allArticles = [];
    const { begin, count, maxPages } = CONFIG.pagination;

    console.log('开始获取文章列表...\n');

    for (let page = 0; page < maxPages; page++) {
        const offset = begin + (page * count);
        console.log(`正在获取第 ${page + 1} 页 (offset: ${offset})...`);

        const response = await fetchArticles(offset, count);

        if (!response) {
            console.log('获取失败,停止');
            break;
        }

        const articles = parseArticles(response);

        if (articles.length === 0) {
            console.log('没有更多文章了');
            break;
        }

        allArticles.push(...articles);
        console.log(`获取到 ${articles.length} 篇文章`);

        // 延迟避免请求过快
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`\n总共获取到 ${allArticles.length} 篇文章\n`);
    return allArticles;
}

/**
 * 保存文章数据到 JSON 文件
 */
function saveArticlesToJson(articles) {
    const data = {
        updateTime: new Date().toISOString(),
        totalCount: articles.length,
        articles: articles,
    };

    fs.writeFileSync(
        CONFIG.paths.outputJson,
        JSON.stringify(data, null, 2),
        'utf-8'
    );

    console.log(`文章数据已保存到: ${CONFIG.paths.outputJson}`);
}

/**
 * 更新 Markdown 文档
 */
function updateMarkdownDoc(articles) {
    let mdContent = fs.readFileSync(CONFIG.paths.articleMd, 'utf-8');

    // 更新统计信息
    const totalCount = articles.length;
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    mdContent = mdContent.replace(
        /- \*\*总文章数\*\*: .+/,
        `- **总文章数**: ${totalCount} 篇`
    );

    mdContent = mdContent.replace(
        /- \*\*最后更新\*\*: .+/,
        `- **最后更新**: ${dateStr} ${timeStr}`
    );

    // 按分类整理文章
    const categorizedArticles = {};
    for (const article of articles) {
        if (!categorizedArticles[article.category]) {
            categorizedArticles[article.category] = [];
        }
        categorizedArticles[article.category].push(article);
    }

    // 生成分类内容
    console.log('\n按分类统计:');
    for (const [category, items] of Object.entries(categorizedArticles)) {
        console.log(`  ${category}: ${items.length} 篇`);
    }

    // 更新热门推荐 (最新 10 篇)
    const latestArticles = articles
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 10);

    let hotSection = '## 🔥 热门推荐\n\n### 最新发布\n';
    for (const article of latestArticles) {
        hotSection += `- [${article.title}](${article.link}) - 发布日期: ${article.publishDate}\n`;
    }

    mdContent = mdContent.replace(
        /## 🔥 热门推荐[\s\S]*?(?=---)/,
        hotSection + '\n'
    );

    // 保存更新后的文档
    fs.writeFileSync(CONFIG.paths.articleMd, mdContent, 'utf-8');
    console.log(`\nMarkdown 文档已更新: ${CONFIG.paths.articleMd}`);
}

/**
 * 生成分类报告
 */
function generateCategoryReport(articles) {
    const report = {
        totalArticles: articles.length,
        categories: {},
        recentArticles: [],
    };

    // 按分类统计
    for (const article of articles) {
        if (!report.categories[article.category]) {
            report.categories[article.category] = {
                count: 0,
                articles: [],
            };
        }
        report.categories[article.category].count++;
        report.categories[article.category].articles.push({
            title: article.title,
            link: article.link,
            date: article.publishDate,
        });
    }

    // 最新文章
    report.recentArticles = articles
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 20)
        .map(a => ({
            title: a.title,
            link: a.link,
            date: a.publishDate,
            category: a.category,
        }));

    return report;
}

/**
 * 主函数
 */
async function main() {
    console.log('='.repeat(60));
    console.log('微信公众号文章同步工具');
    console.log('='.repeat(60));
    console.log('');

    // 检查配置
    if (!CONFIG.wechat.token || !CONFIG.wechat.cookie) {
        console.error('❌ 错误: 请先配置 token 和 cookie');
        console.log('\n使用说明:');
        console.log('1. 打开微信公众号后台');
        console.log('2. 打开浏览器开发者工具 (F12)');
        console.log('3. 切换到 Network 标签');
        console.log('4. 刷新页面,找到 appmsgpublish 请求');
        console.log('5. 复制请求中的 token 和完整的 Cookie');
        console.log('6. 更新本文件中的 CONFIG.wechat 配置\n');
        return;
    }

    try {
        // 获取所有文章
        const articles = await fetchAllArticles();

        if (articles.length === 0) {
            console.log('❌ 没有获取到任何文章');
            return;
        }

        // 保存到 JSON
        saveArticlesToJson(articles);

        // 更新 Markdown 文档
        updateMarkdownDoc(articles);

        // 生成报告
        const report = generateCategoryReport(articles);
        console.log('\n' + '='.repeat(60));
        console.log('同步完成!');
        console.log('='.repeat(60));
        console.log(`总文章数: ${report.totalArticles}`);
        console.log(`分类数量: ${Object.keys(report.categories).length}`);
        console.log('');

    } catch (error) {
        console.error('❌ 发生错误:', error.message);
        console.error(error.stack);
    }
}

// 运行主函数
if (require.main === module) {
    main();
}

module.exports = {
    fetchArticles,
    parseArticles,
    categorizeArticle,
    updateMarkdownDoc,
};
