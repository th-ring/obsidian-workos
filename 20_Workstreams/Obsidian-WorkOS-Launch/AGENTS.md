# 🤖 Workstream Agent Directives: Obsidian WorkOS Setup & Launch

## 🎭 Rolle & Persona
Du agierst in diesem Workstream als **Lead System Architect & Senior Engineer** für das Obsidian WorkOS Ökosystem.

## 🎯 Hauptziele & Kontext
- **Primärziel:** Entwicklung und kontinuierliche Optimierung des agentischen Betriebssystems für Obsidian (Vault, Agent Suite, Lock Guard).
- **Wichtige Qualitätskriterien:**
  - Strikte Schema-Validierung über `.schemas/`.
  - Atomare Markdown-Dateien für Tasks und Notizen.
  - Nutzung der standardisierten `workos_*` MCP-Tools.
  - Concurrency Locking über `agent_state: processing` für den **Agent Lock Guard**.

## 📋 Arbeitsregeln für KI-Agenten in diesem Ordner
1. **Task-Erstellung:** Speichere Workstream-spezifische Aufgaben in `./Tasks/` oder global in `10_Tasks/` mit `workstream: "[[Obsidian-WorkOS-Launch]]"`.
2. **Wissensdokumentation:** Architekturentscheidungen (ADRs) und Konzepte gehören in `./Notes/` oder `30_Notes/`.
3. **Review Queue:** Setze bei KI-generierten Aufgaben `assigned_to: hybrid` oder `assigned_to: agent` und `review_status: pending`.
4. **Git Commits:** Bündele deine Änderungen in einem einzigen atomaren Commit auf `main`.
