import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const sourcePath = path.join(root, "data/knowledgeOrganisers/year8GeographyBrazil.ts");
const outputPath = path.join(root, "data/knowledgeOrganisers/year8GeographyBrazilCoverage.csv");
const javascript = ts.transpileModule(fs.readFileSync(sourcePath, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
const organiser = loadedModule.exports.year8GeographyBrazil;

const csv = value => `"${String(value).replaceAll('"', '""')}"`;
const headers = [
  "Section ID", "Section", "Knowledge point", "Knowledge point type", "Learn content",
  "Mind Map branch", "Flashcard ID", "Flashcard Front", "Flashcard Back", "Quiz question ID",
  "Quiz question type", "Source type", "Source reference", "Teacher question ID", "Coverage status", "Notes",
];

const rows = [];
organiser.sections.forEach((section, sectionIndex) => {
  section.keyFacts.forEach((fact, factIndex) => {
    const cardId = `brazil-fc-s${sectionIndex + 1}-f${factIndex + 1}`;
    const questionId = `brazil-q-s${sectionIndex + 1}-f${factIndex + 1}`;
    const card = organiser.flashcards.find(item => item.id === cardId);
    const question = organiser.questions.find(item => item.id === questionId);
    rows.push([section.id, section.title, fact, "Fact / place / data / process", fact, section.title, cardId, card?.front ?? "MISSING", card?.back ?? "MISSING", questionId, question?.type ?? "MISSING", section.sourceType, section.sourceRef, "N/A", card && question ? "Covered" : "Missing", "Learn, Mind Map, Flashcard and explicit Short Question mapping."]);
  });
  section.keyTerms.forEach((term, termIndex) => {
    const cardId = `brazil-fc-s${sectionIndex + 1}-t${termIndex + 1}`;
    const questionId = `brazil-q-s${sectionIndex + 1}-t${termIndex + 1}`;
    const card = organiser.flashcards.find(item => item.id === cardId);
    const question = organiser.questions.find(item => item.id === questionId);
    rows.push([section.id, section.title, term, "Vocabulary", term, section.title, cardId, card?.front ?? "MISSING", card?.back ?? "MISSING", questionId, question?.type ?? "MISSING", section.sourceType, section.sourceRef, "N/A", card && question ? "Covered" : "Missing", "Definition appears in Learn, Flashcards and the explicit Short Question bank."]);
  });
});

fs.writeFileSync(outputPath, `${headers.map(csv).join(",")}\n${rows.map(row => row.map(csv).join(",")).join("\n")}\n`);
console.log(`Wrote ${rows.length} coverage rows to ${path.relative(root, outputPath)}`);

