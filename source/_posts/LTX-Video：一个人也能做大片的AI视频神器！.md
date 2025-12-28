---
title: "LTX-Video：一个人也能做大片的AI视频神器�?
permalink: ltx-video-一个人也能做大片的ai视频神器
date: 2025-07-18 23:31:46
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

大家好，我是牛皮糖！最近刷 GitHub 时被一款新模型狠狠惊艳到了！它就是—�?*LTX-Video**，以往这些大模型都是闭源项目，但是以色列创意公司�?*Lightricks** 开发的超强视频生成模型，不吹不黑，这玩意直接把 AI 视频生成拉到了新高度�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQzibKF2OImPX37Dll3HibtPpUXVsibeyfanRibviaKJFdS85sjfiaAKUlZ8eWtC1kznNGHYC88OrP2HpPA/640?wx_fmt=png&from=appmsg)

## 🎬为什么说 LTX-Video 是个“革命级”神器？
传统 AI 视频模型不是只能�?2�? 秒，就是太糊、太卡，�?GPU 啥都好几张，还不能实时控制——普通人基本用不了�?

�?LTX-Video 完全不一样：

### ✅�?*最长生�?60 秒高清视频！**
是的，你没看错，**突破行业�? 秒天花板�?*，官方实测在 H100 �?4 秒生�?5 秒视频，**比播放还快！**

### ✅�?*支持多种生成模式�?*
- �?📝 文本 �?视频（Text-to-Video�?

- �?🖼 图像 �?视频（Image-to-Video�?

- �?�?视频扩展（延长现有素材）

- �?🎞 关键帧动画（角色移动、镜头运动）

- �?🔄 多条件混合生成（多图混剪�?

### ✅�?*生成质量超高，帧率达 30FPS，最高分辨率 1216×704�?*
别再�?AI 视频糊了�?*现在 LTX-Video 已经做到比短视频平台的预设画质还要清晰！**

## 🧠 创作自由度直接拉�?
LTX-Video 最让我服的是—�?*可实时流式生�?+ 负向提示�?*�?

意思是：你可以边生成边调整，怕出现奇怪画面？直接加个“不希望生成 xxx”的提示就行了，堪比影视后期“实时监制”�?

而且支持**关键帧插�?*�?*镜头调度**，真正实�?*精准可控**�?AI 创作�?

## 💻本地部署也简单！平民 GPU 也能玩！
最令人激动的一点来了：

�?最低只需�?8GB 显存�?

 �?RTX 4090 跑得飞快，甚至不需�?H100 �?

安装也不难，跟着文档�?Python �?pip 一步一步来�?*3 分钟就能跑�?inference 脚本**�?

## 🧪 你可以这样用 LTX-Video👇
📦 文本生成视频�?

`python inference.py --prompt "a dog chasing a ball in the park" \
--height 512 --width 768 --num_frames 24 \
--pipeline_config configs/ltxv-13b-0.9.7-dev.yaml`🖼 图片变成动画�?

`python inference.py --prompt "a landscape coming to life" \
--conditioning_media_paths input.jpg \
--height 512 --width 768 --num_frames 24 \
--pipeline_config configs/ltxv-13b-0.9.7-dev.yaml`还支持和 **ComfyUI** 集成，UI 党也可以点点鼠标搞定�?

## 🚧 注意事项别忘了！
- �?分辨率必须是 **32 的倍数**

- �?帧数必须是�?*除以8�?**（比�?9�?7�?5�?

- •�?*提示词建议用英文**，越详细越好�?

## 📦 总结：一个视频创作者的梦想神器
LTX-Video 简直是**影视前期、广告创意、短视频内容创作**的天花板工具�?

�?多种生成方式

 �?长视频支持�?

�?控制自由度超高�?

�?最低消费级显卡就能玩！

📍**项目地址传送门�?* 👉 https://github.com/Lightricks/LTX-Video

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