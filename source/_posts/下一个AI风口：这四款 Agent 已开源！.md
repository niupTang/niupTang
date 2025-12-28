---
title: "下一个AI风口：这四款 Agent 已开源！"
permalink: 下一个ai风口-这四�?agent-已开�?
date: 2025-05-29 22:42:41
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

大家好，我是牛皮糖！�?025年初到现�?Agent  项目是最火的方向，从Manus 的一夜爆火到红衫资本的闭门会�?

技术浪潮的演进，往往是层层叠加、不断放大的�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSuO4iarAoyMQugE3jtGDfzicx5k0iaROXSxBvjQz0XuGvhBTKIU8IPlsTucjduYicwjCc6TrUKhhT3rQ/640?wx_fmt=png&from=appmsg)

2025年开源模型生态图

从模式侧到框架，再从框架到应用。相对而言我介绍的多数为应用侧，AI 落地已经是事实，现在相对的是找到更适合的项目，切入到应用中�?

最近连续介绍了 4 �?Agent 的项目，又开源本地部署的，有适合云端工作流的，也有企业级项目�?

### **1. AgenticSeek - 完全本地的AI任务执行中枢**
**GitHub**: Fosowl/agenticSeek
**
**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSuO4iarAoyMQugE3jtGDfzicdgW3pyx4ZH00FhMKDgxunFStia0T5RAGIDzzYepGVGx7BmUo6GSibVag/640?wx_fmt=png&from=appmsg)

- •�?*隐私优先**：所有数据处理均在本地完成，彻底规避云端AI的隐私风险，适合医疗、金融等敏感场景�?

- 

- •�?*多模态执�?*：支持代码生成（Python/Go）、网页自主搜索、复杂任务拆解（�?规划三日旅游行程并预订酒�?）�?

- 

- •�?*Manus AI替代方案**：提供类似云端AI助手的体验，但完全离线运行�?

**技术亮�?*�?
�?内置RAG引擎，本地知识库实时更新
�?任务分解树可视化，调试复杂逻辑更直�?

[下一个AI风口：自主Agent已开源！比Manus更懂多任务协同](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247490226&idx=1&sn=ab86adcb0f3c57b423c5094c7e648f89&scene=21#wechat_redirect)

### **2. PySpur - 拖拽式AI工作流工�?*
**GitHub**: PySpur-Dev/[pyspur](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247490172&idx=1&sn=1ba36d0855cbca11c9c12e7aa75f6634&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSuO4iarAoyMQugE3jtGDfzicC7qygDxat3zdtfS9hPuD8hQIIqtB0AnNRASXuxaDPAs1VZVL3wTuGw/640?wx_fmt=png&from=appmsg)

- •�?*LEGO式搭�?*：通过拖拽100+预制模块（LLM调用/向量检�?多模态处理）�?5分钟构建定制化AI流水线�?

- 

- •�?*全栈支持**：无缝对接HuggingFace/OpenAI等模型，兼容Pinecone/Milvus等主流向量数据库�?

- 

- •�?*实时热调�?*：工作流运行时修改节点参数，结果即时刷新，加速实验迭代�?

### **3. AgentGPT - 云端AI代理调度�?*
**GitHub**: reworkd/AgentGPT

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSuO4iarAoyMQugE3jtGDfzicY5Y99PBlFgFN9qagrDK0v5G5dAfHQBWw22BCxNcdHRo3icvFUgWP1BA/640?wx_fmt=png&from=appmsg)

- •�?*任务自动化引�?*：输�?开发一个贪吃蛇游戏"，自动分解为代码编写→测试→优化子任务�?

- 

- •�?*互联网级操作**：直接调用搜索引�?API获取实时数据（如股价查询、竞品分析）�?

- 

- •�?*人类监督模式**：关键节点暂停等待确认，平衡自动化与可控性�?

**架构优势**�?

�?基于OpenAI函数调用规范，扩展新工具仅需添加JSON描述
⚠️ 依赖GPT-4等云端模型，不适合高隐私需求场�?

### **4. Activepieces - 企业级自动化乐高**
**GitHub**: activepieces/activepieces
**
**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSuO4iarAoyMQugE3jtGDfzicuXGJMnCuDHicLtBuIybdMX8AjLPbibKhapKcqbgNR1dQGibGlASw3nb7g/640?wx_fmt=png&from=appmsg)

- 

- •�?*300+即插即用组件**：从Slack消息推送到Stripe支付处理，开箱即用�?

- •�?*混合部署**：支持SaaS模式或Docker全本地化部署，满足不同合规要求�?

- •�?*AI增强**：内置LLM模块，可组合传统自动化与AI能力（如邮件自动分类+智能回复）�?

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSuO4iarAoyMQugE3jtGDfzic8phZS7j9dw5R7t2dZc8G4AMbtpg7lpVO6UWWrxYxBXz4nfEzPncicAg/640?wx_fmt=png&from=appmsg)

**
**

[GitHub 开源项�?| ActivePieces：自动化工作流神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489854&idx=1&sn=ec95b6c24f5a83521085e91365c7d367&scene=21#wechat_redirect)
[AgentGPT：一个在浏览器运行的Agent](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247490246&idx=1&sn=74f3426cc511a6141939dda1ed7b73d5&scene=21#wechat_redirect)
[疯狂斩获1.9k star,开源AI神器AingDesk：一键部署上百模型，本地运行还能联网搜索！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247490235&idx=1&sn=15d201ff6ce4a44219048cd72ffadd09&scene=21#wechat_redirect)

[下一个AI风口：自主Agent已开源！比Manus更懂多任务协同](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247490226&idx=1&sn=ab86adcb0f3c57b423c5094c7e648f89&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

每日更新，期待与你一起成�?

欢迎围观副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)