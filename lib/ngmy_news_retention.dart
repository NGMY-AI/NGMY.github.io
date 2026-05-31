/// News feed retention: posts live for five weekdays (Mon–Fri), then auto-delete.
class NgmyNewsRetention {
  static const int weekdayRetention = 5;

  static bool isWeekday(DateTime d) {
    final w = d.weekday;
    return w >= DateTime.monday && w <= DateTime.friday;
  }

  /// Weekdays strictly after the post date through [to] (local calendar days).
  static int weekdaysElapsed(DateTime from, DateTime to) {
    final start = DateTime(from.year, from.month, from.day);
    final end = DateTime(to.year, to.month, to.day);
    if (!end.isAfter(start)) return 0;
    var count = 0;
    var d = start;
    while (d.isBefore(end)) {
      d = d.add(const Duration(days: 1));
      if (isWeekday(d)) count++;
    }
    return count;
  }

  /// True when more than [weekdayRetention] weekdays have passed since posting.
  static bool isExpired(DateTime postedAt, {DateTime? now}) {
    final n = now ?? DateTime.now();
    return weekdaysElapsed(postedAt.toLocal(), n.toLocal()) > weekdayRetention;
  }
}
