import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { getWritingTask } from "@/data/englishWriting/course";
import { RUBRIC_VERSION } from "@/data/englishWriting/rubric";
import { extractResponseText, feedbackSchema, validateFeedback } from "@/lib/englishWriting/feedback";
import { markingPayload, WRITING_INSTRUCTIONS } from "@/lib/englishWriting/prompt";
import { feedbackEnabled, PUBLIC_SUBMISSION_COLUMNS, checkWritingOwner, requestBody, textField, writingContext, writingError, WritingError } from "@/lib/englishWriting/server";
import type { Submission, WritingFeedback } from "@/lib/englishWriting/types";

export const runtime = "nodejs";
export const maxDuration = 60;

async function moderate(answer: string, key: string) {
  const response = await fetch("https://api.openai.com/v1/moderations", {
    method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "omni-moderation-latest", input: answer }), signal: AbortSignal.timeout(6000),
  });
  if (!response.ok) throw new WritingError("Feedback is unavailable just now. Your writing is saved; please try again later.", 502);
  const data = await response.json();
  if (!Array.isArray(data.results) || !data.results.length || typeof data.results[0]?.flagged !== "boolean") throw new Error();
  if (data.results.some((r: { flagged: boolean }) => r.flagged)) throw new WritingError("Please ask a parent or teacher to review this piece with you. Your writing is saved.", 422);
}

export async function POST(request: Request) {
  let failJob: (() => Promise<void>) | null = null;
  try {
    const { db, userId } = await writingContext(request);
    const body = await requestBody(request);
    checkWritingOwner(body, userId);
    const task = typeof body.taskId === "string" ? getWritingTask(body.taskId) : undefined;
    if (!task) throw new WritingError("Choose a writing task first.");
    const answer = textField(body.answer, 16000, 20);
    const reflection = textField(body.reflection ?? "", 1500);
    const parentId = body.parentId;
    if (parentId !== null && (typeof parentId !== "string" || !/^[0-9a-f-]{36}$/i.test(parentId))) throw new WritingError("Reload your latest feedback before revising.");
    if (parentId && reflection.trim().length < 10) throw new WritingError("Briefly explain what you changed before submitting your revision.");
    let previous: Submission | null = null;
    if (parentId) {
      const result = await db.from("english_writing_submissions").select(PUBLIC_SUBMISSION_COLUMNS).eq("id", parentId).eq("user_id", userId).eq("task_id", task.id).eq("status", "complete").maybeSingle();
      if (result.error || !result.data?.feedback) throw new WritingError("Reload your latest feedback before revising.", 409);
      previous = result.data as Submission;
      if (previous.answer.trim() === answer.trim()) throw new WritingError("Make a change to your writing before asking for revision feedback.");
    }
    if (!feedbackEnabled()) throw new WritingError("AI feedback is being set up. You can keep learning and saving your writing.", 503);
    const model = process.env.OPENAI_WRITING_MODEL || "gpt-6-astra";
    const hash = createHash("sha256").update(JSON.stringify([task.id, answer, parentId, reflection, RUBRIC_VERSION, model])).digest("hex");
    const reservation = await db.rpc("claim_english_writing_submission", {
      p_user_id: userId, p_task_id: task.id, p_answer: answer, p_parent_id: parentId,
      p_reflection: reflection, p_model: model, p_hash: hash, p_rubric: RUBRIC_VERSION,
    });
    if (reservation.error || !reservation.data) throw new Error();
    const { state, row } = reservation.data;
    if (state === "cached") return NextResponse.json({ ok: true, submission: publicSubmission(row), cached: true });
    if (state === "busy") throw new WritingError("Feedback is already being prepared. Please wait a moment, then reload your progress.", 409);
    if (state === "limited") throw new WritingError("You have reached the feedback limit for the last 24 hours. Keep your draft and try again later.", 429);
    if (state === "conflict") throw new WritingError("There is newer feedback for this task. Reload it before submitting a revision.", 409);
    if (state !== "claimed" || !row?.id || !row?.lease_token) throw new Error();
    const id = row.id; const lease = row.lease_token;
    failJob = async () => {
      await db.from("english_writing_submissions").update({ status: "failed", failure_code: "feedback-unavailable", updated_at: new Date().toISOString() }).eq("id", id).eq("user_id", userId).eq("lease_token", lease).eq("status", "pending");
    };
    const key = process.env.OPENAI_API_KEY!;
    await moderate(answer + "\n" + reflection + (previous ? "\n" + previous.answer : ""), key);
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model, store: false, reasoning: { effort: "low" }, max_output_tokens: 5500,
        instructions: WRITING_INSTRUCTIONS,
        input: [{ role: "user", content: markingPayload(task, answer, previous?.feedback ? { answer: previous.answer, feedback: previous.feedback as WritingFeedback } : null, reflection) }],
        text: { format: { type: "json_schema", name: "year8_writing_feedback", strict: true, schema: feedbackSchema } },
      }), signal: AbortSignal.timeout(40000),
    });
    if (!response.ok) throw new WritingError("Feedback could not be prepared. Your writing is saved; please try again later.", 502);
    const raw = await response.json();
    const feedback = validateFeedback(JSON.parse(extractResponseText(raw)), task, answer, previous?.feedback ?? null);
    await moderate(JSON.stringify(feedback), key);
    const total = feedback.ao5 === null || feedback.ao6 === null ? null : feedback.ao5 + feedback.ao6;
    const saved = await db.from("english_writing_submissions").update({
      status: "complete", feedback, total,
      usage: { input_tokens: Number(raw.usage?.input_tokens) || 0, output_tokens: Number(raw.usage?.output_tokens) || 0 },
      updated_at: new Date().toISOString(),
    }).eq("id", id).eq("user_id", userId).eq("lease_token", lease).eq("status", "pending").select(PUBLIC_SUBMISSION_COLUMNS).maybeSingle();
    if (saved.error || !saved.data) throw new Error();
    failJob = null;
    return NextResponse.json({ ok: true, submission: saved.data });
  } catch (error) {
    if (failJob) { try { await failJob(); } catch { /* Preserve the original safe error. */ } }
    return writingError(error);
  }
}

function publicSubmission(row: Record<string, unknown>) {
  return Object.fromEntries(PUBLIC_SUBMISSION_COLUMNS.split(",").map(key => [key, row[key]]));
}
