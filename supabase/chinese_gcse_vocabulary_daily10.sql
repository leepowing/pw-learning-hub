-- PW Learning Hub: Daily 10, persistent non-repeating rounds.
-- Run this entire file in Supabase SQL Editor BEFORE copying the updated page.
-- Safe to rerun. Existing vocabulary scores are retained.
begin;

-- GCSE Chinese official vocabulary flashcard progress
-- Safe to run more than once in Supabase SQL Editor.

create table if not exists public.chinese_gcse_vocabulary_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  card_id text not null,
  correct_count integer not null default 0 check (correct_count >= 0),
  incorrect_count integer not null default 0 check (incorrect_count >= 0),
  last_result boolean,
  last_seen_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, card_id)
);

create index if not exists chinese_gcse_vocabulary_progress_user_updated_idx
  on public.chinese_gcse_vocabulary_progress (user_id, updated_at desc);

alter table public.chinese_gcse_vocabulary_progress enable row level security;

drop policy if exists "Vocabulary progress select own" on public.chinese_gcse_vocabulary_progress;
create policy "Vocabulary progress select own"
  on public.chinese_gcse_vocabulary_progress
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Vocabulary progress insert own" on public.chinese_gcse_vocabulary_progress;
create policy "Vocabulary progress insert own"
  on public.chinese_gcse_vocabulary_progress
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Vocabulary progress update own" on public.chinese_gcse_vocabulary_progress;
create policy "Vocabulary progress update own"
  on public.chinese_gcse_vocabulary_progress
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

revoke all on public.chinese_gcse_vocabulary_progress from anon;
grant select, insert, update on public.chinese_gcse_vocabulary_progress to authenticated;


create table if not exists public.chinese_gcse_vocabulary_catalog (
  card_id text primary key,
  section text not null,
  category text not null,
  tier text not null check (tier in ('core', 'foundation', 'higher')),
  active boolean not null default true
);

update public.chinese_gcse_vocabulary_catalog set active = false;
insert into public.chinese_gcse_vocabulary_catalog (card_id, section, category, tier, active) values
('edexcel-0001','high-frequency','common-verbs','core',true),
('edexcel-0002','high-frequency','common-verbs','core',true),
('edexcel-0003','high-frequency','common-verbs','core',true),
('edexcel-0004','high-frequency','common-verbs','core',true),
('edexcel-0005','high-frequency','common-verbs','core',true),
('edexcel-0006','high-frequency','common-verbs','core',true),
('edexcel-0007','high-frequency','common-verbs','core',true),
('edexcel-0008','high-frequency','common-verbs','core',true),
('edexcel-0009','high-frequency','common-verbs','core',true),
('edexcel-0010','high-frequency','common-verbs','core',true),
('edexcel-0011','high-frequency','common-verbs','core',true),
('edexcel-0012','high-frequency','common-verbs','core',true),
('edexcel-0013','high-frequency','common-verbs','core',true),
('edexcel-0014','high-frequency','common-verbs','core',true),
('edexcel-0015','high-frequency','common-verbs','core',true),
('edexcel-0016','high-frequency','common-verbs','core',true),
('edexcel-0017','high-frequency','common-verbs','core',true),
('edexcel-0018','high-frequency','common-verbs','core',true),
('edexcel-0019','high-frequency','common-verbs','core',true),
('edexcel-0020','high-frequency','common-verbs','core',true),
('edexcel-0021','high-frequency','common-verbs','core',true),
('edexcel-0022','high-frequency','common-verbs','core',true),
('edexcel-0023','high-frequency','common-verbs','core',true),
('edexcel-0024','high-frequency','common-verbs','core',true),
('edexcel-0025','high-frequency','common-verbs','core',true),
('edexcel-0026','high-frequency','common-verbs','core',true),
('edexcel-0027','high-frequency','common-verbs','core',true),
('edexcel-0028','high-frequency','common-verbs','core',true),
('edexcel-0029','high-frequency','common-verbs','core',true),
('edexcel-0030','high-frequency','common-verbs','core',true),
('edexcel-0031','high-frequency','common-verbs','core',true),
('edexcel-0032','high-frequency','common-verbs','core',true),
('edexcel-0033','high-frequency','common-verbs','core',true),
('edexcel-0034','high-frequency','common-verbs','core',true),
('edexcel-0035','high-frequency','common-verbs','core',true),
('edexcel-0036','high-frequency','common-verbs','core',true),
('edexcel-0037','high-frequency','common-verbs','core',true),
('edexcel-0038','high-frequency','common-verbs','core',true),
('edexcel-0039','high-frequency','common-verbs','core',true),
('edexcel-0040','high-frequency','common-verbs','core',true),
('edexcel-0041','high-frequency','common-verbs','core',true),
('edexcel-0042','high-frequency','common-verbs','core',true),
('edexcel-0043','high-frequency','common-verbs','core',true),
('edexcel-0044','high-frequency','common-verbs','core',true),
('edexcel-0045','high-frequency','common-verbs','core',true),
('edexcel-0046','high-frequency','common-verbs','core',true),
('edexcel-0047','high-frequency','common-verbs','core',true),
('edexcel-0048','high-frequency','common-verbs','core',true),
('edexcel-0049','high-frequency','common-verbs','core',true),
('edexcel-0050','high-frequency','common-verbs','core',true),
('edexcel-0051','high-frequency','common-verbs','core',true),
('edexcel-0052','high-frequency','common-verbs','core',true),
('edexcel-0053','high-frequency','common-verbs','core',true),
('edexcel-0054','high-frequency','common-verbs','core',true),
('edexcel-0055','high-frequency','common-verbs','core',true),
('edexcel-0056','high-frequency','common-verbs','core',true),
('edexcel-0057','high-frequency','common-verbs','core',true),
('edexcel-0058','high-frequency','common-verbs','core',true),
('edexcel-0059','high-frequency','common-verbs','core',true),
('edexcel-0060','high-frequency','common-verbs','core',true),
('edexcel-0061','high-frequency','common-verbs','core',true),
('edexcel-0062','high-frequency','common-verbs','core',true),
('edexcel-0063','high-frequency','common-verbs','core',true),
('edexcel-0064','high-frequency','common-verbs','core',true),
('edexcel-0065','high-frequency','common-verbs','core',true),
('edexcel-0066','high-frequency','common-verbs','core',true),
('edexcel-0067','high-frequency','common-verbs','core',true),
('edexcel-0068','high-frequency','common-verbs','core',true),
('edexcel-0069','high-frequency','common-verbs','core',true),
('edexcel-0070','high-frequency','common-verbs','core',true),
('edexcel-0071','high-frequency','common-verbs','core',true),
('edexcel-0072','high-frequency','common-verbs','core',true),
('edexcel-0073','high-frequency','common-verbs','core',true),
('edexcel-0074','high-frequency','common-adjectives','core',true),
('edexcel-0075','high-frequency','common-adjectives','core',true),
('edexcel-0076','high-frequency','common-adjectives','core',true),
('edexcel-0077','high-frequency','common-adjectives','core',true),
('edexcel-0078','high-frequency','common-adjectives','core',true),
('edexcel-0079','high-frequency','common-adjectives','core',true),
('edexcel-0080','high-frequency','common-adjectives','core',true),
('edexcel-0081','high-frequency','common-adjectives','core',true),
('edexcel-0082','high-frequency','common-adjectives','core',true),
('edexcel-0083','high-frequency','common-adjectives','core',true),
('edexcel-0084','high-frequency','common-adjectives','core',true),
('edexcel-0085','high-frequency','common-adjectives','core',true),
('edexcel-0086','high-frequency','common-adjectives','core',true),
('edexcel-0087','high-frequency','common-adjectives','core',true),
('edexcel-0088','high-frequency','common-adjectives','core',true),
('edexcel-0089','high-frequency','common-adjectives','core',true),
('edexcel-0090','high-frequency','common-adjectives','core',true),
('edexcel-0091','high-frequency','common-adjectives','core',true),
('edexcel-0092','high-frequency','common-adjectives','core',true),
('edexcel-0093','high-frequency','common-adjectives','core',true),
('edexcel-0094','high-frequency','common-adjectives','core',true),
('edexcel-0095','high-frequency','common-adjectives','core',true),
('edexcel-0096','high-frequency','common-adjectives','core',true),
('edexcel-0097','high-frequency','common-adjectives','core',true),
('edexcel-0098','high-frequency','common-adjectives','core',true),
('edexcel-0099','high-frequency','common-adjectives','core',true),
('edexcel-0100','high-frequency','common-adjectives','core',true),
('edexcel-0101','high-frequency','common-adjectives','core',true),
('edexcel-0102','high-frequency','common-adjectives','core',true),
('edexcel-0103','high-frequency','common-adjectives','core',true),
('edexcel-0104','high-frequency','common-adjectives','core',true),
('edexcel-0105','high-frequency','common-adjectives','core',true),
('edexcel-0106','high-frequency','common-adjectives','core',true),
('edexcel-0107','high-frequency','common-adjectives','core',true),
('edexcel-0108','high-frequency','common-adjectives','core',true),
('edexcel-0109','high-frequency','common-adjectives','core',true),
('edexcel-0110','high-frequency','common-adjectives','core',true),
('edexcel-0111','high-frequency','common-adjectives','core',true),
('edexcel-0112','high-frequency','common-adjectives','core',true),
('edexcel-0113','high-frequency','common-adjectives','core',true),
('edexcel-0114','high-frequency','common-adjectives','core',true),
('edexcel-0115','high-frequency','common-adjectives','core',true),
('edexcel-0116','high-frequency','common-adverbs','core',true),
('edexcel-0117','high-frequency','common-adverbs','core',true),
('edexcel-0118','high-frequency','common-adverbs','core',true),
('edexcel-0119','high-frequency','common-adverbs','core',true),
('edexcel-0120','high-frequency','common-adverbs','core',true),
('edexcel-0121','high-frequency','common-adverbs','core',true),
('edexcel-0122','high-frequency','common-adverbs','core',true),
('edexcel-0123','high-frequency','common-adverbs','core',true),
('edexcel-0124','high-frequency','common-adverbs','core',true),
('edexcel-0125','high-frequency','common-adverbs','core',true),
('edexcel-0126','high-frequency','common-adverbs','core',true),
('edexcel-0127','high-frequency','common-adverbs','core',true),
('edexcel-0128','high-frequency','common-adverbs','core',true),
('edexcel-0129','high-frequency','common-adverbs','core',true),
('edexcel-0130','high-frequency','common-adverbs','core',true),
('edexcel-0131','high-frequency','common-adverbs','core',true),
('edexcel-0132','high-frequency','common-adverbs','core',true),
('edexcel-0133','high-frequency','common-adverbs','core',true),
('edexcel-0134','high-frequency','common-adverbs','core',true),
('edexcel-0135','high-frequency','common-adverbs','core',true),
('edexcel-0136','high-frequency','common-adverbs','core',true),
('edexcel-0137','high-frequency','common-adverbs','core',true),
('edexcel-0138','high-frequency','colours','core',true),
('edexcel-0139','high-frequency','colours','core',true),
('edexcel-0140','high-frequency','colours','core',true),
('edexcel-0141','high-frequency','colours','core',true),
('edexcel-0142','high-frequency','colours','core',true),
('edexcel-0143','high-frequency','colours','core',true),
('edexcel-0144','high-frequency','colours','core',true),
('edexcel-0145','high-frequency','colours','core',true),
('edexcel-0146','high-frequency','numbers','core',true),
('edexcel-0147','high-frequency','numbers','core',true),
('edexcel-0148','high-frequency','numbers','core',true),
('edexcel-0149','high-frequency','numbers','core',true),
('edexcel-0150','high-frequency','numbers','core',true),
('edexcel-0151','high-frequency','numbers','core',true),
('edexcel-0152','high-frequency','numbers','core',true),
('edexcel-0153','high-frequency','quantities-measures','core',true),
('edexcel-0154','high-frequency','quantities-measures','core',true),
('edexcel-0155','high-frequency','quantities-measures','core',true),
('edexcel-0156','high-frequency','quantities-measures','core',true),
('edexcel-0157','high-frequency','quantities-measures','core',true),
('edexcel-0158','high-frequency','quantities-measures','core',true),
('edexcel-0159','high-frequency','quantities-measures','core',true),
('edexcel-0160','high-frequency','quantities-measures','core',true),
('edexcel-0161','high-frequency','quantities-measures','core',true),
('edexcel-0162','high-frequency','quantities-measures','core',true),
('edexcel-0163','high-frequency','quantities-measures','core',true),
('edexcel-0164','high-frequency','quantities-measures','core',true),
('edexcel-0165','high-frequency','quantities-measures','core',true),
('edexcel-0166','high-frequency','quantities-measures','core',true),
('edexcel-0167','high-frequency','quantities-measures','core',true),
('edexcel-0168','high-frequency','time-expressions','core',true),
('edexcel-0169','high-frequency','time-expressions','core',true),
('edexcel-0170','high-frequency','time-expressions','core',true),
('edexcel-0171','high-frequency','time-expressions','core',true),
('edexcel-0172','high-frequency','time-expressions','core',true),
('edexcel-0173','high-frequency','time-expressions','core',true),
('edexcel-0174','high-frequency','time-expressions','core',true),
('edexcel-0175','high-frequency','time-expressions','core',true),
('edexcel-0176','high-frequency','time-expressions','core',true),
('edexcel-0177','high-frequency','time-expressions','core',true),
('edexcel-0178','high-frequency','time-expressions','core',true),
('edexcel-0179','high-frequency','time-expressions','core',true),
('edexcel-0180','high-frequency','time-expressions','core',true),
('edexcel-0181','high-frequency','time-expressions','core',true),
('edexcel-0182','high-frequency','time-expressions','core',true),
('edexcel-0183','high-frequency','time-expressions','core',true),
('edexcel-0184','high-frequency','time-expressions','core',true),
('edexcel-0185','high-frequency','time-expressions','core',true),
('edexcel-0186','high-frequency','time-expressions','core',true),
('edexcel-0187','high-frequency','time-expressions','core',true),
('edexcel-0188','high-frequency','time-expressions','core',true),
('edexcel-0189','high-frequency','time-expressions','core',true),
('edexcel-0190','high-frequency','time-expressions','core',true),
('edexcel-0191','high-frequency','time-expressions','core',true),
('edexcel-0192','high-frequency','days-of-week','core',true),
('edexcel-0193','high-frequency','days-of-week','core',true),
('edexcel-0194','high-frequency','days-of-week','core',true),
('edexcel-0195','high-frequency','days-of-week','core',true),
('edexcel-0196','high-frequency','days-of-week','core',true),
('edexcel-0197','high-frequency','days-of-week','core',true),
('edexcel-0198','high-frequency','days-of-week','core',true),
('edexcel-0199','high-frequency','months-seasons','core',true),
('edexcel-0200','high-frequency','months-seasons','core',true),
('edexcel-0201','high-frequency','months-seasons','core',true),
('edexcel-0202','high-frequency','months-seasons','core',true),
('edexcel-0203','high-frequency','months-seasons','core',true),
('edexcel-0204','high-frequency','months-seasons','core',true),
('edexcel-0205','high-frequency','months-seasons','core',true),
('edexcel-0206','high-frequency','months-seasons','core',true),
('edexcel-0207','high-frequency','months-seasons','core',true),
('edexcel-0208','high-frequency','months-seasons','core',true),
('edexcel-0209','high-frequency','months-seasons','core',true),
('edexcel-0210','high-frequency','months-seasons','core',true),
('edexcel-0211','high-frequency','months-seasons','core',true),
('edexcel-0212','high-frequency','months-seasons','core',true),
('edexcel-0213','high-frequency','months-seasons','core',true),
('edexcel-0214','high-frequency','months-seasons','core',true),
('edexcel-0215','high-frequency','question-words','core',true),
('edexcel-0216','high-frequency','question-words','core',true),
('edexcel-0217','high-frequency','question-words','core',true),
('edexcel-0218','high-frequency','question-words','core',true),
('edexcel-0219','high-frequency','question-words','core',true),
('edexcel-0220','high-frequency','question-words','core',true),
('edexcel-0221','high-frequency','question-words','core',true),
('edexcel-0222','high-frequency','question-words','core',true),
('edexcel-0223','high-frequency','question-words','core',true),
('edexcel-0224','high-frequency','other-high-frequency','core',true),
('edexcel-0225','high-frequency','other-high-frequency','core',true),
('edexcel-0226','high-frequency','other-high-frequency','core',true),
('edexcel-0227','high-frequency','other-high-frequency','core',true),
('edexcel-0228','high-frequency','other-high-frequency','core',true),
('edexcel-0229','high-frequency','other-high-frequency','core',true),
('edexcel-0230','high-frequency','other-high-frequency','core',true),
('edexcel-0231','high-frequency','other-high-frequency','core',true),
('edexcel-0232','high-frequency','other-high-frequency','core',true),
('edexcel-0233','high-frequency','other-high-frequency','core',true),
('edexcel-0234','high-frequency','other-high-frequency','core',true),
('edexcel-0235','high-frequency','other-high-frequency','core',true),
('edexcel-0236','high-frequency','other-high-frequency','core',true),
('edexcel-0237','high-frequency','other-high-frequency','core',true),
('edexcel-0238','high-frequency','other-high-frequency','core',true),
('edexcel-0239','high-frequency','countries-languages','foundation',true),
('edexcel-0240','high-frequency','countries-languages','foundation',true),
('edexcel-0241','high-frequency','countries-languages','foundation',true),
('edexcel-0242','high-frequency','countries-languages','foundation',true),
('edexcel-0243','high-frequency','countries-languages','foundation',true),
('edexcel-0244','high-frequency','countries-languages','foundation',true),
('edexcel-0245','high-frequency','countries-languages','foundation',true),
('edexcel-0246','high-frequency','countries-languages','foundation',true),
('edexcel-0247','high-frequency','countries-languages','foundation',true),
('edexcel-0248','high-frequency','countries-languages','foundation',true),
('edexcel-0249','high-frequency','countries-languages','foundation',true),
('edexcel-0250','high-frequency','countries-languages','foundation',true),
('edexcel-0251','high-frequency','countries-languages','foundation',true),
('edexcel-0252','high-frequency','countries-languages','foundation',true),
('edexcel-0253','high-frequency','countries-languages','foundation',true),
('edexcel-0254','high-frequency','countries-languages','foundation',true),
('edexcel-0255','high-frequency','countries-languages','foundation',true),
('edexcel-0256','high-frequency','countries-languages','foundation',true),
('edexcel-0257','high-frequency','countries-languages','foundation',true),
('edexcel-0258','high-frequency','countries-languages','foundation',true),
('edexcel-0259','high-frequency','countries-languages','foundation',true),
('edexcel-0260','high-frequency','countries-languages','higher',true),
('edexcel-0261','high-frequency','countries-languages','higher',true),
('edexcel-0262','high-frequency','countries-languages','higher',true),
('edexcel-0263','high-frequency','countries-languages','higher',true),
('edexcel-0264','high-frequency','countries-languages','higher',true),
('edexcel-0265','high-frequency','countries-languages','higher',true),
('edexcel-0266','high-frequency','social-conventions','core',true),
('edexcel-0267','high-frequency','social-conventions','core',true),
('edexcel-0268','high-frequency','social-conventions','core',true),
('edexcel-0269','high-frequency','social-conventions','core',true),
('edexcel-0270','high-frequency','social-conventions','core',true),
('edexcel-0271','high-frequency','social-conventions','core',true),
('edexcel-0272','high-frequency','social-conventions','core',true),
('edexcel-0273','high-frequency','other-useful-expressions','core',true),
('edexcel-0274','high-frequency','other-useful-expressions','core',true),
('edexcel-0275','high-frequency','other-useful-expressions','core',true),
('edexcel-0276','high-frequency','prepositions','core',true),
('edexcel-0277','high-frequency','prepositions','core',true),
('edexcel-0278','high-frequency','prepositions','core',true),
('edexcel-0279','high-frequency','prepositions','core',true),
('edexcel-0280','high-frequency','prepositions','core',true),
('edexcel-0281','high-frequency','prepositions','core',true),
('edexcel-0282','high-frequency','prepositions','core',true),
('edexcel-0283','high-frequency','prepositions','core',true),
('edexcel-0284','high-frequency','prepositions','core',true),
('edexcel-0285','high-frequency','prepositions','core',true),
('edexcel-0286','high-frequency','prepositions','core',true),
('edexcel-0287','high-frequency','dialogue-messages','core',true),
('edexcel-0288','high-frequency','dialogue-messages','core',true),
('edexcel-0289','high-frequency','dialogue-messages','core',true),
('edexcel-0290','high-frequency','dialogue-messages','core',true),
('edexcel-0291','high-frequency','dialogue-messages','core',true),
('edexcel-0292','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0293','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0294','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0295','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0296','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0297','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0298','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0299','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0300','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0301','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0302','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0303','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0304','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0305','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0306','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0307','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0308','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0309','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0310','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0311','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0312','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0313','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0314','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0315','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0316','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0317','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0318','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0319','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0320','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0321','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0322','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0323','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0324','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0325','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0326','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0327','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0328','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0329','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0330','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0331','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0332','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0333','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0334','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0335','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0336','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0337','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0338','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0339','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0340','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0341','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0342','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0343','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0344','topic-specific','identity-daily-life-food','foundation',true),
('edexcel-0345','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0346','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0347','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0348','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0349','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0350','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0351','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0352','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0353','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0354','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0355','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0356','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0357','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0358','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0359','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0360','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0361','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0362','topic-specific','identity-daily-life-food','higher',true),
('edexcel-0363','topic-specific','identity-dress-style','foundation',true),
('edexcel-0364','topic-specific','identity-dress-style','foundation',true),
('edexcel-0365','topic-specific','identity-dress-style','foundation',true),
('edexcel-0366','topic-specific','identity-dress-style','foundation',true),
('edexcel-0367','topic-specific','identity-dress-style','foundation',true),
('edexcel-0368','topic-specific','identity-dress-style','foundation',true),
('edexcel-0369','topic-specific','identity-dress-style','foundation',true),
('edexcel-0370','topic-specific','identity-dress-style','foundation',true),
('edexcel-0371','topic-specific','identity-dress-style','higher',true),
('edexcel-0372','topic-specific','identity-dress-style','higher',true),
('edexcel-0373','topic-specific','identity-dress-style','higher',true),
('edexcel-0374','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0375','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0376','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0377','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0378','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0379','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0380','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0381','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0382','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0383','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0384','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0385','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0386','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0387','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0388','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0389','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0390','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0391','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0392','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0393','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0394','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0395','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0396','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0397','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0398','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0399','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0400','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0401','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0402','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0403','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0404','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0405','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0406','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0407','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0408','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0409','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0410','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0411','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0412','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0413','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0414','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0415','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0416','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0417','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0418','topic-specific','identity-relations-characteristics','foundation',true),
('edexcel-0419','topic-specific','identity-relations-characteristics','higher',true),
('edexcel-0420','topic-specific','identity-relations-characteristics','higher',true),
('edexcel-0421','topic-specific','identity-relations-characteristics','higher',true),
('edexcel-0422','topic-specific','identity-relations-characteristics','higher',true),
('edexcel-0423','topic-specific','identity-relations-characteristics','higher',true),
('edexcel-0424','topic-specific','identity-relations-characteristics','higher',true),
('edexcel-0425','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0426','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0427','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0428','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0429','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0430','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0431','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0432','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0433','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0434','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0435','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0436','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0437','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0438','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0439','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0440','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0441','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0442','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0443','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0444','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0445','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0446','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0447','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0448','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0449','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0450','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0451','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0452','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0453','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0454','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0455','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0456','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0457','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0458','topic-specific','identity-cultural-life','foundation',true),
('edexcel-0459','topic-specific','identity-cultural-life','higher',true),
('edexcel-0460','topic-specific','identity-cultural-life','higher',true),
('edexcel-0461','topic-specific','identity-cultural-life','higher',true),
('edexcel-0462','topic-specific','identity-cultural-life','higher',true),
('edexcel-0463','topic-specific','identity-cultural-life','higher',true),
('edexcel-0464','topic-specific','identity-cultural-life','higher',true),
('edexcel-0465','topic-specific','identity-cultural-life','higher',true),
('edexcel-0466','topic-specific','identity-cultural-life','higher',true),
('edexcel-0467','topic-specific','identity-cultural-life','higher',true),
('edexcel-0468','topic-specific','identity-social-media','foundation',true),
('edexcel-0469','topic-specific','identity-social-media','foundation',true),
('edexcel-0470','topic-specific','identity-social-media','foundation',true),
('edexcel-0471','topic-specific','identity-social-media','foundation',true),
('edexcel-0472','topic-specific','identity-social-media','foundation',true),
('edexcel-0473','topic-specific','identity-social-media','foundation',true),
('edexcel-0474','topic-specific','identity-social-media','foundation',true),
('edexcel-0475','topic-specific','identity-social-media','foundation',true),
('edexcel-0476','topic-specific','identity-social-media','higher',true),
('edexcel-0477','topic-specific','identity-social-media','higher',true),
('edexcel-0478','topic-specific','identity-social-media','higher',true),
('edexcel-0479','topic-specific','identity-social-media','higher',true),
('edexcel-0480','topic-specific','identity-social-media','higher',true),
('edexcel-0481','topic-specific','identity-social-media','higher',true),
('edexcel-0482','topic-specific','identity-social-media','higher',true),
('edexcel-0483','topic-specific','identity-social-media','higher',true),
('edexcel-0484','topic-specific','identity-social-media','higher',true),
('edexcel-0485','topic-specific','identity-social-media','higher',true),
('edexcel-0486','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0487','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0488','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0489','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0490','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0491','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0492','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0493','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0494','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0495','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0496','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0497','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0498','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0499','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0500','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0501','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0502','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0503','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0504','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0505','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0506','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0507','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0508','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0509','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0510','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0511','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0512','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0513','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0514','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0515','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0516','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0517','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0518','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0519','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0520','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0521','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0522','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0523','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0524','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0525','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0526','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0527','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0528','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0529','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0530','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0531','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0532','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0533','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0534','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0535','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0536','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0537','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0538','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0539','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0540','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0541','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0542','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0543','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0544','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0545','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0546','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0547','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0548','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0549','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0550','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0551','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0552','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0553','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0554','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0555','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0556','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0557','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0558','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0559','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0560','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0561','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0562','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0563','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0564','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0565','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0566','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0567','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0568','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0569','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0570','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0571','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0572','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0573','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0574','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0575','topic-specific','local-area-holiday-travel','foundation',true),
('edexcel-0576','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0577','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0578','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0579','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0580','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0581','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0582','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0583','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0584','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0585','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0586','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0587','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0588','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0589','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0590','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0591','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0592','topic-specific','local-area-holiday-travel','higher',true),
('edexcel-0593','topic-specific','weather','foundation',true),
('edexcel-0594','topic-specific','weather','foundation',true),
('edexcel-0595','topic-specific','weather','foundation',true),
('edexcel-0596','topic-specific','weather','foundation',true),
('edexcel-0597','topic-specific','weather','foundation',true),
('edexcel-0598','topic-specific','weather','foundation',true),
('edexcel-0599','topic-specific','weather','foundation',true),
('edexcel-0600','topic-specific','weather','foundation',true),
('edexcel-0601','topic-specific','weather','foundation',true),
('edexcel-0602','topic-specific','weather','foundation',true),
('edexcel-0603','topic-specific','weather','foundation',true),
('edexcel-0604','topic-specific','weather','foundation',true),
('edexcel-0605','topic-specific','weather','foundation',true),
('edexcel-0606','topic-specific','weather','foundation',true),
('edexcel-0607','topic-specific','weather','foundation',true),
('edexcel-0608','topic-specific','weather','foundation',true),
('edexcel-0609','topic-specific','weather','foundation',true),
('edexcel-0610','topic-specific','weather','foundation',true),
('edexcel-0611','topic-specific','weather','higher',true),
('edexcel-0612','topic-specific','weather','higher',true),
('edexcel-0613','topic-specific','weather','higher',true),
('edexcel-0614','topic-specific','weather','higher',true),
('edexcel-0615','topic-specific','asking-directions','core',true),
('edexcel-0616','topic-specific','asking-directions','core',true),
('edexcel-0617','topic-specific','asking-directions','core',true),
('edexcel-0618','topic-specific','asking-directions','core',true),
('edexcel-0619','topic-specific','asking-directions','core',true),
('edexcel-0620','topic-specific','asking-directions','core',true),
('edexcel-0621','topic-specific','asking-directions','core',true),
('edexcel-0622','topic-specific','asking-directions','core',true),
('edexcel-0623','topic-specific','asking-directions','core',true),
('edexcel-0624','topic-specific','asking-directions','core',true),
('edexcel-0625','topic-specific','asking-directions','core',true),
('edexcel-0626','topic-specific','asking-directions','core',true),
('edexcel-0627','topic-specific','asking-directions','core',true),
('edexcel-0628','topic-specific','asking-directions','core',true),
('edexcel-0629','topic-specific','asking-directions','core',true),
('edexcel-0630','topic-specific','asking-directions','core',true),
('edexcel-0631','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0632','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0633','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0634','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0635','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0636','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0637','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0638','topic-specific','dealing-with-problems','foundation',true),
('edexcel-0639','topic-specific','dealing-with-problems','higher',true),
('edexcel-0640','topic-specific','dealing-with-problems','higher',true),
('edexcel-0641','topic-specific','dealing-with-problems','higher',true),
('edexcel-0642','topic-specific','dealing-with-problems','higher',true),
('edexcel-0643','topic-specific','school','foundation',true),
('edexcel-0644','topic-specific','school','foundation',true),
('edexcel-0645','topic-specific','school','foundation',true),
('edexcel-0646','topic-specific','school','foundation',true),
('edexcel-0647','topic-specific','school','foundation',true),
('edexcel-0648','topic-specific','school','foundation',true),
('edexcel-0649','topic-specific','school','foundation',true),
('edexcel-0650','topic-specific','school','foundation',true),
('edexcel-0651','topic-specific','school','foundation',true),
('edexcel-0652','topic-specific','school','foundation',true),
('edexcel-0653','topic-specific','school','foundation',true),
('edexcel-0654','topic-specific','school','foundation',true),
('edexcel-0655','topic-specific','school','foundation',true),
('edexcel-0656','topic-specific','school','foundation',true),
('edexcel-0657','topic-specific','school','foundation',true),
('edexcel-0658','topic-specific','school','foundation',true),
('edexcel-0659','topic-specific','school','foundation',true),
('edexcel-0660','topic-specific','school','foundation',true),
('edexcel-0661','topic-specific','school','foundation',true),
('edexcel-0662','topic-specific','school','foundation',true),
('edexcel-0663','topic-specific','school','foundation',true),
('edexcel-0664','topic-specific','school','foundation',true),
('edexcel-0665','topic-specific','school','foundation',true),
('edexcel-0666','topic-specific','school','foundation',true),
('edexcel-0667','topic-specific','school','foundation',true),
('edexcel-0668','topic-specific','school','foundation',true),
('edexcel-0669','topic-specific','school','foundation',true),
('edexcel-0670','topic-specific','school','foundation',true),
('edexcel-0671','topic-specific','school','foundation',true),
('edexcel-0672','topic-specific','school','foundation',true),
('edexcel-0673','topic-specific','school','higher',true),
('edexcel-0674','topic-specific','school','higher',true),
('edexcel-0675','topic-specific','school','higher',true),
('edexcel-0676','topic-specific','school','higher',true),
('edexcel-0677','topic-specific','school','higher',true),
('edexcel-0678','topic-specific','school','higher',true),
('edexcel-0679','topic-specific','school','higher',true),
('edexcel-0680','topic-specific','school','higher',true),
('edexcel-0681','topic-specific','school','higher',true),
('edexcel-0682','topic-specific','school','higher',true),
('edexcel-0683','topic-specific','school','higher',true),
('edexcel-0684','topic-specific','school','higher',true),
('edexcel-0685','topic-specific','school','higher',true),
('edexcel-0686','topic-specific','school','higher',true),
('edexcel-0687','topic-specific','school','higher',true),
('edexcel-0688','topic-specific','school','higher',true),
('edexcel-0689','topic-specific','school','higher',true),
('edexcel-0690','topic-specific','future-study-work','foundation',true),
('edexcel-0691','topic-specific','future-study-work','foundation',true),
('edexcel-0692','topic-specific','future-study-work','foundation',true),
('edexcel-0693','topic-specific','future-study-work','foundation',true),
('edexcel-0694','topic-specific','future-study-work','foundation',true),
('edexcel-0695','topic-specific','future-study-work','foundation',true),
('edexcel-0696','topic-specific','future-study-work','foundation',true),
('edexcel-0697','topic-specific','future-study-work','foundation',true),
('edexcel-0698','topic-specific','future-study-work','foundation',true),
('edexcel-0699','topic-specific','future-study-work','foundation',true),
('edexcel-0700','topic-specific','future-study-work','foundation',true),
('edexcel-0701','topic-specific','future-study-work','foundation',true),
('edexcel-0702','topic-specific','future-study-work','foundation',true),
('edexcel-0703','topic-specific','future-study-work','foundation',true),
('edexcel-0704','topic-specific','future-study-work','foundation',true),
('edexcel-0705','topic-specific','future-study-work','foundation',true),
('edexcel-0706','topic-specific','future-study-work','foundation',true),
('edexcel-0707','topic-specific','future-study-work','foundation',true),
('edexcel-0708','topic-specific','future-study-work','foundation',true),
('edexcel-0709','topic-specific','future-study-work','foundation',true),
('edexcel-0710','topic-specific','future-study-work','foundation',true),
('edexcel-0711','topic-specific','future-study-work','foundation',true),
('edexcel-0712','topic-specific','future-study-work','foundation',true),
('edexcel-0713','topic-specific','future-study-work','foundation',true),
('edexcel-0714','topic-specific','future-study-work','foundation',true),
('edexcel-0715','topic-specific','future-study-work','foundation',true),
('edexcel-0716','topic-specific','future-study-work','foundation',true),
('edexcel-0717','topic-specific','future-study-work','foundation',true),
('edexcel-0718','topic-specific','future-study-work','foundation',true),
('edexcel-0719','topic-specific','future-study-work','foundation',true),
('edexcel-0720','topic-specific','future-study-work','foundation',true),
('edexcel-0721','topic-specific','future-study-work','foundation',true),
('edexcel-0722','topic-specific','future-study-work','foundation',true),
('edexcel-0723','topic-specific','future-study-work','foundation',true),
('edexcel-0724','topic-specific','future-study-work','higher',true),
('edexcel-0725','topic-specific','future-study-work','higher',true),
('edexcel-0726','topic-specific','future-study-work','higher',true),
('edexcel-0727','topic-specific','future-study-work','higher',true),
('edexcel-0728','topic-specific','future-study-work','higher',true),
('edexcel-0729','topic-specific','future-study-work','higher',true),
('edexcel-0730','topic-specific','future-study-work','higher',true),
('edexcel-0731','topic-specific','future-study-work','higher',true),
('edexcel-0732','topic-specific','future-study-work','higher',true),
('edexcel-0733','topic-specific','future-study-work','higher',true),
('edexcel-0734','topic-specific','future-study-work','higher',true),
('edexcel-0735','topic-specific','international-global','foundation',true),
('edexcel-0736','topic-specific','international-global','foundation',true),
('edexcel-0737','topic-specific','international-global','foundation',true),
('edexcel-0738','topic-specific','international-global','foundation',true),
('edexcel-0739','topic-specific','international-global','foundation',true),
('edexcel-0740','topic-specific','international-global','foundation',true),
('edexcel-0741','topic-specific','international-global','foundation',true),
('edexcel-0742','topic-specific','international-global','foundation',true),
('edexcel-0743','topic-specific','international-global','foundation',true),
('edexcel-0744','topic-specific','international-global','foundation',true),
('edexcel-0745','topic-specific','international-global','foundation',true),
('edexcel-0746','topic-specific','international-global','foundation',true),
('edexcel-0747','topic-specific','international-global','foundation',true),
('edexcel-0748','topic-specific','international-global','foundation',true),
('edexcel-0749','topic-specific','international-global','foundation',true),
('edexcel-0750','topic-specific','international-global','foundation',true),
('edexcel-0751','topic-specific','international-global','foundation',true),
('edexcel-0752','topic-specific','international-global','foundation',true),
('edexcel-0753','topic-specific','international-global','foundation',true),
('edexcel-0754','topic-specific','international-global','foundation',true),
('edexcel-0755','topic-specific','international-global','foundation',true),
('edexcel-0756','topic-specific','international-global','foundation',true),
('edexcel-0757','topic-specific','international-global','foundation',true),
('edexcel-0758','topic-specific','international-global','foundation',true),
('edexcel-0759','topic-specific','international-global','foundation',true),
('edexcel-0760','topic-specific','international-global','foundation',true),
('edexcel-0761','topic-specific','international-global','foundation',true),
('edexcel-0762','topic-specific','international-global','foundation',true),
('edexcel-0763','topic-specific','international-global','higher',true),
('edexcel-0764','topic-specific','international-global','higher',true),
('edexcel-0765','topic-specific','international-global','higher',true),
('edexcel-0766','topic-specific','international-global','higher',true),
('edexcel-0767','topic-specific','international-global','higher',true),
('edexcel-0768','topic-specific','international-global','higher',true),
('edexcel-0769','topic-specific','international-global','higher',true),
('edexcel-0770','topic-specific','international-global','higher',true),
('edexcel-0771','topic-specific','international-global','higher',true)
on conflict (card_id) do update set section=excluded.section, category=excluded.category, tier=excluded.tier, active=true;

create table if not exists public.chinese_gcse_vocabulary_rounds (
  user_id uuid not null references auth.users(id) on delete cascade,
  section text not null,
  category text not null,
  tier_filter text not null check (tier_filter in ('all', 'core-foundation', 'higher')),
  round_number integer not null default 1 check (round_number > 0),
  assigned_ids text[] not null default '{}',
  reviewed_ids text[] not null default '{}',
  updated_at timestamptz not null default now(),
  primary key (user_id, section, category, tier_filter)
);

create table if not exists public.chinese_gcse_vocabulary_daily_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  section text not null,
  category text not null,
  tier_filter text not null,
  round_number integer not null,
  study_date date not null,
  card_ids text[] not null check (cardinality(card_ids) between 1 and 10),
  answers jsonb not null default '{}'::jsonb check (jsonb_typeof(answers) = 'object'),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (user_id, section, category, tier_filter, study_date),
  foreign key (user_id, section, category, tier_filter)
    references public.chinese_gcse_vocabulary_rounds on delete cascade
);

alter table public.chinese_gcse_vocabulary_catalog enable row level security;
alter table public.chinese_gcse_vocabulary_rounds enable row level security;
alter table public.chinese_gcse_vocabulary_daily_sessions enable row level security;

drop policy if exists "Daily10 read own rounds" on public.chinese_gcse_vocabulary_rounds;
create policy "Daily10 read own rounds" on public.chinese_gcse_vocabulary_rounds
  for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Daily10 read own sessions" on public.chinese_gcse_vocabulary_daily_sessions;
create policy "Daily10 read own sessions" on public.chinese_gcse_vocabulary_daily_sessions
  for select to authenticated using ((select auth.uid()) = user_id);

-- No direct client writes: the RPCs allocate and answer in one transaction.
revoke all on public.chinese_gcse_vocabulary_catalog from public, anon, authenticated;
revoke all on public.chinese_gcse_vocabulary_rounds from public, anon, authenticated;
revoke all on public.chinese_gcse_vocabulary_daily_sessions from public, anon, authenticated;
grant select on public.chinese_gcse_vocabulary_rounds to authenticated;
grant select on public.chinese_gcse_vocabulary_daily_sessions to authenticated;

create or replace function public.get_chinese_vocabulary_daily10(
  p_section text, p_category text, p_tier_filter text, p_start boolean default false
) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := auth.uid();
  v_today date := (now() at time zone 'Europe/London')::date;
  v_pool text[];
  v_round public.chinese_gcse_vocabulary_rounds%rowtype;
  v_session public.chinese_gcse_vocabulary_daily_sessions%rowtype;
  v_cards text[];
  v_reviewed integer;
begin
  if v_user is null then
    raise exception 'Please sign in first' using errcode = '42501';
  end if;
  if p_tier_filter is null or p_tier_filter not in ('all', 'core-foundation', 'higher') then
    raise exception 'Invalid tier filter';
  end if;
  select array_agg(c.card_id order by c.card_id) into v_pool
  from public.chinese_gcse_vocabulary_catalog c
  where c.active and c.section = p_section and c.category = p_category
    and (p_tier_filter = 'all'
      or (p_tier_filter = 'core-foundation' and c.tier <> 'higher')
      or (p_tier_filter = 'higher' and c.tier = 'higher'));
  if coalesce(cardinality(v_pool), 0) = 0 then
    raise exception 'No vocabulary cards in this filter';
  end if;

  -- Same lock in both RPCs: concurrent tabs/devices cannot reserve two batches.
  perform pg_advisory_xact_lock(hashtextextended(
    v_user::text || ':' || p_section || ':' || p_category || ':' || p_tier_filter, 0));
  insert into public.chinese_gcse_vocabulary_rounds(user_id, section, category, tier_filter)
  values (v_user, p_section, p_category, p_tier_filter) on conflict do nothing;
  select * into v_round from public.chinese_gcse_vocabulary_rounds r
  where r.user_id = v_user and r.section = p_section
    and r.category = p_category and r.tier_filter = p_tier_filter for update;

  -- Unfinished work survives midnight. Finishing it today uses today's batch.
  select * into v_session from public.chinese_gcse_vocabulary_daily_sessions s
  where s.user_id = v_user and s.section = p_section
    and s.category = p_category and s.tier_filter = p_tier_filter
    and (s.completed_at is null or s.study_date = v_today
      or (s.completed_at at time zone 'Europe/London')::date = v_today)
  order by (s.completed_at is null) desc, s.study_date desc limit 1;

  if v_session.id is null and p_start then
    if not exists (select 1 from unnest(v_pool) as p(card_id)
      where not (p.card_id = any(v_round.assigned_ids))) then
      update public.chinese_gcse_vocabulary_rounds r
      set round_number = r.round_number + 1, assigned_ids = '{}', reviewed_ids = '{}', updated_at = now()
      where r.user_id = v_user and r.section = p_section
        and r.category = p_category and r.tier_filter = p_tier_filter
      returning * into v_round;
    end if;
    select array_agg(p.card_id order by p.position) into v_cards
    from (
      select card_id, random() as position from unnest(v_pool) as p(card_id)
      where not (card_id = any(v_round.assigned_ids)) order by position limit 10
    ) p;
    insert into public.chinese_gcse_vocabulary_daily_sessions
      (user_id, section, category, tier_filter, round_number, study_date, card_ids)
    values (v_user, p_section, p_category, p_tier_filter, v_round.round_number, v_today, v_cards)
    returning * into v_session;
    update public.chinese_gcse_vocabulary_rounds r
    set assigned_ids = r.assigned_ids || v_cards, updated_at = now()
    where r.user_id = v_user and r.section = p_section
      and r.category = p_category and r.tier_filter = p_tier_filter
    returning * into v_round;
  end if;

  select count(*)::integer into v_reviewed from unnest(v_pool) as p(card_id)
  where p.card_id = any(v_round.reviewed_ids);
  return jsonb_build_object(
    'session_id', v_session.id, 'server_date', v_today,
    'study_date', v_session.study_date, 'round_number', v_round.round_number,
    'card_ids', coalesce(v_session.card_ids, '{}'::text[]),
    'answers', coalesce(v_session.answers, '{}'::jsonb),
    'completed', v_session.completed_at is not null,
    'total_count', cardinality(v_pool), 'reviewed_count', v_reviewed,
    'carry_over', v_session.study_date < v_today and v_session.completed_at is null
  );
end;
$$;

create or replace function public.answer_chinese_vocabulary_daily10(
  p_session_id uuid, p_card_id text, p_correct boolean
) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := auth.uid();
  v_session public.chinese_gcse_vocabulary_daily_sessions%rowtype;
  v_progress public.chinese_gcse_vocabulary_progress%rowtype;
  v_answered integer;
begin
  if v_user is null then
    raise exception 'Please sign in first' using errcode = '42501';
  end if;
  select * into v_session from public.chinese_gcse_vocabulary_daily_sessions s
  where s.id = p_session_id and s.user_id = v_user;
  if v_session.id is null then
    raise exception 'Session not found' using errcode = '42501';
  end if;
  perform pg_advisory_xact_lock(hashtextextended(
    v_user::text || ':' || v_session.section || ':' || v_session.category || ':' || v_session.tier_filter, 0));
  select * into v_session from public.chinese_gcse_vocabulary_daily_sessions s
  where s.id = p_session_id and s.user_id = v_user for update;
  if p_correct is null or p_card_id is null or not (p_card_id = any(v_session.card_ids)) then
    raise exception 'Invalid answer';
  end if;

  -- A retry after a lost response returns the stored answer, without recounting it.
  if not (v_session.answers ? p_card_id) then
    select count(*)::integer into v_answered from jsonb_object_keys(v_session.answers);
    if v_session.card_ids[v_answered + 1] is distinct from p_card_id then
      raise exception 'Session changed on another device; reload to continue';
    end if;
    update public.chinese_gcse_vocabulary_daily_sessions s
    set answers = s.answers || jsonb_build_object(p_card_id, p_correct),
      completed_at = case when v_answered + 1 = cardinality(s.card_ids) then now() else null end,
      updated_at = now()
    where s.id = p_session_id;
    update public.chinese_gcse_vocabulary_rounds r
    set reviewed_ids = case when p_card_id = any(r.reviewed_ids) then r.reviewed_ids
      else array_append(r.reviewed_ids, p_card_id) end, updated_at = now()
    where r.user_id = v_user and r.section = v_session.section
      and r.category = v_session.category and r.tier_filter = v_session.tier_filter;
    insert into public.chinese_gcse_vocabulary_progress as p
      (user_id, card_id, correct_count, incorrect_count, last_result, last_seen_at, updated_at)
    values (v_user, p_card_id, case when p_correct then 1 else 0 end,
      case when p_correct then 0 else 1 end, p_correct, now(), now())
    on conflict (user_id, card_id) do update
    set correct_count = p.correct_count + excluded.correct_count,
      incorrect_count = p.incorrect_count + excluded.incorrect_count,
      last_result = excluded.last_result, last_seen_at = now(), updated_at = now();
  end if;
  select * into v_progress from public.chinese_gcse_vocabulary_progress p
  where p.user_id = v_user and p.card_id = p_card_id;
  return public.get_chinese_vocabulary_daily10(
    v_session.section, v_session.category, v_session.tier_filter, false
  ) || jsonb_build_object('progress', to_jsonb(v_progress));
end;
$$;

revoke all on function public.get_chinese_vocabulary_daily10(text, text, text, boolean) from public, anon;
revoke all on function public.answer_chinese_vocabulary_daily10(uuid, text, boolean) from public, anon;
grant execute on function public.get_chinese_vocabulary_daily10(text, text, text, boolean) to authenticated;
grant execute on function public.answer_chinese_vocabulary_daily10(uuid, text, boolean) to authenticated;
commit;

select count(*) as daily10_catalog_cards from public.chinese_gcse_vocabulary_catalog where active;
