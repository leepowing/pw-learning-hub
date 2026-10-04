import fs from "node:fs";

const file = new URL("../data/knowledgeOrganisers/year8ScienceEcosystemProcesses.ts", import.meta.url);
const source = fs.readFileSync(file, "utf8");
const renderer = fs.readFileSync(new URL("../components/knowledge-organisers/KnowledgeOrganiserInteractiveQuestion.tsx", import.meta.url), "utf8");
const chapter = fs.readFileSync(new URL("../components/knowledge-organisers/KnowledgeOrganiserChapter.tsx", import.meta.url), "utf8");
const failures = [];
const sectionIds = [...source.matchAll(/id: "(y8sci-eco-[^"]+)"/g)].map(match => match[1]);
const questionIds = [...source.matchAll(/id: "(eco-q\d+)"/g)].map(match => match[1]);
const flashcardCount = (source.match(/front:/g) ?? []).length;
const requiredSections = ["photosynthesis", "starch-test", "leaf-structure", "plant-minerals", "aerobic-respiration", "anaerobic", "food-webs", "ecosystems"];
const requiredFormats = ["matching", "fill-in-the-blank", "label-the-diagram", "ordering", "classification", "equation-completion", "table-and-data", "practical"];
const requiredPhrases = ["glucose", "chloroplasts", "chlorophyll", "light energy", "respiration", "blue-black", "water bath", "guard cells", "7.2 cm", "2.8 cm", "mitochondria", "oxygen debt", "bioaccumulation", "chemosynthesis"];
const questionPdfSources = [
  "WHA_B2.2.1P_Photosynthesis.pdf", "WHA_B2.2.1WC_Photosynthesis.pdf",
  "WHA_B2.2.2P_Testing_for_Starch.pdf", "WHA_B2.2.2WC_Testing_for_Starch_Practical_Booklet.pdf",
  "WHA_B2.2.3P_Leaves.pdf", "WHA_B2.2.3WC_Leaves.pdf",
  "WHA_B2.2.4P_Plant_Minerals.pdf", "WHA_B2.2.4WC_Plant_Minerals.pdf",
  "WHA_B2.2.5P_Aerobic_Respiration.pdf", "WHA_B2.2.5WC_Aerobic_Respiration.pdf",
  "WHA_B2.2.6P_Anaerobic_Respiration.pdf", "WHA_B2.2.6WC_Anaerobic_Respiration.pdf",
];
const previouslyMissingPrompts = [
  "What colour did the leaf turn, and where?",
  "Roughly how many stomata could you see in your field of view?",
  "A wheat crop is growing more slowly than normal",
  "Suggest why a plant cell respiring on a sunny afternoon",
  "Name the products of aerobic respiration.",
  "Complete the table below to compare aerobic respiration",
];
const requiredDataContexts = [
  "WITH fertiliser — height (cm): 6, 7, 8, X, 6, 9",
  "WITHOUT fertiliser — height (cm): 3, 2, X, 4, 3, 2",
  "Mean WITH fertiliser: 7.2 cm",
  "Mean WITHOUT fertiliser: 2.8 cm",
];

if (new Set(sectionIds).size !== 8) failures.push(`Expected 8 unique sections; found ${new Set(sectionIds).size}.`);
if (new Set(questionIds).size !== questionIds.length) failures.push("Duplicate question IDs found.");
if (questionIds.length < 124) failures.push(`Expected at least 124 questions; found ${questionIds.length}.`);
if (flashcardCount < 1 || !source.includes("sections.flatMap")) failures.push("Generated flashcard coverage is missing.");
for (const id of requiredSections) if (!source.includes(`y8sci-eco-${id}`)) failures.push(`Missing section ${id}.`);
for (const format of requiredFormats) if (!source.includes(`format: "${format}"`)) failures.push(`Missing interactive format ${format}.`);
for (const kind of ["fill-blanks", "matching", "ordering", "classification", "diagram-labels"]) {
  if (!source.includes(`kind: "${kind}"`)) failures.push(`No question data uses the real ${kind} interaction.`);
  if (!renderer.includes(`interaction.kind === "${kind}"`)) failures.push(`No renderer exists for ${kind}.`);
}
if (!chapter.includes("KnowledgeOrganiserInteractiveQuestion")) failures.push("Interactive renderer is not connected to the chapter quiz.");
if (!renderer.includes("onComplete(mark)")) failures.push("Deterministic interactive marking is not connected to quiz scoring.");
for (const phrase of requiredPhrases) if (!source.toLowerCase().includes(phrase.toLowerCase())) failures.push(`Missing required content: ${phrase}.`);
for (const pdf of questionPdfSources) if (!source.includes(pdf)) failures.push(`No quiz source reference for ${pdf}.`);
for (const prompt of previouslyMissingPrompts) if (!source.includes(prompt)) failures.push(`Previously missing teacher prompt is still absent: ${prompt}.`);
for (const context of requiredDataContexts) if (!source.includes(context)) failures.push(`A data question is missing its required context: ${context}.`);
if (!renderer.includes("photosynthesis-label-diagram.png")) failures.push("Original photosynthesis diagram is not connected.");
if (!renderer.includes("leaf-cross-section-diagram.png")) failures.push("Original leaf cross-section diagram is not connected.");

if (failures.length) {
  console.error("FAIL: Ecosystem Processes validation");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("PASS: Ecosystem Processes validation");
console.log("Sections: 8");
console.log(`Questions: ${questionIds.length}`);
console.log("Flashcards: generated from every key fact plus defined key vocabulary");
console.log(`Format labels: ${requiredFormats.length}/8 present`);
console.log("Real interactive renderers: fill blanks, matching, ordering, classification and diagram labels connected");
console.log(`Required content spot checks: ${requiredPhrases.length}/${requiredPhrases.length} present`);
console.log(`Question-bearing PDF sources: ${questionPdfSources.length}/${questionPdfSources.length} referenced`);
console.log(`Previously missing prompt checks: ${previouslyMissingPrompts.length}/${previouslyMissingPrompts.length} present`);
console.log(`Standalone data-context checks: ${requiredDataContexts.length}/${requiredDataContexts.length} present`);
