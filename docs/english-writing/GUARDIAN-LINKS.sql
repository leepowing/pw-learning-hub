-- Run in Supabase SQL Editor only after replacing the placeholders.
-- Links an existing adult account to existing learners; does not create or invite users.
do $$
declare
 parent_email text := 'REPLACE_WITH_ADULT_EMAIL';
 first_email text := 'REPLACE_WITH_GRETA_EMAIL';
 second_email text := 'REPLACE_WITH_MATHIS_EMAIL';
 parent_id uuid;
 first_id uuid;
 second_id uuid;
begin
 if parent_email like 'REPLACE_%' or first_email like 'REPLACE_%' or second_email like 'REPLACE_%' then
  raise exception 'Replace all three email placeholders first.';
 end if;
 select id into strict parent_id from auth.users where lower(email)=lower(parent_email);
 select id into strict first_id from auth.users where lower(email)=lower(first_email);
 select id into strict second_id from auth.users where lower(email)=lower(second_email);
 if parent_id = first_id or parent_id = second_id or first_id = second_id then
  raise exception 'Use one adult account and two different learner accounts.';
 end if;
 if not exists(select 1 from public.profiles where id=parent_id) then
  raise exception 'The adult account needs its own profiles row before signing in.';
 end if;
 insert into public.english_writing_guardians(guardian_user_id,learner_user_id)
  values(parent_id,first_id),(parent_id,second_id) on conflict do nothing;
end $$;
