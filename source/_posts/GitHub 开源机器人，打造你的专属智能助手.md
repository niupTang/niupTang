---
title: "GitHub 开源机器人，打造你的专属智能助手"
permalink: github-开源机器人-打造你的专属智能助手
date: 2025-02-28 21:44:57
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！今天，我要给大家介绍一款功能强大的开源聊天机器人及开发框架——**AstrBot**。它不仅功能丰富，还具有高度的灵活性和扩展性，让你轻松打造专属的智能助手。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRNyWD3wgR8OUjEVSibS3HTBaBKTfXPYGvrR4zKCanxbhQyNPY9G9FwhCfI8Rjico2PbPianKrfdSCng/640?wx_fmt=png&from=appmsg)

**AstrBot** 是一个松耦合、异步、支持多消息平台部署的聊天机器人框架。它具有易用的插件系统和完善的大语言模型（LLM）接入功能，让你能够轻松实现各种智能对话场景。接下来，让我为大家详细介绍一下它的核心功能和特点。

### **核心功能**
- • **大语言模型对话**：AstrBot 支持多种大语言模型，包括 OpenAI API、Google Gemini、Llama、Deepseek、ChatGLM 等。它还支持接入本地部署的大模型，通过 Ollama、LLMTuner 实现更灵活的部署。多轮对话、人格情境、多模态能力一应俱全，支持图片理解、语音转文字（Whisper），让你的机器人更加智能。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRNyWD3wgR8OUjEVSibS3HTBqM5VMoTovtSicW83J6JMLjYp1Pn9X7VVloA5iaraItkZkPPxTibRmXw3A/640?wx_fmt=png&from=appmsg)

- • **多消息平台接入**：AstrBot 支持 QQ（OneBot）、QQ 频道、微信（Gewechat）、飞书、Telegram 等主流消息平台。后续还将支持钉钉、Discord、WhatsApp、小爱音响等，满足你在不同场景下的需求。它还支持速率限制、白名单、关键词过滤、百度内容审核等功能，让你的机器人更加安全可靠。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRNyWD3wgR8OUjEVSibS3HTBRhwCmlqD54T81FShPMnia6ftYnqWibfhiae5cO3xGE4FTHSF6XBTHtmKA/640?wx_fmt=png&from=appmsg)

- • **Agent 能力**：AstrBot 原生支持部分 Agent 能力，如代码执行器、自然语言待办、网页搜索等。对接 Dify 平台，便捷接入 Dify 智能助手、知识库和 Dify 工作流，让你的机器人更加智能高效。

- • **插件扩展**：AstrBot 深度优化了插件机制，支持开发插件扩展功能，极简开发。已支持安装多个插件，让你可以根据需求自由定制机器人的功能。

- • **可视化管理面板**：AstrBot 提供可视化修改配置、插件管理、日志查看等功能，降低配置难度。集成 WebChat，可在面板上与大模型对话，让你的管理更加便捷。

### **技术架构**
- • **高稳定性、高模块化**：AstrBot 基于事件总线和流水线的架构设计，高度模块化，低耦合。这种设计不仅提高了系统的稳定性，还让开发和维护更加方便。

### **使用方式**
- • **Docker 部署**：推荐使用 Docker 部署 AstrBot，简单快捷。只需按照 官方文档 的步骤操作，即可快速上手。

- • **Windows 一键安装器部署**：如果你使用的是 Windows 系统，只需确保电脑上安装有 Python（>3.10），然后按照 官方文档 的步骤操作，即可轻松部署。

- • **Replit 部署**：AstrBot 也支持在 Replit 上部署，让你可以随时随地进行开发和测试。

- • **CasaOS 部署**：社区贡献的部署方式，适合在 CasaOS 环境下使用。

- • **手动部署**：如果你喜欢手动操作，可以按照 官方文档 的步骤，通过源码进行部署。

### **消息平台支持情况**
平台
支持性
详情
消息类型
QQ（官方机器人接口）
✔
私聊、群聊，QQ 频道私聊、群聊
文字、图片
QQ（OneBot）
✔
私聊、群聊
文字、图片、语音
微信（个人号）
✔
微信个人号私聊、群聊
文字、图片、语音
Telegram
✔
私聊、群聊
文字、图片
微信（企业微信）
✔
私聊
文字、图片、语音
飞书
✔
群聊
文字、图片
微信对话开放平台
🚧
计划内
-
Discord
🚧
计划内
-
WhatsApp
🚧
计划内
-
小爱音响
🚧
计划内
-
### **接下来的路线图**
- • **完善平台适配器**：确保目前所有平台适配器的功能一致性，让你在不同平台上的使用体验更加统一。

- • **优化插件接口**：进一步优化插件接口，让插件开发更加简单高效。

- • **支持更多 TTS 服务**：默认支持更多 TTS 服务，如 GPT-Sovits，让你的机器人更加生动。

- • **完善“聊天增强”**：支持持久化记忆，让你的机器人更加智能。

- • **规划 i18n**：支持多语言，让你的机器人走向世界。

### **总结**
**AstrBot** 是一款功能强大、高度灵活的开源聊天机器人及开发框架。无论你是开发者还是普通用户，都能通过它轻松打造专属的智能助手。如果你对聊天机器人感兴趣，不妨试试 AstrBot。

后台关注“回复 [AI助手]”领取安装文件

安装教程：

https://astrbot.app/deploy/astrbot/windows.html

感谢各位大大一键三连

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)[github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)