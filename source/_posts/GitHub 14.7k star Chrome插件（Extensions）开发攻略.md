---
title: GitHub 14.7k star Chrome插件（Extensions）开发攻略
date: 2024-07-13 11:44:11
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

大家好，我是牛皮糖！

    最近在研究浏览器插件开发，作为一名程序员，学习东西那么自然去github 上面找开源的学习资料，最终在GitHub上找到GoogleChrome 开源的demo项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTl9V1maIfRd934605ica5KojJOicSzD9jXDg68zEk8KZ2pTfpMCWCtiaGlic72IpyakGcQSeEcDBt0lw/640?wx_fmt=png&from=appmsg)

    可能很多人不知道Chrome Extension 能做什么，其实在自媒体时代，或者AI 时代现在各大AI 厂商都在研究对于浏览器的嵌入。 

简单地说，浏览器插件，可以大大的扩展你的浏览器的功能。包括但不仅限于这些功能：捕捉特定网页的内容，捕捉HTTP报文，捕捉用户浏览动作，改变浏览器地址栏/起始页/书签/Tab等界面元素的行为，与别的站点通信，修改网页内容……给你增加许多想象空间，试想想看，你可以用它来识别一些网站上的广告代码，并直接把这些代码删掉，这样你就不会受到广告的困扰了，没错，如你所愿，这样的插件别人已经开发好了，你可以直接用。不过，也要说浏览器插件的弊端，那就是：会带来一些安全隐患，也可能让你的浏览器变得缓慢甚至不稳定。

谷歌浏览器也有自己的官网，当然不同的浏览器内核不一致所以导致开发，这个是谷歌浏览器插件官网： https://developer.chrome.com/docs/extensions/get-started?hl=zh-cn。

    构件一个谷歌浏览器插件是相对比较简单的，只需要自己新建一个masnifest.json 文件，

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
`{``  "manifest_version": 3, //对应的谷歌插件版本 可以分为1、2、 3``  "name": "Hello Extensions", //插件名称``  "description": "Base Level Extension" ,//插件描述``  "version": "1.0", //当前插件版本``  "action": {``    "default_popup": "hello.html",//默认的插件首页``    "default_icon": "hello_extensions.png" //默认的插件图片``  }``}`

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTl9V1maIfRd934605ica5Koooic3YOZA13Nstcg24nL0rD0Hp9kdfazbWp5VHo138mxxK7Hc09En4A/640?wx_fmt=png&from=appmsg)

对于弹出式窗口，创建一个名为 hello.html 的文件，并添加以下代码：

- 
- 
- 
- 
- 
`<html>``  <body>``    <h1>Hello Extensions</h1>``  </body>``</html>`
 通过上面的开发一个简单的插件就开发完成了。

    同时Google 提供了大量的demo代码在github提供学习，也有很多的开发插件已经可以使用。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrTl9V1maIfRd934605ica5KoOEhkAA6Bk5b75SqRxx7t4R9ZnXlibjYqFYRCE7Y7JODY6dAvUqo6tSQ/640?wx_fmt=png&from=appmsg)

github地址:https://github.com/GoogleChrome/chrome-extensions-samples

推荐阅读：《[一款13.5k star 的开源翻译软件 immersive-translate》](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247484921&idx=1&sn=1bfa31a455801d8c7c48440386dc78eb&chksm=c1d3a7fff6a42ee9fd0aa36b96082f951265be26db5953d9cc7f9ee8780aac1ae14f30ef5e5d&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/oya0icL5FN6gVpO4vSfLCK5Kwaogko6ZAyHPgcs0IO1nQiaxrzW9U0XUulYNOpxYakaWibRmcsj884ibJPFqEMJDuA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2RLAxj1FmHC6grKWkugWoLVltcoQFacfTQeXKJZdRR16KTeY1ficHjOA3iaZ9v9YKOBPrgoUkkgqahENqtuRBHcw/640?wx_fmt=png)

点击上方蓝字关注我们