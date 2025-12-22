---
title: Github 开源给你的 Claude Code 加上海马体！！
date: 2025-12-15 22:59:11
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[AI 学习资料](https://mp.weixin.qq.com/s?__biz=MzU5MzcwNDk0OA==&mid=2247487298&idx=1&sn=ed7a5c236ccfa4d53cf4bffb8406115f&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖。

今天我们要介绍的这个 GitHub 开源项目，完美的解决了我们在 AI 编程上的记忆上的痛点。你们在使用 AI 编程助手（比如最近大火的 Claude Code 命令行工具）时，有没有遇到过这种**崩溃时刻**：

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTgDJqsyk42UVHsn9wiaO6HPPnd1MMlKP0TLllN3mUVaia0lAZMJC59dZQcNquUhasMY16Ak1czaecw/640?wx_fmt=png&from=appmsg)

为了解决一个复杂的架构拆分或者一个棘手的 Bug，你和 AI 一来一回聊了二百个回合，终于有了眉目，达成了共识。结果第二天早上准备开工，或者不小心关掉了终端窗口……一切重置。

你面对着一个崭新的、一脸茫然的 AI，不得不像个复读机一样，把项目背景、技术栈约定、之前的进展重新“喂”给它。这不仅心累，还极其浪费时间，更重要的是——**非常烧钱**（每一次重复发送上下文，都在燃烧你的 API Token 啊！）。

### 给你的 Claude 装上“海马体”：`claude-mem`
这个开源项目名叫 `claude-mem`。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTgDJqsyk42UVHsn9wiaO6HPA95nfosIuYiajuAlXIZPQXGG81KCRuDVL8uvfyIfffbK090qfyQVQvg/640?wx_fmt=png&from=appmsg)

为了方便大家理解，我们用软件架构的思维来拆解一下它的作用。

如果说官方的 Claude Code 主程序是那个超级聪明、算力强大的**CPU（中央处理器）**，它能快速处理你当下的指令，但它的自带内存（Context Window）是有限且易失的，一断电（结束会话）就清空。

那么，`claude-mem` 就是给这个 CPU 外挂了一个“智能硬盘 + 智能索引系统”。它让 AI 不再是“用完即走”的快餐式服务，而是变成了能陪你长跑项目的伙伴。

核心功能拆解我仔细研究了这个项目的实现逻辑，发现它并不是简单粗暴地“保存所有聊天记录”（那样Token开销依然巨大），它的智能体现在以下几个架构细节上：

**1. 智能压缩与静默记录 (The Smart Scribe)** 它像一个尽职的书记员，在后台默默记录 Claude 的关键操作（比如运行了什么命令、修改了哪个核心文件）。最关键的是，它会利用 AI 能力把这些冗长的交互信息进行“脱水压缩”，提取精华要点存储下来，而不是傻傻地存一堆原始对话。

**2. 上下文按需注入 (The Context Injector)** 当你开启一个新的编程会话时，它不会一股脑把所有历史塞进去。它会判断你当前的任务，自动从硬盘里调取**最相关**的“前情提要”注入给 Claude。Claude 一上来就“懂你”，无需热身预热。

**3. 交互式记忆检索 (The Librarian)** 这是一个非常强大的 Skill（技能）。你可以像问人类同事一样自然地问 Claude：

“嘿，回顾一下我们上周关于用户登录模块的架构决定。” “那个数据库连接超时的 Bug，我们上次排查到哪一步了？”

Claude 会通过 `claude-mem` 提供的能力，自动检索记忆库并准确回答你。这比你自己去翻几千行的终端历史记录快了一万倍。

保姆级使用教程`claude-mem` 是作为 Claude Code 的一个插件存在的，安装非常符合开发者的习惯，几行命令搞定。

👉 **前提条件：** 你已经在本地安装并配置好了官方的 `Claude Code` 命令行工具。

**Step 1：安装插件**

打开你的终端（Terminal/iTerm2/PowerShell 等），输入下面这行命令并回车：

`claude plugin add thedotmack/claude-mem`（通俗解释：这条命令就是告诉 Claude 的主程序，去 GitHub 上把这个叫“记忆模块”的小兄弟接回家。）

**Step 2：启动记忆模块**

插件安装好后，需要让它运行起来，输入：

`claude plugin start claude-mem`（通俗解释：给记忆模块通上电，让它开始工作。）

**Step 3：见证魔法**

现在，你不需要做任何额外的设置，像往常一样用 Claude 写代码就行了。

你可以试着进行一轮复杂的对话，然后关掉终端再重新打开，或者使用 `/clear` 命令清屏。接着测试一下它：

“总结一下我们刚才的讨论成果。”

你会发现，它依然对答如流，仿佛你们从未中断过。

注意事项与补充- • **巨大的优势——省钱：** 这是重点！官方数据显示，通过其智能压缩和按需检索机制，相比于每次都全量发送巨大的历史记录，它每次会话启动能帮你节省大量的 Token 成本。长期做项目，省下来的钱非常可观。

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTgDJqsyk42UVHsn9wiaO6HP18Ryj4M0qKTeunjZVr4wSFBnFY44PpA8Sr38Hmvf6rJdCyRhQdNibpg/640?wx_fmt=png&from=appmsg)

- • **隐私友好：** 它的记忆数据优先存储在你本地的机器上，而不是上传到什么不知名的第三方云端，这对注重代码隐私的开发者来说是个好消息。

- 

- • **适用范围：** 它目前是深度绑定 Anthropic 官方的 `Claude Code` CLI 工具的，如果你用的是网页版 Claude 或者其他第三方 API 客户端，暂时无法享用这个神器。

总结总的来说，`claude-mem` 是一个典型的“小切口解决大痛点”的优秀开源项目。

它通过架构上的巧妙设计，把 AI 从一个只能进行短期记忆的“一次性对话者”，升级成了能够陪你进行长期项目长跑、积累项目知识的“资深搭档”。对于我们这些需要长期深耕一个项目、或者同时在几个副业项目间切换的开发者来说，装上它，绝对能让你的效率翻倍，告别复读机式的痛苦。

快去给你的 AI 编程助手装上这个“超级大脑”吧！

https://github.com/thedotmack/claude-mem

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)