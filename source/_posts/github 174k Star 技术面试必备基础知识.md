---
title: github 174k Star 技术面试必备基础知识
date: '2026-01-04T16:26:13.552455'
updated: '2026-01-05T23:18:09.542206'
tags: []
categories: []
cover: null
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

   

     大家好，我是牛皮糖！最近准备面试情况，在GitHub上面找了一个面向对象的复习资料，包括算法、操作系统、Java 、数据库等资料。

     这是一个技术面试必备的知识库，涵盖了计算机操作系统、计算机网络、设计模式、系统设计等多个领域的基础知识，以及LeetCode算法题的解题思路和代码实现。

    

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRvdr0hqg59BBDd1uQcXTRJov1V5chGNNP6DYkPgZCoib5Tu3Zk4TD59icjW4zhuz6lcwXKBwQPhxzQ/640?wx_fmt=png&from=appmsg)

特色亮点：

- 全面性：项目内容全面，覆盖了面试中可能遇到的大部分知识点。

- 实用性：提供了大量的LeetCode题目的分析和解答，帮助面试者更好地准备技术面试。

- 易读性：文档结构清晰，语言简洁明了，易于理解和学习。

项目地址：

**https://github.com/CyC2018/CS-Notes**

**
**

**第二个项目是以代码业务性出发解决实际问题:**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRvdr0hqg59BBDd1uQcXTRJkAnz12BWzcN0kHTrMvRL132Y3jRRV9CP9CvwqqPFwGTbgreU3LtSCw/640?wx_fmt=png&from=appmsg)

****

    文档内容都是中文文档，可以很好的理解和解读。

    比如简单的描述如何解决缓存一致性问题：很多都是从业务具体代码出发，减少配合八股文解决面试问题。

解决思路 1：先删除缓存，再更新数据库。如果数据库更新失败了，那么数据库中是旧数据，缓存中是空的，那么数据不会不一致。因为读的时候缓存没有，所以去读了数据库中的旧数据，然后更新到缓存中。

解决思路 2：延时双删。依旧是先更新数据库，再删除缓存，唯一不同的是，我们把这个删除的动作，在不久之后再执行一次，比如 5s 之后

    通过这两个项目可以整合起来复习 ，那么相对更加理解Java 。

项目地址：

**https://github.com/doocs/advanced-java**

   

****

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•  [ GitHub 284k Star 的宝藏学习路线图，适合所有人。](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485387&idx=1&sn=474491685934ae33e7ad835f8c3da11d&chksm=c1d3a5cdf6a42cdb5464160322e016beb02b9f16e9952b9d8c27b1f615a75eabac104e9e0934&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**