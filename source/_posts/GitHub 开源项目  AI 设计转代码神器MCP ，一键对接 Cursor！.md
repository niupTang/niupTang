---
title: "GitHub 开源项目 | AI 设计转代码神器MCP ，一键对接 Cursor！"
permalink: github-开源项目-ai-设计转代码神器mcp-一键对接-cursor
date: 2025-04-13 22:37:33
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天给大家推荐一款**让设计师和程序员狂喜的 AI 协作工具——Figma-Context-MCP**！它能将 Figma 设计稿的布局、样式信息实时同步给 AI 编程工具（如 Cursor），让 AI 像资深前端一样精准生成代码，从此告别“设计稿与代码不一致”的烦恼！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTs5FpXChbomnvLkj1Sv0xicPbkUeoo9JnBZgv0nrKSic7ibJd7aVwiaQ2DvA9pPWDyIP6vzEyQiaaZj9Q/640?wx_fmt=png&from=appmsg)

### **Figma-Context-MCP 的核心亮点**
- • **🎨 多框架支持**：无缝对接 React、Vue、Svelte 等主流框架，AI 生成的代码可直接融入项目。

- • **🔍 智能上下文提取**：自动解析 Figma 文件，提取关键布局信息（尺寸、间距、层级关系），过滤冗余数据，让 AI 专注核心逻辑。

- • **⚡ 极简配置**：通过标准化 MCP 协议与 Cursor 等工具集成，5 分钟完成环境搭建。

- • **🔒 本地化处理**：设计数据仅在本地流转，无需上传云端，保护商业隐私。

- • **🔄 动态协作**：设计稿更新后，AI 生成的代码自动同步调整，支持增量开发。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTs5FpXChbomnvLkj1Sv0xicIvVQrATVwPFUJynibctrA6EKAKBsnZR2ASoQzrD4987ibjdKzMyyvnAQ/640?wx_fmt=png&from=appmsg)

### **谁需要这款工具？**
- • **开发者**：用自然语言描述需求（如“按 Figma 稿实现登录页”），AI 自动生成结构清晰的代码。

- • **设计师**：设计稿修改后，无需手动标注，AI 直接识别变更并更新代码。

- • **产品经理**：快速验证设计可行性，缩短需求落地周期。

### **极速上手**
方式一：轻量级CLI启动（推荐大多数用户）`# 1. 全局安装MCP核心模块
npm install -g figma-developer-mcp

# 2. 配置Cursor的settings.json
{
  "mcpServers": {
    "Figma-MCP": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"]
    }
  }
}

# 3. 启动服务
npx figma-developer-mcp --figma-api-key=YOUR_KEY
}`### **注意事项**
- • **网络要求**：需保证 Figma 文件可访问，建议本地部署代理加速境外资源。

- • **首次使用**：需授权 Cursor 访问本地 MCP 服务端口。

- • **动态调整**：若 AI 生成结果偏差较大，可通过 `调整设计优先级` 等指令重新约束输出。

### **开源与生态**
Figma-Context-MCP 基于 **AGPL-3.0 协议**开源，开发者可定制以下功能：

- • **扩展设计工具**：支持 Sketch、Adobe XD 等平台（需修改解析逻辑）。

- • **接入更多 AI 客户端**：兼容 Claude、GPT-Engineer 等工具（参考 MCP 协议文档）。

- • **企业级部署**：结合内部设计规范库，生成符合公司标准的代码模板。

**项目地址**：
👉 https://github.com/GLips/Figma-Context-MCP

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

**DeepSeek相关**

# [DeepSeek V3可用的15种精美知识卡片提示词](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485862&idx=1&sn=181eb3edade40af73928e89cd40ea6ec&scene=21#wechat_redirect)
[DeepSeek + 可灵制作视频](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489186&idx=2&sn=7aca6f49514ef83e186fd6ec389be7ef&scene=21#wechat_redirect)

# [DeepSeek 快速实现Word 文档排版](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485856&idx=1&sn=72851d4f4f86dee7f9f9fa0c1f8ee834&scene=21#wechat_redirect)
[DeepSeek + coze 做飞书知识库](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489249&idx=2&sn=fc09575fef051ba72b3bcd14efb25d49&scene=21#wechat_redirect)

[GitHub 8.5k Star Cherry Studio：多语言模型接入神器，DeepSeek 本地知识库也能轻松搞定！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489104&idx=1&sn=a61ab12bd428cbb224fb8a1d1909fb78&scene=21#wechat_redirect)

每日更新，期待与你一起成长

欢迎围观AIP成长的副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)