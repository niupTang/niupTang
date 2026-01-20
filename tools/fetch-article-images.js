#!/usr/bin/env node

/**
 * 从网上获取文章相关图片
 * 支持 Unsplash、Pexels 等免费图库
 */

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yaml = require('js-yaml');

program
    .requiredOption('-l, --outline <file>', '大纲文件路径')
    .requiredOption('-o, --output <dir>', '图片输出目录')
    .option('-c, --count <number>', '图片数量', '5')
    .parse(process.argv);

const options = program.opts();

// 读取配置
const configPath = path.join(__dirname, '../_config.yml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

async function searchUnsplash(query, count) {
    console.log(`从 Unsplash 搜索图片: ${query}`);

    if (!config.unsplash_api_key) {
        console.warn('⚠️  未配置 Unsplash API Key');
        return [];
    }

    try {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
                params: {
                    query: query,
                    per_page: count,
                    orientation: 'landscape'
                },
                headers: {
                    'Authorization': `Client-ID ${config.unsplash_api_key}`
                }
            }
        );

        return response.data.results.map(photo => ({
            id: photo.id,
            url: photo.urls.regular,
            downloadUrl: photo.links.download_location,
            author: photo.user.name,
            authorUrl: photo.user.links.html,
            description: photo.description || photo.alt_description
        }));
    } catch (error) {
        console.error('Unsplash API 错误:', error.response?.data || error.message);
        return [];
    }
}

async function searchPexels(query, count) {
    console.log(`从 Pexels 搜索图片: ${query}`);

    if (!config.pexels_api_key) {
        console.warn('⚠️  未配置 Pexels API Key');
        return [];
    }

    try {
        const response = await axios.get(
            `https://api.pexels.com/v1/search`,
            {
                params: {
                    query: query,
                    per_page: count,
                    orientation: 'landscape'
                },
                headers: {
                    'Authorization': config.pexels_api_key
                }
            }
        );

        return response.data.photos.map(photo => ({
            id: photo.id,
            url: photo.src.large,
            downloadUrl: photo.src.original,
            author: photo.photographer,
            authorUrl: photo.photographer_url,
            description: photo.alt
        }));
    } catch (error) {
        console.error('Pexels API 错误:', error.response?.data || error.message);
        return [];
    }
}

async function downloadImage(imageInfo, outputPath) {
    try {
        const response = await axios.get(imageInfo.url, {
            responseType: 'arraybuffer'
        });

        fs.writeFileSync(outputPath, response.data);
        return true;
    } catch (error) {
        console.error(`下载图片失败 ${imageInfo.url}:`, error.message);
        return false;
    }
}

async function main() {
    console.log(`\n🖼️  开始获取文章图片\n`);

    // 读取大纲
    const outline = JSON.parse(fs.readFileSync(options.outline, 'utf8'));

    // 确保输出目录存在
    if (!fs.existsSync(options.output)) {
        fs.mkdirSync(options.output, { recursive: true });
    }

    // 生成搜索关键词
    const keywords = [
        outline.topic,
        ...outline.tags || [],
        ...(outline.sections || []).slice(0, 2).map(s => s.title)
    ];

    const searchQuery = keywords.join(' ');
    console.log(`🔍 搜索关键词: ${searchQuery}\n`);

    // 搜索图片
    let images = [];

    if (config.unsplash_api_key) {
        const unsplashImages = await searchUnsplash(searchQuery, options.count);
        images.push(...unsplashImages);
    }

    if (images.length < options.count && config.pexels_api_key) {
        const pexelsImages = await searchPexels(searchQuery, options.count - images.length);
        images.push(...pexelsImages);
    }

    if (images.length === 0) {
        console.warn('⚠️  未找到图片，请配置 Unsplash 或 Pexels API Key');
        console.log('\n获取 API Key:');
        console.log('- Unsplash: https://unsplash.com/developers');
        console.log('- Pexels: https://www.pexels.com/api/');
        return;
    }

    // 下载图片
    console.log(`📥 开始下载 ${images.length} 张图片...\n`);

    const downloadedImages = [];
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const ext = '.jpg';
        const filename = `image-${i + 1}${ext}`;
        const outputPath = path.join(options.output, filename);

        console.log(`  ${i + 1}/${images.length} ${filename}`);

        const success = await downloadImage(image, outputPath);
        if (success) {
            downloadedImages.push({
                filename,
                path: outputPath,
                author: image.author,
                authorUrl: image.authorUrl,
                description: image.description
            });
        }
    }

    // 保存图片信息
    const imagesInfo = {
        topic: outline.topic,
        downloadedAt: new Date().toISOString(),
        images: downloadedImages
    };

    fs.writeFileSync(
        path.join(options.output, 'images-info.json'),
        JSON.stringify(imagesInfo, null, 2),
        'utf8'
    );

    console.log(`\n✅ 图片下载完成！`);
    console.log(`📁 保存位置: ${options.output}`);
    console.log(`📊 成功下载: ${downloadedImages.length}/${images.length}`);
}

main().catch(error => {
    console.error('\n❌ 错误:', error.message);
    process.exit(1);
});
