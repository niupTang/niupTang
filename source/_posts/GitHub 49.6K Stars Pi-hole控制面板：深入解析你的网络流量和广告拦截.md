---
title: "GitHub 49.6K Stars Pi-hole控制面板：深入解析你的网络流量和广告拦截"
permalink: github-49-6k-stars-pi-hole控制面板-深入解析你的网络流量和广告拦�?
date: 2024-12-23 18:46:05
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

  

   大家好，我是牛皮糖！今天要给大家介绍一个非常实用的开源项目—�?*Pi-hole**。这是一款基于树莓派的全能广告屏蔽助手，能够在不安装任何客户端软件的前提下为设备提供网络内容屏蔽服务，非常轻量易用�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvUqP6iatg5HCIw7R7hHzRCs6Cx6dibDC9HUOagMg2hibl49zoDmJljJQ1k8eHdnqU9tnF79oLg08TA/640?wx_fmt=png&from=appmsg)
  

### **Pi-hole的主要功能：**
- 1. **全网广告拦截**�?Pi-hole 充当 DNS 污水坑，阻止网络上所有设备上不需要的内容。这意味着广告、跟踪器和其他不需要的请求在到达设备之前就会被拦截，从而确保更干净的浏览体验�?

- 2. **提高网络性能**�?广告，尤其是多媒体广告，会消耗带宽。通过在下载之前拦截这些广告，Pi-hole 减少了需要通过网络传输的数据量。这会带来更快的页面加载时间和更灵敏的浏览体验�?

- 3. **管理白名单和黑名�?*�?Pi-hole 提供了决定阻止或允许哪些域的灵活性。用户可以手动在黑名单或白名单中添加或删除域名，确保特定网站或服务始终可访问或始终被阻止�?

- 4. **查询日志和审核日�?*�?Pi-hole 提供了查询日志，显示网络上设备发出的所有域请求的按时间顺序排列的列表。审核日志则重点关注最常查询的域，从而更轻松地发现和管理经常访问的域�?

- 5. **阻止应用内广�?*�?许多移动应用程序和智能电视都会显示无法通过传统的基于浏览器的广告拦截器访问的广告。Pi-hole 的网络级操作使其能够阻止这些应用内广告，从而确保在更广泛的设备和应用程序中提供更清晰的用户体验�?

- 6. **用作 DNS 服务�?*�?Pi-hole 充当您网络的自定�?DNS 服务器。当网络上的设备请求访问网站时，Pi-hole 会介入检查请求的域是否在其阻止的域列表中。如果是，Pi-hole 将阻止该请求，从而阻止广告或跟踪器加载。如果没有，它将允许请求继续，让网站照常加载�?

### **如何使用 Pi-hole�?*
- 1. **安装**�?Pi-hole 提供了一键安装脚本，可以通过以下命令快速启动安装：`curl -sSL https://install.pi-hole.net | bash`安装过程中会有友好的安装引导，帮助用户完成网络配置、DNS提供商选择、规则列表选择等步骤�?

- 

- 通过IP地址访问�?

- �?直接在浏览器中输入：`http://<IP_ADDRESS_OF_YOUR_PI_HOLE>/admin/`，将 `<IP_ADDRESS_OF_YOUR_PI_HOLE>` 替换为你的Pi-hole设备的IP地址�?

- 

- 2. **配置**�?安装完成后，用户可以通过 Web 控制台配置网络接口、DNS 提供商、规则列表等，以及管理设置、更新阻止列表和查看详细统计信息�?

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvUqP6iatg5HCIw7R7hHzRCNDyIyhw7KJCib9oUlb5Tuiasj6k8M5bz5t1eOpu3GcuBRiaG2HUOybX1Q/640?wx_fmt=png&from=appmsg)

### **项目地址�?*
**https://github.com/pi-hole/pi-hole**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)�?  [4�?16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)�?  [](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)[github 7.8k star 将小爱音箱接�?ChatGPT 和豆包，改造成你的专属语音助手。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)