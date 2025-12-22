---
title: Github 最新开源基于MLP 的股票价格预测架构
date: 2025-01-06 20:58:33
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我
    大家好，我是牛皮糖！今天要给大家介绍的是一个在GitHub上备受瞩目的开源项目——StockMixer。StockMixer是AAAI 2024论文"StockMixer: A Simple yet Strong MLP-based Architecture for Stock Price Forecasting"的官方代码实现。它提出了一个轻量级且高效的基于MLP（多层感知机）的架构，用于股票价格预测。StockMixer通过指标混合、时间混合和股票混合来捕捉股票数据中的复杂相关性，为投资者提供了一个精准的股市预测工具。接下来，就让我们一起走进StockMixer的世界，了解它的核心功能、运行环境以及如何使用吧！
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS2QDI7iaU358OrG4zdWEMk0CTEDaT5ySrAQNjStNdAicP8HaibjibNTfPduRwZM0icUcGoRGJXBCicGcpA/640?wx_fmt=png&from=appmsg)

## 项目核心论点
StockMixer的核心在于其独特的架构设计，它将股票价格预测问题分解为三个关键部分：

- 1. **指标混合（Indicator Mixing）**：对股票的各种技术指标进行混合处理，提取出有用的特征信息。技术指标是投资者分析股票走势的重要工具，如移动平均线、成交量、相对强弱指数等。StockMixer通过对这些指标进行混合，能够更全面地捕捉股票的内在特征。

- 2. **时间混合（Temporal Mixing）**：考虑股票价格在不同时间尺度上的变化规律。股票市场具有明显的时序特性，价格会随着时间的推移而发生变化。通过时间混合，StockMixer能够捕捉到股票价格在短期、中期和长期的时间尺度上的相关性，从而更准确地预测未来的走势。

- 3. **股票混合（Stock Mixing）**：分析不同股票之间的关联性。股票市场中的股票并非孤立存在，它们之间存在着复杂的关联关系。例如，同行业股票的价格走势往往具有一定的相似性。StockMixer通过对不同股票进行混合，能够发现这些潜在的关联性，为投资者提供更全面的市场分析视角。

## 运行环境
StockMixer的运行环境相对简单，主要依赖以下Python库：

- • **Python 3.7**：作为编程语言的基础环境，Python 3.7提供了丰富的库和框架，能够满足StockMixer的开发需求。

- • **torch**：版本约为1.10.1，是PyTorch深度学习框架的核心库，用于构建和训练神经网络模型。

- • **numpy**：版本约为1.21.5，是Python中用于数值计算的基础库，提供了大量的数学函数和数组操作功能，是StockMixer进行数据处理和模型运算的重要工具。

- • **PyYAML, pandas, tqdm, matplotlib**：这些库分别用于配置文件的解析、数据处理、进度条显示和数据可视化等功能，为StockMixer的开发和运行提供了便利。

## 数据集与预处理
StockMixer使用的原始数据集包括NASDAQ、NYSE和S&P500，这些数据集分别来源于两篇相关的研究论文：

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS2QDI7iaU358OrG4zdWEMk0dsjahMSf84TyWPIJOH6vjLVWFdyV43ETpfcEVmBjsEhkUtic09yVCAg/640?wx_fmt=png&from=appmsg)

- • **NASDAQ/NYSE**：来源于论文"Temporal Relational Ranking for Stock Prediction"，该论文提出了一种基于时间关系排序的股票预测方法。

- • **S&P500**：来源于论文"Efficient Integration of Multi-Order Dynamics and Internal Dynamics in Stock Movement Prediction"，该论文研究了如何高效地整合多阶动态和内部动态来预测股票的走势。 为了提高文件读取速度，StockMixer对原始数据进行了预处理，生成了对应的.pkl或.npy文件。预处理后的数据集存放在项目的`dataset`文件夹中。由于StockMixer不需要类似于图或超图的先验知识，因此预处理后的数据集中没有提供这些信息。用户可以根据需要从原始数据集中获取相关数据。

## 如何运行StockMixer
运行StockMixer的过程相对简单，首先需要确保已经搭建好相应的运行环境，并且已经下载了预处理后的数据集。然后，可以通过以下步骤运行StockMixer：

- 1. 编辑`train.py`文件中的配置信息，根据自己的需求设置模型参数、训练参数等。

- 2. 在命令行中运行以下命令：`python src/train.py`这将会启动StockMixer的训练过程，模型会根据配置的参数和提供的数据集进行训练，并输出训练结果。

## 应用场景与优势
StockMixer在股票价格预测领域具有广泛的应用前景，它能够帮助投资者更准确地预测股票的未来走势，从而做出更明智的投资决策。与传统的股票预测方法相比，StockMixer具有以下优势：

- • **轻量级架构**：StockMixer采用了简单的MLP架构，相比于复杂的深度学习模型，它的计算资源消耗更少，训练速度更快，适合在资源有限的环境中使用。

- • **高效性**：通过指标混合、时间混合和股票混合，StockMixer能够有效捕捉股票数据中的复杂相关性，预测精度高，能够为投资者提供可靠的参考依据。

- • **易于实现**：StockMixer的代码实现相对简单，易于理解和修改，投资者可以根据自己的需求对其进行定制化开发，满足个性化的预测需求。

## 结语
总的来说，StockMixer是一个简单却强大的股票价格预测工具，它凭借其独特的架构设计和高效的预测能力，为投资者提供了一个精准的股市分析利器。如果你对股票投资有着浓厚的兴趣，或者想要提升自己的股票预测能力，StockMixer绝对值得你深入研究和应用。想要了解更多关于StockMixer的详细信息，可以访问其GitHub仓库地址：StockMixer GitHub 仓库。相信通过不断的学习和实践，你一定能够从中获得宝贵的知识和经验，为自己的投资之路带来新的突破和发展！

可以关注关注我回复“股票预测”，直接获取源码。