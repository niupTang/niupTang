---
title: "别人几周才能做完的对话式 AI，我�?5 分钟上线了！"
permalink: 别人几周才能做完的对话式-ai-我用-5-分钟上线�?
date: 2025-06-30 23:28:07
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
�? [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！研究了这么多智能体，突然发现一个非常好用的 AI 智能体的工具�?

**Chainlit + LangChain，仅�?5 分钟，就构建了一个可直接上线的对话式 AI 应用�?*

没错，不用前端，不用部署后台框架，甚至不需要搞复杂�?prompt 工程�?*照着文档抄就能跑，效果还�?*

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQZBRwoJEG95YeJGuqgIwy9nxr5bRBFO8LmGIJEahuvQc7Hg0oSQNLYnBoicBGtibjbDcu2f0sqiatNQ/640?wx_fmt=png&from=appmsg)

下面来详细介绍�?*Chainlit** 项目�?

### 🧩 什么是 Chainlit�?
Chainlit 是一个�?*开源的 Python 框架**，专为快速搭建对话型 AI 应用而生。它让开发者无需前端知识，就能用 Python 完成类似 ChatGPT 的聊天界面，同时支持多步骤推理展示、按钮交互、文件上传等高级功能 (docs.chainlit.io, datacamp.com)�?

关键特点包括�?

- •�?*极简 API 设计**：通过注解 `@cl.on_message`、`@cl.on_chat_start` 控制聊天逻辑�?

- •�?*前端自动生成**：后台是 FastAPI WebSocket 服务，自动渲�?React 驱动的聊�?UI�?

- •�?*工具集成 & 中间状态可视化**：支持自定义步骤、函数调用与 chain-of-thought 展示 (github.com, docs.chainlit.io)�?

- •�?*多平台部�?*：可作为独立 Web 应用、嵌�?FastAPI、Slack/Discord Bot �?(chainlit.io)�?

### ⚙️ 安装与快速上�?
安装非常简单：

`pip install chainlit
chainlit hello`启用后会打开浏览器中�?demo 聊天 UI，非常直�?�?

示例代码�?

`import chainlit as cl

@cl.step(type="tool")
async def tool():
    await cl.sleep(2)
    return "来自工具的响应！"

@cl.on_message
async def main(message: cl.Message):
    tool_res = await tool()
    await cl.Message(content=tool_res).send()`再执行 `chainlit run demo.py -w`，即可看到逻辑被一步步执行、输出在界面上�?

### 🔧 核心功能 & 特�?
- 1. **事件驱动式聊天生命周�?*

- • `@cl.on_chat_start`、`@cl.on_message`、`@cl.on_chat_end` 等钩子控制流�?(datacamp.com)�?

- �?支持 OpenAI、LangChain、LlamaIndex、Mistral、Semantic Kernel、HuggingFace 等�?

# 项目整合
### 第一步：安装依赖
`pip install chainlit langchain faiss-cpu openai`想用 PDF 文件？再加个解析包：

`pip install pymupdf`### 第二步：写一个 `rag_bot.py`
```
`import chainlit as cl
from langchain.document_loaders import PyMuPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI

@cl.on_chat_start
async def start():
    await cl.Message(content="📄 请上传一�?PDF 文件构建知识�?).send()

@cl.on_file_upload
async def handle_upload(files: list[cl.UploadedFile]):
    loader = PyMuPDFLoader(files[0].path)
    docs = loader.load()
    chunks = CharacterTextSplitter(chunk_size=500, chunk_overlap=50).split_documents(docs)

    vectordb = FAISS.from_documents(chunks, OpenAIEmbeddings())
    qa = RetrievalQA.from_chain_type(llm=ChatOpenAI(), retriever=vectordb.as_retriever())

    cl.user_session.set("qa", qa)
    await cl.Message(content="�?知识库构建完成，可以开始提问了�?).send()

@cl.on_message
async def respond(msg: cl.Message):
    qa = cl.user_session.get("qa")
    if not qa:
        await cl.Message(content="⚠️ 请先上传文件").send()
    else:
        res = qa.run(msg.content)
        await cl.Message(content=res).send()`
```
### 第三步：运行体验�?
```
`chainlit run rag_bot.py -w`
```
浏览器自动打开一个干净美观的聊天界面👇：

- �?上传 PDF

- �?构建向量�?

- �?提问

- �?回答

- �?无需部署，立即可用！

## 🧱 项目结构参�?
`rag_bot/
├── rag_bot.py       # 主程�?
├── requirements.txt # 环境依赖
└── .chainlit/
    └── config.toml  # Chainlit 配置`你也可以定制 LOGO、对话头像、颜色主题等 UI，完全开箱即用�?

## 🔍 和传统开发比，它赢在哪？
功能
传统方案
Chainlit
界面构建
手写前端 + 后端通信
自动生成
多轮聊天逻辑
手动维护状�?
Python 函数托管
文件上传
需写路由和解析逻辑
自带支持
向量库构�?
要搭环境
封装好了
生产部署
要写 CI/CD 流程
本地运行即上线（也可 Docker�?
## 🔮 更强玩法你还可以试试�?
- �?�?集成 Claude、Gemini、通义千问等自定义模型

- �?�?�?LlamaIndex 做更智能的索引摘�?

- �?�?�?Chainlit 嵌入到你�?FastAPI 项目�?

- �?�?VSCode 调试，热更新支持开发更顺畅

- �?�?企业私有部署 + 知识库检索系�?

## 🧠 写在最�?
LLM 的真正能力，**不只是聊天，而是行动�?*

�?Chainlit 就是帮助你用最简单的方式，让“AI 动起来”的利器�?

你可�?5 分钟部署一�?AI 产品原型，也可以 5 天内交付一整套企业级问答系统�?

与其观望，不如尝试！

📎 如果你想要：

- �?获取完整项目模板 + 部署方案

- �?�?Chainlit 与你已有系统集成

- �?或者定制功能模块（多轮记忆、上下文引用、插件式结构�?

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成�?

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)