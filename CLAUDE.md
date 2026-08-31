# 🤖 Claude Code Guidelines: Obsidian WorkOS

Universal guidelines, schemas, and concurrency rules are defined in `AGENTS.md`.

## 📌 Fast Reference
1. **MCP Tools**: If connected to `obsidian-workos-agent-suite`, use `workos_triage_inbox`, `workos_decompose_task`, `workos_create_workstream`, and `workos_vault_stats`.
2. **Schema Compliance**: Follow JSON schemas in `.schemas/` for all YAML frontmatter.
3. **Concurrency Locking**: When modifying existing notes, set `agent_state: processing` with `locked_by: "agent:claude"`. Set `agent_state: idle` and `review_status: pending` when done.
4. **Atomic Commits**: Create descriptive atomic commits on `main`:
   `git commit -m "feat(agent): ..."`
5. **Workstreams**: In `20_Workstreams/<Name>/`, also follow the local `AGENTS.md`.
