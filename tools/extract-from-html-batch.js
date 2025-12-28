/**
 * 从HTML文件批量提取文章数据
 */

const fs = require('fs');
const path = require('path');

// 从文章列表中提取数据
function extractArticlesFromList(publishList) {
    const articles = [];

    for (const article of publishList) {
        try {
            let publishInfoStr = article.publish_info || '{}';

            // 解码HTML实体
            publishInfoStr = publishInfoStr
                .replace(/&quot;/g, '"')
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&#39;/g, "'")
                .replace(/&nbsp;/g, ' ')
                .replace(/\\\//g, '/');

            const publishInfo = JSON.parse(publishInfoStr);
            const appmsgInfo = publishInfo.appmsg_info || [];
            const appmsgex = publishInfo.appmsgex || [];

            // 合并所有文章
            const allArticles = [...appmsgInfo, ...appmsgex];

            for (const appmsg of allArticles) {
                // 时间戳转日期
                const timestamp = publishInfo.sent_info?.time || 0;
                const date = new Date(timestamp * 1000);
                const publishDate = date.toISOString().split('T')[0];

                // 简单分类
                const title = appmsg.title || '';
                let category = '其他';
                if (title.includes('GitHub') || title.includes('Github') || title.includes('开源')) {
                    category = 'AI 相关开源项目';
                } else if (title.includes('AI') || title.includes('智能') || title.includes('编程')) {
                    category = 'AI 编程工具';
                }

                const articleData = {
                    title: title,
                    link: appmsg.content_url || '',
                    digest: appmsg.digest || '',
                    publishDate: publishDate,
                    timestamp: timestamp,
                    author: appmsg.author_name || '太阳鸟',
                    category: category,
                    readNum: parseInt(appmsg.read_num) || 0,
                    likeNum: parseInt(appmsg.like_num) || 0,
                    oldLikeNum: parseInt(appmsg.old_like_num) || 0,
                    commentNum: parseInt(appmsg.comment_num) || 0,
                    shareNum: parseInt(appmsg.share_num) || 0,
                };
                articles.push(articleData);
            }
        } catch (e) {
            console.error('⚠️ 解析文章出错:', e.message);
            continue;
        }
    }

    return articles;
}

// 从HTML文件提取数据
function extractFromHTML(htmlContent) {
    // 提取 publish_page
    const startMatch = htmlContent.match(/publish_page\s*=\s*(\{)/);

    if (!startMatch) {
        return [];
    }

    const startIndex = startMatch.index + startMatch[0].length - 1;
    const endMatch = htmlContent.lastIndexOf('};');

    if (endMatch <= startIndex) {
        return [];
    }

    const jsonStr = htmlContent.substring(startIndex, endMatch + 1);

    try {
        const publishPage = JSON.parse(jsonStr);
        return extractArticlesFromList(publishPage.publish_list || []);
    } catch (e) {
        console.error('❌ 解析JSON失败:', e.message);
        return [];
    }
}

/**
 * 主函数
 */
function main() {
    console.log('============================================================');
    console.log('从HTML文件提取文章数据');
    console.log('============================================================\n');

    const htmlDir = path.join(__dirname, '../html');

    // 检查html目录
    if (!fs.existsSync(htmlDir)) {
        console.error('❌ html目录不存在,请先运行 save-html-responses.js');
        process.exit(1);
    }

    // 读取所有HTML文件
    const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

    if (files.length === 0) {
        console.error('❌ html目录中没有HTML文件');
        process.exit(1);
    }

    console.log(`📖 找到 ${files.length} 个HTML文件\n`);

    // 提取所有文章
    let allArticles = [];

    for (const file of files) {
        const filepath = path.join(htmlDir, file);
        console.log(`处理: ${file}`);

        const htmlContent = fs.readFileSync(filepath, 'utf-8');
        const articles = extractFromHTML(htmlContent);

        console.log(`  提取: ${articles.length} 篇文章`);
        allArticles = allArticles.concat(articles);
    }

    // 去重(根据link)
    const uniqueArticles = [];
    const seenLinks = new Set();

    for (const article of allArticles) {
        if (!seenLinks.has(article.link)) {
            seenLinks.add(article.link);
            uniqueArticles.push(article);
        }
    }

    console.log(`\n📊 总计: ${allArticles.length} 篇文章`);
    console.log(`去重后: ${uniqueArticles.length} 篇文章`);

    // 保存到JSON
    const outputData = {
        updateTime: new Date().toISOString(),
        totalCount: uniqueArticles.length,
        articles: uniqueArticles
    };

    const outputPath = path.join(__dirname, '../wechat-articles.json');
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));

    console.log(`\n✅ 数据已保存到: ${outputPath}`);

    // 统计
    const totalReads = uniqueArticles.reduce((sum, a) => sum + a.readNum, 0);
    const totalLikes = uniqueArticles.reduce((sum, a) => sum + a.likeNum, 0);
    const totalComments = uniqueArticles.reduce((sum, a) => sum + a.commentNum, 0);

    console.log('\n📈 统计数据:');
    console.log(`  总阅读数: ${totalReads.toLocaleString()}`);
    console.log(`  总点赞数: ${totalLikes.toLocaleString()}`);
    console.log(`  总评论数: ${totalComments.toLocaleString()}`);

    if (uniqueArticles.length > 0) {
        console.log(`  平均阅读: ${Math.round(totalReads / uniqueArticles.length)}`);
        console.log(`  平均点赞: ${Math.round(totalLikes / uniqueArticles.length)}`);
    }
}

main();
