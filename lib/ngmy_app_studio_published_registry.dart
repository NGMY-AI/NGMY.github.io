import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_export.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_urls.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_supabase_config.dart';

/// Public App Studio links resolve from this cloud registry (any device / browser).
class NgmyAppStudioPublishedRegistry {
  static const settingsKey = 'ngmy_app_studio_published_registry';

  static String _normSlug(String slug) => slug.trim().toLowerCase();

  static Map<String, dynamic> _appsFromValue(Map<String, dynamic> value) {
    final apps = value['apps'];
    if (apps is! Map) return {};
    return apps.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
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
      debugPrint('[published registry] supabase fetch: $e');
      return _fetchRegistryValueViaRest();
    }
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
      debugPrint('[published registry] rest fetch: $e');
      return null;
    }
  }

  static Future<NgmyAppProject?> _projectFromEntry(Map<String, dynamic> entry) async {
    final projectRaw = entry['project'];
    if (projectRaw is! Map) return null;
    final project = ngmyRefreshAppProjectPublicUrl(NgmyAppProject.fromMap(Map<String, dynamic>.from(projectRaw)));
    final runtime = entry['runtimeData'];
    if (runtime is Map && runtime.isNotEmpty) {
      try {
        await NgmyAppDataStore.importRawData(project.id, Map<String, dynamic>.from(runtime));
      } catch (e) {
        debugPrint('[published registry] runtime import ${project.slug}: $e');
      }
    }
    return project;
  }

  /// Loads a published app by public slug for guest links.
  static Future<NgmyAppProject?> fetchBySlug(String slug) async {
    final target = _normSlug(slug);
    if (target.isEmpty) return null;

    // REST works for anonymous guests even when reachability probe fails on /app/{slug} URLs.
    final viaRest = await _fetchRegistryValueViaRest();
    if (viaRest != null) {
      final entry = _appsFromValue(viaRest)[target];
      if (entry != null) {
        final project = await _projectFromEntry(entry);
        if (project != null) return project;
      }
    }

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
      final entry = _appsFromValue(Map<String, dynamic>.from(value))[target];
      if (entry == null) return null;
      return _projectFromEntry(entry);
    } catch (e) {
      debugPrint('[published registry] supabase fetchBySlug $target: $e');
      return null;
    }
  }

  /// Upserts project + runtime data so [https://ngmy.org/app/{slug}] works everywhere.
  /// Returns null on success, or an error message for the UI.
  static Future<String?> publish(NgmyAppProject project) async {
    final slug = _normSlug(project.slug);
    if (slug.isEmpty) return 'App needs a public link slug before publishing.';
    if (!await ngmyCanReachCloud()) {
      return 'No internet — publish again when online so your link works on other devices.';
    }
    await ngmyWaitForSupabaseReady();
    try {
      final bundle = await ngmyBuildAppBundle(project);
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

      final apps = _appsFromValue(value);
      apps[slug] = {
        'project': bundle.project.toMap(),
        'runtimeData': bundle.runtimeData,
        'publishedAt': DateTime.now().toUtc().toIso8601String(),
        'projectId': bundle.project.id,
        'ownerEmail': bundle.project.ownerEmail.toLowerCase().trim(),
      };
      value['apps'] = apps;
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
      debugPrint('[published registry] publish ${project.slug}: $e');
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
      final apps = _appsFromValue(value);
      if (!apps.containsKey(target)) return;
      apps.remove(target);
      value['apps'] = apps;
      value['savedAt'] = DateTime.now().toUtc().toIso8601String();
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': settingsKey,
          'value': value,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[published registry] unpublish $slug: $e');
    }
  }
}
