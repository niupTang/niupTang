---
title: "Github 推荐！5分钟上手Chrome MCP。"
permalink: github-推荐-5分钟上手chrome-mcp
date: 2025-08-06 23:17:08
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

**什么是MCP Chrome？**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGXVWwsqUHDz6vll0tdiah0b7PYogZ8Jc3a4wsQctSWOX6iah4wQ6p2EHw/640?wx_fmt=png&from=appmsg)

**
**

大家好，我是牛皮糖，最近发现用 Chrome mcp 替代大部分付费AI工具！ ，**浏览器自动化**已经成为开发者必备技能。今天要给大家介绍的这个开源项目 - **MCP Chrome**，可能会彻底改变你对浏览器自动化的认知！

# 核心功能解析
### 基于MCP协议的革命性设计
**MCP (Model Context Protocol)** 是一种新兴的AI协议标准，MCP Chrome巧妙地将这一协议应用到浏览器自动化中：

`# 传统方式 vs MCP方式对比

# ❌ 传统方式 - 复杂且不稳定
from selenium import webdriver
driver = webdriver.Chrome()
driver.get("https://example.com")`### Chrome DevTools Protocol深度集成
项目深度集成了Chrome DevTools Protocol，提供了前所未有的控制能力：

`# 高级功能示例
asyncdefadvanced_automation():
    chrome = ChromeMCP()
    
    # 网络请求拦截
    await chrome.intercept_requests([
        {"url": "*.png", "action": "block"},
        {"url": "analytics.js", "action": "mock"}
    ])
    
    # 性能监控
    metrics = await chrome.get_performance_metrics()
    print(f"页面加载时间: {metrics['loadTime']}ms")
    
    # 内存分析
    memory = await chrome.get_memory_usage()
    print(f"内存使用: {memory['usedJSHeapSize']} bytes")`### 并发会话管理
支持高效的并发处理，让你的自动化任务飞起来：

`import asyncio
from mcp_chrome import ChromeMCP

asyncdefconcurrent_tasks():
    urls = [
        "https://github.com",
        "https://stackoverflow.com", 
        "https://python.org"
    ]
    
    chrome = ChromeMCP(max_concurrent=10)
    
    # 并发处理多个页面
    results = await asyncio.gather(*[
        chrome.screenshot(url) for url in urls
    ])
    
    return results`## 📦 快速上手
### 安装方式
安装浏览器插件![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGQCibXqxVqUe7LibeXk6K0KOdAiaqnU1GCZ2w1I6PRzA0ERx4hRThgYweQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGGgTtgtdZrXciaSWCNOyhEovX9UvLsiaPQrqRNA37tl3vtVnA2gd7XrEg/640?wx_fmt=png&from=appmsg)

选择下载的压缩包
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGTOkbEnbhFoz2Wj2Go4r72zOajHibwTd8FUFOOGI6ZicZ8HnkDS0oDqcg/640?wx_fmt=png&from=appmsg)

展示mcp-server
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGyib9hMQRhiaLbj4r9OficGGE5KLsFYLkcibGFn01cbRqcYtiaX26zf1uIHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGjkP9wPyBiayhw1rqHdXSDdpYCwRPcaibriaBe7NrKheIe9TdD6Nav6Z8A/640?wx_fmt=png&from=appmsg)

将配置MCP 配置到客户端，我用的是Trea.![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGvxw6YbK3vfMa321XYKWpryyLneZpSdKqu9acDqZeymCefm0nqQfFdA/640?wx_fmt=png&from=appmsg)

配置完成后可以看到对应的MCP 功能如下图![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGyHdC8Z1giaKwIdREmouCTvnD64eSKBDFShRuNRFnJJvGrn0qQWb6zqA/640?wx_fmt=png&from=appmsg)

## 🎯 实战应用场景

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGXfKvD4nicDlZ6tFnZjFAcFIg6yibHyZiamY2grsqFYBRJOhuO8AFaVib4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xVEGibKqHOyx3XZfhf1QGugOc3Gd0myb4ZfZrJoibml8KDRVN0ammiaJ1kCj8qfNR8YR8uzy3muag/640?wx_fmt=png&from=appmsg)

不仅仅能够整理网站内容，对于自媒体来说还能自己整理自己想要的资源。

# 总结
**MCP Chrome** 不仅仅是一个浏览器自动化工具，它代表了AI时代开发工具的新范式。通过简洁的API设计、强大的并发能力和丰富的功能特性，它让浏览器自动化变得前所未有的简单。

无论你是开发者、测试工程师还是数据分析师，MCP Chrome都能为你的工作带来质的飞跃。现在就访问GitHub，给这个项目点个⭐吧！

# 快速链接
- • 🔗 **GitHub仓库**: hangwin/mcp-chrome

- • 📖 **官方文档**: 项目Wiki

- • 💬 **讨论区**: GitHub Issues

- • 🐦 **Twitter**: @hangwin_dev

**💡 小贴士**: 如果觉得有用，别忘了分享给身边的朋友！开源项目需要社区的支持才能越来越好！

**#技术分享 #开源项目 #Python开发 #自动化工具 #AI编程**

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