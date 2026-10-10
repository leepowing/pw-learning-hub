import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

function loadTypescriptData(relativePath, exportName) {
  const javascript = ts.transpileModule(read(relativePath), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const loadedModule = { exports: {} };
  vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
  return loadedModule.exports[exportName];
}

const organiser = loadTypescriptData(
  "data/knowledgeOrganisers/year8SciencePeriodicTable.ts",
  "year8SciencePeriodicTable",
);
const health = loadTypescriptData(
  "data/knowledgeOrganisers/year8ScienceHealthAndLifestyle.ts",
  "year8ScienceHealthAndLifestyle",
);
const ecosystem = loadTypescriptData(
  "data/knowledgeOrganisers/year8ScienceEcosystemProcesses.ts",
  "year8ScienceEcosystemProcesses",
);
const separation = loadTypescriptData(
  "data/knowledgeOrganisers/year8ScienceSeparationTechniques.ts",
  "year8ScienceSeparationTechniques",
);

const facts = organiser.sections.reduce((total, section) => total + section.keyFacts.length, 0);
const terms = organiser.sections.reduce((total, section) => total + section.keyTerms.length, 0);
const sectionIds = new Set(organiser.sections.map(section => section.id));
const questionIds = organiser.questions.map(question => question.id);
const interactive = organiser.questions.filter(question => question.interaction);
const standardShort = organiser.questions.filter(question => question.type === "short-answer" && !question.interaction).length;
const interactionCount = kind => interactive.filter(question => question.interaction.kind === kind).length;
const elementSection = organiser.sections.find(section => section.id === "y8sci-periodic-elements");
const equationQuestion = organiser.questions.find(question => question.id === "periodic-q080");

check(organiser.id === "year8-science-the-periodic-table", "Unexpected organiser ID.");
check(organiser.chapter === 3 && organiser.term === "Autumn" && organiser.subject === "Science", "Chapter metadata is incorrect.");
check(organiser.sections.length === 7, `Expected 7 sections; found ${organiser.sections.length}.`);
check(facts === 80, `Expected 80 fact points; found ${facts}.`);
check(terms === 18, `Expected 18 vocabulary points; found ${terms}.`);
check(organiser.flashcards.length === 98, `Expected 98 flashcards; found ${organiser.flashcards.length}.`);
check(elementSection?.keyFacts.length === 20, `Expected 20 core element records; found ${elementSection?.keyFacts.length ?? 0}.`);
check(organiser.questions.length === 72, `Expected 72 questions; found ${organiser.questions.length}.`);
check(organiser.questions.filter(question => question.type === "multiple-choice").length === 28, "Expected 28 multiple-choice questions.");
check(standardShort === 24, `Expected 24 standard short questions; found ${standardShort}.`);
check(organiser.questions.filter(question => question.type === "long-answer").length === 5, "Expected 5 long questions.");
check(interactive.length === 15, `Expected 15 interactive questions; found ${interactive.length}.`);
check(interactionCount("matching") === 5, "Expected 5 matching questions.");
check(interactionCount("fill-blanks") === 3, "Expected 3 fill-blank renderers, including equation completion.");
check(interactionCount("ordering") === 3, "Expected 3 ordering questions.");
check(interactionCount("classification") === 4, "Expected 4 classification questions.");
check(equationQuestion?.format === "equation-completion", "periodic-q080 must retain the equation-completion semantic format.");
check(equationQuestion?.interaction?.kind === "fill-blanks", "periodic-q080 must use the deterministic fill-blank renderer.");

const referenceQuestionIds = ["periodic-q061", "periodic-q062", "periodic-q077", "periodic-q078", "periodic-q079"];
const referenceImagePath = "/knowledge-organisers/science/periodic-table-reference.jpeg";
check(referenceQuestionIds.every(id => organiser.questions.find(question => question.id === id)?.referenceImage?.src === referenceImagePath), "Every table-lookup question must display the supplied Periodic Table reference.");
check(["periodic-q058", "periodic-q059", "periodic-q060"].every(id => organiser.questions.find(question => question.id === id)?.interaction?.kind === "matching"), "Core element symbol matching sets are missing.");
check(!organiser.questions.some(question => /^periodic-q0(?:6[3-9]|7[0-2])$/.test(question.id)), "Removed whole-table recall questions must not return.");

check(new Set(sectionIds).size === organiser.sections.length, "Section IDs are not unique.");
check(new Set(questionIds).size === questionIds.length, "Chapter 3 question IDs are not unique.");
check(organiser.questions.every(question => question.sectionIds.every(id => sectionIds.has(id))), "A question references an unknown section.");
check(organiser.sections.every(section => new Set(section.keyFacts).size === section.keyFacts.length), "A section contains a duplicate knowledge fact.");
check(organiser.sections.every(section => section.sourceType === "knowledgeOrganiser"), "Every section must identify the Knowledge Organiser as its source.");
check(organiser.questions.every(question => question.sourceType === "generatedSupplement"), "Every Chapter 3 question must be marked generatedSupplement because there are no teacher PDFs.");
check(organiser.sections.every(section => /^#(?:15|16|22)[0-9a-f]{4}$/i.test(section.colour)), "A Chapter 3 section is not using the approved green palette.");

check(new Set(organiser.flashcards.map(card => card.id)).size === organiser.flashcards.length, "Flashcard IDs are not unique.");
check(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard references an unknown section.");
check(organiser.flashcards.every(card => typeof card.back === "string" && card.back.length > 0), "A flashcard has no answer.");
check(organiser.flashcards.every(card => card.front.endsWith("?")), "Every Chapter 3 flashcard front must be a clear question.");
check(organiser.flashcards.every(card => !/recall point/i.test(card.front)), "Generic Recall point flashcards must not return.");
for (const section of organiser.sections) {
  section.keyFacts.forEach((fact, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-fact-${index + 1}`);
    check(card?.back === fact, `Missing or altered flashcard for ${section.id} fact ${index + 1}.`);
  });
  section.keyTerms.forEach((term, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-term-${index + 1}`);
    check(card?.front === `What does “${term}” mean?`, `Missing vocabulary flashcard question for ${section.id} term ${index + 1}.`);
  });
  check(organiser.questions.some(question => question.sectionIds.includes(section.id)), `${section.title} has no quiz coverage.`);
}

for (const question of organiser.questions) {
  if (question.type === "multiple-choice") {
    check(question.options.length === 4, `${question.id} must have exactly four options.`);
    check(new Set(question.options).size === question.options.length, `${question.id} contains a duplicate option.`);
    check(question.options.includes(question.answer), `${question.id} answer is not one of its options.`);
    continue;
  }
  check(question.marks === question.markingPoints.length, `${question.id} marks do not match its marking points.`);
  const interaction = question.interaction;
  if (!interaction) continue;
  if (interaction.kind === "matching") {
    check(interaction.left.length === interaction.answers.length, `${question.id} matching rows and answers differ.`);
    check(interaction.answers.every(answer => Number.isInteger(answer) && answer >= 0 && answer < interaction.right.length), `${question.id} has an invalid matching answer index.`);
  }
  if (interaction.kind === "fill-blanks") {
    check(interaction.sentences.length === interaction.answers.length, `${question.id} blank sentences and answers differ.`);
  }
  if (interaction.kind === "classification") {
    check(interaction.rows.length === interaction.answers.length, `${question.id} classification rows and answers differ.`);
    check(interaction.answers.every(answer => interaction.categories.includes(answer)), `${question.id} uses an unknown classification category.`);
  }
  if (interaction.kind === "ordering") {
    check(interaction.items.length === interaction.answer.length, `${question.id} ordering items and answer differ.`);
    check(new Set(interaction.items).size === interaction.items.length, `${question.id} contains a duplicate ordering item.`);
    check(interaction.answer.every(answer => interaction.items.includes(answer)), `${question.id} ordering answer contains an unknown item.`);
  }
}

const allScienceQuestions = [...health.questions, ...ecosystem.questions, ...organiser.questions, ...separation.questions];
const allInteractive = allScienceQuestions.filter(question => question.interaction);
check(allScienceQuestions.length === 333, `Expected 333 cross-chapter raw questions; found ${allScienceQuestions.length}.`);
check(new Set(allScienceQuestions.map(question => question.id)).size === allScienceQuestions.length, "Science chapters contain a duplicate question ID.");
check(allScienceQuestions.filter(question => question.type === "multiple-choice").length === 111, "Expected 111 cross-chapter multiple-choice questions.");
check(allScienceQuestions.filter(question => question.type === "short-answer" && !question.interaction).length === 137, "Expected 137 cross-chapter standard short questions.");
check(allScienceQuestions.filter(question => question.type === "long-answer").length === 24, "Expected 24 cross-chapter long questions.");
check(allInteractive.length === 61, `Expected 61 cross-chapter interactive questions; found ${allInteractive.length}.`);

const registry = read("data/knowledgeOrganisers/registry.ts");
check(registry.includes("year8SciencePeriodicTable"), "Chapter 3 is missing from the registry.");
check(registry.indexOf("year8ScienceEcosystemProcesses,") < registry.indexOf("year8SciencePeriodicTable,"), "Chapter 3 is not registered after Chapter 2.");
check(registry.includes("first.chapter - second.chapter"), "Registry chapter sorting is missing.");

const theme = read("components/knowledge-organisers/knowledgeOrganiserTheme.ts");
const subjectPage = read("app/knowledge-organisers/year8/science/page.tsx");
const revisionPage = read("app/knowledge-organisers/year8/science/revision-quiz/page.tsx");
check(theme.includes('"--ko-primary": "#15803d"'), "Science primary green token changed unexpectedly.");
check(theme.includes('"--ko-primary": "#c2410c"'), "History theme regression: History primary token is missing.");
check(subjectPage.includes("getKnowledgeOrganisers(8, \"Science\")"), "Science index no longer loads registered organisers dynamically.");
check(revisionPage.includes("getKnowledgeOrganisers(8, \"Science\")"), "Cross-Chapter Quiz no longer loads registered Science organisers dynamically.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/science/autumn/the-periodic-table/page.tsx")), "Chapter 3 route is missing.");
check(fs.existsSync(path.join(root, "public/knowledge-organisers/science/periodic-table-ko.png")), "Periodic Table Knowledge Organiser asset is missing.");
check(fs.existsSync(path.join(root, "public/knowledge-organisers/science/periodic-table-reference.jpeg")), "Student-friendly Periodic Table reference asset is missing.");

const coverageRows = read("data/knowledgeOrganisers/year8SciencePeriodicTableCoverage.csv").trim().split(/\r?\n/);
check(coverageRows.length === 99, `Expected 98 coverage rows plus header; found ${coverageRows.length}.`);
check(coverageRows.slice(1).every(row => row.includes('"Covered"')), "A knowledge coverage row is not Covered.");
check(read("data/knowledgeOrganisers/year8SciencePeriodicTablePdfQuestionManifest.csv").trim().split(/\r?\n/).length === 1, "PDF manifest should contain a header only because the denominator is zero.");
check(read("data/knowledgeOrganisers/year8SciencePeriodicTablePdfQuestionCoverage.csv").trim().split(/\r?\n/).length === 1, "PDF question coverage should contain a header only because the denominator is zero.");

const requiredDocuments = [
  "data/knowledgeOrganisers/year8SciencePeriodicTableSourceInventory.md",
  "data/knowledgeOrganisers/year8SciencePeriodicTableCoverage.md",
  "data/knowledgeOrganisers/year8SciencePeriodicTablePdfPageChecklist.md",
  "data/knowledgeOrganisers/year8SciencePeriodicTableTeacherQuestionWordingDiff.md",
  "data/knowledgeOrganisers/year8SciencePeriodicTableExclusionsAndBlockers.md",
  "data/knowledgeOrganisers/year8SciencePeriodicTableAiTests.md",
  "PERIODIC-TABLE-UPDATE-INSTRUCTIONS.md",
  "PERIODIC-TABLE-FINAL-VALIDATION.md",
  "SHARED-FILES-CHANGELOG-PERIODIC-TABLE.md",
  "CROSS-CHAPTER-QUIZ-TESTS-PERIODIC-TABLE.md",
  "SCIENCE-THEME-REGRESSION-PERIODIC-TABLE.md",
];
requiredDocuments.forEach(relativePath => check(fs.existsSync(path.join(root, relativePath)), `Required audit document is missing: ${relativePath}`));

if (failures.length) {
  console.error("FAIL: The Periodic Table validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: The Periodic Table validation");
console.log(`Sections: ${organiser.sections.length}`);
console.log(`Knowledge points: ${facts + terms} (${facts} facts + ${terms} vocabulary)`);
console.log(`Flashcards: ${organiser.flashcards.length}`);
console.log(`Questions: ${organiser.questions.length}`);
console.log("Question types: 28 multiple choice; 24 standard short; 5 long; 15 interactive");
console.log("Interactive types: matching 5; fill blanks 2; equation completion 1; ordering 3; classification 4");
console.log(`Cross-chapter raw questions: ${allScienceQuestions.length}`);
console.log("Cross-chapter types: 111 multiple choice; 137 standard short; 24 long; 61 interactive");
console.log("Knowledge Coverage: 98/98 (100%)");
console.log("Teacher Question Coverage: 0/0 (N/A; no teacher PDFs supplied)");
