/// One clock-in per day — never two, even if the member moves to another state (time zone).
///
/// The phone's own calendar day changes with the time zone, so moving west→east (or changing
/// the phone's clock) could make "today" start again. Clock-in therefore also checks one fixed
/// app day (US Eastern standard time, UTC−5, no daylight shift): a clock-in is blocked when the
/// last one was on the same local day OR the same app day.
String ngmyClockDayKey(DateTime t) {
  final u = t.toUtc().subtract(const Duration(hours: 5));
  return '${u.year}-${u.month}-${u.day}';
}

bool _sameLocalDay(DateTime a, DateTime b) {
  final x = a.toLocal(), y = b.toLocal();
  return x.year == y.year && x.month == y.month && x.day == y.day;
}

/// True when [last] is the same clock-in day as [now] (local day or app day).
bool ngmySameClockDay(DateTime? last, DateTime now) {
  if (last == null) return false;
  return _sameLocalDay(last, now) || ngmyClockDayKey(last) == ngmyClockDayKey(now);
}

/// Is [details] / [id] a clock-in session start or a clock-in payout?
bool ngmyIsClockInRecord(String id, String details) {
  final d = details.toLowerCase();
  final i = id.toLowerCase();
  return i.startsWith('clockin_start_') ||
      i.startsWith('local_clockin_') ||
      d.contains('clock-in session started') ||
      d.contains('clock-in daily earnings') ||
      d.contains('clock-in earnings') ||
      d.contains('clock in earnings') ||
      d.contains('daily clock-in');
}

/// True when any of the member's records shows a clock-in already today (start or payout).
bool ngmyClockedInTodayFromRecords(Iterable<({String id, String details, DateTime at})> records, DateTime now) {
  for (final r in records) {
    if (ngmyIsClockInRecord(r.id, r.details) && ngmySameClockDay(r.at, now)) return true;
  }
  return false;
}
