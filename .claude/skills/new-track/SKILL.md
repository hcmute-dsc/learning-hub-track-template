---
name: new-track
description: Write a Learning Hub track in this repo, the mentor's side — run init-track once, write track.yaml, lessons and exercises per the content spec, run the validator, open a PR, review it automatically, then ask to publish by pinning the commit in learning-hub-content tracks.yaml. Use when a mentor starts a new track from this template, adds lessons or exercises, or asks how to get the track on the site.
---

# New track (mentor side)

Guide for people: learning-hub-docs [`docs/ops/NEW-TRACK.md`](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/ops/NEW-TRACK.md) §3–5. Format: [CONTENT-SPECIFICATION](https://github.com/hcmute-dsc/learning-hub-docs/blob/main/docs/product/CONTENT-SPECIFICATION.md). Rules: `AGENTS.md`, `CONTRIBUTING.md`.

The repo must already exist (`hcmute-dsc/learning-hub-track-<slug>`, created by the club board from the template). If it doesn't, stop and point the user to NEW-TRACK.md §1–2.

## 1. Initialize (once)

If `tracks/example-track/` still exists, the repo isn't initialized:

```bash
git switch -c feat/content-<proposal-issue>-init-track   # the proposal is in learning-hub-content
node tools/init-track.mjs <slug> "<Tên track>" <github-username>
```

`<slug>` must equal the repo name after `learning-hub-track-`. Ask the user for the title and GitHub account; don't guess them.

## 2. Write

- `tracks/<slug>/track.yaml`: summary, level, tags, outcomes, estimated hours, `source` if content comes from elsewhere.
- One folder per module, `modules/<nn>-<slug>/module.yaml` listing lessons and exercises in order. Its `title` is the chapter name only: the hub adds "Chương N:" itself, so "Chương 1: Bắt đầu" would show as "Chương 1: Chương 1: Bắt đầu".
- Lessons in `lessons/*.md`, exercises in `exercises/<slug>/` (`exercise.yaml` + `statement.md`, optional `mentor-notes.md` for reviewers). The example files show every field.
- Track-level pages, both optional: `docs/setup.md` ("Cài đặt": what to install on Windows/macOS/Linux and one command to check it works) and `docs/resources.md` ("Tài liệu thêm"). Plain Markdown, no front matter, no `#` title. If the track needs tools installed, write `docs/setup.md` instead of a setup lesson; delete the files the track does not need.
- `mentor-notes.md` is shown only to mentors and admins on the hub, but this repo is public: never put answers, solutions or hidden tests there.
- Every new item gets a new `uid` (`node -e "console.log(crypto.randomUUID())"`). Never change a `uid` once published.
- Delete the example items you don't use, and their names in `module.yaml`.
- **Run every command and code sample** in the lessons before committing. Quiz answers must match the questions.

## 3. Validate

Needs `../learning-hub` built once (README "Kiểm tra trên máy"):

```bash
node ../learning-hub/packages/content/dist/cli.js .
```

Fix every issue until it prints `all valid`.

## 4. Commit and PR

```
<slug>: <tóm tắt>

Vì sao.

Refs #<issue>
```

Push, open the PR from `.github/pull_request_template.md` with `Closes #<issue>` (the first PR of a new track refers to the proposal: `Refs hcmute-dsc/learning-hub-content#<n>`). Wait for `validate`:

```bash
gh pr checks <n> --watch
```

Then review it automatically with the `review-pr` checklist (content section) from `../learning-hub/.claude/skills/review-pr/SKILL.md`, fix every `must:`, and post the review on the PR (`gh pr review <n> --comment --body-file review.md`). Hand the PR to the maintainer in `CODEOWNERS`; the first PR of a new track goes to the club board. Don't merge without their yes in chat.

## 5. Publish (ask first)

Merged is not live. When the user wants it on the site:

```bash
git ls-remote https://github.com/hcmute-dsc/learning-hub-track-<slug> main
```

Open a PR in `hcmute-dsc/learning-hub-content` that adds or updates this track in `tracks.yaml` (full 40-character commit), titled `<slug>: publish <short sha>`, listing this repo's PRs since the last publish. The club board reviews it, then an admin syncs and publishes (`publish-content` skill in learning-hub-content).
