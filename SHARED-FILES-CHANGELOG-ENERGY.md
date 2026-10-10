# Shared Files Changelog — Energy

## `data/knowledgeOrganisers/registry.ts`

Minimal change only:

- Added the Chapter 6 import.
- Registered Chapter 6 after Electricity and Magnetism.

Preserved without alteration:

- History registrations and chapter sorting.
- Science Chapters 1–5.
- English Crime.
- `getKnowledgeOrganiserById` and `getKnowledgeOrganisers` lookup behaviour.

## Not modified

- AI marking route
- Shared Chapter, Quiz, Flashcard, Mind Map and interactive-question components
- Shared data types
- Science theme tokens
- Science homepage and Cross-Chapter route
- Authentication, Supabase, Maths and Spelling code

The existing dynamic registry architecture makes Chapter 6 automatically available to the Science homepage, trusted AI lookup and Cross-Chapter Quiz.
