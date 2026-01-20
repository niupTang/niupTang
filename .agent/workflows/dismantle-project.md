---
description: 深度拆解 GitHub 开源项目源码，输出架构分析或技术文章
---

# GitHub 项目深度拆解工作流

此 Workflow 用于模拟资深技术专家对开源项目进行“外科手术式”的拆解分析。

## 1. 侦察阶段 (Reconnaissance)
- **目标确认**: 获取用户提供的 GitHub 仓库 URL。
- **依赖分析**: 
    - 检查 `package.json` (Node.js), `requirements.txt`/`pyproject.toml` (Python), `go.mod` (Go), `Cargo.toml` (Rust)。
    - **关键产出**: 确定项目是“套壳”还是“原生”，识别核心依赖库（如 `playwright`, `langchain`, `fastapi`）。

## 2. 核心架构分析 (Architecture Analysis)
- **寻找入口**: 定位 `main`, `index`, `app` 等入口文件。
- **关键机制解密**:
    - **鉴权 (Auth)**: 项目如何处理登录、Cookie、Token？（寻找 `auth`, `login`, `cookie` 关键字）
    - **交互 (Interaction)**: 项目如何与外部系统（如 Google, 微信, 数据库）交互？是逆向 API 还是浏览器自动化？
    - **对外接口 (Interface)**: 项目暴露了什么能力？（CLI 命令、MCP Tool 定义、API 路由）

## 3. 产出阶段 (Deliverable)
根据用户需求，生成以下内容之一：
- **技术调研报告**: 纯技术视角的架构文档。
- **拆解爆文**: 类似《如何从零拆解...》风格的技术博客，包含“反直觉发现”、“核心代码解析”和“架构图解”。

## 示例 Prompt
- "帮我拆解这个项目：https://github.com/xxx/xxx，我想知道它是怎么绕过 Cloudflare 的"
- "分析 https://github.com/xxx/xxx 的源码，写一篇技术拆解文章"
