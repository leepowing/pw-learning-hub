# Live Family Quiz — Package Manifest

## Modified existing file

- `app/subjects/page.tsx` — adds the Live Family Quiz subject card

## New app pages

- `app/family-quiz/page.tsx`
- `app/family-quiz/host/page.tsx`
- `app/family-quiz/host/[sessionId]/page.tsx`
- `app/family-quiz/play/[sessionId]/page.tsx`

## New API routes

- `app/api/family-quiz/catalog/route.ts`
- `app/api/family-quiz/generate/route.ts`
- `app/api/family-quiz/sessions/route.ts`
- `app/api/family-quiz/answers/route.ts`

## New shared code and database setup

- `lib/familyQuiz.ts`
- `lib/familyQuizClient.ts`
- `lib/familyQuizServer.ts`
- `supabase/live_family_quiz.sql`

## Documentation

- `LIVE-FAMILY-QUIZ-UPDATE-INSTRUCTIONS.md`
- `LIVE-FAMILY-QUIZ-LOCAL-TESTING-CHECKLIST.md`
- `LIVE-FAMILY-QUIZ-SECURITY-AND-PRIVACY.md`
- `LIVE-FAMILY-QUIZ-PACKAGE-MANIFEST.md`
- `LIVE-FAMILY-QUIZ-FINAL-VALIDATION.md`

This package intentionally contains no `.env` file, secret, `node_modules`, `.next`, user account data or Knowledge Organiser registry/data file.
