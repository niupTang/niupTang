---
title: "Github 开源 NoteBookLM ， Google 直接被掀桌子"
permalink: github-开源-notebooklm-google-直接被掀桌子
date: 2025-12-14 23:13:32
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[AI 学习资料](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247487298&idx=1&sn=ed7a5c236ccfa4d53cf4bffb8406115f&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！不知道大家有没有用过Google 的NotebookML ， 反正我感觉是挺不错的，但是最近GitHub 有一个开源项目直接对标了 NoteBook。

Open Notebook 是一个开源的、以隐私为核心的 **Google NotebookLM 替代方案**。该项目旨在提供与 NotebookLM 相似的核心体验（如基于文档的问答、播客生成），但通过**本地部署**和**多模型支持**，解决了数据隐私和模型锁定的问题。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvrBBBcqzrvSclUDm7iaEV2aqTEcyT0qbyaHVvXhVYh9faAbfGG6S3DqJLBo7MURCOweU939QanaA/640?wx_fmt=png&from=appmsg)

### 1. 核心定位与价值
Open Notebook 的核心理念是**“你的研究，你的 AI，你的规则”**。 与 Google NotebookLM 必须将数据上传到云端且只能使用 Gemini 模型不同，Open Notebook 允许用户拥有完全的数据主权。它是一个**自托管（Self-hosted）**的知识管理系统，能够帮助用户组织、分析并通过 AI 从各种资料中获取洞察。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvrBBBcqzrvSclUDm7iaEV2z82o30jUrtc9YJoYVJKScjia40Z5g62QhjCg8OlVvRiboD9IE3ibMPc8w/640?wx_fmt=png&from=appmsg)

### 2. 核心功能亮点
 多模型支持（核心优势）这是 Open Notebook 最大的亮点之一。它不局限于单一模型，而是支持 **16 种以上的 AI 提供商**。

- • **商业模型：** 支持 OpenAI (GPT)、Anthropic (Claude)、Google (Gemini, Vertex AI)、Groq 等,。

- • **本地模型：** 完美支持 **Ollama** 和 **LM Studio**。这意味着你可以完全离线运行 AI，无需互联网连接即可处理敏感数据,。

- • **灵活性：** 用户可以根据任务需求混合使用模型，例如用便宜的模型做总结，用强大的模型（如 Claude 3.5 或 GPT-4）做推理。

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvrBBBcqzrvSclUDm7iaEV26bcWSTRaqrnhetdEOwj1UbrWz6iaQibqkOkibgq1kOVKK5eFmo246Fmew/640?wx_fmt=png&from=appmsg)

 高级播客生成器类似于 NotebookLM 的“Deep Dive”功能，但更加强大和灵活：

- • **多扬声器：** 支持 **1 到 4 位** 演讲者（Google 仅限 2 位）,。

- • **高度定制：** 用户可以自定义演讲者的姓名、音色（通过 OpenAI、ElevenLabs 或本地 TTS），甚至可以编辑生成的脚本,。

- • **风格选择：** 可选择对话风格（专业、幽默、热情）和格式（闲聊、采访、辩论）。

 多模态内容与管理项目采用了 **三栏式界面** 设计（源文件、笔记、聊天），支持多种格式的资料导入,：

- • **支持格式：** PDF、YouTube 视频链接、音频文件、Office 文档（Word/Excel）、纯文本以及整个网站链接,。

- • **智能索引：** 系统会自动对内容进行分块、嵌入（Embedding）和索引，支持全文搜索和向量搜索,。

- • **引文功能：** AI 的回答会附带行内引文（Citations），点击即可跳转到原文出处，确保研究的准确性。

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvrBBBcqzrvSclUDm7iaEV2BfGWUm8cA18evDMjnmibIv9ML31SlEw3GthbMKgIOzu6AJtYJCQib4jA/640?wx_fmt=png&from=appmsg)

 隐私与上下文控制提供了精细的隐私控制选项，用户可以决定 AI 能看到多少内容：

- • **Strict（严格）：** AI 仅能看到当前正在编辑的笔记。

- • **Notebook（笔记本级）：** AI 可以看到当前笔记本内的所有源文件。

- • **Global（全局）：** AI 可以跨所有笔记本搜索内容（需手动开启）。

### 3. 技术架构与部署
该项目基于现代化的技术栈构建，并且对开发者友好：

- • **前端：** Next.js / React（提供现代化的响应式 UI）。

- • **后端：** Python FastAPI。

- • **数据库：** SurrealDB（用于元数据）和 VectorStore（用于嵌入向量）。

- • **许可证：** 采用 **MIT 许可证**，允许自由修改、商用和分发,。

**部署方式：** 官方推荐使用 **Docker** 进行部署，安装过程相对简单，通常只需几分钟,。

- • **最低配置要求：** Docker 环境，至少 4GB 内存（推荐更多以获得更好性能），以及 2GB 磁盘空间。

- • **运行模式：** 支持完全离线运行（Air-gapped），适合对数据安全有极高要求的环境。

### 4. 与 Google NotebookLM 的对比
特性
Open Notebook
Google NotebookLM
**隐私****数据本地存储，完全私有**数据存储在 Google 云端
**AI 模型****16+ 种 (GPT, Claude, Llama等)**仅限 Google Gemini
**费用****免费 (或仅支付 API 费用)**免费 (但在 Google 生态内)
**播客功能****1-4 人，完全可定制**固定 2 人，不可定制
**API 访问****提供完整的 REST API**无 API
### 5. 总结
如果说 Google NotebookLM 是一辆配置豪华但不仅能由你驾驶的“租赁车”，那么 **Open Notebook 就是属于你自己的“私家车库”**。它不仅给了你同样的甚至更强大的功能（如多模型、定制播客），最重要的是它把**钥匙（数据主权）**交到了你手中。

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 5500 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

项目地址：

**https://github.com/GrowingGit/GitHub-Chinese-Top-Charts**

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)