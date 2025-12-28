---
title: "GitHub 开源项�?| 反AI爬虫神器 Anubis：用工作量证明保护你的网�?
permalink: github-开源项�?反ai爬虫神器-anubis-用工作量证明保护你的网站
date: 2025-05-06 20:30:16
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！AI 爬虫泛滥的今天，发现GitHub上面有很多反爬虫的工具—�?*Anubis 一个基于工作量证明（PoW）的反爬虫代理工具，专为抵御AI公司的大规模数据抓取而设计。它的核心思想是：****让机器人的访问成本变高，让人类的访问依然流畅**�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrT8CibS9DdS5iaTmIibuBQXC3kwCicPBtSRrbOWMgEAQ5PticsKV0TicnwFkW2W1wZHqfo66hBlbH20U0Rg/640?wx_fmt=png&from=appmsg)

### Anubis 特点
- •�?*高效防护**：Anubis 通过工作量证明（Proof-of-Work）挑战来验证连接的合法性，从而有效保护上游资源免受爬虫机器人的攻击�?

- •�?*轻量级设�?*：Anubis 轻量级的特性使其几乎不会对服务器性能造成负担，即使是小型网站也能轻松部署�?

- •�?*灵活配置**：虽�?Anubis 会对一些小型爬虫进行阻拦，但它也提供了灵活的配置选项，允许你明确允许某些“好爬虫”（如互联网档案馆）访问你的网站�?

- •�?*开源免�?*：Anubis 是一个开源项目，基于 AGPL-3.0 许可证，完全免费使用，你可以根据自己的需求进行定制和优化

### **为什么需要Anubis�?*
- •�?*AI爬虫的泛�?*：OpenAI、Mistral等公司的爬虫疯狂扫描网页，占用带宽，甚至导致服务器过载�?

- •�?*传统防御失效**：封禁IP或UA会被爬虫绕过，而Anubis的PoW机制迫使爬虫付出算力成本�?

- •�?*保护隐私与内�?*：防止敏感数据被AI公司无偿抓取用于训练模型�?

### **快速部署指�?*
- 1. **安装Docker**：确保服务器已安装Docker和Docker Compose�?

- 2. **配置`docker-compose.yml`**：`services:
  anubis:
    image: ghcr.io/techarohq/anubis:latest
    environment:
      TARGET: "http://your-backend-service"  # 替换为你的后端地址
      DIFFICULTY: "5"  # 难度级别
    ports:
      - "8080:8080"  # Anubis代理端口`

- 3. **启动服务**：`docker-compose up -d`

- 4. **验证**：访问`http://你的服务器IP:8080`，首次打开会触发JS计算挑战�?

### **适用场景**
- •�?*个人博客/论坛**：阻挡AI爬虫，降低服务器负载�?

- •�?*企业API服务**：防止数据被批量抓取，保护商业价值�?

- •�?*开源项目托�?*：如Arch Linux Wiki已部署Anubis对抗爬虫�?

### **注意事项**
- •�?*性能影响**：高难度设置可能影响真实用户体验，建议逐步测试调整�?

- •�?*IPv6支持**：默认DNSBL检查可能误判，需在`botPolicy.json`中禁用�?

### **免费开源声�?*
https://github.com/TecharoHQ/anubis
文档详见：https://anubis.techaro.lol/docs

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

**DeepSeek相关**

# [DeepSeek V3可用�?5种精美知识卡片提示词](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485862&idx=1&sn=181eb3edade40af73928e89cd40ea6ec&scene=21#wechat_redirect)
[DeepSeek + 可灵制作视频](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489186&idx=2&sn=7aca6f49514ef83e186fd6ec389be7ef&scene=21#wechat_redirect)

# [DeepSeek 快速实现Word 文档排版](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485856&idx=1&sn=72851d4f4f86dee7f9f9fa0c1f8ee834&scene=21#wechat_redirect)
[DeepSeek + coze 做飞书知识库](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489249&idx=2&sn=fc09575fef051ba72b3bcd14efb25d49&scene=21#wechat_redirect)

[GitHub 8.5k Star Cherry Studio：多语言模型接入神器，DeepSeek 本地知识库也能轻松搞定！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489104&idx=1&sn=a61ab12bd428cbb224fb8a1d1909fb78&scene=21#wechat_redirect)

每日更新，期待与你一起成�?

欢迎围观AIP成长的副业知识星�?

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)