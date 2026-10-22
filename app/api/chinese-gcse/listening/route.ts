import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
const scripts: Record<string, string> = {
  school: "大家好，我叫小明。我今年十三歲，喺英國讀中學。我最鍾意科學，因為上堂可以做實驗。雖然數學有時比較難，但係我都會努力學習。",
  weekend: "上個星期六，我同屋企人去咗圖書館。我借咗兩本中文書，之後我哋去公園散步。下個週末如果天氣好，我想同朋友踩單車。",
  healthy: "我以前成日飲汽水，亦都好少做運動。最近我開始每日行路半個鐘，仲會食多啲水果。我覺得健康生活最重要係持之以恆。",
  transport: "阿欣平時搭巴士返學，車程大約二十分鐘。今日巴士遲咗，佢即刻打電話畀學校，話自己可能會遲到。",
  volunteer: "志明今個星期日會去社區中心做義工，教長者用手機。佢話參加呢個活動係因為想幫助有需要嘅人。",
  weather: "天文台預測星期六會有大雨，所以我哋取消去沙灘嘅計劃，改為去室內博物館參觀。",
  future: "我將來希望做工程師，因為我鍾意數學同科學，亦都想設計可以改善生活嘅工具。",
};
const recent = new Map<string, number[]>();
export async function POST(request: Request) {
  const bearer = request.headers.get("authorization") ?? "";
  const token = bearer.startsWith("Bearer ") ? bearer.slice(7) : "";
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!token || !url || !anon) return NextResponse.json({error:"Sign in required"},{status:401});
  const supabase = createClient(url,anon,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data:{user},error} = await supabase.auth.getUser(token);
  if (error || !user) return NextResponse.json({error:"Session expired"},{status:401});
  let body: {id?:string};
  try { body = await request.json(); } catch { return NextResponse.json({error:"Invalid request"},{status:400}); }
  const script = body.id ? scripts[body.id] : undefined;
  if (!script) return NextResponse.json({error:"Unknown listening passage"},{status:400});
  const now = Date.now();
  const hits = (recent.get(user.id) ?? []).filter(t=>t>now-600000);
  if (hits.length>=12) return NextResponse.json({error:"Please try again in a few minutes"},{status:429});
  hits.push(now); recent.set(user.id,hits);
  const key=process.env.AZURE_SPEECH_KEY, region=process.env.AZURE_SPEECH_REGION;
  if (!key || !region || !/^[a-z0-9-]+$/i.test(region)) return NextResponse.json({error:"Azure Speech is not configured"},{status:503});
  const escaped=script.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const ssml=`<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-HK"><voice name="zh-HK-HiuMaanNeural">${escaped}</voice></speak>`;
  try {
    const response=await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,{
      method:"POST",signal:AbortSignal.timeout(12000),headers:{"Ocp-Apim-Subscription-Key":key,"Content-Type":"application/ssml+xml","X-Microsoft-OutputFormat":"audio-16khz-32kbitrate-mono-mp3","User-Agent":"PWLearningHub"},body:ssml
    });
    if (!response.ok) return NextResponse.json({error:"Speech generation unavailable"},{status:502});
    return new NextResponse(await response.arrayBuffer(),{headers:{"Content-Type":"audio/mpeg","Cache-Control":"private, no-store"}});
  } catch { return NextResponse.json({error:"Speech service timed out"},{status:502}); }
}
