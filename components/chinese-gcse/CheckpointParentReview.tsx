"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {createClient} from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db = url && key ? createClient(url, key) : null;

type Student = {id: string; student: string};
type Question = {id: string; q: string; options: string[]};
type ListeningClip = {id: string; questions: Question[]};
type SpeakingTask = {id: string; title: string; q: string; points: string[]; image?: string};
type TranslationTask = {id: string; direction: string; q: string; example: string};
type WritingTask = {q: string; points: string[]};
type Word = {traditional: string; english: string};
type RecordData = {
  answers: Record<string, unknown>;
  submitted_result: {readingCorrect: number; listeningCorrect: number; objectiveCorrect: number; objectiveTotal: number} | null;
  submitted_at: string | null;
  parent_score: number | null;
  parent_notes: string | null;
  reviewed_at: string | null;
};
type Evidence = {
  id: string;
  kind: string;
  task_id: string;
  object_path: string;
  ai_feedback?: {transcription: string; provisional_score: number; score_reason: string; strengths: string[]; improvements: string[]};
};

type Props = {
  checkpointId: "weeks1-4" | "weeks5-8";
  title: string;
  wordCount: number;
  confirmRpc: "ch3_confirm_checkpoint" | "ch3_confirm_checkpoint2";
  listeningEndpoint: string;
  words: readonly Word[];
  readingText: string;
  reading: Question[];
  readingAnswers: number[];
  listening: ListeningClip[];
  listeningAnswers: number[];
  speaking: SpeakingTask[];
  translations: TranslationTask[];
  writing: WritingTask;
};

const panel = {background: "#fff", padding: 22, borderRadius: 16, marginTop: 18, border: "1px solid #d8e0e6"};
const subpanel = {padding: 16, borderRadius: 12, background: "#f7fafc", margin: "14px 0"};
const button = {padding: "10px 16px", borderRadius: 9, border: "1px solid #9aa9b5", background: "white", cursor: "pointer"};

export default function CheckpointParentReview(props: Props) {
  const [students, setStudents] = useState<Student[]>([]);
  const [selected, setSelected] = useState("");
  const [record, setRecord] = useState<RecordData | null>(null);
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [message, setMessage] = useState("正在檢查家長權限…");
  const [score, setScore] = useState(0);
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);
  const [authorised, setAuthorised] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [listeningBusy, setListeningBusy] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        if (!db) throw Error("Supabase 未設定");
        const {data: {user}} = await db.auth.getUser();
        if (!user) throw Error("請先登入 Daddy");
        const {data: profile} = await db.from("profiles").select("role").eq("id", user.id).maybeSingle();
        if (profile?.role !== "parent") throw Error("只供已授權家長使用");
        const {data: links, error: linkError} = await db.from("parent_student_links").select("student_id").eq("parent_id", user.id);
        if (linkError) throw Error(linkError.message);
        const ids = (links ?? []).map(link => link.student_id);
        if (!ids.length) throw Error("尚未連結學生");
        const {data: children, error: childError} = await db.from("profiles").select("id,student").in("id", ids);
        if (childError) throw Error(childError.message);
        if (active) {
          setAuthorised(true);
          setStudents(children ?? []);
          setSelected(children?.[0]?.id ?? "");
          setMessage("已驗證家長身份");
        }
      } catch (error) {
        if (active) setMessage(error instanceof Error ? error.message : "載入失敗");
      }
    })();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!selected || !db) return;
    let active = true;
    (async () => {
      const [{data, error}, {data: media, error: mediaError}] = await Promise.all([
        db.from("chinese_stage3_checkpoints").select("answers,submitted_result,submitted_at,parent_score,parent_notes,reviewed_at").eq("user_id", selected).eq("checkpoint_id", props.checkpointId).maybeSingle(),
        db.from("chinese_stage3_checkpoint_media").select("id,kind,task_id,object_path,ai_feedback").eq("user_id", selected).eq("checkpoint_id", props.checkpointId),
      ]);
      if (active) {
        setEvidence(media ?? []);
        setRecord((data ?? null) as RecordData | null);
        setScore(data?.parent_score ?? 0);
        setNotes(data?.parent_notes ?? "");
        setMessage(error || mediaError ? `讀取失敗：${error?.message ?? mediaError?.message}` : "已載入 Checkpoint");
      }
    })();
    return () => { active = false; };
  }, [selected, props.checkpointId]);

  async function playClip(clipId: string) {
    if (!db || listeningBusy) return;
    setListeningBusy(clipId);
    try {
      const {data: {session}} = await db.auth.getSession();
      if (!session) throw Error("請重新登入 Daddy");
      const response = await fetch(props.listeningEndpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${session.access_token}`},
        body: JSON.stringify({clipId}),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw Error(body.error ?? "廣東話錄音未能播放");
      }
      const source = URL.createObjectURL(await response.blob());
      const audio = new Audio(source);
      audio.onended = () => URL.revokeObjectURL(source);
      await audio.play();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "廣東話錄音未能播放");
    } finally {
      setListeningBusy("");
    }
  }

  async function confirm() {
    if (!db || !selected || busy || !record?.submitted_at || record.reviewed_at) return;
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      setMessage("最終分數必須為 0–100 整數");
      return;
    }
    if (!window.confirm("家長確認後將鎖定最終分數。確認？")) return;
    setBusy(true);
    const {error} = await db.rpc(props.confirmRpc, {p_student_id: selected, p_score: score, p_notes: notes});
    if (error) setMessage(`覆核失敗：${error.message}`);
    else {
      setMessage("家長覆核已儲存");
      setRecord({...record, parent_score: score, parent_notes: notes, reviewed_at: new Date().toISOString()});
    }
    setBusy(false);
  }

  async function viewEvidence(path: string) {
    if (!db) return;
    const {data, error} = await db.storage.from("chinese-checkpoint-private").createSignedUrl(path, 90);
    if (error || !data) {
      setMessage(`無法開啟原稿或錄音：${error?.message ?? "未知錯誤"}`);
      return;
    }
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  }

  const answers = record?.answers ?? {};
  const dictation = answers.dictation as Record<string, string> | undefined;

  return <main style={{maxWidth: 980, margin: "30px auto", padding: "0 18px 90px", lineHeight: 1.7, color: "#183047"}}>
    <Link href="/chinese-gcse/parent">← 返回家長管理中心</Link>
    <h1>{props.title} · Daddy 家長覆核</h1>
    <p role="status" style={{background: "#eef6f3", padding: 12, borderRadius: 9}}>{message}</p>

    {authorised && <section style={{...panel, background: "#fff9e8", borderColor: "#e4c86e"}}>
      <h2 style={{marginTop: 0}}>Daddy 私人試題預覽</h2>
      <p>只供家長預先檢查題目；不會解鎖學生 Checkpoint，也不會建立或修改任何成績。</p>
      <button style={{...button, background: "#173047", color: "white"}} onClick={() => setShowPreview(value => !value)}>
        {showPreview ? "收起完整試題" : "預覽完整試題"}
      </button>
      {showPreview && <div style={{marginTop: 18}}>
        <label style={{display: "inline-flex", gap: 8, alignItems: "center", padding: "8px 12px", background: "#fff", borderRadius: 8}}>
          <input type="checkbox" checked={showAnswers} onChange={event => setShowAnswers(event.target.checked)}/>
          顯示參考答案／評分重點
        </label>

        <div style={subpanel}>
          <h3>1. 詞彙手寫（{props.wordCount} 詞）</h3>
          <p>學生看到英文後，在紙上寫出繁體中文。</p>
          <ol style={{columns: "220px", paddingLeft: 28}}>{props.words.map((word, index) => <li key={`${word.english}-${index}`}>{word.english}{showAnswers && <strong> → {word.traditional}</strong>}</li>)}</ol>
        </div>

        <div style={subpanel}>
          <h3>2. Reading</h3>
          <p lang="zh-Hant" style={{background: "white", padding: 14, borderRadius: 8}}>{props.readingText}</p>
          {props.reading.map((question, index) => <div key={question.id} style={{margin: "16px 0"}}>
            <strong>{index + 1}. {question.q}</strong>
            <ol type="A">{question.options.map((option, optionIndex) => <li key={option}>{option}{showAnswers && props.readingAnswers[index] === optionIndex && <strong> ✓</strong>}</li>)}</ol>
          </div>)}
        </div>

        <div style={subpanel}>
          <h3>3. Cantonese Listening</h3>
          <p>按播放鍵聆聽廣東話錄音；逐字稿不會顯示，以保留測驗效度。</p>
          {props.listening.map((clip, clipIndex) => <div key={clip.id} style={{margin: "18px 0", paddingBottom: 8, borderBottom: "1px solid #d8e0e6"}}>
            <h4>Clip {clipIndex + 1}</h4>
            <button style={button} disabled={!!listeningBusy} onClick={() => void playClip(clip.id)}>{listeningBusy === clip.id ? "載入中…" : "▶ 播放廣東話"}</button>
            {clip.questions.map((question, questionIndex) => {
              const answerIndex = props.listening.slice(0, clipIndex).reduce((total, item) => total + item.questions.length, 0) + questionIndex;
              return <div key={question.id} style={{margin: "14px 0"}}><strong>{answerIndex + 1}. {question.q}</strong><ol type="A">{question.options.map((option, optionIndex) => <li key={option}>{option}{showAnswers && props.listeningAnswers[answerIndex] === optionIndex && <strong> ✓</strong>}</li>)}</ol></div>;
            })}
          </div>)}
        </div>

        <div style={subpanel}>
          <h3>4. Cantonese Speaking</h3>
          {props.speaking.map(task => <div key={task.id} style={{margin: "16px 0"}}><strong>{task.title}</strong>{task.image && <a href={task.image} target="_blank" rel="noreferrer" title="按一下查看完整圖片"><Image src={task.image} alt={`${task.title} assessment scene`} width={1448} height={1086} style={{display:"block",width:"100%",height:"auto",objectFit:"contain",borderRadius:12,margin:"12px 0",border:"1px solid #d8e0e6"}}/></a>}<p>{task.q}</p>{showAnswers && <ul>{task.points.map(point => <li key={point}>{point}</li>)}</ul>}</div>)}
        </div>

        <div style={subpanel}>
          <h3>5. Translation</h3>
          {props.translations.map((task, index) => <div key={task.id} style={{margin: "16px 0"}}><strong>{index + 1}. {task.direction}</strong><p>{task.q}</p>{showAnswers && <p style={{background: "white", padding: 10, borderRadius: 8}}><strong>參考答案：</strong>{task.example}</p>}</div>)}
        </div>

        <div style={subpanel}>
          <h3>6. Handwritten Writing</h3>
          <p>{props.writing.q}</p>
          {showAnswers && <><strong>評分重點：</strong><ul>{props.writing.points.map(point => <li key={point}>{point}</li>)}</ul></>}
        </div>
      </div>}
    </section>}

    <h2>學生作答記錄</h2>
    <div style={{display: "flex", gap: 10}}>{students.map(student => <button key={student.id} onClick={() => setSelected(student.id)} style={{...button, background: selected === student.id ? "#d7eee4" : "white"}}>{student.student}</button>)}</div>
    {!record ? <p>此學生尚未開始 Checkpoint。</p> : <div style={panel}>
      <h2>{record.submitted_at ? "已正式提交" : "草稿（不能覆核）"}</h2>
      <p>閱讀：{record.submitted_result?.readingCorrect ?? "—"}/4　聆聽：{record.submitted_result?.listeningCorrect ?? "—"}/6</p>
      <p>詞彙：{Object.values(dictation ?? {}).filter(value => value === "correct").length}/{props.wordCount} 自評寫對；已標記 {Object.keys(dictation ?? {}).length} 個</p>
      <div style={{padding: 12, background: "#f5f8fb", borderRadius: 8}}><strong>建議人工評分準則（100 分）</strong><p>詞彙手寫 20 · Reading 20 · Listening 20 · Speaking 20 · Translation 10 · Writing 10。請先核對原稿、錄音及 AI 暫評，再輸入最終分數；這不是 Pearson 官方 GCSE 評級。</p></div>
      <h3>翻譯原答案</h3>
      {Object.entries((answers.translation ?? {}) as Record<string, string>).map(([task, value]) => <p key={task}><strong>{task}：</strong>{value}</p>)}
      <h3>口說練習記錄</h3>
      {Object.entries((answers.speaking ?? {}) as Record<string, string>).map(([task, value]) => <p key={task}><strong>{task}：</strong>{value}</p>)}
      <p>手寫作文：{answers.writingAcknowledged ? "學生表示已完成紙本" : "未確認完成"}。請實際檢查紙本原稿後評分。</p>
      <h3>私人原稿及口說錄音</h3>
      {evidence.length === 0 ? <p>尚未上載</p> : evidence.map(item => <p key={item.id}><button style={button} onClick={() => void viewEvidence(item.object_path)}>{item.kind === "speaking" ? "▶ 重播粵語錄音" : item.kind === "writing" ? "查看手寫作文" : item.kind === "dictation" ? `查看 ${props.wordCount} 詞默寫原稿` : "查看翻譯原稿"} · {item.task_id}</button>{item.ai_feedback && <span> AI 暫評 {item.ai_feedback.provisional_score}/10 · 辨識：{item.ai_feedback.transcription} · {item.ai_feedback.score_reason}</span>}</p>)}
      {record.reviewed_at ? <div style={{padding: 15, background: "#edf8f2"}}>已確認：{record.parent_score}/100<p>{record.parent_notes}</p></div> : record.submitted_at ? <div>
        <label>最終綜合分數（0–100）<input type="number" min={0} max={100} step={1} value={score} onChange={event => setScore(Number(event.target.value))} style={{display: "block", padding: 10, width: 110, margin: "8px 0"}}/></label>
        <label>評語／改進建議<textarea rows={5} value={notes} onChange={event => setNotes(event.target.value)} style={{display: "block", width: "100%", border: "1px solid #bbb", padding: 10, margin: "8px 0 18px"}}/></label>
        <button disabled={busy} onClick={() => void confirm()} style={{padding: "12px 18px", background: "#166b5c", color: "#fff", borderRadius: 9}}>{busy ? "正在儲存" : "確認家長最終評分（鎖定）"}</button>
      </div> : null}
    </div>}
  </main>;
}
