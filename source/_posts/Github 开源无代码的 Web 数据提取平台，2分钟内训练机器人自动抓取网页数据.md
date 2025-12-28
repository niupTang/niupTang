---
title: "Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据"
permalink: github-开源无代码的-web-数据提取平台-2分钟内训练机器人自动抓取网页数据
date: 2024-11-03 19:45:08
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天我要给大家介绍一个非常强大的开源无代码Web数据提取平台——**Maxun**。Maxun让您在短短2分钟内训练机器人，自动抓取网页数据，让网页数据提取变得前所未有的简单！其实和RPA 差不多对于小白来说更加容易上手。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTvHSVgiaZ3mRB48Shmo3mj7ezXXOkQYShgTEJiaoiapbkaPensP9rMuJs2PRicQe8jxFicR07BYgJrcMg/640?wx_fmt=png&from=appmsg)

**安装与本地设置** Maxun的安装过程非常直接。首先，确保您的系统上安装了Node.js、PostgreSQL、MinIO和Redis。然后，通过以下命令开始安装：

`git clone https://github.com/getmaxun/maxun
cd maxun
npm install
cd maxun-core
npm install
npm run start`完成以上步骤后，您可以通过`http://localhost:5173/`访问前端，通过`http://localhost:8080/`访问后端。

**环境变量** Maxun的运行需要一些环境变量，包括但不限于：

- • `NODE_ENV`：定义应用程序环境（development，production），默认为development。

- • `JWT_SECRET`：用于签署和验证JSON Web令牌（JWT）以进行身份验证的密钥。

- • `DB_NAME`、`DB_USER`、`DB_PASSWORD`、`DB_HOST`、`DB_PORT`：连接Postgres数据库所需的详细信息。

- • `ENCRYPTION_KEY`：用于加密敏感数据（代理、密码）的密钥。

- • `MINIO_ENDPOINT`、`MINIO_PORT`、`MINIO_ACCESS_KEY`：连接MinIO存储所需的详细信息。

- • `REDIS_HOST`、`REDIS_PORT`：连接Redis服务器所需的详细信息。

**Maxun的工作方式** Maxun允许您创建自定义机器人，模拟用户操作并提取数据。机器人可以执行捕获列表、捕获文本或捕获屏幕截图等操作。创建机器人后，它将持续为您提取数据，无需人工干预。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTvHSVgiaZ3mRB48Shmo3mj7ucdiatpTmwQiaV8CRMX8nc35RBGibO21OlN5BhLC0oBhkj3QkVzjfp5Mw/640?wx_fmt=png&from=appmsg)

**Maxun的特点**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTvHSVgiaZ3mRB48Shmo3mj7wfQv0iatkVRFxNA2Dp27WKtyCaibprVFPSicl7Q31IKmHZeP6H0lr7PDg/640?wx_fmt=png&from=appmsg)

****

- • ✨ **无代码提取数据**：无需编写代码即可提取网页数据。

- • ✨ **处理分页和滚动**：自动处理网页的分页和滚动，提取更多数据。

- • ✨ **按照特定时间表运行机器人**：设定时间表，让机器人在特定时间自动运行。

- • ✨ **将网站转变为API**：将网站数据转换为API，方便数据的进一步使用。

- • ✨ **将网站转换为电子表格**：直接将网站数据转换为电子表格格式。

- • ✨ **适应网站布局变化**（即将推出）：自动适应网站布局的变化，保持数据提取的连续性。

- • ✨ **登录后提取，支持双因素身份验证**（即将推出）：支持登录后的数据提取，包括双因素身份验证。

- • ✨ **集成**（目前为Google Sheet）：与Google Sheet集成，方便数据的存储和分析。

**Maxun Cloud** Maxun还提供了托管云版本，无需管理基础设施即可运行Maxun并大规模提取数据。Maxun云还处理反机器人检测、具有自动代理轮换的庞大代理网络和CAPTCHA解决。如果您对此感兴趣，可以加入我们即将推出的云候补名单。

项目地址：

**https://github.com/getmaxun/maxun**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562PRME95JfKlQIXNIicIbUXpeouLU3upiazIm774Q0IPHORgZtLXNauthoPTZgkziaC8TZefT3vO7lC9A/640?wx_fmt=jpeg)