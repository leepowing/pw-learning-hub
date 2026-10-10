# English AI Marking Tests

These cases verify the subject-aware branch in `app/api/knowledge-organisers/mark/route.ts`. Live API results require a signed-in user and configured server key; the structural validator checks trusted lookup, criteria and prompt preservation without exposing a key.

## Short-answer cases

| Case | Example | Expected |
|---|---|---|
| Zero | Unrelated response to `eng-crime-q037` | 0/2; both criteria not met |
| Partial | “A clue helps solve the crime.” | 1/2; clue met, red herring missing |
| Full paraphrase | “Clues point towards the solution, but red herrings send the investigator in the wrong direction.” | 2/2 |
| Minor spelling | “A red herring missleads the reader.” | Meaning accepted despite spelling |
| Keyword only | “Suspense.” for `eng-crime-q047` | No automatic mark without definition or effect |
| Plausible effect | “Uncertainty makes readers curious to find out whether the suspect is guilty.” | Accept if it satisfies the requested effect criterion |
| Contradiction | Correct definition followed by “red herrings reveal the answer” | Contradictory criterion not met |
| Anachronism | “Sherlock Holmes began in 1940.” | Historical fact criterion not met |

## Long-answer cases

| Case | Expected |
|---|---|
| Relevant knowledge with no explanation | Credit only criteria actually expressed; do not reward length |
| Correct term used incorrectly | Criterion not met |
| Alternative but plausible reader effect | Accept when relevant and explained from KO content |
| Comparison without a direct link | Do not award a comparison criterion that requires a direct comparison |
| No conclusion where none is required | Do not deduct a mark |
| Full answer | One mark per trusted atomic criterion; score equals number marked Met |

For every case: criteria order and count must remain unchanged; `partly_met` earns zero; the displayed score must equal the count of `met`; feedback and the improved answer must not contradict the final criteria.
