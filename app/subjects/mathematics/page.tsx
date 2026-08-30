"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentStudent } from "@/lib/studentStorage";

const mathsCourses = [
  {
    level: "S1",
    description: "Hong Kong Secondary 1 Mathematics",
    route: "/maths/s1",
    available: true,
  },
  {
    level: "S2",
    description: "Hong Kong Secondary 2 Mathematics",
    route: "/maths/s2",
    available: true,
  },
  {
    level: "S3",
    description: "Hong Kong Secondary 3 Mathematics",
    route: "",
    available: false,
  },
  {
    level: "S4",
    description: "Hong Kong Secondary 4 Mathematics",
    route: "",
    available: false,
  },
  {
    level: "S5",
    description: "Hong Kong Secondary 5 Mathematics",
    route: "",
    available: false,
  },
  {
    level: "S6",
    description: "Hong Kong Secondary 6 Mathematics",
    route: "",
    available: false,
  },
];

export default function MathematicsCoursesS1S2OpenPage() {
  const router = useRouter();

  useEffect(() => {
    const student = getCurrentStudent();

    if (student === "guest") {
      router.replace("/login");
    }
  }, [router]);

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/subjects")}
      >
        ← Back to subjects
      </button>

      <h1>Choose a mathematics course</h1>

      <p className="subtitle">Hong Kong mathematics curriculum</p>

      <button
        type="button"
        className="flashcardButton"
        onClick={() => router.push("/maths/flashcards")}
      >
        <span className="flashcardInformation">
          <span className="flashcardIcon">🗂️</span>

          <span>
            <span className="flashcardLabel">FORMULA PRACTICE</span>

            <strong className="flashcardTitle">
              Mathematics Formula Flashcards
            </strong>

            <span className="flashcardDescription">
              Choose chapters across S1–S6 and practise them together.
            </span>
          </span>
        </span>

        <span className="chooseButton">Choose levels and chapters →</span>
      </button>

      <section className="courseList">
        {mathsCourses.map((course) => (
          <button
            key={course.level}
            type="button"
            disabled={!course.available}
            onClick={() => {
              if (course.available) {
                router.push(course.route);
              }
            }}
            className={
              course.available
                ? "courseCard availableCourse"
                : "courseCard unavailableCourse"
            }
          >
            <span className="courseInformation">
              <span
                className={
                  course.available
                    ? "courseLevel availableLevel"
                    : "courseLevel unavailableLevel"
                }
              >
                {course.level}
              </span>

              <span>
                <strong className="courseTitle">
                  Mathematics - {course.level}
                </strong>

                <span className="courseDescription">
                  {course.description}
                </span>
              </span>
            </span>

            <span
              className={
                course.available
                  ? "courseStatus availableStatus"
                  : "courseStatus"
              }
            >
              {course.available ? "Start →" : "Coming soon"}
            </span>
          </button>
        ))}
      </section>

      <style jsx>{`
        .page {
          max-width: 1100px;
          width: calc(100% - 48px);
          margin: 48px auto 72px;
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
          font-size: clamp(36px, 5vw, 42px);
          line-height: 1.15;
        }

        .subtitle {
          margin: 0 0 28px;
          color: #666666;
          font-size: 20px;
        }

        .flashcardButton {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 26px 30px;
          margin-bottom: 28px;
          border: 2px solid #c7d2fe;
          border-radius: 22px;
          background: linear-gradient(135deg, #eef2ff, #f5f3ff);
          box-shadow: 0 6px 18px rgba(79, 70, 229, 0.08);
          color: inherit;
          cursor: pointer;
          text-align: left;
          box-sizing: border-box;
        }

        .flashcardInformation,
        .courseInformation {
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: 0;
        }

        .flashcardIcon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 20px;
          background: #e0e7ff;
          font-size: 34px;
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
          font-size: 27px;
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
          color: #ffffff;
          font-size: 16px;
          font-weight: 800;
          white-space: nowrap;
        }

        .courseList {
          display: grid;
          gap: 16px;
        }

        .courseCard {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 24px 32px;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          color: inherit;
          text-align: left;
          box-sizing: border-box;
        }

        .availableCourse {
          cursor: pointer;
          opacity: 1;
        }

        .availableCourse:hover {
          border-color: #a7f3d0;
          box-shadow: 0 8px 22px rgba(5, 150, 105, 0.1);
          transform: translateY(-1px);
        }

        .unavailableCourse {
          cursor: not-allowed;
          opacity: 0.58;
        }

        .courseLevel {
          width: 76px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 22px;
          font-size: 34px;
          font-weight: 800;
        }

        .availableLevel {
          background: #ecfdf5;
          color: #047857;
        }

        .unavailableLevel {
          background: #f3f4f6;
          color: #6b7280;
        }

        .courseTitle {
          display: block;
          margin-bottom: 7px;
          font-size: 28px;
        }

        .courseDescription {
          display: block;
          color: #666666;
          font-size: 19px;
        }

        .courseStatus {
          flex-shrink: 0;
          color: #6b7280;
          font-size: 19px;
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

          .flashcardButton {
            align-items: flex-start;
            flex-direction: column;
            padding: 22px;
          }

          .chooseButton {
            width: 100%;
            box-sizing: border-box;
            text-align: center;
          }

          .courseCard {
            align-items: flex-start;
            padding: 20px;
          }

          .courseLevel {
            width: 62px;
            height: 62px;
            border-radius: 18px;
            font-size: 27px;
          }

          .courseTitle {
            font-size: 22px;
          }

          .courseDescription {
            font-size: 16px;
          }

          .courseStatus {
            padding-top: 19px;
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}
