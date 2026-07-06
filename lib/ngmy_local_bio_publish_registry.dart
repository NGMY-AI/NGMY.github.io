import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Device-local published bios — no Supabase. Links work on this browser/device only.
class NgmyLocalBioPublishRegistry {
  static const registryKey = 'ngmy_local_bio_publish_registry';

  static String _normSlug(String slug) => slug.trim().toLowerCase();

  static String _slugStorageKey(String slug) => 'ngmy_local_bio_pub_${_normSlug(slug)}';

  static Map<String, dynamic> _entriesFromRegistry(Map<String, dynamic> registry) {
    final entries = registry['bios'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Future<Map<String, dynamic>> _readRegistry(SharedPreferences prefs) async {
    final raw = prefs.getString(registryKey);
    if (raw == null || raw.isEmpty) return {};
    try {
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (e) {
      debugPrint('[local bio] registry decode: $e');
    }
    return {};
  }

  static Future<void> _writeRegistry(SharedPreferences prefs, Map<String, dynamic> registry) async {
    await prefs.setString(registryKey, jsonEncode(registry));
  }

  static Future<Map<String, dynamic>?> fetchBySlug(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_slugStorageKey(target));
    if (raw == null || raw.isEmpty) return null;
    try {
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (e) {
      debugPrint('[local bio] fetch $target: $e');
    }
    return null;
  }

  static Future<List<String>> fetchAllSlugs() async {
    final prefs = await SharedPreferences.getInstance();
    final registry = await _readRegistry(prefs);
    return _entriesFromRegistry(registry).keys.toList();
  }

  static Future<String?> publish({
    required String slug,
    required Map<String, dynamic> data,
  }) async {
    final clean = _normSlug(slug);
    if (clean.isEmpty) return 'Bio needs a link slug before publishing.';
    try {
      final prefs = await SharedPreferences.getInstance();
      final publishedAt = DateTime.now().toUtc().toIso8601String();
      final payload = {
        'data': data,
        'publishedAt': publishedAt,
      };
      await prefs.setString(_slugStorageKey(clean), jsonEncode(payload));

      final registry = await _readRegistry(prefs);
      final entries = _entriesFromRegistry(registry);
      entries[clean] = {'publishedAt': publishedAt};
      registry['bios'] = entries;
      registry['savedAt'] = publishedAt;
      await _writeRegistry(prefs, registry);

      final verify = await fetchBySlug(clean);
      if (verify != null && verify['data'] is Map) return null;
      return 'Could not save published Bio on this device. Try again.';
    } catch (e) {
      debugPrint('[local bio] publish $clean: $e');
      return 'Could not publish on this device. Try again.';
    }
  }
}
