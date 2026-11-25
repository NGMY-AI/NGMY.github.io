import 'dart:async';

import 'package:flutter/foundation.dart';

/// Where a notification leads when it is tapped: the place id of the screen it came from
/// (the same ids the app's AI uses to open places, see NgmyAiAppBridge).
///
/// Signal Grid trades go to Signal Grid, Options trades to Options, Scalper trades to Scalper,
/// Civic Registry alerts to Civic Registry, and so on. Anything unknown goes home.
String ngmyNotificationRoute(String? tag, {String title = '', String body = ''}) {
  final t = (tag ?? '').toLowerCase().trim();
  final head = title.toLowerCase().trim();
  bool starts(List<String> prefixes) => prefixes.any(t.startsWith);

  // Signal Grid trade alerts: "Options: bought …", "Scalper: sold …", "Signal Grid: …".
  if (t.startsWith('sg_trade_') || t.startsWith('sg_')) {
    if (head.startsWith('options')) return 'options';
    if (head.startsWith('scalper')) return 'scalper';
    return 'signal_grid';
  }
  if (t.startsWith('signal_')) return 'signal_grid';

  if (starts(['civic', 'admin_civic', 'admin_registrar', 'registrar_'])) return 'civic_registry';
  if (starts(['announcement_', 'news_'])) return 'news';
  if (starts(['game_invite', 'game_'])) return 'game_center';
  if (starts(['store_', 'admin_store_'])) return 'store';
  if (starts(['house_', 'admin_house_care', 'admin_helper_apps', 'admin_help_requests'])) return 'help_center';
  if (starts(['job_', 'admin_job_posts'])) return 'media';
  // Domain renewal reminders and every other admin alert: the admin dashboard.
  if (starts(['admin_', 'day_before_', 'expiry_day_'])) return 'admin';
  // Money in or out, deposits, withdrawals: the wallet on the profile.
  if (starts(['txn_', 'clock', 'balance'])) return 'profile';
  if (t.startsWith('advisor_')) return 'home';

  // No known tag: a few plain words in the title.
  final blob = '$head ${body.toLowerCase()}';
  if (blob.contains('civic')) return 'civic_registry';
  if (blob.contains('options:')) return 'options';
  if (blob.contains('scalper:')) return 'scalper';
  if (blob.contains('signal grid')) return 'signal_grid';
  return 'home';
}

/// Hands a tapped notification's place to the open app. A tap that arrives before the app is ready
/// (still signing in or loading) waits here and opens as soon as the main screen attaches.
class NgmyNotificationOpen {
  NgmyNotificationOpen._();

  static String? _pending;
  static Future<void> Function(String route)? _handler;

  @visibleForTesting
  static String? get pending => _pending;

  /// A notification was tapped.
  static void deliver(String? route) {
    final r = (route ?? '').trim();
    if (r.isEmpty) return;
    final h = _handler;
    if (h == null) {
      _pending = r;
      return;
    }
    unawaited(h(r));
  }

  /// The main screen is ready to open places. Opens a tap that was waiting.
  static void attach(Future<void> Function(String route) handler) {
    _handler = handler;
    final p = _pending;
    _pending = null;
    if (p != null) unawaited(handler(p));
  }

  static void detach(Future<void> Function(String route) handler) {
    if (_handler == handler) _handler = null; // tear-offs of the same method are equal, not identical
  }

  @visibleForTesting
  static void reset() {
    _pending = null;
    _handler = null;
  }
}
