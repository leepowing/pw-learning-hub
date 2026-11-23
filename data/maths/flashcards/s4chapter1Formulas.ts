import type { MathsFlashcard } from "./types";

// Exactly nine parent-approved formula-only cards. Do not restore the former 39-card deck.
export const s4Chapter1FormulaCards: MathsFlashcard[] = [
  {
    "id": "s4-c1-formula-01",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.2 · Quadratic Equations in One Unknown",
    "type": "formula",
    "prompt": "General form of a quadratic equation",
    "formula": "ax^2+bx+c=0,\\quad a\\ne 0",
    "explanation": "For real coefficients a, b and c."
  },
  {
    "id": "s4-c1-formula-02",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.4 · Quadratic Formula",
    "type": "formula",
    "prompt": "Quadratic formula",
    "formula": "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a},\\quad a\\ne 0",
    "explanation": "For ax² + bx + c = 0."
  },
  {
    "id": "s4-c1-formula-03",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.5 · Nature of Roots",
    "type": "formula",
    "prompt": "Discriminant",
    "formula": "\\Delta=b^2-4ac",
    "explanation": "For ax² + bx + c = 0."
  },
  {
    "id": "s4-c1-formula-04",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.6 · Forming Quadratic Equations",
    "type": "formula",
    "prompt": "Equation with given roots r and s",
    "formula": "(x-r)(x-s)=0",
    "explanation": "A monic quadratic equation."
  },
  {
    "id": "s4-c1-formula-05",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.6 · Forming Quadratic Equations",
    "type": "formula",
    "prompt": "Expanded equation with roots r and s",
    "formula": "x^2-(r+s)x+rs=0",
    "explanation": "Expanded monic form."
  },
  {
    "id": "s4-c1-formula-06",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.6 · Forming Quadratic Equations",
    "type": "formula",
    "prompt": "Sum of roots (derived)",
    "formula": "r+s=-\\frac{b}{a}",
    "explanation": "Derived relationship for ax² + bx + c = 0, a ≠ 0."
  },
  {
    "id": "s4-c1-formula-07",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.6 · Forming Quadratic Equations",
    "type": "formula",
    "prompt": "Product of roots (derived)",
    "formula": "rs=\\frac{c}{a}",
    "explanation": "Derived relationship for ax² + bx + c = 0, a ≠ 0."
  },
  {
    "id": "s4-c1-formula-08",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.8 · Complex Number System (Enrichment)",
    "type": "formula",
    "prompt": "Imaginary-unit identity (enrichment)",
    "formula": "i^2=-1",
    "explanation": "Optional enrichment."
  },
  {
    "id": "s4-c1-formula-09",
    "level": "s4",
    "chapter": 1,
    "chapterTitle": "Quadratic Equations and Number Systems",
    "section": "1.8 · Complex Number System (Enrichment)",
    "type": "formula",
    "prompt": "Standard form of a complex number (enrichment)",
    "formula": "z=a+bi,\\quad a,b\\in\\mathbb{R}",
    "explanation": "Optional enrichment. a is the real part, b is the imaginary part."
  },
];
