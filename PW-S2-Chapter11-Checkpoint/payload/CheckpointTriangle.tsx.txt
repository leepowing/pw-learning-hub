import type { DiagramData } from './checkpoint-data';
type Point = { x: number; y: number };
const midpoint = (p: Point, q: Point): Point => ({ x: (p.x+q.x)/2, y: (p.y+q.y)/2 });
function Label({ p, text }: { p: Point; text: string }) {
  return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontSize="18" fill="#24364b" stroke="white" strokeWidth="5" paintOrder="stroke">{text}</text>;
}
export default function CheckpointTriangle({ data }: { data: DiagramData }) {
  const scale = Math.min(260/data.b, 185/data.a);
  // AC = a, BC = b, AB = c. Coordinates follow the cosine rule.
  const cx = (data.a*data.a+data.b*data.b-data.c*data.c)/(2*data.b);
  const cy = Math.sqrt(Math.max(0,data.a*data.a-cx*cx));
  const C = { x: 90, y: 240 }, B = { x: 90+data.b*scale, y: 240 }, A = { x: 90+cx*scale, y: 240-cy*scale };
  const ab = midpoint(A,B), ac=midpoint(A,C), bc=midpoint(B,C);
  const dx=B.x-A.x, dy=B.y-A.y, length=Math.hypot(dx,dy);
  const hypLabel = { x: ab.x+dy/length*25, y: ab.y-dx/length*25 };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 305" role="img" aria-label={`Triangle ABC. AC: ${data.labels[0]}; BC: ${data.labels[1]}; AB: ${data.labels[2]}.${data.right?' Angle C is 90 degrees.':' No right angle is given.'}`} style={{display:'block',width:'100%',maxWidth:500,margin:'12px auto'}}>
      <path d={`M ${A.x} ${A.y} L ${B.x} ${B.y} L ${C.x} ${C.y} Z`} fill="#f0fdfa" stroke="#24364b" strokeWidth="2.5" strokeLinejoin="round" />
      {data.right && <path d={`M ${C.x} ${C.y-14} L ${C.x+14} ${C.y-14} L ${C.x+14} ${C.y}`} fill="none" stroke="#0f766e" strokeWidth="2" />}
      <Label p={{x:A.x-12,y:A.y-22}} text="A" /><Label p={{x:B.x+21,y:B.y+3}} text="B" /><Label p={{x:C.x-19,y:C.y+15}} text="C" />
      <Label p={{x:ac.x-38,y:ac.y}} text={data.labels[0]} /><Label p={{x:bc.x,y:bc.y+32}} text={data.labels[1]} /><Label p={hypLabel} text={data.labels[2]} />
      <text x="220" y="296" textAnchor="middle" fontSize="13" fill="#52647a">Use the given measurements, not the drawing.</text>
    </svg>
  );
}
