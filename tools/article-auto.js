#!/usr/bin/env node

/**
 * 自动化文章生成主脚本
 * 整合所有步骤：素材获取 → 大纲生成 → 图片获取 → 文章生成 → 微信发布
 */

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// 配置
const CONFIG = {
    materialsDir: path.join(__dirname, '../materials'),
    outlinesDir: path.join(__dirname, '../outlines'),
    imagesDir: path.join(__dirname, '../images'),
    postsDir: path.join(__dirname, '../source/_posts'),
};

// 确保目录存在
Object.values(CONFIG).forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

program
    .name('article-auto')
    .description('自动化文章生成并发布到微信公众号')
    .requiredOption('-t, --topic <topic>', '文章主题')
    .option('-p, --publish', '是否直接发布（默认只创建草稿）', false)
    .option('-i, --images <number>', '图片数量', '5')
    .option('-s, --style <style>', '文章风格（默认使用历史风格）', 'default')
    .parse(process.argv);

const options = program.opts();

console.log('🚀 开始自动化文章生成流程...\n');
console.log(`📝 主题: ${options.topic}`);
console.log(`🖼️  图片数量: ${options.images}`);
console.log(`📤 发布模式: ${options.publish ? '直接发布' : '创建草稿'}\n`);

async function main() {
    try {
        const topic = options.topic;
        const safeTopicName = topic.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-');

        // 步骤 1: 获取素材
        console.log('📚 步骤 1/5: 从网上获取文章相关素材...');
        const materialsFile = path.join(CONFIG.materialsDir, `${safeTopicName}.json`);
        execSync(`node tools/fetch-article-materials.js --topic "${topic}" --output "${materialsFile}"`, {
            stdio: 'inherit'
        });
        console.log(`✅ 素材已保存到: ${materialsFile}\n`);

        // 步骤 2: 生成大纲
        console.log('📋 步骤 2/5: 根据素材生成文章大纲...');
        const outlineFile = path.join(CONFIG.outlinesDir, `${safeTopicName}.json`);
        execSync(`node tools/generate-article-outline.js --topic "${topic}" --materials "${materialsFile}" --output "${outlineFile}" --style "${options.style}"`, {
            stdio: 'inherit'
        });
        console.log(`✅ 大纲已保存到: ${outlineFile}\n`);

        // 步骤 3: 获取图片
        console.log('🖼️  步骤 3/5: 从网上获取相关图片...');
        const imagesDir = path.join(CONFIG.imagesDir, safeTopicName);
        execSync(`node tools/fetch-article-images.js --outline "${outlineFile}" --output "${imagesDir}" --count ${options.images}`, {
            stdio: 'inherit'
        });
        console.log(`✅ 图片已保存到: ${imagesDir}\n`);

        // 步骤 4: 生成完整文章
        console.log('✍️  步骤 4/5: 生成完整文章...');
        const articleFile = path.join(CONFIG.postsDir, `${safeTopicName}.md`);
        execSync(`node tools/generate-full-article.js --outline "${outlineFile}" --materials "${materialsFile}" --images "${imagesDir}" --output "${articleFile}"`, {
            stdio: 'inherit'
        });
        console.log(`✅ 文章已保存到: ${articleFile}\n`);

        // 步骤 5: 发布到微信公众号
        console.log('📤 步骤 5/5: 发布到微信公众号...');
        const publishMode = options.publish ? '--publish' : '--draft';
        execSync(`node tools/publish-to-wechat.js --article "${articleFile}" ${publishMode}`, {
            stdio: 'inherit'
        });
        console.log(`✅ ${options.publish ? '文章已发布' : '草稿已创建'}\n`);

        console.log('🎉 所有步骤完成！');
        console.log(`\n📄 文章文件: ${articleFile}`);
        console.log(`🖼️  图片目录: ${imagesDir}`);

    } catch (error) {
        console.error('\n❌ 错误:', error.message);
        process.exit(1);
    }
}

main();
