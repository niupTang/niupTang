#!/usr/bin/env node

/**
 * 生成完整文章
 * 基于大纲、素材和图片生成完整的 Markdown 文章
 */

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yaml = require('js-yaml');

program
    .requiredOption('-l, --outline <file>', '大纲文件路径')
    .requiredOption('-m, --materials <file>', '素材文件路径')
    .requiredOption('-i, --images <dir>', '图片目录')
    .requiredOption('-o, --output <file>', '输出文章文件路径')
    .parse(process.argv);

const options = program.opts();

// 读取配置
const configPath = path.join(__dirname, '../_config.yml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

async function generateArticleContent(outline, materials, images) {
    console.log('使用 AI 生成完整文章内容...');

    const apiKey = config.openai_api_key || config.anthropic_api_key || config.deepseek_api_key;
    if (!apiKey) {
        throw new Error('未配置 AI API Key');
    }

    const prompt = `你是一个专业的技术文章写作助手。请根据以下信息生成一篇完整的技术文章：

**文章大纲**:
${JSON.stringify(outline, null, 2)}

**参考素材**:
${JSON.stringify(materials, null, 2)}

**可用图片**:
${images.map((img, i) => `${i + 1}. ${img.filename} - ${img.description || '无描述'}`).join('\n')}

**写作要求**:
1. 使用 Markdown 格式
2. 标题吸引眼球，包含数字和关键词
3. 使用 Emoji 增强可读性（🎯、✅、❌、💡等）
4. 结构清晰，分章节详细讲解
5. 包含代码示例（使用 \`\`\`语言 代码块）
6. 提供实战案例
7. 常见问题解答
8. 引导用户互动（点赞、评论、转发）
9. 在合适的位置插入图片（使用 ![描述](./images/image-1.jpg) 格式）

请生成完整的文章内容（不包含 Front Matter，只需要正文）。`;

    try {
        let response;

        if (config.openai_api_key) {
            response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-4-turbo-preview',
                    messages: [
                        { role: 'system', content: '你是一个专业的技术文章写作助手，擅长写作吸引人的技术博客。' },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: 8000
                },
                {
                    headers: {
                        'Authorization': `Bearer ${config.openai_api_key}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            return response.data.choices[0].message.content;

        } else if (config.anthropic_api_key) {
            response = await axios.post(
                'https://api.anthropic.com/v1/messages',
                {
                    model: 'claude-3-5-sonnet-20241022',
                    max_tokens: 8000,
                    messages: [
                        { role: 'user', content: prompt }
                    ]
                },
                {
                    headers: {
                        'x-api-key': config.anthropic_api_key,
                        'anthropic-version': '2023-06-01',
                        'Content-Type': 'application/json'
                    }
                }
            );

            return response.data.content[0].text;
        }

    } catch (error) {
        console.error('AI API 错误:', error.response?.data || error.message);
        throw error;
    }
}

function generateFrontMatter(outline) {
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 19).replace('T', ' ');

    return `---
title: "${outline.title}"
permalink: ${outline.permalink}
date: ${dateStr}
tags:
${outline.tags.map(tag => `  - ${tag}`).join('\n')}
categories:
  - 公众号文章
---

`;
}

async function main() {
    console.log(`\n✍️  开始生成完整文章\n`);

    // 读取大纲
    const outline = JSON.parse(fs.readFileSync(options.outline, 'utf8'));

    // 读取素材
    const materials = JSON.parse(fs.readFileSync(options.materials, 'utf8'));

    // 读取图片信息
    const imagesInfoPath = path.join(options.images, 'images-info.json');
    let images = [];
    if (fs.existsSync(imagesInfoPath)) {
        const imagesInfo = JSON.parse(fs.readFileSync(imagesInfoPath, 'utf8'));
        images = imagesInfo.images || [];
    }

    // 生成文章内容
    const content = await generateArticleContent(outline, materials, images);

    // 生成 Front Matter
    const frontMatter = generateFrontMatter(outline);

    // 组合完整文章
    const fullArticle = frontMatter + content;

    // 保存文章
    fs.writeFileSync(options.output, fullArticle, 'utf8');

    console.log(`\n✅ 文章生成完成！`);
    console.log(`📁 保存位置: ${options.output}`);
    console.log(`📝 标题: ${outline.title}`);
    console.log(`📊 字数: ${content.length} 字符`);
}

main().catch(error => {
    console.error('\n❌ 错误:', error.message);
    process.exit(1);
});
