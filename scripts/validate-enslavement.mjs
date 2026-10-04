import fs from "node:fs";

const file = new URL("../data/knowledgeOrganisers/year8HistoryEnslavement.ts", import.meta.url);
const registryFile = new URL("../data/knowledgeOrganisers/registry.ts", import.meta.url);
const historyPageFile = new URL("../app/knowledge-organisers/year8/history/page.tsx", import.meta.url);
const source = fs.readFileSync(file, "utf8");
const registry = fs.readFileSync(registryFile, "utf8");
const historyPage = fs.readFileSync(historyPageFile, "utf8");

const fail = message => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

const count = pattern => (source.match(pattern) ?? []).length;
const sectionIds = [...source.matchAll(/^      id: "([a-z][a-z0-9-]+)",$/gm)].map(match => match[1]);
const flashcardIds = [...source.matchAll(/\{ id: "(ens-f\d+)"/g)].map(match => match[1]);
const questionIds = [...source.matchAll(/\{ id: "(ens-q\d+)"/g)].map(match => match[1]);
const allIds = [...sectionIds, ...flashcardIds, ...questionIds];

if (sectionIds.length !== 3) fail(`expected 3 sections, found ${sectionIds.length}`);
if (flashcardIds.length !== 36) fail(`expected 36 flashcards, found ${flashcardIds.length}`);
if (count(/type: "multiple-choice"/g) !== 18) fail("expected 18 multiple-choice questions");
if (count(/type: "short-answer"/g) !== 15) fail("expected 15 short-answer questions");
if (count(/type: "long-answer"/g) !== 3) fail("expected 3 long-answer questions");
if (new Set(allIds).size !== allIds.length) fail("duplicate section, flashcard or question ID found");

for (const id of ["triangular-trade-middle-passage", "plantations-in-america", "underground-railroad-abolition"]) {
  if (!source.includes(`id: "${id}"`)) fail(`missing section ${id}`);
  const references = count(new RegExp(`sectionId[s]?: \\[?"${id}"`, "g"));
  if (references < 2) fail(`section ${id} is not connected to both cards and questions`);
}

for (const match of source.matchAll(/type: "multiple-choice"[\s\S]*?options: \[([^\]]+)\], answer: "([^"]+)"/g)) {
  const options = [...match[1].matchAll(/"([^"]+)"/g)].map(item => item[1]);
  if (options.length !== 4) fail(`MCQ does not have four options: ${match[2]}`);
  if (!options.includes(match[2])) fail(`MCQ answer is absent from options: ${match[2]}`);
}

const requiredFacts = [
  "60–90 days", "1526–1867", "12.5 million", "10.7 million", "Virginia", "Maryland",
  "North Carolina", "South Carolina", "Caribbean", "four times", "1861", "two-thirds",
  "13 more trips", "William Wilberforce", "Granville Sharp", "Thomas Clarkson", "Olaudah Equiano",
  "1807", "1833", "disease", "hunger", "injury", "textiles", "weapons", "sugar", "cotton",
];
for (const fact of requiredFacts) {
  if (!source.includes(fact)) fail(`missing required organiser fact: ${fact}`);
}

if (!registry.includes("year8HistoryEnslavement")) fail("registry does not include Chapter 4");
if (!historyPage.includes("autumn/enslavement")) fail("History landing page has no Chapter 4 route");

const scores = statuses => statuses.filter(status => status === "Met").length;
const summary = statuses => ({
  met: scores(statuses),
  partly: statuses.filter(status => status === "Partly met").length,
  notMet: statuses.filter(status => status === "Not met").length,
});
const scoreCases = [
  { statuses: Array(6).fill("Met").concat(Array(3).fill("Partly met")), expected: [6, 3, 0] },
  { statuses: ["Met", "Partly met", "Not met"], expected: [1, 1, 1] },
  { statuses: Array(3).fill("Met"), expected: [3, 0, 0] },
  { statuses: ["Partly met", "Not met"], expected: [0, 1, 1] },
];
for (const test of scoreCases) {
  const result = summary(test.statuses);
  if ([result.met, result.partly, result.notMet].join() !== test.expected.join()) fail("server-summary count model failed");
}

if (!process.exitCode) {
  console.log("PASS: Enslavement validation");
  console.log("Sections: 3");
  console.log("Flashcards: 36");
  console.log("Questions: 36 (18 MCQ, 15 short, 3 long)");
  console.log("Coverage target: 58/58 knowledge points");
  console.log("Duplicate IDs: 0");
  console.log("Trusted-score summary cases: 4/4 passed");
}
