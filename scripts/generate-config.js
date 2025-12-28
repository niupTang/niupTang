#!/usr/bin/env node

/**
 * Vercel 构建配置生成脚本
 * 
 * 此脚本在 Vercel 构建时运行，从环境变量生成 _config.yml
 * 这样可以避免将敏感信息提交到 Git
 */

const fs = require('fs');
const path = require('path');

// 读取配置模板
const exampleConfigPath = path.join(__dirname, '..', '_config.example.yml');
const configPath = path.join(__dirname, '..', '_config.yml');

console.log('🔧 开始生成 Vercel 配置文件...');

// 检查是否在 Vercel 环境中
const isVercel = process.env.VERCEL === '1';

if (isVercel) {
    console.log('✅ 检测到 Vercel 环境');

    // 读取模板文件
    let configContent = fs.readFileSync(exampleConfigPath, 'utf-8');

    // 从环境变量读取敏感信息
    const appId = process.env.WECHAT_APP_ID || 'YOUR_APP_ID_HERE';
    const appSecret = process.env.WECHAT_APP_SECRET || 'YOUR_APP_SECRET_HERE';
    const proxyUrl = process.env.WECHAT_PROXY_URL || 'http://localhost:8789';

    // 替换占位符
    configContent = configContent
        .replace('YOUR_APP_ID_HERE', appId)
        .replace('YOUR_APP_SECRET_HERE', appSecret)
        .replace('http://localhost:8789', proxyUrl);

    // 在 Vercel 上禁用微信图床（因为需要本地代理）
    configContent = configContent.replace('enable: true', 'enable: false');

    // 写入配置文件
    fs.writeFileSync(configPath, configContent, 'utf-8');

    console.log('✅ 配置文件已生成');
    console.log('📝 微信图床已禁用（Vercel 环境不支持本地代理）');
} else {
    console.log('ℹ️  非 Vercel 环境，跳过配置生成');
    console.log('💡 请确保本地已有 _config.yml 文件');

    // 检查本地是否有配置文件
    if (!fs.existsSync(configPath)) {
        console.warn('⚠️  警告: 未找到 _config.yml');
        console.warn('💡 请运行: cp _config.example.yml _config.yml');
        console.warn('💡 然后编辑 _config.yml 填入真实的配置信息');
        process.exit(1);
    }
}

console.log('✅ 配置检查完成');
