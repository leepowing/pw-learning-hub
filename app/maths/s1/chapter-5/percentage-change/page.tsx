import Link from "next/link";
import katex from "katex";

function MathFormula({
  formula,
  displayMode = true,
}: {
  formula: string;
  displayMode?: boolean;
}) {
  const html = katex.renderToString(formula, {
    throwOnError: false,
    displayMode,
    strict: false,
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        display: displayMode ? "block" : "inline-block",
        overflowX: "auto",
        overflowY: "hidden",
        padding: displayMode ? "8px 0" : 0,
      }}
    />
  );
}

const formulaBoxStyle = {
  background: "#ffffff",
  border: "1px solid #d1fae5",
  borderRadius: "18px",
  padding: "22px 18px",
  textAlign: "center" as const,
  overflowX: "auto" as const,
};

const contentCardStyle = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "22px",
  padding: "28px",
  marginBottom: "22px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
};

const exampleStyle = {
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: "18px",
  padding: "24px",
  marginTop: "20px",
};

export default function PercentageChangePage() {
  const summaryFormulas = [
    String.raw`\text{Change}=\text{New value}-\text{Original value}`,
    String.raw`\text{Percentage change}
      =\frac{\text{Change}}{\text{Original value}}\times100\%`,
    String.raw`\text{Change}
      =\text{Original value}\times\text{Percentage change}`,
    String.raw`\text{New value}
      =\text{Original value}\times
      \left(1+\text{Percentage change}\right)`,
  ];

  return (
    <main
      style={{
        maxWidth: "1050px",
        width: "calc(100% - 40px)",
        margin: "40px auto 70px",
        boxSizing: "border-box",
      }}
    >
      <Link
        href="/maths/s1/chapter-5"
        style={{
          display: "inline-block",
          marginBottom: "26px",
          color: "#047857",
          fontSize: "17px",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        ← Back to Chapter 5
      </Link>

      <header style={{ marginBottom: "32px" }}>
        <p
          style={{
            margin: "0 0 8px",
            color: "#047857",
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "1.5px",
          }}
        >
          SECTION 4
        </p>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "44px",
            lineHeight: 1.15,
          }}
        >
          Percentage Change
        </h1>

        <p
          style={{
            margin: 0,
            color: "#4b5563",
            fontSize: "20px",
            lineHeight: 1.6,
          }}
        >
          Calculate positive and negative percentage changes.
        </p>
      </header>

      <section style={contentCardStyle}>
        <h2 style={{ margin: "0 0 12px", fontSize: "29px" }}>
          1. Finding the change
        </h2>

        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#374151" }}>
          Change is found by subtracting the original value from the new
          value.
        </p>

        <div style={formulaBoxStyle}>
          <MathFormula
            formula={String.raw`\text{Change}
              =\text{New value}-\text{Original value}`}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
            }}
          >
            <strong style={{ display: "block", fontSize: "19px" }}>
              Positive change
            </strong>
            <p style={{ margin: "8px 0 0", lineHeight: 1.6 }}>
              The new value is greater than the original value. This represents
              an increase.
            </p>
          </div>

          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff7ed",
              border: "1px solid #fed7aa",
            }}
          >
            <strong style={{ display: "block", fontSize: "19px" }}>
              Negative change
            </strong>
            <p style={{ margin: "8px 0 0", lineHeight: 1.6 }}>
              The new value is smaller than the original value. This represents
              a decrease.
            </p>
          </div>
        </div>
      </section>

      <section style={contentCardStyle}>
        <h2 style={{ margin: "0 0 12px", fontSize: "29px" }}>
          2. Finding the percentage change
        </h2>

        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#374151" }}>
          Always divide the change by the original value, not by the new value.
        </p>

        <div style={formulaBoxStyle}>
          <MathFormula
            formula={String.raw`\text{Percentage change}
              =\frac{\text{Change}}{\text{Original value}}\times100\%`}
          />
        </div>

        <div style={exampleStyle}>
          <h3 style={{ margin: "0 0 14px", fontSize: "22px" }}>
            Worked example: positive percentage change
          </h3>

          <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
            A value changes from 500 to 575. Find the percentage change.
          </p>

          <MathFormula
            formula={String.raw`\text{Change}=575-500=75`}
          />

          <MathFormula
            formula={String.raw`\text{Percentage change}
              =\frac{75}{500}\times100\%=15\%`}
          />

          <p style={{ marginBottom: 0, fontSize: "18px", fontWeight: 700 }}>
            The percentage change is +15%, so the value increased by 15%.
          </p>
        </div>

        <div
          style={{
            ...exampleStyle,
            background: "#fff7ed",
            border: "1px solid #fed7aa",
          }}
        >
          <h3 style={{ margin: "0 0 14px", fontSize: "22px" }}>
            Worked example: negative percentage change
          </h3>

          <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
            A value changes from 320 to 272. Find the percentage change.
          </p>

          <MathFormula
            formula={String.raw`\text{Change}=272-320=-48`}
          />

          <MathFormula
            formula={String.raw`\text{Percentage change}
              =\frac{-48}{320}\times100\%=-15\%`}
          />

          <p style={{ marginBottom: 0, fontSize: "18px", fontWeight: 700 }}>
            The percentage change is −15%, so the value decreased by 15%.
          </p>
        </div>
      </section>

      <section style={contentCardStyle}>
        <h2 style={{ margin: "0 0 12px", fontSize: "29px" }}>
          3. Finding the amount of change
        </h2>

        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#374151" }}>
          Write the percentage change as a decimal before multiplying.
        </p>

        <div style={formulaBoxStyle}>
          <MathFormula
            formula={String.raw`\text{Change}
              =\text{Original value}\times\text{Percentage change}`}
          />
        </div>

        <div
          style={{
            marginTop: "18px",
            padding: "20px",
            borderRadius: "16px",
            background: "#f9fafb",
          }}
        >
          <MathFormula
            formula={String.raw`+12\%=+0.12\qquad -7.5\%=-0.075`}
          />
        </div>
      </section>

      <section style={contentCardStyle}>
        <h2 style={{ margin: "0 0 12px", fontSize: "29px" }}>
          4. Finding the new value
        </h2>

        <div style={formulaBoxStyle}>
          <MathFormula
            formula={String.raw`\text{New value}
              =\text{Original value}\times
              \left(1+\text{Percentage change}\right)`}
          />
        </div>

        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#374151" }}>
          A negative percentage change automatically produces a multiplier
          smaller than 1.
        </p>

        <div style={exampleStyle}>
          <h3 style={{ margin: "0 0 14px", fontSize: "22px" }}>
            Worked example
          </h3>

          <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
            An original value of 840 has a percentage change of −7.5%. Find the
            new value.
          </p>

          <MathFormula
            formula={String.raw`-7.5\%=-0.075`}
          />

          <MathFormula
            formula={String.raw`\text{New value}
              =840\times(1-0.075)`}
          />

          <MathFormula
            formula={String.raw`\text{New value}
              =840\times0.925=777`}
          />

          <p style={{ marginBottom: 0, fontSize: "18px", fontWeight: 700 }}>
            The new value is 777.
          </p>
        </div>
      </section>

      <section style={contentCardStyle}>
        <h2 style={{ margin: "0 0 18px", fontSize: "29px" }}>
          Common mistakes
        </h2>

        <ul
          style={{
            margin: 0,
            paddingLeft: "26px",
            fontSize: "18px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          <li>Dividing by the new value instead of the original value.</li>
          <li>Ignoring the negative sign when the value decreases.</li>
          <li>Using 15 instead of 0.15 in a multiplication formula.</li>
          <li>
            Confusing a percentage decrease of 15% with a percentage change of
            −15%.
          </li>
          <li>Adding a negative percentage change instead of subtracting it.</li>
        </ul>
      </section>

      <section
        style={{
          ...contentCardStyle,
          background: "#ecfdf5",
          border: "1px solid #a7f3d0",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            color: "#047857",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "1.3px",
          }}
        >
          SECTION SUMMARY
        </p>

        <h2 style={{ margin: "0 0 22px", fontSize: "30px" }}>
          All 4 key formulas
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px",
          }}
        >
          {summaryFormulas.map((formula, index) => (
            <div key={index} style={formulaBoxStyle}>
              <MathFormula formula={formula} />
            </div>
          ))}
        </div>

        <Link
          href="/maths/s1/chapter-5"
          style={{
            display: "block",
            marginTop: "24px",
            padding: "17px 20px",
            borderRadius: "16px",
            background: "#059669",
            color: "#ffffff",
            fontSize: "19px",
            fontWeight: 800,
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Return to Chapter 5 →
        </Link>
      </section>
    </main>
  );
}