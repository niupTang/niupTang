---
title: 3 分钟，把一篇 3000 字长文变成“脱口秀”——开源神器 Twocast 实战指南
date: 2025-07-12 23:09:17
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！前面介绍了一个开源的 **MOSS-TTSD ，今天又看到了一个 播客平台，Twocast**——一个 GitHub 上 3k+ star 的「**双人 AI 播客生成器**」。

**它能把任何文字、网页、PDF，3~5 分钟**生成男女双主持的脱口秀，还能直接下载 MP3。

**
**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSp3OS0z4Apa9TtlWeRLdxic5w5S3UxlB9JoOwrYpOnwvZgOs0D8j662taFEP8Bib3p05KJsE3SEpfw/640?wx_fmt=png&from=appmsg)

## 30 秒看懂 Twocast 的 4 个绝活
功能
牛皮糖一句话翻译
输入任意主题/URL/PDF/TXT
复制粘贴就行，不用排版
内置 3 大 TTS 引擎
Fish 声音最自然，Gemini 最稳，Minimax 最省
一键生成 3~5 min 播客
比我自己录音 3 小时还像人
前端 Next.js + 后端 Node，100% 开源
想改 UI、加片头片尾，直接魔改
## 03｜把 Twocast 跑起来
### 🔸 姿势 A：懒人最快——在线版
- 1. 打开 twocast.app

- 2. 把文章链接粘进去

- 3. 选“男声 + 女声”，点“Generate”

- 4. 3 分钟后，MP3 + 大纲 + 脚本全部打包下载

一篇 Hacker News 热榜，生成 4′12″，男女对话毫无 AI 腔。

### 🔸 姿势 B：本地 Docker，5 行命令
`# 拉依赖
docker run -d -p 8080:8080 bespaloff/textract-rest-api:v4.0.2
docker run -d -p 8081:3000 kazhar/ffmpeg-api

# 起项目
git clone https://github.com/panyanyany/Twocast.git
cd Twocast && cp .env.example .env
# 把 TTS/LLM Key 填进 .env
npm i && npm run dev`

Twocast 的语音好不好听，90 % 取决于 API Key 填得对不对。

### 第 1 档：Fish Audio（免费额度 + 声音最自然）
### 第 2 档：Minimax（可选，国内网络友好）
### 第 3 档：Google Gemini（土豪专属，音色最稳）

最近发现 AI 音频上的突破，要更多的 口播开源项目出来了！AI 好是好，就是有点费钱！！

### 结尾

在这个信息爆炸的时代，**“好内容”不是缺少，而是太难被看见**。

Twocast 给了我们一个机会——

让你不再只是音频的聆听者，而是知识的“再创造者”；
让冷门的英文播客，被更多中文用户轻松接触；

你只需要一个播客、一点创意，剩下的交给 Twocast。

项目地址：

https://github.com/panyanyany/Twocast

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