---
title: "GitHub开源30K Stars ：Mem-0 要你的MCP 带上记忆功能！！"
permalink: github开源30k-stars-mem-0-要你的mcp-带上记忆功能
date: 2025-05-15 23:30:20
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天在GitHub 上看到一个AI长期记忆模块，能够记住MCP调用的记录,记住之前的内容聊天，防止MCP 进行重复调用。

并且根据数据显示改开源框架比OpenAI 的memory 更加高效。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTxP6PTiaHvKIl7fVpVnWvZGNyzYKNhR6UwRUWtlPEqLyffyF8Veialx3RW2PI1OQAKb7Hj0jYibXXHA/640?wx_fmt=png&from=appmsg)

## 一、工具亮点全解析

**强大内核功能**
- • **多级记忆架构** ：Mem0 能无缝保留用户、会话和代理状态，并通过自适应个性化功能，让 AI 助手如同拥有 “最强大脑”，清晰记住不同用户的喜好和需求。

- • **极致友好开发体验** ：无论是资深开发者还是初学者，都能轻松上手。它提供直观的 API、跨平台 SDK，还有完全托管的服务选项，让我们可以迅速将记忆功能集成到自己的创作辅助系统中。

- 

## 二、应用场景大拓展
- 1. **AI 助手领域** ：为 AI 助手注入连贯、富有上下文的对话能力，使其能像真人助理一样，精准理解用户意图，提供贴心服务。

- 2. **客户支持行业** ：帮助聊天机器人回忆过去的工单和用户历史记录，从而为客户提供更具针对性、更高效的解决方案，提升客户满意度。

- 3. **医疗保健辅助** ：在医疗场景中，Mem0 可用于跟踪患者的偏好和历史记录，辅助医护人员为患者提供个性化护理，优化就医体验。

- 4. **生产力与游戏革新** ：根据用户行为自适应地调整工作流程和游戏操作环境，让软件和游戏更懂用户，提升使用乐趣和工作效率。

**
**

**![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTxP6PTiaHvKIl7fVpVnWvZGNd7PKmNDOicBd7SBx5uiaPPibYbG5GA5lJ4NA8G1UmIiakhmkDCnKLheRw/640?wx_fmt=png&from=appmsg)
**

## 三、快速上手指南
- 1. **托管平台一键启动** ：选择 Mem0 的托管平台，我们能在几分钟内借助自动更新、分析和企业级安全功能快速启用记忆服务。只需简单几步：注册 Mem0 平台账号，然后通过嵌入 SDK 或使用 API 密钥，就能让 AI 助手拥有超强记忆力。

- 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTxP6PTiaHvKIl7fVpVnWvZGLdqtwLjFibp8hZT20fOoOFewUJNPamVqHSfc1mm1PJtR3hicpmxicwnibw/640?wx_fmt=png&from=appmsg)

- 2. **自托管灵活部署** ：对于追求自主掌控的创作者，可通过 pip 或 npm 安装 Mem0 SDK，将其灵活部署到自己的服务器或开发环境中，定制专属的记忆解决方案。

## 四、示例代码助理解
以下是使用 Mem0 的一个基本代码示例，帮助我们更直观地了解其工作原理和集成方式：

`from openai import OpenAI
from mem0 import Memory

openai_client = OpenAI()
memory = Memory()

defchat_with_memories(message: str, user_id: str = "default_user") -> str:
    # 检索相关记忆
    relevant_memories = memory.search(query=message, user_id=user_id, limit=3)
    memories_str = "\n".join(f"- {entry['memory']}"for entry in relevant_memories["results"])

    # 生成助手响应
    system_prompt = f"You are a helpful AI. Answer the question based on query and memories.\nUser Memories:\n{memories_str}"
    messages = [{"role": "system", "content": system_prompt}, {"role": "user", "content": message}]
    response = openai_client.chat.completions.create(model="gpt-4o-mini", messages=messages)
    assistant_response = response.choices[0].message.content

    # 从对话中创建新记忆
    messages.append({"role": "assistant", "content": assistant_response})
    memory.add(messages, user_id=user_id)

    return assistant_response

defmain():
    print("Chat with AI (type 'exit' to quit)")
    whileTrue:
        user_input = input("You: ").strip()
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break
        print(f"AI: {chat_with_memories(user_input)}")

if __name__ == "__main__":
    main()`

代码提示词：

- 
- 
- 
- 
- 
- 
- 
- 
- 
`从提供的文本中推断出事实、偏好和记忆。``仅以项目符号形式返回事实、偏好和记忆：``自然语言文本：{用户输入}``用户/代理详细信息：{元数据}``推断事实、偏好和记忆的约束：``- 事实、偏好和记忆应简洁且信息丰富。``- 不要以“此人喜欢披萨”开头。而是以“喜欢披萨”开头。``- 不要记住提供的用户/代理详细信息。只记住事实、偏好和记忆。``推断出的事实、偏好和记忆`

当AI 开启上下文记忆了，那么思维闭环也终将实现。Mem0病毒式的传播，堪比国内刚刚出来的DeepSeek，开发者又将大有可为！！技术式惠普。

项目地址：

**https://github.com/mem0ai/mem0**

**
**

**既然看到这里了，如果觉得不错，随手点个赞、在看、转发三连吧**

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