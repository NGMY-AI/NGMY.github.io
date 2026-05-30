-- NGMY — Terms & Conditions + Privacy Policy (run once in Supabase SQL Editor)
-- Required for admin legal content to persist and sync to all users.

alter table public.config add column if not exists "termsAndConditions" text default '';
alter table public.config add column if not exists "privacyPolicy" text default '';

-- Seed row if missing (id = 1 is used by the app)
insert into public.config (id, "termsAndConditions", "privacyPolicy")
values (1, '', '')
on conflict (id) do nothing;

-- Realtime: so all users see legal updates without restarting
-- Dashboard → Database → Publications → supabase_realtime → enable "config"
-- Or uncomment if your project allows:
-- alter publication supabase_realtime add table public.config;
