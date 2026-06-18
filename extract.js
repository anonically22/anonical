const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  const css = execSync('git show HEAD:index.html', { encoding: 'utf-8' });
  const startIdx = css.indexOf('<style>');
  const endIdx = css.indexOf('</style>');
  if (startIdx !== -1 && endIdx !== -1) {
    const styleContent = css.substring(startIdx + 7, endIdx).trim();
    fs.writeFileSync(path.join(__dirname, 'src', 'index.css'), styleContent, 'utf-8');
    console.log('CSS extracted successfully');
  } else {
    console.error('Could not find <style> tags');
  }
} catch (e) {
  console.error(e);
}
