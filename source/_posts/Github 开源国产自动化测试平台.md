---
title: Github 开源国产自动化测试平台
date: 2024-09-11 22:29:22
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！测试对于开发来说也是非常重要的一环，开发的自测、到测试的功能测试、性能测试，这是提供软件可用性尤为重要。

    MeterSphere 一站式开源持续测试平，在GitHub 上面获取 11.4k Star。累计安装部署 757958 次。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTF6CR1e3IE8FLjWqPNux1kezzX2rPsJsibsK6yeyp5w1MHc36IticWbUsPaZBO41MsKkBDCVfWcBMg/640?wx_fmt=png&from=appmsg)

MeterSphere 是新一代的开源持续测试工具，让软件测试工作更简单、更高效，不再成为持续交付的瓶颈。

- 测试管理：从测试用例管理，到测试计划执行、缺陷管理、测试报告生成，具有远超 TestLink 等传统测试管理工具的使用体验；

- 接口测试：集 Postman 的易用与 JMeter 的灵活于一体，接口调试、接口定义、接口 Mock、场景自动化、接口报告，你想要的都有；

- 团队协作：采用“系统-组织-项目”分层设计理念，帮助用户摆脱单机测试工具的束缚，方便快捷地开展团队协作；

- 插件体系：提供各种类别的插件，用户可以按需取用，快速实现 MeterSphere 测试能力的扩展以及与 DevOps 流水线的集成。

**
**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTF6CR1e3IE8FLjWqPNux1kcuwVUwq1icJ0Jfvu14KS2Hia16tQGgQuDgkVRMHFyqjg9Mg5ibwIhEYrQ/640?wx_fmt=png&from=appmsg)

**安装部署**

    不仅提供了线上安装环境、可以通过运维面板1Panel 应用商店 快速部署 MeterSphere。

     还可以通过docker 脚本直接安装。

- 
- 
- 
- 
`docker run -d -p 8081:8081 --name=metersphere -v ~/.metersphere/data:/opt/metersphere/data cr2.fit2cloud.com/metersphere/metersphere-ce-allinone``
``# 用户名: admin``# 密码: metersphere`
也可以通过其他离线安装，安装需要

组件默认端口说明MeterSphere8081MeterSphere 主服务项目，浏览器访问端口Task-Runner8000为接口测试提供独立节点类型的测试资源池MySQL3306默认安装的数据库对外提供的端口Redis6379默认安装的 Redis 对外提供的端口Minio9000、9001默认安装的分布式对象存储对外提供的端口、分布式对象存储控制台端口Kafka9092默认安装的消息中间件对外提供的端口 

  相比起其他的测页面，MeterSphere 的页面相对来说美轮美奂，菜单设计清晰明了。

****

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTF6CR1e3IE8FLjWqPNux1kBYl2micNXnWz6ibK09UGVCKyibvia6D3CGXay0yiaRytibph6UGnArDaCiamw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTF6CR1e3IE8FLjWqPNux1kLQr1Iq8nqTFJZWhianZ0VjpaPukyb6NpXKytt9WCOnOnxEW9S1iaPmJw/640?wx_fmt=png)

项目地址：

**https://github.com/metersphere/metersphere**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•  [ Github 24.3k 金融量化交易开源项目](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486469&idx=1&sn=a4ab45e21d571fa22af01007ac0da73e&chksm=c1d3ae03f6a4271538088a67a5e4275526108a116faf90b6cf99f68d662bd202fd06683e03f1&scene=21#wechat_redirect)

**
**