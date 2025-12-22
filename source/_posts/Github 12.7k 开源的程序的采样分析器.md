---
title: Github 12.7k 开源的程序的采样分析器
date: 2025-03-04 22:41:44
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

您好，我是太阳鸟！今天我要和大家聊聊一个非常实用的工具——py-spy。这是一个Python程序的采样分析器，能够让我们直观地了解Python程序在哪些方面花费了时间，而且**无需重新启动程序或以任何方式修改代码**。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaMCsdB13YnrtQUicHRRKVlOMcG6zOs4O4t73TdARhDHsFurvJKiabIjzfg1RLSywKfswn5iaBoggrdibwiaC8mVgrw/640?wx_fmt=png&from=appmsg)

**安装** 安装py-spy非常简单，我们可以通过几种不同的方式进行：

- 1. 使用pip安装预构建的二进制轮子：

`pip install py-spy`
- 2. 从GitHub发布页面下载预构建的二进制文件。

- 3. 如果你是Rust用户，也可以使用cargo安装：

`cargo install py-spy`请注意，这需要从源代码构建py-spy，并且需要libunwind在Linux和Windows上运行。

对于不同的操作系统，py-spy也提供了相应的安装方式：

- • 在macOS上，可以通过Homebrew安装：

`brew install py-spy`
- • 在Arch Linux上，可以通过AUR安装：

`yay -S py-spy`
- • **在Alpine Linux上**，py-spy位于测试存储库中，可以使用以下命令安装：

`apk add py-spy --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted`
**用法** py-spy从命令行工作，支持三个子命令：record、top和dump。

- • **record**：支持将配置文件记录到文件中。例如，生成Python进程的火焰图：

`py-spy record -o profile.svg --pid 7320
# OR
py-spy record -o profile.svg -- python myprogram.py`![](https://mmbiz.qpic.cn/mmbiz_svg/L3Qib0nCc28nqwUCjibVicblKLT4XrC1gpNwkO4RtnOo2bDJjaoy53sXo0T1J0ogYX3Ut84axvGpict5xF5jPrkFDby0FGxnADJh/640?wx_fmt=svg&from=appmsg)

- 这将生成一个交互式SVG文件。

- ![](https://mmbiz.qpic.cn/mmbiz_gif/JiaMCsdB13YnrtQUicHRRKVlOMcG6zOs4OEsICIf5OEpaq6NOQEeXZ7Sl2SSZeFL0xu4ib8wMKgdPzXWW1VDygOlw/640?wx_fmt=gif&from=appmsg)

- • **top**：实时显示Python程序中哪些函数耗时最多，类似于Unix top命令：

`py-spy top --pid 7320
# OR
py-spy top -- python myprogram.py`
- • **dump**：显示每个Python线程的当前调用堆栈：

`py-spy dump --pid 7320`
**![](https://mmbiz.qpic.cn/mmbiz_png/JiaMCsdB13YnrtQUicHRRKVlOMcG6zOs4OlCL6O0p8PYu3VsVwXY10B8tARAttJHpFQibeP5xkqfnMYnaGBDuE2ibQ/640?wx_fmt=png&from=appmsg)
**

**常见问题**

- 1. **为什么我们需要另一个Python分析器？** py-spy旨在让您分析和调试任何正在运行的Python程序，即使该程序正在服务生产流量。

- 2. **py-spy如何工作？** py-spy通过直接读取Python程序的内存来获取调用堆栈。

- 3. **py-spy可以分析本机扩展吗？** 是的，py-spy支持在x86_64 Linux和Windows上分析用C/C++或Cython等语言编写的原生Python扩展。

- 4. **如何分析子进程？** 通过将--subprocesses标志传递给record或top视图，py-spy也将包含目标程序子进程的任何Python进程的输出。

- 5. **什么时候需要以sudo身份运行？** py-spy从不同的Python进程读取内存，出于安全原因，这可能不被允许。

**结语**

py-spy是一个非常强大的工具，可以帮助我们深入了解Python程序的性能瓶颈。如果你对py-spy感兴趣，可以访问它的GitHub页面了解更多详情：