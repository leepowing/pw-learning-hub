# Live Family Quiz — Security and Privacy Notes

## Access model

- All quiz users must be authenticated with Supabase.
- A participant may join only as their own authenticated user ID.
- Only the session creator may update the room status or move to another question.
- Answer keys are stored separately from public question rows.
- Row Level Security allows answer keys to be read only by the room host.
- A player can read only their own submitted answers; the host can read answers for the hosted room.
- Server-only inserts and AI marking use `SUPABASE_SERVICE_ROLE_KEY`.

## Secret handling

- Never name the service-role variable `NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY`.
- Never paste the service-role key into client components, screenshots, Git commits or the SQL file.
- Keep `OPENAI_API_KEY` server-side as it is now.
- If either secret may have been exposed, rotate it in the relevant provider dashboard and update Vercel immediately.

## Children's data

The database stores the display name, submitted answer, score and feedback. Use only the child's first name or existing profile display name. Do not include surnames or other personal information in quiz answers.

Completed rooms remain in Supabase until deleted. A parent or administrator can remove a room and all related questions, answers and participants with:

```sql
delete from public.family_quiz_sessions
where id = 'ROOM_UUID_HERE';
```

Related rows are deleted automatically through database cascade rules. Establish a suitable deletion schedule before wider use outside the family.

## AI behaviour

- AI-generated questions are grounded in the selected KO data sent by the server.
- Written answers are sent to OpenAI for marking only after the child submits.
- The code requests `store: false` for Responses API calls.
- AI marking can be imperfect. The host screen shows the answer and score so the parent can spot-check important results.
