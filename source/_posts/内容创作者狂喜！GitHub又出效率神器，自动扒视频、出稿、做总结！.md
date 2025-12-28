---
title: "内容创作者狂喜！GitHub又出效率神器，自动扒视频、出稿、做总结�?
permalink: 内容创作者狂�?github又出效率神器-自动扒视�?出稿-做总结
date: 2025-09-10 22:59:19
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖，最近在GitHub上看到一�?AI 视频转视频转录器，可以将一些自媒体平台的文字内容总结提取出来。特别是自媒体的创作者，需要将其他人的爆款视频进行解析，然后自己进行拆分那么这款软件绝对可以帮助你省下一大笔钱�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSV2oL2jkicZjvFRy0ChvcUNrX9eRDqTrViawPqnhUnKosVJmSdzUzXchibWtJc8j7OMtCXBEmjGnY9Q/640?wx_fmt=png&from=appmsg)

## 功能特�?
- �?🎥 多平台支�? 支持YouTube、Bilibili、抖音等30+平台�?

- �?🗣�?智能转录: 使用Faster-Whisper模型进行高精度语音转文字

- �?🤖 AI文本优化: 自动错别字修正、句子完整化和智能分�?

- �?🌍 多语言摘要: 支持多种语言的智能摘要生�?

- �?⚙️ 条件式翻译：当所选总结语言与Whisper检测到的语言不一致时，自动调用GPT�?o生成翻译

- �?📱 移动适配: 完美支持移动设备

### 超详细安装步骤：3分钟上手
一、环境准备首先得确保你的设备满足这些要求�?

- �?电脑安装了Python 3.8及以上版本（可在官网下载�?

- �?安装FFmpeg（视频处理必备工具，mac用户用`brew install ffmpeg`，Windows用户可在官网下载后添加到环境变量�?

- �?可选：OpenAI API密钥（用于AI文本优化和多语言摘要，没有的话只能用基础转录功能�?

二、具体安装步�? 1. **克隆项目代码**
打开终端（或命令提示符），输入以下命令下载项目：

`git clone https://github.com/你的用户�?AI-Video-Transcriber.git
cd AI-Video-Transcriber`- 1. **创建并激活虚拟环�?*
为了避免依赖冲突，建议创建独立环境：

```
`# 创建虚拟环境
python -m venv .venv

# 激活环境（Windows�?
.venv\Scripts\activate

# 激活环境（mac/Linux�?
source .venv/bin/activate`
```
- 1. **安装依赖�?*
输入命令安装所需工具�?

```
`pip install -r requirements.txt`
```
- 1. **配置环境变量（可选，用于AI功能�?*
如果需要使用AI优化和摘要功能，得配置OpenAI API密钥�?

- �?复制项目里的`.env.example`文件，重命名为`.env`

- �?打开`.env`文件，添加你的API密钥：```
`OPENAI_API_KEY=你的密钥
# 如果用自定义接口，再添加：OPENAI_BASE_URL=你的接口地址`
```

- 1. **启动服务**
输入命令启动工具�?

```
`python start.py`
```
启动成功后，打开浏览器访问`http://localhost:8000`，就能看到我的界面啦�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSV2oL2jkicZjvFRy0ChvcUNviaBTaLLGDVIq5FllJheARr098pzyfLqPmlpzq09ph1bcyHvGqOorIA/640?wx_fmt=png&from=appmsg)

- �?输入视频链接: 在输入框中粘贴YouTube、Bilibili等平台的视频链接

- �?选择摘要语言: 选择希望生成摘要的语言

- �?开始处�? 点击"开�?按钮

### 注意事项：这些坑别踩�?
- •�?*功能限制**：AI文本优化和多语言摘要必须配置OpenAI API密钥，没配置的话，只能获取原始转录文本�?

- •�?*速度影响因素**：处理速度和视频长度、选择的Whisper模型（tiny/base/small等）、电脑性能有关。长视频建议选tiny或base模型，速度会快很多�?

- •�?*常见错误解决**：如果启动时出现HTTP 500错误，先检查虚拟环境是否激活、依赖是否安装完整、FFmpeg是否配置好，端口8000被占用的话可以换个端口启动�?

- •�?*技术门�?*：虽然步骤写得详细，但纯小白可能还是觉得复杂，推荐用Docker部署（项目里有Dockerfile，按说明操作更简单）�?

总结一下，我能帮你解决多平台视频兼容、高效转录优化、跨语言处理等核心痛点，从粘贴链接到获取整理好的文本，全程自动化，帮你节省大量时间。如果你常和视频内容打交道，我绝对是提升效率的好帮手�?

项目地址�?

https://github.com/wendy7756/AI-Video-Transcriber

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经�?4000 名小伙伴加入了，如果你也想着�?AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵�?

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)