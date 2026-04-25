# Venture-Ops

> Operaciones de fundraising potenciadas por IA, construidas sobre Claude Code. Modos de habilidades para exploración de inversores, actualización de pitch deck, solicitudes a aceleradoras y cadencia de seguimiento. Procesamiento por lotes, generación de PDF.

*Inspirado en [santifer/career-ops](https://github.com/santifer/career-ops) — adaptado para fundadores que levantan rondas.*

---

Venture-Ops es un centro de comando de fundraising con IA para fundadores: descubrimiento de inversores, actualización de pitch deck, redacción de solicitudes, seguimiento del pipeline y operaciones de fundraising con conciencia del mercado.

En lugar de hacer malabares con decks antiguos, notas dispersas de inversores y solicitudes genéricas, obtienes un sistema estructurado que te ayuda a:

- encontrar inversores y programas que realmente encajen con tu empresa
- refrescar tu historia cuando el deck, el sitio web y el producto se desvían entre sí
- detectar lo que falta antes de una llamada con un fundador o una reunión con socios
- preparar outreach, solicitudes y seguimientos más limpios
- mantener una memoria viva de fundraising en lugar de empezar desde cero cada semana

> **Importante:** Venture-Ops no es un bot de spam para inversores. Es un sistema de afinamiento. Ayuda a los fundadores a elegir mejores objetivos, ajustar la historia y preparar mejores materiales. El fundador sigue decidiendo qué se envía.

## Demo de 30 Segundos

GitHub elimina el HTML interactivo de los READMEs, por lo que el recorrido en vivo está en una página independiente:

- [Abrir la demo en vivo de 30 segundos](https://desperado.github.io/venture-ops/30-sec-demo.html)

Muestra el flujo real del fundador: cargar el contexto del startup, explorar inversores con ajuste actual, actualizar el deck contra el sitio web, generar variantes de deck específicas para el objetivo, y trabajar desde un tracker en lugar de notas sueltas.

## Recorrido Completo de la Demo

También puedes entender todo el producto directamente en el README:

### 1. Cargar el contexto del fundador

![Paso de demo 1: contexto del fundador](assets/readme/demo-step-1-context.png)

Comienza con los archivos que los fundadores ya tienen: deck, sitio web, historial del fundador, notas de tracción y perfil de ronda.

### 2. Configurar el perfil objetivo

![Paso de demo 2: perfil objetivo](assets/readme/demo-step-2-profile.png)

Venture-Ops convierte la etapa, la geografía y el encuadre de categoría en filtros explícitos antes de que comience cualquier outreach.

### 3. Explorar inversores con ajuste actual

![Paso de demo 3: exploración de inversores](assets/readme/demo-step-3-scan.png)

En lugar de una lista amplia, el escáner reduce el campo a una pequeña lista corta con razones.

### 4. Actualizar el deck contra el sitio web

![Paso de demo 4: auditoría de actualización](assets/readme/demo-step-4-refresh.png)

El ciclo de actualización revela la deriva, las afirmaciones desactualizadas y las preguntas del fundador que deben responderse antes de enviar materiales.

### 5. Generar decks específicos para el objetivo

![Paso de demo 5: variantes de deck](assets/readme/demo-step-5-decks.png)

Una historia de empresa compartida puede reenmarcarse ligeramente para firmas como Crane, Episode 1 y Point Nine sin reconstruir todo el deck desde cero.

### 6. Trabajar desde un tracker

![Paso de demo 6: flujo de trabajo del tracker](assets/readme/demo-step-6-tracker.png)

El estado final es un flujo de trabajo: quién encaja, qué se envía a continuación y dónde está la ronda.

## De un Vistazo

![Descripción general de Venture-Ops](assets/readme/venture-ops-overview.png)

En lenguaje sencillo:

1. Le das al sistema tu deck actual, sitio web, contexto del fundador y objetivos.
2. Compara esas entradas, encuentra lo que está desactualizado o falta, y verifica qué inversores encajan.
3. Hace preguntas de seguimiento enfocadas donde la historia aún es débil.
4. Te da materiales actualizados, una lista de objetivos clasificada y un pipeline para trabajar.

## Qué Hace Esta Herramienta

Venture-Ops convierte cualquier CLI de codificación IA en un sistema operativo de fundraising del lado del fundador.

Está diseñado para fundadores que necesitan:

- levantar una ronda pre-seed, seed o institucional temprana
- solicitar aceleradoras, programas para fundadores, estudios o subvenciones
- mantener un pitch deck actualizado sin reescribirlo desde cero cada mes
- entender qué VCs son un ajuste real y cuáles son una pérdida de tiempo
- preparar respuestas de solicitud y borradores de introducción específicos para el objetivo
- mantener una memoria estructurada de tracción, puntos de prueba, riesgos y objeciones de inversores

El sistema es agéntico: puede inspeccionar tu sitio público de startup, compararlo con tu deck actual, identificar qué está desactualizado, sugerir pruebas más contundentes y preparar material específico para el objetivo para la próxima conversación.

## Qué Pones

Incluso un fundador no técnico puede pensar en Venture-Ops como un analista muy organizado.

Le proporcionas:

- tu deck actual
- tu sitio web
- historial del fundador
- notas de tracción
- ronda objetivo y geografía
- una lista curada de inversores o algunas URLs para empezar

## Qué Obtienes

Obtienes de vuelta:

- una auditoría de actualización del deck
- una lista corta clasificada de inversores
- preguntas de seguimiento para el fundador
- borradores de outreach/solicitudes específicos para el objetivo
- un tracker de a quién contactar y cuándo
- una memoria de mercado/noticias que ayuda a mantener la historia actualizada

## Ejemplo Real Saneado

A continuación hay un ejemplo saneado derivado de un deck real de fundador y un sitio web público de empresa. Los números sensibles, los detalles de clientes y las afirmaciones internas son reemplazados intencionalmente con marcadores de posición.

![Ejemplo saneado de ingesta de deck](assets/readme/deck-intake-sanitized.png)

Lo que Venture-Ops hizo con ese caso real:

- extrajo el deck actual en notas estructuradas
- revisó la página principal y el perfil público del fundador
- encontró deriva narrativa entre el deck y el sitio web
- señaló brechas de diligencia antes del envío al inversor
- produjo un borrador fresco del deck y una lista corta de objetivos

## Ejemplo de Búsqueda VC en Vivo

Esta es una instantánea visual de una búsqueda en vivo real realizada el **24 de abril de 2026** para una empresa europea pre-seed de IA para testing / infraestructura para desarrolladores.

![Instantánea de búsqueda VC en vivo](assets/readme/live-vc-summary.png)

Por qué esto importa para un fundador no técnico:

- no empiezas desde una hoja en blanco
- la herramienta reduce el campo a una pequeña lista corta con razones
- te da el ángulo de "por qué esta firma" antes de escribirle a nadie

## Instantáneas de Sitios Oficiales

Estos son los sitios web oficiales reales que Venture-Ops usó en esa búsqueda en vivo.

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

Fuentes en vivo:

- [Crane Venture Partners](https://crane.vc/)
- [Point Nine](https://www.pointnine.com/)
- [Seedcamp](https://seedcamp.com/)
- [Frontline Seed](https://frontline.vc/frontline-seed/)
- [Playfair](https://playfair.vc/)
- [Episode 1](https://www.episode1.com/)

## Qué Hace Realmente un Fundador

Si no eres técnico, el flujo de trabajo es simple:

1. Pon tu historia actual en `startup.md`, `founder-bio.md` y `traction-digest.md`.
2. Agrega tu ronda objetivo y geografía en `config/profile.yml`.
3. Agrega nombres de inversores o URLs en `investors.yml`.
4. Pídele al agente que actualice el deck, explore inversores o compare objetivos.
5. Revisa la lista corta generada y responde las preguntas de seguimiento.
6. Envía solo las mejores solicitudes e introducciones, no todo en todas partes.

## Características

| Característica | Qué significa en la práctica |
|---------|---------------------------|
| **Escáner de Objetivos** | Encuentra inversores, aceleradoras, ángeles y programas para fundadores que coincidan con tu etapa, sector, geografía y ronda |
| **Evaluación de Ajuste** | Explica por qué un objetivo encaja o no encaja, en lugar de solo darte un nombre |
| **Actualización de Deck** | Compara deck, sitio web, aportaciones del fundador y pruebas actuales para encontrar afirmaciones desactualizadas y slides faltantes |
| **Generación de Pitch Deck** | Redacta una narrativa de 10-12 slides y la exporta a HTML/PDF |
| **Ciclo de Preguntas del Fundador** | Hace las preguntas de mayor valor cuando tu historia está incompleta o es inconsistente |
| **Memoria de Noticias / Tendencias** | Rastrea cambios del mercado, incidentes relevantes y ganchos de timing de categoría en `market-watch.md` |
| **Seguimiento del Pipeline** | Mantiene una única fuente de verdad para objetivos, estados y timing de seguimiento |
| **Humano en el Ciclo** | Redacta y recomienda, mientras el fundador mantiene el control de las presentaciones |

## Casos de Uso de Ejemplo

### 1. Actualizar un deck desactualizado antes de reuniones con inversores

Tienes:

- un deck PDF de hace unas semanas
- un sitio web de startup que ha evolucionado
- actualizaciones de producto que no se reflejan en la narrativa

Usa Venture-Ops para:

- comparar el deck contra la página principal
- señalar métricas faltantes, alcance del producto desactualizado y capturas de pantalla obsoletas
- hacer preguntas enfocadas al fundador
- generar un borrador actualizado de 12 slides

### 2. Encontrar inversores con ajuste real en lugar de listas amplias

Eres un fundador pre-seed en Berlín construyendo infraestructura para desarrolladores.

Usa Venture-Ops para:

- configurar tu perfil objetivo una vez
- explorar un universo curado de inversores
- clasificar objetivos por ajuste
- identificar quién merece tiempo esta semana y quién debe saltarse

### 3. Solicitar aceleradoras sin respuestas genéricas

Quieres solicitar a YC, EF, Antler u otro programa para fundadores.

Usa Venture-Ops para:

- adaptar la historia de la empresa a cada programa
- generar biografías de fundador más contundentes y respuestas de solicitud
- destacar dónde el deck subexplica el "por qué ahora"

### 4. Mantener la narrativa de fundraising actualizada

El mercado cambia rápido.

Usa Venture-Ops para:

- monitorear tendencias actuales y noticias de empresas adyacentes
- actualizar `market-watch.md`
- detectar señales de "esto debería cambiar en el deck ahora" antes de la próxima llamada con inversores

## Inicio Rápido

```bash
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops
npm install
npx playwright install chromium
npm run doctor
```

Luego personaliza:

1. Edita `startup.md` con la fuente de verdad de la empresa.
2. Edita `founder-bio.md` con el historial del fundador y la credibilidad.
3. Edita `traction-digest.md` con métricas, clientes y pruebas.
4. Edita `market-watch.md` con tendencias, movimientos de competidores y ganchos de timing.
5. Edita `config/profile.yml` para etapa, geografía, tamaño de ronda y targeting de inversores.
6. Edita `investors.yml` para agregar fondos, ángeles, aceleradoras, subvenciones o programas para fundadores que quieras rastrear.

Si quieres actualizar los visuales públicos:

```bash
npm run readme:assets
```

## Uso

### Comandos locales

```bash
npm run doctor                  # initialize and verify setup
npm run scan -- --dry-run       # preview matching targets
npm run scan                    # append matches to data/pipeline.md
npm run verify                  # validate tracker/report integrity
npm run deck -- deck.html out.pdf
npm run followup                # surface follow-up candidates from tracker
```

### Dentro de un agente de codificación IA

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

O simplemente pega:

- una URL de VC
- una página de aceleradora
- tu deck actual
- tu sitio de startup

y pídele al agente que ejecute el modo relevante.

## Prompts de Ejemplo

```text
Refresh my deck from this PDF and compare it against my website.

Find the top 10 VCs in Europe for a pre-seed developer-tools company.

Evaluate whether YC or EF is the stronger fit for us right now.

Turn this existing fundraising narrative into a tighter 12-slide deck.

Read my startup front page and tell me what an investor would still find unclear.

Update market-watch.md with the last 30 days of relevant category news.
```

## Cómo Funciona

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

El punto importante: Venture-Ops no es solo "escríbeme un deck." Es un modelo operativo reutilizable:

- archivos de fuente de verdad
- flujos de trabajo basados en modos
- escáner de inversores
- ciclo de actualización
- memoria narrativa
- disciplina de tracker

## Archivos Principales

| Archivo | Propósito |
|------|---------|
| `startup.md` | Fuente de verdad de la empresa: problema, solución, mercado, tracción, hoja de ruta |
| `founder-bio.md` | Narrativa del fundador, credibilidad, ajuste fundador-mercado |
| `traction-digest.md` | Memoria compacta de puntos de prueba para materiales de inversores |
| `market-watch.md` | Tendencias actuales, ganchos de noticias, señales de competidores |
| `config/profile.yml` | Perfil de ronda, ronda, geografía, sectores, tipos de objetivos ideales |
| `investors.yml` | Universo objetivo curado para exploración y coincidencia de ajuste |
| `data/pipeline.md` | Objetivos pendientes para procesar |
| `data/targets.md` | Tracker de fundraising |
| `reports/*` | Evaluaciones generadas, borradores de decks y auditorías de actualización |
| `output/*` | HTML de slides generadas y PDFs |

## Estructura del Proyecto

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

## Principio de Operación

Esto es un filtro, no una máquina de spam.

Un pequeño número de conversaciones con inversores de alto ajuste y alto contexto supera el outreach frío amplio. Venture-Ops debe hacer al fundador más agudo, no más ruidoso.

También debe mejorar con el tiempo:

- cada corrección del fundador afina el perfil
- cada nueva métrica mejora el deck
- cada pregunta perdida se convierte en un elemento futuro de la lista de verificación
- cada cambio del mercado actualiza la memoria narrativa

## Descargo de Responsabilidad

**Venture-Ops es un flujo de trabajo local de código abierto, no una plataforma de fundraising alojada.**

Al usarlo, reconoces:

1. **Controlas tus datos.** Los detalles del fundador, notas de inversores, tracción y materiales de fundraising permanecen en tu máquina a menos que elijas enviarlos a un proveedor de IA.
2. **Controlas las presentaciones.** El sistema redacta y recomienda, pero no debe enviar solicitudes ni outreach en tu nombre.
3. **Verificas los hechos actuales.** Los socios inversores, plazos, tamaños de cheques y términos de programas cambian frecuentemente; las afirmaciones actuales deben verificarse antes de usarse.
4. **Sin garantías.** Las puntuaciones de ajuste son recomendaciones, no verdades. Los inversores no son sistemas deterministas. Usa el criterio.

## Licencia

MIT
