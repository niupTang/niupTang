---
title: "GitHub 61.8k Star：动画数学的魔法师"
permalink: github-61-8k-star-动画数学的魔法师
date: 2024-10-13 21:55:20
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

大家好，我是牛皮糖！今天发现一个动画神器，通过一点点代码就能生成 Manim 是一款用于解释数学视频的动画引擎。它用于以编程方式创建精确的动画。最近，我发现了一个名为 **3b1b/manim** 的GitHub开源项目，它简直是数学可视化的魔法师！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQtypyvB5znlUwjxfrHNgP2CqzLbXJabNYNHEQuxsMcKvnkictElWwGYEK1o68tmk7VDWN2X2ln1hg/640?wx_fmt=png&from=appmsg)

**项目介绍：** 

3b1b/manim 是一个用于创建数学动画的Python库，由著名数学视频博主3Blue1Brown开发。它可以帮助我们以动画的形式展示数学概念，让数学变得更加生动和易于理解。无论是复杂的几何图形，还是抽象的数学理论，manim都能以一种直观的方式呈现出来。

**如何使用：**

系统要求是FFmpeg、OpenGL和LaTeX（可选，如果您想使用 LaTeX）。对于 Windows an，需要Pango及其开发头文件。请参阅此处的说明。****

- 
- 
- 
- 
- 
- 
- 
- 
`安装 FFmpeg。``安装 LaTeX 发行版。建议使用MiKTeX 。``安装剩余的 Python 包。``git clone https://github.com/3b1b/manim.git``cd manim``pip install -e .``manimgl example_scenes.py OpeningManimExample``
`
 

在 CLI 中运行时，一些有用的标志包括：

- `-w`将场景写入文件

- `-o`将场景写入文件并打开结果

- `-s`跳至结尾并仅显示最后一帧。

- `-so`将最后一帧保存为图像并显示

- `-n <number>`跳至`n`场景的第 ' 个动画。

- `-f`使播放窗口全屏

- 实现了Web网页和Windows、Mac、Linux桌面应用

- 只需要一个URL，就可以导入CMS视频采集站资源

- 支持多语言（i18n）

- 提供了丰富的设置，如界面设置、播放器设置等

- 支持数据备份与还原

- 为常用功能提供了键盘快捷键

 manim的核心价值在于它能够将数学的抽象概念转化为直观的动画，这不仅有助于学生更好地理解数学，也能激发他们对数学的兴趣。此外，manim还支持多种输出格式，包括视频和GIF，方便在不同的平台上分享。

**项目地址：** https://github.com/3b1b/manim

以上就是我对3b1b/manim项目的介绍，希望它能够帮助你以一种全新的方式理解和欣赏数学之美。如果你对数学可视化感兴趣，不妨试试这个项目，你一定会有意想不到的收获！