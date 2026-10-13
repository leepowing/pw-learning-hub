import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const javascript = ts.transpileModule(read("data/knowledgeOrganisers/year8DesignTechnologyLightingSolutions.ts"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
const organiser = loadedModule.exports.year8DesignTechnologyLightingSolutions;

const facts = organiser.sections.reduce((total, section) => total + section.keyFacts.length, 0);
const terms = organiser.sections.reduce((total, section) => total + section.keyTerms.length, 0);
const sectionIds = new Set(organiser.sections.map(section => section.id));
const cardIds = organiser.flashcards.map(card => card.id);
const questionIds = organiser.questions.map(question => question.id);
const normalise = value => value.toLowerCase().trim().replace(/[!?.,;:–—'’]+/g, " ").replace(/\s+/g, " ");
const genericFrontPattern = /recall point|what can you remember|review this fact|^fact\s*\d*|^point\s*\d*$/i;

check(organiser.id === "year8-design-technology-lighting-solutions", "Unexpected organiser ID.");
check(organiser.year === 8 && organiser.subject === "Design Technology" && organiser.term === "Autumn" && organiser.chapter === 1, "Chapter metadata is incorrect.");
check(organiser.sections.length === 5, `Expected 5 sections; found ${organiser.sections.length}.`);
check(facts === 42, `Expected 42 source facts and processes; found ${facts}.`);
check(terms === 26, `Expected 26 vocabulary points; found ${terms}.`);
check(organiser.flashcards.length === 68, `Expected 68 flashcards; found ${organiser.flashcards.length}.`);
check(organiser.questions.length === 83, `Expected 83 questions; found ${organiser.questions.length}.`);
check(organiser.questions.filter(question => question.type === "multiple-choice").length === 6, "Expected 6 multiple-choice questions.");
check(organiser.questions.filter(question => question.type === "short-answer" && !question.interaction).length === 68, "Expected 68 standard short questions.");
check(organiser.questions.filter(question => question.type === "long-answer").length === 4, "Expected 4 long questions.");
check(organiser.questions.filter(question => question.interaction).length === 5, "Expected 5 interactive questions.");

check(sectionIds.size === organiser.sections.length, "Section IDs are not unique.");
check(new Set(cardIds).size === cardIds.length, "Flashcard IDs are not unique.");
check(new Set(questionIds).size === questionIds.length, "Question IDs are not unique.");
check(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard references an unknown section.");
check(organiser.questions.every(question => question.sectionIds.every(id => sectionIds.has(id))), "A question references an unknown section.");
check(organiser.sections.every(section => section.context && !section.period), "Every DT section must use context rather than period.");
check(organiser.sections.every(section => section.sourceType === "knowledgeOrganiser" && section.sourceRef), "A section is missing source metadata.");
check(organiser.flashcards.every(card => card.sourceType === "knowledgeOrganiser" && card.sourceRef), "A flashcard is missing source metadata.");
check(organiser.questions.every(question => question.sourceType === "generatedSupplement" && question.sourceRef), "A question is missing source metadata.");
check(organiser.sections.every(section => /^#(?:65a30d|4d7c0f|3f6212)$/i.test(section.colour)), "A section is outside the DT lime palette.");

const fronts = organiser.flashcards.map(card => card.front);
check(organiser.flashcards.every(card => card.front.trim() && card.back.trim()), "A flashcard has an empty front or back.");
check(fronts.every(front => !genericFrontPattern.test(front)), "A generic flashcard front remains.");
check(new Set(fronts.map(normalise)).size === fronts.length, "Normalised flashcard fronts are not unique.");

for (const section of organiser.sections) {
  const cards = organiser.flashcards.filter(card => card.sectionId === section.id);
  check(cards.length === section.keyFacts.length + section.keyTerms.length, `${section.title}: flashcard count does not match facts plus vocabulary.`);
  check(organiser.questions.some(question => question.sectionIds.includes(section.id)), `${section.title}: no quiz coverage.`);
  for (const card of cards) {
    const coverageQuestion = organiser.questions.find(question => question.type === "short-answer" && !question.interaction && question.prompt === card.front);
    check(Boolean(coverageQuestion), `${card.id}: no explicit short-question coverage.`);
    check(coverageQuestion?.markingPoints?.[0] === card.back, `${card.id}: quiz answer does not match the flashcard source point.`);
  }
}

for (const question of organiser.questions) {
  check(question.marks > 0, `${question.id} has no marks.`);
  if (question.type === "multiple-choice") {
    check(question.options.length === 4, `${question.id} must have exactly four options.`);
    check(new Set(question.options).size === question.options.length, `${question.id} contains duplicate options.`);
    check(question.options.includes(question.answer), `${question.id} answer is not an option.`);
    continue;
  }
  if (!question.interaction) check(question.marks === question.markingPoints.length, `${question.id} marks do not match marking points.`);
  const interaction = question.interaction;
  if (!interaction) continue;
  if (interaction.kind === "matching") {
    check(interaction.left.length === interaction.answers.length, `${question.id}: matching rows and answers differ.`);
    check(question.marks === interaction.left.length, `${question.id}: marks do not match matching rows.`);
  }
  if (interaction.kind === "classification") {
    check(interaction.rows.length === interaction.answers.length, `${question.id}: classification rows and answers differ.`);
    check(question.marks === interaction.rows.length, `${question.id}: marks do not match classification rows.`);
    check(interaction.answers.every(answer => interaction.categories.includes(answer)), `${question.id}: unknown category.`);
  }
  if (interaction.kind === "ordering") {
    check(interaction.items.length === interaction.answer.length, `${question.id}: ordering items and answer differ.`);
    check(question.marks === interaction.items.length, `${question.id}: marks do not match ordering steps.`);
  }
}

const registry = read("data/knowledgeOrganisers/registry.ts");
const yearPage = read("app/knowledge-organisers/year8/page.tsx");
const subjectPage = read("app/knowledge-organisers/year8/design-technology/page.tsx");
const chapterComponent = read("components/knowledge-organisers/KnowledgeOrganiserChapter.tsx");
const revisionComponent = read("components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx");
const theme = read("components/knowledge-organisers/knowledgeOrganiserTheme.ts");
const aiRoute = read("app/api/knowledge-organisers/mark/route.ts");
check(registry.includes("year8DesignTechnologyLightingSolutions"), "DT Chapter 1 is missing from the registry.");
check(yearPage.includes("/knowledge-organisers/year8/design-technology") && yearPage.includes("Lighting Solutions"), "DT is not enabled on the Year 8 page.");
check(subjectPage.includes('getKnowledgeOrganisers(8, "Design Technology")'), "DT index does not load the registry dynamically.");
check(chapterComponent.includes('replace(/\\s+/g, "-")'), "Chapter navigation does not slugify a spaced subject name.");
check(revisionComponent.includes('replace(/\\s+/g, "-")'), "Revision navigation does not slugify a spaced subject name.");
check(theme.includes('"--ko-primary": "#65a30d"') && theme.includes('normalisedSubject === "design technology"'), "DT theme is missing.");
check(aiRoute.includes('normalisedSubject === "design technology"') && aiRoute.includes("material property"), "DT AI safeguards are missing.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/design-technology/autumn/lighting-solutions/page.tsx")), "Lighting Solutions route is missing.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/design-technology/revision-quiz/page.tsx")), "DT revision route is missing.");

if (failures.length) {
  console.error("FAIL: Design Technology Lighting Solutions validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Design Technology Lighting Solutions validation");
console.log(`Sections: ${organiser.sections.length}`);
console.log(`Knowledge points: ${facts + terms} (${facts} facts/processes + ${terms} vocabulary)`);
organiser.sections.forEach(section => console.log(`- ${section.title}: ${section.keyFacts.length} facts + ${section.keyTerms.length} vocabulary`));
console.log(`Flashcards: ${organiser.flashcards.length}`);
console.log("Flashcard duplicate IDs: 0; invalid section IDs: 0; generic fronts: 0; duplicate fronts: 0; empty fronts/backs: 0/0");
console.log(`Questions: ${organiser.questions.length}`);
console.log("Question types: 6 multiple choice; 68 standard short; 4 long; 5 interactive");
console.log("Knowledge Coverage: 68/68 (100%)");
console.log("Teacher Question Coverage: 0/0 (N/A; no teacher question PDFs supplied)");
