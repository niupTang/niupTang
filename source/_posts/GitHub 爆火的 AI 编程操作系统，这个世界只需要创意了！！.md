---
title: "GitHub 爆火的 AI 编程操作系统，这个世界只需要创意了！！"
permalink: github-爆火的-ai-编程操作系统-这个世界只需要创意了
date: 2025-08-22 23:40:18
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

大家好，我是牛皮糖！AI 编程又起热度， 阿里悄悄的发布 Qcode 的AI 编程工具。github 开源前沿的项目——Archon。 AI 编程助理的指挥中心，今天就通俗易懂地帮大家拆解一波。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR3xFhqx1QcHhHaw3X4o9XKrdevMz3fyVjqszbQVCUqSRJMGWW5c7mpS35ExPKCpq8XxJ7k6lhHKA/640?wx_fmt=png&from=appmsg)

coleam00/Archon 是一个专为 AI 编码助手设计的“操作系统”（当前处于 Beta 版本），核心定位是作为 AI 编码助手的指挥中心，既为用户提供知识、上下文与任务管理的简洁界面，也为 AI 编码助手提供 **Model Context Protocol (MCP) 服务器**，实现多助手协同与自定义知识库调用，最终提升 AI 驱动编码的输出质量。

## 一、核心定位与价值
Archon 颠覆了早期“生成其他 AI 智能体的工具”定位，升级为一体化 AI 编码协作环境，核心价值体现在两方面：

- • **对用户**：提供可视化界面，集中管理项目的知识库（文档、网页内容）、任务流程与协作进度，无需在多个工具间切换。

- • **对 AI 编码助手**：通过 MCP 服务器打通多助手协同能力，支持 Claude Code、Cursor、Kiro、Windsurf 等工具接入，让 AI 可直接调用用户自定义的知识库、执行任务管理逻辑。

无论用户开发新项目、维护现有代码库，其知识管理与任务协同能力都能适配各类 AI 编码场景。

## 二、核心功能模块
Archon 围绕“知识管理、AI 集成、项目协作”三大核心场景设计功能，覆盖从信息收集到 AI 协同编码的全流程：

### 1. 知识管理（Knowledge Management）
实现“多来源信息聚合 + 智能检索”，让 AI 助手精准获取上下文：

- • **智能网页爬取**：自动识别并爬取整站文档、站点地图或单个页面，无需手动复制内容。

- • **多格式文档处理**：支持上传 PDF、Word、Markdown、TXT 等文件，通过“智能分块”技术优化信息存储结构。

- • **代码示例提取**：自动识别文档中的代码片段并建立索引，方便 AI 助手快速调用参考代码。

- • **向量搜索（Advanced RAG）**：基于语义嵌入的高级检索策略，支持混合搜索、结果重排序（Reranking），确保 AI 获取最相关的知识。

- • **来源分类管理**：按信息来源、类型、标签对知识分类，支持快速筛选与定位。

### 2. AI 集成（AI Integration）
打破 AI 助手“信息孤岛”，实现标准化协同：

- • **MCP 协议支持**：通过 MCP 服务器（Model Context Protocol）接入所有兼容 MCP 的 AI 客户端，提供 10 种核心工具（含 RAG 查询、任务管理、项目操作）。

- • **多 LLM 兼容**：支持 OpenAI、Ollama、Google Gemini 等主流模型，用户可在界面中自由切换并配置 API 密钥。

- • **实时流输出**：AI 助手的响应以实时流形式展示，支持进度跟踪，避免等待全量结果。

### 3. 项目与任务管理（Project & Task Management）
将知识与任务深度绑定，适配结构化开发流程：

- • **层级化项目结构**：支持“项目 → 功能 → 任务”的多层级组织，符合团队开发逻辑。

- • **AI 辅助创建**：通过集成的 AI 智能体自动生成项目需求文档与任务清单，减少手动规划成本。

- • **文档版本控制**：支持文档协作编辑与版本管理，追踪内容修改历史。

- • **实时进度跟踪**：全项目活动的状态更新实时同步，团队成员可随时掌握进展。

### 4. 实时协作（Real-time Collaboration）
保障多用户、多服务的高效协同：

- • **WebSocket 实时更新**：网页爬取、文档处理、AI 操作的进度通过 WebSocket 实时推送到前端，无需手动刷新。

- • **多用户支持**：多人可共同维护知识库与项目任务，适合团队协作场景。

- • **后台异步处理**：耗时操作（如大文档解析、批量爬取）在后台执行，不阻塞前端界面。

- • **服务健康监控**：内置服务状态检查与自动重连机制，减少运维成本。

## 三、技术架构
Archon 采用**微服务架构**，各模块职责清晰、独立可扩展，技术栈与通信方式如下：

### 1. 架构图
`┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend UI   │    │  Server (API)   │    │   MCP Server    │    │ Agents Service  │
│                 │    │                 │    │                 │    │                 │
│  React + Vite   │◄──►│    FastAPI +    │◄──►│    Lightweight  │◄──►│   PydanticAI    │
│  Port 3737      │    │    SocketIO     │    │    HTTP Wrapper │    │   Port 8052     │
│                 │    │    Port 8181    │    │    Port 8051    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │                        │                        │
         └────────────────────────┼────────────────────────┼────────────────────────┘
                                  │                        │
                         ┌─────────────────┐               │
                         │    Database     │               │
                         │                 │               │
                         │    Supabase     │◄──────────────┘
                         │    PostgreSQL   │
                         │    PGVector     │
                         └─────────────────┘`### 2. 核心服务详情
服务（Service）
代码位置
核心用途
关键技术/工具
默认端口
前端界面
`archon-ui-main/`提供可视化 dashboard 与操作入口
React、TypeScript、TailwindCSS、Socket.IO 客户端
3737
API 服务
`python/src/server/`核心业务逻辑（爬取、文档处理等）
FastAPI、Socket.IO（广播）、AI/ML 操作
8181
MCP 服务器
`python/src/mcp/`MCP 协议接口，对接 AI 客户端
轻量 HTTP 封装、会话管理、10 种 MCP 工具
8051
Agents 服务
`python/src/agents/`托管 PydanticAI 智能体
文档处理智能体、RAG 智能体、流响应
8052
数据库
-
存储知识、任务、用户数据
Supabase（PostgreSQL + PGVector）
-
### 3. 通信方式
- • **HTTP 接口**：服务间同步通信（如前端调用 API 服务、MCP 服务器对接 AI 客户端）。

- • **Socket.IO**：前端与 API 服务的实时异步通信（如爬取进度更新）。

- • **MCP 协议**：AI 客户端与 MCP 服务器的通信，支持 SSE（Server-Sent Events）或标准输入输出（stdio）。

- • **无直接依赖**：各服务独立部署，无共享代码，降低耦合度。

## 四、快速部署指南
Archon 基于 Docker 部署，需提前准备依赖，步骤如下：

### 1. 前置条件
- • Docker Desktop（确保 Docker Compose 可用）。

- • Supabase 账号（免费 tier 或本地部署均可，需获取“ legacy 服务密钥”——较长的那类密钥）。

- • LLM API 密钥（OpenAI、Gemini 或 Ollama，默认使用 OpenAI）。

### 2. 部署步骤
- 1. **克隆仓库**：`git clone https://github.com/coleam00/archon.git
cd archon`

- 2. **配置环境变量**：```
`# 复制示例配置文件
cp .env.example .env
# 编辑 .env，填入 Supabase 信息
# SUPABASE_URL=https://你的项目.supabase.co
# SUPABASE_SERVICE_KEY=你的 legacy 服务密钥`
```
（可选）若需启用 RAG 重排序功能，取消 `python/requirements.server.txt` 中第 20-22 行的注释（注意：会增大容器体积）。

- 3. **初始化数据库**：

- • 进入 Supabase 项目的「SQL Editor」，复制 `migration/complete_setup.sql` 内容并执行，创建所需表与规则。

- 4. **启动服务**：```
`# 构建并启动所有微服务（后台运行）
docker-compose up --build -d`
```

- 5. **配置 API 密钥**：

- • 访问前端界面：`http://localhost:3737`。

- • 进入「Settings」，选择 LLM/嵌入模型提供商，填入 API 密钥（如 OpenAI Key）。

- 6. **测试功能**：

- • 爬取网页：「Knowledge Base」→「Crawl Website」，输入测试 URL（如 `https://ai.pydantic.dev/llms-full.txt`）。

- • 上传文档：「Knowledge Base」→ 上传 PDF 测试。

- • 对接 AI 助手：「MCP Dashboard」复制连接配置，填入 AI 客户端（如 Claude Code）。

整体来说就是把你的电脑系统作为一个 AI 编程控制器，一般不建议大家尝试安装，当然用虚拟机随意，要不然安装了需要重新装系统，开发版bug 挺多的。

未来 AI 能够完整的控制电脑了，那么剩下的只有创意了。

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