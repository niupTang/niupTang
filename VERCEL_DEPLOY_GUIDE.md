# 部署到 Vercel 安全指南

## 📋 概述

本指南将帮助您安全地将 Hexo 博客部署到 Vercel，同时保护敏感信息（如微信公众号的 `appId` 和 `appSecret`）不被泄露到 GitHub。

## 🔒 敏感信息保护策略

### 已保护的文件

以下文件已在 `.gitignore` 中，**不会**上传到 GitHub：

- `_config.yml` - 主配置文件（包含敏感信息）
- `upload-annual-summary.js` - 包含硬编码的 appSecret
- `test-upload.js` - 包含硬编码的 appSecret
- `wechat-articles.json` - 微信文章数据
- `2025-stats.json` - 统计数据

### 公开的文件

- `_config.example.yml` - 配置模板（不包含真实密钥）

## 🚀 Vercel 部署步骤

### 1. 检查 Git 状态

在推送到 GitHub 之前，确认敏感文件未被追踪：

```bash
# 查看将要提交的文件
git status

# 如果 _config.yml 出现在列表中，执行：
git rm --cached _config.yml
```

### 2. 在 Vercel 中配置环境变量

登录 Vercel 后，在项目设置中添加以下环境变量：

**Settings → Environment Variables**

| 变量名 | 值 | 环境 |
|--------|-----|------|
| `WECHAT_APP_ID` | 您的微信 AppID | Production, Preview, Development |
| `WECHAT_APP_SECRET` | 您的微信 AppSecret | Production, Preview, Development |
| `WECHAT_PROXY_URL` | `http://localhost:8789` | Production, Preview, Development |

> ⚠️ **重要**: 不要在代码中硬编码这些值！

### 3. 修改配置读取方式

为了让 Hexo 在 Vercel 上能读取环境变量，需要修改 `_config.yml`：

**方案 A: 使用环境变量（推荐）**

在 Vercel 部署时，Hexo 会自动读取环境变量。但由于 `_config.yml` 不会上传到 GitHub，您需要：

1. 在 Vercel 项目设置中添加 **Build Command**:
   ```bash
   npm run build
   ```

2. 创建一个构建脚本来生成配置文件：

```bash
# 在 package.json 中添加
"scripts": {
  "vercel-build": "node scripts/generate-config.js && hexo generate"
}
```

**方案 B: 使用 _config.example.yml（简单）**

1. 将 `_config.example.yml` 重命名为 `_config.vercel.yml`
2. 在 Vercel 的 Build Command 中：
   ```bash
   cp _config.vercel.yml _config.yml && hexo generate
   ```

### 4. 推送到 GitHub

```bash
# 添加所有文件（敏感文件会被 .gitignore 自动排除）
git add .

# 提交
git commit -m "准备部署到 Vercel"

# 推送到 GitHub
git push origin main
```

### 5. 在 Vercel 中导入项目

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **Add New Project**
3. 选择您的 GitHub 仓库
4. 配置构建设置：
   - **Framework Preset**: Other
   - **Build Command**: `npm run build` 或 `hexo generate`
   - **Output Directory**: `public`
5. 添加环境变量（见步骤 2）
6. 点击 **Deploy**

## 🔧 本地开发配置

### 首次克隆项目后

```bash
# 1. 安装依赖
npm install

# 2. 复制配置模板
cp _config.example.yml _config.yml

# 3. 编辑 _config.yml，填入真实的 appId 和 appSecret
# （这个文件不会被提交到 Git）

# 4. 启动开发服务器
npm run dev
```

## 📝 配置文件说明

### _config.yml（本地使用，不提交）

```yaml
wechat_image:
  enable: true
  appId: wx1234567890abcdef  # 真实的 AppID
  appSecret: 1234567890abcdef1234567890abcdef  # 真实的 AppSecret
  proxyUrl: http://localhost:8789
```

### _config.example.yml（提交到 Git）

```yaml
wechat_image:
  enable: true
  appId: YOUR_APP_ID_HERE  # 占位符
  appSecret: YOUR_APP_SECRET_HERE  # 占位符
  proxyUrl: http://localhost:8789
```

## ⚠️ 安全检查清单

在推送到 GitHub 之前，请确认：

- [ ] `_config.yml` 在 `.gitignore` 中
- [ ] `upload-annual-summary.js` 在 `.gitignore` 中
- [ ] `test-upload.js` 在 `.gitignore` 中
- [ ] 运行 `git status` 确认敏感文件未被追踪
- [ ] `_config.example.yml` 中没有真实密钥
- [ ] 已在 Vercel 中配置环境变量

## 🔍 检查是否泄露

如果不小心提交了敏感信息：

```bash
# 查看 Git 历史
git log --all --full-history -- _config.yml

# 如果发现敏感信息，需要清理历史记录
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch _config.yml" \
  --prune-empty --tag-name-filter cat -- --all

# 强制推送（谨慎使用）
git push origin --force --all
```

## 🆘 常见问题

### Q: Vercel 部署失败，提示找不到 _config.yml？

**A**: 在 Vercel 的 Build Command 中添加配置文件生成步骤：
```bash
cp _config.example.yml _config.yml && hexo generate
```

### Q: 微信图床功能在 Vercel 上不工作？

**A**: 微信图床需要本地代理，Vercel 上无法使用。建议：
1. 在 `_config.example.yml` 中设置 `enable: false`
2. 或使用其他图床服务（如七牛云、阿里云 OSS）

### Q: 如何在 Vercel 上使用环境变量？

**A**: 需要创建一个脚本在构建时读取环境变量并生成配置文件。参考上面的"方案 A"。

## 📚 相关文档

- [Vercel 环境变量文档](https://vercel.com/docs/concepts/projects/environment-variables)
- [Hexo 配置文档](https://hexo.io/docs/configuration)
- [Git .gitignore 文档](https://git-scm.com/docs/gitignore)

## 🎉 完成

按照以上步骤，您的敏感信息将得到妥善保护，可以安全地部署到 Vercel！
