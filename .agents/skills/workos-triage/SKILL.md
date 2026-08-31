---
name: workos-triage
description: Scan 00_Inbox/ for unprocessed braindumps and transform them into structured tasks, knowledge notes, or workstreams adhering to WorkOS schemas.
---

# 📥 WorkOS Triage Skill

Use this skill when processing unstructured thoughts, meeting braindumps, or quick-captures in `00_Inbox/`.

## 📌 Procedure
1. Find all markdown files in `00_Inbox/` where frontmatter has `status: unprocessed` (or missing status).
2. Set `agent_state: processing` and `locked_by: "agent:<name>"` on the active file.
3. Classify the content:
   - **Task**: Actionable item -> create in `10_Tasks/<Title>.md` (or `20_Workstreams/<Name>/Tasks/`) with schema `.schemas/task.schema.json`.
   - **Note**: Knowledge/Concept/Meeting -> create in `30_Notes/<Title>.md` with schema `.schemas/note.schema.json`.
   - **Workstream**: Multi-week initiative -> scaffold `20_Workstreams/<Name>/`.
4. Move original braindump to `40_Archive/` with `status: triaged` and `triaged_to: "[[<Title>]]"`.
5. Release lock (`agent_state: idle`), set `review_status: pending`.
6. Make an atomic git commit: `git commit -m "feat(agent): triaged <filename> to <type> [<title>]"`.
