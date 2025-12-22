---
title: Github 开源智谱打起的AI手机第一枪
date: 2025-12-13 18:04:23
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[AI 学习资料](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247487298&idx=1&sn=ed7a5c236ccfa4d53cf4bffb8406115f&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！前面豆包手机火遍了整个 AI 圈，但是很快被所有的APP 所排挤， AI 手机的热度就慢慢的下去了，但是后面智谱直接开源底层 AI 代码 AutoGLM ,并且直接支持商用，代码教程完整 —— 这一手就如同把葵花宝典直接公开。你学也不是，不学也不是。 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQa1gGqmnr0RkApg85IXotpk5L0ax9QckGqRnel0uK5XD1K8OAvZ1u0QFeD3jxArv7g1xF8EmJn7Q/640?wx_fmt=png&from=appmsg)

### I. 项目概述与核心模型
Open-AutoGLM 是由智谱清言（Zhipu Qingyan）开源的一项框架，其开发团队历经两年打磨。该项目在发布后短短两天内，就获得了高关注度。

**项目核心模型：** 本次开源同时带来了 **H2GM 视觉语言模型**。

- • **参数量：** 该模型参数量为 9B。

- • **多模态能力：** 这是一个多模态模型，能够理解屏幕内容，并根据自然语言描述自动完成各种手机操作。

- • **发布意义：** 针对大厂商以隐私等理由拒绝了“豆包”等AI工具访问其应用的情况，Open-AutoGLM 提供了开源框架，可衍生出许多**个性化定制的 AI 智能体**（AI Agent）。

- 

### II. 核心功能与技术特点
Open-AutoGLM 主要通过三大核心能力实现手机自动化控制。

1. 多模态屏幕理解该功能基于 9B 参数的视觉模型。它能够智能识别屏幕上的**文字、图标、按钮**等 UI 元素，从而准确理解当前界面和可操作区域。

2. 智能任务规划框架内置了 **18 条智能决策规则**，使其能够自动分解复杂任务。它还能处理各种异常情况，例如网络问题、页面加载失败或操作失败等。

**部分智能决策规则示例：**

- • **加载等待策略：** 页面未加载时，最多连续等待三次。

- • **网络重试：** 遇到网络问题，会自动点击重新加载按钮。

- • **智能滑动查找：** 当找不到目标信息时，会尝试滑动页面查找。

- • **购物状态处理：** 处理购物车时，如果购物车内已有商品，它会先清除，然后取消，再去操作指定商品（类似人类操作）。在外卖场景中，它会先清空再购买。

- • **多商品同店购买：** 比如点购外卖时，会尽量在同一饭店购买。

3. ADB 自动化控制该项目通过标准的 **ADB 协议**来实现设备控制，并且**不需要 Root（L）权限**即可启动，保障了安全性和可靠性。它支持多达 14 种操作。

4. 其他核心特性- • **相对坐标系统：** 能够试配任意分辨率的屏幕。

- • **敏感操作保护：** 当操作涉及到支付或隐私时，会触发确认回调，用户可以自定义逻辑来防止误操作。

- • **可视化思考过程：** 智能体的思考过程可以被可视化。

- • **智能重试机制**。

- • **OpenAI AI 兼容 API**。

### III. 工作原理及优势
1. 工作流程当用户使用自然语言发出指令时（例如：“打开小红书搜索美食攻略”），Open-AutoGLM 的工作原理大致如下：

- 1. 通过 ADB 获取当前的**屏幕截图**。

- 2. **理解界面**并生成“思考过程”。

- 3. 生成**具体的操纵指令**。

- 4. 通过 ADB 来执行指令。

2. 相较传统自动化脚本的优势- • **内容理解与自适应：** 传统的自动化脚本会固定坐标，若界面发生变化便会失效。而 Open-AutoGLM **理解内容**，能够自动适应变化。

- • **弹窗处理：** 传统脚本遇到弹窗可能会卡住，但 AI Agent 能够识别并处理弹窗。

### IV. 支持的 14 种操作指令
该框架的 14 个操作指令基本涵盖了手机自动化操作的大部分任务：

- 1. 启动应用程序。

- 2. 点击指定坐标。

- 3. 输入文本。

- 4. 滑动屏幕。

- 5. 返回上一页。

- 6. 返回桌面。

- 7. 长按操作。

- 8. 双击操作。

- 9. 等待页面。

- 10. 请求用户接管。

- 11. 记录页面内容。

- 12. 总结和评论内容。

- 13. 询问用户选择。

- 14. 任务完成。

### V. 安装与部署指南
该项目部署相对复杂，需要一定的编程基础支持。

1. 环境准备- 1. 安装 **ADB 工具**。

- 2. 配置安卓设备：**启用开发者模式**和 **USB 调试**。

- 3. 安装 **ADBKitB**。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQa1gGqmnr0RkApg85IXotpcuIrwetk6azAWUp3JOGRqZyH4eP1d3JSDiahRBjPupWH5icNOxaea80Q/640?wx_fmt=png&from=appmsg)

2. 项目克隆与连接- 1. 安装 **Python**。

- 2. 克隆项目。

- 3. 验证 ADB 连接。

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQa1gGqmnr0RkApg85IXotpR8RricTibLgvvUSPOxZ8CCRBQuibqtdey6WicBRicZkUFegs2XhIkc80YcA/640?wx_fmt=png&from=appmsg)

3. 模型部署要求模型部署对硬件有一定的要求。

- • **本地部署要求：** 官方最低要求内存**大于或等于 32GB**。

- • **替代方案：** 可以选择直接调用魔社区（Mo Community）上线的模型，避免自行部署。

4. 支持的应用范围项目支持的应用非常广泛，基本上覆盖了我们平时所使用的软件，例如：

- • **社交工具：** 微信、QQ、微博。

- • **购物平台：** 淘宝、京东、拼多多。

- • **生活服务：** 美团外卖等。

**
**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

项目地址：

https://github.com/zai-org/Open-AutoGLM

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)