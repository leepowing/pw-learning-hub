import type { MathsFlashcard } from "./types";
import { s2Flashcards } from "./s2";

const existingIds = [
  "s2-c1-rounding-method",
  "s2-c1-maximum-absolute-error-formula",
  "s2-c1-lower-limit-formula",
  "s2-c1-upper-limit-formula",
  "s2-c1-relative-error-formula",
  "s2-c1-percentage-error-formula",
  "s2-c2-index-notation",
  "s2-c2-product-law-indices",
  "s2-c2-quotient-law-indices",
  "s2-c2-power-of-power-law",
  "s2-c2-power-product-quotient",
  "s2-c2-degree-of-polynomial",
  "s2-c2-like-terms",
  "s2-c2-distributive-law-polynomial",
  "s2-c2-expand-two-binomials",
  "s2-c2-extract-common-factor",
  "s2-c2-factorize-by-grouping-rule",
  "s2-c3-difference-of-two-squares",
  "s2-c3-square-of-a-sum",
  "s2-c3-square-of-a-difference",
];
const byId = new Map(s2Flashcards.map(card => [card.id, card]));
export const newS2ReviewCards: MathsFlashcard[] = [
  {
    "id": "s2-formula-6-01",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "What is the sum of angles a and b?",
    "answer": "a + b = 180°. Angles on a straight line add up to 180°."
  },
  {
    "id": "s2-formula-6-02",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "How are angles a and b related?",
    "answer": "a = b. Vertically opposite angles are equal."
  },
  {
    "id": "s2-formula-6-03",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "What is the sum of the four marked angles?",
    "answer": "a + b + c + d = 360°. Angles around a point add up to 360°."
  },
  {
    "id": "s2-formula-6-04",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "Given a = b, what can you conclude about ℓ and m?",
    "answer": "ℓ ∥ m because alternate angles are equal."
  },
  {
    "id": "s2-formula-6-05",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "Given a = b, what can you conclude about ℓ and m?",
    "answer": "ℓ ∥ m because corresponding angles are equal."
  },
  {
    "id": "s2-formula-6-06",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "Given a + b = 180°, what can you conclude about ℓ and m?",
    "answer": "ℓ ∥ m because co-interior angles add up to 180°."
  },
  {
    "id": "s2-formula-6-07",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "Given ℓ ∥ m, how are a and b related?",
    "answer": "a = b. Alternate angles are equal on parallel lines."
  },
  {
    "id": "s2-formula-6-08",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "Given ℓ ∥ m, how are a and b related?",
    "answer": "a = b. Corresponding angles are equal on parallel lines."
  },
  {
    "id": "s2-formula-6-09",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "Given ℓ ∥ m, how are a and b related?",
    "answer": "a + b = 180°. Co-interior angles add up to 180° on parallel lines."
  },
  {
    "id": "s2-formula-6-10",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "What is the sum of the three interior angles?",
    "answer": "a + b + c = 180°. The angles in a triangle add up to 180°."
  },
  {
    "id": "s2-formula-6-11",
    "chapter": 6,
    "level": "s2",
    "chapterTitle": "Angles and Parallel Lines (II)",
    "section": "Angles and Parallel Lines (II)",
    "type": "rule",
    "prompt": "Express the exterior angle e in terms of a and b.",
    "answer": "e = a + b. An exterior angle of a triangle equals the sum of the two opposite interior angles."
  },
  {
    "id": "s2-formula-8-01",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "How do you write the ratio a : b as a fraction?",
    "answer": "a/b, where b ≠ 0"
  },
  {
    "id": "s2-formula-8-02",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "Is ka : kb = a : b for every k ≠ 0?",
    "answer": "Yes. Both terms have the same non-zero factor k."
  },
  {
    "id": "s2-formula-8-03",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "Is ak : bk = a : b for every k ≠ 0?",
    "answer": "Yes. Dividing both terms by the same non-zero number preserves the ratio."
  },
  {
    "id": "s2-formula-8-04",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "Is (a + k) : (b + k) always equal to a : b?",
    "answer": "No. For 2 : 3 with k = 1, the new ratio is 3 : 4."
  },
  {
    "id": "s2-formula-8-05",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "Is (a − k) : (b − k) always equal to a : b?",
    "answer": "No. For 2 : 3 with k = 1, the new ratio is 1 : 2."
  },
  {
    "id": "s2-formula-8-06",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "A total P is shared in the ratio a : b. What is the first share?",
    "answer": "P × a/(a + b)k-methodLet k be the value of one part.ka + kb = Pk = P/(a + b)First share = ak = a(P/(a + b))."
  },
  {
    "id": "s2-formula-8-07",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "If a : b = c : d, which two products are equal?",
    "answer": "ad = bc, where b and d are non-zero"
  },
  {
    "id": "s2-formula-8-08",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "How do you calculate the scale of a drawing?",
    "answer": "Drawing length / actual length, in the same units."
  },
  {
    "id": "s2-formula-8-09",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "At a scale of 1 : n, what is the actual length for a drawing length D?",
    "answer": "Actual length = nD, in the same unit as D."
  },
  {
    "id": "s2-formula-8-10",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "For direct proportion, which ratio stays constant?",
    "answer": "y₁/x₁ = y₂/x₂ for non-zero x-values."
  },
  {
    "id": "s2-formula-8-11",
    "chapter": 8,
    "level": "s2",
    "chapterTitle": "Rates, Ratios and Proportions",
    "section": "Rates, Ratios and Proportions",
    "type": "rule",
    "prompt": "For inverse proportion, which product stays constant?",
    "answer": "x₁y₁ = x₂y₂."
  },
  {
    "id": "s2-formula-9-01",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "Which angles are equal if AB = AC?",
    "answer": "∠ABC = ∠BCABase angles of an isosceles triangle are equal."
  },
  {
    "id": "s2-formula-9-02",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "Which sides are equal if ∠ABC = ∠BCA?",
    "answer": "AB = ACSides opposite equal angles in a triangle are equal."
  },
  {
    "id": "s2-formula-9-03",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "What is the size of each angle in an equilateral triangle?",
    "answer": "60°The three angles are equal and add up to 180°."
  },
  {
    "id": "s2-formula-9-04",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "If all three angles are 60°, how are the sides related?",
    "answer": "AB = BC = CAEqual angles have equal opposite sides, so the triangle is equilateral."
  },
  {
    "id": "s2-formula-9-05",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "ABCD and EFGH are congruent. Which angle equals ∠ABC?",
    "answer": "∠EFGCorresponding angles in congruent figures are equal."
  },
  {
    "id": "s2-formula-9-06",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "ABCD and EFGH are congruent. Which side has the same length as AD?",
    "answer": "EHCorresponding sides of congruent figures are equal in length."
  },
  {
    "id": "s2-formula-9-07",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "ABCD and EFGH are similar. Which angle equals ∠BCD?",
    "answer": "∠FGHCorresponding angles in similar figures are equal."
  },
  {
    "id": "s2-formula-9-08",
    "chapter": 9,
    "level": "s2",
    "chapterTitle": "Congruence and Similarity (II)",
    "section": "Congruence and Similarity (II)",
    "type": "rule",
    "prompt": "ABCD and EFGH are similar. Complete EF/AB = FG/□.",
    "answer": "BCCorresponding side lengths are in the same ratio. Both fractions compare the second figure with the first."
  },
  {
    "id": "s2-formula-10-01",
    "chapter": 10,
    "level": "s2",
    "chapterTitle": "Polygons",
    "section": "Polygons",
    "type": "rule",
    "prompt": "What is the sum of the interior angles of an n-sided polygon?",
    "answer": "(n − 2) × 180°. A convex n-sided polygon splits into n − 2 triangles from one vertex. Angles in each triangle add up to 180°."
  },
  {
    "id": "s2-formula-10-02",
    "chapter": 10,
    "level": "s2",
    "chapterTitle": "Polygons",
    "section": "Polygons",
    "type": "rule",
    "prompt": "What is the size of each interior angle of a regular octagon?",
    "answer": "135°. The interior angles are equal, so divide their sum by eight: (8 − 2) × 180° ÷ 8 = 135°."
  },
  {
    "id": "s2-formula-10-03",
    "chapter": 10,
    "level": "s2",
    "chapterTitle": "Polygons",
    "section": "Polygons",
    "type": "rule",
    "prompt": "What is the sum of the exterior angles of a convex polygon?",
    "answer": "360°. Take one exterior angle at each vertex in the same direction. The turns make one complete revolution."
  },
  {
    "id": "s2-formula-10-04",
    "chapter": 10,
    "level": "s2",
    "chapterTitle": "Polygons",
    "section": "Polygons",
    "type": "rule",
    "prompt": "What is the size of each exterior angle of a regular hexagon?",
    "answer": "60°. The six exterior angles are equal and add up to 360°, so each is 360° ÷ 6."
  },
  {
    "id": "s2-formula-10-05",
    "chapter": 10,
    "level": "s2",
    "chapterTitle": "Polygons",
    "section": "Polygons",
    "type": "rule",
    "prompt": "Which regular polygons tessellate on their own, edge to edge?",
    "answer": "Equilateral triangles, squares and regular hexagons. At each vertex, 6 × 60°, 4 × 90° or 3 × 120° makes 360°."
  },
  {
    "id": "s2-formula-10-06",
    "chapter": 10,
    "level": "s2",
    "chapterTitle": "Polygons",
    "section": "Polygons",
    "type": "rule",
    "prompt": "Why can regular pentagons not tessellate on their own, edge to edge?",
    "answer": "Each interior angle is 108°. Three angles total 324°, leaving a 36° gap. Four would overlap."
  },
  {
    "id": "s2-formula-11-01",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "What does it mean for x to be an nth root of a?",
    "answer": "Raising x to the power n gives a: xn = a. For example, 2 is a fourth root of 16 because 2⁴ = 16."
  },
  {
    "id": "s2-formula-11-02",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "What are the two square roots of 49?",
    "answer": "7 and −7. Both square to 49. The symbol √49 alone means the positive root, 7."
  },
  {
    "id": "s2-formula-11-03",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "What is the cube root of −64?",
    "answer": "−4, because (−4)³ = −64."
  },
  {
    "id": "s2-formula-11-04",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "Which equation links the three sides of this right-angled triangle?",
    "answer": "a² + b² = c² by Pythagoras’ theorem. The hypotenuse, c, is opposite the right angle."
  },
  {
    "id": "s2-formula-11-05",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "What makes a number rational?",
    "answer": "A real number is rational if it can be written in the form ab, where a and b are integers and b ≠ 0."
  },
  {
    "id": "s2-formula-11-06",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "What makes a real number irrational?",
    "answer": "A real number is irrational if it cannot be written in the form ab, where a and b are integers and b ≠ 0."
  },
  {
    "id": "s2-formula-11-07",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "For a ≥ 0 and b ≥ 0, is a×b=ab always true?",
    "answer": "Yes. The product rule for square roots applies. For example, √4 × √9 = 2 × 3 = 6, and √36 = 6."
  },
  {
    "id": "s2-formula-11-08",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "For a ≥ 0 and b > 0, is ab=ab always true?",
    "answer": "Yes. The quotient rule for square roots applies. The denominator is non-zero because b > 0. For example, √36 ÷ √4 = 6 ÷ 2 = 3, and √(36 ÷ 4) = 3."
  },
  {
    "id": "s2-formula-11-09",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "For a, b ≥ 0, is a+b=a+b always true?",
    "answer": "No. √9 + √16 = 3 + 4 = 7, but √25 = 5."
  },
  {
    "id": "s2-formula-11-10",
    "chapter": 11,
    "level": "s2",
    "chapterTitle": "Roots and Pythagoras",
    "section": "Roots and Pythagoras",
    "type": "rule",
    "prompt": "For a ≥ b ≥ 0, is a−b=a−b always true?",
    "answer": "No. √25 − √9 = 5 − 3 = 2, but √16 = 4."
  },
  {
    "id": "s2-formula-12-01",
    "chapter": 12,
    "level": "s2",
    "chapterTitle": "Trigonometric Ratios",
    "section": "Trigonometric Ratios",
    "type": "rule",
    "prompt": "How do you write sin θ, cos θ and tan θ in terms of the sides?",
    "answer": "sin θ = oppositehypotenuse = BCACcos θ = adjacenthypotenuse = ABACtan θ = oppositeadjacent = BCAB"
  },
  {
    "id": "s2-formula-12-02",
    "chapter": 12,
    "level": "s2",
    "chapterTitle": "Trigonometric Ratios",
    "section": "Trigonometric Ratios",
    "type": "rule",
    "prompt": "What values can sin θ take when θ is acute?",
    "answer": "0 < sin θ < 1. The opposite side is shorter than the hypotenuse."
  },
  {
    "id": "s2-formula-12-03",
    "chapter": 12,
    "level": "s2",
    "chapterTitle": "Trigonometric Ratios",
    "section": "Trigonometric Ratios",
    "type": "rule",
    "prompt": "What values can cos θ take when θ is acute?",
    "answer": "0 < cos θ < 1. The adjacent side is shorter than the hypotenuse."
  },
  {
    "id": "s2-formula-12-04",
    "chapter": 12,
    "level": "s2",
    "chapterTitle": "Trigonometric Ratios",
    "section": "Trigonometric Ratios",
    "type": "rule",
    "prompt": "What values can tan θ take when θ is acute?",
    "answer": "tan θ > 0. Both legs have positive lengths. Their ratio can exceed 1 and has no upper bound."
  },
  {
    "id": "s2-formula-12-05",
    "chapter": 12,
    "level": "s2",
    "chapterTitle": "Trigonometric Ratios",
    "section": "Trigonometric Ratios",
    "type": "rule",
    "prompt": "As an acute angle θ increases, how do sin θ, cos θ and tan θ change?",
    "answer": "sin θ increases, cos θ decreases and tan θ increases.For example, sin 25° < sin 55°, cos 25° > cos 55° and tan 25° < tan 55°."
  },
  {
    "id": "s2-formula-13-01",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the circumference of a circle?",
    "answer": "C = 2πr = πd, where d = 2r."
  },
  {
    "id": "s2-formula-13-02",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the area of a circle?",
    "answer": "A = πr², where r is the radius."
  },
  {
    "id": "s2-formula-13-03",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the highlighted curved line from A to B called?",
    "answer": "The minor arc AB. An arc is part of the circumference."
  },
  {
    "id": "s2-formula-13-04",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "Which angle at the centre is subtended by the highlighted arc AB?",
    "answer": "∠AOB = θ. The two radii meet at O."
  },
  {
    "id": "s2-formula-13-05",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the length of the highlighted arc AB?",
    "answer": "Arc length = (θ / 360°) × 2πr. The arc is the same fraction of the circumference as θ is of a full turn."
  },
  {
    "id": "s2-formula-13-06",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "Which boundaries enclose the shaded sector?",
    "answer": "The two radii OA and OB and the arc AB."
  },
  {
    "id": "s2-formula-13-07",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the area of the shaded sector?",
    "answer": "Sector area = (θ / 360°) × πr²."
  },
  {
    "id": "s2-formula-13-08",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What shape is a cross-section parallel to either base of a circular cylinder?",
    "answer": "A circle of the same radius as the bases. Every such cross-section has area πr²."
  },
  {
    "id": "s2-formula-13-09",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "How is the height of an oblique cylinder measured?",
    "answer": "Measure the perpendicular distance between the parallel bases, shown by h."
  },
  {
    "id": "s2-formula-13-10",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the volume of a circular cylinder?",
    "answer": "V = πr²h. Multiply the area of one circular base by the perpendicular height.Right cylinderOblique cylinder"
  },
  {
    "id": "s2-formula-13-11",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the curved surface area of a right circular cylinder?",
    "answer": "2πrh. Unroll the curved surface to form a rectangle of length 2πr and height h."
  },
  {
    "id": "s2-formula-13-12",
    "chapter": 13,
    "level": "s2",
    "chapterTitle": "Circles, Sectors and Cylinders",
    "section": "Circles, Sectors and Cylinders",
    "type": "rule",
    "prompt": "What is the total surface area of a closed right circular cylinder?",
    "answer": "2πrh + 2πr². Add the curved surface area and the areas of both circular ends."
  }
];
export const s2FormulaCards = [...existingIds.map(id => {
  const card = byId.get(id);
  if (!card) throw new Error("Missing S2 formula card " + id);
  return card;
}), ...newS2ReviewCards];
