---
title: 这两款开源 AI 编程工具绝对是王者级别！！！
date: 2025-06-29 23:05:29
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近ai 编程太牛逼了！！

今天要给大家介绍两个炙手可热的开源项目，它们代表了未来开发者与 AI 协作的新范式： 一个是来自 Google 的 **Gemini CLI**，另一个则是 Anthropic 推出的 **Claude Code**。

它们都是**基于终端的 AI 代理工具**，意图彻底改变我们编写、理解、调试代码的方式。

## 🌟 一、Google Gemini CLI：你的终端 AI 助手
**项目地址：** https://github.com/google-gemini/gemini-cli

**一句话简介：**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRHQvy4ghslhDVmc4CiacIicicnOiayvdiaBgK5lvxeOV7IXAcROPHhxBQMaT5hggGEHbTtZaYWkLRdC3g/640?wx_fmt=png&from=appmsg)

**
**

自带 ReAct 推理链、集成系统命令、支持代码编辑、联网搜索，甚至还能画图、剪视频的“全能型”AI CLI 工具。

### ✅ 核心亮点：
- • **自然语言 + 终端命令混合操作**，比如直接输入：`> 帮我找出这个文件里和数据库相关的逻辑
> 重构这个函数，并写上注释`

- • **支持本地命令执行（shell/grep/ls 等）**，具备智能 ReAct 执行链能力。

- • **原生集成 Google Gemini 2.5 Pro 模型**，支持**100 万 token 长上下文**。

- • **生成图像/视频能力**：调用 Imagen/Veo，多模态能力拉满。

- • **安全可控**：对危险命令（如删除文件）需手动确认。

- • **免费额度丰富**：每天最多支持 1000 次请求（非常友好）。

### 🚀 安装方式：
```
`npm install -g @google/gemini-cli`
```
## 💡 二、Anthropic Claude Code：开发者的 AI 编程搭档
**项目地址：** https://github.com/anthropics/claude-code

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRHQvy4ghslhDVmc4CiacIicicH2s504S47vC3Enh4dsSZ7E27E1Zwamrd0LiaXa0hRo4eIQdB4QFP4Dw/640?wx_fmt=png&from=appmsg)

**一句话简介：**

聚焦“代码编辑 + Git 自动化”的 AI CLI 工具，适合深度协作与持续集成场景。

### ✅ 核心亮点：
- • **终端内自然语言控制代码**，支持修改文件、添加注释、自动修 bug。

- • **深度集成 GitHub**，可以自动生成 commit、PR 并解释差异。

- • **集成 Claude 最新模型（如 Claude 3.5 Sonnet）**，擅长长代码阅读、重构。

- • **支持 VSCode 插件 & GitHub Actions**：让 Claude 成为代码审查机器人。

- • **强大项目理解能力**：可分析项目上下文，提出结构性优化建议。

- • **支持通过 `/install-github-app` 安装 GitHub bot 与 CI 集成**。

### 🚀 安装方式：
`npm install -g @anthropic-ai/claude-code`## 📊 总结对比表：
功能维度
Gemini CLI
Claude Code
AI 模型
Gemini 2.5 Pro
Claude 3.x Sonnet
是否开源
✅ 是
✅ 是
自然语言控制代码
✅ 支持
✅ 支持
本地命令执行
✅ 内置 shell/ls/grep 等
❌ 主要偏向 Git 操作
Git 集成
⚠️ 目前不深度支持
✅ 自动 commit、PR、CI
VSCode 插件
❌ 暂未提供
✅ 官方 `claude-code.vsix`
多模态支持
✅ 图像、视频生成（Imagen、Veo）
❌ 暂无
网络搜索能力
✅ 可联网搜索
✅ 有基本 fetch 支持
可扩展性（插件）
✅ MCP 插件协议
✅ 提供 Python SDK & GitHub Action
免费额度
每日 1000 次
视账户配额而定，需登录 Claude
## 🧠 谁更适合你？
- • 如果你喜欢**All-in-One 的终端 AI 助手**，希望结合自然语言和 shell 指令操作，甚至还想生成图片视频 —— **Gemini CLI 更适合你**。

- • 如果你是**严肃的工程师/团队协作者**，注重代码重构、GitHub 自动化审查和 PR 工作流 —— **Claude Code 是你的理想搭档**。

## ✍ 写在最后
这两款工具代表了 AI 编程助手从“对话”走向“行动”的一次升级。它们不再只是“你问我答”，而是开始直接帮你干活、写代码、提 PR、做分析。未来的开发流程，将逐步走向“AI 提示驱动 + 人类验证”的协作模式。

**你，准备好和 AI 一起写代码了吗？👨‍💻**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成长

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)