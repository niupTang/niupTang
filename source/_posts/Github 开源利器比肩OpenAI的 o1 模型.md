---
title: Github 开源利器比肩OpenAI的 o1 模型
date: 2025-01-22 09:16:51
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    

大家好，我是牛皮糖！最近国内 AI 大模型简直是过年了，各个厂家都在开源大模型，特别是DeepSeek-R1 的发布可谓是引起了广泛的关注。这款国产 AI 模型不仅在推理、代码生成等方面表现出色，更直接被老美拉进黑名单。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H8ht60WXFciaibnibibHUhnyXvBLYiaCyU8H9Dbm8JuYvSxcAYguyjpfYGEdA/640?wx_fmt=png&from=appmsg)

### DeepSeek-R1 对比 OpenAI o1
DeepSeek-R1 是一款针对开发者需求优化的高性能 AI 模型，其推理能力、代码生成能力和多语言支持都相当出色。相比于 OpenAI 的 o1 模型，DeepSeek-R1 在功能上没有太大差距，且其价格十分亲民，是开发者们进行日常开发的理想选择。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H8ITn6yYkf3ib1yPEFHjqSkmhaeYBoMlthMfMHayhYGptp9ibFUkiaao6ww/640?wx_fmt=png&from=appmsg)

### 如何将 DeepSeek-R1 接入 VSCode/Cursor
步骤 1：安装 Roo Cline 插件- 1. 打开 VSCode，点击左侧的扩展按钮。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H8wJouI3u8XLOkv7DouRoekR9Bq9wyov0gOxdQK7YR0cq50IoDncOKOw/640?wx_fmt=png&from=appmsg)

- 2. 在搜索框中输入 `Roo Cline`，找到插件后点击安装。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H8HtVJYHeBkRVT8mhdt2hxwvIXtv1UM4eS1pBcFXXDmQ2hnplE1tRcog/640?wx_fmt=png&from=appmsg)

- 3. 安装完成后，你可以在插件详情页看到安装时间信息。

步骤 2：获取 DeepSeek API Key- 1. 访问 **DeepSeek** 官网，登录或注册账号。

- 2. 在 DeepSeek 平台中创建并获取自己的 API Key，记得选择 **DeepSeek-R1** 模型。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H8S7e6Rhcj6Er06w4A6zQfCiaSFraGCBHpKpmXGgLPNxnhwKeiaKk5RTWA/640?wx_fmt=png&from=appmsg)

步骤 3：配置 Roo Cline 插件- 1. 打开 VSCode 中的 Roo Cline 插件设置页面。

- 2. 填写你的 DeepSeek API Key。

- 3. 选择 **DeepSeek-R1** 模型作为默认接口。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H8epHHw6aYECoJU35O48icGibmrZrLm0h2pd0x8aXulr4hENibrdnZTLglQ/640?wx_fmt=png&from=appmsg)

4. 配置系统prompts
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H88kCFklZ62NKicjTG5jCDr1v1R6NejZwFeKDYDROQZhVVXUHCzf6JTZg/640?wx_fmt=png&from=appmsg)

步骤 4：开始使用配置完成后，你就可以直接在 VSCode 中调用 DeepSeek-R1 的强大能力了。例如，假如你要生成一个 Python 贪吃蛇小游戏，DeepSeek-R1 会直接为你生成代码，免去你手动编写的繁琐。甚至如果生成的代码不能完全满足需求，你还可以直接在 VSCode 的聊天窗口中与 AI 进行互动，要求它修改，直到你满意为止。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H8TvBS9If7mwXdjWDdzZRWE2YAZNgAHDd1feAemvITgJqrZD7nXovdUA/640?wx_fmt=png&from=appmsg)

### DeepSeek-R1 的优势
- 1. **高效代码生成**
DeepSeek-R1 能快速生成高质量的代码，无论是简单的小脚本，还是复杂的开发任务，它都能轻松应对。

- 2. **强大的推理能力**
除了生成代码外，DeepSeek-R1 还能处理复杂的推理任务，帮助开发者解决实际问题。

- 3. **价格低廉，性价比高**
与其他同类 AI 编程工具相比，DeepSeek-R1 提供了非常亲民的价格，对于预算有限的开发者来说非常友好。

- 4. **便捷的集成方式**
通过 Roo Cline 插件，DeepSeek-R1 可以无缝集成到 VSCode 中，极大地提升了编程效率。

### 总结
DeepSeek-R1 作为一款高效、低价的 AI 编程工具，为开发者提供了强大的支持。通过将 DeepSeek-R1 接入 VSCode，开发者们不仅能提升代码生成效率，还能更高效地解决工作中的各种问题。如果你想提升自己的编程能力和职场竞争力，不妨试试 DeepSeek-R1，体验这款国产 AI 模型带来的创新和便利！

**点击链接：** DeepSeek-R1 GitHub 项目地址

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQf0tW01tSC6hQibYKlBF0H815dDnMATewn5XPh530AMamD8cTLRzVmkLhhzdY02sJ4DE05e81j8ibg/640?wx_fmt=png&from=appmsg)