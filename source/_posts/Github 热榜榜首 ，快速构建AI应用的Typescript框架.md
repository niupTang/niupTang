---
title: Github 热榜榜首 ，快速构建AI应用的Typescript框架
date: 2025-02-23 22:42:46
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [GitHub 上的宝藏：30k星标全栈开发模板曝光！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489268&idx=1&sn=aa3b81431897ab6996caa52a35d22297&scene=21#wechat_redirect)•   [](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)[错过血亏！GitHub万星AI课中文版：21天从Prompt到RAG实战，小白秒变大神](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489256&idx=1&sn=d87718da23f53dcf549deee5257be0e9&scene=21#wechat_redirect)

    大家好，我是牛皮糖！最近在GitHub发现一个宝藏开源项目——Mastra框架，这个基于TypeScript的AI开发神器彻底改变了我们的开发方式。传统AI应用开发要对接多个API、处理复杂的工作流、还要自己做效果评估，现在一个框架全搞定！

核心特性- 1. **LLM模型集成**：Mastra利用Vercel AI SDK进行模型路由，为开发者提供了一个统一的接口，可以与任何LLM提供商（如OpenAI、Anthropic和Google Gemini）进行交互。开发者可以选择特定的模型和提供商，并决定是否流式传输响应。

- 2. **代理系统**：在Mastra中，代理是语言模型选择一系列动作的系统。代理为LLM模型提供工具、工作流和同步数据，可以调用自定义函数或第三方集成API，并访问构建的知识库。

- 3. **工具库**：工具是可由代理或工作流执行的类型化函数，具有内置的集成访问和参数验证。每个工具都有一个定义其输入的架构、一个实现其逻辑的执行函数，以及访问配置的集成。

- 4. **工作流**：工作流是基于图的持久状态机，具有循环、分支、等待人工输入、嵌入其他工作流、错误处理、重试、解析等功能。它们可以在代码中构建或使用可视化编辑器构建。每个工作流步骤都有内置的OpenTelemetry跟踪。

- 5. **RAG**：检索增强生成（RAG）允许为代理构建知识库。RAG是一个ETL管道，具有特定的查询技术，包括分块、嵌入和向量搜索。

- 6. **集成**：在Mastra中，集成是自动生成的、类型安全的第三方服务API客户端，可以用作代理的工具或工作流中的步骤。

- 7. **评估**：评估是自动化测试，使用模型分级、基于规则和统计方法评估LLM输出。每个评估返回一个0-1之间的标准化分数，可以记录和比较。评估可以使用自定义提示和评分函数进行定制。

快速开始**前提条件**：

- • Node.js (v20.0+)

- • 获取LLM提供商的API密钥

**创建新项目**： 使用`create-mastra` CLI工具快速启动新的Mastra应用程序：

`npx create-mastra@latest`**运行脚本**： 运行`mastra dev`以打开Mastra playground：

`npm run dev`**设置API密钥**： 如果使用Anthropic，设置`ANTHROPIC_API_KEY`；如果使用Gemini，设置`GOOGLE_GENERATIVE_AI_API_KEY`。

结语Mastra以其强大的功能和灵活的架构，为AI应用开发提供了极大的便利。无论是初学者还是经验丰富的开发者，都能在Mastra的帮助下快速构建出高质量的AI应用。快来体验Mastra，开启你的AI开发之旅吧！

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················