---
title: Github 开源如何友好的要 AI 获取到你的网站内容（内附爬虫列表）
date: 2025-09-08 23:52:30
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
• [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！最近我看到好多做GEO 的文章，对于 AI 来说要如何才能要AI 收录你的网页？ 其实AI 在网上找资料训练，其实也是要遵守一定的协议的，而这个协议就被我们定义在 robots.txt 文件中，当然你要通过 robots.txt 也能够组织 AI 爬虫你的网页。

### **如何正确地让 AI “友好地” 爬取你的网站？**
现在我们来回答你的核心问题。如果你希望 AI 能够访问你的网站，你应该使用的是标准的 `robots.txt` 文件协议，但规则要反过来写，即从“禁止”改为“允许”。

`robots.txt` 是一个放置在你网站根目录下的文本文件（例如 `https://www.yourwebsite.com/robots.txt`），它像一个“君子协议”，告诉所有来访的爬虫（包括搜索引擎、AI 爬虫等）哪些页面可以访问，哪些不可以。

以下是你实现“友好爬取”的具体步骤：

**第一步：创建 `robots.txt` 文件**在你的网站的根目录下创建一个名为 `robots.txt` 的纯文本文件。

**第二步：编写规则**`robots.txt` 的语法很简单，主要由两条指令构成：

- • `User-agent`: 定义这条规则适用于哪个爬虫。`*` 代表所有爬虫。

- • `Disallow`: 禁止访问的路径。

- • `Allow`: 允许访问的路径。

**实现方式：**

**1. 允许所有爬虫访问所有内容（最大方的方式）**

如果你的网站所有内容都希望被 AI 和其他爬虫索引，你的 `robots.txt` 文件可以这样写：

`User-agent: *
Disallow:`这里的 `Disallow:` 后面是空的，意味着没有任何限制。

**2. 仅允许特定的 AI 爬虫访问**

如果你只想让某个或某几个你信任的 AI 爬虫访问，可以明确指定它们。例如，如果你想允许 Google 的 AI 爬虫（Google-Extended）和 OpenAI 的爬虫（GPTBot）访问，可以这样写：

`# 禁止所有爬虫
User-agent: *
Disallow: /

# 单独允许 Google AI
User-agent: Google-Extended
Allow: /

# 单独允许 OpenAI 的爬虫
User-agent: GPTBot
Allow: /`这个例子的意思是：

- 1. 先用 `User-agent: *` 和 `Disallow: /` 禁止所有爬虫访问网站的任何内容。

- 2. 然后，单独为 `Google-Extended` 和 `GPTBot` 这两个 `User-agent` 设置 `Allow: /` 规则，允许它们访问所有内容。

**3. 允许 AI 爬虫访问，但禁止访问特定目录**

假设你希望 AI 爬取你的大部分内容，但不想让它们访问后台管理、用户隐私等敏感目录，可以这样设置：

`User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /user-profiles/`这个规则告诉所有爬虫，不要访问 `/admin/`，`/private/` 和 `/user-profiles/` 这几个目录下的任何内容。

- 

- • **实现友好爬取**：你需要自己创建一个 `robots.txt` 文件，使用 `Allow` 规则来明确告诉 AI 爬虫它们可以访问你的网站。最简单的方式就是允许所有爬虫访问所有内容。

根据你的具体需求，选择上述最适合你的方式来配置你的 `robots.txt` 文件即可。

爬虫和公司列表

名称
运营商
遵守 `robots.txt`
数据用途
访问频率
描述
AddSearchBot
目前不明确
目前不明确
AI 搜索爬虫
目前不明确
AddSearchBot 是一个网络爬虫，为 AddSearch 的 AI 驱动站点搜索解决方案索引网站内容
AI2Bot
Ai2是
内容用于训练开放语言模型
未提供信息
探索'特定领域'以查找网络内容
Ai2Bot-Dolma
Ai2是
内容用于训练开放语言模型
未提供信息
探索'特定领域'以查找网络内容
aiHitBot
aiHit是
大规模、人工智能/机器学习、自动化系统
未提供信息
为 AI 系统抓取数据
Amazonbot
Amazon
是
服务改进并为 Alexa 用户提供答案
未提供信息
在通过 Alexa 呈现答案时包含被抓取网站的引用
Andibot
Andi目前不明确
使用生成式 AI 的搜索引擎，AI 搜索助手
未提供信息
抓取网站并提供 AI 摘要
anthropic-ai
Anthropic目前不明确
抓取数据以训练 Anthropic 的 AI 产品
未提供信息
抓取数据以训练 Anthropic 提供的 LLM 和 AI 产品
Applebot
目前不明确
目前不明确
AI 搜索爬虫
目前不明确
Apple 使用的网络爬虫，用于索引搜索结果，使 Siri AI 助手能够回答用户问题
Applebot-Extended
Apple是
为 Siri、Spotlight、Safari、Apple Intelligence 提供支持
目前不明确
用于训练为 Apple 产品提供支持的生成式 AI 功能的基础模型
Awario
Awario
目前不明确
AI 数据抓取工具
目前不明确
由 Awario 运营的 AI 数据抓取工具
bedrockbot
Amazon是为自定义 AI 应用程序进行数据抓取
目前不明确
连接并抓取用户 AWS bedrock 应用程序中选择使用的 URL
bigsur.ai
Big Sur AI
目前不明确
AI 助手
目前不明确
抓取网站内容以启用 AI 驱动的网络代理、销售助手和内容营销解决方案
Brightbot 1.0
Browsing.ai
目前不明确
LLM/AI 训练
目前不明确
抓取数据以训练专注于网站客户支持的 LLM 和 AI 产品
Bytespider
ByteDance
否
LLM 训练
目前不明确
下载数据以训练 LLMS，包括 ChatGPT 的竞争对手
CCBot
Common Crawl Foundation是提供开放抓取数据集，用于机器学习/AI
目前每月一次
可追溯到 2008 年的网络存档，每年被数千篇研究论文引用
ChatGPT Agent
OpenAI是
AI 代理
目前不明确
OpenAI 创建的 AI 代理，可以使用 Web 浏览器智能地导航和与网站交互
ChatGPT-User
OpenAI是
根据用户提示采取行动
仅在用户提示时
由 ChatGPT 中的插件使用，根据用户输入回答查询
Claude-SearchBot
Anthropic是提高用户的搜索结果质量
未提供信息
浏览网络并分析在线内容以增强搜索响应的相关性和准确性
Claude-User
Anthropic是支持 Claude AI 用户
未提供信息
当个人向 Claude 提问时，可能会使用此代理访问网站
Claude-Web
Anthropic
目前不明确
未公开记录的 AI 代理
目前不明确
由 Anthropic 运营的 AI 相关代理，确切用途尚不清楚
ClaudeBot
Anthropic是抓取数据以训练 Anthropic 的 AI 产品
未提供信息
抓取数据以训练 Anthropic 提供的 LLM 和 AI 产品
CloudVertexBot
目前不明确
目前不明确
AI 数据抓取工具
目前不明确
Google 运营的爬虫，可供站点所有者请求针对其站点进行定向抓取以用于 Vertex AI 平台
cohere-ai
Cohere目前不明确
检索数据以提供对用户发起提示的响应
根据用户提示采取行动
根据用户提示检索数据
cohere-training-data-crawler
Cohere
目前不明确
AI 数据抓取工具
目前不明确
用于下载训练数据以支持其为企业 AI 产品提供支持的 LLM
Cotoyogi
ROIS是
AI LLM 抓取工具
未提供信息
为日语 AI 训练抓取数据
Crawlspace
Crawlspace是抓取数据
目前不明确
提供用于任何目的的抓取服务，可能包括 AI 模型训练
Datenbank Crawler
Datenbank
目前不明确
AI 数据抓取工具
目前不明确
由 Datenbank 运营的 AI 数据抓取工具
Devin
Devin AI
目前不明确
AI 助手
目前不明确
由 Devin AI 运营的 AI 助手
Diffbot
Diffbot由 Diffbot 用户自行决定
聚合结构化网络数据用于监控和 AI 模型训练
目前不明确
用于将网页解析为结构化数据的应用程序
DuckAssistBot
目前不明确
目前不明确
AI 助手
目前不明确
被 DuckDuckGo 的 DuckAssist 功能用于获取内容并生成用户搜索的实时 AI 答案
Echobot Bot
Echobox
目前不明确
AI 数据抓取工具
目前不明确
由 Echobox 运营的 AI 数据抓取工具
EchoboxBot
Echobox目前不明确
数据收集以支持 AI 驱动的产品
目前不明确
支持公司 AI 驱动的社交和电子邮件管理产品
FacebookBot
Meta/Facebook
是训练语言模型
每秒最多 1 页
官方用于训练 Meta"语音识别技术"
facebookexternalhit
Meta/Facebook
否表面上仅用于分享，但很可能也用作 AI 爬虫
目前不明确
抓取在 Meta 系列应用上分享的应用程序或网站的内容
Factset_spyderbot
Factset目前不明确
AI 模型训练
未提供信息
为 AI 训练抓取数据
FirecrawlAgent
Firecrawl是
AI 抓取工具和 LLM 训练
未提供信息
为 AI 系统和 LLM 训练抓取数据
FriendlyCrawler
未知
是构建用于机器学习实验的数据集
目前不明确
运营商不明确；数据用于训练/机器学习
Gemini-Deep-Research
目前不明确
目前不明确
AI 助手
目前不明确
负责收集和扫描 Google Gemini 深度研究功能所用资源的代理
Google-CloudVertexBot
Google
是为采用 Vertex AI 的企业构建和管理 AI 模型
无信息
在构建 Vertex AI 代理时根据站点所有者的请求抓取站点
Google-Extended
Google
是LLM 训练
无信息
用于训练 Gemini 和 Vertex AI 生成式 API
Google-Firebase
Google
目前不明确
用作 Google Firebase AI 产品用户开发的 AI 应用程序的一部分
目前不明确
支持 Google 的 Firebase AI 产品
GoogleAgent-Mariner
Google
目前不明确
AI 代理
目前不明确
Google 创建的 AI 代理，可以使用 Web 浏览器智能导航
GoogleOther
Google
是抓取数据
无信息
被各种产品团队用于从站点获取公开可访问的内容
GoogleOther-Image
Google
是抓取数据
无信息
被各种产品团队用于从站点获取公开可访问的内容
GoogleOther-Video
Google
是抓取数据
无信息
被各种产品团队用于从站点获取公开可访问的内容
GPTBot
OpenAI是
抓取数据以训练 OpenAI 的产品
无信息
数据用于训练当前和未来的模型
iaskspider/2.0
iAsk
否
抓取站点以提供用户查询的答案
目前不明确
用于提供用户查询的答案
ICC-Crawler
NICT是
抓取数据以训练和支持 AI 技术
无信息
将收集的数据用于人工智能技术并提供给第三方
ImagesiftBot
ImageSift是支持网络情报产品套件
无信息
抓取互联网上的公开可用图像并分析存储
img2dataset
img2dataset目前不明确
抓取图像用于 LLM
由 img2dataset 用户自行决定
将大量图像下载到数据集中用于 LLM 训练
ISSCyberRiskCrawler
ISS-Corporate否
抓取数据以训练机器学习模型
无信息
用于训练基于机器学习的模型以量化网络风险
Kangaroo Bot
目前不明确
目前不明确
AI 数据抓取工具
目前不明确
用于下载数据以训练针对澳大利亚语言和文化定制的 AI 模型
LinerBot
目前不明确
目前不明确
AI 助手
目前不明确
用于从学术资源和网站收集信息以提供带有来源引用的答案
meta-externalagent
Meta是
用于训练模型和改进产品
无信息
抓取网络用于训练 AI 模型或通过直接索引内容改进产品
Meta-ExternalAgent
目前不明确
目前不明确
AI 数据抓取工具
目前不明确
用于下载 AI 模型的训练数据并通过直接索引内容改进产品
meta-externalfetcher
目前不明确
目前不明确
AI 助手
目前不明确
由 Meta AI 产品在响应用户提示时派遣以获取单个链接
Meta-ExternalFetcher
目前不明确
目前不明确
AI 助手
目前不明确
由 Meta AI 产品在响应用户提示时派遣以获取单个链接
MistralAI-User
Mistral
目前不明确
AI 助手
目前不明确
由 Mistral 运营的 AI 助手
MistralAI-User/1.0
Mistral AI
是
根据用户提示采取行动
仅在用户提示时
用于 LeChat 中的用户操作，可能会访问网页以帮助回答
MyCentralAIScraperBot
目前不明确
目前不明确
AI 数据抓取工具
目前不明确
运营商和数据用途目前不明确
netEstate Imprint Crawler
netEstate
目前不明确
AI 数据抓取工具
目前不明确
由 netEstate 运营的 AI 数据抓取工具
NovaAct
目前不明确
目前不明确
AI 代理
目前不明确
Amazon 创建的 AI 代理，可以使用 Web 浏览器智能导航
OAI-SearchBot
OpenAI是搜索结果生成
无信息
抓取站点以在 SearchGPT 中作为结果呈现
omgili
Webz.io是数据被出售
无信息
为 API 抓取站点，数据也出售用于研究目的或 LLM 训练
omgilibot
Webz.io是数据被出售
无信息
最初用于 Omgili 搜索引擎的旧用户代理
OpenAI
OpenAI是
目前不明确
目前不明确
OpenAI 爬虫套件的成员，目的目前尚不清楚
Operator
目前不明确
目前不明确
AI 代理
目前不明确
OpenAI 创建的 AI 代理，可以使用 Web 浏览器智能导航
PanguBot
中国公司华为
目前不明确
AI 数据抓取工具
目前不明确
用于为其多模态 LLM PanGu 下载训练数据
Panscient
Panscient是使用机器学习和 AI 进行数据收集和分析
对同一域名或 IP 最多每秒请求一次
使用 AI 和机器学习构建有关企业和商业专业人士的结构化数据
panscient.com
Panscient是使用机器学习和 AI 进行数据收集和分析
对同一域名或 IP 最多每秒请求一次
使用 AI 和机器学习构建有关企业和商业专业人士的结构化数据
Perplexity-User
Perplexity否用于响应用户请求回答查询
仅在用户提示时
访问网页以帮助提供准确答案并在响应中包含链接
PerplexityBot
Perplexity是搜索结果生成
无信息
抓取站点以在 Perplexity 中作为结果呈现
PetalBot
Huawei是
在华为助手和 AI 搜索服务中提供推荐
未明确提供频率
由华为运营，提供搜索和 AI 助手服务
PhindBot
phind目前不明确
AI 增强的搜索引擎
未明确提供频率
公司提供使用 AI 并动态生成额外网络查询的 AI 代理
Poseidon Research Crawler
Poseidon Research目前不明确
AI 研究爬虫
未明确提供频率
专注于扩展可解释性研究的实验室
QualifiedBot
Qualified目前不明确
支持 AI 产品
未明确提供频率
由 Qualified 作为其 AI 产品套件的一部分运营
QuillBot
Quillbot目前不明确
提供 AI 检测、写作工具和其他服务
未明确提供频率
由 QuillBot 作为其 AI 产品套件的一部分运营
quillbot.com
Quillbot目前不明确
提供 AI 检测、写作工具和其他服务
未明确提供频率
由 QuillBot 作为其 AI 产品套件的一部分运营
SBIntuitionsBot
SB Intuitions是将收集的数据用于 AI 开发和信息分析
无信息
AI 开发和信息分析
Scrapy
Zyte目前不明确
抓取数据用于各种用途，包括训练 AI
无信息
为 AI 和机器学习应用程序构建结构化数据集
SemrushBot-OCOB
Semrush是为 ContentShake AI 工具抓取站点
大约每 10 秒一次
收集的数据用于 ContentShake AI 工具报告
SemrushBot-SWA
Semrush是检查用于 SEO Writing Assistant 的 URL
大约每 10 秒一次
检查 URL 是否可访问
ShapBot
Parallel是为 Parallel 的 Web API 收集数据
目前不明确
帮助发现和索引网站以用于 Parallel 的 Web API
Sidetrade indexer bot
Sidetrade目前不明确
提取数据用于各种用途，包括训练 AI
无信息
AI 产品训练
Thinkbot
Thinkbot否
关于 AI 集成和自动化的见解
目前不明确
收集数据用于分析 AI 使用和自动化
TikTokSpider
ByteDance
目前不明确
LLM 训练
目前不明确
根据 Bytespider，下载数据以训练 LLMS
Timpibot
Timpi目前不明确
抓取数据用于训练 LLM
无信息
使数据可用于训练 AI 模型
VelenPublicWebCrawler
Velen Crawler是抓取数据用于业务数据集和机器学习模型
无信息
构建业务数据集和机器学习模型以更好地理解网络
WARDBot
WEBSPARK
目前不明确
AI 数据抓取工具
目前不明确
由 WEBSPARK 运营的 AI 数据抓取工具
Webzio-Extended
目前不明确
目前不明确
AI 数据抓取工具
目前不明确
用于维护出售给其他公司的网络抓取数据存储库
wpbot
QuantumCloud目前不明确
实时聊天支持和潜在客户生成
目前不明确
支持 WordPress 的 AI 聊天机器人插件的功能
YaK
Meltwater目前不明确
支持 AI 的消费者情报套件
目前不明确
检索用于 Meltwater 支持 AI 的消费者情报套件的数据
YandexAdditional
Yandex是为 YandexGPT LLM 抓取/分析数据
无信息
检索用于 YandexGPT 快速回答功能的数据
YandexAdditionalBot
Yandex是为 YandexGPT LLM 抓取/分析数据
无信息
检索用于 YandexGPT 快速回答功能的数据
YouBot
You是为搜索引擎和 LLM 抓取数据
无信息
检索用于 You.com 网络搜索引擎和 LLM 的数据

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTrXd9c1N3fibuNSniaqHI4DcIicjg6iaqqMmFGl56Z6VLqepgfZPyEZLBrxciaYxdCSlA0Ay2nZb51SvQ/640?wx_fmt=png&from=appmsg)