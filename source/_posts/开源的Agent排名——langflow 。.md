---
title: 开源的Agent排名——langflow 。
date: 2025-10-21 22:35:05
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

大家好，我是牛皮糖！最近工作流式的 Agent ,比较火，从 N8N、Coze 、Dify、LangFlow 等等， 今天我用 AI 编程工具 安装了 LangFlow ，尝试了一下可以创建 Langchain 的 AI 工作流。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrReR42rTYjG0icDE6T5bBv8TZWib8SWbicGjYHh1TtHMfibllSdwtJtGmMh4LjAFSiaBzADFxpNqWua2bw/640?wx_fmt=png&from=appmsg)

## 什么是Langflow？
**Langflow是一个基于Python的开源框架**，专门用于快速构建AI应用程序。最吸引我的是它不需要绑定特定的语言模型或向量数据库，这给了开发者极大的灵活性。通过直观的可视化编辑器，你可以像搭积木一样快速搭建AI应用的工作流。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrReR42rTYjG0icDE6T5bBv8TJGXakpFOta6cLxjtycUHofuEEibF1aeL2fw7alFW1k4FUB5rO4ERkpQ/640?wx_fmt=png&from=appmsg)

## 核心功能亮点
### 🎯 可视化工作流构建
**拖拽式组件设计**让原型开发变得异常简单。每个组件代表工作流中的一个步骤，你只需要将它们连接起来就能构建完整的AI应用。比如，我们最近就用它搭建了一个电商客服聊天机器人，整合了LLM和产品数据库，整个过程只用了不到半小时！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrReR42rTYjG0icDE6T5bBv8TxU5icj8U0dOAibFx7xs6QhHNdh4hVXKkLeE9cKLCSicJjqgMyKuQxlwzw/640?wx_fmt=png&from=appmsg)

### ⚡ 实时测试与调试
**内置的Playground功能**让你无需部署完整应用栈就能测试流程。你可以实时与流程交互，检查逻辑和响应生成效果。更棒的是，还能单独运行每个组件来测试依赖关系，这大大减少了调试时间。

### 🔧 灵活的部署选项
构建好的流程既可以用作原型，也能通过**Langflow API嵌入到现有应用代码**中。对于更复杂的场景，你可以将Langflow作为依赖项构建，或者部署Langflow服务器来通过互联网提供服务。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrReR42rTYjG0icDE6T5bBv8TKvq1UBhZX1U8dnrvgYvfYY8rCyxffwEpDdCJBicHnQBqkvI5pmfxQUQ/640?wx_fmt=png&from=appmsg)

### 🚀 强大的扩展能力
除了内置组件，Langflow还支持**自定义组件开发**。你可以使用社区分享的组件，也能开发自己的组件并与其他用户分享。这种开放生态让应用的可能性无限扩展。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrReR42rTYjG0icDE6T5bBv8TwpLgIBNHfWJdicdqaialGO7XACFeegVMtLrshLMuXqRlcecTTjNsTrVQ/640?wx_fmt=png&from=appmsg)

## 实际应用场景
基于我们的使用经验，Langflow特别适合：

- • **智能客服系统**：快速集成知识库和对话模型

- • **文档分析工具**：构建多步骤的文档处理流水线

- • **内容生成平台**：组合不同的生成和优化模块

- • **智能体应用**：利用内置的Agent和MCP功能构建复杂AI代理

## 使用体验分享
**安装过程极其简单**，无论是桌面版还是命令行安装，都能在几分钟内完成。我们团队中即使是前端工程师也能快速上手，这大大降低了AI应用开发的门槛。

不过需要注意的是，**在处理极其复杂的业务逻辑时**，可视化编辑可能会显得有些局限。这时候就需要结合自定义组件开发来满足特定需求。

## 值得探索的进阶功能
除了基础功能，Langflow还有一些鲜为人知但非常强大的特性：

- • **模型上下文协议（MCP）支持**：可以作为MCP服务器或客户端使用

- • **组件参数动态调整**：运行时可以临时覆盖流程设置

- • **模板库丰富**：内置多个预构建模板，开箱即用

 
## 总结
作为千遍一律的 AI  工作流中 、langflow 我只能给出 NPC 等级，作为本地启动的项目我调用了多个 API 和 配置多个工具 竟然有 3 个连接超时！！ 一个调用失败，国内只有支持 DeepSeek 接口。 不过 LangFlow 的宣传是通过编排实现LangChian，有时间可以试一试。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrReR42rTYjG0icDE6T5bBv8TYucMGpxxcicHWVjaUOCvH7bnva6qIKEKTJYp98VeibyCGYsNJZMpgs6Q/640?wx_fmt=png&from=appmsg)

**GitHub项目地址：** https://github.com/langflow-ai/langflow

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)