---
title: "微软开源扔出AI“深水炸弹”：CPU都能跑1000亿参数大模型！"
permalink: 微软开源扔出ai-深水炸弹-cpu都能跑1000亿参数大模型
date: 2025-10-05 22:07:25
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！在研究小模型的伙伴有福气了，微软开源了 一个 1 Bit 的大模型。今年的 4月25日，微软研究院正式开源了BitNet项目，这是一个专为1比特大模型设计的推理框架。它让AI模型**在CPU上的运行速度提升了最高6倍**，能耗降低超过80%，甚至可以在普通笔记本电脑上运行千亿参数的大模型。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS0kaMzKH6x0HoNvMu5QKDZ9xo7BKlia0nEa6X5C4jK7cxAmlgmCNibpsIKrU0RiaWofYkibDEhbHFDGA/640?wx_fmt=png&from=appmsg)

## 什么是BitNet？三进制LLM的突破
BitNet项目的核心是BitNet b1.58 2B4T——全球首个开源的**原生1比特大型语言模型**。这款模型拥有20亿参数，基于4万亿标记训练而成。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS0kaMzKH6x0HoNvMu5QKDZcaZ3x7G9YxsDGOkJbJX0N4ibnqAibAk6MRY7IDL3yBVyoHWeblhpGKeg/640?wx_fmt=png&from=appmsg)

与传统LLM使用16位或32位浮点数存储权重不同，BitNet b1.58采用了一种革命性的方法：**将权重参数量化为三元值**{-1， 0， +1}。

由于使用了三种值，从信息论角度看，每个参数仅需约1.58比特表示，因此得名b1.58。

这种量化方法带来了多重好处：模型内存占用骤降至**0.4GB**，仅为同类全精度模型的1/5到1/12。

更关键的是，矩阵计算从复杂的浮点乘法简化为**整数加法**，大幅降低了计算需求。

## 为什么说BitNet是游戏规则改变者？
**CPU上流畅运行大模型**

BitNet框架最大的突破是让大模型摆脱对高端GPU的依赖。根据微软的实验，BitNet可以在**单个CPU上以每秒5-7个token的速度运行1000亿参数模型**，基本等同于人类阅读速度。

在x86 CPU上，推理速度提升了**2.37至6.17倍**，在ARM CPU上提升**1.37至5.07倍**。能耗更是惊人地降低了**55.4%至82.2%**，为AI在移动设备和边缘计算场景的应用打开了大门。

**性能几乎无损的量化**

与传统训练后量化方法不同，BitNet采用**原生训练**方式，从零开始训练低精度模型，而非训练后压缩。

这种方法避免了PTQ常见的性能损失，在多项基准测试中，BitNet b1.58不仅媲美同等规模的全精度模型，甚至在数学推理等任务中表现更优。

**快速演进的BitNet生态**

开源不久，微软研究团队又火速推出了**BitNet v2**，首次实现了对1比特LLMs的**原生4比特激活值量化**。

通过引入哈达玛变换处理激活值异常分布问题，BitNet v2在**性能几乎0损失**的情况下，进一步降低了内存和计算成本。

## 实际应用：普通人也能跑大模型
有了BitNet，普通开发者甚至爱好者都可以在消费级硬件上运行强大的大模型。

**部署过程简单**：

- 1. 克隆仓库：git clone --recursive https://github.com/microsoft/BitNet.git

- 2. 安装依赖并构建项目

- 3. 运行推理

实际测试显示，BitNet b1.58在常识推理、数学解题和代码生成等任务上都表现出色。虽然在某些知识密集型任务上还有不足，但对于大多数日常应用已经足够。

## AI民主化的关键一步
BitNet的出现具有深远意义。它意味着强大的AI模型不再是大公司的专享，普通开发者甚至个人用户都能在本地设备上运行。

这**大幅降低了AI应用的门槛和成本**，让更多人可以参与到AI应用的创新中来。

从技术角度看，BitNet挑战了AI领域的一个根深蒂固的假设：更高的精度总是意味着更好的性能。

这项研究证明了通过精心设计的架构和训练方法，即使使用极低的精度，也能达到甚至超越传统方法的效果。

在AI飞速发展但能耗和成本问题日益突出的今天，BitNet为我们提供了一条新的路径：**通过“少”来实现“多”**，通过简化和约束激发更高效的解决方案。

随着BitNet生态的不断完善，一个真正普惠的AI时代或许正在加速到来。

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)