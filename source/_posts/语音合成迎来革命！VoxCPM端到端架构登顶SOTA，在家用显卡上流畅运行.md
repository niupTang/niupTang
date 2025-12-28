---
title: "语音合成迎来革命！VoxCPM端到端架构登顶SOTA，在家用显卡上流畅运行"
permalink: 语音合成迎来革命-voxcpm端到端架构登顶sota-在家用显卡上流畅运行
date: 2025-09-24 23:44:38
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！TTS 语音 又国产新东西了。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQZD0LibWLmuU9mTZSBpzEROqDY2HLhnNRArkJhictLXpXc18wsfsyxZWgjgAW5WV6Pv3tX5ELuGbUw/640?wx_fmt=png&from=appmsg)

VoxCPM 是由面壁智能与清华大学深圳国际研究生院合作推出的一款开源语音生成模型，虽然参数规模不大只有0.5B，但实现了高质量的语音合成效果。

### 🚀 项目简介与核心优势
VoxCPM 的核心优势在于其创新的技术路径和卓越的性能表现。

- • **创新的技术架构**：与许多主流TTS模型将语音转换为离散符号（token）再进行处理的思路不同，VoxCPM 采用了**端到端的扩散自回归架构**。这种方法能够直接从文本生成连续的语音表示，有效避免了信息损失，从而在根源上提升了生成语音的自然度和丰富性。

- 

- • **出色的生成效果**：根据评测，VoxCPM 生成的语音在**情绪、音色、口音、停顿和韵律**等方面的表现都非常出色，听感上高度接近真人发声。它不仅能根据文本内容自动推断合适的语调风格，还支持**零样本语音克隆**，仅需一段简短的参考音频即可高度还原说话人的音色和情感。

- 

- • **强大的推理效率**：尽管性能强大，但得益于其小巧的参数规模（0.5B），VoxCPM 对算力要求相对友好。它可以在**家用电脑**上部署，并支持**流式合成**，在RTX 4090显卡上可实现高达0.17的实时因子（RTF），满足实时交互应用的低延迟需求。

### 💡 主要功能与应用场景
VoxCPM 的功能集使其适用于多种实际场景。

- • **上下文感知的语音生成**：模型能够深度理解输入文本的含义，并自动匹配最合适的语气、语速和风格。无论是需要字正腔圆的新闻播报，还是充满激情的演讲，亦或是带有地方特色的方言主播，它都能胜任。

- 

- • **高保真的零样本语音克隆**：这项功能非常实用。你只需要提供一段目标说话人几分钟甚至更短的音频，VoxCPM 就能学习并复刻其独特的音色、口音甚至情感，无需针对该说话人进行额外的模型训练。

- 

- • **处理复杂内容与自定义发音**：模型对中文语境有很好的支持，能够较为准确地处理**数学公式、特殊符号**的读音。同时，它还支持音素级标记替换，允许开发者对特定词汇的发音进行自定义修正。

VoxCPM 的这些能力使其在**智能客服、有声读物制作、教育辅导、视频内容创作**以及**AI智能体（Agent）的语音交互**等领域具有广阔的应用前景，为开发者提供了一个强大的语音合成工具。

### 🛠️ 如何快速开始
想要体验或使用 VoxCPM，可以通过以下途径：

- • **在线体验**：项目在 Hugging Face 上提供了官方演示空间（Demo），你可以直接在线输入文本，试听其生成效果。

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQZD0LibWLmuU9mTZSBpzEROQ5L6EeJHmT1Bgg9kf9zNJvy7OdC4zYXJSqnsRJxPymr21RC3C6usicA/640?wx_fmt=png&from=appmsg)

### 💎项目评价与展望
VoxCPM 的成功开源，显著降低了高性能语音合成技术的应用门槛。它以其“小身材、大能量”的特点，为语音交互体验带来了提升，并有望加速语音生成大模型在各类终端场景（如汽车、智能家居、AI PC等）的落地应用。

**
**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

- 
- 
`https://huggingface.co/spaces/openbmb/VoxCPM-Demo``https://www.modelscope.cn/models/OpenBMB/VoxCPM-0.5B`

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)