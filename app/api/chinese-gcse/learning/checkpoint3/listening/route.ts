import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
export const runtime='nodejs';
const scripts:Record<string,string>={
 a:'下星期我有中文考試，所以有少少緊張。我計劃每日夜晚溫習半個鐘，之後休息一陣，等自己容易集中精神。',
 b:'社區清潔活動會喺星期六朝早舉行。參加嘅義工請九點鐘喺公園入口集合，記得帶水同著合適嘅鞋。',
 c:'我將來對工程方面嘅工作有興趣。依家我會努力學好科學，同埋參加學校活動，改善自己嘅溝通能力。',
};
const escapeXml=(v:string)=>v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
export async function POST(req:Request){
 const token=req.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL,pub=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!token||!url||!pub)return NextResponse.json({error:'請先登入'},{status:401});
 const db=createClient(url,pub,{global:{headers:{Authorization:`Bearer ${token}`}},auth:{persistSession:false,autoRefreshToken:false}});
 const {data:{user},error}=await db.auth.getUser(token);if(error||!user)return NextResponse.json({error:'登入已失效'},{status:401});
 const {data:profile,error:profileError}=await db.from('profiles').select('role').eq('id',user.id).maybeSingle();
 if(profileError)return NextResponse.json({error:'未能核實使用者身份'},{status:403});
 if(profile?.role!=='parent'){
  const {data:eligible,error:gateError}=await db.rpc('ch3_cp3_eligible',{p_uid:user.id});
  if(gateError||!eligible)return NextResponse.json({error:'未完成 Week 9–12，Checkpoint 尚未解鎖'},{status:403});
 }
 const body=await req.json().catch(()=>null);const script=typeof body?.clipId==='string'?scripts[body.clipId]:null;
 if(!script)return NextResponse.json({error:'錄音題目無效'},{status:400});
 const key=process.env.AZURE_SPEECH_KEY,region=process.env.AZURE_SPEECH_REGION;
 if(!key||!region||!/^[a-z0-9-]+$/i.test(region))return NextResponse.json({error:'Azure 粵語服務未設定'},{status:503});
 const ssml=`<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-HK"><voice name="zh-HK-HiuMaanNeural">${escapeXml(script)}</voice></speak>`;
 try{const res=await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':key,'Content-Type':'application/ssml+xml','X-Microsoft-OutputFormat':'audio-16khz-32kbitrate-mono-mp3','User-Agent':'PWLearningHub'},body:ssml,signal:AbortSignal.timeout(15000)});
  if(!res.ok){
   const detail=await res.text().catch(()=>'');
   console.error(`[Checkpoint 3 Azure TTS ${res.status}]`,detail.slice(0,500));
   const reason=res.status===401||res.status===403?'Azure Speech 認證或地區設定不正確':res.status===429?'Azure Speech 免費配額或速率已達上限':res.status===400?'Azure Speech 不接受這段語音格式':`Azure Speech 服務錯誤（${res.status}）`;
   return NextResponse.json({error:reason},{status:502});
  }
  return new NextResponse(await res.arrayBuffer(),{headers:{'Content-Type':'audio/mpeg','Cache-Control':'private, no-store'}});
 }catch{return NextResponse.json({error:'Azure 語音服務逾時'},{status:502});}
}
