#!/usr/bin/env node

/**
 * Git 提交前安全检查脚本
 * 
 * 检查是否有敏感信息即将被提交到 Git
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 开始安全检查...\n');

// 敏感文件列表
const sensitiveFiles = [
    '_config.yml',
    'upload-annual-summary.js',
    'test-upload.js',
    'wechat-articles.json',
    '2025-stats.json'
];

// 敏感关键词
const sensitivePatterns = [
    /wx[a-z0-9]{16}/i,  // 微信 AppID 格式
    /[a-f0-9]{32}/i,    // 32位十六进制（可能是 AppSecret）
];

let hasIssues = false;

// 检查 1: 确认敏感文件在 .gitignore 中
console.log('📋 检查 .gitignore 配置...');
const gitignorePath = path.join(__dirname, '..', '.gitignore');
const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');

sensitiveFiles.forEach(file => {
    if (!gitignoreContent.includes(file)) {
        console.error(`❌ 警告: ${file} 未在 .gitignore 中！`);
        hasIssues = true;
    } else {
        console.log(`✅ ${file} 已在 .gitignore 中`);
    }
});

// 检查 2: 查看即将提交的文件
console.log('\n📦 检查即将提交的文件...');
try {
    const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
        .split('\n')
        .filter(f => f.trim());

    if (stagedFiles.length === 0) {
        console.log('ℹ️  没有文件被暂存');
    } else {
        console.log(`📝 发现 ${stagedFiles.length} 个暂存文件:\n`);

        stagedFiles.forEach(file => {
            // 检查是否是敏感文件
            if (sensitiveFiles.some(sf => file.includes(sf))) {
                console.error(`❌ 危险: 敏感文件 ${file} 即将被提交！`);
                hasIssues = true;
            } else {
                console.log(`   ✓ ${file}`);
            }
        });
    }
} catch (error) {
    console.log('ℹ️  无法获取暂存文件列表（可能还未初始化 Git）');
}

// 检查 3: 扫描 _config.example.yml 中是否有真实密钥
console.log('\n🔐 检查配置模板文件...');
const exampleConfigPath = path.join(__dirname, '..', '_config.example.yml');
if (fs.existsSync(exampleConfigPath)) {
    const exampleContent = fs.readFileSync(exampleConfigPath, 'utf-8');

    sensitivePatterns.forEach((pattern, index) => {
        const matches = exampleContent.match(pattern);
        if (matches && !matches[0].includes('YOUR_')) {
            console.error(`❌ 警告: _config.example.yml 中可能包含真实密钥: ${matches[0]}`);
            hasIssues = true;
        }
    });

    if (!hasIssues) {
        console.log('✅ _config.example.yml 看起来安全');
    }
} else {
    console.warn('⚠️  未找到 _config.example.yml');
}

// 检查 4: 验证 scripts 目录下的文件
console.log('\n📂 检查 scripts 目录...');
const scriptsDir = path.join(__dirname);
if (fs.existsSync(scriptsDir)) {
    const scriptFiles = fs.readdirSync(scriptsDir).filter(f => f.endsWith('.js'));

    scriptFiles.forEach(file => {
        const filePath = path.join(scriptsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        sensitivePatterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches && !content.includes('process.env') && !content.includes('YOUR_')) {
                console.warn(`⚠️  ${file} 中可能包含硬编码的密钥`);
            }
        });
    });

    console.log(`✅ 检查了 ${scriptFiles.length} 个脚本文件`);
}

// 总结
console.log('\n' + '='.repeat(50));
if (hasIssues) {
    console.error('❌ 发现安全问题！请修复后再提交。\n');
    console.log('💡 建议操作:');
    console.log('   1. 运行: git rm --cached <敏感文件>');
    console.log('   2. 确保敏感文件在 .gitignore 中');
    console.log('   3. 检查 _config.example.yml 中没有真实密钥');
    process.exit(1);
} else {
    console.log('✅ 安全检查通过！可以安全提交。\n');
    console.log('💡 下一步:');
    console.log('   git commit -m "your message"');
    console.log('   git push origin main');
}
