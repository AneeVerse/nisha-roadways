const fs = require('fs');
const path = require('path');

// Patch all Sanity files that import useEffectEvent from react
function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Remove useEffectEvent from any React import (handle all variations)
  content = content.replace(/(import\s+[^"']*?)(,\s*useEffectEvent\s*)([^"']*?from\s+["']react["'])/g, '$1$3');
  content = content.replace(/(import\s+[^"']*?)(useEffectEvent\s*,?\s*)([^"']*?from\s+["']react["'])/g, '$1$3');
  
  // Add import if file uses useEffectEvent (but not if already imported)
  if (content.includes('useEffectEvent(') && !content.includes('from "use-effect-event"') && !content.includes("from 'use-effect-event'")) {
    const firstReactImport = content.match(/import[^;]*from\s+["']react["'][^;]*;/);
    if (firstReactImport) {
      const pos = firstReactImport.index + firstReactImport[0].length;
      content = content.slice(0, pos) + '\nimport { useEffectEvent } from "use-effect-event";' + content.slice(pos);
    }
  }
  
  // Remove duplicate imports
  const importMatches = content.match(/import\s+[^;]*from\s+["']use-effect-event["'][^;]*;/g);
  if (importMatches && importMatches.length > 1) {
    // Keep only the first one
    for (let i = 1; i < importMatches.length; i++) {
      content = content.replace(importMatches[i], '');
    }
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// Find and patch all files
const sanityDir = path.join(__dirname, 'node_modules/sanity');
const visionDir = path.join(__dirname, 'node_modules/@sanity/vision');

function findAndPatch(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.includes('.cache')) {
        findAndPatch(filePath);
      } else if (file.endsWith('.js') && !file.endsWith('.map')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('useEffectEvent') && content.includes('from "react"')) {
          if (patchFile(filePath)) {
            console.log(`✓ Patched ${filePath.replace(__dirname + path.sep, '')}`);
          }
        }
      }
    } catch (e) {
      // Skip errors
    }
  });
}

console.log('Patching Sanity files...');
findAndPatch(sanityDir);
findAndPatch(visionDir);
console.log('Done!');
