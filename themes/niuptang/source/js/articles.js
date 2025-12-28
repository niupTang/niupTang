/* 文章列表页面交互脚本 */

document.addEventListener('DOMContentLoaded', function () {
    const articlesGrid = document.getElementById('articlesGrid');
    const listViewBtn = document.getElementById('listViewBtn');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const sortSelect = document.getElementById('sortSelect');
    const articleCards = document.querySelectorAll('.article-card');

    // 从 localStorage 读取用户偏好
    const savedView = localStorage.getItem('articlesView') || 'list';
    const savedSort = localStorage.getItem('articlesSort') || 'latest';

    // 应用保存的视图
    setView(savedView);
    sortSelect.value = savedSort;

    // 视图切换
    listViewBtn.addEventListener('click', function () {
        setView('list');
        localStorage.setItem('articlesView', 'list');
    });

    gridViewBtn.addEventListener('click', function () {
        setView('grid');
        localStorage.setItem('articlesView', 'grid');
    });

    // 排序功能
    sortSelect.addEventListener('change', function () {
        const sortType = this.value;
        localStorage.setItem('articlesSort', sortType);
        sortArticles(sortType);
    });

    // 设置视图
    function setView(view) {
        if (view === 'list') {
            articlesGrid.classList.remove('grid-view');
            articlesGrid.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        } else {
            articlesGrid.classList.remove('list-view');
            articlesGrid.classList.add('grid-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        }
    }

    // 排序文章
    function sortArticles(sortType) {
        const cardsArray = Array.from(articleCards);

        switch (sortType) {
            case 'latest':
                // 最新发布 - 按日期倒序（默认已经是这个顺序）
                cardsArray.sort((a, b) => {
                    const dateA = new Date(a.querySelector('.card-date').textContent);
                    const dateB = new Date(b.querySelector('.card-date').textContent);
                    return dateB - dateA;
                });
                break;

            case 'popular':
                // 最热内容 - 按标题长度排序（示例，实际应该按阅读量）
                // TODO: 需要从 wechat-articles.json 获取真实的阅读量数据
                cardsArray.sort((a, b) => {
                    const titleA = a.querySelector('.card-title').textContent.length;
                    const titleB = b.querySelector('.card-title').textContent.length;
                    return titleB - titleA;
                });
                break;

            case 'relevant':
                // 与我相关 - 按标签匹配度排序（示例）
                // TODO: 实现基于用户订阅标签的相关度计算
                cardsArray.sort((a, b) => {
                    const tagsA = a.querySelectorAll('.tag').length;
                    const tagsB = b.querySelectorAll('.tag').length;
                    return tagsB - tagsA;
                });
                break;
        }

        // 重新排列 DOM
        cardsArray.forEach(card => {
            articlesGrid.appendChild(card);
        });

        // 添加淡入动画
        articleCards.forEach((card, index) => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s`;
            }, 10);
        });
    }

    // 卡片悬停效果增强
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // 初始排序
    sortArticles(savedSort);
});
