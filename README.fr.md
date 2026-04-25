# Venture-Ops

> Opérations de fundraising alimentées par IA, construites sur Claude Code. Modes de compétences pour le scanning d'investisseurs, la mise à jour du pitch deck, les candidatures aux accélérateurs et la cadence de suivi. Traitement par lots, génération de PDF.

*Inspiré de [santifer/career-ops](https://github.com/santifer/career-ops) — adapté pour les fondateurs qui lèvent des tours.*

---

Venture-Ops est un centre de commandement de fundraising IA pour les fondateurs : découverte d'investisseurs, mise à jour du pitch deck, rédaction de candidatures, suivi du pipeline et opérations de fundraising en phase avec le marché.

Au lieu de jongler avec d'anciens decks, des notes d'investisseurs éparpillées et des candidatures génériques, vous obtenez un système structuré qui vous aide à :

- trouver les investisseurs et programmes qui correspondent vraiment à votre entreprise
- rafraîchir votre histoire quand le deck, le site web et le produit divergent
- repérer ce qui manque avant un appel avec un fondateur ou une réunion avec des partenaires
- préparer des messages d'approche, des candidatures et des relances plus soignés
- conserver une mémoire vivante de fundraising plutôt que de repartir de zéro chaque semaine

> **Important :** Venture-Ops n'est pas un bot de spam pour investisseurs. C'est un système d'affûtage. Il aide les fondateurs à choisir de meilleures cibles, à resserrer l'histoire et à préparer de meilleurs matériaux. Le fondateur décide toujours de ce qui est envoyé.

## Démo de 30 Secondes

GitHub supprime le HTML interactif des README, donc le parcours en direct se trouve sur une page autonome :

- [Ouvrir la démo en direct de 30 secondes](https://desperado.github.io/venture-ops/30-sec-demo.html)

Elle montre le flux réel du fondateur : charger le contexte du startup, scanner les investisseurs correspondants actuellement, rafraîchir le deck par rapport au site web, générer des variantes de deck spécifiques à la cible, et travailler depuis un tracker plutôt que des notes éparpillées.

## Parcours Complet de la Démo

Vous pouvez également comprendre l'ensemble du produit directement dans le README :

### 1. Charger le contexte du fondateur

![Étape de démo 1 : contexte du fondateur](assets/readme/demo-step-1-context.png)

Commencez avec les fichiers que les fondateurs ont déjà : deck, site web, parcours du fondateur, notes de traction et profil de levée.

### 2. Configurer le profil cible

![Étape de démo 2 : profil cible](assets/readme/demo-step-2-profile.png)

Venture-Ops transforme l'étape, la géographie et le cadrage de catégorie en filtres explicites avant que toute approche commence.

### 3. Scanner les investisseurs correspondants actuellement

![Étape de démo 3 : scan d'investisseurs](assets/readme/demo-step-3-scan.png)

Au lieu d'une liste large, le scanner réduit le champ à une petite liste restreinte avec des raisons.

### 4. Rafraîchir le deck par rapport au site web

![Étape de démo 4 : audit de rafraîchissement](assets/readme/demo-step-4-refresh.png)

La boucle de rafraîchissement fait apparaître la dérive, les affirmations obsolètes et les questions du fondateur auxquelles il faudrait répondre avant d'envoyer les matériaux.

### 5. Générer des decks spécifiques à la cible

![Étape de démo 5 : variantes de deck](assets/readme/demo-step-5-decks.png)

Une histoire d'entreprise partagée peut être légèrement recadrée pour des firmes comme Crane, Episode 1 et Point Nine sans reconstruire tout le deck depuis zéro.

### 6. Travailler depuis un tracker

![Étape de démo 6 : flux de travail du tracker](assets/readme/demo-step-6-tracker.png)

L'état final est un flux de travail : qui correspond, ce qui est envoyé ensuite, et où en est le tour.

## En un Coup d'Œil

![Vue d'ensemble de Venture-Ops](assets/readme/venture-ops-overview.png)

En langage simple :

1. Vous donnez au système votre deck actuel, votre site web, le contexte du fondateur et vos objectifs.
2. Il compare ces entrées, trouve ce qui est obsolète ou manquant, et vérifie quels investisseurs correspondent.
3. Il pose des questions de suivi ciblées là où l'histoire est encore faible.
4. Il vous donne des matériaux actualisés, une liste de cibles classée et un pipeline à parcourir.

## Ce Que Fait Cet Outil

Venture-Ops transforme n'importe quelle CLI de codage IA en un système d'exploitation de fundraising côté fondateur.

Il est conçu pour les fondateurs qui doivent :

- lever un tour pré-seed, seed ou institutionnel précoce
- candidater à des accélérateurs, des programmes pour fondateurs, des studios ou des subventions
- maintenir un pitch deck à jour sans le réécrire depuis zéro chaque mois
- comprendre quels VCs correspondent vraiment et lesquels sont une perte de temps
- préparer des réponses de candidature et des introductions spécifiques à la cible
- maintenir une mémoire structurée de traction, points de preuve, risques et objections d'investisseurs

Le système est agentique : il peut inspecter votre site public de startup, le comparer à votre deck actuel, identifier ce qui est obsolète, suggérer des preuves plus solides et préparer du matériel spécifique à la cible pour la prochaine conversation.

## Ce Que Vous Mettez Dedans

Même un fondateur non technique peut voir Venture-Ops comme un analyste très organisé.

Vous lui fournissez :

- votre deck actuel
- votre site web
- le parcours du fondateur
- des notes de traction
- la ronde cible et la géographie
- une liste d'investisseurs sélectionnée ou quelques URLs pour commencer

## Ce Que Vous En Obtenez

Vous récupérez :

- un audit de rafraîchissement du deck
- une liste restreinte d'investisseurs classée
- des questions de suivi pour le fondateur
- des brouillons d'approche/candidatures spécifiques à la cible
- un tracker de qui contacter et quand
- une mémoire de marché/actualités qui aide à maintenir l'histoire à jour

## Exemple Réel Anonymisé

Ci-dessous se trouve un exemple anonymisé dérivé d'un vrai deck de fondateur et d'un site web public d'entreprise. Les chiffres sensibles, les détails clients et les affirmations internes sont intentionnellement remplacés par des espaces réservés.

![Exemple d'ingestion de deck anonymisé](assets/readme/deck-intake-sanitized.png)

Ce que Venture-Ops a fait avec ce cas réel :

- extrait le deck actuel en notes structurées
- vérifié la page d'accueil et le profil public du fondateur
- trouvé une dérive narrative entre le deck et le site web
- signalé des lacunes de diligence avant l'envoi à l'investisseur
- produit un brouillon de deck frais et une liste restreinte de cibles

## Exemple de Recherche VC en Direct

Voici un instantané visuel d'une vraie recherche en direct effectuée le **24 avril 2026** pour une entreprise européenne pré-seed d'IA pour les tests / infrastructure développeur.

![Instantané de recherche VC en direct](assets/readme/live-vc-summary.png)

Pourquoi cela compte pour un fondateur non technique :

- vous ne partez pas d'une feuille blanche
- l'outil réduit le champ à une petite liste restreinte avec des raisons
- il vous donne l'angle "pourquoi cette firme" avant que vous écriviez à quiconque

## Instantanés des Sites Officiels

Ce sont les vrais sites web officiels que Venture-Ops a utilisés dans cette recherche en direct.

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

Sources en direct :

- [Crane Venture Partners](https://crane.vc/)
- [Point Nine](https://www.pointnine.com/)
- [Seedcamp](https://seedcamp.com/)
- [Frontline Seed](https://frontline.vc/frontline-seed/)
- [Playfair](https://playfair.vc/)
- [Episode 1](https://www.episode1.com/)

## Ce Que Fait Réellement un Fondateur

Si vous n'êtes pas technique, le flux de travail est simple :

1. Mettez votre histoire actuelle dans `startup.md`, `founder-bio.md` et `traction-digest.md`.
2. Ajoutez votre ronde cible et votre géographie dans `config/profile.yml`.
3. Ajoutez des noms d'investisseurs ou des URLs dans `investors.yml`.
4. Demandez à l'agent de rafraîchir le deck, scanner les investisseurs ou comparer les cibles.
5. Examinez la liste restreinte générée et répondez aux questions de suivi.
6. Envoyez uniquement les meilleures candidatures et introductions, pas tout partout.

## Fonctionnalités

| Fonctionnalité | Ce que cela signifie en pratique |
|---------|---------------------------|
| **Scanner de Cibles** | Trouve les investisseurs, accélérateurs, angels et programmes pour fondateurs qui correspondent à votre étape, secteur, géographie et tour |
| **Évaluation d'Adéquation** | Explique pourquoi une cible correspond ou ne correspond pas, plutôt que de simplement vous donner un nom |
| **Rafraîchissement du Deck** | Compare deck, site web, contributions du fondateur et preuves actuelles pour trouver les affirmations obsolètes et les slides manquantes |
| **Génération de Pitch Deck** | Rédige une narration de 10-12 slides et l'exporte en HTML/PDF |
| **Boucle de Questions du Fondateur** | Pose les questions à plus haute valeur quand votre histoire est incomplète ou incohérente |
| **Mémoire Actualités / Tendances** | Suit les évolutions du marché, les incidents pertinents et les accroches de timing de catégorie dans `market-watch.md` |
| **Suivi du Pipeline** | Garde une seule source de vérité pour les cibles, les statuts et le timing de suivi |
| **Humain dans la Boucle** | Rédige et recommande, tandis que le fondateur garde le contrôle des soumissions |

## Cas d'Usage Exemples

### 1. Rafraîchir un deck obsolète avant des réunions avec des investisseurs

Vous avez :

- un deck PDF de quelques semaines
- un site web de startup qui a évolué
- des mises à jour produit qui ne se reflètent pas dans la narration

Utilisez Venture-Ops pour :

- comparer le deck contre la page d'accueil
- signaler les métriques manquantes, la portée produit dépassée et les captures d'écran obsolètes
- poser des questions ciblées au fondateur
- générer un brouillon actualisé de 12 slides

### 2. Trouver des investisseurs vraiment adaptés plutôt que des listes larges

Vous êtes un fondateur pré-seed basé à Berlin qui construit de l'infrastructure développeur.

Utilisez Venture-Ops pour :

- configurer votre profil cible une fois
- scanner un univers d'investisseurs sélectionné
- classer les cibles par adéquation
- identifier qui mérite du temps cette semaine et qui doit être ignoré

### 3. Candidater à des accélérateurs sans réponses génériques

Vous voulez candidater à YC, EF, Antler ou un autre programme pour fondateurs.

Utilisez Venture-Ops pour :

- adapter l'histoire de l'entreprise à chaque programme
- générer des biographies de fondateur plus percutantes et des réponses de candidature
- mettre en évidence où le deck sous-explique le "pourquoi maintenant"

### 4. Maintenir la narration de fundraising à jour

Le marché évolue vite.

Utilisez Venture-Ops pour :

- surveiller les tendances actuelles et les actualités d'entreprises adjacentes
- mettre à jour `market-watch.md`
- détecter les signaux "ceci devrait changer dans le deck maintenant" avant le prochain appel avec des investisseurs

## Démarrage Rapide

```bash
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops
npm install
npx playwright install chromium
npm run doctor
```

Puis personnalisez :

1. Éditez `startup.md` avec la source de vérité de l'entreprise.
2. Éditez `founder-bio.md` avec le parcours du fondateur et la crédibilité.
3. Éditez `traction-digest.md` avec les métriques, les clients et les preuves.
4. Éditez `market-watch.md` avec les tendances, les mouvements des concurrents et les accroches de timing.
5. Éditez `config/profile.yml` pour l'étape, la géographie, la taille du tour et le ciblage des investisseurs.
6. Éditez `investors.yml` pour ajouter des fonds, des angels, des accélérateurs, des subventions ou des programmes pour fondateurs que vous souhaitez suivre.

Si vous souhaitez actualiser les visuels publics :

```bash
npm run readme:assets
```

## Utilisation

### Commandes locales

```bash
npm run doctor                  # initialize and verify setup
npm run scan -- --dry-run       # preview matching targets
npm run scan                    # append matches to data/pipeline.md
npm run verify                  # validate tracker/report integrity
npm run deck -- deck.html out.pdf
npm run followup                # surface follow-up candidates from tracker
```

### Dans un agent de codage IA

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

Ou collez simplement :

- une URL de VC
- une page d'accélérateur
- votre deck actuel
- votre site de startup

et demandez à l'agent d'exécuter le mode pertinent.

## Exemples de Prompts

```text
Refresh my deck from this PDF and compare it against my website.

Find the top 10 VCs in Europe for a pre-seed developer-tools company.

Evaluate whether YC or EF is the stronger fit for us right now.

Turn this existing fundraising narrative into a tighter 12-slide deck.

Read my startup front page and tell me what an investor would still find unclear.

Update market-watch.md with the last 30 days of relevant category news.
```

## Comment Ça Fonctionne

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

Le point important : Venture-Ops n'est pas juste "écris-moi un deck." C'est un modèle opérationnel réutilisable :

- fichiers de source de vérité
- flux de travail basés sur des modes
- scanner d'investisseurs
- boucle de rafraîchissement
- mémoire narrative
- discipline de tracker

## Fichiers Principaux

| Fichier | Objectif |
|------|---------|
| `startup.md` | Source de vérité de l'entreprise : problème, solution, marché, traction, feuille de route |
| `founder-bio.md` | Narration du fondateur, crédibilité, adéquation fondateur-marché |
| `traction-digest.md` | Mémoire compacte de points de preuve pour les matériaux investisseurs |
| `market-watch.md` | Tendances actuelles, accroches d'actualités, signaux concurrentiels |
| `config/profile.yml` | Profil de levée, tour, géographie, secteurs, types de cibles idéaux |
| `investors.yml` | Univers cible sélectionné pour le scanning et la correspondance d'adéquation |
| `data/pipeline.md` | Cibles en attente à traiter |
| `data/targets.md` | Tracker de fundraising |
| `reports/*` | Évaluations générées, brouillons de decks et audits de rafraîchissement |
| `output/*` | HTML de slides générées et PDFs |

## Structure du Projet

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

## Principe de Fonctionnement

C'est un filtre, pas une machine à spam.

Un petit nombre de conversations avec des investisseurs à fort ajustement et contexte riche surpasse les approches à froid larges. Venture-Ops devrait rendre le fondateur plus affûté, pas plus bruyant.

Il devrait également s'améliorer avec le temps :

- chaque correction du fondateur affine le profil
- chaque nouvelle métrique améliore le deck
- chaque question manquée devient un élément futur de liste de contrôle
- chaque changement de marché met à jour la mémoire narrative

## Avertissement

**Venture-Ops est un flux de travail local open-source, pas une plateforme de fundraising hébergée.**

En l'utilisant, vous reconnaissez :

1. **Vous contrôlez vos données.** Les détails du fondateur, les notes d'investisseurs, la traction et les matériaux de fundraising restent sur votre machine sauf si vous choisissez de les envoyer à un fournisseur d'IA.
2. **Vous contrôlez les soumissions.** Le système rédige et recommande, mais il ne doit pas soumettre des candidatures ou envoyer des messages d'approche en votre nom.
3. **Vous vérifiez les faits actuels.** Les partenaires investisseurs, les délais, les tailles de chèques et les conditions des programmes changent fréquemment ; les affirmations actuelles doivent être vérifiées avant utilisation.
4. **Aucune garantie.** Les scores d'adéquation sont des recommandations, pas des vérités. Les investisseurs ne sont pas des systèmes déterministes. Faites preuve de jugement.

## Licence

MIT
