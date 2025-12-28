---
title: "GitHub 16k Star Postiz-App：AI加持的社交媒体排程工具，运营效率翻倍不是梦"
permalink: github-16k-star-postiz-app-ai加持的社交媒体排程工具-运营效率翻倍不是梦
date: 2025-01-04 20:53:14
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！今天在GitHub 上看到一个很好的开源创意，就是把所有的社交平台信息互联互通，然后统一处理，因为是国外的只能不能处理国内的，感觉有能力大佬可以尝试自主实现然后冲一波。放在10年前可能是个拉投资的好项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSntf7iac2gOxZRbaAEnibTCxtm8RpjIjtsAOf0Cs6PnmL8Iu5OIOrWpTVajx118OoqKXic6CBK19gPQ/640?wx_fmt=png&from=appmsg)

# 

Postiz-App就像是一个全能的社交媒体管家，能够帮你轻松搞定排程、分析、协作等各项任务，让你的社交媒体运营工作事半功倍.

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSntf7iac2gOxZRbaAEnibTCxaC3tjVibqiaSZ8rxHic3ObFPzlookr59LtFCsyYMVJbh1HX3sBib6u2svA/640?wx_fmt=png&from=appmsg)

## 如何使用
### 硬件与操作系统要求
- • **苹果系统**：经过测试，苹果系统可以很好地支持Postiz-App的运行，为Mac用户提供了稳定可靠的使用体验。

- • **Linux（Fedora 40）**：Linux用户也可以放心使用，特别是Fedora 40版本，已经过充分测试，能够确保Postiz-App的顺畅运行。

- • **Windows系统**：虽然一些用户尝试在Windows（和WSL）上进行安装，但目前还没有经过很好的测试，因为主要的开发商项目并不使用Windows/WSL进行开发。如果您在Windows系统上遇到问题，请及时在支持页面反馈，以便我们为您提供相应的帮助。

### 网络要求
- • **HTTPS**：Postiz-App要求运行在HTTPS环境下，或者在本地主机上。这是因为Postiz会将其登录cookie标记为安全的，只有在HTTPS或本地主机的“安全上下文”中，现代网络浏览器才会允许发送登录cookie。如果您没有运行在HTTPS或本地主机上，浏览器将拒绝发送登录cookie，导致无法登录。

- • **网络端口**：

- Postiz-App涉及到多个网络端口的使用，包括：

- • 5000/tcp：Postiz容器的单一入口点，也是您的反向代理应该通信的端口。

- • 4200/tcp：前端服务（网络界面）使用的端口，大多数用户不需要将其公开暴露。

- • 3000/tcp：后端服务（API）使用的端口，大多数用户同样不需要将其公开暴露。

- • 5432/tcp：Postgres容器使用的端口，大多数用户不需要将其公开暴露。

- • 6379/tcp：Redis容器使用的端口，大多数用户不需要将其公开暴露。 如果您使用docker镜像，推荐仅将端口5000暴露给外部代理，这样可以降低配置错误的可能性，并使网络管理更加简便。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSntf7iac2gOxZRbaAEnibTCxHiaPHO0ErsNf7xSSIPB5kfohseibJ9MnjFFRQAdqtjjwjKGJTzGB05Uw/640?wx_fmt=png&from=appmsg)

### 必备本地服务
- • **Node.js**：用于运行代码，版本需要在18以上。有关如何安装NodeJS的完整指南可以在相关网站上找到。

- • **PostgreSQL**：作为数据库使用，或者您也可以选择其他SQL数据库。建议使用Docker进行安装，具体命令如下：`docker run -e POSTGRES_USER=root -e POSTGRES_PASSWORD=your_password --name postgres -p 5432:5432 -d postgres`

- • **Redis**：用于处理工作队列，同样建议使用Docker进行安装，具体命令如下：```
`docker run --name redis -p 6379:6379 -d redis`
```

## 安装步骤
### 克隆存储库
首先，我们需要从GitHub上克隆Postiz-App的存储库。打开终端或命令行工具，执行以下命令：

`git clone https://github.com/gitroomhq/postiz-app.git`这将会将Postiz-App的源代码下载到本地，为后续的安装和配置做好准备。

### 安装依赖
进入克隆下来的存储库目录，使用npm安装项目所需的依赖：

`npm install`这一步会根据package.json文件中的配置，自动下载并安装所有必要的依赖包，确保项目能够正常运行。

### 构建Postiz
在依赖安装完成后，我们需要构建Postiz-App。执行以下命令：

`npm run prisma-db-push`这将会将Prisma数据库模式推送到数据库中，完成数据库的初始化和配置。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSntf7iac2gOxZRbaAEnibTCxF5WhceNBGltcgUFvsl3cRgWxCx3lf08SJwdSCj1KSibneKCuibDE7pyA/640?wx_fmt=png&from=appmsg)

### 设置环境变量
接下来，我们需要设置环境变量，以便Postiz-App能够根据配置正常运行。将`.env.example`文件复制为`.env`文件，并根据实际情况填写相应的值。例如：

`# Required Settings
DATABASE_URL="postgresql://postiz-user:postiz-password@localhost:5432/postiz-db-local"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="random string for your JWT secret, make it long"
FRONTEND_URL="http://localhost:4200"
NEXT_PUBLIC_BACKEND_URL="http://localhost:3000"
BACKEND_INTERNAL_URL="http://localhost:3000"`这里包括了数据库连接信息、Redis连接信息、JWT密钥、前端和后端服务的URL等关键配置项。请务必根据自己的实际情况进行填写，以确保Postiz-App能够正确连接到数据库、Redis以及前端和后端服务。

### 启动Postiz-App
在所有配置完成后，我们可以启动Postiz-App了。执行以下命令：

`npm run dev`这将会启动Postiz-App的开发服务器，您可以在浏览器中访问`http://localhost:4200`来查看Postiz-App的运行情况。如果一切顺利，您应该能够看到Postiz-App的界面，并开始使用其功能了。

## 配置上传
如果您需要配置文件上传功能，可以设置相关的环境变量，例如：

`# Optional. Your upload directory path if you host your files locally.
UPLOAD_DIRECTORY="/opt/postiz/uploads/"
 
# Optional: your upload directory slug if you host your files locally.
NEXT_PUBLIC_UPLOAD_STATIC_DIRECTORY=""`这里可以指定本地文件上传的目录路径，以及上传目录的slug。根据您的需求进行配置，以便Postiz-App能够正确处理文件上传和存储。

项目地址：Postiz-App GitHub 仓库

https://github.com/gitroomhq/postiz-app

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)