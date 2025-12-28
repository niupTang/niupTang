const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'source', '_posts');

// 读取所有 markdown 文件
function getAllMarkdownFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files.push(...getAllMarkdownFiles(fullPath));
        } else if (item.isFile() && item.name.endsWith('.md')) {
            files.push(fullPath);
        }
    }

    return files;
}

// 检查并修复文件
function checkAndFixFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // 检查是否有 Front Matter
    if (lines[0].trim() !== '---') {
        console.log(`⚠️  ${path.basename(filePath)}: 缺少 Front Matter`);
        return;
    }

    // 查找 Front Matter 结束位置
    let endIndex = -1;
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '---') {
            endIndex = i;
            break;
        }
    }

    if (endIndex === -1) {
        console.log(`❌ ${path.basename(filePath)}: Front Matter 未正确关闭`);
        return;
    }

    // 提取 Front Matter
    const frontMatter = lines.slice(1, endIndex).join('\n');

    // 检查 title 行
    const titleMatch = frontMatter.match(/^title:\s*(.+)$/m);
    if (!titleMatch) {
        console.log(`⚠️  ${path.basename(filePath)}: 缺少 title`);
        return;
    }

    const title = titleMatch[1].trim();

    // 检查是否需要添加引号
    const needsQuotes = /[：，！？""''（）【】、]/.test(title) && !title.startsWith('"');

    // 检查是否需要添加 permalink (文件名包含特殊字符)
    const fileName = path.basename(filePath, '.md');
    const needsPermalink = /[%！？，、：""''【】（）]/.test(fileName) && !frontMatter.includes('permalink:');

    if (needsQuotes || needsPermalink) {
        let newContent = content;

        if (needsQuotes) {
            // 添加引号
            const quotedTitle = `"${title.replace(/"/g, '')}"`;
            newContent = newContent.replace(
                /^title:\s*(.+)$/m,
                `title: ${quotedTitle}`
            );
            console.log(`✅ ${path.basename(filePath)}: 为 title 添加引号`);
        }

        if (needsPermalink) {
            // 生成 permalink
            const permalink = fileName
                .toLowerCase()
                .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
                .replace(/^-+|-+$/g, '')
                .substring(0, 50);

            // 在 title 后添加 permalink
            newContent = newContent.replace(
                /^(title:.+)$/m,
                `$1\npermalink: ${permalink}`
            );
            console.log(`✅ ${path.basename(filePath)}: 添加 permalink: ${permalink}`);
        }

        fs.writeFileSync(filePath, newContent, 'utf-8');
    } else {
        console.log(`✓ ${path.basename(filePath)}: 格式正常`);
    }
}

// 主函数
function main() {
    console.log('开始检查和修复 Markdown 文件...\n');

    const files = getAllMarkdownFiles(postsDir);
    console.log(`找到 ${files.length} 个 Markdown 文件\n`);

    files.forEach(file => {
        try {
            checkAndFixFile(file);
        } catch (error) {
            console.error(`❌ ${path.basename(file)}: ${error.message}`);
        }
    });

    console.log('\n修复完成！');
}

main();
