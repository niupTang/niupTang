const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const postsDir = path.join(__dirname, 'source', '_posts');

// 读取所有 markdown 文件
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

let fixedCount = 0;
let errorFiles = [];

files.forEach(file => {
    const filePath = path.join(postsDir, file);
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // 检查是否有 front matter
        if (!content.startsWith('---')) {
            return;
        }

        // 提取 front matter
        const matches = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        if (!matches) {
            return;
        }

        let frontMatter = matches[1];
        const bodyContent = matches[2];

        // 尝试解析 YAML
        try {
            yaml.load(frontMatter);
            // 如果能正常解析，跳过
            return;
        } catch (e) {
            console.log(`修复文件: ${file}`);

            // 修复常见问题
            // 1. 标题中的冒号需要用引号包裹
            frontMatter = frontMatter.replace(/^title:\s*(.+)$/m, (match, title) => {
                // 如果标题包含冒号但没有被引号包裹
                if (title.includes(':') && !title.startsWith('"') && !title.startsWith("'")) {
                    return `title: "${title.replace(/"/g, '\\"')}"`;
                }
                // 如果标题有引号但格式不对
                if (title.startsWith('"') && !title.endsWith('"')) {
                    // 移除所有引号，重新包裹
                    const cleanTitle = title.replace(/"/g, '');
                    return `title: "${cleanTitle}"`;
                }
                return match;
            });

            // 2. permalink 中的冒号也需要处理
            frontMatter = frontMatter.replace(/^permalink:\s*(.+)$/m, (match, permalink) => {
                if (permalink.includes(':') && !permalink.startsWith('"') && !permalink.startsWith("'")) {
                    return `permalink: "${permalink.replace(/"/g, '\\"')}"`;
                }
                return match;
            });

            // 重新组合内容
            const newContent = `---\n${frontMatter}\n---\n${bodyContent}`;

            // 再次验证
            try {
                const testMatches = newContent.match(/^---\n([\s\S]*?)\n---\n/);
                if (testMatches) {
                    yaml.load(testMatches[1]);
                    // 验证通过，写入文件
                    fs.writeFileSync(filePath, newContent, 'utf8');
                    fixedCount++;
                    console.log(`✓ 修复成功: ${file}`);
                }
            } catch (e2) {
                errorFiles.push({ file, error: e2.message });
                console.log(`✗ 修复失败: ${file} - ${e2.message}`);
            }
        }
    } catch (error) {
        console.error(`处理文件失败 ${file}:`, error.message);
    }
});

console.log(`\n总计修复: ${fixedCount} 个文件`);
if (errorFiles.length > 0) {
    console.log(`\n仍有错误的文件 (${errorFiles.length}):`);
    errorFiles.forEach(({ file, error }) => {
        console.log(`  - ${file}: ${error}`);
    });
}
