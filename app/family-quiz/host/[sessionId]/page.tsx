"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { familyQuizFetch } from "@/lib/familyQuizClient";
import type { FamilyQuizAnswer, FamilyQuizParticipant, FamilyQuizQuestion, FamilyQuizSession } from "@/lib/familyQuiz";

type AnswerKey = { answer: string; marking_points: string[]; guidance: string };

function displayAnswer(value: string) {
  try { const parsed = JSON.parse(value) as unknown; return Array.isArray(parsed) ? parsed.join(" · ") : value; } catch { return value; }
}

function ReviewAnswerEditor({ answer, onSaved }: { answer: FamilyQuizAnswer; onSaved: () => void }) {
  const [mark, setMark] = useState(answer.awarded_marks === null ? "" : String(answer.awarded_marks));
  const [comment, setComment] = useState(answer.feedback?.parentComment ?? "");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMark(answer.awarded_marks === null ? "" : String(answer.awarded_marks));
    setComment(answer.feedback?.parentComment ?? "");
  }, [answer.awarded_marks, answer.feedback?.parentComment]);

  async function saveReview() {
    if (!mark.trim()) { setMessage(`Enter a whole-number mark from 0 to ${answer.max_marks}.`); return; }
    const awardedMarks = Number(mark);
    if (!Number.isInteger(awardedMarks) || awardedMarks < 0 || awardedMarks > answer.max_marks) {
      setMessage(`Enter a whole-number mark from 0 to ${answer.max_marks}.`);
      return;
    }
    setSaving(true); setMessage("");
    try {
      await familyQuizFetch("/api/family-quiz/answers/review", {
        method: "POST",
        body: JSON.stringify({ answerId: answer.id, awardedMarks, parentComment: comment }),
      });
      setMessage("Saved ✓");
      onSaved();
    } catch (reason) {
      setMessage(reason instanceof Error ? reason.message : "Could not save the review.");
    }
    setSaving(false);
  }

  return <><div className="reviewEditor">
    <label>Host mark <span>(0–{answer.max_marks})</span><input inputMode="numeric" min={0} max={answer.max_marks} step={1} type="number" value={mark} onChange={event => setMark(event.target.value)}/></label>
    <label>Comment for student <span>(optional)</span><textarea rows={2} maxLength={1000} value={comment} onChange={event => setComment(event.target.value)} placeholder="Add an encouraging comment…"/></label>
    <div><button disabled={saving} onClick={() => void saveReview()}>{saving ? "Saving…" : answer.feedback?.reviewedByHost ? "Update review" : "Save host review"}</button>{message && <small>{message}</small>}</div>
  </div><style jsx>{`
    .reviewEditor{grid-column:1/-1;display:grid;grid-template-columns:minmax(120px,160px) minmax(260px,1fr);gap:12px;padding-top:14px;border-top:1px solid #e2e8f0;text-align:left}
    label{font-size:13px;font-weight:800;color:#334155}label span{color:#667085;font-weight:400}
    input,textarea{display:block;width:100%;box-sizing:border-box;margin-top:6px;padding:10px;border:1px solid #cbd5e1;border-radius:9px;background:white;color:#172033;font:inherit}
    textarea{min-height:64px;resize:vertical}.reviewEditor>div{grid-column:1/-1;display:flex;align-items:center;gap:10px}
    button{padding:10px 14px;border:0;border-radius:9px;background:#6d28d9;color:white;font:inherit;font-weight:900;cursor:pointer}button:disabled{opacity:.55}
    small{color:#667085}@media(max-width:650px){.reviewEditor{grid-template-columns:1fr}.reviewEditor>div{grid-column:1}}
  `}</style></>;
}

export default function FamilyQuizHostRoomPage() {
  const router = useRouter();
  const params = useParams<{ sessionId: string }>();
  const sessionId = params.sessionId;
  const [session, setSession] = useState<FamilyQuizSession | null>(null);
  const [questions, setQuestions] = useState<FamilyQuizQuestion[]>([]);
  const [participants, setParticipants] = useState<FamilyQuizParticipant[]>([]);
  const [answers, setAnswers] = useState<FamilyQuizAnswer[]>([]);
  const [key, setKey] = useState<AnswerKey | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const [{ data: sessionData, error: sessionError }, { data: questionData }, { data: participantData }, { data: answerData }] = await Promise.all([
      supabase.from("family_quiz_sessions").select("*").eq("id", sessionId).single(),
      supabase.from("family_quiz_questions").select("*").eq("session_id", sessionId).order("position"),
      supabase.from("family_quiz_participants").select("*").eq("session_id", sessionId).order("joined_at"),
      supabase.from("family_quiz_answers").select("*").eq("session_id", sessionId).order("submitted_at"),
    ]);
    if (sessionError || !sessionData) { setError("This room is unavailable."); return; }
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || user.id !== sessionData.host_id) { router.replace("/family-quiz"); return; }
    setSession(sessionData as FamilyQuizSession);
    setQuestions((questionData ?? []) as FamilyQuizQuestion[]);
    setParticipants((participantData ?? []) as FamilyQuizParticipant[]);
    setAnswers((answerData ?? []) as FamilyQuizAnswer[]);
  }, [router, sessionId]);

  useEffect(() => {
    const initialLoad = window.setTimeout(() => void load(), 0);
    const channel = supabase.channel(`family-quiz-host-${sessionId}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "family_quiz_sessions", filter: `id=eq.${sessionId}` }, () => void load())
      .on("postgres_changes", { event: "*", schema: "public", table: "family_quiz_participants", filter: `session_id=eq.${sessionId}` }, () => void load())
      .on("postgres_changes", { event: "*", schema: "public", table: "family_quiz_answers", filter: `session_id=eq.${sessionId}` }, () => void load())
      .subscribe();
    return () => { window.clearTimeout(initialLoad); void supabase.removeChannel(channel); };
  }, [load, sessionId]);

  const current = questions.find(question => question.id === session?.current_question_id) ?? null;
  const currentAnswers = answers.filter(answer => answer.question_id === current?.id);
  const playerParticipants = useMemo(() => participants.filter(participant => participant.user_id !== session?.host_id), [participants, session?.host_id]);
  const answersNeedingReview = answers.filter(answer => answer.status === "needs_review");

  async function showNextQuestion() {
    if (!session) return;
    const nextIndex = session.current_index + 1;
    if (nextIndex >= questions.length) return finishQuiz();
    setKey(null);
    const { error: updateError } = await supabase.from("family_quiz_sessions").update({ current_index: nextIndex, current_question_id: questions[nextIndex].id, status: "question" }).eq("id", sessionId);
    if (updateError) setError(updateError.message);
  }

  async function revealAnswer() {
    if (!current) return;
    const { data, error: keyError } = await supabase.from("family_quiz_answer_keys").select("answer,marking_points,guidance").eq("question_id", current.id).single();
    if (keyError) { setError(keyError.message); return; }
    setKey(data as AnswerKey);
    const { error: updateError } = await supabase.from("family_quiz_sessions").update({ status: "revealed" }).eq("id", sessionId);
    if (updateError) setError(updateError.message);
  }

  async function finishQuiz() {
    const { error: updateError } = await supabase.from("family_quiz_sessions").update({ status: "finished" }).eq("id", sessionId);
    if (updateError) setError(updateError.message);
  }

  if (error && !session) return <main className="fallback"><h1>{error}</h1><button onClick={() => router.push("/family-quiz")}>Return</button></main>;
  if (!session) return <main className="fallback"><h1>Loading live room…</h1></main>;

  return <main className="page">
    <header><div><p>LIVE FAMILY QUIZ · HOST</p><h1>{session.title}</h1></div><div className="code"><span>ROOM CODE</span><strong>{session.code}</strong></div></header>
    <div className="layout">
      <aside><h2>Players</h2>{playerParticipants.length === 0 ? <p>Waiting for Greta and Mathis to join…</p> : playerParticipants.map(player => <div className="player" key={player.user_id}><b>{player.display_name}</b><span>{currentAnswers.some(answer => answer.user_id === player.user_id) ? "✓ Submitted" : session.status === "question" ? "Answering…" : "Ready"}</span></div>)}<p className="join">Join at:<br/><b>{typeof window !== "undefined" ? `${window.location.origin}/family-quiz` : "/family-quiz"}</b></p></aside>
      <section>
        {session.status === "waiting" && <div className="centre"><span>ROOM READY</span><h2>{questions.length} questions prepared</h2><p>Ask each player to sign in on their iPad and enter room code <b>{session.code}</b>.</p><button className="primary" onClick={() => void showNextQuestion()}>Show question 1 →</button></div>}
        {current && session.status !== "finished" && <><div className="questionTop"><span>Question {current.position + 1} of {questions.length}</span><b>{current.marks} {current.marks === 1 ? "mark" : "marks"}</b></div><h2 className="prompt">{current.prompt}</h2>{current.type === "multiple-choice" && <div className="options">{current.options.map(option => <div key={option}>{option}</div>)}</div>}
          <div className="responses"><h3>Responses ({currentAnswers.length}/{playerParticipants.length})</h3>{currentAnswers.length === 0 ? <p>No answers submitted yet.</p> : currentAnswers.map(answer => <article className={answer.status === "needs_review" ? "needsReview" : ""} key={answer.id}><div><b>{answer.display_name}</b>{answer.status === "needs_review" && <em>HOST REVIEW NEEDED</em>}<p>{displayAnswer(answer.answer)}</p></div><strong>{answer.awarded_marks === null ? "Review" : `${answer.awarded_marks}/${answer.max_marks}`}</strong>{session.status === "revealed" && answer.feedback?.summary && <small>{answer.feedback.summary}</small>}{session.status === "revealed" && <ReviewAnswerEditor answer={answer} onSaved={() => void load()}/>}</article>)}</div>
          {session.status === "question" ? <div className="actions"><button className="primary" onClick={() => void revealAnswer()}>Reveal answers</button><button onClick={() => void finishQuiz()}>End quiz</button></div> : <div className="reveal"><h3>Answer guide</h3>{current.type === "multiple-choice" && !current.interaction ? <p><b>{key?.answer || "Loading…"}</b></p> : <ul>{(key?.marking_points ?? []).map(point => <li key={point}>{point}</li>)}</ul>}<div className="actions"><button className="primary" onClick={() => void showNextQuestion()}>{current.position + 1 === questions.length ? "Finish quiz →" : "Next question →"}</button><button onClick={() => void finishQuiz()}>End now</button></div></div>}
        </>}
        {session.status === "finished" && <div className="centre"><span>QUIZ COMPLETE</span><h2>Final scores</h2>{answersNeedingReview.length > 0 && <p className="reviewNotice">{answersNeedingReview.length} answer{answersNeedingReview.length === 1 ? "" : "s"} still need host review. Scores update when you save each mark.</p>}{playerParticipants.map(player => { const playerAnswers = answers.filter(answer => answer.user_id === player.user_id); const score = playerAnswers.reduce((sum, answer) => sum + (answer.awarded_marks ?? 0), 0); const maximum = playerAnswers.reduce((sum, answer) => sum + answer.max_marks, 0); return <div className="score" key={player.user_id}><b>{player.display_name}</b><strong>{score}/{maximum}</strong></div>; })}{answers.length > 0 && <div className="allReviews"><h3>Review all answers</h3>{answers.map(answer => { const answerQuestion = questions.find(question => question.id === answer.question_id); return <article className={answer.status === "needs_review" ? "needsReview" : ""} key={answer.id}><div className="reviewHeading"><div><b>{answer.display_name}</b><small>Question {(answerQuestion?.position ?? 0) + 1}: {answerQuestion?.prompt}</small></div><strong>{answer.awarded_marks === null ? "Review" : `${answer.awarded_marks}/${answer.max_marks}`}</strong></div><p className="studentAnswer">{displayAnswer(answer.answer)}</p><ReviewAnswerEditor answer={answer} onSaved={() => void load()}/></article>; })}</div>}<button className="primary" onClick={() => router.push("/family-quiz/host")}>Create another quiz</button></div>}
      </section>
    </div>{error && <p className="error">{error}</p>}
    <style jsx>{`
      .page{max-width:1200px;width:calc(100% - 32px);margin:30px auto 70px;color:#172033;font-family:Arial,sans-serif}header{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:25px 30px;border-radius:24px;background:linear-gradient(135deg,#4c1d95,#7c3aed);color:white}header p{margin:0;color:#ddd6fe;font-size:12px;font-weight:900;letter-spacing:.12em}header h1{margin:6px 0 0;font-size:34px}.code{text-align:center;padding:10px 20px;border-radius:15px;background:rgba(255,255,255,.14)}.code span,.code strong{display:block}.code span{font-size:11px;letter-spacing:.12em}.code strong{font-size:32px;letter-spacing:.14em}.layout{display:grid;grid-template-columns:290px 1fr;gap:18px;margin-top:18px}aside,section{padding:24px;border:1px solid #e2e8f0;border-radius:20px;background:white}aside h2{margin-top:0}.player{padding:13px;margin:10px 0;border-radius:12px;background:#f5f3ff}.player b,.player span{display:block}.player span{margin-top:4px;color:#6d28d9;font-size:13px}.join{margin-top:24px;color:#667085;overflow-wrap:anywhere}.questionTop{display:flex;justify-content:space-between;color:#667085}.prompt{font-size:30px;line-height:1.3}.options{display:grid;grid-template-columns:1fr 1fr;gap:10px}.options div{padding:14px;border:1px solid #ddd6fe;border-radius:12px;background:#faf5ff}.responses{margin-top:26px}.responses article{display:grid;grid-template-columns:1fr auto;gap:8px;padding:15px;margin-top:10px;border-radius:12px;background:#f8fafc}.responses article.needsReview,.allReviews article.needsReview{border:1px solid #f59e0b;background:#fffbeb}.responses article p{margin:4px 0}.responses article em{display:inline-block;margin:5px 0;padding:4px 7px;border-radius:6px;background:#fef3c7;color:#92400e;font-size:10px;font-style:normal;font-weight:900;letter-spacing:.07em}.responses article>strong{font-size:22px;color:#6d28d9}.responses article>small{grid-column:1/-1;color:#667085}.reviewEditor{grid-column:1/-1;display:grid;grid-template-columns:130px 1fr;gap:10px;padding-top:12px;border-top:1px solid #e2e8f0;text-align:left}.reviewEditor label{font-size:13px;font-weight:800}.reviewEditor label span{color:#667085;font-weight:400}.reviewEditor input,.reviewEditor textarea{display:block;width:100%;box-sizing:border-box;margin-top:5px;padding:9px;border:1px solid #cbd5e1;border-radius:8px;font:inherit}.reviewEditor>div{grid-column:1/-1;display:flex;align-items:center;gap:10px}.reviewEditor button{padding:9px 12px;border:0;border-radius:8px;background:#6d28d9;color:white;font-weight:900;cursor:pointer}.reviewEditor button:disabled{opacity:.55}.reviewEditor small{color:#667085}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.actions button,.primary{padding:12px 17px;border:1px solid #cbd5e1;border-radius:11px;background:white;font:inherit;font-weight:900;cursor:pointer}.primary{border-color:#7c3aed!important;background:#7c3aed!important;color:white}.reveal{margin-top:22px;padding:18px;border-radius:14px;background:#ecfdf5}.centre{text-align:center;padding:50px 20px}.centre>span{color:#7c3aed;font-weight:900;letter-spacing:.12em}.centre h2{font-size:34px}.score{display:flex;justify-content:space-between;max-width:460px;margin:10px auto;padding:16px;border-radius:12px;background:#f5f3ff;font-size:22px}.reviewNotice{max-width:600px;margin:14px auto;padding:12px;border-radius:10px;background:#fef3c7;color:#92400e;font-weight:800}.allReviews{margin:30px auto;max-width:760px;text-align:left}.allReviews article{margin:12px 0;padding:15px;border:1px solid #e2e8f0;border-radius:13px;background:#f8fafc}.reviewHeading{display:flex;justify-content:space-between;gap:12px}.reviewHeading small{display:block;margin-top:4px;color:#667085}.reviewHeading>strong{color:#6d28d9;font-size:20px}.studentAnswer{padding:10px;border-radius:8px;background:white}.error{padding:12px;border-radius:10px;background:#fff1f2;color:#9f1239}.fallback{max-width:700px;margin:70px auto;font-family:Arial,sans-serif}@media(max-width:760px){header{align-items:flex-start}.layout{grid-template-columns:1fr}.options{grid-template-columns:1fr}.prompt{font-size:25px}.reviewEditor{grid-template-columns:1fr}.reviewEditor>div{grid-column:1}.centre{padding:34px 0}}
    `}</style>
  </main>;
}
