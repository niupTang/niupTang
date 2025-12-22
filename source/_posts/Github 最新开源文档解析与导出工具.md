---
title: Github 最新开源文档解析与导出工具
date: 2024-11-04 20:08:20
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖!今天我要给大家介绍一个非常强大的文档解析工具——Docling。Docling可以轻松、快速地解析文档，并将其导出为所需的格式。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQDuZO59Y6fF7db5jVQ6c27GdyZRviaibl90YFhQEzicxSxBooWu9YshjKHpIjH6q5lPhic8AVUG4MhmQ/640?wx_fmt=png&from=appmsg)

### 特征
- • 🗂️ **读取流行的文档格式**：支持PDF、DOCX、PPTX、图像、HTML、AsciiDoc、Markdown，并导出为Markdown和JSON。

- • 📑 **高级PDF文档理解**：包括页面布局、阅读顺序和表格结构。

- • 🧩 **统一、富有表现力的DoclingDocument表示格式**。

- • 📝 **元数据提取**：包括标题、作者、参考文献和语言。

- • 🤖 **无缝集成LlamaIndex和LangChain**：打造强大的RAG/QA应用程序。

- • 🔍 **支持扫描PDF的OCR**。

- • 💻 **简单方便的CLI**。

探索文档以发现大量示例并释放Docling的全部功能！

### 安装
要使用Docling，只需从包管理器（如pip）安装：

`pip install docling`适用于macOS、Linux和Windows环境，支持x86_64和arm64架构。更详细的安装可以参考文档链接。

### 入门
要转换单个文档，请使用`convert()`函数，例如：

`from docling.document_converter import DocumentConverter

source = "https://arxiv.org/pdf/2408.09869"  # document per local path or URL
converter = DocumentConverter()
result = converter.convert(source)
print(result.document.export_to_markdown())  # output: "## Docling Technical Report[...]"`查看入门指南，您将发现许多调整选项，以利用所有高级功能。

Docling 模型依赖于PyTorch库。根据您的架构，您可能需要使用不同的发行版torch。例如，您可能需要支持不同的加速器或仅限 CPU 的版本。

如果大家想对于RAG ，或者对于知识库进行调试的可以看看这个项目，其实主要是针对于大模型的。

项目地址：

**https://github.com/DS4SD/docling**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562PRME95JfKlQIXNIicIbUXpeouLU3upiazIm774Q0IPHORgZtLXNauthoPTZgkziaC8TZefT3vO7lC9A/640?wx_fmt=jpeg)