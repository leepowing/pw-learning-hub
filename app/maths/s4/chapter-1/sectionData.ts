export type SectionData = { number:string; slug:string; title:string; description:string; enrichment:boolean; topics:{title:string; formula:string; explanation:string; example:{question:string; solution:string; reason:string}}[]; mistake:string; correction:string; practice:{question:string; answer:string}[] };

export const sections: SectionData[] = [
  {
    "number": "1.1",
    "slug": "number-systems",
    "title": "Number Systems",
    "description": "Classify integers, rational numbers, irrational numbers and real numbers.",
    "enrichment": false,
    "topics": [
      {
        "title": "Integers",
        "formula": "\\mathbb{Z}=\\{\\ldots,-2,-1,0,1,2,\\ldots\\}",
        "explanation": "The integers include negative whole numbers, zero and positive whole numbers. The natural numbers here are the positive integers 1, 2, 3, …; note that some conventions include 0.",
        "example": {
          "question": "Classify −7, 0, 3/2 and 9.",
          "solution": "−7, 0 and 9 are integers; 3/2 is rational but not an integer.",
          "reason": "An integer has no fractional part."
        }
      },
      {
        "title": "Rational numbers",
        "formula": "\\frac{p}{q},\\quad p,q\\in\\mathbb{Z},\\ q\\ne 0",
        "explanation": "A rational number can be expressed as a ratio of two integers with non-zero denominator. Its decimal representation terminates or eventually repeats.",
        "example": {
          "question": "Write 0.272727… as a fraction.",
          "solution": "Let x = 0.272727… . Then 100x = 27.272727… . Subtract: 99x = 27, so x = 3/11.",
          "reason": "The repeating block has two digits, so multiply by 100."
        }
      },
      {
        "title": "Irrational and real numbers",
        "formula": "\\mathbb{R}=\\mathbb{Q}\\cup(\\mathbb{R}\\setminus\\mathbb{Q})",
        "explanation": "An irrational number cannot be written as p/q for integers p and non-zero q. Its decimal expansion neither terminates nor repeats. Together rational and irrational numbers form the real numbers.",
        "example": {
          "question": "Classify √49, √7 and π.",
          "solution": "√49 = 7 is rational and an integer; √7 and π are irrational. All three are real numbers.",
          "reason": "Simplify a square root before classifying it."
        }
      }
    ],
    "mistake": "Every recurring decimal is irrational.",
    "correction": "A recurring decimal is rational; a non-terminating, non-recurring decimal is irrational.",
    "practice": [
      {
        "question": "Is −12 a rational number?",
        "answer": "Yes; −12 = −12/1."
      },
      {
        "question": "Convert 0.181818… to a fraction.",
        "answer": "2/11"
      },
      {
        "question": "Is √81 irrational?",
        "answer": "No; √81 = 9, an integer."
      }
    ]
  },
  {
    "number": "1.2",
    "slug": "quadratic-equations",
    "title": "Quadratic Equations in One Unknown",
    "description": "Identify quadratic equations and write them in general form.",
    "enrichment": false,
    "topics": [
      {
        "title": "Quadratic equation in general form",
        "formula": "ax^2+bx+c=0,\\qquad a\\ne0",
        "explanation": "A quadratic equation in one unknown has degree two after like terms are collected and the expression is simplified. a, b and c are real coefficients for the usual real-coefficient setting.",
        "example": {
          "question": "Write 4x(x − 2) = 3 in general form.",
          "solution": "Expand: 4x² − 8x = 3. Move all terms to the left: 4x² − 8x − 3 = 0. Thus a = 4, b = −8, c = −3.",
          "reason": "Expand and collect terms before identifying coefficients."
        }
      },
      {
        "title": "Recognising the degree",
        "formula": "ax^2+bx+c=0\\quad (a\\ne0)",
        "explanation": "An equation that contains x² is not necessarily quadratic: simplification may eliminate the x² terms. Conversely, a product of two linear expressions may be quadratic.",
        "example": {
          "question": "Is x(x + 1) = x² + 5 quadratic?",
          "solution": "No. Subtract x² from both sides to obtain x = 5, a linear equation.",
          "reason": "Always simplify both sides before deciding the degree."
        }
      },
      {
        "title": "Roots and checking",
        "formula": "f(r)=0",
        "explanation": "A root (solution) is a value that makes the original equation true. Substitute an alleged root into the original equation to check.",
        "example": {
          "question": "Check whether 2 is a root of x² − 5x + 6 = 0.",
          "solution": "2² − 5(2) + 6 = 4 − 10 + 6 = 0; therefore 2 is a root.",
          "reason": "Check the original equation, especially after transformations."
        }
      }
    ],
    "mistake": "Any equation with x² written somewhere must be quadratic.",
    "correction": "The x² terms can cancel; simplify to identify the true degree.",
    "practice": [
      {
        "question": "Identify a, b and c in 7x² + 3 = 0.",
        "answer": "a = 7, b = 0, c = 3"
      },
      {
        "question": "Is (x + 2)² = x² + 4 quadratic?",
        "answer": "No; 4x = 0 after simplification."
      }
    ]
  },
  {
    "number": "1.3",
    "slug": "factor-method",
    "title": "Solving Quadratic Equations by the Factor Method",
    "description": "Use factorisation and the zero-product property to find roots.",
    "enrichment": false,
    "topics": [
      {
        "title": "Zero-product property",
        "formula": "AB=0\\Rightarrow A=0\\text{ or }B=0",
        "explanation": "For real numbers, a product is zero if and only if at least one factor is zero. First write the equation with zero on one side.",
        "example": {
          "question": "Solve x² − 8x + 15 = 0.",
          "solution": "Factor: (x − 3)(x − 5) = 0. Thus x − 3 = 0 or x − 5 = 0, giving x = 3 or x = 5.",
          "reason": "Set each factor equal to zero."
        }
      },
      {
        "title": "General form before factorising",
        "formula": "ax^2+bx+c=0",
        "explanation": "Rearrange, clear denominators where valid, and take out common factors. Do not divide both sides by an expression involving x: it might be zero and a solution could be lost.",
        "example": {
          "question": "Solve 2x² + 7x = 4.",
          "solution": "Rearrange: 2x² + 7x − 4 = 0. Factor: (2x − 1)(x + 4) = 0. Roots: x = 1/2 or x = −4.",
          "reason": "Check factorisation by expanding."
        }
      },
      {
        "title": "Repeated roots and special products",
        "formula": "(x-k)^2=0\\Rightarrow x=k",
        "explanation": "Two factors may lead to the same root. Difference of two squares is also useful.",
        "example": {
          "question": "Solve 9x² − 25 = 0.",
          "solution": "(3x − 5)(3x + 5) = 0, so x = 5/3 or x = −5/3.",
          "reason": "Use a² − b² = (a − b)(a + b)."
        }
      }
    ],
    "mistake": "Divide both sides by x to solve x² = 4x.",
    "correction": "Doing so loses x = 0. Factor x(x − 4) = 0, giving 0 and 4.",
    "practice": [
      {
        "question": "Solve x² − 7x + 12 = 0.",
        "answer": "x = 3 or 4"
      },
      {
        "question": "Solve x² + 6x + 9 = 0.",
        "answer": "x = −3 (repeated root)"
      }
    ]
  },
  {
    "number": "1.4",
    "slug": "quadratic-formula",
    "title": "Solving Quadratic Equations by the Quadratic Formula",
    "description": "Derive and apply the quadratic formula, including complex roots.",
    "enrichment": false,
    "topics": [
      {
        "title": "Completing the square and the quadratic formula",
        "formula": "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\quad(a\\ne0)",
        "explanation": "For ax² + bx + c = 0, first arrange the equation in general form. The formula follows by dividing by a and completing the square.",
        "example": {
          "question": "Solve 2x² − 5x − 3 = 0.",
          "solution": "Here a = 2, b = −5, c = −3. Δ = 25 + 24 = 49. x = (5 ± 7)/4, so x = 3 or x = −1/2.",
          "reason": "Place the entire numerator over 2a."
        }
      },
      {
        "title": "Exact surd solutions",
        "formula": "\\sqrt{mn}=\\sqrt m\\sqrt n\\quad(m,n\\ge0)",
        "explanation": "If roots are not rational, leave the answer in simplified exact surd form unless an approximation is specifically requested.",
        "example": {
          "question": "Solve x² − 4x + 1 = 0.",
          "solution": "x = (4 ± √(16 − 4))/2 = (4 ± 2√3)/2 = 2 ± √3.",
          "reason": "Only round when the question asks for an approximation."
        }
      },
      {
        "title": "Complex numbers and complex roots",
        "formula": "i^2=-1,\\qquad z=a+bi",
        "explanation": "In the complex number system, i is the imaginary unit. For a real-coefficient quadratic with negative discriminant, the two roots are non-real complex conjugates.",
        "example": {
          "question": "Solve x² + 4 = 0 in complex numbers.",
          "solution": "x² = −4, so x = ±2i. There are no real roots.",
          "reason": "Do not confuse “no real roots” with “no complex roots”."
        }
      }
    ],
    "mistake": "For a negative discriminant the quadratic equation has no solutions at all.",
    "correction": "It has no real roots, but two non-real complex conjugate roots.",
    "practice": [
      {
        "question": "Solve x² − 6x + 5 = 0.",
        "answer": "x = 1 or 5"
      },
      {
        "question": "Solve x² + 9 = 0 over the complex numbers.",
        "answer": "x = ±3i"
      }
    ]
  },
  {
    "number": "1.5",
    "slug": "nature-of-roots",
    "title": "The Nature of Roots of Quadratic Equations",
    "description": "Use the discriminant to classify roots and solve parameter conditions.",
    "enrichment": false,
    "topics": [
      {
        "title": "The discriminant",
        "formula": "\\Delta=b^2-4ac",
        "explanation": "For ax² + bx + c = 0 with real coefficients and a ≠ 0, the sign of Δ determines the nature of its real roots.",
        "example": {
          "question": "Determine the nature of the roots of 3x² + 2x + 5 = 0.",
          "solution": "Δ = 2² − 4(3)(5) = 4 − 60 = −56. There are no real roots (two non-real complex roots).",
          "reason": "The sign of Δ matters; there is no need to solve fully."
        }
      },
      {
        "title": "Three cases",
        "formula": "\\Delta>0:\\ 2\\text{ distinct real roots};\\quad\\Delta=0:\\ 1\\text{ repeated real root};\\quad\\Delta<0:\\ 0\\text{ real roots}",
        "explanation": "A repeated root is counted twice by multiplicity. For Δ > 0, roots may be rational or irrational; the discriminant sign alone does not distinguish those.",
        "example": {
          "question": "Classify x² − 10x + 25 = 0.",
          "solution": "Δ = (−10)² − 4(1)(25) = 0. The repeated root is x = 5.",
          "reason": "A repeated root is one distinct value."
        }
      },
      {
        "title": "Parameters and inequalities",
        "formula": "\\Delta\\ge0\\iff\\text{at least one real root}",
        "explanation": "When a coefficient contains a parameter, form Δ and solve the resulting inequality or equation. Check that a ≠ 0 throughout the parameter range.",
        "example": {
          "question": "For x² + 2kx + 9 = 0, find k for real roots.",
          "solution": "Δ = (2k)² − 36 = 4(k² − 9). For real roots, k² − 9 ≥ 0, hence k ≤ −3 or k ≥ 3.",
          "reason": "Solve the quadratic inequality carefully, including equality."
        }
      }
    ],
    "mistake": "If Δ > 0, both roots must be rational.",
    "correction": "Positive Δ guarantees two distinct real roots, not necessarily rational roots.",
    "practice": [
      {
        "question": "Determine the nature of x² + 2x + 1 = 0.",
        "answer": "Δ = 0; repeated real root"
      },
      {
        "question": "For x² + 4x + k = 0, find k for no real roots.",
        "answer": "k > 4"
      }
    ]
  },
  {
    "number": "1.6",
    "slug": "forming-quadratics",
    "title": "Forming Quadratic Equations",
    "description": "Form quadratic equations from given roots and check their coefficients.",
    "enrichment": false,
    "topics": [
      {
        "title": "Given two roots",
        "formula": "(x-\\alpha)(x-\\beta)=0",
        "explanation": "If α and β are the roots, a quadratic equation can be formed by multiplying the two linear factors. Multiplying every term by a non-zero constant gives an equivalent equation.",
        "example": {
          "question": "Form an equation with roots 4 and −3.",
          "solution": "(x − 4)(x + 3) = 0. Expand: x² − x − 12 = 0.",
          "reason": "A root α corresponds to a factor x − α."
        }
      },
      {
        "title": "Sum and product of roots",
        "formula": "x^2-(\\alpha+\\beta)x+\\alpha\\beta=0",
        "explanation": "The sum and product of the roots help form a monic quadratic. If denominators occur, multiply by a suitable non-zero integer.",
        "example": {
          "question": "Form a quadratic with roots 2/3 and −1/2.",
          "solution": "Sum = 1/6; product = −1/3. x² − x/6 − 1/3 = 0. Multiply by 6: 6x² − x − 2 = 0.",
          "reason": "Clear fractions after forming the equation."
        }
      },
      {
        "title": "Repeated and surd roots",
        "formula": "(x-r)^2=0",
        "explanation": "A repeated root produces a perfect-square quadratic. If real rational coefficients are required and one irrational conjugate root is specified, its conjugate may also be required.",
        "example": {
          "question": "Form an equation with repeated root −2.",
          "solution": "(x + 2)² = 0, so x² + 4x + 4 = 0.",
          "reason": "Check the equation by substituting each given root."
        }
      }
    ],
    "mistake": "Roots 3 and 5 give (x + 3)(x + 5) = 0.",
    "correction": "A root 3 requires the factor (x − 3), not (x + 3).",
    "practice": [
      {
        "question": "Form an equation with roots −1 and 6.",
        "answer": "x² − 5x − 6 = 0"
      },
      {
        "question": "Form an equation with repeated root 4.",
        "answer": "x² − 8x + 16 = 0"
      }
    ]
  },
  {
    "number": "1.7",
    "slug": "practical-problems",
    "title": "Simple Practical Problems Leading to Quadratic Equations",
    "description": "Build quadratic models and reject solutions outside the context.",
    "enrichment": false,
    "topics": [
      {
        "title": "Translate words into algebra",
        "formula": "\\text{Let }x=\\text{the unknown quantity}",
        "explanation": "Define a variable with units, form an equation from the conditions, and solve it. Check whether every mathematical root is physically possible.",
        "example": {
          "question": "The product of two consecutive positive integers is 56. Find them.",
          "solution": "Let n be the smaller integer. n(n + 1) = 56, so n² + n − 56 = 0. Factor: (n + 8)(n − 7) = 0. Since n > 0, reject n = −8. The integers are 7 and 8.",
          "reason": "State why the negative root is excluded."
        }
      },
      {
        "title": "Rectangle and border problems",
        "formula": "A=lw",
        "explanation": "For a rectangle, choose the width or change in width as the variable. Express the length using the given relationship; impose length > 0 and width > 0.",
        "example": {
          "question": "A rectangle has area 60 cm², and its length is 4 cm more than its width. Find its dimensions.",
          "solution": "Let w > 0 be the width. w(w + 4) = 60. w² + 4w − 60 = 0 = (w + 10)(w − 6). Reject −10. Width = 6 cm; length = 10 cm.",
          "reason": "Give dimensions with units."
        }
      },
      {
        "title": "Right-angled triangles and other models",
        "formula": "a^2+b^2=c^2",
        "explanation": "For a right-angled triangle, use Pythagoras’ theorem with lengths expressed in terms of the variable. Check the triangle conditions and reject negative lengths.",
        "example": {
          "question": "A right triangle has legs x and x + 7, and hypotenuse 13. Find the legs.",
          "solution": "x² + (x + 7)² = 169. 2x² + 14x − 120 = 0, giving x² + 7x − 60 = 0 = (x + 12)(x − 5). Reject x = −12. Legs: 5 and 12.",
          "reason": "Check 5² + 12² = 13²."
        }
      }
    ],
    "mistake": "Both roots of a word-problem quadratic are valid answers.",
    "correction": "A root may violate length, time, counting or other contextual restrictions.",
    "practice": [
      {
        "question": "A positive number times itself is 49. Find it.",
        "answer": "7 (reject −7)"
      },
      {
        "question": "A rectangle has sides x and x + 2, area 48. Find x > 0.",
        "answer": "x = 6"
      }
    ]
  },
  {
    "number": "1.8",
    "slug": "complex-numbers-enrichment",
    "title": "Superfood in Mathematics: Development of the Complex Number System",
    "description": "Optional enrichment: explore why imaginary and complex numbers were introduced.",
    "enrichment": true,
    "topics": [
      {
        "title": "Why complex numbers were introduced",
        "formula": "x^2=-1\\quad\\Rightarrow\\quad x=\\pm i",
        "explanation": "The real numbers do not include a square root of −1. Extending the number system with i, where i² = −1, makes equations such as x² + 1 = 0 solvable.",
        "example": {
          "question": "Solve x² + 16 = 0 in the complex numbers.",
          "solution": "x² = −16. Therefore x = 4i or x = −4i.",
          "reason": "These solutions are not real numbers."
        }
      },
      {
        "title": "The complex plane",
        "formula": "z=a+bi\\leftrightarrow(a,b)",
        "explanation": "Represent z = a + bi using the horizontal real axis and vertical imaginary axis. Its position is the point (a, b).",
        "example": {
          "question": "Plot z = −2 + 3i conceptually.",
          "solution": "Move 2 units left along the real axis and 3 units up along the imaginary axis. The point is (−2, 3).",
          "reason": "Do not put the coefficient of i on the real axis."
        }
      },
      {
        "title": "Complex conjugates",
        "formula": "\\overline{a+bi}=a-bi",
        "explanation": "For real-coefficient quadratic equations, non-real roots come in conjugate pairs.",
        "example": {
          "question": "Form a real-coefficient quadratic with roots 2 + i and 2 − i.",
          "solution": "(x − 2 − i)(x − 2 + i) = (x − 2)² + 1 = x² − 4x + 5 = 0.",
          "reason": "Use i² = −1 when expanding."
        }
      }
    ],
    "mistake": "The imaginary unit i is an ordinary real variable.",
    "correction": "i is a fixed complex number defined by i² = −1.",
    "practice": [
      {
        "question": "What point represents 4 − 2i?",
        "answer": "(4, −2)"
      },
      {
        "question": "Find i².",
        "answer": "−1"
      }
    ]
  }
];
