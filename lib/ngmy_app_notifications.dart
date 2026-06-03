import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_store_listing_extras.dart';

/// Dedupe keys for once-per-day store market alerts.
String ngmyStoreMarketDayPrefsKey(String listingId, DateTime day) =>
    'ngmy_store_market_${listingId}_${day.year}_${day.month}_${day.day}';

/// Listings with restricted market days that are on sale today (for buyer alerts).
List<Map<String, dynamic>> ngmyStoreListingsOnMarketToday(
  Iterable<Map<String, dynamic>> listings,
) {
  final out = <Map<String, dynamic>>[];
  for (final raw in listings) {
    final listing = Map<String, dynamic>.from(raw);
    if (!NgmyStoreListingExtras.hasRestrictedDays(listing)) continue;
    if (!NgmyStoreListingExtras.isVisibleToBuyersToday(listing)) continue;
    if ((listing['status'] ?? 'active').toString() != 'active') continue;
    out.add(listing);
  }
  return out;
}

Future<bool> ngmyWasStoreMarketNotifiedToday(String listingId) async {
  final prefs = await SharedPreferences.getInstance();
  return prefs.getBool(ngmyStoreMarketDayPrefsKey(listingId, DateTime.now())) == true;
}

Future<void> ngmyMarkStoreMarketNotifiedToday(String listingId) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setBool(ngmyStoreMarketDayPrefsKey(listingId, DateTime.now()), true);
}

typedef NgmyInAppNotify = Future<void> Function({
  required String title,
  required String body,
  String? tag,
  Duration cooldown,
});

/// Wired from the app shell so screens like MainScreen can show in-app / push alerts.
NgmyInAppNotify? ngmyInAppNotify;

typedef NgmyStoreOrdersChanged = void Function(
  List<Map<String, dynamic>> previousOrders,
  List<Map<String, dynamic>> nextOrders,
);

/// Wired from the app shell when store orders refresh (e.g. seller polling).
NgmyStoreOrdersChanged? ngmyOnStoreOrdersChanged;

bool ngmyIsGameRelatedTransaction({String? sourceDetails}) {
  final s = (sourceDetails ?? '').toLowerCase();
  if (s.isEmpty) return false;
  return s.contains('game') || s.contains('dice roll') || s.contains('dice');
}
