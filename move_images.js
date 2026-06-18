const fs = require('fs');
const path = require('path');

const dir = 'd:\\DEV\\Web\\anonical';
const assetsDir = path.join(dir, 'public', 'assets');

if (!fs.existsSync(assetsDir)){
    fs.mkdirSync(assetsDir, { recursive: true });
}

const moves = [
  ['workbench.png', 'workbench.png'],
  ['substrack.png', 'substrack.png'],
  ['secondlook.png', 'secondlook.png'],
  ['mrinjoypartners.png', 'mrinjoy.png'],
  ['labthread.png', 'labthread.png'],
  ['anirbaansarkar.png', 'portfolio.png']
];

moves.forEach(([src, dest]) => {
  const srcPath = path.join(dir, src);
  const destPath = path.join(assetsDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.renameSync(srcPath, destPath);
    console.log(`Moved ${src} to ${dest}`);
  } else {
    console.log(`Skipped ${src} - not found`);
  }
});
