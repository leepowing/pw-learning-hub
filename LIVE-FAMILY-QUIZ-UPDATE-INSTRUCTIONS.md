# Live Family Quiz — Update Instructions

This update adds a live, family-hosted quiz mode to PW Learning Hub. The parent controls the room from one device, while each child answers the same question on their own signed-in iPad. Multiple-choice answers are marked immediately; written answers use the existing OpenAI API marking configuration.

## What is included

- Separate host and player interfaces
- Six-digit room codes
- Existing Knowledge Organiser question selection
- Optional AI question generation from KO content
- Live player and submission status through Supabase Realtime
- AI marking and individual feedback for written answers
- Host-only answer keys and room controls
- Final family score view

## Before installing

1. Make a normal Git commit or backup of the current project.
2. Confirm the project already has working Supabase authentication.
3. Confirm `OPENAI_API_KEY` is set in Vercel if AI generation or written-answer marking will be used.
4. Do not put the Supabase service-role key in any variable beginning with `NEXT_PUBLIC_`.

## Step 1 — Copy the update files

Extract the ZIP into the root of the project, for example:

```text
E:\Projects\pw-learning-hub
```

Allow Windows to merge folders and replace `app/subjects/page.tsx`. No Knowledge Organiser data file or registry file is replaced by this package.

## Step 2 — Create the database tables

1. Open the Supabase project.
2. Open **SQL Editor**.
3. Create a new query.
4. Copy all of `supabase/live_family_quiz.sql` into the editor.
5. Select **Run** once.

The script is designed to be safe to run again. It creates the five quiz tables, RLS policies, indexes and Realtime publication entries.

## Step 3 — Add the server-only Vercel variable

In Vercel, open **Project → Settings → Environment Variables** and add:

```env
SUPABASE_SERVICE_ROLE_KEY=your Supabase service_role key
```

Apply it to Production, Preview and Development if all three environments are used. Find the value in the Supabase project API settings. It is the secret `service_role` key, not the publishable/anon key.

Existing variables remain unchanged:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
OPENAI_API_KEY=...
OPENAI_GRADING_MODEL=gpt-6-luna
```

`OPENAI_GRADING_MODEL` is optional. The code defaults to `gpt-6-luna`.

## Step 4 — Test locally

From the project folder in a PowerShell terminal:

```powershell
npm install
npm run build
npm run dev
```

Open `http://localhost:3000/subjects`, select **Live Family Quiz**, and follow `LIVE-FAMILY-QUIZ-LOCAL-TESTING-CHECKLIST.md`.

## Step 5 — Commit and push

Only after the local build succeeds:

```powershell
git status
git add app/subjects/page.tsx app/family-quiz app/api/family-quiz lib/familyQuiz.ts lib/familyQuizClient.ts lib/familyQuizServer.ts supabase/live_family_quiz.sql LIVE-FAMILY-QUIZ-*.md
git commit -m "Add Live Family Quiz"
git push origin main
```

Vercel should then deploy automatically. If it does not, open the latest deployment and select **Redeploy** after confirming the new environment variable exists.

## Using the feature

### Parent / host

1. Sign in and open **Subjects → Live Family Quiz**.
2. Choose **Create room**.
3. Select a chapter, existing or AI-generated questions, question type and quantity.
4. Share the six-digit code.
5. Wait for both children to appear, then show Question 1.
6. Reveal results and feedback, then move to the next question.

### Child / player

1. Sign in on the iPad and open **Subjects → Live Family Quiz**.
2. Enter the six-digit code.
3. Answer the displayed question and submit.
4. Wait for the parent to reveal the result and advance the room.

## Important notes

- Every participant needs a separate signed-in PW Learning Hub account.
- The host and player screens are intentionally different.
- AI calls occur only when generating new questions or marking written answers. Existing multiple-choice questions do not call OpenAI.
- Supabase Realtime and database usage are separate from OpenAI API usage and remain subject to the limits of the selected Supabase plan.
