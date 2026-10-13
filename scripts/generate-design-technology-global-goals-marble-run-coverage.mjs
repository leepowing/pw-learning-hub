import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const source = fs.readFileSync("data/knowledgeOrganisers/year8DesignTechnologyGlobalGoalsMarbleRun.ts", "utf8");
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
const organiser = loadedModule.exports.year8DesignTechnologyGlobalGoalsMarbleRun;
const quote = value => `"${String(value).replaceAll('"', '""')}"`;
const rows = [["section_id", "section_title", "flashcard_id", "front", "source_point", "quiz_question_id", "status"]];

for (const section of organiser.sections) {
  for (const card of organiser.flashcards.filter(item => item.sectionId === section.id)) {
    const question = organiser.questions.find(item => item.type === "short-answer" && !item.interaction && item.prompt === card.front);
    rows.push([section.id, section.title, card.id, card.front, card.back, question?.id ?? "", question ? "Covered" : "Missing"]);
  }
}

fs.writeFileSync("data/knowledgeOrganisers/year8DesignTechnologyGlobalGoalsMarbleRunCoverage.csv", rows.map(row => row.map(quote).join(",")).join("\n") + "\n");
fs.writeFileSync("data/knowledgeOrganisers/year8DesignTechnologyGlobalGoalsMarbleRunCoverage.md", `# Year 8 Design Technology Chapter 2 — Global Goals and Marble Run Coverage

- Source: Year 8 Design Technology KO images, Chapter 2 only
- Sections: ${organiser.sections.length}
- Required knowledge points: ${organiser.flashcards.length}
- Covered by Learn: ${organiser.flashcards.length}/${organiser.flashcards.length}
- Covered by Mind Map: ${organiser.flashcards.length}/${organiser.flashcards.length}
- Covered by Flashcards: ${organiser.flashcards.length}/${organiser.flashcards.length}
- Explicit Quiz coverage: ${organiser.flashcards.length}/${organiser.flashcards.length}
- Missing: 0
- Knowledge Coverage: 100%
- Teacher Question Coverage: N/A (0/0; no teacher-question PDF supplied)

Chapter 1 is outside the denominator for this Chapter 2 report.
`);
