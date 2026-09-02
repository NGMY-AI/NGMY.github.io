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
  static const _guestFetchTimeout = Duration(seconds: 8);

  static String _normSlug(String slug) => ngmySanitizeBioSlug(slug);

  static String _slugSettingsKey(String slug) => 'ngmy_bio_pub_${_normSlug(slug)}';

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['bios'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Future<Map<String, dynamic>?> _fetchSettingsRowViaRest(String key) =>
      ngmyFetchSettingsValueViaRest(key, timeout: _guestFetchTimeout);

  static Future<Map<String, dynamic>?> _fetchRegistryValueViaRest() async {
    return _fetchSettingsRowViaRest(settingsKey);
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

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaRest(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    final perSlug = await _fetchSettingsRowViaRest(_slugSettingsKey(target));
    if (perSlug != null && perSlug['data'] is Map) return perSlug;

    // Legacy path — entire registry blob (may be large).
    final viaRest = await _fetchRegistryValueViaRest();
    if (viaRest != null) {
      final entry = _entriesFromValue(viaRest)[target];
      if (entry != null && entry['data'] is Map) return entry;
    }
    return null;
  }

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaSupabase(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;
    if (!await ngmyCanReachCloud()) return null;
    await ngmyWaitForSupabaseReady(timeout: _guestFetchTimeout);
    try {
      final entry = await ngmyDbRelaySettingsFetch(_slugSettingsKey(target), timeout: _guestFetchTimeout);
      if (entry != null && entry['data'] is Map) return entry;
    } catch (e) {
      debugPrint('[bio registry] supabase slug fetch $target: $e');
    }

    final value = await _fetchRegistryValue();
    if (value == null) return null;
    final entry = _entriesFromValue(value)[target];
    if (entry != null && entry['data'] is Map) return entry;
    return null;
  }

  /// Guest-facing fetch — REST first, short timeout, no double download.
  static Future<Map<String, dynamic>?> fetchBySlugForGuest(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    final viaRest = await _fetchSlugEntryViaRest(target);
    if (viaRest != null) return viaRest;

    return _fetchSlugEntryViaSupabase(target);
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
        final verify = await ngmyFetchSettingsValueViaRest(slugKey, timeout: _guestFetchTimeout);
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
