/**
 * 2025年度总结生成器
 * 功能: 基于文章互动数据生成年度总结
 * 作者: 太阳鸟
 * 日期: 2025-12-26
 */

const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
    paths: {
        inputJson: path.join(__dirname, '../wechat-articles.json'),
        outputMd: path.join(__dirname, '../2025年度总结.md'),
    },
    year: 2025,
};

/**
 * 读取文章数据
 */
function loadArticles() {
    if (!fs.existsSync(CONFIG.paths.inputJson)) {
        console.error('❌ 数据文件不存在:', CONFIG.paths.inputJson);
        console.log('请先运行: npm run sync-articles');
        return null;
    }

    const data = JSON.parse(fs.readFileSync(CONFIG.paths.inputJson, 'utf-8'));
    return data.articles || [];
}

/**
 * 统计年度数据
 */
function analyzeYearData(articles) {
    const stats = {
        totalArticles: articles.length,
        totalReads: 0,
        totalLikes: 0,
        totalComments: 0,
        monthlyTrend: {},
        categoryStats: {},
    };

    // 统计总数和月度趋势
    articles.forEach(article => {
        stats.totalReads += article.readNum || 0;
        stats.totalLikes += article.likeNum || 0;
        stats.totalComments += article.commentCount || 0;

        // 月度统计
        const month = article.publishDate.substring(0, 7); // YYYY-MM
        if (!stats.monthlyTrend[month]) {
            stats.monthlyTrend[month] = {
                count: 0,
                reads: 0,
                likes: 0,
                comments: 0,
            };
        }
        stats.monthlyTrend[month].count++;
        stats.monthlyTrend[month].reads += article.readNum || 0;
        stats.monthlyTrend[month].likes += article.likeNum || 0;
        stats.monthlyTrend[month].comments += article.commentCount || 0;

        // 分类统计
        const category = article.category || '其他';
        if (!stats.categoryStats[category]) {
            stats.categoryStats[category] = {
                count: 0,
                reads: 0,
                likes: 0,
                comments: 0,
            };
        }
        stats.categoryStats[category].count++;
        stats.categoryStats[category].reads += article.readNum || 0;
        stats.categoryStats[category].likes += article.likeNum || 0;
        stats.categoryStats[category].comments += article.commentCount || 0;
    });

    return stats;
}

/**
 * 生成排行榜
 */
function generateRankings(articles) {
    return {
        topLiked: [...articles]
            .sort((a, b) => (b.likeNum || 0) - (a.likeNum || 0))
            .slice(0, 10),
        topCommented: [...articles]
            .sort((a, b) => (b.commentCount || 0) - (a.commentCount || 0))
            .slice(0, 10),
        topRead: [...articles]
            .sort((a, b) => (b.readNum || 0) - (a.readNum || 0))
            .slice(0, 10),
    };
}

/**
 * 生成月度趋势图表(Mermaid)
 */
function generateMonthlyTrendChart(monthlyTrend) {
    const months = Object.keys(monthlyTrend).sort();

    let chart = '```mermaid\n';
    chart += 'xychart-beta\n';
    chart += '    title "2025年月度发布趋势"\n';
    chart += '    x-axis [' + months.map(m => `"${m.substring(5)}月"`).join(', ') + ']\n';
    chart += '    y-axis "文章数量" 0 --> ' + Math.max(...months.map(m => monthlyTrend[m].count)) + '\n';
    chart += '    bar [' + months.map(m => monthlyTrend[m].count).join(', ') + ']\n';
    chart += '```\n';

    return chart;
}

/**
 * 生成分类统计表格
 */
function generateCategoryTable(categoryStats) {
    const categories = Object.entries(categoryStats)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 10);

    let table = '| 排名 | 分类 | 文章数 | 总阅读 | 总点赞 | 总评论 |\n';
    table += '|------|------|--------|--------|--------|--------|\n';

    categories.forEach(([category, stats], index) => {
        table += `| ${index + 1} | ${category} | ${stats.count} | ${stats.reads.toLocaleString()} | ${stats.likes.toLocaleString()} | ${stats.comments.toLocaleString()} |\n`;
    });

    return table;
}

/**
 * 生成排行榜列表
 */
function generateRankingList(articles, title) {
    let list = '';
    articles.forEach((article, index) => {
        const readNum = article.readNum || 0;
        const likeNum = article.likeNum || 0;
        const commentCount = article.commentCount || 0;

        list += `${index + 1}. **[${article.title}](${article.link})**\n`;
        list += `   - 📅 发布日期: ${article.publishDate}\n`;
        list += `   - 👁️ 阅读: ${readNum.toLocaleString()} | 👍 点赞: ${likeNum.toLocaleString()} | 💬 评论: ${commentCount.toLocaleString()}\n\n`;
    });
    return list;
}

/**
 * 生成Markdown文档
 */
function generateSummaryMarkdown(stats, rankings) {
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    let md = `# 太阳鸟的AI宝藏库 - 2025年度总结 🎉

> 本文档是基于微信公众号「太阳鸟的AI宝藏库」2025年全年文章数据自动生成的年度总结报告。

---

## 📊 年度数据概览

- **总文章数**: ${stats.totalArticles} 篇
- **总阅读量**: ${stats.totalReads.toLocaleString()} 次
- **总点赞数**: ${stats.totalLikes.toLocaleString()} 个
- **总评论数**: ${stats.totalComments.toLocaleString()} 条
- **平均阅读**: ${Math.round(stats.totalReads / stats.totalArticles).toLocaleString()} 次/篇
- **平均点赞**: ${Math.round(stats.totalLikes / stats.totalArticles).toLocaleString()} 个/篇
- **生成时间**: ${dateStr}

---

## 🏆 年度榜单

### 🔥 获赞最高 Top 10

${generateRankingList(rankings.topLiked, '获赞最高')}

---

### 💬 评论最多 Top 10

${generateRankingList(rankings.topCommented, '评论最多')}

---

### 📖 阅读最多 Top 10

${generateRankingList(rankings.topRead, '阅读最多')}

---

## 📈 数据分析

### 月度发布趋势

${generateMonthlyTrendChart(stats.monthlyTrend)}

### 月度详细数据

| 月份 | 文章数 | 总阅读 | 总点赞 | 总评论 |
|------|--------|--------|--------|--------|
`;

    Object.keys(stats.monthlyTrend).sort().forEach(month => {
        const data = stats.monthlyTrend[month];
        md += `| ${month} | ${data.count} | ${data.reads.toLocaleString()} | ${data.likes.toLocaleString()} | ${data.comments.toLocaleString()} |\n`;
    });

    md += `\n---\n\n### 分类统计 Top 10\n\n${generateCategoryTable(stats.categoryStats)}\n`;

    md += `\n---\n\n## 💡 年度总结\n\n`;
    md += `### 创作成果\n\n`;
    md += `在2025年,我们共创作了 **${stats.totalArticles}** 篇文章,累计获得了:\n\n`;
    md += `- 📖 **${stats.totalReads.toLocaleString()}** 次阅读\n`;
    md += `- 👍 **${stats.totalLikes.toLocaleString()}** 个点赞\n`;
    md += `- 💬 **${stats.totalComments.toLocaleString()}** 条评论\n\n`;

    // 找出最受欢迎的月份
    const bestMonth = Object.entries(stats.monthlyTrend)
        .sort((a, b) => b[1].reads - a[1].reads)[0];

    md += `### 高光时刻\n\n`;

    // 检查数据是否存在
    if (rankings.topRead && rankings.topRead.length > 0 && rankings.topRead[0].readNum !== undefined) {
        md += `- **最高产月份**: ${bestMonth[0]} (${bestMonth[1].count} 篇)\n`;
        md += `- **最受欢迎文章**: [${rankings.topRead[0].title}](${rankings.topRead[0].link})\n`;
        md += `  - 阅读量: ${rankings.topRead[0].readNum.toLocaleString()}\n`;
    }

    if (rankings.topLiked && rankings.topLiked.length > 0 && rankings.topLiked[0].likeNum !== undefined) {
        md += `- **最受认可文章**: [${rankings.topLiked[0].title}](${rankings.topLiked[0].link})\n`;
        md += `  - 点赞数: ${rankings.topLiked[0].likeNum.toLocaleString()}\n`;
    }

    if (rankings.topCommented && rankings.topCommented.length > 0 && rankings.topCommented[0].commentCount !== undefined) {
        md += `- **最具讨论度文章**: [${rankings.topCommented[0].title}](${rankings.topCommented[0].link})\n`;
        md += `  - 评论数: ${rankings.topCommented[0].commentCount.toLocaleString()}\n`;
    }

    md += `\n`;

    md += `---\n\n`;
    md += `## 🎯 展望2026\n\n`;
    md += `感谢每一位读者的支持和陪伴!在新的一年里,我们将继续为大家带来更多优质的AI相关内容。\n\n`;
    md += `如果你也对AI感兴趣,欢迎关注公众号「太阳鸟的AI宝藏库」!\n\n`;

    md += `---\n\n`;
    md += `<div align="center">\n\n`;
    md += `**持续更新中... 欢迎关注公众号获取最新内容!**\n\n`;
    md += `Made with ❤️ by 太阳鸟\n\n`;
    md += `</div>\n`;

    return md;
}

/**
 * 主函数
 */
function main() {
    console.log('='.repeat(60));
    console.log('2025年度总结生成器');
    console.log('='.repeat(60));
    console.log('');

    // 读取文章数据
    const articles = loadArticles();
    if (!articles) {
        return;
    }

    console.log(`读取到 ${articles.length} 篇文章\n`);

    // 统计分析
    console.log('正在分析数据...');
    const stats = analyzeYearData(articles);

    // 生成排行榜
    console.log('正在生成排行榜...');
    const rankings = generateRankings(articles);

    // 生成Markdown文档
    console.log('正在生成年度总结文档...');
    const markdown = generateSummaryMarkdown(stats, rankings);

    // 保存文件
    fs.writeFileSync(CONFIG.paths.outputMd, markdown, 'utf-8');

    console.log(`\n✅ 年度总结已生成: ${CONFIG.paths.outputMd}\n`);

    // 输出摘要
    console.log('='.repeat(60));
    console.log('年度数据摘要');
    console.log('='.repeat(60));
    console.log(`总文章数: ${stats.totalArticles} 篇`);
    console.log(`总阅读量: ${stats.totalReads.toLocaleString()} 次`);
    console.log(`总点赞数: ${stats.totalLikes.toLocaleString()} 个`);
    console.log(`总评论数: ${stats.totalComments.toLocaleString()} 条`);
    console.log('');
}

// 运行主函数
if (require.main === module) {
    main();
}

module.exports = {
    analyzeYearData,
    generateRankings,
    generateSummaryMarkdown,
};
