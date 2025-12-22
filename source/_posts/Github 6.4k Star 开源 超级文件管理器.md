---
title: Github 6.4k Star 开源 超级文件管理器
date: 2024-11-12 22:14:54
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天要给大家带来一个超级实用的开源项目——superfile。在这个信息爆炸的时代，我们每天都在和文件打交道，无论是代码、文档还是多媒体文件，管理它们成了日常工作中不可或缺的一部分。最近，我在探索如何更高效地管理这些文件时，发现了这个宝藏项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQEaAiaJ760RiczAcEibgQkc4BFzibRgpeXuKqWmsVKwWjOZdG3LJHOTqIYvWrdVVQCX0bpQqia12U4ddA/640?wx_fmt=png&from=appmsg)

**superfile** 是一个现代且时尚的终端文件管理器，它不仅外观漂亮，而且功能强大，能够极大地提升你的工作效率。它支持多种操作系统，包括 Linux、MacOS，甚至是Windows（虽然还在完善中），这意味着无论你使用的是什么系统，都有可能享受到它带来的便利。

**安装过程**：

安装 **superfile** 非常简单，你可以通过一行命令快速安装。对于 MacOS 和 Linux 用户，只需在终端输入以下命令：

`bash -c "$(curl -sLo- https://superfile.netlify.app/install.sh)"`![](https://mmbiz.qpic.cn/mmbiz_gif/p1ESIQQvfrQEaAiaJ760RiczAcEibgQkc4BkX5O2L40wtebyEpLb6CWyaicu3zVqEE7fbtTy4wWNZy4tac6yER5WWw/640?wx_fmt=gif&from=appmsg)

**如何使用**：

使用 **superfile** 也非常简单。安装后，你可以通过命令行启动它，然后就像使用其他文件管理器一样浏览、复制、移动和删除文件。它还支持插件和主题，让你可以根据自己的喜好定制外观和功能。

**核心优势**：

- • **跨平台支持**：Linux、MacOS、Windows，一个工具，全平台通用。

- • **插件系统**：通过插件扩展功能，让文件管理更加灵活。

- • **主题定制**：根据个人喜好调整界面，让工作更加愉悦。

- • **热键支持**：对于 vim/nvim 用户，可以自定义热键，提高操作效率。

**如何使用现有主题：** 

要使用一个现有的主题，你可以通过以下命令来设置：

`$EDITOR CONFIG_PATH`首先，你需要找到你喜欢的主题（如果没有你喜欢的，你完全可以自己创建一个！）。一旦找到你喜欢的主题，复制它并粘贴到 `config_path` 文件中的 `theme` 配置项里。

`theme = 'catppuccin'
theme = 'theme_name_you_like'`**创建自己的主题：**

 如果你想定制自己的主题，可以前往 

`THEME_DIRECTORY/YOUR_THEME_NAME.toml`，并复制现有主题的 JSON 到你自己的主题文件中。别忘了在 `config.toml` 中将 `theme` 变量更改为你的主题名称。

`# 在 config.toml 中设置主题名称
theme = 'your_custom_theme_name'`如果你对自己的主题感到满意，不妨将其加入到默认主题列表中，让更多人享受到你的创意！

**默认主题示例：**

`# Catppuccin 主题
# 主题创建者：https://github.com/AnshumanNeon
# 更新者（按时间排序）：
#
# 感谢所有贡献者！！

# 如果你想让侧边栏边框显示，只需将其设置为与侧边栏背景色相同
code_syntax_highlight = "catppuccin-mocha"

# 以下为颜色配置示例
file_panel_border = "#6c7086"
sidebar_border = "#1e1e2e"
footer_border = "#6c7086"

# 更多颜色配置...`**结尾：**

 如果你对 **superfile** 感兴趣，想要探索更多关于如何自定义主题的信息，可以访问它的GitHub页面。

项目地址：

**https://github.com/yorukot/superfile)**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562PRME95JfKlQIXNIicIbUXpeouLU3upiazIm774Q0IPHORgZtLXNauthoPTZgkziaC8TZefT3vO7lC9A/640?wx_fmt=jpeg)