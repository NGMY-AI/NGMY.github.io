import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_bio_urls.dart';
import 'ngmy_local_url_payload.dart';

/// Host-phone bios: device-local master copy + optional URL payload for guests. No Supabase.
class NgmyLocalBioPublishRegistry {
  static const settingsKey = 'ngmy_local_bio_publish_registry';

  static String _normSlug(String slug) => ngmySanitizeBioSlug(slug);

  static String _slugStorageKey(String slug) => 'ngmy_local_bio_pub_${_normSlug(slug)}';

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['bios'];
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

    final viaLocal = await _fetchLocalSlug(target);
    if (viaLocal != null && viaLocal['data'] is Map) return viaLocal;
    return null;
  }

  static Future<Map<String, dynamic>?> fetchBySlug(String slug) => fetchBySlugForGuest(slug);

  static Future<List<String>> fetchAllSlugs() async {
    final prefs = await SharedPreferences.getInstance();
    return _entriesFromValue(await _readLocalRegistry(prefs)).keys.toList();
  }

  static Future<String?> publish({
    required String slug,
    required Map<String, dynamic> data,
  }) async {
    final clean = _normSlug(slug);
    if (clean.isEmpty) return 'Bio needs a short link (up to 10 letters) before publishing.';
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
      if (hashOk) return null;
      return 'Bio saved on this device. Use a smaller profile photo to build a shareable link.';
    } catch (e) {
      debugPrint('[local bio] publish $clean: $e');
      return 'Could not publish Bio on this device. Try again.';
    }
  }
}
