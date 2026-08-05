---
title: "无需�?SQL！！Vanna AI 教你“聊天”式提问，自动生成查询！"
permalink: "无需�?sql-vanna-ai-教你-聊天-式提�?自动生成查询"
date: 2025-07-17 22:54:08
categories:
  - 开源项目
tags:
  - GitHub
  - 开源项目
cleanup_status: needs_review
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！不知大家有没有遇到只想说话然后去解决在数据分析中手动�?SQL。现在有很多 Text-to-SQL 工具 —�?Vanna，在 GitHub  上特别受欢迎将近已经�?2 w Stars�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRqKGg6GicVvO9NJicejI2gJbiaTxic65Axo3yz5QOPyRgsic3IGVG400icKvJwhJomqaXLf9bX0D2Mf3hw/640?wx_fmt=png&from=appmsg)

从本质上讲，Vanna 是一�?Python 包，它使用检索增强功能来帮助您使�?LLM 为数据库生成准确�?SQL 查询�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRqKGg6GicVvO9NJicejI2gJbGSfpbic1oGRuDVnzqia4MkyyetSEfTFibdza5ibZZU9QRNKKHibHNicrRCow/640?wx_fmt=png&from=appmsg)

## �?核心亮点

•�?*两步走设�?*：先用 `train()` 建模，再用 `ask()` 提问拿结果�?
•�?*支持多种数据�?*：Postgres、MySQL、Snowflake、DuckDB、BigQuery、SQL Server 等常见平台都能接入�?
•�?*多种交互方式**：提�?Jupyter Notebook、Streamlit、Flask、Slack、Chainlit UI，灵活适配自用或团队协作�?
•�?*LLM 可�?*：支�?OpenAI、Anthropic、Google Gemini、HuggingFace、本�?Ollama 等多家模型�?
•�?*结合向量�?*：ChromaDB、Qdrant、FAISS 等多�?VectorStore 加强 RAG 检索效果�?
**
**

## 🚀 快速体�?
`pip install vanna`然后打开 Python �?Jupyter�?

`import vanna
from vanna.remote import VannaDefault

# 使用案例数据�?
vn = VannaDefault(model='chinook', api_key=vanna.get_api_key('邮箱'))

# 连接样例 SQLite
vn.connect_to_sqlite('https://vanna.ai/Chinook.sqlite')

# 直接聊天式提�?
vn.ask("What are the top 10 albums by sales?")`也可以启�?Web 服务�?

`from vanna.flask import VannaFlaskApp
VannaFlaskApp(vn).run()`它会启动一�?Web UI，可聊天输入 SQL 查询，让体验更直观�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRqKGg6GicVvO9NJicejI2gJbNibpu4RxgU77shfSichDuugzOnHcou0TRKCeCiafGC26jdm48pyyZxpOg/640?wx_fmt=png&from=appmsg)

项目地址�?

https://github.com/vanna-ai/vanna

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