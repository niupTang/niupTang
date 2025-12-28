---
title: "GitHub 高星项目 nanoGPT：小白轻松训练专�?GPT 模型，新手也能快速上�?
permalink: github-高星项目-nanogpt-小白轻松训练专属-gpt-模型-新手也能快速上�?
date: 2025-10-15 22:12:20
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

大家好，我是 牛皮糖！�?AI 的持续发展，很多小伙伴想自己训练大模�?，却被复杂的代码和高昂的设备门槛吓退了？别担心，今天我就来给大家介绍下自�?—�?一个能让你轻松训练和微调中等规�?GPT 模型的开源工具，哪怕是新手也能快速上手～

这个开源项目从最开始的 miniGPT �?先的 nanoGPT .

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSGoutS7k1YDKpeOOAricia3BlWR4OqUpXZOKZPKZLxPD5YY20U6gbJyNShicoxJv3vCRkoSr4DgoMQw/640?wx_fmt=png&from=appmsg)

# nanoGPT 简�?
nanoGPT 是一个用于训练和微调中等规模 GPT 模型的简单、快速的代码库。它的设计理念是简洁易懂，便于用户根据自身需求进行修改，无论是从头开始训练新模型，还是基于预训练 checkpoint 进行微调（例�?OpenAI �?GPT-2 1.3B 模型）�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSGoutS7k1YDKpeOOAricia3BVeVlrtem3zALoQBIKgxNGVBcr6GQIC3WEic3QLoug0scQaiaxTia9Ge5Q/640?wx_fmt=png&from=appmsg)

## 主要特点
- •�?*简洁高�?*：代码结构简单，易于理解和修改，同时保持了较高的训练效率�?

- •�?*灵活性强**：支持从头训练、从预训练模型微调等多种使用场景�?

- •�?*支持多种设备**：可�?GPU、CPU 甚至 Apple Silicon Macbooks（使用 `--device=mps`）上运行�?

- •�?*集成主流工具**：结合了 PyTorch、transformers、datasets 等常用深度学习工具�?

## 安装依赖
`pip install torch numpy transformers datasets tiktoken wandb tqdm`依赖说明�?

- �?pytorch：深度学习框�?

- �?numpy：数值计算库

- �?transformers：用于加�?GPT-2 等预训练模型

- �?datasets：用于下载和预处理数据集（如 OpenWebText�?

- �?tiktoken：OpenAI 的快�?BPE 编码工具

- �?wandb：可选的日志记录工具

- �?tqdm：进度条显示工具

## 快速开�?
### �?GPU 上训�?
以字符级模型训练莎士比亚文本为例�?

`python train.py config/train_shakespeare_char.py`训练完成后生成样本：

`python sample.py --out_dir=out-shakespeare-char`### �?CPU 上训�?
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSGoutS7k1YDKpeOOAricia3B7rv36TJicwcUJoLzbFfUFR6ay0keFwIo7LuUsicoaklSAnzcoZ782lpQ/640?wx_fmt=png&from=appmsg)

如果只有普通电脑（�?MacBook），可以降低训练规模�?

`python train.py config/train_shakespeare_char.py --device=cpu --compile=False --eval_iters=20 --log_interval=1 --block_size=64 --batch_size=12 --n_layer=4 --n_head=4 --n_embd=128 --max_iters=2000 --lr_decay_iters=2000 --dropout=0.0`生成样本�?

`python sample.py --out_dir=out-shakespeare-char --device=cpu`## 复现 GPT-2
### 数据准备
首先处理 OpenWebText 数据集：

`python data/openwebtext/prepare.py`该命令会下载�?tokenize 数据集，生成 `train.bin` 和 `val.bin` 文件�?

### 训练
在拥�?8 �?A100 40GB GPU 的节点上，运行以下命令复�?GPT-2�?24M 参数）：

`torchrun --standalone --nproc_per_node=8 train.py config/train_gpt2.py`大约需�?4 天时间，模型损失会降�?~2.85 左右�?

### 多节点训�?
在集群环境中，可以使用多节点训练�?

`# 在主节点（示�?IP 123.456.123.456）上运行
torchrun --nproc_per_node=8 --nnodes=2 --node_rank=0 --master_addr=123.456.123.456 --master_port=1234 train.py

# 在工作节点上运行
torchrun --nproc_per_node=8 --nnodes=2 --node_rank=1 --master_addr=123.456.123.456 --master_port=1234 train.py`如果没有 Infiniband 互连，需要在命令前添加 `NCCL_IB_DISABLE=1`�?

## 微调
微调与训练类似，只需确保从预训练模型初始化：

`python train.py config/finetune_shakespeare.py`## 采样/推理
使用 `sample.py` 脚本从预训练模型或自己训练的模型中采样：

`python sample.py \
    --init_from=gpt2-xl \
    --start="What is the answer to life, the universe, and everything?" \
    --num_samples=5 --max_new_tokens=100`如果要从自己训练的模型采样，使用 `--out_dir` 指定模型目录�?

https://github.com/karpathy/nanoGPT

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经�?4000 名小伙伴加入了，如果你也想着�?AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵�?

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)