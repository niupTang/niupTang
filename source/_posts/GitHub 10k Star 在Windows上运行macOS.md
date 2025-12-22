---
title: GitHub 10k Star 在Windows上运行macOS
date: 2024-11-15 17:48:42
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天，我要给大家介绍一个非常酷炫的开源项目——在Docker容器内运行macOS。这个项目不仅能让你在非苹果硬件上体验到macOS的魅力，还能通过KVM技术提供加速的虚拟化体验，让你的体验更加流畅。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSrBSdL3c39aEVZKR33uUud05rTic7HbLypH7YW5yzGrk6UFN5t6qSBaCvJLSvES9nxExVhJ7Xo2rA/640?wx_fmt=png&from=appmsg)

**主要功能介绍**：

这个项目的主要功能是在Docker容器中运行macOS系统。对于普通用户来说，这意味着你可以在自己的Linux机器上，不需需购买昂贵的苹果硬件，就能体验到macOS系统。对于开发者来说，这提供了一个方便的环境来测试和开发macOS应用。

**如何使用**：

使用这个项目非常简单。首先，你需要确保你的Linux系统支持KVM。

- 
`sudo apt -y install bridge-utils cpu-checker libvirt-clients libvirt-daemon qemu-kvm`

然后，你可以选择通过Docker Compose、Docker CLI或Kubernetes来部署macOS容器。例如，通过Docker CLI，你只需要一行命令就可以启动macOS容器：

`docker run -it --rm -p 8006:8006 --device=/dev/kvm --cap-add NET_ADMIN --stop-timeout 120 dockurr/macos`这行命令会启动一个macOS容器，并将8006端口映射到宿主机，让你可以通过Web浏览器访问macOS环境。此外，你还可以通过设置环境变量来选择不同的macOS版本，比如：

`environment:
  VERSION: "13"`这将安装macOS 13（Ventura），你也可以选择其他版本，如macOS 14（索诺玛）或macOS 12（蒙特雷）。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSrBSdL3c39aEVZKR33uUudHh4gbW9MGjvMQe5A4Nsbia7ibhFWVRJD5ZRbFPQUXplhD3yvSADwfxIQ/640?wx_fmt=png&from=appmsg)

如何使用这个项目，包括如何更改存储位置、磁盘大小、CPU和RAM的数量，以及如何直通USB设备。这些内容都是为了帮助用户更好地理解和使用这个项目。

**注意事项**：

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSrBSdL3c39aEVZKR33uUudDYsmnouY6IjBlbcthJRQvBgtg2WVGJlVI0T8Kh0nTbgTytalc6UrbA/640?wx_fmt=png&from=appmsg)

虽然这个项目提供了在非苹果硬件上运行macOS的可能性，但用户在安装macOS时必须接受其最终用户许可协议。根据苹果的条款和条件，macOS只能在苹果销售的硬件上运行。

**结尾**：

如果你对在Docker容器内运行macOS感兴趣，不妨尝试一下这个项目。

项目地址：

**https://github.com/dockur/macos**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [Github 新秀开源高效的文档解析可视化工具](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487820&idx=1&sn=fa628c6b77cc7c6a9b78c68189db9c21&chksm=c1d3b34af6a43a5c809b0a6e2db6a029ce22fb7d4c35e45cda00c377ff21f9a284a41b5ca2fd&scene=21#wechat_redirect)

**
**