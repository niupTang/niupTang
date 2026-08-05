---
title: OpenSkills：让 Claude Code 的 Skills 系统在所有 AI 编程助手中通用
permalink: openskills-universal-skills-loader
date: 2026-01-18 23:30:00
categories:
  - 开源项目
tags:
  - AI编程
  - Claude Code
  - Skills
  - 开发工具
  - GitHub项目
  - 教程
---

如果你正在使用 **Claude Code、Cursor、Windsurf** 或其他 AI 编程助手，你可能遇到过这样的困境：

> "我在 Claude Code 里配置好的 Skills，为什么在 Cursor 里用不了？"

每个 AI 助手都有自己的生态系统，Skills、插件、配置各自为政。开发者不得不在不同工具间重复配置，效率大打折扣。

今天要介绍的 **OpenSkills** 项目，就是为了解决这个问题而生的。

---

## 🎯 什么是 OpenSkills？

**OpenSkills** 是一个通用的 Skills 加载器，它的核心理念非常简单：

> **一次安装，到处使用。**

它完全兼容 Anthropic 的 **Claude Code Skills** 格式（`SKILL.md`），但通过 `AGENTS.md` 让所有 AI 编程助手都能使用这些 Skills。

### 核心特性

✅ **完全兼容 Claude Code** - 使用相同的 `SKILL.md` 格式和官方市场  
✅ **通用性强** - 支持 Claude Code、Cursor、Windsurf、Aider、Codex 等所有主流工具  
✅ **渐进式加载** - 只在需要时加载 Skills，保持上下文清洁  
✅ **版本控制友好** - Skills 可以纳入项目，团队协作更方便  
✅ **支持私有部署** - 从本地路径或私有 Git 仓库安装

---

## 🧠 工作原理：从 Claude Code 到通用系统

### Claude Code 的 Skills 机制

Claude Code 通过 `<available_skills>` markdown 块暴露可用的 Skills：

```markdown
---
name: art-master
description: 艺术风格主控 - 自动生成艺术风格提示词，支持水墨画、油画、超现实、插画等多种艺术风格
---
## 🎯 核心功能

自动生成高质量的艺术风格提示词，支持：
- 🎨 艺术风格（水墨画、油画、超现实、插画等）
- ✨ 特殊效果（玻璃碎片、光影、粒子效果等）
- 🖌️ 绘画技法（笔触、质感、构图等）
- 🌈 色彩运用（冷暖色调、对比、和谐）
- 📜 文化风格（中式、日式、西方古典等）

---

## 📋 使用方式

### 快速生成


生成一个中国水墨画风格


或

艺术风格：超现实主义，梦境氛围


```

当用户提出任务时，Claude 会动态加载匹配的 `SKILL.md` 文件。

### OpenSkills 的实现方式

OpenSkills 生成**完全相同的 XML 格式**到 `AGENTS.md` 中，并通过 CLI 命令加载 Skills：

```bash
npx openskills read <skill-name>
```

这样，任何能读取 `AGENTS.md` 的 AI 助手都能使用 Claude Code 的 Skills，无需 Claude Code 本身。

### 对比示意

| **Claude Code** | **OpenSkills** |
|----------------|----------------|
| `.claude/skills/` | `.agent/skills/` 或 `.claude/skills/` |
| `Skill("name")` | `npx openskills read <name>` |
| 仅 Claude Code 可用 | 所有 AI 助手可用 |

---

## 🚀 快速上手：5 分钟安装使用

### 1. 安装 Skills

#### 从 Anthropic 官方市场安装

```bash
npx openskills install anthropics/skills
npx openskills sync
```

#### 从任意 GitHub 仓库安装

```bash
npx openskills install your-org/your-skills
```

#### 从本地路径安装

```bash
npx openskills install ./local-skills/my-skill
```

#### 从私有 Git 仓库安装

```bash
npx openskills install git@github.com:your-org/private-skills.git
```

### 2. 同步到 AGENTS.md

```bash
npx openskills sync
```

这会将所有已安装的 Skills 信息写入 `AGENTS.md`，AI 助手会自动读取。

### 3. 在 AI 助手中使用

当你向 AI 助手提出任务时，它会检查 `AGENTS.md` 中的可用 Skills，并在需要时自动调用：

```bash
npx openskills read pdf
```

### 4. 管理 Skills

```bash
# 查看已安装的 Skills
npx openskills list

# 更新所有 Skills
npx openskills update

# 移除特定 Skill
npx openskills remove pdf

# 交互式管理
npx openskills manage
```

---

## 🧬 创建自己的 Skills

### SKILL.md 格式详解

OpenSkills 使用 Anthropic 的标准格式：

```markdown
---
name: pdf
description: Comprehensive PDF manipulation toolkit for extracting text and tables, creating new PDFs, merging/splitting documents, and handling forms.
---

# PDF Skill Instructions

When the user asks you to work with PDFs, follow these steps:

1. Install dependencies: `pip install pypdf2`
2. Extract text using scripts/extract_text.py
3. Use references/api-docs.md for details
```

### 最小化结构

```
my-skill/
└── SKILL.md
```

安装：

```bash
npx openskills install ./my-skill
```

### 带资源的完整示例

```
my-skill/
├── SKILL.md
├── references/      # API 文档、参考资料
├── scripts/         # 辅助脚本
└── assets/          # 图片、模板等资源
```

Skills 会在加载时提供基础目录路径，方便引用这些资源。

### 本地开发技巧

使用符号链接进行本地开发：

```bash
git clone git@github.com:your-org/my-skills.git ~/dev/my-skills
mkdir -p .claude/skills
ln -s ~/dev/my-skills/my-skill .claude/skills/my-skill
```

这样可以直接在源码仓库中修改，无需重复安装。

### 学习创建 Skills

Anthropic 官方提供了 `skill-creator` 工具：

```bash
npx openskills install anthropics/skills
npx openskills read skill-creator
```

---

## 💡 核心优势与应用场景

### 为什么选择 OpenSkills？

1. **完全兼容 Claude Code**  
   使用相同的格式、相同的市场、相同的文件夹结构，无缝迁移。

2. **通用性**  
   不再被单一工具绑定，Claude Code、Cursor、Windsurf、Aider 等都能用。

3. **渐进式加载**  
   Skills 只在需要时加载，避免污染 AI 助手的上下文窗口。

4. **版本控制友好**  
   Skills 可以放在项目的 `.agent/skills/` 目录中，纳入 Git 管理，团队协作更方便。

5. **支持私有部署**  
   企业可以创建内部 Skills 库，保护专有知识和工作流。

### 实际应用场景

#### 场景 1：团队协作

团队成员使用不同的 AI 编程助手（有人用 Claude Code，有人用 Cursor），但通过 OpenSkills 统一 Skills 配置：

```bash
# 项目根目录
npx openskills install company/internal-skills --universal
npx openskills sync
git add .agent/skills AGENTS.md
git commit -m "Add team skills"
```

所有成员 clone 项目后，AI 助手会自动识别这些 Skills。

#### 场景 2：多工具切换

你可能在不同场景下使用不同工具：
- 写代码用 Cursor
- 调试用 Claude Code
- 脚本任务用 Aider

通过 OpenSkills，你的 Skills 配置在所有工具间无缝迁移。

#### 场景 3：私有 Skills

企业内部有特定的开发规范、API 文档、代码模板：

```bash
npx openskills install git@github.com:company/private-skills.git
```

这些 Skills 只在内部使用，不会泄露到公网。

#### 场景 4：渐进式学习

你可以为不同的技术栈创建专门的 Skills（React、Django、Kubernetes 等），在需要时加载，避免上下文混乱。

---

## 🌍 Universal Mode：多 AI 助手共存

如果你同时使用 Claude Code 和其他 AI 助手，可以启用 **Universal Mode**，将 Skills 安装到 `.agent/skills/` 以避免冲突：

```bash
npx openskills install anthropics/skills --universal
```

优先级顺序（从高到低）：

1. `./.agent/skills/` （项目级别，Universal）
2. `~/.agent/skills/` （全局，Universal）
3. `./.claude/skills/` （项目级别，Claude Code）
4. `~/.claude/skills/` （全局，Claude Code）

---

## ❓ 常见问题

### Q: OpenSkills 和 MCP 有什么区别？

**A:** MCP（Model Context Protocol）用于**动态工具调用**，需要服务器支持。而 Skills 是**静态指令和资源文件**，无需服务器，更轻量且通用。两者解决不同问题，可以互补使用。

### Q: 如何在 Cursor 中使用 OpenSkills？

**A:** 安装 Skills 后运行 `npx openskills sync`，Skills 信息会写入 `AGENTS.md`。Cursor 会自动读取，并在需要时通过 `npx openskills read <name>` 加载具体内容。

### Q: 可以创建私有的 Skills 吗？

**A:** 完全可以！OpenSkills 支持从本地路径、私有 Git 仓库安装，非常适合企业内部知识库和专有工作流。

### Q: Skills 会占用多少上下文？

**A:** Skills 采用**渐进式加载**，只在 `AGENTS.md` 中显示名称和描述（很小），完整内容只在需要时加载。这样可以保持 AI 助手的上下文清洁。

---

## 🎯 总结

OpenSkills 解决了 AI 编程助手生态碎片化的核心痛点：

✅ **一次配置，到处使用** - 不再为不同工具重复劳动  
✅ **开源生态，社区驱动** - 兼容 Anthropic 官方格式，生态丰富  
✅ **轻量灵活，渐进加载** - 不污染上下文，按需使用  

如果你正在使用多个 AI 编程助手，或者希望在团队中统一 Skills 配置，OpenSkills 绝对值得一试！

---

## 📦 快速开始

```bash
# 全局安装（可选）
npm i -g openskills

# 安装官方 Skills
npx openskills install anthropics/skills

# 同步到 AGENTS.md
npx openskills sync

# 开始使用！
```

**GitHub 仓库：** [numman-ali/openskills](https://github.com/numman-ali/openskills)

---

> 如果觉得这篇文章对你有帮助，欢迎**点赞、在看、分享**！🌟  
> 关注公众号，获取更多 AI 开发工具和实战技巧！
