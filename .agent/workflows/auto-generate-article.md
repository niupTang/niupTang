---
description: 自动生成文章并发布到微信公众号
---

# 自动生成文章并发布到微信公众号

这个工作流可以帮助你自动化完成从素材收集到微信公众号发布的全流程。

## 使用方法

```bash
npm run article:auto -- --topic "你的文章主题"
```

## 工作流步骤

### 步骤 0: 查询知识库（可选但推荐）

在创作新文章前，先查询你的公众号知识库，避免重复内容并发现新角度：

```bash
# 使用 NotebookLM Skill 查询
"查询我的公众号知识库，关于 '你的文章主题' 的所有相关内容"
```

这个步骤会：
- 检查是否已写过类似主题
- 提取历史文章的核心观点
- 发现可以引用的素材
- 建议差异化角度

**提示**：如果你已经安装了 NotebookLM Skill 并上传了公众号文章分类文档，直接在 Claude Code 中询问即可。详见 `/knowledge-search` workflow。

---

### 步骤 1: 从网上获取文章相关素材

使用 AI 搜索引擎获取相关素材：

```bash
node tools/fetch-article-materials.js --topic "你的文章主题"
```

这个脚本会：
- 使用 AI 搜索引擎（如 Perplexity、Tavily）搜索相关内容
- 提取关键信息和数据
- 保存到 `materials/` 目录

### 步骤 2: 根据提供的方向编写文案大纲

基于收集的素材生成文章大纲：

```bash
node tools/generate-article-outline.js --topic "你的文章主题" --materials "materials/your-topic.json"
```

这个脚本会：
- 分析素材内容
- 使用 AI 生成文章大纲
- 包含标题、章节、关键点
- 保存到 `outlines/` 目录

### 步骤 3: 从网上获取图片

根据文章主题和大纲获取相关图片：

```bash
node tools/fetch-article-images.js --outline "outlines/your-topic.json"
```

这个脚本会：
- 根据文章主题搜索相关图片
- 使用 Unsplash、Pexels 等免费图库
- 或使用 AI 生成图片（Midjourney、DALL-E）
- 或使用 Nano Banana 使用卡通胡提示词
- 下载并保存到 `images/` 目录

### 步骤 4: 生成完整文章

基于大纲和素材生成完整文章：

```bash
node tools/generate-full-article.js --outline "outlines/your-topic.json" --materials "materials/your-topic.json"
```

这个脚本会：
- 使用 AI 生成完整文章内容
- 插入图片引用
- 格式化为 Markdown
- 保存到 `source/_posts/` 目录

### 步骤 5: 保存到微信公众号

将文章发布到微信公众号：

```bash
node tools/publish-to-wechat.js --article "source/_posts/your-article.md"
```

这个脚本会：
- 将 Markdown 转换为微信公众号格式
- 上传图片到微信素材库
- 创建草稿或直接发布

## 一键执行

使用一个命令完成所有步骤：

// turbo-all
```bash
npm run article:auto -- --topic "你的文章主题" --publish
```

参数说明：
- `--topic`: 文章主题（必需）
- `--publish`: 是否直接发布（可选，默认只创建草稿）
- `--images`: 图片数量（可选，默认 3-5 张）
- `--style`: 文章风格（可选，默认使用你的历史风格）

## 配置

在 `_config.yml` 中配置相关 API 密钥：

```yaml
# AI 搜索
perplexity_api_key: your_key_here
tavily_api_key: your_key_here

# AI 生成
openai_api_key: your_key_here
anthropic_api_key: your_key_here

# 图片服务
unsplash_api_key: your_key_here
pexels_api_key: your_key_here

# 微信公众号
wechat:
  appid: your_appid
  secret: your_secret
  proxy: http://localhost:8888  # 本地代理
```

## 注意事项

1. **API 密钥安全**：不要将 API 密钥提交到 Git
2. **内容审核**：发布前请人工审核内容
3. **图片版权**：确保使用的图片有合法授权
4. **发布频率**：避免频繁发布，遵守平台规则

## 示例

生成一篇关于"AI 编程工具"的文章：

```bash
npm run article:auto -- --topic "2025年最值得关注的5款AI编程工具" --images 5 --publish
```

这将：
1. 搜索 AI 编程工具相关信息
2. 生成文章大纲
3. 获取 5 张相关图片
4. 生成完整文章
5. 发布到微信公众号