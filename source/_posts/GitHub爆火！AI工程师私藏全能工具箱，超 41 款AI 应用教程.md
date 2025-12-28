---
title: "GitHub爆火！AI工程师私藏全能工具箱，超 41 款AI 应用教程"
permalink: github爆火-ai工程师私藏全能工具箱-超-41-款ai-应用教程
date: 2025-03-17 21:39:45
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天看到一款AI 项目合集的介绍，就是像另外一个我这样的公众号类似的项目，AI Engineering Hub是一个专注于人工智能工程领域的GitHub项目，旨在为不同技术水平的学习者和从业者提供丰富的资源和实践机会，帮助他们在这个快速发展的领域保持领先。以下是该项目的一些特色和内容：

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRKeXbyStNnGfUrrBI96BcYicgoajX2WeeUHZFwk5ia6bCtgHCQx0j0GlXIaclq1s2vk2GrBnoSsWSQ/640?wx_fmt=png&from=appmsg)

### 特色
- • **丰富的学习资源**：提供关于大型语言模型（LLMs）和检索增强生成（RAGs）的深入教程，以及AI智能体的真实世界应用实例。

- • **实践导向**：包含可直接在项目中实施、适应和扩展的示例，让学习者通过实践加深理解和掌握。

- • **面向不同水平的学习者**：无论是初学者、实践者还是研究人员，都能在这个项目中找到适合自己的资源，进行实验和取得成功。

### 更新方式
该项目通过订阅通讯的方式让用户保持更新，订阅者将获得一本免费的数据科学电子书，其中包含100多个数据科学的重要课程，并能及时了解最新的教程、见解和独家资源。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRKeXbyStNnGfUrrBI96BcYIrG62tE4OfsmLohWGTGPzVOIa97mSfKTnQqVNk3qYodD4pKSsoyDjw/640?wx_fmt=png&from=appmsg)

# 【案例】使用 DeepMind 的 Gemma 3、CrewAI 和 BrightData 的图书写作流程
## 工具与技术
- • **Bright Data**：用于抓取 YouTube 视频，获取丰富的多媒体内容，为图书写作提供素材。

- • **CrewAI**：构建 Agentic 工作流程，协调各个任务和步骤，确保整个写作流程的自动化和高效性。

- • **Google DeepMind 的 Gemma 3**：作为大型语言模型（LLM），负责生成高质量的文本内容，确保图书的专业性和可读性。

## 设置和安装
### 获取 BrightData API 密钥
- 1. 前往 Bright Data 官网 并注册一个账户。

- 2. 选择“代理和抓取”并创建一个新的“SERP API”。

- 3. 选择“基于本机代理的访问”。

- 4. 在账户中找到您的用户名和密码。

- 5. 将其存储在项目 `src/` 文件夹的 `.env` 文件中（将 `.env.example` 重命名为 `.env` 之后）。`BRIGHDATA_USERNAME="..."
BRIGHDATA_PASSWORD="..."`

### 设置 Ollama
在 Linux 系统上，通过以下命令设置 Ollama 并拉取 Gemma 3 模型：

`# 下载并运行安装脚本
curl -fsSL https://ollama.com/install.sh | sh

# 拉取 Gemma 3 模型
ollama pull gemma3:4b`### 安装依赖项
确保您已安装 Python 3.11 或更高版本，然后运行以下命令安装必要的依赖项：

`pip install ollama crewai crewai-tools`## 运行项目
- 1. 转到项目文件夹：```
`cd book_flow/book_writing_flow/src`
```

- 2. 运行以下命令启动项目：```
`python book_writing_flow/main.py`
```

## 示例输出
以下是“2025 年天文学”工作流程制作的书籍示例，展示了如何将内容整合到文章中：

### 样本书
`# 2025 年天文学

## 引言
随着科技的不断进步，天文学在 2025 年迎来了许多新的发现和突破。本文将带您了解这一领域的最新动态。

## 最新发现
### 黑洞研究
2025 年，科学家们利用先进的望远镜技术，对多个黑洞进行了深入观测，发现了它们活动的新模式。

### 星系演化
新的模拟和观测数据帮助我们更好地理解了星系的形成和演化过程。

## 技术进展
### 望远镜技术
新一代的地面和空间望远镜在分辨率和灵敏度上都有了显著提升，为天文学研究提供了更强大的工具。

### 数据分析
人工智能和机器学习技术在天文学数据处理中的应用越来越广泛，提高了数据分析的效率和准确性。

## 结论
2025 年的天文学研究为我们揭示了宇宙更多的奥秘，也为未来的探索奠定了坚实的基础。`### 案例
在写作过程中，系统会根据设定的主题和要求，自动从 YouTube 等平台抓取相关视频，提取有用信息，并利用 Gemma 3 模型生成高质量的文本内容。然后，通过 CrewAI 构建的工作流程，将这些内容整合到文章的相应部分，形成完整的书籍章节。

项目地址：

**https://github.com/patchy631/ai-engineering-hub**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)• [  github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)