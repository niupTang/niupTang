---
title: Github 5.6k开源微信机器人,接入大模型
date: 2024-11-24 21:16:39
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我   

     **大家好，我是牛皮糖！** 在这个信息爆炸的时代，微信已经成为了我们日常生活中不可或缺的一部分。无论是工作沟通还是社交互动，微信都扮演着重要的角色。但是，你是否曾因为繁忙而错过了一些重要的微信消息？或者在管理微信群时感到力不从心？今天，我要给大家介绍一个GitHub上的开源项目——**WeChat Bot**，它可以帮助我们自动化地处理微信消息和群管理，让我们的生活更加高效。

**WeChat Bot** 是一个基于 **ChatGPT + Wechaty** 的微信机器人，它的核心功能是帮助用户自动回复微信消息和管理微信群/好友。这个项目以其简单易用而著称，只需**2分钟**（4个步骤）就能快速上手。🌸

**项目核心功能：**

- • **自动回复微信消息**：通过配置AI服务，WeChat Bot能够智能地回复收到的消息，让你即使在忙碌时也不会错过任何重要信息。

- • **管理微信群/好友**：WeChat Bot可以帮助你管理微信群，自动处理入群请求、群消息等，让你的群管理更加高效。

**如何使用：**

- 1. **获取API Key**：首先，你需要根据自己的需求选择一个AI服务，并获取相应的API Key。目前支持的服务包括ChatGPT、通义千问、DeepSeek、科大讯飞、Kimi等。

- 

- 2. **配置环境变量**：执行命令 `cp .env.example .env` 拷贝配置文件，并填写你的API Key和其他必要的配置信息。SERVICE_TYPE 在配置文件里面表示用什么模型。SERVICE_TYPE ="Kimi"

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSWMNxqmAyWeVjM9EuWSqLe9uhXQdTrtZQ2W1x2iaZsicyuCeMEzcyjib2CCU4LXWITWZZwib0lIRQ1tw/640?wx_fmt=png&from=appmsg)

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSWMNxqmAyWeVjM9EuWSqLeHVGVQ7MEyMl8HVCUEhHwXUuq4BLGlMWMUQBFFuibicWfSJAibmO5gBiclQ/640?wx_fmt=png&from=appmsg)

- 3. **安装依赖**：通过npm或yarn安装项目所需的依赖。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSWMNxqmAyWeVjM9EuWSqLeCOLW9ib7Xn9ZnzsdrsOGbvEnibka89tkaRr3B0SDXibZVsAicaFIUBbmlA/640?wx_fmt=png&from=appmsg)

- 
`npm run dev`
- 4. **运行项目**：启动WeChat Bot，开始享受自动化的微信管理体验。![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSWMNxqmAyWeVjM9EuWSqLeZT7P9befN4mibOjrS5jT41Fu9ePwiaDiaW09JCA6nvzs99QgPknxGLfDQ/640?wx_fmt=png&from=appmsg)

**项目优势：**

- • **支持多种AI服务**：WeChat Bot支持多种AI服务，用户可以根据自己的需求选择合适的服务。

- • **易于扩展**：项目鼓励社区贡献，欢迎提交PR接入更多的AI服务，共同提升WeChat Bot的功能。

**结语：** 通过WeChat Bot，我们可以更加高效地管理微信消息和群组，释放我们的双手，让我们有更多时间去关注生活中更重要的事情。如果你对这个项目感兴趣，不妨去GitHub上查看更多详情，并尝试使用它来改善你的微信体验。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSWMNxqmAyWeVjM9EuWSqLepBvYfEQRibRNGKQZuDEcAQ9Gib5faDUryE8wJzQRg0UpSJa2234uMltg/640?wx_fmt=png&from=appmsg)

**https://github.com/wangrongding/wechat-bot**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)