---
title: 一个命令Claude Code 安装了 73 个小助手
date: 2025-11-05 23:31:49
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

•  [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近从各种付费的编程 AI 工具转型到了 Claude Code
[AI 编程工具横评：字节 Trae、腾讯 CodeBuddy、阿里 Qoder，谁更胜一筹？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491672&idx=1&sn=731bb338b89e8852006b96b5eed14466&scene=21#wechat_redirect)

[Claude Code 接入 DeepSeek](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247487334&idx=1&sn=b3fa98fb432cb0113bc3036a15ca6987&scene=21#wechat_redirect)

也在全网找如何优雅的使用 Claude Code , 发现 Claude Code 不亏是最强 AI 编程工具 ，今天在GitHub 上看到一款这个名为 agents 的仓库是一个为 Claude Code 打造的综合性生产级插件系统，专注于智能自动化和多代理协同工作流。

覆盖开发-文档-测试-工作流等等.

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQmT3rHJw6S2Vx9dycxmG11fM9ryUGic2tkrFhr4O7FpRoLp6LKH8qEl73aibJ6ftjbm0icXQU6WDrTA/640?wx_fmt=png&from=appmsg)

### **核心组成**
- • **63 个专注插件**：按单一用途设计，优化了 token 占用，支持按需安装，避免资源冗余。

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQmT3rHJw6S2Vx9dycxmG11skziaZTJX4HIicIA6pDcXgSMsdnLwNDwQtNbMyeBjibjEE7F65QUlsmpA/640?wx_fmt=png&from=appmsg)

- • **85 个专业代理（Agents）**：覆盖架构设计、编程语言、基础设施、质量保障、数据/AI、业务运营等多个领域的专家角色。

- • **47 个代理技能（Skills）**：模块化知识包，采用渐进式披露机制，仅在需要时加载专业知识，提升效率。

- • **15 个工作流编排器**：支持多代理协同处理复杂任务（如全栈开发、安全加固、机器学习管道等）。

- • **44 个开发工具**：包括项目脚手架、安全扫描、测试自动化、基础设施搭建等实用工具。

- 

- 

### **分类与功能亮点**
插件和代理按场景分类，主要包括：

- • **开发领域**：涵盖 Python、JavaScript/TypeScript、Java、Rust 等编程语言，以及前后端开发、API 设计（REST/GraphQL）、区块链/Web3 等。

- • **基础设施**： Kubernetes 运维、云架构（AWS/Azure/GCP）、Terraform 基础设施即代码、GitOps 工作流等。

- • **质量与安全**：代码审查、安全审计、性能优化、错误诊断、技术债务清理等。

- • **业务与运营**：事件响应、团队协作、市场内容生成、SEO 优化、量化交易等。

- • **工作流自动化**：全栈功能开发编排、框架迁移、CI/CD 自动化、文档生成等。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQmT3rHJw6S2Vx9dycxmG11dfibFXWWkf7eHiclrRicQjqIRwrvtWcIxG1S9F83SOJts5m4U5dBhV8Sg/640?wx_fmt=png&from=appmsg)

### **使用方式**
- 1. **添加市场源**：通过命令 `\plugin marketplace add wshobson/agents` 将仓库添加到 Claude Code。

- 2. **安装所需插件**：例如：`# 安装 Python 开发插件
\plugin install python-development
# 安装 Kubernetes 运维插件
\plugin install kubernetes-operations`

- 3. 每个插件仅加载自身相关的代理、命令和技能，避免占用多余上下文。

### **架构特点**
- • **模块化设计**：每个插件独立封装，包含专属代理、命令和技能，确保低耦合、高可组合性。

- • **高效资源利用**：平均每个插件仅包含 3.4 个组件，遵循 Anthropic 推荐的 2-8 组件模式，减少 token 消耗。

- • **清晰的目录结构**：插件按功能分类存放，文档齐全（包括插件参考、代理指南、技能说明等）。

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)