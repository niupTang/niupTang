---
title: GitHub 万字长文项目，从零教你复刻一个 ChatGPT！
date: 2025-06-22 22:27:07
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

戳上方蓝字关注我，开源不迷路！ ✍️ 作者：牛皮糖｜每天推荐一个优质项目

大家好，我是牛皮糖！

今天给大家带来一个**强烈推荐收藏 + 动手实操**的超级项目—— **LLMs-from-scratch**：手把手带你从零实现一个类 ChatGPT 的大型语言模型！

没错，就是自己写一个 ChatGPT！

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvurvGXfVbl66ic16CVwFgb3rDX2XVARcgFfMYic5ZUWJLaSHKfbIXwdBOiccxrvKuj0zNZxsw4sR5A/640?wx_fmt=png&from=appmsg)

项目地址：https://github.com/rasbt/LLMs-from-scratch 作者是德累斯顿工业大学的副教授 Sebastian Raschka，熟悉的朋友应该知道，他是那位写了多本机器学习书的大神。

### 🧩 为什么我推荐这个项目？
有些人天天喊想学大模型，但一看到 HuggingFace 或 Transformer 架构就犯困。 **这个项目，就是为你量身打造的 LLM 实战路线图。**

它不是让你调库、不是套黑盒，而是——

### ✅ 真正从零构建一个大型语言模型！
- • 📖 一步步教你构建 tokenizer、实现 BPE 分词器

- • 🔬 手搓 self-attention、多头注意力、残差连接

- • 🏗️ 构建 GPT 模型，训练、微调、完成指令跟随

- • 🔧 所有代码都用 PyTorch 写成，逻辑清晰，适合边读边改边理解

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvurvGXfVbl66ic16CVwFgbicWWZWZVkwseINjMHjKf02uRs3Xpo5sxQEYsHkjNNSRTTY0wa9EQ8PA/640?wx_fmt=png&from=appmsg)

### 📦 项目结构一览
整个项目是书籍《Build a Large Language Model (From Scratch)》的代码配套，章节划分清晰：

章节
内容
第1章
LLM 背后的原理讲解（理论为主）
第2章
文本处理 + 分词器实现（BPE）
第3章
手写注意力机制（multi-head）
第4章
实现 GPT 模型架构
第5章
无监督预训练
第6章
分类任务微调
第7章
指令微调（像 ChatGPT 那样聊天）
📎 还有超多附录，讲训练技巧、推理优化、LoRA、KV 缓存、用户界面等进阶内容。

### 💡 看完能获得什么？
这个项目不是让你做个 demo 玩一下，而是：

### 🎯 掌握一整套 LLM 的搭建路径
→ 真正从头实现 Transformer 架构，理解每个模块的作用和演化

### 🎯 打通“大模型原理 + 实践”的任督二脉
→ 不再只是“调库工程师”，而是能写能调能解释的工程研究型人才！

### 🎯 具备轻量自训/微调能力
→ 用自己机器训练一个玩具 GPT，别再幻想大厂模型了，你也能搞！

### 🛠️ 使用方式也很简单：
`git clone https://github.com/rasbt/LLMs-from-scratch.git
cd LLMs-from-scratch
pip install -r requirements.txt`每一章都有 Jupyter Notebook，照着练、改点参数、加点注释，很快你也能复刻一个属于自己的「迷你 ChatGPT」。

### 🚀 牛皮糖的建议
很多人天天喊着“大模型是未来”，但不去理解其本质原理，其实是站不稳的。 这个项目非常适合下面这些人：

- • **LLM 工程师的候选人**：你需要的不只是调包，而是结构级理解

- • **高校学生、科研新人**：搞论文？先搞懂 attention 怎么跑

- • **做 AI side project 的开发者**：小规模 GPT，自己训练就够用了！

💥一句话总结： **这就是一本写给平民工程师的《大模型圣经》！**

## 📬 最后：
如果你真心想搞懂 GPT，别光看 B 站教程了，动手跑一遍这个项目， **你会发现自己站在了 LLM 知识金字塔的中上层。**

喜欢这类内容的话，欢迎关注我“牛皮糖不吹牛”， 我会持续推荐这些能学会也能落地的 **高质量开源项目**！

📌 项目地址再次附上：https://github.com/rasbt/LLMs-from-scratch 📌 

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