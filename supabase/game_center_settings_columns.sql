-- Game Center admin settings (timers + dice) — run in Supabase SQL Editor
alter table public.config add column if not exists "gameTimeLimits" jsonb default '{}'::jsonb;
alter table public.config add column if not exists "diceSettings" jsonb default '{}'::jsonb;
alter table public.config add column if not exists "gameInvites" jsonb default '[]'::jsonb;
