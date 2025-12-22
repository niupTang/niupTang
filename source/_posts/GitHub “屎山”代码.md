---
title: GitHub “屎山”代码
date: 2025-10-04 20:42:04
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

大家好，我是牛皮糖。作为程序员，应该都会觉得自己写的代码是最好的，但是我在 GitHub 上发现了一个可以检查一下自己代码的“屎山”等级的开源项目——**fuck-u-code**。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRcJ3ZVIl4b1Atbias5WRrux5mHicBWZ2icmSCiaU9k7bHC5fwTCHwjVBibrbZBBicpHVUF31jBBvuOU8ibw/640?wx_fmt=png&from=appmsg)

这是一个用幽默又犀利的方式，帮你快速评估代码质量的开源工具。它能够自动扫描你的项目目录，从多个维度分析代码质量，并生成一份直观的终端报告，让你对自己的代码质量有个清醒的认识。

## 📊 核心功能速览
功能特性
具体描述
**多语言支持**支持 Go、JavaScript/TypeScript、Python、Java、C/C++ 等主流语言
**七维分析**从复杂度、函数长度、注释率、错误处理、命名、重复度、结构七个维度评估
**灵活输出**提供彩色终端报告，支持 Markdown 格式输出
**安全私密**全程本地运行，代码不会上传，保障项目安全
## 🚀 快速上手
### 安装方式
`# 使用 Go 安装（推荐）
go install github.com/Done-0/fuck-u-code/cmd/fuck-u-code@latest

# 或者使用 Docker
docker build -t fuck-u-code .`### 基本使用
```
`# 分析当前目录
fuck-u-code analyze

# 分析指定项目
fuck-u-code analyze /path/to/your/project

# 输出 Markdown 报告
fuck-u-code analyze --markdown > code_report.md`
```
## ⚙️ 实用技巧
工具还提供了一些很实用的选项：

- • `--top N`：只看最差的 N 个文件

- • `--exclude`：排除测试文件等目录

- • `--verbose`：显示详细报告

- • `--summary`：只看总结

它会自动忽略 `node_modules`、`dist` 等构建目录，确保分析的是你的核心业务代码。

## 使用场景
- 1. **代码审查前自查**：在提交代码评审前，先用它扫一遍，避免被同事吐槽

- 2. **接手遗留项目**：快速了解新项目的代码质量状况

- 3. **团队代码规范**：作为团队代码质量监控的辅助工具

- 4. **个人技能提升**：通过报告了解自己的编码习惯问题

## 实际体验
我用自己的一个 Side Project 试了试，结果……嗯，确实发现了一些问题。比如有些函数写得过于复杂，有些文件的注释确实不够。不过这也是好事，至少知道了改进的方向。

## 思考
这个工具虽然名字有点“粗暴”，但确实反映了一个现实：我们往往对自己的代码过度自信。有时候，需要一个客观的工具来给我们提个醒。

代码质量不是一蹴而就的，而是需要持续改进。这个工具可以作为一个“代码镜子”，让我们定期检查，持续优化。

**项目地址**：https://github.com/Done-0/fuck-u-code

大家有兴趣的话可以去试试，看看自己的代码“屎山”等级到底如何。欢迎试完回来分享你的体验感受～

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经有 4000 名小伙伴加入了，如果你也想着在 AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵。

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码的 Web 数据提取平台，2分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)