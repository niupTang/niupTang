/**
 * Hexo 微信公众号图床插件
 * 内联版本 - 避免模块加载问题
 */

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

console.log('>>> 微信公众号图床插件正在加载...');

// ============ Uploader Class ============
class WeChatImageUploader {
    constructor(config) {
        this.appId = config.appId;
        this.appSecret = config.appSecret;
        this.proxyUrl = config.proxyUrl;
        this.accessToken = null;
        this.tokenExpireTime = 0;
    }

    async getAccessToken() {
        const now = Date.now();
        if (this.accessToken && now < this.tokenExpireTime) {
            return this.accessToken;
        }

        try {
            const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${this.appId}&secret=${this.appSecret}`;
            const proxyUrl = `${this.proxyUrl}?url=${encodeURIComponent(url)}`;

            const response = await axios.get(proxyUrl);

            if (response.data.errcode) {
                throw new Error(`获取 access_token 失败: ${response.data.errmsg}`);
            }

            this.accessToken = response.data.access_token;
            this.tokenExpireTime = now + (response.data.expires_in - 300) * 1000;

            hexo.log.info('✓ 成功获取 access_token');
            return this.accessToken;
        } catch (error) {
            throw new Error(`获取 access_token 失败: ${error.message}`);
        }
    }

    async uploadImage(imagePath) {
        try {
            if (!fs.existsSync(imagePath)) {
                throw new Error(`图片文件不存在: ${imagePath}`);
            }

            const token = await this.getAccessToken();
            const uploadUrl = `https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=${token}&type=image`;
            const proxyUrl = `${this.proxyUrl}?url=${encodeURIComponent(uploadUrl)}`;

            const form = new FormData();
            form.append('media', fs.createReadStream(imagePath), {
                filename: path.basename(imagePath),
                contentType: this.getContentType(imagePath)
            });

            const response = await axios.post(proxyUrl, form, {
                headers: { ...form.getHeaders() },
                maxContentLength: Infinity,
                maxBodyLength: Infinity
            });

            if (response.data.errcode) {
                throw new Error(`上传图片失败: ${response.data.errmsg}`);
            }

            hexo.log.info(`✓ 成功上传图片: ${path.basename(imagePath)}`);
            return response.data.url;
        } catch (error) {
            throw new Error(`上传图片失败: ${error.message}`);
        }
    }

    getContentType(filePath) {
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
}

// ============ Hexo Filter ============
hexo.extend.filter.register('before_post_render', async function (data) {
    const config = hexo.config.wechat_image;

    if (!config || !config.enable) {
        return data;
    }

    if (!config.appId || !config.appSecret || !config.proxyUrl) {
        hexo.log.warn('微信图床配置不完整，跳过图片上传');
        return data;
    }

    try {
        const uploader = new WeChatImageUploader(config);
        // 只匹配以图片扩展名结尾的路径
        const imageRegex = /!\[([^\]]*)\]\(([^)]+\.(png|jpg|jpeg|gif|bmp|webp))\)/gi;
        let match;
        const uploads = [];

        while ((match = imageRegex.exec(data.content)) !== null) {
            const [fullMatch, alt, imagePath] = match;

            // 只处理本地图片（不是 http/https 开头的）
            if (!imagePath.startsWith('http://') && !imagePath.startsWith('https://')) {
                const absolutePath = path.join(hexo.source_dir, imagePath.replace(/^\//, ''));
                uploads.push({ fullMatch, alt, imagePath, absolutePath });
            }
        }

        if (uploads.length > 0) {
            hexo.log.info(`发现 ${uploads.length} 张本地图片，开始上传到微信素材库...`);

            for (const item of uploads) {
                hexo.log.info(`处理图片: ${item.imagePath} -> ${item.absolutePath}`);
                try {
                    const url = await uploader.uploadImage(item.absolutePath);
                    data.content = data.content.replace(
                        item.fullMatch,
                        `![${item.alt}](${url})`
                    );
                    hexo.log.info(`✓ ${item.imagePath} -> ${url}`);
                } catch (error) {
                    hexo.log.error(`✗ 上传失败 ${item.imagePath}: ${error.message}`);
                }
            }
        }
    } catch (error) {
        hexo.log.error(`微信图床插件错误: ${error.message}`);
    }

    return data;
});
