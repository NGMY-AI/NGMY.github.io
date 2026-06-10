-- Wallet deposit destinations (Cash App + Bitcoin) — run once in Supabase SQL Editor.
-- Without these columns, admin saves may only stick on the admin device.

alter table public.config add column if not exists "officialCashApp" text default 'NGMYpay';
alter table public.config add column if not exists "officialBitcoin" text default '';

-- App also mirrors authoritative values in ngmy_settings.key = 'wallet_payment_settings'.
