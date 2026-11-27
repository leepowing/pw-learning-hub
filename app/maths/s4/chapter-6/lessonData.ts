export type Topic={name:string;info:string;formula:string;q:string;steps:string[];reason:string;diagram:string};
export type Lesson={number:string;slug:string;title:string;description:string;topics:Topic[];mistake:string;correction:string;practice:{q:string;a:string}[];summary:string[]};
export const lessons:Lesson[] = [
  {
    "number": "6.1",
    "slug": "angles-and-quadrants",
    "title": "Angles of Rotation and Quadrants",
    "description": "Identify signed and coterminal angles and locate terminal sides.",
    "topics": [
      {
        "name": "Positive and negative rotations",
        "info": "Counterclockwise angles are positive; clockwise angles are negative. The initial side is the positive x-axis.",
        "formula": "\\theta>0\\text{ (anticlockwise)},\\quad\\theta<0\\text{ (clockwise)}",
        "q": "Locate the terminal side of a rotation of -60 degrees.",
        "steps": [
          "-60^\\circ+360^\\circ=300^\\circ",
          "270^\\circ<300^\\circ<360^\\circ"
        ],
        "reason": "A clockwise rotation of 60 degrees finishes in Quadrant IV.",
        "diagram": "unit"
      },
      {
        "name": "Quadrants and coterminal angles",
        "info": "A full revolution is 360°. Angles differing by whole turns have the same terminal side. Axis angles belong to no quadrant.",
        "formula": "\\theta_{\\mathrm{coterminal}}=\\theta+360^\\circ k,\\quad k\\in\\mathbb Z",
        "q": "Which quadrant contains 765°?",
        "steps": [
          "765^\\circ-2(360^\\circ)=45^\\circ",
          "0^\\circ<45^\\circ<90^\\circ"
        ],
        "reason": "765° has the same terminal side as 45°, in Quadrant I.",
        "diagram": "unit"
      }
    ],
    "mistake": "Angles on axes are assigned to quadrants.",
    "correction": "0°, 90°, 180° and 270° are boundary angles and belong to no quadrant.",
    "practice": [
      {
        "q": "State the quadrant of −135°.",
        "a": "Quadrant III (225°)."
      },
      {
        "q": "Give a positive coterminal angle of −75°.",
        "a": "285°."
      },
      {
        "q": "Which quadrant contains 540°?",
        "a": "No quadrant: terminal side lies on the negative x-axis."
      }
    ],
    "summary": [
      "Positive and negative rotations",
      "Quadrants and coterminal angles",
      "0°, 90°, 180° and 270° are boundary angles and belong to no quadrant."
    ]
  },
  {
    "number": "6.2",
    "slug": "ratios-of-any-angles",
    "title": "Trigonometric Ratios of Any Angles",
    "description": "Use coordinate definitions, quadrant signs, reference angles and special angles.",
    "topics": [
      {
        "name": "Coordinate definitions",
        "info": "For terminal point P(x,y) at distance r from the origin, r is positive. Trigonometric ratios may be negative.",
        "formula": "r=\\sqrt{x^2+y^2},\\quad\\sin\\theta=\\frac yr,\\;\\cos\\theta=\\frac xr,\\;\\tan\\theta=\\frac yx",
        "q": "Find sin θ, cos θ and tan θ for terminal point P(-3,4).",
        "steps": [
          "r=\\sqrt{(-3)^2+4^2}=5",
          "\\sin\\theta=\\frac45,\\quad\\cos\\theta=-\\frac35",
          "\\tan\\theta=-\\frac43"
        ],
        "reason": "The point lies in Quadrant II; tangent is negative. Tangent is undefined when x = 0.",
        "diagram": "unit"
      },
      {
        "name": "Quadrant signs and reference angles",
        "info": "ASTC: all positive in QI; sine positive in QII; tangent positive in QIII; cosine positive in QIV. The reference angle is acute.",
        "formula": "\\sin\\theta=\\pm\\sin\\beta,\\;\\cos\\theta=\\pm\\cos\\beta,\\;\\tan\\theta=\\pm\\tan\\beta",
        "q": "Evaluate sin 150°, cos 150° and tan 150° exactly.",
        "steps": [
          "\\beta=180^\\circ-150^\\circ=30^\\circ",
          "\\sin150^\\circ=\\frac12,\\quad\\cos150^\\circ=-\\frac{\\sqrt3}{2}",
          "\\tan150^\\circ=-\\frac1{\\sqrt3}=-\\frac{\\sqrt3}{3}"
        ],
        "reason": "Reference values are positive; choose each sign from Quadrant II.",
        "diagram": "astc"
      },
      {
        "name": "Special angles and axes",
        "info": "Remember exact trig ratios at 30°, 45° and 60°. For terminal sides on axes, tangent may be undefined.",
        "formula": "\\sin90^\\circ=1,\\quad\\cos180^\\circ=-1,\\quad\\tan270^\\circ\\text{ undefined}",
        "q": "Find sin 330°, cos 330° and tan 330°.",
        "steps": [
          "\\beta=360^\\circ-330^\\circ=30^\\circ",
          "\\sin330^\\circ=-\\frac12,\\quad\\cos330^\\circ=\\frac{\\sqrt3}{2}",
          "\\tan330^\\circ=-\\frac{\\sqrt3}{3}"
        ],
        "reason": "Quadrant IV has positive cosine and negative sine and tangent.",
        "diagram": "astc"
      }
    ],
    "mistake": "Applying the QI signs in every quadrant or treating r as negative.",
    "correction": "Use r>0, determine the quadrant, then apply ASTC to each ratio.",
    "practice": [
      {
        "q": "Find cos θ when P(5,−12) is on the terminal side.",
        "a": "5/13."
      },
      {
        "q": "Find tan θ for P(−4,−3).",
        "a": "3/4."
      },
      {
        "q": "Find sin 210° exactly.",
        "a": "−1/2."
      }
    ],
    "summary": [
      "Coordinate definitions",
      "Quadrant signs and reference angles",
      "Special angles and axes",
      "Use r>0, determine the quadrant, then apply ASTC to each ratio."
    ]
  },
  {
    "number": "6.3",
    "slug": "trigonometric-identities",
    "title": "Trigonometric Identities",
    "description": "Use fundamental and reference-angle identities accurately.",
    "topics": [
      {
        "name": "Fundamental identities",
        "info": "For angles where the ratios are defined, use the Pythagorean identity and ratio identities.",
        "formula": "\\sin^2\\theta+\\cos^2\\theta=1,\\quad\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}",
        "q": "If sin θ = 3/5 and θ is in QII, find cos θ and tan θ.",
        "steps": [
          "\\cos^2\\theta=1-\\left(\\frac35\\right)^2=\\frac{16}{25}",
          "\\cos\\theta=-\\frac45,\\quad\\tan\\theta=-\\frac34"
        ],
        "reason": "The sign of cos θ is negative in Quadrant II.",
        "diagram": "astc"
      },
      {
        "name": "Allied-angle identities",
        "info": "Reference-angle identities use quadrant signs. E.g. sin(180°−θ) = sin θ; cos(180°−θ) = −cos θ.",
        "formula": "\\sin(180^\\circ-\\theta)=\\sin\\theta,\\quad\\cos(180^\\circ-\\theta)=-\\cos\\theta",
        "q": "Simplify sin(180°+θ)+sin(360°−θ).",
        "steps": [
          "\\sin(180^\\circ+\\theta)=-\\sin\\theta",
          "\\sin(360^\\circ-\\theta)=-\\sin\\theta",
          "\\text{Result}=-2\\sin\\theta"
        ],
        "reason": "Both angles have negative sine relative to the acute reference angle.",
        "diagram": "unit"
      }
    ],
    "mistake": "Confusing sin²θ with sin(θ²), or forgetting signs after square roots.",
    "correction": "sin²θ=(sin θ)²; infer the sign of cos θ from its quadrant.",
    "practice": [
      {
        "q": "Given cos θ=−3/5 in QII, find sin θ.",
        "a": "4/5."
      },
      {
        "q": "Simplify cos(180°+θ).",
        "a": "−cos θ."
      },
      {
        "q": "Simplify sin²θ+cos²θ.",
        "a": "1."
      }
    ],
    "summary": [
      "Fundamental identities",
      "Allied-angle identities",
      "sin²θ=(sin θ)²; infer the sign of cos θ from its quadrant."
    ]
  },
  {
    "number": "6.4",
    "slug": "trigonometric-graphs",
    "title": "Graphs of Trigonometric Functions",
    "description": "Draw sine, cosine and tangent graphs in degrees and read periods.",
    "topics": [
      {
        "name": "Sine and cosine graphs",
        "info": "Sine and cosine values lie between -1 and 1. Both repeat every 360°. Use degrees and label axes at key angles.",
        "formula": "-1\\leq\\sin\\theta\\leq1,\\quad-1\\leq\\cos\\theta\\leq1",
        "q": "State the values of sin θ for θ=0°,90°,180°,270°,360°.",
        "steps": [
          "\\sin0^\\circ=0,\\quad\\sin90^\\circ=1",
          "\\sin180^\\circ=0,\\quad\\sin270^\\circ=-1,\\quad\\sin360^\\circ=0"
        ],
        "reason": "Smoothly join plotted values; the sine curve crosses zero at 0°, 180° and 360°.",
        "diagram": "sin"
      },
      {
        "name": "Tangent graph and period",
        "info": "Tangent is undefined at 90°+180°k and has period 180°. Each branch increases between vertical asymptotes.",
        "formula": "\\tan(\\theta+180^\\circ)=\\tan\\theta",
        "q": "Give the period and undefined angles of tan θ over 0°≤θ≤360°.",
        "steps": [
          "\\text{Period}=180^\\circ",
          "\\theta=90^\\circ,\\;270^\\circ\\text{ (undefined)}"
        ],
        "reason": "The graph has vertical asymptotes, not continuous curves through these angles.",
        "diagram": "tan"
      }
    ],
    "mistake": "Drawing the tangent curve continuously across 90° or 270°.",
    "correction": "Tangent is undefined at those angles and branches have vertical asymptotes.",
    "practice": [
      {
        "q": "State the period of y=cos θ.",
        "a": "360°."
      },
      {
        "q": "State the period of y=tan θ.",
        "a": "180°."
      },
      {
        "q": "What is the minimum of sin θ?",
        "a": "−1."
      }
    ],
    "summary": [
      "Sine and cosine graphs",
      "Tangent graph and period",
      "Tangent is undefined at those angles and branches have vertical asymptotes."
    ]
  },
  {
    "number": "6.5",
    "slug": "graphical-method",
    "title": "Solving Trigonometric Equations by Graphical Method",
    "description": "Find solutions using intersections of trigonometric graphs.",
    "topics": [
      {
        "name": "Graphical solutions",
        "info": "To solve f(θ)=c, draw y=f(θ) and the horizontal line y=c. Read the intersection angles within the interval.",
        "formula": "f(\\theta)=c\\iff y=f(\\theta)\\text{ intersects }y=c",
        "q": "Solve sin θ = 0.5 graphically for 0°≤θ≤360°.",
        "steps": [
          "\\sin30^\\circ=\\frac12",
          "\\sin150^\\circ=\\frac12",
          "\\theta=30^\\circ\\text{ or }150^\\circ"
        ],
        "reason": "There are two intersections in the required interval.",
        "diagram": "sin"
      },
      {
        "name": "No solution outside the range",
        "info": "For sin and cos, a horizontal line outside [-1,1] does not intersect the graph. Check the domain and endpoints.",
        "formula": "-1\\leq\\cos\\theta\\leq1",
        "q": "Solve cos θ = 1.2 for 0°≤θ≤360°.",
        "steps": [
          "1.2>1",
          "\\text{No real solution in the interval}"
        ],
        "reason": "The cosine function never exceeds 1.",
        "diagram": "cos"
      }
    ],
    "mistake": "Giving a value from a graph without checking the interval or function range.",
    "correction": "Count every intersection in the stated interval, including allowed endpoints.",
    "practice": [
      {
        "q": "Solve cos θ=−1 for 0°≤θ≤360°.",
        "a": "180°."
      },
      {
        "q": "Solve sin θ=0 for 0°≤θ≤360°.",
        "a": "0°, 180°, 360°."
      },
      {
        "q": "Does cos θ=2 have a real solution?",
        "a": "No."
      }
    ],
    "summary": [
      "Graphical solutions",
      "No solution outside the range",
      "Count every intersection in the stated interval, including allowed endpoints."
    ]
  },
  {
    "number": "6.6",
    "slug": "algebraic-method",
    "title": "Solving Trigonometric Equations by Algebraic Method",
    "description": "Find all solutions over a specified angular interval.",
    "topics": [
      {
        "name": "Algebraic solutions using reference angles",
        "info": "Find a principal/reference angle, choose permitted quadrants by sign, then enumerate every solution in the requested interval. Use degree mode.",
        "formula": "\\sin\\theta=\\sin\\beta\\Rightarrow\\theta=\\beta\\text{ or }180^\\circ-\\beta\\; (0^\\circ\\leq\\theta<360^\\circ)",
        "q": "Solve sin θ = −1/2 for 0°≤θ≤360°.",
        "steps": [
          "\\beta=30^\\circ",
          "\\theta=180^\\circ+30^\\circ=210^\\circ",
          "\\theta=360^\\circ-30^\\circ=330^\\circ"
        ],
        "reason": "Negative sine occurs in Quadrants III and IV.",
        "diagram": "unit"
      },
      {
        "name": "Solving equations with multiple angles",
        "info": "If the equation contains 2θ, solve first for u=2θ over the doubled interval. Divide each admissible u by 2.",
        "formula": "u=2\\theta,\\quad0^\\circ\\leq u\\leq720^\\circ",
        "q": "Solve cos(2θ)=1/2 for 0°≤θ≤360°.",
        "steps": [
          "2\\theta=60^\\circ,300^\\circ,420^\\circ,660^\\circ",
          "\\theta=30^\\circ,150^\\circ,210^\\circ,330^\\circ"
        ],
        "reason": "Do not stop after one full turn for 2θ; all four solutions are needed.",
        "diagram": "cos"
      }
    ],
    "mistake": "Forgetting the second quadrant solution or missing solutions of 2θ.",
    "correction": "Use sign/quadrant reasoning and enumerate angles in the transformed interval.",
    "practice": [
      {
        "q": "Solve cos θ=0 for 0°≤θ≤360°.",
        "a": "90°, 270°."
      },
      {
        "q": "Solve tan θ=1 for 0°≤θ≤360°.",
        "a": "45°, 225°."
      },
      {
        "q": "Solve 2 sin θ=1 for 0°≤θ≤360°.",
        "a": "30°, 150°."
      }
    ],
    "summary": [
      "Algebraic solutions using reference angles",
      "Solving equations with multiple angles",
      "Use sign/quadrant reasoning and enumerate angles in the transformed interval."
    ]
  }
];
