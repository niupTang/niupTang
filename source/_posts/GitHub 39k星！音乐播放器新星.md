---
title: "GitHub 39k星！音乐播放器新�?
permalink: github-39k�?音乐播放器新�?
date: 2024-09-30 13:04:34
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

* 戳上方蓝字“牛皮糖不吹牛”关注我

大家好，我是牛皮糖！今天要跟大家分享的，是一个在GitHub上获得了39209星的开源项目——lx-music-desktop。作为一个音乐爱好者，我一直在寻找一个能够满足我所有需求的音乐播放器。一个基�?Electron + Vue 开发的音乐软件�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQtF7xdcYDbeauEXS5dMIZIr7k7Vs3K803zbvy93uUJibrlQWz7uqlictqiaj4LODloYGTbvjXjWoO8w/640?wx_fmt=png&from=appmsg)

**【核心功能�?* 首先，让我们来聊�?*lx-music-desktop**的核心功能。它支持网易云音乐、QQ音乐、酷狗音乐、酷我音乐、Bilibili、咪咕音乐等平台的音乐播放，几乎涵盖了所有主流的音乐平台。这意味着，你可以在一个应用中，听到所有你想要听的歌曲�?

**【使用体验�?* 使用起来也非常简单，你只需要下载并安装**lx-music-desktop**，然后登录你的音乐平台账号，就可以开始享受音乐了。它的界面设计简洁明了，操作起来非常流畅。而且，它还支持歌词显示，让你在听歌的同时，也能跟着哼唱�?

默认情况下，软件的数据存储在�?

- Windows：`%APPDATA%/lx-music-desktop`

- Linux：`$XDG_CONFIG_HOME/lx-music-desktop` 或 `~/.config/lx-music-desktop`

- macOS：`~/Library/Application Support/lx-music-desktop`

**【个性化设置�?* 更棒的是�?*lx-music-desktop**还提供了丰富的个性化设置选项。你可以根据自己的喜好，调整播放器的外观和功能。比如，你可以更换主题颜色，设置播放模式，甚至还可以自定义快捷键�?

**【安装指南�?* 对于程序员来说，安装**lx-music-desktop**也非常简单。你只需要打开终端，输入以下命令：

- 安装Node.js环境（如已安装请跳过�? 下载Node.js安装结束后，打开命令行输入node -v将会输出Node.js的版本号即表示已安装完成

- 安装VS build tools（如已安装请跳过�? 下载VS build tools安装程序后勾选 使�?C++ 的桌面开发 后安装即可

- 拉取代码: 克隆本仓库代�?

- 安装依赖: 在项目根目录打开命令行，执行命令：npm install，若此命令执行的过程中报错可以尝试百度报错内容找解决方法

`git clone https://github.com/lyswhut/lx-music-desktop.git
``cd lx-music-desktop``npm install
`

    # 开发模�?

    npm run dev

    # 构建免安装版

    npm run pack:dir

    # 构建安装包（Windows版）

    npm run pack:win

    #    构建安装包（Mac版）

    npm run pack:mac

    # 构建安装包（Linux版）

    npm run pack:linux

`
`目前软件已支持的启动参数如下�?

- `-proxy-server` 设置代理服务器，代理应用的所有流�?

- `-proxy-bypass-list` 以分号分隔的主机列表绕过代理服务�?

- `-play` 启动时播放指定列表的音乐

- `-search` 启动软件时自动在搜索框搜索指定的内容

- `-dha` 禁用硬件加速启动（Disable Hardware Acceleration�?

- `-dt` 以非透明模式启动（Disable Transparent�?

- `-dhmkh` 禁用硬件媒体密钥处理（Disable Hardware Media Key Handling�?

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQtF7xdcYDbeauEXS5dMIZIicH9JVoTaHblia0WUqkfMxm7CmsVDjs88a0Rpg8wlQ7UBazIpGOmsyZg/640?wx_fmt=png&from=appmsg)

 本项目仅用于对技术可行性的探索及研究，不接受任何商业（包括但不限于广告等）合作及捐赠�?
**项目地址�?* lx-music-desktop[1]

**下载地址：https://pan.quark.cn/s/0062d7794e0c**

引用链接`[1]` lx-music-desktop: *https://github.com/lyswhut/lx-music-desktop*