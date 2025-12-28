---
title: "GitHub 3.2k Star Midscene：AI 驱动的浏览器自动化工具"
permalink: github-3-2k-star-midscene-ai-驱动的浏览器自动化工具
date: 2025-01-17 22:53:00
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

   

   大家好，我是牛皮糖！在自动化测试和浏览器操作领域，AI 技术的应用正在带来革命性的变化。今天，我要为大家介绍一个非常有趣的开源项目——**Midscene**。它是一个 AI 驱动的浏览器自动化工具，通过 Chrome 扩展、JavaScript 和 YAML 脚本，能够实现自然语言交互和数据提取，为开发者提供了一个全新的自动化解决方案。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTaliaGnwo1rpMuyW7vVulw0RSDBRPib6la7iaKVkk2JtyhNPZI29ib5sbhQia2llT2zHibjpdARrSGNYCQ/640?wx_fmt=png&from=appmsg)

### 项目介绍
**Midscene** 是一个 AI 助力的自动化 SDK，能够控制网页、执行断言，并以 JSON 格式提取数据。它通过自然语言描述步骤，让 AI 规划和控制用户界面，大大简化了自动化测试和数据提取的流程。无论是开发者、测试人员，还是数据分析师，都能从中受益。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTaliaGnwo1rpMuyW7vVulw0IftU5RB7sqfTnYaXe5oBBvYdic5liaf81uRgcdj8TiaYwUDc12c5iaLUuw/640?wx_fmt=png&from=appmsg)

### 核心功能特点
- • **自然语言交互**
Midscene 支持自然语言描述步骤，用户只需描述操作步骤，AI 会自动规划和控制用户界面，无需编写复杂的代码。例如，你可以直接说“点击登录按钮”，AI 会自动识别并执行该操作，极大地降低了技术门槛。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTaliaGnwo1rpMuyW7vVulw07iczonE9vnKUJGib17icyFdnazUrTodfO8Ktn6pJyhIeBkEic6tjSzdTYQ/640?wx_fmt=png&from=appmsg)

- • **理解 UI，JSON 响应**
用户可以提供关于期望数据格式的提示，Midscene 会以 JSON 格式返回预期的响应。这使得数据提取和处理变得更加直观和高效，尤其适用于需要处理复杂数据的场景。

- • **直观断言**
Midscene 允许用户使用自然语言进行断言，基于 AI 的理解能力，用户可以更直观地表达测试条件，提高测试的准确性和效率。你可以像描述操作一样描述期望的结果，AI 会帮你验证。

- • **Chrome 扩展体验**
通过 Chrome 扩展，用户可以立即开始使用 Midscene，无需编写代码即可探索和操作网页。这为非技术用户提供了极大的便利，可以快速开始自动化工作。

- • **可视化报告**
Midscene 提供可视化的报告文件，用户可以轻松理解和调试整个自动化过程。这有助于快速定位问题并进行优化，提高工作效率。

- • **开箱即用的 LLM**
Midscene 支持使用公共的多模态 LLM，如 GPT-4o，无需进行任何自定义训练。用户可以快速上手并利用强大的 AI 能力进行自动化工作。

- • **完全开源**
Midscene 是完全开源的，用户可以自由探索和扩展其功能，享受开源社区带来的无限可能。这为开发者提供了一个自由定制的空间。

### 安装方法
**主页**：Midscene 官方网站

- • **快速体验**
通过 Chrome 扩展即可立即开始使用，无需编写代码。直接体验强大的 AI 自动化功能。

- • **集成方式**

- • **YAML 脚本自动化**：如果用户更喜欢编写 YAML 文件而不是代码，可以选择这种方式来进行自动化。

- • **Chrome 扩展桥接模式**：通过脚本控制桌面 Chrome，实现与浏览器的深度集成。

- • **与 Puppeteer 集成**：如果你的项目已经在使用 Puppeteer，可以轻松与 Midscene 结合使用。

- • **与 Playwright 集成**：同样，Midscene 支持与 Playwright 集成，提升自动化测试的灵活性。

- • **API 参考**：提供详细的 API 文档，帮助用户更好地理解和使用 Midscene。

- • **自定义模型和提供者**：例如使用 Gemini，用户可以了解如何使用自己的模型和提供者，进一步定制自动化流程。

### 提示词技巧
提供详细描述和示例一直是非常有用的提示词技巧。

例如： 错误示例 ❌: "搜'耳机'"

正确示例 ✅: "找到搜索框（搜索框的上方应该有区域切换按钮，如 '国内'， '国际')，输入'耳机'，敲回车"

错误示例 ❌: "断言：外卖服务正在正常运行"

正确示例 ✅: "断言：界面上有个“外卖服务”的板块，并且标识着“正常”"

### 许可证
Midscene 采用 **MIT 许可证**，这意味着你可以自由使用、修改和分发代码，尽情探索这个开源工具的潜力。

### 总结
**Midscene** 是一个非常有潜力的项目，它通过 AI 技术简化了浏览器自动化的过程，为开发者和测试人员提供了一个强大的工具。无论是进行自动化测试、数据提取，还是其他浏览器操作，Midscene 都能提供出色的体验。如果你对 AI 驱动的自动化感兴趣，不妨亲自尝试并为项目贡献力量！

### 获取途径
关注AI副业知识星球
    找到 GitHub 开源 
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTaliaGnwo1rpMuyW7vVulw0WulzQEJhPVLy9qzcGvZKCDreqIsO4O7aIzZjWtUCibtMFCDYvhuk1oA/640?wx_fmt=png&from=appmsg)

感谢大家的阅读，希望 **Midscene** 能够为你的工作和生活带来更多的便利！如果你有任何问题或想要分享你的使用体验，欢迎在评论区留言。

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)