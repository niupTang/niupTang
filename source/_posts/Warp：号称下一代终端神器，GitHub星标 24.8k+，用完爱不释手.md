---
title: Warp：号称下一代终端神器，GitHub星标 24.8k+，用完爱不释手
date: 2025-09-13 23:10:47
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

作者：牛皮糖 发布时间：2025年9月13日

大家好，我是牛皮糖！作为程序员，我们每天都要和终端打交道。但你是否受够了传统终端那**枯燥的界面、繁琐的命令输入和低下的调试效率**？今天给大家介绍的这款开源神器——**Warp**，将彻底改变你对终端的认知！它融合了**AI智能、现代化设计和协作功能**，让你的命令行效率提升10倍不止。目前，Warp在GitHub上已经收获**超过20万Star**。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRv9KyzqIZ8kBLA2jkab655oiatqHxY0qCR6xEaiaO6vbricJuLJJNMic3Sic2ggZwO5fgq3CkvtKYO6QA/640?wx_fmt=png&from=appmsg)

## 🚀 项目简介
Warp是一款**基于Rust语言开发的现代化终端工具**，号称"21世纪的终端"。它由前GitHub CTO Jason Warner和Google前首席技术官Zach Lloyd领衔开发，团队包括来自Figma、Google Docs等知名项目的技术专家。Warp的目标是解决传统终端工具（如iTerm2、Hyper）在效率、协作和易用性上的不足，通过结合Rust语言的高性能与AI技术，打造真正现代化的开发体验。

最令人印象深刻的是，Warp在**尚未正式发布时就获得了2300万美元的融资**，可见市场对其前景的看好。如今，它已经支持macOS、Windows和Linux三大主流平台，让所有开发者都能享受到革命性的终端体验。

## ✨ 核心功能特性
### 🤖 AI智能集成
Warp的AI功能是其最大亮点，让你可以用**自然语言与终端交互**：

- • **自然语言转命令**：忘记复杂命令时，只需用简单描述（如"查看最近两次提交更改的行数"），Warp AI会自动生成对应的正确命令。

- • **智能错误诊断**：自动分析命令输出中的错误日志，并推荐修复方案（如Docker容器启动失败时的端口冲突解决方案）。

- • **多模型支持**：支持DeepSeek等多种大语言模型，提供AI辅助。

- • **Agent模式**：AI可以像代理一样自主运行，无需用户手动授权就能做出决策和更改。

### 🎨 现代化用户体验
- • **块状结构设计**：将每条命令的输入和输出打包成独立的"块"(Block)，便于区分和操作。每个块都可以单独复制、分享或打上书签。

- • **智能提示系统**：覆盖400+ CLI工具，根据历史记录和上下文预测命令参数，减少手动输入。

- • **可视化历史命令**：传统终端一次只能提示一个历史命令，而Warp提供**可滚动的历史命令列表**，直观易用。

- • **丰富的主题定制**：内置10多种美观主题，支持深度个性化定制。

### ⚡ 卓越性能
- • **GPU加速**：基于Rust开发并利用GPU进行加速，操作极其流畅，响应迅速。

- • **高效内存管理**：Rust语言的安全性和性能优势确保了资源的有效利用。

### 🤝 协作功能
- • **命令块分享**：可以将特定命令块生成在线链接，方便与团队成员分享和讨论。

- • **团队工作流**：支持保存和共享常用工作流，提高团队协作效率。

### 🔧 广泛兼容性
- • **多shell支持**：完美兼容zsh、bash、fish、PowerShell和Git Bash等多种shell。

- • **跨平台支持**：支持macOS、Windows和Linux系统。

- 

## 🛠️ 安装与使用
### 简易安装
安装Warp非常简单：

- 1. 访问Warp官网下载对应系统的安装包。

- 2. 双击安装包按提示完成安装。

- 3. macOS用户也可使用Homebrew安装：`brew install --cask warp`。

### 快速上手
- 1. **连接远程服务器**：使用标准ssh命令格式：`ssh {username}@{hostname_or_ip}`。

- 2. **使用AI功能**：

- • **Agent模式**：点击右上角的"Agent Mode"，开启AI问答。

- • **AI命令**：在命令行中按`Ctrl+``（反引号键），用自然语言描述需求。

- 3. **命令面板**：按`Ctrl+Shift+P`打开命令面板，搜索命令或选择推荐操作。

- 4. **个性化设置**：按`Command+P`（Mac）或`Ctrl+P`（Windows/Linux）打开命令面板，输入"settings"进入设置页面，可更换主题、调整字体等。

## 💡 Warp AI 使用示例
Warp的AI功能能在多种场景中大幅提升你的效率，以下是几个典型示例：

场景
传统方式
使用 Warp AI
**查看Docker镜像**需记忆命令：`docker images`
输入："如何查看所有Docker镜像"
**查找占用端口的进程**需记忆命令：`lsof -i :8080`
输入："查找谁占用了8080端口"
**Git状态检查**需记忆命令：`git status`
输入："显示未提交的更改"
**系统信息导出**需记忆命令：`system_profiler > sys.txt`
输入："将系统信息导出到sys.txt文件"
## 🌟 实际体验对比
为了更直观地展示Warp的优势，以下是与传统终端的对比：

功能特性
传统终端（如iTerm2）
Warp终端
**命令输入**手动完整输入，依赖tab补全
智能提示，AI补全
**错误处理**手动阅读错误日志
自动错误诊断和解决方案建议
**历史记录**上下键逐个浏览
可视化列表，支持搜索
**界面组织**连续滚动文本
块状结构，逻辑清晰
**协作能力**有限
命令块分享，工作流共享
**自定义**需要复杂配置
图形化设置，主题丰富
## ⚠️ 使用注意事项
- 1. **网络依赖**：部分AI功能需要联网使用，由OpenAI的Codex引擎等提供支持。

- 2. **隐私考虑**：AI功能可能会将部分数据（如提示、上下文）发送到云端处理，但本地文件的读写和命令的执行是在本地完成的。

- 3. **学习曲线**：虽然Warp简化了很多操作，但充分利用所有功能仍需一定学习时间。

- 4. **资源占用**：由于包含GPU加速和AI功能，资源占用可能略高于传统终端。

- 

虽然Warp在某些方面可能还需要进一步完善，但它已经展现出了终端工具的未來发展方向——**更智能、更直观、更协作**。无论你是命令行新手还是资深开发者，Warp都值得一试，它可能会彻底改变你的工作方式！

**项目地址**：https://github.com/warpdotdev/Warp **
**

**官方网站**：https://www.warp.dev/

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)