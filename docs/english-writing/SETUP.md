# Year 8 English Writing — installation

This package adds two starting assessments, four complete weeks of teaching, four fresh-prompt tasks, two optional sustained AQA-style tasks, feedback, revision history and learner/guardian progress.

## 1. Install the files

Close `npm run dev`. Extract the update ZIP to a separate folder, for example:

`E:\Downloads\PW-Year8-English-Writing-Stage1-2026-10-19`

Open PowerShell and run the supplied installer:

```powershell
powershell -ExecutionPolicy Bypass -File "E:\Downloads\PW-Year8-English-Writing-Stage1-2026-10-19\Install-English-Writing.ps1" -ProjectPath "E:\Projects\pw-learning-hub"
```

The installer checks package hashes, backs up affected existing files outside the project, installs new files, and inserts an English Writing card into the current subjects page. It preserves other subject cards. If an existing writing file has different contents, the installer stops before copying; compare that file rather than forcing an overwrite.

No package dependencies are added. This was checked against the supplied Next.js 16.2.10 / React 19.2.4 project, with the latest family-quiz build fix applied to the validation checkout. The update ZIP does not contain or replace family-quiz or spelling files.

## 2. Create the new Supabase tables

In your existing Supabase project, open **SQL Editor → New query**. Copy the entire contents of:

`supabase/english_writing.sql`

Run it once. It is additive and can be rerun. It does not change existing spelling, KO or family-quiz tables.

The new tables are:

- `english_writing_work`: the latest draft and plan per account/task, with version conflict protection.
- `english_writing_submissions`: immutable submitted versions, feedback, model/rubric metadata and usage counts.
- `english_writing_lessons`: completed lesson checks and short practice.
- `english_writing_guardians`: explicit, administrator-created parent/learner sharing links.

RLS allows owners to read their own work; explicitly linked guardians can read submitted writing and lesson completion. Authenticated browsers cannot write grades or grant themselves access. Server routes validate the signed-in user and perform writes with the existing server-only service role key.

## 3. Configure server environment variables

Keep your existing values for:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=your-existing-value
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-existing-value
SUPABASE_SERVICE_ROLE_KEY=your-existing-server-only-value
OPENAI_API_KEY=your-existing-server-only-value
```

Add these **server-only** variables to `.env.local` and the corresponding Vercel environment:

```dotenv
OPENAI_WRITING_MODEL=gpt-6-astra
ENGLISH_WRITING_AI_READY=false
```

`OPENAI_WRITING_MODEL` is separate from the KO marking model. The default is `gpt-6-astra`. Confirm this model is available to your API project before testing. Do not put secret values in a `NEXT_PUBLIC_` variable, a ZIP, a screenshot or Git.

### Before enabling children's AI feedback

Greta and Mathis are currently under 13. OpenAI's under-18 API guidance says that personal data of children under 13 (or the applicable digital-consent age) should not be processed without first implementing **Zero Data Retention**. Check the API organisation/project's actual data controls and eligibility. A `store: false` request alone does **not** establish Zero Data Retention; simply setting an environment flag does not configure the account.

Official references:

- https://developers.openai.com/api/docs/guides/safety-checks/under-18-api-guidance
- https://developers.openai.com/api/docs/guides/your-data

After the required account configuration is in place, set:

```dotenv
ENGLISH_WRITING_AI_READY=true
```

Restart the development server or redeploy Vercel after changing environment variables. Until then, lessons and draft saving work; the interface explains that feedback is being set up and does not transmit writing to OpenAI.

The API sends task/rubric information, the essay, and (for revisions) the previous essay and feedback. It does not send the user's profile, email, account UUID, name or planning notes as separate fields. Essays themselves can still contain personal information, so use fictional situations and the account controls above.

## 4. Link a parent/guardian account (optional)

Individual progress works immediately. To see both learners from one adult account, use an existing adult Supabase Auth account with a `profiles` row, then add explicit links in SQL Editor. Do not use a learner account as the adult account.

Use `docs/english-writing/GUARDIAN-LINKS.sql`, replace the three email placeholders, and run it. It requires exactly one existing Auth account for each address. It creates no accounts, sends no invitations, and changes no learner ownership.

The guardian signs in with their own account, then opens **English Writing → Progress**. Linked learners are read-only there. A parent cannot submit an essay as another learner.

## 5. Run local checks

```powershell
cd E:\Projects\pw-learning-hub
npm run dev
```

Open http://localhost:3000/english-writing. Sign in with your separate test learner first.

1. Complete Week 1 quick checks and write the short practice. Complete the lesson.
2. Open the Week 1 writing task. Write a fictional response and save it.
3. Reload: verify that the draft returns.
4. When AI is configured, submit. Verify actual quotations, useful targets and absence of `/40` on this short task.
5. Start a revision, edit the text, and explain the change. Submit again.
6. Check the comparison with the previous target. Progress must count one independent response and one revision.
7. Open the optional AQA-style task: this mode can receive AO5 /24 and AO6 /16 advisory marks.
8. Check a second account cannot read or edit the test learner's writing. Check a linked adult can read it from Progress.

For automated checks:

```powershell
node --test tests/english-writing.test.cjs
npx tsc --noEmit
npm run build
```

## 6. Commit and deploy

Review `git status` first. Then stage only the new feature and navigation change:

```powershell
git add app/english-writing app/api/english-writing components/english-writing data/englishWriting lib/englishWriting supabase/english_writing.sql app/subjects/page.tsx tests/english-writing.test.cjs docs/english-writing
git commit -m "Add Year 8 English writing foundations and feedback"
git push
```

Use your existing Vercel deployment connection. Run the SQL on the Supabase project used by that deployment and set server environment variables for the correct environment. Begin with the test learner before Greta and Mathis.

## Usage and recovery

- Browser backups are scoped to the authenticated account and task. Cloud drafts use optimistic version checks, so two tabs cannot silently overwrite each other.
- A version conflict keeps the current local text. Copy it before reloading; the interface can also show an earlier device draft for recovery.
- Failed feedback leaves the draft in place. Successful feedback is stored and reused. The database serialises marking requests across server instances.
- There are at most 12 feedback attempts per learner in a rolling 24-hour period, including retries. Ordinary typing and draft saves do not call OpenAI.
- The timer is optional, pauses while the page is hidden, and does not force submission. It measures active in-page time, not a certified exam duration.
- The feature is a writing pathway. It does not cover the complete reading or English Literature GCSE courses.
- There are no real model scores or teacher-calibration results bundled. Perform the small live check above and compare a sample with a teacher before relying on numerical score trends.
