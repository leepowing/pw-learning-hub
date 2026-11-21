import type { MathsFlashcard } from "./types";
import { s1Flashcards } from "./s1";

const newCards: MathsFlashcard[] = [
  {
    "id": "s1-formula-1-2",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 2?",
    "answer": "The units digit is even."
  },
  {
    "id": "s1-formula-1-3",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 3?",
    "answer": "The digit sum is divisible by 3."
  },
  {
    "id": "s1-formula-1-4",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 4?",
    "answer": "The number formed by the last two digits is divisible by 4."
  },
  {
    "id": "s1-formula-1-5",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 5?",
    "answer": "The units digit is 0 or 5."
  },
  {
    "id": "s1-formula-1-6",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 6?",
    "answer": "It is divisible by both 2 and 3."
  },
  {
    "id": "s1-formula-1-8",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 8?",
    "answer": "The number formed by the last three digits is divisible by 8."
  },
  {
    "id": "s1-formula-1-9",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 9?",
    "answer": "The digit sum is divisible by 9."
  },
  {
    "id": "s1-formula-1-10",
    "level": "s1",
    "chapter": 1,
    "chapterTitle": "Basic Computation",
    "section": "Basic Computation",
    "type": "rule",
    "prompt": "How can you tell whether a whole number is divisible by 10?",
    "answer": "The units digit is 0."
  },
  {
    "id": "s1-formula-2-brackets-0",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Remove the brackets.",
    "questionFormula": "x+(+a)",
    "formula": "x+a"
  },
  {
    "id": "s1-formula-2-brackets-1",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Remove the brackets.",
    "questionFormula": "x+(-a)",
    "formula": "x-a"
  },
  {
    "id": "s1-formula-2-brackets-2",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Remove the brackets.",
    "questionFormula": "x-(-a)",
    "formula": "x+a"
  },
  {
    "id": "s1-formula-2-brackets-3",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Remove the brackets.",
    "questionFormula": "x-(+a)",
    "formula": "x-a"
  },
  {
    "id": "s1-formula-2-product0",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the product with its sign. Assume a and b are positive.",
    "questionFormula": "(+a)\\times(+b)",
    "formula": "+ab"
  },
  {
    "id": "s1-formula-2-product1",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the product with its sign. Assume a and b are positive.",
    "questionFormula": "(-a)\\times(-b)",
    "formula": "+ab"
  },
  {
    "id": "s1-formula-2-product2",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the product with its sign. Assume a and b are positive.",
    "questionFormula": "(+a)\\times(-b)",
    "formula": "-ab"
  },
  {
    "id": "s1-formula-2-product3",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the product with its sign. Assume a and b are positive.",
    "questionFormula": "(-a)\\times(+b)",
    "formula": "-ab"
  },
  {
    "id": "s1-formula-2-quotient0",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the quotient with its sign. Assume a and b are positive.",
    "questionFormula": "\\dfrac{(+a)}{(+b)}",
    "formula": "+\\dfrac{a}{b}"
  },
  {
    "id": "s1-formula-2-quotient1",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the quotient with its sign. Assume a and b are positive.",
    "questionFormula": "\\dfrac{(-a)}{(-b)}",
    "formula": "+\\dfrac{a}{b}"
  },
  {
    "id": "s1-formula-2-quotient2",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the quotient with its sign. Assume a and b are positive.",
    "questionFormula": "\\dfrac{(+a)}{(-b)}",
    "formula": "-\\dfrac{a}{b}"
  },
  {
    "id": "s1-formula-2-quotient3",
    "level": "s1",
    "chapter": 2,
    "chapterTitle": "Directed Numbers",
    "section": "Directed Numbers",
    "type": "rule",
    "prompt": "Write the quotient with its sign. Assume a and b are positive.",
    "questionFormula": "\\dfrac{(-a)}{(+b)}",
    "formula": "-\\dfrac{a}{b}"
  },
  {
    "id": "s1-formula-3-0",
    "level": "s1",
    "chapter": 3,
    "chapterTitle": "Basic Algebra (I)",
    "section": "Basic Algebra (I)",
    "type": "rule",
    "prompt": "Collect the like terms.",
    "questionFormula": "ax+bx",
    "formula": "(a+b)x"
  },
  {
    "id": "s1-formula-3-1",
    "level": "s1",
    "chapter": 3,
    "chapterTitle": "Basic Algebra (I)",
    "section": "Basic Algebra (I)",
    "type": "rule",
    "prompt": "Collect the like terms.",
    "questionFormula": "ax-bx",
    "formula": "(a-b)x"
  },
  {
    "id": "s1-formula-3-2",
    "level": "s1",
    "chapter": 3,
    "chapterTitle": "Basic Algebra (I)",
    "section": "Basic Algebra (I)",
    "type": "rule",
    "prompt": "Expand the brackets.",
    "questionFormula": "a(b+c)",
    "formula": "ab+ac"
  },
  {
    "id": "s1-formula-3-3",
    "level": "s1",
    "chapter": 3,
    "chapterTitle": "Basic Algebra (I)",
    "section": "Basic Algebra (I)",
    "type": "rule",
    "prompt": "Expand the brackets.",
    "questionFormula": "(b+c)a",
    "formula": "ba+ca"
  },
  {
    "id": "s1-formula-3-4",
    "level": "s1",
    "chapter": 3,
    "chapterTitle": "Basic Algebra (I)",
    "section": "Basic Algebra (I)",
    "type": "rule",
    "prompt": "Expand the brackets.",
    "questionFormula": "a(b-c)",
    "formula": "ab-ac"
  },
  {
    "id": "s1-formula-3-5",
    "level": "s1",
    "chapter": 3,
    "chapterTitle": "Basic Algebra (I)",
    "section": "Basic Algebra (I)",
    "type": "rule",
    "prompt": "Expand the brackets.",
    "questionFormula": "(b-c)a",
    "formula": "ba-ca"
  },
  {
    "id": "s1-formula-8-horizontal",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "Points P(p, y) and Q(q, y) lie on a horizontal line, with p > q. What is PQ?",
    "formula": "PQ=p-q"
  },
  {
    "id": "s1-formula-8-vertical",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "Points R(x, r) and S(x, s) lie on a vertical line, with r > s. What is RS?",
    "formula": "RS=r-s"
  },
  {
    "id": "s1-formula-8-right",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is translated n units to the right. What are the coordinates of its image?",
    "formula": "P'=(x+n,y)"
  },
  {
    "id": "s1-formula-8-left",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is translated n units to the left. What are the coordinates of its image?",
    "formula": "P'=(x-n,y)"
  },
  {
    "id": "s1-formula-8-up",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is translated n units upwards. What are the coordinates of its image?",
    "formula": "P'=(x,y+n)"
  },
  {
    "id": "s1-formula-8-down",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is translated n units downwards. What are the coordinates of its image?",
    "formula": "P'=(x,y-n)"
  },
  {
    "id": "s1-formula-8-axis-x",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is reflected in the x-axis. What are the coordinates of its image?",
    "formula": "P'=(x,-y)"
  },
  {
    "id": "s1-formula-8-axis-y",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is reflected in the y-axis. What are the coordinates of its image?",
    "formula": "P'=(-x,y)"
  },
  {
    "id": "s1-formula-8-above",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is reflected in a horizontal line a units above P. What are the coordinates of its image?",
    "formula": "P'=(x,y+2a)"
  },
  {
    "id": "s1-formula-8-below",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is reflected in a horizontal line a units below P. What are the coordinates of its image?",
    "formula": "P'=(x,y-2a)"
  },
  {
    "id": "s1-formula-8-right-line",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is reflected in a vertical line b units to the right of P. What are the coordinates of its image?",
    "formula": "P'=(x+2b,y)"
  },
  {
    "id": "s1-formula-8-left-line",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is reflected in a vertical line b units to the left of P. What are the coordinates of its image?",
    "formula": "P'=(x-2b,y)"
  },
  {
    "id": "s1-formula-8-90",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is rotated 90° anticlockwise about the origin. What are the coordinates of its image?",
    "formula": "P'=(-y,x)",
    "explanation": "Equivalent clockwise rotation: 270°."
  },
  {
    "id": "s1-formula-8-180",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is rotated 180° anticlockwise about the origin. What are the coordinates of its image?",
    "formula": "P'=(-x,-y)",
    "explanation": "Equivalent clockwise rotation: 180°."
  },
  {
    "id": "s1-formula-8-270",
    "level": "s1",
    "chapter": 8,
    "chapterTitle": "Rectangular Coordinate System (I)",
    "section": "Rectangular Coordinate System (I)",
    "type": "rule",
    "prompt": "P(x, y) is rotated 270° anticlockwise about the origin. What are the coordinates of its image?",
    "formula": "P'=(y,-x)",
    "explanation": "Equivalent clockwise rotation: 90°."
  },
  {
    "id": "s1-formula-9-straight",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "What is the sum of the adjacent angles on this straight line?",
    "formula": "a+b=180^\\circ",
    "frontDiagram": "straight-line",
    "answerReason": "⟦reason:{\"reasonId\":\"angles.straightLine\"}⟧"
  },
  {
    "id": "s1-formula-9-opposite",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "How are the vertically opposite angles related?",
    "formula": "a=b",
    "frontDiagram": "vertically-opposite",
    "answerReason": "⟦reason:{\"reasonId\":\"angles.verticallyOpposite\"}⟧"
  },
  {
    "id": "s1-formula-9-around",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "What is the sum of the four angles around this point?",
    "formula": "a+b+c+d=360^\\circ",
    "frontDiagram": "angles-at-point",
    "answerReason": "⟦reason:{\"reasonId\":\"angles.aroundPoint\"}⟧"
  },
  {
    "id": "s1-formula-9-test-corresponding",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "What relationship between the marked corresponding angles proves that AB and CD are parallel?",
    "formula": "a=b",
    "answerReason": "⟦reason:{\"reasonId\":\"parallel.converseCorresponding\",\"params\":{\"line1\":\"AB\",\"line2\":\"CD\"}}⟧"
  },
  {
    "id": "s1-formula-9-test-alternate",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "What relationship between the marked alternate angles proves that AB and CD are parallel?",
    "formula": "a=b",
    "answerReason": "⟦reason:{\"reasonId\":\"parallel.converseAlternate\",\"params\":{\"line1\":\"AB\",\"line2\":\"CD\"}}⟧"
  },
  {
    "id": "s1-formula-9-test-interior",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "What relationship between the marked co-interior angles proves that AB and CD are parallel?",
    "formula": "a+b=180^\\circ",
    "answerReason": "⟦reason:{\"reasonId\":\"parallel.converseCoInterior\",\"params\":{\"line1\":\"AB\",\"line2\":\"CD\"}}⟧"
  },
  {
    "id": "s1-formula-9-given-corresponding",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "Given AB ∥ CD, how are the marked corresponding angles related?",
    "formula": "a=b",
    "answerReason": "⟦reason:{\"reasonId\":\"parallel.corresponding\",\"params\":{\"line1\":\"AB\",\"line2\":\"CD\"}}⟧"
  },
  {
    "id": "s1-formula-9-given-alternate",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "Given AB ∥ CD, how are the marked alternate angles related?",
    "formula": "a=b",
    "answerReason": "⟦reason:{\"reasonId\":\"parallel.alternate\",\"params\":{\"line1\":\"AB\",\"line2\":\"CD\"}}⟧"
  },
  {
    "id": "s1-formula-9-given-interior",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "Given AB ∥ CD, how are the marked co-interior angles related?",
    "formula": "a+b=180^\\circ",
    "answerReason": "⟦reason:{\"reasonId\":\"parallel.coInterior\",\"params\":{\"line1\":\"AB\",\"line2\":\"CD\"}}⟧"
  },
  {
    "id": "s1-formula-9-sum",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "What is the sum of the three interior angles?",
    "formula": "a+b+c=180^\\circ",
    "frontDiagram": "triangle-angle-sum",
    "answerReason": "⟦reason:{\"reasonId\":\"triangle.angleSum\"}⟧"
  },
  {
    "id": "s1-formula-9-exterior",
    "level": "s1",
    "chapter": 9,
    "chapterTitle": "Angles and Parallel Lines (I)",
    "section": "Angles and Parallel Lines (I)",
    "type": "rule",
    "prompt": "How can you express the exterior angle c in terms of a and b?",
    "formula": "c=a+b",
    "frontDiagram": "triangle-exterior",
    "answerReason": "⟦reason:{\"reasonId\":\"triangle.exteriorAngle\"}⟧"
  },
  {
    "id": "s1-formula-10-congruence",
    "level": "s1",
    "chapter": 10,
    "chapterTitle": "Congruence and Similarity (I)",
    "section": "Congruence and Similarity (I)",
    "type": "rule",
    "prompt": "What are the five conditions for triangle congruence?",
    "answer": "Any one of these conditions is sufficient.",
    "answerReason": "⟦reason:{\"reasonId\":\"congruence.sss\"}⟧⟦reason:{\"reasonId\":\"congruence.sas\"}⟧⟦reason:{\"reasonId\":\"congruence.asa\"}⟧⟦reason:{\"reasonId\":\"congruence.asaFromAas\"}⟧⟦reason:{\"reasonId\":\"congruence.rhs\"}⟧"
  },
  {
    "id": "s1-formula-10-similarity",
    "level": "s1",
    "chapter": 10,
    "chapterTitle": "Congruence and Similarity (I)",
    "section": "Congruence and Similarity (I)",
    "type": "rule",
    "prompt": "What are the three conditions for triangle similarity?",
    "answer": "Any one of these conditions is sufficient.",
    "answerReason": "⟦reason:{\"reasonId\":\"similarity.aa\"}⟧⟦reason:{\"reasonId\":\"similarity.sss\"}⟧⟦reason:{\"reasonId\":\"similarity.sas\"}⟧"
  }
];

const sequenceIds = new Set(["s1-c4-even-numbers", "s1-c4-odd-numbers", "s1-c4-square-numbers", "s1-c4-triangular-numbers"]);
const existing = s1Flashcards.filter(card => sequenceIds.has(card.id) || card.chapter === 5);
export const s1FormulaCards = [...newCards, ...existing].sort((a, b) => a.chapter - b.chapter);
export const newS1ReviewCards = newCards;
