---
title: "爆！！Github 一天涨1200 Stars 的股票系统"
permalink: 爆-github-一天涨1200-stars-的股票系统
date: 2024-12-02 22:09:44
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

      大家好我是牛皮糖，今天在GitHub 上看到一款股票系统，看到最近股市如此妖股，InStock股票系统是一个功能强大的量化投资工具，它能够帮助用户抓取每日股票和ETF的关键数据，计算各种股票指标，识别K线形态，进行综合选股，并内置多种选股策略。此外，它还支持选股验证回测和自动交易功能，能够高效运行，并且可以在PC、平板和移动设备上显示。为了便于安装，该系统还提供了Docker镜像，其优化构建仅170M。

**功能介绍：**

- 1. **综合选股**：InStock股票系统提供200多个信息栏目，覆盖股票范围、基本面、技术面、消息面、人气指标和行情数据等方面，用户可以自由组合这些条件进行选股。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQWhJgAU3EdNLLBVPoF5iaZOZObdiayibyVVa47s4ZunBpoEM16B2xnqx9szzQPVc0bG5ib9hoLBqCCYQ/640?wx_fmt=png&from=appmsg)

- 2. **股票每日数据**：系统包括每日股票数据、资金流向、分红配送、龙虎榜、大宗交易、基本面数据、行业和概念资金流向以及每日ETF数据。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQWhJgAU3EdNLLBVPoF5iaZOamIVKYp7CvUtptM3efmdEWRobnAECpCly30hbhibaG1NoHlrLs4rsgg/640?wx_fmt=png&from=appmsg)

- 3. **股票指标计算**：基于talib和pandas计算指标，确保计算结果高效准确，并与同花顺、通信达的结果一致。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQWhJgAU3EdNLLBVPoF5iaZOpmRxSqicFyvwqiaBUlibs2SuWrPIBCRUsS5PJxkrzezpfhRrCricoRgdicQ/640?wx_fmt=png&from=appmsg)

- 4. **判断买入卖出的股票**：根据KDJ、RSI、CCI、CR、WR和VR等指标判断可能的买入卖出点。

- 5. **K线形态识别**：精准识别61种K线形态，并支持用户自选形态识别。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQWhJgAU3EdNLLBVPoF5iaZOIHbnrK4VYcygdaKFHeyyDS48ib07yfk5AUFBPJQbGO3hNbAL0K9tEPg/640?wx_fmt=png&from=appmsg)

- 6. **策略选股**：内置多种选股策略，如放量上涨、回踩年线、突破平台等，并提供策略模板以方便用户扩展实现自己的策略。

- 7. **选股验证**：对指标、策略选出的股票进行回测，验证策略的成功率。

- 8. **自动交易**：支持自动交易，包括自动打新股策略，但为规避风险，不提供其他交易策略。

- 9. **关注功能**：允许用户关注特定股票，并在各个模块中置顶、标红显示。

- 10. **支持批量**：用户可以按时间段、枚举时间或当前时间进行指标计算、策略选股及回测。

- 11. **存储采用数据库设计**：数据存储采用数据库设计，保存历史数据，并支持数据的扩展分析、统计和挖掘。

- 12. **展示采用web设计**：采用web设计展示结果，方便业务功能扩展。

- 13. **运行高效**：采用多线程、单例共享资源提高运算效率。

- 14. **方便调试**：系统运行的重要日志记录在不同日志文件中，方便调试发现问题。

**安装说明：**

InStock股票系统支持Windows、Linux和MacOS，并提供了Docker镜像安装方式。常规安装方式包括安装Python、MySQL、依赖库、talib等，配置数据库，并可选安装Navicat和自动交易软件。Docker镜像安装方式则涉及安装数据库镜像和本系统镜像，并进行相应的配置。

InStock股票系统是一个全面的量化投资平台，适合需要进行股票数据分析和自动交易的用户。通过其丰富的功能和灵活的配置，用户可以有效地进行股票研究和交易。

`docker run -d --name InStockDbService \
    -v /data/mariadb/data:/var/lib/instockdb \
    -e MYSQL_ROOT_PASSWORD=root \
    library/mariadb:latest
    `项目地址：

**https://github.com/myhhub/stock**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)