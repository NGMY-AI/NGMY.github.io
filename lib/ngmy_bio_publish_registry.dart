import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_supabase_config.dart';

/// Cloud registry for public Bio links — https://ngmy.org/bio/{slug}
class NgmyBioPublishRegistry {
  static const settingsKey = 'ngmy_bio_publish_registry';

  static String _normSlug(String slug) => slug.trim().toLowerCase();

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['bios'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Future<Map<String, dynamic>?> _fetchRegistryValueViaRest() async {
    try {
      final uri = Uri.parse('${kNgmySupabaseUrl.trim()}/rest/v1/ngmy_settings?key=eq.$settingsKey&select=value');
      final resp = await http.get(uri, headers: {
        'apikey': kNgmySupabaseAnonKey,
        'Authorization': 'Bearer $kNgmySupabaseAnonKey',
      }).timeout(kNgmyCloudLoadTimeout);
      if (resp.statusCode != 200) return null;
      final decoded = jsonDecode(resp.body);
      if (decoded is! List || decoded.isEmpty) return null;
      final row = decoded.first;
      if (row is! Map) return null;
      final value = row['value'];
      if (value is! Map) return null;
      return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[bio registry] rest fetch: $e');
      return null;
    }
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

  static Future<Map<String, dynamic>?> fetchBySlug(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    final viaRest = await _fetchRegistryValueViaRest();
    if (viaRest != null) {
      final entry = _entriesFromValue(viaRest)[target];
      if (entry != null) return entry;
    }

    final value = await _fetchRegistryValue();
    if (value == null) return null;
    return _entriesFromValue(value)[target];
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
    if (clean.isEmpty) return 'Bio needs a link slug before publishing.';
    if (!await ngmyCanReachCloud()) {
      return 'No internet — publish again when online so guests can open your Bio.';
    }
    await ngmyWaitForSupabaseReady();
    try {
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
      entries[clean] = {
        'data': data,
        'publishedAt': DateTime.now().toUtc().toIso8601String(),
        'createdByEmail': createdByEmail.toLowerCase().trim(),
      };
      value['bios'] = entries;
      value['savedAt'] = DateTime.now().toUtc().toIso8601String();

      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': settingsKey,
          'value': value,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      return null;
    } catch (e) {
      debugPrint('[bio registry] publish $clean: $e');
      return 'Could not publish Bio to cloud. Check connection and try again.';
    }
  }
}
