import type { ReactNode } from "react";

export type S2Chapter6DiagramKind =
  | "straight-line" | "vertically-opposite" | "angles-at-point"
  | "corresponding" | "alternate" | "interior"
  | "converse-corresponding" | "converse-alternate" | "converse-interior"
  | "perpendicular" | "parallel-chain" | "algebra-straight"
  | "triangle-sum" | "triangle-example" | "triangle-exterior" | "exterior-example"
  | "triangle-sum-proof" | "exterior-parallel" | "isosceles" | "right-triangle"
  | "equilateral-construction";

type XY = readonly [number, number];
const ink = "#172d50", purple = "#6d28d9", teal = "#0f766e", amber = "#b45309";
const polar = (o: XY, r: number, degrees: number): XY => [o[0] + r * Math.cos(degrees * Math.PI / 180), o[1] - r * Math.sin(degrees * Math.PI / 180)];
function Line({ a, b, dashed = false, color = ink }: { a: XY; b: XY; dashed?: boolean; color?: string }) {
  return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={2.8} strokeLinecap="round" strokeDasharray={dashed ? "7 6" : undefined} />;
}
function Label({ at, children, dx = 0, dy = 0 }: { at: XY; children: string; dx?: number; dy?: number }) {
  return <text x={at[0] + dx} y={at[1] + dy} textAnchor="middle" fill={ink} fontFamily="Georgia, serif" fontStyle="italic" fontSize={21}>{children}</text>;
}
function Angle({ o, a, b, label, color = purple, radius = 29, distance = 54 }: { o: XY; a: XY; b: XY; label: string; color?: string; radius?: number; distance?: number }) {
  const direction = (p: XY) => Math.atan2(o[1] - p[1], p[0] - o[0]) * 180 / Math.PI;
  const start = direction(a), turn = ((direction(b) - start + 540) % 360) - 180;
  const first = polar(o, radius, start), last = polar(o, radius, start + turn), position = polar(o, distance, start + turn / 2);
  return <g data-angle={label} data-degrees={Math.abs(turn)}><path d={`M ${first[0]} ${first[1]} A ${radius} ${radius} 0 0 ${turn < 0 ? 1 : 0} ${last[0]} ${last[1]}`} fill="none" stroke={color} strokeWidth={2.4} /><text x={position[0]} y={position[1] + 6} textAnchor="middle" fill={color} fontSize={22} fontFamily="Arial, sans-serif" fontWeight={700}>{label}</text></g>;
}
function Arrow({ at }: { at: XY }) {
  return <path data-parallel-mark="" d={`M ${at[0] - 6} ${at[1] - 6} L ${at[0] + 3} ${at[1]} L ${at[0] - 6} ${at[1] + 6}`} stroke={teal} strokeWidth={2.8} fill="none" />;
}
function Tick({ a, b }: { a: XY; b: XY }) {
  const x = (a[0] + b[0]) / 2, y = (a[1] + b[1]) / 2, length = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const dx = -(b[1] - a[1]) / length * 7, dy = (b[0] - a[0]) / length * 7;
  return <line data-equal-side="" x1={x - dx} y1={y - dy} x2={x + dx} y2={y + dy} stroke={teal} strokeWidth={3} />;
}
function Panel({ kind, label, caption, children, height = 310 }: { kind: string; label: string; caption: string; children: ReactNode; height?: number }) {
  return <figure data-s2-c6-diagram={kind} style={{ width: "100%", maxWidth: 610, margin: "0 auto 15px", padding: "8px 12px", background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: 18, boxSizing: "border-box" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 480 ${height}`} role="img" aria-label={label} style={{ display: "block", width: "100%", maxHeight: 270, margin: "0 auto" }}>{children}</svg>
    <figcaption style={{ color: "#52657e", fontSize: 14, lineHeight: 1.45, textAlign: "center", margin: "4px 0 7px" }}>{caption}</figcaption>
  </figure>;
}

export default function S2Chapter6FlashcardDiagram({ kind }: { kind: S2Chapter6DiagramKind }) {
  if (kind === "straight-line" || kind === "algebra-straight") {
    const o: XY = [240, 240], a: XY = [45, 240], b: XY = [435, 240], c = polar(o, 185, kind === "straight-line" ? 65 : 64);
    return <Panel kind={kind} label="AOB is a straight line, divided into two adjacent angles by ray OC." caption="Given: A, O and B are collinear.">
      <Line a={a} b={b} /><Line a={o} b={c} />
      <Angle o={o} a={a} b={c} label={kind === "straight-line" ? "a" : "3x + 20°"} radius={36} distance={85} /><Angle o={o} a={c} b={b} label={kind === "straight-line" ? "b" : "2x"} radius={36} distance={75} color={teal} />
      <Label at={a} dx={-15} dy={7}>A</Label><Label at={b} dx={15} dy={7}>B</Label><Label at={c} dy={-15}>C</Label><Label at={o} dy={28}>O</Label>
    </Panel>;
  }
  if (kind === "vertically-opposite") {
    const o: XY = [240, 155], a: XY = [45, 155], b: XY = [435, 155], c = polar(o, 145, 55), d = polar(o, 145, 235);
    return <Panel kind={kind} label="Straight lines AB and CD meet at O. The marked angles a and b are vertically opposite." caption="Given: AB and CD are straight lines.">
      <Line a={a} b={b} /><Line a={c} b={d} /><Angle o={o} a={b} b={c} label="a" /><Angle o={o} a={a} b={d} label="b" color={teal} />
      <Label at={a} dx={-15} dy={7}>A</Label><Label at={b} dx={15} dy={7}>B</Label><Label at={c} dx={10} dy={-13}>C</Label><Label at={d} dx={-13} dy={18}>D</Label><Label at={o} dx={-13} dy={-15}>O</Label>
    </Panel>;
  }
  if (kind === "angles-at-point") {
    const o: XY = [240, 150], rays = [15, 140, 255].map(angle => polar(o, 125, angle));
    return <Panel kind={kind} label="Three angles a, b and c fill one complete turn around O." caption="All three angles around O are shown.">
      {rays.map((end, index) => <Line key={index} a={o} b={end} />)}
      <Angle o={o} a={rays[0]} b={rays[1]} label="a" /><Angle o={o} a={rays[1]} b={rays[2]} label="b" color={teal} /><Angle o={o} a={rays[2]} b={rays[0]} label="c" color={amber} /><Label at={o} dx={12} dy={22}>O</Label>
    </Panel>;
  }
  if (["corresponding", "alternate", "interior", "converse-corresponding", "converse-alternate", "converse-interior"].includes(kind)) {
    const converse = kind.startsWith("converse-"), arrangement = kind.replace("converse-", "");
    const p: XY = [270, 90], q: XY = [200, 220], high: XY = [298, 38], low: XY = [165, 285];
    const leftTop: XY = [40, 90], rightTop: XY = [440, 90], leftBottom: XY = [40, 220], rightBottom: XY = [440, 220];
    const topA = arrangement === "alternate" ? leftTop : rightTop, topB = arrangement === "corresponding" ? high : low;
    return <Panel kind={kind} label={`${arrangement} angles a and b for lines AB and CD cut by one transversal. ${converse ? "Parallelism is not given." : "AB is given parallel to CD."}`} caption={converse ? `Given: ${arrangement === "interior" ? "a + b = 180°" : "a = b"}. Prove AB // CD.` : "Given: AB // CD."}>
      <Line a={leftTop} b={rightTop} /><Line a={leftBottom} b={rightBottom} /><Line a={high} b={low} />
      {!converse && <><Arrow at={[115, 90]} /><Arrow at={[115, 220]} /></>}
      <Angle o={p} a={topA} b={topB} label="a" radius={26} distance={52} /><Angle o={q} a={rightBottom} b={high} label="b" radius={26} distance={53} color={teal} />
      <Label at={leftTop} dx={-15} dy={7}>A</Label><Label at={rightTop} dx={15} dy={7}>B</Label><Label at={leftBottom} dx={-15} dy={7}>C</Label><Label at={rightBottom} dx={15} dy={7}>D</Label>
    </Panel>;
  }
  if (kind === "perpendicular") {
    const o: XY = [240, 250], a: XY = [45, 250], d: XY = [435, 250], b = polar(o, 200, 120), c: XY = [240, 43];
    return <Panel kind={kind} label="AOD is a straight line. Angles AOB, BOC, COD are 4x, 2x, 6x. No right angle is given." caption="Given: AOD is a straight line. Prove OC ⟂ AD." height={320}>
      <Line a={a} b={d} /><Line a={o} b={b} /><Line a={o} b={c} />
      <Angle o={o} a={a} b={b} label="4x" radius={42} distance={81} /><Angle o={o} a={b} b={c} label="2x" radius={60} distance={99} color={teal} /><Angle o={o} a={c} b={d} label="6x" radius={42} distance={73} />
      <Label at={a} dx={-14} dy={7}>A</Label><Label at={d} dx={14} dy={7}>D</Label><Label at={b} dx={-12} dy={-15}>B</Label><Label at={c} dx={12} dy={-15}>C</Label><Label at={o} dx={-7} dy={29}>O</Label>
    </Panel>;
  }
  if (kind === "parallel-chain") {
    const tangent = Math.tan(74 * Math.PI / 180), b: XY = [105, 115], e: XY = [300, 260], f: XY = [80, 260];
    const a: XY = [105 + 75 / tangent, 40], d: XY = [300 + 145 / tangent, 115], c: XY = [300 + 220 / tangent, 40];
    return <Panel kind={kind} label="BD is parallel to FE. C, D, E are collinear. Angle ABD is 74 degrees, angle CEF is 106 degrees." caption="Given: BD // FE. Prove AB // CE." height={320}>
      <Line a={a} b={b} /><Line a={b} b={d} /><Line a={c} b={e} /><Line a={f} b={e} /><Arrow at={[210, 115]} /><Arrow at={[185, 260]} />
      <Angle o={b} a={d} b={a} label="74°" radius={27} distance={59} /><Angle o={e} a={c} b={f} label="106°" radius={31} distance={67} color={teal} />
      <Label at={a} dy={-14}>A</Label><Label at={b} dx={-12} dy={27}>B</Label><Label at={c} dy={-14}>C</Label><Label at={d} dx={20} dy={7}>D</Label><Label at={e} dy={29}>E</Label><Label at={f} dx={-13} dy={28}>F</Label>
    </Panel>;
  }
  if (["triangle-sum", "triangle-example", "triangle-exterior", "exterior-example", "triangle-sum-proof"].includes(kind)) {
    const cot = (degrees: number) => 1 / Math.tan(degrees * Math.PI / 180);
    const h = 180 / (cot(67) + cot(65)), b: XY = [145, 265], c: XY = [325, 265], a: XY = [145 + h * cot(67), 265 - h], d: XY = [446, 265];
    const exterior = kind === "triangle-exterior" || kind === "exterior-example", numeric = kind === "triangle-example" || kind === "exterior-example", proof = kind === "triangle-sum-proof";
    const caption = proof ? "Construction: draw a line through A parallel to BC." : exterior ? "Given: B, C and D are collinear in that order." : "Triangle ABC lies in a Euclidean plane.";
    return <Panel kind={kind} label={numeric ? `Triangle ABC has angle A 48 degrees and angle B 67 degrees. Find ${exterior ? "the exterior" : "the remaining interior"} angle at C.` : "Triangle ABC with interior angles a and b, and the remaining marked angle."} caption={caption} height={315}>
      <Line a={a} b={b} /><Line a={b} b={exterior ? d : c} /><Line a={c} b={a} />
      {proof && <><Line a={[65, a[1]]} b={[420, a[1]]} dashed color={teal} /><Arrow at={[370, a[1]]} /><Arrow at={[225, 265]} /><Angle o={a} a={[65, a[1]]} b={b} label="b" radius={25} distance={51} color={teal} /><Angle o={a} a={c} b={[420, a[1]]} label="c" radius={25} distance={51} color={amber} /></>}
      <Angle o={a} a={b} b={c} label={numeric ? "48°" : "a"} radius={34} distance={66} /><Angle o={b} a={c} b={a} label={numeric ? "67°" : "b"} radius={29} distance={54} color={teal} />
      {exterior ? <Angle o={c} a={d} b={a} label={numeric ? "x" : "e"} radius={31} distance={58} color={amber} /> : <Angle o={c} a={a} b={b} label={numeric ? "x" : "c"} radius={29} distance={54} color={amber} />}
      <Label at={a} dy={-19}>A</Label><Label at={b} dx={-14} dy={24}>B</Label><Label at={c} dx={7} dy={25}>C</Label>{exterior && <Label at={d} dy={25}>D</Label>}
    </Panel>;
  }
  if (kind === "exterior-parallel") {
    const a: XY = [240, 40], b: XY = [70, 215], c: XY = [290, 215], d: XY = [315, 302.5], e: XY = [441, 302.5];
    return <Panel kind={kind} label="A, C and D are collinear. Triangle ABC has angles a at A, b at B. Angle ADE is x. No parallel marks are given." caption="Given: a + b = x. Prove BC // DE." height={350}>
      <Line a={a} b={b} /><Line a={b} b={c} /><Line a={a} b={d} /><Line a={d} b={e} />
      <Angle o={a} a={b} b={c} label="a" radius={32} distance={61} /><Angle o={b} a={c} b={a} label="b" radius={32} distance={59} color={teal} /><Angle o={c} a={b} b={d} label="e" radius={25} distance={47} color={amber} /><Angle o={d} a={e} b={a} label="x" radius={29} distance={56} />
      <Label at={a} dy={-19}>A</Label><Label at={b} dx={-13} dy={25}>B</Label><Label at={c} dx={20}>C</Label><Label at={d} dx={-3} dy={28}>D</Label><Label at={e} dy={28}>E</Label>
    </Panel>;
  }
  if (kind === "isosceles") {
    const a: XY = [240, 40], h = 190, halfBase = h / Math.tan(68 * Math.PI / 180), b: XY = [240 - halfBase, 230], c: XY = [240 + halfBase, 230];
    return <Panel kind={kind} label="AB equals AC. Base angle B is 68 degrees, apex angle A is x and base angle C is y." caption="Given: AB = AC.">
      <Line a={a} b={b} /><Line a={b} b={c} /><Line a={c} b={a} /><Tick a={a} b={b} /><Tick a={a} b={c} />
      <Angle o={a} a={b} b={c} label="x" radius={30} distance={57} /><Angle o={b} a={c} b={a} label="68°" radius={28} distance={52} color={teal} /><Angle o={c} a={a} b={b} label="y" radius={28} distance={50} color={amber} />
      <Label at={a} dy={-17}>A</Label><Label at={b} dx={-14} dy={24}>B</Label><Label at={c} dx={14} dy={24}>C</Label>
    </Panel>;
  }
  if (kind === "right-triangle") {
    const b: XY = [95, 245], c: XY = [365, 245], a: XY = [365, 245 - 270 * Math.tan(37 * Math.PI / 180)];
    return <Panel kind={kind} label="Triangle ABC is right-angled at C. Angle ABC is 37 degrees and angle BAC is x." caption="Given: ∠ACB = 90°.">
      <Line a={a} b={b} /><Line a={b} b={c} /><Line a={c} b={a} /><path data-right-angle="" d={`M ${c[0] - 18} ${c[1]} L ${c[0] - 18} ${c[1] - 18} L ${c[0]} ${c[1] - 18}`} fill="none" stroke={teal} strokeWidth={2.5} />
      <Angle o={a} a={b} b={c} label="x" radius={31} distance={58} /><Angle o={b} a={c} b={a} label="37°" radius={38} distance={80} color={teal} />
      <Label at={a} dy={-16}>A</Label><Label at={b} dx={-15} dy={25}>B</Label><Label at={c} dx={12} dy={25}>C</Label>
    </Panel>;
  }
  if (kind === "equilateral-construction") {
    const a: XY = [185, 170], b: XY = [295, 170], r = 110, c: XY = [240, 170 - r * Math.sqrt(3) / 2];
    return <Panel kind={kind} label="Two circles, centred at A and B, each have radius AB. Their upper intersection is C. Segments AB, AC and BC are drawn." caption="Construction: both circles have radius AB." height={300}>
      <circle cx={a[0]} cy={a[1]} r={r} fill="none" stroke={purple} strokeWidth={2} /><circle cx={b[0]} cy={b[1]} r={r} fill="none" stroke={teal} strokeWidth={2} />
      <Line a={a} b={b} /><Line a={a} b={c} /><Line a={b} b={c} />
      <circle cx={a[0]} cy={a[1]} r={3} fill={ink} /><circle cx={b[0]} cy={b[1]} r={3} fill={ink} />
      <Label at={a} dx={-14} dy={22}>A</Label><Label at={b} dx={14} dy={22}>B</Label><Label at={c} dy={-17}>C</Label>
    </Panel>;
  }
  return null;
}
