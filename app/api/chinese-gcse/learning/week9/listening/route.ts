import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
// Original Cantonese scripts; kept server-side so student questions don't expose the transcript.
const scripts:Record<string,string>={
 schedule:"下星期有中文考試。我每日晚上溫習半個鐘，星期日再做一次練習。",
 advice:"我最近功課太多，唔知點算好。老師話可以先安排好要做嘅功課，唔明嘅題目就問老師。",
 balance:"做咗一陣功課，我會休息十分鐘。休息完之後，我通常更容易集中精神。",
};
const requests = new Map<string,number[]>();
const escapeXml = (s:string) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

export async function POST(request: Request) {
  const token = request.headers.get("authorization")?.match(/^Bearer (.+)$/)?.[1];
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL, pub=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!token||!url||!pub) return NextResponse.json({error:"請先登入"},{status:401});
  const db=createClient(url,pub,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data:{user},error}=await db.auth.getUser(token);
  if (error||!user) return NextResponse.json({error:"登入已失效"},{status:401});
  const json = await request.json().catch(()=>null);
  const script = typeof json?.clipId === "string" ? scripts[json.clipId] : undefined;
  if (!script) return NextResponse.json({error:"無效錄音題目"},{status:400});
  const now=Date.now();
  const recent=(requests.get(user.id)??[]).filter(t=>now-t < 600_000);
  if (recent.length>=12) return NextResponse.json({error:"播放次數較多，請稍後再試"},{status:429});
  recent.push(now);requests.set(user.id,recent);
  const key=process.env.AZURE_SPEECH_KEY,region=process.env.AZURE_SPEECH_REGION;
  if (!key||!region||!/^[a-z0-9-]+$/i.test(region)) return NextResponse.json({error:"Azure Speech 尚未設定"},{status:503});
  const ssml=`<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-HK"><voice name="zh-HK-HiuMaanNeural">${escapeXml(script)}</voice></speak>`;
  try {
    const result=await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,{
      method:"POST",headers:{"Ocp-Apim-Subscription-Key":key,"Content-Type":"application/ssml+xml","X-Microsoft-OutputFormat":"audio-16khz-32kbitrate-mono-mp3","User-Agent":"PWLearningHub"},body:ssml,signal:AbortSignal.timeout(15000)
    });
    if(!result.ok) return NextResponse.json({error:"暫時未能播放廣東話"},{status:502});
    return new NextResponse(await result.arrayBuffer(),{headers:{"Content-Type":"audio/mpeg","Cache-Control":"private, no-store"}});
  } catch {
    return NextResponse.json({error:"語音服務逾時，請重試"},{status:502});
  }
}
