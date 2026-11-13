-- Home menu cards (up to 5) — run in Supabase SQL Editor (safe to re-run).
-- User explicitly Saves which cards sync across phones for the same account.
-- Max 5 cards. Removing a saved card does NOT auto-add another.

create table if not exists public.home_cards (
  "userEmail" text primary key,
  cards jsonb not null default '[]'::jsonb,
  "updatedAt" text not null default ''
);

alter table public.home_cards add column if not exists cards jsonb not null default '[]'::jsonb;
alter table public.home_cards add column if not exists "updatedAt" text not null default '';

create index if not exists home_cards_updated_at_idx on public.home_cards ("updatedAt");

alter table public.home_cards enable row level security;

drop policy if exists "home_cards_read" on public.home_cards;
drop policy if exists "home_cards_insert" on public.home_cards;
drop policy if exists "home_cards_update" on public.home_cards;
drop policy if exists "home_cards_delete" on public.home_cards;

create policy "home_cards_read" on public.home_cards for select using (true);
create policy "home_cards_insert" on public.home_cards for insert with check (true);
create policy "home_cards_update" on public.home_cards for update using (true);
create policy "home_cards_delete" on public.home_cards for delete using (true);
