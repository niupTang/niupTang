---
title: Github 开源 打造端到端的机器学习工作流
date: 2025-01-15 21:50:35
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！在信息技术飞速发展的今天，机器学习（ML）已经成为软件开发中不可或缺的一部分。然而，从实验模型到生产部署，这个过程往往充满挑战，尤其是对于初学者来说。今天，我为大家推荐一个绝佳的学习工具——**Made-With-ML**，一个为开发者量身打造的开源项目，能够帮助你轻松构建生产级的机器学习应用。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrROzX1MvdSxibHQHyOz5FPZhjHaPibmgyW7JGVE8vkZwcAdYoCDwwSPtjNEeBlKBUmJzjORR30sIocg/640?wx_fmt=png&from=appmsg)

### 项目简介
**Made-With-ML** 是由 Goku Mohandas 创建的开源学习平台，旨在通过循序渐进的课程和实战练习，帮助开发者掌握机器学习开发全流程——从设计、开发到部署与迭代，涵盖了实验阶段和生产阶段的每一个关键环节。

- • **官网课程**：https://madewithml.com/

- • **代码仓库**：GokuMohandas/Made-With-ML[1]

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrROzX1MvdSxibHQHyOz5FPZhaYXCJssRHacBBoDFlJg7xZ5QRjqQ4ic7ibJWiadjcLGb4m2jWT69kuudg/640?wx_fmt=png&from=appmsg)

### 为什么选择 Made-With-ML？
- 1. **从实验到生产**：课程内容涵盖从概念验证到生产部署的完整流程，让开发者真正理解 ML 系统的全貌。

- 2. **迭代式学习**：通过逐步构建系统，帮助开发者深入理解机器学习核心组件的集成。

- 3. **无缝过渡**：提供高效的工具链和模板，实现从开发环境到生产环境的快速迁移。

- 4. **全栈覆盖**：无论是数据处理、模型训练、调优还是部署，Made-With-ML 都为你提供解决方案。

### 核心内容
**Made-With-ML** 提供多个模块，涵盖机器学习系统开发的每个环节：

1. 第一性原理在编写代码之前，深入理解机器学习和工程概念的基础原理。

2. 软件工程最佳实践通过模块化设计、版本控制、测试等方法，构建高效且可扩展的 ML 系统。

3. 可扩展性无需学习新语言，使用 Python 高效扩展数据处理、模型训练等任务。

4. MLOps 实践学习如何集成实验跟踪、模型服务和 CI/CD 流程，打造一体化的 ML 工程工作流。

### 快速上手指南
以下是使用 **Made-With-ML** 的操作步骤：

1. 克隆项目并安装依赖`git clone https://github.com/GokuMohandas/Made-With-ML.git .
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
python3 -m pip install --upgrade pip setuptools wheel
python3 -m pip install -r requirements.txt
pre-commit install
pre-commit autoupdate`2. 启动 Jupyter Notebook本地运行：

`jupyter lab notebooks/madewithml.ipynb`### 实践与部署
1. 模型训练与调优通过命令行工具快速完成模型的训练和超参数调优：

`python madewithml/train.py --num-epochs 10 --batch-size 256
python madewithml/tune.py --num-runs 2 --results-fp results/tuning_results.json`2. 实验跟踪利用 **MLflow** 跟踪模型训练与评估结果：

`mlflow server -h 0.0.0.0 -p 8080 --backend-store-uri $MODEL_REGISTRY`3. 生产级部署通过 **Anyscale** 服务一键部署模型：

`runtime_env:
  working_dir: .
  upload_path: s3://madewithml/$GITHUB_USERNAME/jobs`### 适用人群
- • **开发者**：希望将机器学习融入现有开发技能的程序员。

- • **毕业生**：弥合理论知识与行业需求之间的差距。

- • **产品经理**：深入理解机器学习应用的开发流程和实践难点。

### 行动号召
现在就访问 Made-With-ML[2] 开启你的机器学习之旅吧！无论你是初学者还是有经验的开发者，这个平台都能帮助你快速提升技能。如果你对 Made-With-ML 有任何疑问或心得，欢迎在评论区分享，让我们一起学习进步！

引用链接`[1]` GokuMohandas/Made-With-ML: https://github.com/GokuMohandas/Made-With-ML
`[2]` Made-With-ML: https://madewithml.com/

最近创建了一个AI 副业星球，对于程序员在职搞钱感兴趣的朋友进星球围观

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562MIdibsdq0g8G9wqHWTaXkh8ew6rZFtt2n1hUPBzLjN4A9aIV14u70ib8l9R3xEU4eXevEJBtRVfmqA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)