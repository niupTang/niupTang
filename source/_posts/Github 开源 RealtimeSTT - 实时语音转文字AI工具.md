---
title: Github 开源 RealtimeSTT - 实时语音转文字AI工具
date: 2025-01-16 21:08:25
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

*** 戳上方蓝字“牛皮糖不吹牛**”关注我

 大家好，我是牛皮糖！今天在GitHub 上看到一款实时语音转文字的AI 工具，可以自己研究做一个文本记录工具还是挺不错的。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrREl850qH9Rm5ia8pzgoOibgvSG7Or0WTmkgjdC1lZQcqYAuhVzQwQtjQ0fXH9ibIp8ZpLLcr2JQ2MCw/640?wx_fmt=png&from=appmsg)

**项目简介**

**RealtimeSTT** 是一个基于 Python 的开源项目，专注于实现高效、准确的实时语音转文字功能。它可以捕获音频输入，并在处理后以文本形式输出，适用于各种实时应用场景，如语音助手、字幕生成、语音控制系统等。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrREl850qH9Rm5ia8pzgoOibgv7YQg1JsbvzvUlsg77QUxY0BLB7lmkrQdPAMVjmOOib3TxOzZW2uOgmw/640?wx_fmt=png&from=appmsg)

### 项目特点
- 1. **实时语音识别**
实现从音频流到文本输出的低延迟处理。

- 2. **多语言支持**
项目可配置为支持不同语言的语音识别需求。

- 3. **灵活性高**
可用于个人实验、研究、产品开发，支持自定义扩展。

- 4. **轻量化设计**
在本地即可运行，无需依赖高性能云服务。

- 5. **开源易用**
提供清晰的代码和文档，便于开发者快速上手。

### 技术栈
- • **编程语言**：Python

- • **音频处理**：依赖 PortAudio 和 PyAudio 库进行音频捕获与处理。

- • **语音识别引擎**：基于 Google Speech Recognition API，但支持替换为其他引擎。

- • **GUI（可选）**：支持通过界面操作，也可直接使用命令行运行。

### 使用场景
- 1. **实时字幕生成**：为会议、直播或教学场景提供实时字幕服务。

- 2. **语音助手开发**：快速实现语音识别模块，增强智能助手的交互能力。

- 3. **语言学习工具**：记录并实时转化语音为文字，便于学习和回顾。

- 4. **Accessibility（无障碍支持）**：帮助听障人士实时获取语音内容的文字。

### 快速上手
安装依赖- 1. 克隆仓库：`git clone https://github.com/KoljaB/RealtimeSTT.git
cd RealtimeSTT`

- 2. 安装 Python 环境和依赖：```
`python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt`
```

- 3. 确保安装了 **PortAudio**：

- • macOS:```
`brew install portaudio`
```

- • Linux (Ubuntu):```
`sudo apt-get install portaudio19-dev`
```

- • Windows：从 PortAudio 官方网站下载并安装。

运行程序- 1. 启动应用：```
`python main.py`
```

- 2. 配置语音输入设备和语言：

- • 默认使用系统的麦克风设备。

- • 可通过代码自定义语言参数，例如 `en-US`。

自定义扩展- • 替换语音识别引擎：项目默认集成了 Google Speech Recognition API，可以修改代码以集成其他服务，如 DeepSpeech、Whisper 或 Azure Speech。

- • 添加翻译功能：结合 Google Translate API，可实现语音翻译功能。

- • 保存输出：将转化的文字存储为文本文件或实时展示在 GUI 中。

### 未来改进方向
- 1. **多语言模型支持**：引入 Whisper 等开源语音识别模型，摆脱对云 API 的依赖。

- 2. **优化性能**：减少延迟，支持更大规模的实时处理。

- 3. **GUI 优化**：提升用户界面的交互体验，增加参数配置功能。

### 总结
**RealtimeSTT** 是一个非常适合技术爱好者和开发者的项目，无论是研究语音识别，还是集成到具体应用场景中，都能提供良好的支持。如果你对语音技术感兴趣，不妨亲自尝试并为项目贡献力量！

**
**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)