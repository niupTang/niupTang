---
title: "GitHub 12.2K Star！必备聚合阅读神�?NewsNow，告别信息焦虑！"
permalink: github-12-2k-star-必备聚合阅读神器-newsnow-告别信息焦虑
date: 2025-07-27 23:25:33
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

大家好，我是牛皮糖！每天打开 App，看新闻、刷资讯，是不是被“广�?低质量内容”搞得心态炸裂？
最近，我在 GitHub 上发现了一款宝藏项目—�?*NewsNow**，一个专为“内容高效获取”打造的聚合阅读神器�?*打工摸鱼必备，信息焦虑一键清空！**

**
**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRNcHrAKCxYahgDbkm1lwPZ14WFSm08yA5m5cMjibBMYPa5ibPD4kiaUbFevlJJ9SWIrqdW1FV4BHong/640?wx_fmt=png&from=appmsg)

## 功能特�?

- 优雅的阅读界面设计，实时获取最新热点新�?
- 支持GitHub登录及数据同�?
- 默认存储时间长为30分钟，登录用户可强制刷新获取最新数�?
- 根据内容源更新频率动态调整抓取间隔（最快每2分钟），避免间隙抓取导致IP被封�?
- 支持MCP服务�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRNcHrAKCxYahgDbkm1lwPZfKk7toW9pA1bMVnwcwiacbLq3rg53ADOhNjX2GV5DMZSGqZntzCVKmg/640?wx_fmt=png&from=appmsg)

### 🚀 三大部署方案任�?
**方案1：Cloudflare Pages（免费！推荐小白�?*- 1. **Fork项目**：点击这里一键fork

- 2. **配置环境变量**：`G_CLIENT_ID=你的GitHub应用ID  
G_CLIENT_SECRET=你的GitHub密钥  
JWT_SECRET=随便填个复杂字符串（建议用G_CLIENT_SECRET�? 
INIT_TABLE=true  # 首次运行必开！`

- 3. **绑定D1数据�?*（免费额度够用）�?

- �?在Cloudflare控制台创建D1数据�?

- �?修改`wrangler.toml`中的`database_id`

**方案2：Docker（适合有服务器的小伙伴�?*```
`# 一键启动（记得先填�?env文件�?
curl -O https://raw.githubusercontent.com/ourongxing/newsnow/main/docker-compose.yml
docker compose up -d`
```
**方案3：Vercel（需自备数据库）**⚠️ 需要额外配置PostgreSQL/MySQL

### 🔑 GitHub OAuth 配置秘籍
- 1. 进入GitHub开发者设�?

- 2. **回调URL�?*：`https://你的域名/api/oauth/github`

- 3. 权限勾选：`user:email`（仅需此一项！�?

### 💡 开发者特别提�?
`# 本地开发环境（Node.js 20+ required�?
corepack enable
pnpm i
pnpm dev`�?*自定义新闻源**？修改这两个目录�?

- �?前端展示规则：`shared/sources`

- �?爬虫逻辑：`server/sources`

### 🚨 常见翻车�?
- 1. **INIT_TABLE忘记�?*：首次运行后务必改为`false`

- 2. **D1数据库没绑定**：Cloudflare部署必看`wrangler.toml`

- 3. **爬虫被封**：修改`src/workers/*.ts`中的请求间隔

**现在就去搭建�?*
👉 GitHub地址：https://github.com/ourongxing/newsnow
👉 在线Demo：https://newsnow.busiyi.world

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