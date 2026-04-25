# Venture-Ops

> 基于 Claude Code 构建的 AI 驱动融资运营工具。提供投资人筛选、融资路演更新、加速器申请和跟进节奏等技能模式。支持批量处理与 PDF 生成。

*灵感来自 [santifer/career-ops](https://github.com/santifer/career-ops) — 为正在融资的创始人量身定制。*

---

Venture-Ops 是为创始人打造的 AI 融资指挥中心：发现投资人、更新融资路演、起草申请材料、追踪融资管线，以及具备市场洞察的融资运营。

告别手忙脚乱地翻找旧版路演材料、散乱的投资人备注和千篇一律的申请——这套结构化系统能帮你：

- 找到真正适合你公司的投资人和项目
- 当路演材料、官网和产品出现偏差时，及时刷新你的故事
- 在创始人通话或合伙人会议前，提前发现内容缺口
- 准备更清晰的外联邮件、申请材料和跟进内容
- 建立持续运转的融资记忆库，而不是每周从头开始

> **重要提示：** Venture-Ops 不是向投资人群发垃圾邮件的机器人。它是一套精准打磨系统——帮助创始人选择更合适的目标、收紧叙事、准备更好的材料。最终决定发送什么的，永远是创始人自己。

## 30 秒演示

GitHub 会过滤掉 README 中的交互式 HTML，因此实时演示页面单独托管：

- [打开 30 秒实时演示](https://desperado.github.io/venture-ops/30-sec-demo.html)

演示展示了真实的创始人工作流：加载创业公司背景、扫描当前匹配的投资人、对照官网刷新路演材料、生成针对特定目标的路演变体，并基于追踪器工作而非散乱的笔记。

## 完整演示流程

你也可以直接在 README 中了解整个产品：

### 1. 加载创始人背景

![演示步骤 1：创始人背景](assets/readme/demo-step-1-context.png)

从创始人已有的文件开始：路演材料、官网、创始人背景、牵引力备注和融资简介。

### 2. 配置目标画像

![演示步骤 2：目标画像](assets/readme/demo-step-2-profile.png)

Venture-Ops 在任何外联行动开始之前，先将融资阶段、地理位置和行业类别框架转化为明确的筛选条件。

### 3. 扫描当前匹配的投资人

![演示步骤 3：投资人扫描](assets/readme/demo-step-3-scan.png)

扫描器不会给你一张宽泛的大名单，而是缩小范围，给出一份附带理由的精简候选名单。

### 4. 对照官网刷新路演材料

![演示步骤 4：刷新审计](assets/readme/demo-step-4-refresh.png)

刷新循环会揭示内容偏差、过时的说法，以及在发送材料前应当回答的创始人问题。

### 5. 生成针对特定目标的路演版本

![演示步骤 5：路演变体](assets/readme/demo-step-5-decks.png)

同一套公司故事，可以轻松针对 Crane、Episode 1、Point Nine 等机构进行局部调整，无需从头重新制作整份路演材料。

### 6. 基于追踪器开展工作

![演示步骤 6：追踪器工作流](assets/readme/demo-step-6-tracker.png)

最终状态是一套工作流：谁适合、下一步发送什么、这轮融资进展到哪里。

## 一览全貌

![Venture-Ops 概览](assets/readme/venture-ops-overview.png)

用大白话说：

1. 你把当前的路演材料、官网、创始人背景和目标告诉系统。
2. 它对比这些输入，找出哪些内容已过时或有缺漏，并核查哪些投资人真正匹配。
3. 针对故事仍薄弱的地方，它会提出有针对性的追问。
4. 它输出更新后的材料、排过优先级的目标清单，以及一条可执行的融资管线。

## 这个工具能做什么

Venture-Ops 将任何 AI 编程 CLI 变成创始人侧的融资操作系统。

专为以下创始人设计：

- 正在进行 Pre-Seed、Seed 或早期机构轮融资
- 申请加速器、创始人项目、工作室或政府补贴
- 希望保持路演材料的更新状态，而无需每月从头重写
- 想搞清楚哪些 VC 真正匹配，哪些是浪费时间
- 需要准备针对特定目标的申请回答和引荐简介
- 希望维护一套结构化的牵引力、证明点、风险和投资人异议记忆库

该系统具备自主代理能力：可以检查你的公开创业网站，与当前路演材料进行对比，识别哪些内容已过时，建议更有力的证据，并为下一次对话准备针对特定目标的材料。

## 你需要提供什么

即使是非技术背景的创始人，也可以把 Venture-Ops 想象成一位非常有条理的分析师。

你提供给它：

- 当前的路演材料
- 你的官网
- 创始人背景
- 牵引力备注
- 目标融资轮和地理范围
- 一份精选投资人名单，或几个起点 URL

## 你能获得什么

你会收到：

- 路演材料刷新审计报告
- 排过优先级的投资人精简候选名单
- 创始人待解答问题清单
- 针对特定目标的外联/申请草稿
- 标注了联系时间节点的跟进追踪器
- 帮助保持叙事更新的市场/新闻记忆库

## 真实案例（脱敏版）

以下是一个基于真实创始人路演材料和公司公开网站的脱敏案例。敏感数字、客户信息和内部描述均已用占位符替代。

![脱敏路演材料摄入示例](assets/readme/deck-intake-sanitized.png)

Venture-Ops 在该真实案例中的处理过程：

- 将当前路演材料提取为结构化备注
- 检查首页和创始人公开个人资料
- 发现路演材料与官网之间的叙事偏差
- 在发给投资人前标记尽职调查缺口
- 生成新的路演草稿和目标精简候选名单

## 实时 VC 搜索示例

这是一次真实实时搜索的可视化截图，搜索时间为 **2026 年 4 月 24 日**，目标是一家欧洲 Pre-Seed AI 测试/开发者基础设施公司。

![实时 VC 搜索截图](assets/readme/live-vc-summary.png)

这对非技术创始人意味着什么：

- 你不是从白纸开始
- 工具会把大范围缩小为一份附带理由的精简候选名单
- 在你给任何人写信之前，它就能给你"为什么选这家机构"的角度

## 官方网站截图

这些是 Venture-Ops 在该次实时搜索中实际访问的官方网站。

<table>
  <tr>
    <td align="center"><img src="assets/readme/crane-home.jpg" alt="Crane Venture Partners" width="100%"><br><sub>Crane Venture Partners</sub></td>
    <td align="center"><img src="assets/readme/point-nine-home.jpg" alt="Point Nine" width="100%"><br><sub>Point Nine</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/readme/seedcamp-home.jpg" alt="Seedcamp" width="100%"><br><sub>Seedcamp</sub></td>
    <td align="center"><img src="assets/readme/frontline-home.jpg" alt="Frontline Seed" width="100%"><br><sub>Frontline Seed</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/readme/playfair-home.jpg" alt="Playfair" width="100%"><br><sub>Playfair</sub></td>
    <td align="center"><img src="assets/readme/episode1-home.jpg" alt="Episode 1" width="100%"><br><sub>Episode 1</sub></td>
  </tr>
</table>

实时来源：

- [Crane Venture Partners](https://crane.vc/)
- [Point Nine](https://www.pointnine.com/)
- [Seedcamp](https://seedcamp.com/)
- [Frontline Seed](https://frontline.vc/frontline-seed/)
- [Playfair](https://playfair.vc/)
- [Episode 1](https://www.episode1.com/)

## 创始人实际需要做什么

如果你没有技术背景，工作流程非常简单：

1. 将你当前的故事填入 `startup.md`、`founder-bio.md` 和 `traction-digest.md`。
2. 在 `config/profile.yml` 中添加目标融资轮和地理范围。
3. 在 `investors.yml` 中添加投资人名称或 URL。
4. 让 AI 助手刷新路演材料、扫描投资人或对比目标。
5. 审阅生成的候选名单，回答后续问题。
6. 只发送最优质的申请和引荐信，而不是广撒网。

## 功能特性

| 功能 | 实际应用场景 |
|---------|---------------------------|
| **目标扫描器** | 找到与你的融资阶段、行业、地理位置和轮次匹配的投资人、加速器、天使投资人和创始人项目 |
| **匹配度评估** | 解释某个目标为何匹配或不匹配，而不是只给你一个名字 |
| **路演刷新** | 对比路演材料、官网、创始人输入和当前证明点，找出过时的说法和缺失的幻灯片 |
| **融资路演生成** | 起草 10-12 页叙事，并导出为 HTML/PDF |
| **创始人追问循环** | 当故事不完整或自相矛盾时，提出最有价值的问题 |
| **新闻/趋势记忆** | 在 `market-watch.md` 中追踪市场变化、相关事件和行业时机节点 |
| **管线追踪** | 对目标、状态和跟进时间节点维护单一事实来源 |
| **人在回路** | 起草和建议，但创始人始终掌握最终提交决策权 |

## 使用场景示例

### 1. 在投资人会议前刷新过时的路演材料

你现有：

- 几周前的 PDF 版路演材料
- 一个已持续演进的创业公司官网
- 未反映在叙事中的产品更新

使用 Venture-Ops：

- 对比路演材料与首页内容
- 标记缺失的指标、过时的产品范围和老旧的截图
- 提出有针对性的创始人问题
- 生成更新版 12 页路演草稿

### 2. 找到真正匹配的投资人，而非宽泛大名单

你是一位驻柏林的 Pre-Seed 创始人，正在构建开发者基础设施。

使用 Venture-Ops：

- 一次性配置目标画像
- 扫描精选投资人宇宙
- 按匹配度对目标排序
- 识别谁值得这周花时间，谁应该先跳过

### 3. 申请加速器，避免千篇一律的回答

你想申请 YC、EF、Antler 或其他创始人项目。

使用 Venture-Ops：

- 为每个项目量身定制公司故事
- 生成更有力的创始人简介和申请回答
- 指出路演材料中对"为什么是现在"解释不足的地方

### 4. 保持融资叙事的持续更新

市场变化很快。

使用 Venture-Ops：

- 监测当前趋势和相邻公司动态
- 更新 `market-watch.md`
- 在下次与投资人通话前捕捉"现在应该在路演材料中更新这点"的信号

## 快速开始

```bash
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops
npm install
npx playwright install chromium
npm run doctor
```

然后进行定制：

1. 编辑 `startup.md`，填入公司的核心事实来源。
2. 编辑 `founder-bio.md`，填入创始人背景和可信度证明。
3. 编辑 `traction-digest.md`，填入指标、客户案例和证明点。
4. 编辑 `market-watch.md`，填入趋势、竞争对手动态和时机节点。
5. 编辑 `config/profile.yml`，配置融资阶段、地理范围、轮次规模和投资人定向。
6. 编辑 `investors.yml`，添加你想追踪的基金、天使投资人、加速器、补贴或创始人项目。

如需刷新公开可视化内容：

```bash
npm run readme:assets
```

## 使用方式

### 本地命令

```bash
npm run doctor                  # initialize and verify setup
npm run scan -- --dry-run       # preview matching targets
npm run scan                    # append matches to data/pipeline.md
npm run verify                  # validate tracker/report integrity
npm run deck -- deck.html out.pdf
npm run followup                # surface follow-up candidates from tracker
```

### 在 AI 编程助手中使用

```text
/venture-ops                    -> show menu
/venture-ops scan               -> discover matching targets
/venture-ops evaluate {URL}     -> investor/accelerator fit report
/venture-ops deck {target}      -> tailored pitch deck package
/venture-ops refresh            -> audit deck + website + founder updates
/venture-ops news               -> trends/news monitoring and implications
/venture-ops apply {target}     -> application / outreach assistant
/venture-ops pipeline           -> process data/pipeline.md
/venture-ops tracker            -> status overview
/venture-ops followup           -> cadence and draft follow-ups
/venture-ops compare            -> rank multiple targets
/venture-ops deep               -> deep-dive one target
```

或者直接粘贴：

- 一个 VC 的 URL
- 一个加速器页面
- 你当前的路演材料
- 你的创业公司官网

然后让助手运行相关模式。

## 示例提示词

```text
Refresh my deck from this PDF and compare it against my website.

Find the top 10 VCs in Europe for a pre-seed developer-tools company.

Evaluate whether YC or EF is the stronger fit for us right now.

Turn this existing fundraising narrative into a tighter 12-slide deck.

Read my startup front page and tell me what an investor would still find unclear.

Update market-watch.md with the last 30 days of relevant category news.
```

## 工作原理

```text
Deck + website + founder memory + traction notes
                   │
                   ▼
        Refresh loop + fit scoring + trend monitoring
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
      Reports    Decks    Tracker
       .md      .pdf/.html  .md
```

关键要点：Venture-Ops 不只是"帮我写一份路演材料"。它是一套可复用的运营模型：

- 事实来源文件
- 基于模式的工作流
- 投资人扫描器
- 刷新循环
- 叙事记忆库
- 追踪器规范

## 核心文件

| 文件 | 用途 |
|------|---------|
| `startup.md` | 公司核心事实来源：问题、解决方案、市场、牵引力、路线图 |
| `founder-bio.md` | 创始人叙事、可信度、创始人与市场的匹配度 |
| `traction-digest.md` | 投资人材料的精简证明点记忆库 |
| `market-watch.md` | 当前趋势、新闻节点、竞争对手信号 |
| `config/profile.yml` | 融资简介、轮次、地理范围、行业、理想目标类型 |
| `investors.yml` | 用于扫描和匹配的精选目标宇宙 |
| `data/pipeline.md` | 待处理目标 |
| `data/targets.md` | 融资追踪器 |
| `reports/*` | 生成的评估报告、路演草稿和刷新审计 |
| `output/*` | 生成的幻灯片 HTML 和 PDF |

## 项目结构

```text
venture-ops/
├── startup.md
├── founder-bio.md
├── traction-digest.md
├── market-watch.md
├── config/profile.yml
├── investors.yml
├── modes/
├── templates/
├── data/
├── reports/
├── output/
└── assets/readme/
```

## 运营原则

这是一个过滤器，不是垃圾邮件机器。

少量高匹配度、高背景信息的投资人对话，远胜于大范围的陌生人外联。Venture-Ops 应该让创始人更精准，而不是更嘈杂。

它也应该随时间持续优化：

- 每次创始人的修正都会打磨画像
- 每个新指标都会改善路演材料
- 每个遗漏的问题都会成为未来检查清单的条目
- 每次市场变化都会更新叙事记忆库

## 免责声明

**Venture-Ops 是一套本地开源工作流，而非托管式融资平台。**

使用本工具即表示你确认：

1. **你掌控自己的数据。** 创始人信息、投资人备注、牵引力数据和融资材料均保留在你的本地设备上，除非你主动选择将其发送给 AI 服务提供商。
2. **你掌控提交行为。** 系统负责起草和建议，但不应代替你提交申请或发送外联邮件。
3. **你负责核实当前事实。** 投资人合伙人、截止日期、支票规模和项目条款会频繁变化；使用前应核实当前信息。
4. **不作任何保证。** 匹配度评分是建议，不是事实。投资人不是确定性系统。请运用自身判断力。

## 许可证

MIT
