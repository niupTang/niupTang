---
title: "DeepSeek 真的不如Gemini ？ 我用 DeepSeek 给我的摄像头加上 人脸识别！！"
permalink: deepseek-真的不如gemini-我用-deepseek-给我的摄像头加上-人脸识别
date: 2025-11-30 21:39:48
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [AI 学习资料](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247487298&idx=1&sn=ed7a5c236ccfa4d53cf4bffb8406115f&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近去探查了一些 AI 视频的项目，在公司做了一个视频巡检的项目，我没想到 AI 写 AI 竟然会这么简单。这次 借助 Gemini 3 帮我完成的，来分享一下自己的思路。主要是借助 MediaMTX 和 Yolo 11 来实现的，这两个都是开源的项目。

为了对这两个项目有一个快速的了解，我准备了一个简单的对比表格：

特性
MediaMTX
YOLO11
**项目类型**流媒体服务器
计算机视觉模型
**核心功能**接收、转换、分发实时音视频流
目标检测、实例分割、姿态估计等
**主要应用场景**网络直播、视频监控、浏览器播放摄像头画面
自动驾驶、工业检测、安防监控、医疗影像分析
**技术特点**轻量级、多协议支持、易于部署
高精度、高速度、多功能一体化
**典型输入**摄像头RTSP流、FFmpeg推流等
图像、视频流
**典型输出**RTMP、HLS、WebRTC等协议的视频流
带边界框、分割掩模或关键点的图像/视频
### 深入MediaMTX
它是一款非常出色的**开源流媒体服务器**，之前也被叫做`rtsp-simple-server`。

- • **它是什么**：MediaMTX是一个**媒体代理或“媒体路由器”**。它的核心工作就是将来自一个源的实时视频（比如你的电脑摄像头或一个IP摄像机），转换成多种不同的格式，然后分发给多个观看者。

- • **核心能力**：

- • **多协议支持**：它说流媒体界的“通用语”。既能接收**RTSP、RTMP、SRT**等推流协议，也能通过**RTSP、WebRTC、HLS**等协议将视频流分发出去。这意味着它能把一个传统摄像头不兼容浏览器的RTSP流，轻松转换成适合网页播放的HLS或WebRTC流。

- • **轻量易用**：通常只是一个独立的可执行文件，几乎没有外部依赖，在各种系统上都能快速部署和运行。

- • **典型工作流**：

- 1. **采集**：FFmpeg从网络摄像头采集视频，并通过**RTSP**协议推送到MediaMTX服务器。

- 2. **转换**：MediaMTX服务器在后台接收并处理这个流。

- 3. **播放**：当你用浏览器访问服务器地址时，MediaMTX会通过**WebRTC**或**HLS**协议将视频流传输给你的浏览器进行播放。

### 详解YOLO11
YOLO11是Ultralytics公司发布的YOLO系列的最新版本，在多个计算机视觉任务上表现出色。

- • **它是什么**：YOLO11是一个**多功能、一体化的实时视觉模型**。它延续了YOLO系列“你只看一次”的设计哲学，在单一模型中整合了多种先进的视觉能力。

- • **核心能力**：YOLO11支持的目标检测、实例分割、姿态估计和图像分类等任务。

- • **性能与选型**：YOLO11提供了多种规模的模型（如n, s, m, l, x）以适应不同需求。

- • **轻量级（YOLO11n, YOLO11s）**：参数少，计算量低，非常适合在**手机、嵌入式设备**等资源受限的环境中部署。

- • **均衡型（YOLO11m）**：在精度和速度之间取得了很好的平衡，是许多实际应用的折中之选。

- • **高精度型（YOLO11l, YOLO11x）**：拥有最多的参数和最高的计算复杂度，能提供**顶级的检测精度**，适用于对准确性要求极高的场景，如工业质检。

- • **架构创新**：YOLO11用更高效的**C3k2块**替换了YOLOv8中的C2f块，并引入了**C2PSA模块**，该模块改进了特征图中的空间注意力，有助于更准确地检测小物体和重叠物体。

###  如何选择与使用
要使用 MediaMTX 结合 YOLO11 实现实时算法识别并推流，最核心的思路是构建一个**处理管道（Pipeline）**。

MediaMTX 本身只是一个流媒体服务器（负责转发），它不具备 AI 识别能力。因此，你需要编写一个 Python 程序作为“中间人”，完成以下流程：

- 1. **拉流/捕获**：从摄像头或 MediaMTX 读取原始视频。

- 2. **推理**：使用 YOLO11 对每一帧进行识别并绘制检测框。

- 3. **推流**：将处理后的视频帧通过 FFmpeg 管道（Pipe）推送到 MediaMTX。

- 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrR11bTtlXXV1qh2WLmwed9iaxmA52zmfXicN9KGJv8TFHyr0SZPrrvPia2Cuv6u69yKjTzuoicrIMyibAA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrQjdtsdVLr9vGIsWmUV6d72mYibxiaAOc7p7IgxlTcymVtnAFicia4Jq4Kg2uAfx9a5oG0bNSo8efFiaAA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)