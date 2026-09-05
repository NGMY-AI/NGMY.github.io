import 'package:flutter/foundation.dart';

import 'ngmy_bio_urls.dart';
import 'ngmy_cloud_policy.dart';
import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';
import 'ngmy_supabase_auth.dart';

/// Cloud registry for public Bio links — https://ngmy.org/bio/{slug}
///
/// Each published bio is stored under its own settings key so guests only
/// download one page (not the entire registry with every image).
class NgmyBioPublishRegistry {
  static const settingsKey = 'ngmy_bio_publish_registry';
  static const _guestFetchTimeout = Duration(seconds: 12);

  static String _normSlug(String slug) => ngmySanitizeBioSlug(slug);

  static String _slugSettingsKey(String slug) => 'ngmy_bio_pub_${_normSlug(slug)}';

  /// Sanitized slug first, then a letters+digits fallback for older publishes.
  static List<String> _slugLookupKeys(String slug) {
    final keys = <String>[];
    final clean = _normSlug(slug);
    if (clean.isNotEmpty) keys.add(clean);
    final raw = slug.trim().toLowerCase().replaceAll(RegExp(r'[^a-z0-9]'), '');
    if (raw.isNotEmpty && raw != clean) keys.add(raw);
    return keys;
  }

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['bios'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Future<Map<String, dynamic>?> _fetchSettingsRowViaRest(
    String key, {
    bool anonymous = false,
  }) =>
      ngmyFetchSettingsValueViaRest(key, timeout: _guestFetchTimeout, anonymous: anonymous);

  static Future<Map<String, dynamic>?> _fetchRegistryValueViaRest({bool anonymous = false}) async {
    return _fetchSettingsRowViaRest(settingsKey, anonymous: anonymous);
  }

  static Future<Map<String, dynamic>?> _fetchRegistryValue() async {
    if (!await ngmyCanReachCloud()) return null;
    await ngmyWaitForSupabaseReady();
    try {
      final value = await ngmyDbRelaySettingsFetch(settingsKey, timeout: kNgmyCloudLoadTimeout);
      if (value == null) return _fetchRegistryValueViaRest();
      return value;
    } catch (e) {
      debugPrint('[bio registry] supabase fetch: $e');
      return _fetchRegistryValueViaRest();
    }
  }

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaRest(
    String slug, {
    bool anonymous = false,
  }) async {
    for (final target in _slugLookupKeys(slug)) {
      final perSlug = await _fetchSettingsRowViaRest(
        'ngmy_bio_pub_$target',
        anonymous: anonymous,
      );
      if (perSlug != null && perSlug['data'] is Map) return perSlug;
    }

    // Legacy path — entire registry blob (may be large).
    final viaRest = await _fetchRegistryValueViaRest(anonymous: anonymous);
    if (viaRest != null) {
      final entries = _entriesFromValue(viaRest);
      for (final target in _slugLookupKeys(slug)) {
        final entry = entries[target];
        if (entry != null && entry['data'] is Map) return entry;
      }
    }
    return null;
  }

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaSupabase(String slug) async {
    await ngmyWaitForSupabaseReady(timeout: _guestFetchTimeout);
    try {
      for (final target in _slugLookupKeys(slug)) {
        final entry = await ngmyDbRelaySettingsFetch(
          'ngmy_bio_pub_$target',
          timeout: _guestFetchTimeout,
          anonymous: true,
        );
        if (entry != null && entry['data'] is Map) return entry;
      }
    } catch (e) {
      debugPrint('[bio registry] supabase slug fetch $slug: $e');
    }

    final value = await _fetchRegistryValue();
    if (value == null) return null;
    final entries = _entriesFromValue(value);
    for (final target in _slugLookupKeys(slug)) {
      final entry = entries[target];
      if (entry != null && entry['data'] is Map) return entry;
    }
    return null;
  }

  /// Guest-facing fetch — always anonymous so a leftover login cannot hide a public Bio.
  static Future<Map<String, dynamic>?> fetchBySlugForGuest(String slug) async {
    if (_slugLookupKeys(slug).isEmpty) return null;

    try {
      final viaAnon = await _fetchSlugEntryViaRest(slug, anonymous: true);
      if (viaAnon != null) return viaAnon;
    } catch (e) {
      debugPrint('[bio registry] guest rest $slug: $e');
    }

    return _fetchSlugEntryViaSupabase(slug);
  }

  /// Same as [fetchBySlugForGuest] but tells the UI a network blip from a missing row.
  static Future<({bool reachable, Map<String, dynamic>? entry})> fetchBySlugForGuestStatus(
    String slug,
  ) async {
    if (_slugLookupKeys(slug).isEmpty) {
      return (reachable: true, entry: null);
    }
    try {
      final viaAnon = await ngmyDbRelaySettingsFetch(
        _slugSettingsKey(slug),
        timeout: _guestFetchTimeout,
        anonymous: true,
      );
      if (viaAnon != null && viaAnon['data'] is Map) {
        return (reachable: true, entry: viaAnon);
      }
      final fallback = await fetchBySlugForGuest(slug);
      return (reachable: true, entry: fallback);
    } catch (e) {
      debugPrint('[bio registry] guest status $slug: $e');
      try {
        final fallback = await fetchBySlugForGuest(slug);
        if (fallback != null) return (reachable: true, entry: fallback);
      } catch (_) {}
      return (reachable: false, entry: null);
    }
  }

  static Future<Map<String, dynamic>?> fetchBySlug(String slug) => fetchBySlugForGuest(slug);

  static Future<List<String>> fetchAllSlugs() async {
    final value = await _fetchRegistryValueViaRest() ?? await _fetchRegistryValue();
    if (value == null) return [];
    return _entriesFromValue(value).keys.toList();
  }

  static Future<String?> publish({
    required String slug,
    required Map<String, dynamic> data,
    required String createdByEmail,
  }) async {
    final clean = _normSlug(slug);
    if (clean.isEmpty) return 'Bio needs a short link (up to 10 letters) before publishing.';
    if (!await ngmyCanReachCloud()) {
      return 'No internet — publish again when online so guests can open your Bio.';
    }
    if (!NgmyCloudPolicy.allowNgmySettingsKey(settingsKey) ||
        !NgmyCloudPolicy.allowNgmySettingsKey(_slugSettingsKey(clean))) {
      return 'Could not publish Bio to cloud. Try again in a moment.';
    }
    await ngmyWaitForSupabaseReady();
    try {
      final publishedAt = DateTime.now().toUtc().toIso8601String();
      final email = createdByEmail.toLowerCase().trim();
      final slugPayload = {
        'data': data,
        'publishedAt': publishedAt,
        'createdByEmail': email,
      };

      Map<String, dynamic> value = {};
      try {
        final raw = await ngmyDbRelaySettingsFetch(settingsKey, timeout: kNgmyCloudLoadTimeout);
        if (raw != null) value = raw;
      } catch (_) {
        final rest = await _fetchRegistryValueViaRest();
        if (rest != null) value = rest;
      }

      final entries = _entriesFromValue(value);
      // Index only — full payload lives on the per-slug key so guests load fast.
      entries[clean] = {
        'publishedAt': publishedAt,
        'createdByEmail': email,
      };
      value['bios'] = entries;
      value['savedAt'] = publishedAt;

      final slugKey = _slugSettingsKey(clean);
      final slugOk = await ngmyUpsertSettingsRowReliable(slugKey, slugPayload, updatedAt: publishedAt);
      if (!slugOk) {
        return 'Could not publish Bio to cloud. Check connection and try again.';
      }
      final indexOk = await ngmyUpsertSettingsRowReliable(settingsKey, value, updatedAt: publishedAt);
      if (!indexOk) {
        debugPrint('[bio registry] publish $clean: index row failed after slug row saved');
      }

      for (var attempt = 0; attempt < 4; attempt++) {
        // Verify as a guest (anon key) — that is how the public link is opened.
        final verify = await ngmyFetchSettingsValueViaRest(
          slugKey,
          timeout: _guestFetchTimeout,
          anonymous: true,
        );
        if (verify != null && verify['data'] is Map) return null;
        if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 350 * (attempt + 1)));
      }
      return 'Bio saved locally but the public link is not live yet. Try Publish again in a few seconds.';
    } catch (e) {
      debugPrint('[bio registry] publish $clean: $e');
      ngmyInvalidateCloudReachabilityCache();
      return 'Could not publish Bio to cloud. Check connection and try again.';
    }
  }

  /// Removes the public Bio link from Supabase so guests can no longer open it.
  /// Deletes the per-slug payload row (frees space) and drops the slug from the index.
  static Future<void> unpublishSlug(String slug, {String? ownerEmail}) async {
    final clean = _normSlug(slug);
    if (clean.isEmpty) return;
    if (!await ngmyCanReachCloud()) return;
    await ngmyWaitForSupabaseReady();
    try {
      final slugKey = _slugSettingsKey(clean);
      final email = (ownerEmail ?? '').toLowerCase().trim();

      if (email.isNotEmpty) {
        final existing = await ngmyFetchSettingsValueReliable(slugKey, timeout: _guestFetchTimeout);
        final owner = (existing?['createdByEmail'] ?? '').toString().toLowerCase().trim();
        if (owner.isNotEmpty && owner != email) {
          debugPrint('[bio registry] unpublish blocked — owner mismatch for $clean');
          return;
        }
      }

      await ngmyDeleteSettingsKeyReliable(slugKey);

      Map<String, dynamic> value = {};
      try {
        final raw = await ngmyDbRelaySettingsFetch(settingsKey, timeout: kNgmyCloudLoadTimeout);
        if (raw != null) value = raw;
      } catch (_) {
        final rest = await _fetchRegistryValueViaRest();
        if (rest != null) value = rest;
      }

      final entries = _entriesFromValue(value);
      if (!entries.containsKey(clean)) return;

      if (email.isNotEmpty) {
        final entryOwner = (entries[clean]?['createdByEmail'] ?? '').toString().toLowerCase().trim();
        if (entryOwner.isNotEmpty && entryOwner != email) return;
      }

      entries.remove(clean);
      value['bios'] = entries;
      value['savedAt'] = DateTime.now().toUtc().toIso8601String();
      await ngmyUpsertSettingsRowReliable(settingsKey, value);
    } catch (e) {
      debugPrint('[bio registry] unpublish $clean: $e');
    }
  }
}
