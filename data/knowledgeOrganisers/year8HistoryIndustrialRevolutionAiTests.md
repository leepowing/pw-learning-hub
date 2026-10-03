# The Industrial Revolution — AI marking test cases

These cases are designed for localhost testing through the existing authenticated server-side marking route. The server must recalculate the final score as the exact number of `met` criteria. `partly_met` and `not_met` earn zero.

## Short question: `ir-q24` (3 marks)

Question: **Name all three punishments described in the Knowledge Organiser.**

### Zero-mark case

Answer: `Children were given shorter lessons and sent home.`

Expected:

- 0/3
- all three criteria `not_met`
- feedback identifies strapping, iron weights and dousing as missing

### Partial-score case

Answer: `Children were hit with a leather strap and had iron weights hung around their necks.`

Expected:

- 2/3
- strapping: `met`
- iron weights: `met`
- dousing in water: `not_met`
- summary says exactly two criteria were met and one was not met

### Full-mark paraphrase with minor error

Answer: `They was hit using a leather belt, weights were put round their necks, and water was thrown over them so they stayed awake.`

Expected:

- 3/3
- all three criteria `met`
- minor grammar and synonym use do not reduce the mark

## Short question: `ir-q25` (4 marks)

### Partly-met semantic case

Answer: `A scavenger went underneath machines to collect cotton. It was dangerous. Dust made workers ill.`

Expected:

- scavenger definition: `met`
- unguarded machinery / accidents: `partly_met` unless the accident risk is expressed clearly enough
- chest and lung diseases: `partly_met` because “ill” is too vague
- hearing damage: `not_met`
- score equals only the number of `met` criteria

### Contradiction case

Answer: `Scavengers collected cotton under machinery, but guarded machines meant that accidents never happened. Dust caused lung disease and loud noise damaged hearing.`

Expected:

- scavenger definition: `met`
- accident criterion: `not_met` because the answer contradicts the source
- dust criterion: `met`
- hearing criterion: `met`
- 3/4

## Long question: `ir-q30` (9 marks)

### Low-mark case

Answer: `Arkwright, Stephenson and Brunel were important people in the Industrial Revolution.`

Expected:

- no more than 0/9 unless a criterion is actually expressed
- names alone do not satisfy their factual criteria
- no supported comparative judgement

### Middle-mark case

Answer: `Arkwright made the water frame in 1767, which made cotton faster. Stephenson developed railways, which moved goods faster. Brunel built the Great Western Railway and Clifton Suspension Bridge. I think Stephenson was most important.`

Expected:

- several factual criteria `met`
- incomplete Arkwright quantity explanation and incomplete railway effects may be `partly_met`
- Brunel's full range of bridges, tunnels, railways and steamships is incomplete
- judgement is `partly_met` unless its comparative reason is sufficiently supported
- summary must accurately count every status

### Full-mark case

Answer: `Richard Arkwright, the father of the factory system, devised the water frame in 1767. It replaced work by human hands and spun cotton yarn faster and in greater quantities. George Stephenson developed railway transport. Railways moved goods more quickly and made them cheaper, while travel became more efficient and cheaper. Isambard Kingdom Brunel designed and built bridges, tunnels, railways and steamships, including the Great Western Railway and Clifton Suspension Bridge. All three transformed Britain, but Stephenson had the most wide-ranging impact because cheaper, more efficient rail travel affected both industry and people across the country, whereas Arkwright's main effect was cotton production and Brunel's named projects were more specific examples of engineering.`

Expected:

- 9/9
- all criteria `met`
- explicit supported comparative judgement

## Long question: `ir-q31` (9 marks)

### No-judgement case

Use an answer containing evidence for both benefits and problems but no final judgement.

Expected:

- factual criteria may be `met`
- the ninth supported-judgement criterion is `not_met` or `partly_met`
- it cannot receive 9/9

## Response integrity checks

For every response verify:

1. Criteria are returned in the trusted order.
2. Displayed marking-point text matches the server data.
3. Awarded marks equal the number of `met` criteria.
4. `partly_met` and `not_met` earn zero.
5. Summary counts match all statuses.
6. The summary never says “one point is missing” when several are incomplete.
7. `missedPoints`, improvements and model answer do not contradict the criteria.
8. The model answer covers every marking point.

