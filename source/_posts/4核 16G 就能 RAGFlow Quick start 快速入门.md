---
title: 4�?16G 就能 RAGFlow Quick start 快速入�?
date: '2026-01-04T16:26:13.735766'
updated: '2026-01-05T23:18:09.243172'
tags: []
categories: []
cover: null
---

大家好，我是牛皮糖！github 上面得到AI 项目太火了，而火爆了的就是RAG（Retrieval-Augmented Generation）检索增强生成�?

    今天要介绍的主角是上次说到的RAGFlow ，以文档解析为主。RAGFlow 是一个基于深度文档理解的开�?RAG（检索增强生成）引擎。当�?LLMs集成时，它能够提供真实的问答功能，并得到来自各种复杂格式数据的有根据的引用的支持�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTYsxia87lodwCaoKLdQVTm655LJEaYVPkMs6Kej9ID7pBlFkIpLCfXfJKNvaxUk1jTS2RMmon7jEQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    这是RAGFlow 的架构图，可以看到这个首先提出问�?Questions),到问题解析，知识库解析，文档解析，然后Chunk，最后去进行大模型交互，返回答案�?

- 启动本地 RAGFlow 服务器�?

- 创建知识库�?

- 干预文件解析，以基于您的数据集建�?AI 聊天�?

硬件配置�?

    CPU �?4 �?

    内存 �?16 GB;

    磁盘�?50 GB;

    Docker �?24.0.0 & Docker Compose �?v2.26.1.

安装流程�?

clone 仓库

- 
`git clone https://github.com/infiniflow/ragflow.git`

通过docker 安装对应镜像

- 
- 
`cd ragflow/docker``docker compose up -d`
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTH5emicrPy5kiagSR89IpeeIQjxKcxibG54ibefEWdcXiapU8RkvcocPFjwx81vtA6AZG76jcyW2jcrgA/640?wx_fmt=png&from=appmsg)

安装完成后配置大模型，可以先选择的大模型有很�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTH5emicrPy5kiagSR89IpeeIhSrnR4YmxyLDqBfpHCN1UwuRnUTESxxZUndMPQ7mnnUh84EaLko4ag/640?wx_fmt=png&from=appmsg)

这里需要配置对应的API-Key,这些模型可以选择自己部署也可以选择用线上的，例如DeepSeek 开放平台 https://platform.deepseek.com/usage

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTH5emicrPy5kiagSR89IpeeInfHzqpKibQZbHNNdFxvsiaC0loyibviazTpNwaRSQoLN5ngRpB5L7uXrCA/640?wx_fmt=png&from=appmsg)

这些平台都有免费的额度供食用�?

**创建知识库：**

您可以将文件上传�?RAGFlow 中的知识库，并将它们解析为数据集。知识库实际上是数据集的集合。RAGFlow 中的问答可以基于特定的知识库或多个知识库。RAGFlow 支持的文件格式包括文档（PDF、DOC、DOCX、TXT、MD）、表格（CSV、XLSX、XLS）、图片（JPEG、JPG、PNG、TIF、GIF）和幻灯片（PPT、PPTX）�?

     这样可以创建一个知识库，在知识库里面可以随意上传上面所示的文件�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTH5emicrPy5kiagSR89IpeeIoIz04YR5oiaGUz4J4CjMNzXcxfTQbnZZAqGuXFCRvqfK5bRpacicSkQw/640?wx_fmt=png&from=appmsg)

在知识库上传文件后需要对于文件进行解析，解析成功才能进行对话，同时还可以对于文件进行分批查看切片处理�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTH5emicrPy5kiagSR89IpeeIXH0aCy2I02OmXiauqISjr4U2NCAwJibAicFpaMKIE2RrvHDllKhQmPCTA/640?wx_fmt=png&from=appmsg)

RagFlow 对于PDF的识别可能不是十分准确需要对数据进行修改，需要双击数据集的名称进行数据对比�?

当知识库创建完成后创建一个聊天，创建聊天的时候一定要选择对应的知识库，否则就不能回答

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTH5emicrPy5kiagSR89IpeeIwqVdN86ibxWwDddCzEbInQQ2RSib3TOCCM4NqMEKOUDEMoo43EFQKOag/640?wx_fmt=png&from=appmsg)

GitHub开源地址:https://github.com/infiniflow/ragflow