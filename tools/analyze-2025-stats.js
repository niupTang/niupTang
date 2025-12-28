const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../wechat-articles.json');
const outputPath = path.join(__dirname, '../source/2025-stats.json');

function analyze() {
    if (!fs.existsSync(dataPath)) {
        console.error('Data file not found:', dataPath);
        return;
    }

    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const publishList = data.publish_list || [];

    const stats = {
        totalArticles: 0,
        totalReads: 0,
        totalLikes: 0,
        totalComments: 0,
        totalShares: 0,
        totalOldLikes: 0,
        articlesByMonth: {},
        topArticles: [],
        monthlyInteraction: {},
        firstArticle: null,
        lastArticle: null,
        daysPublished: new Set(),
        maxStreak: 0
    };

    const articles2025 = [];

    publishList.forEach(item => {
        let info;
        try {
            // publish_info is a stringified JSON with escaped quotes
            const rawInfo = item.publish_info.replace(/&quot;/g, '"');
            info = JSON.parse(rawInfo);
        } catch (e) {
            console.error('Failed to parse publish_info', e);
            return;
        }

        // Handle different timestamp locations
        let time = 0;
        if (info.sent_info && info.sent_info.time) {
            time = info.sent_info.time;
        } else if (info.publish_info && info.publish_info.create_time) {
            time = info.publish_info.create_time;
        } else if (info.create_time) {
            time = info.create_time;
        }

        if (!time) {
            console.warn('No timestamp found for item', info.msgid);
            return;
        }

        const date = new Date(time * 1000);
        const year = date.getFullYear();

        if (year === 2025) {
            const appmsgs = info.appmsg_info || [];
            appmsgs.forEach(msg => {
                const article = {
                    title: msg.title,
                    url: msg.content_url,
                    read: msg.read_num || 0,
                    like: msg.like_num || 0,
                    comment: msg.comment_num || 0,
                    share: msg.share_num || 0,
                    oldLike: msg.old_like_num || 0,
                    date: date.toISOString().split('T')[0],
                    timestamp: time
                };
                articles2025.push(article);

                stats.totalArticles++;
                stats.totalReads += article.read;
                stats.totalLikes += article.like;
                stats.totalComments += article.comment;
                stats.totalShares += article.share;
                stats.totalOldLikes += article.oldLike;

                const month = date.getMonth() + 1;
                stats.articlesByMonth[month] = (stats.articlesByMonth[month] || 0) + 1;

                stats.daysPublished.add(article.date);
            });
        }
    });

    if (articles2025.length === 0) {
        console.log('No articles found for 2025');
        return;
    }

    // Sort by reads
    stats.topArticles = articles2025
        .sort((a, b) => b.read - a.read)
        .slice(0, 5);

    // Sort by date to find first and last
    articles2025.sort((a, b) => a.timestamp - b.timestamp);
    stats.firstArticle = articles2025[0];
    stats.lastArticle = articles2025[articles2025.length - 1];

    // Calculate publishing streak
    const sortedDays = Array.from(stats.daysPublished).sort();
    let currentStreak = 0;
    let maxStreak = 0;
    let prevDate = null;

    sortedDays.forEach(dayStr => {
        const currentDate = new Date(dayStr);
        if (prevDate) {
            const diffDays = Math.round((currentDate - prevDate) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                currentStreak++;
            } else {
                currentStreak = 1;
            }
        } else {
            currentStreak = 1;
        }
        maxStreak = Math.max(maxStreak, currentStreak);
        prevDate = currentDate;
    });
    stats.maxStreak = maxStreak;

    // Total unique days
    stats.uniqueDays = stats.daysPublished.size;

    fs.writeFileSync(outputPath, JSON.stringify(stats, null, 2));
    console.log('Stats saved to', outputPath);
    console.log('Summary:');
    console.log('- Total Articles:', stats.totalArticles);
    console.log('- Total Reads:', stats.totalReads);
    console.log('- Peak Reads:', stats.topArticles[0].read, '(', stats.topArticles[0].title, ')');
}

analyze();
