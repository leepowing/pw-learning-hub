# Health and Lifestyle — Marking Test Cases

Chapter 1 uses the existing trusted server-side AI marking route for standard Short and Long Questions. Interactive questions use deterministic marking in the shared interactive renderer.

## AI short-question tests

Use `health-q49` (“Explain how tar, nicotine and carbon monoxide harm the body.”).

| Case | Student-answer intent | Expected result |
|---|---|---|
| 0 marks | “They are all healthy chemicals.” | 0/3; all criteria Not met; contradiction must not receive credit. |
| Partial | “Tar damages lungs and nicotine is addictive.” | 2/3; the carbon-monoxide criterion is not met. |
| Full | “Tar damages the lung lining and contains carcinogens; nicotine is an addictive stimulant; carbon monoxide reduces oxygen transport in blood.” | 3/3; all criteria Met. |

## AI long-question tests

Use `health-q75` (addiction and withdrawal).

| Case | Student-answer intent | Expected result |
|---|---|---|
| Low | Mentions only “drugs are bad”. | 0/5 or 1/5 only if a criterion is genuinely expressed. |
| Medium | Explains body adaptation and need to feel normal, but omits named withdrawal effects. | 2–3/5 according to the trusted criteria actually met. |
| Full | Explains chemical changes, adaptation, need to feel normal, stopping and several named withdrawal symptoms. | 5/5. |

For every AI response, the server must preserve criterion order, recalculate marks from `Met`, rebuild the summary from trusted counts, and retain the existing retry/self-mark fallback.

## Deterministic tests

| Question | Type | Expected check |
|---|---|---|
| `health-q58` | Label diagram | 10 numbered answers on the replacement digestive-system image; common accepted spellings include `oesophagus`/`esophagus` and `gall bladder`/`gallbladder`. |
| `health-q59` | Ordering | Mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus. |
| `health-q61` | Matching | Six nutrient-role mappings. |
| `health-q64` | Fill in the blanks | blue-black, cloudy, orange-red, purple. |
| `health-q66` | Classification | Underweight, overweight, and vitamin/mineral deficiency categories. |
| `health-q69` | Fill in the blanks | addiction and withdrawal vocabulary; all five entries required before Check answer activates. |
