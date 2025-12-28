# 🚀 快速部署到 Vercel

## 一键检查清单

在推送到 GitHub 之前，运行安全检查：

```bash
node scripts/security-check.js
```

## 📝 部署步骤

### 1️⃣ 提交到 GitHub

```bash
# 查看状态
git status

# 添加文件（敏感文件会被自动排除）
git add .

# 提交
git commit -m "准备部署到 Vercel"

# 推送
git push origin main
```

### 2️⃣ 在 Vercel 中配置

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 **Add New Project**
3. 选择您的 GitHub 仓库
4. 配置项目：
   - **Framework Preset**: Other
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `public`
   - **Install Command**: `npm install`

### 3️⃣ 添加环境变量

在 Vercel 项目设置中添加：

**Settings → Environment Variables**

| 变量名 | 值 | 适用环境 |
|--------|-----|---------|
| `WECHAT_APP_ID` | `wx...` (您的真实 AppID) | Production, Preview, Development |
| `WECHAT_APP_SECRET` | `...` (您的真实 AppSecret) | Production, Preview, Development |

> ⚠️ **注意**: 由于 Vercel 不支持本地代理，微信图床功能会被自动禁用

### 4️⃣ 部署

点击 **Deploy** 按钮，等待构建完成。

## ✅ 验证部署

部署成功后：

1. 访问 Vercel 提供的 URL
2. 检查网站是否正常显示
3. 确认没有敏感信息泄露

## 🔧 本地开发

首次克隆项目后：

```bash
# 安装依赖
npm install

# 复制配置模板
cp _config.example.yml _config.yml

# 编辑 _config.yml，填入真实配置
# （此文件不会被提交到 Git）

# 启动开发服务器
npm run dev
```

## 🆘 常见问题

### Q: 部署失败，提示找不到 _config.yml？

**A**: 确保在 Vercel 的 Build Command 中使用了 `npm run vercel-build`

### Q: 如何更新环境变量？

**A**: 
1. 进入 Vercel 项目设置
2. Settings → Environment Variables
3. 编辑或添加变量
4. 重新部署项目

### Q: 微信图床在 Vercel 上不工作？

**A**: 这是正常的。Vercel 是静态托管，不支持本地代理。构建脚本会自动禁用微信图床功能。

## 📚 相关文档

- [详细部署指南](./VERCEL_DEPLOY_GUIDE.md)
- [安全检查说明](./scripts/security-check.js)
- [配置生成脚本](./scripts/generate-config.js)

---

**准备好了吗？运行安全检查开始部署！**

```bash
node scripts/security-check.js
```
