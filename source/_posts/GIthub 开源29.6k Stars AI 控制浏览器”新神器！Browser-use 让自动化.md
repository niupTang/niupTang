---
title: GIthub 开源29.6k Stars AI 控制浏览器”新神器！Browser-use 让自动化任务变得超简单
date: 2025-02-04 22:07:52
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我*
# 🌐 Browser-use：让 AI 代理控制浏览器，开启自动化新纪元！
大家好，我是牛皮糖！今天给大家推荐一个非常实用的 GitHub 开源项目——**Browser-Use**。如果你常常使用浏览器进行开发、学习或日常操作，这款工具可以大大提升你的效率，值得每个浏览器重度用户关注！
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQmPGHkaUPaRWa6M8H9PE78LRBA0icyowyTHnn64AxMtKydfKW5nTbTUx6sicEibcaib6qb7InsecvnVw/640?wx_fmt=png&from=appmsg)

## 🚀 项目简介
Browser-use 是一个开源项目，旨在让 AI 代理能够通过浏览器与网络世界无缝交互。通过简单的代码，你可以让 AI 完成复杂的任务，比如自动搜索信息、填写表单、下载文件，甚至在社交媒体上自动发布内容。它的核心理念是“**让计算机做它擅长的事，而你只需要告诉它做什么**”。

### 🌟 亮点功能
- 1. **多平台支持，兼容性强**

- • **Browser-Use** 支持多种平台，兼容主流浏览器。无论你是 Chrome 用户，还是 Firefox 用户，都可以顺利使用，提供一致的体验。

- 2. **高效配置与定制化**

- • 通过简单的配置，用户可以根据自己的需求定制浏览器的功能和界面，提升工作效率。比如，自动化打开特定网页，定时提醒等。

- 3. **智能标签管理**

- • 这款工具具有智能标签管理功能，可以帮助你高效地组织浏览器标签，避免标签堆积带来的混乱，让你专注于任务本身。

- 4. **自动化操作支持**

- • 通过集成的脚本和自动化功能，你可以自动执行常见的浏览器任务，如自动填写表单、截图、页面内容抓取等。

## 🛠️ 快速上手
安装过程非常简单，只需要几条命令：

`pip install playwright
playwright install
pip install browser-use`然后，你可以通过以下代码让 AI 代理完成任务：

`from langchain_openai import ChatOpenAI
from browser_use import Agent
import asyncio
from dotenv import load_dotenv

load_dotenv()

asyncdefmain():
    agent = Agent(
        task="Go to Reddit, search for 'browser-use', click on the first post and return the first comment.",
        llm=ChatOpenAI(model="gpt-4"),
    )
    result = await agent.run()
    print(result)

asyncio.run(main())`## 🎯 使用场景
- • **自动化任务**：自动填写表单、搜索信息、下载文件。

- 

- • **数据抓取**：从网页中抓取数据并保存。

- 

- • **自动化测试**：用于自动化测试网页功能。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQmPGHkaUPaRWa6M8H9PE78ISibUNLz4e8HEIpaf9iaBuZkyjYgIaHwcXR9CwehibSiaiaXL62jbllaicnQ/640?wx_fmt=png&from=appmsg)

- • **教育和培训**：帮助用户学习如何使用 AI 控制浏览器。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQmPGHkaUPaRWa6M8H9PE783Iib06dXFr7gvHmFyCJyCuhiczrO0ddONkqODOVMxoDpNTib74E60K4Lg/640?wx_fmt=png&from=appmsg)

## 🌐 项目链接
GitHub 仓库：https://github.com/browser-use/browser-use

如果你对这个项目感兴趣，不妨去 GitHub 上看看它的详细介绍，或者加入他们的 Discord 社区，与其他开发者交流心得。相信我，这将是一个让你眼前一亮的项目！

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)