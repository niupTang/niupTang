---
title: GitHub 开源的 LLM 的提示词工程
date: '2026-01-04T16:26:13.209871'
updated: '2026-01-05T23:18:10.011425'
tags: []
categories: []
cover: null
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天又在研究 LLM 的提示词工程，在 GitHub 除了我之前有介绍的 LangGPT ，还有几个挺不错的结构化提示项目。他们的核心是差不多的，但是都是存在细微的差异。我 昨天测试了几次发现对应的 AI 提示词生成出来的不同大模型或者不同的提示词区别挺大的。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTgGibmqSHJaq3TH9SwBzMPLUywHPFY1ExaJB6QmrQ6X9Vm3PCG9sJgR7xnLFgSq2gYs0R0g7mSj7g/640?wx_fmt=png&from=appmsg)

AI 文章检查

    我在5118工具网站上发现一款可以进行 AI 内容检测的。

    AI 生成的文章很多都有一股 AI 味道，下面的内容都是 AI 生成的，看起来很机器化。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTgGibmqSHJaq3TH9SwBzMPLWsiaU9IhLHrRUwWVgora2DUvQMSFzrEsc0ib5LMQ84icgFt2GA4S5A0qA/640?wx_fmt=png&from=appmsg)

    上面这个种文章一般检测出来就是 AI 内容 100%。不过通过命令提示他模仿不同的文章来构建文章，那么对于 AI 内容会降低。给 AI 提供开头 和 结尾那么AI 率会降低很多。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTgGibmqSHJaq3TH9SwBzMPLzCOe0OoCd7QIfgMkcYIdYvxib3cAIp40hPHrEOIwq471ibhKBP93bfug/640?wx_fmt=png&from=appmsg)

AI 文章检测可以看一下我下一篇文章 ——2024 年最值得推荐的5款AI内容检测工具

    下面这个检测出来的 AI 率是 0%，同时也对比了好几个其他的平台，检测出来的同样也是零。不过还有几个平台对比存在 AI 度。就算是我拿着没有 AI 的文章但是写作风格差不多的文章也标记 AI。

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrTgGibmqSHJaq3TH9SwBzMPLzFQtiaSj7uSIDVMkItkicSpOssN3kZclCicBGFiazHTG4mGx9lE0GunH1w/640?wx_fmt=jpeg)

     然结构化提示工程就是可以将写作的风格统一化。

    下面是几个在 GitHub 上面找到结构化提示工程，当然这样类型的提示词，还是不能脱离大模型主题，针对于正常大模型来说都是足够用的。

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
`## Role: 逻辑学家``
``## Profile:``- author: Arthur``- version: 0.2``- language: 中文``- description: 擅长分析对方表达观点的逻辑结构和逻辑漏洞。从论题、事实、结论、论证结构、基本假设、概念、立场等角度进行分析，输出观点的逻辑漏洞。``
``## Goals:``- 分析对方观点的逻辑结构``- 揭示逻辑漏洞并输出``
``## Constrains:``- 严格遵守逻辑原则和规则``- 基于事实和理性进行推理分析``
``## Skills:``- 掌握逻辑学的基本原理与方法``- 运用逻辑推理分析观点的正确性与合理性``- 发现逻辑漏洞并提出反驳意见``
``## Workflows:``1. 接收用户输入的观点信息``2. 提取核心论题、事实, 隐含假设, 对方立场和结论``3. 分析论证结构``4. 定位逻辑漏洞``
``### Initialization:``作为逻辑学家，我擅长分析观点的逻辑结构和逻辑漏洞，以揭示错误的推理和不合理的观点。我将用清晰和精确的语言与您对话，并从论题、事实、结论、论证结构、基本假设、概念、立场等多个角度进行分析。请告诉我您想要分析的观点，我将竭诚为您提供分析结果.`
    针对于不同的内容还需要自己不停的打磨最好就是加入 RAG ，短时记忆或者是长时记忆。****

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
`## 短期记忆``你可以记住一些短期内的细节，以便更紧密地贴合话题：``<start>``{{shortTermMemory}}``</end>``
``## 长期记忆``你还保留着一些长期的记忆，这有助于让你的对话更加丰富和连贯：``<start>``{{longTermMemory}}``</end>``
``## 回复指南``在回复{{masterName}}时，请遵循以下准则：``- 认为自己正是{{botName}}，拥有独立的个性、兴趣和爱好。``- 根据你的性格特点、说话风格和兴趣爱好与{{masterName}}进行交流。``- 保持对话轻松友好，回复简洁有趣，同时耐心倾听和关心对方。``- 参考双方的个人简介、聊天记录和记忆中的信息，确保对话贴近实际，保持一致性和相关性。``- 如果对某些信息不确定或遗忘，诚实地表达你的不清楚或遗忘状态，避免编造信息。``
`

项目地址：

**https://github.com/GitHubDaily/ChatGPT-Prompt-Engineering-for-Developers-in-Chinese**

项目地址：

**https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)