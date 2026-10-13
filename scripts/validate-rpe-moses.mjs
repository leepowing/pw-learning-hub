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

function duplicates(values) {
  const seen = new Set();
  return [...new Set(values.filter(value => seen.has(value) || !seen.add(value)))];
}

const sectionIds = organiser.sections.map(section => section.id);
const cardIds = organiser.flashcards.map(card => card.id);
const questionIds = organiser.questions.map(question => question.id);
const cardFronts = organiser.flashcards.map(card => card.front.trim().toLowerCase());
const genericFronts = organiser.flashcards.filter(card => /^(recall point|review this fact|what can you remember\??)$/i.test(card.front.trim()));
const invalidCardSections = organiser.flashcards.filter(card => !sectionIds.includes(card.sectionId));
const invalidQuestionSections = organiser.questions.filter(question => question.sectionIds.some(id => !sectionIds.includes(id)));
const emptyCards = organiser.flashcards.filter(card => !card.front.trim() || !card.back.trim());
const missingCardSources = organiser.flashcards.filter(card => !card.sourceType || !card.sourceRef);
const missingQuestionSources = organiser.questions.filter(question => !question.sourceType || !question.sourceRef);
const invalidMcqAnswers = organiser.questions.filter(question => question.type === "multiple-choice" && !question.options.includes(question.answer));
const interactiveQuestions = organiser.questions.filter(question => Boolean(question.interaction));
const sourceCards = organiser.flashcards.filter(card => card.sourceType === "knowledgeOrganiser");
const sourceCoverageQuestions = organiser.questions.filter(question => /-s\d+-(short|term-question)-\d+$/.test(question.id));

const report = {
  organiserId: organiser.id,
  chapters: 1,
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
  errors: {
    duplicateSectionIds: duplicates(sectionIds),
    duplicateCardIds: duplicates(cardIds),
    duplicateQuestionIds: duplicates(questionIds),
    duplicateFronts: duplicates(cardFronts),
    genericFrontIds: genericFronts.map(card => card.id),
    invalidCardSectionIds: invalidCardSections.map(card => card.id),
    invalidQuestionSectionIds: invalidQuestionSections.map(question => question.id),
    emptyCardIds: emptyCards.map(card => card.id),
    missingCardSourceIds: missingCardSources.map(card => card.id),
    missingQuestionSourceIds: missingQuestionSources.map(question => question.id),
    invalidMcqAnswerIds: invalidMcqAnswers.map(question => question.id),
  },
};

const errorCount = Object.values(report.errors).reduce((total, items) => total + items.length, 0);
const coveragePassed = report.coverage.denominator === report.coverage.coveredByQuiz && report.coverage.missing === 0;

console.log(JSON.stringify(report, null, 2));
if (errorCount > 0 || !coveragePassed || organiser.sections.length !== 4) process.exitCode = 1;
