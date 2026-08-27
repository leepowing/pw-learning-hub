export type MathsLevel =
  | "s1"
  | "s2"
  | "s3"
  | "s4"
  | "s5"
  | "s6";

export type FlashcardType =
  | "formula"
  | "rule"
  | "definition";

export type FlashcardResult =
  | "correct"
  | "practice";

export type PolygonDiagramVariant =
  | "parts"
  | "equilateral"
  | "equiangular"
  | "regular"
  | "convex"
  | "concave"
  | "polygon-classification"
  | "convex-vs-concave";

export type TriangleDiagramVariant =
  | "acute"
  | "right"
  | "obtuse"
  | "angle-classification";

export type SolidDiagramVariant =
  | "polyhedron"
  | "face-edge-vertex"
  | "cuboid"
  | "triangular-prism"
  | "cylinder"
  | "prism-wireframe"
  | "cylinder-wireframe"
  | "prism-vs-cylinder";

export type CrossSectionDiagramVariant =
  | "solid-cut"
  | "uniform-prism"
  | "non-uniform-solid"
  | "uniform-vs-non-uniform";

export type GeometryDiagram =
  | {
      type: "polygon";
      variant: PolygonDiagramVariant;
    }
  | {
      type: "triangle";
      variant: TriangleDiagramVariant;
    }
  | {
      type: "solid";
      variant: SolidDiagramVariant;
    }
  | {
      type: "cross-section";
      variant: CrossSectionDiagramVariant;
    };

export type MathsFlashcard = {
  id: string;
  level: MathsLevel;
  chapter: number;
  chapterTitle: string;
  section: string;
  type: FlashcardType;
  prompt: string;
  formula?: string;
  answer?: string;
  explanation?: string;
  diagram?: GeometryDiagram;
};

export type FlashcardSelection = {
  level: MathsLevel;
  chapters: number[];
};

export type FlashcardSessionStats = {
  total: number;
  remaining: number;
  correct: number;
  practice: number;
};