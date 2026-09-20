
import { reasonRef } from "@/data/maths/reasons/reasonBank";
export type DiagramData = { a: number; b: number; c: number; labels: [string, string, string]; right: boolean };
export type CheckpointQuestion = { id: string; section: string; prompt: string; options: string[]; answer: number; steps: { working: string; reference: string }[]; diagram?: DiagramData };
export const questions: CheckpointQuestion[] = [
  {
    "id": "s2-c11-check-01",
    "section": "11.1",
    "prompt": "Evaluate √121.",
    "options": [
      "−11",
      "±11",
      "11",
      "121"
    ],
    "answer": 2,
    "steps": [
      {
        "working": "√121 = 11",
        "reference": "Principal (non-negative) square root"
      }
    ]
  },
  {
    "id": "s2-c11-check-02",
    "section": "11.1",
    "prompt": "Find all real solutions of x² = 49.",
    "options": [
      "x = 7 only",
      "x = ±7",
      "x = −7 only",
      "No real solution"
    ],
    "answer": 1,
    "steps": [
      {
        "working": "7² = 49 and (−7)² = 49",
        "reference": "Definition of a square root"
      },
      {
        "working": "x = ±7",
        "reference": "Both real solutions"
      }
    ]
  },
  {
    "id": "s2-c11-check-03",
    "section": "11.1",
    "prompt": "Evaluate ∛(−216).",
    "options": [
      "−6",
      "6",
      "±6",
      "No real value"
    ],
    "answer": 0,
    "steps": [
      {
        "working": "(−6)³ = −216",
        "reference": "Definition of a cube root"
      },
      {
        "working": "∛(−216) = −6",
        "reference": "Unique real cube root"
      }
    ]
  },
  {
    "id": "s2-c11-check-04",
    "section": "11.1",
    "prompt": "How many real solutions does x⁴ = −81 have?",
    "options": [
      "One",
      "Two",
      "Four",
      "None"
    ],
    "answer": 3,
    "steps": [
      {
        "working": "x⁴ ≥ 0 for every real x",
        "reference": "An even power is non-negative"
      },
      {
        "working": "x⁴ cannot equal −81",
        "reference": "Compare signs"
      }
    ]
  },
  {
    "id": "s2-c11-check-05",
    "section": "11.2",
    "prompt": "In triangle ABC, ∠C = 90°, AC = 6 cm and BC = 8 cm. Find AB.",
    "options": [
      "14 cm",
      "10 cm",
      "√28 cm",
      "100 cm"
    ],
    "answer": 1,
    "steps": [
      {
        "working": "AB² = 6² + 8² = 100",
        "reference": reasonRef("pythagoras.theorem")
      },
      {
        "working": "AB = 10 cm",
        "reference": "AB > 0 (a length)"
      }
    ],
    "diagram": {
      "a": 6,
      "b": 8,
      "c": 10,
      "labels": [
        "6 cm",
        "8 cm",
        "x cm"
      ],
      "right": true
    }
  },
  {
    "id": "s2-c11-check-06",
    "section": "11.2",
    "prompt": "In triangle ABC, ∠C = 90°, AB = 13 cm and BC = 12 cm. Find AC.",
    "options": [
      "25 cm",
      "√313 cm",
      "5 cm",
      "1 cm"
    ],
    "answer": 2,
    "steps": [
      {
        "working": "AC² + 12² = 13²",
        "reference": reasonRef("pythagoras.theorem")
      },
      {
        "working": "AC² = 169 − 144 = 25",
        "reference": "Rearrange and calculate"
      },
      {
        "working": "AC = 5 cm",
        "reference": "AC > 0 (a length)"
      }
    ],
    "diagram": {
      "a": 5,
      "b": 12,
      "c": 13,
      "labels": [
        "x cm",
        "12 cm",
        "13 cm"
      ],
      "right": true
    }
  },
  {
    "id": "s2-c11-check-07",
    "section": "11.2",
    "prompt": "A rectangle is 9 cm long and 12 cm wide. Find the length of its diagonal.",
    "options": [
      "15 cm",
      "21 cm",
      "3 cm",
      "225 cm"
    ],
    "answer": 0,
    "steps": [
      {
        "working": "d² = 9² + 12² = 225",
        "reference": reasonRef("pythagoras.theorem")
      },
      {
        "working": "d = 15 cm",
        "reference": "d > 0 (a length)"
      }
    ]
  },
  {
    "id": "s2-c11-check-08",
    "section": "11.2",
    "prompt": "In triangle ABC, ∠C = 90°, AC = 4 cm and BC = 7 cm. Find the exact length of AB.",
    "options": [
      "11 cm",
      "√33 cm",
      "65 cm",
      "√65 cm"
    ],
    "answer": 3,
    "steps": [
      {
        "working": "AB² = 4² + 7² = 65",
        "reference": reasonRef("pythagoras.theorem")
      },
      {
        "working": "AB = √65 cm",
        "reference": "AB > 0; keep the exact value"
      }
    ],
    "diagram": {
      "a": 4,
      "b": 7,
      "c": 8.06225774829855,
      "labels": [
        "4 cm",
        "7 cm",
        "x cm"
      ],
      "right": true
    }
  },
  {
    "id": "s2-c11-check-09",
    "section": "11.3",
    "prompt": "AB = 17 cm, BC = 15 cm and AC = 8 cm. Which angle is a right angle?",
    "options": [
      "∠A",
      "∠B",
      "∠C",
      "There is no right angle"
    ],
    "answer": 2,
    "steps": [
      {
        "working": "AB is the longest side; 8² + 15² = 289 = 17²",
        "reference": "Compare the squares"
      },
      {
        "working": "∠C = 90°",
        "reference": reasonRef("pythagoras.converse")
      }
    ],
    "diagram": {
      "a": 8,
      "b": 15,
      "c": 17,
      "labels": [
        "8 cm",
        "15 cm",
        "17 cm"
      ],
      "right": false
    }
  },
  {
    "id": "s2-c11-check-10",
    "section": "11.3",
    "prompt": "A triangle has side lengths 7, 9 and 12. Is it right-angled?",
    "options": [
      "Yes: 7 + 9 > 12",
      "No: 7² + 9² ≠ 12²",
      "Yes: 12 is the longest side",
      "There is not enough information"
    ],
    "answer": 1,
    "steps": [
      {
        "working": "7² + 9² = 130; 12² = 144",
        "reference": "Compare the squares using the longest side"
      },
      {
        "working": "130 ≠ 144, so the triangle is not right-angled",
        "reference": reasonRef("pythagoras.notRightAngled", {"variant":"textbook1"})
      }
    ]
  },
  {
    "id": "s2-c11-check-11",
    "section": "11.3",
    "prompt": "Which set of lengths forms a right-angled triangle?",
    "options": [
      "6, 8, 11",
      "5, 6, 7",
      "3, 5, 7",
      "9, 12, 15"
    ],
    "answer": 3,
    "steps": [
      {
        "working": "9² + 12² = 225 = 15²",
        "reference": "Compare the squares"
      },
      {
        "working": "The triangle with sides 9, 12 and 15 is right-angled",
        "reference": reasonRef("pythagoras.converse")
      }
    ]
  },
  {
    "id": "s2-c11-check-12",
    "section": "11.3",
    "prompt": "A triangle has sides √5, 2 and 3. Which statement is correct?",
    "options": [
      "It is right-angled, opposite the side of length 3.",
      "It is right-angled, opposite the side of length √5.",
      "It is not right-angled because one side is irrational.",
      "The side of length 2 is the hypotenuse."
    ],
    "answer": 0,
    "steps": [
      {
        "working": "3 is the longest side",
        "reference": "Compare the lengths"
      },
      {
        "working": "(√5)² + 2² = 5 + 4 = 9 = 3²",
        "reference": "Compare the squares"
      },
      {
        "working": "The angle opposite the side of length 3 is 90°",
        "reference": reasonRef("pythagoras.converse")
      }
    ]
  },
  {
    "id": "s2-c11-check-13",
    "section": "11.4",
    "prompt": "Which number is irrational?",
    "options": [
      "−8",
      "0.125",
      "√19",
      "∛125"
    ],
    "answer": 2,
    "steps": [
      {
        "working": "−8 = −8/1; 0.125 = 1/8; ∛125 = 5",
        "reference": "Ratios of integers"
      },
      {
        "working": "√19 is irrational",
        "reference": "19 is a positive integer that is not a perfect square"
      }
    ]
  },
  {
    "id": "s2-c11-check-14",
    "section": "11.4",
    "prompt": "The decimal 0.272727… repeats the block 27 forever. It is:",
    "options": [
      "Irrational because it never ends",
      "Rational because it eventually repeats",
      "Neither rational nor irrational",
      "An integer"
    ],
    "answer": 1,
    "steps": [
      {
        "working": "Let x = 0.272727…; then 100x = 27.272727…",
        "reference": "Recurring decimal"
      },
      {
        "working": "99x = 27, so x = 27/99 = 3/11",
        "reference": "Subtract and solve"
      },
      {
        "working": "x is rational",
        "reference": "A ratio of two integers"
      }
    ]
  },
  {
    "id": "s2-c11-check-15",
    "section": "11.4",
    "prompt": "Classify √(81/16).",
    "options": [
      "Irrational",
      "Not a real number",
      "An integer",
      "Rational but not an integer"
    ],
    "answer": 3,
    "steps": [
      {
        "working": "√(81/16) = 9/4",
        "reference": "Principal square root"
      },
      {
        "working": "9/4 is rational but not an integer",
        "reference": "Ratio of integers; denominator does not divide numerator"
      }
    ]
  },
  {
    "id": "s2-c11-check-16",
    "section": "11.4",
    "prompt": "Which statement about π and 3.14 is correct?",
    "options": [
      "π is irrational; 3.14 is rational.",
      "Both are irrational.",
      "Both are rational.",
      "π = 3.14 exactly."
    ],
    "answer": 0,
    "steps": [
      {
        "working": "3.14 = 157/50",
        "reference": "Terminating decimal"
      },
      {
        "working": "π is irrational; 3.14 is only an approximation to π",
        "reference": "Exact values and approximations"
      }
    ]
  },
  {
    "id": "s2-c11-check-17",
    "section": "11.5",
    "prompt": "Simplify √48 + √27.",
    "options": [
      "√75",
      "7√3",
      "25√3",
      "7√6"
    ],
    "answer": 1,
    "steps": [
      {
        "working": "√48 + √27 = 4√3 + 3√3",
        "reference": "Extract square factors"
      },
      {
        "working": "= 7√3",
        "reference": "Collect like surds"
      }
    ]
  },
  {
    "id": "s2-c11-check-18",
    "section": "11.5",
    "prompt": "Simplify (2√5)(3√10).",
    "options": [
      "6√15",
      "12√5",
      "30√2",
      "60"
    ],
    "answer": 2,
    "steps": [
      {
        "working": "(2√5)(3√10) = 6√50",
        "reference": "Multiply coefficients and roots"
      },
      {
        "working": "= 6 × 5√2 = 30√2",
        "reference": "Extract a square factor"
      }
    ]
  },
  {
    "id": "s2-c11-check-19",
    "section": "11.5",
    "prompt": "Simplify √72 ÷ √8.",
    "options": [
      "3",
      "9",
      "√64",
      "8"
    ],
    "answer": 0,
    "steps": [
      {
        "working": "√72 / √8 = √(72/8) = √9",
        "reference": "Quotient rule for square roots"
      },
      {
        "working": "= 3",
        "reference": "Principal square root"
      }
    ]
  },
  {
    "id": "s2-c11-check-20",
    "section": "11.5",
    "prompt": "Rationalize 2/√3 + √3 and simplify.",
    "options": [
      "3√3",
      "5/√6",
      "2√3/3",
      "5√3/3"
    ],
    "answer": 3,
    "steps": [
      {
        "working": "2/√3 + √3 = 2√3/3 + √3",
        "reference": "Multiply the first fraction by √3/√3 = 1"
      },
      {
        "working": "= 2√3/3 + 3√3/3 = 5√3/3",
        "reference": "Use a common denominator and add"
      }
    ]
  }
];
