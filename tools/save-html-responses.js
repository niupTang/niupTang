/**
 * 保存微信公众号API响应为HTML文件
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 配置 - 从URL和Cookie中提取
const CONFIG = {
    wechat: {
        apiUrl: 'https://mp.weixin.qq.com/cgi-bin/appmsgpublish',
        token: '1554125009',  // 从URL中提取
        cookie: 'appmsglist_action_3924628841=card; wxuin=54278202233241; mm_lang=zh_CN; pgv_pvid=9704872890; RK=vW2FsQM6O9; ptcz=5967a6fa49d140403da8478084977acfd36671eef1961fff3a03f17b03e5aef9; markHashId_L=e8c0682b-a9a5-4cc9-9724-fb4e651e3b3d; ua_id=m9Mlqvtsprr3p1hSAAAAAJ3C5vo1jE-3iRouFPOB4MA=; _clck=3924628841|1|g26|0; uuid=66f4c9395b97b87fb19e90ced60c2b88; rand_info=CAESIP240gxPvqfbveX2jB8dYLGBaQV/33OSg4joXRQv2OEa; slave_bizuin=3924628841; data_bizuin=3924628841; bizuin=3924628841; data_ticket=52sfFgXTx+VA02M4YtETJi7f/1VdF/ZSg8GlBOMAfirhys9e3u1EKuCVW7MD9NL7; slave_sid=SEE3NmNuZlB6ZEtYVEpoUFQzTWxyMTdtMmM3VWNaN2Q2QWhDRkFJQTV0aEVxSDFpcnE4Z09ockFKV2R6V1VrSDRxek1jZkdYa3pzNEVtWU9FS0x3WE8xQlI1dndwTlFVWUNpMXphS2hqUVhweUViOGRUZlljdWE5dlBtQlJYbmZleTRPVkVDRld6akdzZnlX; slave_user=gh_ccff5ba2362f; xid=8d8752e30a8016ffd1073dce98984b8f; rewardsn=; wxtokenkey=777; _clsk=ivozka|1766766774206|2|1|mp.weixin.qq.com/weheat-agent/payload/record',
        fakeid: '3924628841',  // 从Cookie中的bizuin提取
    }
};

// 创建html目录
const htmlDir = path.join(__dirname, '../html');
if (!fs.existsSync(htmlDir)) {
    fs.mkdirSync(htmlDir, { recursive: true });
}

/**
 * 获取并保存单页数据
 */
async function fetchAndSavePage(begin = 0, count = 20) {
    try {
        const params = {
            sub: 'list',
            search_field: 'null',
            begin: begin,
            count: count,
            query: '',
            fakeid: CONFIG.wechat.fakeid,
            type: '101_1',
            free_publish_type: '1',
            sub_action: 'list_ex',
            token: CONFIG.wechat.token,
            lang: 'zh_CN',
        };

        console.log(`正在获取第 ${Math.floor(begin / count) + 1} 页 (offset: ${begin})...`);

        const response = await axios.get(CONFIG.wechat.apiUrl, {
            params,
            headers: {
                'Cookie': CONFIG.wechat.cookie,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://mp.weixin.qq.com/',
            },
        });

        // 保存HTML响应
        const filename = `page_${begin}_${count}.html`;
        const filepath = path.join(htmlDir, filename);

        fs.writeFileSync(filepath, response.data);
        console.log(`✅ 已保存: ${filename}`);

        return true;
    } catch (error) {
        console.error(`❌ 获取失败 (offset: ${begin}):`, error.message);
        return false;
    }
}

/**
 * 主函数
 */
async function main() {
    console.log('============================================================');
    console.log('保存微信公众号HTML响应');
    console.log('============================================================\n');

    // 检查配置
    if (!CONFIG.wechat.token || !CONFIG.wechat.cookie || !CONFIG.wechat.fakeid) {
        console.error('❌ 请先配置环境变量:');
        console.error('  WECHAT_TOKEN');
        console.error('  WECHAT_COOKIE');
        console.error('  WECHAT_FAKEID');
        process.exit(1);
    }

    // 获取前5页数据 (每页20条,共100条)
    const pageCount = 5;
    const pageSize = 20;

    for (let i = 0; i < pageCount; i++) {
        const begin = i * pageSize;
        await fetchAndSavePage(begin, pageSize);

        // 延迟避免请求过快
        if (i < pageCount - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    console.log('\n============================================================');
    console.log('保存完成!');
    console.log('============================================================');
    console.log(`HTML文件保存在: ${htmlDir}`);
}

main().catch(console.error);
