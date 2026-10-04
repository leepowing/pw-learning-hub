# Enslavement AI Marking Test Cases

These cases use the existing trusted server-side marking route. The client sends only the trusted question ID and the student's answer. `Partly met` earns no mark.

## Short-answer tests

### ens-q23 — voyage dates and figures (3 marks)

- 0 marks: `The journeys happened recently and everyone arrived.`
- Partial: `About 12.5 million people were taken.` → 1 Met; dates and arrivals absent.
- Full: `Between 1526 and 1867, about 12.5 million were taken by slave ships and only about 10.7 million arrived.` → 3 Met.
- Semantic equivalent: `Roughly 12.5m were transported from 1526–1867; approximately 10.7m reached the destination.` → 3 Met.
- Minor errors: `Betwen 1526 and 1867, 12.5 milion were taken and 10.7 milion arrived.` → 3 Met.
- Contradiction: `12.5 million were taken, but 20 million arrived.` → first figure Met; arrival criterion Not met.

### ens-q28 — growth of cotton (3 marks)

- 0 marks: `Cotton became popular because of the Underground Railroad.`
- Partial: `British textile mills needed cotton during the Industrial Revolution.` → demand criterion Met; production location and 1861 proportion absent.
- Full: `Southern states concentrated on cotton. British steam-powered textile mills increased demand during the Industrial Revolution, and by 1861 cotton formed two-thirds of US exports.` → 3 Met.

### ens-q32 — committee list (4 marks)

- 0 marks: no relevant names or method.
- Partial list: `William Wilberforce and Thomas Clarkson gave speeches.` → two names plus method Met; Granville Sharp absent.
- Full list: `William Wilberforce, Granville Sharp and Thomas Clarkson led the committee, which used public speeches to gain support.` → 4 Met.

## Long-answer tests

### ens-q34 — Middle Passage (9 marks)

- Low: mentions only that the journey was dangerous.
- Middle: explains crowding, food, hygiene and disease but omits duration, hunger, injury and figures.
- Near-full: meets eight criteria but gives no judgement supported by 12.5m/10.7m figures.
- Full: explains ship design, crowding, food, hygiene, 60–90 days, disease, hunger and injury, then uses both population figures to judge the scale.

### ens-q35 — plantation profitability (9 marks)

- Low: lists cotton and sugar without explanation.
- Middle: explains tobacco, rice and cotton demand but lacks dates, comparisons and judgement.
- Full: uses all four crops, named locations, labour conditions, four-times comparison, Industrial Revolution demand, 1861 export share and a supported judgement recognising human cost.

### ens-q36 — challenging enslavement (9 marks)

- Missing judgement: accurate evidence about the Underground Railroad, Tubman, the committee, Equiano and laws, but no comparison of significance.
- Full: covers secret routes/safe houses and destinations, Tubman's 13 trips, eighteenth-century opposition, all three leaders, speeches, Equiano, both laws and a supported comparison.

## Summary consistency cases

- 6 Met + 3 Partly met → score 6; summary states 6 fully met and 3 partly met.
- Met + Partly met + Not met → score 1; summary separates all three counts.
- All Met → no missing-points text.
- 0 Met → score 0 and no suggestion that any criterion was achieved.

Expected safeguards: criterion count/order must match the trusted question; displayed criterion text comes from the server; awarded marks equal the number of Met criteria; malformed AI output is rejected with a safe retry response.
