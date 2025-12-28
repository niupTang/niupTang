/* 太阳鸟的AI宝藏库 - 主脚本 */

document.addEventListener('DOMContentLoaded', function () {
    // 分类切换功能
    const tabBtns = document.querySelectorAll('.tab-btn');
    const toolCards = document.querySelectorAll('.tool-card');
    const blogCards = document.querySelectorAll('.blog-card');
    const searchInput = document.querySelector('.search-input');
    const searchSubmit = document.querySelector('.search-submit');

    let currentCategory = 'all';
    let currentSearchTerm = '';

    // 过滤工具卡片
    function filterTools() {
        let visibleToolCount = 0;

        toolCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const toolName = card.querySelector('.tool-name')?.textContent.toLowerCase() || '';
            const toolDesc = card.querySelector('.tool-desc')?.textContent.toLowerCase() || '';
            const searchTerm = currentSearchTerm.toLowerCase();

            // 检查分类匹配
            const categoryMatch = currentCategory === 'all' ||
                cardCategory === currentCategory ||
                cardCategory === 'all';

            // 检查搜索匹配
            const searchMatch = !searchTerm ||
                toolName.includes(searchTerm) ||
                toolDesc.includes(searchTerm);

            // 同时满足分类和搜索条件才显示
            if (categoryMatch && searchMatch) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.3s ease';
                visibleToolCount++;
            } else {
                card.style.display = 'none';
            }
        });

        return visibleToolCount;
    }

    // 过滤文章卡片
    function filterArticles() {
        if (!currentSearchTerm) {
            // 没有搜索词时,显示所有文章
            blogCards.forEach(card => {
                card.style.display = 'block';
            });
            return blogCards.length;
        }

        let visibleArticleCount = 0;
        const searchTerm = currentSearchTerm.toLowerCase();

        blogCards.forEach(card => {
            const title = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';

            // 搜索标题和摘要
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.3s ease';
                visibleArticleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        return visibleArticleCount;
    }

    // 统一过滤函数
    function performSearch() {
        const visibleToolCount = filterTools();
        const visibleArticleCount = filterArticles();

        updateSearchStatus(visibleToolCount, visibleArticleCount);
    }

    // 更新搜索状态提示
    function updateSearchStatus(visibleToolCount, visibleArticleCount) {
        const toolsGrid = document.querySelector('.tools-grid');
        const blogSection = document.querySelector('.blog-section');

        // 移除旧的提示
        const oldToolStatus = toolsGrid?.querySelector('.search-status');
        if (oldToolStatus) oldToolStatus.remove();

        const oldBlogStatus = blogSection?.querySelector('.search-status');
        if (oldBlogStatus) oldBlogStatus.remove();

        // 如果有搜索词
        if (currentSearchTerm) {
            // 工具区域提示
            if (toolsGrid && visibleToolCount === 0) {
                const status = document.createElement('div');
                status.className = 'search-status';
                status.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">
                        <p style="font-size: 0.95rem; margin: 0;">未找到包含 "${currentSearchTerm}" 的工具</p>
                    </div>
                `;
                toolsGrid.appendChild(status);
            }

            // 文章区域提示
            if (blogSection && visibleArticleCount === 0) {
                const blogGrid = blogSection.querySelector('.blog-grid');
                if (blogGrid) {
                    const status = document.createElement('div');
                    status.className = 'search-status';
                    status.innerHTML = `
                        <div style="text-align: center; padding: 2rem; color: #666; grid-column: 1 / -1;">
                            <p style="font-size: 0.95rem; margin: 0;">未找到包含 "${currentSearchTerm}" 的文章</p>
                        </div>
                    `;
                    blogGrid.appendChild(status);
                }
            }

            // 更新章节标题显示搜索结果数量
            const blogTitle = blogSection?.querySelector('.section-title');
            if (blogTitle) {
                const originalTitle = blogTitle.textContent.split('(')[0].trim();
                if (visibleArticleCount > 0) {
                    blogTitle.innerHTML = `${originalTitle} <span class="article-count">(找到 ${visibleArticleCount} 篇)</span>`;
                } else {
                    blogTitle.innerHTML = `${originalTitle} <span class="article-count">(0 篇)</span>`;
                }
            }

            // 如果工具和文章都没有结果,显示全局提示
            if (visibleToolCount === 0 && visibleArticleCount === 0) {
                // 可以在这里添加全局的"无结果"提示
                console.log(`搜索 "${currentSearchTerm}" 无结果`);
            }
        } else {
            // 清空搜索时,恢复文章标题
            const blogTitle = blogSection?.querySelector('.section-title');
            if (blogTitle) {
                const totalArticles = blogCards.length;
                blogTitle.innerHTML = `📚 最新文章 <span class="article-count">(${totalArticles} 篇)</span>`;
            }
        }
    }

    // 分类切换
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            currentCategory = this.dataset.category;

            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 重新过滤
            performSearch();
        });
    });

    // 搜索功能 - 实时搜索
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            currentSearchTerm = this.value.trim();
            performSearch();
        });

        // 支持回车搜索
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                currentSearchTerm = this.value.trim();
                performSearch();
            }
        });
    }

    // 搜索按钮点击
    if (searchSubmit) {
        searchSubmit.addEventListener('click', function () {
            if (searchInput) {
                currentSearchTerm = searchInput.value.trim();
                performSearch();
            }
        });
    }
});

// 淡入动画
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
