-- NGMY — add reset-token columns to the password-reset OTP table (run in SQL Editor).
-- Lets the "resend" (email-code) reset path finish the password write via the
-- bright-handler Edge Function (service role) instead of an unauthenticated
-- direct client UPDATE on public.users, which breaks once users RLS requires
-- an authenticated own-row match.

alter table public.ngmy_password_reset_otp
  add column if not exists reset_token_hash text,
  add column if not exists reset_token_expires_at timestamptz;
