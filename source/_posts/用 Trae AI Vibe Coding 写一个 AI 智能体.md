---
title: 用 Trae AI Vibe Coding 写一个 AI 智能体
date: 2025-06-26 20:36:01
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

    大家好，我是太阳鸟！

在初步学习了 Langchain 的基础知识后，我产生了一个大胆的想法：能否完全不写代码，仅靠 AI 直接生成一个完整的智能体系统？这个想法最终催生了 **Agent-Zero**  一个完全由 AI 生成的智能体框架。

万万没想到真的给我实现了， 弄了一个 Agent-Zero 的简易版本，全程一个代码都没有写，准确的来说我可能还有很多代码不知道什么意思。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLZajib1T7la2PWDSQ8YkvbI6DiatCUcmklemGpAF3fQjkF2TEknFsaRBqgaFDlz2IYmcqZgdymUNQ/640?wx_fmt=png&from=appmsg)

**项目目标：Agent Zero Web 服务**

构建一个前后端的智能体项目，核心功能包括：

- 通过浏览器与 AI 智能体实时交互

- 动态管理提示词（prompt）配置

- 可视化查看智能体执行结果

- 基于 FastAPI + Uvicorn 的高性能后端

`agent-zero/
├── templates/               # 前端
│   ├── index.html
├── backend/                # FastAPI 后端
│   ├── core/               # 智能体核心
│   │   └── agent.py   # 智能体实现
│   ├── api/                # API端点
│   │   └── main.py         # FastAPI主文件
│   ├── tools/              # 工具模块
│   └── requirements.txt    # Python依赖
├── .env                    # 环境变量

`![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLZajib1T7la2PWDSQ8YkvbRW35OZ3NFmgzjiajuVhZxcDyeXhlFcibXE8l0b5vPPRYpCxMQrAGu2ow/640?wx_fmt=png&from=appmsg)

主要是根据前面两天的代码结果，要 AI 去帮我生成一个完整的系统，因为我的代码只有大模型调用，并没有前端页面，大家可能看得到这个生成的前端页面也不够美观。

### 

### 

首先我将目标的模板代码交给 豆包 的 AI 编程，要他生成一个简易版的项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLZajib1T7la2PWDSQ8Ykvb89vDXpLR8b89dIkT6nmUTtjCa5PdL20BBibCwdxkxPpcAIP1Wu9LNnA/640?wx_fmt=png&from=appmsg)

确实直接给我生成了对应的项目架构，对于智能体四件套【提示词】、【模型调用】、【工具】、【记忆模板】少了工具和提示词。但是他至少给我生成了对应的HTML 和 Agent 调用核心模块。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLZajib1T7la2PWDSQ8Ykvbia1HWb8x7B8tNfia3Vib5Q97g7uOiaEcnGkicbNn6zDKZ9M3FyiaxZvhZ1Ww/640?wx_fmt=png&from=appmsg)

AI 编程没有一步完美，所以我需要的就是要他继续生成对应的模板模块，增加一个提示的管理类。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLZajib1T7la2PWDSQ8Ykvb54JuTzL2kAlia1PNy91T9x36PqbkUNnwRbhz55x06xufRSpP9jGo1sA/640?wx_fmt=png&from=appmsg)

### 成果展示
- 提示词管理

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLZajib1T7la2PWDSQ8YkvbggnpOWbjNnFcLrxJia6fuRF8q9Dvcmib18JP7YbJAibZHWO78eeicleSwA/640?wx_fmt=png&from=appmsg)

- 多轮回复

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLZajib1T7la2PWDSQ8Ykvbkrib220icbXcWdgf5xpxDJM1QiciaNsl9a51GqlK4KJQzvO2WQLkwkskVw/640?wx_fmt=png&from=appmsg)

### 开发反思与洞见
### 

- **AI**** 编程的突破点**

- 描述能力 > 编码能力：清晰的意图描述是关键

- 模块化思维：AI 擅长生成独立功能模块

- 迭代式开发：小步快跑比一次性完整描述更有效

- **未解之谜的启示**

**
**

- 虽然生成了完整系统，但部分代码逻辑仍需理解

- AI 生成的架构可能需要人工优化

- 调试能力成为新的关键技能

**
**

### 

### 

通过 Agent-Zero 的开发实践，我深刻体会到：

- **AI**** 工程化已成现实**：零代码开发完整系统不再是幻想

- **知识转型的紧迫性**：从编码能力转向架构设计能力

- **人机协作新****范式**：开发者成为"AI 教练"而非"代码工人"

"我们正站在智能体革命的起点，未来不是编写智能体，而是培育智能体生态系统。" —— Agent-Zero 开发手记

这次正面说明了编程门槛越来越低，即使没有深厚的编程基础，通过清晰的描述和AI辅助，任何人都能构建功能完善的智能体系统。Agent-Zero不仅是一个工具，更是人机协作新范式的开端，未来开发的思维比开发的技能更加重要。

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