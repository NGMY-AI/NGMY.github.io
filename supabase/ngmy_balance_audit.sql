-- NGMY balance audit. Run once in Supabase -> SQL Editor. Safe to run more than once.
--
-- Records every change to users."accountBalance": who changed it, from what to what, and whether
-- anything explains a drop (the game server step, or a spend receipt in "transactions").
-- Nothing is blocked; this only writes a row, so money moves exactly as before.
--
-- See what reduced a balance:
--   select at, old_balance, new_balance, change, via, suspect, caller
--     from public.ngmy_balance_audit where email = 'you@example.com' order by at desc limit 50;
-- See every unexplained drop:
--   select * from public.ngmy_balance_audit where suspect order by at desc limit 100;
-- Put money back after finding the bad row (it is logged too):
--   update public.users set "accountBalance" = <old_balance> where lower(email) = 'you@example.com';

create table if not exists public.ngmy_balance_audit (
  id          bigserial primary key,
  at          timestamptz not null default now(),
  email       text not null,
  old_balance double precision,
  new_balance double precision,
  change      double precision,
  via         text,
  suspect     boolean not null default false,
  caller      text
);

create index if not exists ngmy_balance_audit_email_at on public.ngmy_balance_audit (email, at desc);
create index if not exists ngmy_balance_audit_suspect on public.ngmy_balance_audit (at desc) where suspect;

alter table public.ngmy_balance_audit enable row level security;
revoke all on public.ngmy_balance_audit from anon, authenticated;

create or replace function public.ngmy_log_balance_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_old     double precision := coalesce(old."accountBalance", 0);
  v_new     double precision := coalesce(new."accountBalance", 0);
  v_change  double precision := v_new - v_old;
  v_via     text := coalesce(nullif(current_setting('ngmy.via', true), ''), 'app_save');
  v_suspect boolean := false;
begin
  if abs(v_change) < 0.005 then
    return new;
  end if;

  if v_change < -4.99 and v_via <> 'game_rpc' then
    begin
      v_suspect := not exists (
        select 1 from public.transactions t
         where lower(t."userEmail") = lower(new.email)
           and nullif(t.timestamp::text, '')::timestamptz >= now() - interval '10 minutes'
           and t.type in (1, 3, 5)
           and t.amount >= (-v_change) - 0.01
      );
    exception when others then
      v_suspect := true;
    end;
  end if;

  begin
    insert into public.ngmy_balance_audit (email, old_balance, new_balance, change, via, suspect, caller)
    values (lower(new.email), v_old, v_new, v_change, v_via, v_suspect,
            coalesce(current_setting('request.jwt.claims', true), current_user));
  exception when others then
    null;
  end;
  return new;
end;
$$;

drop trigger if exists ngmy_log_balance_change_trg on public.users;
create trigger ngmy_log_balance_change_trg
  after update of "accountBalance" on public.users
  for each row execute function public.ngmy_log_balance_change();
