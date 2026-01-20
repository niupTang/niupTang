# NotebookLM Workflow 集成指南

## 概述

本文档说明如何将 NotebookLM Skill 集成到现有的 niupTang 工作流系统中。

## 已集成的 Workflows

### ✅ `/knowledge-search` (新建)

**用途**: 使用 NotebookLM 查询公众号知识库

**主要功能**:
- 查询历史文章内容
- 避免重复创作
- 寻找可引用的素材
- 分析内容演进趋势

**查看详情**: `.agent/workflows/knowledge-search.md`

---

### ✅ `/auto-generate-article` (已增强)

**集成点**: 步骤 0 - 查询知识库

**增强内容**:
在开始搜集网络素材前，先查询自己的知识库：
```
"查询我的公众号知识库，关于 '{主题}' 的所有相关内容"
```

**优势**:
- 避免重复已写过的内容
- 发现新的创作角度
- 引用历史文章增强权威性

---

### 🔄 `/generate-content-ppt` (计划增强)

**建议集成点**: 步骤 2 - 分析文章结构

**增强方案**:
```bash
# 在生成 PPT 大纲前查询关联内容
"这篇文章的主题在我之前的文章中有哪些相关内容？提取可用于 PPT 的要点"
```

**预期效果**:
- PPT 内容更丰富
- 增加历史对比章节
- 提升演讲深度

---

## 快速开始

### 1. 安装 NotebookLM Skill

Windows PowerShell:
```powershell
# 创建 skills 目录
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\skills"

# 克隆仓库
cd "$env:USERPROFILE\.claude\skills"
git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm
```

### 2. 准备公众号文章文档

```powershell
# 确保文章分类文档是最新的
npm run sync-articles
```

这会更新 `source/公众号文章分类.md`

### 3. 上传到 NotebookLM

1. 访问 https://notebooklm.google.com/
2. 创建新笔记本："太阳鸟公众号知识库"
3. 上传 `source/公众号文章分类.md`
4. 等待 Gemini 处理完成

### 4. 添加到 Skill 库

在 Claude Code 中执行:
```
"Add this notebook to my library: [你的 NotebookLM URL]"
标签: wechat-articles, knowledge-base
描述: 太阳鸟公众号所有文章的分类整理
```

### 5. 测试查询

```
"What are my skills?"
→ 应该看到 notebooklm skill

"查询我的公众号知识库，关于 'AI 编程工具' 的文章"
→ 应该返回相关文章列表和摘要
```

---

## 使用场景示例

### 场景 1: 创作新文章前查重

```bash
# 1. 启动文章创作流程
/auto-generate-article

# 2. 当被问及主题时，先查询知识库
"我想写关于 'Cursor 多行编辑技巧' 的文章"

# 3. Claude 会自动调用 NotebookLM 查询
# 返回：你已经写过 2 篇关于 Cursor 的文章...

# 4. 基于结果决定创作方向
继续创作? 调整角度? 还是选择新主题?
```

### 场景 2: 制作 PPT 时引用历史内容

```bash
# 1. 启动 PPT 生成流程
/generate-content-ppt

# 2. 在分析文章阶段查询关联内容
"这篇文章提到的 'AI Agent 架构'，我之前有写过相关内容吗？"

# 3. NotebookLM 返回相关片段
# 可以在 PPT 的"背景"或"延伸阅读"章节使用
```

### 场景 3: 独立知识库查询

```bash
# 直接使用 /knowledge-search
"查询我的公众号知识库，总结我对 'DeepSeek' 的所有看法"

# 或更具体的查询
"我在哪篇文章中提到了 'MCP 协议'？提取相关技术细节"
```

---

## 数据同步策略

### 当前方案：手动同步

**频率**: 每周或每次发布重要文章后

**步骤**:
```bash
# 1. 同步最新文章
npm run sync-articles

# 2. 访问 NotebookLM
# 3. 上传更新后的 source/公众号文章分类.md
# 4. NotebookLM 自动识别增量变化
```

### 未来方案：自动同步

待 NotebookLM API 开放后，创建自动化脚本：

```javascript
// tools/auto-sync-notebooklm.js
// 每次 npm run sync-articles 后自动触发
// 通过 NotebookLM API 更新文档
```

---

## 文档大小管理

### 当前状态

`公众号文章分类.md` 文件大小检查：
```powershell
(Get-Item "source\公众号文章分类.md").Length / 1KB
# 当前约 142 KB
```

### NotebookLM 限制

- 单个文档最大: **500 KB**
- 单个笔记本最多: **50 个文档**
- 总大小限制: **约 25 MB**

### 应对策略

**当文档超过 400KB 时**，按年份或分类拆分：

```
公众号知识库/
├── 2024年文章.md
├── 2025年文章.md
├── AI编程工具分类.md
├── 副业创业分类.md
└── ...
```

脚本支持（未来实现）：
```bash
node tools/split-article-catalog.js --by year
# 或
node tools/split-article-catalog.js --by category
```

---

## 最佳实践

### 1. 定期更新知识库

建议每发布 5-10 篇新文章后更新一次 NotebookLM：
```bash
npm run sync-articles
# 然后手动上传到 NotebookLM
```

### 2. 使用描述性查询

❌ 不好: "AI"
✅ 好: "我写过关于 'AI 编程工具对比分析' 的文章吗？"

### 3. 引用时注明出处

在生成的文章中添加引用：
```markdown
> 如我在[《Cursor vs GitHub Copilot》](链接)一文中提到...
```

### 4. 利用 NotebookLM 的引用功能

NotebookLM 返回的答案会包含引用链接，务必保留这些引用以便溯源。

---

## 故障排查

### Skill 未找到

**症状**: `"What are my skills?"` 没有显示 notebooklm

**解决**:
```powershell
# 检查安装路径
Test-Path "$env:USERPROFILE\.claude\skills\notebooklm"

# 重新克隆
cd "$env:USERPROFILE\.claude\skills"
git clone https://github.com/PleasePrompto/notebooklm-skill notebooklm
```

### 浏览器自动化失败

**症状**: `Browser automation failed`

**解决**:
1. 检查 Chrome 浏览器是否已安装
2. 删除浏览器状态重新认证:
```powershell
Remove-Item -Recurse "$env:USERPROFILE\.claude\skills\notebooklm\data\browser_state"
```

### 查询无结果

**症状**: NotebookLM 返回 "I don't have information about that"

**可能原因**:
1. 文档未上传到 NotebookLM
2. 查询关键词不匹配
3. 笔记本未添加到 Skill 库

**解决**:
- 确认 NotebookLM 中文档状态
- 尝试不同的查询关键词
- 重新添加笔记本到库

---

## 成本考虑

### 当前（2026-01）

- **NotebookLM**: 免费
- **Claude Code**: 免费（本地使用）
- **总成本**: $0/月

### 未来可能

Google 可能对 NotebookLM 收费，估计：
- 个人版: $10-20/月
- 企业版: $50-100/月

**建议**: 尽早使用，建立依赖习惯，未来付费时更容易接受。

---

## 扩展想法

### 1. 多知识库支持

除了公众号文章，还可以创建：
- **技术笔记库**: 个人技术笔记和代码片段
- **读书笔记库**: 读过的技术书籍摘要
- **项目文档库**: niupTang 项目的技术文档

### 2. 知识图谱可视化

定期用 NotebookLM 生成知识分析：
```
"分析我的公众号知识库，生成内容主题分布和关联关系"
```

然后用 Mermaid 可视化。

### 3. 智能写作助手

结合 NotebookLM 和 Claude Code：
```
1. 用户提出写作主题
2. NotebookLM 查找相关历史内容
3. Claude 基于知识库 + 网络素材生成大纲
4. 人工审核后自动写作
5. 自动添加历史文章引用
```

---

## 更新日志

- **2026-01-05**: 初始版本，创建 `/knowledge-search` workflow
- **2026-01-05**: 增强 `/auto-generate-article` workflow，添加知识库查询步骤

---

## 相关文档

- [NotebookLM Skill 官方文档](https://github.com/PleasePrompto/notebooklm-skill)
- [NotebookLM 使用指南](https://notebooklm.google.com/)
- [实施计划详情](../../../.gemini/antigravity/brain/3bd6ec0e-b59c-4364-90be-dd228a57d39d/implementation_plan.md)
