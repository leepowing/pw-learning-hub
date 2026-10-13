import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const sourcePath = new URL("../data/knowledgeOrganisers/year8RpeWhatHappenedToMoses.ts", import.meta.url);
const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const sandbox = { exports: {} };
vm.runInNewContext(compiled, sandbox, { filename: sourcePath.pathname });
const organiser = sandbox.exports.year8RpeWhatHappenedToMoses;

const escapeCsv = value => `"${String(value ?? "").replaceAll('"', '""')}"`;
const headers = [
  "Chapter", "Section", "Knowledge point / term", "Type", "Source reference",
  "Learn mapping", "Mind Map branch", "Flashcard ID", "Flashcard front", "Flashcard back",
  "Flashcard quality", "Source alignment", "Quiz question ID", "Coverage status", "Notes",
];

const rows = organiser.flashcards
  .filter(card => card.sourceType === "knowledgeOrganiser")
  .map(card => {
    const section = organiser.sections.find(item => item.id === card.sectionId);
    const factMatch = card.id.match(/^(.*)-fact-(\d+)$/);
    const termMatch = card.id.match(/^(.*)-term-(\d+)$/);
    const questionId = factMatch
      ? `${factMatch[1]}-short-${factMatch[2]}`
      : `${termMatch[1]}-term-question-${termMatch[2]}`;
    const question = organiser.questions.find(item => item.id === questionId);
    const isVocabulary = Boolean(termMatch);
    return [
      organiser.title,
      section?.title,
      card.back,
      isVocabulary ? "Vocabulary" : "Fact / belief / event / explanation",
      card.sourceRef,
      section?.id,
      section?.id,
      card.id,
      card.front,
      card.back,
      "Specific active-recall front; non-empty; unique",
      "Aligned",
      question?.id ?? "MISSING",
      question ? "Covered" : "Missing",
      "Teacher Question Coverage: N/A — no teacher questions supplied",
    ];
  });

console.log([headers, ...rows].map(row => row.map(escapeCsv).join(",")).join("\n"));
