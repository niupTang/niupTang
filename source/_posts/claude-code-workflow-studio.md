---
title: Claude Code Workflow Studio：可视化设计你的 AI 智能体工作流
date: '2026-01-04T16:26:14.935026'
updated: '2026-01-05T23:18:07.891570'
tags: []
categories: []
cover: null
---

![Claude Code Workflow Studio](/images/cc-wf-studio/cover.png)

## 👋 简介

在这个 AI Agent 爆发的时代，如何优雅地编排复杂的 AI 工作流？

今天要介绍的 **Claude Code Workflow Studio** 就是为此而生的开源神器。它是一个 **VS Code 扩展**，通过直观的 **可视化拖拽界面**，让你像搭积木一样设计、编排 Claude Code 的 AI 智能体工作流。

> 🔗 **项目地址**：[https://github.com/breaking-brake/cc-wf-studio](https://github.com/breaking-brake/cc-wf-studio)

---

## ✨ 核心特性

### 1. 🎯 无代码可视化设计
告别繁琐的配置文件！通过拖拽节点（Node）和连线，你可以轻松构建包含**子智能体（Sub-Agents）**、**条件分支**、**用户交互**的复杂流程。

### 2. 🤖 AI 辅助优化 (Refine with AI)
这是最惊艳的功能。你不需要手动调整每个参数，只需点击 "Edit with AI"，用自然语言告诉它：
*   *"在数据处理前加一个用户确认步骤"*
*   *"添加一个错误处理分支"*
*   *"帮我优化一下这个提示词"*

AI 就会自动帮你修改工作流结构。它甚至支持中文交互！

### 3. ⚡ 一键导出与执行
设计完成后，可以直接导出为标准 `.claude` 格式文件：
*   `.claude/agents/*.md`
*   `.claude/commands/*.md`

这些文件可以直接被 Claude Code CLI 识别并执行。真正做到了"即画即用"。

### 4. 🧩 丰富的节点类型
支持多种功能节点，满足复杂业务逻辑：
*   **Prompt**: 定义提示词模板，支持变量。
*   **Sub-Agent**: 调用特定的子智能体（可配置模型、权限）。
*   **Skill**: 集成 Claude Code Skills（支持个人和团队共享）。
*   **MCP**: 调用外部 MCP (Model Context Protocol) 工具。
*   **IfElse / Switch**: 强大的逻辑控制分支。
*   **AskUserQuestion**: 在工作流中暂停，等待用户输入决策。

### 5. 🔒 本地安全
所有操作都在 VS Code 本地运行，数据安全有保障。

---

## 🛠️ 如何开始？

### 安装
（目前项目处于早期阶段，即将上架 VS Code 插件市场）
你也可以从源码安装：

```bash
git clone https://github.com/breaking-brake/cc-wf-studio.git
cd cc-wf-studio
npm install
npm run build
npx vsce package
# 然后在 VS Code 中安装生成的 .vsix 文件
```

### 快速上手
1.  在 VS Code 中打开命令面板 (`Ctrl+Shift+P`)。
2.  输入 `Claude Code Workflow Studio: Open Editor`。
3.  开始拖拽节点，连接你的第一个 AI 工作流！

---

## 💡 为什么选择它？

*   **直观**：复杂的逻辑一眼看懂，方便团队沟通。
*   **高效**：利用 AI 辅助快速迭代，试错成本极低。
*   **兼容**：完美兼容 Claude Code 生态，无缝集成。

如果你正在使用 Claude Code 构建自动化任务，或者想体验可视化的 Agent 开发，**Claude Code Workflow Studio** 绝对值得一试！

---

![Solar Bird](/images/logo.png)
*关注【太阳鸟】，探索 AI 编程的无限可能*