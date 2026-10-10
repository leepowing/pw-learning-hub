# Ecosystem Processes — AI Marking Test Cases

Use a signed-in test account. Scores below assume each marking point earns one integer mark.

| Question | Test answer | Expected |
|---|---|---:|
| Photosynthesis fill blanks | `glucose; chloroplasts; chlorophyll; light energy; respiration` | 5/5 |
| Photosynthesis fill blanks | `glucose; chloroplasts; chlorophyll; sunlight` | 3/5; light may be incomplete, respiration absent |
| Starch method | Correct order, ethanol removes chlorophyll, blue-black means starch | Credit only explicitly supplied steps and reasons |
| Leaf transport ordering | `roots, xylem, stem, leaves, transpiration` | 5/5 |
| Fertiliser mean | `(6+7+8+6+9)/5 = 7.2 cm` | 2/2 |
| Breathing vs respiration | Breathing moves gases; respiration releases energy from glucose in cells | 2/2 |
| Anaerobic equations | Animal equation incorrectly includes carbon dioxide | Carbon-dioxide point must not be inferred; deduct affected point |
| Oxygen debt | Mentions heavy breathing but not lactic acid | 0–1/2 depending on explicit extra-oxygen explanation |
| Ecosystem definitions | Correct population/community/ecosystem but omits habitat/niche | 3/5 |

## Required consistency checks

1. `awardedMarks` equals the number of criteria marked `met`.
2. Partly met criteria do not earn a mark.
3. Summary counts agree with displayed criteria and score.
4. Model answer covers every marking point but introduces no required outside fact.
5. Minor spelling errors that do not change scientific meaning are accepted.
6. Incorrect equations, units, labels, sequence or practical safety statements are not silently inferred as correct.
