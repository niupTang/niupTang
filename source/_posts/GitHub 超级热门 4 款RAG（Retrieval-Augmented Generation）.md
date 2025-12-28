---
title: "GitHub 超级热门 4 款RAG（Retrieval-Augmented Generation）"
permalink: github-超级热门-4-款rag-retrieval-augmented-generation
date: 2024-07-17 22:46:44
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

大家好，我是牛皮糖！github 上面得到AI 项目太火了，而火爆了的就是RAG（Retrieval-Augmented Generation）检索增强生成。

所谓 RAG，简单来说，包含三件事情。

第一，Indexing。即怎么更好地把知识存起来。

第二，Retrieval。即怎么在大量的知识中，找到一小部分有用的，给到模型参考。

第三，Generation。即怎么结合用户的提问和检索到的知识，让模型生成有用的答案。这三个步骤虽然看似简单，但在 RAG 应用从构建到落地实施的整个过程中，涉及较多复杂的工作内容。

### 1.1 网易开源的 QAnything
开源地址：https://github.com/netease-youdao/QAnything/tree/master

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTYsxia87lodwCaoKLdQVTm6VCHmGwheaficfnzAaAloDbAgeDcVvzD3Mx33MsOvWxpWaf4N7xYISdQ/640?wx_fmt=png&from=appmsg)

    基础架构图

致力于支持任意格式文件或数据库的本地知识库问答系统，可断网安装使用。任何格式的本地文件都可以往里扔，即可获得准确、快速、靠谱的问答体验。目前已支持格式: PDF，Word(doc/docx)，PPT，Markdown，Eml，TXT，图片（jpg，png 等），网页链接

### 1.2 RAGFlow 
开源地址：https://github.com/infiniflow/ragflow

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTYsxia87lodwCaoKLdQVTm655LJEaYVPkMs6Kej9ID7pBlFkIpLCfXfJKNvaxUk1jTS2RMmon7jEQ/640?wx_fmt=png&from=appmsg)

    基础架构图

       RAGFlow 是一款基于深度文档理解构建的开源 RAG（Retrieval-Augmented Generation）引擎。RAGFlow 可以为各种规模的企业及个人提供一套精简的 RAG 工作流程，结合大语言模型（LLM）针对用户各类不同的复杂格式数据提供可靠的问答以及有理有据的引用。

1.3 GPT-RAG

    开源地址：https://github.com/Azure/GPT-RAG

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTYsxia87lodwCaoKLdQVTm6ZAZpSZjWISJiacd9ydoQdXLdQ8ubUoQ72OPyvV5WEYic5znqcekO7z5A/640?wx_fmt=png&from=appmsg)

    基础架构图

        GPT-RAG提供了一个强大的架构，专为RAG模式的企业级部署量身定制。它确保了扎实的回应，并建立在零信任安全和负责任的人工智能基础上，确保可用性、可扩展性和可审计性。非常适合正在从探索和PoC阶段过渡到全面生产和MVP的组织。

1.4 Quivr - 你的第二个大脑，由生成式人工智能赋能

    开源地址：https://github.com/QuivrHQ/quivr 34.2k Star

Quivr以其先进的架构和功能，专为企业级应用而设计，确保了在RAG（响应、分析、生成）模式下的卓越性能。以下是Quivr如何满足您的需求：

快速响应：Quivr 的核心设计确保了快速的数据访问和处理，让您的业务决策更加迅速和准确。

深度分析：通过先进的分析工具，Quivr 帮助您洞察数据背后的模式和趋势，为决策提供坚实的数据支持。

智能生成：Quivr 不仅响应您的查询，还能生成深入的见解和报告，推动您的业务向前发展。

零信任安全：Quivr 建立在零信任安全原则之上，确保您的数据在任何时候都受到最高级别的保护。

负责任的人工智能：Quivr 采用负责任的人工智能实践，确保其功能和输出符合伦理和合规性标准。

高可用性：Quivr 的设计保证了系统的高可用性，减少停机时间，确保您的业务连续性。

可扩展性：随着您的业务增长，Quivr 能够灵活扩展，满足不断变化的需求。

可审计性：Quivr 提供全面的审计和日志功能，确保所有操作都是可追踪和透明的。

Quivr —— 专为那些追求卓越、安全和效率的企业而设计。立即体验 Quivr，让您的数据管理更加智能和高效。