---
title: GitHub 上的 agents-flex 项目：基于 Java 的 LLM 应用开发框架
date: 2025-03-05 21:23:05
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**太阳鸟不会飞**”关注我

    大家好，我是太阳鸟！今天要给大家介绍一个基于 Java 的 LLM（大语言模型）应用开发框架——**agents-flex**。这个项目为开发者提供了一个强大的工具，用于快速构建和部署 LLM 应用。

![](https://mmbiz.qpic.cn/mmbiz_png/JiaMCsdB13Ym5VY0PKf11g8SHnodTpXiclEabMn4NVKdc3n3ZncadTmVuUU0grhgg4tPddiapFBhcOKPSIxicgNZnA/640?wx_fmt=png&from=appmsg)

### **项目简介**
**agents-flex** 是一个基于 Java 的 LLM 应用开发框架，旨在简化大语言模型的应用开发流程。它提供了丰富的功能和模块，支持多种大语言模型和图片生成模型，适用于各种应用场景。

### **基本能力**
- • **LLM 的访问能力**：支持多种大语言模型，包括 OpenAI、通义千问、讯飞星火等。

- • **Prompt、Prompt Template 定义加载的能力**：灵活的提示和模板定义，方便定制化开发。

- • **Function Calling 定义、调用和执行等能力**：支持函数调用，实现更复杂的功能。

- • **记忆的能力（Memory）**：支持记忆功能，实现对话的上下文管理。

- • **Embedding**：支持向量化处理，方便文本相似度计算。

- • **Vector Store**：支持向量存储，适用于大规模数据处理。

- • **文档处理**：支持多种文档处理功能，包括加载器、分割器和解析器。

- • **加载器（Loader）**：支持 Http 和 FileSystem 加载。

- • **分割器（Splitter）**：支持文档分割。

- • **解析器（Parser）**：支持 PoiParser 和 PdfBoxParser。

- • **Chain 执行链**：支持多种执行链，包括顺序执行链、并发执行链、循环执行链等。

### **简单对话示例**
使用 OpenAI 大语言模型：

`@Test
publicvoidtestChat() {
    OpenAiLlmConfigconfig=newOpenAiLlmConfig();
    config.setApiKey("sk-rts5NF6n*******");

    Llmllm=newOpenAiLlm(config);
    Stringresponse= llm.chat("请问你叫什么名字");

    System.out.println(response);
}`使用 “通义千问” 大语言模型：

`@Test
publicvoidtestChat() {
    QwenLlmConfigconfig=newQwenLlmConfig();
    config.setApiKey("sk-28a6be3236****");
    config.setModel("qwen-turbo");

    Llmllm=newQwenLlm(config);
    Stringresponse= llm.chat("请问你叫什么名字");

    System.out.println(response);
}`使用 “讯飞星火” 大语言模型：

`@Test
publicvoidtestChat() {
    SparkLlmConfigconfig=newSparkLlmConfig();
    config.setAppId("****");
    config.setApiKey("****");
    config.setApiSecret("****");

    Llmllm=newSparkLlm(config);
    Stringresponse= llm.chat("请问你叫什么名字");

    System.out.println(response);
}`### **历史对话示例**
```
`public staticvoidmain(String[] args) {
    SparkLlmConfigconfig=newSparkLlmConfig();
    config.setAppId("****");
    config.setApiKey("****");
    config.setApiSecret("****");

    Llmllm=newSparkLlm(config);

    HistoriesPromptprompt=newHistoriesPrompt();

    System.out.println("您想问什么？");
    Scannerscanner=newScanner(System.in);
    StringuserInput= scanner.nextLine();

    while (userInput != null) {

        prompt.addMessage(newHumanMessage(userInput));

        llm.chatStream(prompt, (context, response) -> {
            System.out.println(">>>> " + response.getMessage().getContent());
        });

        userInput = scanner.nextLine();
    }
}`
```
### **Function Calling 示例**
**第一步**：通过注解定义本地方法

`public class WeatherUtil {

    @FunctionDef(name = "get_the_weather_info", description = "get the weather info")
    public static String getWeatherInfo(
        @FunctionParam(name = "city", description = "the city name") String name
    ) {
        // 在这里，我们应该通过第三方接口调用 api 信息
        return name + "的天气是阴转多云。 ";
    }
}`**第二步**：通过 Prompt、Functions 传入给大模型，然后得到结果

`public staticvoidmain(String[] args) {

    OpenAiLlmConfigconfig=newOpenAiLlmConfig();
    config.setApiKey("sk-rts5NF6n*******");

    OpenAiLlmllm=newOpenAiLlm(config);

    FunctionPromptprompt=newFunctionPrompt("今天北京的天气怎么样", WeatherUtil.class);
    FunctionResultResponseresponse= llm.chat(prompt);

    Objectresult= response.getFunctionResult();

    System.out.println(result);
    //"北京的天气是阴转多云。 "
}`### **生态支持**
- • **大语言模型**：支持多种大语言模型，包括 ChatGPT、Ollama、星火大模型、通义千问等。

- • **图片生成模型**：支持多种图片生成模型，包括 OpenAI、Stability、GiteeAI 等。

- • **Function Calling 方法调用**：支持多种大语言模型的函数调用。

- • **多模态**：支持多种多模态模型。

- • **向量化模型**：支持多种向量化模型。

- • **向量存储（向量数据库）**：支持多种向量数据库，包括 Milvus、阿里云向量数据存储服务、腾讯云向量数据存储服务等。

- • **文档解析器**：支持多种文档解析器，包括 PDFBox、POI、OmniParse 等

### **模块构成**
![](https://mmbiz.qpic.cn/mmbiz_png/JiaMCsdB13Ym5VY0PKf11g8SHnodTpXiclsaA6heNebrVoBEeqArsfj0O37uLXT36HaIL2c8EGj2jnvIyT3aiaRibw/640?wx_fmt=png&from=appmsg)
### **总结**
**agents-flex** 是一个功能强大的 LLM 应用开发框架，适用于各种应用场景。它提供了丰富的功能和模块，支持多种大语言模型和图片生成模型，为开发者提供了极大的便利。

**获取途径**：agents-flex GitHub 地址

https://github.com/agents-flex/agents-flex

感谢大家的支持，希望 agents-flex 能为你的 LLM 应用开发带来便利。

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)

**我是太阳鸟 **

98年在职技术型博主

搞钱干货|自媒体运营|DeepSeek|AI变现

（扫码后自动发送《DeepSeek免部署使用指南》，前30人赠AI副业资料包）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562MSIatXpWt7sCrlMEJrXbRMKml7LffS242cV6WlEDAhMNqjPYybY9zUXjLgY5MxLyhxBEThpmnHqA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**每日**更新，期待与你一起成长

欢迎围观高质量的副业知识星球

![](https://mmbiz.qpic.cn/mmbiz_jpg/JiaMCsdB13YlChEry2xHyc9vsImYaZtKiby7TV5kqoC1PYHQCMTZiccibjt7AkzdZPZvmZAB7BPgNN9XXopqXKTIug/640?wx_fmt=jpeg&from=appmsg)