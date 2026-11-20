import type { MathsFlashcard } from "./types";

const sections = [
  {
    "title": "Gradients",
    "cards": [
      [
        "How do you calculate gradient?",
        "Divide vertical rise by horizontal run, both in the same unit."
      ],
      [
        "What does a gradient of 1 in 8 mean?",
        "A rise of one unit for every eight units horizontally."
      ],
      [
        "Which is steeper, 1 in 6 or 1 in 10?",
        "1 in 6. It gains the same height over a shorter run."
      ],
      [
        "How is inclination measured?",
        "From the horizontal to the slope."
      ],
      [
        "Which ratio equals the gradient?",
        "tan θ, where θ is the inclination."
      ],
      [
        "A ramp rises 4 m over a horizontal run of 24 m. Find its inclination.",
        "tan⁻¹(4/24) ≈ 9.46°."
      ],
      [
        "A 13 m ramp rises 5 m. Find its gradient.",
        "Run = √(13² − 5²) = 12 m. Gradient = 5/12."
      ],
      [
        "A path with gradient 1 in 15 rises 6 m. Find the run.",
        "6 × 15 = 90 m."
      ],
      [
        "What does a contour line join?",
        "Points at the same height above sea level."
      ],
      [
        "How much horizontal distance does 2 cm represent at 1 to 50,000?",
        "100,000 cm = 1,000 m."
      ],
      [
        "A road joins the 200 m and 300 m contours over a run of 1 km. Find its gradient.",
        "100/1,000 = 1/10."
      ],
      [
        "A straight hillside track rises 60 m over a run of 80 m. How long is it?",
        "√(60² + 80²) = 100 m."
      ]
    ]
  },
  {
    "title": "Angles of elevation and depression",
    "cards": [
      [
        "Where is the vertex of an angle of elevation?",
        "At the observer’s eye or observation point."
      ],
      [
        "What is the angle of depression?",
        "The angle measured down from the observer’s horizontal to the line of sight."
      ],
      [
        "Why do the elevation and depression angles between two points match?",
        "Their horizontals are parallel and the sight line forms equal alternate interior angles."
      ],
      [
        "A sight line makes 32° with the upward vertical. What is its elevation?",
        "90° − 32° = 58°."
      ],
      [
        "A balloon is 30 m above an observer and 30 m away horizontally. Find the elevation.",
        "tan⁻¹(30/30) = 45°."
      ],
      [
        "From eye height 1.5 m, a roof appears at 45° across a 10 m run on level ground. How high is it?",
        "1.5 + 10 tan 45° = 11.5 m."
      ],
      [
        "Which ratio uses height difference and sight-line distance?",
        "Sine. The sight line is the hypotenuse."
      ],
      [
        "From a 20 m tower a boat is seen at a depression of 30°. Find its horizontal distance from the base.",
        "20/tan 30° ≈ 34.6 m."
      ],
      [
        "Two observers at heights 8 m and 3 m are 12 m apart horizontally. Find the angle of depression.",
        "tan⁻¹(5/12) ≈ 22.6°."
      ],
      [
        "A kite string is taut at 30° and is 40 m long. How far above the hand is the kite?",
        "40 sin 30° = 20 m."
      ],
      [
        "Two points on a tower have elevations α and β from the same observer, with β larger. For run d, find their height difference.",
        "d(tan β − tan α)."
      ],
      [
        "From a lighthouse, which boat at sea level is nearer if the depression angles are 20° and 40°?",
        "The boat at 40°. At fixed height h, distance = h/tan θ."
      ]
    ]
  },
  {
    "title": "Bearings",
    "cards": [
      [
        "Where do you draw north for the bearing of B from A?",
        "At A, the starting point."
      ],
      [
        "How do you measure a true bearing?",
        "Clockwise from north, with three digits in the whole-number part."
      ],
      [
        "Write the true bearing for 7° east of north.",
        "007°."
      ],
      [
        "What is the true bearing of due west?",
        "270°."
      ],
      [
        "How do you read S35°E?",
        "Start facing south and turn 35° towards east."
      ],
      [
        "Convert S35°E to a true bearing.",
        "180° − 35° = 145°."
      ],
      [
        "Convert N25°W to a true bearing.",
        "360° − 25° = 335°."
      ],
      [
        "Convert 210° to a compass bearing.",
        "S30°W."
      ],
      [
        "How do you reverse a true bearing?",
        "Add 180° if below 180°. Otherwise subtract 180°."
      ],
      [
        "A ship sails out on 040°. What is its return bearing?",
        "220°, equivalent to S40°W."
      ],
      [
        "A walker goes 3 km east and 4 km north. Find the true bearing of the destination from the start to the nearest degree.",
        "tan⁻¹(3/4) ≈ 37°. Write 037°."
      ],
      [
        "How do you find the shortest distance from a lighthouse to a straight sailing route when the closest point lies ahead?",
        "Draw a perpendicular from the lighthouse to the route and find its length using the right triangle."
      ]
    ]
  }
];
export const s3Chapter12Flashcards: MathsFlashcard[] = sections.flatMap(({title, cards}, section) =>
  cards.map(([prompt, answer], index) => ({
    id: `s3-c12-s${section + 1}-${index + 1}`, level: "s3", chapter: 12,
    chapterTitle: "Applications in Trigonometry", section: title, type: "rule", prompt, answer
  }))
);
