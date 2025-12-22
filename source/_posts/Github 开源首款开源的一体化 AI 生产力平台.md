---
title: Github 开源首款开源的一体化 AI 生产力平台
date: 2025-08-24 22:31:34
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

大家好，我是牛皮糖！今天给大家带来一个AI MI平台的 GitHub 项目 —— **Magic**（3.4k⭐），它被称为“首款开源的一体化 AI 生产力平台” 可以统计企业内部消息、将人和人之间的消息统计整理，功能强大得让人忍不住惊呼一句：**“这是生产倒逼人升级的节奏！”**
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3unYF2FkwVALGicQPkcosXBYX19ZBibZkcxSoUbsgeficqVR9icB0ArIibqcg/640?wx_fmt=png&from=appmsg)

## 项目简介
**Magic** 是由 GitHub 用户 `dtyq` 开源的 **端到端 AI 生产力平台**，它整合了智能代理、工作流引擎、IM 聊天、在线协作文档等多个功能模块，构成了一个完整的企业级 AI 应用生态。(GitHub)

官网一眼就能看到其愿景：让企业 “快速构建部署 AI 应用，产能提升 100 倍”——听起来就让人充满期待。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3u7YDM4Z7sibvJRNPWyvibM3mNu2NjJTXbEtdlAbTnbS8j3oANm9SriaDzQ/640?wx_fmt=png&from=appmsg)

## 核心模块一览
Magic 的产品矩阵不仅丰富，还涵盖多个业务场景：

- • **Super Magic** 通用型 AI 智能体，支持“理解指令 → 规划任务 → 执行操作 → 修正错误”的完整流程，自主性十足。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3uaJ5cORb6jTPj4n0MIE1OGEQXu4uOq7oWEibGfeaWQ4m0DrKw0OrVEQA/640?wx_fmt=png&from=appmsg)

- 

- • **Magic IM** 企业级聊天系统，兼顾 AI 辅助对话和成员间协作，支持知识库检索、上下文理解和权限隔离。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3uIhLAQSia2DDVeQg5dPvhKUAl23QtL8vOe2KAFTI3ribFZMibrEO5f1YYg/640?wx_fmt=png&from=appmsg)

- 

- • **Magic Flow** 可视化 AI 工作流编排平台，能高效串联多个模块协作完成任务。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRJBhujeib7LiaNhR02x7xF3uPUaKBeLAYSkQ1dORNElxx7bbQhV8icqpFHBVbnyxVia9xvgj5DBq0WSg/640?wx_fmt=png&from=appmsg)

- • **Teamshare OS**（即将发布） 带 AI 助力的在线协作办公平台，包括文档、表格、任务板和知识管理，目标全面替代传统办公系统。

此外，还有支撑工具如 **Agentlang**（自然语言 AI 代理框架）、**Magic Lens**（HTML 转 Markdown 工具）等完善生态。

## 安装与部署指南（社区版 / 自托管）
如果你想体验 Magic 的自托管版本，以下是简单部署指南：

- 1. 克隆仓库并进入目录：`git clone https://github.com/dtyq/magic.git
cd magic`

- 2. 启动服务：```
`./bin/magic.sh start`
```
支持前台、后台（daemon）运行以及日志查看与状态查询。(GitHub)

- 3. 配置 AI 模型环境变量 `.env` 与 `.env_super_magic`，确保至少有一个 LLM 可用。

- 

- 4. 服务启动后可访问：

- • API 服务：`http://localhost:9501`

- • Web 应用界面：`http://localhost:8080` （默认账号：`13812345678 / letsmagic.ai`）

## 为什么推荐 Magic
总结一下，**Magic 就像给企业注入了“智能大脑”**，不仅能协助办公、管理、研发等，更在 AI 工具集成与自动化方面迈出了一大步。对于想提升协作效率、拥抱 AI 助力的团队来说，这简直是一个神器级开源项目！

项目地址：

https://github.com/dtyq/magic

**
**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

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