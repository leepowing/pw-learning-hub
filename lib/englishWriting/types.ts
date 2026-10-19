export const SKILLS = {
  "sentence-control": "Sentence boundaries and punctuation",
  tense: "Consistent tense and grammar",
  "word-choice": "Precise vocabulary",
  description: "Specific descriptive detail",
  development: "Developing ideas and examples",
  organisation: "Paragraphs and connections",
  audience: "Audience, purpose and tone",
  proofreading: "Checking and improving writing",
} as const;
export type SkillId = keyof typeof SKILLS;
export type SkillStatus = "developing" | "practising" | "secure" | "not-observed";
export type WritingTask = {
  id: string; title: string; week: number; kind: "baseline" | "practice" | "transfer" | "aqa";
  paper: 1 | 2; form: string; audience: string; purpose: string; prompt: string;
  minutes: number; suggestedWords: string; skills: SkillId[]; planPrompts: string[];
};
export type Lesson = {
  week: number; title: string; subtitle: string; skills: SkillId[];
  goals: string[]; teaching: { title: string; text: string }[];
  before: string; after: string; commentary: string;
  vocabulary: { word: string; meaning: string; example: string }[];
  checks: { question: string; options: string[]; answer: number; explanation: string }[];
  microPrompt: string; microExample: string; checklist: string[];
  mainTaskId: string; transferTaskId: string;
};
export type WritingFeedback = {
  relevant: boolean; summary: string;
  strengths: { quote: string; explanation: string }[];
  targets: { skill: SkillId; quote: string; action: string; question: string }[];
  annotations: { quote: string; type: "strength" | "grammar" | "style"; explanation: string; suggestion: string }[];
  skills: { id: SkillId; status: SkillStatus; explanation: string }[];
  ao5: number | null; ao6: number | null; ao5Reason: string; ao6Reason: string;
  revisionReview: { targetIndex: number; status: "improved" | "partly-improved" | "not-yet"; quote: string; explanation: string }[];
  parentNoteZh: string;
};
export type Submission = {
  id: string; user_id: string; task_id: string; parent_id: string | null;
  answer: string; reflection: string; status: "pending" | "complete" | "failed";
  feedback: WritingFeedback | null; rubric_version: string; model: string;
  created_at: string; total: number | null;
};
export type Work = { task_id: string; draft: string; plan: string; elapsed_seconds: number; version: number };
export type LearnerProgress = { userId: string; name: string; submissions: Submission[]; lessons: number[] };
export type WritingOverview = {
  name: string; userId: string; submissions: Submission[]; works: Work[]; lessons: number[];
  family: LearnerProgress[]; feedbackEnabled: boolean;
};
export function wordCount(text: string) { return text.trim().match(/\S+/g)?.length ?? 0; }
