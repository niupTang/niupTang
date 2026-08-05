const test = require('node:test');
const assert = require('node:assert/strict');

const { getCodeText, isFlowchartSource } = require('../themes/niuptang/source/js/code-copy.js');

test('getCodeText copies only the code column and removes the trailing newline', () => {
  const code = { innerText: 'npm install -g @opencode-ai/cli\r\n' };
  const block = {
    querySelector(selector) {
      return selector === '.code pre' ? code : null;
    },
  };

  assert.equal(getCodeText(block), 'npm install -g @opencode-ai/cli');
});

test('getCodeText preserves line breaks from Hexo line spans', () => {
  const lines = [
    { textContent: 'graph TD' },
    { textContent: '    User[用户] --> Superpowers' },
  ];
  const code = {
    querySelectorAll(selector) {
      return selector === '.line' ? lines : [];
    },
    textContent: 'graph TD    User[用户] --> Superpowers',
  };
  const block = {
    querySelector(selector) {
      return selector === '.code pre' ? code : null;
    },
  };

  assert.equal(getCodeText(block), 'graph TD\n    User[用户] --> Superpowers');
});

test('isFlowchartSource recognizes Mermaid graph directions', () => {
  assert.equal(isFlowchartSource('graph TD\n  A --> B'), true);
  assert.equal(isFlowchartSource('graph LR\n  A --> B'), true);
  assert.equal(isFlowchartSource('sequenceDiagram\n  A->>B: Hello'), false);
});
