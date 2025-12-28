---
title: "GitHub 33k Stars ：NPS 内网穿透一件搞定"
permalink: github-33k-stars-nps-内网穿透一件搞定
date: 2025-08-17 23:35:32
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近发现一款令人眼前一亮的开源工具——**NPS（内网穿透代理神器）**，简直是远程开发者和运维小伙伴的必备“快捷通道”！如果你想打通内网访问、调试本地接口、远程桌面或 SSH，这篇文章你可得认真看完啦。

## 什么是 NPS？
NPS 是一款由 ehang-io 开源的内部网络穿透代理服务器，颜值不高却功能炸裂。它轻量、高性能，而且支持几乎所有主流协议：包括 TCP、UDP、HTTP(S)、SOCKS5 等，还附带强大的 Web 管理界面，一切图形化操作，使用爽爆！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRa5XFDr1QMriaz6FM6Bb8tUiaxmYxJFia1yQQcqumbGw9v871fp5DoDcxOCgXS5SNIDsRDtic1Qzf6uw/640?wx_fmt=png&from=appmsg)

## 功能亮点一览
- • **全协议支持**：TCP、UDP、HTTP/HTTPS、SOCKS5、P2P 等应有尽有。(GitHub)

- • **跨平台兼容**：Linux、macOS、Windows，甚至 NAS（Synology）都能安装。还支持系统服务部署，配置一次，后台守护。

- • **图形界面管理**：不需命令行，浏览器打开管理后台即可完成客户端新增、穿透配置、证书管理等操作。

- • **NAT 穿透 + HTTPS 支持**：轻松解决内网穿透问题，还能做 HTTPS 证书加密处理。

- • **丰富扩展功能**：支持缓存、压缩、加密、限流、端口复用、带宽控制等。

- • **域名及访问控制**：支持自定义 Host、404 页面、URL 路由、站点保护等强大功能。

- • **多用户管理**：服务端可支持用户注册、多用户隔离管理。

## 快速上手指南
### 服务端部署（建议在公网 VPS 上安装）
- • 下载对应系统版本，解压并运行安装命令：

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRa5XFDr1QMriaz6FM6Bb8tUMLPhb0TZgyOWtteqJP0EmTrgxEDuVupD5JeZXYXYWxTGNOdY5Zwp9g/640?wx_fmt=png&from=appmsg)

`sudo ./nps install
sudo nps start`

- • 默认 Web 管理端口为 `8080`，默认账号 `admin` / `123`。（上线后记得改密码！）(GitHub, ehang-io.github.io)

### 客户端接入（比如你想远程访问内网服务）
- • 在 Web 后台添加客户端，会自动生成 `vkey`。

- • 本地机器运行客户端：```
`npc.exe --server SERVER_IP --vkey YOUR_VKEY`
```

- • 配置端口映射：例如远程调试接口、SSH、远程桌面等。(GitHub, docs.markhh.com)

再启动后，你就可以通过公网访问这些本地服务啦！

## 应用场景举例
场景
NPS 是如何助力的
开发远程接口调试
内网 API 可在任何地方被访问
运维远程管理
公司内网机器不再受 NAT 限制，SSH 和远程桌面畅通无阻
部署内网服务
LAN 本地服务器暴露到公网，方便监控和远程访问
自建 HTTPS 服务
支持证书加密，让服务外网访问更安全
## 总结：NPS 值得收藏的 3 大理由
- 1. **零门槛使用**：图形化管理 + 丰富模板让复杂穿透配置变得简单

- 2. **性能强劲**：轻量、高效，支持多协议，资源占用低

- 3. **功能全覆盖**：从普通 Web 服务到复杂多用户管理统统搞定

只要你还在用 ping、ngrok、frp 或 native port forwarding，那你真的该试试 NPS！ 赶紧去 GitHub 下载试试吧： **
**

**
**

**GitHub 地址**：github.com/ehang-io/nps 

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成长

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)