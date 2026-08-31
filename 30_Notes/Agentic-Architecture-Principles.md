---
type: note
title: Agentic First Design Principles für Obsidian
category: architecture
workstream: "[[Obsidian-WorkOS-Launch]]"
created: 2026-08-25
updated: 2026-08-25
tags:
  - ai
  - architecture
  - best-practices
agent_state: idle
---

## Kernprinzipien für Agentic-First Obsidian Systeme

1. **Dateibasiert vor API-only**: Markdown und YAML bieten maximale Transparenz, Versionierbarkeit mit Git und Unabhängigkeit von proprietären Cloud-Silos.
2. **Atomare Datensätze**: 1 Datei pro Task / Item verhindert Race Conditions und Parsing-Konflikte bei gleichzeitigen Bearbeitungen durch Mensch und KI.
3. **Deterministische Metadaten**: Strikte Schemas mit kontrollierten Vokabularen (`status`, `priority`, `assigned_to`) erlauben fehlerfreie Abfragen und UI-Bindings.
4. **Mensch-Maschine Kollaboration**: Klare Kennzeichnung von Urheberschaft (`assigned_to: agent | user`) und optionale Review-Status (`review_status: pending | approved`).
