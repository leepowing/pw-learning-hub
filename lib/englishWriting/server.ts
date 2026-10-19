import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export class WritingError extends Error {
  constructor(public message: string, public status = 400) { super(message); }
}
export async function writingContext(request: Request) {
  const token = request.headers.get("authorization")?.match(/^Bearer (.+)$/)?.[1];
  if (!token) throw new WritingError("Please sign in again.", 401);
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishable = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !publishable || !service) throw new WritingError("Writing is being set up. Your local draft is safe.", 503);
  const client = createClient(url, publishable, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await client.auth.getUser(token);
  if (error || !data.user) throw new WritingError("Please sign in again.", 401);
  const db = createClient(url, service, { auth: { persistSession: false, autoRefreshToken: false } });
  const profile = await db.from("profiles").select("student").eq("id", data.user.id).maybeSingle();
  if (profile.error || !profile.data?.student) throw new WritingError("Your learning profile could not be loaded.", 403);
  return { db, userId: data.user.id, name: String(profile.data.student) };
}
export async function requestBody(request: Request): Promise<Record<string, unknown>> {
  if (Number(request.headers.get("content-length") ?? 0) > 60000) throw new WritingError("This request is too large.", 413);
  const raw = await request.text();
  if (raw.length > 60000) throw new WritingError("This request is too large.", 413);
  try {
    const body: unknown = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
    return body as Record<string, unknown>;
  } catch { throw new WritingError("Please reload the page and try again."); }
}
export function checkWritingOwner(body: Record<string, unknown>, userId: string) {
  if (body.expectedUserId !== userId) throw new WritingError("The signed-in account changed. Reload this writing page before continuing.", 409);
}
export function textField(value: unknown, max: number, min = 0): string {
  if (typeof value !== "string" || value.length > max || value.trim().length < min || value.includes("\u0000")) {
    throw new WritingError("Please check the length of your writing and try again.");
  }
  return value;
}
export function writingError(error: unknown) {
  const known = error instanceof WritingError;
  return NextResponse.json({ ok: false, error: known ? error.message : "Writing could not be loaded or saved. Your draft is safe. Please try again." }, { status: known ? error.status : 503 });
}
export const PUBLIC_SUBMISSION_COLUMNS = "id,user_id,task_id,parent_id,answer,reflection,status,feedback,rubric_version,model,created_at,total";
export function feedbackEnabled() { return process.env.ENGLISH_WRITING_AI_READY === "true" && Boolean(process.env.OPENAI_API_KEY); }
