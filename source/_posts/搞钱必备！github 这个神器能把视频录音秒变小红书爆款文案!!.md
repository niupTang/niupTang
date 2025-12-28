---
title: "搞钱必备！github 这个神器能把视频/录音秒变小红书爆款文�?!"
permalink: 搞钱必备-github-这个神器能把视频录音秒变小红书爆款文�?
date: 2025-06-15 17:47:44
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [100 �?AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247490355&idx=1&sn=4e174520c5cba9308870a21bbec54570&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天介绍一�?Web 工具, 基于 AI 大模�? 一键将视频和音频转化为各种风格的文�? 无需登录注册, 前后端本地部署，以极低的成本体验 AI 视频/音频转风格文档服务�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQzdHm2TNj55Qic3DticTuBbsSwhaiaicEibDxGhJ4Fp61RLFNrjYjhicdZlHtVYJdUnxAseXBa9nMJIEoA/640?wx_fmt=png&from=appmsg)

**1****、核心功�?*

- 🔒 **隐私保护**：无需登录注册，任务记录保存在本地

- 💻 **前端处理**：采�?ffmpeg wasm 技术，无需本地安装 ffmpeg

- 🎯 **多种风格支持**：支持小红书/公众�?知识笔记/思维导图/内容总结等多种文档风格支持�?

- 🤖 **AI 对话**：支持针对视频内容进�?AI 二次问答�?

- 🎬 **支持字幕导出**: 结果一键导出为字幕文件�?

- 🎨 **支持自定�?Prompt**：支持在前端自定义配�?prompt�?

- 🐳 **一键部�?*：支�?Docker 一键部署�?

- 🔒 **支持设置访问密码**: 后端设置访问密码之后, 前端用户需要填写该密码才可以正常使用�?

**
**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQzdHm2TNj55Qic3DticTuBbsc5dA7mibofDrGMSjsoRQibSibM9wgiaaaDqzvLRGZFX1IUCFA26DwODq1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQzdHm2TNj55Qic3DticTuBbsFNt5KtvfXZqB4bn5PldcNlUkhbQiceJ8kcZe3e47ZlTCDFTFeXdvLpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQzdHm2TNj55Qic3DticTuBbsWfDCNfQZMbclC7XSB4SGaGdPSnaOLicOQgSOaQ4vaLPhhbvYvGianY6A/640?wx_fmt=png&from=appmsg)

### 🛠️�?*超详细安装教程（小白友好版）**
**一句话总结**：用Docker一键安装，3步搞定！无需复杂配置，全�?分钟�?

**📥 第一步：安装Docker（还没装的看这里�?*- 1. **Windows/Mac用户**�?

- �?官网下载Docker Desktop

- �?安装后打开软件，右下角看到小鲸鱼图标🐳就说明成功了！

- 2. **Linux用户**（Ubuntu为例）：`sudo apt update && sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker`

💡 **验证安装**：命令行输入 `docker --version`，能显示版本号就OK�?

**🚀 第二步：一键部署AI视频助手**- 1. **打开命令�?*（Windows用PowerShell，Mac/Linux用终端）

- 2. **复制粘贴以下代码**（直接回车运行）：`git clone https://github.com/hanshuaikang/AI-Media2Doc.git
cd AI-Media2Doc
make docker-image && make run`

- �?第一次运行会下载依赖，耐心等待（约5-10分钟，取决于网络）�?

- �?看到 `Server started on http://0.0.0.0:8000` 就是成功了！

**🌐 第三步：打开浏览器使�?*- 1. 访问 **http://localhost:8000**

- 2. **无需登录�?* 直接上传视频/音频文件（支持MP4、MP3等常见格式）

- 3. 选择文档风格（小红书/公众�?思维导图等），点击“开始转换�?

⏳�?*等待3-10分钟**（视视频长度而定），就能下载生成好的文档啦！

### 💡 **常见问题速查**
**问题****解决方法**`make`命令报错
安装make工具：`sudo apt install make`（Linux/Mac�?
端口冲突�?000被占用）
修改`variables.env`里的`PORT=新端口号`
生成速度�?
电脑性能不足可尝试短视频�?10分钟）测�?
想换AI模型（如国产API�?
编辑`variables.env`文件，替换API密钥
- **👉 现在就去试试�?* 项目地址：https://github.com/hanshuaikang/AI-Media2Doc

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成�?

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)