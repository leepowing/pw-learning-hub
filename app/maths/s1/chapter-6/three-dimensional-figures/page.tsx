"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import GeometryDiagram from "@/components/maths/GeometryDiagram";

const quizOptions = [
  "Triangular prism",
  "Cylinder",
  "Pyramid",
];

export default function ThreeDimensionalFiguresPage() {
  const router = useRouter();

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const correctAnswer = "Triangular prism";

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
        <p className="eyebrow">SECTION 2</p>

        <h1>3-D Figures</h1>

        <p className="intro">
          Learn about solids, polyhedra, faces, edges, vertices,
          prisms, cylinders, two-dimensional representations and
          cross-sections.
        </p>
      </header>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge">1</span>

          <div>
            <h2>Three-dimensional figures</h2>

            <p>
              A <strong>three-dimensional figure</strong>, or
              solid, has length, width and height.
            </p>

            <p>
              Unlike a plane figure, a solid occupies space and
              has volume.
            </p>
          </div>
        </div>

        <div className="comparisonGrid">
          <article>
            <h3>2-D figure</h3>

            <p>
              Has length and width but no thickness.
            </p>

            <ul>
              <li>Triangle</li>
              <li>Rectangle</li>
              <li>Circle</li>
            </ul>
          </article>

          <article>
            <h3>3-D figure</h3>

            <p>
              Has length, width and height.
            </p>

            <ul>
              <li>Cuboid</li>
              <li>Prism</li>
              <li>Cylinder</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge greenBadge">2</span>

          <div>
            <h2>Polyhedra</h2>

            <p>
              A <strong>polyhedron</strong> is a solid enclosed
              entirely by flat polygonal faces.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "polyhedron",
            }}
          />
        </div>

        <div className="important">
          <strong>Important:</strong> A cylinder is not a
          polyhedron because it has a curved surface.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge purpleBadge">3</span>

          <div>
            <h2>Faces, edges and vertices</h2>

            <p>
              We describe a polyhedron using its faces, edges and
              vertices.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "face-edge-vertex",
            }}
          />
        </div>

        <div className="definitionGrid">
          <article>
            <h3>Face</h3>

            <p>
              A flat polygonal surface of a polyhedron.
            </p>
          </article>

          <article>
            <h3>Edge</h3>

            <p>
              A line segment where two faces meet.
            </p>
          </article>

          <article>
            <h3>Vertex</h3>

            <p>
              A point where three or more edges meet.
            </p>
          </article>
        </div>
      </section>

      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 1</p>

        <h2>
          How many faces, edges and vertices does a cuboid have?
        </h2>

        <div className="exampleDiagram">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "cuboid",
            }}
          />
        </div>

        <div className="steps">
          <article>
            <span>Step 1</span>

            <p>Count the flat rectangular faces.</p>

            <strong>6 faces</strong>
          </article>

          <article>
            <span>Step 2</span>

            <p>Count the line segments where faces meet.</p>

            <strong>12 edges</strong>
          </article>

          <article>
            <span>Step 3</span>

            <p>Count the corner points.</p>

            <strong>8 vertices</strong>
          </article>
        </div>

        <div className="answerBox">
          <strong>Answer:</strong> A cuboid has 6 faces, 12
          edges and 8 vertices.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge orangeBadge">4</span>

          <div>
            <h2>Prisms</h2>

            <p>
              A <strong>prism</strong> has two identical,
              parallel polygonal ends joined by flat faces.
            </p>

            <p>
              A prism has the same cross-sectional shape and size
              throughout its length.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "triangular-prism",
            }}
          />
        </div>

        <div className="important">
          Prisms are named according to the shape of their
          identical parallel ends. A prism with triangular ends
          is called a <strong>triangular prism</strong>.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge blueBadge">5</span>

          <div>
            <h2>Cylinders</h2>

            <p>
              A <strong>cylinder</strong> has two identical,
              parallel circular ends joined by a curved surface.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "cylinder",
            }}
          />
        </div>

        <div className="comparisonGrid">
          <article className="prismCard">
            <h3>Prism</h3>

            <ul>
              <li>Polygonal ends</li>
              <li>Flat side faces</li>
              <li>It is a polyhedron</li>
            </ul>
          </article>

          <article className="cylinderCard">
            <h3>Cylinder</h3>

            <ul>
              <li>Circular ends</li>
              <li>One curved surface</li>
              <li>It is not a polyhedron</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="workedExample orangeExample">
        <p className="exampleLabel">WORKED EXAMPLE 2</p>

        <h2>
          Explain why a triangular prism is a polyhedron but a
          cylinder is not.
        </h2>

        <div className="exampleDiagram">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "prism-vs-cylinder",
            }}
          />
        </div>

        <div className="reasoningGrid">
          <article>
            <h3>Triangular prism</h3>

            <p>
              Every face is a flat polygon. Therefore, it is a
              polyhedron.
            </p>
          </article>

          <article>
            <h3>Cylinder</h3>

            <p>
              It has a curved surface. Therefore, it is not a
              polyhedron.
            </p>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge redBadge">6</span>

          <div>
            <h2>2-D representations of solids</h2>

            <p>
              A three-dimensional solid can be represented by a
              flat two-dimensional drawing.
            </p>

            <p>
              Solid lines normally show visible edges. Dashed
              lines show hidden edges.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "prism-wireframe",
            }}
          />
        </div>

        <div className="lineKey">
          <article>
            <span className="solidLine" />
            <div>
              <h3>Solid line</h3>
              <p>An edge that can be seen from the chosen view.</p>
            </div>
          </article>

          <article>
            <span className="dashedLine" />
            <div>
              <h3>Dashed line</h3>
              <p>An edge hidden behind part of the solid.</p>
            </div>
          </article>
        </div>

        <div className="important">
          A dashed line does not mean that an edge is missing.
          It means the edge is hidden from the viewer.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge pinkBadge">7</span>

          <div>
            <h2>Cross-sections</h2>

            <p>
              A <strong>cross-section</strong> is the flat shape
              exposed when a solid is cut by a plane.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "cross-section",
              variant: "solid-cut",
            }}
          />
        </div>

        <div className="important">
          The shape of a cross-section depends on the solid and
          the direction of the cutting plane.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge tealBadge">8</span>

          <div>
            <h2>Uniform cross-sections</h2>

            <p>
              A solid has a <strong>uniform cross-section</strong>
              when parallel cuts perpendicular to its length
              produce cross-sections with the same shape and
              size.
            </p>
          </div>
        </div>

        <div className="diagramBox">
          <GeometryDiagram
            diagram={{
              type: "cross-section",
              variant: "uniform-vs-non-uniform",
            }}
          />
        </div>

        <div className="comparisonGrid">
          <article className="uniformCard">
            <h3>Uniform</h3>

            <p>
              The cross-sectional shape and size stay the same
              throughout the solid.
            </p>

            <p>
              Examples include prisms and cylinders when cut
              parallel to their ends.
            </p>
          </article>

          <article className="nonUniformCard">
            <h3>Non-uniform</h3>

            <p>
              The cross-sectional shape or size changes at
              different positions.
            </p>

            <p>
              A pyramid does not have a uniform cross-section
              parallel to its base.
            </p>
          </article>
        </div>
      </section>

      <section className="workedExample greenExample">
        <p className="exampleLabel">WORKED EXAMPLE 3</p>

        <h2>
          What cross-section is produced when a triangular prism
          is cut parallel to its triangular ends?
        </h2>

        <div className="exampleDiagram">
          <GeometryDiagram
            diagram={{
              type: "cross-section",
              variant: "uniform-prism",
            }}
          />
        </div>

        <div className="reasoningBox">
          <p>
            The two ends of the prism are identical triangles.
          </p>

          <p>
            Every cross-section parallel to these ends has the
            same triangular shape and size.
          </p>
        </div>

        <div className="answerBox greenAnswer">
          <strong>Answer:</strong> The cross-section is a
          triangle.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>

        <h2>
          Which solid has two identical, parallel triangular ends?
        </h2>

        <div className="quizDiagram">
          <GeometryDiagram
            diagram={{
              type: "solid",
              variant: "prism-vs-cylinder",
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
                <strong>Correct.</strong> A triangular prism has
                two identical, parallel triangular ends.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> The correct answer is
                a triangular prism.
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
            Calling every three-dimensional figure a polyhedron.
          </li>

          <li>
            Confusing an edge with a face.
          </li>

          <li>
            Counting hidden edges only when they are drawn using
            solid lines.
          </li>

          <li>
            Assuming that a cylinder is a prism.
          </li>

          <li>
            Assuming that every cut through a prism produces the
            same cross-section.
          </li>

          <li>
            Forgetting that uniform cross-sections require cuts
            in the same direction, parallel to the identical
            ends.
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
            <strong>Polyhedron</strong>

            <p>
              A solid enclosed entirely by flat polygonal faces.
            </p>
          </article>

          <article>
            <strong>Prism</strong>

            <p>
              Has two identical, parallel polygonal ends.
            </p>
          </article>

          <article>
            <strong>Hidden edge</strong>

            <p>
              An edge represented by a dashed line in a 2-D
              drawing.
            </p>
          </article>

          <article>
            <strong>Cross-section</strong>

            <p>
              The flat shape exposed when a solid is cut by a
              plane.
            </p>
          </article>
        </div>

        <button
          type="button"
          className="finishButton"
          onClick={() => router.push("/maths/s1/chapter-6")}
        >
          Complete Section 2 →
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

        .blueBadge {
          background: #eff6ff;
          color: #1d4ed8;
        }

        .redBadge {
          background: #fef2f2;
          color: #dc2626;
        }

        .pinkBadge {
          background: #fdf2f8;
          color: #be185d;
        }

        .tealBadge {
          background: #f0fdfa;
          color: #0f766e;
        }

        .diagramBox,
        .exampleDiagram,
        .quizDiagram {
          max-width: 760px;
          margin: 24px auto;
        }

        .definitionGrid,
        .comparisonGrid,
        .reasoningGrid,
        .steps,
        .summaryGrid {
          display: grid;
          gap: 15px;
          margin-top: 22px;
        }

        .definitionGrid,
        .steps {
          grid-template-columns: repeat(3, 1fr);
        }

        .comparisonGrid,
        .reasoningGrid,
        .summaryGrid {
          grid-template-columns: repeat(2, 1fr);
        }

        .definitionGrid article,
        .comparisonGrid article,
        .reasoningGrid article,
        .steps article,
        .summaryGrid article {
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
        }

        .definitionGrid p,
        .comparisonGrid p,
        .reasoningGrid p,
        .steps p,
        .summaryGrid p {
          margin: 0;
          color: #475569;
        }

        .comparisonGrid ul {
          margin: 12px 0 0;
          padding-left: 22px;
          color: #475569;
          line-height: 1.8;
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

        .workedExample {
          border-color: #c7d2fe;
          background: #fafaff;
        }

        .orangeExample {
          border-color: #fed7aa;
          background: #fffaf5;
        }

        .greenExample {
          border-color: #a7f3d0;
          background: #f7fffb;
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

        .greenAnswer {
          background: #ecfdf5;
          color: #166534;
        }

        .prismCard,
        .uniformCard {
          border-color: #bbf7d0 !important;
          background: #f0fdf4 !important;
        }

        .cylinderCard {
          border-color: #bfdbfe !important;
          background: #eff6ff !important;
        }

        .nonUniformCard {
          border-color: #fecaca !important;
          background: #fff7f7 !important;
        }

        .lineKey {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 20px;
        }

        .lineKey article {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
        }

        .lineKey h3,
        .lineKey p {
          margin: 0;
        }

        .lineKey p {
          margin-top: 5px;
          color: #475569;
        }

        .solidLine,
        .dashedLine {
          width: 80px;
          height: 0;
          flex-shrink: 0;
          border-top: 5px solid #2563eb;
        }

        .dashedLine {
          border-top-style: dashed;
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
          .comparisonGrid,
          .reasoningGrid,
          .steps,
          .summaryGrid,
          .lineKey,
          .optionGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}