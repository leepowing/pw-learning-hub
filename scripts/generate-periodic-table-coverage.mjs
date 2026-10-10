import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const dataPath = path.join(root, "data/knowledgeOrganisers/year8SciencePeriodicTable.ts");
const outputPath = path.join(root, "data/knowledgeOrganisers/year8SciencePeriodicTableCoverage.csv");

const javascript = ts.transpileModule(fs.readFileSync(dataPath, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
const organiser = loadedModule.exports.year8SciencePeriodicTable;

const sectionQuestionIds = {
  "y8sci-periodic-structure": ["periodic-q001", "periodic-q002", "periodic-q003", "periodic-q004", "periodic-q029", "periodic-q030", "periodic-q031", "periodic-q061", "periodic-q062", "periodic-q073", "periodic-q075"],
  "y8sci-periodic-elements": ["periodic-q005", "periodic-q006", "periodic-q007", "periodic-q008", "periodic-q032", "periodic-q033", "periodic-q058", "periodic-q059", "periodic-q060", "periodic-q061", "periodic-q062"],
  "y8sci-periodic-properties": ["periodic-q009", "periodic-q010", "periodic-q011", "periodic-q012", "periodic-q034", "periodic-q035", "periodic-q036", "periodic-q053", "periodic-q074", "periodic-q076", "periodic-q081"],
  "y8sci-periodic-metals-nonmetals": ["periodic-q013", "periodic-q014", "periodic-q015", "periodic-q016", "periodic-q037", "periodic-q038", "periodic-q039", "periodic-q040", "periodic-q054", "periodic-q074", "periodic-q082"],
  "y8sci-periodic-group1": ["periodic-q017", "periodic-q018", "periodic-q019", "periodic-q020", "periodic-q041", "periodic-q042", "periodic-q043", "periodic-q044", "periodic-q055", "periodic-q062", "periodic-q073", "periodic-q077"],
  "y8sci-periodic-group7": ["periodic-q021", "periodic-q022", "periodic-q023", "periodic-q024", "periodic-q045", "periodic-q046", "periodic-q047", "periodic-q048", "periodic-q052", "periodic-q056", "periodic-q062", "periodic-q073", "periodic-q078", "periodic-q080"],
  "y8sci-periodic-group0": ["periodic-q025", "periodic-q026", "periodic-q027", "periodic-q028", "periodic-q049", "periodic-q050", "periodic-q051", "periodic-q052", "periodic-q057", "periodic-q062", "periodic-q073", "periodic-q079"],
};

const questionById = new Map(organiser.questions.map(question => [question.id, question]));
const csv = value => `"${String(value ?? "").replaceAll('"', '""')}"`;
const header = [
  "Section",
  "Knowledge point / skill",
  "Knowledge point type",
  "Learn content",
  "Mind Map branch",
  "Flashcard ID",
  "Quiz question ID",
  "Quiz question type",
  "Source type",
  "Source reference",
  "Teacher original question ID",
  "Coverage status",
  "Notes",
];

const rows = [header];
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
    section.title,
    fact,
    "Fact",
    fact,
    section.title,
    `${section.id}-fact-${index + 1}`,
    questionIds.join("; "),
    formats.join("; "),
    "knowledgeOrganiser",
    section.sourceRef,
    "",
    "Covered",
    "Included in Learn, Mind Map, a dedicated flashcard and the listed generated quiz coverage set.",
  ]));

  section.keyTerms.forEach((term, index) => rows.push([
    section.title,
    term,
    "Vocabulary",
    term,
    section.title,
    `${section.id}-term-${index + 1}`,
    questionIds.join("; "),
    formats.join("; "),
    "knowledgeOrganiser",
    section.sourceRef,
    "",
    "Covered",
    "The definition appears on its dedicated flashcard; meaning or usage is tested by the listed generated quiz coverage set.",
  ]));
}

fs.writeFileSync(outputPath, `${rows.map(row => row.map(csv).join(",")).join("\n")}\n`);
console.log(`Wrote ${rows.length - 1} coverage rows to ${path.relative(root, outputPath)}`);
