---
title: DeepSeek 本地部署满血大模型！
date: 2025-02-06 21:28:28
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！DeepSeek 太火了我之前也有介绍过如何本地部署大模型的文章。

[Github 88.8k Stars 一款可以本地部署多款大模型软件](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486315&idx=1&sn=d7379fea985614c1bb73a98556678bc1&scene=21#wechat_redirect)

这款开源软件现在已经接入了DeepSeek-r1 满血版本了，穷人勿试。

以下是部署不同规模大模型所需的最低硬件配置参考表格（基于典型场景估算）：

模型参数
显存需求 (FP16)
最低 GPU 数量
CPU 核心数
内存 (RAM)
存储 (SSD)
网络带宽
备注
**1.5B**8-12 GB
1 (A10/A100)
8核
32 GB
1 TB NVMe
1 Gbps
单卡推理/微调
**7B**24-32 GB
1 (A100-40GB)
16核
64 GB
2 TB NVMe
10 Gbps
需优化显存管理
**8B**32-40 GB
1 (A100-80GB)
16核
64 GB
2 TB NVMe
10 Gbps
可能需梯度检查点
**14B**56-72 GB
2 (A100-40GB)
32核
128 GB
4 TB NVMe
25 Gbps
需模型并行
**32B**128-160 GB
4 (A100-40GB)
64核
256 GB
8 TB NVMe
100 Gbps
需混合并行策略
**70B**280-350 GB
8 (A100-80GB)
128核
512 GB
16 TB NVMe
200 Gbps
需张量并行+流水线并行
**671B**1.3-1.6 TB
32 (H100-80GB)
256核
2 TB
50 TB NVMe
400 Gbps
需多节点分布式训练
### 关键说明：
- 1. **显存需求**：按 `参数数量 × 2字节（FP16） × 4倍系数` 估算（包含激活/梯度/优化器状态）

- 2. **GPU选型**：

- • A100-40GB/80GB：主流计算卡

- • H100-80GB：新一代高性能卡（显存带宽更高）

- 3. **扩展需求**：

- • 模型并行：参数规模 > 单卡显存时强制需要

- • 混合并行：通常结合数据并行+流水线并行

- 4. **网络要求**：

- • 多卡需NVLink/InfiniBand（建议带宽 > 200 Gbps）

- • 多节点需RDMA网络

- 5. **存储优化**：

- • 推荐NVMe SSD集群（IOPS > 100万）

- • 大模型加载需高速存储带宽

### 典型场景差异：
- • **推理场景**：显存需求可降低30-50%（无梯度/优化器状态）

- • **量化部署**：使用8-bit/4-bit量化可减少50-75%显存占用

- • **云服务成本**：671B模型全量部署月成本可能超过$50万（按AWS p4d实例估算）

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTLaYfibMiaAibvGraISMn0x7cN1icGiaHrw1Mniar0sREib9KfZ8NX6aqsG7Xcp6ia6iblHXyxDKJsASlk7zA/640?wx_fmt=png&from=appmsg)

模型名称
参数规模（B）
简介
拉取次数（K）

DeepSeek-r1
1.5B, 7B, 8B, 14B, 32B, 70B, 671B
DeepSeek 的第一代推理模型，性能与 OpenAI-o1 相当，基于 Llama 和 Qwen 的六种密集模型
29.3
llama3.3
70B
最新的 70B 模型，性能与 Llama 3.1 的 405B 模型相当
21.1
phi4
14B
微软的 14B 参数的开源模型
43.7
llama3.2
1B, 3B
Meta 的 Llama 3.2，提供 1B 和 3B 模型
48.2
llama3.1
8B, 70B, 405B
Meta 的 Llama 3.1，提供 8B、70B 和 405B 模型
222.2
nomic-embed-text
-
高性能的开源嵌入模型，支持大上下文窗口
1114.3
mistral
7B
Mistral AI 发布的 7B 模型，版本更新至 0.3
68.5
llama3
8B, 70B
Meta Llama 3，目前最强大的开源 LLM
87.4
qwen
0.5B, 1.8B, 4B, 7B, 14B, 32B, 72B, 110B
阿里云的 Qwen 1.5 系列模型，参数规模从 0.5B 到 110B
94.3
gemma
2B, 7B
Google DeepMind 的轻量级开源模型，版本更新至 1.1
104.3
qwen2
0.5B, 1.5B, 7B, 72B
阿里巴巴集团的 Qwen2 系列模型
44.1
qwen2.5
0.5B, 1.5B, 3B, 7B, 14B, 32B, 72B
阿里巴巴最新的大规模数据集预训练模型，支持多语言和长上下文（128K）
43.7
llava
7B, 13B, 34B
结合视觉编码器和 Vicuna 的多模态模型，适用于视觉和语言理解
122.9
llama2
7B, 13B, 70B
Llama 2 系列模型，参数规模从 7B 到 70B
132.9
phi3
3.8B, 14B
微软的轻量级 3B 和 14B 模型
62.9
gemma2
2B, 9B, 27B
Google Gemma 2，高性能且高效的模型
62.6
qwen2.5-coder
0.5B, 1.5B, 3B, 7B, 14B, 32B
Qwen2.5 的代码生成和推理专用模型
21.9
codellama
7B, 13B, 34B, 70B
基于文本提示生成和讨论代码的模型
61.7
mxbai-embed-large
335M
mixedbread.ai 的高性能嵌入模型
91.3
tinyllama
1.1B
在 3 万亿 tokens 上训练的紧凑型 Llama 模型
131.3
mistral-nemo
12B
Mistral AI 与 NVIDIA 合作开发的 12B 模型，支持 128K 上下文
61.1
llama3.2-vision
11B, 90B
Llama 3.2 的视觉推理模型，支持 11B 和 90B 规模
31.0
starcoder2
3B, 7B, 15B
新一代开源代码生成模型，提供 3B、7B 和 15B 版本
5845.7
snowflake-arctic-embed
22M, 33M, 110M, 137M, 335M
Snowflake 的文本嵌入模型，优化性能
9617.3
deepseek-coder-v2
16B, 236B
开源的代码语言模型，性能与 GPT4-Turbo 相当
5549.8
mixtral
8x7B, 8x22B
Mistral AI 的混合专家模型，提供 8x7B 和 8x22B 版本
6547.2
dolphin-mixtral
8x7B, 8x22B
基于 Mixtral 的无审查模型，擅长编码任务
6490.9
phi2
7B
微软的 2.7B 语言模型，擅长推理和语言理解
13483.1
deepseek-coder
1.3B, 6.7B, 33B
在 2 万亿代码和自然语言 tokens 上训练的编码模型
13482.3
codegemma
2B, 7B
支持多种编码任务的轻量级模型
6478.6
llama2-uncensored
7B, 70B
未审查的 Llama 2 模型
15465.4
wizardlm2
7B, 8x22B
微软的高性能模型，适用于复杂对话、多语言和推理
9350.3
dolphin-mistral
7B
基于 Mistral 的无审查 Dolphin 模型，擅长编码任务
10313.7
bge-m3
567M
BAAI 的多功能、多语言、多粒度模型
6298.8
all-minilm
22M, 33M
基于大规模句子级数据集的嵌入模型
9281.7
dolphin-llama3
8B, 70B
基于 Llama 3 的 Dolphin 2.9 模型，具备多种指令和对话技能
9277.8
command-r
35B
专为对话交互和长上下文任务优化的模型
5276.1
llava-llama3
8B
基于 Llama 3 Instruct 的 LLaVA 模型
-

项目地址：

https://ollama.com/search

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [FastGPT --- 一款可以快速部署的本地大模型](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247484860&idx=1&sn=4854888f96b62296e7cfe14e30186c47&scene=21#wechat_redirect)•   [
](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)[GitHub 星选|Flowise:拖拽式搭建AI工作流,零代码玩转大模型!](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489062&idx=1&sn=cd07aa4e933b3b37e44d9e6c206a3eff&scene=21#wechat_redirect)