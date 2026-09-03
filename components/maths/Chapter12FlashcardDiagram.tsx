"use client";

import type { ReactNode } from "react";

export type Chapter12FlashcardDiagramKind =
  | "statistics-process"
  | "datum"
  | "data-set"
  | "raw-data"
  | "statistical-question"
  | "discrete-data"
  | "continuous-data"
  | "count-or-measure"
  | "rounded-measurement"
  | "classify-examples"
  | "frequency"
  | "tally-five"
  | "ungrouped-table"
  | "grouped-table"
  | "total-frequency"
  | "combined-diagram"
  | "read-diagram"
  | "stem-and-leaf"
  | "stem-key"
  | "back-to-back";

type Props = { kind: Chapter12FlashcardDiagramKind };

const ink = "#12345b";
const teal = "#0f8178";
const violet = "#7c3aed";
const orange = "#ea580c";
const blue = "#0284c7";

function Frame({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "min(760px, 100%)",
        margin: "0 auto 18px",
        padding: "18px 22px 14px",
        border: "1px solid #cbdaf0",
        borderRadius: 22,
        background: "#f8fbff",
        color: ink,
      }}
    >
      {children}
      {caption && (
        <div style={{ marginTop: 8, textAlign: "center", fontSize: 15, fontWeight: 750 }}>
          {caption}
        </div>
      )}
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 18 }}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} style={cellStyle("#e7f7f4")}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((value, columnIndex) => (
              <td key={columnIndex} style={cellStyle("white")}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function cellStyle(background: string) {
  return {
    border: "2px solid #9bb5cb",
    padding: "8px 18px",
    textAlign: "center" as const,
    background,
  };
}

function Tally({ extra = 0 }: { extra?: number }) {
  return (
    <svg viewBox="0 0 190 82" style={{ width: 190, height: 82 }}>
      {[38, 58, 78, 98].map((x) => (
        <line key={x} x1={x} y1="14" x2={x} y2="68" stroke={blue} strokeWidth="7" strokeLinecap="round" />
      ))}
      <line x1="28" y1="61" x2="108" y2="20" stroke={blue} strokeWidth="7" strokeLinecap="round" />
      {Array.from({ length: extra }).map((_, index) => {
        const x = 132 + index * 20;
        return <line key={x} x1={x} y1="14" x2={x} y2="68" stroke={blue} strokeWidth="7" strokeLinecap="round" />;
      })}
    </svg>
  );
}

function CombinedChart({ highlightHighest = false }: { highlightHighest?: boolean }) {
  const months = ["Mar", "Apr", "May", "Jun"];
  const bars = [68, 82, 95, 112];
  const line = [112, 91, 104, 63];
  const x = [112, 205, 298, 391];
  const points = x.map((pointX, i) => `${pointX},${line[i]}`).join(" ");
  return (
    <svg viewBox="0 0 520 230" style={{ width: "100%", maxHeight: 230 }} role="img" aria-label="Combined bar and line diagram">
      <line x1="70" y1="24" x2="70" y2="184" stroke={ink} strokeWidth="3" />
      <line x1="448" y1="24" x2="448" y2="184" stroke={ink} strokeWidth="3" />
      <line x1="70" y1="184" x2="448" y2="184" stroke={ink} strokeWidth="3" />
      <text x="20" y="110" fill={ink} fontWeight="700" transform="rotate(-90 20 110)">Temperature (°C)</text>
      <text x="500" y="132" fill={ink} fontWeight="700" transform="rotate(-90 500 132)">Rainfall (mm)</text>
      {bars.map((height, i) => (
        <rect key={months[i]} x={x[i] - 24} y={184 - height} width="48" height={height} rx="5" fill="#fde68a" stroke={orange} strokeWidth="2" />
      ))}
      <polyline points={points} fill="none" stroke={blue} strokeWidth="5" />
      {x.map((pointX, i) => (
        <circle key={pointX} cx={pointX} cy={line[i]} r={highlightHighest && i === 3 ? 9 : 6} fill={highlightHighest && i === 3 ? violet : blue} />
      ))}
      {months.map((month, i) => <text key={month} x={x[i]} y="208" textAnchor="middle" fill={ink} fontWeight="700">{month}</text>)}
      <rect x="92" y="10" width="18" height="12" fill="#fde68a" stroke={orange} />
      <text x="116" y="21" fill={ink}>Temperature</text>
      <line x1="270" y1="16" x2="294" y2="16" stroke={blue} strokeWidth="4" />
      <text x="302" y="21" fill={ink}>Rainfall</text>
    </svg>
  );
}

function StemLeaf({ showKey = true }: { showKey?: boolean }) {
  return (
    <div
      style={{
        width: 330,
        margin: "0 auto",
        fontSize: 22,
        fontVariantNumeric: "tabular-nums",
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", fontWeight: 800, borderBottom: `3px solid ${ink}`, paddingBottom: 5 }}>
        <span style={{ textAlign: "right", paddingRight: 22 }}>Stem</span>
        <span style={{ paddingLeft: 22, textAlign: "left" }}>Leaf</span>
      </div>
      {[[3, "2  5  9"], [4, "0  2  7  8"], [5, "1  4"]].map(([stem, leaves]) => (
        <div key={stem} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", lineHeight: 1.8 }}>
          <span style={{ textAlign: "right", paddingRight: 22, borderRight: `3px solid ${ink}` }}>{stem}</span>
          <span style={{ paddingLeft: 22, textAlign: "left", whiteSpace: "pre" }}>{leaves}</span>
        </div>
      ))}
      {showKey && <div style={{ marginTop: 8, textAlign: "center", fontSize: 16 }}>Key: 3 | 2 means 32</div>}
    </div>
  );
}

export default function Chapter12FlashcardDiagram({ kind }: Props) {
  switch (kind) {
    case "statistics-process":
      return (
        <Frame caption="A statistical investigation follows a cycle.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, alignItems: "center" }}>
            {["Collect", "Organize", "Present", "Interpret"].map((label, index) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flex: 1, padding: "14px 8px", borderRadius: 14, textAlign: "center", color: "white", background: [violet, teal, blue, orange][index], fontWeight: 800 }}>{label}</div>
                {index < 3 && <span style={{ fontSize: 24 }}>→</span>}
              </div>
            ))}
          </div>
        </Frame>
      );
    case "datum":
      return <Frame caption="One recorded journey time"><div style={{ fontSize: 64, fontWeight: 900, color: violet, textAlign: "center" }}>22 min</div></Frame>;
    case "data-set":
      return <Frame caption="Journey times (minutes)"><div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>{[22, 18, 25, 19, 22, 31].map((v, i) => <span key={i} style={{ padding: "10px 16px", borderRadius: 12, background: "#ede9fe", fontSize: 25, fontWeight: 800 }}>{v}</span>)}</div></Frame>;
    case "raw-data":
      return <Frame caption="Values exactly as collected"><div style={{ fontSize: 30, letterSpacing: 7, lineHeight: 1.7, textAlign: "center", fontWeight: 750 }}>21 16 26 20<br />24 17 17 23<br />22 21</div></Frame>;
    case "statistical-question":
      return <Frame><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}><div style={questionBox}><b>A</b><br />How old are you?</div><div style={questionBox}><b>B</b><br />How old are the students in this class?</div></div></Frame>;
    case "discrete-data":
      return <Frame caption="Books read by four students"><div style={{ display: "flex", justifyContent: "center", gap: 12 }}>{[1, 4, 2, 5].map((v, i) => <div key={i} style={{ width: 80, textAlign: "center" }}><div style={{ height: v * 17, margin: "0 auto 7px", width: 44, background: violet, borderRadius: "6px 6px 0 0" }} /><b>{v}</b></div>)}</div></Frame>;
    case "continuous-data":
      return <Frame caption="Height is read from a measuring scale"><svg viewBox="0 0 520 130" style={{ width: "100%", height: 130 }}><line x1="60" y1="70" x2="460" y2="70" stroke={ink} strokeWidth="6" />{Array.from({ length: 17 }).map((_, i) => <line key={i} x1={60 + i * 25} y1={i % 4 === 0 ? 48 : 58} x2={60 + i * 25} y2="82" stroke={ink} strokeWidth="3" />)}<circle cx="327" cy="70" r="12" fill={orange} /><text x="50" y="112" fill={ink}>140 cm</text><text x="420" y="112" fill={ink}>180 cm</text></svg></Frame>;
    case "count-or-measure":
      return <Frame><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, textAlign: "center" }}><div style={bigBox}><div style={{ fontSize: 42 }}>● ● ● ●</div><b>COUNT</b></div><div style={bigBox}><div style={{ fontSize: 42 }}>📏</div><b>MEASURE</b></div></div></Frame>;
    case "rounded-measurement":
      return <Frame caption="A scale may display a rounded reading"><svg viewBox="0 0 420 150" style={{ width: "100%", height: 150 }}><path d="M90 130 A120 120 0 0 1 330 130" fill="#e0f2fe" stroke={blue} strokeWidth="5" /><line x1="210" y1="125" x2="264" y2="55" stroke={orange} strokeWidth="7" strokeLinecap="round" /><circle cx="210" cy="125" r="11" fill={ink} /><text x="210" y="105" textAnchor="middle" fontSize="30" fontWeight="800" fill={ink}>52 kg</text></svg></Frame>;
    case "classify-examples":
      return <Frame><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}><div style={bigBox}><b>Number of siblings</b><div style={{ fontSize: 32, marginTop: 10 }}>0, 1, 2, 3, …</div></div><div style={bigBox}><b>Journey time</b><div style={{ fontSize: 32, marginTop: 10 }}>18.4 min</div></div></div></Frame>;
    case "frequency":
      return <Frame caption="Count how often each value occurs"><DataTable headers={["Score", "Occurrences"]} rows={[[2, "●●"], [3, "●●●●"], [4, "●●●"]]} /></Frame>;
    case "tally-five":
      return <Frame caption="Read the crossed bundle first, then the extra marks."><div style={{ display: "flex", justifyContent: "center" }}><Tally extra={2} /></div></Frame>;
    case "ungrouped-table":
      return <Frame><DataTable headers={["Number of pets", "Frequency"]} rows={[[0, 4], [1, 6], [2, 3], [3, 1]]} /></Frame>;
    case "grouped-table":
      return <Frame><DataTable headers={["Journey time (min)", "Frequency"]} rows={[["0–9", 3], ["10–19", 4], ["20–29", 6], ["30–39", 2]]} /></Frame>;
    case "total-frequency":
      return <Frame><DataTable headers={["Journey time (min)", "Frequency"]} rows={[["0–9", 3], ["10–19", 4], ["20–29", 6], ["30–39", 2], ["Total", "?"]]} /></Frame>;
    case "combined-diagram":
      return <Frame><CombinedChart /></Frame>;
    case "read-diagram":
      return <Frame caption="Use the rainfall line, not the bars."><CombinedChart highlightHighest /></Frame>;
    case "stem-and-leaf":
      return <Frame><StemLeaf /></Frame>;
    case "stem-key":
      return <Frame caption="Use the place values to interpret the entry."><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: 250, margin: "0 auto", fontSize: 56, fontWeight: 900 }}><span style={{ textAlign: "right", paddingRight: 26, borderRight: `5px solid ${ink}` }}>4</span><span style={{ paddingLeft: 26 }}>2</span></div></Frame>;
    case "back-to-back":
      return (
        <Frame caption="Two groups share the same stem column.">
          <div
            style={{
              width: 470,
              margin: "0 auto",
              fontSize: 20,
              fontVariantNumeric: "tabular-nums",
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 2fr",
                textAlign: "center",
                fontWeight: 800,
                borderBottom: `3px solid ${ink}`,
                paddingBottom: 5,
              }}
            >
              <span>Class A</span><span>Stem</span><span>Class B</span>
            </div>
            {[
              ["9  5  2", 3, "1  4"],
              ["8  6  3  0", 4, "2  2  7"],
              ["4  1", 5, "0  3  8"],
            ].map(([left, stem, right]) => (
              <div
                key={stem}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 2fr",
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    paddingRight: 20,
                    textAlign: "right",
                    whiteSpace: "pre",
                  }}
                >
                  {left}
                </span>
                <span
                  style={{
                    borderLeft: `3px solid ${ink}`,
                    borderRight: `3px solid ${ink}`,
                    textAlign: "center",
                  }}
                >
                  {stem}
                </span>
                <span
                  style={{
                    paddingLeft: 20,
                    textAlign: "left",
                    whiteSpace: "pre",
                  }}
                >
                  {right}
                </span>
              </div>
            ))}
          </div>
        </Frame>
      );
  }
}

const questionBox = {
  padding: "18px",
  border: "2px solid #b8cce0",
  borderRadius: 16,
  background: "white",
  textAlign: "center" as const,
  fontSize: 20,
  lineHeight: 1.5,
};

const bigBox = {
  padding: "16px",
  border: "2px solid #b8cce0",
  borderRadius: 16,
  background: "white",
  textAlign: "center" as const,
  fontSize: 20,
};
