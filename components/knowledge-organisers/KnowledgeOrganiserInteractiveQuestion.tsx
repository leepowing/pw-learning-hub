"use client";

import { useMemo, useState } from "react";
import type { KnowledgeQuestion } from "@/data/knowledgeOrganisers/types";

type Props = { question: KnowledgeQuestion; onComplete: (mark: number) => void };
const normalise = (value: string) => value.trim().toLowerCase().replace(/[.]/g, "").replace(/\s+/g, " ");

function Diagram({ kind }: { kind: "photosynthesis" | "leaf" | "digestive-system" }) {
  if (kind === "photosynthesis") return <svg className="scienceDiagram" viewBox="0 0 736 736" role="img" aria-label="Original teacher worksheet photosynthesis diagram with positions 1 to 5">
    <image href="/knowledge-organisers/science/photosynthesis-label-diagram.png" width="736" height="736" />

    {/* Cover the printed answer words while retaining the original plant and arrows. */}
    <rect x="18" y="320" width="200" height="120" rx="6" fill="#eff8fc" />
    <rect x="38" y="610" width="170" height="92" rx="6" fill="#75452c" />
    <rect x="102" y="430" width="330" height="78" rx="6" fill="#eff8fc" />
    <rect x="552" y="255" width="184" height="72" rx="6" fill="#eff8fc" />
    <rect x="220" y="66" width="132" height="70" rx="6" fill="#eff8fc" />

    {/* Number positions follow Task 1 in WHA_B2.2.1WC_Photosynthesis.pdf. */}
    <g><circle cx="155" cy="365" r="42" fill="#ffffff" stroke="#94a3b8" strokeWidth="2"/><text x="155" y="380" fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">1</text></g>
    <g><circle cx="142" cy="655" r="42" fill="#ffffff" stroke="#94a3b8" strokeWidth="2"/><text x="142" y="670" fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">2</text></g>
    <g><circle cx="355" cy="472" r="42" fill="#ffffff" stroke="#94a3b8" strokeWidth="2"/><text x="355" y="487" fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">3</text></g>
    <g><circle cx="648" cy="296" r="42" fill="#ffffff" stroke="#94a3b8" strokeWidth="2"/><text x="648" y="311" fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">4</text></g>
    <g><circle cx="292" cy="101" r="42" fill="#ffffff" stroke="#94a3b8" strokeWidth="2"/><text x="292" y="116" fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">5</text></g>
  </svg>;
  if (kind === "leaf") return <svg className="scienceDiagram" viewBox="0 0 1020 717" role="img" aria-label="Original teacher worksheet leaf cross-section with positions 1 to 4">
    <image href="/knowledge-organisers/science/leaf-cross-section-diagram.png" x="178" width="841" height="717" />
    <g stroke="#0f172a" strokeWidth="4" fill="none">
      <path d="M150 90 H340"/><path d="M150 245 H350"/><path d="M150 435 H360"/><path d="M150 650 H355"/>
    </g>
    {[[1, 88], [2, 243], [3, 433], [4, 648]].map(([number, y]) => <g key={number}>
      <circle cx="92" cy={y} r="42" fill="#ffffff" stroke="#64748b" strokeWidth="3" />
      <text x="92" y={y + 15} fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">{number}</text>
    </g>)}
  </svg>;

  const labels: Array<[number, number, number, number, number, number]> = [
    [1, 72, 145, 354, 158, 215], [2, 72, 265, 421, 281, 225],
    [3, 72, 365, 412, 408, 215], [4, 72, 445, 412, 456, 230],
    [5, 72, 535, 350, 524, 225], [6, 828, 365, 516, 434, 680],
    [7, 828, 445, 450, 464, 670], [8, 828, 535, 450, 550, 675],
    [9, 828, 610, 452, 627, 665], [10, 828, 680, 452, 665, 660],
  ];

  return <svg className="scienceDiagram" viewBox="0 0 900 720" role="img" aria-label="Digestive system diagram with clearly marked positions 1 to 10">
    <rect width="900" height="720" fill="#ffffff" />
    <image href="/knowledge-organisers/science/digestive-system-label-diagram.jpg" x="250" y="15" width="400" height="665" preserveAspectRatio="xMidYMid meet" />
    <g stroke="#166534" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {labels.map(([number, x, y, targetX, targetY, bendX]) => <path key={`line-${number}`} d={`M ${x < 450 ? x + 34 : x - 34} ${y} H ${bendX} L ${targetX} ${targetY}`} />)}
    </g>
    <g>
      {labels.map(([number, , , targetX, targetY]) => <circle key={`target-${number}`} cx={targetX} cy={targetY} r="6" fill="#15803d" stroke="#ffffff" strokeWidth="2" />)}
    </g>
    {labels.map(([number, x, y]) => <g key={number}>
      <circle cx={x} cy={y} r="31" fill="#ffffff" stroke="#15803d" strokeWidth="4" />
      <text x={x} y={y + 11} fill="#050505" fontSize="31" fontWeight="800" textAnchor="middle">{number}</text>
    </g>)}
    <text x="450" y="708" fill="#475569" fontSize="15" textAnchor="middle">Digestive-system diagram supplied by the user</text>
  </svg>;
}

export default function KnowledgeOrganiserInteractiveQuestion({ question, onComplete }: Props) {
  const interaction = question.interaction;
  const count = interaction?.kind === "fill-blanks" || interaction?.kind === "diagram-labels" ? interaction.answers.length : interaction?.kind === "matching" ? interaction.left.length : interaction?.kind === "ordering" ? interaction.answer.length : interaction?.kind === "classification" ? interaction.rows.length : 0;
  const [values, setValues] = useState<string[]>(() => Array(count).fill(""));
  const [checked, setChecked] = useState(false);
  const results = useMemo(() => {
    if (!interaction) return [];
    if (interaction.kind === "fill-blanks" || interaction.kind === "diagram-labels") return values.map((v, i) => interaction.answers[i].some(answer => normalise(answer) === normalise(v)));
    if (interaction.kind === "matching") return values.map((v, i) => Number(v) === interaction.answers[i]);
    if (interaction.kind === "ordering") return values.map((v, i) => v === interaction.answer[i]);
    if (interaction.kind === "classification") return values.map((v, i) => v === interaction.answers[i]);
    return [];
  }, [interaction, values]);
  if (!interaction || interaction.kind === "table") return null;
  const set = (index: number, value: string) => setValues(previous => previous.map((item, i) => i === index ? value : item));
  const mark = Math.min(question.marks, results.filter(Boolean).length);
  return <div className="interactiveQuestion">
    {interaction.kind === "diagram-labels" && <Diagram kind={interaction.diagram} />}
    {interaction.kind === "fill-blanks" && interaction.wordBank && <p className="wordBank"><b>Word bank:</b> {interaction.wordBank.join(" · ")}</p>}
    {interaction.kind === "fill-blanks" && interaction.sentences.map((label, index) => <label key={label}>{label}<input value={values[index]} disabled={checked} onChange={event => set(index, event.target.value)} aria-label={label}/>{checked && <span className={results[index] ? "right" : "wrong"}>{results[index] ? "✓" : `✗ ${interaction.answers[index][0]}`}</span>}</label>)}
    {interaction.kind === "diagram-labels" && interaction.labels.map((label, index) => <label key={label}>{label}<input value={values[index]} disabled={checked} onChange={event => set(index, event.target.value)} aria-label={label}/>{checked && <span className={results[index] ? "right" : "wrong"}>{results[index] ? "✓" : `✗ ${interaction.answers[index][0]}`}</span>}</label>)}
    {interaction.kind === "matching" && <div className="matchingGrid">{interaction.left.map((left, index) => <label key={left}><b>{left}</b><select value={values[index]} disabled={checked} onChange={event => set(index, event.target.value)}><option value="">Choose…</option>{interaction.right.map((right, ri) => <option value={ri} key={right}>{ri + 1}. {right}</option>)}</select>{checked && <span className={results[index] ? "right" : "wrong"}>{results[index] ? "✓" : `✗ ${interaction.answers[index] + 1}`}</span>}</label>)}</div>}
    {interaction.kind === "ordering" && interaction.answer.map((_, index) => <label key={index}><b>Stage {index + 1}</b><select value={values[index]} disabled={checked} onChange={event => set(index, event.target.value)}><option value="">Choose…</option>{interaction.items.map(item => <option key={item}>{item}</option>)}</select>{checked && <span className={results[index] ? "right" : "wrong"}>{results[index] ? "✓" : `✗ ${interaction.answer[index]}`}</span>}</label>)}
    {interaction.kind === "classification" && <div className="classificationGrid">{interaction.rows.map((row, index) => <label key={row}><b>{row}</b><select value={values[index]} disabled={checked} onChange={event => set(index, event.target.value)}><option value="">Choose…</option>{interaction.categories.map(category => <option key={category}>{category}</option>)}</select>{checked && <span className={results[index] ? "right" : "wrong"}>{results[index] ? "✓" : `✗ ${interaction.answers[index]}`}</span>}</label>)}</div>}
    {!checked ? <button className="primary" disabled={values.some(value => !value)} onClick={() => setChecked(true)}>Check answer</button> : <div className="deterministicFeedback" role="status"><strong>{mark}/{question.marks}</strong><p>{results.filter(Boolean).length} of {results.length} entries correct.</p><button className="primary" onClick={() => onComplete(mark)}>Next question →</button></div>}
    <style jsx>{`.interactiveQuestion{display:grid;gap:12px;margin:18px 0}.interactiveQuestion label{display:grid;grid-template-columns:minmax(180px,1fr) minmax(180px,1fr) auto;gap:10px;align-items:center;padding:10px;border-radius:10px;background:#fff}.interactiveQuestion input,.interactiveQuestion select{width:100%;padding:10px;border:1px solid #94a3b8;border-radius:8px;font:inherit}.interactiveQuestion button.primary{justify-self:start;padding:12px 17px;border:1px solid var(--ko-primary);border-radius:11px;background:var(--ko-primary);color:white;font:inherit;font-weight:800;cursor:pointer}.interactiveQuestion button.primary:disabled{cursor:not-allowed;opacity:.45}.wordBank{padding:12px;border-radius:10px;background:#fffbeb}.right{color:#166534;font-weight:900}.wrong{color:#b91c1c;font-weight:800}.scienceDiagram{width:min(640px,100%);height:auto;margin:auto;border:1px solid #cbd5e1;border-radius:12px;background:white}.scienceDiagram .diagramNumber circle{fill:#fff;stroke:#94a3b8;stroke-width:2}.scienceDiagram .diagramNumber text{fill:#050505;font-size:44px;font-weight:800;text-anchor:middle}.deterministicFeedback{padding:16px;border-radius:12px;background:#ecfdf3}.deterministicFeedback strong{font-size:28px;color:#166534}@media(max-width:650px){.interactiveQuestion label{grid-template-columns:1fr}}`}</style>
  </div>;
}
