import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_supabase_config.dart';

/// Admin-published invoice links resolve from this cloud registry (any device /
/// browser, no login) — mirrors NgmyAppStudioPublishedRegistry but for invoices.
class NgmyInvoicePublishRegistry {
  static const settingsKey = 'ngmy_invoice_publish_registry';

  static String _normSlug(String slug) => slug.trim().toLowerCase();

  static Map<String, dynamic> _entriesFromValue(Map<String, dynamic> value) {
    final entries = value['invoices'];
    if (entries is! Map) return {};
    return entries.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
  }

  static Future<Map<String, dynamic>?> _fetchRegistryValueViaRest() async {
    try {
      final uri = Uri.parse(
        '${kNgmySupabaseUrl.trim()}/rest/v1/ngmy_settings?key=eq.$settingsKey&select=value',
      );
      final resp = await http
          .get(
            uri,
            headers: {
              'apikey': kNgmySupabaseAnonKey,
              'Authorization': 'Bearer $kNgmySupabaseAnonKey',
            },
          )
          .timeout(kNgmyCloudLoadTimeout);
      if (resp.statusCode != 200) return null;
      final decoded = jsonDecode(resp.body);
      if (decoded is! List || decoded.isEmpty) return null;
      final row = decoded.first;
      if (row is! Map) return null;
      final value = row['value'];
      if (value is! Map) return null;
      return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[invoice registry] rest fetch: $e');
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
      debugPrint('[invoice registry] supabase fetch: $e');
      return _fetchRegistryValueViaRest();
    }
  }

  /// Loads a published invoice entry by slug for guest pay links.
  /// Returns the raw map (data/publishedAt/expiresAt/createdByEmail) or null.
  static Future<Map<String, dynamic>?> fetchBySlug(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    // REST works for anonymous guests even when the reachability probe fails.
    final viaRest = await _fetchRegistryValueViaRest();
    if (viaRest != null) {
      final entry = _entriesFromValue(viaRest)[target];
      if (entry != null) return entry;
    }

    final value = await _fetchRegistryValue();
    if (value == null) return null;
    return _entriesFromValue(value)[target];
  }

  /// Upserts an invoice entry so https://ngmy.org/invoice/{slug} works everywhere.
  /// Returns null on success, or an error message for the UI.
  static Future<String?> publish({
    required String slug,
    required Map<String, dynamic> data,
    required String createdByEmail,
    DateTime? expiresAt,
  }) async {
    final clean = _normSlug(slug);
    if (clean.isEmpty) return 'Invoice needs a link slug before publishing.';
    if (!await ngmyCanReachCloud()) {
      return 'No internet — publish again when online so the link works for customers.';
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
        'expiresAt': expiresAt?.toUtc().toIso8601String(),
        'createdByEmail': createdByEmail.toLowerCase().trim(),
      };
      value['invoices'] = entries;
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
      debugPrint('[invoice registry] publish $clean: $e');
      return 'Could not publish link to cloud. Check connection and try again.';
    }
  }

  static Future<void> unpublishSlug(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return;
    if (!await ngmyCanReachCloud()) return;
    await ngmyWaitForSupabaseReady();
    try {
      final value = await _fetchRegistryValue();
      if (value == null) return;
      final entries = _entriesFromValue(value);
      if (!entries.containsKey(target)) return;
      entries.remove(target);
      value['invoices'] = entries;
      value['savedAt'] = DateTime.now().toUtc().toIso8601String();
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': settingsKey,
          'value': value,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[invoice registry] unpublish $slug: $e');
    }
  }
}
