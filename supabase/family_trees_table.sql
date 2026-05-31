-- Family Tree worksheets — run once in Supabase SQL Editor
-- Stores every tree (members, spouses, photos paths, notes, etc.) per user.

create table if not exists public.family_trees (
  id text primary key,
  "userEmail" text not null default '',
  name text not null default '',
  code text not null default '',
  "isPrivate" boolean not null default true,
  "collaboratorEmails" jsonb not null default '[]'::jsonb,
  members jsonb not null default '[]'::jsonb,
  "createdAt" text not null default '',
  "updatedAt" text not null default ''
);

create index if not exists family_trees_user_email_idx on public.family_trees ("userEmail");

alter table public.family_trees enable row level security;

drop policy if exists "family_trees_read" on public.family_trees;
drop policy if exists "family_trees_insert" on public.family_trees;
drop policy if exists "family_trees_update" on public.family_trees;
drop policy if exists "family_trees_delete" on public.family_trees;

create policy "family_trees_read" on public.family_trees for select using (true);
create policy "family_trees_insert" on public.family_trees for insert with check (true);
create policy "family_trees_update" on public.family_trees for update using (true);
create policy "family_trees_delete" on public.family_trees for delete using (true);

-- Realtime (optional): Dashboard → Database → Publications → supabase_realtime → enable family_trees
