# Hexo 文章解析错误修复报告

## 问题概述

在运行 `npm run dev` 时,Hexo 遇到了多个文章解析错误,主要分为两类:

### 1. URI 格式错误 (URIError: URI malformed)
**影响文件:**
- `GitHub星标项目  告别AI幻觉，Parlant让智能体100%听话.md`
- `传统数据标注已死！这个开源神器让LLM微调效率飙升300%.md`
- `国家发改委——2027 年智能体普及率 超70%！！！.md`
- `大模型管理革命：RagaAI Catalyst让AI效率提升300%.md`

**根本原因:** 文件名中包含特殊字符(多个空格、中文标点、百分号等),导致 Hexo 在生成 permalink 时 `decodeURI` 失败。

### 2. YAML 解析错误
**影响文件:**
- `资本下一个抛儿——程序员 ，成熟程序员是什么？.md` - title 中包含中文逗号导致 YAML 缩进错误
- `images/README-screenshots.md` - YAML 中包含 `**文件名**:` 被误识别为 YAML 别名

## 解决方案

### 手动修复
1. **修复 YAML 缩进错误** - 将 title 中的中文逗号移到引号内
2. **添加 layout: false** - 为非文章文件添加 Front Matter,避免被 Hexo 处理
3. **添加 permalink 字段** - 为文件名包含特殊字符的文章手动指定 URL slug
4. **修复 title 格式** - 为包含特殊字符的 title 添加引号

### 自动化修复脚本
创建了 `fix-frontmatter.js` 脚本,可以批量检查和修复所有 Markdown 文件:

```bash
node fix-frontmatter.js
```

**脚本功能:**
- 自动检测 title 中的特殊字符并添加引号
- 为文件名包含特殊字符的文章自动生成 permalink
- 检查 Front Matter 格式完整性
- 处理了 544 个 Markdown 文件

## 修复结果

✅ **所有 URI 格式错误已解决**
✅ **所有 YAML 解析错误已解决**
✅ **Hexo 开发服务器成功启动**
✅ **网站运行在 http://localhost:4000/**

## 修复的文件列表

### 手动修复的文件
1. `资本下一个抛儿——程序员 ，成熟程序员是什么？.md` - 修复 YAML 缩进
2. `images/README-screenshots.md` - 添加 `layout: false`
3. `GitHub星标项目  告别AI幻觉，Parlant让智能体100%听话.md` - 添加 permalink
4. `传统数据标注已死！这个开源神器让LLM微调效率飙升300%.md` - 添加 permalink
5. `国家发改委——2027 年智能体普及率 超70%！！！.md` - 添加 permalink
6. `大模型管理革命：RagaAI Catalyst让AI效率提升300%.md` - 添加 permalink

### 批量修复的文件
通过 `fix-frontmatter.js` 脚本自动修复了数十个文件的 Front Matter 格式问题。

## 建议

### 预防措施
1. **文件命名规范** - 避免在文件名中使用特殊字符,建议使用英文、数字和连字符
2. **Front Matter 规范** - title 中包含特殊字符时,始终使用双引号包裹
3. **添加 permalink** - 对于包含特殊字符的文件,手动指定 permalink 以避免 URL 编码问题

### 工具使用
- 定期运行 `node fix-frontmatter.js` 检查和修复格式问题
- 在添加新文章前,确保 Front Matter 格式正确

## 注意事项

当前仍有一些图片上传相关的警告,但这些不影响网站的正常运行:
- 微信素材库图片上传失败 (access_token 相关)
- 部分图片路径警告

这些问题与文章解析无关,可以单独处理。
