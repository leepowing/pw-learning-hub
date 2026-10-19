import { NextResponse } from "next/server";
import { getWritingTask, getWritingLesson } from "@/data/englishWriting/course";
import { checkWritingOwner, requestBody, textField, writingContext, writingError, WritingError } from "@/lib/englishWriting/server";

export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    const { db, userId } = await writingContext(request);
    const body = await requestBody(request);
    checkWritingOwner(body, userId);
    if (body.action === "lesson") {
      const lesson = getWritingLesson(Number(body.week));
      if (!lesson || !Array.isArray(body.answers) || body.answers.length !== lesson.checks.length ||
        !body.answers.every((answer, i) => Number.isInteger(answer) && answer === lesson.checks[i].answer)) {
        throw new WritingError("Complete the quick checks before finishing this lesson.");
      }
      const micro = textField(body.microAnswer, 2000, 20);
      const result = await db.from("english_writing_lessons").upsert({ user_id: userId, week: lesson.week, answers: body.answers, micro_answer: micro, completed_at: new Date().toISOString() });
      if (result.error) throw new Error();
      return NextResponse.json({ ok: true });
    }
    if (body.action !== "draft" || typeof body.taskId !== "string" || !getWritingTask(body.taskId)) throw new WritingError("Choose a writing task first.");
    const draft = textField(body.draft, 16000);
    const plan = textField(body.plan, 3000);
    if (!Number.isInteger(body.version) || Number(body.version) < 0 || Number(body.version) > 1000000 ||
      !Number.isInteger(body.elapsedSeconds) || Number(body.elapsedSeconds) < 0 || Number(body.elapsedSeconds) > 86400) {
      throw new WritingError("Please reload your saved draft before continuing.");
    }
    const version = Number(body.version);
    const row = { user_id: userId, task_id: body.taskId, draft, plan, elapsed_seconds: body.elapsedSeconds as number, version: version + 1, updated_at: new Date().toISOString() };
    const saved = version === 0
      ? await db.from("english_writing_work").insert(row).select("version").maybeSingle()
      : await db.from("english_writing_work").update(row).eq("user_id", userId).eq("task_id", body.taskId).eq("version", version).select("version").maybeSingle();
    if (saved.error?.code === "23505" || (!saved.error && !saved.data)) {
      throw new WritingError("A newer draft was saved in another tab. Copy your current writing, then reload before saving again.", 409);
    }
    if (saved.error || !saved.data) throw new Error();
    return NextResponse.json({ ok: true, version: saved.data.version });
  } catch (error) { return writingError(error); }
}
