---
title: Github 46.6k Star 前端测试工具
date: '2026-01-04T16:26:13.097161'
updated: '2026-01-05T23:18:10.162370'
tags: []
categories: []
cover: null
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天在 GitHub 看到一款页面测试工具——  cypress，在GitHub 上收获了 46.6k 的 Star 并且还宣称不会进行收费。Cypress是一个流行的前端测试框架，它允许开发者编写自动化测试来确保他们的Web应用程序按预期工作。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTWWm4GdViaTCCaymLrYaDwh0TmJhkjkd8FafjfLKJo9ADJV5taB7mgV9VkdEUGE1RW8ibe3icJiboBbg/640?wx_fmt=png&from=appmsg)

**安装方式：**

- 可以通过npm、yarn或pnpm这些包管理工具来安装Cypress。

- 也可以通过直接从Cypress CDN下载来尝试Cypress，这种方式适合快速试用。

    使用npm安装：

        

- 
`npm install cypress --save-dev --registry=https://registry.npmmirror.com`

在项目的根目录下运行npm install cypress --save-dev来将Cypress作为开发依赖安装到本地。

需要确保已经安装了Node.js，并且项目中存在node_modules文件夹或package.json文件。

    yarn安装：

 通过yarn add cypress命令安装Cypress。

- 
`yarn add cypress --dev`

       pnpm安装：

    使用pnpm add --save-dev cypress命令安装，需要确保本地安装了         pnpm环境。

- 
`pnpm add --save-dev cypress`
直接下载：

    如果不使用Node.js或包管理工具，或者想快速尝试Cypress，可以直接从Cypress CDN下载最新版本。

**系统支持：**
- 支持macOS 10.15及以上（Intel或Apple Silicon 64位）

- Linux Ubuntu 20.04及以上、

- Fedora 39及以上、

- Debian 11及以上（64位或ARM64）

- Windows 10及以上（仅限64位）。

- 需要Node.js 18.x、20.x、22.x或更高版本。

硬件要求：
   本地运行Cypress建议使用能够进行现代Web开发的任何机器。在CI环境中运行时，建议至少有2个CPU核心，如果启用视频录制则需要额外的CPU核心，以及至少4GB内存，推荐8GB以上用于长时间测试运行。

Docker：

    Cypress提供了Docker镜像，这些镜像基于Linux（Debian），并且已经预装了所有必需的依赖。

打开运行：

- 安装完成后，可以打开Cypress应用程序并进行测试。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTWWm4GdViaTCCaymLrYaDwhEXAM3BKqiamvAia0FSQItQicp99XP6ZViatfgOkxBjT5cJcO0Tfuy3oYHQ/640?wx_fmt=png&from=appmsg)

如何获取元素的文本内容？

### 
Cypress 命令产生 jQuery 对象，因此您可以对其调用方法。

如果您尝试断言元素的文本内容：

- 
`cy.get('div').should('have.text', 'foobarbaz')`

如果文本包含 不间断空格实体 &nbsp;，则使用 Unicode 字符\u00a0而不是&nbsp;。****

- 
`cy.get('div').should('have.text', 'Hello\u00a0world')`

### 如何获取输入的值？
// make an assertion on the value

- 
`cy.get('input').should('have.value', 'abc')`

项目地址：

**https://github.com/cypress-io/cypress**

官方文档：

**https://docs.cypress.io/guides/guides/command-line**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**