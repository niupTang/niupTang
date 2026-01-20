---
description: 自动生成内容PPT演示文稿
---

# 自动生成内容PPT

这个工作流可以帮助你从文章内容自动生成精美的PPT演示文稿。

## 使用方法

```bash
# 基础用法
/generate-content-ppt

# 或通过 npm 脚本
npm run ppt:generate -- --article "文章标题" --slides 15
```

## 工作流步骤

### 1. 选择或指定文章内容

指定要转换为PPT的文章:

```bash
# 从现有文章生成
node tools/select-article.js

# 或直接指定文章路径
--article "source/_posts/你的文章.md"
```

这个步骤会:
- 列出所有可用的文章
- 让用户选择要转换的文章
- 或直接使用指定的文章路径

### 2. 分析文章结构并生成大纲

使用 AI 分析文章内容,生成PPT大纲:

```bash
node tools/analyze-article-for-ppt.js --article "文章路径"
```

这个脚本会:
- 提取文章的核心观点
- 识别关键章节和要点
- 生成PPT页面大纲(标题页、目录、内容页、总结页)
- 建议每页的内容分配
- 保存大纲到 `ppt-outlines/` 目录

### 3. 提取和优化图片素材

从文章中提取图片,或生成新的配图:

```bash
node tools/prepare-ppt-images.js --outline "ppt-outlines/your-outline.json"
```

这个脚本会:
- 提取文章中的现有图片
- 根据内容主题生成AI配图(使用 DALL-E 或 Midjourney)
- 优化图片尺寸和格式(适配PPT)
- 下载并保存到 `ppt-images/` 目录

### 4. 生成PPT内容

基于大纲和素材生成完整的PPT:

```bash
node tools/generate-ppt-content.js --outline "ppt-outlines/your-outline.json"
```

这个脚本会:
- 使用 AI 为每页生成精炼的文字内容
- 确保每页内容简洁(标题+3-5个要点)
- 生成演讲者备注
- 输出为结构化JSON格式
- 保存到 `ppt-content/` 目录

### 5. 创建PPT文件

使用 PptxGenJS 或 python-pptx 生成实际的PPT文件:

// turbo
```bash
node tools/create-ppt-file.js --content "ppt-content/your-content.json" --template "modern"
```

这个脚本会:
- 选择PPT模板(现代风、商务风、科技风等)
- 插入文字内容和图片
- 应用统一的样式和配色
- 生成 `.pptx` 文件
- 保存到 `output/` 目录

### 6. 预览和优化(可选)

生成预览图并进行人工审核:

```bash
node tools/preview-ppt.js --file "output/your-presentation.pptx"
```

这个脚本会:
- 将PPT转换为预览图片
- 生成缩略图网格
- 在浏览器中打开预览
- 允许用户标记需要修改的页面

## 一键执行

使用一个命令完成所有步骤:

// turbo-all
```bash
npm run ppt:auto -- --article "source/_posts/你的文章.md" --slides 15 --template "modern"
```

参数说明:
- `--article`: 文章路径(必需)
- `--slides`: 目标页数(可选,默认 10-15 页)
- `--template`: PPT模板风格(可选,默认 "modern")
  - `modern`: 现代简约风格
  - `business`: 商务专业风格
  - `tech`: 科技感风格
  - `creative`: 创意设计风格
- `--ratio`: 屏幕比例(可选,默认 "16:9")
  - `16:9`: 宽屏
  - `4:3`: 标准

## 配置

在 `_config.yml` 中配置相关 API 密钥:

```yaml
# AI 生成
openai_api_key: your_key_here
anthropic_api_key: your_key_here

# 图片生成
dalle_api_key: your_key_here
midjourney_api_key: your_key_here

# 图片搜索
unsplash_api_key: your_key_here
pexels_api_key: your_key_here

# PPT 配置
ppt:
  default_template: modern
  default_slides: 12
  default_ratio: "16:9"
  font_family: "Microsoft YaHei"
  primary_color: "#2E86DE"
  secondary_color: "#54A0FF"
```

## PPT 模板说明

### Modern (现代简约)
- 简洁的设计
- 大标题 + 少量文字
- 高质量配图
- 适合: 产品发布、技术分享

### Business (商务专业)
- 专业的配色
- 数据图表支持
- 清晰的层次结构
- 适合: 商业提案、工作汇报

### Tech (科技感)
- 深色背景
- 渐变和光效
- 代码块优化显示
- 适合: 技术演讲、开发者大会

### Creative (创意设计)
- 大胆的配色
- 创意排版
- 视觉冲击力强
- 适合: 创意提案、设计分享

## 注意事项

1. **内容精简**: PPT应该是要点提炼,不是文章复制
2. **图片版权**: 确保使用的图片有合法授权
3. **文件大小**: 注意控制图片质量,避免PPT文件过大
4. **字体兼容**: 使用常见字体,确保在不同设备上正常显示

## 示例

生成一篇关于"AI编程工具"的PPT:

```bash
npm run ppt:auto -- \
  --article "source/_posts/Claude Skill对比Google Workflow.md" \
  --slides 12 \
  --template "tech" \
  --ratio "16:9"
```

这将:
1. 分析文章内容
2. 生成12页PPT大纲
3. 准备科技风格的配图
4. 创建16:9比例的PPT文件
5. 输出到 `output/claude-vs-gemini.pptx`

## 输出示例

生成的PPT结构:
- **第1页**: 标题页(文章标题 + 副标题)
- **第2页**: 目录(主要章节)
- **第3-4页**: 问题背景
- **第5-8页**: 核心内容对比
- **第9-10页**: 实战案例
- **第11页**: 总结
- **第12页**: Q&A / 联系方式

## 高级功能

### 自定义模板

创建自己的PPT模板:

```javascript
// templates/my-template.js
module.exports = {
  name: 'my-template',
  slideSize: { width: 10, height: 5.625 },
  background: '#FFFFFF',
  titleStyle: {
    fontSize: 44,
    color: '#333333',
    bold: true
  },
  contentStyle: {
    fontSize: 24,
    color: '#666666'
  }
};
```

### 批量生成

为多篇文章批量生成PPT:

```bash
node tools/batch-generate-ppt.js --articles "source/_posts/*.md" --template "modern"
```

### 导出为PDF

将生成的PPT转换为PDF:

```bash
node tools/ppt-to-pdf.js --file "output/your-presentation.pptx"
```
