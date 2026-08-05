(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CodeCopy = factory();
  }
}(typeof window !== 'undefined' ? window : globalThis, function () {
  function getCodeText(block) {
    if (!block || typeof block.querySelector !== 'function') return '';

    const source = block.querySelector('.code pre') || block.querySelector('pre') || block;
    const lineNodes = typeof source.querySelectorAll === 'function' ? source.querySelectorAll('.line') : [];
    const text = lineNodes.length
      ? Array.from(lineNodes).map(function (line) { return line.textContent || ''; }).join('\n')
      : (typeof source.innerText === 'string' ? source.innerText : (source.textContent || ''));

    return text.replace(/\r\n?/g, '\n').replace(/\n$/, '');
  }

  function isFlowchartSource(text) {
    return /^\s*graph\s+(TD|TB|BT|RL|LR)\b/i.test(text || '');
  }

  function copyText(text, ownerDocument) {
    const pageDocument = ownerDocument || (typeof document !== 'undefined' ? document : null);
    const pageWindow = pageDocument && pageDocument.defaultView;
    const pageNavigator = pageWindow ? pageWindow.navigator : (typeof navigator !== 'undefined' ? navigator : null);

    if (pageNavigator && pageNavigator.clipboard && pageNavigator.clipboard.writeText) {
      return pageNavigator.clipboard.writeText(text);
    }

    if (!pageDocument) return Promise.reject(new Error('Document is unavailable'));

    const textarea = pageDocument.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    pageDocument.body.appendChild(textarea);
    textarea.select();

    return new Promise(function (resolve, reject) {
      try {
        if (!pageDocument.execCommand('copy')) throw new Error('Copy command failed');
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        textarea.remove();
      }
    });
  }

  function createCopyButton(block, codeText) {
    const ownerDocument = block.ownerDocument || (typeof document !== 'undefined' ? document : null);
    if (!ownerDocument) return null;

    const button = ownerDocument.createElement('button');
    const label = ownerDocument.createElement('span');
    const pageWindow = ownerDocument.defaultView || (typeof window !== 'undefined' ? window : null);

    button.type = 'button';
    button.className = 'code-copy-button';
    button.setAttribute('aria-label', '复制代码');
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    label.textContent = '复制';
    button.appendChild(label);

    button.addEventListener('click', function () {
      copyText(codeText === undefined ? getCodeText(block) : codeText, ownerDocument).then(function () {
        button.classList.add('is-copied');
        button.setAttribute('aria-label', '已复制代码');
        label.textContent = '已复制';
        if (pageWindow) {
          pageWindow.setTimeout(function () {
            button.classList.remove('is-copied');
            button.setAttribute('aria-label', '复制代码');
            label.textContent = '复制';
          }, 1600);
        }
      }).catch(function () {
        label.textContent = '复制失败';
        if (pageWindow) {
          pageWindow.setTimeout(function () {
            label.textContent = '复制';
          }, 1600);
        }
      });
    });

    return button;
  }

  function initCodeCopy(rootDocument) {
    const scope = rootDocument || document;
    if (!scope.querySelectorAll) return;

    scope.querySelectorAll('.post-content figure.highlight, .post-content > pre').forEach(function (block) {
      if (block.querySelector('.code-copy-button')) return;

      const button = createCopyButton(block, getCodeText(block));
      if (button) block.appendChild(button);
    });
  }

  function getMermaidApi(scope) {
    const pageWindow = scope && scope.defaultView;
    return pageWindow && pageWindow.mermaid ? pageWindow.mermaid : null;
  }

  function renderMermaidBlocks(rootDocument) {
    const scope = rootDocument || document;
    const mermaid = getMermaidApi(scope);
    if (!mermaid || typeof mermaid.run !== 'function' || !scope.querySelectorAll) {
      return Promise.resolve(false);
    }

    const diagrams = [];
    const fallbacks = [];
    scope.querySelectorAll('.post-content figure.highlight, .post-content > pre').forEach(function (block) {
      const codeText = getCodeText(block);
      if (!isFlowchartSource(codeText)) return;

      const wrapper = scope.createElement('div');
      const diagram = scope.createElement('div');
      const button = createCopyButton(wrapper, codeText);

      wrapper.className = 'code-diagram-shell';
      diagram.className = 'mermaid code-diagram';
      diagram.textContent = codeText;
      wrapper.appendChild(diagram);
      if (button) wrapper.appendChild(button);
      fallbacks.push({ original: block.cloneNode(true), wrapper });
      block.replaceWith(wrapper);
      diagrams.push(diagram);
    });

    if (!diagrams.length) return Promise.resolve(false);

    try {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: 'base',
        themeVariables: {
          primaryColor: '#dbeafe',
          primaryTextColor: '#1e293b',
          primaryBorderColor: '#3b82f6',
          lineColor: '#64748b',
          secondaryColor: '#e0f2fe',
          tertiaryColor: '#f8fafc',
        },
      });
      return Promise.resolve(mermaid.run({ nodes: diagrams })).then(function () {
        return true;
      }).catch(function () {
        return false;
      }).then(function (rendered) {
        if (!rendered) {
          fallbacks.forEach(function (item) {
            item.wrapper.replaceWith(item.original);
          });
          initCodeCopy(scope);
        }
        return rendered;
      });
    } catch (error) {
      fallbacks.forEach(function (item) {
        item.wrapper.replaceWith(item.original);
      });
      initCodeCopy(scope);
      return Promise.resolve(false);
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      renderMermaidBlocks(document).then(function () {
        initCodeCopy(document);
      });
    });
  }

  return { getCodeText, isFlowchartSource, initCodeCopy, renderMermaidBlocks, copyText };
}));
