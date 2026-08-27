"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import GeometryDiagram from "@/components/maths/GeometryDiagram";

const quizOptions = [
  "Acute-angled triangle",
  "Right-angled triangle",
  "Obtuse-angled triangle",
];

export default function BasicConceptsOfGeometryPage() {
  const router = useRouter();

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const correctAnswer = "Obtuse-angled triangle";

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-6")}
      >
        ← Back to Chapter 6
      </button>

      <header className="hero">
        <p className="eyebrow">SECTION 1</p>

        <h1>Basic Concepts of Geometry</h1>

        <p className="intro">
          Learn about plane figures, polygons, sides, vertices,
          diagonals and different ways of classifying triangles
          and polygons.
        </p>
      </header>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge">1</span>

          <div>
            <h2>Plane figures and polygons</h2>

            <p>
              A <strong>plane figure</strong> is a flat,
              two-dimensional figure. It has length and width,
              but no thickness.
            </p>

            <p>
              A <strong>polygon</strong> is a closed plane figure
              made entirely from straight line segments.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "polygon",
              variant: "polygon-classification",
            }}
          />
        </div>

        <div className="important">
          <strong>Remember:</strong> A figure containing a curved
          side is not a polygon. An open figure is also not a
          polygon.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge greenBadge">2</span>

          <div>
            <h2>Sides, vertices and diagonals</h2>

            <p>
              Polygons can be described using their sides,
              vertices and diagonals.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "polygon",
              variant: "parts",
            }}
          />
        </div>

        <div className="definitionGrid">
          <article>
            <h3>Side</h3>
            <p>
              A boundary line segment forming part of a polygon.
            </p>
          </article>

          <article>
            <h3>Vertex</h3>
            <p>
              A point where two adjacent sides of a polygon meet.
            </p>
          </article>

          <article>
            <h3>Diagonal</h3>
            <p>
              A line segment joining two non-adjacent vertices
              of a polygon.
            </p>
          </article>
        </div>
      </section>

      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 1</p>

        <h2>Describe a pentagon.</h2>

        <div className="steps">
          <article>
            <span>Step 1</span>
            <p>Count the sides.</p>
            <strong>5 sides</strong>
          </article>

          <article>
            <span>Step 2</span>
            <p>Count the vertices.</p>
            <strong>5 vertices</strong>
          </article>

          <article>
            <span>Step 3</span>
            <p>Identify the figure.</p>
            <strong>It is a polygon.</strong>
          </article>
        </div>

        <div className="answerBox">
          <strong>Answer:</strong> A pentagon is a polygon with
          five sides and five vertices.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge purpleBadge">3</span>

          <div>
            <h2>Special properties of polygons</h2>

            <p>
              Polygons can be classified by comparing their side
              lengths and interior angles.
            </p>
          </div>
        </div>

        <div className="propertyGrid">
          <article>
            <GeometryDiagram
              diagram={{
                type: "polygon",
                variant: "equilateral",
              }}
            />

            <h3>Equilateral polygon</h3>

            <p>
              All its sides have the same length.
            </p>
          </article>

          <article>
            <GeometryDiagram
              diagram={{
                type: "polygon",
                variant: "equiangular",
              }}
            />

            <h3>Equiangular polygon</h3>

            <p>
              All its interior angles have the same size.
            </p>
          </article>

          <article>
            <GeometryDiagram
              diagram={{
                type: "polygon",
                variant: "regular",
              }}
            />

            <h3>Regular polygon</h3>

            <p>
              It is both equilateral and equiangular.
            </p>
          </article>
        </div>

        <div className="important">
          <strong>Important:</strong> Equal sides alone do not
          always make a polygon regular. Its interior angles must
          also be equal.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge orangeBadge">4</span>

          <div>
            <h2>Convex and concave polygons</h2>

            <p>
              We can classify a polygon by examining its interior
              angles and diagonals.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "polygon",
              variant: "convex-vs-concave",
            }}
          />
        </div>

        <div className="comparisonGrid">
          <article className="convexCard">
            <h3>Convex polygon</h3>

            <ul>
              <li>Every interior angle is less than 180°.</li>
              <li>Every diagonal lies inside the polygon.</li>
              <li>It has no part that bends inwards.</li>
            </ul>
          </article>

          <article className="concaveCard">
            <h3>Concave polygon</h3>

            <ul>
              <li>At least one interior angle is greater than 180°.</li>
              <li>At least one diagonal lies outside the polygon.</li>
              <li>Part of the polygon bends inwards.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="workedExample orangeExample">
        <p className="exampleLabel">WORKED EXAMPLE 2</p>

        <h2>
          A polygon has one interior angle of 210°. Is it convex
          or concave?
        </h2>

        <div className="reasoningBox">
          <p>
            A convex polygon must have every interior angle less
            than 180°.
          </p>

          <p className="calculation">210° &gt; 180°</p>

          <p>
            Therefore, the polygon has an interior angle greater
            than 180°.
          </p>
        </div>

        <div className="answerBox orangeAnswer">
          <strong>Answer:</strong> The polygon is concave.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge redBadge">5</span>

          <div>
            <h2>Triangles classified by their angles</h2>

            <p>
              A triangle is a polygon with exactly three sides
              and three vertices.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "triangle",
              variant: "angle-classification",
            }}
          />
        </div>

        <div className="triangleGrid">
          <article className="acuteCard">
            <h3>Acute-angled triangle</h3>
            <p>All three interior angles are less than 90°.</p>
          </article>

          <article className="rightCard">
            <h3>Right-angled triangle</h3>
            <p>One interior angle is exactly 90°.</p>
          </article>

          <article className="obtuseCard">
            <h3>Obtuse-angled triangle</h3>
            <p>One interior angle is greater than 90°.</p>
          </article>
        </div>

        <div className="important">
          A triangle can have only one right angle or only one
          obtuse angle.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>

        <h2>
          A triangle contains an angle of 110°. What type of
          triangle is it?
        </h2>

        <div className="quizDiagram">
          <GeometryDiagram
            diagram={{
              type: "triangle",
              variant: "obtuse",
            }}
          />
        </div>

        <div className="optionGrid">
          {quizOptions.map((option) => {
            const answered = selectedAnswer !== null;
            const isCorrect = option === correctAnswer;
            const isSelected = selectedAnswer === option;

            let className = "optionButton";

            if (answered && isCorrect) {
              className += " correctOption";
            } else if (answered && isSelected) {
              className += " wrongOption";
            }

            return (
              <button
                key={option}
                type="button"
                className={className}
                disabled={answered}
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div
            className={
              selectedAnswer === correctAnswer
                ? "feedback correctFeedback"
                : "feedback wrongFeedback"
            }
          >
            {selectedAnswer === correctAnswer ? (
              <>
                <strong>Correct.</strong> Since 110° is greater
                than 90°, the triangle is obtuse-angled.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Since 110° is greater
                than 90°, the correct answer is an obtuse-angled
                triangle.
              </>
            )}
          </div>
        )}

        {selectedAnswer && (
          <button
            type="button"
            className="tryAgainButton"
            onClick={() => setSelectedAnswer(null)}
          >
            Try again
          </button>
        )}
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>

        <ul>
          <li>
            Calling every closed figure a polygon, even when it
            has curved sides.
          </li>

          <li>
            Confusing a side with a diagonal.
          </li>

          <li>
            Assuming that an equilateral polygon must always be
            regular.
          </li>

          <li>
            Looking only at the general appearance of a polygon
            instead of checking its angles.
          </li>

          <li>
            Calling a triangle obtuse when its largest angle is
            exactly 90°.
          </li>
        </ul>
      </section>

      <section className="summaryCard">
        <div>
          <p className="eyebrow">SECTION SUMMARY</p>
          <h2>Key ideas</h2>
        </div>

        <div className="summaryGrid">
          <article>
            <strong>Polygon</strong>
            <p>
              A closed plane figure made from straight line
              segments.
            </p>
          </article>

          <article>
            <strong>Regular polygon</strong>
            <p>
              A polygon with equal sides and equal interior
              angles.
            </p>
          </article>

          <article>
            <strong>Convex polygon</strong>
            <p>
              Every interior angle is less than 180°.
            </p>
          </article>

          <article>
            <strong>Triangle types</strong>
            <p>
              Acute, right or obtuse, according to their angles.
            </p>
          </article>
        </div>

        <button
          type="button"
          className="finishButton"
          onClick={() => router.push("/maths/s1/chapter-6")}
        >
          Complete Section 1 →
        </button>
      </section>

      <style jsx>{`
        .page {
          width: calc(100% - 40px);
          max-width: 1050px;
          margin: 40px auto 70px;
          color: #172033;
        }

        .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .hero {
          margin-bottom: 30px;
        }

        .eyebrow,
        .exampleLabel,
        .quizLabel {
          margin: 0 0 7px;
          color: #059669;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.09em;
        }

        h1 {
          margin: 0 0 10px;
          font-size: 44px;
        }

        h2 {
          margin: 0 0 12px;
          font-size: 27px;
        }

        h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        p {
          line-height: 1.65;
        }

        .intro {
          max-width: 820px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
        }

        .lessonCard,
        .workedExample,
        .quizCard,
        .mistakesCard,
        .summaryCard {
          margin-bottom: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: white;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.04);
        }

        .sectionHeading {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .numberBadge {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #eef2ff;
          color: #4338ca;
          font-size: 22px;
          font-weight: 900;
        }

        .greenBadge {
          background: #ecfdf5;
          color: #047857;
        }

        .purpleBadge {
          background: #f5f3ff;
          color: #7c3aed;
        }

        .orangeBadge {
          background: #fff7ed;
          color: #c2410c;
        }

        .redBadge {
          background: #fef2f2;
          color: #dc2626;
        }

        .diagramBox,
        .quizDiagram {
          margin: 24px auto;
          max-width: 760px;
        }

        .definitionGrid,
        .propertyGrid,
        .comparisonGrid,
        .triangleGrid,
        .steps,
        .summaryGrid {
          display: grid;
          gap: 15px;
          margin-top: 22px;
        }

        .definitionGrid,
        .propertyGrid,
        .triangleGrid,
        .steps {
          grid-template-columns: repeat(3, 1fr);
        }

        .comparisonGrid,
        .summaryGrid {
          grid-template-columns: repeat(2, 1fr);
        }

        .definitionGrid article,
        .propertyGrid article,
        .comparisonGrid article,
        .triangleGrid article,
        .steps article,
        .summaryGrid article {
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
        }

        .definitionGrid p,
        .propertyGrid p,
        .comparisonGrid p,
        .triangleGrid p,
        .steps p,
        .summaryGrid p {
          margin: 0;
          color: #475569;
        }

        .propertyGrid article {
          text-align: center;
        }

        .propertyGrid article > :global(*) {
          margin-bottom: 14px;
        }

        .important {
          margin-top: 20px;
          padding: 17px 19px;
          border: 1px solid #fde68a;
          border-radius: 14px;
          background: #fffbeb;
          color: #92400e;
          line-height: 1.65;
        }

        .convexCard {
          border-color: #bbf7d0 !important;
          background: #f0fdf4 !important;
        }

        .concaveCard {
          border-color: #fecaca !important;
          background: #fff7f7 !important;
        }

        .comparisonGrid ul {
          margin: 12px 0 0;
          padding-left: 22px;
          color: #475569;
          line-height: 1.8;
        }

        .workedExample {
          border-color: #c7d2fe;
          background: #fafaff;
        }

        .orangeExample {
          border-color: #fed7aa;
          background: #fffaf5;
        }

        .steps span {
          color: #4f46e5;
          font-weight: 900;
        }

        .steps strong {
          display: block;
          margin-top: 14px;
          color: #312e81;
          font-size: 20px;
        }

        .answerBox {
          margin-top: 16px;
          padding: 17px 20px;
          border-radius: 14px;
          background: #eef2ff;
          color: #312e81;
          font-size: 18px;
        }

        .orangeAnswer {
          background: #ffedd5;
          color: #9a3412;
        }

        .reasoningBox {
          margin-top: 20px;
          padding: 22px;
          border-radius: 17px;
          background: white;
        }

        .reasoningBox p {
          margin: 8px 0;
        }

        .calculation {
          color: #c2410c;
          font-size: 28px;
          font-weight: 900;
          text-align: center;
        }

        .acuteCard {
          border-color: #bbf7d0 !important;
        }

        .rightCard {
          border-color: #bfdbfe !important;
        }

        .obtuseCard {
          border-color: #fecaca !important;
        }

        .quizCard {
          border-color: #bae6fd;
          background: #f0f9ff;
        }

        .quizLabel {
          color: #0369a1;
        }

        .optionGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 20px;
        }

        .optionButton {
          padding: 15px;
          border: 2px solid #bae6fd;
          border-radius: 14px;
          background: white;
          color: #0f172a;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .optionButton:disabled {
          cursor: default;
          opacity: 1;
        }

        .correctOption {
          border-color: #22c55e;
          background: #dcfce7;
          color: #166534;
        }

        .wrongOption {
          border-color: #ef4444;
          background: #fee2e2;
          color: #991b1b;
        }

        .feedback {
          margin-top: 16px;
          padding: 17px 19px;
          border-radius: 14px;
          line-height: 1.6;
        }

        .correctFeedback {
          background: #dcfce7;
          color: #166534;
        }

        .wrongFeedback {
          background: #fee2e2;
          color: #991b1b;
        }

        .tryAgainButton {
          margin-top: 14px;
          padding: 11px 18px;
          border: 1px solid #0284c7;
          border-radius: 12px;
          background: white;
          color: #0369a1;
          font-weight: 800;
          cursor: pointer;
        }

        .mistakesCard {
          border-color: #fecaca;
          background: #fffafa;
        }

        .mistakesCard ul {
          margin: 16px 0 0;
          padding-left: 25px;
          color: #475569;
          line-height: 1.8;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: #f0fdf4;
        }

        .summaryGrid article {
          border-color: #bbf7d0;
          background: white;
        }

        .summaryGrid strong {
          color: #166534;
          font-size: 18px;
        }

        .finishButton {
          width: 100%;
          margin-top: 22px;
          padding: 17px 22px;
          border: none;
          border-radius: 15px;
          background: #059669;
          color: white;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        @media (max-width: 760px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 25px;
          }

          h1 {
            font-size: 36px;
          }

          .lessonCard,
          .workedExample,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 22px;
          }

          .sectionHeading {
            flex-direction: column;
          }

          .definitionGrid,
          .propertyGrid,
          .comparisonGrid,
          .triangleGrid,
          .steps,
          .summaryGrid,
          .optionGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}