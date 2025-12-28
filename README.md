# 太阳鸟的AI宝藏库 🌟

<div align="center">

![Hexo Version](https://img.shields.io/badge/Hexo-8.1.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-Required-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

**发现最好用的AI工具，探索人工智能的无限可能**

[在线访问](https://www.niuptang.online/) | [关于项目](#关于项目) | [快速开始](#快速开始) | [功能特性](#功能特性)

</div>

---

## 📖 关于项目

**niupTang** 是一个专注于 AI 工具分享和技术探索的博客平台,致力于为用户提供:

- 🔍 **精选 AI 工具导航** - ChatGPT、Midjourney、Claude 等热门工具推荐
- 📚 **技术教程分享** - AI 应用开发、大模型使用指南
- 🚀 **开源项目推荐** - GitHub 优质 AI 开源项目精选
- 💡 **实战案例** - AI 工具在实际场景中的应用案例

## ✨ 功能特性

### 核心功能

- 📝 **Hexo 静态博客** - 基于 Hexo 8.x 构建的高性能静态博客
- 🎨 **自定义主题** - 使用 niuptang 主题,提供优雅的阅读体验
- 🔧 **工具导航页** - 专门的 AI 工具展示页面
- 📱 **响应式设计** - 完美适配各种设备屏幕

### 特色功能

- 📤 **微信公众号一键发布** - 支持将博客文章一键同步到微信公众号
  - Markdown 转微信格式
  - 自动上传图片到微信素材库
  - 自动设置封面图
- 🖼️ **微信图床集成** - 使用微信公众号作为图床服务
- 🔌 **本地代理支持** - 内置本地代理服务,方便 API 调用

## 🚀 快速开始

### 环境要求

- Node.js >= 14.0.0
- npm 或 yarn

### 安装步骤

1. **克隆项目**

```bash
git clone https://github.com/yourusername/niupTang.git
cd niupTang
```

2. **安装依赖**

```bash
npm install
```

### 本地开发

```bash
# 复制配置模板
cp _config.example.yml _config.yml

# 编辑 _config.yml 填入真实配置（此文件不会被提交到 Git）

# 启动开发服务器
npm run dev
```

访问 `http://localhost:4000` 查看博客

### 部署到 Vercel

**🚀 [查看快速部署指南](./QUICK_DEPLOY.md)**

1. **安全检查**

```bash
# 运行安全检查，确保没有敏感信息泄露
node scripts/security-check.js
```

2. **推送到 GitHub**

```bash
git add .
git commit -m "准备部署"
git push origin main
```

3. **在 Vercel 中配置**

- 导入 GitHub 仓库
- Build Command: `npm run vercel-build`
- Output Directory: `public`
- 添加环境变量:
  - `WECHAT_APP_ID`: 您的微信 AppID
  - `WECHAT_APP_SECRET`: 您的微信 AppSecret

**📚 详细部署文档**: [VERCEL_DEPLOY_GUIDE.md](./VERCEL_DEPLOY_GUIDE.md)

### 传统部署

```bash
# 清理缓存
hexo clean

# 生成静态文件
npm run build

# 部署到服务器
npm run deploy
```

## 📝 使用指南

### 创建新文章

```bash
hexo new post "文章标题"
```

### 微信公众号发布

```bash
# 启动本地代理服务
npm run api

# 发布文章到微信公众号
npm run publish
```

### 配置说明

**⚠️ 重要**: `_config.yml` 包含敏感信息，已在 `.gitignore` 中，不会被提交到 Git。

在 `_config.yml` 中配置微信公众号参数:

```yaml
wechat_image:
  enable: true
  appId: wx1234567890abcdef  # 您的真实 AppID
  appSecret: 1234567890abcdef1234567890abcdef  # 您的真实 AppSecret
  proxyUrl: http://localhost:8789
```

**首次使用**:
1. 复制配置模板: `cp _config.example.yml _config.yml`
2. 编辑 `_config.yml` 填入真实配置
3. 运行安全检查: `node scripts/security-check.js`

## 📂 项目结构

```
niupTang/
├── source/              # 源文件目录
│   ├── _posts/         # 博客文章
│   ├── tools/          # AI 工具导航页
│   └── editor/         # 在线编辑器
├── themes/             # 主题目录
│   └── niuptang/       # 自定义主题
├── tools/              # 工具脚本
│   ├── publish-to-wechat.js      # 微信发布脚本
│   └── publish-api-server.js     # API 服务器
├── wechat-proxy/       # 微信代理服务
├── _config.yml         # Hexo 配置文件
└── package.json        # 项目依赖配置
```

## 🛠️ 技术栈

- **框架**: Hexo 8.1.1
- **主题引擎**: EJS + Stylus
- **Markdown 渲染**: hexo-renderer-marked
- **HTTP 服务**: Express 5.x
- **API 请求**: Axios
- **其他工具**: 
  - form-data - 表单数据处理
  - js-yaml - YAML 解析
  - cors - 跨域支持

## 📜 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 生成静态文件 |
| `npm run vercel-build` | Vercel 部署构建（自动生成配置） |
| `npm run deploy` | 部署博客 |
| `npm run publish` | 发布文章到微信公众号 |
| `npm run api` | 启动本地 API 代理服务 |
| `npm run sync-articles` | 同步微信公众号文章 |
| `npm run year-summary` | 生成年度总结 |
| `node scripts/security-check.js` | 运行安全检查 |
| `node fix-frontmatter.js` | 修复文章 Front Matter 格式 |

## 🔒 安全说明

本项目已配置完善的安全措施，保护敏感信息不被泄露：

- ✅ `_config.yml` 已在 `.gitignore` 中
- ✅ 提供 `_config.example.yml` 配置模板
- ✅ 自动安全检查脚本
- ✅ Vercel 环境变量支持

**部署前必读**: [VERCEL_DEPLOY_GUIDE.md](./VERCEL_DEPLOY_GUIDE.md)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request!

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 👤 作者

**太阳鸟**

- 博客: [太阳鸟的AI宝藏库](#)
- GitHub: [@niupTang](https://github.com/niupTang)

## 🙏 致谢

- [Hexo](https://hexo.io/) - 强大的静态博客框架
- 所有开源项目贡献者
- AI 工具开发者们

## 📮 联系方式

如有问题或建议,欢迎通过以下方式联系:

- 提交 [GitHub Issue](https://github.com/niupTang/niupTang/issues)
- 关注微信公众号: **太阳鸟的 AI宝藏库**

---

<div align="center">

**⭐ 如果这个项目对你有帮助,请给一个 Star! ⭐**

Made with ❤️ by 太阳鸟

</div>
