# 🧠 Obsidian WorkOS (Agentic-First & Workstream-Driven)

Willkommen bei **Obsidian WorkOS** – dem produktionsreifen Second-Brain-, Aufgaben- und Wissenssystem für [Obsidian](https://obsidian.md).

WorkOS verbindet ein **strukturiertes atomares Datenmodell** mit einer **gekapselten Workstream-Architektur**, **Live-Kollisionsschutz für KI-Agenten** und einer **universellen KI-Suite** für Antigravity, Claude Code, Codex, Cursor und lokale LLMs (Ollama).

---

## ⚡ Highlights auf einen Blick

- 🏛️ **Gekapselte Workstreams (`20_Workstreams/`)**: Jedes große Projekt besitzt einen isolierten Bereich mit eigener `README.md` (Strategie & Meilensteine), lokaler `AGENTS.md` (KI-Persona & Richtlinien), `Tasks/` und `Notes/`.
- 📋 **Interaktives React Kanban Dashboard**: Drag & Drop Aufgaben-Board mit Umschaltung auf **Workstream-Swimlanes**, Omnibar-Schnellerfassung und Metriken-Widget.
- 🤖 **WorkOS Agent Suite (KI & MCP)**: 1-Klick-Triage im **Agent Hub**, Task-Zerlegung in Checkboxen und standardisierter **MCP-Server** für Antigravity, Claude Code und Codex.
- 🛡️ **Agent Lock Guard**: Schützt deine Notizen während der KI-Bearbeitung durch automatischen Lesemodus, Live-Banner mit Stoppuhr und 1-Klick-Entsperrung.
- 🗂️ **Atomare Datenverträge (`.schemas/`)**: Jede Notiz und Aufgabe folgt validierten JSON-Schemas – 100% sauber versionierbar und zukunftssicher.

---

## 🚀 Schnellstart für neue Benutzer (In 3 Schritten)

### 1. In Obsidian öffnen
1. Starte die Obsidian App.
2. Wähle **"Open folder as vault"** (*Ordner als Vault öffnen*) und wähle dieses Verzeichnis (`Obsidian WorkOS`).
3. Alle vorinstallierten Plugins (**WorkOS Dashboard**, **Agent Lock Guard**, **WorkOS Agent Suite**) sind sofort einsatzbereit!

### 2. Das Dashboard & den Agent Hub öffnen
* Klicke in der linken Navigationsleiste auf das **Dashboard-Icon** (oder drücke `Strg + P` und tippe `WorkOS Dashboard öffnen`).
* Wechsle in den Tab **Agent Hub**, um KI-Aktionen mit 1 Klick auszulösen und Ergebnisse freizugeben.

### 3. Rohgedanken per KI triagieren
1. Schreibe Gedanken oder Mitschriften einfach als Notiz in `00_Inbox/`.
2. Klicke im Dashboard auf **`⚡ Inbox triagieren`** (oder drücke `Strg + P` ➔ `WorkOS: Inbox triagieren`).
3. Die KI ordnet deine Gedanken automatisch in Aufgaben (`10_Tasks/`), Wissensnotizen (`30_Notes/`) oder Workstreams ein!

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
└── .schemas/                    # JSON-Schema-Definitionen für task, note, braindump
```

---

## 🏛️ Das modulare WorkOS Ökosystem (GitHub Repositories)

Das Gesamtsystem ist modular in 5 spezialisierte Repositories unterteilt:

1. 🏛️ **[Obsidian-WorkOS](https://github.com/th-ring/Obsidian-WorkOS)** (Dieser Vault): Reines Wissen, Notizen, Workstreams & Schemas.
2. 📊 **[obsidian-workos-dashboard](https://github.com/th-ring/obsidian-workos-dashboard)**: React 18 + Tailwind Kanban Dashboard, Swimlanes & Agent Hub.
3. 🤖 **[obsidian-workos-agent-suite](https://github.com/th-ring/obsidian-workos-agent-suite)**: Headless MCP-Server, CLI-Runner & Plugin Bridge.
4. 🛡️ **[obsidian-agent-lock-guard](https://github.com/th-ring/obsidian-agent-lock-guard)**: Concurrency Control, Live-Banner & Read-Only Guard.
5. 🌐 **[obsidian-workos-knowledge-graph](https://github.com/th-ring/obsidian-workos-knowledge-graph)**: 2D/3D Force Graph & Workstream Mindmap Plugin.
