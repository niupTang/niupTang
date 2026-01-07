---
title: Windows 安装 Docker
date: '2026-01-04T16:26:13.382214'
updated: '2026-01-05T23:18:09.829521'
tags: []
categories: []
cover: null
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！实战技术篇章，针对于如何在window 系统安装Docker。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTJPbsI0icNkqEyN6BtwTVbNsvtWJoEibeGsKEGotPDA8IXTbTTkPKNnsUc60FbBRbCEmJ3SF9hDlyg/640?wx_fmt=png&from=appmsg)

Docker 是虚拟化容器技术是一个比较轻量、可打包、可移植、包含软件依赖的打包技术，使得应用程序一次打包可以在任何地方运行。

    Windows 安装就需要安装虚拟容器功能，启用 Hyper-V 和容器功能：Docker Desktop 需要启用 Hyper-V 和容器功能，或者安装wsl。

**1****、WSL2 安装**

**
**

**  **我的电脑是Windows 11 系统，所以直接安装 WSL。打开Power Shell,输入命令查看 WSL 是否安装。wsl  --version.

 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTJPbsI0icNkqEyN6BtwTVbNNnibGy1N0epxpmh4G6H1MjkicXBmOM1W7E8ZNR52icwiazaOxckPo9VbKQ/640?wx_fmt=png&from=appmsg)

    如果没有安装通过命令安装。 

- 
`wsl --install`
微软的官方文档 WSL 的基本命令：

https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands

**2****、Docker 安装**

**  **wsl 安装完成后安装 Docker Desktop Installer.exe，运行点击安装就行了。

    在安装向导中，选择“Use WSL 2 instead of Hyper-V”（推荐）。

验证安装：

 打开命令提示符或 PowerShell。

 输入以下命令验证 Docker 是否安装成功：

 

- 
`docker --version`

你应该会看到类似如下的输出，表示 Docker 版本信息：

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTJPbsI0icNkqEyN6BtwTVbNw4AaQaq3NmyaF1Jp2xpAl0t6K5t6DyvX7COyS3CiaOiaybqCG67mgI7Q/640?wx_fmt=png&from=appmsg)

3**、Docker 基本命令**

**镜像操作：
**

  搜索镜像：在 Docker Hub 上搜索指定的镜像。

- 
`docker search <image_name>`
  拉取镜像：docker pull frooodle/s-pdf:latest

- 
`docker pull <image_name>:<tag>`
  列出本地镜像：

- 
`docker images`
  删除镜像：

- 
`docker rmi <image_id>`
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTJPbsI0icNkqEyN6BtwTVbN4JagBom7Pvich6EaFQMK6IB6oZhUxjkGaibZlKo9eXh8aNjqNCwCm79A/640?wx_fmt=png&from=appmsg)

  <image_id> ：查询出来的镜像 ID。

 构建镜像：

- 
`docker build -t <image_name>:<tag> .`

**容器操作：**

运行容器：

- 
`docker run -d -p <host_port>:<container_port> --name <container_name> <image_name>`
参数详解： 

    - d : 表示为后台运行

    - p : 端口映射 本机端口：容器的端口。 如 容器的端口是8080 想映射到本机 8090 docker  run -d -p 8090:8080

   - name ：容器名称

   - e : 设置环境变量 

   -- env-file : 设置配置文件读取环境环境变量。

   - v : 容器挂载的文件映射，如日志文件映射。

   -- link : 添加到另一个容器的链接。

列出运行的容器：

- 
`docker ps`
![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTJPbsI0icNkqEyN6BtwTVbNPwwKSwjmTsz3CwuUhsH9hIxde0mH581E9W0iaretibn0zde2GQVZKdrg/640?wx_fmt=png&from=appmsg)

参数详解： 

    - a ：列出所有的容器，包括未运行的。

    - f ：根据条件筛选容器，docker ps -f status=exited

    - n ：列出最近的启动的容器如：docker ps -n 5 ,查询最近启动的五个容器

    - l  ：显示最近启动的容器

停止容器：

- 
`docker stop <container_id>`
参数详解：

   - t :  指定停止容器前的超时时间（默认为10秒）。

   - s :  发送信号给容器（默认为SIGTERM）。

   

启动容器：

- 
`docker start <container_id>`
重启容器：

- 
`docker restart <container_id>`
进入容器：

- 
`docker exec -it <container_id> /bin/bash`

**其他常见命令：**

查看日志：

- 
`docker logs <container_id>`
查看容器详细情况：

- 
`docker inspect <container_id>`
查看资源使用情况：

- 
`docker stats`

docker 官网地址：

**https://www.docker.com/products/docker-desktop**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [Github 8.6k Star 开源书籍《凤凰架构》](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485592&idx=1&sn=a90b88ba2d1dffcd2afdc0e9d703ed55&chksm=c1d3aa9ef6a423885bb0b9b70f22aa8317944573a6b8cc3244824aad4e3702a4fec4d43ff9e7&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [Github 108k Star 程序员偷偷用的Window 系统实用工具集](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485604&idx=1&sn=3b2f7e317d0e64e349ec0d628c12d67c&chksm=c1d3aaa2f6a423b44fd432f08d3ca4bb3f6ff4934343494585cdc13a9262415af59777c681e4&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

****