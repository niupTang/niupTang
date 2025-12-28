---
title: "GitHub 新神器！用你自己�?Chrome，跑出超�?Playwright �?AI 浏览器！"
permalink: github-新神�?用你自己�?chrome-跑出超越-playwright-�?ai-浏览�?
date: 2025-06-23 22:08:27
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！最近MCP 大火，而对于MCP 的功能工具也层出不穷，最近看到一款直接操作浏览器的MCP ，——chrome.它是一个�?*Model Context Protocol（MCP）本地服务桥接器**�?能让你本�?Chrome 浏览器直接接入大模型，完成浏览器自动化操作！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgaToHZX4y6HoaX6kxqWlcvdQXM889jT9LH144iacnnmPIryTpmickAyZhQ/640?wx_fmt=png&from=appmsg)

而且�?——�?*用你平时的浏览器！不是重启的那种�?*

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgamaXWMx6JWdicnZHsCGjoXGf3IWu1ALIfZwWAuoaAjnkelgicyw8DygkQ/640?wx_fmt=png&from=appmsg)

**
**

�?登录状态保�?�?历史/插件/书签保留 �?多标签上下文保留

真正�?AI 成为你「浏览器的副驾驶」�?

## �?有多强？核心能力速览�?
- �?🧭 **网页导航与点击操�?*

- �?📸 **全页面或元素截图**

- �?🧠 **网页语义搜索（内置向量数据库�?*

- �?🧰 **抓包、分析、自动填写表单、模拟输�?*

- �?🧾 **书签 & 历史管理**

- �?🧱 **支持自定义注�?CSS/JS**

- �?⚡�?*WASM SIMD 加速向量处�?*

## 🔍 它和 Playwright 有啥不同�?
对比维度
Playwright 浏览�?
mcp-chrome（复用你浏览器）
启动方式
另起一个干净的浏览器进程
用你当前正在用的 Chrome
登录状�?
�?每次都得重新登录
�?登录状态、Cookies 全保�?
插件/配置/习惯
�?无法继承你的设置
�?原样使用你的插件和偏�?
多标签上下文感知
�?支持有限
�?支持任意切换和并行感�?
通信效率
50�?00ms 延迟
�?更快的本地通信响应
## 📦 快速安装指�?
🛠�?前提依赖�?

- �?Node.js 18+

- �?安装 `mcp-chrome-bridge`

- �?使用 Chrome / Chromium 浏览�?

- 

- 

👣 步骤如下�?

`pnpm install -g mcp-chrome-bridge --unsafe-perm`- 1. �?GitHub Releases 下载 Chrome 插件

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgaVh0Mbgvq3wdYlDeg4icwanJtx3r3VeJOf8D42jBrEGVhzxKVHEFJrBA/640?wx_fmt=png&from=appmsg)

- 2. 打开 `chrome://extensions/`

- 3. 开启“开发者模式”，加载解压好的插件

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgaUmnc5KxajNQnuG7l6l2IWpowPmMS2g4bvw7gqQZfWiagd9CXxibIv53w/640?wx_fmt=png&from=appmsg)

- 4. 点击扩展图标，连接启动服�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfga8YI9MIDn5GD59fIVykrsZQbjN4ZxIaPTG6ukCr1qicia7F4UqDFSfotQ/640?wx_fmt=png&from=appmsg)

5.客户端连接服�?
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgaUqXhsWxEJhXChlfqEf5JCjwZBUqUhuRmInz7DPCjIotX1wrSRTdhiag/640?wx_fmt=png&from=appmsg)

## 🧪 可用工具�?
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgaO158ibsBDSwkJtlFlEYqYRCTJHtP2FTicv9qQnicJbEibCD5MBkqIVibLvg/640?wx_fmt=png&from=appmsg)

无论�?Agent、聊天助手、网页分析， 还是自定义数据自动抓取工具，它都能胜任！

## 🛣�?项目地址 & 推荐指数
👉 GitHub 项目地址�?https://github.com/hangwin/mcp-chrome

�?推荐指数�?*5 �?*

🎯 适合人群：做 AI Agent / LLM 插件 / 自研搜索 / 自主体浏览器项目的开发者！

## 🐮 牛皮糖的思考小�?
这类�?*模型驱动现实环境**”的工具，未来一定是 AI 基础设施的重要一环�?

�?mcp-chrome 的最大优点在于：

🧠 **它不模拟现实，它就是现实本身�?* 从你的浏览器中生长出的智能，就该用你最熟悉的环境开始！

你负责思考，AI 帮你点开新世界！

如果你觉得有用，欢迎三连�?👍 点赞、�?分享、�?留言

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成�?

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)