const axios = require('axios');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Configuration
// Using localhost directly might be an issue if inside a container, but here it's local Windows.
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';
const USERNAME = 'admin';
const PASSWORD = 'admin123';
const POSTS_DIR = path.join(__dirname, '../source/_posts');

// Helper to sanitize filename
function sanitizeFilename(name) {
    return name.replace(/[^a-z0-9\u4e00-\u9fa5\-\.]/gi, '-');
}

hexo.on('generateBefore', async function () {
    // Only run if API is accessible
    console.log('🔄 Checking API connection for auto-sync...');

    let token;
    try {
        const authRes = await axios.post(`${API_BASE_URL}/auth/login`, {
            username: USERNAME,
            password: PASSWORD
        }, { timeout: 3000 });
        token = authRes.data.data.token;
        console.log('✓ API Connected. Syncing articles...');
    } catch (e) {
        console.log('⚠️  API not available or login failed. using local cache/files. Error:', e.message);
        return;
    }

    try {
        const res = await axios.get(`${API_BASE_URL}/articles`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { limit: 1000, status: 'published' } // Fetch ALL published articles
        });

        const articles = res.data.data.items;

        if (!fs.existsSync(POSTS_DIR)) {
            fs.mkdirSync(POSTS_DIR, { recursive: true });
        }

        const syncedFiles = new Set();

        for (const item of articles) {
            // Fetch full details
            const detailRes = await axios.get(`${API_BASE_URL}/articles/${item.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const article = detailRes.data.data;

            // Prepare Front Matter
            const filename = sanitizeFilename(article.slug || article.title) + '.md';
            const filePath = path.join(POSTS_DIR, filename);

            const frontMatter = {
                title: article.title,
                date: article.created_at,
                updated: article.updated_at,
                tags: [], // Could fetch tags if API supports
                categories: [], // Could fetch category if API supports
            };

            if (article.excerpt) frontMatter.excerpt = article.excerpt;
            if (article.cover_image) frontMatter.cover = article.cover_image;

            const content = `---\n${yaml.dump(frontMatter)}---\n\n${article.content_md || ''}`;

            // Check if file exists and differs to avoid excessive IO? 
            // For now, simple overwrite to ensure consistency.
            fs.writeFileSync(filePath, content, 'utf8');
            syncedFiles.add(filename);
            // console.log(`✓ Synced: ${filename}`);
        }

        console.log(`✅ Successfully synced ${articles.length} articles from API.`);

        // Optional: Delete files not in API?
        // This is dangerous if user has local drafts not in API.
        // But user said "instead of written to death" -> implied API is master.
        // Let's safe-guard: Only delete if explicitly configured, or just warn.
        // For now, we ADD/UPDATE. Managing deletions is safer manually or via a strict mode.

    } catch (e) {
        console.error('❌ Sync failed:', e.message);
    }
});
