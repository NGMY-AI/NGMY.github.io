-- Free House Insurance + Civic Helper Gifts
-- Settings live in ngmy_settings / AppConfig JSON (no new required columns).
-- Run optionally for documentation / RLS awareness.

-- Keys used in ngmy_settings:
--   civic_helper_gift_pending_v1   — admin pending 3-in-a-row gift grants
--   civic_helper_gift_inbox_v1     — granted gifts (user inbox)
--   ngmy_helper_gift_qr_v1_<token> — one-time store redeem stash
--
-- AppConfig fields:
--   houseInsuranceMonthlyFee (default 50)
--   houseInsuranceAccessUntilByEmail
--   civicHelperGiftPending
--   civicHelperGiftInbox
--
-- Civic member record extras (preserved on upsert):
--   firstHelperStreak
--   lastFirstHelperCampaignId

-- No schema migration required if ngmy_settings already exists.
select 1;
