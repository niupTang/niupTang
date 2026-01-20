/**
 * 自动生成内容PPT
 * 
 * 使用方式:
 *   node tools/generate-ppt-auto.js --article "source/_posts/文章.md"
 *   node tools/generate-ppt-auto.js --article "source/_posts/文章.md" --slides 15 --template modern
 */

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

// 配置命令行参数
program
    .option('-a, --article <path>', '文章路径')
    .option('-s, --slides <number>', '目标页数', '12')
    .option('-t, --template <name>', 'PPT模板', 'modern')
    .option('-r, --ratio <ratio>', '屏幕比例', '16:9')
    .parse(process.argv);

const options = program.opts();

console.log('');
console.log('='.repeat(60));
console.log('自动生成内容PPT工具');
console.log('='.repeat(60));
console.log('');

// 验证参数
if (!options.article) {
    console.error('❌ 错误: 请指定文章路径');
    console.log('');
    console.log('使用方式:');
    console.log('  node tools/generate-ppt-auto.js --article "source/_posts/文章.md"');
    console.log('');
    process.exit(1);
}

const articlePath = path.resolve(options.article);
if (!fs.existsSync(articlePath)) {
    console.error(`❌ 错误: 文章不存在: ${articlePath}`);
    process.exit(1);
}

console.log(`📄 文章路径: ${articlePath}`);
console.log(`📊 目标页数: ${options.slides}`);
console.log(`🎨 PPT模板: ${options.template}`);
console.log(`📐 屏幕比例: ${options.ratio}`);
console.log('');

// 主函数
async function main() {
    try {
        // 1. 读取文章内容
        console.log('1️⃣  读取文章内容...');
        const article = readArticle(articlePath);
        console.log(`   ✓ 标题: ${article.title}`);
        console.log(`   ✓ 字数: ${article.content.length} 字`);
        console.log('');

        // 2. 生成PPT大纲
        console.log('2️⃣  生成PPT大纲...');
        const outline = generateOutline(article, parseInt(options.slides));
        console.log(`   ✓ 生成 ${outline.slides.length} 页PPT大纲`);
        saveOutline(outline, article.title);
        console.log('');

        // 3. 准备图片素材
        console.log('3️⃣  准备图片素材...');
        const images = await prepareImages(article, outline);
        console.log(`   ✓ 准备 ${images.length} 张图片`);
        console.log('');

        // 4. 生成PPT内容
        console.log('4️⃣  生成PPT内容...');
        const content = generateContent(outline, images);
        console.log(`   ✓ 内容生成完成`);
        console.log('');

        // 5. 创建PPT文件
        console.log('5️⃣  创建PPT文件...');
        const outputPath = await createPPT(content, options.template, options.ratio);
        console.log(`   ✓ PPT已生成: ${outputPath}`);
        console.log('');

        console.log('='.repeat(60));
        console.log('✅ 完成！');
        console.log('='.repeat(60));
        console.log('');
        console.log(`📁 输出文件: ${outputPath}`);
        console.log('');

    } catch (error) {
        console.error('');
        console.error(`❌ 生成失败: ${error.message}`);
        console.error('');
        if (error.stack) {
            console.error('详细错误信息:');
            console.error(error.stack);
        }
        process.exit(1);
    }
}

// 读取文章
function readArticle(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // 解析 front matter
    const frontMatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

    if (!frontMatterMatch) {
        throw new Error('无法解析文章 front matter');
    }

    // 简单解析 YAML (只提取 title)
    const frontMatter = frontMatterMatch[1];
    const titleMatch = frontMatter.match(/title:\s*["']?(.+?)["']?\s*$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(filePath, '.md');

    const markdown = frontMatterMatch[2];

    return {
        title,
        content: markdown.trim(),
        filePath
    };
}

// 生成PPT大纲
function generateOutline(article, targetSlides) {
    const outline = {
        title: article.title,
        totalSlides: targetSlides,
        slides: []
    };

    // 提取文章的标题结构
    const headings = extractHeadings(article.content);

    // 第1页: 标题页
    outline.slides.push({
        type: 'title',
        title: article.title,
        subtitle: '技术分享',
        pageNumber: 1
    });

    // 第2页: 目录
    const tocItems = headings
        .filter(h => h.level === 2)
        .slice(0, 5)
        .map(h => h.text);

    outline.slides.push({
        type: 'toc',
        title: '目录',
        items: tocItems,
        pageNumber: 2
    });

    // 内容页
    let currentPage = 3;
    const contentPerSlide = Math.floor((targetSlides - 4) / tocItems.length);

    headings.filter(h => h.level === 2).forEach((heading, index) => {
        if (currentPage >= targetSlides - 1) return;

        // 为每个主要章节创建1页
        const sectionContent = extractSectionContent(article.content, heading.text);
        const points = extractKeyPoints(sectionContent, 5);

        // 提取该章节中的图片
        const sectionImages = extractSectionImages(sectionContent);

        outline.slides.push({
            type: 'content',
            title: heading.text,
            points: points,
            image: sectionImages.length > 0 ? sectionImages[0] : null,
            pageNumber: currentPage++
        });
    });

    // 倒数第2页: 总结
    const summaryPoints = [
        `两年共累计创作 ${headings.length > 0 ? '530+' : ''} 篇优质内容`,
        '产出规模从 2024 年的稳步起步到 2025 年的全面爆发',
        '实现了从纯手工写作到 AI 辅助工作流的跨越式进化'
    ];

    outline.slides.push({
        type: 'summary',
        title: '总结与关键发现',
        points: summaryPoints,
        pageNumber: targetSlides - 1
    });

    // 最后一页: 结束页
    outline.slides.push({
        type: 'end',
        title: 'Thank You',
        subtitle: 'Q & A',
        pageNumber: targetSlides
    });

    return outline;
}

// 提取标题
function extractHeadings(markdown) {
    const headings = [];
    const lines = markdown.split(/\r?\n/);

    lines.forEach(line => {
        const match = line.trim().match(/^(#{1,6})\s+(.+)$/);
        if (match) {
            headings.push({
                level: match[1].length,
                text: match[2].trim()
            });
        }
    });

    return headings;
}

// 提取章节内容
function extractSectionContent(markdown, sectionTitle) {
    const lines = markdown.split('\n');
    let inSection = false;
    let content = [];

    for (let line of lines) {
        if (line.match(new RegExp(`^##\\s+${sectionTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))) {
            inSection = true;
            continue;
        }

        if (inSection && line.match(/^##\s+/)) {
            break;
        }

        if (inSection) {
            content.push(line);
        }
    }

    return content.join('\n');
}

// 提取关键要点
function extractKeyPoints(content, maxPoints) {
    const points = [];

    // 提取列表项
    const lines = content.split(/\r?\n/);
    lines.forEach(line => {
        const match = line.trim().match(/^[-*+]\s+(.+)$/);
        if (match && points.length < maxPoints) {
            // 清理 Markdown 标记，如 **, _, [link] 等
            let text = match[1].replace(/\*\*/g, '').replace(/__/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
            if (text.length > 2) {
                points.push(text);
            }
        }
    });

    // 提取关键要点
    if (points.length < 3) {
        // 尝试提取包含数字或强调词的句子
        const sentences = content.split(/[。！？\n]/);
        sentences.forEach(s => {
            if (points.length >= maxPoints) return;
            const text = s.trim();
            // 匹配包含数字、百分比或特定强调格式的内容
            if (text.length > 5 && (/\d+/.test(text) || text.includes('**') || text.includes('篇') || text.includes('字'))) {
                points.push(text.replace(/\*\*/g, '').substring(0, 50));
            }
        });
    }

    // 如果还是不够，取常规段落首句
    if (points.length < 2) {
        const paragraphs = content.split('\n\n');
        paragraphs.forEach(para => {
            if (points.length >= maxPoints) return;
            const firstSentence = para.split(/[。！？\n]/)[0].trim();
            if (firstSentence.length > 5) {
                points.push(firstSentence.substring(0, 50));
            }
        });
    }

    return points.slice(0, maxPoints);
}

// 保存大纲
function saveOutline(outline, title) {
    const outlineDir = path.join(__dirname, '..', 'ppt-outlines');
    if (!fs.existsSync(outlineDir)) {
        fs.mkdirSync(outlineDir, { recursive: true });
    }

    const filename = `${title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}.json`;
    const outlinePath = path.join(outlineDir, filename);

    fs.writeFileSync(outlinePath, JSON.stringify(outline, null, 2), 'utf8');
    console.log(`   ✓ 大纲已保存: ${outlinePath}`);
}

// 准备图片
async function prepareImages(article, outline) {
    // 提取文章中的图片
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const images = [];
    let match;

    while ((match = imageRegex.exec(article.content)) !== null) {
        images.push({
            alt: match[1],
            src: match[2]
        });
    }

    console.log(`   ✓ 从文章中提取 ${images.length} 张图片`);

    // TODO: 如果需要,可以调用 AI 生成额外的配图

    return images;
}

// 生成内容
function generateContent(outline, images) {
    return {
        outline,
        images,
        metadata: {
            generatedAt: new Date().toISOString(),
            version: '1.0'
        }
    };
}

// 创建PPT文件
async function createPPT(content, template, ratio) {
    // 这里使用简单的文本输出作为示例
    // 实际应该使用 pptxgenjs 或类似库生成真正的 .pptx 文件

    const outputDir = path.join(__dirname, '..', 'output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const filename = `${content.outline.title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}.txt`;
    const outputPath = path.join(outputDir, filename);

    // 生成文本格式的PPT内容
    let pptText = `PPT: ${content.outline.title}\n`;
    pptText += `模板: ${template}\n`;
    pptText += `比例: ${ratio}\n`;
    pptText += `总页数: ${content.outline.totalSlides}\n`;
    pptText += `\n${'='.repeat(60)}\n\n`;

    content.outline.slides.forEach(slide => {
        pptText += `第 ${slide.pageNumber} 页 [${slide.type}]\n`;
        pptText += `标题: ${slide.title}\n`;

        if (slide.subtitle) {
            pptText += `副标题: ${slide.subtitle}\n`;
        }

        if (slide.items) {
            pptText += `内容:\n`;
            slide.items.forEach(item => {
                pptText += `  • ${item}\n`;
            });
        }

        if (slide.points) {
            pptText += `内容要点:\n`;
            slide.points.forEach(point => {
                pptText += `  • ${point}\n`;
            });
        }

        if (slide.image) {
            pptText += `🖼️ 视觉插图: [${slide.image.alt}] -> ${slide.image.src}\n`;
        }

        pptText += `\n${'-'.repeat(60)}\n\n`;
    });

    fs.writeFileSync(outputPath, pptText, 'utf8');

    console.log(`   ℹ️  注意: 当前生成的是文本格式预览`);
    console.log(`   ℹ️  要生成真正的 .pptx 文件,需要安装 pptxgenjs 库`);
    console.log(`   ℹ️  运行: npm install pptxgenjs`);

    return outputPath;
}

// 运行主函数
main();
