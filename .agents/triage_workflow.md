# Agent Workflow: Inbox Triage

Dieser Workflow dient der automatisierten Verarbeitung von Braindump-Einträgen in `00_Inbox/`.

## Ziel
Lies alle Dateien in `00_Inbox/` mit `status: unprocessed`. Analysiere den Inhalt und entscheide über die richtige Konvertierung:

1. **Aktion erforderlich?**
   - Falls ja: Wandle den Eintrag in einen Task (`type: task`) um und verschiebe ihn nach `10_Tasks/` (oder in den `Tasks/`-Unterordner des zugehörigen Workstreams).
   - Schätze Priorität (`low`, `medium`, `high`, `urgent`).
   - Verknüpfe ggf. mit einem bestehenden Workstream in `20_Workstreams/` (`workstream: "[[Workstream Name]]"`).
   - Extrahiere handlungsrelevante Subtasks als `- [ ]` Checkboxen.

2. **Reines Wissen / Information?**
   - Falls ja: Wandle den Eintrag in eine Notiz (`type: note`) um und verschiebe ihn nach `30_Notes/` (oder in den `Notes/`-Unterordner des Workstreams).
   - Weise eine Kategorie zu (`architecture`, `concept`, `meeting`, `reference`, `snippet`, `general`).

3. **Neues Großvorhaben / Initiative?**
   - Falls ja: Erstelle einen neuen Workstream-Ordner in `20_Workstreams/<Name>/` mit `README.md`, `AGENTS.md`, `Tasks/` und `Notes/`.
   - Erstelle initiale Teilaufgaben mit Link auf den Workstream.

## Schema-Aktualisierung
Setze nach erfolgreicher Triage den ursprünglichen Status auf `triaged` bzw. erstelle die neue Zieldatei mit validem YAML-Frontmatter.
