---
title: Github 64.7k Star GPT 学术优化
date: 2024-10-11 22:58:35
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！AI 的项目真的太火了，GPT 的提示词项目在GitHub 上面层出不穷，为GPT/GLM等LLM大语言模型提供实用化交互接口，特别优化论文阅读/润色/写作体验，模块化设计，支持自定义快捷按钮&函数插件，支持Python和C++等项目剖析&自译解功能，PDF/LaTex论文翻译&总结功能，支持并行问询多种LLM模型，支持chatglm3等本地模型。接入通义千问, deepseekcoder, 讯飞星火, 文心一言, llama2, rwkv, claude2, moss等。也获取的64.7K Star。

****

**![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS4mjzbP7mmu4NNkxlUbcVD2tFYpfTTBIrCic0WrL4tcaw2Vg4cib6lAzhI6Dz8KmZiaj7icH676D1JvA/640?wx_fmt=png&from=appmsg)
**

****

功能（⭐= 近期新增功能）描述⭐接入新模型百度千帆与文心一言, 通义千问Qwen，上海AI-Lab书生，讯飞星火，LLaMa2，智谱GLM4，DALLE3, DeepseekCoder⭐支持mermaid图像渲染支持让GPT生成流程图、状态转移图、甘特图、饼状图、GitGraph等等（3.7版本）⭐Arxiv论文精细翻译 (Docker)[插件] 一键以超高质量翻译arxiv论文，目前最好的论文翻译工具⭐实时语音对话输入[插件] 异步监听音频，自动断句，自动寻找回答时机⭐AutoGen多智能体插件[插件] 借助微软AutoGen，探索多Agent的智能涌现可能！⭐虚空终端插件[插件] 能够使用自然语言直接调度本项目其他插件润色、翻译、代码解释一键润色、翻译、查找论文语法错误、解释代码自定义快捷键支持自定义快捷键模块化设计支持自定义强大的插件，插件支持热更新程序剖析[插件] 一键剖析Python/C/C++/Java/Lua/...项目树 或 自我剖析读论文、翻译论文[插件] 一键解读latex/pdf论文全文并生成摘要Latex全文翻译、润色[插件] 一键翻译或润色latex论文批量注释生成[插件] 一键批量生成函数注释Markdown中英互译[插件] 看到上面5种语言的README了吗？就是出自他的手笔PDF论文全文翻译功能[插件] PDF论文提取题目&摘要+翻译全文（多线程）Arxiv小助手[插件] 输入arxiv文章url即可一键翻译摘要+下载PDFLatex论文一键校对[插件] 仿Grammarly对Latex文章进行语法、拼写纠错+输出对照PDF谷歌学术统合小助手[插件] 给定任意谷歌学术搜索页面URL，让gpt帮你写relatedworks互联网信息聚合+GPT[插件] 一键让GPT从互联网获取信息回答问题，让信息永不过时公式/图片/表格显示可以同时显示公式的tex形式和渲染形式，支持公式、代码高亮启动暗色主题在浏览器url后面添加/?__theme=dark可以切换dark主题多LLM模型支持同时被GPT3.5、GPT4、清华ChatGLM2、复旦MOSS伺候的感觉一定会很不错吧？更多LLM模型接入，支持huggingface部署加入Newbing接口(新必应)，引入清华Jittorllms支持LLaMA和盘古α⭐void-terminal pip包脱离GUI，在Python中直接调用本项目的所有函数插件（开发中）****![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrS4mjzbP7mmu4NNkxlUbcVDI3IlZ0pXZXqIfrC5J7kiccvK0Ps02u1fBG72T7YIicD24ntWAAXSX97A/640?wx_fmt=png&from=appmsg)
****

**
**

**安装**

**
**

部署项目的全部能力（这个是包含cuda和latex的大型镜像。但如果您网速慢、硬盘小，则不推荐该方法部署完整项目） 

# 修改docker-compose.yml，保留方案0并删除其他方案。然后运行：docker-compose```

```
```

```
```
仅ChatGPT + GLM4 + 文心一言+spark等在线模型（推荐大多数人选择）   

```
```
# 修改docker-compose.yml，保留方案1并删除其他方案。然后运行：
```

- 
`docker-compose up`

**Docker-compose.yml 文件
**
- 
`## ===================================================``#                docker-compose.yml``## 
===================================================``# 1. 请在以下方案中选择任意一种，然后删除其他的方案``# 2. 修改你选择的方案中的environment环境变量，详情请见github wiki或者config.py``# 3. 选择一种暴露服务端口的方法，并对相应的配置做出修改：``    # 「方法1: 适用于Linux，很方便，可惜windows不支持」与宿主的网络融合为一体，这个是默认配置``    # network_mode: "host"``    # 「方法2: 适用于所有系统包括Windows和MacOS」端口映射，把容器的端口映射到宿主的端口（注意您需要先删除network_mode: "host"，再追加以下内容）``    # ports:``    #   - "12345:12345"  # 注意！12345必须与WEB_PORT环境变量相互对应``# 4. 最后`docker-compose up`运行``# 5. 如果希望使用显卡，请关注 LOCAL_MODEL_DEVICE 和 英伟达显卡运行时 选项``## ===================================================``# 1. Please choose one of the following options and delete the others.``# 2. Modify the environment variables in the selected option, see GitHub wiki or config.py for more details.``# 3. Choose a method to expose the server port and make the corresponding configuration changes:``    # [Method 1: Suitable for Linux, convenient, but not supported for Windows] Fusion with the host network, this is the default configuration``    # network_mode: "host"``    # [Method 2: Suitable for all systems including Windows and MacOS] Port mapping, mapping the container port to the host port (note that you need to delete network_mode: "host" first, and then add the following content)``    # ports:``    # - "12345: 12345" # Note! 12345 must correspond to the WEB_PORT environment variable.``# 4. Finally, run `docker-compose up`.``# 5. If you want to use a graphics card, pay attention to the LOCAL_MODEL_DEVICE and Nvidia GPU runtime options.``## ===================================================``
``## ===================================================``## 「方案零」 部署项目的全部能力（这个是包含cuda和latex的大型镜像。如果您网速慢、硬盘小或没有显卡，则不推荐使用这个）``## ===================================================``version: '3'``services:``  gpt_academic_full_capability:``    image: ghcr.io/binary-husky/gpt_academic_with_all_capacity:master``    environment:``      # 请查阅 `config.py`或者 github wiki 以查看所有的配置信息``      API_KEY:                  '  sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                        '``      # USE_PROXY:                '  True                                                                       '``      # proxies:                  '  { "http": "http://localhost:10881", "https": "http://localhost:10881", }   '``      LLM_MODEL:                '  gpt-3.5-turbo                                                              '``      AVAIL_LLM_MODELS:         '  ["gpt-3.5-turbo", "gpt-4", "qianfan", "sparkv2", "spark", "chatglm"]       '``      BAIDU_CLOUD_API_KEY :     '  xxxxxxxxxxxxxxxxxxxxxxxx                                                   '``      BAIDU_CLOUD_SECRET_KEY :  '  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                           '``      XFYUN_APPID:              '  xxxxxxxx                                                                   '``      XFYUN_API_SECRET:         '  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                           '``      XFYUN_API_KEY:            '  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                           '``      ENABLE_AUDIO:             '  False                                                                      '``      DEFAULT_WORKER_NUM:       '  20                                                                         '``      WEB_PORT:                 '  12345                                                                      '``      ADD_WAIFU:                '  False                                                                      '``      ALIYUN_APPKEY:            '  xxxxxxxxxxxxxxxx                                                           '``      THEME:                    '  Chuanhu-Small-and-Beautiful                                                '``      ALIYUN_ACCESSKEY:         '  xxxxxxxxxxxxxxxxxxxxxxxx                                                   '``      ALIYUN_SECRET:            '  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                             '``      # LOCAL_MODEL_DEVICE:       '  cuda                                                                       '``
``    # 加载英伟达显卡运行时``    # runtime: nvidia``    # deploy:``    #     resources:``    #       reservations:``    #         devices:``    #           - driver: nvidia``    #             count: 1``    #             capabilities: [gpu]``
``    # 「WEB_PORT暴露方法1: 适用于Linux」与宿主的网络融合``    network_mode: "host"``
``    # 「WEB_PORT暴露方法2: 适用于所有系统」端口映射``    # ports:``    #   - "12345:12345"  # 12345必须与WEB_PORT相互对应``
``    # 启动容器后，运行main.py主程序``    command: >``      bash -c "python3 -u main.py"``
``
``## ===================================================``## 「方案一」 如果不需要运行本地模型（仅 chatgpt, azure, 星火, 千帆, claude 等在线大模型服务）``## ===================================================``version: '3'``services:``  gpt_academic_nolocalllms:``    image: ghcr.io/binary-husky/gpt_academic_nolocal:master # (Auto Built by Dockerfile: docs/GithubAction+NoLocal)``    environment:``      # 请查阅 `config.py` 以查看所有的配置信息``      API_KEY:                  '    sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                            '``      USE_PROXY:                '    True                                                                                           '``      proxies:                  '    { "http": "socks5h://localhost:10880", "https": "socks5h://localhost:10880", }                 '``      LLM_MODEL:                '    gpt-3.5-turbo                                                                                  '``      AVAIL_LLM_MODELS:         '    ["gpt-3.5-turbo", "api2d-gpt-3.5-turbo", "gpt-4", "api2d-gpt-4", "sparkv2", "qianfan"]         '``      WEB_PORT:                 '    22303                                                                                          '``      ADD_WAIFU:                '    True                                                                                           '``      # THEME:                    '    Chuanhu-Small-and-Beautiful                                                                    '``      # DEFAULT_WORKER_NUM:       '    10                                                                                             '``      # AUTHENTICATION:           '    [("username", "passwd"), ("username2", "passwd2")]                                             '``
``    # 「WEB_PORT暴露方法1: 适用于Linux」与宿主的网络融合``    network_mode: "host"``
``    # 启动命令``    command: >``      bash -c "python3 -u main.py"``
``
``### ===================================================``### 「方案二」 如果需要运行ChatGLM + Qwen + MOSS等本地模型``### ===================================================``version: '3'``services:``  gpt_academic_with_chatglm:``    image: ghcr.io/binary-husky/gpt_academic_chatglm_moss:master  # (Auto Built by Dockerfile: docs/Dockerfile+ChatGLM)``    environment:``      # 请查阅 `config.py` 以查看所有的配置信息``      API_KEY:                  '    sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                            '``      USE_PROXY:                '    True                                                                                           '``      proxies:                  '    { "http": "socks5h://localhost:10880", "https": "socks5h://localhost:10880", }                 '``      LLM_MODEL:                '    gpt-3.5-turbo                                                                                  '``      AVAIL_LLM_MODELS:         '    ["chatglm", "qwen", "moss", "gpt-3.5-turbo", "gpt-4", "newbing"]                               '``      LOCAL_MODEL_DEVICE:       '    cuda                                                                                           '``      DEFAULT_WORKER_NUM:       '    10                                                                                             '``      WEB_PORT:                 '    12303                                                                                          '``      ADD_WAIFU:                '    True                                                                                           '``      # AUTHENTICATION:           '    [("username", "passwd"), ("username2", "passwd2")]                                             '``
``    # 显卡的使用，nvidia0指第0个GPU``    runtime: nvidia``    devices:``      - /dev/nvidia0:/dev/nvidia0``
``    # 「WEB_PORT暴露方法1: 适用于Linux」与宿主的网络融合``    network_mode: "host"``
``    # 启动命令``    command: >``      bash -c "python3 -u main.py"``
``    # P.S. 通过对 command 进行微调，可以便捷地安装额外的依赖``    # command: >``    #   bash -c "pip install -r request_llms/requirements_qwen.txt && python3 -u main.py"``
``
``### ===================================================``### 「方案三」 如果需要运行ChatGPT + LLAMA + 盘古 + RWKV本地模型``### ===================================================``version: '3'``services:``  gpt_academic_with_rwkv:``    image: ghcr.io/binary-husky/gpt_academic_jittorllms:master``    environment:``      # 请查阅 `config.py` 以查看所有的配置信息``      API_KEY:                  '    sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,fkxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  '``      USE_PROXY:                '    True                                                                                           '``      proxies:                  '    { "http": "socks5h://localhost:10880", "https": "socks5h://localhost:10880", }                 '``      LLM_MODEL:                '    gpt-3.5-turbo                                                                                  '``      AVAIL_LLM_MODELS:         '    ["gpt-3.5-turbo", "newbing", "jittorllms_rwkv", "jittorllms_pangualpha", "jittorllms_llama"]   '``      LOCAL_MODEL_DEVICE:       '    cuda                                                                                           '``      DEFAULT_WORKER_NUM:       '    10                                                                                             '``      WEB_PORT:                 '    12305                                                                                          '``      ADD_WAIFU:                '    True                                                                                           '``      # AUTHENTICATION:           '    [("username", "passwd"), ("username2", "passwd2")]                                             '``
``    # 显卡的使用，nvidia0指第0个GPU``    runtime: nvidia``    devices:``      - /dev/nvidia0:/dev/nvidia0``
``    # 「WEB_PORT暴露方法1: 适用于Linux」与宿主的网络融合``    network_mode: "host"``
``    # 启动命令``    command: >``      python3 -u main.py``
``
``## ===================================================``## 「方案四」 ChatGPT + Latex``## ===================================================``version: '3'``services:``  gpt_academic_with_latex:``    image: ghcr.io/binary-husky/gpt_academic_with_latex:master  # (Auto Built by Dockerfile: docs/GithubAction+NoLocal+Latex)``    environment:``      # 请查阅 `config.py` 以查看所有的配置信息``      API_KEY:                  '    sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                              '``      USE_PROXY:                '    True                                                                             '``      proxies:                  '    { "http": "socks5h://localhost:10880", "https": "socks5h://localhost:10880", }   '``      LLM_MODEL:                '    gpt-3.5-turbo                                                                    '``      AVAIL_LLM_MODELS:         '    ["gpt-3.5-turbo", "gpt-4"]                                                       '``      LOCAL_MODEL_DEVICE:       '    cuda                                                                             '``      DEFAULT_WORKER_NUM:       '    10                                                                               '``      WEB_PORT:                 '    12303                                                                            '``
``    # 「WEB_PORT暴露方法1: 适用于Linux」与宿主的网络融合``    network_mode: "host"``
``    # 启动命令``    command: >``      bash -c "python3 -u main.py"``
``
``## ===================================================``## 「方案五」 ChatGPT + 语音助手 （请先阅读 docs/use_audio.md）``## ===================================================``version: '3'``services:``  gpt_academic_with_audio:``    image: ghcr.io/binary-husky/gpt_academic_audio_assistant:master``    environment:``      # 请查阅 `config.py` 以查看所有的配置信息``      API_KEY:                  '    fkxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                        '``      USE_PROXY:                '    False                                                            '``      proxies:                  '    None                                                             '``      LLM_MODEL:                '    gpt-3.5-turbo                                                    '``      AVAIL_LLM_MODELS:         '    ["gpt-3.5-turbo", "gpt-4"]                                       '``      ENABLE_AUDIO:             '    True                                                             '``      LOCAL_MODEL_DEVICE:       '    cuda                                                             '``      DEFAULT_WORKER_NUM:       '    20                                                               '``      WEB_PORT:                 '    12343                                                            '``      ADD_WAIFU:                '    True                                                             '``      THEME:                    '    Chuanhu-Small-and-Beautiful                                      '``      ALIYUN_APPKEY:            '    xxxxxxxxxxxxxxxx                                                 '``      ALIYUN_TOKEN:             '    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                 '``      # (无需填写) ALIYUN_ACCESSKEY:         '    xxxxxxxxxxxxxxxxxxxxxxxx                                         '``      # (无需填写) ALIYUN_SECRET:            '    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                   '``
``    # 「WEB_PORT暴露方法1: 适用于Linux」与宿主的网络融合``    network_mode: "host"``
``    # 启动命令``    command: >``      bash -c "python3 -u main.py"`
****

**
**

项目地址：

**https://github.com/binary-husky/gpt_academic**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**