---
title: Github 37.8k Stars 简化React应用开发的全面组件库
date: 2024-11-07 20:13:23
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

  大家好，我是牛皮糖！这两天在看React ，在GitHub 上面找了一个全面的React组件库，它包含了可访问、可重复使用和可组合的React组件，旨在简化现代Web应用程序和网站的开发。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMibuSyVqBlMDarsoBEuLqWlZoShjOjAwLea1US1nVsOgHTyHkr6wRgSA/640?wx_fmt=png&from=appmsg)

### **Chakra UI的核心特性**
- • **易于设计**：Chakra UI包含一组布局组件，如Box和Stack，可以通过传递props轻松设计组件。

- • **灵活且可组合**：Chakra UI组件建立在React UI Primitive之上，具有无限的可组合性。

- • **可访问性**：Chakra UI组件遵循WAI-ARIA指南规范，并具有正确的aria-*属性。

- • **暗模式支持**：Chakra UI中的大多数组件都兼容暗模式。

### **安装**
要使用Chakra UI组件，你可以通过以下命令安装`@chakra-ui/react`包及其对等依赖项：

`# 使用Yarn
$ yarn add @chakra-ui/react @emotion/react

# 使用npm
$ npm i @chakra-ui/react @emotion/react

# 使用pnpm
$ pnpm add @chakra-ui/react @emotion/react

# 使用Bun
$ bun add @chakra-ui/react @emotion/react`### **使用方法**
要开始使用Chakra UI的组件，请按照以下步骤操作：

- 1. 使用`@chakra-ui/react`提供的`ChakraProvider`包装你的应用程序：

`import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

function App({ children }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}`- 1. 现在你可以开始使用Chakra UI的组件，例如Button：

`import { Button } from "@chakra-ui/react";

function Example() {
  return <Button>I just consumed some ⚡️Chakra!</Button>;
}`### **CodeSandbox模板**
- • JavaScript入门：Chakra UI JavaScript[1]

- • TypeScript入门：Chakra UI TypeScript[2]

- • NextJS TypeScript Starter：Chakra UI Next.js TypeScript[3]

### **create-react-app模板**
查看我们的指南，了解如何使用我们的官方create-react-app模板[4]的信息。

### **项目地址**
如果你对Chakra UI感兴趣，可以访问他们的官方网站了解更多信息：

**项目地址**：Chakra UI官网[5]

以上就是我对Chakra UI的介绍，希望能够帮助到正在寻找React组件库以简化Web应用开发的你。让我们一起探索Chakra UI的强大功能吧！

引用链接`[1]` Chakra UI JavaScript: *https://codesandbox.io/s/chakra-ui-javascript-lzzg9*
`[2]` Chakra UI TypeScript: *https://codesandbox.io/s/chakra-ui-typescript-pomi8*
`[3]` Chakra UI Next.js TypeScript: *https://codesandbox.io/s/chakra-ui-next-js-typescript-kxvyr*
`[4]` create-react-app模板: *https://create-react-app.dev/docs/adding-a-new-page/*
`[5]` Chakra UI官网: *https://chakra-ui.com*

项目地址：

**https://github.com/chakra-ui/chakra-ui**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)

**
**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562PRME95JfKlQIXNIicIbUXpeouLU3upiazIm774Q0IPHORgZtLXNauthoPTZgkziaC8TZefT3vO7lC9A/640?wx_fmt=jpeg)