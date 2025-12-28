---
title: "GitHub 开源项目 | WeClone：微信生态的克隆军团，打造聊天记录的大模型"
permalink: github-开源项目-weclone-微信生态的克隆军团-打造聊天记录的大模型
date: 2025-05-09 21:52:26
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！想要清除微信垃圾，但是有太多有用资料了，这个项目可以帮助你整理你的聊天记录并且打包成本地知识库。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQSZLTXqsxfOoibrhxlDFCEl7VCDoLYZ2pyL16KfSKByO1cAzXg2zEiaiadceqP8Q4n9uA6HIj8VTvVA/640?wx_fmt=png&from=appmsg)

### 一、核心功能
- 1. **全链路数字分身方案**：

- • 支持微信聊天记录导出、预处理、模型训练和部署

- • 可绑定微信/QQ/Telegram等平台实现对话机器人

- 2. **核心模块**：

- • **LLM微调**：使用Qwen2.5-7B-Instruct等模型，最低16GB显存（LoRA方法）

- • **语音克隆（WeClone-audio）** ：基于0.5B大模型克隆微信语音

- • **数据隐私保护**：自动过滤手机号/身份证/邮箱等敏感信息

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQSZLTXqsxfOoibrhxlDFCEl5fuEVjKaSe7WHXu06iadsh7aFkd2Vj0upwetGSEqrmHhWuFOcZNDvuA/640?wx_fmt=png&from=appmsg)

### 二、技术实现路径
- 1. **数据准备**：

- • 使用PyWxDump导出微信聊天记录为CSV

- • 数据预处理脚本自动合并连续消息（时间窗口策略）

- • 支持自定义禁用词过滤（blocked_words词库）

- 2. **模型训练**：

- • 默认配置：Qwen2.5-7B + LoRA微调

- • 显存优化：QLoRA方法最低4GB显存（2-bit量化）

- • 支持多卡训练（需安装DeepSpeed）

- 3. **部署方案**：

- • 通过AstrBot框架对接多平台

- • 需关闭工具调用功能（`/tool off all`）

- • 支持OpenAI兼容的API服务

### 三、硬件要求
方法
7B模型
14B模型
70B模型
LoRA
16GB
32GB
160GB
QLoRA(4-bit)
6GB
12GB
48GB
### 四、重要提示
- 1. **法律风险**：

- • 严禁用于窃取隐私/非法测试

- • 使用24小时内必须删除源码

- • 违反法律后果自负

### 五、操作流程图
`导出聊天记录 → 数据清洗 → 模型训练 → API部署 → 对接机器人平台
          (PyWxDump)  (QA生成器)  (LLaMA Factory)  (AstrBot)`**
**

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