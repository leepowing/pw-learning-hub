import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

function loadTypescriptData(relativePath, exportName) {
  const javascript = ts.transpileModule(read(relativePath), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const loadedModule = { exports: {} };
  vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
  return loadedModule.exports[exportName];
}

const health = loadTypescriptData("data/knowledgeOrganisers/year8ScienceHealthAndLifestyle.ts", "year8ScienceHealthAndLifestyle");
const ecosystem = loadTypescriptData("data/knowledgeOrganisers/year8ScienceEcosystemProcesses.ts", "year8ScienceEcosystemProcesses");
const periodic = loadTypescriptData("data/knowledgeOrganisers/year8SciencePeriodicTable.ts", "year8SciencePeriodicTable");
const organiser = loadTypescriptData("data/knowledgeOrganisers/year8ScienceSeparationTechniques.ts", "year8ScienceSeparationTechniques");

const facts = organiser.sections.reduce((total, section) => total + section.keyFacts.length, 0);
const terms = organiser.sections.reduce((total, section) => total + section.keyTerms.length, 0);
const sectionIds = new Set(organiser.sections.map(section => section.id));
const questionIds = organiser.questions.map(question => question.id);
const interactive = organiser.questions.filter(question => question.interaction);
const standardShort = organiser.questions.filter(question => question.type === "short-answer" && !question.interaction).length;
const interactionCount = kind => interactive.filter(question => question.interaction.kind === kind).length;

check(organiser.id === "year8-science-separation-techniques", "Unexpected organiser ID.");
check(organiser.chapter === 4 && organiser.term === "Autumn" && organiser.subject === "Science", "Chapter metadata is incorrect.");
check(organiser.sections.length === 7, `Expected 7 sections; found ${organiser.sections.length}.`);
check(facts === 48, `Expected 48 fact points; found ${facts}.`);
check(terms === 22, `Expected 22 vocabulary points; found ${terms}.`);
check(organiser.flashcards.length === 70, `Expected 70 flashcards; found ${organiser.flashcards.length}.`);
check(organiser.questions.length === 62, `Expected 62 questions; found ${organiser.questions.length}.`);
check(organiser.questions.filter(question => question.type === "multiple-choice").length === 21, "Expected 21 multiple-choice questions.");
check(standardShort === 21, `Expected 21 standard short questions; found ${standardShort}.`);
check(organiser.questions.filter(question => question.type === "long-answer").length === 5, "Expected 5 long questions.");
check(interactive.length === 15, `Expected 15 interactive questions; found ${interactive.length}.`);
check(interactionCount("matching") === 3, "Expected 3 matching questions.");
check(interactionCount("fill-blanks") === 3, "Expected 3 fill-blank questions.");
check(interactionCount("ordering") === 4, "Expected 4 ordering questions.");
check(interactionCount("classification") === 1, "Expected 1 classification question.");
check(interactionCount("diagram-labels") === 4, "Expected 4 diagram-label questions.");

check(new Set(sectionIds).size === organiser.sections.length, "Section IDs are not unique.");
check(new Set(questionIds).size === questionIds.length, "Chapter 4 question IDs are not unique.");
check(organiser.questions.every(question => question.sectionIds.every(id => sectionIds.has(id))), "A question references an unknown section.");
check(organiser.sections.every(section => new Set(section.keyFacts).size === section.keyFacts.length), "A section contains a duplicate knowledge fact.");
check(organiser.sections.every(section => section.sourceType === "knowledgeOrganiser"), "Every section must identify the Knowledge Organiser as its source.");
check(organiser.questions.every(question => question.sourceType === "generatedSupplement"), "Every Chapter 4 question must be marked generatedSupplement because there are no teacher PDFs.");
check(organiser.sections.every(section => /^#(?:15|16|22)[0-9a-f]{4}$/i.test(section.colour)), "A Chapter 4 section is not using the approved green palette.");

check(new Set(organiser.flashcards.map(card => card.id)).size === organiser.flashcards.length, "Flashcard IDs are not unique.");
check(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard references an unknown section.");
check(organiser.flashcards.every(card => typeof card.back === "string" && card.back.length > 0), "A flashcard has no answer.");
check(organiser.flashcards.every(card => typeof card.front === "string" && card.front.trim().endsWith("?")), "Every Chapter 4 flashcard front must be a complete question.");
check(organiser.flashcards.every(card => !/recall point/i.test(card.front)), "Generic Recall point flashcards must not return.");
for (const section of organiser.sections) {
  section.keyFacts.forEach((fact, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-fact-${index + 1}`);
    check(card?.back === fact, `Missing or altered flashcard for ${section.id} fact ${index + 1}.`);
  });
  section.keyTerms.forEach((term, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-term-${index + 1}`);
    check(card?.front === `What does “${term}” mean?`, `Missing vocabulary flashcard for ${section.id} term ${index + 1}.`);
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
  if (interaction.kind === "fill-blanks") check(interaction.sentences.length === interaction.answers.length, `${question.id} blank sentences and answers differ.`);
  if (interaction.kind === "classification") {
    check(interaction.rows.length === interaction.answers.length, `${question.id} classification rows and answers differ.`);
    check(interaction.answers.every(answer => interaction.categories.includes(answer)), `${question.id} uses an unknown classification category.`);
  }
  if (interaction.kind === "ordering") {
    check(interaction.items.length === interaction.answer.length, `${question.id} ordering items and answer differ.`);
    check(new Set(interaction.items).size === interaction.items.length, `${question.id} contains a duplicate ordering item.`);
    check(interaction.answer.every(answer => interaction.items.includes(answer)), `${question.id} ordering answer contains an unknown item.`);
  }
  if (interaction.kind === "diagram-labels") {
    check(interaction.labels.length === interaction.answers.length, `${question.id} diagram labels and answers differ.`);
    check(question.marks === interaction.answers.length, `${question.id} diagram marks do not equal label count.`);
  }
}

const expectedDiagrams = new Map([
  ["separation-q059", ["separation-filtration", 6]],
  ["separation-q060", ["separation-distillation", 4]],
  ["separation-q061", ["separation-chromatography", 5]],
  ["separation-q062", ["separation-evaporation", 3]],
]);
const expectedDiagramPrimaryAnswers = new Map([
  ["separation-q059", ["mixture", "filter paper", "residue", "filter funnel", "conical flask", "filtrate"]],
  ["separation-q060", ["thermometer", "water out", "condenser", "water in"]],
  ["separation-q061", ["pencil", "chromatography paper", "ink spot", "beaker", "water"]],
  ["separation-q062", ["evaporating basin", "solution", "bunsen burner"]],
]);
for (const [id, [diagram, answers]] of expectedDiagrams) {
  const question = organiser.questions.find(item => item.id === id);
  check(question?.format === "label-the-diagram", `${id} must preserve the label-the-diagram subtype.`);
  check(question?.interaction?.kind === "diagram-labels", `${id} must use the diagram-labels renderer.`);
  check(question?.interaction?.diagram === diagram, `${id} uses the wrong diagram.`);
  check(question?.interaction?.answers.length === answers, `${id} has the wrong number of label targets.`);
  check(
    question?.interaction?.kind === "diagram-labels" && question.interaction.answers.every((accepted, index) => accepted[0] === expectedDiagramPrimaryAnswers.get(id)?.[index]),
    `${id} primary answers do not match the numbered targets in the supplied diagram.`,
  );
}

const allScienceOrganisers = [health, ecosystem, periodic, organiser];
const allScienceQuestions = allScienceOrganisers.flatMap(chapter => chapter.questions);
const allInteractive = allScienceQuestions.filter(question => question.interaction);
const allInteractionCount = kind => allInteractive.filter(question => question.interaction.kind === kind).length;
check(allScienceQuestions.length === 333, `Expected 333 cross-chapter raw questions; found ${allScienceQuestions.length}.`);
check(new Set(allScienceQuestions.map(question => question.id)).size === allScienceQuestions.length, "Science chapters contain a duplicate question ID.");
check(allScienceQuestions.filter(question => question.type === "multiple-choice").length === 111, "Expected 111 cross-chapter multiple-choice questions.");
check(allScienceQuestions.filter(question => question.type === "short-answer" && !question.interaction).length === 137, "Expected 137 cross-chapter standard short questions.");
check(allScienceQuestions.filter(question => question.type === "long-answer").length === 24, "Expected 24 cross-chapter long questions.");
check(allInteractive.length === 61, `Expected 61 cross-chapter interactive questions; found ${allInteractive.length}.`);
check(allInteractionCount("matching") === 14, "Expected 14 cross-chapter matching questions.");
check(allInteractionCount("fill-blanks") === 19, "Expected 19 cross-chapter fill-blank renderers.");
check(allInteractionCount("ordering") === 10, "Expected 10 cross-chapter ordering questions.");
check(allInteractionCount("classification") === 11, "Expected 11 cross-chapter classification questions.");
check(allInteractionCount("diagram-labels") === 7, "Expected 7 cross-chapter diagram-label questions.");

const registry = read("data/knowledgeOrganisers/registry.ts");
check(registry.includes("year8ScienceSeparationTechniques"), "Chapter 4 is missing from the registry.");
check(registry.indexOf("year8SciencePeriodicTable,") < registry.indexOf("year8ScienceSeparationTechniques,"), "Chapter 4 is not registered after Chapter 3.");
check(registry.includes("first.chapter - second.chapter"), "Registry chapter sorting is missing.");

const theme = read("components/knowledge-organisers/knowledgeOrganiserTheme.ts");
const subjectPage = read("app/knowledge-organisers/year8/science/page.tsx");
const revisionPage = read("app/knowledge-organisers/year8/science/revision-quiz/page.tsx");
const types = read("data/knowledgeOrganisers/types.ts");
const renderer = read("components/knowledge-organisers/KnowledgeOrganiserInteractiveQuestionV2.tsx");
check(theme.includes('"--ko-primary": "#15803d"'), "Science primary green token changed unexpectedly.");
check(theme.includes('"--ko-primary": "#c2410c"'), "History theme regression: History primary token is missing.");
check(subjectPage.includes("getKnowledgeOrganisers(8, \"Science\")"), "Science index no longer loads registered organisers dynamically.");
check(revisionPage.includes("getKnowledgeOrganisers(8, \"Science\")"), "Cross-Chapter Quiz no longer loads registered Science organisers dynamically.");
check(types.includes('"separation-filtration"') && types.includes('"separation-evaporation"'), "Shared types are missing Chapter 4 diagram kinds.");
const diagramAssets = [
  "separation-filtration-diagram.png",
  "separation-distillation-diagram.png",
  "separation-chromatography-diagram.png",
  "separation-evaporation-diagram.png",
];
diagramAssets.forEach(asset => {
  check(fs.existsSync(path.join(root, "public/knowledge-organisers/science", asset)), `Chapter 4 diagram asset is missing: ${asset}`);
  check(renderer.includes(`/knowledge-organisers/science/${asset}`), `The renderer does not reference Chapter 4 diagram asset: ${asset}`);
});
check(renderer.includes("function ImageBackedDiagram") && renderer.includes("numbers beside the original arrows"), "The accessible Chapter 4 image-backed diagram renderer is missing.");
check(!renderer.includes("target: [") && !renderer.includes("path: \"M "), "Chapter 4 must not draw additional leader lines or target dots over the supplied diagrams.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/science/autumn/separation-techniques/page.tsx")), "Chapter 4 route is missing.");
check(fs.existsSync(path.join(root, "public/knowledge-organisers/science/separation-techniques-ko.png")), "Separation Techniques Knowledge Organiser asset is missing.");

const coverageRows = read("data/knowledgeOrganisers/year8ScienceSeparationTechniquesCoverage.csv").trim().split(/\r?\n/);
check(coverageRows.length === 71, `Expected 70 coverage rows plus header; found ${coverageRows.length}.`);
check(coverageRows.slice(1).every(row => row.includes('"Covered"')), "A knowledge coverage row is not Covered.");
check(read("data/knowledgeOrganisers/year8ScienceSeparationTechniquesPdfQuestionManifest.csv").trim().split(/\r?\n/).length === 1, "PDF manifest should contain a header only because the denominator is zero.");
check(read("data/knowledgeOrganisers/year8ScienceSeparationTechniquesPdfQuestionCoverage.csv").trim().split(/\r?\n/).length === 1, "PDF question coverage should contain a header only because the denominator is zero.");

const requiredDocuments = [
  "data/knowledgeOrganisers/year8ScienceSeparationTechniquesSourceInventory.md",
  "data/knowledgeOrganisers/year8ScienceSeparationTechniquesCoverage.md",
  "data/knowledgeOrganisers/year8ScienceSeparationTechniquesPdfPageChecklist.md",
  "data/knowledgeOrganisers/year8ScienceSeparationTechniquesTeacherQuestionWordingDiff.md",
  "data/knowledgeOrganisers/year8ScienceSeparationTechniquesExclusionsAndBlockers.md",
  "data/knowledgeOrganisers/year8ScienceSeparationTechniquesAiTests.md",
  "SEPARATION-TECHNIQUES-UPDATE-INSTRUCTIONS.md",
  "SEPARATION-TECHNIQUES-FINAL-VALIDATION.md",
  "SHARED-FILES-CHANGELOG-SEPARATION-TECHNIQUES.md",
  "CROSS-CHAPTER-QUIZ-TESTS-SEPARATION-TECHNIQUES.md",
  "SCIENCE-THEME-REGRESSION-SEPARATION-TECHNIQUES.md",
];
requiredDocuments.forEach(relativePath => check(fs.existsSync(path.join(root, relativePath)), `Required audit document is missing: ${relativePath}`));

if (failures.length) {
  console.error("FAIL: Separation Techniques validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Separation Techniques validation");
console.log(`Sections: ${organiser.sections.length}`);
console.log(`Knowledge points: ${facts + terms} (${facts} facts + ${terms} vocabulary)`);
console.log(`Flashcards: ${organiser.flashcards.length}`);
console.log(`Questions: ${organiser.questions.length}`);
console.log("Question types: 21 multiple choice; 21 standard short; 5 long; 15 interactive");
console.log("Interactive types: matching 3; fill blanks 3; ordering 4; classification 1; diagram labels 4");
console.log(`Cross-chapter raw questions: ${allScienceQuestions.length}`);
console.log("Cross-chapter types: 111 multiple choice; 137 standard short; 24 long; 61 interactive");
console.log("Knowledge Coverage: 70/70 (100%)");
console.log("Teacher Question Coverage: 0/0 (N/A; no teacher PDFs supplied)");
