# Agent Guidelines für Obsidian WorkOS

Dieses Dokument definiert die Richtlinien für autonome KI-Agenten, die innerhalb dieses Obsidian-Vaults Lese- und Schreiboperationen durchführen.

## 1. Datenmodell & Schema-Garantie
- Alle neuen Markdown-Dateien MÜSSEN ein vollständiges YAML-Frontmatter gemäß den Schemas in `.schemas/` enthalten.
- Erforderliche Felder dürfen niemals ausgelassen werden (`type`, `title`, `status`, `created`, etc.).
- Dates müssen immer im ISO-Format `YYYY-MM-DD` geschrieben werden.
- Workstream-Verknüpfungen müssen im Obsidian Wikilink-Format erfolgen: `workstream: "[[Workstream Name]]"`.

## 2. Ordner-Hierarchie & Lifecycle
- `00_Inbox/`: Ablageort für rohe Gedanken, Schnellerfassungen (`type: braindump`).
- `10_Tasks/`: Globale, handlungsrelevante Aufgaben (`type: task`).
- `20_Workstreams/`: Gekapselte Workstream-Ordner mit `README.md`, `AGENTS.md`, `Tasks/`, `Notes/` (`type: workstream`).
- `30_Notes/`: Globale Wissensnotizen, Konzepte, Referenzen (`type: note`).
- `40_Archive/`: Abgeschlossene Tasks & archivierte Workstreams (`status: done`, `status: archived`).

## 3. Status-Übergänge für Tasks
- `inbox`: Neu erstellt, noch nicht eingeplant.
- `backlog`: Zurückgestellt / für spätere Sprints.
- `todo`: Bereit zur Bearbeitung.
- `in_progress`: Aktuell in Bearbeitung.
- `blocked`: Wartet auf externe Eingabe oder Dependency.
- `done`: Erfolgreich abgeschlossen.
- `archived`: Ins Archiv verschoben.

## 4. Agent-Zuständigkeiten & Review-Schleife
- Wenn ein Agent eine Aufgabe übernimmt: `assigned_to: agent`.
- Nach Erledigung durch einen Agenten, falls menschliche Freigabe erwünscht: `review_status: pending`.
- Nach Bestätigung durch den Benutzer: `review_status: approved` und `status: done`.

## 5. Dateibenennung
- Dateinamen sollten prägnant und dateisystemkonform sein (z. B. `10_Tasks/Implement-Auth-Module.md`).
- Keine Sonderzeichen wie `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|` in Dateinamen.
