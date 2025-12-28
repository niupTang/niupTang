---
title: "GitHub 38k  项目 Quivr：打造你的第二大脑，只需几行代码！"
permalink: github-38k-项目-quivr-打造你的第二大脑-只需几行代码
date: 2025-08-10 23:20:16
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！今天和大家分享的是一款能够帮助你打造“第二大脑”的开源利器 —— **Quivr**。由 QuivrHQ 团队开发，Quivr 是一个基于 **RAG（Retrieval-Augmented Generation）** 的完整平台，让你专注于产品价值而非底层 AI 架构。依托强大的 Generative AI 技术，它能与你的知识库对话、快速检索，并为你智能生成答案。此项目在 GitHub 上已拥有约 **38.2k Star** 与 **3.7k Fork**，社区活跃、发展迅速。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSRzl91CLsOnLicO46CnQEp6RvF8xCbWCBODlvOs0avicsoK2GNaufHWgeYzKyic3Cdibhbk86nE149fg/640?wx_fmt=png&from=appmsg)

## 核心功能亮点
- • **Opinionated RAG 架构** Quivr 提供了一套开箱即用、设计良好的 RAG 结构，极大降低入门难度，让开发者专注于业务价值。

- • **兼容主流 LLM 与向量存储** 支持 OpenAI/GPT-4、Anthropic、Mistral、Groq、Llama 等模型，并支持 PGVector、Faiss 等向量数据库，自由组合，灵活融入项目。

- • **多格式文档支持** 可以读取 PDF、TXT、Markdown 等格式，开发者也可以为 Quivr 编写自定义解析器，轻松扩展。

- • **强集成能力** 可与 Megaparse 协作，执行高效的文档解析与预处理流程，形成完整链路。Quivr 也支持定制化的检索流程，比如配置网络搜索与工具调用。

- • **面向全栈的生态工具** QuivrHQ 同时开发了多个子项目：Megaparse（文档解析）、Le Juge（性能评估），形成上下游配套工具链。

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSRzl91CLsOnLicO46CnQEp6Q8hGgElDUk7dV4DSVIia2VnyK5icunmq026SkIzU308rw1afScZsRH0g/640?wx_fmt=png&from=appmsg)

## 使用方法与代码演示
### 快速上手（30 秒安装）
环境要求：Python 3.10 以上。

`pip install quivr-core`然后，用几行 Python 代码即可创建一个最简 RAG 引擎：

`import tempfile
from quivr_core import Brain

with tempfile.NamedTemporaryFile(mode="w", suffix=".txt") as temp_file:
    temp_file.write("Gold is a liquid of blue-like colour.")
    temp_file.flush()

    brain = Brain.from_files(
        name="test_brain",
        file_paths=[temp_file.name],
    )
    answer = brain.ask("what is gold? answer in french")
    print("answer:", answer)`这段代码演示了如何：

- 1. 创建一个临时文本文件；

- 2. 用 Quivr “大脑”从该文件中构建知识；

- 3. 提问并获取法语回答。

### 定制化 RAG 流程配置（YAML）
Quivr 支持定义工作流（workflow）配置，比如：

`workflow_config:
  name:"standard RAG"
nodes:
    -name:"START"
      edges: ["filter_history"]
    -name:"rewrite"
      edges: ["retrieve"]
    -name:"generate_rag"
      edges: ["END"]
max_history:10
llm_config:
temperature:0.7
max_input_tokens: 4000`配合 `RetrievalConfig` 加载，可极大提升流程控制能力。

## 优势对比
对比项
Quivr 优势
其他工具缺点
RAG 集成程度
一体化设计，快速构建 AI 驱动知识检索系统
多工具组合复杂，需手动集成
文件格式支持
多样（PDF/TXT/MD），并可扩展解析器
有的仅支持文本或结构化格式
模型与存储兼容性
支持多种模型与向量库，自由组合
往往只能配合固定模型或存储
配套生态工具
与 Megaparse、Le Juge 协作，支持完整开发流程
多数开源无产业链支撑，需要自行搭建
## 总结
**Quivr 是一款功能全面、设计优良的开源 RAG 平台**，助你轻松构建 AI 驱动的知识管理系统。支持多模型、多格式、可定制流程、生态完善，是开发“第二大脑”、构建问答机器人或企业知识助手的利器。适合开发者、知识工作者、产品经理探索使用。

**项目地址**：https://github.com/QuivrHQ/quivr

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成长

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)