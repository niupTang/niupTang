# Cloudflare Workers 代理服务部署指南

## 🎯 当前状态

✅ Wrangler CLI 已安装
🔄 正在等待浏览器 OAuth 登录完成

---

## 📋 完整部署流程

### 步骤 1: 登录 Cloudflare（进行中）

**当前操作：**
- Wrangler 已打开浏览器登录页面
- URL: https://dash.cloudflare.com/oauth/...

**请在浏览器中完成：**
1. 如果未登录，输入 Cloudflare 账号密码
2. 点击 **Allow** 授权 Wrangler
3. 看到 "Success!" 后关闭浏览器标签
4. 返回终端查看登录结果

**预期输出：**
```
✅ Successfully logged in.
```

---

### 步骤 2: 部署 Workers

登录成功后，运行以下命令：

```bash
cd scripts/wechat-proxy
wrangler deploy
```

**预期输出：**
```
 ⛅️ wrangler 4.56.0
-------------------
Total Upload: xx.xx KiB / gzip: xx.xx KiB
Uploaded wechat-api-proxy (x.xx sec)
Published wechat-api-proxy (x.xx sec)
  https://wechat-api-proxy.your-subdomain.workers.dev
Current Deployment ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**重要：** 复制输出中的 URL，格式类似：
```
https://wechat-api-proxy.your-subdomain.workers.dev
```

---

### 步骤 3: 配置 Hexo

将获得的 Workers URL 填入配置文件。

**方式一：复制示例配置到 _config.yml**

```bash
# 在项目根目录
cat scripts/hexo-wechat-image/_config.example.yml >> _config.yml
```

然后编辑 `_config.yml`，修改 `proxyUrl`：

```yaml
wechat_image:
  enable: true
  appId: wx322ff120e757e1b0
  appSecret: 9025976bd848dcce82c94102374b1e9e
  proxyUrl: https://wechat-api-proxy.your-subdomain.workers.dev  # 替换为你的 URL
```

**方式二：手动添加**

在 `_config.yml` 末尾添加上述配置。

---

### 步骤 4: 配置 IP 白名单

1. 访问 https://www.whatismyip.com/ 获取你的公网 IP
2. 登录微信公众号后台：https://mp.weixin.qq.com
3. 进入：**设置与开发** > **基本配置**
4. 找到 **IP白名单**，点击 **修改**
5. 添加你的 IP 地址
6. 保存后等待约 **10 分钟**生效

---

### 步骤 5: 测试配置

```bash
cd scripts/hexo-wechat-image
node test.js
```

**预期输出：**
```
开始测试微信图片上传...

测试 1: 获取 access_token
✓ Access Token: 67_xxxxxxxxxxxxx...

✓ 所有测试通过！
```

---

## 🔧 故障排查

### 问题 1: wrangler login 卡住

**解决方法：**
```bash
# 按 Ctrl+C 取消
# 手动打开浏览器访问：
https://dash.cloudflare.com/profile/api-tokens

# 创建 API Token，然后：
wrangler login --api-token YOUR_TOKEN
```

### 问题 2: 部署失败

**检查：**
- 是否已登录 Cloudflare
- 是否有免费 Workers 额度（每天 100,000 次请求）

**解决：**
```bash
# 查看登录状态
wrangler whoami

# 重新登录
wrangler logout
wrangler login
```

### 问题 3: 测试失败 - access_token 错误

**原因：**
- IP 白名单未配置或未生效
- AppID 或 AppSecret 错误

**解决：**
1. 检查 IP 白名单是否添加
2. 等待 10 分钟后重试
3. 验证 AppID 和 AppSecret 是否正确

---

## 📊 部署检查清单

- [ ] Wrangler CLI 已安装
- [ ] 已登录 Cloudflare
- [ ] Workers 已部署
- [ ] 获得代理 URL
- [ ] 配置已添加到 _config.yml
- [ ] IP 白名单已配置
- [ ] 测试通过

---

## 🎉 下一步

部署完成后，你就可以：

1. 在文章中使用本地图片
2. 运行 `hexo generate`
3. 图片自动上传到微信素材库
4. 自动替换为微信 CDN 链接

**示例：**
```markdown
![测试图片](/images/test.png)
```

生成后自动变为：
```markdown
![测试图片](https://mmbiz.qpic.cn/mmbiz_png/xxxxx)
```
