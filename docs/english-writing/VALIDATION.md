# Validation and remaining environment checks

## Checks performed on the supplied project

- Production build with Next.js 16.2.10, React 19.2.4 and the project's installed dependencies.
- TypeScript check across the project.
- ESLint on the new English Writing modules.
- 20 automated tests, using synthetic text and mocked API/DB responses. These cover feedback evidence, score bounds, practice-mode null marks, revision comparisons, independent mastery, draft version conflicts, account switching, unauthenticated requests, forged revision parents, cached/pending/limited requests, successful persistence and safe failure.

These tests do not call OpenAI and do not use children's writing. No dependency or package-lock change is needed.

## Not executed in this environment

- Real Supabase migration or RLS integration checks: the live database was not connected or modified.
- Real OpenAI marking or teacher calibration: no live API key was used.
- Interactive browser / screenshot checks: there was no installed browser executable; the attempted browser download returned an invalid/truncated archive. No desktop/mobile browser verification is claimed. Responsive CSS and accessible labels are implemented, and a manual checklist is included below.
- Windows PowerShell execution: the installer is supplied for the user's Windows project and was reviewed here, not run on Windows.

## Small manual acceptance check

Use a separate test learner, not Greta or Mathis, for the first run.

1. At desktop width and phone width, open the course; confirm four weeks and both starting assessments are readable without horizontal scrolling.
2. Finish a lesson's checks and micro practice, then open a different week; answers should not carry over.
3. Type a fictional draft, wait for account-save confirmation, reload and check recovery.
4. Open the same task in two tabs. Save in the first, then try a different edit in the second. The older tab must report a version conflict and keep its text.
5. Change accounts in another tab. The old writing page must redirect/reload; it must not save to the newly signed-in learner.
6. Submit a short practice piece once AI is configured. Check every highlighted quotation against the essay and check that no /40 mark appears.
7. Revise, add a reflection and resubmit. Check the previous targets are compared and that the original essay is still available.
8. Progress should show one independent response and one revision for that sequence.
9. Try a fresh task independently. Check that revisions alone do not label a skill secure across independent tasks.
10. As another learner, verify that the first learner's submissions cannot be read. As an explicitly linked guardian, verify the portfolio is read-only and accessible.
11. Complete a sustained AQA-style task. Check separate AO5 /24 and AO6 /16 estimates and compare with a teacher's judgement before treating scores as reliable trends.

Run the complete commands in `SETUP.md` after installing into the current project, because that project may contain newer unrelated changes.
