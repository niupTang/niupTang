---
title: AI 编程新章程， GitHub 自主开源Spec-kit 两周获得27k Stars
date: 2025-09-27 23:44:35
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

大家好，我是牛皮糖！ 你是否在 AI 编程上面经常遇到 AI 乱改，不听话的现象？ 

今天给大家介绍一个GitHub上刚开源就火爆的AI开发神器——SpecKit。这个工具主打"Spec-Driven Development"理念，简单来说就是"先规划再实现"的开发模式。下面我会详细解析它的核心功能和实际应用效果。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRaYYvrPF2SdlfPic1HvbCJhicGsU8248HrP763u4yaudC8iaqlcqq9riaG5gRxhD8jdFLUWRkWL4BhDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRaYYvrPF2SdlfPic1HvbCJhcFBx4NXBB34XRsAp4bKFg7l4icUpKGpdibMbSiaPlLEfCCSlWd3q7Ax0w/640?wx_fmt=png&from=appmsg)

SpecKit的核心优势在于提供了一套完整的开发框架，将你的想法一步步变成现实。整个工作流程分为五个关键步骤：

- 1. Constitution阶段：确立项目的基本原则和底线要求。比如开发一个自媒体素材管理的Mac应用时，我们会规定"交互必须简单快捷"、"使用浅色主题"、"代码清晰易读不过度优化"等核心原则。

- 

- 2. Specify阶段：详细定义功能需求。以素材管理应用为例，需要支持： 

- • 分类展示素材（文本、图片、音频、视频）

- • 网格布局和原地编辑功能

- • 直接播放控制（支持5秒快进/快退）

- • 响应式设计

- 

- 3. Plan阶段：制定技术方案。选择SwiftUI+Swift Package Manager开发原生Mac应用，文本数据用CSV存储，媒体文件本地存储。

- 

- 4. Task阶段：自动拆解任务清单。系统会生成47个具体任务，包括： • 基础设置（项目结构、依赖配置）

- • 核心实现（数据模型、服务层、视图层）

- • 高级功能（媒体编辑、资产管理）

- • 性能优化（启动时间<2秒，滚动60fps）

- 5. Implement阶段：执行实现。支持切换不同AI编程助手（如Claude Code或Codex）来实际编写代码。

实际演示中，SpecKit展现了强大的自动化能力： • 自动生成项目规范文档（constitution.md）

• 创建详细的功能说明书（spec.md）

• 输出完整的技术实施方案（plan.md）

• 拆解出可执行的任务列表（tasks.md）

特别值得一提的是它的"多AI协作"特性。当对某个AI的实现不满意时，可以轻松切换另一个AI基于相同的spec重新实现。实测中，用Codex重新实现的应用在界面交互和稳定性上都表现更优。

在 AI 编程工具上的支持基本上覆盖了热门的 Claude Code 、Cursor、 Qwen Code 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRaYYvrPF2SdlfPic1HvbCJhcevyw26d3XFsPPaC9rYVuNzeRGiblz5RIJb4ahWlQ0DE9ymSuwIJjvw/640?wx_fmt=png&from=appmsg)

使用SpecKit的两个核心价值：

- 1. 提供思考框架：明确开发路径，知道每一步该做什么

- 2. 促进团队协作：通过规范文档实现知识共享，降低沟通成本

适用场景建议：

 • 适合：新项目启动、大型功能开发

• 不适合：小型改动或快速原型开发

这个工具特别适合需要严格规范的中大型项目，能显著提升开发效率和代码质量。如果你正在寻找更结构化的开发方式，不妨试试这个刚在GitHub开源的SpecKit。

项目地址：

https://github.com/github/spec-kit

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)