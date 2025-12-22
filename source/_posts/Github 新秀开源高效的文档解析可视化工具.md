---
title: Github 新秀开源高效的文档解析可视化工具
date: 2024-11-14 19:36:23
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

* 戳上方蓝字“**牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！我知道有很多同学需要将一些文件转化为素材文件，但是迟迟找不到好用的软件，今天我在Github 上找到了一个新星 **parsex-frontend ， 合合信息公司开发的一款适合的PDF 转Markdown 项目的开源组件。**

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQlMlIN2zscgAwa1tJA5n5VpzBWbXDL0qPHfpVMgQNoaff4tlcIibDcAWE2CMqlcgaORJOjGMsjLhA/640?wx_fmt=png&from=appmsg)

****

平时我在网上找到一些PDF 资源，需要将里面的信息提取出来，然后我就需要去通过各种工具来进行提取，特别是对于表格文档、如果自己想要直接转发到公众号上面的时候还是挺浪费时间的，这一块开源工具完美的代替了我去对于一些资料的转化。通过**parsex-frontend **不仅仅能够完美解决这个问题，还能够对于提取出来文案进行编辑。 

## 项目介绍
**TextIn.com**提供了丰富的可视化和交互功能。这些前端组件基于**ES6**开发，并采用**React框架**，为用户带来了极佳的体验。

### **特性**
- • **预览渲染**：支持主流图片格式和PDF文件的预览渲染，以及缩放和旋转功能。

- 

- • **Markdown结果渲染**：支持各级标题、图片、公式的渲染展示。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR6lUmwvQ5V62UE5sBQo40mup4WeC2rmE5ZmkryIL0TrQtaibrvuLGzvfrVibcLXxibvarRtGHWjMypA/640?wx_fmt=png&from=appmsg)

- • **解析元素提取展示**：支持查看表格、公式、图片，以及原始JSON结果。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMytib6M0PO1G6Wuh1ZrUPLrSMruoabVvSASEqXavqFpDia0UA7u9hQ7Ug/640?wx_fmt=png&from=appmsg)

- • **文档位置溯源**：原文画框标注各元素位置，支持点击画框跳转解析结果，也可以点击解析结果跳转原文画框。

- • **目录树还原展示**：支持点击跳转相应章节。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMibNkWjb62SVIufeDhJVJGDDicM2HOFM9mOVJMoKrBSOYp3kClWfVC3Sw/640?wx_fmt=png&from=appmsg)

- • **接口调用选项参数配置**：支持配置不同参数组合，获取相应解析结果。

- • **复制和导出**：支持复制和导出Markdown文件。

- ![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrR6lUmwvQ5V62UE5sBQo40mg2JwtoFhYQCTcDFnzIyyFkwmIowqOTSN7Y3Wicia4J9pgY02EO6mmBuA/640?wx_fmt=png&from=appmsg)

- • **复制解析后的内容**：支持复制解析后的表格和图片，可以直接粘贴到Excel表格中。

## 如何使用
环境要求- • **Node版本**：需要Node.js版本**大于等于18.20.4**。

- • **包管理器**：强烈建议使用yarn作为包管理器，项目仓库中包含了`yarn.lock`文件，指定了依赖的版本。

### **拉取项目**
首先，你需要将项目仓库克隆到本地：

`git clone https://github.com/intsig-textin/parsex-frontend.git`### **安装依赖**
克隆项目后，进入项目目录，使用yarn或npm安装依赖：

如果出现超时 

npm install   --save --registry=https://registry.npmmirror.com

`# 使用yarn安装依赖``yarn install --legacy-peer-deps`

`# 或者使用npm安装依赖 忽略对应的版本问题
npm install --legacy-peer-deps`### **启动项目**
安装完依赖后，你可以启动项目：

`# 使用yarn启动项目
yarn start

# 或者使用npm启动项目
npm run start`### **访问项目**
启动项目后，打开浏览器访问`http://localhost:10007`即可查看项目。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMX2yYPaUibXkz7wrCMGXClrvQK04PHgOZ4OU3IyMAYrIW0JpbicIUkY4w/640?wx_fmt=png&from=appmsg)
### **接入API**
首先，你要在textin开通文档解析服务，然后可以在试用工作台点击用户图标，再点击账号与开发者信息（或者登陆后从textin首页->账户与充值->账号与开发者信息，或者点击https://www.textin.com/console/dashboard/setting中获得api_id和secret_code。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMhQtRt1p8SX5ick7C5w5hhlN3goBNIvOQx0qp3IndnlqQqUtcqp4JbPg/640?wx_fmt=png&from=appmsg)

获取到了api_id和secret_code ，只需要配置高级模式然后选择对应api 就可以了。

修改页面【右下角 -> 高级模式】

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMVVbuicCibRf0SMfsO2NccpWrbfvcZM8V47DC7Lu6e4iaQLliaxKhUfk8oQ/640?wx_fmt=png&from=appmsg)

将对应的api_id和secret_code复制到对应的输入框。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMDaq6lwiauMH61JazdGYhib7hDSEpCXAbHAoIDHovKWwV1NxJRibIlcfqQ/640?wx_fmt=png&from=appmsg)

## 项目效果
    说实话这个效果还是挺惊艳我的，我将平时自己分享到社群的一些资料,反向生成对应的markdown ，文件的表格都直接展示出来，很大一部分节约了我的时间。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMUA91sUibfGoV1CncdO4sSROib0kWMW383kmZIItnVy7hbp6cwnvVcfug/640?wx_fmt=png&from=appmsg)

而且对于图片里面的表格也是直接可以转换出来，图片的完整度也是相当高。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMxIZRbFlsTVF5lUT5km5azMcydD7oyXrNibXmb5jTGEBc5nkoPFs8qjg/640?wx_fmt=png&from=appmsg)

在我测试发现，文字标题更是达到了99%的正确率。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSdSsz5yA62xrxRDlljXyRMAPHOibRSS7ek8Q7dGEsHChPAEAqWWAOYGHcNGpkFsucKvJDVqAcKGHw/640?wx_fmt=png&from=appmsg)

## 项目地址
如果你对我们的TextIn文档解析的前端组件感兴趣，可以访问的GitHub页面了解更多信息。

**项目地址**：

**https://github.com/intsig-textin/parsex-frontend****

在线体验：

https://www.textin.com/console/recognition/robot_markdown