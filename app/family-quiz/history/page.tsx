"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { familyQuizFetch } from "@/lib/familyQuizClient";

type HistorySummary = {
  id: string; code: string; title: string; status: string; createdAt: string; updatedAt: string;
  questionCount: number; totalMarks: number; reviewNeeded: number;
  players: Array<{ userId: string; displayName: string; score: number; totalMarks: number; answeredCount: number }>;
};

type Pagination = { page: number; pageSize: number; total: number; totalPages: number };

const statusLabel: Record<string, string> = { waiting: "Not started", question: "In progress", revealed: "In progress", finished: "Completed" };

export default function FamilyQuizHistoryPage() {
  const router = useRouter();
  const [sessions, setSessions] = useState<HistorySummary[]>([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, pageSize: 20, total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true); setError("");
    void familyQuizFetch<{ sessions: HistorySummary[]; pagination: Pagination }>(`/api/family-quiz/history?page=${page}`)
      .then(result => { setSessions(result.sessions); setPagination(result.pagination); })
      .catch(reason => setError(reason instanceof Error ? reason.message : "Could not load quiz history."))
      .finally(() => setLoading(false));
  }, [page]);

  return <main className="page">
    <div className="top"><button onClick={() => router.push("/family-quiz/host")}>← Create a quiz</button><button onClick={() => router.push("/family-quiz")}>Live Family Quiz</button></div>
    <p className="eyebrow">HOST RECORDS</p><h1>Quiz History</h1><p className="intro">Review previous family quizzes, scores and answers.</p>
    {loading && <div className="empty"><h2>Loading history…</h2></div>}
    {error && <p className="error">{error}</p>}
    {!loading && !error && sessions.length === 0 && <div className="empty"><span>🗂️</span><h2>No quizzes yet</h2><p>Your completed and active Live Family Quizzes will appear here.</p><button className="primary" onClick={() => router.push("/family-quiz/host")}>Create your first quiz →</button></div>}
    <div className="list">{sessions.map(session => <article key={session.id}>
      <div className="heading"><div><span className={`status ${session.status}`}>{statusLabel[session.status] ?? session.status}</span><h2>{session.title}</h2><p>{new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(session.createdAt))} · Room {session.code}</p></div><div className="count"><b>{session.questionCount}</b><span>questions</span></div></div>
      {session.reviewNeeded > 0 && <p className="review">⚠ {session.reviewNeeded} answer{session.reviewNeeded === 1 ? "" : "s"} need host review</p>}
      <div className="scores">{session.players.length === 0 ? <p>No student joined this quiz.</p> : session.players.map(player => <div key={player.userId}><b>{player.displayName}</b><span>{player.score}/{player.totalMarks} · {player.answeredCount}/{session.questionCount} answered</span></div>)}</div>
      <div className="actions"><button className="primary" onClick={() => router.push(`/family-quiz/history/${session.id}`)}>View full record →</button>{session.status !== "finished" && <button onClick={() => router.push(`/family-quiz/host/${session.id}`)}>Return to room</button>}</div>
    </article>)}</div>
    {!loading && !error && pagination.total > 0 && <nav className="pagination" aria-label="Quiz history pages">
      <button disabled={page <= 1} onClick={() => { setPage(current => Math.max(1, current - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}>← Previous</button>
      <div><b>Page {pagination.page} of {pagination.totalPages}</b><span>{pagination.total} quiz{pagination.total === 1 ? "" : "zes"} in total</span></div>
      <button disabled={page >= pagination.totalPages} onClick={() => { setPage(current => Math.min(pagination.totalPages, current + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Next →</button>
    </nav>}
    <style jsx>{`
      .page{max-width:960px;width:calc(100% - 32px);margin:36px auto 80px;color:#172033;font-family:Arial,sans-serif}.top{display:flex;justify-content:space-between}.top button{border:0;background:transparent;color:#6d28d9;font:inherit;font-weight:900;cursor:pointer}.eyebrow{margin:32px 0 7px;color:#7c3aed;font-size:13px;font-weight:900;letter-spacing:.13em}h1{margin:0;font-size:clamp(38px,6vw,52px)}.intro{color:#667085;font-size:18px}.list{display:grid;gap:16px;margin-top:28px}article{padding:23px;border:1px solid #ddd6fe;border-radius:20px;background:white;box-shadow:0 8px 24px rgba(76,29,149,.06)}.heading{display:flex;justify-content:space-between;gap:18px}.heading h2{margin:9px 0 4px;font-size:25px}.heading p{margin:0;color:#667085}.status{display:inline-block;padding:5px 8px;border-radius:999px;background:#ede9fe;color:#6d28d9;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.07em}.status.finished{background:#dcfce7;color:#166534}.count{text-align:center;padding:10px 14px;border-radius:12px;background:#f5f3ff}.count b,.count span{display:block}.count b{font-size:24px;color:#6d28d9}.count span{font-size:11px;color:#667085}.review{padding:10px;border-radius:9px;background:#fef3c7;color:#92400e;font-weight:800}.scores{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:16px}.scores>div{padding:12px;border-radius:10px;background:#f8fafc}.scores b,.scores span{display:block}.scores span{margin-top:4px;color:#667085;font-size:13px}.actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:18px}.actions button,.empty button,.pagination button{padding:11px 14px;border:1px solid #cbd5e1;border-radius:10px;background:white;font:inherit;font-weight:900;cursor:pointer}.primary{border-color:#7c3aed!important;background:#7c3aed!important;color:white}.empty{margin-top:30px;padding:55px 25px;text-align:center;border:1px dashed #c4b5fd;border-radius:20px;background:#faf5ff}.empty>span{font-size:44px}.error{padding:13px;border-radius:10px;background:#fff1f2;color:#9f1239}.pagination{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:24px;padding:16px;border:1px solid #ddd6fe;border-radius:16px;background:#faf5ff}.pagination div{text-align:center}.pagination b,.pagination span{display:block}.pagination span{margin-top:3px;color:#667085;font-size:13px}.pagination button:disabled{cursor:not-allowed;opacity:.4}@media(max-width:620px){.scores{grid-template-columns:1fr}.heading{align-items:flex-start}.count{padding:8px}.top{gap:12px}.pagination{gap:8px}.pagination button{padding:10px 9px}.pagination span{display:none}}
    `}</style>
  </main>;
}
