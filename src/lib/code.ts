// Tiny build-time highlighter for the YAML, JSON and Markdown snippets on the site.

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function highlight(code: string, file: string): string {
  // `git log` output: colour the Conventional Commits type and scope.
  if (file.startsWith('git ')) {
    return code
      .split('\n')
      .map((raw) => escape(raw).replace(/^(\w+)(\([^)]*\))?:/, '<span class="c-key">$1</span><span class="c-dim">$2</span>:'))
      .join('\n');
  }
  const ext = file.split('.').pop();
  return code
    .split('\n')
    .map((raw) => {
      const line = escape(raw);
      if (ext === 'md') {
        if (/^#{1,3} /.test(raw)) return `<span class="c-key">${line}</span>`;
        if (/^---$/.test(raw)) return `<span class="c-dim">${line}</span>`;
        if (/^[a-z]+:/.test(raw)) return line.replace(/^([a-z]+):/, '<span class="c-key">$1</span>:');
        return line.replace(/(`[^`]+`)/g, '<span class="c-str">$1</span>');
      }
      if (ext === 'js') {
        if (/^\s*\/\//.test(raw)) return `<span class="c-dim">${line}</span>`;
        return line
          .replace(/('[^']*'|`[^`]*`)/g, '<span class="c-str">$1</span>')
          .replace(/\b(const|await|return)\b/g, '<span class="c-key">$1</span>');
      }
      if (ext === 'json') {
        return line
          .replace(/(&quot;|")([^"]+)\1(?=\s*:)/g, '<span class="c-key">"$2"</span>')
          .replace(/: ("[^"]*")/g, ': <span class="c-str">$1</span>');
      }
      // YAML
      if (/^\s*#/.test(raw)) return `<span class="c-dim">${line}</span>`;
      return line
        .replace(/^(\s*-?\s*)([\w./-]+):/, '$1<span class="c-key">$2</span>:')
        .replace(/('[^']*')/g, '<span class="c-str">$1</span>')
        .replace(/(@v\d+)/g, '<span class="c-str">$1</span>');
    })
    .join('\n');
}
