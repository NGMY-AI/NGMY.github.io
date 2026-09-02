import 'package:flutter/foundation.dart';

import 'ngmy_db_relay.dart';

/// Cloud-backed Stripe access via Supabase (authoritative when webhook is configured).
/// Reads are relayed through bright-handler (disguised as /api/sync) instead of
/// a direct ngmy_stripe_access select — RLS still restricts this to the
/// caller's own email (or an admin).
abstract final class NgmyStripeCloud {
  static Future<DateTime?> fetchAccessUntil(String email, String productSlug) async {
    final key = email.toLowerCase().trim();
    final slug = productSlug.trim().toLowerCase();
    if (key.isEmpty || slug.isEmpty) return null;

    try {
      final rows = await ngmyDbRelaySelect(
        'ngmy_stripe_access',
        cols: 'access_until',
        eq: {'email': key, 'product': slug},
        single: true,
      );
      if (rows.isEmpty) return null;
      final raw = rows.first['access_until'];
      if (raw == null) return null;
      return DateTime.tryParse(raw.toString());
    } catch (e) {
      if (kDebugMode) {
        debugPrint('[ngmy_stripe_cloud] fetchAccessUntil failed: $e');
      }
      return null;
    }
  }

  static Future<DateTime?> syncAccessFromCloud(String email, String productSlug) async {
    final until = await fetchAccessUntil(email, productSlug);
    if (until == null || !until.isAfter(DateTime.now())) return null;
    return until;
  }

  static Future<Map<String, DateTime>> fetchAllActiveAccess(String email) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return {};

    try {
      final rows = await ngmyDbRelaySelect(
        'ngmy_stripe_access',
        cols: 'product, access_until',
        eq: {'email': key},
      );
      final out = <String, DateTime>{};
      for (final row in rows) {
        final slug = row['product']?.toString() ?? '';
        final until = DateTime.tryParse(row['access_until']?.toString() ?? '');
        if (slug.isEmpty || until == null || !until.isAfter(DateTime.now())) continue;
        out[slug] = until;
      }
      return out;
    } catch (e) {
      if (kDebugMode) {
        debugPrint('[ngmy_stripe_cloud] fetchAllActiveAccess failed: $e');
      }
      return {};
    }
  }

  /// Poll Supabase after checkout — webhook may take a few seconds to arrive.
  static Future<DateTime?> waitForCloudAccess({
    required String email,
    required String productSlug,
    Duration timeout = const Duration(seconds: 45),
    Duration interval = const Duration(seconds: 2),
  }) async {
    final deadline = DateTime.now().add(timeout);
    while (DateTime.now().isBefore(deadline)) {
      final until = await syncAccessFromCloud(email, productSlug);
      if (until != null) return until;
      await Future<void>.delayed(interval);
    }
    return null;
  }
}
