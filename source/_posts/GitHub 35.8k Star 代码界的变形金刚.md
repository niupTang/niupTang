---
title: GitHub 35.8k Star 代码界的变形金刚
date: 2024-11-09 21:00:24
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天，我要给大家介绍一个革命性的项目——OpenHands。这是一个由AI驱动的软件开发代理平台，它能够像人类开发者一样编写代码、执行命令，甚至还能从StackOverflow上复制代码片段。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjn53KcWZeHeVCrHQX48l7boibxmdUiauSw1P1zGB7p5Y72obo9muksLIEYxUVdbecdUs0DJhibsogA/640?wx_fmt=png&from=appmsg)

项目核心 OpenHands的核心在于其代理能力，它们可以执行任何人类开发者可以完成的任务。这意味着，无论是代码修改、命令运行，还是API调用，OpenHands都能轻松应对。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjn53KcWZeHeVCrHQX48l7AxqzC2VGfkEdRiamqj493aNLlOOlnWFhjTd00Pia4qxJLLbazlCOGopQ/640?wx_fmt=png&from=appmsg)

**
**

**开发环境搭建** 

Linux, Mac OS, or WSL on Windows [Ubuntu <= 22.04]

Docker 

Python = 3.12

NodeJS >= 18.17.1

Poetry >= 1.8

OS-specific dependencies:

- Ubuntu: build-essential => sudo apt-get install build-essential

- WSL: netcat => sudo apt-get install netcat

**如何使用**

`docker pull docker.all-hands.dev/all-hands-ai/runtime:0.13-nikolaik

docker run -it --rm --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.13-nikolaik \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name openhands-app \
    docker.all-hands.dev/all-hands-ai/openhands:0.13`**模型选择** **OpenHands**支持多种模型，包括Anthropic的Claude 3.5 Sonnet。你可以根据需要选择合适的模型，并使用API密钥进行配置。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjn53KcWZeHeVCrHQX48l7n6f3NrjRsvLBWujicOe6QQzUPSfwS83HUNnVGvej3sQB36WL1DQ6FAA/640?wx_fmt=png&from=appmsg)

**运行和调试** 一旦环境搭建完成，你就可以通过简单的命令来运行**OpenHands**的前后端服务器

**项目地址** 如果你对**OpenHands**感兴趣，想了解更多信息或加入我们的社区，可以访问我们的GitHub页面：OpenHands GitHub[1]。

引用链接`[1]` OpenHands GitHub: *https://github.com/All-Hands-AI/OpenHands*

****

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562PRME95JfKlQIXNIicIbUXpeouLU3upiazIm774Q0IPHORgZtLXNauthoPTZgkziaC8TZefT3vO7lC9A/640?wx_fmt=jpeg)

*
*