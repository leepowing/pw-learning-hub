import { reasonRef } from "@/data/maths/reasons/reasonBank";
import type { MathsFlashcard } from "./types";

const sections = [
  {
    "title": "Basic Knowledge of Quadrilaterals",
    "cards": [
      [
        "How many diagonals has a quadrilateral?",
        "Two. Each joins a pair of opposite vertices."
      ],
      [
        "Three interior angles are 70°, 80° and 95°. Find the fourth.",
        "115°. Subtract their sum from 360°.",
        reasonRef("quadrilateral.angleSum")
      ],
      [
        "Which sides are opposite AB in quadrilateral ABCD?",
        "CD is opposite AB. They have no shared vertex."
      ],
      [
        "Which sides meet at vertex D in ABCD?",
        "CD and DA."
      ]
    ]
  },
  {
    "title": "Parallelograms",
    "cards": [
      [
        "What defines a parallelogram?",
        "Both pairs of opposite sides are parallel."
      ],
      [
        "One angle of a parallelogram is 64°. Find an adjacent angle.",
        "116°. Adjacent interior angles are supplementary.",
        reasonRef("quad.adjacentAngles")
      ],
      [
        "How can one pair of opposite sides prove a parallelogram?",
        "The same pair must be equal in length and parallel.",
        reasonRef("quad.equalParallel")
      ],
      [
        "How do its diagonals divide each other?",
        "Each cuts the other into equal halves.",
        reasonRef("quad.bisect")
      ]
    ]
  },
  {
    "title": "Properties of Rhombuses, Rectangles, Squares and Trapeziums",
    "cards": [
      [
        "Which quadrilateral has four equal sides?",
        "A rhombus. A square is a special rhombus."
      ],
      [
        "What angle do the diagonals of a rhombus make?",
        "90°.",
        reasonRef("quad.rhombusDiagonals")
      ],
      [
        "How do the diagonals of a rectangle compare?",
        "They have equal length and bisect each other.",
        reasonRef("quad.rectangleDiagonals")
      ],
      [
        "What angle does a square diagonal make with an adjacent side?",
        "45°. The diagonal bisects a right angle.",
        reasonRef("quad.squareAngles")
      ],
      [
        "What defines a trapezium in this chapter?",
        "Exactly one pair of opposite sides is parallel."
      ],
      [
        "What distinguishes an isosceles trapezium?",
        "Its two non-parallel sides are equal."
      ]
    ]
  },
  {
    "title": "Proofs Related to Parallelograms",
    "cards": [
      [
        "Why draw a diagonal when proving opposite sides equal?",
        "It creates two triangles that share a side.",
        reasonRef("geometry.commonSide")
      ],
      [
        "How can a transversal of parallel sides help prove congruence?",
        "It gives equal alternate interior angles or equal corresponding angles."
      ],
      [
        "Once two triangles are congruent, how do you justify a length equality?",
        "Identify the two sides as corresponding sides.",
        reasonRef("congruence.correspondingSides")
      ],
      [
        "Which shape property proves that two segments bisect each other?",
        "Show the segments are the diagonals of a parallelogram.",
        reasonRef("quad.bisect")
      ]
    ]
  },
  {
    "title": "Mid-point Theorem and Intercept Theorem",
    "cards": [
      [
        "What does the mid-point theorem tell you about direction?",
        "The segment joining two side midpoints is parallel to the third side.",
        reasonRef("triangle.midsegment")
      ],
      [
        "A triangle has a mid-segment of 7 cm. How long is the parallel side?",
        "14 cm, twice the mid-segment.",
        reasonRef("triangle.midsegment")
      ],
      [
        "A parallel to the base passes through one side midpoint. Where does it meet the other side?",
        "At its midpoint by the intercept theorem.",
        reasonRef("triangle.parallelMidpoint")
      ],
      [
        "Three parallels cut equal intercepts on one transversal. What follows on another?",
        "Its corresponding successive intercepts are equal to each other.",
        reasonRef("geometry.equalIntercepts")
      ],
      [
        "Why do four consecutive side midpoints form a parallelogram?",
        "Two opposite midpoint segments are each parallel to the same diagonal and half its length.",
        reasonRef("triangle.midsegment") + reasonRef("quad.equalParallel")
      ]
    ]
  }
];

export const s3Chapter8Flashcards: MathsFlashcard[] = sections.flatMap(({title, cards}, section) =>
  cards.map(([prompt, answer, answerReason], index) => ({
    id: `s3-c8-s${section + 1}-${index + 1}`, level: "s3", chapter: 8,
    chapterTitle: "Quadrilaterals", section: title, type: "rule", prompt, answer, answerReason
  }))
);
