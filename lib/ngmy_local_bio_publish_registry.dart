import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_cloud_policy.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_oauth.dart';
import 'ngmy_settings_cloud.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_local_url_payload.dart';

/// Host-phone bios: device master copy + cloud snapshot + optional URL payload for guests.
class NgmyLocalBioPublishRegistry {
  static const settingsKey = 'ngmy_local_bio_publish_registry';
  static const _guestFetchTimeout = Duration(seconds: 10);

  static String _normSlug(String slug) => slug.trim().toLowerCase();

  static String _slugStorageKey(String slug) => 'ngmy_local_bio_pub_${_normSlug(slug)}';

  static String _slugCloudKey(String slug) => _slugStorageKey(slug);

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['bios'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Map<String, dynamic>? _entryFromRow(dynamic row) {
    if (row is! Map) return null;
    final value = row['value'];
    if (value is! Map) return null;
    return Map<String, dynamic>.from(value);
  }

  static Future<Map<String, dynamic>> _readLocalRegistry(SharedPreferences prefs) async {
    final raw = prefs.getString(settingsKey);
    if (raw == null || raw.isEmpty) return {};
    try {
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (e) {
      debugPrint('[local bio] local registry decode: $e');
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
      debugPrint('[local bio] local fetch $target: $e');
    }
    return null;
  }

  static Future<Map<String, dynamic>?> _fetchCloudSlug(String slug) async {
    final value = await ngmyFetchSettingsValueReliable(_slugCloudKey(slug), timeout: _guestFetchTimeout);
    if (value != null && value['data'] is Map) return value;
    return null;
  }

  static Future<Map<String, dynamic>?> _fetchCloudSlugViaClient(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;
    try {
      await ngmyEnsureSupabaseAuthInitialized();
      await ngmyWaitForSupabaseReady(timeout: _guestFetchTimeout);
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _slugCloudKey(target))
          .maybeSingle()
          .timeout(_guestFetchTimeout);
      final entry = _entryFromRow(row);
      if (entry != null && entry['data'] is Map) return entry;
    } catch (e) {
      debugPrint('[local bio] client fetch $slug: $e');
    }
    return null;
  }

  static String publicUrlFor(String slug, Map<String, dynamic> data, {required String baseUrl}) {
    return ngmyBuildLocalUrlWithEmbeddedPayload(baseUrl, data) ?? baseUrl;
  }

  static Future<Map<String, dynamic>?> fetchBySlugForGuest(String slug) async {
    final fromHash = ngmyReadLocalPayloadFromLaunchUrl();
    if (fromHash != null) {
      return {'data': fromHash, 'publishedAt': DateTime.now().toUtc().toIso8601String()};
    }

    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    for (var attempt = 0; attempt < 5; attempt++) {
      final viaCloud = await _fetchCloudSlug(target);
      if (viaCloud != null) return viaCloud;
      final viaClient = await _fetchCloudSlugViaClient(target);
      if (viaClient != null) return viaClient;
      final viaLocal = await _fetchLocalSlug(target);
      if (viaLocal != null && viaLocal['data'] is Map) return viaLocal;
      if (attempt < 4) await Future<void>.delayed(Duration(milliseconds: 450 * (attempt + 1)));
    }
    return null;
  }

  static Future<Map<String, dynamic>?> fetchBySlug(String slug) => fetchBySlugForGuest(slug);

  static Future<List<String>> fetchAllSlugs() async {
    final prefs = await SharedPreferences.getInstance();
    final local = _entriesFromValue(await _readLocalRegistry(prefs)).keys;
    final cloudIndex = await ngmyFetchSettingsValueReliable(settingsKey, timeout: _guestFetchTimeout);
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

    await ngmyEnsureSupabaseAuthInitialized();
    await ngmyWaitForSupabaseReady();

    Map<String, dynamic> index = {};
    final existing = await ngmyFetchSettingsValueReliable(settingsKey, timeout: kNgmyCloudLoadTimeout);
    if (existing != null) index = Map<String, dynamic>.from(existing);

    final entries = _entriesFromValue(index);
    entries[slug] = {'publishedAt': publishedAt};
    index['bios'] = entries;
    index['savedAt'] = publishedAt;

    return ngmyUpsertSettingsBatchReliable(
      [
        (key: _slugCloudKey(slug), value: slugPayload),
        (key: settingsKey, value: index),
      ],
      updatedAt: publishedAt,
    );
  }

  static Future<String?> publish({
    required String slug,
    required Map<String, dynamic> data,
  }) async {
    final clean = _normSlug(slug);
    if (clean.isEmpty) return 'Bio needs a link slug before publishing.';
    try {
      final encoded = jsonEncode(data);
      if (encoded.length > 900000) {
        return 'This Bio is too large to publish. Use a smaller profile photo and try again.';
      }

      final prefs = await SharedPreferences.getInstance();
      final publishedAt = DateTime.now().toUtc().toIso8601String();
      final slugPayload = {
        'data': data,
        'publishedAt': publishedAt,
        'hostMode': 'local_bio',
      };

      await prefs.setString(_slugStorageKey(clean), jsonEncode(slugPayload));
      final registry = await _readLocalRegistry(prefs);
      final entries = _entriesFromValue(registry);
      entries[clean] = {'publishedAt': publishedAt};
      registry['bios'] = entries;
      registry['savedAt'] = publishedAt;
      await _writeLocalRegistry(prefs, registry);

      final localVerify = await _fetchLocalSlug(clean);
      if (localVerify == null || localVerify['data'] is! Map) {
        return 'Could not save Bio on this device. Try again.';
      }

      final hashOk = ngmyBuildLocalUrlWithEmbeddedPayload('https://ngmy.org/local-bio/$clean', data) != null;
      final synced = await _syncSnapshotToCloud(slug: clean, slugPayload: slugPayload, publishedAt: publishedAt);

      if (synced || hashOk) return null;
      return 'Could not reach the host relay. Check internet and tap Publish again.';
    } catch (e) {
      debugPrint('[local bio] publish $clean: $e');
      ngmyInvalidateCloudReachabilityCache();
      return 'Could not publish Bio. Check connection and try again.';
    }
  }
}
