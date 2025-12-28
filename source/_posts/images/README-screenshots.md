---
layout: false
---

# 截图准备指南

为了让文章更加生动,建议添加以下截图:

## 1. 浏览器开发者工具抓包截图
**文件名**: `wechat-api-devtools.png`
**位置**: 第一步 - 1.1 抓取 API 参数

**截图内容**:
- 打开微信公众号后台
- 按 F12 打开开发者工具
- Network 标签高亮显示
- appmsgpublish 请求被选中
- Headers 面板显示 Cookie 和 token

**截图技巧**:
1. 使用浏览器全屏截图
2. 用红框标注关键区域(Network 标签、appmsgpublish 请求)
3. 可以用箭头指示 Cookie 和 token 的位置

---

## 2. 终端执行进度截图
**文件名**: `terminal-sync-progress.png`
**位置**: 使用方法 - 执行效果

**截图内容**:
- 终端窗口显示执行 `npm run sync-articles` 的输出
- 包含进度信息、统计数据
- 显示成功完成的提示

**截图技巧**:
1. 使用 Windows Terminal 或 iTerm2 等现代终端
2. 选择深色主题,绿色文本
3. 确保字体清晰可读
4. 可以使用 `asciinema` 录制动画

---

## 3. 分类统计图表
**文件名**: `article-statistics-chart.png`
**位置**: 最终成果 - 数据统计

**图表内容**:
- 柱状图:Top 10 分类及文章数量
- 饼图:分类占比分布
- 关键指标卡片

**制作工具**:
- 在线工具: https://www.chartjs.org/
- 或使用 Python matplotlib 生成
- 或使用 Excel/Google Sheets

**示例代码** (Python):
```python
import matplotlib.pyplot as plt
import matplotlib

# 设置中文字体
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['axes.unicode_minus'] = False

categories = ['AI 相关开源项目', '实用工具开源项目', '工具合集', '效率工具', '智能体开发']
counts = [173, 170, 163, 34, 34]

plt.figure(figsize=(12, 6))
plt.bar(categories, counts, color=['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#FF6D00'])
plt.xlabel('分类')
plt.ylabel('文章数量')
plt.title('公众号文章分类统计 Top 5')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.savefig('article-statistics-chart.png', dpi=300)
```

---

## 4. 整理前后对比图
**文件名**: `before-after-comparison.png`
**位置**: 最终成果 - 在线预览

**对比内容**:
- 左侧:杂乱无序的文章列表
- 右侧:结构化的分类文档
- 中间:箭头 + "10分钟自动化"

**制作方法**:
1. 使用 Figma 或 Canva 设计
2. 左右分屏布局
3. 左侧截取未整理的文章列表
4. 右侧截取分类文档的部分内容
5. 添加对比标注和说明

---

## 截图存放位置

将所有截图放在以下目录:
```
e:\GitHub\niupTang\source\_posts\images\
```

确保在文章中正确引用:
```markdown
![描述](./images/screenshot-name.png)
```

---

## 可选:制作 GIF 动画

如果想要更生动的效果,可以录制以下操作的 GIF:

1. **API 抓包过程** (10-15秒)
   - 打开开发者工具
   - 刷新页面
   - 定位到 appmsgpublish 请求
   - 展开 Headers

2. **脚本执行过程** (20-30秒)
   - 输入命令
   - 显示进度条
   - 输出统计信息
   - 完成提示

**GIF 录制工具**:
- Windows: ScreenToGif
- Mac: Kap
- 在线: https://www.screentogif.com/

---

## 注意事项

1. **隐私保护**: 截图时注意隐藏敏感信息(token、cookie、个人信息)
2. **图片优化**: 使用 TinyPNG 压缩图片,减小文件大小
3. **清晰度**: 确保截图清晰,文字可读
4. **一致性**: 保持截图风格统一(主题、尺寸、标注方式)
5. **文件命名**: 使用有意义的英文文件名,便于管理
