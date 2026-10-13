# Shared files changelog

## `data/knowledgeOrganisers/registry.ts`

- Added one import and one array entry for `year8RpeWhatHappenedToMoses`.
- Existing organiser imports and ordering were preserved.

## `components/knowledge-organisers/knowledgeOrganiserTheme.ts`

- Added RPE purple theme tokens and one `rpe` selector branch.
- Existing subject themes were not changed.

## `app/knowledge-organisers/year8/page.tsx`

- Added the available RPE subject card and route.
- Existing subject cards were preserved.

## `app/api/knowledge-organisers/mark/route.ts`

- Added one RPE-specific marking branch before the existing History fallback.
- Authentication, moderation, rate limiting, trusted registry lookup, schema validation, score recalculation, safe errors and all existing subject prompts were preserved.

No SQL, Supabase migration or npm dependency change is required.

