export type Topic = {name:string; info:string; formula:string; q:string; steps:string[]; reason:string; diagram:string};
export type Lesson = {number:string;slug:string;title:string;description:string;topics:Topic[];mistake:string;correction:string;practice:{q:string;a:string}[];summary:string[]};
export const lessons:Lesson[] = [
  {
    "number": "5.1",
    "slug": "long-division",
    "title": "Long Division of Polynomials",
    "description": "Divide polynomials in descending powers, finding quotients and remainders.",
    "topics": [
      {
        "name": "Leading-term division",
        "info": "Arrange both polynomials in descending powers. Insert a zero-coefficient term when a power is missing.",
        "formula": "P(x)=D(x)Q(x)+R(x)",
        "q": "Divide 2x³+3x²−5x+6 by x+2.",
        "steps": [
          "2x^3\\div x=2x^2",
          "(2x^3+3x^2-5x+6)-(2x^3+4x^2)=-x^2-5x+6",
          "-x^2\\div x=-x",
          "(-x^2-5x+6)-(-x^2-2x)=-3x+6",
          "-3x\\div x=-3",
          "(-3x+6)-(-3x-6)=12",
          "Q(x)=2x^2-x-3,\\quad R=12"
        ],
        "reason": "Repeat divide, multiply and subtract until the remainder degree is less than the divisor degree.",
        "diagram": "division"
      },
      {
        "name": "Missing powers and stopping rule",
        "info": "For x³−4x+7, write 0x² so the columns line up. Stop once the remainder degree is less than the divisor degree.",
        "formula": "\\deg R<\\deg D",
        "q": "Divide x³−4x+7 by x−2.",
        "steps": [
          "x^3+0x^2-4x+7",
          "x^3\\div x=x^2\\Rightarrow\\text{subtract }(x^3-2x^2)",
          "2x^2-4x+7\\Rightarrow\\text{next quotient term }2x",
          "(2x^2-4x+7)-(2x^2-4x)=7",
          "Q(x)=x^2+2x,\\quad R=7"
        ],
        "reason": "The zero coefficient keeps matching powers in their correct columns.",
        "diagram": "division"
      }
    ],
    "mistake": "Stopping after obtaining a constant term of the quotient even though the remainder still has degree at least that of the divisor.",
    "correction": "Continue until the remainder has a smaller degree than the divisor.",
    "practice": [
      {
        "q": "Divide x²+5x+6 by x+2.",
        "a": "Quotient x+3; remainder 0."
      },
      {
        "q": "Divide x²+1 by x+1.",
        "a": "Quotient x−1; remainder 2."
      },
      {
        "q": "What is the greatest possible remainder degree when dividing by a quadratic?",
        "a": "1."
      }
    ],
    "summary": [
      "Align like powers, including missing terms.",
      "Repeat divide → multiply → subtract.",
      "A remainder must have lower degree than the divisor."
    ]
  },
  {
    "number": "5.2",
    "slug": "division-algorithm",
    "title": "Division Algorithm of Polynomials",
    "description": "Express a dividend as divisor × quotient + remainder.",
    "topics": [
      {
        "name": "Polynomial division identity",
        "info": "For every nonzero polynomial divisor D(x), there are unique polynomials Q(x), R(x) with the remainder degree smaller than the divisor degree.",
        "formula": "P(x)=D(x)Q(x)+R(x)",
        "q": "Express the division of 2x³+3x²−5x+6 by x+2 as an identity.",
        "steps": [
          "Q(x)=2x^2-x-3,\\quad R=12",
          "2x^3+3x^2-5x+6=(x+2)(2x^2-x-3)+12"
        ],
        "reason": "Multiply the divisor by the quotient and add the remainder.",
        "diagram": "division"
      },
      {
        "name": "Recovering an unknown dividend",
        "info": "The division identity allows us to reconstruct the original polynomial from the divisor, quotient and remainder.",
        "formula": "P(x)=D(x)Q(x)+R(x)",
        "q": "Find P(x) when D(x)=x−1, Q(x)=2x²+3x+4 and R=5.",
        "steps": [
          "P(x)=(x-1)(2x^2+3x+4)+5",
          "P(x)=2x^3+x^2+x+1"
        ],
        "reason": "Expand and combine like terms carefully.",
        "diagram": "division"
      }
    ],
    "mistake": "Writing P(x)=Q(x)D(x)−R(x).",
    "correction": "The remainder is added, not subtracted, in the division identity.",
    "practice": [
      {
        "q": "Write P when divisor x+1, quotient x−2, remainder 3.",
        "a": "x²−x+1."
      },
      {
        "q": "What remainder degrees are allowed when the divisor is cubic?",
        "a": "At most 2."
      },
      {
        "q": "If P=(x−3)(x+2)+4, what is the remainder on division by x−3?",
        "a": "4."
      }
    ],
    "summary": [
      "Dividend = divisor × quotient + remainder.",
      "The divisor cannot be the zero polynomial.",
      "Degree of remainder < degree of divisor."
    ]
  },
  {
    "number": "5.3",
    "slug": "remainder-theorem",
    "title": "Remainder Theorem",
    "description": "Find remainders by substitution without long division.",
    "topics": [
      {
        "name": "Remainder theorem for x−h",
        "info": "When a polynomial P(x) is divided by x−h, the remainder is P(h).",
        "formula": "R=P(h)",
        "q": "Find the remainder when P(x)=2x³−3x+4 is divided by x−2.",
        "steps": [
          "R=P(2)=2(2)^3-3(2)+4",
          "R=16-6+4=14"
        ],
        "reason": "Substituting x=h makes the factor x−h equal zero.",
        "diagram": "remainder"
      },
      {
        "name": "Remainder theorem for mx−n",
        "info": "For a nonzero m, solve mx−n=0 first. The remainder is P(n/m).",
        "formula": "R=P\\!\\left(\\frac{n}{m}\\right),\\quad m\\ne0",
        "q": "Find the remainder of P(x)=4x²−5x+3 on division by 2x−1.",
        "steps": [
          "2x-1=0\\Rightarrow x=\\frac12",
          "R=P\\!\\left(\\frac12\\right)=4\\left(\\frac12\\right)^2-5\\left(\\frac12\\right)+3",
          "R=1-\\frac52+3=\\frac32"
        ],
        "reason": "Use the zero of the divisor, not its constant term.",
        "diagram": "remainder"
      },
      {
        "name": "Unknown coefficients from two remainders",
        "info": "Each stated remainder provides one equation in the unknown coefficients.",
        "formula": "P(h)=R",
        "q": "Let P(x)=x²+ax+b. If remainders on division by x−1 and x+2 are 4 and 7, find a,b.",
        "steps": [
          "P(1)=1+a+b=4\\Rightarrow a+b=3",
          "P(-2)=4-2a+b=7\\Rightarrow-2a+b=3",
          "3a=0\\Rightarrow a=0,\\quad b=3"
        ],
        "reason": "Solve the simultaneous equations formed from the two substitutions.",
        "diagram": "remainder"
      }
    ],
    "mistake": "Using P(−h) when dividing by x−h, or using P(n) rather than P(n/m) for divisor mx−n.",
    "correction": "Set the divisor equal to zero, then substitute that root.",
    "practice": [
      {
        "q": "Find remainder of x³+2x+1 divided by x−1.",
        "a": "4."
      },
      {
        "q": "Find remainder of x²+1 divided by x+2.",
        "a": "5."
      },
      {
        "q": "Find remainder of 9x²−1 divided by 3x−1.",
        "a": "0."
      }
    ],
    "summary": [
      "Remainder for x−h is P(h).",
      "Remainder for mx−n is P(n/m), m≠0.",
      "Use multiple remainder conditions to find parameters."
    ]
  },
  {
    "number": "5.4",
    "slug": "factor-theorem",
    "title": "Factor Theorem",
    "description": "Test linear factors and factorise higher-degree polynomials.",
    "topics": [
      {
        "name": "Factor theorem",
        "info": "A linear polynomial x−h is a factor of P(x) exactly when P(h)=0.",
        "formula": "(x-h)\\mid P(x)\\iff P(h)=0",
        "q": "Is x−2 a factor of P(x)=x³−4x²+x+6?",
        "steps": [
          "P(2)=8-16+2+6=0",
          "\\therefore\\ (x-2)\\text{ is a factor of }P(x)"
        ],
        "reason": "A zero remainder means exact divisibility.",
        "diagram": "factors"
      },
      {
        "name": "Complete factorisation",
        "info": "Once a linear factor is known, divide to obtain a lower-degree quotient, then factorise the quotient.",
        "formula": "P(x)=(x-h)Q(x)",
        "q": "Factorise x³−6x²+11x−6.",
        "steps": [
          "P(1)=1-6+11-6=0\\Rightarrow(x-1)\\text{ is a factor}",
          "P(x)\\div(x-1)=x^2-5x+6",
          "P(x)=(x-1)(x-2)(x-3)"
        ],
        "reason": "Test a candidate root, then factorise the quotient.",
        "diagram": "factors"
      },
      {
        "name": "General linear factor",
        "info": "For mx−n, m≠0, the factor condition is P(n/m)=0.",
        "formula": "(mx-n)\\mid P(x)\\iff P\\!\\left(\\frac{n}{m}\\right)=0",
        "q": "Determine whether 2x−1 is a factor of 4x²−4x+1.",
        "steps": [
          "P\\!\\left(\\frac12\\right)=4\\left(\\frac12\\right)^2-4\\left(\\frac12\\right)+1=0",
          "4x^2-4x+1=(2x-1)^2"
        ],
        "reason": "Use the zero x=n/m for the stated linear factor.",
        "diagram": "factors"
      }
    ],
    "mistake": "Assuming P(h)=0 proves h itself is a factor.",
    "correction": "The factor is x−h, not the number h; check all remaining factors.",
    "practice": [
      {
        "q": "Is x+1 a factor of x³+x²−x−1?",
        "a": "Yes; P(−1)=0."
      },
      {
        "q": "Factorise x²−9.",
        "a": "(x−3)(x+3)."
      },
      {
        "q": "Is x−2 a factor of x²−2x+3?",
        "a": "No; P(2)=3."
      }
    ],
    "summary": [
      "P(h)=0 is equivalent to x−h being a factor.",
      "Use division after finding a factor.",
      "Check remaining quadratic factors and exact conditions."
    ]
  },
  {
    "number": "5.5",
    "slug": "enrichment",
    "title": "Superfood in Mathematics: Factorization of a³ ± b³ and Synthetic Division",
    "description": "Enrichment: identities for cubes and a shortcut to polynomial division.",
    "topics": [
      {
        "name": "Difference of two cubes",
        "info": "The difference of cubes factors into a binomial and quadratic. This identity is enrichment material.",
        "formula": "a^3-b^3=(a-b)(a^2+ab+b^2)",
        "q": "Factorise 8x³−27.",
        "steps": [
          "8x^3-27=(2x)^3-3^3",
          "8x^3-27=(2x-3)(4x^2+6x+9)"
        ],
        "reason": "Identify the two cube terms before applying the identity.",
        "diagram": "cubes"
      },
      {
        "name": "Sum of two cubes",
        "info": "The sign inside the binomial follows the original sum; the mixed term in the quadratic is negative.",
        "formula": "a^3+b^3=(a+b)(a^2-ab+b^2)",
        "q": "Factorise x³+64.",
        "steps": [
          "x^3+64=x^3+4^3",
          "x^3+64=(x+4)(x^2-4x+16)"
        ],
        "reason": "Use the sum-of-cubes identity, with the negative middle sign.",
        "diagram": "cubes"
      },
      {
        "name": "Synthetic division by x−h",
        "info": "List all coefficients, including zeros for missing powers, then bring down, multiply by h and add in columns.",
        "formula": "P(x)=(x-h)Q(x)+R",
        "q": "Divide 2x³−3x²−8x+12 by x−2 using synthetic division.",
        "steps": [
          "\\text{Coefficients: }2,\\ -3,\\ -8,\\ 12;\\quad h=2",
          "\\text{Bring down }2;\\quad 2\\cdot2=4;\\quad-3+4=1",
          "1\\cdot2=2;\\quad-8+2=-6",
          "-6\\cdot2=-12;\\quad12-12=0",
          "Q(x)=2x^2+x-6,\\quad R=0"
        ],
        "reason": "The last synthetic-division entry is the remainder.",
        "diagram": "synthetic"
      }
    ],
    "mistake": "Using (a+b)(a²+ab+b²) for a sum of cubes, or forgetting missing coefficient zeros in synthetic division.",
    "correction": "For a³+b³ use a negative mixed term; include zeros in coefficient lists.",
    "practice": [
      {
        "q": "Factorise x³−8.",
        "a": "(x−2)(x²+2x+4)."
      },
      {
        "q": "Factorise 27x³+1.",
        "a": "(3x+1)(9x²−3x+1)."
      },
      {
        "q": "Synthetic divide x²+3x+2 by x+1: quotient and remainder?",
        "a": "x+2; remainder 0."
      }
    ],
    "summary": [
      "5.5 is enrichment and may be optional.",
      "Difference of cubes: (a−b)(a²+ab+b²).",
      "Sum of cubes: (a+b)(a²−ab+b²).",
      "Synthetic division uses coefficients and the zero of the divisor."
    ]
  }
];
