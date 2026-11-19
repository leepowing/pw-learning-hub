import type { MathsFlashcard } from "./types";

const sections = [
  { title: "More Proofs on Triangles", cards: [
    ["Which sides correspond when ABC is similar to PQR?", "AB to PQ, BC to QR and AC to PR. Match the vertices in order."],
    ["What proves similarity using angles alone?", "Two pairs of equal corresponding angles suffice. The third pair follows from the angle sum."],
    ["When do two side ratios and one angle prove similarity?", "The corresponding sides must be proportional and the equal angles must lie between those sides."],
    ["What does RHS require?", "Two right-angled triangles with equal hypotenuses and one other pair of equal corresponding sides."],
    ["AB = AC. Which angles in ABC are equal?", "Angles ABC and BCA are opposite equal sides."],
    ["Angles ABC and BCA are equal. What follows?", "AC = AB because sides opposite equal angles are equal."],
    ["Why can joining two existing vertices help a congruence proof?", "The new segment can supply a shared side for two triangles."],
    ["If the longest side is 13 and the others are 5 and 12, why is the triangle right-angled?", "5² + 12² = 13², so the converse of Pythagoras’ theorem applies."]
  ]},
  { title: "Lines in Triangles", cards: [
    ["What defines a median?", "It joins a vertex to the midpoint of the opposite side."],
    ["What defines an altitude?", "It runs from a vertex perpendicular to the line containing the opposite side."],
    ["What two marks establish a perpendicular bisector?", "Equal halves of the segment and a right angle at its midpoint."],
    ["What defines an internal angle bisector?", "It splits the interior angle into two equal angles."],
    ["How is distance from a point to a line measured?", "Along the perpendicular from the point to the line."],
    ["P is inside an angle and equally far from its two sides. Where is P?", "On the internal angle bisector."],
    ["PA = PB. Where must P lie?", "On the perpendicular bisector of AB."],
    ["When can an altitude fall outside a triangle?", "In an obtuse triangle, two altitudes meet extensions of the opposite sides."]
  ]},
  { title: "Centres of Triangles", cards: [
    ["What does concurrent mean?", "Three or more lines pass through one point."],
    ["Which lines locate the incentre?", "The three internal angle bisectors."],
    ["What distance gives the inradius?", "The perpendicular distance from the incentre to any side."],
    ["Which lines locate the circumcentre?", "The perpendicular bisectors of the sides."],
    ["What distance gives the circumradius?", "The distance from the circumcentre to any vertex."],
    ["Which point balances a uniform triangular sheet?", "The centroid, where the medians meet."],
    ["Which lines locate the orthocentre?", "The lines containing the three altitudes."],
    ["Which centres are always inside?", "The incentre and centroid."],
    ["Where is the circumcentre of a right triangle?", "At the midpoint of the hypotenuse."],
    ["Where is the orthocentre of a right triangle?", "At the right-angled vertex."],
    ["Which centres lie outside an obtuse triangle?", "The circumcentre and orthocentre."],
    ["Why must the compass opening exceed half a segment when constructing its perpendicular bisector?", "Equal arcs from the endpoints must cross at two distinct points."]
  ]}
];

export const s3Chapter7Flashcards: MathsFlashcard[] = sections.flatMap(({title, cards}, section) =>
  cards.map(([prompt, answer], index) => ({
    id: `s3-c7-s${section + 1}-${index + 1}`, level: "s3", chapter: 7,
    chapterTitle: "More about Triangles", section: title, type: "rule", prompt, answer
  }))
);
