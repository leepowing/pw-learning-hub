import { year8EnglishMidsummerNightsDream as organiser } from "../data/knowledgeOrganisers/year8EnglishMidsummerNightsDream.ts";
import { readFileSync } from "node:fs";

const expectedSections = [
  "historical-context",
  "genre-overview",
  "key-characters",
  "keywords-definitions",
  "writers-methods",
  "big-ideas",
];
const errors = [];
const duplicates = values => values.filter((value, index) => values.indexOf(value) !== index);
const normalise = value => value.toLowerCase().replace(/[’‘“”'"?.!,;:()[\]{}-]/g, "").replace(/\s+/g, " ").trim();

if (organiser.id !== "year8-english-a-midsummer-nights-dream") errors.push("Unexpected organiser ID");
if (organiser.chapter !== 2 || organiser.subject !== "English" || organiser.term !== "Autumn") errors.push("Unexpected chapter metadata");
if (organiser.sections.map(section => section.id).join("|") !== expectedSections.join("|")) errors.push("Section IDs/order do not match the approved plan");
if (organiser.flashcards.length !== 78) errors.push(`Expected 78 flashcards; found ${organiser.flashcards.length}`);
if (organiser.questions.length !== 79) errors.push(`Expected 79 questions; found ${organiser.questions.length}`);

const allIds = [...organiser.sections, ...organiser.flashcards, ...organiser.questions].map(item => item.id);
if (duplicates(allIds).length) errors.push(`Duplicate IDs: ${duplicates(allIds).join(", ")}`);
const fronts = organiser.flashcards.map(card => normalise(card.front));
if (duplicates(fronts).length) errors.push(`Duplicate flashcard fronts: ${duplicates(fronts).join(" | ")}`);

for (const card of organiser.flashcards) {
  if (!expectedSections.includes(card.sectionId)) errors.push(`${card.id}: invalid section`);
  if (!card.front.trim() || !card.back.trim()) errors.push(`${card.id}: empty front/back`);
  if (!card.sourceRef) errors.push(`${card.id}: missing source mapping`);
  if (/recall point|what can you remember|review this fact|^fact\s*\d*/i.test(card.front)) errors.push(`${card.id}: generic front`);
  if (!card.front.endsWith("?") && !/^Define .+\.$/.test(card.front)) errors.push(`${card.id}: front is not an active-recall question`);
}

const counts = { "multiple-choice": 0, "short-answer": 0, "long-answer": 0 };
for (const question of organiser.questions) {
  counts[question.type] += 1;
  if (!question.prompt.trim() || !question.sourceRef) errors.push(`${question.id}: missing prompt/source`);
  if (question.sectionIds.some(id => !expectedSections.includes(id))) errors.push(`${question.id}: invalid section mapping`);
  if (question.interaction) errors.push(`${question.id}: English interactive question is not allowed`);
  if (/quote|quotation/i.test(question.prompt)) errors.push(`${question.id}: unrequired quotation request`);
  if (question.type === "multiple-choice") {
    if (question.options.length !== 4) errors.push(`${question.id}: MC must have four options`);
    if (!question.options.includes(question.answer)) errors.push(`${question.id}: answer is not in options`);
    if (question.marks !== 1) errors.push(`${question.id}: MC must be one mark`);
  } else if (question.marks !== question.markingPoints.length) {
    errors.push(`${question.id}: marks do not equal atomic marking-point count`);
  }
}
if (counts["multiple-choice"] !== 38 || counts["short-answer"] !== 29 || counts["long-answer"] !== 12) errors.push(`Question counts mismatch: ${JSON.stringify(counts)}`);

for (const sectionId of expectedSections) {
  const types = new Set(organiser.questions.filter(question => question.sectionIds.includes(sectionId)).map(question => question.type));
  if (!types.has("multiple-choice") || !types.has("short-answer")) errors.push(`${sectionId}: missing MC or Short coverage`);
}

const coverage = readFileSync(new URL("../data/knowledgeOrganisers/year8EnglishMidsummerNightsDreamCoverage.csv", import.meta.url), "utf8").trim().split(/\r?\n/);
if (coverage.length - 1 !== 51) errors.push(`Expected 51 coverage rows; found ${coverage.length - 1}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  sections: organiser.sections.length,
  flashcards: organiser.flashcards.length,
  questions: counts,
  interactive: 0,
  duplicateIds: 0,
  duplicateFronts: 0,
  genericFronts: 0,
  invalidSectionIds: 0,
  emptyFields: 0,
  sourceCoverage: "51/51",
}, null, 2));
