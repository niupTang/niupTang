---
title: "多智能体协作才是LLM的终极形态？AgentVerse 开源框架解读与未来应用预测"
permalink: 多智能体协作才是llm的终极形�?agentverse-开源框架解读与未来应用预测
date: 2025-09-05 23:47:13
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！智能体的发展终于要我看到多智能体的一个开源项目了

————AgentVerse。 简化了为大型语言模型（LLMs）创建自定义多智能体环境的过程。旨在快速、低成本的开发和定制，我们的框架赋能研究人员专注于他们的研究，而不被实现细节所困扰�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQVFq3X5xIYYLwBOMhLGiaYIjicNIFtia6iaMGyichumkqQtASjGmKMJq0hS8TPlrQnHkvicibDq2o6D8Wmw/640?wx_fmt=png&from=appmsg)

**
**

使用 AgentVerse 搭建多智能体交互平台可按以下步骤进行，结合框架特性和示例配置实现快速搭建与定制�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQVFq3X5xIYYLwBOMhLGiaYI2jPnxkKYWgSc6AQ3RqpariaeczxXqttgyjgsIYfKPiacZYa6WOKHsibSw/640?wx_fmt=png&from=appmsg)

### **一、安装与环境准备**
- 1. **安装 AgentVerse**
可通过 pip 直接安装或克隆仓库手动安装：`# 方法1：pip安装
pip install -U agentverse

# 方法2：克隆仓库安装（推荐用于定制开发）
git clone https://github.com/OpenBMB/AgentVerse.git --depth 1
cd AgentVerse
pip install -r requirements.txt`

- 2. **配置 API 密钥**
若使�?OpenAI �?Azure OpenAI 服务，需导出密钥：```
`# OpenAI
export OPENAI_API_KEY="your_api_key_here"

# Azure OpenAI
export AZURE_OPENAI_API_KEY="your_api_key_here"
export AZURE_OPENAI_API_BASE="your_api_base_here"`
```

- 3. **工具支持（可选）**
如需使用 BMTools 提供的工具（如搜索、数据库操作等），需额外安装：```
`git clone git+https://github.com/OpenBMB/BMTools.git
cd BMTools
pip install -r requirements.txt
python setup.py develop`
```

### **二、使用现有示例快速启�?*
AgentVerse 提供了多个预定义场景（如教室、囚徒困境、软件开发团队等），可直接运行体验：

- 1. **命令行示例（�?NLP 教室为例�?*
运行包含 9 个智能体�? 名教�?+ 8 名学生）的课堂模拟：`agentverse-simulation --task simulation/nlp_classroom_9players`

- 2. **图形界面示例（以软件开发团队为例）**
启动包含代码编写者、测试者和审查者的协作场景：```
`python agentverse_command/main_simulation_gui.py --task simulation/sde_team/sde_team_2players`
```

### **三、定制自己的多智能体环境**
若需构建自定义场景，可按以下步骤操作（以“教室环境”为例）�?

**1. 创建任务目录与环境配�?*在 `agentverse/tasks` 下创建任务目录（如 `my_classroom`），并编写环境配置文件 `config.yaml`，定义环境规则（如交互顺序、可见性等）：

`# 环境配置
environment:
type:basic# 使用基础环境
max_turns:10# 最大对话轮�?
order:
    type:sequential# 智能体按顺序发言
visibility:
    type:all# 所有消息对所有智能体可见
selector:
    type:basic# 基础消息筛�?
updater:
    type:basic# 基础内存更新（所有智能体共享消息�?
describer:
    type:basic  # 无额外环境描述`**2. 配置智能�?*在 `config.yaml` 中添加智能体定义，指定类型、角色、LLM 模型等：

`# 智能体配�?
agents:
-agent_type:conversation# 对话型智能体
    name:ProfessorMicheal
    role_description:"你是大学NLP教授，负责讲解Transformer模型，耐心解答学生问题�?
    memory:
      memory_type:chat_history# 存储聊天历史
    prompt_template:|
      你是${agent_name}�?{role_description}
      聊天历史�?{chat_history}
      请回应学生的问题�?
    llm:
      llm_type:text-davinci-003# 使用OpenAI模型
      temperature:0.7
      max_tokens:250

-agent_type:conversation
    name:StudentAlice
    role_description:"你是NLP专业的研究生，对注意力机制有疑问�?
    # 其他配置与教授类�?..`**3. 编写输出解析�?*根据智能体的输出格式（如 `Action: Speak\nAction Input: ...`），编写解析器提取有效信息，并注册到框架中：

`# �?agentverse/tasks/my_classroom/parser.py �?
from agentverse.parser import OutputParser, output_parser_registry

@output_parser_registry.register("classroom_parser")
class ClassroomParser(OutputParser):
    def parse(self, response: str) -> dict:
        # 解析智能体输出，提取发言内容
        if "Action Input:" in response:
            content = response.split("Action Input:")[-1].strip()
            return {"output": content}
        return {"output": response}`**4. 注册与运�?*将解析器导入 `agentverse/tasks/__init__.py`，然后通过命令启动自定义环境：

`agentverse-simulation --task my_classroom`### **四、核心定制能�?*
- 1. **环境组件扩展**
AgentVerse 将环境拆分为 **选择器（Selector�?*�?*更新器（Updater�?*�?*可见性（Visibility�?* 等模块，可通过继承基类自定义逻辑（如限制部分智能体可见消息）�?

- 2. **智能体类型扩�?*
除内置的 `ConversationAgent`（对话）和 `ToolAgent`（工具使用），可继承 `BaseAgent` 类实现自定义智能体（如带反思能力的 `ReflectionAgent`）�?

- 3. **工具集成**
通过 BMTools 扩展智能体能力，例如在课堂场景中让学生使�?Bing 搜索 API 补充知识（示例：`nlp_classroom_3players_withtool`）�?

### **五、参考资�?*
- �?官方示例：`agentverse/tasks` 目录下的 `nlp_classroom`、`prisoner_dilema` 等场景可作为模板�?

- �?文档：GitHub 仓库 README 提供详细配置说明�?API 文档�?

- �?论文：AgentVerse: Facilitating Multi-Agent Collaboration 了解框架设计理念�?

通过以上步骤，可快速搭建并定制多智能体交互平台，适用于协作任务、模拟实验、游戏等多种场景�?

https://github.com/OpenBMB/AgentVerse

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················