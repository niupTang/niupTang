/**
 * 微信公众号一键发布脚本
 * 
 * 使用方式:
 *   node scripts/publish-to-wechat.js "source/_posts/文章标题.md"
 *   node scripts/publish-to-wechat.js "source/_posts/文章标题.md" --publish
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const yaml = require('js-yaml');

// 配置
const config = {
    appId: '',
    appSecret: '',
    proxyUrl: 'http://localhost:8789',
    author: '太阳鸟'
};

// 从 _config.yml 加载配置
function loadConfig() {
    try {
        const configPath = path.join(__dirname, '..', '_config.yml');
        const configContent = fs.readFileSync(configPath, 'utf8');
        const hexoConfig = yaml.load(configContent);

        if (hexoConfig.wechat_image) {
            config.appId = hexoConfig.wechat_image.appId || config.appId;
            config.appSecret = hexoConfig.wechat_image.appSecret || config.appSecret;
            config.proxyUrl = hexoConfig.wechat_image.proxyUrl || config.proxyUrl;
        }

        if (hexoConfig.author) {
            config.author = hexoConfig.author;
        }

        console.log('✓ 配置加载成功');
    } catch (error) {
        console.error('✗ 配置加载失败:', error.message);
        process.exit(1);
    }
}

// 解析 Markdown 文章
function parseArticle(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // 分离 front matter 和正文
    const frontMatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

    if (!frontMatterMatch) {
        throw new Error('无法解析文章 front matter');
    }

    const frontMatter = yaml.load(frontMatterMatch[1]);
    const markdown = frontMatterMatch[2];

    return {
        title: frontMatter.title || path.basename(filePath, '.md'),
        date: frontMatter.date,
        tags: frontMatter.tags || [],
        categories: frontMatter.categories || [],
        markdown: markdown.trim()
    };
}

// Markdown 转 HTML（简化版，适合微信公众号）
function markdownToHtml(markdown) {
    let html = markdown;

    // 处理图片（保留原始格式，后续会替换为微信链接）
    // ![alt](url) -> <img src="url" alt="alt">
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;">');

    // 处理链接
    // [text](url) -> <a href="url">text</a>
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // 处理粗体
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // 处理斜体
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // 处理行内代码
    html = html.replace(/`([^`]+)`/g, '<code style="background:#f5f5f5;padding:2px 6px;border-radius:3px;">$1</code>');

    // 处理代码块
    html = html.replace(/```(\w*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre style="background:#f5f5f5;padding:16px;border-radius:8px;overflow-x:auto;"><code>${escapeHtml(code.trim())}</code></pre>`;
    });

    // 处理标题
    html = html.replace(/^### (.+)$/gm, '<h3 style="margin:20px 0 10px;font-size:18px;">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 style="margin:24px 0 12px;font-size:20px;">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1 style="margin:28px 0 14px;font-size:24px;">$1</h1>');

    // 处理引用
    html = html.replace(/^> (.+)$/gm, '<blockquote style="border-left:4px solid #ddd;margin:16px 0;padding:10px 20px;color:#666;">$1</blockquote>');

    // 处理无序列表
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul style="margin:16px 0;padding-left:24px;">$&</ul>');

    // 处理有序列表
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    // 处理段落（简化处理）
    html = html.split(/\r?\n\r?\n/).map(para => {
        para = para.trim();
        if (!para) return '';
        if (para.startsWith('<')) return para; // 已经是 HTML 标签
        return `<p style="margin:16px 0;line-height:1.8;">${para}</p>`;
    }).join('\n');

    // 清理多余的换行
    html = html.replace(/\n+/g, '\n').trim();

    return html;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// 获取 access_token
let accessToken = null;
let tokenExpireTime = 0;

async function getAccessToken() {
    const now = Date.now();
    if (accessToken && now < tokenExpireTime) {
        return accessToken;
    }

    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.appId}&secret=${config.appSecret}`;
    const proxyUrl = `${config.proxyUrl}?url=${encodeURIComponent(url)}`;

    const response = await axios.get(proxyUrl);

    if (response.data.errcode) {
        throw new Error(`获取 access_token 失败: ${response.data.errmsg}`);
    }

    accessToken = response.data.access_token;
    tokenExpireTime = now + (response.data.expires_in - 300) * 1000;

    console.log('✓ 获取 access_token 成功');
    return accessToken;
}

// 上传图片到素材库
async function uploadImage(imagePath) {
    if (!fs.existsSync(imagePath)) {
        throw new Error(`图片不存在: ${imagePath}`);
    }

    const token = await getAccessToken();
    const uploadUrl = `https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=${token}&type=image`;
    const proxyUrl = `${config.proxyUrl}?url=${encodeURIComponent(uploadUrl)}`;

    const form = new FormData();
    form.append('media', fs.createReadStream(imagePath), {
        filename: path.basename(imagePath),
        contentType: getContentType(imagePath)
    });

    const response = await axios.post(proxyUrl, form, {
        headers: { ...form.getHeaders() },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    });

    if (response.data.errcode) {
        throw new Error(`上传图片失败: ${response.data.errmsg}`);
    }

    return {
        mediaId: response.data.media_id,
        url: response.data.url
    };
}

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const types = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.bmp': 'image/bmp',
        '.webp': 'image/webp'
    };
    return types[ext] || 'application/octet-stream';
}

// 处理文章中的图片，返回 { html, firstMediaId }
async function processImages(html, articleDir) {
    const imgRegex = /<img src="([^"]+)"/g;
    let match;
    const uploads = [];
    let firstMediaId = null;

    while ((match = imgRegex.exec(html)) !== null) {
        const imgSrc = match[1];

        // 跳过已经是微信链接的图片
        if (imgSrc.includes('mmbiz.qpic.cn')) {
            continue;
        }

        // 跳过外部链接
        if (imgSrc.startsWith('http://') || imgSrc.startsWith('https://')) {
            continue;
        }

        // 计算图片绝对路径
        let imagePath;
        if (imgSrc.startsWith('/')) {
            imagePath = path.join(__dirname, '..', 'source', imgSrc);
        } else {
            imagePath = path.join(articleDir, imgSrc);
        }

        uploads.push({ original: imgSrc, absolutePath: imagePath });
    }

    // 上传所有图片
    for (let i = 0; i < uploads.length; i++) {
        const item = uploads[i];
        try {
            console.log(`  上传图片: ${path.basename(item.absolutePath)}`);
            const result = await uploadImage(item.absolutePath);
            html = html.replace(new RegExp(`src="${escapeRegExp(item.original)}"`, 'g'), `src="${result.url}"`);
            console.log(`  ✓ 上传成功: ${result.url.substring(0, 50)}...`);

            // 保存第一张图片的 mediaId 作为封面
            if (i === 0) {
                firstMediaId = result.mediaId;
                console.log(`  ✓ 第一张图片将作为封面 (mediaId: ${firstMediaId.substring(0, 20)}...)`);
            }
        } catch (error) {
            console.error(`  ✗ 上传失败: ${error.message}`);
        }
    }

    return { html, firstMediaId };
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 创建草稿
async function createDraft(article, thumbMediaId) {
    const token = await getAccessToken();
    const url = `https://api.weixin.qq.com/cgi-bin/draft/add?access_token=${token}`;
    const proxyUrl = `${config.proxyUrl}?url=${encodeURIComponent(url)}`;

    const data = {
        articles: [{
            title: article.title,
            author: config.author,
            content: article.html,
            thumb_media_id: thumbMediaId,
            need_open_comment: 1,
            only_fans_can_comment: 0
        }]
    };

    const response = await axios.post(proxyUrl, data, {
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.data.errcode) {
        throw new Error(`创建草稿失败: ${response.data.errmsg}`);
    }

    return response.data.media_id;
}

// 发布文章
async function publishDraft(mediaId) {
    const token = await getAccessToken();
    const url = `https://api.weixin.qq.com/cgi-bin/freepublish/submit?access_token=${token}`;
    const proxyUrl = `${config.proxyUrl}?url=${encodeURIComponent(url)}`;

    const response = await axios.post(proxyUrl, { media_id: mediaId }, {
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.data.errcode) {
        throw new Error(`发布失败: ${response.data.errmsg}`);
    }

    return response.data.publish_id;
}

// 主函数
async function main() {
    console.log('');
    console.log('='.repeat(60));
    console.log('微信公众号一键发布工具');
    console.log('='.repeat(60));
    console.log('');

    // 解析命令行参数
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log('使用方式:');
        console.log('  node scripts/publish-to-wechat.js "source/_posts/文章.md"');
        console.log('  node scripts/publish-to-wechat.js "source/_posts/文章.md" --publish');
        console.log('');
        console.log('选项:');
        console.log('  --publish    创建草稿后立即发布');
        process.exit(0);
    }

    const articlePath = args[0];
    const shouldPublish = args.includes('--publish');

    // 加载配置
    loadConfig();

    // 检查文件
    const fullPath = path.resolve(articlePath);
    if (!fs.existsSync(fullPath)) {
        console.error(`✗ 文章不存在: ${fullPath}`);
        process.exit(1);
    }

    console.log(`文章路径: ${fullPath}`);
    console.log('');

    try {
        // 1. 解析文章
        console.log('1. 解析文章...');
        const article = parseArticle(fullPath);
        console.log(`   标题: ${article.title}`);
        console.log('');

        // 2. 转换 HTML
        console.log('2. 转换 Markdown 为 HTML...');
        let html = markdownToHtml(article.markdown);
        console.log(`   HTML 长度: ${html.length} 字符`);
        console.log('');

        // 3. 处理文章图片（同时获取第一张图片作为封面）
        console.log('3. 处理文章图片...');
        const articleDir = path.dirname(fullPath);
        const { html: processedHtml, firstMediaId } = await processImages(html, articleDir);
        html = processedHtml;
        article.html = html;
        console.log('');

        // 4. 准备封面图
        console.log('4. 准备封面图...');
        let thumbMediaId = firstMediaId;

        if (thumbMediaId) {
            console.log(`   ✓ 使用第一张图片作为封面`);
        } else {
            console.log('   ⚠ 文章中没有本地图片，无法自动设置封面');
        }
        console.log('');

        // 5. 保存 HTML 并创建草稿
        console.log('5. 创建公众号草稿...');
        const outputPath = path.join(__dirname, '..', 'wechat-output.html');
        fs.writeFileSync(outputPath, html, 'utf8');
        console.log(`   ✓ HTML 已保存到: ${outputPath}`);

        // 如果有封面图，创建草稿
        if (thumbMediaId) {
            try {
                const draftMediaId = await createDraft(article, thumbMediaId);
                console.log(`   ✓ 草稿创建成功！`);
                console.log(`   草稿 media_id: ${draftMediaId}`);

                // 6. 发布（如果指定了 --publish）
                if (shouldPublish) {
                    console.log('');
                    console.log('6. 发布文章...');
                    const publishId = await publishDraft(draftMediaId);
                    console.log(`   ✓ 发布成功！`);
                    console.log(`   发布 publish_id: ${publishId}`);
                } else {
                    console.log('');
                    console.log('   ℹ 文章已保存到草稿箱，请登录公众号后台查看');
                    console.log('   如需直接发布，请添加 --publish 参数');
                }
            } catch (error) {
                console.error(`   ✗ 草稿创建失败: ${error.message}`);
                console.log('');
                console.log('   备用方案：手动复制内容到公众号编辑器');
                console.log(`   文件路径: ${outputPath}`);
            }
        } else {
            console.log('');
            console.log('   ℹ 由于没有封面图，无法自动创建草稿');
            console.log('   请手动复制内容到公众号编辑器:');
            console.log(`   ${outputPath}`);
        }

        console.log('');
        console.log('='.repeat(60));
        console.log('完成！');
        console.log('='.repeat(60));

    } catch (error) {
        console.error('');
        console.error(`✗ 发布失败: ${error.message}`);
        process.exit(1);
    }
}

main();
