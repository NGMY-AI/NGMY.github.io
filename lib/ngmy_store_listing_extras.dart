/// Market-day scheduling and optional buyer bonus gifts for NGMY Store listings.
class NgmyStoreListingExtras {
  static const List<(int weekday, String short, String full)> weekdays = [
    (DateTime.monday, 'Mon', 'Monday'),
    (DateTime.tuesday, 'Tue', 'Tuesday'),
    (DateTime.wednesday, 'Wed', 'Wednesday'),
    (DateTime.thursday, 'Thu', 'Thursday'),
    (DateTime.friday, 'Fri', 'Friday'),
    (DateTime.saturday, 'Sat', 'Saturday'),
    (DateTime.sunday, 'Sun', 'Sunday'),
  ];

  static List<int> availabilityDays(Map<String, dynamic> listing) {
    final raw = listing['availabilityDays'];
    if (raw is! List || raw.isEmpty) return const [];
    final out = <int>{};
    for (final d in raw) {
      final n = (d as num?)?.toInt();
      if (n != null && n >= DateTime.monday && n <= DateTime.sunday) out.add(n);
    }
    final sorted = out.toList()..sort();
    return sorted;
  }

  static bool hasRestrictedDays(Map<String, dynamic> listing) => availabilityDays(listing).isNotEmpty;

  static bool isVisibleToBuyersToday(Map<String, dynamic> listing) {
    final days = availabilityDays(listing);
    if (days.isEmpty) return true;
    return days.contains(DateTime.now().weekday);
  }

  static String dayName(int weekday, {bool full = false}) {
    for (final w in weekdays) {
      if (w.$1 == weekday) return full ? w.$3 : w.$2;
    }
    return '';
  }

  static String scheduleLabel(Map<String, dynamic> listing) {
    final days = availabilityDays(listing);
    if (days.isEmpty) return 'Every day';
    if (days.length == 1) return 'Only on ${dayName(days.first, full: true)}';
    return 'Only on ${days.map((d) => dayName(d)).join(', ')}';
  }

  static String? nextAvailableMessage(Map<String, dynamic> listing) {
    final days = availabilityDays(listing);
    if (days.isEmpty || isVisibleToBuyersToday(listing)) return null;
    final now = DateTime.now();
    for (var offset = 1; offset <= 7; offset++) {
      final w = now.add(Duration(days: offset)).weekday;
      if (days.contains(w)) {
        return 'On the market ${dayName(w, full: true)}. Check back then.';
      }
    }
    return 'This item is not on the market today.';
  }

  static String bonusGiftTitle(Map<String, dynamic> listing) => (listing['bonusGiftTitle'] ?? '').toString().trim();

  static bool hasBonusGift(Map<String, dynamic> listing) => bonusGiftTitle(listing).isNotEmpty;

  static void applyToListing(Map<String, dynamic> listing, {required List<int> days, required String giftTitle}) {
    listing['availabilityDays'] = days;
    listing['bonusGiftTitle'] = giftTitle.trim();
  }

  static void normalize(Map<String, dynamic> copy) {
    copy['availabilityDays'] = availabilityDays(copy);
    copy['bonusGiftTitle'] = bonusGiftTitle(copy);
  }
}
