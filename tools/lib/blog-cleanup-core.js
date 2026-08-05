const crypto = require('crypto');
const yaml = require('js-yaml');

const ALLOWED_CATEGORIES = [
  'AI工具',
  '开源项目',
  'AI编程',
  '自动化',
  '教程实践',
  '副业案例',
  '个人记录',
];

const WEAK_CATEGORIES = new Set(['公众号文章', '公众号文�?', '原创', '未分类']);
const WEAK_TAGS = new Set(['原创', '公众号文章', '公众号文�?', '公众�?']);

const TAG_ALIASES = new Map([
  ['github', 'GitHub'],
  ['Github', 'GitHub'],
  ['GitHub', 'GitHub'],
  ['deepseek', 'DeepSeek'],
  ['Deepseek', 'DeepSeek'],
  ['DeepSeek', 'DeepSeek'],
  ['claude code', 'Claude Code'],
  ['Claude code', 'Claude Code'],
  ['claude-code', 'Claude Code'],
  ['Claude Code', 'Claude Code'],
  ['AI 编程', 'AI编程'],
  ['ai 编程', 'AI编程'],
  ['AI编程', 'AI编程'],
]);

function parsePost(content) {
  const normalized = content.replace(/^\uFEFF/, '');
  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return {
      data: {},
      body: normalized,
      hasFrontMatter: false,
      rawFrontMatter: '',
    };
  }

  const rawFrontMatter = match[1];
  let data;
  let parseError = '';
  try {
    data = yaml.load(rawFrontMatter, { schema: yaml.FAILSAFE_SCHEMA }) || {};
  } catch (error) {
    parseError = error.message;
    data = parseLooseFrontMatter(rawFrontMatter);
  }

  return {
    data,
    body: match[2],
    hasFrontMatter: true,
    parseError,
    rawFrontMatter,
  };
}

function parseLooseFrontMatter(rawFrontMatter) {
  const data = {};
  const lines = rawFrontMatter.split(/\r?\n/);
  let currentListKey = '';

  for (const line of lines) {
    const listMatch = line.match(/^\s*-\s*(.*)$/);
    if (listMatch && currentListKey) {
      data[currentListKey].push(cleanLooseScalar(listMatch[1]));
      continue;
    }

    const fieldMatch = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!fieldMatch) {
      currentListKey = '';
      continue;
    }

    const [, key, rawValue] = fieldMatch;
    if (rawValue === '') {
      data[key] = [];
      currentListKey = key;
    } else {
      data[key] = cleanLooseScalar(rawValue);
      currentListKey = '';
    }
  }

  return data;
}

function cleanLooseScalar(value) {
  return String(value || '')
    .trim()
    .replace(/^['"]/, '')
    .replace(/['"]$/, '');
}

function formatPost(post) {
  const frontMatter = stringifyFrontMatter(post.data);
  return `---\n${frontMatter}---\n\n${post.body.replace(/^\r?\n/, '')}`;
}

function stringifyFrontMatter(data) {
  const orderedKeys = [
    'title',
    'permalink',
    'date',
    'updated',
    'categories',
    'tags',
    'cover',
    'description',
    'cleanup_status',
  ];
  const keys = [
    ...orderedKeys.filter((key) => Object.prototype.hasOwnProperty.call(data, key)),
    ...Object.keys(data).filter((key) => !orderedKeys.includes(key)),
  ];

  return keys.map((key) => stringifyYamlField(key, data[key])).join('');
}

function stringifyYamlField(key, value) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return `${key}: []\n`;
    }
    return `${key}:\n${value.map((item) => `  - ${formatScalar(item)}\n`).join('')}`;
  }

  if (value && typeof value === 'object') {
    return `${key}: ${JSON.stringify(value)}\n`;
  }

  return `${key}: ${formatScalar(value)}\n`;
}

function formatScalar(value) {
  if (value === null || value === undefined) {
    return '';
  }

  const text = String(value);
  if (text === '') {
    return '""';
  }

  if (
    /:\s/.test(text)
    || /^[-+]?\d+(\.\d+)?$/.test(text)
    || /^(null|true|false|yes|no|on|off)$/i.test(text)
  ) {
    return JSON.stringify(text);
  }

  if (/^[\w./:-]+$/.test(text) || /^[\u4e00-\u9fa5A-Za-z0-9 _.,，。！!？?（）()【】《》、：:；;+\-]+$/.test(text)) {
    return text;
  }

  return JSON.stringify(text);
}

function hasGarbledText(value) {
  if (Array.isArray(value)) {
    return value.some(hasGarbledText);
  }

  if (value && typeof value === 'object') {
    return Object.values(value).some(hasGarbledText);
  }

  return /�|\uFFFD/.test(String(value || ''));
}

function normalizeTags(tags) {
  const input = Array.isArray(tags) ? tags : tags ? [tags] : [];
  const normalized = [];
  const seen = new Set();

  for (const tag of input) {
    const raw = String(tag || '').trim();
    if (!raw || WEAK_TAGS.has(raw) || hasGarbledText(raw)) {
      continue;
    }
    const canonical = TAG_ALIASES.get(raw) || TAG_ALIASES.get(raw.toLowerCase()) || raw.replace(/\s+/g, ' ');
    if (!seen.has(canonical)) {
      normalized.push(canonical);
      seen.add(canonical);
    }
  }

  return normalized;
}

function classifyPost(post) {
  const data = post.data || {};
  const tags = normalizeTags(data.tags || []);
  const categories = Array.isArray(data.categories) ? data.categories : data.categories ? [data.categories] : [];
  const text = `${data.title || ''} ${tags.join(' ')} ${categories.join(' ')} ${(post.body || '').slice(0, 500)}`;

  if (/GitHub|Star|开源|项目/i.test(text)) {
    return '开源项目';
  }
  if (/Claude Code|Cursor|Codex|MCP|AI编程|编程|代码|Agentic/i.test(text)) {
    return 'AI编程';
  }
  if (/Coze|n8n|RPA|工作流|自动化|爬虫|同步|批处理/i.test(text)) {
    return '自动化';
  }
  if (/部署|安装|教程|实战|手把手|Quick start|入门/i.test(text)) {
    return '教程实践';
  }
  if (/副业|赚钱|变现|涨粉|运营/i.test(text)) {
    return '副业案例';
  }
  if (/总结|个人|感想|避坑|说明/i.test(text)) {
    return '个人记录';
  }
  if (/AI|工具|效率|客户端|软件/i.test(text)) {
    return 'AI工具';
  }

  const existing = categories.find((category) => ALLOWED_CATEGORIES.includes(category) && !WEAK_CATEGORIES.has(category));
  return existing || '教程实践';
}

function buildSlug(input, fallback) {
  const slug = String(input || '')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .slice(0, 80)
    .replace(/-+$/g, '');

  if (slug) {
    return slug;
  }

  const hash = crypto.createHash('sha1').update(String(fallback || input || 'post')).digest('hex').slice(0, 8);
  return `post-${hash}`;
}

module.exports = {
  ALLOWED_CATEGORIES,
  buildSlug,
  classifyPost,
  formatPost,
  hasGarbledText,
  normalizeTags,
  parsePost,
};
