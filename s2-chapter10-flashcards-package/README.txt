S2 Chapter 10 Flashcards — Polygons

Requires the installed Chapter 9 flashcards integration, Chapter 10 homepage
and S2Chapter10Geometry, plus your existing atomic Supabase flashcard storage.

Extract into E:\Projects\pw-learning-hub, then run from that project:
node s2-chapter10-flashcards-package/install.cjs
npm run build

Visit /maths/s2/chapter-10/flashcards

36 cards: 9 per section. Five SVG diagrams. Section selection, shuffled sessions,
existing grading, progress, Smart Review and cross-chapter registry integration.
Installer backs up changed files and stops on unsupported/conflicting versions.
Optional preflight: node s2-chapter10-flashcards-package/install.cjs --dry-run
Payloads use .txt to avoid duplicate compilation in the extracted package.
No SQL migration required. Existing storage code is preserved.

Validation: isolated strict TypeScript, installer repeat/conflict handling,
section filtering, reveal-before-grade, registry inclusion, original atomic
storage wrapper, pending event and retry with a mocked remote RPC, SVG inspection.
This is not a full Next.js production build or a live Supabase test.
After installing, sign in, grade a card and confirm progress saves on your site.
