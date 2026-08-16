"use client";

import { useRouter } from "next/navigation";

export default function SubjectsPage() {
  const router = useRouter();

  return (
    <main
      style={{
        maxWidth: "1100px",
        width: "calc(100% - 48px)",
        margin: "60px auto",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "28px",
        }}
      >
        Choose a subject
      </h1>

      {/* Year 7 */}
      <div
        onClick={() => router.push("/spelling")}
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 32px",
          borderRadius: "22px",
          background: "white",
          border: "1px solid #e5e7eb",
          marginBottom: "16px",
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "24px",
              background: "#eef0ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
            }}
          >
            📚
          </div>

          <div>
            <h2
              style={{
                fontSize: "30px",
                margin: "0 0 8px 0",
              }}
            >
              Spelling - Year 7
            </h2>

            <p
              style={{
                fontSize: "20px",
                margin: 0,
                color: "#666",
              }}
            >
              52 weeks of spelling practice
            </p>
          </div>
        </div>

        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#3730a3",
          }}
        >
          Start →
        </div>
      </div>

      {/* Year 8 */}
      <div
        style={{
         width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 32px",
          borderRadius: "22px",
          background: "#f5f5f5",
          border: "1px solid #ececec",
          opacity: 0.65,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "24px",
              background: "#e8e8f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
            }}
          >
            📚
          </div>

          <div>
            <h2
              style={{
                fontSize: "30px",
                margin: "0 0 8px 0",
              }}
            >
              Spelling - Year 8
            </h2>

            <p
              style={{
                fontSize: "20px",
                margin: 0,
                color: "#666",
              }}
            >
              Coming Soon
            </p>
          </div>
        </div>

        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#5b5b8f",
          }}
        >
          Soon
        </div>
      </div>
    </main>
  );
}