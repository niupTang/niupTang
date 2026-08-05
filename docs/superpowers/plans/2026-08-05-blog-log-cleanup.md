# Blog Log Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and run a repeatable cleanup tool for the Hexo blog that normalizes post metadata, reports garbled legacy posts, migrates images out of `source/_posts`, and resolves duplicate directory files.

**Architecture:** Add a small CommonJS module under `tools/lib/` for pure cleanup logic, a CLI wrapper at `tools/blog-cleanup.js`, and Node built-in tests under `tests/`. The CLI supports `audit`, `apply`, and `check`; reports are written to `reports/` so every bulk change has evidence.

**Tech Stack:** Node.js 22, CommonJS, `node:test`, `assert`, `fs`, `path`, `crypto`, and the existing `js-yaml` dependency.

---

### Task 1: Pure Front Matter And Classification Helpers

**Files:**
- Create: `tests/blog-cleanup.test.js`
- Create: `tools/lib/blog-cleanup-core.js`

- [ ] **Step 1: Write failing tests**

Create tests for parsing front matter, detecting garbled content, normalizing tags, and classifying a GitHub post.

Run: `node --test tests/blog-cleanup.test.js`
Expected: FAIL with module not found or missing exported functions.

- [ ] **Step 2: Implement minimal core helpers**

Implement:

- `parsePost(content)`
- `formatPost(post)`
- `hasGarbledText(value)`
- `normalizeTags(tags)`
- `classifyPost(post)`
- `buildSlug(input, fallback)`

Run: `node --test tests/blog-cleanup.test.js`
Expected: PASS.

### Task 2: Audit Command

**Files:**
- Modify: `tests/blog-cleanup.test.js`
- Create: `tools/blog-cleanup.js`

- [ ] **Step 1: Write failing audit test**

Test that `auditRepository(tempRoot)` returns post counts, image files in `source/_posts`, duplicate `公众号文章分类.md` files, and garbled post records.

Run: `node --test tests/blog-cleanup.test.js`
Expected: FAIL because `auditRepository` is not exported.

- [ ] **Step 2: Implement audit mode**

Add repository scanning and report writing:

- `reports/blog-cleanup-audit.json`
- `reports/blog-cleanup-audit.md`

Run:

- `node --test tests/blog-cleanup.test.js`
- `node tools/blog-cleanup.js audit`

Expected: tests pass and audit reports are generated.

### Task 3: Apply Command

**Files:**
- Modify: `tests/blog-cleanup.test.js`
- Modify: `tools/lib/blog-cleanup-core.js`
- Modify: `tools/blog-cleanup.js`

- [ ] **Step 1: Write failing apply test**

Test that `applyCleanup(tempRoot)` normalizes front matter, adds `cleanup_status: needs_review` for garbled posts, moves direct post images to `source/images/posts/`, rewrites relative image references, and moves duplicate root `公众号文章分类.md` to `docs/archive/`.

Run: `node --test tests/blog-cleanup.test.js`
Expected: FAIL because `applyCleanup` is not exported or behavior is missing.

- [ ] **Step 2: Implement apply mode**

Apply only deterministic changes. Do not rewrite body text beyond direct image path updates.

Run:

- `node --test tests/blog-cleanup.test.js`
- `node tools/blog-cleanup.js apply`

Expected: tests pass and `reports/blog-cleanup-changes.md` is generated.

### Task 4: Check Command And Build Verification

**Files:**
- Modify: `tests/blog-cleanup.test.js`
- Modify: `tools/blog-cleanup.js`
- Modify: `package.json`

- [ ] **Step 1: Write failing check test**

Test that `checkRepository(tempRoot)` fails when a post category is outside the whitelist or a direct image remains in `source/_posts`.

Run: `node --test tests/blog-cleanup.test.js`
Expected: FAIL because `checkRepository` is not exported or does not validate constraints.

- [ ] **Step 2: Implement check mode and npm script**

Add `blog:cleanup` and `blog:check` scripts in `package.json`.

Run:

- `node --test tests/blog-cleanup.test.js`
- `node tools/blog-cleanup.js check`
- `npm run build`

Expected: tests pass, check passes after apply, and Hexo build completes.

### Task 5: Final Audit

**Files:**
- Inspect generated reports and changed blog files.

- [ ] **Step 1: Run final verification**

Run:

- `node tools/blog-cleanup.js audit`
- `node tools/blog-cleanup.js apply`
- `node tools/blog-cleanup.js check`
- `npm run build`
- `git status --short`

Expected: no failing checks, no direct images in `source/_posts`, duplicate root category file handled, and reports present.
