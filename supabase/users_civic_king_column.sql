-- Civic Registry King (per-state approvals) — separate from Civic Registry Admin (global).
alter table public.users add column if not exists "isCivicRegistryKing" boolean default false;
