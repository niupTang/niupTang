---
title: LangChain与Embeddings技术：构建高效RAG系统的核心组件
date: 2025-06-23 22:08:27
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

## 目录
- LangChain简介

- Embeddings技术概述

- 主流Embedding模型比较

- LangChain中的Embedding集成

- 实践案例：构建本地知识问答系统

- 总结与展望

## LangChain简介
LangChain作为当前最热门的开源RAG（Retrieval-Augmented Generation，检索增强生成）框架，正在重塑我们处理非结构化数据的方式。在RAG框架中，检索环节至关重要，而Embeddings技术则是实现高效检索的核心组件之一。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgauwvu5kaqMfL3urHP2Dq6mTQztOjghMkI2icicWHlRUTDozfQAkBZ7XAA/640?wx_fmt=png&from=appmsg)

RAG框架的工作流程通常包括：

- 文本预处理与分块

- 通过Embedding模型转换为向量表示

- 存储到向量数据库

- 查询时进行相似性检索

- 将检索结果输入生成模型

LangChain的独特价值在于它提供了标准化的接口，使开发者能够灵活组合不同的嵌入模型、向量数据库和LLM，构建端到端的智能应用。

## Embeddings技术概述
Embedding技术通过将离散的符号（如单词、句子）映射到连续的向量空间，使计算机能够理解和处理语义信息。这种表示方法具有几个关键优势：

- **语义保留**：语义相似的项在向量空间中距离相近

- **维度压缩**：将高维稀疏表示转换为低维稠密向量

- **跨模态能力**：同一空间可嵌入文本、图像、音频等多种数据类型

现代Embedding模型通常基于深度神经网络，特别是Transformer架构，能够捕捉复杂的上下文关系。

## 主流Embedding模型比较
模型名称
发布时间
核心特点
典型应用场景
Word2Vec
2013
基于浅层神经网络，CBOW/Skip-Gram架构
词语相似度计算，简单语义分析
GloVe
2014
基于全局词共现统计，结合矩阵分解
需要全局语义信息的任务
FastText
2016
引入子词(subword)概念，处理未登录词
多语言应用，拼写错误容忍
BERT
2018
双向Transformer，上下文相关表示
需要深层语义理解的任务
Sentence-BERT
2019
针对句子级语义优化的BERT变体
语义检索，文本匹配
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgaiajkWuVcUaNwgOTMckID0OZrnde1dFOVKIDdsyQH2DDzPG2oyfnOgNQ/640?wx_fmt=png&from=appmsg)

## LangChain中的Embedding集成
LangChain提供了统一的Embedding接口，支持多种后端实现：

`from langchain_community.embeddings import(
    HuggingFaceEmbeddings,
    OpenAIEmbeddings,
    CohereEmbeddings
)

# HuggingFace嵌入
hf_embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2",
    model_kwargs={'device':'cpu'},
    encode_kwargs={'normalize_embeddings':False}
)

# OpenAI嵌入
openai_embeddings = OpenAIEmbeddings(model="text-embedding-ada-002")

# Cohere嵌入
cohere_embeddings = CohereEmbeddings(model="embed-english-v2.0")
`![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgayB0Bownic7YPOhuTPIMlyqP8MEyPNnxKrU0dLCDQJVjMaAT2icoLia85Q/640?wx_fmt=png&from=appmsg)

关键配置参数：

- `model_name`：指定预训练模型

- `model_kwargs`：模型推理参数（如设备选择）

- `encode_kwargs`：编码过程参数（如归一化）

## 实践案例：构建本地知识问答系统
### 系统架构
- **数据层**：本地文本文件存储知识库

- **嵌入层**：Sentence-Transformers处理文本

- **存储层**：Chroma向量数据库

- **应用层**：LangChain编排处理流程

`
# -*- coding: utf-8 -*-
"""
LangChain RAG完整实现
基于本地文档构建问答系统
使用sentence-transformers/all-MiniLM-L6-v2嵌入模型
Chroma向量数据库存储
"""

import os
from dotenv import load_dotenv
from typing import List, Dict, Any

# 加载环境变量
load_dotenv()

# 设置国内镜像源（加速下载）
os.environ['HF_ENDPOINT']='https://hf-mirror.com'

# 1. 导入所需库
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.document_loaders import TextLoader
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.chat_models import ChatOpenAI
from langchain.schema import Document
import chromadb

classRAGSystem:
def__init__(self, config: Dict[str, Any]):
"""
        初始化RAG系统

        参数:
            config: 配置字典，包含:
                - document_path: 文档路径
                - embedding_model: 嵌入模型名称
                - persist_directory: 向量数据库存储路径
                - chunk_size: 文本分块大小
                - chunk_overlap: 分块重叠大小
                - llm_config: LLM配置
        """
        self.config = config
        self.llm = self._initialize_llm()
        self.embeddings = self._initialize_embeddings()
        self.vectorstore = self._initialize_vectorstore()
        self.retriever = self.vectorstore.as_retriever(
            search_type="mmr",
            search_kwargs={"k":3,"lambda_mult":0.5}
)
        self.chain = self._create_chain()

def_initialize_llm(self)-> ChatOpenAI:
"""初始化语言模型"""
return ChatOpenAI(
            api_key=os.getenv("OPENAI_API_KEY"),
            base_url=os.getenv("OPENAI_API_BASE"),
            model=self.config.get("llm_config",{}).get("model","gpt-3.5-turbo"),
            temperature=0.7,
            streaming=True
)

def_initialize_embeddings(self)-> HuggingFaceEmbeddings:
"""初始化嵌入模型"""
return HuggingFaceEmbeddings(
            model_name=self.config.get("embedding_model","sentence-transformers/all-MiniLM-L6-v2"),
            model_kwargs={'device':'cpu'},
            encode_kwargs={'normalize_embeddings':False}
)

def_initialize_vectorstore(self)-> Chroma:
"""初始化向量数据库"""
# 加载文档
        loader = TextLoader(self.config["document_path"], encoding="utf-8")
        documents = loader.load()

# 文本分块
        text_splitter = CharacterTextSplitter(
            chunk_size=self.config.get("chunk_size",1000),
            chunk_overlap=self.config.get("chunk_overlap",200)
)
        chunks = text_splitter.split_documents(documents)

# 创建向量存储
return Chroma.from_documents(
            documents=chunks,
            embedding=self.embeddings,
            persist_directory=self.config["persist_directory"],
            collection_name="knowledge_base"
)

def_create_chain(self):
"""创建处理链"""
# 定义提示模板
        template ="""你是一个专业的知识助手，请基于以下上下文回答问题。
        如果不知道答案，就说你不知道，不要编造答案。

        上下文:
        {context}

        问题: {question}
        回答:"""
        prompt = ChatPromptTemplate.from_template(template)

# 格式化检索结果
defformat_docs(docs: List[Document])->str:
return"\n\n".join(doc.page_content for doc in docs)

# 构建处理链
return(
{"context": self.retriever | format_docs,"question": RunnablePassthrough()}
| prompt
| self.llm
| StrOutputParser()
)

defquery(self, question:str)->str:
"""执行查询"""
return self.chain.invoke(question)

defsave_vectorstore(self):
"""保存向量数据库"""
        self.vectorstore.persist()

if __name__ =="__main__":
# 配置参数
    config ={
"document_path":"knowledge.txt",# 替换为你的文档路径
"embedding_model":"sentence-transformers/all-MiniLM-L6-v2",
"persist_directory":"db",# 向量数据库存储目录
"chunk_size":1000,
"chunk_overlap":200,
"llm_config":{
"model":"gpt-3.5-turbo"
}
}

# 初始化系统
    rag = RAGSystem(config)

# 交互式问答
print("知识问答系统已启动，输入'exit'退出")
whileTrue:
try:
            question =input("\n提问: ")
if question.lower()in["exit","quit"]:
                rag.save_vectorstore()
print("系统已退出，向量数据库已保存")
break

print("\n思考中...", end="")
            response = rag.query(question)
print(f"\n回答: {response}")

except KeyboardInterrupt:
            rag.save_vectorstore()
print("\n系统已退出，向量数据库已保存")
break
except Exception as e:
print(f"\n发生错误: {str(e)}")
continue

`![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR80FibIe325gricCQFrWcfgaoRBjSlI6GSatcCktvjTiaOibKeHTBplOnkZKXHAibw3CwWIfow6CiawSZg/640?wx_fmt=png&from=appmsg)

### 核心代码实现
```
`# 初始化组件
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# 文档处理
text_splitter = CharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
documents = text_splitter.split_documents(
    TextLoader("knowledge.txt").load()
)

# 向量存储
vectorstore = Chroma.from_documents(
    documents=documents,
    embedding=embeddings,
    persist_directory="db"
)

# 检索增强生成链
retriever = vectorstore.as_retriever()
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(),
    chain_type="stuff",
    retriever=retriever
)
`
```
### 性能优化技巧
- **分块策略**：

- 技术文档：500-1000字符，重叠200字符

- 对话记录：按对话轮次分块

- 代码文件：按函数/类分块

- **检索优化**：

`retriever = vectorstore.as_retriever(
    search_type="mmr",# 最大边际相关性
    search_kwargs={"k":5,"lambda_mult":0.5}
)
`
- **缓存机制**：

`from langchain.cache import SQLiteCache
import langchain
langchain.llm_cache = SQLiteCache(database_path=".langchain.db")
`
## 总结与展望
LangChain与Embeddings技术的结合为构建智能应用提供了强大基础。未来发展趋势包括：

- **多模态Embedding**：统一处理文本、图像、视频等数据

- **动态Embedding**：根据任务自适应调整向量表示

- **量化压缩**：减小模型大小同时保持性能

- **领域自适应**：针对垂直领域微调Embedding模型

通过合理选择Embedding模型和优化RAG流程，开发者可以构建出高效、准确的智能问答系统，将非结构化数据的价值最大化。