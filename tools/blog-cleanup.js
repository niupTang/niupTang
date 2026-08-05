#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const {
  ALLOWED_CATEGORIES,
  buildSlug,
  classifyPost,
  formatPost,
  hasGarbledText,
  normalizeTags,
  parsePost,
} = require('./lib/blog-cleanup-core');

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...walkFiles(fullPath));
    } else if (item.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function auditRepository(root = process.cwd(), options = {}) {
  const postsDir = path.join(root, 'source', '_posts');
  const allPostFiles = walkFiles(postsDir);
  const markdownFiles = allPostFiles.filter((file) => file.toLowerCase().endsWith('.md'));
  const postImages = allPostFiles
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .map((file) => toPosix(path.relative(root, file)))
    .sort();

  const duplicateIndexes = [
    '公众号文章分类.md',
    'source/公众号文章分类.md',
  ].filter((relativePath) => fs.existsSync(path.join(root, relativePath)));

  const posts = [];
  const garbledPosts = [];
  const categoryCounts = {};
  const unknownCategoryPosts = [];

  for (const file of markdownFiles) {
    const relativePath = toPosix(path.relative(root, file));
    const content = fs.readFileSync(file, 'utf8');
    const post = parsePost(content);
    const category = classifyPost(post);
    const tags = normalizeTags(post.data.tags || []);
    const hasGarbled = hasGarbledText(post.data) || hasGarbledText(path.basename(file));

    categoryCounts[category] = (categoryCounts[category] || 0) + 1;

    if (!ALLOWED_CATEGORIES.includes(category)) {
      unknownCategoryPosts.push(relativePath);
    }

    const record = {
      file: relativePath,
      title: post.data.title || path.basename(file, '.md'),
      date: post.data.date || '',
      category,
      tags,
      hasGarbled,
      hasFrontMatter: post.hasFrontMatter,
    };
    posts.push(record);

    if (hasGarbled) {
      garbledPosts.push(record);
    }
  }

  const audit = {
    postCount: markdownFiles.length,
    postImages,
    duplicateIndexes,
    categoryCounts,
    garbledPosts,
    unknownCategoryPosts,
    posts: posts.sort((a, b) => a.file.localeCompare(b.file, 'zh-CN')),
  };

  if (options.writeReports) {
    writeAuditReports(root, audit);
  }

  return audit;
}

function applyCleanup(root = process.cwd(), options = {}) {
  const changes = {
    updatedPosts: [],
    updatedPages: [],
    movedImages: [],
    archivedFiles: [],
  };
  const movedImages = movePostImages(root, changes);
  const postsDir = path.join(root, 'source', '_posts');

  for (const file of walkFiles(postsDir).filter((postFile) => postFile.toLowerCase().endsWith('.md'))) {
    const relativePath = toPosix(path.relative(root, file));
    const original = fs.readFileSync(file, 'utf8');
    const post = parsePost(original);
    const fileBase = path.basename(file, '.md');
    const category = classifyPost(post);
    const normalizedTags = normalizeAndInferTags(post, category);
    const hasGarbled = Boolean(post.parseError) || hasGarbledText(post.data) || hasGarbledText(fileBase);

    post.data.title = post.data.title || fileBase;
    if (!post.data.date || isInvalidArchiveDate(post.data.date)) {
      post.data.date = '2025-01-01 00:00:00';
      post.data.cleanup_status = 'needs_review';
    }
    if (!post.data.permalink && shouldAddPermalink(fileBase)) {
      post.data.permalink = buildSlug(fileBase, relativePath);
    }
    post.data.categories = [category];
    post.data.tags = normalizedTags;
    if (hasGarbled) {
      post.data.cleanup_status = 'needs_review';
    }
    post.body = rewriteMovedImageReferences(post.body, movedImages);

    const formatted = formatPost(post);
    if (formatted !== original) {
      fs.writeFileSync(file, formatted, 'utf8');
      changes.updatedPosts.push(relativePath);
    }
  }

  archiveDuplicateIndex(root, changes);
  ensureSourceIndexFrontMatter(root, changes);

  if (options.writeReports !== false) {
    writeChangesReport(root, changes);
  }

  return changes;
}

function checkRepository(root = process.cwd(), options = {}) {
  const audit = auditRepository(root);
  const errors = [];
  const warnings = [];

  if (audit.postImages.length > 0) {
    errors.push('source/_posts contains direct image files');
  }

  if (audit.duplicateIndexes.includes('公众号文章分类.md') && audit.duplicateIndexes.includes('source/公众号文章分类.md')) {
    errors.push('duplicate 公众号文章分类.md files remain');
  }

  const invalidCategoryPosts = findInvalidCategoryPosts(root);
  if (invalidCategoryPosts.length > 0) {
    errors.push('posts contain categories outside the cleanup whitelist');
  }

  const invalidDatePosts = findInvalidDatePosts(root);
  if (invalidDatePosts.length > 0) {
    errors.push('posts contain invalid archive dates');
  }

  if (audit.garbledPosts.length > 0) {
    warnings.push('garbled posts remain marked for review');
  }

  const result = {
    ok: errors.length === 0,
    errors,
    warnings,
    invalidCategoryPosts,
    invalidDatePosts,
    garbledPostCount: audit.garbledPosts.length,
  };

  if (options.writeReports) {
    writeCheckReport(root, result);
  }

  return result;
}

function findInvalidCategoryPosts(root) {
  const postsDir = path.join(root, 'source', '_posts');
  const invalid = [];

  for (const file of walkFiles(postsDir).filter((postFile) => postFile.toLowerCase().endsWith('.md'))) {
    const relativePath = toPosix(path.relative(root, file));
    const post = parsePost(fs.readFileSync(file, 'utf8'));
    const categories = Array.isArray(post.data.categories)
      ? post.data.categories
      : post.data.categories
        ? [post.data.categories]
        : [];

    const badCategories = categories.filter((category) => !ALLOWED_CATEGORIES.includes(category));
    if (badCategories.length > 0 || categories.length === 0) {
      invalid.push({ file: relativePath, categories });
    }
  }

  return invalid;
}

function findInvalidDatePosts(root) {
  const postsDir = path.join(root, 'source', '_posts');
  const invalid = [];

  for (const file of walkFiles(postsDir).filter((postFile) => postFile.toLowerCase().endsWith('.md'))) {
    const relativePath = toPosix(path.relative(root, file));
    const post = parsePost(fs.readFileSync(file, 'utf8'));
    if (isInvalidArchiveDate(post.data.date)) {
      invalid.push({ file: relativePath, date: post.data.date || '' });
    }
  }

  return invalid;
}

function isInvalidArchiveDate(dateValue) {
  const date = String(dateValue || '').trim();
  if (!date) {
    return true;
  }
  if (/^(1969|1970)-/.test(date)) {
    return true;
  }
  const parsed = Date.parse(date.replace(' ', 'T'));
  return Number.isNaN(parsed);
}

function normalizeAndInferTags(post, category) {
  const tags = normalizeTags(post.data.tags || []);
  const seen = new Set(tags);
  for (const tag of inferTags(post, category)) {
    if (!seen.has(tag)) {
      tags.push(tag);
      seen.add(tag);
    }
    if (tags.length >= 6) {
      break;
    }
  }
  return tags.slice(0, 6);
}

function inferTags(post, category) {
  const data = post.data || {};
  const text = `${data.title || ''} ${(post.body || '').slice(0, 500)}`;
  const tags = [];
  if (/GitHub|Star|开源/i.test(text)) tags.push('GitHub');
  if (/DeepSeek/i.test(text)) tags.push('DeepSeek');
  if (/Claude Code/i.test(text)) tags.push('Claude Code');
  if (/MCP/i.test(text)) tags.push('MCP');
  if (/Coze/i.test(text)) tags.push('Coze');
  if (/n8n/i.test(text)) tags.push('n8n');
  if (/RPA|自动化|工作流/i.test(text)) tags.push('自动化');
  if (/部署|安装|教程|实战|入门/i.test(text)) tags.push('教程');
  if (/副业|赚钱|变现|运营/i.test(text)) tags.push('副业');
  if (category && !tags.includes(category)) tags.push(category);
  if (tags.length === 0) tags.push('AI工具');
  return tags;
}

function shouldAddPermalink(fileBase) {
  return !/^\d{4}-\d{2}-\d{2}-[a-z0-9-]+$/.test(fileBase) || /[^A-Za-z0-9_.-]/.test(fileBase);
}

function movePostImages(root, changes) {
  const postsDir = path.join(root, 'source', '_posts');
  const imageDir = path.join(root, 'source', 'images', 'posts');
  const moved = new Map();

  for (const file of walkFiles(postsDir)) {
    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) {
      continue;
    }

    ensureDir(imageDir);
    const from = toPosix(path.relative(root, file));
    const destination = uniqueDestination(imageDir, path.basename(file));
    fs.renameSync(file, destination);
    const to = toPosix(path.relative(root, destination));
    const publicPath = `/${to.replace(/^source\//, '')}`;
    moved.set(path.basename(file), publicPath);
    changes.movedImages.push({ from, to, publicPath });
  }

  return moved;
}

function uniqueDestination(dir, fileName) {
  let destination = path.join(dir, fileName);
  if (!fs.existsSync(destination)) {
    return destination;
  }

  const ext = path.extname(fileName);
  const base = path.basename(fileName, ext);
  let counter = 2;
  while (fs.existsSync(destination)) {
    destination = path.join(dir, `${base}-${counter}${ext}`);
    counter += 1;
  }
  return destination;
}

function rewriteMovedImageReferences(body, movedImages) {
  let updated = body;
  for (const [fileName, publicPath] of movedImages.entries()) {
    const escaped = escapeRegExp(fileName);
    updated = updated.replace(new RegExp(`\\((?:\\./)?${escaped}\\)`, 'g'), `(${publicPath})`);
    updated = updated.replace(new RegExp(`(["'])((?:\\./)?${escaped})\\1`, 'g'), `$1${publicPath}$1`);
  }
  return updated;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function archiveDuplicateIndex(root, changes) {
  const rootIndex = path.join(root, '公众号文章分类.md');
  const sourceIndex = path.join(root, 'source', '公众号文章分类.md');
  if (!fs.existsSync(rootIndex) || !fs.existsSync(sourceIndex)) {
    return;
  }

  const archiveDir = path.join(root, 'docs', 'archive');
  ensureDir(archiveDir);
  const destination = uniqueDestination(archiveDir, '公众号文章分类.md');
  fs.renameSync(rootIndex, destination);
  changes.archivedFiles.push({
    from: '公众号文章分类.md',
    to: toPosix(path.relative(root, destination)),
  });
}

function ensureSourceIndexFrontMatter(root, changes) {
  const sourceIndex = path.join(root, 'source', '公众号文章分类.md');
  if (!fs.existsSync(sourceIndex)) {
    return;
  }

  const content = fs.readFileSync(sourceIndex, 'utf8');
  if (content.startsWith('---\n') || content.startsWith('---\r\n')) {
    return;
  }

  const frontMatter = [
    '---',
    'title: 公众号文章分类',
    'date: 2025-12-25 14:37:00',
    'type: page',
    '---',
    '',
  ].join('\n');
  fs.writeFileSync(sourceIndex, `${frontMatter}${content.replace(/^\uFEFF/, '')}`, 'utf8');
  changes.updatedPages.push('source/公众号文章分类.md');
}

function writeAuditReports(root, audit) {
  const reportsDir = path.join(root, 'reports');
  ensureDir(reportsDir);
  fs.writeFileSync(
    path.join(reportsDir, 'blog-cleanup-audit.json'),
    `${JSON.stringify(audit, null, 2)}\n`,
    'utf8',
  );

  const lines = [
    '# Blog Cleanup Audit',
    '',
    `- Posts: ${audit.postCount}`,
    `- Direct post images: ${audit.postImages.length}`,
    `- Duplicate index files: ${audit.duplicateIndexes.length}`,
    `- Garbled posts: ${audit.garbledPosts.length}`,
    '',
    '## Category Counts',
    '',
    ...Object.entries(audit.categoryCounts)
      .sort(([a], [b]) => a.localeCompare(b, 'zh-CN'))
      .map(([category, count]) => `- ${category}: ${count}`),
    '',
    '## Direct Post Images',
    '',
    ...(audit.postImages.length ? audit.postImages.map((file) => `- ${file}`) : ['- None']),
    '',
    '## Duplicate Index Files',
    '',
    ...(audit.duplicateIndexes.length ? audit.duplicateIndexes.map((file) => `- ${file}`) : ['- None']),
    '',
    '## Garbled Posts',
    '',
    ...(audit.garbledPosts.length ? audit.garbledPosts.map((post) => `- ${post.file}: ${post.title}`) : ['- None']),
    '',
  ];
  fs.writeFileSync(path.join(reportsDir, 'blog-cleanup-audit.md'), `${lines.join('\n')}\n`, 'utf8');
}

function writeChangesReport(root, changes) {
  const reportsDir = path.join(root, 'reports');
  ensureDir(reportsDir);
  const lines = [
    '# Blog Cleanup Changes',
    '',
    `- Updated posts: ${changes.updatedPosts.length}`,
    `- Updated pages: ${changes.updatedPages.length}`,
    `- Moved images: ${changes.movedImages.length}`,
    `- Archived duplicate files: ${changes.archivedFiles.length}`,
    '',
    '## Updated Posts',
    '',
    ...(changes.updatedPosts.length ? changes.updatedPosts.map((file) => `- ${file}`) : ['- None']),
    '',
    '## Updated Pages',
    '',
    ...(changes.updatedPages.length ? changes.updatedPages.map((file) => `- ${file}`) : ['- None']),
    '',
    '## Moved Images',
    '',
    ...(changes.movedImages.length
      ? changes.movedImages.map((move) => `- ${move.from} -> ${move.to}`)
      : ['- None']),
    '',
    '## Archived Files',
    '',
    ...(changes.archivedFiles.length
      ? changes.archivedFiles.map((move) => `- ${move.from} -> ${move.to}`)
      : ['- None']),
    '',
  ];
  fs.writeFileSync(path.join(reportsDir, 'blog-cleanup-changes.md'), `${lines.join('\n')}\n`, 'utf8');
}

function writeCheckReport(root, result) {
  const reportsDir = path.join(root, 'reports');
  ensureDir(reportsDir);
  fs.writeFileSync(
    path.join(reportsDir, 'blog-cleanup-check.json'),
    `${JSON.stringify(result, null, 2)}\n`,
    'utf8',
  );
}

function main() {
  const command = process.argv[2] || 'audit';
  if (command === 'audit') {
    const audit = auditRepository(process.cwd(), { writeReports: true });
    console.log(`Audit complete: ${audit.postCount} posts, ${audit.garbledPosts.length} garbled posts.`);
    return;
  }
  if (command === 'apply') {
    const changes = applyCleanup(process.cwd(), { writeReports: true });
    console.log(`Apply complete: ${changes.updatedPosts.length} posts updated, ${changes.movedImages.length} images moved.`);
    return;
  }
  if (command === 'check') {
    const result = checkRepository(process.cwd(), { writeReports: true });
    if (result.ok) {
      console.log(`Check passed: ${result.garbledPostCount} garbled posts remain marked for review.`);
    } else {
      console.error(`Check failed: ${result.errors.join('; ')}`);
      process.exitCode = 1;
    }
    return;
  }

  console.error(`Unknown command: ${command}`);
  process.exitCode = 1;
}

if (require.main === module) {
  main();
}

module.exports = {
  applyCleanup,
  auditRepository,
  checkRepository,
};
