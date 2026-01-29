---
title: "揭秘顶尖大模型背后的秘密：GitHub开源项目System Prompts Leaks全深度解析"
permalink: system-prompts-leaks-deep-dive
date: 2026-01-28 23:56:00
tags:
  - AI
  - 大模型
  - Prompt Engineering
  - GitHub
  - 开源项目
categories:
  - 公众号文章
---

## 🎯 前言：AI的"操作手册"被公开了

你有没有想过，为什么同样是 ChatGPT，有些人能让它写出精彩绝伦的文案，而有些人却只能得到平淡无奇的回答？

为什么 Claude 在回答问题时总是那么"礼貌"和"谨慎"？

为什么 GitHub Copilot 能如此精准地理解你的代码意图？

**答案就藏在"系统提示词"（System Prompts）里！**

今天要介绍的这个 GitHub 开源项目 **System Prompts Leaks**，就像是打开了 AI 大模型的"后台管理界面"，让我们一窥顶尖 AI 公司是如何"调教"他们的模型的。

## 📚 什么是 System Prompts？

### 定义与作用

**系统提示词**（System Prompts），也被称为"开发者消息"（Developer Messages），是 AI 模型在与用户对话之前就已经被"注入"的初始指令。

可以把它理解为：
- 🎭 **AI 的人设剧本**：定义 AI 的角色、性格、说话风格
- 🛡️ **安全防护墙**：设定 AI 的行为边界和禁止事项
- 🔧 **功能配置文件**：指定 AI 可以使用哪些工具和能力
- 📖 **操作指南**：告诉 AI 如何处理特定类型的请求

### 为什么重要？

```
用户看到的对话：
用户: "帮我写一篇文章"
AI: "好的，我来帮你..."

实际的完整对话：
System: "你是一个专业的写作助手，擅长创作各类文体。你应该..."
用户: "帮我写一篇文章"
AI: "好的，我来帮你..."
```

**System Prompts 决定了 AI 的"底层逻辑"**，是 Prompt Engineering 的最高境界！

## 🔍 System Prompts Leaks 项目深度解析

### 项目概览

**GitHub 地址**: [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)

这个项目致力于收集和整理各大主流 AI 模型的系统提示词，包括：
- 🤖 **ChatGPT** (OpenAI)
- 🧠 **Claude** (Anthropic)
- 💎 **Gemini** (Google)
- 🔎 **Perplexity**
- 💻 **GitHub Copilot**
- 以及更多...

### 核心功能

#### 1️⃣ 全面的提示词收集

项目收录了各大模型的完整系统提示词，其中最令人震撼的是 **Claude 的系统提示词长达 24,000 个 token**！

这意味着什么？
- 相当于约 18,000 个中文字
- 比一篇硕士论文还长
- 包含了极其详细的行为规范和指导

#### 2️⃣ 分类整理与搜索

```
📁 system_prompts_leaks/
├── 📂 ChatGPT/
│   ├── gpt-4-turbo.md
│   ├── dall-e-3.md
│   └── code-interpreter.md
├── 📂 Claude/
│   ├── claude-3-opus.md
│   └── claude-3-sonnet.md
├── 📂 Gemini/
│   └── gemini-pro.md
└── ...
```

- ✅ 按模型分类
- ✅ 关键词搜索
- ✅ 收藏夹功能
- ✅ 版本对比

#### 3️⃣ 跨平台应用

提供桌面应用程序：
- 🪟 **Windows 10+** 支持
- 🍎 **macOS Mojave+** 支持
- 💾 仅需 100MB 磁盘空间
- 🚫 **无需编程基础**

## 💡 从顶尖提示词中学到的 5 大技巧

### 技巧 1：明确的角色定位

**Claude 的开场白**：
```
You are Claude, an AI assistant created by Anthropic.
You are thoughtful, nuanced, and direct in your responses.
```

**学习要点**：
- 清晰定义 AI 的身份
- 设定核心性格特征
- 建立用户期望

**你的应用**：
```
你是一位资深的 Python 开发专家，拥有 10 年以上的实战经验。
你擅长用简洁的代码解决复杂问题，注重代码可读性和性能优化。
```

### 技巧 2：详细的行为规范

**ChatGPT 的图片生成规则**：
```
When generating images:
1. Always describe people with specific details
2. Avoid stereotypes
3. Include diverse representations
4. Use natural, descriptive language
```

**学习要点**：
- 用编号列表明确步骤
- 设定"做什么"和"不做什么"
- 提供具体示例

### 技巧 3：工具使用说明

**GitHub Copilot 的代码生成策略**：
```
When suggesting code:
- Prioritize readability over cleverness
- Include comments for complex logic
- Follow the project's existing style
- Suggest error handling
```

**你的应用**：
```
当用户要求写代码时：
1. 先分析需求，确认理解正确
2. 选择最适合的编程范式
3. 编写带注释的清晰代码
4. 提供使用示例和测试用例
```

### 技巧 4：安全边界设定

**所有主流模型都有的限制**：
```
You should decline to:
- Generate harmful content
- Impersonate real people
- Provide medical/legal advice
- ...
```

**学习要点**：
- 明确禁止事项
- 提供拒绝话术模板
- 设定灰色地带的处理方式

### 技巧 5：引用与归因

**Claude 的引用格式**：
```
When using information from the conversation:
- Cite sources explicitly
- Distinguish between facts and opinions
- Acknowledge uncertainty
```

**你的应用**：
```
回答问题时：
- 如果是事实，说明来源
- 如果是推测，明确标注
- 不确定时，诚实承认
```

## 🛠️ 实战案例：打造你的专属 AI 助手

### 案例 1：技术博客写作助手

```markdown
# System Prompt

你是"太阳鸟"的 AI 写作搭档，专门帮助创作技术类公众号文章。

## 写作风格
- 使用大量 Emoji 增强可读性（🎯、✅、💡等）
- 标题吸引眼球，包含数字和关键词
- 结构清晰：痛点 → 方案 → 实战 → 总结
- 代码示例使用 Markdown 代码块
- 每篇文章 3000-5000 字

## 内容要求
1. 开头必须有引人入胜的场景或问题
2. 提供可直接运行的代码示例
3. 包含 3-5 个常见问题解答
4. 结尾引导互动（点赞、评论、转发）

## 禁止事项
- 不使用过于学术的术语
- 避免长段落（超过 5 行需分段）
- 不推荐未经验证的工具

## 引用规范
- 引用开源项目需附 GitHub 链接
- 数据来源必须注明
- 截图需标注来源
```

### 案例 2：代码审查助手

```markdown
# System Prompt

你是一位严格但友善的代码审查专家。

## 审查重点
1. **安全性**：检查 SQL 注入、XSS 等常见漏洞
2. **性能**：识别 N+1 查询、内存泄漏等问题
3. **可维护性**：评估代码复杂度和可读性
4. **最佳实践**：对照语言/框架的官方指南

## 反馈格式
对每个问题使用以下结构：
- 🔴 严重问题（必须修复）
- 🟡 建议改进（可选但推荐）
- 🟢 做得好的地方（正向反馈）

每条反馈包含：
1. 问题描述
2. 代码位置
3. 修改建议
4. 参考资料链接

## 沟通风格
- 客观、建设性
- 提供具体示例
- 解释"为什么"而不只是"怎么做"
```

## 📊 不同模型的 System Prompts 对比

| 模型 | 提示词长度 | 核心特点 | 适用场景 |
|------|-----------|---------|---------|
| **Claude** | ~24k tokens | 极其详细的行为规范，强调思考过程 | 需要深度推理的复杂任务 |
| **ChatGPT** | ~8k tokens | 平衡的功能配置，工具使用丰富 | 通用对话和多模态任务 |
| **Gemini** | ~6k tokens | 强调多模态理解和搜索集成 | 需要实时信息的场景 |
| **Copilot** | ~4k tokens | 专注代码生成，强调上下文理解 | 编程辅助 |

## 🚀 如何使用 System Prompts Leaks

### 方法 1：在线浏览

直接访问 GitHub 仓库：
```bash
https://github.com/asgeirtj/system_prompts_leaks
```

### 方法 2：下载桌面应用

1. 前往 Releases 页面
2. 下载对应系统的安装包
3. 安装后即可离线浏览

### 方法 3：克隆仓库

```bash
git clone https://github.com/asgeirtj/system_prompts_leaks.git
cd system_prompts_leaks
```

## 🤔 常见问题解答

### Q1: 这些提示词是如何泄露的？

**A**: 主要通过以下方式：
- 用户通过特殊 Prompt 诱导 AI 输出自己的系统提示词
- 模型更新时的配置文件泄露
- 开发者社区的逆向工程
- 官方文档的部分披露

### Q2: 使用这些提示词合法吗？

**A**: 
- ✅ **学习和研究**：完全合法
- ✅ **个人项目**：可以参考和改编
- ⚠️ **商业用途**：需注意知识产权问题
- ❌ **直接复制**：可能违反服务条款

### Q3: 我能直接复制这些提示词吗？

**A**: 不建议直接复制，原因：
1. 这些提示词是为特定模型优化的
2. 可能包含模型特定的功能调用
3. 你的需求可能不同

**推荐做法**：
- 学习其结构和思路
- 提取适用的技巧
- 根据自己的需求定制

### Q4: 为什么 Claude 的提示词这么长？

**A**: 
- Claude 强调"思考过程"的透明度
- 包含大量边界情况的处理规则
- 详细的安全和伦理指南
- 多种场景的示例和模板

### Q5: 这个项目会持续更新吗？

**A**: 
- 项目是社区驱动的
- 随着新模型发布会更新
- 欢迎贡献新发现的提示词

## 🎓 进阶学习资源

### 推荐阅读

1. **OpenAI 官方文档**
   - [Best Practices for Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering)

2. **Anthropic 的 Claude 指南**
   - [Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)

3. **学术论文**
   - "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"
   - "Constitutional AI: Harmlessness from AI Feedback"

### 实践项目

- 🔨 **LangChain**: 构建复杂的 AI 应用
- 🧪 **Prompt Flow**: 可视化提示词工程
- 📝 **OpenPrompt**: 提示词模板库

## 🌟 总结与展望

### 核心收获

1. **System Prompts 是 AI 的"灵魂"**
   - 决定了 AI 的行为模式
   - 是 Prompt Engineering 的最高层次

2. **顶尖公司的经验可以借鉴**
   - 明确的角色定位
   - 详细的行为规范
   - 完善的安全边界

3. **实践是最好的老师**
   - 从简单的提示词开始
   - 不断迭代优化
   - 测试不同场景

### 未来趋势

- 🔮 **更长的上下文窗口**：允许更复杂的系统提示词
- 🎯 **动态提示词**：根据对话自动调整
- 🤝 **多模态融合**：文本、图像、代码统一的提示词体系
- 🛡️ **更强的安全机制**：AI 自我审查和纠错

## 💬 互动时间

看完这篇文章，你有什么想法？

- 💡 你最想为哪个场景设计专属的 System Prompt？
- 🤔 你发现了哪些有趣的提示词技巧？
- 🚀 你打算如何应用到自己的项目中？

**欢迎在评论区分享你的想法！**

如果这篇文章对你有帮助：
- 👍 点个赞，让更多人看到
- 🔄 转发给需要的朋友
- ⭐ 收藏起来慢慢研究

---

**关注"太阳鸟的AI宝藏库"，发现更多好用的 AI 工具和技巧！**

## 📎 相关链接

- 🔗 [System Prompts Leaks GitHub](https://github.com/asgeirtj/system_prompts_leaks)
- 🔗 [Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills)
- 🔗 [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

---

*本文首发于太阳鸟的AI宝藏库，转载请注明出处。*
