# Agent Workflow: Task Decomposition

Anleitung für Agenten zur Zerlegung komplexer Aufgaben in handhabbare Einzelschritte.

## Schritte
1. Lade den Ziel-Task aus `10_Tasks/*.md` oder dem jeweiligen Workstream-Ordner.
2. Analysiere Titel, Kontext und verknüpften Workstream (`workstream: "[[...]]"`).
3. Ergänze im Notiz-Body unter `## Subtasks` konkrete, überprüfbare Checkbox-Aufgaben im Markdown-Format:
   ```markdown
   ## Subtasks
   - [ ] Schritt 1: Recherche & Anforderungen analysieren
   - [ ] Schritt 2: Prototyp implementieren
   - [ ] Schritt 3: Tests & Validierung durchführen
   ```
4. Falls eine Teilaufgabe zu groß ist (mehr als 2 Stunden Aufwand), erstelle einen separaten Sub-Task und verlinke diesen.
5. Passe den Frontmatter-Status an (`status: in_progress` oder `assigned_to: agent`), falls der Agent direkt mit der Umsetzung betraut wird.
