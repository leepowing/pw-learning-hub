# Live Family Quiz — Local Testing Checklist

Use two different browsers, browser profiles or devices so that the host and player are signed in as different users.

## Setup

- [ ] `supabase/live_family_quiz.sql` completed without an error
- [ ] `SUPABASE_SERVICE_ROLE_KEY` exists in `.env.local` for local testing
- [ ] Existing Supabase public URL and publishable key are present
- [ ] `OPENAI_API_KEY` is present for AI generation and written marking
- [ ] `npm run build` succeeds

Example `.env.local` entry:

```env
SUPABASE_SERVICE_ROLE_KEY=your secret service_role key
```

Never commit `.env.local`.

## Existing question flow

- [ ] Host opens `/family-quiz/host`
- [ ] Current KO chapters appear in the chapter selector
- [ ] Host creates a room from existing KO questions
- [ ] A six-digit room code appears
- [ ] Player enters the code on `/family-quiz`
- [ ] Player appears on the host screen
- [ ] Question 1 appears on both screens after the host starts
- [ ] Player submits one answer only
- [ ] Host sees the submitted status and response
- [ ] Player does not see the answer guide before reveal
- [ ] Reveal shows the player result
- [ ] Next question updates both devices automatically
- [ ] Final scores appear on the host screen

## AI flow

- [ ] Host creates 3 AI-generated questions from one chapter
- [ ] Generated questions use only that KO content
- [ ] Multiple-choice questions contain four sensible choices
- [ ] A written response receives marks and brief feedback
- [ ] If OpenAI is unavailable, the written answer shows `Review` rather than being lost

## Access checks

- [ ] A player cannot open another host's answer keys
- [ ] A player cannot use the host controls
- [ ] An unsigned user is returned to the login page
- [ ] A finished room code cannot be joined

## Realtime troubleshooting

If players do not update automatically:

1. Confirm the SQL script was run completely.
2. In Supabase, check that `family_quiz_sessions`, `family_quiz_participants` and `family_quiz_answers` are enabled in the `supabase_realtime` publication.
3. Refresh both devices once.
4. Check the browser console and Vercel function logs.
