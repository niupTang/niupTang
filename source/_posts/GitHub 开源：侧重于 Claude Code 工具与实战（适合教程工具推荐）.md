---
title: "GitHub 开源：侧重�?Claude Code 工具与实战（适合教程/工具推荐�?
permalink: github-开�?侧重�?claude-code-工具与实�?适合教程工具推荐
date: 2025-12-20 23:29:48
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

�? [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [AI 学习资料](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247487298&idx=1&sn=ed7a5c236ccfa4d53cf4bffb8406115f&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近再看Claude Code 插件�?从Skills �?Plugins 然后再是 Agents , 确实有很多对应的开源工具， 主打一个全面�?

[GitHub 开源：�?Claude Code 打造成“六边形战士”](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247492005&idx=1&sn=82a975f9f3899f102637cdc0a81fa972&scene=21#wechat_redirect)

[GitHub Vibe Coding 指南：小白如何把 AI 变成“全自动开发团队”？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247492027&idx=1&sn=da72e75ba987af4f83ed487965c58b68&scene=21#wechat_redirect)

**wshobson/agents** 是一个专为�?*Claude Code** 设计的开源项目，旨在提供一套生产就绪的智能自动化和多智能体（Multi-Agent）编排系统�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR1XVC0tkzhXCplNfEObic7QsTItaVa1kEnUGoCiatNn86oYia8z59Gwhh82YY7exb6Ks6m44bqGHzWQ/640?wx_fmt=png&from=appmsg)

简单来说，它就像是�?Claude Code 这个“超级程序员”配备了一个庞大的**插件市场**�?*专家团队**，通过高度模块化的设计来增强其处理复杂软件开发任务的能力�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR1XVC0tkzhXCplNfEObic7Q4Xa8QjkFSOPibZia6uA770e8RicqcH5FvDGt04K0xKHDKhicbZyZmvgekw/640?wx_fmt=png&from=appmsg)

以下是该项目的核心介绍：

### 1. 项目核心规模
这个仓库不仅仅是一些简单的脚本，而是一个庞大的生态系统，包含�?

- �?67 个专注的插件 (Plugins)：每个插件针对单一目标（如 Python 开发、Kubernetes 运维、安全扫描等）进行了优化�?

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR1XVC0tkzhXCplNfEObic7QQibrkEPrvrMgKXKqQWejIBB9MIQBibzrMxGUmy8hQ39FpGU1seUZhLmg/640?wx_fmt=png&from=appmsg)

- �?99 个专业智能体 (Agents)：涵盖架构师、后端工程师、QA、安全专家等角色�?

- �?107 个智能体技�?(Agent Skills)：模块化的知识包，赋予智能体特定的专业能力�?

- �?15 个工作流编排�?(Orchestrators)：用于协调多个智能体完成复杂任务（如全栈功能开发、安全加固）�?

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR1XVC0tkzhXCplNfEObic7Q6a2LzACfZNo1WYBMWPIpNb4jAVjWfzd1SFichFKmUVick6EWXFOHG3og/640?wx_fmt=png&from=appmsg)

### 2. 核心设计理念
该项目为了解�?AI 编程中的 Token 消耗和上下文污染问题，采用了独特的设计架构�?

- •�?*极简 Token 使用** (Minimal Token Usage)�?插件采用颗粒化设计，每个插件平均仅包�?3.4 个组件。当你安装一个插件时，它**只加�?*相关的智能体和工具，不会把整个市场都塞进上下文里�?

例如：安装 `python-development` 插件只会加载 3 �?Python 专家智能体和 5 个相关技能，消耗约 300 tokens�?

- •�?*渐进式披�?*(Progressive Disclosure)**：智能体的技能采用三层架构。Claude 最初只加载技能的“元数据”（名字和触发条件），只有在真正需要使用该技能时，才会加载具体的“指令”和“资源”。这种机制极大地节省了上下文窗口,�?

- •�?*三层模型策略** (Three-Tier Model Strategy)�?为了平衡性能与成本，该系统针�?Opus 4.5、Sonnet 4.5 �?Haiku 4.5 进行了分层优化：

- •�?*Tier 1**Opus 4.5：处理关键架构设计、安全审计�?

- •�?*Tier 3**Sonnet 4.5：处理常规文档、测试和调试�?

- •�?*Tier 4**Haiku 4.5 ：处理快速的运维任务和内容生�?�?

### 3. 主要功能与应用场�?
通过安装不同的插件，你可以让 Claude Code 获得特定的能力：

- •�?*全栈开发编�?*：使用 `/full-stack-orchestration` 命令，协调后端架构师、前端开发者和数据库专家共同完成一个功能�?

- •�?*安全加固**：使用 `/security-scanning` 命令，进行多智能体的安全评估和漏洞扫描�?

- •�?*基础设施运维**：包�?Kubernetes 操作（生�?Helm 图表、GitOps 配置）和云基础设施管理（AWS/Azure/GCP�?�?

- •�?*语言与框架支�?*：提供针�?Python、JavaScript/TypeScript 等语言的深度支持，包括异步模式、测试模式和包管理技能�?

### 4. 如何使用
这个项目直接集成�?Claude Code �?CLI 中：

- 1. **添加市场**�?�?Claude Code 中输入 `/plugin marketplace add wshobson/agents`，这会使所�?67 个插件变为可用状态（但暂不加载到上下文）�?

- 2. **按需安装**�?根据当前任务安装特定插件，例如 `/plugin install backend-development` 或 `/plugin install code-review-ai`�?

- 3. **执行命令**�?安装后，即可通过自然语言或特定指令（如 `/design` 或 `/scaffold`）调用相应的智能体进行工作�?

- 

项目地址�?

**https://github.com/wshobson/agents**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经�?4000 名小伙伴加入了，如果你也想着�?AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵�?

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)