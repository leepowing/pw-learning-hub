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

const organiser = loadTypescriptData("data/knowledgeOrganisers/year8EnglishCrime.ts", "year8EnglishCrime");
const dataSource = read("data/knowledgeOrganisers/year8EnglishCrime.ts");
const facts = organiser.sections.reduce((total, section) => total + section.keyFacts.length, 0);
const terms = organiser.sections.reduce((total, section) => total + section.keyTerms.length, 0);
const sectionIds = new Set(organiser.sections.map(section => section.id));
const cardIds = organiser.flashcards.map(card => card.id);
const questionIds = organiser.questions.map(question => question.id);
const countType = type => organiser.questions.filter(question => question.type === type).length;
const interactive = organiser.questions.filter(question => question.interaction);

check(organiser.id === "year8-english-crime", "Unexpected organiser ID.");
check(organiser.year === 8 && organiser.subject === "English" && organiser.term === "Autumn" && organiser.chapter === 1, "Chapter metadata is incorrect.");
check(organiser.title === "Crime", "Chapter title must be Crime.");
check(organiser.sections.length === 6, `Expected 6 sections; found ${organiser.sections.length}.`);
check(facts + terms === 74, `Expected 74 required points; found ${facts + terms}.`);
check(JSON.stringify(organiser.sections.map(section => section.keyFacts.length + section.keyTerms.length)) === JSON.stringify([20, 8, 12, 12, 14, 8]), "Section knowledge-point counts changed.");
check(organiser.flashcards.length === 61, `Expected 61 flashcards; found ${organiser.flashcards.length}.`);
check(JSON.stringify(organiser.sections.map(section => organiser.flashcards.filter(card => card.sectionId === section.id).length)) === JSON.stringify([15, 7, 12, 10, 11, 6]), "Section flashcard counts changed.");
check(organiser.questions.length === 58, `Expected 58 questions; found ${organiser.questions.length}.`);
check(countType("multiple-choice") === 28, `Expected 28 MC questions; found ${countType("multiple-choice")}.`);
check(countType("short-answer") === 23, `Expected 23 short questions; found ${countType("short-answer")}.`);
check(countType("long-answer") === 7, `Expected 7 long questions; found ${countType("long-answer")}.`);
check(interactive.length === 0, `English interactive-question count must be zero; found ${interactive.length}.`);
check(JSON.stringify(organiser.sections.map(section => organiser.questions.filter(question => question.sectionIds.includes(section.id)).length)) === JSON.stringify([13, 8, 10, 9, 11, 7]), "Section question counts changed.");

check(new Set(sectionIds).size === organiser.sections.length, "Section IDs are not unique.");
check(new Set(cardIds).size === cardIds.length, "Flashcard IDs are not unique.");
check(new Set(questionIds).size === questionIds.length, "Question IDs are not unique.");
check(organiser.sections.every(section => section.context && section.context.trim()), "Every English section must have a context label.");
check(organiser.sections.every(section => section.sourceType === "knowledgeOrganiser" && section.sourceRef), "Every section must map to a supplied KO source.");

const normalisedFronts = organiser.flashcards.map(card => card.front.trim().toLowerCase().replaceAll(/\s+/g, " "));
check(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard references an unknown section.");
check(organiser.flashcards.every(card => card.id.startsWith("eng-crime-f")), "A flashcard has an unexpected ID prefix.");
check(organiser.flashcards.every(card => card.front.trim().endsWith("?")), "Every flashcard Front must be a complete question.");
check(organiser.flashcards.every(card => card.front.trim() && card.back.trim()), "A flashcard has an empty Front or Back.");
check(organiser.flashcards.every(card => card.sourceType === "knowledgeOrganiser" && card.sourceRef), "A flashcard is missing source metadata.");
check(organiser.flashcards.every(card => !/recall point|what can you remember|review this fact|^fact\s*\d+/i.test(card.front)), "A generic flashcard Front was found.");
check(new Set(normalisedFronts).size === normalisedFronts.length, "Duplicate normalised flashcard Fronts were found.");

check(organiser.questions.every(question => question.id.startsWith("eng-crime-q")), "A question has an unexpected ID prefix.");
check(organiser.questions.every(question => question.sectionIds.length > 0 && question.sectionIds.every(id => sectionIds.has(id))), "A question references an unknown section.");
check(organiser.questions.every(question => question.sourceType === "generatedSupplement" && question.sourceRef), "Every question must be labelled generatedSupplement with a source reference.");
check(organiser.questions.every(question => !question.interaction), "English data must not include an interaction object.");
check(organiser.questions.every(question => !question.format || question.format === "standard"), "English data includes an unsupported question format.");
check(organiser.questions.every(question => !/\bquote|quotation\b/i.test(question.prompt)), "A question requires an unprovided quotation.");

for (const section of organiser.sections) {
  check(organiser.questions.some(question => question.type === "multiple-choice" && question.sectionIds.includes(section.id)), `${section.title} has no MC coverage.`);
  check(organiser.questions.some(question => question.type === "short-answer" && question.sectionIds.includes(section.id)), `${section.title} has no Short Question coverage.`);
}

for (const question of organiser.questions) {
  check(question.prompt.trim().length > 0, `${question.id} has an empty prompt.`);
  check(Number.isInteger(question.marks) && question.marks > 0, `${question.id} has invalid marks.`);
  if (question.type === "multiple-choice") {
    check(question.marks === 1, `${question.id} MC should be worth one mark.`);
    check(question.options.length === 4, `${question.id} must have four options.`);
    check(new Set(question.options).size === question.options.length, `${question.id} has duplicate options.`);
    check(question.options.includes(question.answer), `${question.id} answer is not one of its options.`);
    check(question.explanation.trim().length > 0, `${question.id} has no explanation.`);
  } else {
    check(question.marks === question.markingPoints.length, `${question.id} marks and atomic marking points differ.`);
    check(question.markingPoints.every(point => point.trim().length > 0), `${question.id} has an empty marking point.`);
    check(question.guidance.trim().length > 0, `${question.id} has no guidance.`);
  }
}

const registry = read("data/knowledgeOrganisers/registry.ts");
const types = read("data/knowledgeOrganisers/types.ts");
const theme = read("components/knowledge-organisers/knowledgeOrganiserTheme.ts");
const chapterComponent = read("components/knowledge-organisers/KnowledgeOrganiserChapter.tsx");
const revisionComponent = read("components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx");
const markingRoute = read("app/api/knowledge-organisers/mark/route.ts");
const subjectPage = read("app/knowledge-organisers/year8/english/page.tsx");

check(registry.includes("year8EnglishCrime"), "English Crime is missing from the registry.");
check(registry.includes("first.chapter - second.chapter"), "Registry chapter sorting is missing.");
check(types.includes('sourceType?: "knowledgeOrganiser"') && types.includes("export type KnowledgeFlashcard"), "Optional flashcard source metadata is missing.");
check(theme.includes('"--ko-primary": "#9f1239"') && theme.includes('"--ko-primary-dark": "#881337"'), "English rose theme tokens are missing.");
check(theme.includes('"--ko-primary": "#c2410c"'), "History orange theme token changed unexpectedly.");
check(theme.includes('"--ko-primary": "#15803d"'), "Science green theme token changed unexpectedly.");
check(theme.includes('normalisedSubject === "english"'), "English subject-aware theme branch is missing.");
check(chapterComponent.includes("visibleQuizModeDetails") && chapterComponent.includes('subject.trim().toLowerCase() !== "english"'), "Chapter quiz is missing English-only mode filtering.");
check(revisionComponent.includes("visibleModes") && revisionComponent.includes('subjectSlug === "english"'), "Cross-Chapter Quiz is missing English-only mode filtering.");
check(chapterComponent.includes('["multiple-choice", "short-answer", "long-answer"]'), "Mixed Chapter Quiz no longer seeds the three English question types.");
check(revisionComponent.includes("questionMode(item.question)"), "Cross-Chapter mixed-mode balancing is missing.");
check(markingRoute.includes('normalisedSubject === "english"'), "English AI marking branch is missing.");
check(markingRoute.includes("Accept alternative interpretations") && markingRoute.includes("Do not require an exact model-answer phrase"), "English AI interpretation rules are incomplete.");
check(markingRoute.includes('normalisedSubject === "science"') && markingRoute.includes("For History long answers"), "History or Science AI marking branch was lost.");
check(subjectPage.includes('getKnowledgeOrganisers(8, "English")'), "English homepage does not load registered chapters dynamically.");
check(subjectPage.includes("multiple choice, short questions, long questions or a mixture"), "English homepage question-type description is incorrect.");

const routeFiles = [
  "app/knowledge-organisers/year8/english/page.tsx",
  "app/knowledge-organisers/year8/english/autumn/crime/page.tsx",
  "app/knowledge-organisers/year8/english/revision-quiz/page.tsx",
];
routeFiles.forEach(relativePath => check(fs.existsSync(path.join(root, relativePath)), `Route file is missing: ${relativePath}`));

const coverageRows = read("data/knowledgeOrganisers/year8EnglishCrimeCoverage.csv").trim().split(/\r?\n/);
check(coverageRows.length === 75, `Expected 74 coverage rows plus header; found ${coverageRows.length}.`);
check(coverageRows.slice(1).every(row => row.includes('"Covered"')), "A source knowledge point is not marked Covered.");
check(read("data/knowledgeOrganisers/year8EnglishCrimeSourceQuestionManifest.csv").trim().split(/\r?\n/).length === 1, "Source-question manifest should be header-only because no teacher questions were supplied.");
check(read("data/knowledgeOrganisers/year8EnglishCrimeSourceQuestionCoverage.csv").trim().split(/\r?\n/).length === 1, "Teacher-question coverage should be header-only because its denominator is zero.");

const requiredDocuments = [
  "data/knowledgeOrganisers/year8EnglishCrimeSourceInventory.md",
  "data/knowledgeOrganisers/year8EnglishCrimeSourcePageChecklist.md",
  "data/knowledgeOrganisers/year8EnglishCrimeCoverage.md",
  "data/knowledgeOrganisers/year8EnglishCrimeTeacherQuestionWordingDiff.md",
  "data/knowledgeOrganisers/year8EnglishCrimeExclusionsAndBlockers.md",
  "data/knowledgeOrganisers/year8EnglishCrimeAiTests.md",
  "ENGLISH-CRIME-UPDATE-INSTRUCTIONS.md",
  "SHARED-FILES-CHANGELOG-ENGLISH-CRIME.md",
  "CROSS-CHAPTER-QUIZ-TESTS-ENGLISH-CRIME.md",
  "ENGLISH-THEME-REGRESSION.md",
  "ENGLISH-QUESTION-TYPE-VALIDATION.md",
  "ENGLISH-CRIME-LOCAL-TESTING-CHECKLIST.md",
  "ENGLISH-CRIME-FINAL-VALIDATION.md",
];
requiredDocuments.forEach(relativePath => check(fs.existsSync(path.join(root, relativePath)), `Required audit document is missing: ${relativePath}`));

check(!dataSource.includes("teacherQuestion"), "English Crime data incorrectly claims a teacher question source.");
check(!dataSource.includes("matching") && !dataSource.includes("fill-blanks") && !dataSource.includes("diagram-labels") && !dataSource.includes("ordering") && !dataSource.includes("classification"), "English Crime data contains an interactive question type.");

if (failures.length) {
  console.error("FAIL: Year 8 English Crime validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Year 8 English Crime validation");
console.log(`Sections: ${organiser.sections.length}`);
console.log(`Knowledge points: ${facts + terms} (${facts} concepts/facts + ${terms} vocabulary)`);
console.log(`Flashcards: ${organiser.flashcards.length}`);
console.log(`Questions: ${organiser.questions.length}`);
console.log("Question types: 28 multiple choice; 23 short; 7 long; 0 interactive");
console.log("Knowledge Coverage: 74/74 (100%)");
console.log("Teacher Question Coverage: 0/0 (N/A; no teacher questions supplied)");
