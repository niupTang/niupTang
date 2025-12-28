---
title: "24小时躺赚播放量！UP主直播神器：自动录播+AI切片+投稿一条龙"
permalink: 24小时躺赚播放量-up主直播神器-自动录播-ai切片-投稿一条龙
date: 2025-06-14 22:44:19
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

•  [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！昨天有朋友问我有没有可以直播智能切片的开源项目，今天给大家分享一个直播流程监控 —— timerring/bilive 是一个专注于 **B站（哔哩哔哩）直播全流程自动化**的开源工具，支持从直播录制、弹幕处理、字幕生成到视频切片、投稿的一站式处理。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRneFwUgLm7bnTNVDqwcMA2Ko4uxo8gcgKia8y0lJpPsg879Ya2icHUPVSY5ZyHYccrTchKsicIqcTnw/640?wx_fmt=png&from=appmsg)

### 🎯 一、项目定位
面向B站直播场景，实现 **7×24小时无人值守** 的自动化处理流程，涵盖内容采集、AI智能处理到成品发布全链条。目标用户包括个人UP主、内容运营团队及技术研究者。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRneFwUgLm7bnTNVDqwcMA2DmGplVPjgBY5uiabFXSZnzYZZX95Bn4rkGfVTYZWLKCo4KUFfv4reibQ/640?wx_fmt=png&from=appmsg)

### ⚙️ 二、核心功能
- 1. **自动化录制与弹幕处理**

- • 多房间并发录制：同时监听多个直播间，录制视频流及弹幕（含付费留言、礼物信息）。

- • 弹幕渲染：将XML弹幕转换为ASS字幕文件，自适应分辨率并渲染到视频中。

- 2. **智能内容增强**

- • **字幕生成**：集成OpenAI Whisper模型，自动识别语音生成字幕（需Nvidia显卡）。

- • **精彩切片**：基于弹幕密度定位高能片段，结合多模态大模型（如GLM-4V、Gemini 1.5 Pro）自动生成标题与封面。

- 3. **高效资源管理**

- • 自动合并分段视频：修复因网络中断或直播连线导致的视频碎片。

- • 空间优化：上传后自动删除本地文件，减少存储占用。

- 4. **一键投稿**

- • 支持B站多P投稿，自动填充标题、标签（通过B站搜索接口抓取热门标签）及分区。

### 🚀 三、技术亮点
- • **低硬件兼容性**：

- • 无GPU模式下，仅需单核CPU+2GB内存即可运行（实测支持1080P录制）。

- • 支持x86/ARM架构，适配老旧设备（如10年前的电脑）。

- • **AI集成深度**：

- • 整合Whisper（语音识别）、GLM-4V（视频理解）、Stable Diffusion（封面生成）等15+模型。

- • **流水线架构**：

- • 多任务并行处理（如录制与渲染同步），直播结束半小时内可发布录播。

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRneFwUgLm7bnTNVDqwcMA2I09egzlxKicGVGA6rsD2wSZorF79BsB2Mj8cRxmegAwhrtibmx2ibOfibA/640?wx_fmt=png&from=appmsg)

### 💻 四、部署要求
**配置类型****最低要求****推荐场景****无GPU模式**单核CPU + 2GB内存
720P录制、基础弹幕渲染
**有GPU模式**4核CPU + T4显卡
4K处理、字幕生成、AI切片
**网络带宽**≥3Mbps
≥10Mbps（确保上传时效）
### 📥 五、安装与配置
- 1. **基础部署**：`git clone --recurse-submodules https://github.com/timerring/bilive.git
cd bilive
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt`

- 2. **关键配置**（示例）：

- • **字幕生成**：设置`[asr] method = "deploy"` 并选择Whisper模型大小。

- • **切片规则**：启用弹幕密度切片，指定时长和标题生成模型（如Gemini）。

- 3. **安全登录**：

- • 通过`bilitool`扫码登录B站，生成加密存储的Cookie凭证。

- 

### 功能总结速览
**类别****能力****技术/特性****录制**多房间并发、弹幕捕获
低CPU占用、断点续传
**处理**弹幕渲染、字幕生成、自动切片
Whisper/GLM-4V多模态AI
**投稿**自动填标签订阅、多P发布
B站搜索接口整合
**硬件**无GPU支持、跨平台（Win/Linux）
ARM/x86兼容
项目持续迭代中，计划扩展**自适应码率调节**和**分布式集群部署**等进阶功能。适合需长期稳定录制B站直播的用户，但需严格遵守平台版权规则。

详细代码及更新见 GitHub项目页面。https://github.com/timerring/bilive

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