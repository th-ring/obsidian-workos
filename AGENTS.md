# 🤖 Global Agent Directives: Obsidian WorkOS

Dieses Dokument definiert die universellen Systemregeln und Schnittstellen für alle autonomen KI-Agenten (Antigravity, Claude Code, Cursor, Windsurf, Aider, CLI-Tools & Hintergrund-Prozesse), die innerhalb dieses Obsidian-Vaults Lese- und Schreiboperationen durchführen.

---

## 🎯 1. Datenmodell & Schema-Garantie

- **YAML Frontmatter Validität**: Jede neu erstellte oder bearbeitete Markdown-Datei MUSS ein vollständiges YAML-Frontmatter gemäß den JSON-Schemas in `.schemas/` enthalten.
- **Dates**: Immer im ISO-Format `YYYY-MM-DD` angeben.
- **Workstream-Verknüpfung**: Immer im Obsidian Wikilink-Format: `workstream: "[[Workstream-Name]]"`.
- **Keine Datenbeschädigung**: Modifiziere primär das YAML-Frontmatter. Bestehender Markdown-Body, Kommentare und manuelle Notizen müssen erhalten bleiben.

---

## 📁 2. Ordner-Hierarchie & Verantwortlichkeiten

```text
Obsidian WorkOS/
├── 🤖 AGENTS.md                  # Universelle Direktiven (diese Datei)
├── 00_Inbox/                    # Schnellerfassungen & Braindumps (type: braindump, status: unprocessed)
├── 10_Tasks/                    # Globale / ad-hoc Aufgaben (type: task)
├── 20_Workstreams/<Name>/       # Gekapselte Initiativen (type: workstream)
│   ├── README.md                # Master-Übersicht & Vision
│   ├── AGENTS.md                # Lokale Persona & Fachrichtlinien
│   ├── Tasks/                   # Zugehörige Tasks
│   └── Notes/                   # Lokale Notizen & Architektur-Entscheidungen (ADRs)
├── 30_Notes/                    # Globale Wissensnotizen, Konzepte & Referenzen (type: note)
└── 40_Archive/                  # Abgeschlossene Tasks & archivierte Workstreams
```

---

## 🏛️ 3. Lokale Workstream-Kaskade (`20_Workstreams/<Name>/AGENTS.md`)

Befindet sich ein Task oder eine Notiz innerhalb von `20_Workstreams/<Name>/`, MUSS der Agent zusätzlich die dortige `./AGENTS.md` laden und deren Vorgaben befolgen:
* **Persona & Rolle**: Einhaltung der domänenspezifischen Fachrolle (z. B. Senior DevOps Engineer vs. Compliance Auditor).
* **Lokale Ablage**: Neue Tasks für diesen Workstream vorrangig in `./Tasks/` und Wissensnotizen in `./Notes/` ablegen.

---

## ⚡ 4. Task-Status & Lifecycle

- `inbox`: Neu erstellt, noch unstrukturiert.
- `backlog`: Zurückgestellt für spätere Iterationen.
- `todo`: Bereit zur Bearbeitung.
- `in_progress`: Aktuell in Bearbeitung.
- `blocked`: Wartet auf externe Freigabe oder Abhängigkeit.
- `done`: Erfolgreich abgeschlossen.
- `archived`: Ins Archiv verschoben (`40_Archive/`).

---

## 🛡️ 5. Human-in-the-Loop & Review Queue

- **Agenten-Zuweisung**: Wenn ein Agent eine Aufgabe übernimmt oder generiert: `assigned_to: agent` oder `assigned_to: hybrid`.
- **Review Queue**: Nach eigenständiger Bearbeitung setzt der Agent `review_status: pending`.
- **Freigabe**: Der Benutzer prüft die Arbeit und bestätigt sie mit 1-Klick im **Agent Hub** des Dashboards (`review_status: approved` und `status: done`).

---

## 🛠️ 6. Playbook Quick-Workflows

- **Inbox Triage**: Lies `00_Inbox/` und wandle Einträge gemäß `.agents/triage_workflow.md` in Tasks, Notizen oder Workstreams um.
- **Task Decomposition**: Analysiere offene Tasks und ergänze konkrete `- [ ]` Checkboxen gemäß `.agents/task_decomposition.md`.

---

## 🔒 7. Live Concurrency & Agent Locking (`Agent Lock Guard`)

Um Schreibkollisionen mit dem Benutzer oder anderen Agenten zu verhindern:
- **Lock setzen bei Deep Edits**: Wenn du eine bestehende Datei analysierst und umfangreich bearbeitest:
  ```yaml
  agent_state: processing
  locked_by: "agent:antigravity"   # Dein Agent-Name
  locked_at: "2026-08-30T22:40:00" # Aktueller ISO-Timestamp
  ```
- **Lock freigeben**: Sobald die Datei fertiggestellt ist, setze `agent_state: idle` (oder entferne die Lock-Felder) und setze `review_status: pending`.
- **Neu erstellte Dateien**: Neue Tasks/Notizen direkt mit `agent_state: idle` anlegen.
- **Sequentielles Locking bei Batch-Aktionen**: Bei mehreren Dateien (z. B. Inbox-Triage) immer nur die aktuell bearbeitete Datei locken, nicht alle auf einmal.

---

## 💾 8. Atomare Commits & Multi-File Nachvollziehbarkeit (Git Integration)

- **Atomic Turn Commits**: Nach Abschluss einer logischen Aktion (z. B. Triage von 3 Braindumps oder Zerlegung eines Tasks) MÜSSEN alle Änderungen in einem einzigen sauberen Commit gebündelt werden:
  `git commit -m "feat(agent): triaged 3 inbox braindumps into 2 tasks and 1 note"`
- **Keine Checkouts / Branches**: Alle Agent-Commits erfolgen direkt auf dem `main`-Zweig.
- **Graceful Fallback**: Falls Git nicht verfügbar ist oder keine Internetverbindung besteht, werden alle Dateioperationen normal ohne Abbruch ausgeführt.

