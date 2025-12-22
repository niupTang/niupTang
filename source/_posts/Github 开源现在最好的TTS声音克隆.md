---
title: Github 开源现在最好的TTS声音克隆
date: 2024-10-25 22:41:32
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！F5-TTS 是一个基于流量匹配的文本到语音系统，旨在生成流畅且忠实的语音，特别适合童话故事机。它采用了 ConvNeXt V2 和扩散变换器，提升了训练和推理的速度。

### 安装
你可以选择以下几种方式进行安装：

- pip 包：直接安装用于推断。

```
`pip install git+https://github.com/SWivid/F5-TTS.git`
```

- 局部可编辑：便于进行训练和微调。

```
`git clone https://github.com/SWivid/F5-TTS.git
cd F5-TTS
pip install -e .`
```

- Docker 使用：可以构建或从 GitHub Container Registry 拉取镜像。

### 推理
支持 Gradio 应用程序和 CLI 推理，能够实现多风格和多说话人生成，并提供语音聊天功能。

### 训练与评估
你对着公众号私信"F5"就自动有下载链接了。

并且相比于原版的UI，我们也给大家做了汉化，方便大家使用（其实是我自己看不懂英语。。。）
首先下载完，解压压缩包，得到完整目录如下。
![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvs8c2EKOefu13A7kiaHA131hcUIjFyeN9mxmic0QqF6ano1dVVErQyibiaw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

然后点击  一键运行.bat，终端会自动跳出。
稍等片刻，即可看到一个链接。
![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvRMCAjZ5pqQpgjWHkfYs82icpPzwUKr9wibYRrDAUjrK99USLvowmmYIg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

按住Ctrl 并单击进行访问，就能进到F5的界面里面了。
![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqfYkFL9Tguv9Mxuf9TgMmvsHAOiaf86vHbTlDP5NHMAZJXziaSu0OmWgGE8mtLWOYLkialJuqlrjBEA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

点击上传参考音频，即我们想要克隆的人的音频，音频不是越长越好，一定得15秒以下才行。
****

项目地址：

**https://github.com/SWivid/F5-TTS**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**