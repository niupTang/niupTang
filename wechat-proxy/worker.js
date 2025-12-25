/**
 * Cloudflare Workers 代理服务
 * 用于转发微信公众号 API 请求，解决跨域问题
 * 
 * 部署方式：
 * 1. 安装 wrangler: npm install -g wrangler
 * 2. 登录 Cloudflare: wrangler login
 * 3. 部署: wrangler deploy
 */

export default {
    async fetch(request, env, ctx) {
        // 处理 CORS 预检请求
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    'Access-Control-Max-Age': '86400',
                }
            });
        }

        try {
            const url = new URL(request.url);
            const targetUrl = url.searchParams.get('url');

            if (!targetUrl) {
                return new Response(JSON.stringify({
                    error: 'Missing url parameter',
                    usage: 'Add ?url=<encoded_wechat_api_url> to your request'
                }), {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            }

            // 验证目标 URL 是否为微信 API
            if (!targetUrl.includes('api.weixin.qq.com')) {
                return new Response(JSON.stringify({
                    error: 'Invalid target URL. Only WeChat API is allowed.'
                }), {
                    status: 403,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            }

            // 转发请求到微信 API
            const response = await fetch(targetUrl, {
                method: request.method,
                headers: {
                    'Content-Type': request.headers.get('Content-Type') || 'application/json',
                },
                body: request.method !== 'GET' ? request.body : undefined
            });

            // 获取响应内容
            const responseData = await response.text();

            // 添加 CORS 头
            const headers = new Headers({
                'Content-Type': response.headers.get('Content-Type') || 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            });

            return new Response(responseData, {
                status: response.status,
                headers
            });

        } catch (error) {
            return new Response(JSON.stringify({
                error: 'Proxy error',
                message: error.message
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
    }
};
