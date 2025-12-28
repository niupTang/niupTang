---
title: "微软开源神器Data Formulator：告别代码，用自然语言让数据说话！"
permalink: 微软开源神器data-formulator-告别代码-用自然语言让数据说话
date: 2025-03-11 23:01:03
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

**
**

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！“整理数据半小时，画图5分钟”——这是无数数据分析师的日常痛点。传统工具如Excel、ggplot2要求严苛的“整洁数据”格式，光是数据清洗就能逼疯半个团队。微软研究院最新开源的**Data Formulator**，却让数据可视化从“码农专属”变成了“动动嘴皮子”的轻松事。无需代码，拖拽+自然语言即可生成专业图表，甚至能一键接入国产大模型DeepSeek.V3！今天，我们就来拆解这款“懂人话”的开源利器。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRhF4ITHP84R6ZSl1CZAblLR2sE507aHhAfRicYQHGTRjibGhtub39N969Via0V0Rtm2ibqvuTAs71nOQ/640?wx_fmt=png&from=appmsg)

### **一、核心功能：从“数据打架”到“一键成图”的进化**
**1 双模交互：拖拽与对话的完美融合**

- • **小白友好**：通过界面拖拽字段，像拼积木一样设计图表。

- • **极客高效**：输入“统计前10大品牌销量，按纯电/混动分类”，AI秒级响应。

- • **线程回溯**：所有操作自动记录为“数据线程”，随时回溯调整步骤，避免推倒重来。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRhF4ITHP84R6ZSl1CZAblL8Ns8UBSxl8A2NzXF7fsabymD9GE5AqYDPAQVCsOx8yhibW3k8qtMITA/640?wx_fmt=png&from=appmsg)

**2. 复杂任务：从数据清洗到深度分析一条龙**
以电动汽车市场分析为例，用户可依次执行：
① 上传数据集 → ② 提问“各州纯电动车占比”生成地图 → ③ 追问“按品牌统计续航里程分布”生成箱线图 → ④ 筛选“仅特斯拉”对比年度趋势。全程无需手动处理数据格式。

### **二、技术亮点：开源+国产大模型适配的“中国攻略”**
**1. 无缝接入DeepSeek.V3，打造本土化工作流**
尽管官方文档未明示，开发者通过修改环境变量`OPENAI_BASE_URL`，成功将国产大模型DeepSeek.V3接入Data Formulator。这意味着：

- • **数据安全**：敏感数据无需出境，本地化处理。

- • **成本优化**：相比GPT-4，国产模型API成本更低。

- • **定制扩展**：支持通义千问、智谱清言等兼容OpenAI接口的国产模型。

**2. 工业级架构：Python后端+模块化设计**

- • **大数据支持**：基于Python处理，避免Excel卡顿问题，轻松应对百万级数据。

- • **透明可控**：生成图表时可查看底层代码与转换逻辑，杜绝“AI黑箱”。

- • **灵活部署**：通过Conda创建虚拟环境，一键启动Web界面，支持本地或服务器部署。

**3. 安全合规：微软级代码审计与漏洞响应**
作为微软官方开源项目，Data Formulator遵循严格的安全策略：

- • 漏洞报告需通过微软安全响应中心（MSRC）提交，禁止公开讨论。

- • 支持PGP加密通信，确保漏洞细节保密。

- • 提供完整代码路径与复现步骤要求，加速问题修复。

**体验总结**：
✅ **无代码门槛**：文科生也能快速上手。
✅ **动态衍生字段**：自然语言直接创建复杂指标。
❌ **图表精细度待提升**：如缺乏3D图表、动态交互功能。

**立即体验**：
🔗 GitHub仓库：

https://github.com/microsoft/data-formulator
📚 深度教程：CSDN博主《告别代码，Data Formulator用DeepSeek.V3实现智能绘图》

**互动话题**
你认为无代码数据分析会最先颠覆哪个行业？欢迎在评论区分享你的观察！

**牛皮糖说**：未来的数据科学家，可能不需要会写代码，但一定要学会“好好说话”。而Data Formulator，就是你的第一本“数据口语教科书”.

**
**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)• [  github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)