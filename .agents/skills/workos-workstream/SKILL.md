---
name: workos-workstream
description: Scaffold and manage encapsulated Workstream initiatives in 20_Workstreams/<Name>/ with README.md, AGENTS.md, Tasks/, and Notes/.
---

# 🏛️ WorkOS Workstream Architect Skill

Use this skill when creating or restructuring major initiatives.

## 📌 Procedure
1. Create folder `20_Workstreams/<SanitizedName>/`.
2. Create subfolders `./Tasks/` and `./Notes/`.
3. Create `README.md` with frontmatter `type: workstream`, status, priority, and milestone checkboxes.
4. Create `AGENTS.md` defining the local role persona and quality guidelines.
5. Commit to git: `git commit -m "feat(agent): created workstream <name>"`.
