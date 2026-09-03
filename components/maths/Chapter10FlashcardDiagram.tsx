"use client";

import type { ReactNode } from "react";

export type Chapter10FlashcardDiagramKind =
  | "c10-congruent-meaning"
  | "c10-correspondence"
  | "c10-equal-angles"
  | "c10-equal-sides"
  | "c10-similar-angle-question"
  | "c10-sss"
  | "c10-sas"
  | "c10-asa"
  | "c10-aas"
  | "c10-rhs"
  | "c10-similar-meaning"
  | "c10-similar-correspondence"
  | "c10-scale-factor"
  | "c10-proportional-sides"
  | "c10-aaa"
  | "c10-similarity-sss"
  | "c10-similarity-sas";

type Props = {
  kind: Chapter10FlashcardDiagramKind;
};

type PairMode =
  | "plain"
  | "angles"
  | "sides"
  | "sss"
  | "sas"
  | "asa"
  | "aas"
  | "similar"
  | "scale"
  | "proportional"
  | "aaa"
  | "similarity-sss"
  | "similarity-sas";

const ink = "#0f766e";
const purple = "#7c3aed";
const blue = "#0284c7";
const orange = "#ea580c";

type Point = readonly [number, number];

function angleArcPath(vertex: Point, firstRay: Point, secondRay: Point, radius: number) {
  const firstLength = Math.hypot(firstRay[0] - vertex[0], firstRay[1] - vertex[1]);
  const secondLength = Math.hypot(secondRay[0] - vertex[0], secondRay[1] - vertex[1]);
  const firstUnit: Point = [
    (firstRay[0] - vertex[0]) / firstLength,
    (firstRay[1] - vertex[1]) / firstLength,
  ];
  const secondUnit: Point = [
    (secondRay[0] - vertex[0]) / secondLength,
    (secondRay[1] - vertex[1]) / secondLength,
  ];
  const start: Point = [
    vertex[0] + firstUnit[0] * radius,
    vertex[1] + firstUnit[1] * radius,
  ];
  const end: Point = [
    vertex[0] + secondUnit[0] * radius,
    vertex[1] + secondUnit[1] * radius,
  ];
  const cross = firstUnit[0] * secondUnit[1] - firstUnit[1] * secondUnit[0];
  const sweep = cross >= 0 ? 1 : 0;

  return `M ${start[0].toFixed(1)} ${start[1].toFixed(1)} A ${radius} ${radius} 0 0 ${sweep} ${end[0].toFixed(1)} ${end[1].toFixed(1)}`;
}

function AngleMark({
  vertex,
  firstRay,
  secondRay,
  count,
  colour,
}: {
  vertex: Point;
  firstRay: Point;
  secondRay: Point;
  count: 1 | 2 | 3;
  colour: string;
}) {
  return (
    <g>
      {Array.from({ length: count }, (_, index) => {
        const radius = 24 + index * 10;
        return (
          <path
            key={radius}
            d={angleArcPath(vertex, firstRay, secondRay, radius)}
            fill="none"
            stroke={colour}
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

function Tick({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={blue} strokeWidth="5" strokeLinecap="round" />;
}

function TrianglePair({ mode }: { mode: PairMode }) {
  const similar = ["similar", "scale", "proportional", "aaa", "similarity-sss", "similarity-sas"].includes(mode);
  const showAllAngles = ["angles", "aaa"].includes(mode);
  const showAllSides = ["sides", "sss"].includes(mode);
  const showTopAngle = ["sas", "similarity-sas"].includes(mode);
  const showLeftAngles = mode === "asa";
  const showOuterAngles = mode === "aas";

  const left: { a: Point; b: Point; c: Point } = similar
    ? { a: [145, 80], b: [85, 210], c: [205, 210] }
    : { a: [160, 38], b: [55, 210], c: [270, 210] };
  const right: { a: Point; b: Point; c: Point } = similar
    ? { a: [535, 30], b: [445, 225], c: [625, 225] }
    : { a: [540, 38], b: [435, 210], c: [650, 210] };

  return (
    <svg viewBox="0 0 730 255" role="img" aria-label="Two labelled triangles showing corresponding parts">
      <polygon points={`${left.a.join(",")} ${left.b.join(",")} ${left.c.join(",")}`} />
      <polygon points={`${right.a.join(",")} ${right.b.join(",")} ${right.c.join(",")}`} />

      <g className="labels">
        <text x={left.a[0]} y={left.a[1] - 12}>A</text>
        <text x={left.b[0] - 17} y={left.b[1] + 21}>B</text>
        <text x={left.c[0] + 17} y={left.c[1] + 21}>C</text>
        <text x={right.a[0]} y={right.a[1] - 12}>X</text>
        <text x={right.b[0] - 17} y={right.b[1] + 21}>Y</text>
        <text x={right.c[0] + 17} y={right.c[1] + 21}>Z</text>
      </g>

      {(showAllAngles || showTopAngle || showLeftAngles || showOuterAngles) && (
        <>
          <AngleMark vertex={left.a} firstRay={left.c} secondRay={left.b} count={1} colour={purple} />
          <AngleMark vertex={right.a} firstRay={right.c} secondRay={right.b} count={1} colour={purple} />
        </>
      )}

      {(showAllAngles || showLeftAngles) && (
        <>
          <AngleMark vertex={left.b} firstRay={left.a} secondRay={left.c} count={2} colour={blue} />
          <AngleMark vertex={right.b} firstRay={right.a} secondRay={right.c} count={2} colour={blue} />
        </>
      )}

      {(showAllAngles || showOuterAngles) && (
        <>
          <AngleMark vertex={left.c} firstRay={left.b} secondRay={left.a} count={showAllAngles ? 3 : 2} colour={orange} />
          <AngleMark vertex={right.c} firstRay={right.b} secondRay={right.a} count={showAllAngles ? 3 : 2} colour={orange} />
        </>
      )}

      {(showAllSides || mode === "sas" || showLeftAngles) && (
        <>
          <Tick x1={left.a[0] - 59} y1={(left.a[1] + left.b[1]) / 2 - 4} x2={left.a[0] - 44} y2={(left.a[1] + left.b[1]) / 2 + 5} />
          <Tick x1={right.a[0] - 70} y1={(right.a[1] + right.b[1]) / 2 - 4} x2={right.a[0] - 54} y2={(right.a[1] + right.b[1]) / 2 + 6} />
        </>
      )}

      {(showAllSides || mode === "sas") && (
        <>
          <Tick x1={left.a[0] + 45} y1={(left.a[1] + left.c[1]) / 2 + 5} x2={left.a[0] + 60} y2={(left.a[1] + left.c[1]) / 2 - 4} />
          <Tick x1={right.a[0] + 54} y1={(right.a[1] + right.c[1]) / 2 + 6} x2={right.a[0] + 70} y2={(right.a[1] + right.c[1]) / 2 - 4} />
          {showAllSides && <>
            <Tick x1={left.a[0] + 49} y1={(left.a[1] + left.c[1]) / 2 + 14} x2={left.a[0] + 64} y2={(left.a[1] + left.c[1]) / 2 + 5} />
            <Tick x1={right.a[0] + 59} y1={(right.a[1] + right.c[1]) / 2 + 15} x2={right.a[0] + 75} y2={(right.a[1] + right.c[1]) / 2 + 5} />
          </>}
        </>
      )}

      {(showAllSides || showOuterAngles) && (
        <>
          <Tick x1={left.a[0] - 7} y1={left.b[1] - 10} x2={left.a[0] - 7} y2={left.b[1] + 10} />
          <Tick x1={left.a[0]} y1={left.b[1] - 10} x2={left.a[0]} y2={left.b[1] + 10} />
          <Tick x1={left.a[0] + 7} y1={left.b[1] - 10} x2={left.a[0] + 7} y2={left.b[1] + 10} />
          <Tick x1={right.a[0] - 7} y1={right.b[1] - 10} x2={right.a[0] - 7} y2={right.b[1] + 10} />
          <Tick x1={right.a[0]} y1={right.b[1] - 10} x2={right.a[0]} y2={right.b[1] + 10} />
          <Tick x1={right.a[0] + 7} y1={right.b[1] - 10} x2={right.a[0] + 7} y2={right.b[1] + 10} />
        </>
      )}

      {mode === "scale" && <g className="measurements"><text x="105" y="151">3</text><text x="145" y="232">4</text><text x="472" y="164">9</text><text x="535" y="247">12</text></g>}
      {(mode === "proportional" || mode === "similarity-sss") && <g className="measurements"><text x="105" y="151">3</text><text x="145" y="232">4</text><text x="187" y="151">5</text><text x="472" y="164">6</text><text x="535" y="247">8</text><text x="601" y="164">10</text></g>}
      {mode === "similarity-sas" && <g className="measurements"><text x="104" y="151">3</text><text x="187" y="151">4</text><text x="470" y="150">6</text><text x="601" y="150">8</text></g>}
    </svg>
  );
}

function RightTrianglePair() {
  return (
    <svg viewBox="0 0 730 255" role="img" aria-label="Two right-angled triangles with equal hypotenuses and one equal side">
      <polygon points="85,42 85,210 300,210" />
      <polygon points="445,42 445,210 660,210" />
      <g className="labels"><text x="85" y="28">A</text><text x="67" y="230">B</text><text x="316" y="230">C</text><text x="445" y="28">X</text><text x="427" y="230">Y</text><text x="676" y="230">Z</text></g>
      <path d="M85 190 H105 V210" fill="none" stroke={orange} strokeWidth="5" />
      <path d="M445 190 H465 V210" fill="none" stroke={orange} strokeWidth="5" />
      <Tick x1={77} y1={120} x2={93} y2={120} />
      <Tick x1={437} y1={120} x2={453} y2={120} />
      <Tick x1={181} y1={117} x2={195} y2={101} />
      <Tick x1={188} y1={123} x2={202} y2={107} />
      <Tick x1={541} y1={117} x2={555} y2={101} />
      <Tick x1={548} y1={123} x2={562} y2={107} />
    </svg>
  );
}

const diagramConfig: Record<Exclude<Chapter10FlashcardDiagramKind, "c10-rhs">, { mode: PairMode; caption: string }> = {
  "c10-congruent-meaning": { mode: "plain", caption: "Compare the two triangles." },
  "c10-correspondence": { mode: "plain", caption: "Use the order of the vertex names." },
  "c10-equal-angles": { mode: "plain", caption: "Compare the labelled congruent triangles." },
  "c10-equal-sides": { mode: "plain", caption: "Compare the labelled congruent triangles." },
  "c10-similar-angle-question": { mode: "similar", caption: "Compare the labelled similar triangles." },
  "c10-sss": { mode: "sss", caption: "Study the marked sides." },
  "c10-sas": { mode: "sas", caption: "Study the marked sides and angle." },
  "c10-asa": { mode: "asa", caption: "Study the marked angles and side." },
  "c10-aas": { mode: "aas", caption: "Study the marked angles and side." },
  "c10-similar-meaning": { mode: "similar", caption: "Compare the two triangles." },
  "c10-similar-correspondence": { mode: "similar", caption: "Use the order of the vertex names." },
  "c10-scale-factor": { mode: "scale", caption: "Compare the corresponding side lengths." },
  "c10-proportional-sides": { mode: "proportional", caption: "Compare the corresponding side lengths." },
  "c10-aaa": { mode: "aaa", caption: "Study the matching angle marks." },
  "c10-similarity-sss": { mode: "similarity-sss", caption: "Study the three side lengths." },
  "c10-similarity-sas": { mode: "similarity-sas", caption: "Study the marked angle and side lengths." },
};

export default function Chapter10FlashcardDiagram({ kind }: Props) {
  if (kind === "c10-rhs") {
    return (
      <DiagramFrame caption="Study the right-angle and side marks.">
        <RightTrianglePair />
      </DiagramFrame>
    );
  }

  const config = diagramConfig[kind];

  return (
    <DiagramFrame caption={config.caption}>
      <TrianglePair mode={config.mode} />
    </DiagramFrame>
  );
}

function DiagramFrame({ children, caption }: { children: ReactNode; caption: string }) {

  return (
    <div style={{ width: "100%", maxWidth: 720, margin: "0 auto 8px" }}>
      <div className="diagramStage">
        {children}
      </div>
      <p className="caption">{caption}</p>

      <style jsx>{`
        .diagramStage { padding: 6px 12px 0; border: 1px solid #c7d2fe; border-radius: 18px; background: rgba(255,255,255,.92); }
        .diagramStage :global(svg) { display: block; width: 100%; height: 220px; }
        .diagramStage :global(polygon) { fill: rgba(45,212,191,.12); stroke: ${ink}; stroke-width: 5; stroke-linejoin: round; }
        .diagramStage :global(.labels text) { fill: #172033; font-size: 22px; font-weight: 900; text-anchor: middle; }
        .diagramStage :global(.measurements text) { fill: ${purple}; font-size: 20px; font-weight: 900; text-anchor: middle; }
        .caption { margin: 7px 0 0; color: #475569; font-size: 15px; font-weight: 800; text-align: center; }
        @media (max-width: 640px) { .diagramStage :global(svg) { height: 170px; } .caption { font-size: 13px; } }
      `}</style>
    </div>
  );
}
