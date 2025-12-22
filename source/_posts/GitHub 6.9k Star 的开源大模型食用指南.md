---
title: GitHub 6.9k Star 的开源大模型食用指南
date: 2024-08-01 18:14:11
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！之前在想玩大模型，恰巧今天在GitHub 上面看到相关的项目，这个项目是由 Datawhale China 团队在 GitHub 上开源的一个自我学习型大型语言模型（Self-LLM）项目。Datawhale China 是一个专注于数据科学和人工智能教育的开源社区，致力于推广和普及AI知识。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSiaPw6oIREjicPr4JtIjMohO4yrStDrRUZrdhPdeawO9hFibI0sa8fZiaRxLfibK2o2tQzZsiaI6JDibvYw/640?wx_fmt=png&from=appmsg)

        项目是一个围绕开源大模型、针对国内初学者、基于 AutoDL 平台的中国宝宝专属大模型教程，针对各类开源大模型提供包括环境配置、本地部署、高效微调等技能在内的全流程指导，简化开源大模型的部署、使用和应用流程，让更多的普通学生、研究者更好地使用开源大模型，帮助开源、自由的大模型更快融入到普通学习者的生活中。

**
**

**项目的主要内容包括：**

-  基于 Linux 平台的开源 LLM 环境配置指南，针对不同模型要求提供不同的详细环境配置步骤；

- 针对国内外主流开源 LLM 的部署使用教程，包括 LLaMA、ChatGLM、InternLM 等；

- 开源 LLM 的部署应用指导，包括命令行调用、在线 Demo 部署、LangChain 框架集成等；

- 开源 LLM 的全量微调、高效微调方法，包括分布式全量微调、LoRA、ptuning 等。

 ****

**环境准备**

    在 Autodl 平台中租赁一个 3090 等 24G 显存的显卡机器，如下图所示镜像选择 PyTorch-->2.0.0-->3.8(ubuntu20.04)-->11.8（11.3 版本以上的都可以）。接下来打开刚刚租用服务器的 JupyterLab，并且打开其中的终端开始环境配置、模型下载和运行演示。

**![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSiaPw6oIREjicPr4JtIjMohOuTZGjfiaiaXJEn418h2mnmvUlMKQLoAv0rDrezoKIZO7ib0MSytSmGmjg/640?wx_fmt=png&from=appmsg)
**

**
**

     如果自己有一台本地差不多配置的电脑也可以自己在自己电脑上跑。

    不仅如此, Datawhale China 团队还提供了大模型基础学习和大模型白盒子指南，从零开始手动搭建RAG。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSiaPw6oIREjicPr4JtIjMohOMCWMGMKVB9gaHe5rkXN30Tox6uOyHdyJGud2JDjVfAv7bZ1iaBMYc4A/640?wx_fmt=png&from=appmsg)

项目地址：

**https://github.com/datawhalechina/self-llm**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 51.6k Star 的ChatGPT中文提示词](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485375&idx=1&sn=811db263b73470ab9adc14455db5e403&chksm=c1d3a5b9f6a42caf5599234a8694abdc34be878b1eb65e25dc7761625ca4f1e6f4914999850b&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)