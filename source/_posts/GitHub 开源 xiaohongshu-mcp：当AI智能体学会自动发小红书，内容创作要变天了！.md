---
title: "GitHub 开源 xiaohongshu-mcp：当AI智能体学会自动发小红书，内容创作要变天了！"
permalink: github-开源-xiaohongshu-mcp-当ai智能体学会自动发小红书-内容创作要变天了
date: 2025-09-22 23:27:34
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

* 戳上方蓝字“**太阳鸟不会飞**”关注我

大家好，我是太阳鸟！不知道大家有没有想过把微信文章内容精华然后转为图文，发布到小红书上面？今天在GitHub 上面看到一个开源的 MCP 项目，是由国内的个人开发者用 AI 开发的一款 小红书 MCP。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaMCsdB13YkLCuG8SnqGwyzaib1yybm6xNF48iaxrM5aBzq85VQdQCk8pLFs4YW7pJT3YOlicqaBSZviaeUia94S3ZQ/640?wx_fmt=png&from=appmsg)

加上最近AI智能体（AI Agent）真是火得一塌糊涂，从Coze、Dify到各种RAG应用，但你们有没有想过：**如果让AI智能体直接操作小红书，会发生什么？**

如果它让Claude、Cursor等AI助手获得了**直接操作小红书的能力**，你可以用自然语言命令AI帮你发笔记、搜内容、看推荐流！

## 🚀 项目简介：AI与小红书的完美结合
**xiaohubgsu-mcp** 是一个基于**Model Context Protocol (MCP)** 协议的开源项目，简单说就是为AI智能体添加了"操作小红书"的技能。这个项目在GitHub上已经获得了不少关注，成为AI自动化领域的一个创新案例。

最厉害的是，它不是简单的自动化脚本，而是真正实现了**AI智能体与小红书平台的深度集成**。你可以用自然语言告诉AI："帮我找找最近流行的露营装备笔记，总结一下爆款特点"，AI就能自动调用这个项目的功能去执行搜索和分析！

## ✨ 核心功能：AI智能体的小红书技能包
### 1. 🤖 自然语言控制小红书
`// AI可以理解的指令示例
AI指令集 = [
    "登录小红书并保持状态",
    "发布图文笔记（标题+内容+图片）", 
    "根据关键词搜索笔记",
    "获取首页推荐流内容",
    "分析热门话题趋势"
]`### 2. 🔐 安全的登录维护
- • **一次登录，长期有效**：通过浏览器自动化实现扫码登录，Cookie智能维护

- • **多账号支持**：可以配置多个小红书账号切换使用

- • **本地存储**：登录信息完全保存在本地，保障账号安全

### 3. 📱 完整的内容管理能力
```
`# 通过AI命令直接发布笔记
AI命令："帮我把这组露营照片发到小红书，标题是'周末Glamping好物分享'"

# AI会自动调用发布功能
go run cmd/publish/main.go -title "周末Glamping好物分享" -images "./photos/"`
```
### 4. 🔍 智能搜索与分析
- • **关键词搜索**：获取实时的小红书内容趋势

- • **爆款分析**：AI可以分析搜索结果的互动数据

- • **内容推荐**：获取个性化推荐流，发现优质内容

## 🛠️ 技术架构：为什么这个项目很厉害？
### 基于MCP协议的设计
```
`用户自然语言 → AI智能体理解 → MCP协议转换 → 小红书操作`
```
这种架构让AI智能体真正获得了"动手能力"，而不只是"动嘴能力"。

### Go语言开发的优势
- • **高性能**：比Python等脚本语言运行效率更高

- • **稳定性好**：适合需要长期运行的自动化任务

- • **部署简单**：编译成单个可执行文件，方便部署

## 💡 实际应用场景
### 案例1：内容创作者的效率神器
`# 传统方式：手动操作30分钟
1. 拍照修图 → 2. 写文案 → 3. 添加标签 → 4. 发布笔记

# 使用xiaohongshu-mcp：AI一键完成
AI命令："帮我把这组咖啡厅照片发小红书，文案要文艺清新风"`### 案例2：营销人员的竞品分析
```
`# 自动监控竞品动态
from xiaohongshu_mcp import CompetitorMonitor

monitor = CompetitorMonitor()
trends = monitor.analyze_competitors(["品牌A", "品牌B"])
print(trends.hot_topics)  # 输出竞品热门话题`
```
### 案例3：个人知识管理
```
`AI指令："帮我搜索'时间管理'相关笔记，整理成学习资料"
→ AI自动搜索、筛选、总结
→ 生成个人知识库文档`
```
## 📊 与传统方式的对比
功能
传统手动操作
使用xiaohongshu-mcp
**发布笔记**5-10分钟/篇
10秒/AI指令
**内容搜索**手动翻页筛选
智能语义搜索
**趋势分析**凭经验判断
数据驱动分析
**多账号管理**频繁切换登录
一键切换
**学习成本**需要熟悉平台
自然语言交互
## 🚀 快速开始指南
### 环境要求
- • Go 1.19+

- • 小红书账号

- • 支持MCP的AI客户端（Claude、Cursor等）

### 4步快速部署
- 1. **克隆项目**```
`git clone https://github.com/xpzouying/xiaohongshu-mcp.git`
```

- 2. **安装依赖**```
`cd xiaohongshu-mcp
go mod download`
```

- 3. **首次登录**```
`go run cmd/login/main.go
# 扫码登录小红书`
```

- 4. **启动MCP服务**```
`go run .`
```

### AI客户端配置（以Cursor为例）
```
`// settings.json
{
"mcpServers":{
    "xiaohongshu":{
      "command":"go",
      "args":["run","."],
      "cwd":"/path/to/xiaohongshu-mcp"
    }
}
}`
```
## ⚠️ 重要使用提醒
- 1. **遵守平台规则**：小红书对自动化操作有严格限制，请合理使用频率

- 2. **账号安全第一**：建议使用小号测试，避免主账号风险

- 3. **技术门槛存在**：当前版本需要一定的技术背景来配置

- 4. **功能持续迭代**：开源项目还在完善中，遇到问题可以提Issue

## 💎 总结：内容创作的新范式
**xiaohongshu-mcp** 代表了AI智能体应用的一个新方向——**从纯对话走向实际操作**。它不仅仅是技术上的创新，更是工作方式的革命：

对于**内容创作者**，它大幅提升了内容生产和发布的效率； 对于**营销人员**，它提供了数据驱动的竞品分析和趋势洞察； 对于**AI开发者**，它展示了如何将AI能力与实际业务场景深度结合。

**项目地址**：https://github.com/xpzouying/xiaohongshu-mcp

在这个AI技术快速发展的时代，能够提前掌握这些创新工具，就意味着在未来的竞争中占据了先机。无论是想要提升个人效率，还是探索新的商业模式，这个项目都值得你深入研究和尝试！

如果你对AI自动化感兴趣，或者正在寻找内容创作的新思路，快去GitHub上star这个项目吧！说不定下一个爆款AI应用就出自你的手中！

社群推荐

1. AI副业赚钱星球

老秦这个AI私域赚钱星球，52 一年，一万个星球中，连续 4 个月排名前 3，很多超级大佬亲自推荐，性价比极高，很多人在这里赚到几千上万块

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

![](https://mmbiz.qpic.cn/mmbiz_jpg/JiaMCsdB13YkLCuG8SnqGwyzaib1yybm6xU7ZkGJFEO8JuZYMyWBT56iagBH67zRnu4jbaLibbueibibFe9QZkuicZcVA/640?wx_fmt=jpeg&from=appmsg)

 

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)