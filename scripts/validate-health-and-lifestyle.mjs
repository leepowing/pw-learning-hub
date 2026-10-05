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
  const module = { exports: {} };
  vm.runInNewContext(`(function(exports,module){${javascript}\n})(module.exports,module)`, { module, console });
  return module.exports[exportName];
}

const organiser = loadTypescriptData(
  "data/knowledgeOrganisers/year8ScienceHealthAndLifestyle.ts",
  "year8ScienceHealthAndLifestyle",
);
const ecosystem = loadTypescriptData(
  "data/knowledgeOrganisers/year8ScienceEcosystemProcesses.ts",
  "year8ScienceEcosystemProcesses",
);

const facts = organiser.sections.reduce((total, section) => total + section.keyFacts.length, 0);
const terms = organiser.sections.reduce((total, section) => total + section.keyTerms.length, 0);
const questionIds = organiser.questions.map(question => question.id);
const sectionIds = new Set(organiser.sections.map(section => section.id));
const interactive = organiser.questions.filter(question => question.interaction);
const interactionCount = kind => interactive.filter(question => question.interaction.kind === kind).length;
const standardShort = organiser.questions.filter(question => question.type === "short-answer" && !question.interaction).length;
const digestiveDiagramQuestion = organiser.questions.find(question => question.id === "health-q58");

check(organiser.id === "year8-science-health-and-lifestyle", "Unexpected organiser ID.");
check(organiser.chapter === 1 && organiser.term === "Autumn" && organiser.subject === "Science", "Chapter metadata is incorrect.");
check(organiser.sections.length === 9, "Expected 9 sections.");
check(facts === 101, `Expected 101 fact points; found ${facts}.`);
check(terms === 30, `Expected 30 vocabulary points; found ${terms}.`);
check(organiser.flashcards.length === 131, `Expected 131 flashcards; found ${organiser.flashcards.length}.`);
check(organiser.questions.length === 75, `Expected 75 questions; found ${organiser.questions.length}.`);
check(organiser.questions.filter(question => question.type === "multiple-choice").length === 27, "Expected 27 multiple-choice questions.");
check(standardShort === 30, `Expected 30 standard short questions; found ${standardShort}.`);
check(organiser.questions.filter(question => question.type === "long-answer").length === 6, "Expected 6 long questions.");
check(interactive.length === 12, `Expected 12 interactive questions; found ${interactive.length}.`);
check(interactionCount("matching") === 3, "Expected 3 matching questions.");
check(interactionCount("fill-blanks") === 3, "Expected 3 fill-in-the-blank questions.");
check(interactionCount("diagram-labels") === 1, "Expected 1 label-the-diagram question.");
check(interactionCount("ordering") === 2, "Expected 2 ordering questions.");
check(interactionCount("classification") === 3, "Expected 3 classification questions.");
check(digestiveDiagramQuestion?.interaction?.kind === "diagram-labels", "health-q58 is not a diagram-label question.");
check(digestiveDiagramQuestion?.interaction?.answers.length === 10, "The replacement digestive diagram must have 10 answer fields.");
check(digestiveDiagramQuestion?.marks === 10, "The replacement digestive diagram must award 10 marks.");
check(!digestiveDiagramQuestion?.markingPoints.some(point => /salivary glands|bile duct/i.test(point)), "The diagram question asks for a structure not clearly shown in the replacement image.");

check(new Set(sectionIds).size === organiser.sections.length, "Section IDs are not unique.");
check(new Set(questionIds).size === questionIds.length, "Chapter 1 question IDs are not unique.");
check(organiser.questions.every(question => question.sectionIds.every(id => sectionIds.has(id))), "A question references an unknown section.");
check(organiser.questions.every(question => question.sourceType === "generatedSupplement"), "Every Chapter 1 question must be marked generatedSupplement because there are no teacher questions.");
check(organiser.sections.every(section => section.sourceType === "knowledgeOrganiser"), "Every section must identify the Knowledge Organiser as its source.");
check(organiser.flashcards.every(card => typeof card.back === "string" && card.back.length > 0), "A flashcard has no answer.");
check(new Set(organiser.flashcards.map(card => card.id)).size === organiser.flashcards.length, "Flashcard IDs are not unique.");
check(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard references an unknown section.");

const allScienceQuestions = [...organiser.questions, ...ecosystem.questions];
check(new Set(allScienceQuestions.map(question => question.id)).size === allScienceQuestions.length, "Chapter 1 and Chapter 2 contain a duplicate question ID.");

const registry = read("data/knowledgeOrganisers/registry.ts");
check(registry.includes("year8ScienceHealthAndLifestyle"), "Chapter 1 is missing from the registry.");
check(registry.indexOf("year8ScienceHealthAndLifestyle,") < registry.indexOf("year8ScienceEcosystemProcesses,"), "Chapter 1 is not registered above Chapter 2.");
check(registry.includes("first.chapter - second.chapter"), "Registry chapter sorting is missing.");

const types = read("data/knowledgeOrganisers/types.ts");
const interactiveRenderer = read("components/knowledge-organisers/KnowledgeOrganiserInteractiveQuestion.tsx");
const chapterRenderer = read("components/knowledge-organisers/KnowledgeOrganiserChapter.tsx");
const theme = read("components/knowledge-organisers/knowledgeOrganiserTheme.ts");
const aiRoute = read("app/api/knowledge-organisers/mark/route.ts");
check(types.includes('"digestive-system"'), "Digestive diagram type is missing.");
check(interactiveRenderer.includes("digestive-system-label-diagram.jpg"), "Digestive diagram asset is not rendered.");
check(interactiveRenderer.includes("clearly marked positions 1 to 10"), "Digestive diagram accessibility label is outdated.");
check(interactiveRenderer.includes("var(--ko-primary)"), "Interactive primary actions are not theme-aware.");
check(chapterRenderer.includes("context ?? section.period"), "The context/period compatibility fallback is missing.");
check(theme.includes('"--ko-primary": "#15803d"'), "Science primary green token changed unexpectedly.");
check(theme.includes('"--ko-primary": "#c2410c"'), "History theme regression: History primary token is missing.");
check(aiRoute.includes("getKnowledgeOrganiserById(organiserId)"), "AI route no longer resolves trusted organiser data.");
check(aiRoute.includes("item.id === questionId"), "AI route no longer resolves the trusted question ID.");
check(aiRoute.includes('criteria.filter(criterion => criterion.status === "met").length'), "AI route no longer recalculates awarded marks from Met criteria.");
check(aiRoute.includes("statusSummary"), "AI route no longer rebuilds a trusted summary.");
check(aiRoute.includes("process.env.OPENAI_API_KEY"), "AI key lookup is no longer server-side.");

check(fs.existsSync(path.join(root, "public/knowledge-organisers/science/digestive-system-label-diagram.jpg")), "Digestive-system diagram asset is missing.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/science/autumn/health-and-lifestyle/page.tsx")), "Chapter route is missing.");

const coverageRows = read("data/knowledgeOrganisers/year8ScienceHealthAndLifestyleCoverage.csv").trim().split(/\r?\n/);
check(coverageRows.length === 132, `Expected 131 coverage rows plus header; found ${coverageRows.length}.`);
check(coverageRows.slice(1).every(row => row.includes('"Covered"')), "A knowledge coverage row is not Covered.");
check(read("data/knowledgeOrganisers/year8ScienceHealthAndLifestylePdfQuestionManifest.csv").trim().split(/\r?\n/).length === 1, "PDF manifest should contain a header only because the denominator is zero.");
check(read("data/knowledgeOrganisers/year8ScienceHealthAndLifestylePdfQuestionCoverage.csv").trim().split(/\r?\n/).length === 1, "PDF question coverage should contain a header only because the denominator is zero.");

const sourceText = read("data/knowledgeOrganisers/year8ScienceHealthAndLifestyle.ts");
check(sourceText.includes("Heroin, cocaine and tobacco"), "The approved correction to heroin is missing.");
check(!sourceText.includes('"Heroine'), "The uncorrected drug name appears in student-facing content.");

if (failures.length) {
  console.error("FAIL: Health and Lifestyle validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Health and Lifestyle validation");
console.log(`Sections: ${organiser.sections.length}`);
console.log(`Knowledge points: ${facts + terms} (${facts} facts + ${terms} vocabulary)`);
console.log(`Flashcards: ${organiser.flashcards.length}`);
console.log(`Questions: ${organiser.questions.length}`);
console.log("Question types: 27 multiple choice; 30 standard short; 6 long; 12 interactive");
console.log("Interactive types: matching 3; fill blanks 3; diagram labels 1; ordering 2; classification 3");
console.log(`Cross-chapter raw questions: ${allScienceQuestions.length}`);
console.log("Cross-chapter types: 62 multiple choice; 92 standard short; 14 long; 31 interactive");
console.log("Knowledge Coverage: 131/131 (100%)");
console.log("Teacher Question Coverage: 0/0 (N/A; no teacher PDFs supplied)");
