-- NGMY — Store listings/inquiries: public reads never expose seller contact in Network.
-- Browsers query store_listings_public (PII stripped from data jsonb).
-- Writes still go to base tables (service role / authenticated insert-update).

create or replace function public.ngmy_store_listing_public(d jsonb)
returns jsonb
language sql
immutable
as $$
  select coalesce(d, '{}'::jsonb)
    - 'sellerEmail'
    - 'sellerPhone'
    - 'sellerName'
    - 'location'
    - 'sellerAddress'
    - 'sellerZelleInfo'
    - 'sellerCashAppTag';
$$;

create or replace function public.ngmy_store_inquiry_public(d jsonb)
returns jsonb
language sql
immutable
as $$
  select coalesce(d, '{}'::jsonb)
    - 'sellerEmail'
    - 'buyerEmail'
    - 'buyerPhone'
    - 'buyerName'
    - 'deliveryAddress';
$$;

drop view if exists public.store_listings_public;
create view public.store_listings_public as
select
  id,
  public.ngmy_store_listing_public(data) as data,
  updated_at
from public.store_listings;

drop view if exists public.store_inquiries_public;
create view public.store_inquiries_public as
select
  id,
  public.ngmy_store_inquiry_public(data) as data,
  updated_at
from public.store_inquiries;

revoke all on public.store_listings from anon, authenticated;
revoke all on public.store_inquiries from anon, authenticated;

grant select on public.store_listings_public to anon, authenticated;
grant select on public.store_inquiries_public to anon, authenticated;

grant insert, update, delete on public.store_listings to authenticated;
grant insert, update, delete on public.store_inquiries to authenticated;

select 'store_listings_public' as view_name, count(*) as rows from public.store_listings_public;
