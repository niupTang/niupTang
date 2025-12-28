---
title: GitHub DIY 开源项�?私人定制智能家居控制 Home Assistant
date: 2024-07-16 13:38:28
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

大家好，我是牛皮糖！

    智能家居的多样化发展，有什么可以统一控制智能家居软件吗？一款开源的Python开发的Home Assistant 软件，可以在多平台上部署�?

    Home Assistant是一个基于Python 3开发的家庭自动化平台。Home Assistant是开源的，它不属于任何商业公司，用户可以免费使用�?

      基于Home Assistant，可以跟踪和控制家庭中的各种外部设备（如智能设备、摄像头、邮件、短消息、云服务等，成熟的、可以连接的组件有近千种，详见Home Assistant官网https://www.home-assistant.io）�?

    通过简单的安装与配置（不需要编程开发），就可以方便地手动或按照自己的需求自动联动这些外部设备，实现自动化控制�?

    hass是Home Assistant运行的程序实例（进程），运行在操作系统之上，Python环境为其提供必要基础的支持。作为Home Assistant的使用者，并不需要掌握Python编程语言，只要能够安装它的环境就可以了�?

  Python安装 Home Assistant

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrQvhoDUkficicug0fQeZcibmRVvLJQJ1KibqfaCOl9Tc5Cc0FkoZPtOgWPryMHzRoqjnK4UJPYGa2l1kg/640?wx_fmt=jpeg)

启动Home Assistant
Home Assistant安装完成后，在命令行中输入hass，启动系统�?
Home Assistant启动的机制如下：
�?）读取配置文件�?

�?）如果没有与配置文件中包含的组件对应的依赖库，会自动从网络下载相应的库文件并进行安装�?

hass由两部分组成：内核（core）和组件（component）。如果将hass比作人体的神经系统，那么内核就是中枢神经系统（大脑），组件就是周围神经系统�?

hass内核并不与外部世界直接互动，而是通过组件连接外部世界。这类似于大脑并不直接与感觉器官、运动器官连接，而是通过周围神经系统进行连接。例如，light.hue组件负责与飞利浦HUE智能灯进行互动�?

当hass第一次启动或者升级版本时，因为大量组件依赖的库没有被安装，因此可能会有比较大的安装工作量，甚至网络不好的时候会安装失败（如果发生这种情况，可以关闭再启动命令行界面，多运行几次）。这就是hass第一次启动时间往往会比较长的原因�?

当出现Timer:starting时，表示Home Assistant服务器启动成功，如图2.3所示�?

3．访问Home Assistant
通过浏览器访问Home Assistant，建议使用谷歌公司的浏览器Chrome�?
�?）在浏览器中输入127.0.0.1:8123或者通过

 http://homeassistant.local:8123 访问Home Assistant，第一次访问时需要创建账户，如图所�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRIAibadwQQZIrqlt9BuKRvhfeuktiazHlNMkLMWLM1tKNzyhro7DybjzhA3JlWic2cEZQM7liaNZq8Pw/640?wx_fmt=png&from=appmsg)

�?）单击“创建账户”按钮。创建账户后的登录界面如图所示�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRIAibadwQQZIrqlt9BuKRvhdNnchTHnx8esL6DlzZO7CW5AzRvIUXe2O7vQTdRFaebyMcERNhaunA/640?wx_fmt=png&from=appmsg)

                        登录界面

这是一个使用树莓派DIY的开源项目�?
github地址：https://github.com/zhujisheng/Home-Assistant-DIY