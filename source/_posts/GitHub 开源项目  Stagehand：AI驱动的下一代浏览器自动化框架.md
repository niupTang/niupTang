---
title: "GitHub 开源项�?| Stagehand：AI驱动的下一代浏览器自动化框�?"
permalink: "github-开源项�?stagehand-ai驱动的下一代浏览器自动化框�?"
date: 2025-04-15 22:59:09
categories:
  - 开源项目
tags:
  - GitHub
  - 自动化
  - 开源项目
cleanup_status: needs_review
---

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

    大家好，我是牛皮�?今天在Github 上看到一款爬虫工具，**彻底改变我对于爬虫的看法了—Stagehand�?*它由Browserbase团队开发，结合了Playwright的可靠性和AI的自然语言交互能力，让开发者既能精准控制浏览器操作，又能用自然语言快速实现复杂任务，堪称"自动化领域的瑞士军刀"�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRRJgXaWlMCKDX0CV8GWTjt5saktHHkAX3QnOZ05CYhO86icicqLVPybL3KrDFcSjj7Bpacmia6ayWMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/p1ESIQQvfrRRJgXaWlMCKDX0CV8GWTjtcNvBaslWCW9oh5R4SeSdvfibbc7gYzA0F9VCibUjycDRPYyerl088Gicg/640?wx_fmt=gif&from=appmsg)

### **Stagehand 的五大颠覆性特�?*
- 1. **🤖 自然语言驱动**

- �?通过`act("点击登录按钮")`、`extract("提取价格信息")`等简单指令完成操作，无需编写复杂选择�?

- �?支持多模型切换（OpenAI/Anthropic/Gemini等），适应不同场景需�?

- 2. **�?双模式协�?*

- •�?*代码模式**：直接调用Playwright API精准控制

- •�?*AI模式**：用自然语言描述任务，自动生成并执行代码

- 3. **🔍 智能上下文感�?*

- • `observe()`函数可获取页面可操作元素列表，为AI提供决策依据

- �?自动处理动态内容加载、iframe嵌套等复杂场�?

- 4. **📊 企业级可观测�?*

- �?详细记录操作日志和Token消耗，支持性能分析和成本优�?

- �?内置错误恢复机制，自动化任务更稳�?

- 5. **🚀 生产就绪架构**

- �?支持本地和云端（Browserbase）两种运行模�?

- �?动作预缓存功能可大幅降低LLM调用成本

### **谁需要Stagehand�?*
- •�?*爬虫工程�?*：快速抓取动态渲染的网页数据

- •�?*测试工程�?*：用自然语言编写自动化测试用�?

- •�?*RAG开发�?*：构建智能网页内容提取管�?

- •�?*电商运营**：自动化价格监控、库存检查等重复任务

### **5分钟极速上�?*
- 1. **安装环境**：`npm install @browserbasehq/stagehand zod
npx playwright install  # 安装浏览器依赖`

- 2. **配置API密钥**：```
`export OPENAI_API_KEY=sk-xxx  # 或ANTHROPIC_API_KEY`
```

- 3. **运行首个自动�?*：```
`import { Stagehand } from"@browserbasehq/stagehand";

const stagehand = new Stagehand({ env: "LOCAL" });
await stagehand.init();

// 自然语言操作
await stagehand.page.goto("https://github.com");
await stagehand.act("点击搜索框并输入'Stagehand'"); 
const results = await stagehand.extract({
instruction: "提取�?个仓库名称和星数",
schema: z.array(z.object({
    name: z.string(),
    stars: z.number()
  }))
});`
```

**项目地址**�?
👉 https://github.com/browserbase/stagehand
👉 官方文档：https://docs.stagehand.dev/

如果你厌倦了手动编写选择器，或想用AI提升10倍自动化效率，Stagehand就是你的终极解决方案�?

技术细节参考自Stagehand官方文档及v2.1.0版本更新说明

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