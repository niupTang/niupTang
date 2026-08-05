---
title: 深度解析 Skill Prompt Generator：基于 Claude Skill 的智能提示词生成系统
permalink: deep-dive-skill-prompt-generator
date: 2026-01-09 23:15:00
categories:
  - 开源项目
tags:
  - AI
  - Claude Skills
  - Prompt Engineering
  - Python
  - GitHub
  - Claude Code
cover: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
excerpt: 深入探索 Skill Prompt Generator，这是一个基于 Claude Skill 的智能提示词生成系统，拥有 12 个专业领域的 Skills 和自动学习能力，彻底改变我们生成 Prompt 的方式。
---

在 AI 创作领域，如何写出高质量的提示词（Prompt）一直是核心痛点。虽然市面上有许多 Prompt 生成工具，但大多数只是简单的模板拼接。今天，我们要深度解析 GitHub 上一个令人眼前一亮的项目 —— **Skill Prompt Generator**。

这是一个基于 Claude Skill 生态构建的 **AI 人像 Prompt 生成系统**，它不仅仅是一个 Python 脚本，更是一个具备“智能大脑”的完整 Skills 系统。

## 🎯 项目定位：不止于由于工具

[Skill Prompt Generator](https://github.com/huangserva/skill-prompt-generator) 的核心定位非常独特。它利用了 Claude Code 的 **Skills** 能力，将提示词生成变成了一种“专家咨询”模式。

- **Skills 优先**：用户不需要直接运行 Python 代码，而是通过 Claude Code 以自然语言调用 Skills。
- **智能路由**：系统内置了“大脑”，能自动识别你的需求领域（是人像、艺术、设计还是产品摄影），并调度对应的“专家 Skill”来服务。
- **专家矩阵**：内置了 12 个专业领域的 Skills，每个 Skill 都在特定领域经过调优。

## ✨ 核心特性解析

### 1. 强大的 Skills 系统
项目内置了 12 个专业 Skill，覆盖了主流创作场景：
- `intelligent-prompt-generator`: 智能总控与路由
- `portrait-master`: 人像摄影大师
- `design-master`: 平面设计专家
- `art-master`: 艺术风格大师
- `product-master`: 产品摄影专家
- `video-master`: 视频生成专家
- `universal-learner`: 通用学习者

这使得 Claude 就像拥有了一个“专家团”，当你通过 Claude Code 提问时，实际上是在咨询这些专家。

### 2. 🧠 真正的智能能力
与简单的关键词堆砌不同，该系统具备深度的语义理解能力：
- **语义理解**：能精准区分主体、风格和氛围。
- **常识推理**：例如，当你描述“生成一个斯堪的纳维亚风格的人像”时，它会自动推断出合理的人物特征（如发色、瞳色）和光影设置。
- **一致性检查**：自动检测生成的 Prompt 是否存在逻辑冲突（如“夜晚”与“自然强光”冲突），并自动修正。

### 3. 📦 双轨制生成系统
系统设计了两种生成模式，满足不同粒度的需求：
- **元素级生成**：基于底层的 Universal Elements Library（包含 1140+ 个元素），智能组合出独一无二的 Prompt。
- **模板级生成**：针对特定风格（如 Apple 风格 PPT、Bento Grid 海报），提供经过验证的完整设计系统模板。

### 4. 持续进化的学习系统
这是该项目最令人兴奋的功能之一。它不仅仅是输出，还能输入。通过 `universal-learner`，系统可以从新的优秀 Prompt 中提取元素，自动归类并评分，持续扩充其知识库。

## 🚀 如何开始使用

### 安装
推荐使用 Gilbert (Clone) 方式，这样 Claude Code 可以自动识别 `.claude/skills` 目录下的配置。

```bash
# 1. 克隆项目
git clone https://github.com/huangserva/skill-prompt-generator.git

# 2. 进入目录
cd skill-prompt-generator

# 3. 安装依赖
pip install -r requirements.txt
```

### 使用方式
安装完成后，在 Claude Code 中直接使用自然语言指令即可：

```text
# 人像摄影
"生成电影级的亚洲女性，张艺谋电影风格"

# 平面设计
"生成 Bento Grid 玻璃态海报"

# 艺术绘画
"生成中国水墨画山水"
```


Claude 会自动识别你的意图，调用 `portrait-master` 或 `design-master`，并基于庞大的数据库生成细节丰富的 Prompt。

## 实战演示：生成皮克斯风格猫咪

我们刚刚在本地环境实际测试了生成效果：

**输入指令**：
`生成一只皮克斯风格的可爱猫咪`

**输出 Prompt**：
> Pixar animation style, adorable fluffy kitten with big expressive eyes,
> soft rounded features and exaggerated proportions, playful and curious expression,
> vibrant colorful fur with subtle gradient shading, studio-quality 3D rendering,
> detailed fur texture with individual strands visible, cinematic lighting with
> soft shadows and rim lighting, Pixar character design aesthetic,
> emotionally engaging and heartwarming appearance, professional animation quality,
> cute anthropomorphic features, perfect for family-friendly content


可以看到，Claude Skills 自动扩充了大量细节，包括光影（cinematic lighting）、材质（detailed fur texture）和情感色彩（emotionally engaging）。

![皮克斯风格猫咪生成效果](/images/pixar-kitten-demo.png)



## 🛠️ 技术亮点

- **结构化数据库**：所有元素存储在 SQLite 中，支持复用性评分（1-10）。
- **模块化架构**：每个 Skill 独立工作但共享数据源，易于扩展。
- **框架驱动**：基于 `prompt_framework.yaml` 进行结构化生成，保证输出的 Prompt 格式规范且高质量。

## 结语

Skill Prompt Generator 展示了 **Claude Skills** 的真正潜力——它不仅仅是工具的集合，更是构建智能 Agent 的基石。通过将专业知识封装进 Skill，再利用 Claude 强大的语义路由能力，我们可以构建出极其强大且易用的 AI 辅助创作系统。

如果你是 AI 绘画爱好者或 Prompt 工程师，这个项目绝对值得一试，它也许会彻底改变你的工作流。

> **项目地址**: [https://github.com/huangserva/skill-prompt-generator](https://github.com/huangserva/skill-prompt-generator)
