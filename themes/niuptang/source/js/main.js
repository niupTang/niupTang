/* 太阳鸟的AI宝藏库 - 主脚本 */

document.addEventListener('DOMContentLoaded', function () {
    // 分类切换功能
    const tabBtns = document.querySelectorAll('.tab-btn');
    const toolCards = document.querySelectorAll('.tool-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.dataset.category;

            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 过滤卡片
            toolCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (category === 'all' || cardCategory === category || cardCategory === 'all') {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.3s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
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
