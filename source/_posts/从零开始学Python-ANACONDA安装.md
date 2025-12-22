---
title: 从零开始学Python-ANACONDA安装
date: 2024-04-30 11:59:22
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

一般的Python 安装都是直接到Python 的官网进行安装Python3.0 或者是Python2.0的版本，但是实际上这样针对于不同的项目会有不同的Python版本所以大多数情况都是安装ANACONDA。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCws3zhaCZ1TM79PrSgycgqRfy942uHF5ia3tY5icKDdBvkJM61xb7SEwQ/640?wx_fmt=png&from=appmsg)

Distribution | Anaconda

Anaconda 就是可以便捷获取包且对包能够进行管理，同时对环境可以统一管理的发行版本。Anaconda包含了conda、Python在内的超过180个科学包及其依赖项。

2. 特点

Anaconda具有如下特点：

▪ 开源

▪ 安装过程简单

▪ 高性能使用Python和R语言

▪ 免费的社区支持

其特点的实现主要基于Anaconda拥有的：

▪ conda包

▪ 环境管理器

▪ 1,000+开源库

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCxbzNkNxicBV8RwhKySVC9KPszN8x9ldNB4ZN2QQiaF5JCSy2IeUVoH5A/640?wx_fmt=png&from=appmsg)

通过点击下载，选择对应的 操作系统，安装的时候可以选择稍微大一点的硬盘放对应的包文件。

1. 安装条件

▪ 系统要求：32位或64位系统均可

▪ 下载文件大小：约500MB

▪ 所需空间大小：5GB空间大小

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCvibng73P80nFia2dQE0jiazJcwIOAEX6hOLJxN5WOyocjGU6Bl3Gshh8Q/640?wx_fmt=png&from=appmsg)

下载好了exe 文件后，直接傻瓜式的安装

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCuW0qdCPcJA6fias10SqkpcL4OvTYWiavRHXIUzfAXdkTbE51Yv1UWW9w/640?wx_fmt=png&from=appmsg)

在需要选择对应磁盘的时候选择一个相对较大的一个磁盘。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCcqTcKARa5kHzcF1gQhIKjbNxPf5uiaAl0Et9Fncib4KIvic8NWpJww0Fw/640?wx_fmt=png&from=appmsg)

下载完成过后可以在开始搜索页看到Anaconda Powershell Prompt

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCHWbfFWiaIfiaQXFLic32BKtKFZuudTpXpRicwzK2COmDV84GRKZtFf5N0w/640?wx_fmt=png&from=appmsg)

打开命令行可以通过命令查看已经安装的包，并且会显示在对应包位置。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCKNFIpLVH9nGu2F4y5rEaRZU4BTEzFtDBOXhyniaA3iaonib28ZmdNqyaw/640?wx_fmt=png&from=appmsg)

**conda 基本命令**

**下面的提示中#后面的都是注释**

  1、 查看版本

- 
`conda --version`
   2、更新conda至最新版本

- 
`conda update conda`
   3、创建新环境

<env_name> 即创建的环境名。建议以英文命名，且不加空格，名称两边不加尖括号“<>”。

 <package_names> 即安装在环境中的包名。名称两边不加尖括号“<>”

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
`conda create --name <env_name> <package_names>``# 创建一个Python 3.10 的环境``conda create --name py10  python=3.10``# 切换环境 ``# windows 的命令 ``activate <env_name>``# linux 的命令``source activate <env_name>``# 查看当前环境``conda info --envs`
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCTbAibDyUbONwNZryAeDA6ibZIYxicccHuS9HMtAIwUneZaOehHzcjZqDQ/640?wx_fmt=png&from=appmsg)

   4、下载包

这个是制定环境安装包，如果不加<env_name> 就是安装默认当前使用的环境包

- 
`conda install --name <env_name> <package_name>`
如果安装的包出现网络下载太慢也可通过自己去下whl 文件进行安装文件。

https://www.lfd.uci.edu/~gohlke/pythonlibs/#xgboost（最近打不开了）

Christoph Gohlke (cgohlke.com)

通过国内的某些镜像下载：https://pypi.tuna.tsinghua.edu.cn/simple/examle

安装对应的whl 包文件

- 
- 
`pip install  ***.whl``# 比如`
**whl 文件下载小提示：**

TensorFlow，对包对应的是0.12.0版本对应python3.5 windows 的ARM 架构的64系统的包

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRnKJvhhqYb2AicOahbeEgTCrdaLXJ4s37Haae0Oib9JU6SgkMOV07Oz584iaMtR3CxR2ucJutXCjicSw/640?wx_fmt=png&from=appmsg)