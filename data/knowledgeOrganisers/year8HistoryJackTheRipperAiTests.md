# Jack the Ripper — AI Marking Test Cases

These tests use the trusted question IDs and marking points in `year8HistoryJackTheRipper.ts`. For every test, the server must award one mark only for each `met` criterion; `partly_met` and `not_met` earn zero.

## Short-answer tests

### JR-S1 — Zero marks

- Question: `jr-q23` — name all five victims (5 marks)
- Answer: `The victims were John Pizer and Aaron Kosminski.`
- Expected: **0/5**
- Expected statuses: 0 met, 0 partly met, 5 not met
- Check: neither named person is one of the five victims.

### JR-S2 — Partial list

- Question: `jr-q23`
- Answer: `Mary Ann Nichols, Annie Chapman and Catherine Eddowes.`
- Expected: **3/5**
- Expected statuses: 3 met, 0 partly met, 2 not met
- Missing: Elizabeth Stride and Mary Jane Kelly.

### JR-S3 — Full marks using variant wording

- Question: `jr-q23`
- Answer: `Polly Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes and Mary Jane Kelly.`
- Expected: **5/5**
- Expected statuses: 5 met, 0 partly met, 0 not met
- Check: `Polly Nichols` must be accepted for Mary Ann (Polly) Nichols.

### JR-S4 — Partly met detail

- Question: `jr-q20` — Itchy Park and common lodging house (2 marks)
- Answer: `Homeless people slept in the churchyard. A lodging house was somewhere poor people stayed.`
- Expected: **0/2** or **1/2** only if the first sentence is judged to express the lice explanation elsewhere in the response; the second criterion must be `partly_met` because the nightly rent, room/bed and shared quarters are missing.
- Required check: a partly met criterion earns zero and the feedback identifies the missing definition details.

### JR-S5 — Full marks with minor language errors

- Question: `jr-q29` — H Division and forensic limitation (3 marks)
- Answer: `H Division were the Metropolitan Police part cover Whitechapel. They hunted the Ripper. They cannot tell human blood from animal blood.`
- Expected: **3/3**
- Expected statuses: 3 met
- Check: grammar errors do not change the meaning.

### JR-S6 — Contradictory content

- Question: `jr-q32` — facts about Druitt (3 marks)
- Answer: `Druitt studied medicine and his location on the murder nights was unknown. He definitely lived until 1900 and did not drown.`
- Expected: **2/3 maximum**
- Expected: first two criteria met; drowning criterion not met because the answer contradicts it.

### JR-S7 — Irrelevant or invented answer

- Question: `jr-q27` — the letters (3 marks)
- Answer: `The police used mobile phones to trace Jack and arrested him.`
- Expected: **0/3**
- Expected statuses: 3 not met
- Inaccuracy feedback should identify the anachronistic or invented claim.

## Long-answer tests

### JR-L1 — Low score

- Question: `jr-q34` — why capture was difficult (9 marks)
- Answer: `It was foggy and the police found it hard.`
- Expected range: **1/9**
- Expected: pea-souper visibility criterion may be met; most criteria not met or partly met.
- Must not award marks merely for length or repeating the question.

### JR-L2 — Middle score without judgement

- Question: `jr-q34`
- Answer: `Pea-souper fog and darkness made it difficult to see. The houses were close together and there were narrow alleys. Witnesses described different people. Police received many hoax letters, including Dear Boss, and they could not tell human blood from animal blood.`
- Expected range: **6–7/9**, depending on whether each explanation is fully expressed.
- Required: supported-judgement criterion not met.

### JR-L3 — Near full marks but missing comparison

- Question: `jr-q35` — most convincing suspect (9 marks)
- Answer: A developed response accurately covering Pizer, Cream, Prince Albert, Kosminski, Druitt and Tumblety but ending without selecting or comparing the strongest suspect.
- Expected maximum: **8/9**
- Required: final comparative judgement criterion not met.

### JR-L4 — Full marks

- Question: `jr-q36` — Whitechapel conditions and avoiding capture (9 marks)
- Answer must accurately explain poverty, fog and one-metre visibility, the close houses and alleys, homelessness or common lodging conditions, prostitution and vulnerability, the victims' locations, poor witness visibility, police letters or forensic limits, and finish with a supported judgement weighing environmental and policing factors.
- Expected: **9/9**
- Expected statuses: 9 met

## Server consistency tests

1. 6 met + 3 partly met must produce 6/9 and state that three criteria were partly met.
2. A mixture of partly met and not met must list the exact counts separately.
3. All met must not produce missed points.
4. Zero met must produce 0 marks.
5. Returned criterion text and order must be replaced with the trusted server-side marking points.
6. Model-provided `awardedMarks` must never override the server's count of `met` criteria.
7. Every model answer must cover all trusted marking points.
8. For `jr-q34`, `jr-q35` and `jr-q36`, full marks require an explicit supported judgement.
