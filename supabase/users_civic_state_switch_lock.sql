-- The Civic Registry state-change lock (1 hour after 8 changes) lives on the
-- account next to civicRegistryStateSwitchesUsed, so the count and the lock
-- survive closing the app, logging out, and signing in on another phone.
alter table public.users
  add column if not exists "civicRegistryStateSwitchLockedUntil" text not null default '';
