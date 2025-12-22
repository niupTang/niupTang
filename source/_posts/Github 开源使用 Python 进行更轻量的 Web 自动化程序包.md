---
title: Github 开源使用 Python 进行更轻量的 Web 自动化程序包
date: 2024-09-06 18:50:00
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天介绍一款简化浏览器自动化的 Python 库。该项目是基于 Selenium 的轻量级 Python 库，它通过提供更高级和易用的 API，让用 Python 编写浏览器自动化脚本变得更加简单和方便，支持 Chrome 和 Firefox 浏览器。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTKxnDvTX8G5LU9y0ZdWkQ6pzOVIVvu4xBAXxeUaw7QarSaqn12tIkfOAlLBnWfCWZwLZw4aclGUg/640?wx_fmt=png&from=appmsg)

**安装**

    要开始使用 Helium，您需要 Python 3 和 Chrome 或 Firefox。

- 
`python -m pip install helium`

    在底层，Helium 将每个调用转发给 Selenium。不同之处在于 Helium 的 API 更高级。在 Selenium 中，您需要使用 HTML ID、XPath 和 CSS 选择器来识别网页元素。

    另一方面，Helium 允许您通过用户可见的标签引用元素。因此，Helium 脚本通常比类似的 Selenium 脚本短 30-50%。更重要的是，它们更易于阅读，并且相对于底层网页的变化更稳定。

由于 Helium 只是 Selenium 的包装器，是可以自由混合这两个库。例如：

- 
- 
- 
- 
`# A Helium function:``driver = start_chrome()``# A Selenium API:``driver.execute_script("alert('Hi!');")`

**主要优化功能：**

- iFrames：与 Selenium 不同，Helium 允许您与嵌套 iFrames 内的元素进行交互，而无需先“切换到”iFrame。

- 窗口管理。Helium会注意到弹出窗口何时打开或关闭，并像用户一样聚焦/散焦它们。您还可以通过标题（部分）轻松切换到窗口。无需再迭代 Selenium 窗口句柄。

- 隐式等待。默认情况下，如果您尝试使用 Selenium 单击某个元素，而该元素尚未出现在页面上，则您的脚本将失败。默认情况下，Helium 最多会等待 10 秒钟才能显示该元素。

- 显式等待。Helium为您提供了一个更好的 API，用于等待网页上的条件变为真。

Helium 相对于Selenium 来说，是一款更加轻巧的爬虫框架，之前不仅支持Python 还支持 Java ，可惜在后面的更新迭代种，因为他们公司原因导致 Java 的那部分流产了

项目地址：

**https://github.com/mherrmann/helium**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)