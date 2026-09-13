/* From pw-learning-hub: node s2-chapter8-flashcards-package/install.cjs */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = process.cwd(), changes = new Map();
const dryRun = process.argv.includes('--dry-run');
const sourceFiles = [
  'data/maths/flashcards/s2chapter8.ts',
  'components/maths/S2Chapter8FlashcardDiagram.tsx',
  'app/maths/s2/chapter-8/flashcards/page.tsx',
];
function fail(message) { throw new Error(message); }
function read(relative) {
  const full = path.join(root, relative);
  if (!fs.existsSync(full)) fail(`Missing ${relative}. Run from the pw-learning-hub project root. No files changed.`);
  return fs.readFileSync(full, 'utf8');
}
function once(text, search, replacement, label) {
  const matches = text.match(search);
  if (!matches || (search.global && matches.length !== 1)) fail(`Cannot locate exactly one ${label}. No project files have been changed. Send the current file and this message for integration.`);
  return text.replace(search, replacement);
}
function propose(relative, next) {
  const full = path.join(root, relative);
  const previous = fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : null;
  if (previous !== next) changes.set(relative, { previous, next });
}
function main() {
  read('package.json');
  const types = read('data/maths/flashcards/types.ts');
  if (!types.includes('MathsFlashcard')) fail('The shared MathsFlashcard type was not found. No files changed.');
  const registry = read('data/maths/flashcards/index.ts');
  for (const name of ['s2Flashcards', 'allMathsFlashcards', 'getFlashcardsForSelections']) {
    if (!registry.includes(name)) fail(`The existing flashcard registry is missing ${name}. No files changed.`);
  }
  const storage = read('lib/studentStorage.ts'), cloud = read('lib/supabase.ts');
  if (!storage.includes('recordMathsFlashcardAnswerAtomically') || !cloud.includes('recordMathsFlashcardAnswerAtomically')) fail('The existing atomic flashcard storage integration was not found. No files changed.');

  const s2Path = 'data/maths/flashcards/s2.ts';
  let s2 = read(s2Path);
  if (!s2.includes('s2Chapter8Flashcards')) {
    if (/chapter\s*:\s*8\b|["']s2-c8-/.test(s2)) fail('Chapter 8 cards already exist in s2.ts. Review their IDs before adding this set. No files changed.');
    s2 = once(s2, /export\s+const\s+s2Flashcards\s*:\s*MathsFlashcard\[\]\s*=\s*\[/g, 'export const s2Flashcards: MathsFlashcard[] = [\n  ...s2Chapter8Flashcards,', 's2Flashcards array');
    s2 = 'import { s2Chapter8Flashcards } from "./s2chapter8";\n' + s2;
    propose(s2Path, s2);
  } else if (!/\.\.\.s2Chapter8Flashcards\b/.test(s2) || !/from\s*["']\.\/s2chapter8["']/.test(s2)) fail('Incomplete Chapter 8 registry integration. No files changed.');

  const componentPath = 'components/maths/FormulaFlashcards.tsx';
  let component = read(componentPath);
  const marker = '// S2 Chapter 8 diagrams (additive integration).';
  if (!component.includes(marker)) {
    if (component.includes('s2Chapter8Diagram') || component.includes('S2Chapter8FlashcardDiagram')) fail('A different Chapter 8 diagram integration already exists. No files changed.');
    if (!component.includes('s2Chapter6Diagram') || !component.includes('useContentSizedFaces')) fail('This package expects the installed S2 Chapter 6 shared component. Send the current FormulaFlashcards.tsx if it differs. No files changed.');
    component = once(component, /(["']use client["'];)/g, '$1\n\n' + marker + '\nimport S2Chapter8FlashcardDiagram, { type S2Chapter8DiagramKind } from "@/components/maths/S2Chapter8FlashcardDiagram";\n', 'client directive');
    component = once(component, /s2Chapter6Diagram\?:\s*S2Chapter6DiagramKind;/g, '$&\n  s2Chapter8Diagram?: S2Chapter8DiagramKind;', 'Chapter 6 visual type');
    component = once(component, /const hasFrontVisual = Boolean\(([^;]*?)\);/g, 'const hasFrontVisual = Boolean($1 || currentCard.s2Chapter8Diagram);', 'front visual detection');
    component = once(component, /\{currentCard\.s2Chapter6Diagram && <S2Chapter6FlashcardDiagram kind=\{currentCard\.s2Chapter6Diagram\} \/>\}/g, '$&\n            {currentCard.s2Chapter8Diagram && <S2Chapter8FlashcardDiagram kind={currentCard.s2Chapter8Diagram} />}', 'Chapter 6 diagram render position');
    component = once(component, /const useContentSizedFaces = currentCard\.level === ["']s2["'] && \(currentCard\.chapter === 6 \|\| currentCard\.chapter === 7\);/g, 'const useContentSizedFaces = currentCard.level === "s2" && (currentCard.chapter === 6 || currentCard.chapter === 7 || currentCard.chapter === 8);', 'content-sized Chapter 6 faces');
    component = component.replace(/\bisS2Chapter6\b/g, 'useContentSizedFaces');
    propose(componentPath, component);
  } else {
    for (const expected of ['s2Chapter8Diagram?: S2Chapter8DiagramKind;', '<S2Chapter8FlashcardDiagram kind={currentCard.s2Chapter8Diagram} />', 'currentCard.s2Chapter8Diagram);', 'currentCard.chapter === 6 || currentCard.chapter === 7 || currentCard.chapter === 8', 'display: useContentSizedFaces ? "grid"']) {
      if (!component.includes(expected)) fail('Incomplete Chapter 8 component integration. No files changed.');
    }
  }

  const homePath = 'app/maths/s2/chapter-8/page.tsx';
  let home = read(homePath);
  if (!home.includes('/maths/s2/chapter-8/flashcards')) {
    home = once(home, /<span className="coming">Coming after the checkpoint<\/span>/g, '<Link className="back" href="/maths/s2/chapter-8/flashcards">Start Flashcards →</Link>', 'Chapter 8 homepage flashcards button');
    propose(homePath, home);
  }
  for (const relative of sourceFiles) {
    // Payloads intentionally end in .txt so Next/TypeScript will not compile
    // the uninstalled package folder when it sits inside the project root.
    const next = fs.readFileSync(path.join(__dirname, 'files', relative + '.txt'), 'utf8');
    const full = path.join(root, relative);
    if (fs.existsSync(full) && fs.readFileSync(full, 'utf8') !== next) fail(`Existing ${relative} differs from this package. No files changed.`);
    propose(relative, next);
  }
  if (!changes.size) { console.log('S2 Chapter 8 Flashcards are already installed. No files changed.'); return; }
  if (dryRun) { console.log('Preflight passed. Would update:'); for (const relative of changes.keys()) console.log('  ' + relative); return; }

  const backup = path.join(root, 'flashcards-backup-s2-c8-' + new Date().toISOString().replace(/[:.]/g, '-'));
  fs.mkdirSync(backup, { recursive: true });
  const changed = [];
  try {
    for (const [relative, { previous, next }] of changes) {
      if (previous !== null) {
        const oldPath = path.join(backup, relative + '.bak');
        fs.mkdirSync(path.dirname(oldPath), { recursive: true });
        fs.writeFileSync(oldPath, previous);
      }
      const full = path.join(root, relative);
      fs.mkdirSync(path.dirname(full), { recursive: true });
      changed.push(relative);
      fs.writeFileSync(full, next);
    }
  } catch (error) {
    for (const relative of changed.reverse()) {
      const { previous } = changes.get(relative);
      if (previous === null) fs.rmSync(path.join(root, relative), { force: true });
      else fs.writeFileSync(path.join(root, relative), previous);
    }
    throw error;
  }
  console.log('Installed S2 Chapter 8: 36 flashcards and 4 SVG diagram variants.');
  for (const relative of changes.keys()) console.log('  ' + relative);
  console.log('Original versions: ' + backup);
  console.log('Existing storage, atomic RPC and Chapter 6 cards were preserved.');
  console.log('Next: npm run build');
  console.log('Then open /maths/s2/chapter-8/flashcards and check one saved answer while signed in.');
}
try { main(); } catch (error) { console.error('Installation stopped: ' + error.message); process.exitCode = 1; }
