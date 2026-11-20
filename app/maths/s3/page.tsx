"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentStudent } from "@/lib/studentStorage";

const chapters = [
  "More about Factorization",
  "Laws of Integral Indices",
  "Percentages (II)",
  "Linear Inequalities in One Unknown",
  "Probability",
  "Measures of Central Tendency",
  "More about Triangles",
  "Quadrilaterals",
  "More about 3-D Figures",
  "Mensuration (III)",
  "Trigonometric Relations",
  "Applications in Trigonometry",
  "Rectangular Coordinate System (II)"
];

export default function S3MathematicsPage() {
  const router = useRouter();
  useEffect(() => {
    if (getCurrentStudent() === "guest") router.replace("/login");
  }, [router]);

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() =>
          router.push("/subjects/mathematics")
        }
      >
        ← Back to mathematics courses
      </button>

      <h1>S3 Mathematics</h1>

      <p className="subtitle">
        Hong Kong Secondary 3 Mathematics
      </p>

      <p className="availableMessage">13 chapters across Books 3A and 3B</p>
      <button
        type="button"
        className="flashcardButton"
        onClick={() => window.location.assign("/maths/s3/chapter-1/flashcards")}
      >
        <span className="flashcardInformation">
          <span className="flashcardIcon">
            🗂️
          </span>

          <span>
            <span className="flashcardLabel">
              FORMULA PRACTICE
            </span>

            <strong className="flashcardTitle">
              S3 Formula Flashcards
            </strong>

            <span className="flashcardDescription">
              Practise formulae from your S3 lessons.
            </span>
          </span>
        </span>

        <span className="chooseButton">
          Start Flashcards →
        </span>
      </button>

      {["3A", "3B"].map((book, index) => (
        <section key={book}>
          <h2>Book {book}</h2>
          <div className="chapterGrid">
            {(index === 0 ? chapters.slice(0, 7) : chapters.slice(7)).map((title, i) => {
              const number = i + (index === 0 ? 1 : 8);
              if (number >= 6 && number <= 11) return (
                <a key={number} className="chapterCard availableCard" href={`/maths/s3/chapter-${number}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="chapterInformation">
                    <span className="chapterNumber availableNumber">{number}</span>
                    <div><span className="chapterLabel">Chapter {number}</span><strong className="chapterTitle">{title}</strong></div>
                  </div>
                  <span className="chapterStatus">Start →</span>
                </a>
              );
              if (number >= 4 && number <= 6) return (
                <article className="chapterCard availableCard" key={number}>
                  <div className="chapterInformation"><span className="chapterNumber availableNumber">{number}</span>
                    <div><span className="chapterLabel">Chapter {number}</span><strong className="chapterTitle">{title}</strong></div>
                  </div>
                  <a className="chapterStatus" href={`/maths/s3/chapter-${number}`}>Start →</a>
                </article>
              );              if (number === 3) return (
                <article className="chapterCard availableCard" key={number}>
                  <div className="chapterInformation"><span className="chapterNumber availableNumber">{number}</span>
                    <div><span className="chapterLabel">Chapter {number}</span><strong className="chapterTitle">{title}</strong></div>
                  </div>
                  <a className="chapterStatus" href="/maths/s3/chapter-3">Start →</a>
                </article>
              );              if (number === 2) return (
                <article className="chapterCard availableCard" key={number}>
                  <div className="chapterInformation">
                    <span className="chapterNumber availableNumber">{number}</span>
                    <div><span className="chapterLabel">Chapter 2</span><strong className="chapterTitle">{title}</strong></div>
                  </div>
                  <a className="chapterStatus" href="/maths/s3/chapter-2">Start →</a>
                </article>
              );
              return (
                <article className="chapterCard availableCard" key={number}>
                  <div className="chapterInformation">
                    <span className="chapterNumber availableNumber">{number}</span>
                    <div><span className="chapterLabel">Chapter {number}</span><strong className="chapterTitle">{title}</strong></div>
                  </div>
                  <span className="chapterStatus">Coming soon</span>
                </article>
              );
            })}
          </div>
        </section>
      ))}
      <style jsx>{`
        section { margin-bottom: 32px; }
        .chapterGrid article.chapterCard, .flashcardButton:disabled { cursor: default; transform: none; }
        .page {
          max-width: 1100px;
          width: calc(100% - 48px);
          margin: 48px auto;
          padding: 0;
          box-sizing: border-box;
        }

        .backButton {
          margin-bottom: 28px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
        }

        h1 {
          margin: 0 0 8px;
          font-size: 42px;
        }

        .subtitle {
          margin: 0 0 8px;
          color: #666666;
          font-size: 20px;
        }

        .availableMessage {
          margin: 0 0 30px;
          color: #047857;
          font-size: 17px;
          font-weight: 700;
        }

        .flashcardButton {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 26px;
          margin-bottom: 28px;
          border: 2px solid #c7d2fe;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            #eef2ff 0%,
            #f5f3ff 100%
          );
          box-shadow:
            0 6px 18px rgba(79, 70, 229, 0.08);
          color: inherit;
          cursor: pointer;
          text-align: left;
        }

        .flashcardInformation,
        .chapterInformation {
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: 0;
        }

        .flashcardIcon {
          width: 66px;
          height: 66px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 19px;
          background: #e0e7ff;
          font-size: 32px;
        }

        .flashcardLabel {
          display: block;
          margin-bottom: 5px;
          color: #4f46e5;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .flashcardTitle {
          display: block;
          margin-bottom: 5px;
          font-size: 25px;
          line-height: 1.25;
        }

        .flashcardDescription {
          display: block;
          color: #64748b;
          font-size: 17px;
          line-height: 1.45;
        }

        .chooseButton {
          flex-shrink: 0;
          padding: 12px 18px;
          border-radius: 14px;
          background: #4f46e5;
          color: white;
          font-size: 16px;
          font-weight: 800;
          white-space: nowrap;
        }

        .chapterGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 420px), 1fr)
          );
          gap: 16px;
        }

        .chapterCard {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 24px;
          border-radius: 20px;
          background: white;
          box-shadow:
            0 5px 16px rgba(0, 0, 0, 0.04);
          text-align: left;
          color: inherit;
        }

        .availableCard {
          border: 2px solid #a7f3d0;
          cursor: pointer;
          opacity: 1;
        }

        .unavailableCard {
          border: 1px solid #e5e7eb;
          cursor: not-allowed;
          opacity: 0.58;
        }

        .chapterInformation {
          gap: 18px;
        }

        .chapterNumber {
          width: 62px;
          height: 62px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          font-size: 24px;
          font-weight: 800;
        }

        .availableNumber {
          background: #ecfdf5;
          color: #047857;
        }

        .unavailableNumber {
          background: #f3f4f6;
          color: #6b7280;
        }

        .chapterLabel {
          display: block;
          margin-bottom: 5px;
          color: #6b7280;
          font-size: 15px;
          font-weight: 700;
        }

        .chapterTitle {
          display: block;
          font-size: 21px;
          line-height: 1.25;
        }

        .chapterStatus {
          color: #6b7280;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
        }

        .availableStatus {
          color: #047857;
        }

        @media (max-width: 680px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          h1 {
            font-size: 36px;
          }

          .flashcardButton {
            align-items: flex-start;
            flex-direction: column;
          }

          .chooseButton {
            width: 100%;
            box-sizing: border-box;
            text-align: center;
          }

          .chapterCard {
            align-items: flex-start;
          }

          .chapterStatus {
            padding-top: 20px;
          }
        }
      `}</style>
    </main>
  );
}