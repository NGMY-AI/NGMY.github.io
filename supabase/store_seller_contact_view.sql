-- NGMY — narrow view for resolving a store counterparty's contact info
-- (run in SQL Editor). Used by _resolveStoreUserIndex / _sellerPhoneForListing /
-- _completeStorePurchase in main.dart, which today pull the OTHER party's full
-- `users` row (balance, isAdmin, DOB, etc.) just to read a phone number.
-- Safe to keep public even after `users` is locked to own-row-or-admin.

create or replace view public.users_store_contact as
select email, username, phone, "profilePicturePath"
from public.users;

grant select on public.users_store_contact to anon, authenticated;
