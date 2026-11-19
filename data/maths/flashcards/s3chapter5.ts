import type { MathsFlashcard } from "./types";

export const s3Chapter5Flashcards: MathsFlashcard[] = [
  {
    "id": "s3-c5-01",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Basic Knowledge of Probability",
    "type": "definition",
    "prompt": "What is a sample space?",
    "answer": "The set of all possible outcomes."
  },
  {
    "id": "s3-c5-02",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Basic Knowledge of Probability",
    "type": "formula",
    "prompt": "When can you divide favourable outcomes by total outcomes?",
    "answer": "When the individual outcomes are equally likely."
  },
  {
    "id": "s3-c5-03",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Basic Knowledge of Probability",
    "type": "rule",
    "prompt": "Which probabilities describe impossible and certain events?",
    "answer": "0 means impossible and 1 means certain. Every probability lies between 0 and 1."
  },
  {
    "id": "s3-c5-04",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Basic Knowledge of Probability",
    "type": "formula",
    "prompt": "A machine jams 6 times in 150 runs. Estimate its jam probability.",
    "answer": "Relative frequency = 6/150 = 0.04."
  },
  {
    "id": "s3-c5-05",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Methods of Listing Possible Outcomes",
    "type": "rule",
    "prompt": "What does one complete path on a tree represent?",
    "answer": "One ordered sequence of outcomes, from the first stage to the last."
  },
  {
    "id": "s3-c5-06",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Methods of Listing Possible Outcomes",
    "type": "rule",
    "prompt": "Why list HT and TH separately for two coin tosses?",
    "answer": "The head occurs on different tosses. They are distinct ordered outcomes."
  },
  {
    "id": "s3-c5-07",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Methods of Listing Possible Outcomes",
    "type": "rule",
    "prompt": "How many cells list the ordered outcomes of two six-sided dice?",
    "answer": "6 × 6 = 36. With independent fair dice each cell has probability 1/36."
  },
  {
    "id": "s3-c5-08",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Methods of Listing Possible Outcomes",
    "type": "rule",
    "prompt": "What changes when drawing a second token without replacement?",
    "answer": "The first token is unavailable. With n distinct tokens there are n(n − 1) ordered pairs."
  },
  {
    "id": "s3-c5-09",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Expected Values",
    "type": "formula",
    "prompt": "How do you find an expected count?",
    "answer": "Multiply the trial count by the event probability on each trial: np."
  },
  {
    "id": "s3-c5-10",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Expected Values",
    "type": "rule",
    "prompt": "Can an expected count equal 2.5?",
    "answer": "Yes. It is an average across repeated batches. Each individual count is whole."
  },
  {
    "id": "s3-c5-11",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Expected Values",
    "type": "formula",
    "prompt": "How do you calculate expected value?",
    "answer": "Multiply every possible value by its probability and add the products."
  },
  {
    "id": "s3-c5-12",
    "level": "s3",
    "chapter": 5,
    "chapterTitle": "Probability",
    "section": "Expected Values",
    "type": "rule",
    "prompt": "A game pays $9 with probability ⅓ and $0 otherwise. What fee makes it fair?",
    "answer": "The expected prize is $3, so a $3 fee gives zero expected net gain."
  }
];
