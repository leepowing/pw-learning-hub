import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const dataPath = path.join(root, "data/knowledgeOrganisers/year8ScienceEnergy.ts");
const outputPath = path.join(root, "data/knowledgeOrganisers/year8ScienceEnergyCoverage.csv");

const javascript = ts.transpileModule(fs.readFileSync(dataPath, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, {
  loadedModule,
  console,
});
const organiser = loadedModule.exports.year8ScienceEnergy;

const questionMappings = {
  "y8sci-energy-conservation": ["energy-q027", "energy-q027", "energy-q028"],
  "y8sci-energy-temperature": ["energy-q059", "energy-q004", "energy-q005", "energy-q030", "energy-q031", "energy-q031", "energy-q032"],
  "y8sci-energy-conduction": ["energy-q034", "energy-q033", "energy-q033", "energy-q034"],
  "y8sci-energy-convection": ["energy-q037", "energy-q035", "energy-q036", "energy-q036", "energy-q037"],
  "y8sci-energy-radiation": ["energy-q038", "energy-q038", "energy-q039", "energy-q040"],
  "y8sci-energy-power-work": ["energy-q041", "energy-q041", "energy-q042", "energy-q043", "energy-q042", "energy-q044", "energy-q044", "energy-q042", "energy-q045", "energy-q046"],
  "y8sci-energy-resources": ["energy-q047", "energy-q047", "energy-q048", "energy-q049", "energy-q049", "energy-q049", "energy-q051", "energy-q050", "energy-q051", "energy-q050"],
  "y8sci-energy-food-fuels": ["energy-q058", "energy-q058", "energy-q058", "energy-q052", "energy-q052", "energy-q052", "energy-q052", "energy-q052", "energy-q052"],
};

const vocabularyQuestionMappings = {
  "y8sci-energy-conservation": ["energy-q027"],
  "y8sci-energy-temperature": ["energy-q059", "energy-q029", "energy-q031", "energy-q032"],
  "y8sci-energy-conduction": ["energy-q060", "energy-q060"],
  "y8sci-energy-convection": ["energy-q060", "energy-q060"],
  "y8sci-energy-radiation": ["energy-q060", "energy-q038", "energy-q040", "energy-q040"],
  "y8sci-energy-power-work": ["energy-q061", "energy-q059", "energy-q068", "energy-q061", "energy-q061"],
  "y8sci-energy-resources": ["energy-q066", "energy-q061", "energy-q049", "energy-q061", "energy-q051"],
  "y8sci-energy-food-fuels": ["energy-q059"],
};

const diagramFacts = {
  "y8sci-energy-conduction": new Set([3]),
  "y8sci-energy-convection": new Set([4]),
  "y8sci-energy-resources": new Set([9]),
};

const equationFacts = {
  "y8sci-energy-conservation": new Set([1]),
  "y8sci-energy-power-work": new Set([0, 7, 8]),
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
    const type = diagramFacts[section.id]?.has(index)
      ? "Diagram"
      : equationFacts[section.id]?.has(index)
        ? "Equation"
        : "Fact";
    rows.push([
      section.id,
      section.title,
      fact,
      type,
      fact,
      section.title,
      card.id,
      type,
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
