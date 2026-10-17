-- House & Insurance bookings: a worker, a day, and a time slot.
-- Run once in Supabase → SQL Editor. Safe to run more than once.
--
-- One open booking per worker per day and time. A booking is open while it is
-- pending or accepted; declined, cancelled, and done bookings free the slot.

alter table public.house_work_requests add column if not exists booking_date date;
alter table public.house_work_requests add column if not exists booking_time text not null default '';

create unique index if not exists house_work_requests_one_open_slot
  on public.house_work_requests (worker_email, booking_date, booking_time)
  where status in ('pending', 'accepted') and booking_date is not null;
