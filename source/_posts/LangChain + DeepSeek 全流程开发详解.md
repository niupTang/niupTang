---
title: LangChain + DeepSeek 全流程开发详解
date: 2025-06-20 23:08:17
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRr1Y9RyDAPqcJKPfcuoTXPZDMfPHo6WvCgekh6fJe2wLWBxia5NZeSpSIT2ia2X1CIrajqo8qoqDww/640?wx_fmt=png&from=appmsg)

最近看了很多的 Agent 项目， 如果想要自己开发发现还是 Langchain 框架最适合我这样的小白。记录一下今天跑的一个 Demo

### 基础介绍
LangChain 旨在简化 AI 应用开发，通过标准化接口将 LLM 与外部系统（数据源、工具、向量数据库等）无缝连接，帮助开发者构建可扩展、模块化的智能应用。 主要功能如下

- • Prompt templates：Prompt templates 是不同类型提示的模板。例如“ chatbot ”样式模板、ELI5 问答等

- • LLMs：像 GPT-3、BLOOM 等大型语言模型

- • Agents：Agents 使用 LLMs 决定应采取的操作。可以使用诸如网络搜索或计算器之类的工具，并将所有工具包装成一个逻辑循环的操作。

- • Memory：短期记忆、长期记忆。

### 生态系统
- • LangSmith：用于监控、调试和评估 LLM 应用性能（如跟踪 Agent 轨迹）。

- • LangGraph：构建长期记忆和复杂状态控制的 Agent 工作流（被 LinkedIn、Uber 等企业采用）。

- • LangGraph Platform：可视化部署和扩展 Agent 的云平台。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRr1Y9RyDAPqcJKPfcuoTXP2KPwkf0WhDaibH4sNhfiaHkGHvd9ico5DpibibKDTibvsybBoESqGZeKEndQ/640?wx_fmt=png&from=appmsg)
### 快速开始
安装 LangChain 只有官方只支持Python 和 js 两个版本，我用的是Python 版本。

安装依赖安装调用基础的依赖

`    pip install -U langchain  # 安装最新版
    pip install -U langchain-core langchain-community langchain-openai # 安装核心库
    pip install python-dotenv`使用新版 LangChain 语法（兼容 DeepSeek）

`
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI  # 虽然叫 OpenAI，但可兼容 DeepSeek
from langchain.memory import ConversationBufferMemory
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import OpenAIEmbeddings

# 向量数据库和嵌入
embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
vector_store = InMemoryVectorStore(embeddings)
# 初始化DeepSeek LLM

# # 创建提示模板
# prompt = PromptTemplate(
#     input_variables=["product"],
#     template="为{product}写一个创意广告文案:",
# )

# 注意：这里使用 ChatOpenAI 但指向 DeepSeek 的 API
llm = ChatOpenAI(
    api_key="sk-xxxxxx",
    base_url="https://api.deepseek.com/v1",  # 注意 /v1 路径
    model="deepseek-chat"
)

# 新版链式调用
prompt = ChatPromptTemplate.from_template("{input}")
chain = prompt | llm  # 使用管道操作符替代旧版 LLMChain

# 调用流式返回
for chunk in chain.stream({"input": "AI编程助手"}):
    print(chunk.content, end="", flush=True)
`下面是整体的流程简介

`from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import OpenAIEmbeddings`这段导入语句展示了 LangChain 的模块化架构设计：

- • **langchain_core**：包含框架基础类和接口

- • **langchain_openai**：提供与 OpenAI 兼容的接口（可适配 DeepSeek）

- • **langchain**：集成高级功能如内存管理

版本提示：建议使用 langchain-core ≥0.1.0 和 langchain-openai ≥0.0.5

## 2. 向量数据库配置
### 2.1 嵌入模型初始化
`embeddings = OpenAIEmbeddings(model="text-embedding-3-large")`关键参数解析：

- • `model="text-embedding-3-large"`：指定嵌入模型版本

- • 虽然使用 OpenAIEmbeddings 类，但可通过 base_url 重定向到 DeepSeek

- • 实际部署时应替换为 DeepSeek 的嵌入模型（如可用）

技术原理：

- • 将文本转换为 3072 维向量（text-embedding-3-large 的默认维度）

- • 支持余弦相似度等向量运算

### 2.2 内存向量数据库
`vector_store = InMemoryVectorStore(embeddings)`特性说明：

- • **InMemoryVectorStore**：轻量级内存向量数据库

- • 优点：零配置、快速原型开发

- • 缺点：重启后数据丢失，不适合生产环境

- • 生产替代方案：`from langchain_community.vectorstores import Chroma
vector_store = Chroma.from_documents(docs, embeddings)`

## 3. 大语言模型集成
### 3.1 DeepSeek 适配配置
```
`llm = ChatOpenAI(
    api_key="sk-xxxxx",
    base_url="https://api.deepseek.com/v1",
    model="deepseek-chat"
)`
```
关键配置项：

参数
说明
注意事项
api_key
DeepSeek API 密钥
应从环境变量读取，避免硬编码
base_url
API 端点
必须包含 /v1 路径
model
模型标识
deepseek-chat 为对话优化版本
安全建议：

`import os
llm = ChatOpenAI(
    api_key=os.getenv("DEEPSEEK_API_KEY"),
    base_url="https://api.deepseek.com/v1"
)`## 4. 对话链构建
### 4.1 提示词模板
```
`prompt = ChatPromptTemplate.from_template("{input}")`
```
模板系统进阶用法：

`from langchain_core.prompts import (
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate
)

prompt = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template("你是一个{role}"),
    HumanMessagePromptTemplate.from_template("{input}")
])`### 4.2 链式组合
```
`chain = prompt | llm`
```
管道操作符 (`|`) 的等效实现：

`from langchain_core.runnables import RunnableSequence
chain = RunnableSequence(first=prompt, last=llm)`扩展链示例（带记忆）：

`from langchain_core.runnables import RunnablePassthrough

memory = ConversationBufferMemory()
chain = (
    RunnablePassthrough.assign(
        history=memory.load_memory_variables
    ) 
    | prompt 
    | llm
)`## 5. 流式输出处理
### 5.1 流式调用
```
`for chunk in chain.stream({"input": "AI编程助手"}):
    print(chunk.content, end="", flush=True)`
```
技术细节：

- • **chunk** 对象结构：`class AIMessageChunk:
    content: str
    additional_kwargs: dict`

- • 网络优化：使用 Server-Sent Events (SSE) 协议

- • 延迟对比：流式 vs 非流式模式
首字节时间
适用场景
流式
200-500ms
实时交互
批处理
1-2s
数据分析

## 6. 生产环境建议
### 6.1 性能优化
```
`llm = ChatOpenAI(
    ...,
    max_retries=3,
    timeout=30.0,
    streaming=True
)`
```
### 6.2 监控集成
```
`from langsmith import Client

client = Client()
client.create_feedback(
    run_id="...",
    key="accuracy",
    score=0.9
)`
```
### 6.3 错误处理
```
`from tenacity import (
    retry,
    stop_after_attempt,
    wait_exponential
)

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=4, max=10)
)
def safe_invoke(input_text):
    return chain.invoke({"input": input_text})`
```
通过上面内容完成了基础的Python调用介绍

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