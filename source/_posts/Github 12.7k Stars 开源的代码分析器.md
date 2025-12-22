---
title: Github 12.7k Stars 开源的代码分析器
date: 2024-11-03 19:45:08
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天看到一个程序采样分析器，可以对于代码的细节时间花费进行分析，看到对应的数据是否存在优化空间。

****

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTvHSVgiaZ3mRB48Shmo3mj7PiaotECSxicval5uoqibw1yLPq689ZR3vUb1YuPIlRMRRSnZVP2QmvfAw/640?wx_fmt=png&from=appmsg)

安装 安装py-spy非常简单，我们可以通过几种不同的方式进行：

- 

1. 使用pip安装预构建的二进制轮子：

`pip install py-spy`

- 

2. 从GitHub发布页面下载预构建的二进制文件。

- 

3. 如果你是Rust用户，也可以使用cargo安装：

`cargo install py-spy`请注意，这需要从源代码构建py-spy，并且需要libunwind在Linux和Windows上运行。

对于不同的操作系统，py-spy也提供了相应的安装方式：

- 

• 在macOS上，可以通过Homebrew安装：

`brew install py-spy`

- 

• 在Arch Linux上，可以通过AUR安装：

`yay -S py-spy`

- 

• 在Alpine Linux上，py-spy位于测试存储库中，可以使用以下命令安装：

`apk add py-spy --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted`

用法 py-spy从命令行工作，支持三个子命令：record、top和dump。

- 

• record：支持将配置文件记录到文件中。例如，生成Python进程的火焰图：

`py-spy record -o profile.svg --pid 7320
# ORpy-spy record -o profile.svg -- python myprogram.py`

![](https://mmbiz.qpic.cn/mmbiz_svg/L3Qib0nCc28nqwUCjibVicblKLT4XrC1gpNwkO4RtnOo2bDJjaoy53sXo0T1J0ogYX3Ut84axvGpict5xF5jPrkFDby0FGxnADJh/640?wx_fmt=svg&from=appmsg)

- 

这将生成一个交互式SVG文件。

- 

![](https://mmbiz.qpic.cn/mmbiz_gif/p1ESIQQvfrTvHSVgiaZ3mRB48Shmo3mj7t39052icgVdH3jK4H9JNDUmXib2t0OF4d5QfpDaFeHMia8Kw3WzOtXXQA/640?wx_fmt=gif&from=appmsg)

- 

• top：实时显示Python程序中哪些函数耗时最多，类似于Unix top命令：

`py-spy top --pid 7320
# ORpy-spy top -- python myprogram.py`

- 

• dump：显示每个Python线程的当前调用堆栈：

`py-spy dump --pid 7320`

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTvHSVgiaZ3mRB48Shmo3mj799PJ9aIsIkQT3AlvxWHngwibKlJxC7Iic6JIW0xd7RHxQuQiaictJicrSCg/640?wx_fmt=png&from=appmsg)

常见问题

- 

1. 为什么我们需要另一个Python分析器？ py-spy旨在让您分析和调试任何正在运行的Python程序，即使该程序正在服务生产流量。

- 

2. py-spy如何工作？ py-spy通过直接读取Python程序的内存来获取调用堆栈。

- 

3. py-spy可以分析本机扩展吗？ 是的，py-spy支持在x86_64 Linux和Windows上分析用C/C++或Cython等语言编写的原生Python扩展。

- 

4. 如何分析子进程？ 通过将--subprocesses标志传递给record或top视图，py-spy也将包含目标程序子进程的任何Python进程的输出。

- 

5. 什么时候需要以sudo身份运行？ py-spy从不同的Python进程读取内存，出于安全原因，这可能不被允许。

结语

py-spy是一个非常强大的工具，可以帮助我们深入了解Python程序的性能瓶颈。如果你对py-spy感兴趣，可以访问它的GitHub页面了解更多详情：

py-spy GitHub页面

****

项目地址：

**https://github.com/GrowingGit/GitHub-Chinese-Top-Charts**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562PRME95JfKlQIXNIicIbUXpeouLU3upiazIm774Q0IPHORgZtLXNauthoPTZgkziaC8TZefT3vO7lC9A/640?wx_fmt=jpeg)