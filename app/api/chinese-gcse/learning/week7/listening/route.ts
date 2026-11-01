import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
// Original Cantonese scripts; kept server-side so student questions don't expose the transcript.
const scripts:Record<string,string>={
 ticket:"你好，唔該，我想買一張去劍橋嘅來回車票。請問今日仲有冇位呀？",
 platform:"各位乘客請注意，去倫敦嘅火車會喺三號月台上車，九點半出發。多謝合作。",
 airport:"聽日去機場，我哋決定坐巴士，唔使自己揸車。記得帶齊行李呀！",
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
