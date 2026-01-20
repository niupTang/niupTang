// Configuration
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

// State
let currentUser = null;
let currentArticleId = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    setupEditor();
});

// Authentication
async function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        showLogin();
        return;
    }

    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(`${API_BASE_URL}/auth/me`);
        currentUser = response.data.data;
        updateUserUI();
        showView('dashboard');
        loadArticles();
    } catch (error) {
        console.error('Auth check failed:', error);
        logout();
    }
}

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');

    try {
        errorMsg.classList.add('hidden');
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
        const { token, user } = response.data.data;

        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        currentUser = user;

        updateUserUI();
        showView('dashboard');
        loadArticles();
    } catch (error) {
        errorMsg.textContent = error.response?.data?.detail || 'Login failed. Please check credentials.';
        errorMsg.classList.remove('hidden');
    }
});

function logout() {
    localStorage.removeItem('token');
    currentUser = null;
    delete axios.defaults.headers.common['Authorization'];
    showLogin();
}

function updateUserUI() {
    if (currentUser) {
        document.getElementById('user-name').textContent = currentUser.display_name || currentUser.username;
        document.getElementById('user-avatar').textContent = (currentUser.display_name || currentUser.username)[0].toUpperCase();
    }
}

// Navigation
function showLogin() {
    document.getElementById('login-view').classList.remove('hidden');
    document.getElementById('main-app').classList.add('hidden');
}

function showView(viewName) {
    document.getElementById('login-view').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');

    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('editor-view').classList.add('hidden');

    document.getElementById(`${viewName}-view`).classList.remove('hidden');
}

// Dashboard - Article List
async function loadArticles() {
    const listContainer = document.getElementById('article-list');
    listContainer.innerHTML = '<div class="text-center py-10 text-gray-400">Loading articles...</div>';

    try {
        const response = await axios.get(`${API_BASE_URL}/articles`, { params: { limit: 100 } });
        const articles = response.data.data.items;

        listContainer.innerHTML = '';

        if (articles.length === 0) {
            listContainer.innerHTML = '<div class="text-center py-20 text-gray-400">No articles found. Create your first one!</div>';
            return;
        }

        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group flex justify-between items-center';
            card.onclick = () => loadArticleForEdit(article.id);

            const statusColor = article.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600';
            const date = new Date(article.created_at).toLocaleDateString();

            card.innerHTML = `
                <div>
                    <h3 class="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">${article.title}</h3>
                    <p class="text-sm text-gray-400 font-mono">${article.slug} <span class="mx-2">•</span> ${date}</p>
                </div>
                <div class="flex items-center gap-4">
                    <span class="px-3 py-1 rounded-full text-xs font-medium ${statusColor}">${article.status}</span>
                    <button class="text-gray-300 hover:text-red-500 p-2 transition-colors z-10" onclick="event.stopPropagation(); deleteArticle('${article.id}')">
                         <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            `;
            listContainer.appendChild(card);
        });
    } catch (error) {
        listContainer.innerHTML = `<div class="text-center py-10 text-red-400">Failed to load articles: ${error.message}</div>`;
    }
}

async function deleteArticle(id) {
    if (!confirm('Are you sure you want to delete this article?')) return;
    try {
        await axios.delete(`${API_BASE_URL}/articles/${id}`);
        showNotification('Article deleted');
        loadArticles();
    } catch (error) {
        showNotification('Failed to delete', true);
    }
}

// Editor
const editorTitle = document.getElementById('editor-title');
const editorContent = document.getElementById('editor-content');
const editorPreview = document.getElementById('editor-preview');
const saveStatus = document.getElementById('save-status');

function setupEditor() {
    editorContent.addEventListener('input', () => {
        // Debounce render
        clearTimeout(window.renderTimeout);
        window.renderTimeout = setTimeout(() => {
            renderPreview(editorContent.value);
            saveStatus.textContent = 'Unsaved changes...';
        }, 300);
    });
}

function renderPreview(markdown) {
    editorPreview.innerHTML = marked.parse(markdown || '');
}

function openEditor(article = null) {
    currentArticleId = article ? article.id : null;
    editorTitle.value = article ? article.title : '';
    editorContent.value = article ? article.content_md : '';
    renderPreview(editorContent.value);
    showView('editor');
    saveStatus.textContent = article ? 'Saved' : 'New Draft';
}

async function loadArticleForEdit(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
        openEditor(response.data.data);
    } catch (error) {
        showNotification('Failed to load article', true);
    }
}

async function saveArticle(isDraft = true) {
    const title = editorTitle.value.trim();
    const content = editorContent.value;

    if (!title) {
        showNotification('Title is required', true);
        return;
    }

    // Simple slug generator
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const payload = {
        title,
        slug: currentArticleId ? undefined : (slug || 'untitled'), // Only set slug on create
        content_md: content,
        status: isDraft ? 'draft' : 'published'
    };

    saveStatus.textContent = 'Saving...';

    try {
        if (currentArticleId) {
            await axios.put(`${API_BASE_URL}/articles/${currentArticleId}`, payload);
        } else {
            const response = await axios.post(`${API_BASE_URL}/articles`, payload);
            currentArticleId = response.data.data.id;
        }

        saveStatus.textContent = 'All changes saved';
        showNotification(isDraft ? 'Draft saved' : 'Article published');

        if (!isDraft) {
            if (currentArticleId) {
                await axios.post(`${API_BASE_URL}/articles/${currentArticleId}/publish?publish=true`);
            }
        }
    } catch (error) {
        saveStatus.textContent = 'Error saving';
        showNotification(error.response?.data?.detail || 'Failed to save', true);
    }
}

// Helper - Notification
function showNotification(message, isError = false) {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.className = `fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-xl transform transition-all duration-300 z-50 ${isError ? 'bg-red-500 text-white' : 'bg-gray-900 text-white'}`;
    notif.classList.remove('translate-y-20', 'opacity-0');

    setTimeout(() => {
        notif.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}
