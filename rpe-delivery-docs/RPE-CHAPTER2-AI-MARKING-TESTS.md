# RPE Chapter 2 AI Marking Tests

The live API requires a signed-in user and configured OpenAI key. These cases define the expected marking behaviour.

## Short answers

1. `Passover` must be accepted for `Pesach` where either term gives the intended meaning.
2. `Commandments` may be accepted for `Mitzvot` when the answer clearly refers to the rules.
3. `Kashrut` must be marked as the food laws; `kosher` must be marked as food suitable for consumption.
4. A list question earns the point only when the complete list required by its single marking point is present.
5. Minor spelling or grammar errors must not lose marks when the religious meaning remains clear.
6. A correct term with an incorrect religion, person or practice must not receive the mark.

## Long answers

1. Empty or irrelevant response: zero marks.
2. Accurate but incomplete response: award only fully met criteria.
3. Complete response: cover every marking point without requiring exact model wording.
4. Do not assume the student personally accepts a religious belief.
5. Do not introduce outside denominational teaching when deciding the score.
6. Do not require evaluation or a personal conclusion unless the prompt and rubric ask for it.

## Deterministic questions

- MCQ answer must be one of its options.
- Matching, ordering and classification use their stored answer arrays.
- MCQ option randomisation must not change the correct stored answer.
