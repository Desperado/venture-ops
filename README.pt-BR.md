# Venture-Ops

> Operações de fundraising impulsionadas por IA, construídas sobre Claude Code. Modos de habilidades para escaneamento de investidores, atualização de pitch deck, candidaturas a aceleradoras e cadência de acompanhamento. Processamento em lote, geração de PDF.

*Inspirado em [santifer/career-ops](https://github.com/santifer/career-ops) — adaptado para fundadores levantando rodadas.*

---

Venture-Ops é um centro de comando de fundraising com IA para fundadores: descoberta de investidores, atualização de pitch deck, rascunho de candidaturas, rastreamento de pipeline e operações de fundraising com consciência de mercado.

Em vez de fazer malabarismo com decks antigos, notas de investidores espalhadas e candidaturas genéricas, você obtém um sistema estruturado que ajuda você a:

- encontrar investidores e programas que realmente se encaixem com sua empresa
- atualizar sua história quando o deck, o site e o produto divergem entre si
- identificar o que está faltando antes de uma ligação com fundador ou reunião com parceiros
- preparar outreach, candidaturas e acompanhamentos mais limpos
- manter uma memória viva de fundraising em vez de começar do zero toda semana

> **Importante:** Venture-Ops não é um bot de spam para investidores. É um sistema de afinamento. Ele ajuda fundadores a escolher melhores alvos, ajustar a história e preparar materiais melhores. O fundador ainda decide o que é enviado.

## Demo de 30 Segundos

O GitHub remove HTML interativo dos READMEs, então o tour ao vivo fica em uma página independente:

- [Abrir a demo ao vivo de 30 segundos](https://desperado.github.io/venture-ops/30-sec-demo.html)

Ela mostra o fluxo real do fundador: carregar contexto do startup, escanear investidores com ajuste atual, atualizar o deck contra o site, gerar variantes de deck específicas para o alvo, e trabalhar a partir de um tracker em vez de notas soltas.

## Tour Completo da Demo

Você também pode entender o produto completo diretamente no README:

### 1. Carregar o contexto do fundador

![Passo da demo 1: contexto do fundador](assets/readme/demo-step-1-context.png)

Comece com os arquivos que os fundadores já têm: deck, site, histórico do fundador, notas de tração e perfil de rodada.

### 2. Configurar o perfil alvo

![Passo da demo 2: perfil alvo](assets/readme/demo-step-2-profile.png)

Venture-Ops transforma estágio, geografia e enquadramento de categoria em filtros explícitos antes que qualquer outreach comece.

### 3. Escanear investidores com ajuste atual

![Passo da demo 3: escaneamento de investidores](assets/readme/demo-step-3-scan.png)

Em vez de uma lista ampla, o escâner reduz o campo a uma pequena lista restrita com razões.

### 4. Atualizar o deck contra o site

![Passo da demo 4: auditoria de atualização](assets/readme/demo-step-4-refresh.png)

O ciclo de atualização revela deriva, afirmações desatualizadas e as perguntas do fundador que devem ser respondidas antes de enviar materiais.

### 5. Gerar decks específicos para o alvo

![Passo da demo 5: variantes de deck](assets/readme/demo-step-5-decks.png)

Uma história de empresa compartilhada pode ser levemente reenquadrada para firmas como Crane, Episode 1 e Point Nine sem reconstruir todo o deck do zero.

### 6. Trabalhar a partir de um tracker

![Passo da demo 6: fluxo de trabalho do tracker](assets/readme/demo-step-6-tracker.png)

O estado final é um fluxo de trabalho: quem se encaixa, o que é enviado a seguir e onde está a rodada.

## De Relance

![Visão geral do Venture-Ops](assets/readme/venture-ops-overview.png)

Em linguagem simples:

1. Você dá ao sistema seu deck atual, site, contexto do fundador e objetivos.
2. Ele compara essas entradas, encontra o que está desatualizado ou faltando e verifica quais investidores se encaixam.
3. Ele faz perguntas de acompanhamento focadas onde a história ainda é fraca.
4. Ele te dá materiais atualizados, uma lista de alvos classificada e um pipeline para trabalhar.

## O Que Esta Ferramenta Faz

Venture-Ops transforma qualquer CLI de codificação IA em um sistema operacional de fundraising do lado do fundador.

É projetado para fundadores que precisam:

- levantar uma rodada pré-seed, seed ou institucional inicial
- se candidatar a aceleradoras, programas de fundadores, estúdios ou subvenções
- manter um pitch deck atualizado sem reescrevê-lo do zero todo mês
- entender quais VCs são um ajuste real e quais são perda de tempo
- preparar respostas de candidatura e rascunhos de apresentação específicos para o alvo
- manter uma memória estruturada de tração, pontos de prova, riscos e objeções de investidores

O sistema é agêntico: pode inspecionar seu site público de startup, compará-lo com seu deck atual, identificar o que está desatualizado, sugerir provas mais contundentes e preparar material específico para o alvo para a próxima conversa.

## O Que Você Coloca

Mesmo um fundador não técnico pode pensar no Venture-Ops como um analista muito organizado.

Você fornece:

- seu deck atual
- seu site
- histórico do fundador
- notas de tração
- rodada alvo e geografia
- uma lista curada de investidores ou algumas URLs para começar

## O Que Você Obtém

Você recebe de volta:

- uma auditoria de atualização do deck
- uma lista restrita de investidores classificada
- perguntas de acompanhamento para o fundador
- rascunhos de outreach/candidaturas específicos para o alvo
- um tracker de quem contatar e quando
- uma memória de mercado/notícias que ajuda a manter a história atualizada

## Exemplo Real Anonimizado

Abaixo está um exemplo anonimizado derivado de um deck real de fundador e de um site público de empresa. Números sensíveis, detalhes de clientes e afirmações internas são intencionalmente substituídos por marcadores de posição.

![Exemplo anonimizado de ingestão de deck](assets/readme/deck-intake-sanitized.png)

O que Venture-Ops fez com esse caso real:

- extraiu o deck atual em notas estruturadas
- verificou a página inicial e o perfil público do fundador
- encontrou deriva narrativa entre o deck e o site
- sinalizou lacunas de diligência antes do envio ao investidor
- produziu um rascunho fresco de deck e uma lista restrita de alvos

## Exemplo de Busca de VC ao Vivo

Esta é uma captura visual de uma busca ao vivo real realizada em **24 de abril de 2026** para uma empresa europeia pré-seed de IA para testes / infraestrutura para desenvolvedores.

![Captura de busca de VC ao vivo](assets/readme/live-vc-summary.png)

Por que isso importa para um fundador não técnico:

- você não está começando de uma folha em branco
- a ferramenta reduz o campo a uma pequena lista restrita com razões
- ela te dá o ângulo do "por que essa firma" antes de você escrever para alguém

## Capturas dos Sites Oficiais

Estes são os sites oficiais reais que o Venture-Ops usou nessa busca ao vivo.

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

Fontes ao vivo:

- [Crane Venture Partners](https://crane.vc/)
- [Point Nine](https://www.pointnine.com/)
- [Seedcamp](https://seedcamp.com/)
- [Frontline Seed](https://frontline.vc/frontline-seed/)
- [Playfair](https://playfair.vc/)
- [Episode 1](https://www.episode1.com/)

## O Que um Fundador Realmente Faz

Se você não é técnico, o fluxo de trabalho é simples:

1. Coloque sua história atual em `startup.md`, `founder-bio.md` e `traction-digest.md`.
2. Adicione sua rodada alvo e geografia em `config/profile.yml`.
3. Adicione nomes de investidores ou URLs em `investors.yml`.
4. Peça ao agente para atualizar o deck, escanear investidores ou comparar alvos.
5. Revise a lista restrita gerada e responda às perguntas de acompanhamento.
6. Envie apenas as melhores candidaturas e apresentações, não tudo em todo lugar.

## Funcionalidades

| Funcionalidade | O que significa na prática |
|---------|---------------------------|
| **Escâner de Alvos** | Encontra investidores, aceleradoras, anjos e programas de fundadores que correspondem ao seu estágio, setor, geografia e rodada |
| **Avaliação de Ajuste** | Explica por que um alvo se encaixa ou não se encaixa, em vez de apenas te dar um nome |
| **Atualização de Deck** | Compara deck, site, contribuições do fundador e provas atuais para encontrar afirmações desatualizadas e slides faltantes |
| **Geração de Pitch Deck** | Rascunha uma narrativa de 10-12 slides e exporta para HTML/PDF |
| **Ciclo de Perguntas do Fundador** | Faz as perguntas de maior valor quando sua história está incompleta ou inconsistente |
| **Memória de Notícias / Tendências** | Rastreia mudanças de mercado, incidentes relevantes e ganchos de timing de categoria em `market-watch.md` |
| **Rastreamento de Pipeline** | Mantém uma única fonte de verdade para alvos, status e timing de acompanhamento |
| **Humano no Ciclo** | Rascunha e recomenda, enquanto o fundador mantém o controle das submissões |

## Casos de Uso de Exemplo

### 1. Atualizar um deck desatualizado antes de reuniões com investidores

Você tem:

- um deck PDF de algumas semanas atrás
- um site de startup que evoluiu
- atualizações de produto que não se refletem na narrativa

Use Venture-Ops para:

- comparar o deck contra a página inicial
- sinalizar métricas faltantes, escopo de produto desatualizado e capturas de tela obsoletas
- fazer perguntas focadas ao fundador
- gerar um rascunho atualizado de 12 slides

### 2. Encontrar investidores com ajuste real em vez de listas amplas

Você é um fundador pré-seed em Berlim construindo infraestrutura para desenvolvedores.

Use Venture-Ops para:

- configurar seu perfil alvo uma vez
- escanear um universo curado de investidores
- classificar alvos por ajuste
- identificar quem merece tempo esta semana e quem deve ser ignorado

### 3. Se candidatar a aceleradoras sem respostas genéricas

Você quer se candidatar ao YC, EF, Antler ou outro programa de fundadores.

Use Venture-Ops para:

- adaptar a história da empresa a cada programa
- gerar biografias de fundador mais contundentes e respostas de candidatura
- destacar onde o deck subexplica o "por que agora"

### 4. Manter a narrativa de fundraising atualizada

O mercado muda rápido.

Use Venture-Ops para:

- monitorar tendências atuais e notícias de empresas adjacentes
- atualizar `market-watch.md`
- detectar sinais de "isso deve mudar no deck agora" antes da próxima ligação com investidores

## Início Rápido

```bash
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops
npm install
npx playwright install chromium
npm run doctor
```

Então personalize:

1. Edite `startup.md` com a fonte de verdade da empresa.
2. Edite `founder-bio.md` com o histórico do fundador e a credibilidade.
3. Edite `traction-digest.md` com métricas, clientes e provas.
4. Edite `market-watch.md` com tendências, movimentos de concorrentes e ganchos de timing.
5. Edite `config/profile.yml` para estágio, geografia, tamanho da rodada e targeting de investidores.
6. Edite `investors.yml` para adicionar fundos, anjos, aceleradoras, subvenções ou programas de fundadores que você quer rastrear.

Se você quiser atualizar os visuais públicos:

```bash
npm run readme:assets
```

## Uso

### Comandos locais

```bash
npm run doctor                  # initialize and verify setup
npm run scan -- --dry-run       # preview matching targets
npm run scan                    # append matches to data/pipeline.md
npm run verify                  # validate tracker/report integrity
npm run deck -- deck.html out.pdf
npm run followup                # surface follow-up candidates from tracker
```

### Dentro de um agente de codificação IA

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

Ou simplesmente cole:

- uma URL de VC
- uma página de aceleradora
- seu deck atual
- seu site de startup

e peça ao agente para executar o modo relevante.

## Prompts de Exemplo

```text
Refresh my deck from this PDF and compare it against my website.

Find the top 10 VCs in Europe for a pre-seed developer-tools company.

Evaluate whether YC or EF is the stronger fit for us right now.

Turn this existing fundraising narrative into a tighter 12-slide deck.

Read my startup front page and tell me what an investor would still find unclear.

Update market-watch.md with the last 30 days of relevant category news.
```

## Como Funciona

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

O ponto importante: Venture-Ops não é apenas "escreva-me um deck." É um modelo operacional reutilizável:

- arquivos de fonte de verdade
- fluxos de trabalho baseados em modos
- escâner de investidores
- ciclo de atualização
- memória narrativa
- disciplina de tracker

## Arquivos Principais

| Arquivo | Propósito |
|------|---------|
| `startup.md` | Fonte de verdade da empresa: problema, solução, mercado, tração, roadmap |
| `founder-bio.md` | Narrativa do fundador, credibilidade, ajuste fundador-mercado |
| `traction-digest.md` | Memória compacta de pontos de prova para materiais de investidores |
| `market-watch.md` | Tendências atuais, ganchos de notícias, sinais de concorrentes |
| `config/profile.yml` | Perfil de rodada, rodada, geografia, setores, tipos de alvos ideais |
| `investors.yml` | Universo alvo curado para escaneamento e correspondência de ajuste |
| `data/pipeline.md` | Alvos pendentes para processar |
| `data/targets.md` | Tracker de fundraising |
| `reports/*` | Avaliações geradas, rascunhos de decks e auditorias de atualização |
| `output/*` | HTML de slides geradas e PDFs |

## Estrutura do Projeto

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

## Princípio de Operação

Isso é um filtro, não uma máquina de spam.

Um pequeno número de conversas com investidores de alto ajuste e alto contexto supera o outreach frio amplo. Venture-Ops deve tornar o fundador mais afiado, não mais barulhento.

Ele também deve melhorar com o tempo:

- cada correção do fundador afina o perfil
- cada nova métrica melhora o deck
- cada pergunta perdida se torna um item futuro da lista de verificação
- cada mudança de mercado atualiza a memória narrativa

## Aviso Legal

**Venture-Ops é um fluxo de trabalho local de código aberto, não uma plataforma de fundraising hospedada.**

Ao usá-lo, você reconhece:

1. **Você controla seus dados.** Detalhes do fundador, notas de investidores, tração e materiais de fundraising permanecem em sua máquina a menos que você escolha enviá-los a um provedor de IA.
2. **Você controla as submissões.** O sistema rascunha e recomenda, mas não deve submeter candidaturas ou enviar outreach em seu nome.
3. **Você verifica fatos atuais.** Parceiros investidores, prazos, tamanhos de cheques e termos de programas mudam frequentemente; afirmações atuais devem ser verificadas antes do uso.
4. **Sem garantias.** Pontuações de ajuste são recomendações, não verdades. Investidores não são sistemas determinísticos. Use o julgamento.

## Licença

MIT
