-- Store profile filled in by the store owner (pop-up after an admin grants access):
-- address, city, state and a round profile photo, shown in the Stores directory.
alter table public.ngmy_stores add column if not exists address text not null default '';
alter table public.ngmy_stores add column if not exists city text not null default '';
alter table public.ngmy_stores add column if not exists state text not null default '';
alter table public.ngmy_stores add column if not exists photo_url text not null default '';
alter table public.ngmy_stores add column if not exists profile_done boolean not null default false;
