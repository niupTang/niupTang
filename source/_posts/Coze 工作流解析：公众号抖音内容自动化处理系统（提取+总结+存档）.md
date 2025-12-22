---
title: Coze 工作流解析：公众号/抖音内容自动化处理系统（提取+总结+存档）
date: 2025-09-28 22:15:00
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

大家好，我是程序员太阳鸟，主要介绍副业和AI 合集，在这里整理了一份开源的 **AI合集 **[ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect) 。

做了一些项目发现提升效率的都是一些不起眼的细节，比如在找素材的时候，可以通过腾讯元宝，帮我生成对应的 TTS 文案内容， 然后再来进行修改。

在今天提供两种通过免费或者自己搭建智能体提取别人的视频文案。

1、 通过元宝整理视频号的文案内容

[只需三步——帮我妈拿下最强微信 AI 助手](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247487034&idx=1&sn=22fb7eae7e6f691ada59e1cfcb1fe17d&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDazthR3ImrJ2nwySsPPlxmBn3GdW7ib3bVL42PGdpNrEQP4zQKMuX9WCZTg/640?wx_fmt=png&from=appmsg)

2、 通过coze智能体获取抖音的内容

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztrDK2TvRsBd57hyXnlw7Cmwa8Av3lEvPlyDhV8uibMME5bYedv2GQTCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztQIWKbwVr0VRcoBZuch99wD6w0aZJYjkoFsC5kRb6K6jnABMFrmgYvQ/640?wx_fmt=png&from=appmsg)

## 一、工作流核心架构总览
整个工作流由 **12个节点+13条数据链路** 构成，按“输入层→处理层→输出层”三层逻辑划分，自动区分“公众号链接”和“抖音链接”并匹配对应处理流程，最终生成结构化飞书文档。

层级
核心节点
功能定位
输入层
开始节点（100001）
接收用户输入的“文章/视频链接”，定义核心输入参数URL
处理层
链接识别（141986）、选择器（115918）、内容提取（128311/110485）、文本处理（152537）、代码汇总（169071）、总结（149038）、修复（185896）、信息合成（104914）
完成“链接解析→平台分流→内容抓取→格式处理→质量优化”
输出层
飞书文档创建（194958）、结束节点（900001）
将处理后的内容存档至飞书，并返回结构化结果+文档链接
## 二、各节点功能拆解与数据链路
### （一）输入层：开始节点（ID：100001）
作为工作流启动入口，仅需用户输入1个核心参数，降低操作门槛：

- • **输入参数**：

- • 必选：`URL`（文章/视频链接，支持公众号文章链接、抖音视频链接）

- • 可选：`BOT_USER_INPUT`（用户对话输入，可补充说明需求）

- • **数据流向**：直接将输入的`URL`传递至“链接识别”节点（141986），启动后续处理。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztpiaA5NtIWk9j9enZrQUYp8FE9Z3uOpTC71msZj9OugaA5ibAyYzDxZNQ/640?wx_fmt=png&from=appmsg)

### （二）处理层：核心逻辑与节点配置
处理层是工作流的核心，通过“链接识别→平台分流→内容提取→内容优化”4步，实现多平台内容的统一处理。

1. 第一步：链接识别（ID：141986，大模型节点）**功能**：从用户输入中提取纯净链接，并为后续“平台判断”提供依据。

- • **输入**：接收开始节点的`URL`参数（可能包含多余文本，如“复制这个抖音链接：xxx”）。

- • **提示词核心规则**：

- • 提取内容中的链接，若仅含1个链接则直接输出；

- • 仅输出网址本身，不添加任何修饰（如“链接：”“地址：”）；

- • 强制只输出1个链接，避免多链接干扰后续流程。

- • **模型配置**：使用`ep-20250103114050-hgnz5`模型，`temperature=0.1`（低随机性，确保链接提取精准），`maxTokens=1024`。

- • **数据流向**：将提取的纯净链接传递至“选择器节点”（115918）。

- 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztrCK4SnCy1h4nLJNOTLdcGF7MKoC7bcjibjoCncVuabN3Obx9Tbesorg/640?wx_fmt=png&from=appmsg)

2. 第二步：平台分流（ID：115918，选择器节点）**功能**：根据链接域名判断内容来源（公众号/抖音），匹配对应提取逻辑，实现“一分二”的分支处理。

- • **判断规则**：检查链接是否包含`weixin.qq.com`（公众号域名）：

- • **条件成立（含该域名）**：进入“公众号内容提取”分支（目标节点128311）；

- • **条件不成立（不含该域名）**：默认判定为抖音链接，进入“抖音内容提取”分支（目标节点110485）。

- • **关键价值**：通过分支逻辑避免“一套提取规则适配多平台”的兼容性问题，提升内容提取准确率。

- 

- ![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDazt1Rk5bIsxb6e42Q8leoHjHenjZiciaGQEYcrKzNYLAJcONpG3b3iacSvow/640?wx_fmt=png&from=appmsg)

- 

3. 第三步：内容提取（2个插件节点，分平台处理）根据选择器的分支结果，分别调用对应插件提取内容，确保不同平台的内容格式适配。

提取场景
节点类型
核心配置
输出结果
公众号内容
链接读取插件（LinkReaderPlugin）
输入：纯净公众号链接；
插件功能：自动抓取网页标题、全文内容、图片信息（支持markdown格式内容提取）
`data.title`（文章标题）、`data.content`（文章全文）、`data.images`（图片URL列表）
抖音内容
抖音文案解析插件（get_douyin_article_voice_text）
输入：纯净抖音链接+阿里百炼`api_key`；
核心功能：提取视频标题、作者信息、语音转文字（支持带时间轴的`srt`格式和纯文本格式）
`data.title`（视频标题）、`data.asr.text_srt`（带时间轴文案）、`data.cover`（视频封面）
![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztZQrQ4Bdv19btcE3OqE1Y9nNVnRun1oDXAy5wpgGsNn9e8PcEvcjZKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztK5nwaR7gUJkKs5V5gsu5z36lvY1GxJrfpV2Bibd3P3fYCah2MpB0ywg/640?wx_fmt=png&from=appmsg)

4. 第四步：内容整合（文本处理+代码节点）将不同平台提取的内容统一格式，避免后续“总结/修复”节点因格式差异出错：

- • **公众号内容整合（文本处理节点）**：

- • 输入：公众号提取的`data.title`（标题）和`data.content`（全文）；

- • 格式处理：按“标题：XXX\n原文：XXX”的固定结构拼接，生成标准化文本；

- • 输出：统一格式的公众号内容文本。

- • **全平台内容汇总（代码节点）**：

- • 输入：公众号整合文本（152537输出）或抖音语音文案（`data.asr.text_srt`）；

- • 代码逻辑：通过Python代码将两种来源的内容合并为统一变量`key0`（避免分支数据分散）；

- • 输出：`key0`（包含“标题+全文/文案”的标准化内容）。

- 

- ![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztgHeNgia0MsQyS1orvaFu6HuBboJc4KXfBTjnF9vsxJosLKibLOQxxPaw/640?wx_fmt=png&from=appmsg)

5. 第五步：内容优化（2个大模型节点，总结+修复）对统一格式的内容进行“价值提炼”和“质量优化”，提升内容可用性：

- • **内容总结（大模型节点）**：

- • 输入：汇总后的`key0`内容；

- • 提示词规则：按“摘要式总结”生成简短段落，概括主旨+核心信息（如公众号文章的论点、抖音文案的核心观点）；

- • 模型配置：`temperature=1`（平衡概括性与细节），`maxTokens=1024`；

- • 输出：`output`（内容摘要）。

- 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztter9ZtHJUKbJpYGzhicSPPia9pguhVI0U1zHZ0ciaPib1cen9UzxMsibRhw/640?wx_fmt=png&from=appmsg)

- • **文案修复（大模型节点）**：

- • 输入：汇总后的`key0`内容；

- • 提示词规则：检查并优化“错别字、歧义句、语句不通顺”问题，同时明确标注修改处（如“将‘的得’改为‘得’”）；

- • 模型配置：`temperature=1`（保留原文风格，仅优化错误），`maxTokens=4096`（适配长文案修复）；

- • 输出：`output`（优化后文案+修改说明）。

- 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDaztmZt32OlYVgzQYcc2nhbVzsMgNCskV7gNojFqNdChIXXOVjDsa64I4A/640?wx_fmt=png&from=appmsg)

6. 第六步：信息合成（文本处理节点）将“原始内容、优化文案、内容摘要、原始链接”按结构化格式整合，为飞书存档做准备：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562My40Sf561QmqIrKGPZDazt0yFhc5n83jqbcp7uaAa7MCXyVLXVw4VtnyDPm4Vib493iceRlqREV2HA/640?wx_fmt=png&from=appmsg)

- • **输入参数**：

- • `String2`：修复后的文案；

- • `String3`：内容摘要；

- • `String5`：纯净链接；

- • `String6`：原始内容。

- • **合成格式（Markdown）**：`## 🎉 <span style="color: #FF5733;">内容总结</span>
{{String3}}（摘要）

## 🎉 <span style="color: #FF5733;">原始文案</span>
{{String6}}（标题+全文/抖音文案）

## 🎉 <span style="color: #FF5733;">修复文案</span>
{{String2}}（优化后内容+修改说明）

## 🎉 <span style="color: #FF5733;">原始链接</span>
[原始链接]({{String5}})（可直接跳转）`

- • **输出**：`output`（结构化Markdown内容，用于飞书文档创建）。

### （三）输出层：飞书存档+结果返回
1. 飞书文档创建（ID：194958，飞书云文档插件）**功能**：将结构化内容自动生成飞书文档，实现“处理→存档”无缝衔接。

- • **输入参数**：

- • `content`：信息合成节点的Markdown内容（104914输出）；

- • `title`：固定标题“文案”（也可配置为“公众号-XXX标题”或“抖音-XXX标题”，需修改参数为`data.title`）。

- • **输出结果**：

- • `data.url`：飞书文档链接（可直接分享或存档）；

- • `data.token`：文档唯一标识（用于后续编辑/管理）。

2. 结果返回（ID：900001，结束节点）**功能**：向用户输出最终结果，包含“结构化内容+飞书文档入口”，直观呈现处理成果。

- • **输出格式（支持Markdown渲染）**：`{{output1}}（即信息合成的结构化内容：总结+原始+修复+链接）

##  🎉 <span style="color: #FF5733;">点击下方</span>
[原文内容已上传飞书文档]({{output3}})（{{output3}}即飞书文档链接）`

- • **关键设置**：开启“返回文本”模式+“Markdown渲染”，确保用户端能直接看到彩色标题、跳转链接和分层内容，体验更友好。

## 三、工作流核心优势与适用场景
### 1. 核心优势
- • **全自动化无人工干预**：从输入链接到生成飞书文档，无需手动复制、格式调整，全程1-2分钟完成；

- • **多平台自适应**：自动区分公众号/抖音，匹配专属提取逻辑，避免内容提取不完整（如抖音语音转文字、公众号图片保留）；

- • **内容质量双优化**：同时实现“核心总结”（提效）和“文案修复”（提质），输出内容可直接用于二次创作或存档；

- • **企业级存档**：对接飞书文档，支持团队协作分享、关键词检索，解决素材散存难管理的问题。

### 2. 适用人群/场景
- • **新媒体运营**：批量处理公众号干货文章、抖音热点视频，快速搭建素材库；

- • **内容创作者**：提取竞品内容核心观点，结合修复后的文案优化自身创作；

- • **企业培训/行政**：整理行业报告（公众号长文）、员工教程（抖音视频），生成标准化文档存档；

- • **个人学习者**：抓取知识类内容（如公众号科普、抖音技能教程），生成带总结的笔记，方便复习。

AI 时代到来，要个体的能力加强，在自媒体时代下用  AI + 副业要这一切变得 。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。

DeepSeek相关

# [DeepSeek V3可用的15种精美知识卡片提示词](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485862&idx=1&sn=181eb3edade40af73928e89cd40ea6ec&scene=21#wechat_redirect)
[DeepSeek + 可灵制作视频](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489186&idx=2&sn=7aca6f49514ef83e186fd6ec389be7ef&scene=21#wechat_redirect)

# [DeepSeek 快速实现Word 文档排版](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247485856&idx=1&sn=72851d4f4f86dee7f9f9fa0c1f8ee834&scene=21#wechat_redirect)
[DeepSeek + coze 做飞书知识库](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489249&idx=2&sn=fc09575fef051ba72b3bcd14efb25d49&scene=21#wechat_redirect)

[GitHub 8.5k Star Cherry Studio：多语言模型接入神器，DeepSeek 本地知识库也能轻松搞定！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489104&idx=1&sn=a61ab12bd428cbb224fb8a1d1909fb78&scene=21#wechat_redirect)

**太阳鸟 **

98年在职成长型博主

【添加太阳鸟微信送你一份惊喜副业大礼包+资源共享技术交流群】

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562MSIatXpWt7sCrlMEJrXbRMKml7LffS242cV6WlEDAhMNqjPYybY9zUXjLgY5MxLyhxBEThpmnHqA/640?wx_fmt=png&from=appmsg)

**每日**更新，期待与你一起成长

欢迎围观高质量的副业知识星球

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562NjZajm4Aia3IQKz2hNCvzkY6x7iaNJKDazJ6FXkia9ich938VIOXkGhqzTPMtp4VnqtMmKdqxWYP9s1A/640?wx_fmt=jpeg)