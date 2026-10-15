"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { familyQuizFetch } from "@/lib/familyQuizClient";
import type { FamilyQuizAnswer, FamilyQuizQuestion, FamilyQuizSession } from "@/lib/familyQuiz";

export default function FamilyQuizPlayerPage() {
  const router = useRouter();
  const params = useParams<{ sessionId: string }>();
  const sessionId = params.sessionId;
  const [session, setSession] = useState<FamilyQuizSession | null>(null);
  const [question, setQuestion] = useState<FamilyQuizQuestion | null>(null);
  const [myAnswer, setMyAnswer] = useState<FamilyQuizAnswer | null>(null);
  const [answer, setAnswer] = useState("");
  const [userId, setUserId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.replace("/login"); return; }
    setUserId(user.id);
    const { data: sessionData } = await supabase.from("family_quiz_sessions").select("*").eq("id", sessionId).single();
    if (!sessionData) { setError("This quiz room is unavailable."); return; }
    setSession(sessionData as FamilyQuizSession);
    if (sessionData.current_question_id) {
      const [{ data: questionData }, { data: answerData }] = await Promise.all([
        supabase.from("family_quiz_questions").select("*").eq("id", sessionData.current_question_id).single(),
        supabase.from("family_quiz_answers").select("*").eq("question_id", sessionData.current_question_id).eq("user_id", user.id).maybeSingle(),
      ]);
      setQuestion(questionData as FamilyQuizQuestion | null);
      setMyAnswer(answerData as FamilyQuizAnswer | null);
      if (!answerData) setAnswer("");
    } else { setQuestion(null); setMyAnswer(null); }
  }, [router, sessionId]);

  useEffect(() => {
    const initialLoad = window.setTimeout(() => void load(), 0);
    const channel = supabase.channel(`family-quiz-player-${sessionId}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "family_quiz_sessions", filter: `id=eq.${sessionId}` }, () => void load())
      .on("postgres_changes", { event: "*", schema: "public", table: "family_quiz_answers", filter: `session_id=eq.${sessionId}` }, () => void load())
      .subscribe();
    return () => { window.clearTimeout(initialLoad); void supabase.removeChannel(channel); };
  }, [load, sessionId]);

  async function submitAnswer() {
    if (!question || !answer.trim()) return;
    setSubmitting(true); setError("");
    try {
      const result = await familyQuizFetch<{ answer: FamilyQuizAnswer }>("/api/family-quiz/answers", { method: "POST", body: JSON.stringify({ sessionId, questionId: question.id, answer }) });
      setMyAnswer(result.answer);
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Could not submit the answer."); }
    setSubmitting(false);
  }

  if (error && !session) return <main className="page"><h1>{error}</h1><button onClick={() => router.push("/family-quiz")}>Return</button></main>;
  if (!session || !userId) return <main className="page"><h1>Joining live quiz…</h1></main>;

  return <main className="page">
    <header><p>LIVE FAMILY QUIZ</p><h1>{session.title}</h1><span>Room {session.code}</span></header>
    {session.status === "waiting" && <section className="waiting"><span>YOU ARE IN</span><h2>Waiting for the host</h2><p>The first question will appear automatically.</p><div className="pulse">⚡</div></section>}
    {question && session.status !== "finished" && <section><div className="top"><span>Question {question.position + 1}</span><b>{question.marks} {question.marks === 1 ? "mark" : "marks"}</b></div><h2>{question.prompt}</h2>
      {!myAnswer && session.status === "question" && <>{question.type === "multiple-choice" ? <div className="options">{question.options.map(option => <button key={option} className={answer === option ? "selected" : ""} onClick={() => setAnswer(option)}>{option}</button>)}</div> : <textarea rows={question.type === "long-answer" ? 10 : 6} value={answer} onChange={event => setAnswer(event.target.value)} placeholder="Write your answer…"/>}<button className="submit" disabled={!answer.trim() || submitting} onClick={() => void submitAnswer()}>{submitting ? "Submitting and marking…" : "Submit answer →"}</button></>}
      {myAnswer && session.status === "question" && <div className="submitted"><span>✓ ANSWER SUBMITTED</span><h3>Waiting for the host to reveal the answer</h3><p>Your answer: {myAnswer.answer}</p></div>}
      {session.status === "revealed" && <div className="result"><span>{myAnswer?.awarded_marks === null ? "ANSWER RECEIVED" : "YOUR RESULT"}</span><strong>{myAnswer?.awarded_marks === null ? "Review" : `${myAnswer?.awarded_marks ?? 0}/${myAnswer?.max_marks ?? question.marks}`}</strong><p>{myAnswer?.feedback?.summary || "No answer was submitted for this question."}</p>{myAnswer?.feedback?.strengths && myAnswer.feedback.strengths.length > 0 && <div><h3>What went well</h3><ul>{myAnswer.feedback.strengths.map(item => <li key={item}>{item}</li>)}</ul></div>}{myAnswer?.feedback?.improvements && myAnswer.feedback.improvements.length > 0 && <div><h3>How to improve</h3><ul>{myAnswer.feedback.improvements.map(item => <li key={item}>{item}</li>)}</ul></div>}{myAnswer?.feedback?.modelAnswer && <div className="model"><h3>Answer guide</h3><p>{myAnswer.feedback.modelAnswer}</p></div>}<small>Waiting for the host to show the next question…</small></div>}
    </section>}
    {session.status === "finished" && <section className="waiting"><span>QUIZ COMPLETE</span><h2>Well done!</h2><p>The host can see the family results.</p><button className="submit" onClick={() => router.push("/family-quiz")}>Return to Live Family Quiz</button></section>}
    {error && <p className="error">{error}</p>}
    <style jsx>{`
      .page{max-width:820px;width:calc(100% - 28px);margin:24px auto 70px;color:#172033;font-family:Arial,sans-serif}header{padding:22px 25px;border-radius:21px;background:linear-gradient(135deg,#4c1d95,#7c3aed);color:white}header p{margin:0;color:#ddd6fe;font-size:12px;font-weight:900;letter-spacing:.13em}header h1{margin:7px 0;font-size:30px}header span{color:#ede9fe}section{margin-top:16px;padding:25px;border:1px solid #ddd6fe;border-radius:21px;background:white}.top{display:flex;justify-content:space-between;color:#667085}.top span{color:#7c3aed;font-weight:900}section>h2{font-size:clamp(26px,5vw,38px);line-height:1.3}.options{display:grid;gap:11px;margin:22px 0}.options button{padding:16px;text-align:left;border:1px solid #cbd5e1;border-radius:12px;background:white;font:inherit;cursor:pointer}.options button.selected{border-color:#7c3aed;background:#f5f3ff;box-shadow:0 0 0 2px #ddd6fe}textarea{width:100%;box-sizing:border-box;margin:18px 0;padding:15px;border:1px solid #cbd5e1;border-radius:12px;font:inherit;resize:vertical}.submit{padding:14px 19px;border:0;border-radius:12px;background:#7c3aed;color:white;font:inherit;font-weight:900;cursor:pointer}.submit:disabled{opacity:.5}.submitted,.result{margin-top:22px;padding:22px;border-radius:16px;background:#f5f3ff}.submitted>span,.result>span,.waiting>span{color:#7c3aed;font-size:12px;font-weight:900;letter-spacing:.12em}.result>strong{display:block;margin:8px 0;font-size:46px;color:#6d28d9}.result>small{display:block;margin-top:20px;color:#667085}.model{padding:13px;border-radius:11px;background:white}.waiting{text-align:center;padding:55px 24px}.waiting h2{font-size:36px}.pulse{font-size:55px;animation:pulse 1.4s infinite}.error{padding:12px;border-radius:10px;background:#fff1f2;color:#9f1239}@keyframes pulse{50%{transform:scale(1.15);opacity:.65}}
    `}</style>
  </main>;
}
