import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

function loadTypescriptData(relativePath, exportName) {
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  const javascript = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const loadedModule = { exports: {} };
  vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, {
    loadedModule,
    console,
  });
  return loadedModule.exports[exportName];
}

const chapters = [
  {
    chapter: 1,
    expectedCards: 131,
    expectedFactCards: 101,
    organiser: loadTypescriptData(
      "data/knowledgeOrganisers/year8ScienceHealthAndLifestyle.ts",
      "year8ScienceHealthAndLifestyle",
    ),
  },
  {
    chapter: 2,
    expectedCards: 95,
    expectedFactCards: 68,
    organiser: loadTypescriptData(
      "data/knowledgeOrganisers/year8ScienceEcosystemProcesses.ts",
      "year8ScienceEcosystemProcesses",
    ),
  },
  {
    chapter: 3,
    expectedCards: 152,
    expectedFactCards: 134,
    organiser: loadTypescriptData(
      "data/knowledgeOrganisers/year8SciencePeriodicTable.ts",
      "year8SciencePeriodicTable",
    ),
  },
  {
    chapter: 4,
    expectedCards: 70,
    expectedFactCards: 48,
    organiser: loadTypescriptData(
      "data/knowledgeOrganisers/year8ScienceSeparationTechniques.ts",
      "year8ScienceSeparationTechniques",
    ),
  },
];

for (const { chapter, expectedCards, expectedFactCards, organiser } of chapters) {
  const label = `Science Chapter ${chapter}`;
  const fronts = organiser.flashcards.map(card => card.front);
  const factCards = organiser.flashcards.filter(card => card.id.includes("-fact-"));
  const termCards = organiser.flashcards.filter(card => card.id.includes("-term-"));

  check(organiser.chapter === chapter, `${label}: unexpected chapter metadata.`);
  check(organiser.flashcards.length === expectedCards, `${label}: expected ${expectedCards} flashcards; found ${organiser.flashcards.length}.`);
  check(factCards.length === expectedFactCards, `${label}: expected ${expectedFactCards} fact cards; found ${factCards.length}.`);
  check(new Set(organiser.flashcards.map(card => card.id)).size === expectedCards, `${label}: flashcard IDs are not unique.`);
  check(new Set(fronts).size === expectedCards, `${label}: flashcard fronts are not unique.`);
  check(fronts.every(front => typeof front === "string" && front.trim()), `${label}: a flashcard front is empty.`);
  check(!fronts.some(front => /^Recall point/i.test(front)), `${label}: a generic Recall point front remains.`);
  check(factCards.every(card => card.front.endsWith("?")), `${label}: every fact card must use a question front.`);
  check(factCards.every(card => card.front.trim().split(/\s+/).length >= 4), `${label}: a fact-card question is too vague.`);
  check(termCards.every(card => card.front.startsWith("Define ")), `${label}: every vocabulary front must start with Define.`);

  for (const section of organiser.sections) {
    section.keyFacts.forEach((fact, index) => {
      const card = organiser.flashcards.find(item => item.id === `${section.id}-fact-${index + 1}`);
      check(card?.back === fact, `${label}: missing or altered answer for ${section.id} fact ${index + 1}.`);
    });
  }
}

if (failures.length) {
  console.error("FAIL: Science flashcard validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Science flashcard validation");
for (const { chapter, expectedCards, expectedFactCards, organiser } of chapters) {
  console.log(`Chapter ${chapter}: ${expectedCards} unique fronts; ${expectedFactCards} specific fact questions; 0 generic fronts — ${organiser.title}`);
}
console.log("Total: 448 flashcards; 351 specific fact questions; 0 generic Recall point fronts.");
