---
title: 常见问题
date: 2025-12-28
layout: page
comments: false
---

# 常见问题（FAQ）

## 关于网站

### 这个网站是做什么的？

**太阳鸟的AI宝藏库** 是一个专注于 AI 工具分享和技术探索的博客平台。我们致力于：

- 🔍 **精选 AI 工具导航** - 推荐 ChatGPT、Claude、Midjourney 等热门工具
- 📚 **技术教程分享** - AI 应用开发、大模型使用指南
- 🚀 **开源项目推荐** - GitHub 优质 AI 开源项目精选
- 💡 **实战案例** - AI 工具在实际场景中的应用

### 网站内容多久更新一次？

我们保持**每日更新**，持续分享最新的 AI 工具、技术教程和开源项目。

### 如何订阅更新？

您可以通过以下方式获取最新内容：
- 关注公众号「太阳鸟的 AI 宝藏库」
- 添加微信好友（见[关于页面](/about/)）
- 访问 [GitHub](https://github.com/niupTang) 关注项目更新

---

## AI 工具相关

### 如何选择合适的 AI 工具？

选择 AI 工具时，建议考虑以下因素：

1. **使用场景**：明确您的需求（文本生成、图像创作、代码辅助等）
2. **成本预算**：免费版 vs 付费版的功能差异
3. **易用性**：是否需要技术背景
4. **数据隐私**：工具的数据处理政策
5. **中文支持**：对中文的理解和生成能力

### ChatGPT 和 Claude 有什么区别？

| 特性 | ChatGPT | Claude |
|------|---------|--------|
| **开发公司** | OpenAI | Anthropic |
| **上下文长度** | 最高 128K tokens | 最高 200K tokens |
| **中文能力** | 优秀 | 优秀 |
| **代码能力** | 强 | 强 |
| **特色功能** | 联网搜索、图像生成 | 长文档分析、更安全 |
| **价格** | $20/月 | $20/月 |

### 有免费的 AI 工具推荐吗？

当然！以下是一些优质的免费 AI 工具：

- **文本生成**：ChatGPT 免费版、文心一言、通义千问
- **图像生成**：Stable Diffusion（开源）、Leonardo.ai（免费额度）
- **代码辅助**：GitHub Copilot（学生免费）、Cursor（免费版）
- **AI 搜索**：Perplexity（免费版）、秘塔搜索

---

## 技术问题

### 如何本地部署 AI 模型？

本地部署 AI 模型的基本步骤：

1. **环境准备**
   - 安装 Python 3.8+
   - 安装 CUDA（如果使用 GPU）
   - 安装依赖包

2. **选择模型**
   - 小型模型（7B）：适合个人电脑
   - 中型模型（13B-30B）：需要较好的 GPU
   - 大型模型（70B+）：需要多卡或云服务器

3. **部署工具**
   - Ollama（最简单）
   - LM Studio（图形界面）
   - vLLM（高性能）

详细教程请查看我们的[技术文章](/archives/)。

### 如何使用 API 调用 AI 模型？

基本的 API 调用示例（Python）：

```python
import openai

openai.api_key = "your-api-key"

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "你好，AI！"}
    ]
)

print(response.choices[0].message.content)
```

更多 API 使用教程，请访问我们的[开发指南](/tools/)。

### 如何保护 API 密钥安全？

保护 API 密钥的最佳实践：

1. ✅ **使用环境变量** - 不要硬编码在代码中
2. ✅ **添加到 .gitignore** - 避免提交到 Git
3. ✅ **设置使用限额** - 防止滥用
4. ✅ **定期轮换密钥** - 提高安全性
5. ✅ **使用密钥管理服务** - 如 AWS Secrets Manager

---

## 开源项目

### 如何贡献开源项目？

参与开源项目的步骤：

1. **Fork 项目** - 在 GitHub 上 Fork 仓库
2. **克隆到本地** - `git clone your-fork-url`
3. **创建分支** - `git checkout -b feature/your-feature`
4. **提交更改** - `git commit -m "Add feature"`
5. **推送分支** - `git push origin feature/your-feature`
6. **创建 PR** - 在 GitHub 上创建 Pull Request

### 推荐哪些 AI 开源项目？

我们精选的 AI 开源项目：

**大模型相关**：
- LLaMA、ChatGLM、Qwen
- LangChain、LlamaIndex

**应用框架**：
- Dify、FastGPT
- Coze、Flowise

**工具类**：
- Stable Diffusion WebUI
- ComfyUI

查看完整列表请访问[工具导航](/tools/)。

---

## 联系与合作

### 如何联系作者？

您可以通过以下方式联系我：

- 📧 **微信**：扫描[关于页面](/about/)的二维码
- 📱 **公众号**：「太阳鸟的 AI 宝藏库」
- 💻 **GitHub**：[@niupTang](https://github.com/niupTang)

### 可以投稿吗？

当然欢迎！我们接受以下类型的投稿：

- AI 工具评测
- 技术教程
- 开源项目介绍
- 实战案例分享

请通过微信或公众号联系我们。

### 是否接受商业合作？

我们接受以下形式的合作：

- ✅ 工具推广（需符合质量标准）
- ✅ 技术咨询
- ✅ 内容合作
- ❌ 不接受低质量广告

详情请联系作者洽谈。

---

## 其他问题

### 网站是用什么搭建的？

本站技术栈：

- **框架**：Hexo 8.x
- **主题**：自定义主题
- **托管**：Vercel
- **域名**：niuptang.online

### 内容可以转载吗？

可以转载，但请遵守以下规则：

1. ✅ 注明出处和作者
2. ✅ 保留原文链接
3. ✅ 不得用于商业用途（需授权）
4. ❌ 不得修改原文内容

### 如何提交问题或建议？

欢迎通过以下方式提交：

- GitHub Issues
- 微信私信
- 公众号留言

我们会认真对待每一条反馈！

---

**还有其他问题？** 欢迎通过[关于页面](/about/)联系我们！
