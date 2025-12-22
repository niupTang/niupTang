---
title: 大模型管理革命：RagaAI Catalyst让AI效率提升300%
date: 2025-03-19 22:02:38
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！大家对于LLM 的使用其实没有一个完整的管理平台，使用过后再一次使用其实会将上次数据丢失。RagaAI Catalyst 是一个综合平台，旨在增强大语言模型（LLM）项目的管理与优化。它提供以下核心功能：

- • **项目管理** - 端到端项目生命周期管理

- • **数据集管理** - 多格式数据集支持与自动模式映射

- • **评估管理** - 多维模型评估指标体系

- • **追踪管理** - 全链路调用追踪与分析

- • **提示管理** - 版本化提示模板与动态编译

- • **合成数据** - 智能问答对生成与数据增强

- • **安全护栏** - 多层防护策略与实时执行

- • **红队测试** - 对抗性测试与脆弱性扫描

- 

## 安装
使用 pip 进行安装：

`pip install ragaai-catalyst`## 配置
配置认证凭证：

`from ragaai_catalyst import RagaAICatalyst

# 初始化客户端
catalyst = RagaAICatalyst(
    access_key="您的访问密钥",
    secret_key="您的安全密钥",
    base_url="API端点"
)`**密钥获取步骤**：

- 1. 登录 RagaAI 控制台

- 2. 进入「个人设置」→「认证管理」

- 3. 点击「生成新密钥」

- 

注意：所有 API 操作均需认证凭证

## 核心功能
### 项目管理
`# 创建新项目
project = catalyst.create_project(
    project_name="智能客服系统",
    usecase="对话机器人"
)

# 列出所有项目
projects = catalyst.list_projects()`### 数据集管理
支持 CSV/JSONL/DataFrame 多数据格式：

`from ragaai_catalyst import Dataset

ds = Dataset(project_name="智能客服系统")

# 从 CSV 创建数据集
ds.create_from_csv(
    csv_path="对话记录.csv",
    dataset_name="客服对话",
    schema_mapping={'用户提问': 'query', '机器人回复': 'response'}
)`### 评估管理
```
`from ragaai_catalyst import Evaluation

eval = Evaluation(
    project_name="智能客服系统",
    dataset_name="客服对话"
)

# 添加评估指标
eval.add_metrics([
    {
        "name": "事实准确性",
        "config": {"model": "gpt-4o", "threshold": {"gte": 0.8}}
    }
])

# 获取评估结果
results = eval.get_results()`
```
### 追踪管理
```
`from ragaai_catalyst import Tracer

tracer = Tracer(
    project_name="智能客服系统",
    dataset_name="服务追踪"
)

with tracer():
    # 需要追踪的业务逻辑
    response = chatbot.query("如何重置密码？")`
```
### 代理追踪
```
`@trace_agent(name="推荐代理")
class RecommendationAgent:
    def recommend(self, text):
        # 业务逻辑
        current_span().add_metrics(accuracy=0.92)`
```
### 提示管理
```
`from ragaai_catalyst import PromptManager

pm = PromptManager(project_name="智能客服系统")
prompt = pm.get_prompt("标准回复模板")

# 动态编译提示
compiled_prompt = prompt.compile(
    query="订单查询",
    context="用户需要查看近期订单"
)`
```
### 合成数据生成
```
`from ragaai_catalyst import SyntheticDataGeneration

sdg = SyntheticDataGeneration()
text = sdg.process_document("产品手册.pdf")

# 生成复杂问答对
qna_data = sdg.generate_qna(text, question_type='complex', n=50)`
```
### 护栏管理
```
`from ragaai_catalyst import GuardrailsManager

gm = GuardrailsManager(project_name="智能客服系统")

# 添加安全规则
gm.add_guardrails(
    deployment_id=123,
    guardrails=[{
        "name": "敏感信息过滤",
        "config": {"threshold": {"lte": 0.1}}
    }]
)`
```
### 红队测试
```
`from ragaai_catalyst import RedTeaming

rt = RedTeaming(model_name="gpt-4", provider="openai")

# 运行安全扫描
test_report = rt.run(
    description="招聘顾问机器人",
    detectors=["偏见检测", "有害内容"],
    response_model=chatbot.predict
)`
```
## 开源协议
本项目采用 Apache License 2.0

项目地址：

**https://github.com/raga-ai-hub/RagaAI-Catalyst**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)• [  github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)  

• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)