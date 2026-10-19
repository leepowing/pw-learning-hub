import { SKILLS, type SkillId, type WritingFeedback, type WritingTask } from "./types";

const text = { type: "string" };
const skill = { type: "string", enum: Object.keys(SKILLS) };
function object(properties: Record<string, unknown>) {
  return { type: "object", properties, required: Object.keys(properties), additionalProperties: false };
}
const array = (items: unknown, minItems: number, maxItems: number) => ({ type: "array", items, minItems, maxItems });
export const feedbackSchema = object({
  relevant: { type: "boolean" }, summary: text,
  strengths: array(object({ quote: text, explanation: text }), 0, 2),
  targets: array(object({ skill, quote: text, action: text, question: text }), 1, 2),
  annotations: array(object({ quote: text, type: { type: "string", enum: ["strength", "grammar", "style"] }, explanation: text, suggestion: text }), 0, 5),
  skills: array(object({ id: skill, status: { type: "string", enum: ["developing", "practising", "secure", "not-observed"] }, explanation: text }), 1, 8),
  ao5: { type: ["integer", "null"], minimum: 0, maximum: 24 },
  ao6: { type: ["integer", "null"], minimum: 0, maximum: 16 },
  ao5Reason: text, ao6Reason: text,
  revisionReview: array(object({ targetIndex: { type: "integer", minimum: 0, maximum: 1 }, status: { type: "string", enum: ["improved", "partly-improved", "not-yet"] }, quote: text, explanation: text }), 0, 2),
  parentNoteZh: text,
});

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid feedback object");
  return value as Record<string, unknown>;
}
function string(value: unknown, max = 700): string {
  if (typeof value !== "string" || value.length > max || value.includes("\u0000")) throw new Error("Invalid feedback text");
  return value;
}
function meaningful(value: unknown, max = 700): string {
  const result = string(value, max);
  if (!result.trim()) throw new Error("Missing feedback explanation");
  return result;
}
function list(value: unknown, min: number, max: number): unknown[] {
  if (!Array.isArray(value) || value.length < min || value.length > max) throw new Error("Invalid feedback list");
  return value;
}
function exactQuote(value: unknown, answer: string, allowEmpty = false): string {
  const quote = string(value, 240);
  if ((!allowEmpty && !quote.trim()) || (quote && !answer.includes(quote))) throw new Error("Feedback quote is not in the student's answer");
  return quote;
}
function isSkill(value: unknown): SkillId {
  if (typeof value !== "string" || !Object.hasOwn(SKILLS, value)) throw new Error("Unknown skill");
  return value as SkillId;
}
export function validateFeedback(raw: unknown, task: WritingTask, answer: string, previous: WritingFeedback | null): WritingFeedback {
  const v = record(raw);
  if (typeof v.relevant !== "boolean") throw new Error("Invalid relevance");
  const strengths = list(v.strengths, 0, 2).map(value => {
    const r = record(value); return { quote: exactQuote(r.quote, answer), explanation: meaningful(r.explanation) };
  });
  const targets = list(v.targets, 1, 2).map(value => {
    const r = record(value); return { skill: isSkill(r.skill), quote: exactQuote(r.quote, answer, true), action: meaningful(r.action), question: meaningful(r.question) };
  });
  const annotations = list(v.annotations, 0, 5).map(value => {
    const r = record(value);
    if (!["strength", "grammar", "style"].includes(String(r.type))) throw new Error("Invalid annotation type");
    return { quote: exactQuote(r.quote, answer), type: r.type as "strength" | "grammar" | "style", explanation: meaningful(r.explanation), suggestion: string(r.suggestion, 300) };
  });
  const skills = list(v.skills, task.skills.length, task.skills.length).map(value => {
    const r = record(value); const id = isSkill(r.id);
    if (!task.skills.includes(id) || !["developing", "practising", "secure", "not-observed"].includes(String(r.status))) throw new Error("Invalid skill assessment");
    return { id, status: r.status as WritingFeedback["skills"][number]["status"], explanation: meaningful(r.explanation) };
  });
  if (new Set(skills.map(s => s.id)).size !== task.skills.length) throw new Error("Duplicate skills");
  const revisionReview = list(v.revisionReview, previous?.targets.length ?? 0, previous?.targets.length ?? 0).map(value => {
    const r = record(value);
    if (!Number.isInteger(r.targetIndex) || Number(r.targetIndex) < 0 || Number(r.targetIndex) >= (previous?.targets.length ?? 0) ||
      !["improved", "partly-improved", "not-yet"].includes(String(r.status))) throw new Error("Invalid revision comparison");
    return { targetIndex: Number(r.targetIndex), status: r.status as WritingFeedback["revisionReview"][number]["status"], quote: exactQuote(r.quote, answer, true), explanation: meaningful(r.explanation) };
  });
  if (new Set(revisionReview.map(r => r.targetIndex)).size !== revisionReview.length) throw new Error("Duplicate revision targets");
  let ao5: number | null = null; let ao6: number | null = null;
  if (task.kind === "aqa") {
    if (!Number.isInteger(v.ao5) || Number(v.ao5) < 0 || Number(v.ao5) > 24 || !Number.isInteger(v.ao6) || Number(v.ao6) < 0 || Number(v.ao6) > 16) throw new Error("Invalid AQA mark");
    ao5 = Number(v.ao5); ao6 = Number(v.ao6);
    meaningful(v.ao5Reason); meaningful(v.ao6Reason);
    if (task.paper === 1 && !v.relevant) ao5 = Math.min(12, ao5);
  } else if (v.ao5 !== null || v.ao6 !== null) throw new Error("A short practice task must not receive GCSE marks");
  return { relevant: v.relevant, summary: meaningful(v.summary), strengths, targets, annotations, skills, ao5, ao6,
    ao5Reason: string(v.ao5Reason), ao6Reason: string(v.ao6Reason), revisionReview, parentNoteZh: meaningful(v.parentNoteZh) };
}

export function extractResponseText(raw: unknown): string {
  const r = record(raw);
  if (r.status !== "completed" || !Array.isArray(r.output)) throw new Error("Incomplete response");
  const texts: string[] = [];
  for (const output of r.output) {
    const item = record(output);
    if (item.type !== "message" || !Array.isArray(item.content)) continue;
    for (const c of item.content) {
      const content = record(c);
      if (content.type === "refusal") throw new Error("Feedback unavailable");
      if (content.type === "output_text") texts.push(string(content.text, 24000));
    }
  }
  if (!texts.length) throw new Error("Missing response");
  return texts.join("");
}
