---
title: "GitHub 5.0k Star 开源项目：AI 逆向工程神器 GhidraMCP"
permalink: github-5-0k-star-开源项�?ai-逆向工程神器-ghidramcp
date: 2025-05-19 22:18:35
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！不知道有没有逆向大佬，对�?*Ghidra—�?***GhidraMCP**，它�?AI 大模型（�?Claude）能够自主操�?Ghidra 进行逆向工程分析，大幅提升二进制安全研究的效率�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQPria3Wx9SmcBRQWIyhxFAc4Zl5FiabicFV1wHVnEXj7Zibqh3dDMzQ8sGnTR8ib4aHRre7ibndPsauR1w/640?wx_fmt=png&from=appmsg)

### **GhidraMCP 是什么？**
GhidraMCP 是一个基于�?*模型上下文协议（MCP�?* 的开源项目，允许 AI 大模型直接调�?Ghidra（NSA 开发的逆向工具）进行自动化逆向分析。它�?Ghidra 的反编译、符号分析、控制流分析等功能封装成 API，让 AI 可以像人类工程师一样操作逆向工具�?

### **核心特点**
✅�?*AI 自动化逆向**：支�?Claude�?ire �?AI 客户端，通过自然语言指令完成反编译、变量重命名、漏洞挖掘等任务�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQPria3Wx9SmcBRQWIyhxFAc3ibH8HMhJtCwWRNer5WpwLVk8n7Ss6vMcE2FyReGdLjGYAHUN8hMTBA/640?wx_fmt=png&from=appmsg)

✅�?*结构化信息提�?*：自动导出函数列表、类定义、导�?导出表，并生成可视化分析报告�?

✅�?*跨平台兼�?*：支�?Windows、Linux、macOS，适配 Ghidra 10.2+ 版本�?
✅�?*安全沙箱机制**：所�?AI 操作均在隔离环境执行，防止恶意代码逃逸�?

# **GhidraMCP 能做什么？**
### **1. 恶意软件分析**
- �?自动识别可疑 API 调用链，生成带注释的反编译报告，比人工分析快 10 倍�?

- �?示例：检测勒索软件的加密函数，并标注关键跳转逻辑�?

### **2. 固件漏洞挖掘**
- �?批量分析 IoT 设备固件，自动识别缓冲区溢出、命令注入等漏洞�?

- �?结合符号执行技术，生成 PoC 利用脚本�?

### **3. 软件逆向辅助**
- �?自动重命名变�?函数（如 `sub_401000` → `encrypt_data`），提升代码可读性�?

- �?可视化类继承关系，快速理解复杂软件架构�?

# **快速上�?GhidraMCP**
### **安装步骤**
- 1. **安装 Ghidra 插件**

- �?从 GitHub Release 下载 ZIP 包�?

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQPria3Wx9SmcBRQWIyhxFAcVp3XwnleEynNemMVrNSVXF6phh0kSwd9j6QXNc5g7pgrNaPiawgc3Kg/640?wx_fmt=png&from=appmsg)

- �?�?Ghidra 中选择 `File �?Install Extensions` 导入，重启生效�?

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQPria3Wx9SmcBRQWIyhxFAcbYXH3VSAd1ZmOpvdoYiaEhla6rz7yvT7vCsLFBTlwMs0KI6SLCDl21A/640?wx_fmt=png&from=appmsg)

- 2. **配置 AI 客户�?*

- • Cline ：编辑 `mcp.json`，添�?MCP 服务配置�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQPria3Wx9SmcBRQWIyhxFAcN1C8DyS7l99pmAxJ01YMpCtwhDVpAX91m7t82hfZl1czUvSjfoJhww/640?wx_fmt=png&from=appmsg)

**
**
⚠️ **首次使用**：需授权 Ghidra 录制屏幕（仅�?GUI 模式）�?
⚠️ **性能优化**：建议限制并发任务数（≤ CPU 核心数），避免内存溢出�?
⚠️ **安全建议**：启�?TLS 加密 MCP 通信，防止中间人攻击�?

项目地址�?

👉 https://github.com/LaurieWired/GhidraMCP

### **结语**
GhidraMCP 代表�?AI + 逆向工程的未来，让安全研究员从重复性工作中解放，专注于核心漏洞挖掘。无论是分析恶意软件、审计固件，还是学习逆向技术，它都是你的绝佳助手！

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

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