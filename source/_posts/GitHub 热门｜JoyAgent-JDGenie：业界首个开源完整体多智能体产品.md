---
title: GitHub 热门｜JoyAgent-JDGenie：业界首个开源完整体多智能体产品
date: 2025-08-26 22:20:03
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

大家好，我是牛皮糖！今天给大家带来一个“狠角色”——**JoyAgent-JDGenie** 。

在大模型和智能体爆火的当下，不少开源项目要么只给 SDK，要么只提供框架，真正能做到**开箱即用**的完整产品却凤毛麟角。很多时候，开发者还要自己拼拼补补，才能跑起来一个像样的 Agent 应用。

而京东开源的 **JoyAgent-JDGenie**，直接把这条路打通了，解决了“快速构建多智能体产品的最后一公里问题”。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTdD5haqmWqrE4ICM4PGSyeSu1KKLVIPNSlhbZ22f8ib5j6f7HHNUhiaFFRxJc0Fsp1MTsWOLfNXjeg/640?wx_fmt=png&from=appmsg)

## 🏆 什么是 JoyAgent-JDGenie？
简单来说：

- • 它不是单纯的 SDK，不需要你二次拼装。

- • 它也不是只给你一个框架，让你自己摸索。

- • 它是一个**端到端完整多智能体产品**，即开即用，还支持二次开发。

比如你输入一句话： 👉「给我做一个最近美元和黄金的走势分析」

JoyAgent-JDGenie 可以直接产出 **网页版报告** 或 **PPT 文档**，而不是只返回一堆文本。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTdD5haqmWqrE4ICM4PGSyel7Mq8C2y3zk646fhoQIdku9gQYZmEsqKvGBwaQk6obrhmCw1y6lYUg/640?wx_fmt=png&from=appmsg)

## ⚡ 功能亮点
- • **完整产品，开箱即用** 提供前端、后端、框架、引擎、核心子智能体（报告、代码、PPT、文件等），真正的产品级体验。

- • **多智能体框架协议** 支持 **React 模式**、**Plan & Executor 模式**，让不同任务都能灵活调度。

- • **子 Agent 可插拔** 想要天气查询？报表生成？文件总结？直接新增一个小智能体挂载即可。

- • **多种交付样式** 支持 **HTML、PPT、Markdown** 输出，满足不同场景需求。

- • **高性能执行引擎** 内置高并发 DAG 调度，能保证复杂任务流畅执行。

- • **创新点**

- • **多层级多模式思考**：既能做整体规划（work level），也能细化执行（task level）。

- • **跨任务记忆**：类似“记忆体”，能跨任务学习相似历史，提升稳定性。

- • **工具演化机制**：能把已有工具拆解为原子工具，再自动组合生成新工具，大幅减少开发成本。

## 📊 性能表现
在 GAIA 榜单上的表现相当亮眼：

- • Validation 集准确率 **75.15%**

- • Test 集准确率 **65.12%**

超越了 OWL（CAMEL）、Smolagent（Huggingface）、AutoAgent（港大）等知名开源产品。

相比 SpringAI（依赖阿里云百炼）、Coze（依赖火山引擎），JoyAgent-JDGenie **更轻量，不依赖大厂生态**，部署起来更自由。

## 🚀 快速开始
支持两种方式：

- 1. **Docker 一键启动**（推荐）

`git clone https://github.com/jd-opensource/joyagent-jdgenie.git
cd joyagent-jdgenie
docker build -t genie:latest .
docker run -d -p 3000:3000 -p 8080:8080 -p 1601:1601 --name genie-app genie:latest`然后访问 

👉 `localhost:3000`

- 1. **手动部署** 需要 JDK17 + Python3.11 环境，支持 step-by-step 部署或一键脚本启动。 详细步骤见官方文档 & 视频演示。

- https://www.bilibili.com/video/BV1Py8Yz4ELK/?vd_source=a5601a346d433a490c55293e76180c9d

## 🔧 二次开发
开发者还可以：

- • 添加自定义 **MCP 工具**（如天气、火车票）。

- • 挂载新的子 Agent（继承 BaseTool 接口即可）。

- • 扩展 UI、优化后端、引入新模型（如 DeepSeek、OpenAI、Claude 等）。

## 📌 总结
**
**

JD 这次还是超级给力的，如果你正想**快速落地一个多智能体应用**，JoyAgent-JDGenie 可以说是当前最值得一试的开源方案。

🔗 项目地址： 👉 https://github.com/jd-opensource/joyagent-jdgenie

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

常驻小尾巴

很多小伙伴想用 AI 做副业但是不知有什么项目可以赚钱，大冲这个AI私域赚钱星球，现在还是 59 元 一年，一万多个星球中，已经连续 4 个月排名前 3，很多超级大佬都在亲自推荐，性价比极高的星球，很多人在这里搞到几千上万块。

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3ueJSa3BmYhDBdo2SpP0BLicmW0koVabTULgiaZkibuOcvm4yVJEb9ckz5Q/640?wx_fmt=jpeg&from=appmsg)

星球能免费参加几十个小项目，有教练和教程，直播答疑，打卡还可以退还押金，所有历史小项目文档全公开(以后可自学)。

项目有：闲鱼虚拟资料，小红书引流，小红书虚拟资料，网盘拉新，闲鱼无货源，闲鱼电影票， AI写作（教案，PPT，答辩，简历，数据分析，VBA，商业计划书等），AI 公众号爆文，AI编程，AI 智能体，公众号 SEO，知乎，私域 CPS 分销等项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3uwDRiabBSfcQmeicWb8dFS1q4pOqVMmR3y4OD5nLbR3KktrpxGNpibsRSg/640?wx_fmt=png&from=appmsg)

关注公众号回复 AI 副业星球即可获取 26 元的优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3ujXhDW5iclVpibRRH9wDHicKLDUQsh2icibPVAyHyszlnxL3FfhVADl6szPA/640?wx_fmt=png&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)