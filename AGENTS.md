# 🤖 Universal Agent Directives: Obsidian WorkOS

Dieses Dokument definiert die universellen Systemregeln und Schnittstellen für alle autonomen KI-Agenten (**Antigravity**, **Claude Code**, **Codex**, **Cursor**, **Windsurf**, **Aider** und Hintergrund-Daemons), die innerhalb dieses Obsidian-Vaults Lese- und Schreiboperationen durchführen.

---

## 🏛️ 1. Clean Architecture & Rollenverteilung

Das WorkOS-Ökosystem ist strikt in drei Säulen modularisiert:

1. **🏛️ Obsidian-WorkOS (Dieser Vault):**  
   Reines Wissens-, Aufgaben- und Daten-Repository. Enthält keine Entwicklungswerkzeuge oder Skripte, sondern Datenverträge (`.schemas/`) und Markdown-Inhalte.
2. **🤖 WorkOS Agent Suite (`obsidian-workos-agent-suite`):**  
   Das zentrale MCP-Server- und Plugin-Paket. Stellt alle standardisierten Werkzeuge (`workos_*`) für externe Agenten und 1-Klick Aktionen in Obsidian bereit.
3. **🛡️ Agent Lock Guard (`obsidian-agent-lock-guard`):**  
   Das Concurrency-Plugin. Verhindert Schreibkollisionen in Obsidian durch automatischen Lesemodus und Live-Banner.
4. **🌐 WorkOS Knowledge Graph (`obsidian-workos-knowledge-graph`):**  
   2D/3D Force Graph & Workstream-Mindmap mit OpenAI-Minimalist-UI zur visuellen Vault-Exploration.

---

## 🎯 2. Datenmodell & Schema-Garantie

- **YAML Frontmatter Validität**: Jede neu erstellte oder bearbeitete Markdown-Datei MUSS ein vollständiges YAML-Frontmatter gemäß den JSON-Schemas in `.schemas/` enthalten.
- **Dates**: Immer im ISO-Format `YYYY-MM-DD` angeben.
- **Workstream-Verknüpfung**: Immer im Obsidian Wikilink-Format: `workstream: "[[Workstream-Name]]"`.
- **Keine Datenbeschädigung**: Modifiziere primär das YAML-Frontmatter. Bestehender Markdown-Body, Kommentare und manuelle Notizen müssen erhalten bleiben.

---

## 📁 3. Ordner-Hierarchie & Verantwortlichkeiten

```text
Obsidian WorkOS/
├── 🤖 AGENTS.md                  # Universelle Direktiven (diese Datei)
├── 🤖 CLAUDE.md                  # Claude Code CLI Einstiegspunkt
├── 🤖 .cursorrules               # Cursor / Codex Einstiegspunkt
├── 00_Inbox/                    # Schnellerfassungen & Braindumps (type: braindump, status: unprocessed)
├── 10_Tasks/                    # Globale / ad-hoc Aufgaben (type: task)
├── 20_Workstreams/<Name>/       # Gekapselte Initiativen (type: workstream)
│   ├── README.md                # Master-Übersicht & Vision
│   ├── AGENTS.md                # Lokale Persona & Fachrichtlinien
│   ├── Tasks/                   # Zugehörige Tasks
│   └── Notes/                   # Lokale Notizen & Architektur-Entscheidungen (ADRs)
├── 30_Notes/                    # Globale Wissensnotizen, Konzepte & Referenzen (type: note)
├── 40_Archive/                  # Abgeschlossene Tasks & archivierte Workstreams
└── .schemas/                    # JSON Schema Definitionen
```

---

## 🛠️ 4. Verfügbare MCP-Tools der WorkOS Agent Suite

Wenn du über das **Model Context Protocol (MCP)** an diesen Vault angebunden bist, nutze bevorzugt die folgenden standardisierten Werkzeuge:

| MCP-Tool | Zweck & Verhalten |
| :--- | :--- |
| **`workos_triage_inbox`** | Scannt `00_Inbox/`, wandelt Braindumps in Tasks/Notes/Workstreams um, setzt Schemas und archiviert das Original. |
| **`workos_decompose_task`** | Analysiert bestehende Aufgaben und ergänzt 3–6 konkrete Subtask-Checkboxen (`- [ ]`) unter `## Subtasks`. |
| **`workos_create_workstream`** | Erstellt neue Workstream-Initiativen (`20_Workstreams/<Name>/`) mit README, AGENTS.md, Tasks/ und Notes/. |
| **`workos_vault_stats`** | Liefert aktuelle Metriken (Inbox-Status, Task-Verteilung, aktive Sperren). |
| **`workos_lock_guard`** | Setzt oder löst Concurrency-Sperren programmatisch. |

---

## 🔒 5. Live Concurrency & Agent Locking (`Agent Lock Guard`)

Um Schreibkollisionen mit dem Benutzer oder anderen Agenten in Obsidian zu verhindern:
- **Lock setzen bei Deep Edits**: Wenn du eine bestehende Datei analysierst und umfangreich bearbeitest:
  ```yaml
  agent_state: processing
  locked_by: "agent:antigravity"   # Dein Agent-Name
  locked_at: "2026-08-30T22:40:00" # Aktueller ISO-Timestamp
  ```
- **Lock freigeben**: Sobald die Datei fertiggestellt ist, setze `agent_state: idle` (oder entferne die Lock-Felder) und setze `review_status: pending`.
- **Neu erstellte Dateien**: Neue Tasks/Notizen direkt mit `agent_state: idle` anlegen.
- **Sequentielles Locking**: Bei mehreren Dateien (z. B. Batch-Triage) immer nur die aktuell bearbeitete Datei locken, nicht alle auf einmal.

---

## 🛡️ 6. Human-in-the-Loop & Review Queue

- **Agenten-Zuweisung**: Wenn ein Agent eine Aufgabe übernimmt oder generiert: `assigned_to: agent` oder `assigned_to: hybrid`.
- **Review Queue**: Nach eigenständiger Bearbeitung setzt der Agent `review_status: pending`.
- **Freigabe**: Der Benutzer prüft die Arbeit im **Agent Hub** des Dashboards und bestätigt sie mit 1 Klick (`review_status: approved`).

---

## 💾 7. Atomare Commits & Git-Integration

- **Atomic Turn Commits**: Nach Abschluss einer logischen Aktion MÜSSEN alle Änderungen in einem einzigen sauberen Commit gebündelt werden:
  `git commit -m "feat(agent): triaged 3 inbox braindumps into 2 tasks and 1 note"`
- **Keine Checkouts / Branches**: Alle Agent-Commits erfolgen direkt auf dem `main`-Zweig.
- **Graceful Fallback**: Falls Git nicht verfügbar ist oder keine Internetverbindung besteht, werden alle Dateioperationen normal ohne Abbruch ausgeführt.
