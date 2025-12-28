---
title: 开源的Agent排名——N8N
date: 2025-10-23 23:43:09
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近有一个奇思妙想的想法，把自媒体上说的很火的开�?Agent 做一个排名测�?�?比如说从安装部署、对于国内友好度、以及小白的使用，当然有可能很多我安装不成功 �?我就直接给出垃圾评价，所以能够安装成功的才能得分。直接给�?顶级 、一�?、NPC 、拉完了 四个级别。�?

今天测试的是 N8N �?这个一个已经在 GitHub 超过 100 k Stars ，开源数�?

直接是顶级�?

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrSvbibiczH4bDgPaLDJzHk6lb3hKicxbtOVbbQyicpbo5q7DkqB2QJicx3kRl4ZmJ3Kfrdv9FQdoibYDwXw/640?wx_fmt=jpeg&from=appmsg)

N8N 的安装相对很简�?�?可以通过 node 直接安装 ，相比起来docker 安装�?npn 安装 更加简单，这一波也直接给到了顶级�?

### 快速上手教�?
n8n 的安装非常简单，以下是两种常用方式：

**方式一：使�?npx（需 Node.js�?*

`npx n8n`**方式二：使用 Docker**

`docker volume create n8n_data
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`安装完成后，访问 `http://localhost:5678` 即可开始使用编辑器�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSvbibiczH4bDgPaLDJzHk6lbRTeibHwpiaTrXUT1IWhqMiaiahB5VykiaSP4EoooRXZ10xAO182Ispda3wg/640?wx_fmt=png&from=appmsg)

在国人友好度来说只能说一般， 全是英文需要进行对外的翻译，使用上需要自己配置各�?API 接口，国内食用度 NPC 。但是不缺乏一些极客大佬来接入一些国外的 API 接口，毕�?n8n 的生态没话说和上一�?langflow 比起来强�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSvbibiczH4bDgPaLDJzHk6lbvDhtFIVoGoIeMueOGiaC24ibkIziaukPia90N11ib2W2gQEJZOcQAAaVM4A/640?wx_fmt=png&from=appmsg)

模板提供: 将模板复制为JSON, 导入即可使用�?提供专业社区上面有近 400 个免费模板。上手难度一般�?

### 核心功能亮点
- 1. **代码与可视化并存**�?

- •�?*可视化界�?*：通过拖拽节点轻松构建工作流，无需编写代码�?

- •�?*自定义代�?*：支�?JavaScript/Python，甚至可以引�?npm 包，满足高级开发需求�?

- 2. **原生 AI 能力**�?

- �?基于 **LangChain** 构建 AI 代理工作流，轻松集成自己的数据和模型�?

- �?内置 AI 节点（如 OpenAI、Anthropic 等），直接调用大语言模型处理任务�?

- 3. **强大的集成生�?*�?

- �?支持 **400+ 应用和服�?*，包�?Slack、Google Sheets、GitHub、Notion 等�?

- �?社区提供了�?*900+ 现成模板**，开箱即用，大幅提升效率�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSvbibiczH4bDgPaLDJzHk6lbA0mRK8CcBwVkBGYk54zoV0htCZnr5RnKibEXG3cJv6zaCcElpHcibfXQ/640?wx_fmt=png&from=appmsg)

- 4. **企业级特�?*�?

- �?高级权限管理、单点登录（SSO）、离线部署等，满足安全与合规需求�?

- �?通过公平代码许可，源码始终可见，可自行扩展和修改�?

- 5. **活跃的社区支�?*�?

- �?由�?*556 名贡献�?*共同维护，问题修复和功能更新非常迅速�?

- �?官方论坛和文档齐全，遇到问题能快速找到解决方案�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSvbibiczH4bDgPaLDJzHk6lb9M14AVCtXCPPI3ehsagg9Qokjm9PkQticicAyUWEY8LKRZyLpIWIKFtw/640?wx_fmt=png&from=appmsg)

MCP 提供:  GitHub 上有开源的 N8N 开源，通过自然语言生成工作流，尝试安装没有成功 —�?拉完了�?

### 总结

N8N 相对来说功能上较强，安装简单容易上手有模板可以用，就是调用 API 费用问题�?国内支持 DeepSeek �?国外 API 支持较多�?

**项目地址**�?
👉 https://github.com/n8n-io/n8n

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经�?4000 名小伙伴加入了，如果你也想着�?AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵�?

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[开源的Agent排名——langflow 。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491617&idx=1&sn=4d07f89e9874cc3b9a978e7de27473ed&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)