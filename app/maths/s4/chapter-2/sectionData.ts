export type LessonTopic = {title:string;formula:string;explanation:string;question:string;steps:string[];reason:string};
export type LessonData = {number:string;slug:string;title:string;description:string;topics:LessonTopic[];mistake:string;correction:string;practice:{q:string;a:string}[];diagram:{m:number;c:number;points:number[][];label:string}};
export const sections: LessonData[] = [
  {
    "number": "2.1",
    "slug": "equations-of-straight-lines",
    "title": "Equations of Straight Lines",
    "description": "Find the equation of a line from two points, a point and its slope, or a special direction.",
    "topics": [
      {
        "title": "Slope from two points",
        "formula": "m=\\frac{y_2-y_1}{x_2-x_1},\\quad x_1\\ne x_2",
        "explanation": "For two distinct points with different x-coordinates, divide the change in y by the change in x. The order of subtraction must match in numerator and denominator. A vertical line has an undefined slope.",
        "question": "Find the slope of the line through A(−2, 1) and B(4, 4).",
        "steps": [
          "m=\\frac{4-1}{4-(-2)}",
          "=\\frac36=\\frac12"
        ],
        "reason": "Subtract the coordinates in the same order."
      },
      {
        "title": "Two-point form",
        "formula": "\\frac{y-y_1}{x-x_1}=\\frac{y_2-y_1}{x_2-x_1}\\quad(x_1\\ne x_2)",
        "explanation": "Use any one known point (x₁,y₁) and the direction determined by two given points. Rearrange to the requested form. For x₁=x₂, the line is vertical: x=x₁.",
        "question": "Find the line through A(−2, 1) and B(4, 4).",
        "steps": [
          "\\frac{y-1}{x+2}=\\frac{4-1}{4-(-2)}=\\frac12",
          "2(y-1)=x+2",
          "x-2y+4=0"
        ],
        "reason": "Multiply through by a nonzero denominator, then collect terms."
      },
      {
        "title": "Point-slope and special lines",
        "formula": "y-y_1=m(x-x_1),\\quad y=b,\\quad x=a",
        "explanation": "With a given slope m and a known point, use point–slope form. A horizontal line through (a,b) has y=b and slope 0. A vertical line has x=a and undefined slope.",
        "question": "Find the line through (3, −2) with slope −2.",
        "steps": [
          "y-(-2)=-2(x-3)",
          "y=-2x+4"
        ],
        "reason": "Substitute the point and slope, then simplify."
      }
    ],
    "mistake": "Using (y₂−y₁)/(x₁−x₂) as the slope.",
    "correction": "Use the same coordinate order above and below; for the points (−2,1),(4,4), m=3/6=1/2.",
    "practice": [
      {
        "q": "Find the equation through (1,4) and (3,8), in y=mx+c form.",
        "a": "y=2x+2"
      },
      {
        "q": "Find the equation of a vertical line through (−5,2).",
        "a": "x=−5"
      }
    ],
    "diagram": {
      "m": 0.5,
      "c": 2,
      "points": [
        [
          -2,
          1
        ],
        [
          4,
          4
        ]
      ],
      "label": "A(−2,1), B(4,4)"
    }
  },
  {
    "number": "2.2",
    "slug": "intercepts",
    "title": "Intercepts of Straight Lines",
    "description": "Calculate x- and y-intercepts and use the slope-intercept form.",
    "topics": [
      {
        "title": "Finding intercepts",
        "formula": "Ax+By+C=0\\ \\Longrightarrow\\ x_0=-\\frac CA,\\ y_0=-\\frac CB",
        "explanation": "To find an x-intercept, set y=0; to find a y-intercept, set x=0. The displayed formulas require A≠0 and B≠0 respectively. Intercepts are signed numbers, not lengths.",
        "question": "Find the intercepts of 3x+2y−12=0.",
        "steps": [
          "y=0:\\quad 3x=12\\Rightarrow x=4",
          "x=0:\\quad 2y=12\\Rightarrow y=6"
        ],
        "reason": "At the x-axis, y=0; at the y-axis, x=0."
      },
      {
        "title": "Slope-intercept form",
        "formula": "y=mx+c",
        "explanation": "For a nonvertical line, m is its slope and c is its y-intercept. When B≠0, Ax+By+C=0 can be rearranged into this form.",
        "question": "Express 3x+2y−12=0 in slope-intercept form.",
        "steps": [
          "2y=-3x+12",
          "y=-\\frac32 x+6"
        ],
        "reason": "Isolate y; coefficient of x is slope and constant is the y-intercept."
      },
      {
        "title": "Intercept form and exceptions",
        "formula": "\\frac xa+\\frac yb=1\\quad(a\\ne0,\\ b\\ne0)",
        "explanation": "If both intercepts are nonzero, the intercept form gives the line through (a,0) and (0,b). For lines through the origin, this form cannot be used with zero denominators.",
        "question": "Write a line with x-intercept 5 and y-intercept −3.",
        "steps": [
          "\\frac x5+\\frac y{-3}=1",
          "3x-5y=15"
        ],
        "reason": "The denominators are the signed intercepts."
      }
    ],
    "mistake": "Treating the x-intercept of 3x+2y−12=0 as 12/2.",
    "correction": "Set y=0: x=4. Set x=0: y=6.",
    "practice": [
      {
        "q": "Find both intercepts of 2x−5y+10=0.",
        "a": "x-intercept=−5; y-intercept=2"
      },
      {
        "q": "Find the slope and y-intercept of 4x+5y−15=0.",
        "a": "slope=−4/5; y-intercept=3"
      }
    ],
    "diagram": {
      "m": -1.5,
      "c": 6,
      "points": [
        [
          4,
          0
        ],
        [
          0,
          6
        ]
      ],
      "label": "Intercepts (4,0), (0,6)"
    }
  },
  {
    "number": "2.3",
    "slug": "angle-of-inclination",
    "title": "Angle of Inclination",
    "description": "Connect the slope with the anticlockwise angle measured from the positive x-axis.",
    "topics": [
      {
        "title": "Angle and slope",
        "formula": "m=\\tan\\theta,\\quad 0^\\circ\\le\\theta<180^\\circ,\\ \\theta\\ne90^\\circ",
        "explanation": "The angle of inclination is measured anticlockwise from the positive x-axis. If the line slopes upward, 0°<θ<90°; if downward, 90°<θ<180°. A horizontal line has θ=0°, whereas a vertical line has θ=90° and undefined slope.",
        "question": "Find the angle of inclination when m=1.",
        "steps": [
          "\\tan\\theta=1",
          "\\theta=45^\\circ"
        ],
        "reason": "Choose the angle in the defined 0°–180° range."
      },
      {
        "title": "Negative slope",
        "formula": "\\theta=180^\\circ-\\tan^{-1}(|m|)\\quad(m<0)",
        "explanation": "Calculator arctan normally gives a negative principal angle for a negative slope. Add 180° to obtain the angle of inclination in quadrant II.",
        "question": "Find the inclination for slope −√3.",
        "steps": [
          "\\tan\\theta=-\\sqrt3",
          "\\theta=180^\\circ-60^\\circ=120^\\circ"
        ],
        "reason": "A negative slope corresponds to an obtuse inclination."
      },
      {
        "title": "Line from inclination and a point",
        "formula": "y-y_1=(\\tan\\theta)(x-x_1)",
        "explanation": "Find the slope from θ first; then use the point–slope form. At θ=90°, the line is vertical, so use x=x₁.",
        "question": "Find the equation through (2, −1) with θ=135°.",
        "steps": [
          "m=\\tan135^\\circ=-1",
          "y+1=-(x-2)",
          "x+y-1=0"
        ],
        "reason": "Use the tangent value then substitute into the point–slope equation."
      }
    ],
    "mistake": "Using the calculator result θ=−45° as the inclination for slope −1.",
    "correction": "Inclination is measured anticlockwise in 0°≤θ<180°; use θ=135°.",
    "practice": [
      {
        "q": "Find θ for a horizontal line.",
        "a": "0°"
      },
      {
        "q": "Find θ for a line of slope −1.",
        "a": "135°"
      }
    ],
    "diagram": {
      "m": -1,
      "c": 2,
      "points": [
        [
          0,
          2
        ],
        [
          2,
          0
        ]
      ],
      "label": "Slope −1; inclination 135°"
    }
  },
  {
    "number": "2.4",
    "slug": "parallel-perpendicular",
    "title": "Parallel and Perpendicular Lines",
    "description": "Use slope relationships to find parallel and perpendicular lines, including perpendicular bisectors.",
    "topics": [
      {
        "title": "Parallel lines",
        "formula": "L_1\\parallel L_2\\iff m_1=m_2",
        "explanation": "Two distinct nonvertical lines are parallel when they have the same slope. Two distinct vertical lines are also parallel. Equal slopes may indicate coincident lines if the equations are identical.",
        "question": "Find the line parallel to y=3x−4 through (1,5).",
        "steps": [
          "m=3",
          "y-5=3(x-1)",
          "y=3x+2"
        ],
        "reason": "Parallel nonvertical lines have equal slopes."
      },
      {
        "title": "Perpendicular lines",
        "formula": "L_1\\perp L_2\\iff m_1m_2=-1",
        "explanation": "This product rule applies only when both slopes are defined. The slope of a perpendicular nonvertical line is the negative reciprocal. Horizontal and vertical lines are perpendicular.",
        "question": "Find the line through (2,1) perpendicular to y=2x+3.",
        "steps": [
          "m=-\\frac12",
          "y-1=-\\frac12(x-2)",
          "x+2y-4=0"
        ],
        "reason": "The product of perpendicular finite slopes equals −1."
      },
      {
        "title": "Perpendicular bisector",
        "formula": "M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)",
        "explanation": "Find the midpoint of the segment, calculate the segment slope, and use the perpendicular slope through its midpoint. Check for vertical or horizontal segments separately.",
        "question": "Find the perpendicular bisector of A(0,2) and B(4,4).",
        "steps": [
          "M=(2,3),\\qquad m_{AB}=\\frac12",
          "m_{\\perp}=-2",
          "y-3=-2(x-2)",
          "2x+y-7=0"
        ],
        "reason": "The bisector passes through the midpoint and is perpendicular to AB."
      }
    ],
    "mistake": "Assuming parallel lines with equal slopes must be different lines.",
    "correction": "Check intercepts or equations; identical equations describe the same line.",
    "practice": [
      {
        "q": "Find the slope perpendicular to m=−3/4.",
        "a": "4/3"
      },
      {
        "q": "Find the midpoint of (−2,4) and (6,0).",
        "a": "(2,2)"
      }
    ],
    "diagram": {
      "m": 2,
      "c": 0,
      "points": [
        [
          -1,
          -2
        ],
        [
          2,
          4
        ]
      ],
      "label": "Two parallel lines share a slope"
    }
  },
  {
    "number": "2.5",
    "slug": "intersection",
    "title": "Intersection of Two Straight Lines",
    "description": "Solve simultaneous equations and distinguish one intersection, no intersections and coincident lines.",
    "topics": [
      {
        "title": "Finding the intersection",
        "formula": "\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}",
        "explanation": "The coordinates of an intersection satisfy both line equations. Solve the simultaneous equations by elimination or substitution and verify both.",
        "question": "Find the intersection of x+y=5 and 2x−y=1.",
        "steps": [
          "(x+y)+(2x-y)=5+1",
          "3x=6\\Rightarrow x=2",
          "y=5-2=3",
          "P=(2,3)"
        ],
        "reason": "Solve both equations together, then verify the pair."
      },
      {
        "title": "One, none or infinitely many",
        "formula": "D=a_1b_2-a_2b_1",
        "explanation": "For two linear equations a₁x+b₁y=c₁ and a₂x+b₂y=c₂: D≠0 gives one unique intersection. D=0 gives either parallel distinct lines (no solution) or coincident lines (infinitely many solutions), depending on constants.",
        "question": "Do x+2y=3 and 2x+4y=8 meet?",
        "steps": [
          "2(x+2y)=2x+4y=6",
          "2x+4y=8\\text{ is inconsistent}",
          "\\text{No intersection}"
        ],
        "reason": "The left sides are proportional but constants are not."
      },
      {
        "title": "Geometric meaning of simultaneous equations",
        "formula": "P\\in L_1\\cap L_2",
        "explanation": "A unique algebraic solution corresponds to a single crossing point; inconsistent equations represent parallel distinct lines; dependent equations represent coincident lines.",
        "question": "Classify y=2x+1 and 2y=4x+2.",
        "steps": [
          "2y=4x+2\\iff y=2x+1",
          "\\text{The lines coincide: infinitely many common points}"
        ],
        "reason": "The two equations describe exactly the same set of points."
      }
    ],
    "mistake": "Saying D=0 always means no solution.",
    "correction": "D=0 means no unique solution; check constants to distinguish parallel and coincident lines.",
    "practice": [
      {
        "q": "Find the intersection of y=x+1 and y=−x+5.",
        "a": "(2,3)"
      },
      {
        "q": "How many common points have y=3x+1 and y=3x−4?",
        "a": "0 (parallel distinct lines)"
      }
    ],
    "diagram": {
      "m": 1,
      "c": 1,
      "points": [
        [
          2,
          3
        ]
      ],
      "label": "Intersecting lines: P(2,3)"
    }
  }
];
