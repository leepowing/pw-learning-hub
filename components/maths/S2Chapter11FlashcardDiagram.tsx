export type S2Chapter11DiagramKind = "hypotenuse" | "missing-leg" | "ladder" | "unit-square" | "converse";
type Point = readonly [number, number];
const points = (...p: Point[]) => p.map(([x,y]) => `${x},${y}`).join(" ");
function Label({ at, children }: { at: Point; children: React.ReactNode }) {
  return <text x={at[0]} y={at[1]} textAnchor="middle" dominantBaseline="middle" fill="#17324d" stroke="white" strokeWidth={5} paintOrder="stroke" fontSize={19} fontFamily="Arial, sans-serif">{children}</text>;
}
const descriptions: Record<S2Chapter11DiagramKind,string> = {
  hypotenuse: "Triangle ABC with a right angle at C, sides CA labelled a, CB labelled b and AB labelled c.",
  "missing-leg": "Triangle ABC, right-angled at C, with CA 5 cm, AB 13 cm and CB x cm.",
  ladder: "A 5 m ladder leaning against a vertical wall. The foot is 3 m from the wall; the height is h.",
  "unit-square": "A square with side length 1 and a diagonal d.",
  converse: "Triangle ABC with CA 6, CB 8 and AB 10. No right angle is given."
};
export default function S2Chapter11FlashcardDiagram({ kind }: { kind: S2Chapter11DiagramKind }) {
  const square = kind === "unit-square";
  const ladder = kind === "ladder";
  const isConverse = kind === "converse";
  // One coordinate system for all lines, right-angle marks and labels.
  // Missing-leg triangle is a 5:12:13 triangle; ladder is a 3:4:5 triangle.
  const A:Point = kind === "missing-leg" ? [100,105] : [110,50];
  const C:Point = kind === "missing-leg" ? [100,205] : [110,230];
  const B:Point = kind === "missing-leg" ? [340,205] : ladder ? [245,230] : [350,230];
  const top:Point=[170,50], left:Point=[170,230], right:Point=[350,230], corner:Point=[350,50];
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" role="img" aria-label={descriptions[kind]} style={{display:"block",width:"100%",maxWidth:480,height:"auto",margin:"0 auto 14px",flexShrink:0}}>
    <title>{descriptions[kind]}</title>
    <rect x={2} y={2} width={456} height={296} rx={18} fill="#f8fafc" />
    {square ? <>
      <polygon points={points(top,left,right,corner)} fill="#ecfeff" stroke="#155e75" strokeWidth={3}/>
      <path d="M 170 50 L 350 230" stroke="#7c3aed" strokeWidth={3}/>
      <polyline points="170,214 186,214 186,230" fill="none" stroke="#155e75" strokeWidth={2}/>
      <Label at={[145,140]}>1</Label><Label at={[260,255]}>1</Label><Label at={[281,118]}>d</Label>
    </> : <>
      {ladder && <><path d="M 95 35 L 95 245 L 360 245" stroke="#94a3b8" strokeWidth={5} fill="none"/><Label at={[48,82]}>Wall</Label></>}
      <polygon points={points(A,C,B)} fill="#ecfeff" stroke="#155e75" strokeWidth={3} strokeLinejoin="round"/>
      {!isConverse && <polyline points={points([C[0],C[1]-14],[C[0]+14,C[1]-14],[C[0]+14,C[1]])} fill="none" stroke="#155e75" strokeWidth={2}/>}
      {!ladder && <><Label at={[A[0]-16,A[1]-18]}>A</Label><Label at={[B[0]+20,B[1]+5]}>B</Label><Label at={[C[0]-18,C[1]+17]}>C</Label></>}
      <Label at={[A[0]-29,(A[1]+C[1])/2]}>{kind === "hypotenuse" ? "a" : kind === "missing-leg" ? "5 cm" : ladder ? "h" : "6"}</Label>
      <Label at={[(C[0]+B[0])/2,C[1]+28]}>{kind === "hypotenuse" ? "b" : kind === "missing-leg" ? "x cm" : ladder ? "3 m" : "8"}</Label>
      <Label at={[(A[0]+B[0])/2+20,(A[1]+B[1])/2-23]}>{kind === "hypotenuse" ? "c" : kind === "missing-leg" ? "13 cm" : ladder ? "5 m" : "10"}</Label>
    </>}
    {isConverse && <text x={230} y={282} textAnchor="middle" fill="#52647a" fontFamily="Arial, sans-serif" fontSize={14}>Use the side lengths to justify your conclusion.</text>}
  </svg>;
}
