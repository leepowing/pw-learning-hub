import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getFrenchPronunciationTarget } from "@/data/knowledgeOrganisers/year8FrenchHolidaysAndUniversals";

export const runtime = "nodejs";
const WINDOW_MS = 10 * 60 * 1000;
const recent = new Map<string, number[]>();
const daily = new Map<string, { day: string; count: number }>();

function reply(error: string, status: number) { return NextResponse.json({ok:false,error},{status}); }

async function userFor(request: Request) {
  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : "";
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!token || !url || !key) return null;
  const client = createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data:{user},error} = await client.auth.getUser(token);
  return error ? null : user;
}

function allowed(userId: string) {
  const now = Date.now();
  const calls = (recent.get(userId) ?? []).filter(time => time > now - WINDOW_MS);
  const perWindow = Number(process.env.SPEECH_RATE_LIMIT_PER_10_MINUTES ?? 20);
  if (calls.length >= perWindow) return false;
  calls.push(now); recent.set(userId,calls);
  const day = new Date().toISOString().slice(0,10);
  const entry = daily.get(userId);
  const count = entry?.day === day ? entry.count : 0;
  const dailyCap = Number(process.env.SPEECH_DAILY_ATTEMPT_CAP ?? 100);
  if (count >= dailyCap) return false;
  daily.set(userId,{day,count:count+1});
  return true;
}

export async function POST(request: Request) {
  const user = await userFor(request);
  if (!user) return reply("Please sign in again before pronunciation practice.",401);
  if (!allowed(user.id)) return reply("Pronunciation practice limit reached. Please try again later.",429);
  let body: {targetId?: unknown};
  try { body = await request.json() as {targetId?: unknown}; } catch { return reply("Invalid request.",400); }
  const target = typeof body.targetId === "string" ? getFrenchPronunciationTarget(body.targetId) : undefined;
  if (!target) return reply("This pronunciation target is not available.",404);
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) return reply("Pronunciation assessment is not configured yet.",503);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(),8000);
  try {
    const response = await fetch(`https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,{method:"POST",headers:{"Ocp-Apim-Subscription-Key":key,"Content-Length":"0"},signal:controller.signal});
    if (!response.ok) return reply("Azure Speech is temporarily unavailable.",502);
    const token = await response.text();
    return NextResponse.json({ok:true,token,region,locale:"fr-FR",target:{id:target.id,text:target.text,english:target.english}});
  } catch { return reply("Azure Speech is temporarily unavailable.",502); }
  finally { clearTimeout(timeout); }
}
