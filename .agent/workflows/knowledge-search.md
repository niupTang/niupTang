---
description: 使用 NotebookLM 查询公众号知识库
---

# 公众号知识库智能查询

这个工作流集成 NotebookLM Skill，让你可以智能查询自己的公众号文章知识库。

## 前置条件

1. **安装 NotebookLM Skill**

```bash
# 创建 skills 目录
mkdir -p "$env:USERPROFILE\.claude\skills"

# 克隆 NotebookLM Skill
cd "$env:USERPROFILE\.claude\skills"
git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm
```

2. **上传公众号文章到 NotebookLM**

访问 [NotebookLM](https://notebooklm.google.com/) 并上传 `source/公众号文章分类.md`

3. **将笔记本添加到 Skill 库**

```
"Add this notebook to my library: [你的 NotebookLM URL]"
标签: wechat-articles, knowledge-base, 太阳鸟
```

## 使用场景

### 场景 1: 写新文章前查重

在创建新文章前，检查是否已写过类似主题：

```
"查询我的公众号知识库，关于 'Claude Code' 的所有文章"
```

输出示例：
- 发现 3 篇相关文章
- 提供每篇的核心观点
- 建议新文章的差异化角度

### 场景 2: 寻找历史素材

准备 PPT 时，查找可引用的历史内容：

```
"我之前写过关于 'AI 智能体' 架构设计的内容吗？提取关键技术点"
```

输出示例：
- 列出相关文章片段
- 提取技术架构图说明
- 提供原文链接

### 场景 3: 跨文章知识关联

分析某个主题在多篇文章中的演进：

```
"总结我在 2024-2025 年关于 'AI 编程工具' 的观点变化"
```

输出示例：
- 时间线梳理
- 观点对比
- 技术栈演进趋势

### 场景 4: 快速定位技术细节

回忆某个具体实现方案：

```
"我之前写的微信公众号一键发布功能，具体用了哪些 API？"
```

输出示例：
- 相关 API 列表
- 代码实现要点
- 注意事项

## 与现有 Workflow 集成

### 集成到 `/auto-generate-article`

在步骤 1 `fetch-article-materials.js` 前添加：

```javascript
// 步骤 0: 查询知识库
const notebookQuery = `查询我的公众号知识库，关于 "${topic}" 的相关内容`;
// 通过 Claude Code 调用 NotebookLM Skill
// 将结果合并到 materials 中
```

### 集成到 `/generate-content-ppt`

在步骤 2 `analyze-article-for-ppt.js` 中添加：

```javascript
// 查询关联文章
const relatedQuery = `这篇文章的主题在我之前的文章中有哪些相关内容？`;
// 将关联内容添加到 PPT 大纲的"背景"或"延伸阅读"部分
```

## 高级用法

### 自动生成文章引用

在生成文章时，自动添加历史文章引用：

```javascript
// tools/add-historical-references.js
async function addHistoricalReferences(articleContent) {
  // 1. 提取文章关键词
  // 2. 查询 NotebookLM
  // 3. 在文章末尾添加"相关阅读"章节
}
```

### 创建知识图谱

定期分析知识库结构：

```
"分析我的公众号知识库，生成内容主题分布图"
```

输出：
- 按分类统计文章数量
- 识别高频关键词
- 发现内容空白区域

### 智能推荐写作主题

基于已有内容推荐新主题：

```
"基于我的公众号历史内容，推荐 5 个可以深入展开的主题"
```

## 配置说明

在 `_config.yml` 中添加 NotebookLM 配置：

```yaml
# NotebookLM 知识库配置
notebooklm:
  enabled: true
  notebook_urls:
    - name: 公众号文章库
      url: https://notebooklm.google.com/notebook/xxx
      tags: [wechat-articles, knowledge-base]
      description: 太阳鸟公众号所有文章的分类整理
```

## 数据同步策略

### 手动同步（当前推荐）

每次发布新文章后，手动更新 NotebookLM：

1. 运行 `npm run sync-articles` 更新 `公众号文章分类.md`
2. 访问 NotebookLM，上传更新后的文档
3. NotebookLM 自动增量更新知识库

### 自动同步（未来规划）

创建自动化脚本：

```bash
# tools/sync-to-notebooklm.js
# 每次 sync-articles 后自动上传到 NotebookLM
# 需要 NotebookLM API（目前不可用）
```

## 注意事项

1. **文档大小限制**: NotebookLM 单个文档最大 500KB
   - 如果 `公众号文章分类.md` 超过限制，需要分割成多个文档
   - 按年份或分类拆分

2. **数据隐私**: 
   - NotebookLM 数据存储在 Google 服务器
   - 敏感内容谨慎上传

3. **查询成本**:
   - NotebookLM 基于 Gemini 2.5，目前免费
   - 未来可能收费，注意成本控制

4. **引用准确性**:
   - NotebookLM 提供 Source-Grounded 回答
   - 但仍需人工验证引用准确性

## 示例工作流

完整的文章创作流程：

```bash
# 1. 查询历史内容
"查询我的公众号知识库，关于 'Cursor 编程技巧' 的所有文章"

# 2. 分析内容空白
"我还没有深入写过 Cursor 的哪些功能？"

# 3. 生成文章大纲
npm run article:auto -- --topic "Cursor 高级技巧系列：Agent 模式深度解析"

# 4. 在文章中添加历史引用
node tools/add-historical-references.js

# 5. 发布并同步
npm run publish
npm run sync-articles
# 手动上传到 NotebookLM
```

## 未来增强

- [ ] NotebookLM API 集成（待官方发布）
- [ ] 自动文档分割和上传
- [ ] 基于知识库的 AI 写作助手
- [ ] 内容质量分析和优化建议
