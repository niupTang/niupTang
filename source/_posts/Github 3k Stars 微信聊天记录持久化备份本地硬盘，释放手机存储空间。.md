---
title: "Github 3k Stars 微信聊天记录持久化备份本地硬盘，释放手机存储空间�?
permalink: github-3k-stars-微信聊天记录持久化备份本地硬�?释放手机存储空间
date: 2024-09-11 22:29:22
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天�?GitHub 上看到一共工具，将手机的微信数据上传到电脑上进行备份，就可以将手机数据清空。项目是�?go 语言开发的项目�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTF6CR1e3IE8FLjWqPNux1kocwD1QOf7U3icx5KZP91HtaCBsqqmmk9icHVpgDC0JXaVr6lwjiaYrBibA/640?wx_fmt=png&from=appmsg)

**使用流程**

- 手机聊天记录备份到电脑，在有 ROOT 权限的手机上登陆微信，电脑点击备份恢复，把聊天记录恢复到�?ROOT 的手机上�?

- 收集下面这些数据，然后放在同一个文件夹�?

- image2 文件夹：里面存放着所有的微信聊天图片，位置在�?data/data/com.tencent.mm/MicroMsg/[32位字母]/image2

- voice2 文件夹：里面存放着所有的微信语音，位置在�?sdcard/Android/data/com.tencent.mm/MicroMsg/[32位字母]/voice2

- video 文件夹：里面存放着所有的微信视频，位置在�?sdcard/Android/data/com.tencent.mm/MicroMsg/[32位字母]/video

- avatar 文件夹：里面存放着所有的微信头像，位置在�?data/data/com.tencent.mm/MicroMsg/[32位字母]/avatar

- Download 文件�? 微信的聊天发送的文件存放在这里，位置在：/sdcard/Android/data/com.tencent.mm/MicroMsg/Download

- EnMicroMsg.db: 微信的数据库文件，位置在�?data/data/com.tencent.mm/MicroMsg/[32位字母]/EnMicroMsg.db

- WxFileIndex.db: 微信的文件索引数据库文件，位置在�?data/data/com.tencent.mm/MicroMsg/[32位字母]/WxFileIndex.db

- 获取解密 DB 的密钥�?

- 进行微信聊天数据 DB 的解�?

- 转换微信语音

- 运行本程序，打开控制台输出的网址，就可以查看你的聊天记录了�?

项目地址�?

**https://github.com/greycodee/wechat-backup**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•�? [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•�? [Github 4.5k Star 的微信缓存清理工具](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485550&idx=1&sn=34e123d0ccf607dbbdd5267877098390&chksm=c1d3aa68f6a4237e5d328df4834bed2dadd1f259a1976c5a0302b641c384ad42def6a29ba84b&scene=21#wechat_redirect)•   [C盘又爆了，我找了款清盘工具](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247484812&idx=1&sn=1e22364f277c9c2f1b04fa36d018df42&chksm=c1d3a78af6a42e9c822d8866a8b24e205d5dd66db33311d76a453c2f267b28eec4c3cd76fe95&scene=21#wechat_redirect)

**
**