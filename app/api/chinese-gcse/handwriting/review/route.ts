import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const maxDuration = 60;
const bucket = "chinese-handwriting";
const tasks: Record<string, string> = {
  w1: "請用『雖然……但是……』寫一個完整句子。",
  w2: "請用『如果……就……』寫一個完整句子。",
  w3: "請用『不但……而且……』寫一個完整句子。",
  w4: "把『我昨天去圖書館。我借了兩本書。』合併成一句通順的句子。",
  w5: "請用『持之以恆』造一個句子。",
  w6: "約100字：介紹學校、喜歡的科目及希望改善的事。",
  w7: "約120字：描述一次克服困難的經歷及所學。",
};
const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
function outputText(data: any): string {
  return (data.output ?? []).flatMap((o: any) => o.content ?? []).filter((c: any) => c.type === "output_text").map((c: any) => c.text).join("");
}
export async function POST(request: Request) {
  try {
    const token = request.headers.get("authorization")?.match(/^Bearer (.+)$/)?.[1];
    if (!token) return NextResponse.json({ error: "請先登入" }, { status: 401 });
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    const apiKey = process.env.OPENAI_API_KEY;
    if (!url || !key || !apiKey) return NextResponse.json({ error: "AI 服務尚未設定" }, { status: 503 });
    const db = createClient(url, key, { global: { headers: { Authorization: `Bearer ${token}` } }, auth: { persistSession: false, autoRefreshToken: false } });
    const { data: { user }, error: authError } = await db.auth.getUser(token);
    if (authError || !user) return NextResponse.json({ error: "登入已失效" }, { status: 401 });
    const body = await request.json();
    const taskId = typeof body.taskId === "string" ? body.taskId : "";
    if (!tasks[taskId]) return NextResponse.json({ error: "題目無效" }, { status: 400 });
    const rows = await db.from("chinese_handwriting_submissions").select("id,object_path,content_type").eq("user_id", user.id).eq("assessment_version", "v3").eq("task_id", taskId).order("created_at", { ascending: true }).limit(4);
    if (rows.error || !rows.data?.length) return NextResponse.json({ error: "請先上傳手寫答案" }, { status: 400 });
    const images: Array<{type: "input_image"; image_url: string}> = [];
    for (const row of rows.data) {
      if (!allowed.has(row.content_type)) return NextResponse.json({ error: "AI 辨識目前只支援 JPG、PNG、WebP；PDF 請轉成圖片" }, { status: 400 });
      const file = await db.storage.from(bucket).download(row.object_path);
      if (file.error || !file.data) throw new Error("無法讀取原稿");
      if (file.data.size > 5 * 1024 * 1024) return NextResponse.json({ error: "AI 辨識每張圖片最多 5MB" }, { status: 400 });
      const base64 = Buffer.from(await file.data.arrayBuffer()).toString("base64");
      images.push({ type: "input_image", image_url: `data:${row.content_type};base64,${base64}` });
    }
    const existing = await db.from("chinese_handwriting_reviews").select("id,created_at").eq("user_id", user.id).eq("assessment_version", "v3").eq("task_id", taskId).order("created_at", { ascending: false }).limit(1);
    if (existing.data?.length && Date.now() - new Date(existing.data[0].created_at).getTime() < 60_000) return NextResponse.json({ error: "剛完成辨識，請稍後再試" }, { status: 429 });
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: process.env.OPENAI_CHINESE_MODEL || "gpt-4.1-mini", store: false, max_output_tokens: 1800,
        instructions: "你是香港繁體中文手寫辨識及中文老師。只能按圖片可見內容逐字轉錄，不要默默修正錯字。不能辨識的字用□標示，並在uncertain列出疑點。評語使用繁體中文、正式書面語。提供具體但鼓勵性的句式、詞彙、內容建議。不能可靠辨認筆畫或字形時要明確說明。此為診斷回饋，不是正式GCSE評級。僅輸出JSON物件，包含 transcription (string), uncertain (string[]), feedback (string[]), strengths (string[]), provisional_score (integer 0-10), score_reason (string)。",
        input: [{ role: "user", content: [{ type: "input_text", text: `題目：${tasks[taskId]}。以下為學生原稿，請辨識及初步評估。` }, ...images] }],
        text: { format: { type: "json_object" } },
      }), signal: AbortSignal.timeout(45000),
    });
if (!response.ok) {
  const errorBody = await response.json().catch(() => null);

  const code = String(errorBody?.error?.code ?? "unknown");
  const type = String(errorBody?.error?.type ?? "unknown");
  const param = String(errorBody?.error?.param ?? "none");

  // 只記錄必要的診斷資料，避免記錄學生原稿
  const message = String(errorBody?.error?.message ?? "Unknown error");

  console.error("[Chinese handwriting] OpenAI request failed", {
    status: response.status,
    code,
    type,
    param,
    message: message.slice(0, 500),
  });

  return NextResponse.json(
    {
      error: `AI 請求失敗（HTTP ${response.status}）`,
    },
    { status: 502 }
  );
}
    const raw = await response.json();
    const text = outputText(raw);
    if (!text.trim()) {
      console.error("[Chinese handwriting] Empty model output", { status: raw.status, incompleteReason: raw.incomplete_details?.reason ?? null });
      return NextResponse.json({ error: "AI 沒有返回可用的批改內容，請檢查 Vercel Logs" }, { status: 502 });
    }
    let parsed: any;
    try {
      parsed = JSON.parse(text);
    } catch {
      console.error("[Chinese handwriting] Invalid model JSON", { outputLength: text.length });
      return NextResponse.json({ error: "AI 回傳格式不正確，請檢查 Vercel Logs" }, { status: 502 });
    }
    const feedback = {
      transcription: String(parsed.transcription ?? "").slice(0, 6000),
      uncertain: Array.isArray(parsed.uncertain) ? parsed.uncertain.map(String).slice(0, 20) : [],
      feedback: Array.isArray(parsed.feedback) ? parsed.feedback.map(String).slice(0, 12) : [],
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.map(String).slice(0, 8) : [],
      provisional_score: Math.max(0, Math.min(10, Math.round(Number(parsed.provisional_score) || 0))),
      score_reason: String(parsed.score_reason ?? "").slice(0, 1000),
    };
    const save = await db.from("chinese_handwriting_reviews").insert({ user_id: user.id, assessment_version: "v3", task_id: taskId, feedback, source_ids: rows.data.map(r => r.id), status: "pending_review" });
    if (save.error) {
      console.error("[Chinese handwriting] Supabase review insert failed", { code: save.error.code, message: save.error.message });
      return NextResponse.json({ error: `評語儲存失敗（${save.error.code || "unknown"}）` }, { status: 500 });
    }
    return NextResponse.json({ ok: true, feedback });
  } catch (e) {
    console.error("[Chinese handwriting] Unexpected failure", e instanceof Error ? { name: e.name, message: e.message } : { type: typeof e });
    return NextResponse.json({ error: e instanceof Error ? e.message : "處理失敗" }, { status: 500 });
  }
}
