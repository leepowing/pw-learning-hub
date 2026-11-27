import Image from "next/image";

const diagramPaths: Record<string, string> = {
  "s4-c4-formula-02": "/maths/s4/chapter-4/formula-diagrams/S4-C4-F02.svg",
  "s4-c4-formula-04": "/maths/s4/chapter-4/formula-diagrams/S4-C4-F04.svg",
  "s4-c4-formula-05": "/maths/s4/chapter-4/formula-diagrams/S4-C4-F05.svg",
  "s4-c4-formula-06": "/maths/s4/chapter-4/formula-diagrams/S4-C4-F06.svg",
  "s4-c4-formula-07": "/maths/s4/chapter-4/formula-diagrams/S4-C4-F07.svg",
};

export default function S4Chapter4FormulaDiagram({ id }: { id: string }) {
  const src = diagramPaths[id];
  if (!src) return null;
  return (
    <Image src={src} alt="Quadratic graph with only known mathematical labels, no formula answer or hint" width={500} height={276} unoptimized
      style={{ width: "100%", maxWidth: 500, maxHeight: 276, height: "auto", objectFit: "contain", margin: "4px auto 12px" }} />
  );
}
