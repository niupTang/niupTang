---
title: "GitHub 59.0k Star：一款比Nginx 好用的代理服务器"
permalink: github-59-0k-star-一款比nginx-好用的代理服务器
date: 2025-01-02 21:14:57
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！在当今这个数据安全至关重要的时代，一个能够自动实现HTTPS的Web服务器对于保护用户数据和提升网站信任度至关重要。今天，我要向大家介绍一个名�?*Caddy**的开源项目，它是一个快速、可扩展的多平台HTTP/1-2-3 Web服务器，以其**默认使用TLS**（自动HTTPS）而闻名�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSKOdULL68JicAF9An9U7oPbPrLRibZSbKTntEKyxT2zava46cNr5Bmt5BH99ceJKgRjlv1VmxGWvZg/640?wx_fmt=png&from=appmsg)

### 安装�?
最简单的跨平台安装方式是从GitHub Releases下载Caddy，并将可执行文件放置在PATH中�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSKOdULL68JicAF9An9U7oPbfDdwwzYkibF1j7vsTqv6BvAtCrqBQ816ozlB0ckvpc58dAHnm8mgRzw/640?wx_fmt=png&from=appmsg)

### 从源代码构建�?
需要Go 1.22.3或更新版本�?

开发构建：`$ git clone "https://github.com/caddyserver/caddy.git"
$ cd caddy/cmd/caddy/
$ go build`包含版本信息�?或插件的构建：使用Caddy的构建工具`xcaddy`，可以自动化以下步骤�?

- 1. 创建一个新文件夹：`mkdir caddy`

- 2. 进入该文件夹：`cd caddy`

- 3. 将Caddy的main.go复制到空文件夹中。添加任何自定义插件的导入�?

- 4. 初始化Go模块：`go mod init caddy`

- 5. （可选）固定Caddy版本：`go get github.com/caddyserver/caddy/v2@version` 替换`version`为git标签、提交或分支名称�?

- 6. （可选）通过添加导入来添加插件：`_ "import/path/here"`

- 7. 编译：`go build -tags=nobadger,nomysql,nopgx`

### 快速开始：
### 配反向代�?
`http://www.example.com {
  ## HTTP 代理配置
  ### 此时访问 example.com，实际访问的�?127.0.0.1:8080/app/ 的内�?
  proxy / 127.0.0.1:8080/app/

  ## WebSocket 代理配置
  ### 客户端请求的 wss://example.com/app/websocket, 实际�?wss://127.0.0.1:8080/app/websocket
  proxy /app/websocket 127.0.0.1:8080 {
    websocket
  }
}`

### 概述�?
Caddy通常用作HTTPS服务器，但也适用于任何长期运行的Go程序。Caddy "apps"是作为Caddy模块实现的Go程序。两个应用——`tls`和`http`——随Caddy标准发货�?

### 全面文档�?
Caddy的完整文档可在其官网找到：Caddy文档�?

项目地址�?
https://github.com/caddyserver/caddy
https://caddyserver.com/docs/

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)�?  [4�?16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)�?  [github 7.8k star 将小爱音箱接�?ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)