import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_cloud_policy.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';
import 'ngmy_supabase_auth.dart';

/// Host-phone menus: master copy on device, snapshot synced for guests on any device.
class NgmyLocalMenuPublishRegistry {
  static const settingsKey = 'ngmy_local_menu_publish_registry';
  static const _guestFetchTimeout = Duration(seconds: 8);

  static String _normSlug(String slug) => slug.trim().toLowerCase();

  static String _slugStorageKey(String slug) => 'ngmy_local_menu_pub_${_normSlug(slug)}';

  static String _slugCloudKey(String slug) => _slugStorageKey(slug);

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['menus'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Future<Map<String, dynamic>> _readLocalRegistry(SharedPreferences prefs) async {
    final raw = prefs.getString(settingsKey);
    if (raw == null || raw.isEmpty) return {};
    try {
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (e) {
      debugPrint('[local menu] local registry decode: $e');
    }
    return {};
  }

  static Future<void> _writeLocalRegistry(SharedPreferences prefs, Map<String, dynamic> registry) async {
    await prefs.setString(settingsKey, jsonEncode(registry));
  }

  static Future<Map<String, dynamic>?> _fetchLocalSlug(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_slugStorageKey(target));
    if (raw == null || raw.isEmpty) return null;
    try {
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (e) {
      debugPrint('[local menu] local fetch $target: $e');
    }
    return null;
  }

  static Future<Map<String, dynamic>?> _fetchCloudSlug(String slug) async {
    final value = await ngmyFetchSettingsValueViaRest(_slugCloudKey(slug), timeout: _guestFetchTimeout);
    if (value != null && value['data'] is Map) return value;
    return null;
  }

  /// Guest / other devices — cloud snapshot first, then same-device cache.
  static Future<Map<String, dynamic>?> fetchBySlugForGuest(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    for (var attempt = 0; attempt < 4; attempt++) {
      final viaCloud = await _fetchCloudSlug(target);
      if (viaCloud != null) return viaCloud;
      final viaLocal = await _fetchLocalSlug(target);
      if (viaLocal != null && viaLocal['data'] is Map) return viaLocal;
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 400 * (attempt + 1)));
    }
    return null;
  }

  static Future<Map<String, dynamic>?> fetchBySlug(String slug) => fetchBySlugForGuest(slug);

  static Future<List<String>> fetchAllSlugs() async {
    final prefs = await SharedPreferences.getInstance();
    final local = _entriesFromValue(await _readLocalRegistry(prefs)).keys;
    final cloudIndex = await ngmyFetchSettingsValueViaRest(settingsKey, timeout: _guestFetchTimeout);
    final cloud = cloudIndex != null ? _entriesFromValue(cloudIndex).keys : const Iterable<String>.empty();
    return {...local, ...cloud}.toList();
  }

  static Future<bool> _syncSnapshotToCloud({
    required String slug,
    required Map<String, dynamic> slugPayload,
    required String publishedAt,
  }) async {
    if (!NgmyCloudPolicy.allowNgmySettingsKey(_slugCloudKey(slug)) ||
        !NgmyCloudPolicy.allowNgmySettingsKey(settingsKey)) {
      return false;
    }
    if (!await ngmyCanReachCloud()) return false;
    await ngmyWaitForSupabaseReady();

    Map<String, dynamic> index = {};
    final existing = await ngmyFetchSettingsValueViaRest(settingsKey, timeout: kNgmyCloudLoadTimeout);
    if (existing != null) index = Map<String, dynamic>.from(existing);

    final entries = _entriesFromValue(index);
    entries[slug] = {'publishedAt': publishedAt};
    index['menus'] = entries;
    index['savedAt'] = publishedAt;

    final slugOk = await ngmyUpsertSettingsRowReliable(_slugCloudKey(slug), slugPayload, updatedAt: publishedAt);
    if (!slugOk) return false;
    await ngmyUpsertSettingsRowReliable(settingsKey, index, updatedAt: publishedAt);
    for (var attempt = 0; attempt < 4; attempt++) {
      final verify = await _fetchCloudSlug(slug);
      if (verify != null && verify['data'] is Map) return true;
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 350 * (attempt + 1)));
    }
    return false;
  }

  /// Saves on host phone and pushes snapshot so guests on any device can open the link.
  static Future<String?> publish({
    required String slug,
    required Map<String, dynamic> data,
  }) async {
    final clean = _normSlug(slug);
    if (clean.isEmpty) return 'Menu needs a link slug before publishing.';
    try {
      final prefs = await SharedPreferences.getInstance();
      final publishedAt = DateTime.now().toUtc().toIso8601String();
      final slugPayload = {
        'data': data,
        'publishedAt': publishedAt,
        'hostMode': 'local_menu',
      };

      await prefs.setString(_slugStorageKey(clean), jsonEncode(slugPayload));
      final registry = await _readLocalRegistry(prefs);
      final entries = _entriesFromValue(registry);
      entries[clean] = {'publishedAt': publishedAt};
      registry['menus'] = entries;
      registry['savedAt'] = publishedAt;
      await _writeLocalRegistry(prefs, registry);

      final localVerify = await _fetchLocalSlug(clean);
      if (localVerify == null || localVerify['data'] is! Map) {
        return 'Could not save menu on this device. Try again.';
      }

      final synced = await _syncSnapshotToCloud(slug: clean, slugPayload: slugPayload, publishedAt: publishedAt);
      if (!synced) {
        return 'Menu saved on your phone. Connect to internet and tap Publish again so anyone can open your link.';
      }
      return null;
    } catch (e) {
      debugPrint('[local menu] publish $clean: $e');
      ngmyInvalidateCloudReachabilityCache();
      return 'Could not publish menu. Check connection and try again.';
    }
  }
}
