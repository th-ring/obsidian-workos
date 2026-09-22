# 🧠 Obsidian WorkOS (Agentic-First & Workstream-Driven)

[![Obsidian](https://img.shields.io/badge/Obsidian-v1.5+-purple?logo=obsidian)](https://obsidian.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React 18](https://img.shields.io/badge/React-18-cyan?logo=react)](https://reactjs.org/)
[![MCP Ready](https://img.shields.io/badge/MCP-Server%20Ready-blue)](https://modelcontextprotocol.io)
[![Theme](https://img.shields.io/badge/Theme-ChatGPT%20Dark-emerald)](https://github.com/th-ring/obsidian-chatgpt-theme)

Willkommen bei **Obsidian WorkOS** – dem produktionsreifen Second-Brain-, Aufgaben- und Wissenssystem für [Obsidian](https://obsidian.md).

WorkOS verbindet ein **atomares, schemavalidiertes Datenmodell** mit einer **gekapselten Workstream-Architektur**, **Live-Kollisionsschutz für autonome KI-Agenten** (Antigravity, Claude Code, Cursor, Codex) und einem **interaktiven React-Kanban-Dashboard**.

---

## ⚡ Highlights auf einen Blick

* 📋 **Interaktives React Kanban Dashboard:** Aufgaben-Board mit Drag & Drop, Workstream-Swimlanes, Omnibar-Schnellerfassung und Metriken-Widget.
* 🏛️ **Gekapselte Workstreams (`20_Workstreams/`):** Jede Initiative besitzt einen eigenen Ordner mit `README.md` (Vision), lokaler `AGENTS.md` (KI-Persona), `Tasks/` und `Notes/`.
* 🛡️ **Agent Lock Guard (Kollisionsschutz):** Sperrt Notizen während KI-Agenten schreiben (automatischer Lesemodus, CodeMirror-Schreibblocker und Live-Banner mit Stoppuhr).
* 🤖 **WorkOS Agent Suite & MCP-Server:** 1-Klick-Triage für Braindumps, Task-Zerlegung in Teilaufgaben und ein nativer MCP-Server für Claude Code, Antigravity und Codex.
* 🌐 **2D/3D Knowledge Graph & Mindmap:** Hardware-beschleunigter 2D-Force-Graph, 3D-WebGL-Raum und Workstream-Mindmap mit OpenAI-Minimalist-Design.
* 🎨 **ChatGPT Minimalist Dark Theme:** Vorkonfiguriertes Theme im schlichten OpenAI-Design mit Inter-Typografie.
* 🔄 **Automatisierte Plugin-Updates (BRAT):** Das vorinstallierte BRAT-Plugin hält Dashboard, Agent Suite, Lock Guard und Knowledge Graph vollautomatisch über GitHub Releases aktuell.
* 🗂️ **Zero-Build Out-of-the-Box:** Alle Plugins und Themes sind bereits vorkompiliert und einsatzbereit im Vault enthalten.

---

## 🚀 How to Setup (Schritt-für-Schritt)

### Voraussetzungen
* Installiertes [Obsidian](https://obsidian.md) (Version 1.5 oder neuer auf Windows, macOS oder Linux).
* *(Optional)* [Git](https://git-scm.com/) für bequemes Klonen.
* *(Optional für KI/MCP)* [Node.js](https://nodejs.org/) v18+, falls du den externen MCP-Server für Claude Code oder Antigravity nutzen möchtest.

---

### Schritt 1: Vault herunterladen

Wähle eine der beiden Optionen:

#### Option A: Per Git (Empfohlen)
```bash
git clone https://github.com/th-ring/obsidian-workos.git "Obsidian WorkOS"
```

#### Option B: Als ZIP-Archiv
1. Öffne das GitHub-Repository [th-ring/obsidian-workos](https://github.com/th-ring/obsidian-workos).
2. Klicke auf den grünen Button **`Code`** ➔ **`Download ZIP`**.
3. Entpacke das Archiv in einen Ordner deiner Wahl (z. B. `Documents/Obsidian WorkOS`).

---

### Schritt 2: In Obsidian öffnen

1. Starte die Obsidian-App.
2. Klicke im Startfenster auf **"Open folder as vault"** (*Ordner als Vault öffnen*).
   *(Falls Obsidian bereits mit einem anderen Vault geöffnet ist: Klicke ganz unten links auf das Tresor-Icon und wähle "Manage vaults" ➔ "Open folder as vault").*
3. Wähle den zuvor geklonten bzw. entpackten Ordner `Obsidian WorkOS` aus.

---

### Schritt 3: Community Plugins aktivieren ⚠️ (Wichtig!)

Obsidian blockiert bei neuen oder fremden Vaults aus Sicherheitsgründen standardmäßig alle Erweiterungen (*Restricted Mode*). 

1. Obsidian zeigt beim ersten Start ein Popup: **"Restricted mode is on"** / *"Do you trust the author of this vault?"*.
2. Klicke auf **"Turn on community plugins"** (*Eingeschränkten Modus deaktivieren*).
   *(Alternativ: Zahnrad-Icon ➔ "Community plugins" ➔ "Turn on community plugins").*
3. Alle vorinstallierten WorkOS-Plugins (**Dashboard**, **Agent Lock Guard**, **Agent Suite**, **Knowledge Graph**, **BRAT**) und das **ChatGPT-Theme** werden sofort aktiv!

---

### Schritt 4: Erste Schritte im Vault

* **Dashboard öffnen:** Klicke in der linken Seitenleiste auf das **WorkOS Dashboard-Icon** (oder drücke `Strg + P` / `Cmd + P` und tippe `WorkOS Dashboard öffnen`).
* **Omnibar Schnellerfassung:** Drücke `Strg + Alt + N` (oder klicke im Dashboard auf `+ Neue Aufgabe`), um Aufgaben mit intelligenten Tags (`#prio/high`, `@Workstream-Name`) zu erfassen.
* **Gedanken erfassen & triagieren:** Lege Notizen in `00_Inbox/` ab und klicke im Dashboard auf **`⚡ Inbox triagieren`**.
* **Knowledge Graph erkunden:** Klicke auf das **Netzwerk-Icon** in der Leiste, um zwischen 2D Force, 3D WebGL und der Workstream-Mindmap zu wechseln.

---

### (Optional) Schritt 5: KI-Agenten über MCP anbinden

Wenn du externe KI-Agenten (Claude Code CLI, Antigravity, Cursor, Codex) an diesen Vault anbinden möchtest:

```bash
# Beispiel für Claude Code CLI:
claude mcp add workos -- node "pfad/zu/obsidian-workos-agent-suite/dist/mcp-server.js" --vault "pfad/zu/Obsidian WorkOS"
```
Der MCP-Server stellt Tools wie `workos_triage_inbox`, `workos_decompose_task` und `workos_vault_stats` direkt bereit.

---

## 🔄 Wie erhält man Plugin-Updates? (Auto-Updates via BRAT)

WorkOS liefert das bewährte Community-Plugin **[BRAT (Beta Reviewer's Auto-update Tester)](https://github.com/TfTHacker/obsidian42-brat)** bereits **vollständig vorinstalliert und vorkonfiguriert** mit.

### 🌟 1. Vollautomatisches Update (Standard für alle Benutzer)
* **Keine manuelle Einrichtung nötig:** Die 4 WorkOS-Repositories (`obsidian-workos-dashboard`, `obsidian-workos-agent-suite`, `obsidian-agent-lock-guard`, `obsidian-workos-knowledge-graph`) sind bereits in der Konfiguration von BRAT hinterlegt.
* **Auto-Check beim Start:** Bei jedem Start von Obsidian fragt BRAT die GitHub-Releases ab. Sobald du als Maintainer eine neue Version auf GitHub veröffentlichst, lädt BRAT die aktualisierten Dateien (`main.js`, `manifest.json`, `styles.css`) automatisch herunter.
* **Manuelles Update jederzeit anstoßen:**  
  Drücke `Strg + P` / `Cmd + P` ➔ tippe **`BRAT: Check for updates to all beta plugins and themes`** ➔ `Enter`.

### 💻 2. Für Git-Nutzer: `git pull`
Da alle kompilierten Plugin-Bundles zusätzlich im Vault-Repository unter `.obsidian/plugins/` versioniert sind, aktualisierst du das gesamte System alternativ einfach im Terminal:
```bash
git pull
```

---

## 🔍 Detaillierte Feature- & Architektur-Übersicht

### 1. 🏛️ Gekapselte Workstreams (`20_Workstreams/`)
Große Initiativen werden in sich geschlossen organisiert, um Kontextverlust zu verhindern:
* `README.md`: Vision, Strategie, Stakeholder, Kernmeilensteine.
* `AGENTS.md`: Lokale KI-Systemprompts und Verhaltensrichtlinien speziell für dieses Projekt.
* `Tasks/`: Atomare Aufgaben, die automatisch mit dem Workstream verknüpft sind.
* `Notes/`: Architektur-Entscheidungen (ADRs), Spezifikationen und Rechercheergebnisse.

### 2. 📋 React 18 Kanban Dashboard (`workos-dashboard`)
* **Status-Spalten:** Drag & Drop zwischen `Inbox`, `Todo`, `In Progress` und `Done`.
* **Workstream-Swimlanes:** Horizontale Gruppierung aller Aufgaben nach Workstream für maximale Übersicht.
* **Agent Hub:** Zentrale Übersicht aller von KI-Agenten bearbeiteten Aufgaben mit 1-Klick-Freigabe (`[ ✅ Freigeben & Done ]`).
* **Schnellerfassung (Omnibar):** Modales Eingabefenster mit Parsing für Deadlines (`due:YYYY-MM-DD`), Prioritäten (`!urgent`) und Tags.

### 3. 🛡️ Agent Lock Guard (`agent-lock-guard`)
Verhindert Schreibkonflikte, wenn autonome Agenten Notizen im Hintergrund bearbeiten:
* **Automatischer Lesemodus:** Öffnet gesperrte Notizen automatisch im Preview-Modus.
* **CodeMirror 6 Blockade:** Blockiert Tippen und Einfügen auf Code-Ebene, solange ein Lock aktiv ist.
* **Floating Header Banner:** Zeigt den Namen des aktiven Agenten, eine Live-Stoppuhr (`⏱️ seit Xs`) und einen 1-Klick-Button zum manuellen Entsperren (`[ 🔓 Freigeben ]`).
* **Statusleiste:** Zeigt global an, wie viele Notizen aktuell gesperrt sind.

### 4. 🤖 WorkOS Agent Suite (`workos-agent-suite`)
* **1-Klick Triage:** Wandelt Rohnotizen aus `00_Inbox/` in strukturierte Aufgaben, Notizen oder neue Workstreams um.
* **Task-Zerlegung:** Ergänzt bestehende Tasks um 3–6 logische Subtask-Checkboxen.
* **Multi-Engine Bridge:** Unterstützt Claude CLI, Antigravity, Ollama (lokal), OpenAI und Gemini.
* **Headless MCP-Server:** Vollständige Integration des Model Context Protocol für externe Coding-Assistenten.

### 5. 🌐 2D/3D Knowledge Graph (`workos-knowledge-graph`)
* **2D Canvas Force Graph:** Interaktives Kraftmodell mit visuellen Halos für Workstreams und Partikel-Animationen für Wikilinks.
* **3D WebGL Space:** Vollständige 3D-Navigation durch den Vault mit Kameraflügen und Knoten-Fokus.
* **Radiating Mindmap:** Horizontale Baumansicht mit kubischen Bezier-Kurven und ausklappbaren Zweigen.

### 6. 🗂️ Atomares Datenmodell & JSON-Schemas (`.schemas/`)
Jede Datei im Vault folgt einem strikten Vertrag im YAML-Frontmatter:
* **Task Schema:** `type: task`, `status`, `priority`, `workstream`, `due_date`, `assigned_to`, `agent_state`.
* **Note Schema:** `type: note`, `tags`, `workstream`, `created`.
* **Braindump Schema:** `type: braindump`, `status: unprocessed`.

---

## 📁 Ordnerstruktur im Detail

```text
Obsidian WorkOS/
├── 🤖 AGENTS.md                  # Universelle Direktiven für alle KI-Agenten
├── 🤖 CLAUDE.md                  # Claude Code CLI Einstiegspunkt
├── 🤖 .cursorrules               # Cursor / Codex Einstiegspunkt
│
├── 00_Inbox/                    # Schnellerfassungen & Braindumps (type: braindump, status: unprocessed)
├── 10_Tasks/                    # Globale / ad-hoc Aufgaben (type: task, status: todo | in_progress ...)
├── 20_Workstreams/<Name>/       # Gekapselte Initiativen (type: workstream)
│   ├── README.md                # Master-Übersicht & Vision
│   ├── AGENTS.md                # Lokale Persona & Fachrichtlinien
│   ├── Tasks/                   # Zugehörige Tasks
│   └── Notes/                   # Lokale Notizen & Architektur-Entscheidungen (ADRs)
├── 30_Notes/                    # Globale Wissensnotizen, Konzepte & Referenzen (type: note)
├── 40_Archive/                  # Abgeschlossene Tasks & archivierte Workstreams
│
├── .obsidian/                   # Vault-Konfiguration, ChatGPT-Theme & vorinstallierte Plugins
│   ├── plugins/                 # Kompilierte Plugins (Dashboard, Lock Guard, Suite, Graph)
│   └── themes/                  # ChatGPT Dark Theme
│
└── .schemas/                    # JSON-Schema-Definitionen für task, note, braindump
```

---

## 🏛️ Das modulare WorkOS Ökosystem (Entwickler-Repositories)

Für Entwickler, die an den einzelnen Modulen mitwirken möchten:

1. 🏛️ **[Obsidian-WorkOS](https://github.com/th-ring/obsidian-workos)** (Dieser Vault): Wissensdatenbank, Workstreams & Schemas.
2. 📊 **[obsidian-workos-dashboard](https://github.com/th-ring/obsidian-workos-dashboard)**: React 18 + Tailwind Kanban Dashboard.
3. 🤖 **[obsidian-workos-agent-suite](https://github.com/th-ring/obsidian-workos-agent-suite)**: Headless MCP-Server & Plugin Bridge.
4. 🛡️ **[obsidian-agent-lock-guard](https://github.com/th-ring/obsidian-agent-lock-guard)**: Concurrency Control & Read-Only Guard.
5. 🌐 **[obsidian-workos-knowledge-graph](https://github.com/th-ring/obsidian-workos-knowledge-graph)**: 2D/3D Force Graph & Mindmap.
6. 🎨 **[obsidian-chatgpt-theme](https://github.com/th-ring/obsidian-chatgpt-theme)**: Minimalistisches OpenAI Dark Theme für Obsidian.

---

## 📄 Lizenz

MIT License © 2026 Obsidian WorkOS Team
