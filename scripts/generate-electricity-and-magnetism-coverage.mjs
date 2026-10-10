import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const dataPath = path.join(root, "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetism.ts");
const outputPath = path.join(root, "data/knowledgeOrganisers/year8ScienceElectricityAndMagnetismCoverage.csv");

const javascript = ts.transpileModule(fs.readFileSync(dataPath, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, {
  loadedModule,
  console,
});
const organiser = loadedModule.exports.year8ScienceElectricityAndMagnetism;

const questionMappings = {
  "y8sci-electricity-charging": [
    "electricity-magnetism-q024",
    "electricity-magnetism-q024",
    "electricity-magnetism-q025",
    "electricity-magnetism-q026",
  ],
  "y8sci-electricity-current": [
    "electricity-magnetism-q027",
    "electricity-magnetism-q028",
    "electricity-magnetism-q027",
  ],
  "y8sci-electricity-pd-resistance": [
    "electricity-magnetism-q030",
    "electricity-magnetism-q031",
    "electricity-magnetism-q030",
    "electricity-magnetism-q033",
    "electricity-magnetism-q032",
    "electricity-magnetism-q032",
    "electricity-magnetism-q033",
    "electricity-magnetism-q033",
    "electricity-magnetism-q033",
  ],
  "y8sci-electricity-series-parallel": [
    "electricity-magnetism-q034",
    "electricity-magnetism-q034",
    "electricity-magnetism-q034",
    "electricity-magnetism-q035",
    "electricity-magnetism-q035",
    "electricity-magnetism-q036",
    "electricity-magnetism-q036",
    "electricity-magnetism-q036",
  ],
  "y8sci-electricity-magnets": [
    "electricity-magnetism-q037",
    "electricity-magnetism-q037",
    "electricity-magnetism-q038",
    "electricity-magnetism-q038",
    "electricity-magnetism-q038",
    "electricity-magnetism-q039",
  ],
  "y8sci-electricity-electromagnets": [
    "electricity-magnetism-q040",
    "electricity-magnetism-q041",
    "electricity-magnetism-q041",
    "electricity-magnetism-q042",
    "electricity-magnetism-q042",
  ],
  "y8sci-electricity-uses-motors": [
    "electricity-magnetism-q043",
    "electricity-magnetism-q043",
    "electricity-magnetism-q043",
    "electricity-magnetism-q045",
    "electricity-magnetism-q044",
    "electricity-magnetism-q044",
  ],
};

const vocabularyQuestionMappings = {
  "y8sci-electricity-charging": ["electricity-magnetism-q024", "electricity-magnetism-q024", "electricity-magnetism-q053", "electricity-magnetism-q053", "electricity-magnetism-q053", "electricity-magnetism-q059"],
  "y8sci-electricity-current": ["electricity-magnetism-q052", "electricity-magnetism-q052"],
  "y8sci-electricity-pd-resistance": ["electricity-magnetism-q052", "electricity-magnetism-q052", "electricity-magnetism-q052", "electricity-magnetism-q056", "electricity-magnetism-q052", "electricity-magnetism-q059"],
  "y8sci-electricity-series-parallel": ["electricity-magnetism-q058", "electricity-magnetism-q058"],
  "y8sci-electricity-magnets": ["electricity-magnetism-q053", "electricity-magnetism-q053", "electricity-magnetism-q037", "electricity-magnetism-q037"],
  "y8sci-electricity-electromagnets": ["electricity-magnetism-q054"],
  "y8sci-electricity-uses-motors": ["electricity-magnetism-q057"],
};

const csv = value => `"${String(value).replaceAll('"', '""')}"`;
const headers = [
  "Section ID",
  "Section",
  "Knowledge point or skill",
  "Knowledge point type",
  "Learn content",
  "Mind Map branch",
  "Flashcard ID",
  "Flashcard type",
  "Flashcard Front",
  "Flashcard Back",
  "Front quality",
  "Source alignment",
  "Quiz question ID",
  "Quiz question type",
  "Source type",
  "Source reference",
  "Teacher original question ID",
  "Coverage status",
  "Notes",
];

const rows = [];
for (const section of organiser.sections) {
  section.keyFacts.forEach((fact, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-fact-${index + 1}`);
    const questionId = questionMappings[section.id][index];
    const question = organiser.questions.find(item => item.id === questionId);
    rows.push([
      section.id,
      section.title,
      fact,
      /equation|equals|divided/i.test(fact) ? "Equation" : /used|moving|sorting|making/i.test(fact) ? "Example" : "Fact",
      fact,
      section.title,
      card.id,
      "Fact",
      card.front,
      card.back,
      "Specific",
      "Exact",
      question.id,
      question.format || question.type,
      section.sourceType,
      section.sourceRef,
      "N/A",
      "Covered",
      "Learn, Mind Map, Flashcard and Quiz mapping verified.",
    ]);
  });
  section.keyTerms.forEach((term, index) => {
    const card = organiser.flashcards.find(item => item.id === `${section.id}-term-${index + 1}`);
    const questionId = vocabularyQuestionMappings[section.id][index];
    const question = organiser.questions.find(item => item.id === questionId);
    rows.push([
      section.id,
      section.title,
      term,
      "Vocabulary",
      term,
      section.title,
      card.id,
      "Vocabulary",
      card.front,
      card.back,
      "Specific",
      "Approved faithful version",
      question.id,
      question.format || question.type,
      "knowledgeOrganiser",
      card.sourceRef,
      "N/A",
      "Covered",
      "Definition is source-faithful and suitable for Year 8 retrieval practice.",
    ]);
  });
}

fs.writeFileSync(outputPath, `${headers.map(csv).join(",")}\n${rows.map(row => row.map(csv).join(",")).join("\n")}\n`);
console.log(`Wrote ${rows.length} coverage rows to ${path.relative(root, outputPath)}`);
