import type { MathsFlashcard } from "./types";

export const s1Flashcards: MathsFlashcard[] = [
  // Chapter 5, Section 1: Percentages
  {
    id: "s1-c5-percentage-of-another",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentages",
    type: "formula",
    prompt:
      "How do you express x as a percentage of y?",
    formula: String.raw`
      \text{Percentage}
      =
      \frac{x}{y}
      \times 100\%
    `,
    explanation:
      "Divide the part by the whole, then multiply by 100%.",
  },
  {
    id: "s1-c5-find-percentage-of-quantity",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentages",
    type: "formula",
    prompt:
      "How do you find a% of y?",
    formula: String.raw`
      y \times \frac{a}{100}
    `,
    explanation:
      "Convert the percentage into a fraction or decimal, then multiply.",
  },

  // Chapter 5, Section 2: Increase
  {
    id: "s1-c5-find-increase",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate an increase?",
    formula: String.raw`
      \text{Increase}
      =
      \text{New value}
      -
      \text{Original value}
    `,
    explanation:
      "Subtract the original value from the new value.",
  },
  {
    id: "s1-c5-percentage-increase",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate percentage increase?",
    formula: String.raw`
      \text{Percentage increase}
      =
      \frac{\text{Increase}}
      {\text{Original value}}
      \times 100\%
    `,
    explanation:
      "Always divide the increase by the original value.",
  },
  {
    id: "s1-c5-increase-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the increase from a percentage increase?",
    formula: String.raw`
      \text{Increase}
      =
      \text{Original value}
      \times
      \text{Percentage increase}
    `,
    explanation:
      "Write the percentage increase as a decimal before multiplying.",
  },
  {
    id: "s1-c5-new-value-after-increase",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the new value after a percentage increase?",
    formula: String.raw`
      \text{New value}
      =
      \text{Original value}
      \times
      \left(1+\text{Percentage increase}\right)
    `,
    explanation:
      "For example, an increase of 12% gives a multiplier of 1.12.",
  },

  // Chapter 5, Section 2: Profit
  {
    id: "s1-c5-find-profit",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate profit?",
    formula: String.raw`
      \text{Profit}
      =
      \text{Selling price}
      -
      \text{Cost price}
    `,
    explanation:
      "Profit is made when the selling price is greater than the cost price.",
  },
  {
    id: "s1-c5-profit-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate profit percentage?",
    formula: String.raw`
      \text{Profit percentage}
      =
      \frac{\text{Profit}}
      {\text{Cost price}}
      \times 100\%
    `,
    explanation:
      "Profit percentage is always calculated using the cost price.",
  },
  {
    id: "s1-c5-profit-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the profit from a profit percentage?",
    formula: String.raw`
      \text{Profit}
      =
      \text{Cost price}
      \times
      \text{Profit percentage}
    `,
    explanation:
      "Convert the profit percentage to a decimal before multiplying.",
  },
  {
    id: "s1-c5-selling-price-with-profit",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the selling price when there is a profit?",
    formula: String.raw`
      \text{Selling price}
      =
      \text{Cost price}
      \times
      \left(1+\text{Profit percentage}\right)
    `,
    explanation:
      "For example, a profit of 20% gives a multiplier of 1.2.",
  },

  // Chapter 5, Section 3: Decrease
  {
    id: "s1-c5-find-decrease",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate a decrease?",
    formula: String.raw`
      \text{Decrease}
      =
      \text{Original value}
      -
      \text{New value}
    `,
    explanation:
      "Subtract the new value from the original value.",
  },
  {
    id: "s1-c5-percentage-decrease",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate percentage decrease?",
    formula: String.raw`
      \text{Percentage decrease}
      =
      \frac{\text{Decrease}}
      {\text{Original value}}
      \times 100\%
    `,
    explanation:
      "Always divide the decrease by the original value.",
  },
  {
    id: "s1-c5-decrease-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the decrease from a percentage decrease?",
    formula: String.raw`
      \text{Decrease}
      =
      \text{Original value}
      \times
      \text{Percentage decrease}
    `,
    explanation:
      "Write the percentage decrease as a decimal before multiplying.",
  },
  {
    id: "s1-c5-new-value-after-decrease",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the new value after a percentage decrease?",
    formula: String.raw`
      \text{New value}
      =
      \text{Original value}
      \times
      \left(1-\text{Percentage decrease}\right)
    `,
    explanation:
      "For example, a decrease of 15% gives a multiplier of 0.85.",
  },

  // Chapter 5, Section 3: Discount
  {
    id: "s1-c5-find-discount",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate a discount?",
    formula: String.raw`
      \text{Discount}
      =
      \text{Marked price}
      -
      \text{Selling price}
    `,
    explanation:
      "The discount is the amount removed from the marked price.",
  },
  {
    id: "s1-c5-discount-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate discount percentage?",
    formula: String.raw`
      \text{Discount percentage}
      =
      \frac{\text{Discount}}
      {\text{Marked price}}
      \times 100\%
    `,
    explanation:
      "Discount percentage is calculated using the marked price.",
  },
  {
    id: "s1-c5-discount-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the discount from a discount percentage?",
    formula: String.raw`
      \text{Discount}
      =
      \text{Marked price}
      \times
      \text{Discount percentage}
    `,
    explanation:
      "Convert the discount percentage to a decimal before multiplying.",
  },
  {
    id: "s1-c5-selling-price-after-discount",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the selling price after a discount?",
    formula: String.raw`
      \text{Selling price}
      =
      \text{Marked price}
      \times
      \left(1-\text{Discount percentage}\right)
    `,
    explanation:
      "For example, a discount of 30% gives a multiplier of 0.7.",
  },

  // Chapter 5, Section 3: Loss
  {
    id: "s1-c5-find-loss",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate a loss?",
    formula: String.raw`
      \text{Loss}
      =
      \text{Cost price}
      -
      \text{Selling price}
    `,
    explanation:
      "A loss occurs when the selling price is lower than the cost price.",
  },
  {
    id: "s1-c5-loss-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate loss percentage?",
    formula: String.raw`
      \text{Loss percentage}
      =
      \frac{\text{Loss}}
      {\text{Cost price}}
      \times 100\%
    `,
    explanation:
      "Loss percentage is always calculated using the cost price.",
  },
  {
    id: "s1-c5-loss-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the loss from a loss percentage?",
    formula: String.raw`
      \text{Loss}
      =
      \text{Cost price}
      \times
      \text{Loss percentage}
    `,
    explanation:
      "Convert the loss percentage to a decimal before multiplying.",
  },
  {
    id: "s1-c5-selling-price-with-loss",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the selling price when there is a loss?",
    formula: String.raw`
      \text{Selling price}
      =
      \text{Cost price}
      \times
      \left(1-\text{Loss percentage}\right)
    `,
    explanation:
      "For example, a loss of 25% gives a multiplier of 0.75.",
  },

  // Chapter 5, Section 4: Percentage Change
  {
    id: "s1-c5-find-change",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you calculate a signed change?",
    formula: String.raw`
      \text{Change}
      =
      \text{New value}
      -
      \text{Original value}
    `,
    explanation:
      "An increase gives a positive change. A decrease gives a negative change.",
  },
  {
    id: "s1-c5-percentage-change",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you calculate percentage change?",
    formula: String.raw`
      \text{Percentage change}
      =
      \frac{\text{Change}}
      {\text{Original value}}
      \times 100\%
    `,
    explanation:
      "Keep the sign of the change and divide by the original value.",
  },
  {
    id: "s1-c5-change-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you find the change from a percentage change?",
    formula: String.raw`
      \text{Change}
      =
      \text{Original value}
      \times
      \text{Percentage change}
    `,
    explanation:
      "Use a positive decimal for an increase and a negative decimal for a decrease.",
  },
  {
    id: "s1-c5-new-value-from-change",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you find the new value from a signed percentage change?",
    formula: String.raw`
      \text{New value}
      =
      \text{Original value}
      \times
      \left(1+\text{Percentage change}\right)
    `,
    explanation:
      "A negative percentage change automatically produces a multiplier below 1.",
  },
];