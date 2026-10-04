"use client";

import Link from "next/link";
import { getKnowledgeOrganisers } from "@/data/knowledgeOrganisers/registry";

export default function YearEightSciencePage() {
  const organisers = getKnowledgeOrganisers(8, "Science");

  return (
    <main className="page">
      <Link className="back" href="/knowledge-organisers/year8">
        ← Back to Year 8 subjects
      </Link>

      <p className="eyebrow">YEAR 8 · SCIENCE</p>
      <h1>Science Knowledge Organisers</h1>

      <section className="revision">
        <span>EXAM REVISION</span>
        <h2>Cross-Chapter Quiz</h2>
        <p>
          Build one quiz from every section already marked as taught. Choose multiple choice,
          fill in the blank, matching, ordering, classification, label the diagram, short
          questions, long questions or a mixture, then choose how many questions to answer.
        </p>
        <Link className="button revisionButton" href="/knowledge-organisers/year8/science/revision-quiz">
          Create revision quiz →
        </Link>
      </section>

      <div className="terms">
        {organisers.map((organiser) => (
          <section key={organiser.id}>
            <span>{organiser.term} Term</span>
            <h2>{organiser.title}</h2>
            <p>{organiser.introduction}</p>
            <p className="counts">
              {organiser.sections.length} sections · {organiser.flashcards.length} flashcards ·{" "}
              {organiser.questions.length} questions
            </p>
            <Link
              className="button"
              href={`/knowledge-organisers/year8/science/${organiser.term.toLowerCase()}/${organiser.id.replace("year8-science-", "")}`}
            >
              Open Chapter {organiser.chapter} →
            </Link>
          </section>
        ))}

        <section className="soon">
          <span>Spring Term</span>
          <h2>Coming soon</h2>
          <p>The chapter will be added when the organiser is available.</p>
        </section>

        <section className="soon">
          <span>Summer Term</span>
          <h2>Coming soon</h2>
          <p>The chapter will be added when the organiser is available.</p>
        </section>
      </div>

      <style jsx>{`
        .page {
          max-width: 1050px;
          width: calc(100% - 40px);
          margin: 48px auto 80px;
          color: #253047;
          font-family: Arial, sans-serif;
        }
        .page :global(a) {
          text-decoration: none;
        }
        .page :global(a.back) {
          color: #166534;
          font-size: 17px;
          font-weight: 800;
        }
        .eyebrow {
          margin: 32px 0 8px;
          color: #166534;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }
        h1 {
          margin: 0 0 30px;
          font-size: clamp(34px, 5vw, 48px);
        }
        .terms {
          display: grid;
          gap: 18px;
        }
        section {
          padding: 28px;
          border: 1px solid #86efac;
          border-radius: 22px;
          background: #f0fdf4;
        }
        section span {
          color: #15803d;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }
        h2 {
          margin: 9px 0;
          font-size: 28px;
        }
        p {
          color: #596579;
          font-size: 17px;
          line-height: 1.6;
        }
        .counts {
          color: #166534;
          font-weight: 800;
        }
        .page :global(a.button) {
          display: inline-block;
          padding: 13px 18px;
          border-radius: 12px;
          background: #15803d;
          color: white;
          font-size: 16px;
          font-weight: 800;
        }
        .revision {
          margin-bottom: 24px;
          border-color: #22c55e;
          background: linear-gradient(135deg, #14532d, #15803d);
          color: white;
          box-shadow: 0 14px 32px rgba(20, 83, 45, 0.18);
        }
        .revision span,
        .revision p {
          color: #dcfce7;
        }
        .page :global(a.revisionButton) {
          background: white;
          color: #166534;
        }
        .soon {
          border-color: #e5e7eb;
          background: #f8fafc;
        }
        .soon span,
        .soon h2 {
          color: #94a3b8;
        }
      `}</style>
    </main>
  );
}
