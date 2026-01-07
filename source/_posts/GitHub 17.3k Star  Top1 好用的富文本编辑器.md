---
title: GitHub 17.3k Star  Top1 好用的富文本编辑器
date: '2026-01-04T16:26:13.192269'
updated: '2026-01-05T23:18:10.036893'
tags: []
categories: []
cover: null
---

戳上方蓝字“**牛皮糖不吹牛**”关注我

    大家好，我是牛皮糖！作为一名的编程博主，我深知在网页开发过程中，一个优秀的富文本编辑器对于提升用户体验的重要性。今天，我要向大家介绍一个在GitHub上拥有46.4 k Star的开源项目——Wang编辑器（wangEditor）。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRYgCwBtGH1TOrMU8MLfoIK2w9SIV0w72haiaAzzN67DWg1uBmJKz2BxkrVrw6s7XAsQNXk1N9yxbQ/640?wx_fmt=png&from=appmsg)

    wangEditor是一个轻量级、功能丰富的网页富文本编辑器，它的设计初衷是为开发者提供一个简单易用、功能全面的编辑工具。它支持多种文本格式，包括但不限于纯文本、图片、视频、表情等，能够满足绝大多数网页编辑需求。

核心特点- 王编辑器的体积小，加载速度快，不会对网页性能造成负担。

- 开发者可以根据自己的需求，自定义编辑器的功能和样式。

- 王编辑器支持主流的浏览器，包括Chrome、Firefox、Safari等。

- 快速接入，配置简单，几行代码即可生成。集成了所有常见功能，无需二次开发。在 Vue React 也可以快速接入。

**开始使用**

**    **要在你的项目中使用Wang编辑器，你只需要简单几步：

- 引入Wang编辑器的CSS和JS文件。

- 在HTML中创建一个容器元素。

- 初始化编辑器并配置相关选项。

<!-- 引入CSS -->
<link rel="stylesheet" href="/path/to/wangEditor/css/wangEditor.css">

<!-- 引入JS -->
<script type="text/javascript" src="/path/to/wangEditor/js/wangEditor.js"></script>

<!-- 创建容器 -->
<div id="editor" style="width: 100%; height: 300px;"></div>

<!-- 初始化编辑器 -->
<script type="text/javascript">
    var editor = new wangEditor('editor');
    editor.create();
</script>### vue-cli 安装
- 
- 
- 
- 
- 
```
`yarn add @wangeditor/editor``# 或者 npm install @wangeditor/editor --save``
``yarn add @wangeditor/editor-for-vue``# 或者 npm install @wangeditor/editor-for-vue --save`
```

新建一个 vue 组件文件夹，通过组件调用

<template>
  <div>
    <div>
      <button @click="printEditorHtml">print html</button>
      <button @click="insertTextHandler">insert text</button>
      <button @click="disableHandler">disable</button>
      <button @click="ableHandler">no</button>
    </div>
    <div style="border: 1px solid #ccc; margin-top: 10px;">
      <!-- 工具栏 -->
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
      />
      <!-- 编辑器 -->
      <Editor
        style="height: 100%; overflow-y: hidden;"
        :defaultConfig="editorConfig"
        v-model="html"
        @onChange="onChange"
        @onCreated="onCreated"
      />
    </div>
    <div style="margin-top: 10px;">
            <textarea
              v-model="html"
              readonly
              style="width: 100%; height: 200px; outline: none;"
            ></textarea>
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  name: 'WangEditor',
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: '<p>hello&nbsp;world</p>',
      toolbarConfig: {
        // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        // excludeKeys: [ /* 隐藏哪些菜单 */ ],
      },
      editorConfig: {
        placeholder: '请输入内容...',
        // autoFocus: false,

        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {}
      }
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 【注意】一定要用 Object.seal() 否则会报错
    },
    onChange(editor) {
      console.log('onChange', editor.getHtml()) // onChange 时获取编辑器最新内容
    },
    insertTextHandler() {
      const editor = this.editor
      if (editor == null) return
      editor.insertText(' hello ')
    },
    printEditorHtml() {
      const editor = this.editor
      if (editor == null) return
      console.log(editor.getHtml())
    },
    disableHandler() {
      const editor = this.editor
      if (editor == null) return
      editor.disable()
    },
    ableHandler(){
      const editor = this.editor
      if (editor == null) return
      editor.enable()
    }
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>Ajax 异步设置内容 HTML</p>'
    }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁 editor ，重要！！！
  },
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
 新建一个调用页面，通过对组件的单一调用就实现富文本框。

- 
- 
- 
- 
- 
`<template> ``   <el-card>  ``     <my-editor></my-editor> ``   </el-card>``</template>`
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
- 
- 
```
`<script>``
``import MyEditor from '@/components/WangEditor'``export default {``  components: {``    MyEditor,``    // MyEditorWithFormula,``    // MyEditorWithMention``  },``  }``  </script>``  `
```

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRYgCwBtGH1TOrMU8MLfoIKhI0gOLFec4Fptpyfvh7IS1MnZRMhGM0o5O09QJSZiakW86oRLG0wFdA/640?wx_fmt=png&from=appmsg)
  

    而且我发现这个大佬最近也在做一个共享的 AI 笔记软件不过大佬不开源，如果有兴趣的可以去看看。

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrRYgCwBtGH1TOrMU8MLfoIK4DkgJLzBg5l12Al0dxOmBKCtsFia9pKrOAhtAu4lxYyV2OcrA3iaDnGA/640?wx_fmt=png&from=appmsg)

项目地址：

**https://github.com/wangeditor-team/wangEditor**

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

### **推荐阅读**
•   [github 95.5k Star 的项目集合地](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485137&idx=1&sn=00da6656ecacfcab683c6e149c208985&chksm=c1d3a4d7f6a42dc107aa9233b7a23f20a4bfe7bcd9d48a0fe24787faae37539bd65663d8ba8e&scene=21#wechat_redirect)[‍](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [4核 16G 就能 RAGFlow Quick start 快速入门](http://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485121&idx=1&sn=97093dfe7da78fb786bb999a284ee1fc&chksm=c1d3a4c7f6a42dd1df4cb4de4c057671d57274480eac57e61b4f6bae86aef03ff26bf23ffdd6&scene=21#wechat_redirect)•   [github 7.8k star 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。](http://mp.weixin.qq.com/s?__biz=MzIxODg1OTk1MA==&mid=2247488494&idx=1&sn=0244c0a45012f5a6ca6cdf9a0ac88024&chksm=97e5432fa092ca39991868bda959cfd8bafd949fa445ef72bdca5cc6c4dc2ed4bd51e22634f8&scene=21#wechat_redirect)