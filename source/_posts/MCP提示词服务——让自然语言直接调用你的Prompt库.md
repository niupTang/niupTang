---
title: MCP提示词服务——让自然语言直接调用你的Prompt�?
date: 2025-05-24 22:16:11
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！

积累了一大堆Prompt，但经常想不起来用�?

每次用都需要复制粘贴，非常繁琐�?

是否可以把常用的Prompt也做成MCP，果真已经有大佬开源了这款产品

**MCP-Prompt-Server**。它通过MCP协议将零散的Prompt模板转化为可编程接口，让你用自然语言就能调用积累的Prompt库�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSnYaNtXE9Xewe4wdiboq73BB9DrJ4huva2tpK04yic2guEFu9A3cdzQOUOs6uKgzTteLhibMmEfy5yw/640?wx_fmt=png&from=appmsg)

# **为什么需要Prompt专用MCP�?*
### **传统Prompt管理的三大痛�?*
- 1. **碎片化存�?*：Prompt散落在代码注释、Notion文档甚至聊天记录中，难以系统化管理�?

- 2. **调用低效**：每次使用需手动复制粘贴，跨模型测试更需反复调整格式�?

- 3. **版本混乱**：团队协作时无法追踪修改历史，容易产生冲突�?

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSnYaNtXE9Xewe4wdiboq73B3TLk2VvzeLKOlZ2mttjsx0SWS2JtVhLLyD01B0c6TKD7KNek2Mb5PQ/640?wx_fmt=png&from=appmsg)

### **MCP-Prompt-Server的解决方�?*
- 

- 📦 **丰富的Prompt模板**：内置多种高质量Prompt，涵盖代码、写作、产品、知识卡片、网页生成、结构化总结等场景�?

- 🛠️�?*即插即用的MCP工具**：所有Prompt自动注册为MCP工具，支持参数化调用，适配主流编辑器�?

- 🔄 **热加载与管理**：支持一键reload，无需重启即可加载新Prompt�?

- 🧩 **极易扩展**：只需添加YAML/JSON文件即可扩展新功能，无需改动主程序�?

- 🏷️�?*支持多语言与多领域**：适合中英文内容、产品、教育、媒体、AI等多种应用�?

让AI基于正在浏览的内容，生成微信公众号标题�?
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSnYaNtXE9Xewe4wdiboq73Bw1x7EBmjZSbI6dbzkkKL5PibjpwgB096tcrNfjBlTrOdPKpNkfMARpA/640?wx_fmt=png&from=appmsg)

# **快速开�?*
### **1. 安装部署**
`git clone https://github.com/joeseesun/mcp-prompt-server.git
cd mcp-prompt-server
npm install  # 依赖Node.js 18+
npm start   # 启动服务默认端口8000`![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSnYaNtXE9Xewe4wdiboq73BcTnByGib0T9jkOk3pNznxbI4iabZJ8kOE2KQFFDWHDO0Xv0wxPxMviaVA/640?wx_fmt=png&from=appmsg)

### **3. 客户端集成示�?*
- •�?*Raycast**：配置MCP Server路径后，输入`@prompt 总结这篇新闻`�?

- •�?*Cursor**：修改`~/.cursor/mcp.json`添加服务，IDE内直接调用�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSnYaNtXE9Xewe4wdiboq73B8FviaY48DFAYNCHu4jNP1pczeeC5pFtxNY0GRKjwU8PhT5qdTcdHO3Q/640?wx_fmt=png&from=appmsg)

# **
**
**GitHub地址**�?
👉 原版 

https://github.com/gdli6177/mcp-prompt-server
👉 优化版�?

https://github.com/joeseesun/mcp-prompt-server

### **结语**
MCP-Prompt-Server将Prompt从“文本片段”升级为“可编程工具”，真正实现�?*积累即调�?*。无论是个人效率提升还是团队知识沉淀，这都是一个值得投入的基建项目�?

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
�? [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

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