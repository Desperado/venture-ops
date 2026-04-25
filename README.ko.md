# Venture-Ops

> Claude Code 기반의 AI 구동 펀드레이징 운영 도구. 투자자 스캔, 피치덱 업데이트, 액셀러레이터 지원, 팔로업 케이던스를 위한 스킬 모드. 배치 처리, PDF 생성 지원.

*[santifer/career-ops](https://github.com/santifer/career-ops)에서 영감을 받아 — 라운드를 진행 중인 창업자를 위해 적용.*

---

Venture-Ops는 창업자를 위한 AI 펀드레이징 지휘 센터입니다: 투자자 발굴, 피치덱 업데이트, 지원서 초안 작성, 파이프라인 추적, 시장 인식 기반의 펀드레이징 운영을 한 곳에서 관리합니다.

오래된 덱, 흩어진 투자자 메모, 일반적인 지원서를 저글링하는 대신, 다음을 도와주는 하나의 구조화된 시스템을 갖추세요:

- 실제로 우리 회사에 맞는 투자자와 프로그램 찾기
- 덱, 웹사이트, 제품이 서로 벗어날 때 스토리 새로 고치기
- 창업자 콜이나 파트너 미팅 전 빠진 부분 파악하기
- 더 깔끔한 아웃리치, 지원서, 팔로업 준비하기
- 매주 처음부터 시작하는 대신 살아있는 펀드레이징 기억 유지하기

> **중요:** Venture-Ops는 투자자 스팸 봇이 아닙니다. 이것은 날카롭게 다듬는 시스템입니다. 창업자가 더 나은 타겟을 선택하고, 스토리를 정교하게 하며, 더 나은 자료를 준비하도록 도웁니다. 무엇을 보낼지 결정하는 것은 여전히 창업자 자신입니다.

## 30초 데모

GitHub는 README에서 인터랙티브 HTML을 제거하므로, 라이브 워크스루는 독립 페이지에 있습니다:

- [30초 라이브 데모 열기](https://desperado.github.io/venture-ops/30-sec-demo.html)

실제 창업자 플로우를 보여줍니다: 스타트업 컨텍스트 로드, 현재 적합한 투자자 스캔, 웹사이트 대비 덱 새로 고침, 타겟 특정 덱 변형 생성, 산만한 메모 대신 트래커에서 작업.

## 전체 데모 워크스루

README에서 직접 전체 제품을 이해할 수도 있습니다:

### 1. 창업자 컨텍스트 로드

![데모 단계 1: 창업자 컨텍스트](assets/readme/demo-step-1-context.png)

창업자가 이미 갖고 있는 파일로 시작합니다: 덱, 웹사이트, 창업자 배경, 트랙션 메모, 라운드 프로필.

### 2. 타겟 프로필 설정

![데모 단계 2: 타겟 프로필](assets/readme/demo-step-2-profile.png)

Venture-Ops는 아웃리치가 시작되기 전에 스테이지, 지역, 카테고리 프레이밍을 명시적인 필터로 변환합니다.

### 3. 현재 적합한 투자자 스캔

![데모 단계 3: 투자자 스캔](assets/readme/demo-step-3-scan.png)

넓은 목록 대신, 스캐너가 이유와 함께 작은 쇼트리스트로 필드를 좁힙니다.

### 4. 웹사이트 대비 덱 새로 고침

![데모 단계 4: 새로 고침 감사](assets/readme/demo-step-4-refresh.png)

새로 고침 루프는 이탈, 낡은 주장, 자료를 보내기 전에 답해야 할 창업자 질문을 표면화합니다.

### 5. 타겟 특정 덱 생성

![데모 단계 5: 덱 변형](assets/readme/demo-step-5-decks.png)

하나의 공통 회사 스토리를 전체 덱을 처음부터 재구성하지 않고 Crane, Episode 1, Point Nine과 같은 회사를 위해 가볍게 재프레이밍할 수 있습니다.

### 6. 트래커에서 작업

![데모 단계 6: 트래커 워크플로우](assets/readme/demo-step-6-tracker.png)

최종 상태는 워크플로우입니다: 누가 적합한지, 다음에 무엇을 보낼지, 라운드가 어디에 있는지.

## 한 눈에 보기

![Venture-Ops 개요](assets/readme/venture-ops-overview.png)

쉬운 말로:

1. 현재 덱, 웹사이트, 창업자 컨텍스트, 목표를 시스템에 제공합니다.
2. 해당 입력값을 비교하고, 낡거나 빠진 것을 찾고, 어떤 투자자가 맞는지 확인합니다.
3. 스토리가 아직 약한 부분에서 집중된 후속 질문을 합니다.
4. 새로 고쳐진 자료, 순위가 매겨진 타겟 목록, 작업할 파이프라인을 제공합니다.

## 이 도구가 하는 일

Venture-Ops는 모든 AI 코딩 CLI를 창업자 측의 펀드레이징 운영 시스템으로 전환합니다.

다음이 필요한 창업자를 위해 설계되었습니다:

- 프리시드, 시드, 또는 초기 기관 라운드 조달
- 액셀러레이터, 창업자 프로그램, 스튜디오, 또는 보조금 지원
- 매달 처음부터 다시 쓰지 않고 피치덱을 최신 상태로 유지
- 어떤 VC가 실제로 맞는지, 어느 것이 시간 낭비인지 이해
- 타겟 특정 지원 답변 및 소개 블럽 준비
- 트랙션, 증거 포인트, 위험, 투자자 이의에 대한 구조화된 기억 유지

시스템은 에이전트형입니다: 공개 스타트업 사이트를 검사하고, 현재 덱과 비교하고, 낡은 것을 식별하고, 더 날카로운 증거를 제안하고, 다음 대화를 위한 타겟 특정 자료를 준비할 수 있습니다.

## 무엇을 넣는지

비기술적인 창업자도 Venture-Ops를 매우 정리된 분석가로 생각할 수 있습니다.

제공하는 것:

- 현재 덱
- 웹사이트
- 창업자 배경
- 트랙션 메모
- 타겟 라운드 및 지역
- 큐레이션된 투자자 목록 또는 시작할 몇 가지 URL

## 무엇을 얻는지

받는 것:

- 덱 새로 고침 감사
- 순위가 매겨진 투자자 쇼트리스트
- 창업자 팔로업 질문
- 타겟 특정 아웃리치/지원서 초안
- 누구에게 언제 연락할지 트래커
- 스토리를 최신 상태로 유지하는 데 도움이 되는 시장/뉴스 기억

## 위생처리된 실제 예시

아래는 실제 창업자 덱과 공개 회사 웹사이트에서 파생된 위생처리된 예시입니다. 민감한 숫자, 고객 세부 정보, 내부 주장은 의도적으로 플레이스홀더로 대체되었습니다.

![위생처리된 덱 수집 예시](assets/readme/deck-intake-sanitized.png)

Venture-Ops가 그 실제 케이스에서 한 것:

- 현재 덱을 구조화된 메모로 가져옴
- 첫 페이지와 공개 창업자 프로필 확인
- 덱과 웹사이트 간의 내러티브 이탈 발견
- 투자자 전송 전 실사 격차 표시
- 새로운 덱 초안 및 타겟 쇼트리스트 작성

## 라이브 VC 검색 예시

이것은 유럽 프리시드 AI 테스팅/개발자 인프라 회사를 위한 **2026년 4월 24일**에 실행된 실제 라이브 검색의 시각적 스냅샷입니다.

![라이브 VC 검색 스냅샷](assets/readme/live-vc-summary.png)

비기술적인 창업자에게 이것이 중요한 이유:

- 빈 종이에서 시작하는 게 아님
- 도구가 이유와 함께 작은 쇼트리스트로 필드를 좁혀줌
- 누군가에게 쓰기 전에 "왜 이 회사인가" 각도를 제공

## 공식 사이트 스냅샷

이것들은 Venture-Ops가 그 라이브 검색에서 사용한 실제 공식 웹사이트들입니다.

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

라이브 소스:

- [Crane Venture Partners](https://crane.vc/)
- [Point Nine](https://www.pointnine.com/)
- [Seedcamp](https://seedcamp.com/)
- [Frontline Seed](https://frontline.vc/frontline-seed/)
- [Playfair](https://playfair.vc/)
- [Episode 1](https://www.episode1.com/)

## 창업자가 실제로 하는 것

비기술적인 경우, 워크플로우는 간단합니다:

1. 현재 스토리를 `startup.md`, `founder-bio.md`, `traction-digest.md`에 넣습니다.
2. `config/profile.yml`에 타겟 라운드와 지역을 추가합니다.
3. `investors.yml`에 투자자 이름이나 URL을 추가합니다.
4. 에이전트에게 덱 새로 고침, 투자자 스캔, 또는 타겟 비교를 요청합니다.
5. 생성된 쇼트리스트를 검토하고 팔로업 질문에 답합니다.
6. 최고의 지원서와 소개만 보내고, 모든 곳에 모든 것을 보내지 마세요.

## 기능

| 기능 | 실제로 무엇을 의미하는지 |
|---------|---------------------------|
| **타겟 스캐너** | 스테이지, 섹터, 지역, 라운드에 맞는 투자자, 액셀러레이터, 엔젤, 창업자 프로그램 찾기 |
| **적합도 평가** | 이름만 주는 게 아니라 타겟이 맞는 이유 또는 맞지 않는 이유 설명 |
| **덱 새로 고침** | 덱, 웹사이트, 창업자 입력, 현재 증거를 비교하여 낡은 주장과 빠진 슬라이드 찾기 |
| **피치덱 생성** | 10-12 슬라이드 내러티브 초안 작성 및 HTML/PDF로 내보내기 |
| **창업자 질문 루프** | 스토리가 불완전하거나 일관성이 없을 때 가장 가치 있는 질문 하기 |
| **뉴스/트렌드 기억** | `market-watch.md`에서 시장 변화, 관련 사건, 카테고리 타이밍 훅 추적 |
| **파이프라인 추적** | 타겟, 상태, 팔로업 타이밍의 단일 진실 소스 유지 |
| **휴먼인더루프** | 초안 작성 및 추천을 하되, 창업자가 제출 컨트롤을 유지 |

## 사용 사례 예시

### 1. 투자자 미팅 전 낡은 덱 새로 고침

보유 자료:

- 몇 주 전 PDF 덱
- 진화한 스타트업 웹사이트
- 내러티브에 반영되지 않은 제품 업데이트

Venture-Ops 활용:

- 덱을 첫 페이지와 비교
- 빠진 메트릭, 오래된 제품 범위, 낡은 스크린샷 표시
- 타겟을 좁힌 창업자 질문
- 업데이트된 12슬라이드 초안 생성

### 2. 넓은 목록 대신 실제 적합한 투자자 찾기

베를린 기반의 개발자 인프라를 구축하는 프리시드 창업자입니다.

Venture-Ops 활용:

- 타겟 프로필 한 번 설정
- 큐레이션된 투자자 유니버스 스캔
- 적합도로 타겟 순위 매기기
- 이번 주 시간을 할애할 가치가 있는 사람과 건너뛰어야 할 사람 파악

### 3. 일반적인 답변 없이 액셀러레이터에 지원

YC, EF, Antler, 또는 다른 창업자 프로그램에 지원하고 싶습니다.

Venture-Ops 활용:

- 각 프로그램에 맞게 회사 스토리 적용
- 더 날카로운 창업자 바이오와 지원 답변 생성
- 덱이 "왜 지금인가"를 부족하게 설명하는 부분 강조

### 4. 펀드레이징 내러티브를 최신 상태로 유지

시장은 빠르게 변합니다.

Venture-Ops 활용:

- 현재 트렌드와 인접 회사 뉴스 모니터링
- `market-watch.md` 업데이트
- 다음 투자자 콜 전 "지금 덱에서 이것을 바꿔야 한다" 신호 표면화

## 빠른 시작

```bash
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops
npm install
npx playwright install chromium
npm run doctor
```

그런 다음 커스터마이징:

1. `startup.md`를 회사 진실 소스로 편집합니다.
2. `founder-bio.md`를 창업자 배경과 신뢰성으로 편집합니다.
3. `traction-digest.md`를 메트릭, 고객, 증거로 편집합니다.
4. `market-watch.md`를 트렌드, 경쟁사 움직임, 타이밍 훅으로 편집합니다.
5. `config/profile.yml`을 스테이지, 지역, 라운드 크기, 투자자 타겟팅으로 편집합니다.
6. `investors.yml`을 편집하여 추적하려는 펀드, 엔젤, 액셀러레이터, 보조금, 창업자 프로그램을 추가합니다.

공개 비주얼을 새로 고치려면:

```bash
npm run readme:assets
```

## 사용법

### 로컬 명령어

```bash
npm run doctor                  # initialize and verify setup
npm run scan -- --dry-run       # preview matching targets
npm run scan                    # append matches to data/pipeline.md
npm run verify                  # validate tracker/report integrity
npm run deck -- deck.html out.pdf
npm run followup                # surface follow-up candidates from tracker
```

### AI 코딩 에이전트 내에서

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

또는 그냥 붙여넣기:

- VC URL
- 액셀러레이터 페이지
- 현재 덱
- 스타트업 사이트

그리고 에이전트에게 관련 모드를 실행하도록 요청합니다.

## 예시 프롬프트

```text
Refresh my deck from this PDF and compare it against my website.

Find the top 10 VCs in Europe for a pre-seed developer-tools company.

Evaluate whether YC or EF is the stronger fit for us right now.

Turn this existing fundraising narrative into a tighter 12-slide deck.

Read my startup front page and tell me what an investor would still find unclear.

Update market-watch.md with the last 30 days of relevant category news.
```

## 작동 방식

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

중요한 점: Venture-Ops는 단순히 "덱을 작성해줘"가 아닙니다. 재사용 가능한 운영 모델입니다:

- 진실 소스 파일
- 모드 기반 워크플로우
- 투자자 스캐너
- 새로 고침 루프
- 내러티브 기억
- 트래커 규율

## 핵심 파일

| 파일 | 목적 |
|------|---------|
| `startup.md` | 회사 진실 소스: 문제, 솔루션, 시장, 트랙션, 로드맵 |
| `founder-bio.md` | 창업자 내러티브, 신뢰성, 창업자-시장 적합도 |
| `traction-digest.md` | 투자자 자료를 위한 압축된 증거 포인트 기억 |
| `market-watch.md` | 현재 트렌드, 뉴스 훅, 경쟁사 신호 |
| `config/profile.yml` | 조달 프로필, 라운드, 지역, 섹터, 이상적인 타겟 유형 |
| `investors.yml` | 스캔 및 적합도 매칭을 위한 큐레이션된 타겟 유니버스 |
| `data/pipeline.md` | 처리할 대기 중 타겟 |
| `data/targets.md` | 펀드레이징 트래커 |
| `reports/*` | 생성된 평가, 덱 초안, 새로 고침 감사 |
| `output/*` | 생성된 슬라이드 HTML 및 PDF |

## 프로젝트 구조

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

## 운영 원칙

이것은 필터이지, 스팸 머신이 아닙니다.

소수의 높은 적합도, 높은 컨텍스트의 투자자 대화가 광범위한 콜드 아웃리치를 능가합니다. Venture-Ops는 창업자를 더 날카롭게 만들어야지, 더 시끄럽게 만들어서는 안 됩니다.

또한 시간이 지남에 따라 개선되어야 합니다:

- 창업자의 모든 수정이 프로필을 날카롭게 함
- 새로운 메트릭마다 덱이 개선됨
- 놓친 질문마다 미래 체크리스트 항목이 됨
- 시장 변화마다 내러티브 기억이 업데이트됨

## 면책 조항

**Venture-Ops는 로컬 오픈소스 워크플로우이지, 호스팅된 펀드레이징 플랫폼이 아닙니다.**

사용함으로써 다음을 인정합니다:

1. **데이터를 직접 관리합니다.** 창업자 세부 정보, 투자자 메모, 트랙션, 펀드레이징 자료는 AI 공급자에게 보내기로 선택하지 않는 한 기기에 남아 있습니다.
2. **제출을 직접 관리합니다.** 시스템은 초안 작성 및 추천을 하지만, 대신 지원서를 제출하거나 아웃리치를 보내서는 안 됩니다.
3. **현재 사실을 확인합니다.** 투자자 파트너, 마감일, 수표 크기, 프로그램 조건은 자주 변경됩니다; 사용 전에 현재 주장을 확인해야 합니다.
4. **보증 없음.** 적합도 점수는 추천이지 진실이 아닙니다. 투자자는 결정론적 시스템이 아닙니다. 판단력을 사용하세요.

## 라이선스

MIT
