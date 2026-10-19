// Original concise paraphrase of the linked AQA writing criteria, not a verbatim mark scheme.
// Keep the reviewed sources and this version together when changing the rubric.
export const RUBRIC_VERSION = "aqa-8700-writing-reviewed-2026-10-19-v1";
export const RUBRIC_SOURCES = [
  { title: "AQA Paper 2 specimen mark scheme, version 3: writing-band cross-check (historical specimen)", url: "https://filestore.aqa.org.uk/resources/english/AQA-87002-SMS.PDF", reviewed: "2026-10-19" },
  { title: "AQA 2026 changes: current task guidance and unchanged assessment-objective allocations", url: "https://www.aqa.org.uk/english-language-changes", reviewed: "2026-10-19" },
  { title: "AQA English Language 8700: scheme of assessment", url: "https://www.aqa.org.uk/subjects/english/gcse/english-8700/specification/scheme-of-assessment", reviewed: "2026-10-19" },
  { title: "AQA Paper 1 sample mark scheme: first examination June 2026, version 1.1", url: "https://www.aqa.org.uk/files/1150125c-1390-4597-9b90-a054521364c8/affa85093de725ae8803d9ec5fda72d4c892fa77.pdf", reviewed: "2026-10-19" },
];
export const WRITING_RUBRIC = {
  version: RUBRIC_VERSION, qualification: "AQA GCSE English Language 8700",
  provenance: "PW Learning Hub's concise paraphrase of reviewed official AQA sources; advisory practice assessment.",
  ao5: {
    maximum: 24,
    focus: "How successfully the writing develops and connects ideas for its task, reader and purpose.",
    levels: [
      { level: 0, range: [0, 0], description: "No meaningful relevant writing." },
      { level: 1, range: [1, 6], description: "Limited communication; basic ideas and vocabulary; weak links or structure." },
      { level: 2, range: [7, 12], description: "Some effective expression; partly developed relevant ideas; emerging reader awareness and paragraph connections." },
      { level: 3, range: [13, 18], description: "Clear, engaging development; appropriate voice; effective choices and connected paragraphs." },
      { level: 4, range: [19, 24], description: "Compelling, convincing development; assured voice; carefully shaped language and fluent, inventive organisation." },
    ],
    withinLevel: "The upper three marks indicate more sustained control across the level; the lower three indicate less secure control.",
  },
  ao6: {
    maximum: 16,
    focus: "Control of vocabulary, sentence forms, grammar, spelling and punctuation for meaning and effect.",
    levels: [
      { level: 0, range: [0, 0], description: "Technical weaknesses prevent meaning being understood." },
      { level: 1, range: [1, 4], description: "Basic vocabulary and spelling; simple sentences; limited grammatical and punctuation control." },
      { level: 2, range: [5, 8], description: "Some sentence variety and accuracy; uneven control of grammar, punctuation and vocabulary." },
      { level: 3, range: [9, 12], description: "Mostly accurate sentences, grammar and spelling; varied forms and vocabulary used purposefully." },
      { level: 4, range: [13, 16], description: "Consistently secure accuracy; flexible sentence control and precise, ambitious vocabulary." },
    ],
  },
};
export function rubricForPaper(paper: 1 | 2) {
  return {
    ...WRITING_RUBRIC,
    paper,
    taskGuidance: paper === 1
      ? "Assess the specified description or narrative opening. Consider scene, detail, perspective, atmosphere and shaping where relevant; these are possibilities, not a checklist. Follow the exact task. In the reviewed 2026 Paper 1 scheme, AO5 is capped at 12 if the task focus is not directly addressed."
      : "Assess the specified viewpoint, form, purpose and reader. Consider quality of reasoning, relevant examples, voice and organisation. A qualified view is valid. Do not require a particular opinion or a fixed list of rhetorical devices.",
    safeguards: [
      "Judge the overall best fit for each AO separately, then select a mark within its level.",
      "Never total checklist items, technique counts or error deductions to manufacture a mark.",
      "Do not infer a GCSE grade from one writing score. Do not give easier GCSE marks because the writer is in Year 8.",
      "For baseline, practice and transfer tasks, give skill feedback only: both numeric marks must be null.",
      "For revision, reassess fairly: marks may rise, stay the same or fall. Compare the previous two targets without assuming improvement.",
      "Give feedback from the actual words supplied, not from a model answer. Accept different defensible interpretations and purposeful stylistic choices.",
    ],
  };
}
