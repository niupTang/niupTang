---
title: Github 开源 36.3k PDF编辑、处理神器
date: '2026-01-04T16:26:13.342510'
updated: '2026-01-05T23:18:09.857639'
tags: []
categories: []
cover: null
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

   

    大家好，我是程序员牛皮糖。今天介绍一个 PDF 处理工具 Java 开源项目 Stirling-Toolsx    是一个简易用的web界面来执行各种PDF 操作。
用户可以通过浏览器访问并使用它来执行各种 PDF 操作，如合并、拆分、旋转、压缩、加密、解密、添加水印等。该项目使用现代的前端和后端技术栈，提供了一个用户友好的界面，使得即使是没有技术背景的用户也能轻松地处理 PDF 文件。
   

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTJPbsI0icNkqEyN6BtwTVbN5MFCIlWdhpP6at4A4TzGybpSydtd0EyyDLLfFUfRpBPkELxcxCeauQ/640?wx_fmt=png)
    

**1****、主要功能**

-  合并：

-   将多个 PDF 文件合并成一个单一的 PDF 文件。

- 拆分：

-   将一个大的 PDF 文件拆分成多个小的 PDF 文件。

旋转：

-   旋转 PDF 页面或整个 PDF 文件。

压缩：

-   减小 PDF 文件的大小，以便于存储和传输。

加密：

-   为 PDF 文件添加密码保护。

解密：

-   移除 PDF 文件的密码保护。

水印：

-   为 PDF 文件添加文本或图像水印。

提取：

-   从 PDF 文件中提取特定的页面或内容。

- 转换：

-   将 PDF 文件转换为其他格式，如图片或文本。

- 

**Docker 安装**

 拉取docker镜像,

- 
`docker pull   frooodle/s-pdf:latest`
docker 命令启动并挂载对路径

- 
- 
- 
- 
- 
- 
- 
- 
`docker run -d   -p 8080:8080  \`` -v D:\docker\trainingData:/usr/share/tessdata  \ `` -v D:\docker\extraConfigs:/configs  \`` -v D:\docker\logs:/logs  \`` -e DOCKER_ENABLE_SECURITY=false \`` -e INSTALL_BOOK_AND_ADVANCED_HTML_OPS=false   \`` -e LANGS=en_GB   \`` --name stirling-pdf   frooodle/s-pdf:latest`
项目地址：

**https://github.com/Stirling-Tools/Stirling-PDF**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)