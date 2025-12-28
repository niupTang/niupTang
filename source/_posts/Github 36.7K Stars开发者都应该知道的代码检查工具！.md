---
title: "Github 36.7K Stars开发者都应该知道的代码检查工具！"
permalink: github-36-7k-stars开发者都应该知道的代码检查工具
date: 2025-01-01 19:44:17
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

    大家好，我是牛皮糖！今天要给大家介绍一个非常实用的工具——**ShellCheck**。这是一个用于静态分析shell脚本的工具，它能够帮助开发者发现并修正shell脚本中的常见错误和潜在问题。ShellCheck专门针对bash/sh脚本，是基于GPLv3许可证发布的开源项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTMdS8gyzc7iaUSsYHnXSiaVmJJtvic6cZT9qdBAEdLfu67z2kb13SaHhibDbIyHSsQAY3InSPuINy44w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTMdS8gyzc7iaUSsYHnXSiaVmrGzglAmqj9uzo8aKTtODZeheZ7etiazz5K6SHVlkssnuiakvLiaLgQRsg/640?wx_fmt=png&from=appmsg)

**项目快速启动：**

**安装ShellCheck：** ShellCheck的安装非常简单，你可以通过多种方式进行安装。以下是几种常见的安装方法：

- • **通过包管理器安装：**

- • 在Debian/Ubuntu系统上，你可以使用以下命令安装：`sudo apt-get install shellcheck`

- • 在macOS上，如果你使用Homebrew，可以执行：```
`brew install shellcheck`
```

- • **通过源码编译安装：**

- • 首先，克隆项目仓库：```
`git clone https://github.com/koalaman/shellcheck.git
cd shellcheck`
```

- • 然后，使用Cabal编译并安装：```
`cabal update
cabal install`
```

**使用ShellCheck：** 安装完成后，你可以通过以下命令来检查你的shell脚本：

`shellcheck your_script.sh`**应用案例和最佳实践：**

**案例一：修正常见的语法错误**

假设你有一个包含常见错误的脚本`bad_script.sh`：

`for f in $(ls *.m3u)
do
  grep -qi hq *.mp3 $f && echo -e 'Playlist $f contains a HQ file in mp3 format'
done`使用ShellCheck检查：

`shellcheck bad_script.sh`ShellCheck会提示你修正`for`循环中的`ls`命令和`grep`命令的使用问题。

**最佳实践：**

- • **使用双引号：**在变量引用时使用双引号，避免单词拆分和路径名扩展问题。

- • **避免使用反引号：**推荐使用`$(command)`代替反引号。

- • **检查未定义变量：**在脚本中使用`set -u`来检查未定义的变量。

**典型生态项目：** ShellCheck可以与多种开发工具和平台集成，例如：

- • **编辑器集成：**Vim、Emacs等编辑器可以通过插件直接显示ShellCheck的警告和建议。

- • **CI/CD集成：**可以在GitLab、GitHub Actions等CI/CD平台中使用ShellCheck进行代码质量检查。

- • **版本控制集成：**可以在Git的pre-commit钩子中使用ShellCheck来确保提交的代码质量。

通过这些集成，ShellCheck能够帮助开发者在开发过程中持续地提高shell脚本的质量和可靠性。希望这篇文章能够帮助你更好地了解ShellCheck，并在你的shell脚本开发中发挥重要作用。让我们一起提高代码质量，减少错误，提高效率！

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················