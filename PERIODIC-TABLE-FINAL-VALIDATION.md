# The Periodic Table — Final Validation

## Content and source accounting

- Expected/received/readable teaching sources: 1/1/1
- Knowledge Organiser images visually checked: 1/1
- Teacher PDFs: 0 (user confirmed)
- Teacher tasks/sub-parts: 0
- Wording mismatches, missing context/assets/data, exclusions and blockers: 0
- Printed source heading retained for audit: `C2 Chapter 1`
- User-approved website placement: Year 8 Science Chapter 3

## Chapter output

- Sections: 7
- Knowledge points: 98 (80 facts + 18 vocabulary)
- Core element recall records: 20 (the complete 74-element table remains available as reference data)
- Flashcards: 98
- Multiple Choice: 28
- Standard Short Questions: 24
- Long Questions: 5
- Interactive/Structured: 15
  - Matching: 5
  - Fill in the Blanks: 2
  - Equation Completion: 1
  - Ordering: 3
  - Classification: 4
- Total questions: 72
- Knowledge Coverage: 98/98 (100%)
- Teacher Question Coverage: 0/0 (N/A)

## Automated checks

- `node scripts/generate-periodic-table-coverage.mjs`: PASS
- `node scripts/validate-periodic-table.mjs`: PASS
- `npx tsc --noEmit`: PASS
- ESLint on all added/modified TypeScript and TSX files: PASS
- `npm run build`: PASS with non-secret placeholder environment values in the test workspace
- Static generation: PASS, including `/knowledge-organisers/year8/science/autumn/the-periodic-table`
- Question-front flashcard validation: PASS; all 98 cards ask a specific question and no `Recall point` wording remains
- Clean uploaded reference-table rendering: PASS for period, group and group-order questions in both chapter and cross-chapter quiz views
- Cross-chapter question ID uniqueness: PASS (333 raw questions across Science Chapters 1–4)
- Science green theme and History orange regression source checks: PASS
- `npm run dev` runtime smoke launch: not available in this container because Node's network-interface lookup returned `uv_interface_addresses` before the server started; the production build itself completed successfully
- Live authenticated AI calls: not run in this workspace because no authenticated Supabase session or production OpenAI key was supplied; the existing trusted AI route was not modified

## Manual checks still required before deployment

The browser interaction checklist in `PERIODIC-TABLE-UPDATE-INSTRUCTIONS.md` must be completed in the user's localhost project before commit, push or deployment. In particular, verify all-taught section persistence, each deterministic interaction, one authenticated AI-marked Short/Long answer, responsive layout and History/Science colour regression.
