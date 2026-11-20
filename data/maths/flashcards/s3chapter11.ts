import type { MathsFlashcard } from "./types";

const sections = [
  {
    "title": "Special angles",
    "cards": [
      [
        "What is sin 30°?",
        "1/2"
      ],
      [
        "What is cos 30°?",
        "√3/2"
      ],
      [
        "What is tan 30°?",
        "1/√3 = √3/3"
      ],
      [
        "What is sin 45°?",
        "1/√2 = √2/2"
      ],
      [
        "What is tan 45°?",
        "1, since the two legs are equal."
      ],
      [
        "What is sin 60°?",
        "√3/2"
      ],
      [
        "What is cos 60°?",
        "1/2"
      ],
      [
        "What is tan 60°?",
        "√3"
      ]
    ]
  },
  {
    "title": "Finding ratios with Pythagoras",
    "cards": [
      [
        "Which sides represent sin θ?",
        "Opposite / hypotenuse."
      ],
      [
        "Which sides represent cos θ?",
        "Adjacent leg / hypotenuse."
      ],
      [
        "Which sides represent tan θ?",
        "Opposite / adjacent leg."
      ],
      [
        "If tan θ = 2, choose two leg lengths.",
        "Opposite 2 and adjacent 1 give the required ratio."
      ],
      [
        "Those legs measure 2 and 1. What is the hypotenuse?",
        "√(4 + 1) = √5."
      ],
      [
        "For acute θ with cos θ = 8/17, find sin θ.",
        "The opposite leg is √(17² − 8²) = 15, so sin θ = 15/17."
      ]
    ]
  },
  {
    "title": "Trigonometric relations",
    "cards": [
      [
        "Express tan θ using sine and cosine.",
        "sin θ / cos θ"
      ],
      [
        "What is sin²θ + cos²θ?",
        "1"
      ],
      [
        "Rewrite 1 − sin²θ.",
        "cos²θ"
      ],
      [
        "For acute θ, recover sin θ from cos θ.",
        "√(1 − cos²θ), taking the positive root."
      ],
      [
        "Simplify cos θ tan θ.",
        "sin θ"
      ],
      [
        "Write sin θ as a cosine.",
        "cos(90° − θ)"
      ],
      [
        "Write cos θ as a sine.",
        "sin(90° − θ)"
      ],
      [
        "What is tan θ tan(90° − θ)?",
        "1, since the two ratios are reciprocals."
      ],
      [
        "Find acute x if sin x = cos 37°.",
        "53°, the complement of 37°."
      ],
      [
        "Simplify sin²17° + sin²73°.",
        "1, since sin 73° = cos 17°."
      ]
    ]
  }
];
export const s3Chapter11Flashcards: MathsFlashcard[] = sections.flatMap(({title, cards}, section) =>
  cards.map(([prompt, answer], index) => ({
    id: `s3-c11-s${section + 1}-${index + 1}`, level: "s3", chapter: 11,
    chapterTitle: "Trigonometric Relations", section: title, type: "rule", prompt, answer
  }))
);
