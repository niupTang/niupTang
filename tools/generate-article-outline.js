#!/usr/bin/env node

/**
 * 根据素材生成文章大纲
 * 使用 AI 分析素材并生成结构化大纲
 */

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yaml = require('js-yaml');

program
    .requiredOption('-t, --topic <topic>', '文章主题')
    .requiredOption('-m, --materials <file>', '素材文件路径')
    .requiredOption('-o, --output <file>', '输出文件路径')
    .option('-s, --style <style>', '文章风格', 'default')
    .parse(process.argv);

const options = program.opts();

// 读取配置
const configPath = path.join(__dirname, '../_config.yml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

// 分析用户历史文章风格
function analyzeWritingStyle() {
    const postsDir = path.join(__dirname, '../source/_posts');
    const posts = fs.readdirSync(postsDir)
        .filter(f => f.endsWith('.md'))
        .slice(0, 5); // 分析最近 5 篇文章

    if (posts.length === 0) {
        return '技术博客风格，注重实用性和代码示例';
    }

    // 简化版：返回通用风格描述
    return `
参考用户的写作风格特点：
1. 标题吸引眼球，包含数字、关键词
2. 使用大量 Emoji 增强可读性
3. 结构清晰，分章节详细讲解
4. 包含代码示例和实战案例
5. 提供完整的操作步骤
6. 常见问题解答
7. 引导用户互动（点赞、评论、转发）
`;
}

async function generateOutline(topic, materials, style) {
    console.log('使用 AI 生成文章大纲...');

    const apiKey = config.openai_api_key || config.anthropic_api_key || config.deepseek_api_key;
    if (!apiKey) {
        throw new Error('未配置 AI API Key，请在 _config.yml 中添加 openai_api_key 或 anthropic_api_key');
    }

    const writingStyle = analyzeWritingStyle();

    const prompt = `你是一个专业的技术文章写作助手。请根据以下信息生成一篇文章的详细大纲：

**文章主题**: ${topic}

**收集的素材**:
${JSON.stringify(materials, null, 2)}

**写作风格要求**:
${writingStyle}

请生成一个详细的文章大纲，包括：
1. 吸引眼球的标题（包含数字、关键词）
2. 引言（痛点分析）
3. 主体章节（3-5 个，每个章节包含小节）
4. 实战案例或代码示例
5. 常见问题解答（3-5 个）
6. 总结和进阶方向

请以 JSON 格式返回，结构如下：
{
  "title": "文章标题",
  "permalink": "url-friendly-title",
  "tags": ["标签1", "标签2"],
  "sections": [
    {
      "title": "章节标题",
      "subsections": [
        {
          "title": "小节标题",
          "keyPoints": ["要点1", "要点2"],
          "includeCode": true/false,
          "includeImage": true/false
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "问题",
      "answer": "答案要点"
    }
  ]
}`;

    try {
        let response;

        if (config.openai_api_key) {
            response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-4-turbo-preview',
                    messages: [
                        { role: 'system', content: '你是一个专业的技术文章写作助手。' },
                        { role: 'user', content: prompt }
                    ],
                    response_format: { type: 'json_object' }
                },
                {
                    headers: {
                        'Authorization': `Bearer ${config.openai_api_key}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            return JSON.parse(response.data.choices[0].message.content);

        } else if (config.anthropic_api_key) {
            response = await axios.post(
                'https://api.anthropic.com/v1/messages',
                {
                    model: 'claude-3-5-sonnet-20241022',
                    max_tokens: 4096,
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

            const content = response.data.content[0].text;
            // 提取 JSON
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            return JSON.parse(jsonMatch[0]);
        }

    } catch (error) {
        console.error('AI API 错误:', error.response?.data || error.message);
        throw error;
    }
}

async function main() {
    console.log(`\n📋 开始生成文章大纲: ${options.topic}\n`);

    // 读取素材
    const materials = JSON.parse(fs.readFileSync(options.materials, 'utf8'));

    // 生成大纲
    const outline = await generateOutline(options.topic, materials, options.style);

    // 添加元数据
    outline.topic = options.topic;
    outline.materialsFile = options.materials;
    outline.generatedAt = new Date().toISOString();

    // 保存结果
    fs.writeFileSync(
        options.output,
        JSON.stringify(outline, null, 2),
        'utf8'
    );

    console.log(`\n✅ 大纲生成完成！`);
    console.log(`📁 保存位置: ${options.output}`);
    console.log(`📝 标题: ${outline.title}`);
    console.log(`📚 章节数: ${outline.sections?.length || 0}`);
}

main().catch(error => {
    console.error('\n❌ 错误:', error.message);
    process.exit(1);
});
