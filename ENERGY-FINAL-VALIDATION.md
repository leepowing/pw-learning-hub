# Energy — Automated Development Validation

## Content

- Sections: 8
- Required facts, processes, diagrams and equations: 52
- Key vocabulary: 24
- Knowledge points: 76
- Flashcards: 76
- Questions: 69
- Knowledge coverage: 76/76 (100%)
- Partially covered: 0
- Missing: 0
- Teacher questions: 0/0 (the user confirmed that no teacher PDF exists)

## Flashcards by section

| Section | Fact | Vocabulary | Diagram | Equation | Total |
|---|---:|---:|---:|---:|---:|
| Energy Conservation and Transfer | 2 | 1 | 0 | 1 | 4 |
| Energy and Temperature | 7 | 4 | 0 | 0 | 11 |
| Conduction | 3 | 2 | 1 | 0 | 6 |
| Convection | 4 | 2 | 1 | 0 | 7 |
| Infrared Radiation | 4 | 4 | 0 | 0 | 8 |
| Power, Energy Bills, Work and Machines | 7 | 5 | 0 | 3 | 15 |
| Energy Resources and Thermal Power Stations | 9 | 5 | 1 | 0 | 15 |
| Chemical Energy in Food and Fuels | 9 | 1 | 0 | 0 | 10 |

Duplicate IDs, invalid section IDs, generic fronts, duplicate fronts, empty fronts, empty backs and missing source mappings: 0.

## Quiz types

- Multiple Choice: 26
- Standard Short: 26
- Long: 6
- Interactive: 11
  - Matching: 3
  - Fill blanks: 2
  - Ordering: 2
  - Classification: 2
  - Equation completion: 2

## Source controls

- Expected / received / readable source files: 1 / 1 / 1
- Source pages/images checked: 1 / 1
- Teacher tasks / independently answerable sub-parts: 0
- Manifest implemented / blocked / missing: 0 / 0 / 0
- Wording mismatches for teacher questions: 0
- Missing teacher context / assets / data: 0
- User-approved source-wording decisions retained: 4 / 4

## Automated technical validation

- Chapter 6 validator: passed
- Health and Lifestyle regression validator: passed
- Periodic Table regression validator: passed
- Separation Techniques regression validator: passed
- Electricity and Magnetism regression validator: passed
- English Crime regression validator: passed
- TypeScript: passed (`npx tsc --noEmit`)
- Targeted ESLint for every Chapter 6 file and the modified registry: passed with 0 errors and 0 warnings
- Production build: passed; 180 static pages generated using command-scoped, non-secret Supabase placeholders
- Route smoke tests: Science index, Chapter 6, Science revision quiz, History regression and English regression routes all returned HTTP 200
- Secret scan of the Chapter 6 deliverables: passed; no API key, Supabase credential or workspace path is present
- Shared files: only `data/knowledgeOrganisers/registry.ts` changed, with one import and one organiser-array entry
- Shared AI route, components, types, theme and navigation pages: unchanged

The complete repository-wide `npm run lint` still reports 48 errors and 77 warnings in pre-existing, unrelated Maths, Spelling and validation files. Those files are outside this Chapter 6 change and are not included in the package. The targeted Chapter 6 lint gate is clean.

## Cross-Chapter regression

- Registered Science chapters: 6
- Raw questions: 461
- Multiple Choice: 160
- Standard Short: 185
- Long: 36
- Interactive: 80
- Duplicate question IDs: 0
- Duplicate Science flashcard IDs: 0
- Chapter 6 flashcard fronts that duplicate an earlier Science card: 0
- Year / subject isolation: passed by registry filter and validator

## Manual verification status

The first, middle and last source mappings in every section were checked in the coverage data. Automated responsive structure and route checks passed. Final desktop, laptop, iPad and mobile interaction confirmation, including live AI marking with the user's authenticated environment, remains on the localhost checklist.

## Completion status

The automated development package is ready. Final completion remains pending the user's localhost visual and interaction checks, as required by the development instructions.
