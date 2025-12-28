---
title: "别再rm -rf了！这个开源项目：老婆乱按键盘都能保数据"
permalink: 别再rm-rf了-这个开源项目-老婆乱按键盘都能保数据
date: 2025-02-27 21:09:13
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

  

大家好，我是牛皮糖！最近在用Linux 服务器搭建自己网站，但苦于复杂的命令行操作和繁琐的管理流程，就在GitHub 上找了一个开源项目——**1Panel**，绝对能解决你的烦恼。它不仅功能强大，安装过程也异常简单，堪称服务器运维管理的神器！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTwgbfmgibrzGW55wWsWBv2bWPWm73Lv6bCKVNNwM2tciajWxlCj1L5JtBsvqzCOLVvbbeqvY5SjMcA/640?wx_fmt=png&from=appmsg)

1Panel 是一款现代化、开源的 Linux 服务器运维管理面板，通过 Web 图形界面让用户能够轻松管理服务器。它支持主流的 Linux 发行版，包括基于 Debian 和 RedHat 的系统，以及国产操作系统。无论是新手还是资深运维人员，都能通过它快速上手。

### **功能特点**
- • **高效管理**：1Panel 提供主机监控、文件管理、数据库管理、容器管理等功能，让你通过图形界面轻松完成复杂的操作。

- • **快速建站**：深度集成 WordPress 和 Halo 等开源建站软件，域名绑定、SSL 证书配置一键搞定。

- • **应用商店**：精选高质量开源工具和应用软件，安装升级轻松完成。

- • **安全可靠**：基于容器管理应用，最小化漏洞暴露面，同时提供防火墙和日志审计功能。

- • **一键备份**：支持一键备份和恢复，数据安全有保障。

### **在线安装教程**
**1Panel** 的安装过程非常简单，以下是详细的安装步骤：

**环境要求**- • 操作系统：支持主流 Linux 发行版（基于 Debian / RedHat，包括国产操作系统）。

- • 服务器架构：x86_64、aarch64、armv7l、ppc64le、s390x。

- • 内存要求：建议可用内存在 1GB 以上。

- • 浏览器要求：请使用 Chrome、FireFox、IE10+、Edge 等现代浏览器。

- • **可访问互联网**。

**安装部署**- • **RedHat / CentOS**`curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh`

- • **Ubuntu**```
`curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh`
```

- • **Debian**```
`curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh`
```

- • **openEuler / 其他**第一步：安装 Docker```
`bash <(curl -sSL https://linuxmirrors.cn/docker.sh)`
```
第二步：安装 1Panel```
`curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh`
```

安装成功后，控制台会打印面板访问信息，你可以通过浏览器访问 1Panel：

**注意**：如果使用云服务器，请在安全组中开放目标端口。SSH 登录 1Panel 服务器后，执行 `1pctl user-info` 命令可获取安全入口。

### **![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTwgbfmgibrzGW55wWsWBv2bI46ArTvKgau1FrFldXI34UGhOtjRUdUTtVrK0Pxib9xB6jDkWVstc7Q/640?wx_fmt=png&from=appmsg)
**
### **总结**
**1Panel** 是一款功能强大且易于安装的开源服务器运维管理面板。它不仅简化了 Linux 服务器的管理流程，还提供了丰富的功能和安全保障。无论是新手还是资深运维人员，都能通过它轻松管理服务器。如果你也想尝试这款神器，可以通过 1Panel GitHub 地址 获取更多信息。

项目地址：

**https://github.com/1Panel-dev/1Panel**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)[Github 33k Stars 开源建站软件](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486277&idx=1&sn=b8a53e47948b644c040d43c8feb390de&scene=21#wechat_redirect)