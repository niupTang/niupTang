# 敏感配置保护指南

## ⚠️ 重要提醒

你的项目包含敏感信息（微信公众号 AppID 和 AppSecret），这些信息**不应该**上传到 GitHub。

## 📋 已保护的文件

以下文件已添加到 `.gitignore`，不会被上传到 GitHub：

### 配置文件
- `_config.yml` - Hexo 主配置文件（包含 AppID 和 AppSecret）
- `upload-annual-summary.js` - 上传脚本
- `test-upload.js` - 测试脚本

### 数据文件
- `wechat-articles.json` - 文章数据
- `wechat-articles-from-html.json` - HTML 提取的文章数据
- `publish_page.json` - 发布页面数据
- `wechat-output.html` - 微信输出
- `html/*.html` - HTML 响应文件
- `2025-stats.json` - 统计数据
- `source/2025-stats.json` - 源目录统计数据

## 🔧 配置步骤

### 1. 复制配置模板

```bash
cp _config.example.yml _config.yml
```

### 2. 填写你的配置

编辑 `_config.yml`，将以下内容替换为你的实际配置：

```yaml
wechat_image:
  enable: true
  appId: YOUR_APP_ID_HERE      # 替换为你的 AppID
  appSecret: YOUR_APP_SECRET_HERE  # 替换为你的 AppSecret
  proxyUrl: http://localhost:8789
```

### 3. 验证配置

确保 `_config.yml` 不在 Git 追踪中：

```bash
git status
```

如果看到 `_config.yml` 在待提交列表中，执行：

```bash
git rm --cached _config.yml
```

## 🚨 如果已经上传到 GitHub

如果你的敏感信息已经上传到 GitHub，需要：

1. **立即更换密钥**：
   - 登录微信公众平台
   - 重新生成 AppSecret
   - 更新本地 `_config.yml`

2. **清理 Git 历史**（可选）：
   ```bash
   # 从历史记录中删除敏感文件
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch _config.yml" \
     --prune-empty --tag-name-filter cat -- --all
   
   # 强制推送
   git push origin --force --all
   ```

3. **使用 GitHub Secrets**（推荐）：
   - 在 GitHub 仓库设置中添加 Secrets
   - 在 CI/CD 中使用环境变量

## 📝 最佳实践

1. **永远不要**将敏感信息硬编码在代码中
2. **使用环境变量**或配置文件管理敏感信息
3. **定期检查** `.gitignore` 是否正确配置
4. **提交前检查** `git status` 确保没有敏感文件

## 🔗 相关文件

- [.gitignore](file:///e:/GitHub/niupTang/.gitignore) - Git 忽略规则
- [_config.example.yml](file:///e:/GitHub/niupTang/_config.example.yml) - 配置模板
- [_config.yml](file:///e:/GitHub/niupTang/_config.yml) - 实际配置（不上传）
