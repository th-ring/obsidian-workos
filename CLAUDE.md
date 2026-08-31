# 🤖 Claude Code Guidelines: Obsidian WorkOS

All guidelines, schemas, and concurrency rules for this workspace are defined in `AGENTS.md`.

## 📌 Core Rules
1. **Schema Compliance**: Every created or modified markdown file must strictly follow the JSON schemas in `.schemas/`.
2. **Locking Guard**: When making extensive edits to a file, set `agent_state: processing` and `locked_by: "agent:claude"` in frontmatter. Upon completion, set `agent_state: idle` and `review_status: pending`.
3. **Atomic Turn Commits**: Group all multi-file modifications into a single clean commit on `main`:
   `git commit -m "feat(agent): ..."`
4. **Workstream Context**: When operating inside `20_Workstreams/<Name>/`, follow the local `AGENTS.md`.

## 🛠️ Headless Tools & CLI
- Scan Vault Metrics: `npm run agent:stats`
- Triage Inbox: `npm run agent:triage`
