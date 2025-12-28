---
title: "Github 技术平权开源两周获取 6 K Stars，要普通人也能打破信息差！！"
permalink: github-技术平权开源两周获取-6-k-stars-要普通人也能打破信息差
date: 2025-11-03 23:07:24
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！在推荐算法时代，我们一直在一个信息茧房里面， 今天在 GitHub 上面看到一款开源的智能体 **BettaFish** 志在帮助普通人打破信息差 。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSUBC3sWUWtfPOYUaicmZPRHVx9yv2muD9naDv88C6bZgLvNqiaC0KDyTx0muibsXOIr4YIU6yIsISOg/640?wx_fmt=png&from=appmsg)

用户只需通过聊天形式提出分析需求，系统便会全自动分析国内外30+主流社交媒体及数百万条大众评论。

项目名称“BettaFish”（斗鱼）象征着“小而强大，不畏挑战”的精神，而“微舆”则谐音“微鱼”，呼应这一意象。

## 核心功能与优势
相比同类产品，该系统具备六大核心优势：

- 1. **AI驱动的全域监控**：AI爬虫集群7x24小时不间断作业，覆盖微博、小红书、抖音、快手等10+国内外关键社媒，实时捕获热点内容并深入海量用户评论。

- 

- 2. **超越LLM的复合分析引擎**：依赖5类专业Agent，融合微调模型、统计模型等中间件，通过多模型协同确保分析结果的深度、准度与多维视角。

- 

- 3. **强大的多模态能力**：突破图文限制，可深度解析短视频内容，精准提取搜索引擎中的结构化多模态信息卡片。

- 

- 4. **Agent“论坛”协作机制**：为不同Agent赋予独特工具集与思维模式，引入辩论主持人模型，通过“论坛”机制实现链式思维碰撞与辩论，避免单一模型局限。

- 

- 5. **公私域数据无缝融合**：不仅分析公开舆情，还提供高安全性接口，支持内部业务数据库与舆情数据无缝集成。

- 

- 6. **轻量化与高扩展性框架**：基于纯Python模块化设计，实现轻量化、一键式部署，代码结构清晰，便于集成自定义模型与业务逻辑。

## 系统架构
### 主要组件
- • **Insight Agent**：私有数据库挖掘代理，负责私有舆情数据库深度分析

- • **Media Agent**：多模态内容分析代理，具备强大多模态处理能力

- • **Query Agent**：精准信息搜索代理，具备国内外网页搜索能力

- • **Report Agent**：智能报告生成代理，内置模板的多轮报告生成

- • **ForumEngine**：论坛引擎，实现Agent间的协作与讨论机制

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSUBC3sWUWtfPOYUaicmZPRHyia8LEGp94rRLjASBnCSPwhKyZu6iaO9jEq98nBfjH88yCUWQ2fcSRJQ/640?wx_fmt=png&from=appmsg)

### 分析流程
- 1. 用户提问：Flask主应用接收查询

- 2. 并行启动：三个Agent（Query、Media、Insight）同时开始工作

- 3. 初步分析：各Agent使用专属工具进行概览搜索

- 4. 策略制定：基于初步结果制定分块研究策略

- 5. 循环阶段：论坛协作与深度研究（多轮循环）

- 6. 结果整合：Report Agent收集所有分析结果和论坛内容

- 7. 报告生成：动态选择模板和样式，多轮生成最终报告

## 代码结构
项目采用模块化设计，主要目录包括：

- • `QueryEngine/`：国内外新闻广度搜索Agent

- • `MediaEngine/`：多模态理解Agent

- • `InsightEngine/`：私有数据库挖掘Agent

- • `ReportEngine/`：多轮报告生成Agent

- • `ForumEngine/`：论坛引擎实现

- • `MindSpider/`：微博爬虫系统，包含话题提取、深度情感爬取等模块

- • `SentimentAnalysisModel/`：情感分析模型集合，包括多种微调模型和传统机器学习方法

- • `SingleEngineApp/`：单个Agent的Streamlit应用

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSUBC3sWUWtfPOYUaicmZPRHWah1oMOiaNDGrAnkeY1iatTCfl1osdEwZJu0t6qjeStoRvGLrNjxHYaw/640?wx_fmt=png&from=appmsg)

项目地址：

https://github.com/666ghj/BettaFish

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)