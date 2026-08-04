import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Cloud-backed Stripe access via Supabase (authoritative when webhook is configured).
abstract final class NgmyStripeCloud {
  static SupabaseClient? get _client {
    try {
      return Supabase.instance.client;
    } catch (_) {
      return null;
    }
  }

  static Future<DateTime?> fetchAccessUntil(String email, String productSlug) async {
    final client = _client;
    final key = email.toLowerCase().trim();
    final slug = productSlug.trim().toLowerCase();
    if (client == null || key.isEmpty || slug.isEmpty) return null;

    try {
      final row = await client
          .from('ngmy_stripe_access')
          .select('access_until')
          .eq('email', key)
          .eq('product', slug)
          .maybeSingle();
      if (row == null) return null;
      final raw = row['access_until'];
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
    final client = _client;
    final key = email.toLowerCase().trim();
    if (client == null || key.isEmpty) return {};

    try {
      final rows = await client
          .from('ngmy_stripe_access')
          .select('product, access_until')
          .eq('email', key);
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
