import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const javascript = ts.transpileModule(read("data/knowledgeOrganisers/year8GeographyBrazil.ts"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loadedModule = { exports: {} };
vm.runInNewContext(`(function(exports,module){${javascript}\n})(loadedModule.exports,loadedModule)`, { loadedModule, console });
const organiser = loadedModule.exports.year8GeographyBrazil;

const facts = organiser.sections.reduce((total, section) => total + section.keyFacts.length, 0);
const terms = organiser.sections.reduce((total, section) => total + section.keyTerms.length, 0);
const sectionIds = new Set(organiser.sections.map(section => section.id));
const cardIds = organiser.flashcards.map(card => card.id);
const questionIds = organiser.questions.map(question => question.id);
const normalise = value => value.toLowerCase().trim().replace(/[!?.,;:–—'’]+/g, " ").replace(/\s+/g, " ");
const genericFrontPattern = /recall point|what can you remember|review this fact|^fact\s*\d*|^point\s*\d*$/i;

check(organiser.id === "year8-geography-brazil", "Unexpected organiser ID.");
check(organiser.year === 8 && organiser.subject === "Geography" && organiser.term === "Autumn" && organiser.chapter === 1, "Chapter metadata is incorrect.");
check(organiser.sections.length === 8, `Expected 8 sections; found ${organiser.sections.length}.`);
check(facts === 107, `Expected 107 source facts, places, data and process points; found ${facts}.`);
check(terms === 39, `Expected 39 vocabulary points; found ${terms}.`);
check(organiser.flashcards.length === 146, `Expected 146 flashcards; found ${organiser.flashcards.length}.`);
check(organiser.questions.length === 185, `Expected 185 questions; found ${organiser.questions.length}.`);
check(organiser.questions.filter(question => question.type === "multiple-choice").length === 24, "Expected 24 multiple-choice questions.");
check(organiser.questions.filter(question => question.type === "short-answer" && !question.interaction).length === 146, "Expected 146 standard short questions.");
check(organiser.questions.filter(question => question.type === "long-answer").length === 8, "Expected 8 long questions.");
check(organiser.questions.filter(question => question.interaction).length === 7, "Expected 7 interactive questions.");

check(sectionIds.size === organiser.sections.length, "Section IDs are not unique.");
check(new Set(cardIds).size === cardIds.length, "Flashcard IDs are not unique.");
check(new Set(questionIds).size === questionIds.length, "Question IDs are not unique.");
check(organiser.flashcards.every(card => sectionIds.has(card.sectionId)), "A flashcard references an unknown section.");
check(organiser.questions.every(question => question.sectionIds.every(id => sectionIds.has(id))), "A question references an unknown section.");
check(organiser.sections.every(section => section.context && !section.period), "Every Geography section must use context rather than period.");
check(organiser.sections.every(section => section.sourceType === "knowledgeOrganiser" && section.sourceRef), "A section is missing source metadata.");
check(organiser.flashcards.every(card => card.sourceType === "knowledgeOrganiser" && card.sourceRef), "A flashcard is missing source metadata.");
check(organiser.questions.every(question => question.sourceType === "generatedSupplement" && question.sourceRef), "A generated question is missing generatedSupplement source metadata.");
check(organiser.sections.every(section => /^#(?:0f766e|115e59|0d9488|14b8a6)$/i.test(section.colour)), "A section is not using the approved Geography teal palette.");

const fronts = organiser.flashcards.map(card => card.front);
check(organiser.flashcards.every(card => card.front.trim() && card.back.trim()), "A flashcard has an empty front or back.");
check(fronts.every(front => !genericFrontPattern.test(front)), "A generic flashcard front remains.");
check(new Set(fronts.map(normalise)).size === fronts.length, "Normalised flashcard fronts are not unique.");

organiser.sections.forEach((section, sectionIndex) => {
  const cards = organiser.flashcards.filter(card => card.sectionId === section.id);
  check(cards.length === section.keyFacts.length + section.keyTerms.length, `${section.title}: flashcard count does not match facts plus vocabulary.`);
  check(organiser.questions.some(question => question.sectionIds.includes(section.id)), `${section.title}: no quiz coverage.`);
  section.referenceImages?.forEach(image => check(fs.existsSync(path.join(root, "public", image.src.replace(/^\//, ""))), `${section.title}: missing image ${image.src}.`));
  section.keyFacts.forEach((fact, factIndex) => {
    const card = organiser.flashcards.find(item => item.id === `brazil-fc-s${sectionIndex + 1}-f${factIndex + 1}`);
    const question = organiser.questions.find(item => item.id === `brazil-q-s${sectionIndex + 1}-f${factIndex + 1}`);
    check(card?.back === fact, `${section.title}: fact ${factIndex + 1} is missing or altered on its flashcard.`);
    check(card?.front.endsWith("?"), `${card?.id ?? "Missing fact card"}: front is not a complete question.`);
    check((card?.front.split(/\s+/).length ?? 0) >= 4, `${card?.id ?? "Missing fact card"}: front has fewer than four words.`);
    check(question?.type === "short-answer" && question.markingPoints?.[0] === fact, `${section.title}: fact ${factIndex + 1} lacks explicit quiz coverage.`);
  });
  section.keyTerms.forEach((term, termIndex) => {
    const card = organiser.flashcards.find(item => item.id === `brazil-fc-s${sectionIndex + 1}-t${termIndex + 1}`);
    const question = organiser.questions.find(item => item.id === `brazil-q-s${sectionIndex + 1}-t${termIndex + 1}`);
    check(card?.front === `Define ${term}.`, `${section.title}: vocabulary card for ${term} has the wrong front.`);
    check(question?.prompt === `Define ${term}.`, `${section.title}: ${term} lacks explicit quiz coverage.`);
  });
});

for (const question of organiser.questions) {
  check(question.marks > 0, `${question.id} has no marks.`);
  if (question.referenceImage) check(fs.existsSync(path.join(root, "public", question.referenceImage.src.replace(/^\//, ""))), `${question.id} has a missing reference image.`);
  if (question.type === "multiple-choice") {
    check(question.options.length === 4, `${question.id} must have exactly four options.`);
    check(new Set(question.options).size === question.options.length, `${question.id} contains duplicate options.`);
    check(question.options.includes(question.answer), `${question.id} answer is not an option.`);
    check(question.explanation.trim(), `${question.id} has no explanation.`);
    continue;
  }
  check(question.marks === question.markingPoints.length, `${question.id} marks do not match its marking points.`);
  const interaction = question.interaction;
  if (!interaction) continue;
  if (interaction.kind === "matching") {
    check(interaction.left.length === interaction.answers.length, `${question.id} matching rows and answers differ.`);
    check(interaction.answers.every(answer => Number.isInteger(answer) && answer >= 0 && answer < interaction.right.length), `${question.id} has an invalid matching answer.`);
  }
  if (interaction.kind === "fill-blanks") {
    check(interaction.sentences.length === interaction.answers.length, `${question.id} blank prompts and answers differ.`);
    check(interaction.answers.every(answers => answers.length > 0), `${question.id} has a blank without an answer.`);
  }
  if (interaction.kind === "classification") {
    check(interaction.rows.length === interaction.answers.length, `${question.id} classification rows and answers differ.`);
    check(interaction.answers.every(answer => interaction.categories.includes(answer)), `${question.id} uses an unknown category.`);
  }
  if (interaction.kind === "ordering") {
    check(interaction.items.length === interaction.answer.length, `${question.id} ordering items and answer differ.`);
    check(interaction.answer.every(answer => interaction.items.includes(answer)), `${question.id} ordering answer contains an unknown item.`);
  }
}

const registry = read("data/knowledgeOrganisers/registry.ts");
const yearPage = read("app/knowledge-organisers/year8/page.tsx");
const subjectPage = read("app/knowledge-organisers/year8/geography/page.tsx");
const chapterComponent = read("components/knowledge-organisers/KnowledgeOrganiserChapter.tsx");
const revisionComponent = read("components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx");
const theme = read("components/knowledge-organisers/knowledgeOrganiserTheme.ts");
const aiRoute = read("app/api/knowledge-organisers/mark/route.ts");
check(registry.includes("year8GeographyBrazil"), "Brazil is missing from the registry.");
check(yearPage.includes("/knowledge-organisers/year8/geography") && yearPage.includes("available: true"), "Geography is not enabled on the Year 8 page.");
check(subjectPage.includes('getKnowledgeOrganisers(8, "Geography")'), "Geography index does not load the registry dynamically.");
check(chapterComponent.includes('normalisedSubject === "geography"') && chapterComponent.includes('mode: "interactive"'), "Chapter quiz does not expose Geography Interactive Questions.");
check(revisionComponent.includes('subjectSlug === "geography"') && revisionComponent.includes('mode: "interactive"'), "Cross-Chapter Quiz does not expose Geography Interactive Questions.");
check(theme.includes('"--ko-primary": "#0f766e"'), "Geography primary theme token is missing.");
check(aiRoute.includes('normalisedSubject === "geography"') && aiRoute.includes("population density distinct from population distribution"), "Geography AI marking safeguards are missing.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/geography/autumn/brazil/page.tsx")), "Brazil route is missing.");
check(fs.existsSync(path.join(root, "app/knowledge-organisers/year8/geography/revision-quiz/page.tsx")), "Geography revision route is missing.");

const coverageRows = read("data/knowledgeOrganisers/year8GeographyBrazilCoverage.csv").trim().split(/\r?\n/);
check(coverageRows.length === 147, `Expected 146 coverage rows plus header; found ${coverageRows.length}.`);
check(coverageRows.slice(1).every(row => row.includes('"Covered"')), "A knowledge coverage row is not Covered.");
check(read("data/knowledgeOrganisers/year8GeographyBrazilPdfQuestionManifest.csv").trim().split(/\r?\n/).length === 1, "Teacher question manifest denominator should be zero.");
check(read("data/knowledgeOrganisers/year8GeographyBrazilPdfQuestionCoverage.csv").trim().split(/\r?\n/).length === 1, "Teacher question coverage denominator should be zero.");

const requiredDeliveryDocs = [
  "BRAZIL-UPDATE-INSTRUCTIONS.md",
  "BRAZIL-LOCAL-TESTING-CHECKLIST.md",
  "BRAZIL-FINAL-VALIDATION.md",
  "BRAZIL-PACKAGE-MANIFEST.md",
  "SHARED-FILES-CHANGELOG-BRAZIL.md",
  "CROSS-CHAPTER-QUIZ-TESTS-BRAZIL.md",
  "GEOGRAPHY-THEME-REGRESSION-BRAZIL.md",
  "data/knowledgeOrganisers/year8GeographyBrazilAiTests.md",
];
requiredDeliveryDocs.forEach(relativePath => check(fs.existsSync(path.join(root, relativePath)), `Missing delivery document: ${relativePath}.`));

if (failures.length) {
  console.error("FAIL: Brazil validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Brazil validation");
console.log(`Sections: ${organiser.sections.length}`);
console.log(`Knowledge points: ${facts + terms} (${facts} facts/places/data/processes + ${terms} vocabulary)`);
organiser.sections.forEach(section => console.log(`- ${section.title}: ${section.keyFacts.length} facts + ${section.keyTerms.length} vocabulary = ${section.keyFacts.length + section.keyTerms.length} flashcards`));
console.log(`Flashcards: ${organiser.flashcards.length}`);
console.log("Flashcard duplicate IDs: 0; invalid section IDs: 0; generic fronts: 0; duplicate fronts: 0; empty fronts/backs: 0/0; missing source mappings: 0");
console.log(`Questions: ${organiser.questions.length}`);
console.log("Question types: 24 multiple choice; 146 standard short; 8 long; 7 interactive");
console.log("Knowledge Coverage: 146/146 (100%)");
console.log("Teacher Question Coverage: 0/0 (N/A; no teacher question PDFs supplied)");

