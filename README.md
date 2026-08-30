# 🧠 Obsidian WorkOS (Agentic-First & Workstream-Driven)

Ein produktionsreifes **Second-Brain & Task-Management-System** für [Obsidian](https://obsidian.md) mit atomarem YAML-Metadatenmodell, gekapselter Workstream-Hierarchie, Agenten-Spezifikationen (`AGENTS.md`) und einem maßgeschneiderten **React 18 + Tailwind CSS Dashboard Plugin** inklusive Live Drag & Drop Kanban Board mit **Swimlanes**.

---

## ⚡ Highlights

- 🏛️ **Gekapselte Workstreams (`20_Workstreams/`)**: Jeder Workstream ist ein vollständiger Kontext-Ordner mit eigener `README.md` (Strategie & Meilensteine), `AGENTS.md` (KI-Persona & Arbeitsregeln), `Tasks/` und `Notes/`.
- 🗂️ **Atomares Datenmodell**: 1 Datei = 1 Task / Braindump / Notiz mit standardisiertem YAML-Frontmatter (keine Parsing-Konflikte, 100% git-versionierbar).
- 📋 **Live Kanban Board & Swimlanes**: Interaktives Drag & Drop mit Umschaltmöglichkeit zwischen klassischer **Spaltenansicht** und horizontalen **Workstream-Swimlanes**.
- ⚡ **Omnibar Quick-Capture**: Schnelleingabezeile für Braindumps, Tasks, Workstreams und Notizen direkt im Dashboard (inkl. Hashtags, Priorität, Personen und Workstream-Zuweisung).
- 📥 **Inbox Triage Desk**: 1-Klick Aktionen zur schnellen Konvertierung von Rohgedanken in strukturierte Tasks oder Wissensnotizen.
- 📂 **Workstream- & Fortschrittsübersicht**: Automatische Aggregation von Task-Fortschrittsbalken, verknüpften Notizen und `AGENTS.md` Quick-Status pro Workstream.
- 🤖 **Agentic-First & AI Review Queue**: Vollständige Unterstützung für Antigravity / Claude Code / Background-Agents mit Schemas (`.schemas/`), Playbooks (`.agents/`), lokaler `AGENTS.md` und CLI-Tools (`npm run agent:stats`, `npm run agent:triage`).
- 📊 **Metriken-Widget**: Visuelle Übersicht über Completion Rate, Prioritäten-Verteilung, Workload und Workstreams.

---

## 📁 Ordnerstruktur (Clean & Dotfolder-optimiert)

```
Obsidian WorkOS/ (Sichtbar in Obsidian - 100% Clutter-frei)
├── AGENTS.md           # 🤖 Universelle Direktiven & Leitplanken für ALLE KI-Agenten
├── 00_Inbox/           # Unverarbeitete Braindumps & Standard-Ablage für neue Gedanken
├── 10_Tasks/           # Globale / ad-hoc Aufgaben (type: task, status: todo | in_progress ...)
├── 20_Workstreams/     # Gekapselte Initiativen & Programme (type: workstream)
│   └── <Workstream-Name>/
│       ├── README.md   # Master-MOC (Vision, Phasen, Meilensteine)
│       ├── AGENTS.md   # Dedizierte Agenten-Instruktionen & Persona
│       ├── Tasks/      # Zugehörige Aufgaben dieses Workstreams
│       └── Notes/      # Lokale Meeting-Mitschriften, ADRs & Notizen
├── 30_Notes/           # Globale Wissensnotizen, Konzepte & Referenzen (type: note)
└── 40_Archive/         # Abgeschlossene Tasks & archivierte Workstreams

Hintergrund & Agent-Infrastruktur (In Obsidian automatisch unsichtbar)
├── .obsidian/          # Obsidian Vault Konfiguration & aktives Plugin
├── .schemas/           # JSON-Schemas zur Validierung der Frontmatters
├── .templates/         # Notizvorlagen für Tasks, Braindumps, Workstreams, Notizen
├── .agents/            # Agenten-Workflows, Triage-Anleitungen & Prompts
├── .scripts/           # Headless CLI-Tools für KI-Agenten (stats.ts, triage.ts)
└── .src/               # Quellcode des Custom Dashboard Plugins (React + Tailwind)
```

---

## 🚀 Erste Schritte

### 1. In Obsidian öffnen
1. Öffne Obsidian.
2. Wähle **"Open folder as vault"** (*Ordner als Vault öffnen*) und wähle diesen Ordner (`Obsidian WorkOS`).
3. Das Plugin **WorkOS Dashboard** ist bereits kompiliert und in `.obsidian/community-plugins.json` aktiviert.
4. Klicke in der linken Seitenleiste auf das neue **Dashboard-Icon** (oder drücke `Strg + P` und tippe `WorkOS Dashboard öffnen`).

### 2. Entwicklung & Plugin-Builds
Falls du den React/Tailwind-Code des Plugins anpassen möchtest:
```bash
# Abhängigkeiten installieren
npm install

# Plugin kompilieren (erzeugt .obsidian/plugins/workos-dashboard/main.js & styles.css)
npm run build

# Live Watch-Mode während der Entwicklung
npm run dev
```

### 3. Agent CLI Tools ausführen
```bash
# Vault-Metriken im Terminal anzeigen
npm run agent:stats

# Unverarbeitete Inbox-Elemente scannen
npm run agent:triage
```

---

## 📝 YAML Frontmatter Spezifikationen

### Workstream (`20_Workstreams/<Name>/README.md`)
```yaml
---
type: workstream
title: "Obsidian WorkOS Setup & Launch"
status: active          # planning | active | on_hold | completed | archived
priority: urgent        # low | medium | high | urgent
target_date: 2026-09-01
created: 2026-08-25
lead: user              # user | agent | team
tags:
  - core
  - workos
---
```

### Task (`10_Tasks/*.md` oder `20_Workstreams/<Name>/Tasks/*.md`)
```yaml
---
type: task
title: "Dashboard Kanban Board implementieren"
status: in_progress     # inbox | backlog | todo | in_progress | blocked | done | archived
priority: high          # low | medium | high | urgent
workstream: "[[Obsidian-WorkOS-Launch]]"
due: 2026-08-30
created: 2026-08-25
tags:
  - workos
  - frontend
assigned_to: user       # user | agent | hybrid
review_status: null     # pending | approved | rejected | null
---

## Kontext & Beschreibung
Beschreibung der Aufgabe.

## Subtasks
- [x] Erste Teilaufgabe
- [ ] Zweite Teilaufgabe
```

---

## 🤖 Agentic-First Workflows

KI-Agenten können den Vault völlig autonom über das Dateisystem oder CLI-Befehle bedienen:
- **Workstream Context**: Ein Agent liest die lokale `AGENTS.md` im jeweiligen Workstream-Ordner für domänenspezifische Rollen und Qualitätskriterien.
- **Triage Workflow**: Liest `00_Inbox/` und wandelt Einträge gemäß `.agents/triage_workflow.md` in Tasks, Notizen oder neue Workstreams um.
- **Task Decomposition**: Liest offene Tasks und ergänzt strukturierte `- [ ]` Checkboxen gemäß `.agents/task_decomposition.md`.
- **Review Queue**: Wenn ein Agent eine Aufgabe erledigt, setzt er `assigned_to: agent` und `review_status: pending`. Im Dashboard-Tab **Agent Hub** kann der Benutzer die Arbeit mit einem Klick freigeben (`Freigeben & Done`).
