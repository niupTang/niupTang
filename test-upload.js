const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const config = {
    appId: 'wx322ff120e757e1b0',
    appSecret: '9025976bd848dcce82c94102374b1e9e',
    proxyUrl: 'http://localhost:8789'
};

const testImagePath = 'E:\\GitHub\\niupTang\\source\\image\\2025-12-23\\huakai.png';

async function test() {
    console.log('='.repeat(60));
    console.log('测试图片上传功能');
    console.log('='.repeat(60));
    console.log('');

    // 1. 检查图片文件
    console.log('1. 检查图片文件...');
    if (!fs.existsSync(testImagePath)) {
        console.log(`   ❌ 图片不存在: ${testImagePath}`);
        return;
    }
    console.log(`   ✓ 图片存在: ${testImagePath}`);

    const stats = fs.statSync(testImagePath);
    console.log(`   文件大小: ${stats.size} bytes`);
    console.log('');

    // 2. 获取 access_token
    console.log('2. 获取 access_token...');
    try {
        const tokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.appId}&secret=${config.appSecret}`;
        const proxyTokenUrl = `${config.proxyUrl}?url=${encodeURIComponent(tokenUrl)}`;

        console.log(`   请求: ${proxyTokenUrl}`);
        const tokenRes = await axios.get(proxyTokenUrl);
        console.log(`   响应: ${JSON.stringify(tokenRes.data)}`);

        if (tokenRes.data.errcode) {
            console.log(`   ❌ 获取 token 失败: ${tokenRes.data.errmsg}`);
            return;
        }

        const token = tokenRes.data.access_token;
        console.log(`   ✓ Token: ${token.substring(0, 30)}...`);
        console.log('');

        // 3. 上传图片
        console.log('3. 上传图片...');
        const uploadUrl = `https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=${token}&type=image`;
        const proxyUploadUrl = `${config.proxyUrl}?url=${encodeURIComponent(uploadUrl)}`;

        console.log(`   请求: ${proxyUploadUrl}`);

        const form = new FormData();
        form.append('media', fs.createReadStream(testImagePath), {
            filename: path.basename(testImagePath),
            contentType: 'image/png'
        });

        console.log(`   正在上传...`);
        const uploadRes = await axios.post(proxyUploadUrl, form, {
            headers: { ...form.getHeaders() },
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        });

        console.log(`   响应: ${JSON.stringify(uploadRes.data)}`);

        if (uploadRes.data.errcode) {
            console.log(`   ❌ 上传失败: ${uploadRes.data.errmsg}`);
            return;
        }

        console.log(`   ✓ 上传成功!`);
        console.log(`   URL: ${uploadRes.data.url}`);
        console.log(`   MediaId: ${uploadRes.data.media_id}`);

    } catch (error) {
        console.log(`   ❌ 错误: ${error.message}`);
        if (error.response) {
            console.log(`   响应状态: ${error.response.status}`);
            console.log(`   响应数据: ${JSON.stringify(error.response.data)}`);
        }
    }

    console.log('');
    console.log('='.repeat(60));
    console.log('测试完成');
    console.log('='.repeat(60));
}

test();
