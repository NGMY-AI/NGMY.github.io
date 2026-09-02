import 'package:flutter/foundation.dart';

import 'ngmy_bio_urls.dart';
import 'ngmy_cloud_policy.dart';
import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';
import 'ngmy_supabase_auth.dart';

/// Cloud registry for public menu links — https://ngmy.org/menu/{slug}
///
/// Each published menu is stored under its own settings key so guests only
/// download one page (not the entire registry with every menu).
class NgmyMenuPublishRegistry {
  static const settingsKey = 'ngmy_menu_publish_registry';
  static const _guestFetchTimeout = Duration(seconds: 8);

  static String _normSlug(String slug) {
    final cleaned = ngmySanitizeBioSlug(slug);
    if (cleaned.isNotEmpty) return cleaned;
    return slug.trim().toLowerCase();
  }

  static List<String> _slugLookupKeys(String slug) {
    final keys = <String>[];
    final raw = slug.trim().toLowerCase();
    final clean = ngmySanitizeBioSlug(slug);
    if (clean.isNotEmpty) keys.add(clean);
    if (raw.isNotEmpty && raw != clean) keys.add(raw);
    return keys;
  }

  static String _slugSettingsKey(String slug) => 'ngmy_menu_pub_${_normSlug(slug)}';

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['menus'];
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
      debugPrint('[menu registry] supabase fetch: $e');
      return _fetchRegistryValueViaRest();
    }
  }

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaRest(String slug) async {
    final target = slug.trim().toLowerCase();
    if (target.isEmpty) return null;

    final perSlug = await _fetchSettingsRowViaRest(_slugSettingsKey(target));
    if (perSlug != null && perSlug['data'] is Map) return perSlug;

    final viaRest = await _fetchRegistryValueViaRest();
    if (viaRest != null) {
      final entry = _entriesFromValue(viaRest)[target];
      if (entry != null && entry['data'] is Map) return entry;
    }
    return null;
  }

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaSupabase(String slug) async {
    final target = slug.trim().toLowerCase();
    if (target.isEmpty) return null;
    if (!await ngmyCanReachCloud()) return null;
    await ngmyWaitForSupabaseReady(timeout: _guestFetchTimeout);
    try {
      final entry = await ngmyDbRelaySettingsFetch(_slugSettingsKey(target), timeout: _guestFetchTimeout);
      if (entry != null && entry['data'] is Map) return entry;
    } catch (e) {
      debugPrint('[menu registry] slug fetch $target: $e');
    }
    final value = await _fetchRegistryValue();
    if (value == null) return null;
    final entry = _entriesFromValue(value)[target];
    if (entry != null && entry['data'] is Map) return entry;
    return null;
  }

  static Future<Map<String, dynamic>?> fetchBySlug(String slug) async {
    for (final key in _slugLookupKeys(slug)) {
      final viaRest = await _fetchSlugEntryViaRest(key);
      if (viaRest != null) return viaRest;
      final viaSb = await _fetchSlugEntryViaSupabase(key);
      if (viaSb != null) return viaSb;
    }
    return null;
  }

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
    if (clean.isEmpty) return 'Menu needs a link slug before publishing.';
    if (!await ngmyCanReachCloud()) {
      return 'No internet — publish again when online so guests can open your menu.';
    }
    if (!NgmyCloudPolicy.allowNgmySettingsKey(settingsKey) ||
        !NgmyCloudPolicy.allowNgmySettingsKey(_slugSettingsKey(clean))) {
      return 'Could not publish menu to cloud. Try again in a moment.';
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
      entries[clean] = {
        'publishedAt': publishedAt,
        'createdByEmail': email,
      };
      value['menus'] = entries;
      value['savedAt'] = publishedAt;

      final slugKey = _slugSettingsKey(clean);
      final slugOk = await ngmyUpsertSettingsRowReliable(slugKey, slugPayload, updatedAt: publishedAt);
      if (!slugOk) {
        return 'Could not publish menu to cloud. Check connection and try again.';
      }
      final indexOk = await ngmyUpsertSettingsRowReliable(settingsKey, value, updatedAt: publishedAt);
      if (!indexOk) {
        debugPrint('[menu registry] publish $clean: index row failed after slug row saved');
      }

      for (var attempt = 0; attempt < 4; attempt++) {
        final verify = await ngmyFetchSettingsValueViaRest(slugKey, timeout: _guestFetchTimeout);
        if (verify != null && verify['data'] is Map) return null;
        if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 350 * (attempt + 1)));
      }
      return 'Menu saved locally but the public link is not live yet. Try Publish again in a few seconds.';
    } catch (e) {
      debugPrint('[menu registry] publish $clean: $e');
      ngmyInvalidateCloudReachabilityCache();
      return 'Could not publish menu to cloud. Check connection and try again.';
    }
  }

  /// Removes the public menu link from Supabase so guests can no longer open it.
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
          debugPrint('[menu registry] unpublish blocked — owner mismatch for $clean');
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
      value['menus'] = entries;
      value['savedAt'] = DateTime.now().toUtc().toIso8601String();
      await ngmyUpsertSettingsRowReliable(settingsKey, value);
    } catch (e) {
      debugPrint('[menu registry] unpublish $clean: $e');
    }
  }
}
