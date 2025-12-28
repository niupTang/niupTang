---
title: "github 7.8k star 将小爱音箱接�?ChatGPT 和豆包，改造成你的专属语音助手�?
permalink: github-7-8k-star-将小爱音箱接�?chatgpt-和豆�?改造成你的专属语音助手
date: 2024-07-15 12:11:51
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

大家好，我是牛皮糖！

      这两天在看落地的模型，我在GitHub 上面发现一个非常好的项目，要小爱音箱接入大模型，这是一个插件式的接入，这样就可以在自己家里部署一个大模型，通过自己家里的电脑作为服务器就可以接入AI了�?

     可以看下我的效果视频，我给定了他一个角色和使用者的一个角色�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR5VP1F3OO8EX4jCpRWBuEWV7PoC5BJVVaLORxUY7iaBuxU2vPzMAFm7B8Hfn8MZyNibhn0fGq2bmPA/640?wx_fmt=png&from=appmsg)

    在日志上还可以看到所提出的问题文字输出，我要他帮我输出一份今天的菜单。当然如果有自我开发能力的可以继续加入显示屏将这些内容输出到显示屏上面�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR5VP1F3OO8EX4jCpRWBuEWNe6AJnL0fTJk2Ud2kfWjRthibwcIhviampianrdUK6XSExTjIuvjUg70A/640?wx_fmt=png&from=appmsg)

     其实这个项目 原理也很简单，就是通过调用两方的API接入，一个是小米的接入，一个是调用大模型的接入，实现实际性的落地�?

**安装方式 **

**    **先将项目下载下来，或者clone 下来

- 
`git clone https://github.com/idootop/mi-gpt.git`
代码是ts的，但是还提供docker 安装方式，如果是自己安装的需要安装node.js 环境或者docker 环境�?

### Docker

对于电脑小白或者不想自己配置代码运行环境（Node）的同学，可以使�?Docker 启动方式�?

请先按照 ⚙️ 参数设置 相关说明，配置好你的 .env �?.migpt.js 文件，然后使用以下命令启�?docker�?

docker run -d --env-file $(pwd)/.env -v $(pwd)/.migpt.js:/app/.migpt.js idootop/mi-gpt:latest

注意：在 Windows 终端下需要将配置文件路径 `$(pwd)` 替换为绝对路径。如：D:\workSpace\webSpace

### Node.js

如果你是一名前�?(Node) 开发者，也可以通过 NPM 安装 mi-gpt 启动 MiGPT�?

npm install mi-gpt # 安装依赖然后，创建并启动 MiGPT 实例。初始化参数的具体说明请到 ⚙�?参数设置 查看�?

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
`import { MiGPT } from "mi-gpt";``
``async function main() {``  const client = MiGPT.create({``    speaker: {``      userId: "987654321", // 注意：不是手机号或邮箱，请在「个人信息�?「小�?ID」查看``      password: "123456", // 账号密码``      did: "小爱音箱Pro", // 小爱音箱 ID 或在米家中设置的名称``    },``  });``  await client.start();``}``
``main();`
注意：此模式下并不会主动读取 .env �?.migpt.js 中的配置信息.�?

你需要手动初始化 Node 环境变量，并�?.migpt.js 中的参数作为 MiGPT.create 的初始化参数传入�?

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
`# 克隆项目到本地``git clone https://github.com/idootop/mi-gpt.git``cd mi-gpt``
``# 安装依赖``npm install``
``# 构建项目``npm run build``
``# 运行项目``npm run dev``
`
重命名本项目根目录下�?.migpt.example.js 文件�?`.migpt.js`�?

然后，将里面的配置参数修改成你自己的，参数含义如下：

参数名称描述示例`systemTemplate`系统 Prompt 模板，可以更灵活的控�?AI 的各种行为规则，是否需要携带上下文�?👉 设置教程`"你是一个博学多识的人，下面请友好的回答用户的提问，保持精简�?`**bot**

`name`对方名称（小爱音箱）`"傻妞"``profile`对方的个人简�?人设`"性别女，性格乖巧可爱，喜欢搞怪，爱吃醋�?`**master**

`name`主人名称（我自己）`"陆小�?``profile`主人的个人简�?人设`"性别男，善良正直，总是舍己为人，是傻妞的主人�?`**room**

`name`会话群名称`"魔幻手机"``description`会话群简介`"傻妞和陆小千的私�?`**speaker**

`userId`小米 ID（注意：不是手机号或邮箱）`"987654321"``password`账户密码`"123456"``did`小爱音箱 ID 或名称`"小爱音箱 Pro"``ttsCommand`小爱音箱 TTS 指令（可在此查询）`[5, 1]``wakeUpCommand`小爱音箱唤醒指令（可在此查询）`[5, 3]`**speaker 其他参数（可选）**

`tts`TTS 引擎（教程：🚗 使用第三�?TTS）`"xiaoai"``switchSpeakerKeywords`切换 TTS 音色关键词，只有配置了第三方 TTS 引擎时才有效`["把声音换�?]``callAIKeywords`当消息以关键词开头时，会调用 AI 来响应用户消息`["�?, "傻妞"]``wakeUpKeywords`当消息以关键词开头时，会进入 AI 唤醒状态`["召唤傻妞", "打开傻妞"]``exitKeywords`当消息以关键词开头时，会退�?AI 唤醒状态`["退出傻�?, "关闭傻妞"]``onEnterAI`进入 AI 模式的欢迎语`["你好，我是傻妞，很高兴认识你"]``onExitAI`退�?AI 模式的提示语`["傻妞已退�?]``onAIAsking`AI 开始回答时的提示语`["让我先想�?, "请稍�?]``onAIReplied`AI 结束回答时的提示语`["我说完了", "还有其他问题�?]``onAIError`AI 回答异常时的提示语`["出错了，请稍后再试吧�?]``playingCommand`查询小爱音箱是否在播放中指令（注意：默认无需配置此参数，播放出现问题时再尝试开启）`[3, 1, 1]``streamResponse`是否启用连续对话功能，部分小爱音箱型号无法查询到正确的播放状态，需要关闭连续对话应）`true``exitKeepAliveAfter`连续对话时，无响应多久后自动退出（默认 30 秒）`30`## 环境变量
重命名本项目根目录下�?.env.example 文件�?`.env`�?

然后，将里面的环境变量修改成你自己的，参数含义如下：

环境变量名称描述示例**OpenAI**

`OPENAI_API_KEY`OpenAI API 密钥`abc123``OPENAI_MODEL`使用�?OpenAI 模型`gpt-4o``OPENAI_BASE_URL`可选，OpenAI API BaseURL`https://api.openai.com/v1``AZURE_OPENAI_API_KEY`可选，Microsoft Azure OpenAI`abc123`**提示音效（可选）**

`AUDIO_SILENT`静音音频链接`"https://example.com/slient.wav"``AUDIO_BEEP`默认提示音链接`"https://example.com/beep.wav"``AUDIO_ACTIVE`唤醒提示音链接`"https://example.com/active.wav"``AUDIO_ERROR`出错提示音链接`"https://example.com/error.wav"`**第三�?TTS（可选）**

`TTS_BASE_URL`第三�?TTS 服务接口`"http://[你的局域网或公网地址]:[端口号]/api"`Github地址：https://github.com/idootop/mi-gpt;