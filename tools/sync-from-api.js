const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yaml = require('js-yaml');

// Configuration
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';
const POSTS_DIR = path.join(__dirname, '../source/_posts');
const USERNAME = 'admin';
const PASSWORD = 'admin123';

async function login() {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            username: USERNAME,
            password: PASSWORD
        });
        return response.data.data.token;
    } catch (error) {
        console.error('Login failed:', error.message);
        process.exit(1);
    }
}

async function fetchArticles(token) {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { limit: 100 }
        });
        return response.data.data.items;
    } catch (error) {
        console.error('Failed to fetch articles:', error.message);
        return [];
    }
}

async function fetchArticleDetails(token, id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data.data;
    } catch (error) {
        console.error(`Failed to fetch details for ${id}:`, error.message);
        return null;
    }
}

function updateLocalFile(article) {
    // Generate filename from slug or title
    const filename = `${article.slug || article.title}.md`;
    const filePath = path.join(POSTS_DIR, filename);

    // Construct Front Matter
    const frontMatter = {
        title: article.title,
        date: article.created_at,
        updated: article.updated_at,
        tags: [], // Tags API not integrated yet in this script, strictly
        categories: [],
        cover: article.cover_image
    };

    // Build File Content
    const fileContent = `---\n${yaml.dump(frontMatter)}---\n\n${article.content_md || ''}`;

    // Write to file
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`✓ Updated: ${filename}`);
}

async function main() {
    console.log('🔄 Syncing from API to Local Blog...');

    const token = await login();
    const articles = await fetchArticles(token);

    console.log(`Found ${articles.length} articles in API.`);

    for (const item of articles) {
        // We need full details for content
        const fullArticle = await fetchArticleDetails(token, item.id);
        if (fullArticle) {
            updateLocalFile(fullArticle);
        }
    }

    console.log('✅ Sync complete! Run "hexo g" to generate your blog.');
}

main();
