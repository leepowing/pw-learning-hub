import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const dataPath = path.join(root, "data/knowledgeOrganisers/year8HistoryIndustrialRevolution.ts");
const coveragePath = path.join(root, "data/knowledgeOrganisers/year8HistoryIndustrialRevolutionCoverage.md");
const registryPath = path.join(root, "data/knowledgeOrganisers/registry.ts");
const apiPath = path.join(root, "app/api/knowledge-organisers/mark/route.ts");
const source = fs.readFileSync(dataPath, "utf8")
  .replace(/^import type .*;\s*$/m, "")
  .replace("export const year8HistoryIndustrialRevolution", "const year8HistoryIndustrialRevolution")
  .concat("\nglobalThis.__organiser = year8HistoryIndustrialRevolution;");
const javascript = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.None, target: ts.ScriptTarget.ES2022 },
}).outputText;
const context = {};
vm.createContext(context);
vm.runInContext(javascript, context);
const organiser = context.__organiser;
const coverage = fs.readFileSync(coveragePath, "utf8");
const registry = fs.readFileSync(registryPath, "utf8");
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
const sectionIds = new Set(organiser.sections.map(item => item.id));
const mcq = organiser.questions.filter(item => item.type === "multiple-choice");
const short = organiser.questions.filter(item => item.type === "short-answer");
const long = organiser.questions.filter(item => item.type === "long-answer");
const auditRows = coverage.split("\n").filter(line => /^\| \d+ \|/.test(line));

assert(organiser.sections.length === 4, "Expected 4 sections.");
assert(organiser.flashcards.length === 34, "Expected 34 flashcards.");
assert(mcq.length === 16, "Expected 16 multiple-choice questions.");
assert(short.length === 12, "Expected 12 short-answer questions.");
assert(long.length === 3, "Expected 3 long-answer questions.");
assert(organiser.questions.length === 31, "Expected 31 total questions.");
assert(new Set(ids).size === ids.length, "Duplicate section, flashcard or question ID found.");
assert(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard has an unknown section ID.");
assert(organiser.questions.every(question => question.sectionIds.length > 0 && question.sectionIds.every(id => sectionIds.has(id))), "A question has a missing or unknown section ID.");
assert(mcq.every(question => question.options.length === 4), "Every MCQ must have exactly four options.");
assert(mcq.every(question => question.options.includes(question.answer)), "An MCQ answer is not present in its options.");
assert([...short, ...long].every(question => question.marks === question.markingPoints.length), "Written-question marks must equal marking-point count.");
assert(auditRows.length === 45, `Expected 45 coverage rows, found ${auditRows.length}.`);
assert(auditRows.every(row => row.includes("| Covered |")), "Every coverage row must be Covered.");
assert(!coverage.includes("| Partially covered |") && !coverage.includes("| Missing |"), "Coverage contains an incomplete item.");
assert(registry.includes("year8HistoryIndustrialRevolution"), "Chapter 2 is not registered.");
assert(api.includes('criterion.status === "met"'), "Server-side met-count score recalculation was not found.");
assert(api.includes("markingPoint: question.markingPoints[index]"), "Trusted marking-point text replacement was not found.");
assert(api.includes("partlyMetCriteria.length") && api.includes("notMetCriteria.length"), "Server-generated status-count summary was not found.");
assert(api.includes('enum: ["met", "partly_met", "not_met"]'), "AI response status schema was not found.");

if (failures.length) {
  console.error("Industrial Revolution validation failed:");
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
  missingSectionIds: 0,
  invalidMcqAnswers: 0,
}, null, 2));
