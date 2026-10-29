import {NextResponse} from "next/server";
import {authenticate,askOpenAI,existingReview,errorResponse,type SkillFeedback} from "../skills/common";
import {speakingPrompts} from "@/data/chineseGcse/week1";
export const runtime="nodejs";
export const maxDuration=60;

// Decode only raw PCM mono 16kHz audio produced by the browser converter.
function validateWav(b:Buffer){
  if(b.length<44||b.length>1_100_000||b.toString("ascii",0,4)!=="RIFF"||b.toString("ascii",8,12)!=="WAVE")return false;
  const header=b.toString("ascii",12,16);
  const format=b.readUInt16LE(20),channels=b.readUInt16LE(22),rate=b.readUInt32LE(24),bits=b.readUInt16LE(34);
  return header==="fmt "&&format===1&&channels===1&&rate===16000&&bits===16&&b.toString("ascii",36,40)==="data"&&b.length>3600;
}
async function azureRequest(audio:Buffer,params?:Record<string,unknown>){
  const key=process.env.AZURE_SPEECH_KEY,region=process.env.AZURE_SPEECH_REGION;
  if(!key||!region||!/^[a-z0-9-]+$/i.test(region))throw new Error("AZURE_NOT_CONFIGURED");
  const headers:Record<string,string>={"Ocp-Apim-Subscription-Key":key,"Content-Type":"audio/wav; codecs=audio/pcm; samplerate=16000","Accept":"application/json"};
  if(params)headers["Pronunciation-Assessment"]=Buffer.from(JSON.stringify(params)).toString("base64");
  const res=await fetch(`https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=zh-HK&format=detailed`,{method:"POST",headers,body:new Uint8Array(audio),signal:AbortSignal.timeout(18000)});
  if(!res.ok){console.error("[stage3-speaking] Azure failed",res.status);throw new Error("AZURE_UPSTREAM_FAILED");}
  return res.json();
}
export async function POST(request:Request){
  try{
    const {db,user}=await authenticate(request);
    const form=await request.formData();
    const taskId=String(form.get("taskId")||"");
    const task=speakingPrompts.find(x=>x.id===taskId);
    if(!task)return NextResponse.json({error:"口說題目無效"},{status:400});
    const existing=await existingReview(db,user.id,"speaking",taskId);
    if(existing)return NextResponse.json({ok:true,cached:true,review:existing});
    const file=form.get("audio");
    if(!(file instanceof File))return NextResponse.json({error:"請先錄製一段廣東話答案"},{status:400});
    const wav=Buffer.from(await file.arrayBuffer());
    if(!validateWav(wav))return NextResponse.json({error:"錄音格式不正確：請使用網站內的錄音功能，最長 30 秒"},{status:400});
    const first=await azureRequest(wav);
    const transcript=String(first?.DisplayText??first?.NBest?.[0]?.Display??"").trim();
    if(first?.RecognitionStatus!=="Success"||transcript.length<2) return NextResponse.json({error:"未能清楚辨識廣東話，請在安靜環境重新錄製"},{status:422});
    let pron:SkillFeedback["pronunciation_reference"]={accuracy:null,fluency:null,note:"沒有可靠發音數值；以實際語音及教師判斷為準。"};
    // Second pass: transcript as reference for a tentative scripted pronunciation score.
    // Not an independent accent/GCSE judgement, because the reference comes from STT.
    try{
      const result=await azureRequest(wav,{ReferenceText:transcript,GradingSystem:"HundredMark",Granularity:"FullText",Dimension:"Comprehensive",EnableProsodyAssessment:"False"});
      const best=result?.NBest?.[0]??{};
      const norm=(x:unknown)=>typeof x==="number"&&Number.isFinite(x)?Math.round(x):null;
      pron={accuracy:norm(best.AccuracyScore),fluency:norm(best.FluencyScore),note:"Azure 發音參考指標以辨識所得文字作比較，可能高估表現；不是正式口試評級，請家長聽取原錄音自行判斷。"};
    }catch{ /* If optional assessment fails, keep content grading available. */ }
    const feedback=await askOpenAI(`GCSE Chinese Cantonese SPEAKING task ${task.label}: ${task.english}. Azure zh-HK speech-to-text transcript (recognition can be inaccurate): ${transcript}. Assess ONLY communicated content, appropriate Cantonese vocabulary/grammar and transcript clarity; DO NOT assert pronunciation from text. Use a 0-4 content,0-4 language,0-2 clarity practice rubric. Set transcription to the transcript. Provide specific Cantonese speaking suggestions in Traditional Chinese.`);
    feedback.transcription=transcript;
    feedback.pronunciation_reference=pron;
    const saved=await db.from("chinese_stage3_skill_reviews").insert({user_id:user.id,week:1,skill:"speaking",task_id:taskId,input_kind:"audio",input_text:transcript,object_path:null,feedback}).select("*").single();
    if(saved.error){
      const old=await existingReview(db,user.id,"speaking",taskId);
      if(old)return NextResponse.json({ok:true,cached:true,review:old});
      console.error("[stage3-speaking] Save rejected",saved.error.code);
      return NextResponse.json({error:"語音已批改但儲存失敗；請檢查 SQL 是否執行"},{status:500});
    }
    return NextResponse.json({ok:true,cached:false,review:saved.data});
  }catch(e){
    if(e instanceof Error && e.message.startsWith("AZURE_"))return NextResponse.json({error:"Azure Speech 暫時未能辨識粵語，請檢查語音設定"},{status:502});
    const x=errorResponse(e);return NextResponse.json({error:x.error},{status:x.status});
  }
}
