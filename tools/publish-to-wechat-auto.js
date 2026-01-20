#!/usr/bin/env node

/**
 * 发布文章到微信公众号
 * 集成现有的微信发布工具
 */

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

program
    .requiredOption('-a, --article <file>', '文章文件路径')
    .option('-p, --publish', '直接发布（默认创建草稿）', false)
    .option('-d, --draft', '创建草稿', true)
    .parse(process.argv);

const options = program.opts();

async function main() {
    console.log(`\n📤 准备发布到微信公众号\n`);

    if (!fs.existsSync(options.article)) {
        throw new Error(`文章文件不存在: ${options.article}`);
    }

    console.log(`📄 文章: ${options.article}`);
    console.log(`📌 模式: ${options.publish ? '直接发布' : '创建草稿'}\n`);

    // 检查是否存在现有的微信发布脚本
    const publishScript = path.join(__dirname, 'publish-to-wechat.js');

    if (fs.existsSync(publishScript)) {
        console.log('使用现有的微信发布脚本...');

        try {
            execSync(`node "${publishScript}" "${options.article}"`, {
                stdio: 'inherit'
            });
        } catch (error) {
            console.error('发布失败:', error.message);
            throw error;
        }
    } else {
        console.log('⚠️  未找到现有的微信发布脚本');
        console.log('\n请执行以下步骤手动发布：');
        console.log('1. 打开微信公众号后台');
        console.log('2. 进入"素材管理" → "新建图文"');
        console.log('3. 复制文章内容并粘贴');
        console.log('4. 上传文章中的图片');
        console.log('5. 保存草稿或直接发布');
        console.log(`\n文章路径: ${options.article}`);

        // 提供一些有用的信息
        const content = fs.readFileSync(options.article, 'utf8');
        const imageMatches = content.match(/!\[.*?\]\((.*?)\)/g) || [];

        if (imageMatches.length > 0) {
            console.log(`\n📷 文章包含 ${imageMatches.length} 张图片：`);
            imageMatches.forEach((match, i) => {
                const imagePath = match.match(/\((.*?)\)/)[1];
                console.log(`  ${i + 1}. ${imagePath}`);
            });
        }
    }

    console.log(`\n✅ 完成！`);
}

main().catch(error => {
    console.error('\n❌ 错误:', error.message);
    process.exit(1);
});
