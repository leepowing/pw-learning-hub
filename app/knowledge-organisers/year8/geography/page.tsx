"use client";

import Link from "next/link";
import { getKnowledgeOrganisers } from "@/data/knowledgeOrganisers/registry";

export default function YearEightGeographyPage() {
  const organisers = getKnowledgeOrganisers(8, "Geography");

  return (
    <main className="page">
      <Link className="back" href="/knowledge-organisers/year8">← Back to Year 8 subjects</Link>
      <p className="eyebrow">YEAR 8 · GEOGRAPHY</p>
      <h1>Geography Knowledge Organisers</h1>

      <section className="revision">
        <span>EXAM REVISION</span>
        <h2>Cross-Chapter Quiz</h2>
        <p>
          Build a quiz from every Geography section already marked as taught. Practise
          multiple choice, short, long, interactive map and data questions, or a mixture.
        </p>
        <Link className="button revisionButton" href="/knowledge-organisers/year8/geography/revision-quiz">
          Create revision quiz →
        </Link>
      </section>

      <div className="terms">
        {organisers.map(organiser => (
          <section key={organiser.id}>
            <span>{organiser.term} Term</span>
            <h2>{organiser.title}</h2>
            <p>{organiser.introduction}</p>
            <p className="counts">
              {organiser.sections.length} sections · {organiser.flashcards.length} flashcards · {organiser.questions.length} questions
            </p>
            <Link className="button" href={`/knowledge-organisers/year8/geography/${organiser.term.toLowerCase()}/${organiser.id.replace("year8-geography-", "")}`}>
              Open Chapter {organiser.chapter} →
            </Link>
          </section>
        ))}

        <section className="soon"><span>Spring Term</span><h2>Coming soon</h2><p>The chapter will be added when the organiser is available.</p></section>
        <section className="soon"><span>Summer Term</span><h2>Coming soon</h2><p>The chapter will be added when the organiser is available.</p></section>
      </div>

      <style jsx>{`
        .page{max-width:1050px;width:calc(100% - 40px);margin:48px auto 80px;color:#253047;font-family:Arial,sans-serif}.page :global(a){text-decoration:none}.page :global(a.back){color:#115e59;font-size:17px;font-weight:800}.eyebrow{margin:32px 0 8px;color:#0f766e;font-size:13px;font-weight:900;letter-spacing:.14em}h1{margin:0 0 30px;font-size:clamp(34px,5vw,48px)}.terms{display:grid;gap:18px}section{padding:28px;border:1px solid #5eead4;border-radius:22px;background:#f0fdfa}section span{color:#0f766e;font-size:13px;font-weight:900;letter-spacing:.1em}h2{margin:9px 0;font-size:28px}p{color:#596579;font-size:17px;line-height:1.6}.counts{color:#115e59;font-weight:800}.page :global(a.button){display:inline-block;padding:13px 18px;border-radius:12px;background:#0f766e;color:white;font-size:16px;font-weight:800}.revision{margin-bottom:24px;border-color:#2dd4bf;background:linear-gradient(135deg,#134e4a,#0f766e);color:white;box-shadow:0 14px 32px rgba(15,118,110,.2)}.revision span,.revision p{color:#ccfbf1}.page :global(a.revisionButton){background:white;color:#115e59}.soon{border-color:#e5e7eb;background:#f8fafc}.soon span,.soon h2{color:#94a3b8}
      `}</style>
    </main>
  );
}

