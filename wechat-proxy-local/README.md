# 本地代理服务

## 说明

这是一个在本地运行的代理服务，用于转发微信公众号 API 请求。

**优点：**
- 不依赖 Cloudflare Workers
- 在本地运行，更可控
- 适合开发测试环境

## 使用方法

### 1. 安装依赖

```bash
cd scripts/wechat-proxy-local
npm install
```

### 2. 启动服务

```bash
npm start
```

### 3. 修改配置

在项目根目录的 `_config.yml` 中修改：

```yaml
wechat_image:
  enable: true
  appId: wx322ff120e757e1b0
  appSecret: 9025976bd848dcce82c94102374b1e9e
  proxyUrl: http://localhost:8787  # 使用本地代理
```

### 4. 测试

```bash
cd scripts/hexo-wechat-image
node test.js
```

## 注意事项

- 本地代理服务需要保持运行
- 只在开发环境使用
- 生产环境建议使用 Cloudflare Workers
