-- NGMY Help & Services: paid help plans and purchases.
-- Only the server (service role) reads or writes these tables; phones go through the bright-handler function.

create table if not exists public.service_categories (
  id text primary key,
  title_en text not null,
  title_sw text not null,
  description_en text not null default '',
  description_sw text not null default '',
  includes_en text[] not null default '{}',
  includes_sw text[] not null default '{}',
  whatsapp_message_en text not null default '',
  whatsapp_message_sw text not null default '',
  price numeric(10,2) not null check (price > 0),
  grants_course boolean not null default false,
  icon text not null default '',
  active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.service_purchases (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  category_id text not null references public.service_categories(id),
  amount numeric(10,2) not null,
  method text not null check (method in ('cashapp', 'stripe')),
  status text not null default 'pending' check (status in ('pending', 'paid', 'rejected', 'cancelled')),
  transaction_id text,
  code text,
  proof_url text,
  course_access boolean not null default false,
  created_at timestamptz not null default now(),
  paid_at timestamptz,
  decided_at timestamptz,
  decided_by text
);
create index if not exists service_purchases_email_idx on public.service_purchases (email, created_at desc);
create index if not exists service_purchases_status_idx on public.service_purchases (status, created_at desc);

create table if not exists public.service_settings (
  key text primary key,
  value text not null default '',
  updated_at timestamptz not null default now()
);

alter table public.service_categories enable row level security;
alter table public.service_purchases enable row level security;
alter table public.service_settings enable row level security;

insert into public.service_categories
  (id, title_en, title_sw, description_en, description_sw, includes_en, includes_sw,
   whatsapp_message_en, whatsapp_message_sw, price, grants_course, icon, sort_order)
values
(
  'flipper_course',
  'Become a Real Estate Flipper',
  'Kuwa Mwekezaji wa Nyumba (Flipper)',
  'Learn step by step how to buy cheap houses, fix them yourself, and sell or rent them for profit — taught in simple language.',
  'Jifunze hatua kwa hatua jinsi ya kununua nyumba za bei nafuu, kuzitengeneza mwenyewe, na kuziuza au kuzipangisha kwa faida — kwa lugha rahisi.',
  array[
    'We teach you where to buy cheap houses',
    'We help you find houses online if you need',
    'We give you all the websites for finding houses (Facebook Marketplace, Zillow, Craigslist and more)',
    'We teach you how to fix things in the house yourself and save labor money',
    'A script for calling house owners to buy cheap',
    'Access to NGMY services in the app, including the home-maintenance plan for small jobs'
  ],
  array[
    'Tunakufundisha wapi pa kununua nyumba za bei nafuu',
    'Tunakusaidia kutafuta nyumba mtandaoni ukihitaji',
    'Tunakupa tovuti zote za kutafuta nyumba (Facebook Marketplace, Zillow, Craigslist na nyingine)',
    'Tunakufundisha jinsi ya kutengeneza vitu ndani ya nyumba mwenyewe na kuokoa pesa za fundi',
    'Maneno ya kutumia unapompigia simu mwenye nyumba kununua kwa bei nafuu',
    'Kutumia huduma za NGMY ndani ya app, pamoja na mpango wa matengenezo ya nyumba kwa kazi ndogo'
  ],
  'Hello, I just paid for the Real Estate Flipper Course ($500) in the NGMY app. My name is {name}. Please help me get started.',
  'Habari, nimelipa Kozi ya Kuwa Mwekezaji wa Nyumba ($500) kwenye app ya NGMY. Jina langu ni {name}. Tafadhali nisaidie kuanza.',
  500, true, 'flipper', 3
),
(
  'buy_house',
  'Buy a House — We Help You',
  'Nunua Nyumba — Tunakusaidia',
  'You want to buy a house and need help — we find the house, talk to the agent, and walk with you through the whole process.',
  'Unataka kununua nyumba na unahitaji msaada — tunakutafutia nyumba, tunaongea na wakala, na tunatembea na wewe mchakato wote.',
  array[
    'We give you all the websites for finding houses',
    'We find you a good house with the rooms and bathrooms you want',
    'We talk to the agent for you',
    'We give you all the information you need about the house before you buy',
    'We advise you on price — whether the house is worth it or not'
  ],
  array[
    'Tunakupa tovuti zote za kutafuta nyumba',
    'Tunakutafutia nyumba nzuri yenye vyumba na bafu unavyotaka',
    'Tunaongea na wakala kwa ajili yako',
    'Tunakupa taarifa zote unazohitaji kuhusu nyumba kabla hujanunua',
    'Tunakushauri kuhusu bei — kama nyumba inafaa bei yake au la'
  ],
  'Hello, I just paid for Help Buying a House ($125) in the NGMY app. My name is {name}. I need help finding a house.',
  'Habari, nimelipa huduma ya Kusaidiwa Kununua Nyumba ($125) kwenye app ya NGMY. Jina langu ni {name}. Nahitaji msaada wa kutafuta nyumba.',
  125, false, 'house', 2
),
(
  'advice',
  'Get Advice — We Guide You',
  'Pata Ushauri — Tunakuongoza',
  'You have a question about buying, fixing, renting or selling a house — we listen, look at your situation, and give you honest advice in simple language.',
  'Una swali kuhusu kununua, kutengeneza, kupangisha au kuuza nyumba — tunakusikiliza, tunaangalia hali yako, na tunakupa ushauri wa kweli kwa lugha rahisi.',
  array[
    'One advice session with the NGMY team on WhatsApp or a phone call',
    'Ask anything about buying, fixing, renting or selling a house',
    'We look at the house or deal you are thinking about and tell you what we think',
    'We tell you the next steps to take',
    'Honest answers in simple language'
  ],
  array[
    'Kikao kimoja cha ushauri na timu ya NGMY kwa WhatsApp au simu',
    'Uliza chochote kuhusu kununua, kutengeneza, kupangisha au kuuza nyumba',
    'Tunaangalia nyumba au mpango unaofikiria na kukwambia maoni yetu',
    'Tunakwambia hatua zinazofuata za kuchukua',
    'Majibu ya kweli kwa lugha rahisi'
  ],
  'Hello, I just paid for Advice ($40) in the NGMY app. My name is {name}. I would like some advice.',
  'Habari, nimelipa huduma ya Ushauri ($40) kwenye app ya NGMY. Jina langu ni {name}. Ningependa kupata ushauri.',
  40, false, 'advice', 1
)
on conflict (id) do nothing;

-- Guests (visitors from the admin Bio link, no NGMY account): their name and WhatsApp number, and a
-- private token so they can open their receipt again without logging in.
alter table public.service_purchases add column if not exists buyer_name text;
alter table public.service_purchases add column if not exists buyer_phone text;
alter table public.service_purchases add column if not exists guest boolean not null default false;
alter table public.service_purchases add column if not exists guest_token text;
create unique index if not exists service_purchases_guest_token_idx on public.service_purchases (guest_token) where guest_token is not null;
