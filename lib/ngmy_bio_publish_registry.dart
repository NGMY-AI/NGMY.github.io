import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_cloud_policy.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_supabase_config.dart';

/// Cloud registry for public Bio links — https://ngmy.org/bio/{slug}
///
/// Each published bio is stored under its own settings key so guests only
/// download one page (not the entire registry with every image).
class NgmyBioPublishRegistry {
  static const settingsKey = 'ngmy_bio_publish_registry';
  static const _guestFetchTimeout = Duration(seconds: 8);

  static String _normSlug(String slug) => slug.trim().toLowerCase();

  static String _slugSettingsKey(String slug) => 'ngmy_bio_pub_${_normSlug(slug)}';

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['bios'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Map<String, dynamic>? _entryFromSettingsRow(dynamic row) {
    if (row is! Map) return null;
    final value = row['value'];
    if (value is! Map) return null;
    return Map<String, dynamic>.from(value);
  }

  static Future<Map<String, dynamic>?> _fetchSettingsRowViaRest(String key) async {
    try {
      final uri = Uri.parse('${kNgmySupabaseUrl.trim()}/rest/v1/ngmy_settings?key=eq.$key&select=value');
      final resp = await http.get(uri, headers: {
        'apikey': kNgmySupabaseAnonKey,
        'Authorization': 'Bearer $kNgmySupabaseAnonKey',
      }).timeout(_guestFetchTimeout);
      if (resp.statusCode != 200) return null;
      final decoded = jsonDecode(resp.body);
      if (decoded is! List || decoded.isEmpty) return null;
      return _entryFromSettingsRow(decoded.first);
    } catch (e) {
      debugPrint('[bio registry] rest fetch $key: $e');
      return null;
    }
  }

  static Future<Map<String, dynamic>?> _fetchRegistryValueViaRest() async {
    return _fetchSettingsRowViaRest(settingsKey);
  }

  static Future<Map<String, dynamic>?> _fetchRegistryValue() async {
    if (!await ngmyCanReachCloud()) return null;
    await ngmyWaitForSupabaseReady();
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', settingsKey)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is! Map) return null;
      return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[bio registry] supabase fetch: $e');
      return _fetchRegistryValueViaRest();
    }
  }

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaRest(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    // Fast path — one bio per row (small payload for guests).
    final perSlug = await _fetchSettingsRowViaRest(_slugSettingsKey(target));
    if (perSlug != null) return perSlug;

    // Legacy path — entire registry blob (may be large).
    final viaRest = await _fetchRegistryValueViaRest();
    if (viaRest != null) {
      final entry = _entriesFromValue(viaRest)[target];
      if (entry != null) return entry;
    }
    return null;
  }

  static Future<Map<String, dynamic>?> _fetchSlugEntryViaSupabase(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;
    if (!await ngmyCanReachCloud()) return null;
    await ngmyWaitForSupabaseReady(timeout: _guestFetchTimeout);
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _slugSettingsKey(target))
          .maybeSingle()
          .timeout(_guestFetchTimeout);
      if (row != null) {
        final value = row['value'];
        if (value is Map) return Map<String, dynamic>.from(value);
      }
    } catch (e) {
      debugPrint('[bio registry] supabase slug fetch $target: $e');
    }

    final value = await _fetchRegistryValue();
    if (value == null) return null;
    return _entriesFromValue(value)[target];
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
    if (clean.isEmpty) return 'Bio needs a link slug before publishing.';
    if (!await ngmyCanReachCloud()) {
      return 'No internet — publish again when online so guests can open your Bio.';
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
        final row = await Supabase.instance.client
            .from('ngmy_settings')
            .select()
            .eq('key', settingsKey)
            .maybeSingle()
            .timeout(kNgmyCloudLoadTimeout);
        if (row != null) {
          final raw = row['value'];
          if (raw is Map) value = Map<String, dynamic>.from(raw);
        }
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

      if (!NgmyCloudPolicy.allowNgmySettingsKey(settingsKey) ||
          !NgmyCloudPolicy.allowNgmySettingsKey(_slugSettingsKey(clean))) {
        return 'Could not publish Bio to cloud. Try again in a moment.';
      }
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _slugSettingsKey(clean),
          'value': slugPayload,
          'updated_at': publishedAt,
        },
        {
          'key': settingsKey,
          'value': value,
          'updated_at': publishedAt,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      return null;
    } catch (e) {
      debugPrint('[bio registry] publish $clean: $e');
      return 'Could not publish Bio to cloud. Check connection and try again.';
    }
  }
}
