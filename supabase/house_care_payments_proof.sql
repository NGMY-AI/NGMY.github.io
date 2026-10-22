-- Run once in the Supabase SQL Editor: adds the code and screenshot to House Care payments.
alter table public.house_care_payments add column if not exists code text not null default '';
alter table public.house_care_payments add column if not exists proof_url text not null default '';
notify pgrst, 'reload schema';
