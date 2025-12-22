---
title: GitHub 11.9k Star 开源项目操作系统从0到1
date: 2024-08-11 21:57:20
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天介绍一个 GitHub 最近的飙升项目， 从0到1开始编写操作系统所需的基础知识。是一个旨在帮助读者深入理解操作系统原理和内部工作机制的项目。该项目提供了一个详细的指南和一系列的资源，帮助读者从零开始构建一个简单的操作系统。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSParBPVFtHQwYpdoWXGgQPmkcAkUniaWTUicGEHxJwF5vxLoenRpbJP0Sfb8IOvY0E5kEcHdIPSBKw/640?wx_fmt=png&from=appmsg)

****

读完本书后，你至少会学到：

- 如何通过阅读硬件数据表从头编写操作系统。在现实世界中，它就是这样运作的。您将无法通过 Google 来快速找到答案。

- 从硬件到软件，计算机各层之间如何相互关联的总体情况。

- 独立编写代码。复制粘贴代码毫无意义。真正的学习发生在您自己解决问题时。一些示例可以帮助您入门，但大多数问题都需要您自己解决。不过，您可以在尝试后在线查看解决方案。

- Linux 作为开发环境以及如何使用常用工具进行低级编程。

- 深入了解 x86 汇编。

- 程序如何构造以便操作系统可以运行。

- 如何使用 gdb 和 QEMU 调试直接在硬件上运行的程序。

- 使用纯 C 在裸机 x86_64 上链接和加载。无标准库。无运行时开销。

**预备知识**

**
**

了解一些电路概念：

- 电的基本概念：原子、电子、质子、中子、电流。

- 欧姆定律

如果您对电一无所知作者也提供了学习的方式，可以通过阅读第 1 章和第 2 章在这里快速学习：http://www.allaboutcircuits.com/textbook/。

C 编程：

- 变量和函数声明/定义

- While 和 for 循环

- 指针和函数指针

- C 语言中的基本算法和数据结构

Linux 基础知识：

- 知道如何使用命令行导航目录

- 知道如何使用选项调用命令

- 知道如何将输出通过管道传输到另一个程序

项目地址：

**https://github.com/tuhdo/os01**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)