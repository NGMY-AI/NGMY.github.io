-- NGMY Store accounts granted by an admin (no application needed).
-- Each row is a store: the account that owns it, its store name, and a short
-- description shown on helper gift cards so the right store is recognised
-- when the gift QR is scanned. Only the bright-handler Edge Function (service
-- role) reads or writes it; granting also sets users."canSellOnStore".
create table if not exists public.ngmy_stores (
  email text primary key,
  phone text not null default '',
  store_name text not null,
  description text not null default '',
  active boolean not null default true,
  granted_by text not null default '',
  granted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.ngmy_stores enable row level security;
