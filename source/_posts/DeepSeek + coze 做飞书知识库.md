---
title: DeepSeek + coze 做飞书知识库
date: 2025-02-19 23:24:25
tags:
  - 公众号
  - 原创
categories:
  - 公众号文章
---

点击上方🔺公众号🔺关注我✅

领资料这个链接：

https://pan.quark.cn/s/a2ba4f9fe95e

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XUp6Na0icMBMrZayxB1ox3FIe2WtqEGwCgNecnxKZwwnlbaFmYQE5icLA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XkYFMRlA5T6vemc3U8EmpjeO01WYOjicOP9mxo772Vq5a6q3bugiaB15A/640?wx_fmt=jpeg&from=appmsg)

大家好，我是程序员太阳鸟，这几天都在直播在公众号内容这块都不知道怎么写了。我弄一个飞书知识库，来存一些素材，直接要AI 帮我来写文章了。

注册coze

https://www.coze.cn/home

注册不多说，注册完成后在左上可以新建一个智能体。

名字和功能自己填写。新增一个工作流

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XGiaECbqsic0ae4MVWQXaqLxiaXiayBl4m7bOeOAkRDhXCyxiaVG43mwYZLQ/640?wx_fmt=jpeg&from=appmsg)

在工作流开始输入一个参数 为url

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2X2icLvV6UnRCoz57RMxMNvAzLFFqvDpGMpk0RmZAfIEf66dovqEPdWCw/640?wx_fmt=jpeg&from=appmsg)

点击 + 新建一个插件，用来拉取和解析文章

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XKfJyzTaG1lFh54VJoI2okDH0BVKDibAsuBcTZvYGuudkM16N2FNsrOg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2Xsry5UaEic89nanqFxwxOks4ibZWT8iayLp2xomg0vFHuaBjv5Qh4b5fWA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XZibEGWa4UT2d8ekic9ORs2rXQwPqgLCXIo3WBVPu2GbTU3nzQEua5Mmw/640?wx_fmt=jpeg&from=appmsg)

然后将插件的输入参数填写为URL,请求超时时间默认填写为20000，代表20s

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XIibYbuyG7FfjP5jsncM4aDLia3yMjwOfoWHE1ib99mcDVYz5UfUNhHrZQ/640?wx_fmt=jpeg&from=appmsg)

然后再新增三个大模型数据进行拆分，一个将数据内容、标题、链接、关键字、标签、平台进行拆分，最后以JSON 的格式返回回去。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XXsQGAxsBOLxrbjjJFxqR30Bhf2Zp4yNOZp4iaSD62K8WCSicggmKgQibg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2Xp6V4ficDnQiaSNGjgSsmuogKbp3RkCvhWhrS0d7HxB71HooLVZWtHM0w/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2Xl7mCKlYgo6pnV8OnnuGD4ic4Illz0IFk1du14RLZXnrq7aYlGJicib6Tw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2Xy2sJfXVcF1iaHSgBSuNXD3jdGA6XTRVTxxgExod4HAWW29znuHqehvQ/640?wx_fmt=jpeg&from=appmsg)

调用飞书插件，多为表格的add_records ,就可以将内容新增到飞书里面了。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2Xgk6xjDfIMMrpq4GUicxSibqLsBDgMZAzxlYPJzPbFbeUVq2cSK29icNLA/640?wx_fmt=jpeg&from=appmsg)

新增表格有两个必填参数、一个是需要新增的表格链接，还有就是新增表格对应的表头和参数，是一个数组集合。

- 
`返回一个json格式，其中字段格式如下所示："fields": {"标题": {"text": ,"link": },"作者": ,"来源": ,"状态": "未读","摘要": ,"关键词": ,"标签":}`
这个参数是和飞书表格对应，标题因为是链接所有有一个link代表url。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XoFv9cQRTm2WrYibsp7auFT0sG3kxbydPkprnzibpuvCJGm5Gtc0J7HKQ/640?wx_fmt=jpeg&from=appmsg)

弄完过后记得先试运行来测试，最好就是在每一个阶段都进行试运行来测试当前数据是否是自己想要的数据。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XBDjecOTaVjvFenTZ1n2z7SqzOkFsmsWLTJnDXISkDaohn1O6h1M5oA/640?wx_fmt=jpeg&from=appmsg)

因为是飞书文档关系这个开发好的只能自己用，所以发布到豆包上进行自己用，

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562OgFGTsn6ITZo99dORxqB2XXYDxG4cYRx9ZfdjQ05hgnsXLIHKKDpLD9g53rSHZACd59scvr4q0CA/640?wx_fmt=jpeg&from=appmsg)

要具体的提示词后台私信

**太阳鸟 **

98年在职成长型博主

搞钱干货|自媒体运营|计划、复盘|自律生活心得

（扫码后自动发送《DeepSeek免部署使用指南》，前30人赠AI副业资料包）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b4TGia2ia562MSIatXpWt7sCrlMEJrXbRMKml7LffS242cV6WlEDAhMNqjPYybY9zUXjLgY5MxLyhxBEThpmnHqA/640?wx_fmt=png&from=appmsg)

**每日**更新，期待与你一起成长

欢迎围观高质量的副业知识星球

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b4TGia2ia562MIdibsdq0g8G9wqHWTaXkh8ew6rZFtt2n1hUPBzLjN4A9aIV14u70ib8l9R3xEU4eXevEJBtRVfmqA/640?wx_fmt=jpeg&from=appmsg)