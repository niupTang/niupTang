---
title: "Cherry Studio MCP 协议调用全攻略！"
permalink: cherry-studio-mcp-协议调用全攻�?
date: 1970-01-01 08:00:00
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

  

**大家好，我是程序员太阳鸟�?*
最�?MCP 协议大火，作为开发者怎么能不试试？今天我就带大家在�?*Cherry Studio 1.1.17** 上实战调�?MCP，用自然语言直接操作 GitHub！无需复杂代码�? 分钟搞定自动化查询仓库、提�?Issue 等操作，效率直接起飞 🚀

### **🔥 什么是 MCP�?*
MCP（Model Control Protocol�?*不是高深技�?*，而是一�?*标准化接口协�?*，让 AI 能像人类一样操作各种工具（�?GitHub、Blender、arXiv 等）�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkNgibKd5WzjsiafsFokVCHYagibJXwhZAEicMUbBiccWHLbCmdrJPszg68dMg/640?wx_fmt=png&from=appmsg)

**核心优势�?*

- •�?*自然语言调用**：不用写 API 代码，直接说“给我查最�?3 �?PR�?

- •�?*工具无缝连接**：通过 MCP Server 桥接 1000+ 应用

- •�?*本地安全执行**：数据不经过第三方，隐私有保�?

### **�?实战目标**
�?Cherry Studio + MCP **自动查询 GitHub 仓库信息**，全程仅需�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkNC4uvibO0V3QIdg1oKghPn1V6qovsObwCIX9AsbsZ6XFxPic0WiapZXB5g/640?wx_fmt=png&from=appmsg)

- 1. 安装依赖（UV/Bun�?

- 2. 配置 GitHub MCP Server

- 3. 自然语言调用

- 

### **🛠�?5 分钟极速配�?*
**步骤 1：安装依�?*�?Cherry Studio **设置**中一键安装：

- •�?*UV**：MCP 协议运行�?

- •�?*Bun**：高性能 JS 工具�?

（安装完成后重启 Cherry Studio�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkNkf5iaicm1rUiaWLibbZdMAXWJgbTvfP7Ldc1PmNic17AucUUDQ9LpxjGUyA/640?wx_fmt=png&from=appmsg)

**步骤 2：获�?GitHub MCP Server**- 1. 访问 MCP 官方仓库 �?GitHub 搜索 `github-mcp-server`

- 2. 选择 **NPX 启动方式**（免部署�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkN6GtyCLHkY7icibBPKkNictsejP5LMfriawAS5Nf1k7gpAmoOQLb8aKgeSA/640?wx_fmt=png&from=appmsg)

**步骤 3：配�?GitHub 令牌**- 1. �?GitHub �?Settings �?Developer Settings 创建 **Personal Access Token**（勾选 `repo` 权限�?

- 2. 复制 Token，待会儿填入环境变量

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkNpEYcibeAFfmyicUDWoDNeyVpRSn4l3ZiblZyLaUgVZrVzdYy1dV4oiaarQ/640?wx_fmt=png&from=appmsg)

**步骤 4：连�?Cherry Studio**- 1. 打开 Cherry Studio **MCP 配置�?*

- 2. 填写参数�?

- •�?*类型**：`NPX`

- •�?*命令**：`github-mcp-server`

- •�?*参数**：按 Server 文档填写 

- •�?*环境变量**：添加 `GITHUB_TOKEN=你的Token`

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkNR0mHHjb9icia3ZkfUpRZMGdNKdGLiaKRJVURtr2KOJibWHKcjHpkMVo7WQ/640?wx_fmt=png&from=appmsg)

`
`

### **💡 自然语言调用示例**
�?Cherry Studio 聊天框输入：

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkNSugzYHZYNYib7S1kh4azoCicaSsTJ3vmxic7xmAG4EiaU1ZEoibYNibtT27g/640?wx_fmt=png&from=appmsg)

“查询用�?github�?trending 仓库，返回前 3 个�?

**AI 会自动完成：**

- 1. 调用 GitHub MCP Server

- 2. 获取仓库数据

- 3. 格式化返回结�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRjjwaJ97dOVP3L7j9FqGkNtmcuarAcFj6PLuwj5icQdhicATw1AMBwpJudNwNDAokEuCUq3VWqkNAw/640?wx_fmt=png&from=appmsg)

（还支持提交 Issue、查 PR 状态等，玩法自由探索！�?

### **⚠️ 避坑指南**
- •�?*Token 权限**：务必勾选 `repo`，否则无法查询私有仓�?

- •�?*网络问题**：首次运�?NPX 可能较慢，建议科学上�?

- •�?*中文兼容**：部�?MCP Server 对中文指令识别不佳，可尝试英文关键词

### **🚀 扩展玩法**
- 1. **学术助手**：接 arXiv MCP，自动抓取论�?

- 2. **自动化办�?*：连�?Notion MCP，管理任务清�?

- 3. **本地工具操控**：通过 Blender MCP �?AI �?3D 建模

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)

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