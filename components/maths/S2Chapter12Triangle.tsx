import { AngleArc, Diagram, Segment } from '@/components/maths/S2Chapter11Geometry';

/** Coordinate-based 3:4:5 triangle; side roles depend on the chosen acute angle. */
export function S2Chapter12Triangle({ angle = 'A' }: { angle?: 'A' | 'B' }) {
  const A = { x: 100, y: 270 }, B = { x: 380, y: 60 }, C = { x: 380, y: 270 };
  const alpha = Math.atan2(210, 280) * 180 / Math.PI;
  const atA = angle === 'A';
  const text = { fontFamily: 'Georgia, serif', fontSize: 22, fill: '#172d50' };
  return <Diagram label={`Triangle ABC, right-angled at C. AC = 4, BC = 3, AB = 5. The reference angle theta is at ${angle}.`}>
    <Segment a={A} b={B} /><Segment a={B} b={C} /><Segment a={C} b={A} />
    <path d="M 362 270 V 252 H 380" fill="none" stroke="#0f766e" strokeWidth={2} />
    <AngleArc centre={atA ? A : B} start={atA ? 0 : 180 + alpha} end={atA ? alpha : 270} radius={42} />
    <text {...text} x={atA ? 155 : 357} y={atA ? 257 : 126} fill="#6d28d9">θ</text>
    <text {...text} x={79} y={287}>A</text><text {...text} x={388} y={51}>B</text><text {...text} x={390} y={290}>C</text>
    <text {...text} x={220} y={151}>5</text><text {...text} x={404} y={176}>3</text><text {...text} x={238} y={305}>4</text>
  </Diagram>;
}
