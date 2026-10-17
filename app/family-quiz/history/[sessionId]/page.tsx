"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { familyQuizFetch } from "@/lib/familyQuizClient";
import type { FamilyQuizAnswer, FamilyQuizParticipant, FamilyQuizQuestion, FamilyQuizSession } from "@/lib/familyQuiz";

type HistoryDetail = { session: FamilyQuizSession; questions: FamilyQuizQuestion[]; participants: FamilyQuizParticipant[]; answers: FamilyQuizAnswer[] };

function displayAnswer(value: string) {
  try { const parsed = JSON.parse(value) as unknown; return Array.isArray(parsed) ? parsed.join(" · ") : value; } catch { return value; }
}

export default function FamilyQuizHistoryDetailPage() {
  const router = useRouter();
  const params = useParams<{ sessionId: string }>();
  const [detail, setDetail] = useState<HistoryDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    void familyQuizFetch<HistoryDetail>(`/api/family-quiz/history?sessionId=${encodeURIComponent(params.sessionId)}`)
      .then(setDetail)
      .catch(reason => setError(reason instanceof Error ? reason.message : "Could not load this quiz record."))
      .finally(() => setLoading(false));
  }, [params.sessionId]);

  const totalMarks = useMemo(() => detail?.questions.reduce((sum, question) => sum + question.marks, 0) ?? 0, [detail]);
  if (loading) return <main className="fallback"><h1>Loading quiz record…</h1></main>;
  if (error || !detail) return <main className="fallback"><h1>{error || "Quiz record unavailable."}</h1><button onClick={() => router.push("/family-quiz/history")}>Return to history</button></main>;

  return <main className="page">
    <button className="back" onClick={() => router.push("/family-quiz/history")}>← Quiz History</button>
    <header><div><p>LIVE FAMILY QUIZ · RECORD</p><h1>{detail.session.title}</h1><span>{new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "short" }).format(new Date(detail.session.created_at))} · Room {detail.session.code}</span></div><button onClick={() => router.push(`/family-quiz/host/${detail.session.id}`)}>Open host review</button></header>
    <section className="scoreboard"><h2>Scores</h2><div>{detail.participants.map(player => { const playerAnswers = detail.answers.filter(answer => answer.user_id === player.user_id); const score = playerAnswers.reduce((sum, answer) => sum + (answer.awarded_marks ?? 0), 0); const reviews = playerAnswers.filter(answer => answer.status === "needs_review").length; return <article key={player.user_id}><b>{player.display_name}</b><strong>{score}/{totalMarks}</strong><span>{playerAnswers.length}/{detail.questions.length} answered{reviews ? ` · ${reviews} need review` : ""}</span></article>; })}</div></section>
    <section className="questions"><h2>Questions and answers</h2>{detail.questions.map(question => <article className="question" key={question.id}><div className="questionHead"><span>Question {question.position + 1} · {question.type.replaceAll("-", " ")}</span><b>{question.marks} {question.marks === 1 ? "mark" : "marks"}</b></div><h3>{question.prompt}</h3><div className="answers">{detail.participants.map(player => { const answer = detail.answers.find(item => item.question_id === question.id && item.user_id === player.user_id); return <div className={answer?.status === "needs_review" ? "answer review" : "answer"} key={player.user_id}><div className="answerHead"><b>{player.display_name}</b><strong>{answer ? answer.awarded_marks === null ? "Review" : `${answer.awarded_marks}/${answer.max_marks}` : `0/${question.marks}`}</strong></div><p>{answer ? displayAnswer(answer.answer) : "No answer submitted."}</p>{answer?.feedback?.summary && <small>{answer.feedback.summary}</small>}{answer?.feedback?.parentComment && <blockquote><b>Host comment</b><br/>{answer.feedback.parentComment}</blockquote>}</div>; })}</div></article>)}</section>
    <style jsx>{`
      .page{max-width:1050px;width:calc(100% - 32px);margin:30px auto 80px;color:#172033;font-family:Arial,sans-serif}.back{margin-bottom:18px;border:0;background:transparent;color:#6d28d9;font:inherit;font-weight:900;cursor:pointer}header{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:25px 28px;border-radius:22px;background:linear-gradient(135deg,#4c1d95,#7c3aed);color:white}header p{margin:0;color:#ddd6fe;font-size:12px;font-weight:900;letter-spacing:.12em}header h1{margin:7px 0;font-size:34px}header span{color:#ede9fe}header button{padding:11px 14px;border:0;border-radius:10px;background:white;color:#5b21b6;font:inherit;font-weight:900;cursor:pointer}.scoreboard,.questions{margin-top:18px;padding:23px;border:1px solid #e2e8f0;border-radius:19px;background:white}.scoreboard>div{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.scoreboard article{padding:15px;border-radius:12px;background:#f5f3ff}.scoreboard b,.scoreboard strong,.scoreboard span{display:block}.scoreboard strong{margin:5px 0;color:#6d28d9;font-size:28px}.scoreboard span{color:#667085;font-size:13px}.question{padding:20px 0;border-top:1px solid #e2e8f0}.question:first-of-type{border-top:0}.questionHead,.answerHead{display:flex;justify-content:space-between;gap:12px}.questionHead{color:#667085;text-transform:capitalize}.question h3{font-size:23px;line-height:1.35}.answers{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.answer{padding:14px;border-radius:11px;background:#f8fafc}.answer.review{border:1px solid #f59e0b;background:#fffbeb}.answer p{margin:8px 0}.answer small{display:block;color:#667085;line-height:1.45}.answerHead strong{color:#6d28d9}blockquote{margin:12px 0 0;padding:10px;border-left:4px solid #7c3aed;border-radius:7px;background:white;color:#334155}.fallback{max-width:700px;margin:70px auto;font-family:Arial,sans-serif}.fallback button{padding:10px}@media(max-width:700px){header{align-items:flex-start;flex-direction:column}.scoreboard>div,.answers{grid-template-columns:1fr}}
    `}</style>
  </main>;
}
