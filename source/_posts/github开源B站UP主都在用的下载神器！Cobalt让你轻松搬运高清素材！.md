---
title: github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！"
date: 2025-04-01 21:41:55
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天我要向大家介绍一款非常实用的开源软件——Cobalt，这是一款跨平台的流媒体下载工具，能够帮助用户轻松下载来自YouTube、Bilibili、TikTok等主流平台的视频和音频内容。Cobalt的最大特点是简洁无广告、操作简单且支持丰富的下载选项。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2MKMbPKZ9EkBusEGcNuCkO3gwD2NsPeZc0jnk3RIpzDTtC7msYhmiaPJA/640?wx_fmt=png&from=appmsg)

## Cobalt 主要特点
- • **跨平台支持**：Cobalt支持通过网页版直接使用，也可以部署在Windows、Mac、Linux等系统上，通过Docker容器运行。

- • **多平台兼容**：支持下载来自YouTube、Bilibili、TikTok、Instagram、Twitter等30+主流平台的视频和音频内容。

- • **无广告无追踪**：Cobalt承诺绝不包含广告和用户追踪器，保护用户隐私。

- • **高质量下载**：支持最高8K视频质量下载，并提供多种视频编码格式和音频比特率选择。

- • **字幕自动提取**：能够自动提取视频中的字幕，方便用户使用。

- • **开放API**：提供开发者友好的API接口，可以集成到其他应用中。

## Cobalt 的应用场景
- • **内容存档**：保存有价值的教学视频、讲座内容供离线学习。

- • **素材收集**：创作者可以下载参考视频作为创作素材（请遵守版权规定）。

- • **网络条件受限时**：在网络不稳定的环境下预先下载内容观看。

- • **音频提取**：从视频中提取高质量音频用于播客或音乐欣赏。

## 使用 Cobalt 的步骤
- 1. **获取Cobalt**：可以直接访问Cobalt官网使用网页版，或者从GitHub下载自托管版本。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2MZvTq7C7viaW3CUCwwltR6ialyQyrI4rT9qlwPQfI8SUvLgFVRV86Tw3Q/640?wx_fmt=png&from=appmsg)

- 2. **复制链接**：在视频平台找到想要下载的视频，复制其URL地址。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2MZ27SLm4ouHicggKBANAx7bHVZVTZe7XhrNMqgMhPts2f0rVeY6t0mKA/640?wx_fmt=png&from=appmsg)

- 3. **粘贴链接**：将复制的链接粘贴到Cobalt的输入框中。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2M3pKUTxyziaOvOSTRsSZW8aAoQyd4S7ia8eLLY5KQN6ylicdMO2r2FN7icQ/640?wx_fmt=png&from=appmsg)

- 4. **选择选项**：根据需要选择视频质量、格式（视频+音频/仅音频）等参数。

- 5. **开始下载**：点击下载按钮，等待处理完成后即可获取文件。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2M8snibmSAdc5Q6PBddPbkibIQz22FfdArIbnj66ldP3BhBcAp40Ms24qg/640?wx_fmt=png&from=appmsg)

## 高级使用方法
对于技术用户，Cobalt还提供更高级的部署方式：

### Docker部署（推荐）
`services:
  cobalt-api:
    image:ghcr.io/imputnet/cobalt:10
    ports:
      -9000:9000/tcp
    environment:
      API_URL:"http://localhost:9000/"
      DURATION_LIMIT:"10800"
    restart:unless-stopped`运行`docker compose up -d`即可启动服务。

### Node.js本地运行
- 1. 克隆仓库：`git clone https://github.com/imputnet/cobalt`

- 2. 安装依赖：`pnpm install`

- 3. 配置环境变量

- 4. 启动服务：`pnpm start`

## 注意事项
- • **版权声明**：Cobalt不是盗版工具，只能下载免费的、可公开访问的内容。使用时请尊重原创者版权。

- • **使用限制**：默认设置3小时以内的视频下载限制，防止滥用。

- • **隐私保护**：Cobalt不会存储用户的下载历史或个人信息。

## 项目信息
Cobalt是完全免费的开源项目，采用AGPL-3.0开源协议，源代码托管在GitHub上，目前已有超过30.2k星标，显示出其受欢迎程度。

项目地址：https://github.com/imputnet/cobalt

官方网站：https://cobalt.tools/

Cobalt作为一款纯净高效的下载工具，简化了从互联网获取媒体内容的过程，是内容创作者、教育工作者和普通用户的实用工具。它的开源特性也意味着社区可以持续改进和扩展其功能。

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)• [  github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)  

• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)