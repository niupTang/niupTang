---
title: Antigravity Skills 来了！与 Workflow 的终极对决
date: 2026-01-14
tags: [AI编程, Antigravity, Skills, Workflow, 效率工具]
categories: [技术分享]
cover: /images/skills-workflow/skills_workflow_comparison.png
---

点击上方🔺公众号🔺关注我✅

大家好，我是程序员太阳鸟。

AI 编程再上新热度，**Antigravity 开始支持 Skills** 了！

之前 Antigravity 自己有 Workflow，那时候我觉得 Workflow 也挺好用的，在特殊的时候只需要调用命令既可。如今 Antigravity 开始支持 Skills，真的把我搞迷糊了。

今天就来深度拆解一下 **Skills 和 Workflow 到底有什么区别**，以及如何选择使用它们。

![Skills vs Workflow 对比](/images/skills-workflow/skills_workflow_comparison.png)

---

## 一、背景：为什么需要 Skills？

### 1.1 Workflow 的优势与局限

在 Antigravity 中，**Workflow（工作流）** 一直是自动化的利器：

✅ **命令触发** - 通过 `/command` 快速调用  
✅ **流程化** - 定义明确的执行步骤  
✅ **自动化** - 支持 `// turbo` 自动执行  
✅ **可复用** - 保存为 `.md` 文件，随时调用

**但也有局限：**

❌ **需要主动调用** - 必须记住命令名称  
❌ **单一文件** - 所有逻辑都在一个 `.md` 文件中  
❌ **缺少智能** - 不能根据上下文自动触发

### 1.2 Skills 的诞生

为了解决这些问题，Antigravity 引入了 **Skills 系统**：

🎯 **自动识别** - AI 根据对话内容自动判断是否调用  
🎯 **模块化** - 支持多文件结构（scripts、examples、resources）  
🎯 **智能化** - 上下文感知，动态调用  
🎯 **可扩展** - 可以包含 Python、JavaScript 等脚本

**核心理念：** Skills 是"能力扩展"，Workflow 是"流程自动化"。

---

## 二、核心概念深度解析

### 2.1 什么是 Skills？

**Skills** 是 Antigravity 的**智能能力模块**，类似于给 AI 安装"插件"。

#### 文件结构

```
.agent/skills/my-skill/
├── SKILL.md       # 核心说明文件（必需）
├── scripts/       # 辅助脚本（可选）
│   ├── helper.py
│   └── processor.js
├── examples/      # 使用示例（可选）
│   └── example1.md
└── resources/     # 资源文件（可选）
    └── template.yaml
```

#### SKILL.md 格式

```markdown
---
name: My Skill
description: 这个 Skill 的简短描述
---

# 使用说明

这个 Skill 可以帮助你...

## 功能特性

- 功能 1
- 功能 2

## 使用方法

详细的使用说明...
```

#### 工作原理

![Skills 工作流程](/images/skills-workflow/skills_workflow_architecture.png)

1. **用户输入** - "帮我生成提示词"
2. **AI 分析** - 理解用户意图
3. **自动匹配** - 识别到需要调用 Skill
4. **加载执行** - 读取 SKILL.md 并执行相关脚本
5. **返回结果** - 输出生成的内容

**关键特点：** 全程自动，无需用户主动调用命令。

### 2.2 什么是 Workflow？

**Workflow** 是 Antigravity 的**流程自动化工具**，用于固化重复性操作。

#### 文件结构

```
.agent/workflows/
├── auto-generate-article.md
├── deploy-production.md
└── code-review.md
```

#### Workflow 文件格式

```markdown
---
description: 工作流简短描述
---

# 工作流标题

## 步骤 1: 第一步
具体操作说明...

// turbo
## 步骤 2: 自动执行的步骤
这个步骤会自动运行...

## 步骤 3: 完成
```

#### 工作原理

1. **用户命令** - `/auto-generate-article`
2. **解析 Workflow** - 读取 `.md` 文件
3. **加载步骤** - 按顺序执行
4. **自动运行** - 标记 `// turbo` 的步骤自动执行
5. **返回结果** - 完成所有步骤

**关键特点：** 需要主动调用，但执行过程可以全自动。

---

## 三、深度对比：Skills vs Workflow

### 3.1 目录结构对比

![目录结构对比](/images/skills-workflow/directory_structure_comparison.png)

| 特性 | Skills | Workflow |
|------|--------|----------|
| **文件组织** | 目录结构，多文件 | 单个 `.md` 文件 |
| **复杂度支持** | 高（可包含脚本、资源） | 中（主要是步骤说明） |
| **可维护性** | 高（模块化） | 中（单文件） |

### 3.2 触发方式对比

![触发机制对比](/images/skills-workflow/trigger_mechanism_comparison.png)

| 特性 | Skills | Workflow |
|------|--------|----------|
| **触发方式** | 🤖 AI 自动识别 | 👤 用户命令触发 |
| **使用门槛** | 低（自然对话） | 中（需记住命令） |
| **灵活性** | 高（上下文感知） | 中（固定流程） |
| **适用场景** | 通用能力扩展 | 特定流程自动化 |

### 3.3 使用场景对比

![使用场景对比](/images/skills-workflow/use_case_scenarios.png)

#### Skills 适用场景

✅ **通用能力扩展**
- AI 提示词生成
- 代码分析工具
- 知识库搜索

✅ **智能辅助**
- 自动识别需求
- 上下文感知
- 动态调用

✅ **模块化功能**
- 独立功能单元
- 可复用组件
- 跨项目使用

#### Workflow 适用场景

✅ **流程自动化**
- 文章发布流程
- 代码部署流程
- 批量处理任务

✅ **固定步骤**
- 明确的执行顺序
- 可重复的操作
- 标准化流程

✅ **团队协作**
- 共享工作流程
- 统一操作规范
- 最佳实践沉淀

### 3.4 完整对比表

| 对比维度 | Skills | Workflow |
|---------|--------|----------|
| **触发方式** | AI 自动识别 | 命令触发 (`/command`) |
| **文件结构** | 目录 + 多文件 | 单个 `.md` 文件 |
| **复杂度** | 高（支持脚本、资源） | 中（主要是步骤说明） |
| **学习曲线** | 中等 | 较低 |
| **适用场景** | 通用能力扩展 | 特定流程自动化 |
| **可扩展性** | 高（模块化） | 中（单文件） |
| **团队协作** | 中（需要配置） | 高（Git 管理） |
| **调用方式** | 自然对话 | 命令或 npm 脚本 |

---

## 四、实战示例

### 4.1 创建一个基础 Skill

**场景：** 创建一个"代码注释生成器" Skill

#### 步骤 1: 创建目录结构

```bash
.agent/skills/code-commenter/
├── SKILL.md
└── scripts/
    └── generate-comments.py
```

#### 步骤 2: 编写 SKILL.md

```markdown
---
name: Code Commenter
description: 自动为代码生成专业注释
---

# 代码注释生成器

这个 Skill 可以自动为你的代码生成专业、规范的注释。

## 功能特性

- 支持多种编程语言（Python、JavaScript、Java 等）
- 生成函数/类级别的文档注释
- 符合各语言的注释规范（如 JSDoc、Docstring）

## 使用方法

只需要在对话中提到"生成注释"或"添加注释"，AI 会自动调用这个 Skill。

示例：
- "帮我给这个函数添加注释"
- "生成这个类的文档注释"
```

#### 步骤 3: 编写辅助脚本（可选）

```python
# scripts/generate-comments.py
def generate_docstring(code, language):
    """
    根据代码生成文档注释
    """
    # 实现逻辑...
    pass
```

#### 步骤 4: 使用

在 Antigravity 中直接对话：

```
用户: 帮我给这个函数添加注释

def calculate_total(items):
    return sum(item.price for item in items)
```

AI 会自动识别并调用 `code-commenter` Skill，生成：

```python
def calculate_total(items):
    """
    计算商品列表的总价

    Args:
        items (list): 商品对象列表，每个对象需包含 price 属性

    Returns:
        float: 所有商品的价格总和
    """
    return sum(item.price for item in items)
```

### 4.2 创建一个基础 Workflow

**场景：** 创建一个"代码发布流程" Workflow

#### 步骤 1: 创建文件

```bash
.agent/workflows/deploy-production.md
```

#### 步骤 2: 编写 Workflow

```markdown
---
description: 生产环境部署完整流程
---

# 生产环境部署流程

这个 workflow 会自动完成从测试到部署的全流程。

## 前置条件
- 所有代码已提交
- 测试通过
- 已配置部署密钥

// turbo-all
## 步骤 1: 运行测试
确保所有测试通过：
\`\`\`bash
npm test
\`\`\`

## 步骤 2: 构建生产版本
\`\`\`bash
npm run build
\`\`\`

## 步骤 3: 更新版本号
\`\`\`bash
npm version patch
\`\`\`

## 步骤 4: 提交 Git
\`\`\`bash
git add .
git commit -m "chore: release new version"
git push origin main --tags
\`\`\`

## 步骤 5: 部署到生产环境
\`\`\`bash
npm run deploy:production
\`\`\`

## 完成
✅ 生产环境部署成功！
```

#### 步骤 3: 使用

```bash
# 调用 workflow
/deploy-production

# 或通过 npm 脚本
npm run deploy:prod
```

**效果：** 一个命令，自动执行所有步骤，从测试到部署全自动！

### 4.3 Skills 调用 Workflow（组合使用）

**最佳实践：** Skills 可以调用 Workflow，实现更强大的功能。

#### 示例：智能发布助手

创建一个 Skill，根据代码变更自动选择合适的 Workflow：

```markdown
---
name: Smart Deployer
description: 智能分析代码变更，自动选择部署策略
---

# 智能发布助手

这个 Skill 会分析你的代码变更，自动选择合适的部署流程。

## 工作原理

1. 分析 Git 提交记录
2. 检测变更类型（功能/修复/重构）
3. 自动选择对应的 Workflow：
   - 小修复 → `/hotfix-deploy`
   - 新功能 → `/feature-deploy`
   - 重大更新 → `/major-release`

## 使用方法

只需说"帮我发布代码"，AI 会自动分析并执行。
```

**使用效果：**

```
用户: 帮我发布代码

AI: 检测到你修复了一个 Bug，自动调用 /hotfix-deploy workflow...
    ✅ 测试通过
    ✅ 构建完成
    ✅ 已部署到生产环境
```

---

## 五、我的实战经验

### 5.1 我的 Skills 库

我目前在用的 Skills：

#### 1. **skill-prompt-generator** - AI 提示词生成器

**功能：**
- 12 个专业领域 Skills
- 1140+ 元素库
- 智能领域路由

**使用场景：**
```
用户: 帮我生成提示词，电影级的亚洲女性

AI: [自动调用 intelligent-prompt-generator skill]
    生成：Cinematic portrait of young East Asian woman...
```

**项目地址：** `.agent/skill-prompt-generator/`

#### 2. **NotebookLM Skill** - 知识库搜索

**功能：**
- 搜索公众号知识库
- 智能问答
- 内容推荐

**使用场景：**
```
用户: 查询我的公众号知识库，关于 AI 编程的文章

AI: [自动调用 NotebookLM Skill]
    找到 15 篇相关文章...
```

### 5.2 我的 Workflow 库

我目前在用的 Workflows：

#### 1. **auto-generate-article** - 自动生成文章

**功能：**
- 素材收集
- 大纲生成
- 图片获取
- 文章生成
- 发布到公众号

**使用：**
```bash
/auto-generate-article
```

**效果：** 从 2 小时缩短到 5 分钟！

#### 2. **dismantle-project** - 深度拆解项目

**功能：**
- 分析 GitHub 项目
- 生成架构文档
- 输出技术文章

**使用：**
```bash
/dismantle-project
```

#### 3. **generate-content-ppt** - 生成 PPT

**功能：**
- 自动生成内容 PPT
- 支持多种模板
- 一键导出

**使用：**
```bash
/generate-content-ppt
```

### 5.3 如何选择？

**我的经验法则：**

| 场景 | 选择 | 原因 |
|------|------|------|
| 通用能力（如提示词生成） | Skills | 自动识别，无需记命令 |
| 固定流程（如文章发布） | Workflow | 步骤明确，可复用 |
| 智能辅助（如知识库搜索） | Skills | 上下文感知 |
| 批量操作（如批量部署） | Workflow | 流程化管理 |
| 跨项目功能（如代码分析） | Skills | 模块化，可移植 |
| 团队协作（如发布规范） | Workflow | Git 管理，易共享 |

**最佳实践：** Skills + Workflow 组合使用！

---

## 六、最佳实践与建议

### 6.1 Skills 设计原则

1. **单一职责** - 每个 Skill 只做一件事
2. **清晰命名** - 名称要能准确描述功能
3. **完善文档** - SKILL.md 要详细说明用法
4. **模块化** - 合理使用 scripts、examples、resources
5. **可测试** - 提供示例和测试用例

### 6.2 Workflow 设计原则

1. **步骤清晰** - 每个步骤做一件事
2. **错误处理** - 考虑异常情况
3. **参数化** - 支持不同场景
4. **文档完善** - 添加使用示例
5. **团队友好** - 易于理解和维护

### 6.3 迁移指南：从 Workflow 到 Skills

**何时迁移？**

- ✅ 功能需要在多个项目中复用
- ✅ 希望 AI 自动识别调用
- ✅ 需要复杂的脚本支持
- ✅ 功能是通用能力而非特定流程

**迁移步骤：**

1. **创建 Skill 目录结构**
2. **将 Workflow 逻辑拆分到 SKILL.md**
3. **提取脚本到 scripts/ 目录**
4. **添加示例到 examples/ 目录**
5. **测试自动识别是否正常**

**示例：** 将"代码审查" Workflow 迁移到 Skill

**Before (Workflow):**
```markdown
---
description: 代码审查流程
---

# 代码审查

## 步骤 1: 静态分析
运行 ESLint...

## 步骤 2: 安全扫描
运行安全检查...
```

**After (Skill):**
```
.agent/skills/code-reviewer/
├── SKILL.md
├── scripts/
│   ├── eslint-check.js
│   └── security-scan.js
└── examples/
    └── review-example.md
```

---

## 七、知识星球项目展示

不知不觉星球已经开展了 **50+ 种项目**，一屏幕都放不下！

**包括：**
- 🎨 AI 提示词生成系统
- 📝 自动化文章生成
- 🔍 知识库搜索
- 🎬 视频内容生成
- 📊 数据分析工具
- 🚀 自动化部署流程
- ... 还有更多！

**最近火热的 CC（Cursor Composer）也有很多人在实践。**

现在加入，不仅能学到项目，还有各种福利可以领取。券后，**不到 50 的价格，一年时间**，怎么想都是划算的 [呲牙]。

---

## 八、总结

### 🎯 核心要点

1. **Skills** = 智能能力扩展，AI 自动识别调用
2. **Workflow** = 流程自动化，命令触发执行
3. **两者互补**，组合使用效果最佳

### 🚀 选择建议

- **通用功能** → 用 Skills（如提示词生成、代码分析）
- **固定流程** → 用 Workflow（如发布流程、批量操作）
- **最佳实践** → Skills 调用 Workflow

### 📚 下一步

1. **尝试创建你的第一个 Skill**
2. **优化现有的 Workflow**
3. **探索 Skills + Workflow 组合**

---

**如果你觉得这篇文章有用，记得点赞 + 在看 + 转发！**

你有什么有趣的 Skills 或 Workflow 想法？欢迎在评论区分享！

> 💡 **关注我，持续分享 AI 编程技巧、效率工具、实战经验！**

---

**太阳鸟**  
98 年在职成长型博主  
【添加太阳鸟微信送你一份惊喜副业大礼包+技术交流群】
