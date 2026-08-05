const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const {
  buildSlug,
  classifyPost,
  formatPost,
  hasGarbledText,
  normalizeTags,
  parsePost,
} = require('../tools/lib/blog-cleanup-core');

function makeTempRepo() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-cleanup-'));
  fs.mkdirSync(path.join(root, 'source', '_posts'), { recursive: true });
  fs.writeFileSync(path.join(root, 'source', '公众号文章分类.md'), '# Source index\n', 'utf8');
  fs.writeFileSync(path.join(root, '公众号文章分类.md'), '# Root index\n', 'utf8');
  return root;
}

function writePost(root, fileName, frontMatter, body = '正文') {
  fs.writeFileSync(
    path.join(root, 'source', '_posts', fileName),
    `---\n${frontMatter}---\n\n${body}\n`,
    'utf8',
  );
}

test('parsePost reads YAML front matter and preserves the body', () => {
  const post = parsePost(`---
title: GitHub 工具推荐
date: 2025-12-04 23:32:00
tags:
  - Github
  - 原创
categories:
  - 公众号文章
---

# 正文
`);

  assert.equal(post.data.title, 'GitHub 工具推荐');
  assert.equal(post.data.date, '2025-12-04 23:32:00');
  assert.deepEqual(post.data.tags, ['Github', '原创']);
  assert.deepEqual(post.data.categories, ['公众号文章']);
  assert.equal(post.body.trim(), '# 正文');
});

test('parsePost records invalid YAML instead of throwing', () => {
  const post = parsePost(`---
title: "GitHub 10 月份最火爆�?9 个开源项目！�?
date: 2025-12-04 23:32:00
---

正文保留
`);

  assert.equal(post.hasFrontMatter, true);
  assert.match(post.parseError, /unexpected end|unexpected/i);
  assert.equal(post.data.title, 'GitHub 10 月份最火爆�?9 个开源项目！�?');
  assert.equal(post.body.trim(), '正文保留');
});

test('formatPost writes normalized YAML without changing body text', () => {
  const content = `---
title: Old
date: 2025-01-02 03:04:05
---

正文第一行
`;
  const post = parsePost(content);
  post.data.categories = ['开源项目'];
  post.data.tags = ['GitHub', 'AI工具'];

  const formatted = formatPost(post);

  assert.match(formatted, /^---\n/);
  assert.match(formatted, /categories:\n  - 开源项目/);
  assert.match(formatted, /tags:\n  - GitHub\n  - AI工具/);
  assert.ok(formatted.endsWith('\n正文第一行\n'));
});

test('formatPost quotes YAML scalars that Hexo would misparse', () => {
  const formatted = formatPost({
    data: {
      title: 'GitHub 5K Star: 爱盘开源网盘搜索平台',
      permalink: '6999',
      date: '2025-01-01 00:00:00',
      categories: ['开源项目'],
      tags: ['GitHub'],
    },
    body: '正文\n',
  });

  assert.match(formatted, /title: "GitHub 5K Star: 爱盘开源网盘搜索平台"/);
  assert.match(formatted, /permalink: "6999"/);
});

test('hasGarbledText detects common replacement-character mojibake', () => {
  assert.equal(hasGarbledText('GitHub 10 月份最火爆�?9 个开源项目！�?'), true);
  assert.equal(hasGarbledText(['原创', '公众�?']), true);
  assert.equal(hasGarbledText('GitHub 开源项目推荐'), false);
});

test('normalizeTags canonicalizes names and removes weak source tags', () => {
  assert.deepEqual(
    normalizeTags(['Github', '原创', 'AI 编程', 'Deepseek', '公众�?', 'Claude code']),
    ['GitHub', 'AI编程', 'DeepSeek', 'Claude Code'],
  );
});

test('classifyPost prefers GitHub open-source signals over weak imported categories', () => {
  const category = classifyPost({
    data: {
      title: 'GitHub 10k Star 开源神器',
      categories: ['公众号文章'],
      tags: ['GitHub', 'AI工具'],
    },
    body: '这个项目已经开源，适合收藏。',
  });

  assert.equal(category, '开源项目');
});

test('buildSlug creates stable readable slugs with a fallback hash', () => {
  assert.equal(buildSlug('GitHub 10k Star DeepSeek Coder', 'fallback'), 'github-10k-star-deepseek-coder');
  assert.match(buildSlug('一个中文标题', 'fallback-seed'), /^post-[a-f0-9]{8}$/);
});

test('auditRepository reports posts, garbled metadata, duplicate indexes, and post images', () => {
  const { auditRepository } = require('../tools/blog-cleanup');
  const root = makeTempRepo();
  writePost(root, 'github-tool.md', 'title: GitHub 开源工具\ndate: 2025-01-01 10:00:00\ntags:\n  - Github\ncategories:\n  - 公众号文章\n');
  writePost(root, 'garbled.md', 'title: GitHub 10 月份最火爆�?9 个开源项目！�?\ndate: 2025-01-02 10:00:00\ntags:\n  - 公众�?\ncategories:\n  - 公众号文�?\n');
  fs.writeFileSync(path.join(root, 'source', '_posts', 'cover.png'), Buffer.from([1, 2, 3]));

  const audit = auditRepository(root);

  assert.equal(audit.postCount, 2);
  assert.deepEqual(audit.postImages, ['source/_posts/cover.png']);
  assert.deepEqual(audit.duplicateIndexes.sort(), ['source/公众号文章分类.md', '公众号文章分类.md']);
  assert.equal(audit.garbledPosts.length, 1);
  assert.equal(audit.garbledPosts[0].file, 'source/_posts/garbled.md');
});

test('applyCleanup normalizes metadata, marks garbled posts, moves post images, and archives duplicate index', () => {
  const { applyCleanup } = require('../tools/blog-cleanup');
  const root = makeTempRepo();
  writePost(
    root,
    'github-tool.md',
    'title: GitHub 10k Star 开源神器\ndate: 2025-01-01 10:00:00\ntags:\n  - Github\n  - 原创\ncategories:\n  - 公众号文章\n',
    '![cover](cover.png)\n正文',
  );
  writePost(
    root,
    'garbled.md',
    'title: GitHub 10 月份最火爆�?9 个开源项目！�?\ndate: 2025-01-02 10:00:00\ntags:\n  - 公众�?\ncategories:\n  - 公众号文�?\n',
  );
  fs.writeFileSync(path.join(root, 'source', '_posts', 'cover.png'), Buffer.from([1, 2, 3]));

  const changes = applyCleanup(root);
  const cleanedPost = fs.readFileSync(path.join(root, 'source', '_posts', 'github-tool.md'), 'utf8');
  const garbledPost = fs.readFileSync(path.join(root, 'source', '_posts', 'garbled.md'), 'utf8');

  assert.ok(changes.updatedPosts.includes('source/_posts/github-tool.md'));
  assert.ok(changes.movedImages.some((move) => move.from === 'source/_posts/cover.png'));
  assert.match(cleanedPost, /categories:\n  - 开源项目/);
  assert.match(cleanedPost, /tags:\n  - GitHub/);
  assert.match(cleanedPost, /!\[cover\]\(\/images\/posts\/cover\.png\)/);
  assert.match(garbledPost, /cleanup_status: needs_review/);
  assert.equal(fs.existsSync(path.join(root, 'source', '_posts', 'cover.png')), false);
  assert.equal(fs.existsSync(path.join(root, 'source', 'images', 'posts', 'cover.png')), true);
  assert.equal(fs.existsSync(path.join(root, '公众号文章分类.md')), false);
  assert.equal(fs.existsSync(path.join(root, 'docs', 'archive', '公众号文章分类.md')), true);
  assert.match(
    fs.readFileSync(path.join(root, 'source', '公众号文章分类.md'), 'utf8'),
    /^---\ntitle: 公众号文章分类\n/,
  );
});

test('applyCleanup replaces 1970 archive dates with a review-marked fallback', () => {
  const { applyCleanup } = require('../tools/blog-cleanup');
  const root = makeTempRepo();
  writePost(root, 'bad-date.md', 'title: Bad Date\ndate: 1970-01-01 08:00:00\ntags:\n  - GitHub\ncategories:\n  - 公众号文章\n');

  applyCleanup(root);
  const cleanedPost = fs.readFileSync(path.join(root, 'source', '_posts', 'bad-date.md'), 'utf8');

  assert.match(cleanedPost, /date: 2025-01-01 00:00:00/);
  assert.match(cleanedPost, /cleanup_status: needs_review/);
});

test('checkRepository fails on direct post images and categories outside the whitelist', () => {
  const { checkRepository } = require('../tools/blog-cleanup');
  const root = makeTempRepo();
  writePost(root, 'bad-category.md', 'title: Bad Category\ndate: 2025-01-01 10:00:00\ntags:\n  - GitHub\ncategories:\n  - 旧分类\n');
  fs.writeFileSync(path.join(root, 'source', '_posts', 'cover.png'), Buffer.from([1, 2, 3]));

  const result = checkRepository(root);

  assert.equal(result.ok, false);
  assert.ok(result.errors.includes('source/_posts contains direct image files'));
  assert.ok(result.errors.includes('posts contain categories outside the cleanup whitelist'));
});

test('checkRepository fails when 1970 archive dates remain', () => {
  const { checkRepository } = require('../tools/blog-cleanup');
  const root = makeTempRepo();
  writePost(root, 'bad-date.md', 'title: Bad Date\ndate: 1970-01-01 08:00:00\ntags:\n  - GitHub\ncategories:\n  - 开源项目\n');

  const result = checkRepository(root);

  assert.equal(result.ok, false);
  assert.ok(result.errors.includes('posts contain invalid archive dates'));
});
