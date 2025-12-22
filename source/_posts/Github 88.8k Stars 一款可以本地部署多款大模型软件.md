---
title: Github 88.8k Stars 一款可以本地部署多款大模型软件
date: 2024-09-01 21:01:53
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

只需* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！这个之前其实有介绍过，但是没啥人看到，我觉得这个还是对于想学习大模型的同学来说还是挺好的。Ollama 是一个开源框架，专为在本地机器上便捷部署和运行大型语言模型（LLM）而设计。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrT08J7B7ysl89kFU2jHdJBmFjjBohs1FiaDMDFy4zibBeoThqeQyiaDLvZe9aV6UGrrCI7RbDuf1vc8A/640?wx_fmt=png&from=appmsg)

**支持大模型**

    Ollama 本身就有多款大模型可以下载，但是要根据自己的电脑下载对应配置的参数。

预构建模型库：包含一系列预先训练好的大型语言模型，用户可以直接选用这些模型应用于自己的应用程序，无需从头训练或自行寻找模型源。

您应该至少有 8 GB 的 RAM 来运行 7B 型号，16 GB 的 RAM 来运行 13B 型号，32 GB 的 RAM 来运行 33B 型号。

****

大模型参数大小命令Llama 3.18B4.7GB`ollama run llama3.1`Llama 3.170B40GB`ollama run llama3.1:70b`Llama 3.1405B231GB`ollama run llama3.1:405b`Phi 3 Mini3.8B2.3GB`ollama run phi3`Phi 3 Medium14B7.9GB`ollama run phi3:medium`Gemma 22B1.6GB`ollama run gemma2:2b`Gemma 29B5.5GB`ollama run gemma2`Gemma 227B16GB`ollama run gemma2:27b`Mistral7B4.1GB`ollama run mistral`Moondream 21.4B829MB`ollama run moondream`Neural Chat7B4.1GB`ollama run neural-chat`Starling7B4.1GB`ollama run starling-lm`Code Llama7B3.8GB`ollama run codellama`Llama 2 Uncensored7B3.8GB`ollama run llama2-uncensored`LLaVA7B4.5GB`ollama run llava`Solar10.7B6.1GB`ollama run solar`****

简化部署：Ollama 目标在于简化在 Docker 容器中部署大型语言模型的过程，使得非专业用户也能方便地管理和运行这些复杂的模型。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrT08J7B7ysl89kFU2jHdJBmIN1fJ10uqFibwtVOapqX5m0apMChPvksaV8aW0czhvwtJibWZUKhZlBA/640?wx_fmt=png&from=appmsg)

轻量级与可扩展：作为轻量级框架，Ollama 保持了较小的资源占用，同时具备良好的可扩展性，允许用户根据需要调整配置以适应不同规模的项目和硬件条件。

API支持：提供了一个简洁的 API，使得开发者能够轻松创建、运行和管理大型语言模型实例，降低了与模型交互的技术门槛。

模型导入与定制：

Ollama 也支持 Modelfile 中导入 GGUF 模型，只需要创建一个名为 的文件Modelfile，其中包含FROM要导入的模型的本地文件路径的指令。然后再再Ollama 中创建一个模型。

**配合页面**

  还能配合FastGPT 就可以整合本地资源对大模型上传文件了,等Open-UI 等做 本地的大模型部署。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrT08J7B7ysl89kFU2jHdJBmRgXwdw45DQqBwXbWsTpo7IX6tLicnnicdibJGZRQ04xiaXE1xETvqb6Slw/640?wx_fmt=png&from=appmsg)

  这个很吃电脑配置。

感兴趣的还是可以去GitHub 进行尝试或者看看有什么好的注意。

项目地址：

**https://github.com/ollama/ollama**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**