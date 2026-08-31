# 🧠 Obsidian WorkOS (Agentic-First & Workstream-Driven)

Willkommen bei **Obsidian WorkOS** – dem produktionsreifen Second-Brain-, Aufgaben- und Wissenssystem für [Obsidian](https://obsidian.md).

WorkOS verbindet ein **strukturiertes atomares Datenmodell** mit einer **gekapselten Workstream-Architektur**, **Live-Kollisionsschutz für KI-Agenten** und einer **universellen KI-Suite** für Antigravity, Claude Code, Codex, Cursor und lokale LLMs (Ollama).

---

## ⚡ Highlights auf einen Blick

- 🏛️ **Gekapselte Workstreams (`20_Workstreams/`)**: Jedes große Projekt besitzt einen isolierten Bereich mit eigener `README.md` (Strategie & Meilensteine), lokaler `AGENTS.md` (KI-Persona & Richtlinien), `Tasks/` und `Notes/`.
- 📋 **Interaktives React Kanban Dashboard**: Drag & Drop Aufgaben-Board mit Umschaltung auf **Workstream-Swimlanes**, Omnibar-Schnellerfassung und Metriken-Widget.
- 🤖 **WorkOS Agent Suite (KI & MCP)**: 1-Klick-Triage, Task-Zerlegung in Checkboxen und standardisierter **MCP-Server** für Antigravity, Claude Code und Codex.
- 🛡️ **Agent Lock Guard**: Schützt deine Notizen während der KI-Bearbeitung durch automatischen Lesemodus, Live-Banner mit Stoppuhr und 1-Klick-Entsperrung.
- 🗂️ **Atomare Datenverträge (`.schemas/`)**: Jede Notiz und Aufgabe folgt validierten JSON-Schemas – 100% sauber versionierbar und zukunftssicher.

---

## 🚀 Schnellstart für neue Benutzer (In 3 Schritten)

### 1. In Obsidian öffnen
1. Starte die Obsidian App.
2. Wähle **"Open folder as vault"** (*Ordner als Vault öffnen*) und wähle dieses Verzeichnis (`Obsidian WorkOS`).
3. Alle vorinstallierten Plugins (**WorkOS Dashboard**, **Agent Lock Guard**, **WorkOS Agent Suite**) sind sofort einsatzbereit!

### 2. Das Dashboard öffnen
* Klicke in der linken Navigationsleiste auf das **Dashboard-Icon** (oder drücke `Strg + P` und tippe `WorkOS Dashboard öffnen`).
* Hier findest du dein interaktives Kanban-Board, deine Workstreams und die Schnell-Eingabe (*Omnibar*).

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

## 🤖 KI-Agenten anbinden (Antigravity, Claude Code, Codex, Ollama)

### 1. In Obsidian (1-Klick Aktionen)
Öffne die **Einstellungen ➔ WorkOS Agent Suite** und wähle deine bevorzugte Engine:
* **Ollama (Lokal & Offline)**: Keine Cloud, 100% lokal (`llama3`, `mistral`, `qwen2.5`).
* **CLI-Engines**: Codex CLI (`codex`), Claude Code CLI (`claude`), Antigravity CLI (`agy`).
* **Direct Cloud APIs**: Gemini, Anthropic Claude, OpenAI.

### 2. In Claude Code CLI (Terminal)
Einmalig im Terminal registrieren:
```bash
claude mcp add workos -- node "C:\Pfad\zu\obsidian-workos-agent-suite\dist\mcp-server.js" --vault "C:\Pfad\zu\Obsidian WorkOS"
```
Danach im Terminal einfach sagen:
> *"Triage meine Inbox gemäß WorkOS"*

### 3. In Antigravity & Codex / Cursor
Trage den Server in deine `mcp.json` ein:
```json
{
  "mcpServers": {
    "workos": {
      "command": "node",
      "args": [
        "C:\\Pfad\\zu\\obsidian-workos-agent-suite\\dist\\mcp-server.js",
        "--vault",
        "C:\\Pfad\\zu\\Obsidian WorkOS"
      ]
    }
  }
}
```

---

## 🏛️ Das WorkOS 3-Säulen Ökosystem (Repositories)

Das Gesamtsystem ist modular in 3 Repositories unterteilt:

1. **🏛️ [Obsidian-WorkOS](https://github.com/th-ring/Obsidian-WorkOS)** (Dieser Vault): Reines Wissen, Notizen, Workstreams & Schemas.
2. **🤖 [obsidian-workos-agent-suite](https://github.com/th-ring/obsidian-workos-agent-suite)**: Headless MCP-Server, CLI-Runner & Obsidian Plugin Bridge.
3. **🛡️ [obsidian-agent-lock-guard](https://github.com/th-ring/obsidian-agent-lock-guard)**: Concurrency Control, Live-Banner & Read-Only Guard.
