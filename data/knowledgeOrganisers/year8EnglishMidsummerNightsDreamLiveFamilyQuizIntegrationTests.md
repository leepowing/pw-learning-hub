# Live Family Quiz Integration Tests

## Catalog and scope

- English Chapter 2 appears through the shared registry with six sections and 79 questions.
- Greta and Mathis retain separate `taught_section_ids` for `year8-english-a-midsummer-nights-dream`.
- Single Subject → English selects only that student’s taught English sections.
- Cross-subject mode can include the new chapter without altering other subjects.

## Question modes

- Random Selection uses only questions whose full `sectionIds` set is selected.
- Choose Exact Questions previews prompt, type, marks and MC options.
- Generate with AI receives only selected KO section facts and cannot require unprovided quotations.
- Weak-topic Revision can reuse stable `eng-amnd-q001`–`eng-amnd-q079` source IDs after marked attempts exist.

## Realtime regression

- Host can create a room, both student devices can join, answers submit once, Host review displays trusted marks and Next Question advances both devices.
- Existing Host preview, subject scope, section auto-detect, exact selection and weak-topic behaviour remain unchanged.
- English interactive question count is zero.

