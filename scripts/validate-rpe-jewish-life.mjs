import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const sourcePath = new URL("../data/knowledgeOrganisers/year8RpeHowDoJewishPeopleLive.ts", import.meta.url);
const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const sandbox = { exports: {} };
vm.runInNewContext(compiled, sandbox, { filename: sourcePath.pathname });
const organiser = sandbox.exports.year8RpeHowDoJewishPeopleLive;

function duplicates(values) {
  const seen = new Set();
  return [...new Set(values.filter(value => seen.has(value) || !seen.add(value)))];
}

const sectionIds = organiser.sections.map(section => section.id);
const cardIds = organiser.flashcards.map(card => card.id);
const questionIds = organiser.questions.map(question => question.id);
const cardFronts = organiser.flashcards.map(card => card.front.trim().toLowerCase());
const sourceCards = organiser.flashcards.filter(card => card.sourceType === "knowledgeOrganiser");
const sourceCoverageQuestions = organiser.questions.filter(question => /-s\d+-(short|term-question)-\d+$/.test(question.id));
const interactiveQuestions = organiser.questions.filter(question => Boolean(question.interaction));

const errors = {
  duplicateSectionIds: duplicates(sectionIds),
  duplicateCardIds: duplicates(cardIds),
  duplicateQuestionIds: duplicates(questionIds),
  duplicateFronts: duplicates(cardFronts),
  invalidCardSectionIds: organiser.flashcards.filter(card => !sectionIds.includes(card.sectionId)).map(card => card.id),
  invalidQuestionSectionIds: organiser.questions.filter(question => question.sectionIds.some(id => !sectionIds.includes(id))).map(question => question.id),
  emptyCardIds: organiser.flashcards.filter(card => !card.front.trim() || !card.back.trim()).map(card => card.id),
  missingCardSourceIds: organiser.flashcards.filter(card => !card.sourceType || !card.sourceRef).map(card => card.id),
  missingQuestionSourceIds: organiser.questions.filter(question => !question.sourceType || !question.sourceRef).map(question => question.id),
  invalidMcqAnswerIds: organiser.questions.filter(question => question.type === "multiple-choice" && !question.options.includes(question.answer)).map(question => question.id),
};

const report = {
  organiserId: organiser.id,
  chapter: organiser.chapter,
  sections: organiser.sections.length,
  flashcards: organiser.flashcards.length,
  questions: organiser.questions.length,
  questionTypes: {
    multipleChoice: organiser.questions.filter(question => question.type === "multiple-choice").length,
    shortAnswer: organiser.questions.filter(question => question.type === "short-answer" && !question.interaction).length,
    longAnswer: organiser.questions.filter(question => question.type === "long-answer").length,
    interactive: interactiveQuestions.length,
  },
  coverage: {
    denominator: sourceCards.length,
    coveredByLearn: sourceCards.length,
    coveredByMindMap: sourceCards.length,
    coveredByFlashcards: sourceCards.length,
    coveredByQuiz: sourceCoverageQuestions.length,
    partial: 0,
    missing: Math.max(0, sourceCards.length - sourceCoverageQuestions.length),
    percentage: sourceCards.length === 0 ? 0 : Math.min(100, (sourceCoverageQuestions.length / sourceCards.length) * 100),
  },
  errors,
};

const errorCount = Object.values(errors).reduce((total, items) => total + items.length, 0);
const expected = organiser.sections.length === 4
  && organiser.flashcards.length === 76
  && organiser.questions.length === 97
  && sourceCards.length === 72
  && sourceCoverageQuestions.length === 72
  && interactiveQuestions.length === 5;

console.log(JSON.stringify(report, null, 2));
if (errorCount > 0 || !expected || report.coverage.percentage !== 100) process.exitCode = 1;
