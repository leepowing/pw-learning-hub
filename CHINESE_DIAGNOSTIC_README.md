# GCSE Chinese Diagnostic v1 (pilot)

New route: `/chinese-gcse` (direct URL; navigation integration not included yet).

Includes 4 reading/vocabulary questions, 3 Cantonese listening questions, one sentence task and one short writing task. These are **original practice questions**, not an official Pearson Edexcel paper.

Uses existing `AZURE_SPEECH_KEY`, `AZURE_SPEECH_REGION`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Do not expose Azure key in NEXT_PUBLIC variables.

The audio endpoint requires a valid Supabase bearer session, restricts passage IDs to a fixed allowlist and rate-limits per user (best-effort per server instance). Audio is generated on demand and not saved to Supabase yet; therefore repeated plays may consume Azure quota. Check that zh-HK-HiuMaanNeural is available in your Speech resource.

This **pilot does not** yet have Supabase result persistence, AI grading, handwriting photo upload, 30-item character assessment, 3 longer reading passages, or complete 12-week curriculum. Browser localStorage is used for draft answers; avoid using the same browser profile for both students until server-side per-student saving is added.

To test: npm install; npm run build; open /chinese-gcse after logging in. Verify Azure audio on Vercel with real configured secrets.
