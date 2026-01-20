#!/usr/bin/env node

/**
 * 从网上获取文章相关素材
 * 使用 AI 搜索引擎（Perplexity/Tavily）或网络爬虫
 */

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yaml = require('js-yaml');

program
    .requiredOption('-t, --topic <topic>', '文章主题')
    .requiredOption('-o, --output <file>', '输出文件路径')
    .parse(process.argv);

const options = program.opts();

// 读取配置
const configPath = path.join(__dirname, '../_config.yml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

async function searchWithPerplexity(topic) {
    console.log('使用 Perplexity AI 搜索...');

    if (!config.perplexity_api_key) {
        throw new Error('未配置 Perplexity API Key，请在 _config.yml 中添加 perplexity_api_key');
    }

    try {
        const response = await axios.post(
            'https://api.perplexity.ai/chat/completions',
            {
                model: 'llama-3.1-sonar-small-128k-online',
                messages: [
                    {
                        role: 'system',
                        content: '你是一个专业的内容研究助手，帮助收集文章素材。'
                    },
                    {
                        role: 'user',
                        content: `请帮我收集关于"${topic}"的相关信息，包括：
1. 最新动态和趋势
2. 关键数据和统计
3. 专家观点
4. 实际案例
5. 相关技术细节

请以结构化的方式返回这些信息。`
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${config.perplexity_api_key}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return {
            source: 'perplexity',
            topic: topic,
            content: response.data.choices[0].message.content,
            citations: response.data.citations || [],
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Perplexity API 错误:', error.response?.data || error.message);
        throw error;
    }
}

async function searchWithTavily(topic) {
    console.log('使用 Tavily AI 搜索...');

    if (!config.tavily_api_key) {
        throw new Error('未配置 Tavily API Key，请在 _config.yml 中添加 tavily_api_key');
    }

    try {
        const response = await axios.post(
            'https://api.tavily.com/search',
            {
                api_key: config.tavily_api_key,
                query: topic,
                search_depth: 'advanced',
                include_answer: true,
                include_raw_content: false,
                max_results: 10
            }
        );

        return {
            source: 'tavily',
            topic: topic,
            answer: response.data.answer,
            results: response.data.results.map(r => ({
                title: r.title,
                url: r.url,
                content: r.content,
                score: r.score
            })),
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Tavily API 错误:', error.response?.data || error.message);
        throw error;
    }
}

async function searchWithWeb(topic) {
    console.log('使用网络搜索...');

    // 这里可以使用 Google Custom Search API 或其他搜索 API
    // 简化版本：返回模拟数据
    return {
        source: 'web',
        topic: topic,
        note: '请配置 Perplexity 或 Tavily API Key 以获取真实数据',
        suggestions: [
            '访问 GitHub 搜索相关开源项目',
            '查看技术博客和官方文档',
            '搜索相关论文和研究报告',
            '查看社交媒体讨论'
        ],
        timestamp: new Date().toISOString()
    };
}

async function main() {
    console.log(`\n📚 开始收集素材: ${options.topic}\n`);

    let materials;

    // 优先使用 Perplexity，其次 Tavily，最后回退到基础搜索
    if (config.perplexity_api_key) {
        materials = await searchWithPerplexity(options.topic);
    } else if (config.tavily_api_key) {
        materials = await searchWithTavily(options.topic);
    } else {
        console.warn('⚠️  未配置 AI 搜索 API，使用基础搜索模式');
        materials = await searchWithWeb(options.topic);
    }

    // 保存结果
    fs.writeFileSync(
        options.output,
        JSON.stringify(materials, null, 2),
        'utf8'
    );

    console.log(`\n✅ 素材收集完成！`);
    console.log(`📁 保存位置: ${options.output}`);
    console.log(`📊 数据来源: ${materials.source}`);
}

main().catch(error => {
    console.error('\n❌ 错误:', error.message);
    process.exit(1);
});
