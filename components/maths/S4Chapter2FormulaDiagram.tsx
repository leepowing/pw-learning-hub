import Image from "next/image";

// Static SVG paths only: no user-derived image URL.
const diagramPaths: Record<string, string> = {
  "s4-c2-2.1-f01": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.1-F01.svg",
  "s4-c2-2.1-f02": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.1-F02.svg",
  "s4-c2-2.1-f03": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.1-F03.svg",
  "s4-c2-2.1-f04": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.1-F04.svg",
  "s4-c2-2.2-f05": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.2-F05.svg",
  "s4-c2-2.2-f06": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.2-F06.svg",
  "s4-c2-2.2-f07": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.2-F07.svg",
  "s4-c2-2.2-f08": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.2-F08.svg",
  "s4-c2-2.3-f09": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.3-F09.svg",
  "s4-c2-2.4-f10": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.4-F10.svg",
  "s4-c2-2.4-f11": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.4-F11.svg",
  "s4-c2-2.4-f12": "/maths/s4/chapter-2/formula-diagrams/S4-C2-2.4-F12.svg"
};

export default function S4Chapter2FormulaDiagram({ id }: { id: string }) {
  const src = diagramPaths[id];
  if (!src) return null;
  return (
    <Image
      src={src}
      alt="Straight-line coordinate diagram with no formula hints"
      width={520}
      height={290}
      unoptimized
      style={{ width: "100%", maxWidth: 520, height: "auto", maxHeight: 290, objectFit: "contain", margin: "4px auto 12px" }}
    />
  );
}
