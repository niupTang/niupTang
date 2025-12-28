---
title: "哔哩哔哩开源 IndexTTS2 ，要你的情绪以假乱真。"
permalink: 哔哩哔哩开源-indextts2-要你的情绪以假乱真
date: 2025-09-26 22:48:08
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

大家好，我是牛皮糖！前面两天看到VoxCPM ，TTS 开源语音合成模型，然后有粉丝在评论说不如tts1.5, 我一看 Index-tts 2  都出来了。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTNhiaZia6xKr8Sfib5nynuRB1jnG34ic0KCM6JTV9zzFUBN8oU8O2EGlASHzVX2hxiaWAEJgoLLsao4Iw/640?wx_fmt=png&from=appmsg)

9月8日，哔哩哔哩正式宣布开源其自研语音生成大模型IndexTTS-2.0，这是首个支持**精确时长控制的自回归零样本文本转语音系统 **。该模型不仅能够精准控制语音的时长，还能分离说话人音色与情绪特征，实现了情感的可控调节

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTNhiaZia6xKr8Sfib5nynuRB1k1gtbj4iaL772InQ5wpDgm4UpQVLGcxSWB1pZwjZiatjwEvuLIbWPvMA/640?wx_fmt=png&from=appmsg)

## ✨ 核心功能亮点
- • **音色克隆**：只需3-5秒参考音频，就能完美复刻任何人的音色

- • **情感控制**：支持文本指令控制情感，如“悲伤地”、“欢快地”、“严肃地”

- • **解耦技术**：音色和情感完全分离，自由组合各种效果

## 🛠️ 技术架构解析
### 创新的时间编码机制
`传统TTS：文本 → 语音（时长不可控）
IndexTTS2：文本 + 时间编码 → 精准时长语音`这种机制让IndexTTS2在自回归架构中实现了前所未有的时长控制精度。

### 零样本学习能力
- • **无需训练**：对陌生音色无需额外训练即可克隆

- • **快速适配**：几秒钟音频就能获得高质量合成效果

- • **多语言支持**：支持中英文混合合成

## 📊 性能对比
功能特性
传统TTS
IndexTTS2
**时长控制**基本不可控
毫秒级精准控制
**情感表达**单一或有限
丰富的情感频谱
**音色克隆**需要训练
零样本即时克隆
**使用门槛**需要专业知识
自然语言指令
**应用范围**基础朗读
专业级配音
## 🚀 快速开始指南
### 环境要求
- • Python 3.8+

- • GPU（推荐RTX 3080以上）

- • 显存8GB+

### 4步快速体验
- 1. **访问官方项目**`git clone https://github.com/index-tts/index-tts.git`

- 2. **安装依赖**```
`cd index-tts
pip install -r requirements.txt`
```

- 3. **下载模型**```
`# 使用官方提供的模型下载脚本
python download_models.py`
```

- 4. **启动WebUI**```
`python app.py
# 访问 http://localhost:7860`
```

### 在线演示
如果不想本地部署，可以直接访问官方提供的在线演示页面，即时体验所有功能！

本地安装包

链接：https://pan.quark.cn/s/876a42942749

## 🌟 项目优势
- 1. **💪 技术领先**：全球首个实现精准时长控制的TTS模型

- 2. **🎨 艺术级效果**：情感表达自然度达到新高度

- 3. **🚀 生产效率**：大幅提升音频内容制作效率

- 4. **🔧 易于使用**：提供友好的WebUI界面

- 5. **📚 完整文档**：详细的教程和API文档

- 

**官方项目地址**：https://github.com/index-tts/index-tts

下面是我的有气无力版本的 本来以为吕布已经天下无敌了，没想到IndexTTS 更牛逼。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTNhiaZia6xKr8Sfib5nynuRB17XxbqoG3SLs5Soau1ic2IUPbYlqsK8okwuG4ic3ibF7drey3CYYicaWKWw/640?wx_fmt=png&from=appmsg)

项目地址：

- 
- 
`https://modelscope.cn/studios/IndexTeam/IndexTTS-2-Demo``https://github.com/index-tts/index-tts/blob/main/docs/README_zh.md`

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，借助AI 工具要每一个都能够实现自己的副业，在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)