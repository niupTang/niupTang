---
title: "GitHub 18.2k Star STORM：用AI打造知识宝库，从零开始撰写维基百科式文章"
permalink: github-18-2k-star-storm-用ai打造知识宝库-从零开始撰写维基百科式文章
date: 2025-01-07 20:49:03
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    

    大家好，我是牛皮糖！今天要给大家介绍的是一个在GitHub上备受瞩目的开源项目——STORM。STORM是一个由大型语言模型（LLM）驱动的知识整理系统，能够从头开始撰写类似维基百科的文章，并生成带有引用的完整报告。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS2QDI7iaU358OrG4zdWEMk01d8vndibxXMibhiaQKCnuA9LGQKEhrmVhiaj8zyR02wj93XFAV6DrXtk4g/640?wx_fmt=png&from=appmsg)

## 项目核心论点
STORM的核心目标是通过自动化的方式，帮助用户从互联网上搜集信息，并生成结构化的知识内容。它将生成长篇文章的过程分为两个阶段：

- 1. **预写作阶段**：系统进行基于互联网的研究，收集参考文献并生成大纲。

- 2. **写作阶段**：系统利用大纲和参考文献，生成带有引用的完整文章。

STORM通过自动提出问题来深化和拓展研究过程，它采用两种策略来提升问题的质量和广度：

- • **视角引导式提问**：通过调研类似主题的现有文章，发现不同的视角，并用这些视角来指导提问过程。

- • **模拟对话**：模拟维基百科作者与主题专家之间的对话，基于互联网资料，使语言模型能够更新对主题的理解，并提出后续问题。

## 如何使用STORM
使用STORM的过程相对简单，首先需要安装`knowledge-storm`库。可以通过pip命令直接安装：

`pip install knowledge-storm`或者克隆源代码，以便直接修改STORM引擎的行为：

`git clone https://github.com/stanford-oval/storm.git
cd storm
conda create -n storm python=3.11
conda activate storm
pip install -r requirements.txt`安装完成后，就可以使用STORM进行知识整理和文章生成了。例如，使用You.com搜索引擎和OpenAI模型进行文章生成的代码如下：

`import os
from knowledge_storm import STORMWikiRunnerArguments, STORMWikiRunner, STORMWikiLMConfigs
from knowledge_storm.lm import OpenAIModel
from knowledge_storm.rm import YouRM

lm_configs = STORMWikiLMConfigs()
openai_kwargs = {
    'api_key': os.getenv("OPENAI_API_KEY"),
    'temperature': 1.0,
    'top_p': 0.9,
}
gpt_35 = OpenAIModel(model='gpt-3.5-turbo', max_tokens=500, **openai_kwargs)
gpt_4 = OpenAIModel(model='gpt-4o', max_tokens=3000, **openai_kwargs)
lm_configs.set_conv_simulator_lm(gpt_35)
lm_configs.set_question_asker_lm(gpt_35)
lm_configs.set_outline_gen_lm(gpt_4)
lm_configs.set_article_gen_lm(gpt_4)
lm_configs.set_article_polish_lm(gpt_4)
engine_args = STORMWikiRunnerArguments(...)
rm = YouRM(ydc_api_key=os.getenv('YDC_API_KEY'), k=engine_args.search_top_k)
runner = STORMWikiRunner(engine_args, lm_configs, rm)

topic = input('Topic: ')
runner.run(
    topic=topic,
    do_research=True,
    do_generate_outline=True,
    do_generate_article=True,
    do_polish_article=True,
)
runner.post_run()
runner.summary()`通过上述代码，STORM将根据输入的主题，自动进行研究、生成大纲、撰写文章，并对文章进行润色。

## Co-STORM：人机协作的知识整理
Co-STORM是STORM的增强版本，它提出了一个人机协作的对话协议，实现了人与AI系统之间的顺畅协作。Co-STORM中包含多种LLM专家代理、主持人代理以及人类用户。人类用户可以主动参与对话，引导讨论的方向，或者观察对话以获得对主题的深入理解。Co-STORM还维护了一个动态更新的思维导图，将收集到的信息组织成层次化的概念结构，帮助用户和系统之间建立共享的概念空间，减少长时间深入对话时的认知负担。

## 应用场景与优势
STORM和Co-STORM在知识探索、学术研究、内容创作等领域具有广泛的应用前景。它们能够帮助用户快速搜集和整理大量信息，生成结构化的知识内容，提高研究和创作的效率。同时，Co-STORM的人机协作模式，使得用户可以更加主动地参与到知识整理的过程中，获得更加符合自己需求的信息。

## 结语
总的来说，STORM是一个功能强大、易于使用的知识整理工具，它凭借其先进的AI技术和灵活的使用方式，为用户提供了全新的知识探索和内容创作体验。如果你对知识管理和内容创作有着浓厚的兴趣。想要了解更多关于STORM的详细信息，可以访问其GitHub仓库地址：STORM GitHub 仓库。

项目地址：

**https://github.com/stanford-oval/storm**

**
**

**![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrQd2ns9vicj9xrTbPJ8lCNMwa2CibIhYke0HFJaNT8JQpUsMsHPFsFPexBxNicf7vNgmx97xPYmEUfVQ/640?wx_fmt=jpeg&from=appmsg)
**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)