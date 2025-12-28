---
title: "GitHub 开源项�?| SkyReels-V2：无限时长电影级AI视频生成神器"
permalink: github-开源项�?skyreels-v2-无限时长电影级ai视频生成神器
date: 2025-04-26 22:40:57
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天给大家介绍一�?*震撼影视界的AI黑科技**—�?*SkyReels-V2**，由昆仑万维开源的**全球首个无限时长电影级视频生成模�?*！它彻底打破了传统AI视频5-10秒的时长限制�?*支持30秒�?0秒甚至更长的连贯视频生成**，并凭�?*V-Bench 83.9%总分**登顶开源视频生成领域巅峰！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQSgibNvO9MgBtaW3I84a51cupBPcj4pWUTpPM6FyGWFdSiaw2j6GLiaoe1uoR4x58jorJM21fooYerw/640?wx_fmt=png&from=appmsg)

### **🔥 为什么SkyReels-V2如此炸裂�?*
- 1. **🎬 无限时长电影级生�?*

- �?突破传统AI视频5-10秒限制，支持**30秒�?0秒甚至更�?*的连贯视频生成�?

- 

- �?采用**Diffusion Forcing框架**，通过非递减噪声调度，实现近乎无限的视频扩展能力�?

- 2. **🎥 专业级电影语言理解**

- �?内置**SkyCaptioner-V1**，能精准解析“王家卫风格逆光长镜头”、“诺兰式压迫构图”等专业导演指令�?

- �?支持**推、拉、摇、移、跟**等复杂运镜，让AI视频真正具备电影质感�?

- 3. **�?极致的运动流畅度**

- �?通过**强化学习（RLHF）优�?*，解决AI视频常见的“物体漂移”、“抖动”问题，动作更符合物理规律�?

- �?�?*V-Bench评测**中，运动质量得分远超同类模型�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQSgibNvO9MgBtaW3I84a51c4pfobw5iaYxKllUick2G5dtoo54wRQOYJbaPQaMtL5BtO7GdNd9aprUw/640?wx_fmt=png&from=appmsg)

- 

- 4. **🛠�?开箱即用的多模态功�?*

- •�?*图生视频（I2V�?*：静态图转动态视频，支持高保真细节还原�?

- •�?*多主体一致性生�?*：可融合不同角色、场景，生成连贯叙事视频�?

- •�?*LoRA微调**：支持自定义动作训练（如“太极拳”），让AI学会你的专属风格�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQSgibNvO9MgBtaW3I84a51c2icB3jacanJ6tjonp8tr2vFVNiczc91Myickpu2zEN4Ds1dcN5iaFQWrxg/640?wx_fmt=png&from=appmsg)

### **🚀 5分钟快速上�?*
- 1. **安装（Python环境�?*`git clone https://github.com/SkyworkAI/SkyReels-V2.git
cd SkyReels-V2
pip install -r requirements.txt`

- 2. **运行基础视频生成**```
`from skyreels import SkyReelsGenerator

generator = SkyReelsGenerator(model="v2-base")
video = generator.generate(
    prompt="夕阳下的海边，浪花拍打礁石，海鸥飞过天空",
    duration=30,  # 生成30秒视�?
    resolution="720p"
)
video.save("output.mp4")`
```

- 3. **进阶功能（LoRA训练�?*```
`python train_lora.py --input_videos "taichi/*.mp4" --output_lora "taichi_lora.safetensors"`
```
训练完成后，可在生成时加载自定义LoRA，实现特定动作风格�?

### **💼 企业级应用场�?*
- •�?*影视工业**：快速生成分镜、概念短片，降低前期制作成本�?

- •�?*广告营销**：一键生成产品动态广告，支持多角度运镜展示�?

- •�?*游戏开�?*：自动生成NPC动画、场景动态效果，提升开发效率�?

- •�?*自媒体创�?*：AI生成短剧、Vlog，实现“日更”级内容产出�?

### **🔗 资源直达**
📌 **GitHub地址**：https://github.com/SkyworkAI/SkyReels-V2
📚 **论文解读**：https://arxiv.org/abs/2504.13074
🎥 **在线体验**：https://www.skyreels.ai

### **🎯 总结**
SkyReels-V2 不仅�?*AI视频生成的技术革�?*，更�?*影视级创�?*变得触手可及�?

- •�?*对个人创作�?*：告�?0秒限制，用AI拍出“一镜到底”的微电影�?

- •�?*对企业团�?*：降低影视制作成本，加速广�?游戏内容生产�?

- •�?*对开源社�?*：MIT协议完全开放，推动AI视频生态发展�?

**立即体验，用AI拍出你的第一部“无限电影”！**

·················END·················

**推荐阅读**

- • AI视频生成技术全景指�?

- • Diffusion模型实战进阶

- • 影视级AI工作流设�?

（数据来源：V-Bench评测 & SkyReels官方技术报告）

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