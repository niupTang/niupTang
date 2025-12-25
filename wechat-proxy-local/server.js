const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { PassThrough } = require('stream');

const app = express();

// 启用 CORS
app.use(cors());

// 不使用 body parser，保持 raw stream
app.use((req, res, next) => {
    // 跳过 body parsing 对于非 GET 请求
    if (req.method !== 'GET') {
        req.rawBody = [];
        req.on('data', chunk => req.rawBody.push(chunk));
        req.on('end', () => {
            req.rawBody = Buffer.concat(req.rawBody);
            next();
        });
    } else {
        next();
    }
});

// 处理所有请求
app.all('*', async (req, res) => {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).json({
            error: 'Missing url parameter',
            usage: '?url=<encoded_wechat_api_url>'
        });
    }

    // 安全检查：只允许微信 API
    if (!targetUrl.includes('api.weixin.qq.com')) {
        return res.status(403).json({
            error: 'Only WeChat API is allowed.'
        });
    }

    try {
        console.log(`[${new Date().toISOString()}] ${req.method} 转发: ${targetUrl.substring(0, 80)}...`);

        const axiosConfig = {
            method: req.method,
            url: targetUrl,
            timeout: 60000,
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        };

        // 对于 POST 请求，直接传递原始请求体和 headers
        if (req.method === 'POST') {
            axiosConfig.data = req.rawBody;
            axiosConfig.headers = {
                'Content-Type': req.headers['content-type'],
                'Content-Length': req.rawBody.length
            };
            console.log(`   Content-Type: ${req.headers['content-type']}`);
            console.log(`   Body Size: ${req.rawBody.length} bytes`);
        }

        const response = await axios(axiosConfig);

        console.log(`[${new Date().toISOString()}] 响应: ${response.status} - ${JSON.stringify(response.data).substring(0, 100)}`);
        res.json(response.data);

    } catch (error) {
        console.error(`[${new Date().toISOString()}] 错误:`, error.message);
        if (error.response) {
            console.error(`   响应: ${JSON.stringify(error.response.data)}`);
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({
                error: 'Proxy error',
                message: error.message
            });
        }
    }
});

const PORT = process.env.PORT || 8789;

app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('微信公众号 API 本地代理服务 v2.0');
    console.log('='.repeat(60));
    console.log(`服务地址: http://localhost:${PORT}`);
    console.log(`启动时间: ${new Date().toLocaleString('zh-CN')}`);
    console.log('');
    console.log('功能特点:');
    console.log('  ✓ 支持 GET/POST 请求转发');
    console.log('  ✓ 支持 multipart/form-data 文件上传');
    console.log('');
    console.log('按 Ctrl+C 停止服务');
    console.log('='.repeat(60));
});
