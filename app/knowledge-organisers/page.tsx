"use client";

import { useRouter } from "next/navigation";

export default function KnowledgeOrganisersPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button className="back" onClick={() => router.push("/subjects")}>← Back to subjects</button>
      <p className="eyebrow">PW LEARNING HUB</p>
      <h1>Knowledge Organisers</h1>
      <p className="subtitle">Learn each section as it is taught, then revise with mind maps, flashcards and quizzes.</p>

      <button className="yearCard" onClick={() => router.push("/knowledge-organisers/year8")}>
        <span className="badge">Y8</span>
        <span><strong>Year 8</strong><small>Autumn, Spring and Summer terms</small></span>
        <b>Choose subjects →</b>
      </button>

      <style jsx>{`
        .page{max-width:1050px;width:calc(100% - 40px);margin:48px auto 80px;color:#253047;font-family:Arial,sans-serif}.back{border:0;background:transparent;color:#c2410c;font-size:17px;font-weight:800;padding:0;cursor:pointer}.eyebrow{margin:32px 0 8px;color:#c2410c;font-size:13px;font-weight:900;letter-spacing:.14em}h1{margin:0;font-size:clamp(38px,6vw,58px);line-height:1.05}.subtitle{max-width:760px;color:#667085;font-size:20px;line-height:1.6}.yearCard{width:100%;margin-top:26px;padding:28px;display:flex;align-items:center;gap:22px;text-align:left;border:1px solid #fed7aa;border-radius:24px;background:linear-gradient(135deg,#fff7ed,#ffffff);cursor:pointer;color:inherit;box-shadow:0 10px 30px rgba(154,52,18,.08)}.badge{width:78px;height:78px;display:grid;place-items:center;border-radius:22px;background:#ea580c;color:white;font-size:28px;font-weight:900}.yearCard strong{display:block;font-size:30px}.yearCard small{display:block;margin-top:5px;color:#667085;font-size:17px}.yearCard b{margin-left:auto;color:#c2410c;font-size:17px}@media(max-width:620px){.yearCard{align-items:flex-start;flex-wrap:wrap}.yearCard b{width:100%;margin-left:100px}.badge{width:72px;height:72px}}
      `}</style>
    </main>
  );
}
