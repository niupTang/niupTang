---
title: "Flowise：零代码构建LLM工作流的可视化神�?
permalink: flowise-零代码构建llm工作流的可视化神�?
date: 2025-06-03 23:29:05
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天我要介绍的Flowise项目，Flowise �?coze 特别相似，但是Flowise 是可以多人协作�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSwyxzQxd16syPSLFr0KJVTfuZ2suBLK96IWnfhFffFLHJVYmrzBdo1BlQLq0QwvCHjZDicianaibecA/640?wx_fmt=png&from=appmsg)

GitHub链接：👉 https://github.com/FlowiseAI/Flowise

## 一、项目定位：LLM应用开发的民主化工�?
## 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSwyxzQxd16syPSLFr0KJVTMOxmtquNJTe6dicByXKXic60H98Kibp0uTzyB6t9VjqrfUQVsicxe7wjSQ/640?wx_fmt=png&from=appmsg)

## 

可视化编排：通过图形化界面设计和编排 AI 流程�?

支持多种 LLM：集成主流大语言模型，如 OpenAI �?GPT 系列、Hugging Face 模型等�?

模块化设计：提供丰富的模块，用户可以根据需求灵活组合�?

低代�?无代码：无需编程经验，通过拖放操作即可创建 AI 应用�?

本地部署：支持在本地或私有云环境中运行，确保数据安全�?

开源免费：完全开源，允许用户自由定制和扩展�?

### 项目状态与定位
- ⭐�?*GitHub Stars**: 39k+（爆发式增长�?

- 🚀 **维护团队**: FlowiseAI专业团队

- 📜 **License**: MIT（免费商用）

- 💡 **独特优势**：相比传统LangChain开发，Flowise提供**零代码可视化构建**�?*一键部署API**能力

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSwyxzQxd16syPSLFr0KJVTA7khrn07NCP469D4ricvuiaX2WKgMC6543yYBwLZLFC3unibQSDwQHlVA/640?wx_fmt=png&from=appmsg)

*Flowise可视化工作流构建界面（图片来源：官方仓库�?

## 二、核心技术解析：LLM应用的乐高积�?
### 技术栈
- **核心框架**: Node.js + TypeScript

- **前端**: React + Redux

- **LLM集成**: LangChain.js

- **数据�?*: SQLite/MongoDB

2. 丰富的组件库- **LLM提供�?*：OpenAI、Anthropic、HuggingFace�?

- **工具集成**：Google搜索、维基百科、计算器

- **数据处理**：CSV加载器、PDF解析器、文本分割器

- **记忆模块**：会话记忆、向量存�?

**创新�?*：全球首个支�?*完整LangChain.js功能**的可视化工具，涵盖Chain、Agent、Memory等核心概念�?

3. 一键API部署`curl -X POST https://your-flowise-instance/api/v1/prediction/{flowId} \
  -H "Authorization: Bearer {apiKey}" \
  -H "Content-Type: application/json" \
  -d '{"question": "什么是量子计算�?}'
`**技术亮�?*：自动生成RESTful API和Webhook�?*无缝集成现有系统**�?

4. 实时协作与版本控�?*团队价�?*：支持多人同时编辑，自动保存工作流历史版本，解决AI团队协作痛点�?

5. 自定义组件开发`// 创建自定义节点示�?
class CustomNode extends BaseNode {
  async init(): Promise<void> {
    this.addInput("input", "string");
    this.addOutput("output", "string");
  }
  
  async execute(): Promise<void> {
    const input = this.getInputData("input");
    // 自定义处理逻辑
    this.setOutputData("output", transformedData);
  }
}
`**扩展能力**：开发者可创建专用组件，满足企业特定需求�?

**讨论话题**�?

在你的业务场景中，最需要哪种LLM工作流？ 你认为可视化开发会取代传统LLM编程吗？

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成�?

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)