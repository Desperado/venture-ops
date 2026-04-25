# Venture-Ops

> 基於 Claude Code 構建的 AI 驅動融資運營工具。提供投資人篩選、融資路演更新、加速器申請和跟進節奏等技能模式。支援批次處理與 PDF 生成。

*靈感來自 [santifer/career-ops](https://github.com/santifer/career-ops) — 為正在融資的創辦人量身打造。*

---

Venture-Ops 是為創辦人打造的 AI 融資指揮中心：發現投資人、更新融資路演、起草申請材料、追蹤融資管線，以及具備市場洞察的融資運營。

告別手忙腳亂地翻找舊版路演材料、散亂的投資人備注和千篇一律的申請——這套結構化系統能幫你：

- 找到真正適合你公司的投資人和計畫
- 當路演材料、官網和產品出現偏差時，及時刷新你的故事
- 在創辦人通話或合夥人會議前，提前發現內容缺口
- 準備更清晰的外聯郵件、申請材料和跟進內容
- 建立持續運轉的融資記憶庫，而不是每週從頭開始

> **重要提示：** Venture-Ops 不是向投資人群發垃圾郵件的機器人。它是一套精準打磨系統——幫助創辦人選擇更合適的目標、收緊敘事、準備更好的材料。最終決定發送什麼的，永遠是創辦人自己。

## 30 秒演示

GitHub 會過濾掉 README 中的互動式 HTML，因此實時演示頁面單獨託管：

- [開啟 30 秒實時演示](https://desperado.github.io/venture-ops/30-sec-demo.html)

演示展示了真實的創辦人工作流程：載入創業公司背景、掃描當前匹配的投資人、對照官網刷新路演材料、生成針對特定目標的路演變體，並基於追蹤器工作而非散亂的筆記。

## 完整演示流程

你也可以直接在 README 中了解整個產品：

### 1. 載入創辦人背景

![演示步驟 1：創辦人背景](assets/readme/demo-step-1-context.png)

從創辦人已有的檔案開始：路演材料、官網、創辦人背景、牽引力備注和融資簡介。

### 2. 配置目標畫像

![演示步驟 2：目標畫像](assets/readme/demo-step-2-profile.png)

Venture-Ops 在任何外聯行動開始之前，先將融資階段、地理位置和行業類別框架轉化為明確的篩選條件。

### 3. 掃描當前匹配的投資人

![演示步驟 3：投資人掃描](assets/readme/demo-step-3-scan.png)

掃描器不會給你一張寬泛的大名單，而是縮小範圍，給出一份附帶理由的精簡候選名單。

### 4. 對照官網刷新路演材料

![演示步驟 4：刷新稽核](assets/readme/demo-step-4-refresh.png)

刷新循環會揭示內容偏差、過時的說法，以及在發送材料前應當回答的創辦人問題。

### 5. 生成針對特定目標的路演版本

![演示步驟 5：路演變體](assets/readme/demo-step-5-decks.png)

同一套公司故事，可以輕鬆針對 Crane、Episode 1、Point Nine 等機構進行局部調整，無需從頭重新製作整份路演材料。

### 6. 基於追蹤器開展工作

![演示步驟 6：追蹤器工作流程](assets/readme/demo-step-6-tracker.png)

最終狀態是一套工作流程：誰適合、下一步發送什麼、這輪融資進展到哪裡。

## 一覽全貌

![Venture-Ops 概覽](assets/readme/venture-ops-overview.png)

用白話說：

1. 你把當前的路演材料、官網、創辦人背景和目標告訴系統。
2. 它對比這些輸入，找出哪些內容已過時或有缺漏，並核查哪些投資人真正匹配。
3. 針對故事仍薄弱的地方，它會提出有針對性的追問。
4. 它輸出更新後的材料、排過優先順序的目標清單，以及一條可執行的融資管線。

## 這個工具能做什麼

Venture-Ops 將任何 AI 程式設計 CLI 變成創辦人側的融資作業系統。

專為以下創辦人設計：

- 正在進行 Pre-Seed、Seed 或早期機構輪融資
- 申請加速器、創辦人計畫、工作室或政府補助
- 希望保持路演材料的更新狀態，而無需每月從頭重寫
- 想搞清楚哪些 VC 真正匹配，哪些是浪費時間
- 需要準備針對特定目標的申請回答和引薦簡介
- 希望維護一套結構化的牽引力、證明點、風險和投資人異議記憶庫

該系統具備自主代理能力：可以檢查你的公開創業網站，與當前路演材料進行對比，識別哪些內容已過時，建議更有力的證據，並為下一次對話準備針對特定目標的材料。

## 你需要提供什麼

即使是非技術背景的創辦人，也可以把 Venture-Ops 想像成一位非常有條理的分析師。

你提供給它：

- 當前的路演材料
- 你的官網
- 創辦人背景
- 牽引力備注
- 目標融資輪和地理範圍
- 一份精選投資人名單，或幾個起點 URL

## 你能獲得什麼

你會收到：

- 路演材料刷新稽核報告
- 排過優先順序的投資人精簡候選名單
- 創辦人待解答問題清單
- 針對特定目標的外聯/申請草稿
- 標注了聯繫時間節點的跟進追蹤器
- 幫助保持敘事更新的市場/新聞記憶庫

## 真實案例（去識別化版本）

以下是一個基於真實創辦人路演材料和公司公開網站的去識別化案例。敏感數字、客戶資訊和內部描述均已用占位符替代。

![去識別化路演材料攝入示例](assets/readme/deck-intake-sanitized.png)

Venture-Ops 在該真實案例中的處理過程：

- 將當前路演材料提取為結構化備注
- 檢查首頁和創辦人公開個人資料
- 發現路演材料與官網之間的敘事偏差
- 在發給投資人前標記盡職調查缺口
- 生成新的路演草稿和目標精簡候選名單

## 實時 VC 搜尋示例

這是一次真實實時搜尋的可視化截圖，搜尋時間為 **2026 年 4 月 24 日**，目標是一家歐洲 Pre-Seed AI 測試/開發者基礎設施公司。

![實時 VC 搜尋截圖](assets/readme/live-vc-summary.png)

這對非技術創辦人意味著什麼：

- 你不是從白紙開始
- 工具會把大範圍縮小為一份附帶理由的精簡候選名單
- 在你給任何人寫信之前，它就能給你「為什麼選這家機構」的角度

## 官方網站截圖

這些是 Venture-Ops 在該次實時搜尋中實際訪問的官方網站。

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

實時來源：

- [Crane Venture Partners](https://crane.vc/)
- [Point Nine](https://www.pointnine.com/)
- [Seedcamp](https://seedcamp.com/)
- [Frontline Seed](https://frontline.vc/frontline-seed/)
- [Playfair](https://playfair.vc/)
- [Episode 1](https://www.episode1.com/)

## 創辦人實際需要做什麼

如果你沒有技術背景，工作流程非常簡單：

1. 將你當前的故事填入 `startup.md`、`founder-bio.md` 和 `traction-digest.md`。
2. 在 `config/profile.yml` 中添加目標融資輪和地理範圍。
3. 在 `investors.yml` 中添加投資人名稱或 URL。
4. 讓 AI 助手刷新路演材料、掃描投資人或對比目標。
5. 審閱生成的候選名單，回答後續問題。
6. 只發送最優質的申請和引薦信，而不是廣撒網。

## 功能特性

| 功能 | 實際應用場景 |
|---------|---------------------------|
| **目標掃描器** | 找到與你的融資階段、行業、地理位置和輪次匹配的投資人、加速器、天使投資人和創辦人計畫 |
| **匹配度評估** | 解釋某個目標為何匹配或不匹配，而不是只給你一個名字 |
| **路演刷新** | 對比路演材料、官網、創辦人輸入和當前證明點，找出過時的說法和缺失的投影片 |
| **融資路演生成** | 起草 10-12 頁敘事，並匯出為 HTML/PDF |
| **創辦人追問循環** | 當故事不完整或自相矛盾時，提出最有價值的問題 |
| **新聞/趨勢記憶** | 在 `market-watch.md` 中追蹤市場變化、相關事件和行業時機節點 |
| **管線追蹤** | 對目標、狀態和跟進時間節點維護單一事實來源 |
| **人在回路** | 起草和建議，但創辦人始終掌握最終提交決策權 |

## 使用場景示例

### 1. 在投資人會議前刷新過時的路演材料

你現有：

- 幾週前的 PDF 版路演材料
- 一個已持續演進的創業公司官網
- 未反映在敘事中的產品更新

使用 Venture-Ops：

- 對比路演材料與首頁內容
- 標記缺失的指標、過時的產品範圍和老舊的截圖
- 提出有針對性的創辦人問題
- 生成更新版 12 頁路演草稿

### 2. 找到真正匹配的投資人，而非寬泛大名單

你是一位駐柏林的 Pre-Seed 創辦人，正在構建開發者基礎設施。

使用 Venture-Ops：

- 一次性配置目標畫像
- 掃描精選投資人宇宙
- 按匹配度對目標排序
- 識別誰值得這週花時間，誰應該先略過

### 3. 申請加速器，避免千篇一律的回答

你想申請 YC、EF、Antler 或其他創辦人計畫。

使用 Venture-Ops：

- 為每個計畫量身定制公司故事
- 生成更有力的創辦人簡介和申請回答
- 指出路演材料中對「為什麼是現在」解釋不足的地方

### 4. 保持融資敘事的持續更新

市場變化很快。

使用 Venture-Ops：

- 監測當前趨勢和相鄰公司動態
- 更新 `market-watch.md`
- 在下次與投資人通話前捕捉「現在應該在路演材料中更新這點」的信號

## 快速開始

```bash
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops
npm install
npx playwright install chromium
npm run doctor
```

然後進行定制：

1. 編輯 `startup.md`，填入公司的核心事實來源。
2. 編輯 `founder-bio.md`，填入創辦人背景和可信度證明。
3. 編輯 `traction-digest.md`，填入指標、客戶案例和證明點。
4. 編輯 `market-watch.md`，填入趨勢、競爭對手動態和時機節點。
5. 編輯 `config/profile.yml`，配置融資階段、地理範圍、輪次規模和投資人定向。
6. 編輯 `investors.yml`，添加你想追蹤的基金、天使投資人、加速器、補助或創辦人計畫。

如需刷新公開可視化內容：

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

### 在 AI 程式設計助手中使用

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

或者直接貼上：

- 一個 VC 的 URL
- 一個加速器頁面
- 你當前的路演材料
- 你的創業公司官網

然後讓助手執行相關模式。

## 示例提示詞

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

關鍵要點：Venture-Ops 不只是「幫我寫一份路演材料」。它是一套可復用的運營模型：

- 事實來源檔案
- 基於模式的工作流程
- 投資人掃描器
- 刷新循環
- 敘事記憶庫
- 追蹤器規範

## 核心檔案

| 檔案 | 用途 |
|------|---------|
| `startup.md` | 公司核心事實來源：問題、解決方案、市場、牽引力、路線圖 |
| `founder-bio.md` | 創辦人敘事、可信度、創辦人與市場的匹配度 |
| `traction-digest.md` | 投資人材料的精簡證明點記憶庫 |
| `market-watch.md` | 當前趨勢、新聞節點、競爭對手信號 |
| `config/profile.yml` | 融資簡介、輪次、地理範圍、行業、理想目標類型 |
| `investors.yml` | 用於掃描和匹配的精選目標宇宙 |
| `data/pipeline.md` | 待處理目標 |
| `data/targets.md` | 融資追蹤器 |
| `reports/*` | 生成的評估報告、路演草稿和刷新稽核 |
| `output/*` | 生成的投影片 HTML 和 PDF |

## 專案結構

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

## 運營原則

這是一個過濾器，不是垃圾郵件機器。

少量高匹配度、高背景資訊的投資人對話，遠勝於大範圍的陌生人外聯。Venture-Ops 應該讓創辦人更精準，而不是更嘈雜。

它也應該隨時間持續優化：

- 每次創辦人的修正都會打磨畫像
- 每個新指標都會改善路演材料
- 每個遺漏的問題都會成為未來檢查清單的條目
- 每次市場變化都會更新敘事記憶庫

## 免責聲明

**Venture-Ops 是一套本地開源工作流程，而非託管式融資平台。**

使用本工具即表示你確認：

1. **你掌控自己的資料。** 創辦人資訊、投資人備注、牽引力資料和融資材料均保留在你的本地設備上，除非你主動選擇將其發送給 AI 服務提供商。
2. **你掌控提交行為。** 系統負責起草和建議，但不應代替你提交申請或發送外聯郵件。
3. **你負責核實當前事實。** 投資人合夥人、截止日期、支票規模和計畫條款會頻繁變化；使用前應核實當前資訊。
4. **不作任何保證。** 匹配度評分是建議，不是事實。投資人不是確定性系統。請運用自身判斷力。

## 授權條款

MIT
