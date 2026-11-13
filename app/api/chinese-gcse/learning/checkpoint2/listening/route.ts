import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
export const runtime='nodejs';
const scripts:Record<string,string>={
 a:'我想買一張去倫敦嘅來回火車票。我嘅預算係三十英鎊，所以買之前要先比較價錢。',
 b:'請去三號月台等車。火車原定九點十五分開出，而家會延遲十五分鐘，所以九點半出發。',
 c:'旅行嗰陣，我會用手機聯絡屋企人同查交通資料。我亦會飲水，少飲甜飲品，咁樣比較健康。',
};
const escapeXml=(v:string)=>v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
export async function POST(req:Request){
 const token=req.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL,pub=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!token||!url||!pub)return NextResponse.json({error:'請先登入'},{status:401});
 const db=createClient(url,pub,{global:{headers:{Authorization:`Bearer ${token}`}},auth:{persistSession:false,autoRefreshToken:false}});
 const {data:{user},error}=await db.auth.getUser(token);if(error||!user)return NextResponse.json({error:'登入已失效'},{status:401});
 const {data:eligible,error:gateError}=await db.rpc('ch3_cp2_eligible',{p_uid:user.id});
 if(gateError||!eligible)return NextResponse.json({error:'未完成 Week 5–8，Checkpoint 尚未解鎖'},{status:403});
 const body=await req.json().catch(()=>null);const script=typeof body?.clipId==='string'?scripts[body.clipId]:null;
 if(!script)return NextResponse.json({error:'錄音題目無效'},{status:400});
 const key=process.env.AZURE_SPEECH_KEY,region=process.env.AZURE_SPEECH_REGION;
 if(!key||!region||!/^[a-z0-9-]+$/i.test(region))return NextResponse.json({error:'Azure 粵語服務未設定'},{status:503});
 const ssml=`<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-HK"><voice name="zh-HK-HiuMaanNeural">${escapeXml(script)}</voice></speak>`;
 try{const res=await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':key,'Content-Type':'application/ssml+xml','X-Microsoft-OutputFormat':'audio-16khz-32kbitrate-mono-mp3','User-Agent':'PWLearningHub'},body:ssml,signal:AbortSignal.timeout(15000)});
  if(!res.ok)return NextResponse.json({error:'廣東話語音暫時未能播放'},{status:502});
  return new NextResponse(await res.arrayBuffer(),{headers:{'Content-Type':'audio/mpeg','Cache-Control':'private, no-store'}});
 }catch{return NextResponse.json({error:'Azure 語音服務逾時'},{status:502});}
}
