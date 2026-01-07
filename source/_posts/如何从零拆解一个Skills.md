---
title: "如何实现从零拆解一个Skills项目？（硬核重制版）"
permalink: 如何实现从零拆解一个Skills项目
date: 2026-01-06 21:34:29
tags:
  - 公众号
  - 原创
  - MCP
  - AI Skills
  - Python
  - Playwright
categories:
  - 公众号文
description: 2026 年是 Skills 元年。我们推翻了之前的猜想，深入源码真机拆解 GitHub 开源项目 notebooklm-skill，带你看看一个生产级的 AI Skill 究竟是如何用 Python 和 Patchright 炼成的。
cover: /images/skills-dismantle/cover.png
---

大家好，我是太阳鸟。

2026 年我敢说是 **Skills 元年**。

2024-2025 年，大家都在疯狂造 "Agent"（智能体）。每个人都想做一个“原本该由人类做的”独立应用：写代码的 Agent、画图的 Agent、做表格的 Agent。

但到了 2026 年，风向变了。我们发现，**我们不需要那么多“独立人格”的 Agent，我们需要的是一个核心“大脑”（如 Claude 4.5/5.0 或 GPT-5），加上无数个可以即插即用的 "Skills"（技能）。**

当 Skill 彻底爆发，那些功能单一的“套壳 Agent”必将被取代。因为 Agent 是“大脑+手脚”的集合，而 Skill 纯粹是精密的“机械臂”。

今天，我就带大家**从零拆解** GitHub 上一个非常典型的 Skill 项目 —— `notebooklm-skill`。

---



但当真正扒开它的源码（`https://github.com/PleasePrompto/notebooklm-skill`），我被狠狠打脸了，同时也被它的精妙设计折服。

它不是简单的 API 逆向，而是一个 **基于 Python + Patchright 的抗指纹浏览器自动化工程**。

今天，我们就来一次**真正的硬核拆解**。这就好比我们原本以为对手用的是魔法（API），结果拆开一看，里面是一台精密运转的蒸汽朋克机器（Browser Automation）。

---

## 拆解对象：notebooklm-skill (Python 版)

这个项目并没有通过简单的 HTTP 请求来“骗”过 Google，而是直接通过**控制一个真实的 Chrome 浏览器**来像人一样操作。

**核心技术栈**：
*   **语言**：Python
*   **引擎**：`patchright` (Playwright 的一种修改版，专门用于过 Bot 检测)
*   **架构**：CLI 工具链 (通过 `run.py` 调度)

让我们把这台机器拆成四个核心零件：

---

## 第一刀：反反爬虫的基石 (Patchright)

任何做过爬虫的人都知道，Google 的反爬虫（Bot Detection）是地狱级的。普通的 Selenium 或 Puppeteer 启动不到 3 秒就会被 Google 封杀或无限弹 CAPTCHA。

这个 Skill 的作者非常聪明，他没有用标配库，而是选用了 **Patchright**。

打开 `requirements.txt`，赫然写着：
```text
patchright
patchright-stealth
```

**Patchright 是什么？**
它是一个经过特殊修改的 Playwright 版本。它修改了底层 CDP (Chrome DevTools Protocol) 通信特征，抹除了 "Navigator.webdriver" 等几十个浏览器指纹。在 Google 眼里，**这就是一个普通的、由人类操作的 Chrome 浏览器**。

**拆解心得**：
做 AI Skill，稳定大于一切。作者选择 Python + Patchright 而非 Node.js 生态，就是为了利用 Python 在抗指纹浏览器领域更成熟的生态（如 undetected-chromedriver 等）。

---

## 第二刀：核心交互逻辑 (ask_question.py)

这是整个 Skill 的心脏。它位于 `scripts/ask_question.py`。如果你以为它只是简单的 `fill` 和 `click`，那就太天真了。

为了让 AI 能像人一样从 NotebookLM 获得答案，通过源码我发现了几个关键细节：

### 1. 视口管理 (Context Persistence)
它不是每次查询都打开新窗口，而是复用用户数据目录（User Data Dir）。这意味着你的登录状态、Local Storage 全部被保留。

### 2. 精确的 CSS 锚点
在 `scripts/config.py` 中，定义了极为精确的 CSS 选择器：
```python
QUERY_INPUT_SELECTOR = "textarea.query-box-input"
ANSWER_BUBBLE_SELECTOR = "div.answer-bubble"
```
它精准定位到那个不起眼的输入框。

### 3. "思考"检测机制 (Thinking Detection)
最精彩的逻辑在于它如何判断 AI 回答完了。它不是简单等待 5 秒，而是轮询检测 UI 状态：
*   **监听**：检测是否有 "Thinking..." 或加载动画。
*   **锁定**：一旦加载动画消失，且回答气泡不再变化（Stability Check），才判定为生成结束。

```python
# 伪代码还原 ask_question.py 逻辑
browser = await browser_type.launch_persistent_context(user_data_dir, headless=False)
page = browser.pages[0]
await page.goto(notebook_url)

# 像人一样输入
await page.type(QUERY_INPUT_SELECTOR, question, delay=50) 
await page.press(QUERY_INPUT_SELECTOR, "Enter")

# 等待回答生成完毕
await wait_for_response_completion(page)
```

**拆解心得**：
Skill 开发不仅仅是调接口，更是**UI 交互的艺术**。这种基于视觉状态的判断逻辑，是未来 AI Agent 操作 GUI 的核心能力。

---

## 第三刀：混合鉴权机制 (Auth Manager)

本地 Skill 最头疼的就是 Auth。你怎么让 Python 脚本登录你的 Google 账号？

在 `scripts/auth_manager.py` 中，我看到了一种 **“混合鉴权”（Hybrid Auth）** 方案：

1.  **交互式首登**：
    用户第一次运行 `setup` 时，脚本会弹出一个**有头（Headless=False）**的浏览器窗口。
    > "请在打开的浏览器中登录你的 Google 账号..."
    这是为了让用户手动过掉 2FA 和 CAPTCHA。

2.  **Cookie 注入**：
    虽然 Patchright 会自动保存部分状态，但 Google 的 Session 极其复杂。作者加了一层保险：手动提取关键 Cookie 并保存到 `state.json`。

3.  **无头复用**：
    之后的每次查询，脚本在后台（Headless=True）启动时，会先把 `state.json` 里的 Cookie 注入进去，瞬间恢复登录状态，用户完全无感。

---

## 第四刀：Skill 接口设计 (SKILL.md)

最后，这一切复杂的逻辑是怎么暴露给 Claude 的？

秘密藏在 `SKILL.md`（或 `tool_definition`）里。作者并没有暴露底层的 `browser.launch`，而是封装成了符合人类直觉的命令：

*   `setup`: 初始化环境
*   `add <url> <name>`: 给笔记本起个别名（这步很关键！AI 记不住长 URL，但记得住 "knowledge-base" 这个名字）
*   `ask <name> <question>`: 提问

这种**中间层设计**（Middleware Design）非常值得学习。它屏蔽了底层 URL 的复杂性，让 Claude 只需要说 "ask my-notebook" 就能调动底层的 Python 爬虫。

```markdown
# 给 Claude 的指令 (System Prompt片段)
To query a notebook, use the `ask` tool.
First, verify the notebook name using `list`.
Then, run `ask "notebook_name" "your question"`.
```

---

## 总结：从这一课学到了什么？

真实的 `notebooklm-skill` 告诉我们：

1.  **Python 是 Skill 开发的王者**：尤其涉及浏览器自动化和复杂数据处理时。这就是为什么 Claude 官方 Skill 生态中 Python 如此受欢迎。
2.  **不要迷信 API**：最好的接口可能是网页本身（Everything is an API if you have a browser）。
3.  **抗指纹是关键**：在 AI 时代，如何证明"我是人"比"我是机器人"更重要。
4.  **UX 依然至关重要**：别名管理、无感登录、错误重试，这些传统的软件工程细节，决定了一个 Agent 是玩具还是工具。

2026 年的 Skills 开发，不再是简单的写 Prompt，而是**全栈工程能力的综合体现**。

准备好你的 Python 环境了吗？Skill 开发的大门已经打开。

---

*本文源码分析基于 notebooklm-skill GitHub 仓库最新代码。*
