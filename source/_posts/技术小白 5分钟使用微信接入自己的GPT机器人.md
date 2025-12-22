---
title: 技术小白 5分钟使用微信接入自己的GPT机器人
date: 2024-01-09 21:36:27
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

所需要的环境

    因为是接入的阿里云的的大模型。因为阿里云有很多免费的大模型。

所以直接通过阿里云的密钥和key 和应用id + agentKey 接入就行了。

1、 安装Python 3.7 +

https://www.runoob.com/python3/python3-install.html

2、 阿里云的密钥和key

阿里云登录页 (aliyun.com)

3、 微信机器人 微信机器人是开源项目来着，只需要所以下摆都能够直接接入。

https://github.com/zhayujie/chatgpt-on-wechat

通过链接进去直接下载

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGjFDYkZkqxF2VlgIhNGNEBfX1bpjUt5EWvrQEcCsvEUElyU3jkicG4eQ/640?wx_fmt=png&from=appmsg)

通过PyCharm 直接打开，后面只需配python 环境和修改对应的config.js就可以了。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGz5Vy9VvwYLECLiaicgDAWjF41VSjBlBTE51kQMSUxKkE8gVzFK8OWaqQ/640?wx_fmt=png&from=appmsg)

解压项目通过pycharm Edu 2021.3.3 打开 如果没有这个软件需要安装

1、打开解压文件所以在的项目

## 通过命令面板执行命令
pip3 install -r requirements-optional.txt

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZG6E7iaKdRsFKXc3mWde9NMWAqLTSIQyyKJjuRES5NHx3qcGt5HM9uG3g/640?wx_fmt=png&from=appmsg)

## 配置对应的参数
     python 需要3.7版本以上，如果python 版本不对容易出现安装依赖出错的问题。

   1、项目配置python

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGZoNN2maWafhKQhNTFwevSKxLXtSdTMgO227ETiaX8ZbpPf9nhO9OB8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGcgowTPI8Zlhqia3D3fB1Ug7h73vW9gcP3R9zQ3RejZSoKb5jR22FFgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGMNRqqdO6O0ynz6l6S2kUOnyJm17nLONoaic5rGnOk9kQR0JvuDZI22g/640?wx_fmt=png&from=appmsg)

通过app.py启动服务：

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGQ6DTibw5xoxdPRxDrUibNVHY2XuWeCa0m8ZU4DQv35m6LDOvHzPXP7sg/640?wx_fmt=png&from=appmsg)

    启动项目过后通过会有一个登录二维码需要扫码。如果电脑登陆微信会把电脑微信挤下去。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGkMz79hrib6XvVlGDHW2r8OGepBl4TspNh5NDq3aezFqlDHKgwIMYgbg/640?wx_fmt=png&from=appmsg)

效果图

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRTHjGygM2VJVV1rVlnliaZGTHFqbgibcUJE6swxhpyJkA6hXaM96UHWct7NRFh8aibgPCu7whBlyQfQ/640?wx_fmt=jpeg&from=appmsg)