---
title: 自制AI机械臂！HuggingFace开源「穷人乐高」LeRobot，特斯拉工程师操刀
date: 2025-03-25 21:40:16
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天看到HuggingFace 开源的 **LeRobot** 是一个开源的低成本 AI 机器人解决方案，旨在降低机器人技术的门槛，让开发者和爱好者能够轻松构建和训练自己的 AI 机器人。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQLbzdAJ9YmAibxSvJJkMa50HlNyX7yNyic1B09nqLDHLicxAldT5uDBA0ZabkW1DacFmthPo57o0vAw/640?wx_fmt=png&from=appmsg)

### **1. 项目概览**
- • **低成本与开源**：单个机械臂成本约 200 美元，硬件设计文件（如 3D 打印模型、SolidWorks 文件）和软件（训练程序、控制代码、预训练模型）全部开源。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQLbzdAJ9YmAibxSvJJkMa503SYKPJZ6yibUUtDDYdicwbcOaYKQ2sQQznMjvUsKIWlwH9g7IibIZ0JOQ/640?wx_fmt=png&from=appmsg)

- • **核心目标**：通过提供端到端的学习框架，支持模仿学习（Imitation Learning）和强化学习（Reinforcement Learning），推动真实世界机器人应用的普及。

- • **项目背景**：由前特斯拉工程师 Remi Cadene 领导，基于 Alexander Koch 开源的 Koch v1.1 机器人套件改进而来，支持双机械臂和摄像头视觉传感器。

### **2. 技术特性**
- • **硬件配置**：

- • 机械臂采用 6 个舵机驱动，支持标准化组装，无需焊接，可通过 3D 打印部件降低成本。

- • 支持多摄像头输入，使用 OpenCV 库进行实时视觉处理。

- ![](https://mmbiz.qpic.cn/mmbiz_gif/p1ESIQQvfrQLbzdAJ9YmAibxSvJJkMa50TOF3Fz1f3Hog5ibUPiaBiaYnGWr4MoaMlrZ1TD2MVyFc8wDL7andYRYng/640?wx_fmt=gif&from=appmsg)

- 

- • **软件与模型**：

- • 提供预训练模型（如 ACT、Diffusion Policy）和 98 个数据集，涵盖抓取、搬运等任务。

- • 核心算法包括从 ALOHA 项目迁移的 **Action Chunking with Transformers (ACT)**，支持从人类演示中学习动作序列。

- • 支持虚拟环境（如 ALOHA、Pusht 等）训练和验证，方便用户在不组装硬件时进行模拟。

- 

- 

### **3. 安装与使用**
- • **环境配置**：`git clone https://github.com/huggingface/lerobot
conda create -n lerobot python=3.10
pip install -e ".[aloha, pusht]"  # 安装模拟环境依赖`

- • **核心功能示例**：

- • **数据记录与训练**：通过摄像头和机械臂录制动作数据，训练模型执行特定任务（如抓取物体）。

- • **策略评估**：使用预训练模型在环境中测试性能：```
`python lerobot/scripts/eval.py -p lerobot/diffusion_pusht`
```

### **4. 数据集与工具**
- • **LeRobotDataset 格式**：

- • 数据集以 Hugging Face 标准格式存储，支持时间序列帧检索（如通过 `delta_timestamps` 获取历史帧）。

- • 包含摄像头视频流（MP4/PNG）、机器人状态（关节位置）和动作指令，支持本地或远程加载。

- • **可视化工具**：通过脚本生成交互式网页，展示数据集的摄像头画面、机械臂动作和状态。

### **5. 社区与未来发展**
- • **社区资源**：Hugging Face 平台提供模型和数据集共享，开发者可上传自定义数据。

- • **未来计划**：

- • 推出更便宜的 **Moss v1 版本**（定价 150 美元）。

- • 扩展对更多机器人硬件的支持，提升性价比和易用性。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQLbzdAJ9YmAibxSvJJkMa50Er1hzsv9WYoU5zsnJuCnmtsKyU2LUJvnWmOTIezGta6L3jLC2zFU8w/640?wx_fmt=png&from=appmsg)

### **总结**
LeRobot 通过开源硬件设计、预训练模型和易用工具链，为个人和小型团队提供了探索 AI 机器人技术的低成本入口。其结合模仿学习与强化学习的框架，尤其适合教育、研究和爱好者社区。对于希望深入机器人 AI 的开发者，该项目是理想的起点。

项目地址：

**https://github.com/huggingface/lerobot**

**清单：https://github.com/SIGRobotics-UIUC/LeKiwi**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)• [  github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)  

• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)