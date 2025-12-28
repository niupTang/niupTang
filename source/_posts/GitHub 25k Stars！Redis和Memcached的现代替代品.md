---
title: "GitHub 25k Stars！Redis和Memcached的现代替代品"
permalink: github-25k-stars-redis和memcached的现代替代品
date: 2024-10-15 22:37:19
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我 

   大家好，我是牛皮糖！数据库的选择对于任何应用来说都是至关重要的。今天，我要向大家介绍一个在GitHub上获�?5535颗星的开源项目—�?*DragonflyDB**�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRmG2urklnqsHRKcBw7Jt6pqFU1Zen5EY0BsOibIVuWdWyGxALIBZ8bFEgMh0GG4ibThfGdlyGzT3JA/640?wx_fmt=png&from=appmsg)

**DragonflyDB**是一个轻量级、高性能的分布式数据库系统，专为现代应用设计。它的核心优势在于其**分布式架�?*�?*高吞吐量**，能够轻松应对大规模数据的存储和查询需求�?

![](https://mmbiz.qpic.cn/mmbiz_svg/4QtDCkraacMS1Jj2QAK6bLP5EGUKMqRDLAQIjZxYZ27fwdxTYu833efTs4DUAI9sAiac11edYZ8SgibPQZeIaLCXPCQtLyT3EU/640?wx_fmt=svg&from=appmsg)

### **核心优势**
**1. 分布式架构：** DragonflyDB通过分布式架构，实现了数据的高可用性和弹性扩展。这意味着，即使在面对大规模数据增长时，它也能够保持稳定和高效的性能�?

**2. 高吞吐量�?* 在处理大量数据时，DragonflyDB展现出了卓越的吞吐能力。这对于需要快速响应用户请求的应用来说，是一个巨大的优势�?

**3. 易于使用�?* 对于开发者来说，DragonflyDB提供了简单直观的API，使得集成和使用变得非常容易。无论是新手还是经验丰富的开发者，都能够快速上手�?

Dragonfly在c6gn.16xlarge上达到了每秒380万个查询（QPS），相比于Redis，吞吐量提高�?5倍�?

在Dragonfly的峰值吞吐量下，P99延迟如下�?

opr6gc6gnc7gset0.8ms1ms1msget0.9ms0.9ms0.8mssetex0.9ms1.1ms1.3ms### **内存效率**

在接下来的测试中，我们使�?debug populate 5000000 key 1024 命令�?Dragonfly �?Redis 分别写入了约 5GB 的数据。然后我们使�?memtier 发送更新流量并使用 bgsave 命令启动快照。下图清楚地展示了这两个服务器在内存效率方面的表现�?

### **如何使用**
对于程序员来说，要开始使用DragonflyDB，你只需要按照以下步骤操作：

**1. 安装�?* 首先，你需要在你的开发环境中安装DragonflyDB。这通常可以通过包管理器或者直接从源代码编译来完成�?

- 
`docker run --network=host --ulimit memlock=-1 docker.dragonflydb.io/dragonflydb/dragonfly`
**2. 配置�?* 安装完成后，你需要根据你的应用需求配置数据库。DragonflyDB提供了灵活的配置选项，以适应不同的使用场景�?

使用 redis 客户端连�?

- 
- 
- 
- 
- 
- 
- 
- 
`redis-cli``127.0.0.1:6379> set hello world``OK``127.0.0.1:6379> keys *``1) "hello"``127.0.0.1:6379> get hello``"world"``127.0.0.1:6379>`

DragonflyDB是一个为现代应用设计的分布式数据库系统，它以其分布式架构、高吞吐量和易于使用的特点，赢得了开发者的广泛认可。如果你正在寻找一个能够应对大规模数据挑战的数据库解决方案，那么DragonflyDB绝对值得一试�?

项目地址：DragonflyDB[1]

希望这篇文章能够帮助到正在寻找数据库解决方案的你。如果你对DragonflyDB感兴趣，不妨去GitHub上查看更多详情，或者直接开始你的探索之旅吧�?

引用链接`[1]` **DragonflyDB: https://github.com/dragonflydb/dragonfly**

****

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•�? [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•�? [4�?16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接�?ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)