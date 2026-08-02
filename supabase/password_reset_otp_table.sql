-- Private OTP storage for password reset (service role only — no public RLS policies).
-- Run once in Supabase → SQL Editor.

create table if not exists public.ngmy_password_reset_otp (
  email text primary key,
  code_hash text not null,
  expires_at timestamptz not null,
  attempts int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.ngmy_password_reset_otp enable row level security;

-- Intentionally no SELECT/INSERT policies for anon or authenticated roles.
-- Edge Functions use the service role key and bypass RLS.

create index if not exists ngmy_password_reset_otp_expires_idx
  on public.ngmy_password_reset_otp (expires_at);
