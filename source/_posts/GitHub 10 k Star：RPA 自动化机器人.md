---
title: GitHub 10 k Star：RPA 自动化机器人
date: 2024-10-18 21:34:03
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

*** 戳上方蓝字“牛皮糖不吹牛”关注我**

**大家好，我是牛皮糖！**今天要给大家带来一个超级实用的开源项目——**Robot Framework**。这个框架，简直就是自动化测试和开发的瑞士军刀！

Robot Framework ® 是一个通用的开源自动化框架，用于验收测试、验收测试驱动开发 (ATDD) 和机器人流程自动化 (RPA)。它具有简单的纯文本语法，并且可以使用通用和自定义库轻松扩展。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR7YWe17mwOwpfypwjnMWq1ObFbNrZKX6KG85KsbNRyDeHcuQdnZlfjkibqWTPhh38BHz0OdyibShYg/640?wx_fmt=png&from=appmsg)

**安装：** 

安装起来也简单。只要你的机器上装了Python和pip，直接在命令行里输入以下命令即可：

`pip install robotframework`记得哦，它需要Python 3.8或更新的版本。如果你还在用Python 2，或者是Jython、IronPython，那么你可能需要使用旧版本的Robot Framework。

**例子：** 举个栗子，下面是一个用Robot Framework写的测试用例，用来测试登录功能：

`*** Settings ***
Documentation     A test suite with a single test for valid login.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          login.resource

*** Test Cases ***
Valid Login
    Open Browser To Login Page
    Input Username    demo
    Input Password    mode
    Submit Credentials
    Welcome Page Should Be Open
    [Teardown]    Close Browser`![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR7YWe17mwOwpfypwjnMWq1NmvL963DPxl7dymItgaQvaoAkD5lIz8FVuic1uUR4k74cicuEtUAbtbA/640?wx_fmt=png&from=appmsg)

****

**用法：** 

`robot path/to/tests/`或者，如果你想要更高级的用法，比如设置变量或者指定输出目录：

`robot --variable BROWSER:Firefox --outputdir path/to/results/ path/to/tests/`![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR7YWe17mwOwpfypwjnMWq1mlEdf0J1UJTICytFzhxKb1rPC8qW9aBe8RHGXwj5Hsd4eLialESPyRA/640?wx_fmt=png&from=appmsg)

项目地址：

https://github.com/robotframework/robotframework

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•  [最受欢迎的5款开源RPA 框架](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247484954&idx=1&sn=dc1a6adebbf08369ff07c0ef558e38c2&chksm=c1d3a41cf6a42d0aa8e35916eec7302fe1b8751c545f3cc4683feb63869c162e9a4b0880a24e&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**