---
title: 国产化新秀？iFlow CLI ：基于命令行的智能AI助手
date: 2025-09-07 22:35:11
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50个 AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！Claude 疯狂封禁， 国内工具猥琐发育。 本身 Claude Code 需要用墙，Claude 封禁再度加强。最近在GitHub 上 爆火的国产 CLI 工具 iFlow 直接一波起飞。iFlow CLI 是一款由阿里旗下心流团队开发的终端 AI 助手工具，它允许开发者通过自然语言指令在命令行中执行各种任务，如代码分析、文档生成、文件管理等。

.

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSstN3WnuCe6TfjCudsIIhdbdcd1GROuTqQOzn4ObtNmbwd0ibicJGM2RpBfzosGuvo63M6156zYsicQ/640?wx_fmt=png&from=appmsg)

iFlow CLI 是一款由阿里旗下心流团队开发的终端 AI 助手工具，它允许开发者通过自然语言指令在命令行中执行各种任务，如代码分析、文档生成、文件管理等。以下是基于搜索结果的 iFlow CLI 的 GitHub 中文 README 的相关信息概要：

### 1. **核心功能**
- • **自然语言交互**：用户可以用日常语言描述需求，iFlow CLI 会理解并执行相应任务，如代码生成、Bug 修复、文件整理等 。

- • **多模型支持**：内置多种免费 AI 模型（如 Qwen3-Coder、Kimi K2、GLM-4.5、DeepSeek-V3 等），也支持兼容 OpenAI 协议的第三方模型 。

- • **自动化任务**：可自动化执行复杂工作流，例如分析代码库、生成文档、部署 Docker 项目（如自动处理 Paperless-ngx 部署）。

- • **文件操作与系统命令**：通过 `!` 执行 Shell 命令（如 `!ls -la`），或用 `@文件路径` 引用文件进行分析 。

### 2. **安装与配置**
- • **系统要求**：需要 Node.js 20+（推荐 22+）和 4GB+ 内存 。

- • **安装命令**：

- • **macOS/Linux**：一键安装脚本：`bash -c "$(curl -fsSL https://cloud.iflow.cn/iflow-cli/install.sh)"`

- • **Windows**：需先安装 Node.js 和 WSL（适用于 Linux 的 Windows 子系统），然后通过 npm 安装：```
`npm install -g @iflow-ai/iflow-cli`
```

- • **API 密钥配置**：安装后，需访问 心流开放平台 注册账号并获取 API 密钥，粘贴到终端完成认证 。

- 

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSstN3WnuCe6TfjCudsIIhdo3YkYnIialrznGcMrOE5oAZfNNzKXqfaADMiaOREKbvGrQlfU8CckOFQ/640?wx_fmt=png&from=appmsg)

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSstN3WnuCe6TfjCudsIIhdpcj6GTxu23KswhPcv8aXyicTfh1zQR8IsNAmo4R2lIAF0vNak3Pibfog/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSstN3WnuCe6TfjCudsIIhdfxGx9YgSicOicNnb7vH2Jw87ZL6UszGTaGGBRADBrYb1t4fFkgzB5UFA/640?wx_fmt=png&from=appmsg)

### 3. **基本使用**
- • **启动工具**：终端输入 `iflow` 进入交互模式 。

- • **常用命令**：

- • `/init`：初始化项目分析（生成项目结构文档 `IFLOW.md`）。

- • `/help`：查看帮助文档。

- • `/exit`：退出 CLI。

- • `!command`：执行系统命令（如 `!npm install`）。

- • `@文件路径`：让 AI 读取指定文件 。

- • **示例场景**：

- • **项目分析**：进入项目目录后输入 `/init`，然后提问“分析这个项目的结构和功能”。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSstN3WnuCe6TfjCudsIIhdCaXlJjw8bHfjY4QfCROic0Xngn0lrFo6abK42qckdDljzGLGsZnOLQg/640?wx_fmt=png&from=appmsg)

- • **文件管理**：输入“帮我整理桌面文件”，AI 会生成完整代码。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSstN3WnuCe6TfjCudsIIhdfPXHUIJsufOOu9A4hR1BQwrkd1pcO1IYOn0hLVVmtBAbjo5UFOvRpg/640?wx_fmt=png&from=appmsg)

- • **Docker 部署**：输入“帮我通过 Docker 部署文档管理系统”，AI 会自动处理配置、镜像拉取和故障修复 。

### ⚙️ 4. **进阶特性**
- • **多模式运行**：支持 Yolo（全自动）、Accepting Edits（仅允许文件修改）、Plan Mode（先规划后执行）等模式，可通过 `Shift + Tab` 切换 。

- • **MCP 集成**：支持心流 MCP 市场扩展工具（如云效 Mcp Server），可连接 DevOps 工具链实现自动化 CI/CD 。

- • **多智能体协作**：可调用多个专业 AI 智能体（如代码审查员、文档生成器）协同工作 。

### ❌ 5. **常见问题**
- • **安装失败**：检查 Node.js 版本（需 v20+）和网络连接 。

- • **认证失败**：确保 API 密钥无误且无多余空格，或重新生成密钥 。

- • **命令无响应**：按 `Ctrl+C` 中断后，用 `/clear` 清空上下文再重启 。

### 📌 6. **资源**
- • **GitHub 仓库**：https://github.com/iflow-ai/iflow-cli 。

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)