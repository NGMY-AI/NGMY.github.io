import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_export.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';
import 'ngmy_network_resilience.dart';

/// One cloud app slot per NGMY account — synced across all devices.
class NgmyAppStudioCloudSlot {
  static const settingsKey = 'ngmy_app_studio_cloud_slot';

  static String _norm(String email) => email.toLowerCase().trim();

  static Future<NgmyAppBundle?> fetchBundle(String email) async {
    if (!await ngmyCanReachCloud() || email.trim().isEmpty) return null;
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', settingsKey).maybeSingle();
      if (row == null) return null;
      final value = row['value'];
      if (value is! Map) return null;
      final users = value['users'];
      if (users is! Map) return null;
      final entry = users[_norm(email)];
      if (entry is! Map) return null;
      final projectRaw = entry['project'];
      if (projectRaw is! Map) return null;
      final project = NgmyAppProject.fromMap(Map<String, dynamic>.from(projectRaw));
      final runtime = entry['runtimeData'];
      return NgmyAppBundle(
        project: project,
        runtimeData: runtime is Map ? Map<String, dynamic>.from(runtime) : const {},
      );
    } catch (e) {
      debugPrint('[app studio cloud] fetch: $e');
      return null;
    }
  }

  static Future<String?> fetchSavedProjectId(String email) async {
    if (!await ngmyCanReachCloud() || email.trim().isEmpty) return null;
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', settingsKey).maybeSingle();
      if (row == null) return null;
      final value = row['value'];
      if (value is! Map) return null;
      final users = value['users'];
      if (users is! Map) return null;
      final entry = users[_norm(email)];
      if (entry is! Map) return null;
      return (entry['projectId'] ?? '').toString().trim().isEmpty ? null : (entry['projectId'] ?? '').toString();
    } catch (e) {
      debugPrint('[app studio cloud] fetch id: $e');
      return null;
    }
  }

  static Future<bool> save(String email, NgmyAppProject project) async {
    if (!await ngmyCanReachCloud() || email.trim().isEmpty) return false;
    try {
      final bundle = await ngmyBuildAppBundle(project);
      Map<String, dynamic> users = {};
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', settingsKey).maybeSingle();
      if (row != null) {
        final value = row['value'];
        if (value is Map) {
          final raw = value['users'];
          if (raw is Map) users = Map<String, dynamic>.from(raw);
        }
      }
      final key = _norm(email);
      users[key] = {
        'project': bundle.project.toMap(),
        'runtimeData': bundle.runtimeData,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
        'projectId': project.id,
      };
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': settingsKey,
          'value': {'users': users, 'savedAt': DateTime.now().toUtc().toIso8601String()},
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
      return true;
    } catch (e) {
      debugPrint('[app studio cloud] save: $e');
      return false;
    }
  }

  /// Pull cloud slot into local storage (merge by project id).
  static Future<NgmyAppProject?> pullIntoLocal(String email) async {
    final bundle = await fetchBundle(email);
    if (bundle == null) return null;
    await NgmyAppDataStore.importRawData(bundle.project.id, bundle.runtimeData);
    final project = bundle.project.copyWith(
      ownerEmail: _norm(email),
      updatedAt: DateTime.now().toUtc().toIso8601String(),
    );
    await ngmySaveUserAppProject(email, project);
    return project;
  }
}
