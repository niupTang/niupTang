# 🚀 Vercel 部署快速参考

## 核心概念

**问题**: Hexo 需要 `_config.yml`，但它包含敏感信息不能上传到 GitHub  
**解决**: 使用环境变量 + 自动生成配置文件

## 📋 部署检查清单

### ✅ 提交前检查

```bash
# 运行安全检查
node scripts/security-check.js

# 确认 _config.yml 不在提交列表中
git status
```

### ✅ GitHub 提交

```bash
git add .
git commit -m "配置 Vercel 部署"
git push origin main
```

### ✅ Vercel 配置

**构建设置**:
- Build Command: `npm run vercel-build`
- Output Directory: `public`

**环境变量**:
| 变量名 | 从哪里获取 |
|--------|-----------|
| `WECHAT_APP_ID` | 本地 `_config.yml` 中的 `appId` |
| `WECHAT_APP_SECRET` | 本地 `_config.yml` 中的 `appSecret` |

## 🔄 工作流程

```
GitHub (无敏感信息)
    ↓
Vercel 检测到新提交
    ↓
运行 npm run vercel-build
    ↓
scripts/generate-config.js 执行
    ↓
从环境变量生成 _config.yml
    ↓
hexo generate 生成静态文件
    ↓
部署完成 ✅
```

## 🔒 安全保证

- ✅ `_config.yml` 在 `.gitignore` 中
- ✅ GitHub 上无敏感信息
- ✅ Vercel 环境变量加密存储
- ✅ 自动安全检查脚本

## 📚 详细文档

- [完整部署方案](./VERCEL_SOLUTION.md)
- [详细部署指南](./VERCEL_DEPLOY_GUIDE.md)
- [安全配置报告](./SECURITY_SETUP_REPORT.md)

---

**准备好了？开始部署！**

```bash
node scripts/security-check.js && git push origin main
```
