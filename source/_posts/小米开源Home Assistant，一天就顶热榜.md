---
title: 小米开源Home Assistant，一天就顶热榜
date: 2024-12-21 22:54:33
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！小米在前面两天开源了一个智能家居管理平台，每天都能登顶热榜，在这个项目中，**小米官方**向我们展示了他们对智能家居生态的深度支持，通过这个集成组件，我们可以轻松地将小米的IoT智能设备整合到Home Assistant中，实现一站式的管理和控制。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSlLibu8iaVfibYCJgD5hp1tr3qHQrhZcHYkobLAPUsY5M3vy7eG0bK5vYfUfGPg3FsFw81Cib8dzA1aA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSlLibu8iaVfibYCJgD5hp1tr3ZyPNTJwmHM04tmBc1TYsNzNVOkb3j1ysn9iacw2Cn9T6XicJTMjJJOAQ/640?wx_fmt=png&from=appmsg)

- **安全性**小米Home Integration采用OAuth 2.0登录流程，保护你的账号安全。

- **多账号支持**你可以添加多个小米账号，管理不同区域的智能设备。

- **本地控制**通过小米中枢网关，实现设备的本地控制，减少对云端的依赖。

云端控制
米家集成向小米云 MQTT Broker 订阅关注的设备消息。当设备属性发生改变或产生设备事件时，设备向小米云发送上行消息， MQTT Broker 向米家集成推送订阅的设备消息。
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSlLibu8iaVfibYCJgD5hp1tr3RsfJ4O7DqsTJvvRrzZXGBFkVosC3eE4VCZxdCgVqVOVxxiaO0kT7XDA/640?wx_fmt=png&from=appmsg)

本地控制
小米中枢网关内包含一个标准的 MQTT Broker ，实现了完整的订阅发布机制。米家集成向小米中枢网关订阅关注的设备消息。当设备属性发生改变或产生设备事件时，设备向小米中枢网关发送上行消息， MQTT Broker 向米家集成推送订阅的设备消息。
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSlLibu8iaVfibYCJgD5hp1tr3M2SYbGSDtgPQ6AZHmCgExjrLklMwapM0IrSeSFdErplYCspIiasLr5w/640?wx_fmt=png&from=appmsg)

**
**

    现在有想法的可以自己打造个人家庭的Agent ,看起来就很不错

项目地址：

**https://github.com/XiaoMi/ha_xiaomi_home**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)[GitHub DIY 开源项目 私人定制智能家居控制 Home Assistant](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485073&idx=1&sn=6c180746b7375a51b4987bfc9736b041&scene=21#wechat_redirect)