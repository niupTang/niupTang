/**
 * 微信公众号发布 API 服务
 * 
 * 可通过浏览器调用的本地 API
 */

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const app = express();
app.use(cors());
app.use(express.json());

// 项目根目录
const PROJECT_ROOT = path.join(__dirname, '..');

// 配置
let config = {
    appId: '',
    appSecret: '',
    proxyUrl: 'http://localhost:8789',
    author: '太阳鸟'
};

// 从 _config.yml 加载配置
function loadConfig() {
    try {
        const configPath = path.join(PROJECT_ROOT, '_config.yml');
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
        return true;
    } catch (error) {
        console.error('✗ 配置加载失败:', error.message);
        return false;
    }
}

// 解析 Markdown 文章
function parseArticle(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
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

// Markdown 转 HTML
function markdownToHtml(markdown) {
    let html = markdown;

    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;">');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code style="background:#f5f5f5;padding:2px 6px;border-radius:3px;">$1</code>');
    html = html.replace(/```(\w*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre style="background:#f5f5f5;padding:16px;border-radius:8px;overflow-x:auto;"><code>${escapeHtml(code.trim())}</code></pre>`;
    });
    html = html.replace(/^### (.+)$/gm, '<h3 style="margin:20px 0 10px;font-size:18px;">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 style="margin:24px 0 12px;font-size:20px;">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1 style="margin:28px 0 14px;font-size:24px;">$1</h1>');
    html = html.replace(/^> (.+)$/gm, '<blockquote style="border-left:4px solid #ddd;margin:16px 0;padding:10px 20px;color:#666;">$1</blockquote>');
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul style="margin:16px 0;padding-left:24px;">$&</ul>');
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    html = html.split(/\r?\n\r?\n/).map(para => {
        para = para.trim();
        if (!para) return '';
        if (para.startsWith('<')) return para;
        return `<p style="margin:16px 0;line-height:1.8;">${para}</p>`;
    }).join('\n');

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
    return accessToken;
}

// 上传图片
async function uploadImage(imagePath) {
    if (!fs.existsSync(imagePath)) {
        throw new Error(`图片不存在: ${imagePath}`);
    }

    const token = await getAccessToken();
    const uploadUrl = `https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=${token}&type=image`;
    const proxyUrl = `${config.proxyUrl}?url=${encodeURIComponent(uploadUrl)}`;

    const ext = path.extname(imagePath).toLowerCase();
    const contentTypes = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif' };

    const form = new FormData();
    form.append('media', fs.createReadStream(imagePath), {
        filename: path.basename(imagePath),
        contentType: contentTypes[ext] || 'application/octet-stream'
    });

    const response = await axios.post(proxyUrl, form, {
        headers: { ...form.getHeaders() },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    });

    if (response.data.errcode) {
        throw new Error(`上传图片失败: ${response.data.errmsg}`);
    }

    return { mediaId: response.data.media_id, url: response.data.url };
}

// 处理图片
async function processImages(html, articleDir) {
    const imgRegex = /<img src="([^"]+)"/g;
    let match;
    const uploads = [];
    let firstMediaId = null;

    while ((match = imgRegex.exec(html)) !== null) {
        const imgSrc = match[1];
        if (imgSrc.includes('mmbiz.qpic.cn') || imgSrc.startsWith('http')) continue;

        let imagePath = imgSrc.startsWith('/')
            ? path.join(PROJECT_ROOT, 'source', imgSrc)
            : path.join(articleDir, imgSrc);

        uploads.push({ original: imgSrc, absolutePath: imagePath });
    }

    for (let i = 0; i < uploads.length; i++) {
        const item = uploads[i];
        try {
            const result = await uploadImage(item.absolutePath);
            html = html.replace(new RegExp(`src="${item.original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'), `src="${result.url}"`);
            if (i === 0) firstMediaId = result.mediaId;
        } catch (error) {
            console.error(`上传失败 ${item.original}: ${error.message}`);
        }
    }

    return { html, firstMediaId };
}

// 创建草稿
async function createDraft(article, thumbMediaId) {
    const token = await getAccessToken();
    const url = `https://api.weixin.qq.com/cgi-bin/draft/add?access_token=${token}`;
    const proxyUrl = `${config.proxyUrl}?url=${encodeURIComponent(url)}`;

    const response = await axios.post(proxyUrl, {
        articles: [{
            title: article.title,
            author: config.author,
            content: article.html,
            thumb_media_id: thumbMediaId,
            need_open_comment: 1,
            only_fans_can_comment: 0
        }]
    }, { headers: { 'Content-Type': 'application/json' } });

    if (response.data.errcode) {
        throw new Error(`创建草稿失败: ${response.data.errmsg}`);
    }

    return response.data.media_id;
}

// ====== API 端点 ======

// 获取文章列表
app.get('/api/articles', (req, res) => {
    try {
        const postsDir = path.join(PROJECT_ROOT, 'source', '_posts');
        const files = fs.readdirSync(postsDir)
            .filter(f => f.endsWith('.md'))
            .map(f => ({
                filename: f,
                path: `source/_posts/${f}`,
                title: f.replace('.md', '')
            }));
        res.json({ success: true, articles: files });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 预览文章
app.post('/api/preview', async (req, res) => {
    try {
        const { articlePath } = req.body;
        const fullPath = path.join(PROJECT_ROOT, articlePath);

        if (!fs.existsSync(fullPath)) {
            return res.status(404).json({ success: false, error: '文章不存在' });
        }

        const article = parseArticle(fullPath);
        const html = markdownToHtml(article.markdown);

        res.json({
            success: true,
            article: { ...article, html }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 发布文章到草稿箱
app.post('/api/publish', async (req, res) => {
    try {
        const { articlePath, publish = false } = req.body;
        const fullPath = path.join(PROJECT_ROOT, articlePath);

        if (!fs.existsSync(fullPath)) {
            return res.status(404).json({ success: false, error: '文章不存在' });
        }

        // 解析文章
        const article = parseArticle(fullPath);
        let html = markdownToHtml(article.markdown);

        // 处理图片
        const articleDir = path.dirname(fullPath);
        const { html: processedHtml, firstMediaId } = await processImages(html, articleDir);
        html = processedHtml;
        article.html = html;

        if (!firstMediaId) {
            return res.status(400).json({
                success: false,
                error: '文章中没有本地图片，无法自动设置封面',
                html: html
            });
        }

        // 创建草稿
        const draftMediaId = await createDraft(article, firstMediaId);

        res.json({
            success: true,
            message: '文章已创建到草稿箱',
            draftMediaId: draftMediaId,
            title: article.title
        });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 首页 - API 文档
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>微信公众号发布 API</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        h1 { color: #333; }
        .api { background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .method { display: inline-block; padding: 4px 12px; border-radius: 4px; font-weight: bold; }
        .get { background: #61affe; color: white; }
        .post { background: #49cc90; color: white; }
        code { background: #eee; padding: 2px 6px; border-radius: 3px; }
        pre { background: #2d2d2d; color: #f8f8f2; padding: 16px; border-radius: 8px; overflow-x: auto; }
        .btn { display: inline-block; padding: 10px 20px; background: #07c160; color: white; border: none; border-radius: 6px; cursor: pointer; text-decoration: none; margin: 5px; }
        .btn:hover { background: #06ad56; }
    </style>
</head>
<body>
    <h1>🚀 微信公众号发布 API</h1>
    <p>通过 API 将博客文章一键发布到微信公众号草稿箱</p>
    
    <div class="api">
        <span class="method get">GET</span> <code>/api/articles</code>
        <p>获取所有文章列表</p>
    </div>
    
    <div class="api">
        <span class="method post">POST</span> <code>/api/preview</code>
        <p>预览文章内容（Markdown 转 HTML）</p>
        <pre>{ "articlePath": "source/_posts/文章.md" }</pre>
    </div>
    
    <div class="api">
        <span class="method post">POST</span> <code>/api/publish</code>
        <p>发布文章到公众号草稿箱</p>
        <pre>{ "articlePath": "source/_posts/文章.md" }</pre>
    </div>
    
    <h2>快速测试</h2>
    <button class="btn" onclick="testArticles()">获取文章列表</button>
    <button class="btn" onclick="testPublish()">发布测试文章</button>
    
    <h3>结果：</h3>
    <pre id="result">点击按钮测试...</pre>
    
    <script>
        async function testArticles() {
            const res = await fetch('/api/articles');
            const data = await res.json();
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        }
        
        async function testPublish() {
            const articlePath = prompt('请输入文章路径', 'source/_posts/AI能写90的代码了我还能做什么.md');
            if (!articlePath) return;
            
            document.getElementById('result').textContent = '正在发布...';
            
            const res = await fetch('/api/publish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ articlePath })
            });
            const data = await res.json();
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        }
    </script>
</body>
</html>
    `);
});

// 启动服务
const PORT = 8790;

loadConfig();

app.listen(PORT, () => {
    console.log('');
    console.log('='.repeat(60));
    console.log('微信公众号发布 API 服务');
    console.log('='.repeat(60));
    console.log(`API 地址: http://localhost:${PORT}`);
    console.log('');
    console.log('可用端点:');
    console.log('  GET  /api/articles  - 获取文章列表');
    console.log('  POST /api/preview   - 预览文章');
    console.log('  POST /api/publish   - 发布到草稿箱');
    console.log('');
    console.log(`打开浏览器访问: http://localhost:${PORT}`);
    console.log('='.repeat(60));
});
