---
title: GitHub 26k StarAOS 动画库，让网页动起来！
date: 2024-09-20 20:53:19
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！作为一名技术爱好者，我一直在寻找能够让我的网站更加生动有趣的工具。最近，我偶然发现了这个 GitHub 上拥有 26k Star 的开源项目——AOS（Animate On Scroll）。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRLzXOicAn7GNtNibWHGrjwtiaT2NAvTHNv7zeJibw5A2YcOVuGefibAaNl5qjkcI9jsvkgdvl05taiadwA/640?wx_fmt=png&from=appmsg)

**AOS 是什么？**

AOS 是一个基于 JavaScript 的库，它能够让你的网站在用户滚动页面时自动添加动画效果。这意味着，当你的页面元素进入视口时，它们会以一种平滑且吸引人的方式出现，从而提升用户的浏览体验。降低了对于动画开发的难度。

**如何使用 AOS？**

    使用 AOS 非常简单。首先，你需要在你的项目中引入 AOS 的 CSS 和 JavaScript 文件。然后，通过给需要动画效果的元素添加特定的类名，AOS 就会在这些元素滚动到屏幕时自动应用动画。

1.下载

` npm  install aos --svae`在 main.js 中导入使用

`import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200,
})
`在页面中使用

`<div class="item item--primary"
     data-aos="fade-left"
     data-aos-anchor="#trigger-right">
  RIGHT
</div>

<div class="item item--secondary"
     data-aos="fade-right"
     data-aos-anchor="#trigger-left">
  LEFT
</div>

<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
<div class="item">4</div>
<div class="item" id="trigger-left">
  5
  <span>trigger left</span>
</div>
<div class="item">6</div>
<div class="item">7</div>
<div class="item" id="trigger-right">
  8
  <span>trigger right</span>
</div>
<div class="item">9</div>
<div class="item">10</div>
<div class="item">11</div>
<div class="item">12</div>
````
`* {
  box-sizing: border-box;
}

.item {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
}
`
```
属性说明属性值默认值aos动画效果名称fade-upnullaos-offset可视区域前距离触发动画
120pxaos-duration持续动画时间（范围从50-3000毫秒）600400aos-easing动画处理的定时功能ease-in-outeaseaos-delay动画的延迟时间3000aos-anchor锚元素，便宜除非动画#selectornullaos-anchor-placement锚位置，元素位于屏幕底部位置时触发动画（范围top-bottom ， top-center，top-top）top-centertop-bottomaos-once是否每次上下滚动都触发truefalse
**AOS 的优势**

- 1. **易于使用**：AOS 的 API 设计简洁直观，即使是初学者也能快速上手。

- 2. **高度可定制**：AOS 提供了丰富的配置选项，你可以轻松调整动画的持续时间、延迟、方向等。

- 3. **性能优化**：AOS 通过懒加载的方式加载动画，不会影响页面的初始加载速度。

- 4. **响应式设计**：AOS 支持响应式设计，能够适应不同尺寸的屏幕和设备。

**
**

**如果大家有什么好的动画开源工具库也可以在下面留言分享。**

**项目地址：** 

**https://github.com/michalsnik/aos#animations**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**