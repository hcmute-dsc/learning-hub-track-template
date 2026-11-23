# Rules for coding agents (Claude Code, Codex, Cursor…)

This repo holds **one** track of the HCMUTE DSC Learning Hub (DECISIONS ADR-10). Agents follow the same process as people: [CONTRIBUTING.md](CONTRIBUTING.md), and the project-wide [WORKFLOW.md](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/ops/WORKFLOW.md) (§1.1, §2, §7). The format is defined in [CONTENT-SPECIFICATION.md](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/product/CONTENT-SPECIFICATION.md).

## Non-negotiable

1. **No issue, no work.** Every change maps to an issue in this repo on org Project #1, with every sidebar field filled (WORKFLOW §1.1).
2. **Never push to `main`.** Branch `<type>/<issue>-<slug>`; commits `<track>: <tóm tắt>` + `Refs #n`; PR with `Closes #n`, `validate` green, then an automatic review posted on the PR (`review-pr` in learning-hub, WORKFLOW §7.2), maintainer review, squash merge.
3. **`uid` never changes.** It keys members' progress. New items get a new UUID.
4. **One track per repo.** Only `tracks/<slug>/`, with `<slug>` equal to `slug` in `track.yaml`.
5. **Correct before pretty.** Run every command and query in a lesson before committing; check answers against questions.
6. **Credit sources** in the PR and in `track.yaml` `source`.
7. **Merged is not live.** Publishing is a PR to `learning-hub-content` that changes this track's `commit` in `tracks.yaml`. That is an outward action: ask the user first.
8. **Public repo.** No secrets, member emails or private links; no hidden tests or solutions.
9. Write in clear, simple Vietnamese. Technical terms stay in English.
10. **Teach so a beginner understands.** Every lesson and exercise meets the 6 criteria in [TEACHING.md](TEACHING.md): word meanings (T1), explain before practice (T2), mental models (T3), real-world workflow (T4), setup (T5), where to ask, including privately (T6). Fill the TEACHING checklist in the PR template honestly.

## Skills in this repo (`.claude/skills/`)

| Skill | Use when |
| --- | --- |
| `new-track` | starting this track from the template, writing lessons and exercises, opening the PR, asking to publish |

For the generic `start-task`, `ship-pr` and `review-pr` skills, clone `hcmute-dsc/learning-hub` next to this repo and see `../learning-hub/.claude/skills/`.
