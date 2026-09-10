"use client";

import type { ReactNode } from "react";

export type Chapter9FlashcardDiagramKind =
  | "straight-line"
  | "vertically-opposite"
  | "angles-at-point"
  | "corresponding"
  | "alternate"
  | "same-side-interior"
  | "converse-rules"
  | "triangle-angle-sum"
  | "triangle-exterior"
  | "triangle-exterior-example";

type Chapter9FlashcardDiagramProps = {
  kind: Chapter9FlashcardDiagramKind;
};

const ink = "#27314a";
const green = "#16a36b";
const red = "#e95c70";
const blue = "#4f64e8";
const amber = "#e6a11b";

function ParallelLines() {
  return (
    <>
      <line x1="45" y1="55" x2="375" y2="55" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      <line x1="45" y1="140" x2="375" y2="140" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      <line x1="118" y1="174" x2="282" y2="20" stroke={green} strokeWidth="7" strokeLinecap="round" />
      <path d="M70 45 l11 10 -11 10 M86 45 l11 10 -11 10" fill="none" stroke={red} strokeWidth="4" />
      <path d="M70 130 l11 10 -11 10 M86 130 l11 10 -11 10" fill="none" stroke={red} strokeWidth="4" />
      <text x="385" y="62" fontSize="24" fontWeight="700" fill={ink}>p</text>
      <text x="385" y="147" fontSize="24" fontWeight="700" fill={ink}>q</text>
      <text x="287" y="27" fontSize="22" fontWeight="700" fill={green}>t</text>
    </>
  );
}

function AngleLabel({ x, y, children, colour = blue }: { x: number; y: number; children: ReactNode; colour?: string }) {
  const isWide = typeof children === "string" && children.length > 2;

  return (
    <g>
      <ellipse cx={x} cy={y - 7} rx={isWide ? 30 : 19} ry="19" fill="white" stroke={colour} strokeWidth="2" />
      <text x={x} y={y} textAnchor="middle" fontSize="20" fontWeight="800" fill={colour}>{children}</text>
    </g>
  );
}

export default function Chapter9FlashcardDiagram({ kind }: Chapter9FlashcardDiagramProps) {
  let drawing: ReactNode = null;
  let label = "Chapter 9 angle diagram";

  switch (kind) {
    case "straight-line":
      label = "Adjacent angles on a straight line";
      drawing = (
        <>
          <line x1="55" y1="132" x2="365" y2="132" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <line x1="210" y1="132" x2="286" y2="35" stroke={green} strokeWidth="7" strokeLinecap="round" />
          <path d="M151 132 A59 59 0 0 1 174 85" fill="none" stroke={red} strokeWidth="4" />
          <path d="M174 85 A76 76 0 0 1 275 132" fill="none" stroke={blue} strokeWidth="4" />
          <AngleLabel x={151} y={91} colour={red}>a</AngleLabel>
          <AngleLabel x={270} y={91}>b</AngleLabel>
        </>
      );
      break;

    case "vertically-opposite":
      label = "Vertically opposite angles";
      drawing = (
        <>
          <line x1="75" y1="35" x2="345" y2="155" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <line x1="75" y1="155" x2="345" y2="35" stroke={green} strokeWidth="7" strokeLinecap="round" />
          <path d="M177 80 A48 48 0 0 1 243 80" fill="none" stroke={red} strokeWidth="4" />
          <path d="M243 110 A48 48 0 0 1 177 110" fill="none" stroke={blue} strokeWidth="4" />
          <AngleLabel x={210} y={62} colour={red}>a</AngleLabel>
          <AngleLabel x={210} y={153}>b</AngleLabel>
        </>
      );
      break;

    case "angles-at-point":
      label = "Angles around a point";
      drawing = (
        <>
          <circle cx="210" cy="96" r="7" fill={ink} />
          <line x1="210" y1="96" x2="205" y2="18" stroke={green} strokeWidth="7" strokeLinecap="round" />
          <line x1="210" y1="96" x2="365" y2="118" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <line x1="210" y1="96" x2="268" y2="170" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <line x1="210" y1="96" x2="72" y2="158" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <line x1="210" y1="96" x2="83" y2="35" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <AngleLabel x={267} y={62} colour={red}>a</AngleLabel>
          <AngleLabel x={291} y={126}>b</AngleLabel>
          <AngleLabel x={191} y={157} colour={amber}>c</AngleLabel>
          <AngleLabel x={128} y={87} colour={green}>d</AngleLabel>
        </>
      );
      break;

    case "corresponding":
      label = "Corresponding angles on parallel lines";
      drawing = (
        <>
          <ParallelLines />
          <AngleLabel x={282} y={48} colour={red}>a</AngleLabel>
          <AngleLabel x={192} y={133}>b</AngleLabel>
        </>
      );
      break;

    case "alternate":
      label = "Alternate angles on parallel lines";
      drawing = (
        <>
          <ParallelLines />
          <AngleLabel x={190} y={91} colour={red}>a</AngleLabel>
          <AngleLabel x={192} y={133}>b</AngleLabel>
        </>
      );
      break;

    case "same-side-interior":
      label = "Interior angles on the same side";
      drawing = (
        <>
          <ParallelLines />
          <AngleLabel x={190} y={91} colour={red}>a</AngleLabel>
          <AngleLabel x={150} y={133}>b</AngleLabel>
        </>
      );
      break;

    case "converse-rules":
      label = "Three converse rules for parallel lines";
      drawing = (
        <>
          <ParallelLines />
          <rect x="104" y="72" width="212" height="52" rx="14" fill="white" stroke="#c7d2fe" strokeWidth="2" />
          <text x="210" y="91" textAnchor="middle" fontSize="15" fontWeight="800" fill={red}>corr. a = b  ·  alt. a = b</text>
          <text x="210" y="114" textAnchor="middle" fontSize="15" fontWeight="800" fill={blue}>int. a + b = 180°  ⇒  p ∥ q</text>
        </>
      );
      break;

    case "triangle-angle-sum":
      label = "Interior angles of a triangle";
      drawing = (
        <>
          <path d="M76 153 L210 30 L348 153 Z" fill="#eef2ff" stroke={ink} strokeWidth="7" strokeLinejoin="round" />
          <AngleLabel x={104} y={142} colour={red}>a</AngleLabel>
          <AngleLabel x={210} y={65}>b</AngleLabel>
          <AngleLabel x={319} y={142} colour={green}>c</AngleLabel>
        </>
      );
      break;

    case "triangle-exterior":
      label = "Exterior angle of a triangle";
      drawing = (
        <>
          <path d="M78 145 L205 35 L322 145 Z" fill="#eef2ff" stroke={ink} strokeWidth="7" strokeLinejoin="round" />
          <line x1="322" y1="145" x2="388" y2="145" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <AngleLabel x={108} y={136} colour={red}>a</AngleLabel>
          <AngleLabel x={205} y={67}>b</AngleLabel>
          <AngleLabel x={347} y={127} colour={green}>c</AngleLabel>
        </>
      );
      break;

    case "triangle-exterior-example":
      label = "Exterior-angle example";
      drawing = (
        <>
          <path d="M78 145 L205 35 L322 145 Z" fill="#eef2ff" stroke={ink} strokeWidth="7" strokeLinejoin="round" />
          <line x1="322" y1="145" x2="388" y2="145" stroke={ink} strokeWidth="7" strokeLinecap="round" />
          <AngleLabel x={111} y={136} colour={red}>48°</AngleLabel>
          <AngleLabel x={205} y={67}>67°</AngleLabel>
          <AngleLabel x={350} y={127} colour={green}>x</AngleLabel>
        </>
      );
      break;
  }

  return (
    <div
      role="img"
      aria-label={label}
      style={{
        width: "min(100%, 520px)",
        margin: "4px auto 12px",
        padding: "8px 12px",
        borderRadius: "18px",
        background: "rgba(255, 255, 255, 0.82)",
        border: "1px solid #dbe4ff",
      }}
    >
      <svg viewBox="0 0 420 190" width="100%" height="190" aria-hidden="true">
        {drawing}
      </svg>
    </div>
  );
}
