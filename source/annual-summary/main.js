document.addEventListener('DOMContentLoaded', async () => {
    let stats = null;
    try {
        const response = await fetch('/2025-stats.json');
        stats = await response.json();
        injectData(stats);
    } catch (e) {
        console.error('Failed to load stats', e);
    }

    function injectData(data) {
        if (!data) return;

        // Interaction Scene
        const totalInteraction = (data.totalLikes || 0) + (data.totalComments || 0);
        document.getElementById('interaction-count').textContent = totalInteraction.toLocaleString();
        document.getElementById('like-count').textContent = (data.totalLikes || 0).toLocaleString();
        document.getElementById('comment-count').textContent = (data.totalComments || 0).toLocaleString();

        // Content Scene
        document.getElementById('article-count').textContent = (data.totalArticles || 0).toLocaleString();
        document.getElementById('read-count').textContent = (data.totalReads || 0).toLocaleString();

        // Achievement Scene
        if (data.topArticles && data.topArticles.length > 0) {
            document.getElementById('top-article-title').textContent = data.topArticles[0].title;
            document.getElementById('top-article-read').textContent = data.topArticles[0].read.toLocaleString();
        }
        document.getElementById('max-streak').textContent = data.maxStreak || 0;
    }

    // Scroll Logic
    const scenes = document.querySelectorAll('.scene');
    let currentSceneIdx = 0;
    let isTransitioning = false;

    function goToScene(idx) {
        if (idx < 0 || idx >= scenes.length || isTransitioning) return;

        isTransitioning = true;
        const prevIdx = currentSceneIdx;
        currentSceneIdx = idx;

        scenes[prevIdx].classList.remove('active');
        scenes[currentSceneIdx].classList.add('active');

        // Animation reset for re-playing if needed
        // (though in a single direction report it's fine)

        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }

    // Swipe/Scroll interaction
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchStartY - touchEndY;

        if (Math.abs(delta) > 50) {
            if (delta > 0) {
                goToScene(currentSceneIdx + 1);
            } else {
                goToScene(currentSceneIdx - 1);
            }
        }
    });

    // Mouse wheel support
    window.addEventListener('wheel', (e) => {
        if (isTransitioning) return;
        if (e.deltaY > 0) {
            goToScene(currentSceneIdx + 1);
        } else {
            goToScene(currentSceneIdx - 1);
        }
    }, { passive: false });
});
