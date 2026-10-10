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
  vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, {
    loadedModule,
    console,
  });
  return loadedModule.exports[exportName];
}

const health = loadTypescriptData("data/knowledgeOrganisers/year8ScienceHealthAndLifestyle.ts", "year8ScienceHealthAndLifestyle");
const ecosystem = loadTypescriptData("data/knowledgeOrganisers/year8ScienceEcosystemProcesses.ts", "year8ScienceEcosystemProcesses");
const periodic = loadTypescriptData("data/knowledgeOrganisers/year8SciencePeriodicTable.ts", "year8SciencePeriodicTable");
const separation = loadTypescriptData("data/knowledgeOrganisers/year8ScienceSeparationTechniques.ts", "year8ScienceSeparationTechniques");
const organiser = loadTypescriptData("data/knowledgeOrganisers/year8ScienceElectricityAndMagnetism.ts", "year8ScienceElectricityAndMagnetism");

const facts = organiser.sections.reduce((total, section) => total + section.keyFacts.length, 0);
const terms = organiser.sections.reduce((total, section) => total + section.keyTerms.length, 0);
const sectionIds = new Set(organiser.sections.map(section => section.id));
const questionIds = organiser.questions.map(question => question.id);
const interactive = organiser.questions.filter(question => question.interaction);
const standardShort = organiser.questions.filter(question => question.type === "short-answer" && !question.interaction).length;
const interactionCount = kind => interactive.filter(question => question.interaction.kind === kind).length;
const normaliseFront = value => value.toLowerCase().trim().replace(/[!?.,;:]+/g, " ").replace(/\s+/g, " ");
const genericFrontPattern = /recall point|what can you remember|review this fact|^fact\s*\d*|^point\s*\d*$/i;

check(organiser.id === "year8-science-electricity-and-magnetism", "Unexpected organiser ID.");
check(organiser.chapter === 5 && organiser.term === "Autumn" && organiser.subject === "Science", "Chapter metadata is incorrect.");
check(organiser.sections.length === 7, `Expected 7 sections; found ${organiser.sections.length}.`);
check(facts === 41, `Expected 41 fact points; found ${facts}.`);
check(terms === 22, `Expected 22 vocabulary points; found ${terms}.`);
check(organiser.flashcards.length === 63, `Expected 63 flashcards; found ${organiser.flashcards.length}.`);
check(organiser.questions.length === 59, `Expected 59 questions; found ${organiser.questions.length}.`);
check(organiser.questions.filter(question => question.type === "multiple-choice").length === 23, "Expected 23 multiple-choice questions.");
check(standardShort === 22, `Expected 22 standard short questions; found ${standardShort}.`);
check(organiser.questions.filter(question => question.type === "long-answer").length === 6, "Expected 6 long questions.");
check(interactive.length === 8, `Expected 8 interactive questions; found ${interactive.length}.`);
check(interactionCount("matching") === 3, "Expected 3 matching questions.");
check(interactionCount("fill-blanks") === 2, "Expected 2 fill-blank questions.");
check(interactionCount("ordering") === 1, "Expected 1 ordering question.");
check(interactionCount("classification") === 2, "Expected 2 classification questions.");

check(new Set(sectionIds).size === organiser.sections.length, "Section IDs are not unique.");
check(new Set(questionIds).size === questionIds.length, "Chapter 5 question IDs are not unique.");
check(organiser.questions.every(question => question.sectionIds.every(id => sectionIds.has(id))), "A question references an unknown section.");
check(organiser.sections.every(section => section.context && !section.period), "Every Science section must use context rather than period.");
check(organiser.sections.every(section => section.sourceType === "knowledgeOrganiser"), "Every section must identify the Knowledge Organiser as its source.");
check(organiser.questions.every(question => question.sourceType === "generatedSupplement"), "Every question must be generatedSupplement because no teacher questions were supplied.");
check(organiser.sections.every(section => /^#(?:15|16|22)[0-9a-f]{4}$/i.test(section.colour)), "A section is not using the approved green palette.");
check(organiser.sections.some(section => section.keyFacts.some(fact => fact.includes("magnetic charges"))), "The user-approved original source wording is missing.");

const flashcardIds = organiser.flashcards.map(card => card.id);
const fronts = organiser.flashcards.map(card => card.front);
check(new Set(flashcardIds).size === organiser.flashcards.length, "Flashcard IDs are not unique.");
check(organiser.flashcards.every(card => card.id && sectionIds.has(card.sectionId)), "A flashcard has an empty ID or unknown section ID.");
check(organiser.flashcards.every(card => card.sourceType === "knowledgeOrganiser" && card.sourceRef), "A flashcard is missing source mapping.");
check(organiser.flashcards.every(card => typeof card.front === "string" && card.front.trim().length > 0), "A flashcard has an empty front.");
check(organiser.flashcards.every(card => typeof card.back === "string" && card.back.trim().length > 0), "A flashcard has an empty back.");
check(fronts.every(front => !genericFrontPattern.test(front)), "A generic flashcard front remains.");
check(new Set(fronts.map(normaliseFront)).size === fronts.length, "Normalised flashcard fronts are not unique.");

for (const section of organiser.sections) {
  const sectionCards = organiser.flashcards.filter(card => card.sectionId === section.id);
  check(sectionCards.length === section.keyFacts.length + section.keyTerms.length, `${section.title} flashcard count does not match facts plus terms.`);
  section.keyFacts.forEach((fact, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-fact-${index + 1}`);
    check(card?.back === fact, `Missing or altered flashcard for ${section.id} fact ${index + 1}.`);
    check(card?.front.trim().endsWith("?"), `Fact card ${card?.id || "missing"} is not a complete question.`);
    check(card?.front.trim().split(/\s+/).length >= 4, `Fact card ${card?.id || "missing"} has fewer than four words.`);
  });
  section.keyTerms.forEach((term, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-term-${index + 1}`);
    check(card?.front === `Define ${term}.`, `Vocabulary card ${section.id}-term-${index + 1} has the wrong front format.`);
  });
  check(organiser.questions.some(question => question.sectionIds.includes(section.id)), `${section.title} has no quiz coverage.`);
}

for (const question of organiser.questions) {
  check(question.id.startsWith("electricity-magnetism-q"), `${question.id} does not use the stable Chapter 5 prefix.`);
  check(question.marks > 0, `${question.id} has no marks.`);
  if (question.type === "multiple-choice") {
    check(question.options.length === 4, `${question.id} must have exactly four options.`);
    check(new Set(question.options).size === question.options.length, `${question.id} contains a duplicate option.`);
    check(question.options.includes(question.answer), `${question.id} answer is not one of its options.`);
    check(question.explanation.trim().length > 0, `${question.id} has no explanation.`);
    continue;
  }
  check(question.marks === question.markingPoints.length, `${question.id} marks do not match marking points.`);
  check(question.markingPoints.every(point => point.trim().length > 0), `${question.id} has an empty marking point.`);
  const interaction = question.interaction;
  if (!interaction) continue;
  if (interaction.kind === "matching") {
    check(interaction.left.length === interaction.answers.length, `${question.id} matching rows and answers differ.`);
    check(interaction.answers.every(answer => Number.isInteger(answer) && answer >= 0 && answer < interaction.right.length), `${question.id} has an invalid matching answer index.`);
  }
  if (interaction.kind === "fill-blanks") {
    check(interaction.sentences.length === interaction.answers.length, `${question.id} blank sentences and answers differ.`);
    check(interaction.answers.every(accepted => accepted.length > 0), `${question.id} has a blank without an accepted answer.`);
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

const allScienceOrganisers = [health, ecosystem, periodic, separation, organiser];
const allScienceQuestions = allScienceOrganisers.flatMap(chapter => chapter.questions);
const allScienceFlashcards = allScienceOrganisers.flatMap(chapter => chapter.flashcards);
const allInteractive = allScienceQuestions.filter(question => question.interaction);
const allInteractionCount = kind => allInteractive.filter(question => question.interaction.kind === kind).length;
check(allScienceQuestions.length === 392, `Expected 392 cross-chapter raw questions; found ${allScienceQuestions.length}.`);
check(new Set(allScienceQuestions.map(question => question.id)).size === allScienceQuestions.length, "Science chapters contain a duplicate question ID.");
check(new Set(allScienceFlashcards.map(card => card.id)).size === allScienceFlashcards.length, "Science chapters contain a duplicate flashcard ID.");
check(allScienceQuestions.filter(question => question.type === "multiple-choice").length === 134, "Expected 134 cross-chapter multiple-choice questions.");
check(allScienceQuestions.filter(question => question.type === "short-answer" && !question.interaction).length === 159, "Expected 159 cross-chapter standard short questions.");
check(allScienceQuestions.filter(question => question.type === "long-answer").length === 30, "Expected 30 cross-chapter long questions.");
check(allInteractive.length === 69, `Expected 69 cross-chapter interactive questions; found ${allInteractive.length}.`);
check(allInteractionCount("matching") === 17, "Expected 17 cross-chapter matching questions.");
check(allInteractionCount("fill-blanks") === 21, "Expected 21 cross-chapter fill-blank questions.");
check(allInteractionCount("ordering") === 11, "Expected 11 cross-chapter ordering questions.");
check(allInteractionCount("classification") === 13, "Expected 13 cross-chapter classification questions.");
check(allInteractionCount("diagram-labels") === 7, "Expected 7 cross-chapter diagram-label questions.");

const registry = read("data/knowledgeOrganisers/registry.ts");
const subjectPage = read("app/knowledge-organisers/year8/science/page.tsx");
const revisionPage = read("app/knowledge-organisers/year8/science/revision-quiz/page.tsx");
const theme = read("components/knowledge-organisers/knowledgeOrganiserTheme.ts");
const types = read("data/knowledgeOrganisers/types.ts");
check(registry.includes("year8ScienceElectricityAndMagnetism"), "Chapter 5 is missing from the registry.");
check(registry.indexOf("year8ScienceSeparationTechniques,") < registry.indexOf("year8ScienceElectricityAndMagnetism,"), "Chapter 5 is not registered after Chapter 4.");
check(registry.includes("first.chapter - second.chapter"), "Registry chapter sorting is missing.");
check(subjectPage.includes("getKnowledgeOrganisers(8, \"Science\")"), "Science index no longer loads registered organisers dynamically.");
check(revisionPage.includes("getKnowledgeOrganisers(8, \"Science\")"), "Cross-Chapter Quiz no longer loads registered Science organisers dynamically.");
check(theme.includes('"--ko-primary": "#15803d"'), "Science primary green token changed unexpectedly.");
check(theme.includes('"--ko-primary": "#c2410c"'), "History primary token is missing.");
check(types.includes("period?: string") && types.includes("context?: string"), "Science context / History period compatibility is missing.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/science/autumn/electricity-and-magnetism/page.tsx")), "Chapter 5 route is missing.");
check(fs.existsSync(path.join(root, "public/knowledge-organisers/science/electricity-and-magnetism-ko.jpg")), "Chapter 5 source image asset is missing.");

const coverageRows = read("data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismCoverage.csv").trim().split(/\r?\n/);
check(coverageRows.length === 64, `Expected 63 coverage rows plus header; found ${coverageRows.length}.`);
check(coverageRows.slice(1).every(row => row.includes('"Covered"')), "A knowledge coverage row is not Covered.");
check(read("data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismPdfQuestionManifest.csv").trim().split(/\r?\n/).length === 1, "Teacher manifest should contain a header only because the denominator is zero.");
check(read("data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismPdfQuestionCoverage.csv").trim().split(/\r?\n/).length === 1, "Teacher question coverage should contain a header only because the denominator is zero.");

const requiredDocuments = [
  "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismSourceInventory.md",
  "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismCoverage.md",
  "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismPdfPageChecklist.md",
  "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismTeacherQuestionWordingDiff.md",
  "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismExclusionsAndBlockers.md",
  "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismAiTests.md",
  "ELECTRICITY-AND-MAGNETISM-UPDATE-INSTRUCTIONS.md",
  "ELECTRICITY-AND-MAGNETISM-LOCAL-TESTING-CHECKLIST.md",
  "ELECTRICITY-AND-MAGNETISM-FINAL-VALIDATION.md",
  "SHARED-FILES-CHANGELOG-ELECTRICITY-AND-MAGNETISM.md",
  "CROSS-CHAPTER-QUIZ-TESTS-ELECTRICITY-AND-MAGNETISM.md",
  "SCIENCE-THEME-REGRESSION-ELECTRICITY-AND-MAGNETISM.md",
];
requiredDocuments.forEach(relativePath => check(fs.existsSync(path.join(root, relativePath)), `Required audit document is missing: ${relativePath}`));

if (failures.length) {
  console.error("FAIL: Electricity and Magnetism validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Electricity and Magnetism validation");
console.log(`Sections: ${organiser.sections.length}`);
console.log(`Knowledge points: ${facts + terms} (${facts} facts + ${terms} vocabulary)`);
for (const section of organiser.sections) {
  console.log(`- ${section.title}: ${section.keyFacts.length} fact + ${section.keyTerms.length} vocabulary = ${section.keyFacts.length + section.keyTerms.length} flashcards`);
}
console.log(`Flashcards: ${organiser.flashcards.length}`);
console.log("Flashcard duplicate IDs: 0; invalid section IDs: 0; generic fronts: 0; duplicate fronts: 0; empty fronts/backs: 0/0; missing source mappings: 0");
console.log(`Questions: ${organiser.questions.length}`);
console.log("Question types: 23 multiple choice; 22 standard short; 6 long; 8 interactive");
console.log("Interactive types: matching 3; fill blanks 2; ordering 1; classification 2");
console.log(`Cross-chapter raw questions: ${allScienceQuestions.length}`);
console.log("Cross-chapter types: 134 multiple choice; 159 standard short; 30 long; 69 interactive");
console.log("Knowledge Coverage: 63/63 (100%)");
console.log("Teacher Question Coverage: 0/0 (N/A; no teacher PDFs supplied)");
