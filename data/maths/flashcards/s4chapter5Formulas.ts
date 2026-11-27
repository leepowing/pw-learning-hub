import type { MathsFlashcard } from "./types";

// Parent-approved FORMULA ONLY cards. Chapter lesson flashcards are separate.
export const s4Chapter5FormulaCards: MathsFlashcard[] = [
  {
    "id": "s4-c5-formula-01",
    "level": "s4",
    "chapter": 5,
    "chapterTitle": "More about Polynomials",
    "section": "5.2 · Division Algorithm of Polynomials",
    "type": "formula",
    "prompt": "A polynomial P(x) is divided by D(x), giving quotient Q(x) and remainder R(x). Write the division algorithm.",
    "formula": "P(x)=D(x)Q(x)+R(x)",
    "explanation": "D(x) ≠ 0; deg R < deg D unless R = 0."
  },
  {
    "id": "s4-c5-formula-02",
    "level": "s4",
    "chapter": 5,
    "chapterTitle": "More about Polynomials",
    "section": "5.3 · Remainder Theorem",
    "type": "formula",
    "prompt": "A polynomial P(x) is divided by (x − h). What is the remainder?",
    "formula": "R=P(h)",
    "explanation": "Divisor: x − h."
  },
  {
    "id": "s4-c5-formula-03",
    "level": "s4",
    "chapter": 5,
    "chapterTitle": "More about Polynomials",
    "section": "5.3 · Remainder Theorem",
    "type": "formula",
    "prompt": "P(x) is divided by (mx − n), where m ≠ 0. What is the remainder?",
    "formula": "R=P\\left(\\frac{n}{m}\\right)",
    "explanation": "m ≠ 0."
  },
  {
    "id": "s4-c5-formula-04",
    "level": "s4",
    "chapter": 5,
    "chapterTitle": "More about Polynomials",
    "section": "5.4 · Factor Theorem",
    "type": "formula",
    "prompt": "Under what condition is (x − h) a factor of P(x)?",
    "formula": "P(h)=0",
    "explanation": "P(h) = 0 if and only if (x − h) is a factor of P(x)."
  },
  {
    "id": "s4-c5-formula-05",
    "level": "s4",
    "chapter": 5,
    "chapterTitle": "More about Polynomials",
    "section": "5.4 · Factor Theorem",
    "type": "formula",
    "prompt": "Under what condition is (mx − n) a factor of P(x), where m ≠ 0?",
    "formula": "P\\left(\\frac{n}{m}\\right)=0",
    "explanation": "m ≠ 0."
  },
  {
    "id": "s4-c5-formula-06",
    "level": "s4",
    "chapter": 5,
    "chapterTitle": "More about Polynomials",
    "section": "5.5 · Factorization of Cubes and Synthetic Division",
    "type": "formula",
    "prompt": "Factorize a³ − b³ using the difference of cubes identity.",
    "formula": "a^3-b^3=(a-b)(a^2+ab+b^2)",
    "explanation": "Enrichment."
  },
  {
    "id": "s4-c5-formula-07",
    "level": "s4",
    "chapter": 5,
    "chapterTitle": "More about Polynomials",
    "section": "5.5 · Factorization of Cubes and Synthetic Division",
    "type": "formula",
    "prompt": "Factorize a³ + b³ using the sum of cubes identity.",
    "formula": "a^3+b^3=(a+b)(a^2-ab+b^2)",
    "explanation": "Enrichment."
  }
];
