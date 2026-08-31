---
name: workos-decomposition
description: Analyze complex tasks in 10_Tasks/ or 20_Workstreams/<Name>/Tasks/ and decompose them into actionable checkbox subtasks.
---

# ⚡ WorkOS Task Decomposition Skill

Use this skill to break down high-level tasks into 3-6 concrete, actionable checkbox steps.

## 📌 Procedure
1. Read the target task markdown file.
2. Set `agent_state: processing` and `locked_by: "agent:<name>"`.
3. Generate 3-6 concrete subtasks (`- [ ] <Step>`).
4. Append/insert under `## Subtasks` without destroying existing manual notes.
5. Set `assigned_to: hybrid` and `review_status: pending`.
6. Release lock (`agent_state: idle`).
7. Make an atomic git commit: `git commit -m "feat(agent): decomposed task <title> into <N> subtasks"`.
