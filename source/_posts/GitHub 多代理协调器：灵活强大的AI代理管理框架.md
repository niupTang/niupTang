---
title: GitHub 多代理协调器：灵活强大的AI代理管理框架
date: 2024-11-23 20:01:11
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    **大家好，我是牛皮糖！今天要给大家介绍一个超级强大的工具——多代理协调器，一个灵活而强大的框架，专门用来管理多个AI代理和处理复杂的对话。**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS4PawoKmUicNCqzGUxo4j5EhhIOdgCDTODmyNelUgaoLUATrKicRxYVM9ib0tI808NtYh8sX2iabiaYXQ/640?wx_fmt=png&from=appmsg)

**🔖 功能：**

- • **智能意图分类**：根据上下文和内容动态地将查询路由到最合适的代理。

- • **双语言支持**：在Python和TypeScript中完全实现。

- • **灵活的代理响应**：支持来自不同代理的流式和非流式响应。

- • **上下文管理**：维护和利用跨多个代理的对话上下文，实现连贯的交互。

- • **可扩展架构**：轻松集成新代理或定制现有代理以满足您的特定需求。

- • **通用部署**：可在任何地方运行 - 从AWS Lambda到您的本地环境或任何云平台。

- • **预构建的代理和分类器**：提供多种可立即使用的代理和多种分类器实现。

**什么是多代理协调器？**

**** 多代理协调器是一个灵活的框架，用于管理多个AI代理并处理复杂的对话。它可以智能地路由查询并在交互过程中维护上下文。该系统提供预构建的组件以便快速部署，同时还允许轻松集成自定义代理和对话消息存储解决方案。这种适应性使其适用于广泛的应用，从简单的聊天机器人到复杂的人工智能系统，满足不同的需求并有效扩展。

**🏗️ 高级架构流程图** 

该过程从用户输入开始，然后由分类器进行分析。分类器利用代理的特征和代理的对话历史来选择最适合该任务的代理。一旦选择了代理，它就会处理用户输入。然后，协调器会保存对话，更新代理的对话历史记录，然后将响应发回给用户。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS4PawoKmUicNCqzGUxo4j5EW3vRZ59jof6JhJVic8O4xgF9iaNsoJws3d5zibo1dicqz9rUf3swUfdtgw/640?wx_fmt=png&from=appmsg)

**🎯 示例和快速入门** 通过我们多样化的示例获得多代理协调器的实践经验：

- • 即可运行的脚本：从我们的Python和TypeScript独立脚本集合开始本地运行。

- • 演示应用程序：聊天演示应用程序，探索处理旅行、天气、数学和健康等各个领域的多个专业代理。

- • 示例项目：在文件夹中探索我们的示例实现，包括基于Web的聊天界面和人工智能客户支持系统。

**🌟 用例和实现** 探索多代理协调器的创新实现和多样化应用，例如用于航班预订的多语言AI聊天机器人，构建人工智能电子商务支持系统，以及构建AI客户呼叫中心。

**安装和用法**

- • **TypeScript版本**：

`npm install multi-agent-orchestrator`
- • **Python版本**：

`pip install multi-agent-orchestrator`
这些示例展示了如何使用具有Converse API支持的Bedrock LLM Agent，允许进行多轮对话，以及集成Lex Bot Agent用于专门任务（在本例中为与旅行相关的查询）。编排器根据输入将请求路由到最合适代理的能力，以及处理来自不同类型代理的流式和非流式响应。

**结语：** 多代理协调器，一个为你的AI项目提供强大支持的工具，无论是在技术深度还是应用广度上，都能满足你的需求。快来探索它的无限可能吧！

项目地址：

**https://github.com/awslabs/multi-agent-orchestrator**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562PRME95JfKlQIXNIicIbUXpeouLU3upiazIm774Q0IPHORgZtLXNauthoPTZgkziaC8TZefT3vO7lC9A/640?wx_fmt=jpeg)