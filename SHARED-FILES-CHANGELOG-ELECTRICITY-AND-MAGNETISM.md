# Shared Files Changelog — Electricity and Magnetism

## `data/knowledgeOrganisers/registry.ts`

Minimal change only:

- Added the Chapter 5 import.
- Registered Chapter 5 after Separation Techniques.

Preserved without alteration:

- History registrations and chapter sorting.
- Science Chapters 1–4.
- English Crime.
- `getKnowledgeOrganiserById` and `getKnowledgeOrganisers` lookup behaviour.

## Not modified

- AI marking route
- Shared Chapter, Quiz, Flashcard, Mind Map and interactive-question components
- Shared data types
- Science theme tokens
- Science homepage and Cross-Chapter route
- Authentication, Supabase, Maths and Spelling code

The existing dynamic registry architecture means Chapter 5 is automatically available to the Science homepage, trusted AI lookup and Cross-Chapter Quiz.
