-- NGMY server-side game wallet.
-- Run once in Supabase → SQL Editor. Safe to run more than once.
--
-- Every game bet and payout is applied here in one step: the receipt row is
-- stored and users."accountBalance" is changed under a row lock, then the new
-- balance is returned. Phones show that returned number instead of computing
-- and pushing their own, so two phones on one account cannot drift apart.

create or replace function public.ngmy_apply_game_txn(p_txn jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email    text := lower(trim(coalesce(p_txn->>'userEmail', '')));
  v_id       text := trim(coalesce(p_txn->>'id', ''));
  v_type     int  := coalesce((p_txn->>'type')::int, -1);     -- 3 = adminRemove (bet), 4 = reimbursement (payout)
  v_method   int  := coalesce((p_txn->>'method')::int, -1);   -- 2 = system
  v_status   int  := coalesce((p_txn->>'status')::int, -1);   -- 1 = approved
  v_amount   double precision := coalesce((p_txn->>'amount')::double precision, 0);
  v_note     text := coalesce(p_txn->>'sourceDetails', '');
  v_lower    text := lower(coalesce(p_txn->>'sourceDetails', ''));
  v_is_game  boolean;
  v_delta    double precision;
  v_balance  double precision;
begin
  if v_email = '' or v_id = '' then
    return jsonb_build_object('applied', false, 'reason', 'bad_request');
  end if;

  -- Mirrors ngmyIsGameLedgerTransaction() in lib/main.dart. Only game rows may
  -- move money through this function.
  v_is_game := v_lower like '%game bet:%'
            or v_lower like '%game payout:%'
            or v_lower like '%game partial:%'
            or v_lower like '%multiplayer payout:%'
            or (v_lower like '%dice%' and v_method = 2);
  if not v_is_game or v_status <> 1 or v_amount <= 0 or v_type not in (3, 4) then
    return jsonb_build_object('applied', false, 'reason', 'not_game_txn');
  end if;

  -- Lock the account row so two phones settling at once run one after the other.
  select coalesce("accountBalance", 0) into v_balance
    from public.users where lower(email) = v_email for update;
  if not found then
    return jsonb_build_object('applied', false, 'reason', 'no_user');
  end if;

  -- Already applied (retry or second phone): return the current balance, change nothing.
  if exists (select 1 from public.transactions where id = v_id) then
    return jsonb_build_object('applied', false, 'reason', 'duplicate', 'balance', v_balance);
  end if;

  v_delta := case when v_type = 3 then -v_amount else v_amount end;
  if v_balance + v_delta < 0 then
    return jsonb_build_object('applied', false, 'reason', 'insufficient', 'balance', v_balance);
  end if;

  insert into public.transactions (id, "userEmail", amount, type, method, "sourceDetails", status, timestamp)
  values (v_id, v_email, v_amount, v_type, v_method, v_note, v_status, coalesce(p_txn->>'timestamp', ''));

  update public.users
     set "accountBalance" = v_balance + v_delta
   where lower(email) = v_email
  returning "accountBalance" into v_balance;

  return jsonb_build_object('applied', true, 'balance', v_balance);
end;
$$;

grant execute on function public.ngmy_apply_game_txn(jsonb) to anon, authenticated;
