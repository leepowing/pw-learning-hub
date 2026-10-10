"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { KnowledgeSection } from "@/data/knowledgeOrganisers/types";

type Props = {
  title: string;
  sections: KnowledgeSection[];
};

export default function KnowledgeOrganiserMindMap({ title, sections }: Props) {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const focusedSection = sections.find(section => section.id === focusedId) ?? null;
  const leftSections = sections.filter((_, index) => index % 2 === 0);
  const rightSections = sections.filter((_, index) => index % 2 === 1);
  const allVisible = sections.length > 0 && sections.every(section => expandedIds.includes(section.id));

  function toggleSection(id: string) {
    setExpandedIds(current => current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id]);
  }

  function revealAll() {
    setExpandedIds(sections.map(section => section.id));
  }

  function hideAll() {
    setExpandedIds([]);
  }

  function focusSection(id: string) {
    setFocusedId(id);
    setExpandedIds(current => current.includes(id) ? current : [...current, id]);
  }

  return <div className="mindMapTool">
    <div className="toolbar" aria-label="Mind map controls">
      <div>
        <strong>{focusedSection ? `Focus: ${focusedSection.title}` : `${sections.length} taught branches`}</strong>
        <span>{focusedSection ? "Study one branch without distractions." : "Select a branch to reveal its knowledge."}</span>
      </div>
      <div className="toolbarButtons">
        {focusedSection && <button type="button" onClick={() => setFocusedId(null)}>← Show all branches</button>}
        <button type="button" onClick={allVisible ? hideAll : revealAll}>{allVisible ? "Hide details" : "Reveal all"}</button>
      </div>
    </div>

    {focusedSection ? <div className="focusMap">
      <div className="rootWrap"><RootNode title={title} count={sections.length} /></div>
      <div className="focusConnector" aria-hidden="true" />
      <div className="focusedBranch"><BranchNode
        section={focusedSection}
        expanded={expandedIds.includes(focusedSection.id)}
        focused
        onToggle={() => toggleSection(focusedSection.id)}
        onFocus={() => setFocusedId(null)}
      /></div>
    </div> : <div className="mapGrid">
      <div className="branchColumn left">
        {leftSections.map(section => <BranchNode
          key={section.id}
          section={section}
          side="left"
          expanded={expandedIds.includes(section.id)}
          onToggle={() => toggleSection(section.id)}
          onFocus={() => focusSection(section.id)}
        />)}
      </div>
      <div className="rootSlot"><RootNode title={title} count={sections.length} /></div>
      <div className="branchColumn right">
        {rightSections.map(section => <BranchNode
          key={section.id}
          section={section}
          side="right"
          expanded={expandedIds.includes(section.id)}
          onToggle={() => toggleSection(section.id)}
          onFocus={() => focusSection(section.id)}
        />)}
      </div>
    </div>}

    <p className="mapHint">Revision idea: hide the details, explain a branch aloud, then reveal it to check your recall.</p>
    <style>{layoutStyles}</style>
  </div>;
}

function RootNode({ title, count }: { title: string; count: number }) {
  return <div className="rootNode">
    <span>MAIN TOPIC</span>
    <strong>{title}</strong>
    <small>{count} taught {count === 1 ? "branch" : "branches"}</small>
    <style>{rootNodeStyles}</style>
  </div>;
}

function BranchNode({
  section,
  side,
  expanded,
  focused = false,
  onToggle,
  onFocus,
}: {
  section: KnowledgeSection;
  side?: "left" | "right";
  expanded: boolean;
  focused?: boolean;
  onToggle: () => void;
  onFocus: () => void;
}) {
  return <article
    className={`branchNode ${side ? `${side}Branch` : ""} ${expanded ? "expanded" : "collapsed"}`}
    style={{ "--branch": section.colour } as CSSProperties}
  >
    <div className="branchHeader">
      <button type="button" className="branchTitle" aria-expanded={expanded} onClick={onToggle}>
        <small>{section.context ?? section.period ?? ""}</small>
        <strong>{section.title}</strong>
        <span>{expanded ? "−" : "+"}</span>
      </button>
      <button type="button" className="focusButton" onClick={onFocus}>{focused ? "Exit focus" : "Focus"}</button>
    </div>

    {!expanded && <div className="recallPrompt">
      <span>?</span>
      <p>What can you remember about this branch?</p>
      <small>{section.keyFacts.length} key facts · {section.keyTerms.length} terms</small>
    </div>}

    {expanded && <div className="branchDetails">
      <div className="bigIdea"><b>BIG IDEA</b><p>{section.summary}</p></div>
      <div className="facts"><b>KEY FACTS</b><ul>{section.keyFacts.map((fact, index) => <li key={`${section.id}-fact-${index}`}>{fact}</li>)}</ul></div>
      <div className="vocabulary"><b>VOCABULARY</b><div>{section.keyTerms.map((term, index) => <span key={`${section.id}-term-${index}`}>{term}</span>)}</div></div>
    </div>}
    <style>{branchNodeStyles}</style>
  </article>;
}

const rootNodeStyles = `
  .rootNode{position:relative;z-index:1;display:flex;width:100%;min-height:180px;flex-direction:column;align-items:center;justify-content:center;padding:22px;border-radius:50%;background:linear-gradient(145deg,var(--ko-primary),var(--ko-primary-dark));box-shadow:0 15px 32px var(--ko-primary-shadow);color:#fff;text-align:center}.rootNode::before,.rootNode::after{content:"";position:absolute;top:50%;width:22px;height:3px;background:var(--ko-primary-ring)}.rootNode::before{right:100%}.rootNode::after{left:100%}.rootNode span{font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.8}.rootNode strong{margin:7px 0;font-size:22px;line-height:1.2}.rootNode small{opacity:.85}@media(max-width:850px){.rootNode{min-height:150px;border-radius:24px}.rootNode::before,.rootNode::after{display:none}}
`;

const branchNodeStyles = `
  .branchNode{position:relative;width:100%;border:1px solid #e2e8f0;border-top:6px solid var(--branch);border-radius:16px;background:#fff;box-shadow:0 7px 20px rgba(15,23,42,.06);overflow:visible}.branchNode.leftBranch::after,.branchNode.rightBranch::before{content:"";position:absolute;top:31px;width:23px;height:3px;background:var(--branch)}.branchNode.leftBranch::after{left:100%}.branchNode.rightBranch::before{right:100%}.branchHeader{display:flex;align-items:stretch}.branchTitle{display:grid;grid-template-columns:1fr auto;flex:1;min-width:0;padding:14px 15px;border:0;background:transparent;color:#26354a;text-align:left;cursor:pointer}.branchTitle small,.branchTitle strong{display:block;grid-column:1}.branchTitle small{color:var(--branch);font-weight:900}.branchTitle strong{font-size:17px;line-height:1.25}.branchTitle>span{grid-column:2;grid-row:1/3;align-self:center;color:var(--branch);font-size:27px;font-weight:500}.focusButton{align-self:center;margin-right:11px;padding:7px 9px;border:1px solid #cbd5e1;border-radius:8px;background:#f8fafc;color:#475569;font:inherit;font-size:12px;font-weight:800;cursor:pointer}.recallPrompt{padding:18px;border-top:1px dashed #cbd5e1;background:#f8fafc;text-align:center}.recallPrompt>span{display:inline-grid;width:32px;height:32px;place-items:center;border-radius:50%;background:var(--branch);color:#fff;font-size:19px;font-weight:900}.recallPrompt p{margin:8px 0 2px;font-weight:800}.recallPrompt small{color:#64748b}.branchDetails{display:grid;gap:13px;padding:0 15px 17px;border-top:1px dashed #cbd5e1}.branchDetails>div{padding-top:13px}.branchDetails b{color:var(--branch);font-size:11px;letter-spacing:.12em}.branchDetails p{margin:5px 0 0}.facts ul{margin:7px 0 0;padding-left:20px}.facts li{margin-bottom:7px}.vocabulary>div{display:flex;gap:7px;flex-wrap:wrap;margin-top:8px}.vocabulary span{padding:5px 8px;border:1px solid #dbe3ec;border-radius:999px;background:#f8fafc;font-size:12px;font-weight:800}@media(max-width:850px){.branchNode.leftBranch::after,.branchNode.rightBranch::before{display:none}}
`;

const layoutStyles = `
  .mindMapTool{margin-top:24px}.toolbar{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:30px;padding:15px 18px;border:1px solid var(--ko-primary-ring);border-radius:16px;background:var(--ko-primary-soft)}.toolbar strong,.toolbar span{display:block}.toolbar strong{color:var(--ko-primary-dark)}.toolbar span{color:#64748b;font-size:14px}.toolbarButtons{display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end}.toolbar button{padding:9px 13px;border:1px solid var(--ko-primary-border);border-radius:10px;background:#fff;color:var(--ko-primary-dark);font:inherit;font-weight:800;cursor:pointer}.toolbar button:last-child{background:var(--ko-primary);color:#fff}.mapGrid{display:grid;grid-template-columns:minmax(0,1fr) 230px minmax(0,1fr);gap:44px;align-items:center;position:relative;padding:12px 0}.rootSlot{width:230px}.branchColumn{display:grid;gap:18px;position:relative}.branchColumn::before{content:"";position:absolute;top:34px;bottom:34px;width:3px;border-radius:999px;background:var(--ko-primary-ring)}.branchColumn.left::before{right:-23px}.branchColumn.right::before{left:-23px}.focusMap{display:flex;max-width:760px;margin:0 auto;flex-direction:column;align-items:center}.rootWrap{width:230px}.focusConnector{width:3px;height:34px;background:var(--ko-primary-ring)}.focusedBranch{width:100%}.mapHint{margin:28px 0 0;padding:12px 15px;border-radius:12px;background:#eff6ff;color:#1e3a5f;text-align:center;font-size:14px}@media(max-width:850px){.mapGrid{display:flex;flex-direction:column;gap:18px}.rootSlot{order:-1;width:min(280px,100%)}.branchColumn::before{display:none}.branchColumn{width:100%}.left{order:1}.right{order:2}.toolbar{align-items:flex-start;flex-direction:column}.toolbarButtons{justify-content:flex-start}.rootWrap{width:min(280px,100%)}}
`;
