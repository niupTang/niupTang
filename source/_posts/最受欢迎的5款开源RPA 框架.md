---
title: 最受欢迎的5款开源RPA 框架
date: 2024-07-10 11:43:27
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

大家好，我是牛皮糖！

     最近接触到了一个新的领域——RPA，RPA全称Robotic Process Automation，中文名为机器人流程自动化。RPA可以视作一个数字机器人，它可以通过程序来模拟人与软件系统的交互过程，代替人工将大量重复、有规则的计算机操作自动化，以非侵入式（即不对原来的程序和系统进行二次开发）部署，打通不同系统之间的数据孤岛。RPA目前已成为一项关键技术，它在提升工作效率和降低成本方面扮演着重要角色。通过减少业务流程中的错误、处理时间、开支以及不必要的操作，我们能够显著优化系统的工作流。****

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrQvoCJch3gnwCDKfzrevaLVGAHw9O4jMgjA5auZYFeZiaJ8EXtKJNWavawYflDE4n1ztrD0N3icgcLg/640?wx_fmt=jpeg&from=appmsg)

    我在GitHub 上面找到5个最佳开源RPA框架

当前RPA的开源市场中，备受推荐的框架有：Robot Framework、Taskt、UI.Vision、OpenRPA和TagUI。

项目优点缺点下载地址OpenRPA基于Windows Workflow Foundation,操作简单图形化界面文档太少相关资料匮乏,启动项目要连接国外的网络操作特别延迟,录制后回放脚本有些不能正常执行https://github.com/open-rpa/openrpaTasket基于.net C# 框架不能准确定位操作,感觉代码存在问题https://github.com/saucepleez/tasktRobot Framework界面可视化运行环境搭建复杂，依赖较多操作复杂https://github.com/robotframework/robotframeworkAutomagica官方示例比较详细命令行操作,官方文档只写支持win10,对chrome版本有要求，只支持chrome80版本,商业用途需要商业许可证https://github.com/automagica/automagicaTagUI浏览器支持好,官方文档详细命令行操作,非浏览器程序支持一般https://github.com/kelaberetiv/TagUI

（1）Robot Framework

**   https://github.com/robotframework/robotframework **

**![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvoCJch3gnwCDKfzrevaLVMFf9qLHPP2zQG7b42ibZ2d6dVdDyZIb0CpQvvibA2JZdef8Lyx8ibnPIQ/640?wx_fmt=png&from=appmsg)
**

   Robot Framework是最专业、最先进的开源RPA工具之一。它能够帮助企业以经济高效的方式提供丰富的业务流程自动化服务。能够支撑组织实施、运行企业级机器人应用程序，并智能地处理复杂的业务流程。Robot Framework能够大大简化业务运营、改善了IT基础设施、减少了工作量与成本，同时还能提高企业的整体灵活性，具备良好的可扩展性，可以为企业建立虚拟员工、能够很容易地与其他自动化工具集成，使业务流程自动化。

（2）Taskt

     **https://github.com/saucepleez/taskt **

**![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvoCJch3gnwCDKfzrevaLV6rfwg89qeq6ib8ETXouSmU4jRG2To2cJjR4gtfibuhz7j2E15oe4MDsA/640?wx_fmt=png&from=appmsg)
**

    taskt（以前称为sharpRPA）是一个免费的、开源的、有趣的流程自动化软件。它提供了易用的操作界面，无需编码或使用最少的命令（无代码、低代码方法）即可实现自动化机器人的创建。Taskt最显著的优势是它的屏幕记录器，记录器具有多种记录功能，可以记录各种用户活动，从而根据记录信息创建机器人脚本。此外，它还包含一个带有拖放机制的可视化脚本生成器，在“所见即所得”设计器中中设计机器人模型。它还提供了数十个命令，如自定义代码执行，图像识别和OCR等。Taskt为开发人员提供了在线示例和测试网站，您可以根据实际需要选择尝试使用现有的DEMO或者自己配置案例。所有的手册、指南和操作方法都可以在Taskt的网站上找到。

（3）UI.Vision

    https://github.com/A9T9/RPA 

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrQvoCJch3gnwCDKfzrevaLV5a68uj15vUMGwbhyp2ujJyhqNBufxzpZe1qzWkJWHAzicwQbybOU5VQ/640?wx_fmt=png&from=appmsg)

    UI.Vision是一个跨平台性非常好的开源RPA自动化软件。适用于Microsoft Windows，Mac和Linux操作系统。既可以作为桌面上的独立客户端运行，也可以作为Web浏览器中的插件运行。在桌面客户端独立运行时，可以模拟各种输入（如键盘和鼠标）并完成特定任务。在Web浏览器中支持Mozilla Firefox、Google Chrome或Edge的插件。并且非常易用，提供了可视化UI测试以及浏览器自动化命令控制UI的功能。不要求学习如何开发脚本，只要一个点击式的界面即可驱动它。值得强调的是UI.Vision通常被认为符合RPA领域的最高数据保护标准。

（4）OpenRPA

    https://github.com/open-rpa/openrpa

 OpenRPA是当今RPA市场上最好的免费工具之一，具备可拖拉可视化界面，非常成熟，非常易用，可以用于任何规模大小的企业。这个解决方案拥有非常活跃的社区，并且积极在为项目做贡献，软件更新非常频繁。OpenRPA使用C#和JavaScript技术开发，提供的功能包括：远程管理、状态支持、分析仪表板、调度和规划功能等，能够与各种云提供商集成。

     （5）TagUI          https://github.com/aisingapore/TagUI 

    TagUI 是一个跨平台的，支持命令行和可视化的RPA解决方案，用于自动执行键盘、鼠标操作。此RPA解决方案被认为是最佳远程RPA开源平台，是远程RPA工作的理想开源项目，能够在不停机的情况下更新，并且TagUI是一个基于云的应用程序，可以从世界任何角落进行管理，最多可支持15个用户，支持从各种终端设备（PC、智能手机或平板电脑）管理多个会话。并且，它在本地用户的设备上运行时不会存储任何公司数据，保障信息安全。
    TagUI还是Microsoft Word、Excel的RPA自动化产品，为Microsoft Power Automate提供了附加组件。它还为人工智能和大数据应用开发提供基于Python和R语言的开发包。TagUI支持以类似自然语言的语法编写脚本，提升了无代码体验。在企业迈向数字化的转型旅程中，采用自动化和智能化技术是一条不可回避的道路，其中RPA展现出了巨大的应用潜力。开源RPA框架的主要优势在于其开放性，能够与多种不同的工具结合，激发创新。每个开源框架都有其独特的优势，但同时，利用这些框架也需要一定程度的开发投资。因此，在进行信息化改造时，技术的选择必须考虑企业的具体情况。至于RPA的成功应用，其关键指标在于能否在特定的应用领域实现成本的降低和效率的提升。
注意：AISG 团队将停止对 TagUI 的维护和支持。自 2023 年第四季度起，我们将不再提供更新或支持。同时，请期待我们团队的延迟响应。