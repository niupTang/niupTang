/**
 * 文章分类目录生成器
 * 功能: 读取 wechat-articles.json 并生成完整的分类文档
 * 作者: 太阳鸟
 * 日期: 2025-12-25
 */

const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
    inputJson: path.join(__dirname, '../wechat-articles.json'),
    outputMd: path.join(__dirname, '../公众号文章分类.md'),
};

/**
 * 智能分类规则
 */
const CATEGORY_RULES = {
    // AI 工具推荐
    'ChatGPT 相关': ['ChatGPT', 'GPT-4', 'GPT-3', 'OpenAI'],
    'Claude 相关': ['Claude', 'Anthropic', 'Claude Code'],
    'Midjourney / AI 绘画': ['Midjourney', 'Stable Diffusion', 'AI 绘画', 'AI绘图', '文生图'],
    'DeepSeek 相关': ['DeepSeek', 'deepseek'],

    // AI 编程开发
    'AI 编程工具': ['AI 编程', 'Cursor', 'GitHub Copilot', 'Antigravity', 'Vibe Coding', 'AI编程', 'MCP', '编程助手', 'VSCode', 'AI 编辑器'],
    'MCP 协议相关': ['MCP', 'Model Context Protocol', 'MCP 协议', 'MCP客户端'],
    '代码开发教程': ['代码', '开发', '编程教程', '代码审查', '代码生成'],

    // AI 智能体
    '智能体开发': ['Agent', '智能体', 'Manus', 'Coze', 'AI智能体', 'AI Agent'],
    '多智能体协作': ['多智能体', '多Agent', '协作', '智能体协同'],

    // GitHub 开源项目
    '热门开源项目 (10k+ Stars)': ['10k Star', '25k Star', '50k Star', '100k Star', '300k Star'],
    'AI 相关开源项目': ['GitHub 开源', 'SmolVLM', '视觉语言模型', '开源神器', '开源合集', 'AI 开源'],
    '实用工具开源项目': ['开源工具', '开源项目', 'GitHub Star'],

    // 技术教程
    '入门教程': ['小白', '保姆级', '入门', '从零开始', '5分钟', '快速上手', '新手', '零基础'],
    '进阶教程': ['LangChain', '大模型', '部署', '开发详解', '全流程', '实战', '进阶'],
    '专题教程': ['Prompt Engineering', '提示词', '教程', '指南', '手把手'],

    // AI 副业与创业
    '副业实践': ['副业', 'AI 副业', '月入', '赚钱', '搞钱'],
    '创业指南': ['创业', '一人企业', '避坑', '从副业到', '技术人'],

    // AI 创作工具
    '视频制作': ['视频', '剪辑', 'UP主', '直播', '短视频', '录播', '视频生成'],
    '音频处理': ['AI配音', 'TTS', '声音克隆', '语音', '音频'],
    '图像处理': ['图像', '抠图', '图片', 'OCR', '图像识别'],

    // 实用工具
    '效率工具': ['AFFiNE', 'Notion', '思维导图', '清盘', '效率', '工具'],
    '开发工具': ['开发工具', '编辑器', '终端', 'IDE'],

    // 自媒体运营
    '内容创作': ['一键分发', '短视频上传', '爆款文案', '内容创作', '自媒体'],
    '平台工具': ['Wechatsync', '同步', '平台', '公众号', '小红书', '抖音'],

    // 学习资源
    '课程推荐': ['教程', 'AI 教程', '课程', '学习', 'Datawhale', '保姆课'],
    '学习路线': ['学习路线', '路线图', '学习指南', '从入门到'],

    // 行业动态
    'AI 新闻': ['All in AI', '智能体普及', '新闻', '动态', '发布'],
    '技术趋势': ['趋势', '未来', '革命', '颠覆'],

    // 观点思考
    '技术思考': ['热爱技术', 'AI能写', '程序员', '思考'],
    '职业发展': ['程序员', '出路', '职业', '发展'],

    // 福利资源
    '免费资源': ['福利', '免费', '红包封面', '游戏加速器'],
    '工具合集': ['AI 工具合集', '工具推荐', '合集'],
};

/**
 * 根据标题和摘要进行智能分类
 */
function categorizeArticle(title, digest = '') {
    const content = (title + ' ' + digest).toLowerCase();
    const matchedCategories = [];

    // 遍历所有分类规则
    for (const [category, keywords] of Object.entries(CATEGORY_RULES)) {
        for (const keyword of keywords) {
            if (content.includes(keyword.toLowerCase())) {
                matchedCategories.push(category);
                break; // 匹配到就跳出当前分类的关键词循环
            }
        }
    }

    // 如果没有匹配到任何分类,返回"其他"
    return matchedCategories.length > 0 ? matchedCategories : ['其他'];
}

/**
 * 读取 JSON 文件
 */
function readArticlesJson() {
    try {
        const jsonContent = fs.readFileSync(CONFIG.inputJson, 'utf-8');
        const data = JSON.parse(jsonContent);
        return data.articles || [];
    } catch (error) {
        console.error('❌ 读取 JSON 文件失败:', error.message);
        return [];
    }
}

/**
 * 按分类整理文章
 */
function organizeArticlesByCategory(articles) {
    const categorized = {};

    for (const article of articles) {
        const categories = categorizeArticle(article.title, article.digest);

        for (const category of categories) {
            if (!categorized[category]) {
                categorized[category] = [];
            }

            // 避免重复添加
            const exists = categorized[category].some(a => a.link === article.link);
            if (!exists) {
                categorized[category].push(article);
            }
        }
    }

    // 按日期排序每个分类的文章
    for (const category in categorized) {
        categorized[category].sort((a, b) => b.timestamp - a.timestamp);
    }

    return categorized;
}

/**
 * 生成 Markdown 文档
 */
function generateMarkdown(articles, categorized) {
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    let md = `# 太阳鸟的AI宝藏库 - 公众号文章分类整理 📚

> 本文档用于整理和分类微信公众号「太阳鸟的AI宝藏库」的所有文章,方便快速查找和引用。

---

## 📊 文章统计

- **总文章数**: ${articles.length} 篇
- **最后更新**: ${dateStr} ${timeStr}
- **公众号名称**: 太阳鸟的AI宝藏库 (牛皮糖不吹牛)
- **分类数量**: ${Object.keys(categorized).length} 个

---

## 🔥 热门推荐

### 最新发布 (Top 10)
`;

    // 添加最新 10 篇文章
    const latestArticles = [...articles]
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 10);

    for (const article of latestArticles) {
        md += `- [${article.title}](${article.link}) - 发布日期: ${article.publishDate}\n`;
    }

    md += `\n---\n\n## 📑 分类目录\n\n`;

    // 定义分类的显示顺序和图标
    const categoryOrder = [
        { section: '🤖 AI 工具推荐', categories: ['ChatGPT 相关', 'Claude 相关', 'Midjourney / AI 绘画', 'DeepSeek 相关'] },
        { section: '💻 AI 编程开发', categories: ['AI 编程工具', 'MCP 协议相关', '代码开发教程'] },
        { section: '🎯 AI 智能体 (Agent)', categories: ['智能体开发', '多智能体协作'] },
        { section: '🚀 GitHub 开源项目', categories: ['热门开源项目 (10k+ Stars)', 'AI 相关开源项目', '实用工具开源项目'] },
        { section: '📖 技术教程', categories: ['入门教程', '进阶教程', '专题教程'] },
        { section: '💰 AI 副业与创业', categories: ['副业实践', '创业指南'] },
        { section: '🎨 AI 创作工具', categories: ['视频制作', '音频处理', '图像处理'] },
        { section: '🛠️ 实用工具', categories: ['效率工具', '开发工具'] },
        { section: '📱 自媒体运营', categories: ['内容创作', '平台工具'] },
        { section: '🎓 学习资源', categories: ['课程推荐', '学习路线'] },
        { section: '🌟 行业动态', categories: ['AI 新闻', '技术趋势'] },
        { section: '💭 观点思考', categories: ['技术思考', '职业发展'] },
        { section: '🎁 福利资源', categories: ['免费资源', '工具合集'] },
    ];

    // 按顺序生成分类内容
    for (const { section, categories } of categoryOrder) {
        md += `### ${section}\n\n`;

        for (const category of categories) {
            const articles = categorized[category] || [];
            md += `#### ${category}\n`;

            if (articles.length === 0) {
                md += `- 暂无文章\n\n`;
            } else {
                for (const article of articles) {
                    md += `- [${article.title}](${article.link}) - 发布日期: ${article.publishDate}\n`;
                }
                md += `\n`;
            }
        }

        md += `---\n\n`;
    }

    // 添加"其他"分类
    if (categorized['其他'] && categorized['其他'].length > 0) {
        md += `### 📦 其他\n\n`;
        for (const article of categorized['其他']) {
            md += `- [${article.title}](${article.link}) - 发布日期: ${article.publishDate}\n`;
        }
        md += `\n---\n\n`;
    }

    // 添加快速查找和使用说明
    md += `## 🔍 快速查找

### 按发布时间查找
- [2025年文章](#)
- [2024年文章](#)

### 按关键词查找
使用 \`Ctrl+F\` 搜索关键词快速定位相关文章

---

## 📝 使用说明

### 自动化同步工具

本文档支持自动化同步!使用以下命令可以从微信公众号后台自动获取并分类所有文章:

\`\`\`bash
npm run sync-articles
\`\`\`

详细使用说明请查看: [tools/README-sync.md](tools/README-sync.md)

### 手动添加文章

1. 找到对应的分类
2. 按照以下格式添加:
   \`\`\`markdown
   - [文章标题](公众号文章链接) - 发布日期: YYYY-MM-DD
   \`\`\`

### 文章链接获取方式

1. 在微信公众号后台复制文章链接
2. 或在已发布文章中点击"复制链接"
3. 粘贴到对应位置

---

## 📊 分类统计

`;

    // 生成分类统计
    const stats = Object.entries(categorized)
        .map(([category, articles]) => ({ category, count: articles.length }))
        .sort((a, b) => b.count - a.count);

    for (const { category, count } of stats) {
        md += `- **${category}**: ${count} 篇\n`;
    }

    md += `\n---\n\n## 📊 更新日志

### ${dateStr}
- 自动生成文章分类目录
- 总计 ${articles.length} 篇文章
- ${Object.keys(categorized).length} 个分类

---

## 🔗 相关链接

- [微信公众号: 太阳鸟的AI宝藏库](#)
- [GitHub 仓库](https://github.com/niupTang/niupTang)
- [博客主页](https://www.niuptang.online)
- [自动化工具说明](tools/README-sync.md)

---

<div align="center">

**持续更新中... 欢迎关注公众号获取最新内容！**

Made with ❤️ by 太阳鸟

</div>
`;

    return md;
}

/**
 * 保存 Markdown 文件
 */
function saveMarkdown(content) {
    try {
        fs.writeFileSync(CONFIG.outputMd, content, 'utf-8');
        console.log(`✅ 文档已保存: ${CONFIG.outputMd}`);
    } catch (error) {
        console.error('❌ 保存文档失败:', error.message);
    }
}

/**
 * 主函数
 */
function main() {
    console.log('='.repeat(60));
    console.log('公众号文章分类目录生成器');
    console.log('='.repeat(60));
    console.log('');

    // 检查 JSON 文件是否存在
    if (!fs.existsSync(CONFIG.inputJson)) {
        console.error(`❌ 错误: 找不到文件 ${CONFIG.inputJson}`);
        console.log('\n请先运行以下命令获取文章数据:');
        console.log('  npm run sync-articles\n');
        return;
    }

    // 读取文章数据
    console.log('📖 正在读取文章数据...');
    const articles = readArticlesJson();

    if (articles.length === 0) {
        console.error('❌ 没有找到任何文章数据');
        return;
    }

    console.log(`✅ 成功读取 ${articles.length} 篇文章\n`);

    // 分类整理
    console.log('🔄 正在进行智能分类...');
    const categorized = organizeArticlesByCategory(articles);
    console.log(`✅ 完成分类,共 ${Object.keys(categorized).length} 个分类\n`);

    // 显示分类统计
    console.log('📊 分类统计:');
    const stats = Object.entries(categorized)
        .map(([category, articles]) => ({ category, count: articles.length }))
        .sort((a, b) => b.count - a.count);

    for (const { category, count } of stats) {
        console.log(`  ${category}: ${count} 篇`);
    }
    console.log('');

    // 生成 Markdown
    console.log('📝 正在生成 Markdown 文档...');
    const markdown = generateMarkdown(articles, categorized);

    // 保存文件
    saveMarkdown(markdown);

    console.log('\n' + '='.repeat(60));
    console.log('✅ 生成完成!');
    console.log('='.repeat(60));
    console.log(`文档位置: ${CONFIG.outputMd}`);
    console.log('');
}

// 运行主函数
if (require.main === module) {
    main();
}

module.exports = {
    categorizeArticle,
    organizeArticlesByCategory,
    generateMarkdown,
};
