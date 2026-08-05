---
title: "GitHub 开源项目：MCP Registry——AI工具生态的「应用商店�?"
permalink: "github-开源项�?mcp-registry-ai工具生态的-应用商店"
date: 2025-05-22 22:59:21
categories:
  - 开源项目
tags:
  - GitHub
  - MCP
  - 自动化
  - 开源项目
cleanup_status: needs_review
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮�?! MCP 作为最近超级火�?AI 接口�?但是在应用上和合集上并没有什么丝滑的落地�?

这款�?GitHub 上刚刚出炉的 **MCP Registry，是Model Context Protocol（MCP）生�?*的核心组件�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQOdIXCGibGz002oOqd1aJuv61cWZuqW0BaKibXCyT2HIINSQ3VfG41Bg348GWEor0zt0sWePfPCF5Q/640?wx_fmt=png&from=appmsg)

**
**

这个开源项目如同AI工具界的「应用商店」，为开发者提供统一的MCP服务器注册与发现服务，GitHub已获 **600 Stars**，是构建AI自动化工作流的关键基础设施�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQOdIXCGibGz002oOqd1aJuv37VwCr3XGv6HckiaSIV2fWhCqbQaAZjicEiavFsdD9Kyj0TnshM5TAZjw/640?wx_fmt=png&from=appmsg)

# **MCP Registry 是什么？**
MCP Registry 是一�?*社区驱动的MCP服务器注册中�?*，基于Go语言开发，采用MIT协议开源。它通过标准化API管理各类MCP服务器的元数据（如功能描述、访问地址等），让AI模型能快速发现和调用所需工具，解决「AI工具碎片化」的痛点�?

### **核心价�?*
🔌 **统一接口**：标准化MCP服务器的注册与查询流程，避免重复开发适配层�?
🌐 **生态互�?*：集成GitHub、Slack�?00+预构建服务，形成开放工具网络�?
⚡�?*性能优化**：支持MongoDB和内存数据库，单节点可处�?0�? QPS的查询请求�?

# **核心功能**
### 1. **服务器注册与管理**
- �?提供RESTful API实现MCP服务器的CRUD操作（如`POST /v0/servers`注册新服务）�?

- �?示例：注册一个GitHub自动化MCP服务器，描述其代码仓库管理、Issue处理等能力�?

### 2. **动态服务发�?*
- �?开发者可通过`GET /v0/servers`分页查询可用服务，支持按功能过滤（如`?type=git`）�?

- �?响应示例：`{
  "servers":[{
    "id":"123e4567-e89b-12d3-a456-426614174000",
    "name":"GitHub-MCP-Server",
    "url":"https://github.com/mcp-servers/github",
    "description":"Automate repo management & PR workflows"
}],
"metadata":{"next_cursor":"..."}
}`

### 3. **健康监控**
- �?内置`GET /v0/health`端点，实时检测服务可用性�?

### 4. **多环境适配**
- �?支持Docker快速部署（`docker compose up`），也兼容原生Go编译运行�?

# **应用场景**
### 1. **AI自动化开�?*
- �?Claude Desktop通过Registry发现本地文件系统MCP服务器，实现「用自然语言整理桌面」�?

### 2. **企业级工具链整合**
- �?将内部数据库、CRM系统注册为MCP服务，供LLM统一调用，降低集成成�?5%�?

### 3. **跨模型协�?*
- �?开发者A编写的「利息计算工具」注册后，可被开发者B的DeepSeek模型直接调用�?

# **快速部署指�?*
### 1. **依赖准备**
- �?Go 1.18+、MongoDB（或Docker）�?

### 2. **启动服务**
```
`# Docker方式（推荐）
docker build -t registry .
docker compose up  # 自动启动MongoDB和Registry服务`
```
### 3. **调用API**
```
`# 查询可用服务
curl http://localhost:8080/v0/servers?limit=10`
```
**GitHub地址**�?
👉 https://github.com/modelcontextprotocol/registry

### **结语**
MCP Registry 更多的是 MCP 的一个仓库，以后通过命令直接从仓库中获取对应�?MCP 服务，要调用 MCP 和调用组件库一样简单�?

�?AI 时代中，我们都是行者，我们不知道彼岸在哪里，也不知道终点在哪里 。但可以肯定的是我们都是历史的见证者�?

若终点注定是星辰，那么遇见便是星火；若彼岸永不可达，那么同行本身已是答案�?

遇见既是机遇�?

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
�? [ithub 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

**DeepSeek相关**

# [DeepSeek V3可用�?5种精美知识卡片提示词](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485862&idx=1&sn=181eb3edade40af73928e89cd40ea6ec&scene=21#wechat_redirect)
[DeepSeek + 可灵制作视频](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489186&idx=2&sn=7aca6f49514ef83e186fd6ec389be7ef&scene=21#wechat_redirect)

# [DeepSeek 快速实现Word 文档排版](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485856&idx=1&sn=72851d4f4f86dee7f9f9fa0c1f8ee834&scene=21#wechat_redirect)
[DeepSeek + coze 做飞书知识库](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489249&idx=2&sn=fc09575fef051ba72b3bcd14efb25d49&scene=21#wechat_redirect)

[GitHub 8.5k Star Cherry Studio：多语言模型接入神器，DeepSeek 本地知识库也能轻松搞定！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489104&idx=1&sn=a61ab12bd428cbb224fb8a1d1909fb78&scene=21#wechat_redirect)

每日更新，期待与你一起成�?

欢迎围观AIP成长的副业知识星�?

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)