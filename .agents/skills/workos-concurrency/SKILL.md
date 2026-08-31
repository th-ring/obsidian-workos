---
name: workos-concurrency
description: Safely lock and unlock notes using agent_state: processing and locked_by to integrate with Obsidian Agent Lock Guard.
---

# 🔒 WorkOS Concurrency & Lock Guard Skill

Use this skill to prevent editing collisions with the human user in Obsidian.

## 📌 Rules
- **Locking on Deep Edits**:
  ```yaml
  agent_state: processing
  locked_by: "agent:<name>"
  locked_at: "YYYY-MM-DDTHH:MM:SS"
  ```
- **Unlocking on Completion**:
  ```yaml
  agent_state: idle
  review_status: pending
  ```
  Remove `locked_by` and `locked_at`.
- **Sequential Locking**: Never lock multiple files simultaneously; lock only the currently edited file.
