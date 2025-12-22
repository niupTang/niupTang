---
title: Github 开源Java自动投递工具
date: 2024-11-25 19:04:13
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！因为我自己是Java 开发 在找工作，去GitHub 上找了一款自动投递工具，发现这款还是不错的。只需要简单配置直接就可以运行。BOSS 直聘每天投递100份轻轻松松。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQVbQmVnnUNTOYiaGx1icslxg0iaa7z3Xvelia9gONkf0stj8eHlTpxoQNNNdIhF8JvVCYuN5nUE0SpuA/640?wx_fmt=png&from=appmsg)

****

## 🌟 特色功能
## 💥 AI 智能匹配：AI检测岗位匹配度，并根据JD自动撰写个性化的打招呼语（仅限 Boss 直聘）。
- ⏰ 定时投递：一键投递所有平台，可设置定时投递，第二天自动重新投递，省时省力。

- 🔎 智能过滤：自动过滤 不活跃 HR、猎头岗位、目标薪资，让你的简历投递更精准。

- 📢 实时通知：通过企业微信消息推送，实时掌握简历投递情况，不错过任何机会。

- 🚫 黑名单功能：自动更新黑名单企业，避免重复投递不合适的公司，提高投递效率。

- 🛠️ 易于配置：集中化配置，只需修改配置文件即可自定义筛选条件，轻松上手。

- 🔄 持久登录：支持超长 Cookie 登录，大部分平台每周仅需扫码一次，减少重复操作。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQVbQmVnnUNTOYiaGx1icslxgNc9zE7Ka1Vt3IzqQXUwuia1LsSrF3LiaKzTbYibPcMDicePEmCMhgHEgRA/640?wx_fmt=png&from=appmsg)

### **定时投递**
### 

### 目前默认Boss会定时投递两次，可以修改相关代码修改时间
- 每个包下的Scheduled文件，即使单独针对平台的定时投递，例：BossScheduled.java ，就是boss平台每天定时投递

- 定时投递第一次运行时会立即投递一次，到了第二天设定的时间，会再次投递，时间可以自行在代码中修改

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQVbQmVnnUNTOYiaGx1icslxgjjQ2uaZwMbMZeQW2ic11xK2qparmDQLNZS2LLV0SDmibRaNKRqgWtV6g/640?wx_fmt=png&from=appmsg)

****

项目地址：

**https://github.com/loks666/get_jobs**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)