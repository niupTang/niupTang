# 🚀 Vercel 部署完整方案

## 问题说明

Hexo 需要 `_config.yml` 才能运行，但这个文件包含敏感信息（`appId` 和 `appSecret`），不能直接上传到 GitHub。

## ✅ 解决方案

### 方案：自动配置生成

**工作原理：**
- 📁 GitHub 仓库：只包含 `_config.example.yml`（模板，无敏感信息）
- 🔧 Vercel 构建时：自动从环境变量生成 `_config.yml`
- 🔒 敏感信息：存储在 Vercel 环境变量中

## 📝 完整部署步骤

### 步骤 1: 提交代码到 GitHub

```bash
# 1. 确认安全配置
node scripts/security-check.js

# 2. 添加所有文件（_config.yml 会被自动排除）
git add .

# 3. 提交
git commit -m "配置 Vercel 部署"

# 4. 推送到 GitHub
git push origin main
```

**✅ 检查点：**
- `_config.yml` 不应该出现在提交列表中
- `_config.example.yml` 应该被包含

### 步骤 2: 在 Vercel 中导入项目

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **Add New Project**
3. 选择您的 GitHub 仓库 `niupTang`
4. 点击 **Import**

### 步骤 3: 配置构建设置

在项目设置页面：

**Framework Preset**: `Other`

**Build & Development Settings**:
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `public`
- **Install Command**: `npm install`

### 步骤 4: 添加环境变量

点击 **Environment Variables** 标签，添加以下变量：

| Name | Value | Environments |
|------|-------|--------------|
| `WECHAT_APP_ID` | `wx...`（您的真实 AppID） | ✅ Production<br>✅ Preview<br>✅ Development |
| `WECHAT_APP_SECRET` | `...`（您的真实 AppSecret） | ✅ Production<br>✅ Preview<br>✅ Development |

**如何获取这些值？**
- 打开本地的 `_config.yml` 文件
- 复制 `appId` 和 `appSecret` 的值
- 粘贴到 Vercel 环境变量中

### 步骤 5: 部署

点击 **Deploy** 按钮，等待构建完成。

## 🔍 构建过程说明

当 Vercel 构建时，会执行以下步骤：

```
1. npm install
   ↓
2. npm run vercel-build
   ↓
3. node scripts/generate-config.js
   ├─ 检测到 Vercel 环境
   ├─ 读取 _config.example.yml
   ├─ 从环境变量获取 WECHAT_APP_ID 和 WECHAT_APP_SECRET
   ├─ 替换模板中的占位符
   ├─ 禁用微信图床（Vercel 不支持本地代理）
   └─ 生成 _config.yml
   ↓
4. hexo generate
   ↓
5. 部署到 Vercel
```

## ✅ 验证部署

部署成功后：

1. 访问 Vercel 提供的 URL
2. 检查网站是否正常显示
3. 查看构建日志，确认配置文件已生成

## 🔧 本地开发

其他开发者克隆项目后：

```bash
# 1. 安装依赖
npm install

# 2. 运行配置生成（会自动从模板创建 _config.yml）
node scripts/generate-config.js

# 3. 编辑 _config.yml 填入真实配置
# （此文件不会被提交到 Git）

# 4. 启动开发服务器
npm run dev
```

## 🆘 常见问题

### Q1: 部署失败，提示 "Config file not found"？

**检查：**
1. Build Command 是否设置为 `npm run vercel-build`
2. 环境变量是否正确配置
3. 查看构建日志中的错误信息

### Q2: 环境变量配置后还是失败？

**解决：**
1. 确认环境变量名称完全匹配：`WECHAT_APP_ID` 和 `WECHAT_APP_SECRET`
2. 确认所有环境（Production, Preview, Development）都已勾选
3. 重新部署项目

### Q3: 如何更新环境变量？

1. 进入 Vercel 项目设置
2. Settings → Environment Variables
3. 点击变量右侧的 **Edit**
4. 修改后点击 **Save**
5. 重新部署项目（Deployments → 最新部署 → Redeploy）

### Q4: 微信图床功能不工作？

这是正常的。Vercel 是静态托管，不支持本地代理。构建脚本会自动禁用微信图床功能。

**替代方案：**
- 使用其他图床服务（七牛云、阿里云 OSS、Cloudinary）
- 或在本地生成静态文件后手动上传

## 📊 安全性说明

✅ **安全措施：**
- `_config.yml` 在 `.gitignore` 中，不会被提交
- 敏感信息存储在 Vercel 环境变量中（加密存储）
- GitHub 仓库中只有配置模板，无真实密钥
- 自动安全检查脚本防止意外泄露

✅ **谁能看到敏感信息？**
- 只有 Vercel 项目的管理员
- 环境变量在构建日志中不会显示
- GitHub 上的代码不包含任何敏感信息

## 🎉 完成

按照以上步骤，您的项目将：
- ✅ 安全地部署到 Vercel
- ✅ 敏感信息得到保护
- ✅ 可以正常运行

---

**需要帮助？** 查看详细文档：
- [VERCEL_DEPLOY_GUIDE.md](./VERCEL_DEPLOY_GUIDE.md)
- [SECURITY_SETUP_REPORT.md](./SECURITY_SETUP_REPORT.md)
