import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const dataPath = path.join(root, "data/knowledgeOrganisers/year8HistoryJackTheRipper.ts");
const coveragePath = path.join(root, "data/knowledgeOrganisers/year8HistoryJackTheRipperCoverage.md");
const registryPath = path.join(root, "data/knowledgeOrganisers/registry.ts");
const historyPath = path.join(root, "app/knowledge-organisers/year8/history/page.tsx");
const revisionPath = path.join(root, "components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx");
const revisionPagePath = path.join(root, "app/knowledge-organisers/year8/history/revision-quiz/page.tsx");
const apiPath = path.join(root, "app/api/knowledge-organisers/mark/route.ts");

function loadOrganiser(filePath, exportName) {
  const source = fs.readFileSync(filePath, "utf8")
    .replace(/^import type .*;\s*$/m, "")
    .replace(`export const ${exportName}`, `const ${exportName}`)
    .concat(`\nglobalThis.__organiser = ${exportName};`);
  const javascript = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.None, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const context = {};
  vm.createContext(context);
  vm.runInContext(javascript, context);
  return context.__organiser;
}

const organiser = loadOrganiser(dataPath, "year8HistoryJackTheRipper");
const migration = loadOrganiser(path.join(root, "data/knowledgeOrganisers/year8HistoryMigration.ts"), "year8HistoryMigration");
const industrial = loadOrganiser(path.join(root, "data/knowledgeOrganisers/year8HistoryIndustrialRevolution.ts"), "year8HistoryIndustrialRevolution");
const coverage = fs.readFileSync(coveragePath, "utf8");
const registry = fs.readFileSync(registryPath, "utf8");
const history = fs.readFileSync(historyPath, "utf8");
const revision = fs.readFileSync(revisionPath, "utf8");
const revisionPage = fs.readFileSync(revisionPagePath, "utf8");
const api = fs.readFileSync(apiPath, "utf8");

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const ids = [
  ...organiser.sections.map(item => item.id),
  ...organiser.flashcards.map(item => item.id),
  ...organiser.questions.map(item => item.id),
];
const allQuestionIds = [migration, industrial, organiser].flatMap(item => item.questions.map(question => question.id));
const sectionIds = new Set(organiser.sections.map(item => item.id));
const mcq = organiser.questions.filter(item => item.type === "multiple-choice");
const short = organiser.questions.filter(item => item.type === "short-answer");
const long = organiser.questions.filter(item => item.type === "long-answer");
const auditRows = coverage.split("\n").filter(line => /^\| \d+ \|/.test(line));

assert(organiser.sections.length === 4, "Expected 4 sections.");
assert(organiser.flashcards.length === 40, "Expected 40 flashcards.");
assert(mcq.length === 18, "Expected 18 multiple-choice questions.");
assert(short.length === 15, "Expected 15 short-answer questions.");
assert(long.length === 3, "Expected 3 long-answer questions.");
assert(organiser.questions.length === 36, "Expected 36 total questions.");
assert(new Set(ids).size === ids.length, "Duplicate section, flashcard or question ID found in Chapter 3.");
assert(new Set(allQuestionIds).size === allQuestionIds.length, "Duplicate question ID found across the three History chapters.");
assert(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard has an unknown section ID.");
assert(organiser.questions.every(question => question.sectionIds.length > 0 && question.sectionIds.every(id => sectionIds.has(id))), "A question has a missing or unknown section ID.");
assert(mcq.every(question => question.options.length === 4), "Every MCQ must have exactly four options.");
assert(mcq.every(question => question.options.includes(question.answer)), "An MCQ answer is not present in its options.");
assert([...short, ...long].every(question => question.marks === question.markingPoints.length), "Written-question marks must equal marking-point count.");
assert(auditRows.length === 53, `Expected 53 coverage rows, found ${auditRows.length}.`);
assert(auditRows.every(row => row.includes("| Covered |")), "Every coverage row must be Covered.");
assert(!coverage.includes("| Partially covered |") && !coverage.includes("| Missing |"), "Coverage contains an incomplete item.");
assert(registry.includes('import { year8HistoryJackTheRipper } from "./year8HistoryJackTheRipper"'), "Chapter 3 import is missing from registry.");
assert(registry.includes("year8HistoryJackTheRipper,"), "Chapter 3 is not registered.");
assert(history.includes("/knowledge-organisers/year8/history/autumn/jack-the-ripper"), "Chapter 3 card or route is missing from the History page.");
assert(revisionPage.includes("getKnowledgeOrganisers(8, \"History\")"), "Cross-chapter quiz is not registry-driven.");
assert(revision.includes("question.sectionIds.every"), "Cross-chapter taught-section filtering was not found.");
assert(api.includes('criterion.status === "met"'), "Server-side met-count score recalculation was not found.");
assert(api.includes("markingPoint: question.markingPoints[index]"), "Trusted marking-point replacement was not found.");
assert(api.includes("partlyMetCriteria.length") && api.includes("notMetCriteria.length"), "Server-generated summary counts were not found.");
assert(api.includes('enum: ["met", "partly_met", "not_met"]'), "AI response status schema was not found.");

if (failures.length) {
  console.error("Jack the Ripper validation failed:");
  failures.forEach(message => console.error(`- ${message}`));
  process.exit(1);
}

console.log(JSON.stringify({
  sections: organiser.sections.length,
  flashcards: organiser.flashcards.length,
  multipleChoice: mcq.length,
  shortAnswer: short.length,
  longAnswer: long.length,
  totalQuestions: organiser.questions.length,
  coverageItems: auditRows.length,
  coveragePercentage: 100,
  duplicateIds: 0,
  crossChapterDuplicateQuestionIds: 0,
  missingSectionIds: 0,
  invalidMcqAnswers: 0,
  trustedAiLookup: "passed",
  crossChapterRegistration: "passed",
}, null, 2));
