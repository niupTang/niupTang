---
title: GitHub 爆火 快速搭建企业级别知识库！！
date: 2025-07-29 22:19:20
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

大家好，我是牛皮糖！最近在企业级别的知识库需求特别多，在GitHub 上面找到了一个开源框架——llmware 是一个专为**企业级 RAG（Retrieval-Augmented Generation）应用**设计的统一框架，主打**小型、专用模型**，可在本地部署，兼顾**隐私、安全与成本效益**。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQkzbqCxOtjRWh9EFXTvN5ACcwdAy5H7ia93pI8m8aic9cIUHdskDegXlL5yYSVzKHdy4EPbia77PvXQ/640?wx_fmt=png&from=appmsg)

### 🧰 核心能力
模块
功能说明
**RAG Pipeline**完整生命周期：从知识源接入 → 检索 → 生成
**50+ 小型专用模型**专注企业任务：问答、分类、摘要、提取（如 SLIM、BLING、DRAGON 系列）
**模型目录（ModelCatalog）**统一调用 150+ 模型（支持 GGUF、HuggingFace、OpenAI 等）
**文档处理（Library）**支持 PDF、Word、Excel、PPT、图片等格式的解析、切块、向量化
**检索（Query）**文本检索、语义检索、混合检索、元数据过滤
**提示与生成（Prompt）**支持“带来源的提示”（Prompt with Sources），自动将检索结果注入 LLM
**代理（Agents）**多模型协作，支持函数调用（如情感分析、提取、摘要）
# 🚀 快速上手
### 1. 安装
`pip3 install llmware
# 或完整安装
pip3 install 'llmware[full]'`### 2. 运行第一个例子（本地合同分析）
```
`from llmware.prompts import Prompt
from llmware.setup import Setup
import os

# 下载示例合同
sample_path = Setup().load_sample_files()
contracts_path = os.path.join(sample_path, "Agreements")

# 加载本地模型
prompter = Prompt().load_model("bling-phi-3-gguf")

# 分析合同
contract = os.listdir(contracts_path)[0]
prompter.add_source_document(contracts_path, contract, query="executive employment agreement")
responses = prompter.prompt_with_source("What is the executive's base salary?")
print(responses[0]["llm_response"])`
```
# 🔥 最新亮点
- • **SLIM 模型**：支持函数调用，适合构建多步代理工作流。

- • **DRAGON 系列**：6-9B 参数，企业级 RAG 优化，支持 GGUF 本地部署。

- • **BLING 系列**：1-5B 参数，笔记本即可运行，适合快速原型开发。

- • **新工具**：

- • **BizBot**：本地 RAG + SQL 商业智能聊天机器人。

- • **Lecture Tool**：语音转文字 + 问答。

- • **OCR 支持**：提取 PDF/图片中的文字。

- • **多数据库支持**：SQLite（免安装）、Mongo、Postgres、Milvus、ChromaDB 等。

## 📦 模型速览
系列
参数规模
特点
示例模型
**SLIM**1-3B
函数调用、代理任务
`slim-extract-tool`, `slim-sentiment-tool`
**BLING**1-5B
RAG 优化、笔记本运行
`bling-phi-3-gguf`, `bling-tiny-llama-v0`
**DRAGON**6-9B
高精度、企业部署
`dragon-yi-answer-tool`, `dragon-mistral-answer-tool`
**Industry BERT**-
行业专用嵌入模型
`industry-bert-sec`, `industry-bert-loans`
## 项目地址
- • **GitHub**: https://github.com/llmware-ai/llmware

- • **HuggingFace 模型库**：https://huggingface.co/llmware

 

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