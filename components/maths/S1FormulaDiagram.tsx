import { Parallel, type Relation } from "./Chapter9Geometry";

export default function S1FormulaDiagram({ id }: { id: string }) {
  if (id.startsWith("s1-formula-9-")) {
    const [, direction, relation] = id.slice("s1-formula-9".length).split("-");
    if (direction !== "test" && direction !== "given") return null;
    return <Parallel kind={relation as Relation} converse={direction === "test"} names />;
  }
  if (!id.startsWith("s1-formula-8-")) return null;
  const horizontal = id.endsWith("-horizontal");
  const vertical = id.endsWith("-vertical");
  return (
    <svg viewBox="0 0 300 150" role="img" aria-label={horizontal ? "Horizontal segment PQ" : vertical ? "Vertical segment RS" : "Point P on coordinate axes"} style={{ width: "100%", maxWidth: 350, margin: "0 auto" }}>
      {horizontal || vertical ? (
        <g fill="currentColor">
          <line x1={horizontal ? 60 : 140} y1={vertical ? 35 : 70} x2={horizontal ? 240 : 140} y2={vertical ? 115 : 70} stroke="currentColor" />
          <circle cx={horizontal ? 60 : 140} cy={vertical ? 35 : 70} r="3" />
          <circle cx={horizontal ? 240 : 140} cy={vertical ? 115 : 70} r="3" />
          <text x={horizontal ? 35 : 150} y={vertical ? 40 : 96}>{horizontal ? "Q(q, y)" : "R(x, r)"}</text>
          <text x={horizontal ? 210 : 150} y={vertical ? 120 : 96}>{horizontal ? "P(p, y)" : "S(x, s)"}</text>
        </g>
      ) : (
        <g fill="currentColor">
          <path d="M25 105H273m-6 -4 6 4-6 4 M100 141V14m-4 6 4-6 4 6" fill="none" stroke="currentColor" />
          <text x="279" y="110">x</text><text x="109" y="20">y</text>
          <circle cx="186" cy="62" r="3" /><text x="194" y="58">P(x, y)</text>
        </g>
      )}
    </svg>
  );
}
