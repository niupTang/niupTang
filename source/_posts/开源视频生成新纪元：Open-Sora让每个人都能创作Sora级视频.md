---
title: 开源视频生成新纪元：Open-Sora让每个人都能创作Sora级视频
date: 2025-10-16 22:29:32
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！chatGPT 的 Sora2 已经火了很久了，今天在GitHub 上看到一款针对于 Sora 的开源项目，Colossal-AI团队正式开源了**Open-Sora**项目，这是一个致力于复现OpenAI Sora视频生成模型的完整开源解决方案。该项目不仅提供了完整的训练代码和模型架构，还包含了数据预处理、推理展示等全套工具链，让普通研究者和开发者也能参与到视频生成技术的研究中来。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRqIrQPhu5WHyAsr2uicwa4TJQB3t7MXTkSADygB1ZtlQI0f9OJEaI7df7by02IW7OwnibLz9c8gfZg/640?wx_fmt=png&from=appmsg)

在VBench上，Open-Sora 2.0 显著缩小了与 OpenAI 的 Sora 的差距，与 Open-Sora 1.2 相比，差距从 4.52% → 0.69%。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRqIrQPhu5WHyAsr2uicwa4TYa0OibovuJuR4HMNqpJzicFJh3Kicaic80BvXCZXn1lGHGULSt08N9z1Tw/640?wx_fmt=png&from=appmsg)

**![](https://mmbiz.qpic.cn/mmbiz_gif/p1ESIQQvfrRqIrQPhu5WHyAsr2uicwa4TkD2tzPbUd0dNcOFxCbK7Ur9JjWAGglg4oCEXn18jAXmtC8pP2iae1Xw/640?wx_fmt=gif&from=appmsg)
![](https://mmbiz.qpic.cn/mmbiz_gif/p1ESIQQvfrRqIrQPhu5WHyAsr2uicwa4TkD2tzPbUd0dNcOFxCbK7Ur9JjWAGglg4oCEXn18jAXmtC8pP2iae1Xw/640?wx_fmt=gif&from=appmsg)
**

**完整的训练流水线** Open-Sora提供了从数据预处理、模型训练到推理评估的完整流程。项目支持多种视频数据格式，包括MP4、GIF等，并提供了灵活的数据加载和增强策略。

**多种模型架构** 项目实现了包括DiT、Latent Diffusion在内的多种先进视频生成架构，用户可以根据自己的需求选择合适的模型结构进行实验。

**高效的训练优化** 基于Colossal-AI的深度学习优化技术，Open-Sora在训练效率上做了大量优化，支持混合精度训练、梯度检查点等技术，大幅降低了训练成本。

**灵活的配置系统** 通过配置文件，用户可以轻松调整模型参数、训练策略和推理设置，无需修改代码即可进行各种实验。

**虽然Open-Sora在复现Sora能力方面取得了显著进展，但与原始Sora相比，在生成视频的时长、质量和一致性方面仍有差距。项目团队也坦诚表示，这还是一个"进行中的工作"。**

项目地址：

**https://github.com/hpcaitech/Open-Sora**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)