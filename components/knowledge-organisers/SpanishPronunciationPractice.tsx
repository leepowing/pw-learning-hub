"use client";

import { useRef, useState } from "react";
import type { KnowledgePronunciationItem } from "@/data/knowledgeOrganisers/types";
import { supabase } from "@/lib/supabase";

type Scores = {accuracy:number;fluency:number;completeness:number;pronunciation:number};

export default function SpanishPronunciationPractice({items}:{items:KnowledgePronunciationItem[]}) {
  const [selected,setSelected] = useState(items[0]?.id ?? "");
  const [recording,setRecording] = useState(false);
  const [message,setMessage] = useState("");
  const [scores,setScores] = useState<Scores | null>(null);
  const recognizerRef = useRef<{stopContinuousRecognitionAsync:(ok:()=>void,fail:(error:string)=>void)=>void;close:()=>void}|null>(null);
  const target = items.find(item => item.id === selected) ?? items[0];

  function listen() {
    if (!target || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(target.text.replaceAll("...",""));
    utterance.lang="es-ES"; utterance.rate=.82;
    const voice = window.speechSynthesis.getVoices().find(item => item.lang.toLowerCase()==="es-es");
    if (voice) utterance.voice=voice;
    else setMessage("An es-ES voice is not installed; your device will use its available Spanish voice.");
    window.speechSynthesis.speak(utterance);
  }

  async function start() {
    if (!target || recording) return;
    setScores(null); setMessage("Requesting microphone access…");
    try {
      const {data:{session}} = await supabase.auth.getSession();
      if (!session?.access_token) throw new Error("Please sign in again.");
      const response = await fetch("/api/spanish/pronunciation-token",{method:"POST",headers:{Authorization:`Bearer ${session.access_token}`,"Content-Type":"application/json"},body:JSON.stringify({targetId:target.id})});
      const payload = await response.json() as {ok:boolean;error?:string;token?:string;region?:string;locale?:string;target?:{text:string}};
      if (!response.ok || !payload.ok || !payload.token || !payload.region || !payload.target) throw new Error(payload.error ?? "Speech service unavailable.");
      const SpeechSDK = await import("microsoft-cognitiveservices-speech-sdk");
      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(payload.token,payload.region);
      speechConfig.speechRecognitionLanguage="es-ES";
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig,audioConfig);
      const assessment = new SpeechSDK.PronunciationAssessmentConfig(payload.target.text,SpeechSDK.PronunciationAssessmentGradingSystem.HundredMark,SpeechSDK.PronunciationAssessmentGranularity.Phoneme,true);
      assessment.applyTo(recognizer);
      recognizer.recognized = (_sender,event) => {
        if (event.result.reason !== SpeechSDK.ResultReason.RecognizedSpeech) return;
        const result = SpeechSDK.PronunciationAssessmentResult.fromResult(event.result);
        setScores({accuracy:Math.round(result.accuracyScore),fluency:Math.round(result.fluencyScore),completeness:Math.round(result.completenessScore),pronunciation:Math.round(result.pronunciationScore)});
      };
      recognizer.canceled = () => setMessage("Assessment could not finish. Listen and practise yourself, then try again.");
      recognizerRef.current=recognizer;
      recognizer.startContinuousRecognitionAsync(()=>{setRecording(true);setMessage("Recording… say the displayed Spanish, then press Stop and assess.");},error=>{recognizer.close();throw new Error(error);});
    } catch (error) { setRecording(false); setMessage(error instanceof Error ? error.message : "Pronunciation practice is unavailable."); }
  }

  function stop() {
    const recognizer=recognizerRef.current;
    if (!recognizer) return;
    recognizer.stopContinuousRecognitionAsync(()=>{recognizer.close();recognizerRef.current=null;setRecording(false);setMessage("Assessment finished. You can listen and try again.");},()=>{recognizer.close();recognizerRef.current=null;setRecording(false);setMessage("Assessment could not finish. Please try again.");});
  }

  if (!target) return null;
  const band = scores ? scores.pronunciation >= 80 ? "Good" : scores.pronunciation >= 60 ? "Nearly there" : "Practise again" : "";
  return <div className="practice"><p className="label">FORMATIVE PRONUNCIATION PRACTICE</p><h3>Listen, record and improve</h3><p>Recording begins only when you press Start. Audio is sent to Azure for immediate assessment and is not saved by PW Learning Hub. Results do not affect quiz marks.</p>
    <label>Choose a phrase<select value={target.id} disabled={recording} onChange={event=>{setSelected(event.target.value);setScores(null);setMessage("");}}>{items.map(item=><option key={item.id} value={item.id}>{item.text} — {item.english}</option>)}</select></label>
    <div className="target"><strong>{target.text}</strong><span>{target.english}</span></div><div className="buttons"><button onClick={listen}>🔊 Listen</button><button className="start" disabled={recording} onClick={()=>void start()}>🎙️ Start recording</button><button className="stop" disabled={!recording} onClick={stop}>■ Stop and assess</button></div>
    {message&&<p role="status" className="message">{message}</p>}{scores&&<div className="results"><strong>{band}</strong><div>{Object.entries(scores).map(([label,value])=><span key={label}><b>{value}</b>{label}</span>)}</div><p>Focus on one or two lower scores, listen again, and retry. Accent differences are normal.</p></div>}
    <style jsx>{`.practice{margin-top:24px;padding:22px;border:1px solid #f59e0b;border-radius:18px;background:#fffbeb}.label{color:#b45309;font-size:12px;font-weight:900;letter-spacing:.12em}.practice h3{margin:4px 0;font-size:24px}.practice>p{color:#596579}label{display:grid;gap:7px;font-weight:800}select{max-width:100%;padding:12px;border:1px solid #c4b5fd;border-radius:10px;background:white;font:inherit}.target{display:grid;gap:4px;margin:16px 0;padding:18px;border-radius:13px;background:white}.target strong{font-size:25px;color:#4c1d95}.target span{color:#667085}.buttons{display:flex;gap:10px;flex-wrap:wrap}.buttons button{padding:11px 14px;border:1px solid #d1d5db;border-radius:10px;background:white;font-weight:800}.buttons .start{background:#7c3aed;color:white}.buttons .stop{background:#be123c;color:white}.message{font-weight:700}.results{margin-top:18px;padding:18px;border-radius:14px;background:white}.results>strong{font-size:22px;color:#6d28d9}.results>div{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0}.results span{display:grid;text-align:center;text-transform:capitalize;color:#667085}.results b{font-size:25px;color:#253047}@media(max-width:650px){.results>div{grid-template-columns:repeat(2,1fr)}}`}</style>
  </div>;
}
