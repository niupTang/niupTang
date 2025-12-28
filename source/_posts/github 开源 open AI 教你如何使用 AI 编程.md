---
title: github 开�?open AI 教你如何使用 AI 编程
date: 2025-11-06 22:27:34
tags:
  - 公众�?
  - 原创
categories:
  - 公众号文�?
---

### **推荐阅读**
�?  [Github 资料项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247488210&idx=1&sn=9b97cc6da4bdaf42ba779d4d0d66f5a1&scene=21#wechat_redirect)

• [ ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect) [50�?AI 开源项目合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489466&idx=1&sn=656577c7880b921ed675c55ba12c1c09&scene=21#wechat_redirect)• [  ](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247485065&idx=1&sn=8b71c116b61add064e0892da63a7bf6d&scene=21#wechat_redirect)[80 款AI 开源合集](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489951&idx=1&sn=eb4684ba6062440ea2939bd2a9772fc0&scene=21#wechat_redirect)

* 戳上方蓝字�?*牛皮糖不吹牛**”关注我

大家好，我是牛皮糖！今天我公司的产品突然要求被用 AI 来做原型�?其实我有推荐过一款做原型�?AI 开源工具，[GitHub 开源设计师专属�?Cursor](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247490397&idx=2&sn=cabca5ba6b6e19b87cdcaf580ee80102&scene=21#wechat_redirect) �?

这款工具专门�?产品和程序员设计是准备的。当然这不是今天的主题，今天的主题是如何学会 AI 编程 ，今天在GitHub 看到�?open AI 开�?Aents.md 。�?

主要是说 AI 编程 Agent.md 文件如何写， 对于 Claude �?codex 这样的智能体来说初始化的 md 就是他们的衣食父母，就是他们的指导文件�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSzD3KepGaEAibPjjTwicRAia9q3qqcmiapZUiafoKicVmptPQey9DiaWUPdLIOibSiaPiaNicHlqJuXDXS9JlBw/640?wx_fmt=png&from=appmsg)

### 核心目标
open AI 提供一个简单、开放的格式（AGENTS.md），用于指导 AI 编码代理（coding agents），可以理解为是给代理看�?README，为其提供上下文和指令，帮助它们更好地处理项目�?

![](https://mmbiz.qpic.cn/mmbiz_png/p1ESIQQvfrSzD3KepGaEAibPjjTwicRAia9JfzTXK8ta0wfl2xdG4ibV1duczu4RMqQckSnF4UxWtqVkUDISDzP3Jw/640?wx_fmt=png&from=appmsg)

### 主要组成部分
- 1. **AGENTS.md 格式规范**

- �?定义了一种专门用于指�?AI 编码代理的文件格�?

- �?包含开发环境提示、测试指令、PR 规范等内�?

- �?提供了示例文件，展示如何编写 AGENTS.md（如开发环境命令、测试步骤、PR 标题格式等）

- 2. **Next.js 网站**

- �?位于仓库根目录，用于解释项目目标并展示示�?

- �?技术栈：Next.js 15.4.4、React 19.1.0、TypeScript、Tailwind CSS

- �?包含多个页面组件（Hero、AboutSection、ExamplesSection 等）和图标组�?

- 

- �?本地运行方式：`npm install   # 安装依赖
npm run dev   # 启动开发服务器`

- �?开发规范：

- �?优先使用 TypeScript�?tsx/.ts）编写新组件和工�?

- �?组件特定样式尽量与组件放在同一文件�?

- �?开发时使用 `npm run dev` 

- 

- 4. **示例展示**

- �?网站中展示了使用 AGENTS.md 的仓库示例（�?openai/codex、apache/airflow 等）

- �?提供�?AGENTS.md 文件的代码示例，展示其典型结构和内容

针对�?Agent 的结构其实就�?AI 编程的规范，想要更好的理�?AI 如何编程不是简单的�?AI 编程工具写一�?/init md �?

## 七大约束机制：规范质量的技术保�?
### 1. 抽象级别控制：防止过早实施细�?
**功能规格模板的明确指�?*�?

`- �?Focus on WHAT users need and WHY  
- �?Avoid HOW to implement (no tech stack, APIs, code structure)`这种约束迫使LLM保持适当的抽象级别。当LLM本能地思�?使用React和Redux实现"时，模板会将其重点拉回到"用户需要实时更新数�?上。这种分离确保即使实现技术发生变化，规范也能保持稳定�?

### 2. 不确定性标记：强制明确模糊�?
两种模板都要求使用`[NEEDS CLARIFICATION]`标记�?

`When creating this spec from a user prompt:
1. **Mark all ambiguities**: Use [NEEDS CLARIFICATION: specific question]
2. **Don't guess**: If the prompt doesn't specify something, mark it`这有效防止了LLM常见�?看似合理但错�?的假设行为。LLM不会猜测登录系统使用邮箱/密码验证，而是必须标记为`[NEEDS CLARIFICATION: auth method not specified - email/password, SSO, OAuth?]`�?

### 3. 清单驱动审查：结构化思考的单元测试
模板内置的完整性检查清单充当规范的"单元测试"�?

`### Requirement Completeness
- [ ] No [NEEDS CLARIFICATION] markers remain
- [ ] Requirements are testable and unambiguous  
- [ ] Success criteria are measurable`这些清单强制LLM进行系统性自我审查，发现那些容易被忽略的逻辑漏洞，为LLM提供了完整的质量保证框架�?

### 4. 合规关卡：架构纪律的强制执行
实施计划模板通过阶段关卡来强化架构原则：

`### Phase -1: Pre-Implementation Gates
#### Simplicity Gate (Article VII)
- [ ] Using �? projects?
- [ ] No future-proofing?

#### Anti-Abstraction Gate (Article VIII)  
- [ ] Using framework directly?
- [ ] Single model representation?`这些关卡通过要求LLM明确证明任何复杂性的合理性来防止过度设计。如果关卡失败，LLM必须�?复杂性追�?部分记录原因，实现架构决策的明确问责�?

### 5. 层次化细节管理：合理的信息架�?
模板确保信息的合理组织：

`**IMPORTANT**: This implementation plan should remain high-level and readable.
Any code samples, detailed algorithms, or extensive technical specifications  
must be placed in the appropriate `implementation-details/` file`这避免了规范变成难以阅读的代码转储。LLM学会保持适当的细节层次，将复杂部分提取到单独文件，同时保持主文档的可浏览性�?

### 6. 测试优先思维：质量内建的流程约束
实现模板强制推行测试驱动开发：

`### File Creation Order
1. Create `contracts/` with API specifications
2. Create test files in order: contract �?integration �?e2e �?unit  
3. Create source files to make tests pass`这种排序约束确保LLM在实施之前考虑可测试性和契约，从而产生更稳健、可验证的规范�?

### 7. 投机功能预防：需求追溯的严格实施
模板明确禁止猜测性功能：

`- [ ] No speculative or "might need" features
- [ ] All phases have clear prerequisites and deliverables`这防止LLM添加那些会使实现复杂化的"锦上添花"功能。每个功能都必须追溯到具体的、具有明确验收标准的用户故事�?

## 规则基础：架构纪律的DNA
SDD的核心在于其宪法——一套不可更改的原则，规范着规范到代码的转化过程。`memory/constitution.md`如同系统的架构DNA，确保每个生成的实现都保持一致性、简洁性和高质量�?

### 发展九条：塑造开发进程的根本法则
**第一条：库优先原�?* 每个功能都必须从独立库开始——没有例外：

`Every feature in Specify MUST begin its existence as a standalone library.
No feature shall be implemented directly within application code without
first being abstracted into a reusable library component.`这一原则确保规范生成的是模块化、可重用的代码，而不是单体应用�?

**第二条：CLI接口授权** 每个库都必须通过命令行界面暴露功能：

`All CLI interfaces MUST:
- Accept text as input (via stdin, arguments, or files)  
- Produce text as output (via stdout)
- Support JSON format for structured data exchange`这确保了可观察性和可测试性——功能不能隐藏在不透明的类中�?

**第三条：测试优先原则** 最具变革性的条款——测试前不编写代码：

`This is NON-NEGOTIABLE: All implementation MUST follow strict Test-Driven Development.
No implementation code shall be written before:
1. Unit tests are written
2. Tests are validated and approved by the user
3. Tests are confirmed to FAIL (Red phase)`这完全颠覆了传统的AI代码生成范式�?

**第七条和第八条：简洁性与反抽�?* 专门对抗过度设计�?

`Section 7.3: Minimal Project Structure
- Maximum 3 projects for initial implementation
- Additional projects require documented justification

Section 8.1: Framework Trust  
- Use framework features directly rather than wrapping them`当LLM本能地产生复杂抽象时，这些条款要求它为每一层复杂性提供合理解释�?

**第九条：集成优先测试** 优先真实环境测试而非孤立单元测试�?

`Tests MUST use realistic environments:
- Prefer real databases over mocks
- Use actual service instances over stubs  
- Contract tests mandatory before implementation`确保生成的代码在实践中而不仅仅是理论上能够运行�?

## 复合效应：从约束到质量的转化
这些约束机制共同作用，产生了显著的复合效应：

- •�?*完整�?*：清单确保无遗漏

- •�?*明确�?*：强制标记突出不确定�?

- •�?*可测试�?*：测试优先思维融入流程

- •�?*可维护�?*：适当的抽象层次和信息架构

- •�?*可执行�?*：明确的阶段和具体交付物

## 实践意义：AI辅助开发的成熟标志
这种约束驱动的规范生成代表了AI辅助开发的成熟化。它不再是简单的代码补全，而是**完整的软件工程方法论**的实现工具�?

对于开发者而言，这意味着�?

- 1. **需求稳定�?*：规范与技术栈解�?

- 2. **质量可预测�?*：通过约束确保输出一致�?

- 3. **架构一致�?*：宪法原则贯穿所有生成代�?

- 4. **维护可持续�?*：模块化设计和清晰边�?

## 约束即赋�?
在AI代码生成领域�?*适当的约束不是限制，而是赋能**。通过精心设计的约束模板和宪法原则，Spec Kit让LLM的创造力在正确的轨道上发挥，最终产出真正具备工业级质量的软件规范�?

这正是规范驱动开发的精髓�?*不是告诉AI如何编码，而是教会AI如何思考软件工�?*�?

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

·················END·················

AI 时代到来，要大公司变小，小公司消失。在当下最好发展一份属于自己的副业 [AI + 行业做副业](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 已经�?4000 名小伙伴加入了，如果你也想着�?AI 时代拥有一份属于自己的 AI 副业 [戳链接](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247491231&idx=2&sn=bd93a7254853228d4bf8b47cb8c010df&scene=21#wechat_redirect) 加入吧！这是一个赚钱训练营，AI 技能训练营密集的圈子，你可以每年参加各种副业赚钱训练营。公众号后台回复AI 副业星球即可获取26元优惠劵�?

 

![](https://mmbiz.qpic.cn/mmbiz_jpg/p1ESIQQvfrRZtBIbJCBg4nGyNgf5ltJzNx8KicPolicKxggSbwj7shkplcqEqRIAlLgBzlrQ8pla7sm9EUAzEnTA/640?wx_fmt=jpeg&from=appmsg)

**关于AI工具**

[Github开源文本转语音神器Spark-TTS开源了，克隆声音仅需3秒？](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489399&idx=1&sn=a760a00d1e7e36a2cfc74762b6e4d685&scene=21#wechat_redirect)

[github开源B站UP主都在用的下载神器！Cobalt让你轻松搬运高清素材！](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247489630&idx=1&sn=d8ce8eabdf418a67b4aa6cd2aaf093c8&scene=21#wechat_redirect)

[Github 26k Stars 开源换脸神器](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247486822&idx=1&sn=9a45d16ce51f161bff37a5982965ad05&scene=21#wechat_redirect)

[Github 开源无代码�?Web 数据提取平台�?分钟内训练机器人自动抓取网页数据](https://mp.weixin.qq.com/s?__biz=MzkyNDYyODg0MQ==&mid=2247487477&idx=1&sn=05c86cb5a688db02d134b04710f020e1&scene=21#wechat_redirect)