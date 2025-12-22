---
title: GitHub 15k Claude Code Router：让 Claude Code 接入任意模型自由发挥！
date: 2025-08-25 23:57:34
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **。推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近看到Claude Code 很火，但是很多限制导致国内没办法接入，我在GitHub 上看到对应的开源项目 ——  Claude Code Router。

它由 musistudio 推出，让你能在使用 Claude Code 时灵活切换 AI 模型，抛开 Anthropic 限制，享受自由又高效的开发体验。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRiaXbI4kHOMApGReOD0oP7G0ibs9Pmmd39icrMy0FiaricKibgaq3ABrJPvOicyGzVD8XCNseicZ3VEaZc0w/640?wx_fmt=png&from=appmsg)

**
**

### 它为什么特别棒？
- • **无需 Anthropic 账号**：直接使用你喜欢的模型平台。

- • **支持多种模型提供商**：覆盖主流 AI 模型，适应各种任务场景。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRiaXbI4kHOMApGReOD0oP7GYxjECXErrNyFicaQDqOCvTkLiaSKYSsGcFMhm7ykz4VmxZ5HKjt1l8Sw/640?wx_fmt=png&from=appmsg)

- • **实时切换模型**：使用 `/model provider,model_name` 命令轻松更换模型，极大提升灵活性。

- 

- • **智能路由能力**：根据任务类型（默认、背景计算、复杂推理、长上下文）自动选配模型。

- • **配置可扩展**：支持自定义请求/响应转换；还能嵌入 GitHub Actions，自动化触发任务 。

- 

## 如何快速上手？
### 安装流程：
`# 安装 Claude Code
npm install -g @anthropic-ai/claude-code

# 安装 Claude Code Router
npm install -g @musistudio/claude-code-router`配置 `~/.claude-code-router/config.json`（可参照模板），内容包含：

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRiaXbI4kHOMApGReOD0oP7GXGtibRfJOCQEKfg0PBOlL2Ppoic34p4icRGguYy4PtEtGQqNMP1h5LMkg/640?wx_fmt=png&from=appmsg)

- • 支持的 Provider（如 OpenRouter、DeepSeek）及其 API 地址和 Key

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRiaXbI4kHOMApGReOD0oP7GY97HvkBjda5OVcaoFOdleM4tacp9Kg3d7J14QqaKQR3JPZjn9mLtOA/640?wx_fmt=png&from=appmsg)

- • 路由规则，定义哪个模型用于 default、think、longContext 等场景。

### 使用体验：
`ccr code

`![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRiaXbI4kHOMApGReOD0oP7GATzIpW54DZZOnnJhMBv1xRAHaIaNzLXRC5icC3lov7UWDU1Xt5ySy7A/640?wx_fmt=png&from=appmsg)

## 总结推荐理由
优势
描述
**打破壁垒**不再依赖 Anthropic，使用更多模型平台
**自由路由**任务类型区分清晰，模型分配高效精准
**灵活切换**`/model` 指令动态切换更机动
**自动化适配**支持 CI/CD，适合自动脚本使用

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