/**
 * Hexo 辅助函数：整合微信文章互动数据
 * 在文章页面渲染时，从 wechat-articles.json 读取互动数据
 */

const fs = require('fs');
const path = require('path');

hexo.extend.helper.register('getWechatStats', function (postTitle) {
    try {
        const dataPath = path.join(hexo.base_dir, 'wechat-articles.json');

        // 检查文件是否存在
        if (!fs.existsSync(dataPath)) {
            return {
                readNum: 0,
                likeNum: 0,
                commentNum: 0,
                shareNum: 0
            };
        }

        // 读取数据
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

        // 查找匹配的文章
        const article = data.articles.find(a => a.title === postTitle);

        if (article) {
            return {
                readNum: article.readNum || 0,
                likeNum: article.likeNum || 0,
                commentNum: article.commentCount || article.commentNum || 0,
                shareNum: article.shareNum || 0,
                oldLikeNum: article.oldLikeNum || 0
            };
        }

        // 未找到匹配文章，返回默认值
        return {
            readNum: 0,
            likeNum: 0,
            commentNum: 0,
            shareNum: 0
        };

    } catch (error) {
        console.log('读取微信数据失败:', error.message);
        return {
            readNum: 0,
            likeNum: 0,
            commentNum: 0,
            shareNum: 0
        };
    }
});

/**
 * 格式化数字显示
 */
hexo.extend.helper.register('formatNumber', function (num) {
    if (num >= 10000) {
        return (num / 10000).toFixed(1) + 'w';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
});
