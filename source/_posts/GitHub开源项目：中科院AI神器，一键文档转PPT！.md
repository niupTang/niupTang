---
title: GitHub开源项目：中科院AI神器，一键文档转PPT！
date: 2025-04-03 23:19:09
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天给大家安利一款中科院软件所重磅开源的AI工具——**PPTAgent**，它能将你的文档（Word/PDF/网页）**全自动转换为专业级PPT**，涵盖大纲生成、智能排版、内容评估全流程！无论是学生答辩、职场汇报，还是企业路演，效率直接拉满🚀

### **🔥 为什么你需要PPTAgent？**
- 1. **告别手动排版**：AI自动分析文档内容，生成逻辑清晰的PPT大纲和精美幻灯片。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQ2XlsQiaN7INcjKdLvO0dUjRWcFwvIVZR3lWhleekZHficnDH9JCdvCZ5F01QPuJ9pEKMKFA0hnV6w/640?wx_fmt=png&from=appmsg)

- 2. **学术/职场神器**：论文、报告、商业计划书一键转PPT，节省80%制作时间。

- 3. **中科院技术背书**：基于大型语言模型（LLM）和两阶段编辑算法，质量远超普通模板工具。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQ2XlsQiaN7INcjKdLvO0dUjetr3JgnlatG6ztQW1DMXsFMP6EZZmqKlSMy0HZhFZTblxJibdzc02Lw/640?wx_fmt=png&from=appmsg)

- 

### **✨ 核心功能**
- • **智能分析**：自动提取文档关键内容，生成结构化大纲（支持中英文）。

- • **多模态生成**：结合文本、图表、排版规则，输出符合设计规范的幻灯片。

- • **自我修正**：通过**PPT Eval框架**评估内容连贯性、设计美观度，迭代优化结果。

- • **跨平台支持**：Windows/macOS/Linux均可运行，命令行+Web UI双模式。

### **🛠️ 技术原理揭秘**
PPTAgent采用**两阶段工作流**，模仿人类制作PPT的思维过程：

- 1. **分析阶段**：

- • 用LLM解析参考PPT的**结构模式**（标题层级、分页逻辑）。

- • 聚类算法识别**内容模式**（文本密度、图表类型）。

- 2. **生成阶段**：

- • 动态编辑幻灯片，通过API调整文本/视觉元素（如字体对齐、配色优化）。

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQ2XlsQiaN7INcjKdLvO0dUjrWcm3QI1pTlbVKgL770BgKdCbVLuiafswaVSCIH6jibtoF8Aaicic826ng/640?wx_fmt=png&from=appmsg)

### **📌 5分钟快速上手**
**环境准备**- • 安装Node.js和Python 3.8+。

**运行步骤**- 1. 克隆项目：`git clone https://github.com/icip-cas/PPTAgent.git`

- 2. 启动Web界面：```
`cd PPTAgent/pptagent_ui && npm install && npm run serve`
```

- 3. 浏览器访问`http://localhost:8080`，上传文档即可生成PPT！

**质量评估（可选）**```
`python evals.py pptx2images  # 将PPT转图片
python evals.py eval_experiment  # 评估内容/设计分`
```
### **💡 适用场景**
- • **教育领域**：教师快速制作课件，学生高效完成学术汇报。

- • **企业应用**：自动生成产品发布会PPT、投标方案演示稿。

- • **自媒体创作**：将长文章转化为视觉化幻灯片，提升传播效果。

### **⚠️ 注意事项**
- • 首次运行需下载预训练模型（约2GB），建议科学上网加速。

- • 复杂文档建议分段输入，生成后手动微调图表位置。

### **🎁 免费开源说明**
PPTAgent基于**AGPL-3.0协议**开源，代码透明可审计。中科院团队持续更新，未来将支持更多文档类型（如Markdown、LaTeX）。

**项目地址**：
👉 https://github.com/icip-cas/PPTAgent

**（**注：文中数据及技术细节均来自中科院官方GitHub仓库及CSDN技术博客）

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

**DeepSeek相关**

# [DeepSeek V3可用的15种精美知识卡片提示词](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485862&idx=1&sn=181eb3edade40af73928e89cd40ea6ec&scene=21#wechat_redirect)
[DeepSeek + 可灵制作视频](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489186&idx=2&sn=7aca6f49514ef83e186fd6ec389be7ef&scene=21#wechat_redirect)

# [DeepSeek 快速实现Word 文档排版](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485856&idx=1&sn=72851d4f4f86dee7f9f9fa0c1f8ee834&scene=21#wechat_redirect)
[DeepSeek + coze 做飞书知识库](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489249&idx=2&sn=fc09575fef051ba72b3bcd14efb25d49&scene=21#wechat_redirect)

[GitHub 8.5k Star Cherry Studio：多语言模型接入神器，DeepSeek 本地知识库也能轻松搞定！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489104&idx=1&sn=a61ab12bd428cbb224fb8a1d1909fb78&scene=21#wechat_redirect)

每日更新，期待与你一起成长

欢迎围观AIP成长的副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRtibfesRato3Lfd8nn7oe2Mbbg9TudfLu5K5OMeHia44HSey3kakiaelDRunlPKCagRtHZ8MMO0xWtg/640?wx_fmt=jpeg&from=appmsg)