---
title: GitHub 25k Star 音乐分离神器
date: 2024-08-22 19:39:58
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！今天要给大家介绍的是一个音乐制作领域的革命性开源项目——Spleeter。这是一个由Deezer公司开发的，能够将音乐曲目分离成不同的音轨（例如人声和伴奏）的神器�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQiaLIhVfxAiay0eRvowicVwBUqn6jlGZmZ88KVNcM1TgibnULfSEdwq4SjiaTuINicDx6Sp0ia0ibviamDZiaA/640?wx_fmt=png&from=appmsg)

### **项目简�?*
        Spleeter 是一个基于深度学习的源分离工具，它可以帮助用户从一首歌曲中提取出人声和伴奏。这在音乐制作、混音、翻唱等领域具有极大的应用价值。想象一下，当你听到一首喜欢的歌曲，想要翻唱或者进行混音创作，但是苦于没有伴奏，Spleeter 可以帮你轻松解决这个问题�?

### **如何使用**
    首先，你需要安装Python环境，然后需要安装ffmpeg,最后通过pip安装Spleeter。安装完成后，你可以通过命令行或者编写脚本来调用Spleeter的功能，将音乐文件分离成不同的音轨�?

- 
- 
- 
- 
- 
- 
- 
- 
`# install dependencies using conda``conda install -c conda-forge ffmpeg libsndfile``# install spleeter with pip``pip install spleeter``# download an example audio file (if you don't have wget, use another tool for downloading)``wget https://github.com/deezer/spleeter/raw/master/audio_example.mp3``# separate the example audio into two components``spleeter separate -p spleeter:2stems -o output audio_example.mp3`

### **核心功能******
### 
- 分离音轨：Spleeter能够将音乐文件分离成人声和伴奏，甚至更多音轨�?

- 多格式支持：支持多种音频格式，如MP3、WAV等�?

- 实时处理：虽然Spleeter主要设计用于批处理，但也可以用于实时音频分离�?

### **技术亮�?*
- 深度学习：Spleeter利用深度学习技术，通过训练模型来实现音频的分离�?

- 多音轨分离：除了分离人声和伴奏，Spleeter还能够分离出其他音轨，如鼓点、贝斯等�?

**性能分析**

使用基于U-net的CNN模型进行人声和伴奏的分离，训练在Deezer的内部数据集上。它在musdb18数据集上表现出色，与Open-Unmix和Demucs相比，具有可比的分离性能，如SDR、SAR、SIR和ISR指标。Spleeter在单个GPU上运行速度快，能在2分钟内处�?小时音频，非常适合处理大型数据集�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQiaLIhVfxAiay0eRvowicVwBUTCOXlRMHOFias3O26AyZGjLtXp0SD9iakrE7nq1Mibt3E4SvVHb3vqSicw/640?wx_fmt=png&from=appmsg)

项目地址�?

**https://github.com/deezer/spleeter**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•�? [从零开始学Python-ANACONDA安装](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247484877&idx=1&sn=4b6e1a228937b0e494eb257f78036e0a&chksm=c1d3a7cbf6a42edd163dfad92ed9eb867ac5bb3fc108a0c37cfc83475623442c82e6f8a09b2b&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•�? [4�?16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接�?ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)