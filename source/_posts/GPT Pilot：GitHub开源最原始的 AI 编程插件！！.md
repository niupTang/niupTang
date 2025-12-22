---
title: GPT Pilot：GitHub开源最原始的 AI 编程插件！！
date: 2025-09-02 22:03:05
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！AI 编程工具最近出来的太多了，GitHub 上有一款上了年纪的开源工具——GPT Pilot，旨在探索和演示大型语言模型（LLMs）如何在开发者监督下生成可直接投入生产的完整应用。它不仅是代码生成工具，更定位为「真正的AI开发伙伴」，能独立编写完整功能、调试代码、沟通问题并请求审核，重新定义了人机协作开发的模式。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTQykuzuKk7CHCgjZcXrdYAp5IJYicqddvcjiaoDklfh5lrO3HwYUzFmKTiarI1WRKbl7MCqcWMwmKiaQ/640?wx_fmt=png&from=appmsg)

## 核心定位与目标
GPT Pilot 的核心理念是：在实现通用人工智能（AGI）之前，AI 可完成约95%的代码生成工作，而开发者仅需参与5%的关键决策（如需求确认、代码审核等）。其最终目标是交付**生产级可用的完整应用**，而非简单原型。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTQykuzuKk7CHCgjZcXrdYAibamV42RyWKVmthOV7XKLhoUMHmBicYLXoVlH3eg8JbZg4oXPSiadXrYw/640?wx_fmt=png&from=appmsg)

## 关键特性
- 1. **多代理协作架构**
模拟真实开发团队分工，通过多个专业化「代理」协同完成开发全流程：

- • 规格编写者（Specification Writer）：澄清模糊需求，完善项目描述；

- • 架构师（Architect）：选择技术栈、检查并安装依赖；

- • 技术负责人（Tech Lead）：拆分项目为可执行任务；

- • 开发者（Developer）：规划任务实现步骤（自然语言描述）；

- • 代码猴子（Code Monkey）：根据步骤编写代码；

- • 审核者（Reviewer）：验证代码质量，不合格则退回修改；

- • 调试者（Debugger）：定位并修复错误；

- • 技术文档作者（Technical Writer）：自动生成项目文档（如README）。

- 

- 2. **可扩展性与规模化支持**
通过智能上下文管理机制，仅向LLM展示当前任务相关的代码片段，避免将整个代码库塞入上下文窗口，支持任意规模项目，并可在现有应用基础上持续迭代新增功能。

- 3. **全开发周期覆盖**
从需求分析、技术选型、代码生成、调试到文档撰写，覆盖应用开发的完整生命周期，确保输出的应用具备可维护性和生产可用性。

- 4. **人机协作模式**
强调「开发者监督」，AI主导大部分工作，开发者仅在关键节点介入（如需求确认、计划调整），形成高效协作闭环。

- 5. **多场景适配**
支持新建项目和导入现有项目，兼容多种技术栈（如React、Node.js、Express、MongoDB等），并提供VS Code扩展和CLI两种使用方式。

## 工作流程
- 1. 用户输入应用名称和描述；

- 2. 规格编写者补充需求细节（若描述不完整）；

- 3. 架构师确定技术栈并配置环境；

- 4. 技术负责人拆分任务并制定开发计划；

- 5. 开发者规划每个任务的实现步骤；

- 6. 代码猴子编写代码，审核者验证质量；

- 7. 调试者处理错误，技术文档作者生成文档；

- 8. 支持用户反馈迭代，可继续添加新功能。

## 与同类工具的差异
- • **目标不同**：专注生产级应用，而非原型；

- • **可扩展性**：通过上下文过滤支持大规模项目，可迭代开发；

- • **流程完整性**：覆盖全开发周期，而非单一代码生成环节；

- • **协作模式**：多代理分工+开发者监督，而非全自动生成。

## 快速开始
- • **VS Code用户**：直接在扩展市场搜索「GPT Pilot」安装插件；

- • **CLI用户**：克隆仓库、配置环境变量（如LLM API密钥）后运行启动命令。

- 

项目地址：

https://github.com/pythagora-io/gpt-pilot

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

很多小伙伴想用 AI 做副业但是不知有什么项目可以赚钱，大冲这个AI私域赚钱星球，现在还是 59 元 一年，一万多个星球中，已经连续 4 个月排名前 3，很多超级大佬都在亲自推荐，性价比极高的星球，很多人在这里搞到几千上万块。

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3ueJSa3BmYhDBdo2SpP0BLicmW0koVabTULgiaZkibuOcvm4yVJEb9ckz5Q/640?wx_fmt=jpeg&from=appmsg)

星球能免费参加几十个小项目，有教练和教程，直播答疑，打卡还可以退还押金，所有历史小项目文档全公开(以后可自学)。

项目有：闲鱼虚拟资料，小红书引流，小红书虚拟资料，网盘拉新，闲鱼无货源，闲鱼电影票， AI写作（教案，PPT，答辩，简历，数据分析，VBA，商业计划书等），AI 公众号爆文，AI编程，AI 智能体，公众号 SEO，知乎，私域 CPS 分销等项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3uwDRiabBSfcQmeicWb8dFS1q4pOqVMmR3y4OD5nLbR3KktrpxGNpibsRSg/640?wx_fmt=png&from=appmsg)

关注公众号回复 AI 副业星球即可获取 26 元的优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3ujXhDW5iclVpibRRH9wDHicKLDUQsh2icibPVAyHyszlnxL3FfhVADl6szPA/640?wx_fmt=png&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)