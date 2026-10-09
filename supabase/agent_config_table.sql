-- Server-only settings for the advisor live browser (e.g. the uploaded cursor extension id).
-- No client access: RLS on with no policies, and table privileges revoked.
create table if not exists public.ngmy_agent_config (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);
alter table public.ngmy_agent_config enable row level security;
revoke all on public.ngmy_agent_config from anon, authenticated;
