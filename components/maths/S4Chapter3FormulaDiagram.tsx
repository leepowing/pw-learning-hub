import Image from "next/image";

// Only the four approved Chapter 3 cards have front-face diagrams.
const paths: Record<string, string> = {
  "s4-c3-3.3-formula-01": "/maths/s4/chapter-3/formula-diagrams/S4-C3-F01.svg",
  "s4-c3-3.3-formula-02": "/maths/s4/chapter-3/formula-diagrams/S4-C3-F02.svg",
  "s4-c3-3.3-formula-03": "/maths/s4/chapter-3/formula-diagrams/S4-C3-F03.svg",
  "s4-c3-3.3-formula-04": "/maths/s4/chapter-3/formula-diagrams/S4-C3-F04.svg",
};

export default function S4Chapter3FormulaDiagram({ id }: { id: string }) {
  const src = paths[id];
  if (!src) return null;
  return (
    <Image src={src} alt="Coordinate axes with a function graph; no formula or answer hints"
      width={520} height={290} unoptimized
      style={{ width: "100%", maxWidth: 520, height: "auto", maxHeight: 290, objectFit: "contain", margin: "4px auto 12px" }} />
  );
}
