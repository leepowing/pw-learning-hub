import type { MathsFlashcard } from "./types";

const sections = [
  {
    "title": "13.1 · Distance",
    "cards": [
      [
        "What are the legs of the coordinate distance triangle?",
        "The absolute horizontal and vertical differences."
      ],
      [
        "How do you find the distance between two points?",
        "Square both coordinate differences, add them and take the positive square root for distinct points."
      ],
      [
        "Find the distance from (−1, 2) to (2, 6).",
        "5 units. The coordinate changes are 3 and 4."
      ],
      [
        "Which distance from O is greater, to (2, 4) or (3, 3)?",
        "To (2, 4). Its squared distance is 20 compared with 18."
      ],
      [
        "How can squared distances prove a triangle is right-angled?",
        "Show that the two smaller squared lengths add to the largest squared length."
      ],
      [
        "How far apart are (−4, 3) and (2, 3)?",
        "6 units. Only the x-coordinate changes."
      ]
    ]
  },
  {
    "title": "13.2 · Slope and intercepts",
    "cards": [
      [
        "What is the slope formula?",
        "Divide signed change in y by signed change in x, taking both in the same direction."
      ],
      [
        "Find the slope through (1, 4) and (5, 2).",
        "−½. The line drops 2 units in a run of 4."
      ],
      [
        "What is the slope of a horizontal line?",
        "Zero, because its rise is zero."
      ],
      [
        "Why is the slope of a vertical line undefined?",
        "Its run is zero, so the quotient would divide by zero."
      ],
      [
        "How do you find an x-intercept?",
        "Set y = 0 and solve for x."
      ],
      [
        "Find the y-intercept of y = 3x − 7.",
        "−7. The line crosses the y-axis at (0, −7)."
      ]
    ]
  },
  {
    "title": "13.3 · Parallel and perpendicular lines",
    "cards": [
      [
        "How can you test two distinct non-vertical lines for parallelism?",
        "Compare their slopes. Equal slopes give parallel lines."
      ],
      [
        "What slope is perpendicular to ⅔?",
        "−3/2, the negative reciprocal."
      ],
      [
        "How are x = 4 and y = 2 related?",
        "Perpendicular. One is vertical and one horizontal."
      ],
      [
        "Can distinct vertical lines be parallel?",
        "Yes. They run in the same direction at different x-values."
      ],
      [
        "How are lines with slopes −3 and ⅓ related?",
        "Perpendicular because their slopes multiply to −1."
      ],
      [
        "How can slopes identify a rectangle among parallelograms?",
        "Show that two adjacent sides are perpendicular, giving a right angle."
      ]
    ]
  },
  {
    "title": "13.4 · Point of division",
    "cards": [
      [
        "What is the midpoint formula?",
        "Average the x-coordinates and the y-coordinates separately."
      ],
      [
        "Find the midpoint of (−6, 1) and (4, 5).",
        "(−1, 3)."
      ],
      [
        "A is (1, 2) and midpoint M is (4, 0). Find B.",
        "(7, −2). Repeat the change (3, −2) from M."
      ],
      [
        "If AP : PB = 2 : 3, what fraction of AB is AP?",
        "2/5. The whole segment contains five equal parts."
      ],
      [
        "Divide the segment from (1, 1) to (9, 5) in the ratio 3 : 1.",
        "(7, 4). Add three quarters of (8, 4) to (1, 1)."
      ],
      [
        "Where are the two trisection points measured from A?",
        "One third and two thirds of the way to B."
      ]
    ]
  },
  {
    "title": "13.5 · Geometric proofs",
    "cards": [
      [
        "How can you prove two diagonals bisect each other?",
        "Calculate both midpoints and show they coincide."
      ],
      [
        "Why use letters for side lengths in a proof?",
        "They represent all admissible lengths, so the conclusion applies generally."
      ],
      [
        "Where can you put the origin for a perpendicular-bisector proof?",
        "At the midpoint of the segment, with the segment on the x-axis."
      ],
      [
        "For A(−a, 0) and P(0, b), what is PA²?",
        "a² + b²."
      ],
      [
        "What are the diagonal slopes of a square with axis-parallel sides?",
        "1 and −1. Their product proves perpendicularity."
      ],
      [
        "What coordinates complete O(0, 0), A(a, 0), B(?), C(b, c) as a parallelogram?",
        "B(a + b, c). The step from A to B equals the step from O to C."
      ]
    ]
  }
];
export const s3Chapter13Flashcards: MathsFlashcard[] = sections.flatMap(({title, cards}, section) =>
  cards.map(([prompt, answer], index) => ({
    id: `s3-c13-s${section + 1}-${index + 1}`, level: "s3", chapter: 13,
    chapterTitle: "Rectangular Coordinate System (II)", section: title, type: "rule", prompt, answer
  }))
);
