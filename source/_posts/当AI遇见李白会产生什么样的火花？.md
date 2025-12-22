---
title: 当AI遇见李白会产生什么样的火花？
date: 2025-07-03 23:39:45
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

•[50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好我是太阳鸟，这个开源项目 **meet-libai** 是一个极富创意的 LangChain 智能体实践项目。它将唐代诗人 **李白**“复活”，通过大语言模型模拟他的对话风格，实现了一种具有人格特征的“AI 虚拟诗人”。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSlx21RtFAu0XyE17TlMCkBWsebO32Eiah9OHugbA5z9y1xZOdhkDCMkoXcWnniak5Nxz87Zvdq9c4Q/640?wx_fmt=png&from=appmsg)

### 🚀 项目简介
**meet-libai** 是一个使用 LangChain 构建的 AI 智能体项目，它通过 Prompt、工具链、记忆等模块，打造了一个能和用户诗意对话的“数字李白”。

- • 🌟 核心目标：与「李白」对话，体验唐诗之美。

- • 💡 技术核心：LangChain + LLM + 自定义 Prompt + 多轮记忆

- • 🔧 支持框架：支持 OpenAI / ChatGLM3 等多种大模型，适配多种后端部署。

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSlx21RtFAu0XyE17TlMCkBZAD7RhkkUEypGur8Nfrfmaa3usF8PBmsrrx6OUgichaJAfHUwORMbLA/640?wx_fmt=png&from=appmsg)

### 🔍 项目功能亮点

模块
功能
LangChain 技术点
🤖 李白人格
模拟李白说话方式、知识体系
自定义 Prompt + Memory
🧠 长短期记忆
支持多轮对话、保持上下文
`ConversationBufferMemory`📖 古诗创作
模拟李白写诗、解析诗意
Tool + Prompt Engineering
🧩 插件工具
支持网络搜索、诗句推荐等能力
自定义 Tool 集成
📦 可部署性
支持 gradio 界面演示
前后端分离、易部署
### 📜 LangChain 智能体开发提示词（基于 meet-libai）
以下是可以用于开发或扩展“AI 李白”的提示词模板：

🧠 人格注入 Prompt（System Prompt）示例：`你是唐代伟大诗人李白。你性格豪放、爱饮酒作诗、崇尚自由。请以古文雅语与我对话，并在合适时机引用自己的诗句。`✍️ 创作提示词（User Prompt）示例：- • `李白，你能为我写一首咏春之诗吗？`

- • `请模仿你的《将进酒》风格，为我写一首关于友情的诗。`

- • `这首诗我不太理解，能解释一下它的含义吗？`

- `
`

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSlx21RtFAu0XyE17TlMCkBMibHaAabicUFZK6ZU1GFYxfS47gFmSM9q4ARO7jtibicd2hoLibHCicjMqJw/640?wx_fmt=png&from=appmsg)

`
`
🛠 智能体扩展建议：
功能模块
提示词建议
增加诗词推荐功能
`你可以推荐一首与你相似风格的唐诗吗？`加入工具链（如搜索或百科）
`调用搜索工具查找“李白生平”，并解释他的游历背景`多人格切换（杜甫、王维等）
`切换为“杜甫”，模仿其沉郁风格对答`### 🔧 开发者建议：LangChain 应用开发提示词（Skill Prompt）
场景
技能提示词
智能体角色设定
`创建一个人格鲜明的 AI 智能体，模拟李白对话风格`多轮记忆集成
`为 AI 李白添加记忆模块，支持上下文记忆与情绪保持`工具扩展
`添加一个古诗查询工具，可用于引用其他诗人诗句`调试优化
`开启 verbose 模式，分析每轮对话的推理链路`### ✅ 项目适用人群
- • 🎓 语言模型入门者：学习 LangChain 如何快速构建人格型 Agent。

- • 🧑‍🎨 AI 内容创作者：用 AI 创作古诗、角色互动等。

- • 💻 LangChain 高阶玩家：研究 Prompt 工程+记忆管理+多工具集成实践。

AI 不仅仅能够遇见李白，是不是对于每一个懂编程的来说都可以模仿这个项目做一个自己的智能体？遇见自己才是最好自己。
### 📎 项目地址
GitHub 项目仓库：

https://github.com/BinNong/meet-libai

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成长

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)