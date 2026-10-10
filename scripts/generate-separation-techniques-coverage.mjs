import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const dataPath = path.join(root, "data/knowledgeOrganisers/year8ScienceSeparationTechniques.ts");
const outputPath = path.join(root, "data/knowledgeOrganisers/year8ScienceSeparationTechniquesCoverage.csv");

const javascript = ts.transpileModule(fs.readFileSync(dataPath, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
const organiser = loadedModule.exports.year8ScienceSeparationTechniques;

const sectionQuestionIds = {
  "y8sci-separation-mixtures": ["separation-q001", "separation-q002", "separation-q003", "separation-q022", "separation-q023", "separation-q024", "separation-q043", "separation-q048", "separation-q051", "separation-q058"],
  "y8sci-separation-solutions": ["separation-q004", "separation-q005", "separation-q006", "separation-q025", "separation-q026", "separation-q027", "separation-q044", "separation-q048", "separation-q051", "separation-q058"],
  "y8sci-separation-solubility": ["separation-q007", "separation-q008", "separation-q009", "separation-q028", "separation-q029", "separation-q030", "separation-q044", "separation-q052", "separation-q058"],
  "y8sci-separation-filtration": ["separation-q010", "separation-q011", "separation-q012", "separation-q031", "separation-q032", "separation-q033", "separation-q045", "separation-q046", "separation-q049", "separation-q050", "separation-q053", "separation-q054", "separation-q059"],
  "y8sci-separation-distillation": ["separation-q013", "separation-q014", "separation-q015", "separation-q034", "separation-q035", "separation-q036", "separation-q045", "separation-q046", "separation-q047", "separation-q049", "separation-q050", "separation-q053", "separation-q055", "separation-q060"],
  "y8sci-separation-chromatography": ["separation-q016", "separation-q017", "separation-q018", "separation-q037", "separation-q038", "separation-q039", "separation-q047", "separation-q049", "separation-q050", "separation-q053", "separation-q056", "separation-q061"],
  "y8sci-separation-evaporation": ["separation-q019", "separation-q020", "separation-q021", "separation-q040", "separation-q041", "separation-q042", "separation-q045", "separation-q046", "separation-q049", "separation-q050", "separation-q053", "separation-q057", "separation-q062"],
};

const questionById = new Map(organiser.questions.map(question => [question.id, question]));
const csv = value => `"${String(value ?? "").replaceAll('"', '""')}"`;
const rows = [[
  "Section", "Knowledge point / skill", "Knowledge point type", "Learn content", "Mind Map branch",
  "Flashcard ID", "Quiz question ID", "Quiz question type", "Source type", "Source reference",
  "Teacher original question ID", "Coverage status", "Notes",
]];

for (const section of organiser.sections) {
  const questionIds = sectionQuestionIds[section.id];
  if (!questionIds?.length) throw new Error(`No quiz coverage set for ${section.id}`);
  const unknownIds = questionIds.filter(id => !questionById.has(id));
  if (unknownIds.length) throw new Error(`Unknown question IDs for ${section.id}: ${unknownIds.join(", ")}`);
  const formats = [...new Set(questionIds.map(id => {
    const question = questionById.get(id);
    return question.format ?? question.type;
  }))];

  section.keyFacts.forEach((fact, index) => rows.push([
    section.title, fact, "Fact", fact, section.title, `${section.id}-fact-${index + 1}`,
    questionIds.join("; "), formats.join("; "), "knowledgeOrganiser", section.sourceRef, "", "Covered",
    "Included in Learn, Mind Map, a dedicated flashcard and the listed generated quiz coverage set.",
  ]));
  section.keyTerms.forEach((term, index) => rows.push([
    section.title, term, "Vocabulary", term, section.title, `${section.id}-term-${index + 1}`,
    questionIds.join("; "), formats.join("; "), "knowledgeOrganiser", section.sourceRef, "", "Covered",
    "The definition appears on its dedicated flashcard; meaning or usage is tested by the listed generated quiz coverage set.",
  ]));
}

fs.writeFileSync(outputPath, `${rows.map(row => row.map(csv).join(",")).join("\n")}\n`);
console.log(`Wrote ${rows.length - 1} coverage rows to ${path.relative(root, outputPath)}`);
