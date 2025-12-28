---
title: "0 元复�?AI 小智！！"
permalink: 0-元复�?ai-小智
date: 2025-06-27 23:57:07
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最�?AI 小智太火了，到处都是他的 复刻项目，最近看到一个Python 的网页版本复刻，不需要硬件直接在电脑上可用体验小智功能�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRMYzIloTWUDFZ3amhvYCJkMeibXcDy16fqyWN5njopz4vS8OoDgRFoTegzjs2ibWG1DNFdcSibuiaqsQ/640?wx_fmt=png&from=appmsg)

### 项目简�?
`py-xiaozhi` 是一个使�?Python 实现的小智语音客户端，目的是让用户通过代码学习，并且在没有硬件条件的情况下体验 AI 小智的语音功能。此仓库是基于 xiaozhi-esp32 进行移植的�?

### 功能特点
- •�?*AI语音交互**：支持语音输入与识别，实现智能人机交互，带来自然流畅的对话体验�?

- •�?*视觉多模�?*：支持图像识别和处理，具备多模态交互能力，能够理解图像内容�?

- •�?*IoT 设备集成**�?

- �?支持智能家居设备控制，像灯光、音量、温度传感器等都可控制�?

- �?集成 Home Assistant 智能家居平台，可控制灯具、开关、数值控制器和按钮设备�?

- �?有倒计时器功能，支持延时执行命令�?

- �?内置多种虚拟设备和物理设备驱动，便于扩展�?

- •�?*联网音乐播放**：基�?pygame 实现的高性能音乐播放器，支持播放、暂停、停止、进度控制、歌词显示和本地缓存，提供稳定的音乐播放体验�?

- •�?*语音唤醒**：支持唤醒词激活交互，默认关闭，需手动开启�?

- •�?*自动对话模式**：实现连续对话，提升用户交互流畅度�?

- •�?*图形化界�?*：提供直观易用的 GUI，支持小智表情与文本显示，增强视觉体验�?

- •�?*命令行模�?*：支�?CLI 运行，适用于嵌入式设备或无 GUI 环境�?

- •�?*跨平台支�?*：兼�?Windows 10+、macOS 10.15+ �?Linux 系统�?

- •�?*音量控制**：支持音量调节，有统一声音控制接口，适应不同环境需求�?

- •�?*会话管理**：有效管理多轮对话，保持交互连续性�?

- •�?*加密音频传输**：支�?WSS 协议，保障音频数据安全，防止信息泄露�?

- •�?*自动验证码处�?*：首次使用时，程序自动复制验证码并打开浏览器，简化操作�?

- •�?*自动获取 MAC 地址**：避�?MAC 地址冲突，提高连接稳定性�?

- •�?*代码模块�?*：代码拆分并封装为类，职责明确，便于二次开发�?

- •�?*稳定性优�?*：修复断线重连、跨平台兼容等多项问题�?

### 项目结构
`├── .github                 # GitHub 相关配置
├── assets                  # 资源文件（表情动画等�?
├── cache                   # 缓存目录（音乐等临时文件�?
├── config                  # 配置文件目录
├── documents               # 文档目录
├── hooks                   # PyInstaller钩子目录
├── libs                    # 依赖库目�?
├── scripts                 # 实用脚本目录
├── src                     # 源代码目�?
�?  ├── audio_codecs        # 音频编解码模�?
�?  ├── audio_processing    # 音频处理模块
�?  ├── constants           # 常量定义
�?  ├── display             # 显示界面模块
�?  ├── iot                 # IoT设备相关模块
�?  �?  └── things          # 具体设备实现目录
�?  ├── network             # 网络通信模块
�?  ├── protocols           # 通信协议模块
�?  └── utils               # 工具类模块`### 系统要求
- �?Python 版本�?.9 <= 版本 <= 3.12

- �?支持的操作系统：Windows 10+、macOS 10.15+、Linux

- �?麦克风和扬声器设�?

以下是 `py-xiaozhi` 项目的使用教程：

### 系统要求
- •�?*Python 版本**�?.9 <= Python 版本 <= 3.12

- •�?*操作系统**：支�?Windows 10+、macOS 10.15+ �?Linux

- •�?*硬件设备**：需要麦克风和扬声器设备

### 前期准备
- 1. **仔细阅读项目文档**：详细的启动教程和文件说明都在 项目文档 中�?

- 2. **更新依赖**：由于 `main` 分支是最新代码，每次更新后需要手动重新安装 `pip` 依赖，以确保本地环境包含新增的依赖�?

### 配置系统
项目采用分层配置系统，主要包含以下几个部分：

- 1. **基础配置**：基本运行参数设置在 `config/config.json` 文件中�?

- 2. **设备激�?*：设备身份信息存储于 `config/efuse.json` 文件�?

- 3. **唤醒词配�?*：用于语音唤醒相关的设置�?

- 4. **物联网设�?*：支持各�?IoT 设备的配置，例如温度传感器和 Home Assistant 集成�?

详细的配置说明请参考 配置说明文档�?

### 启动项目
按照以下步骤启动 `py-xiaozhi` 项目�?

- 1. **克隆仓库**：将项目仓库克隆到本地�?

`git clone https://github.com/huangjunsen0406/py-xiaozhi.git
cd py-xiaozhi`- 1. **安装依赖**：根据你的操作系统，安装所需的依赖�?

```
`pip install -r requirements.txt  # 通用依赖
# 如果�?macOS 系统，还需要安装额外的依赖
pip install -r requirements_mac.txt`
```
- 1. **运行项目**：启动 `main.py` 文件来运行项目�?

```
`python main.py`
```
**
**

**
**

**
**

https://github.com/huangjunsen0406/py-xiaozhi

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