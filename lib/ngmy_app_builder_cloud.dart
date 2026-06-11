import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_export.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';
import 'ngmy_app_studio_payments.dart';
import 'ngmy_network_resilience.dart';

/// Up to [NgmyAppStudioPayments.maxCloudApps] apps per account — synced across devices.
class NgmyAppStudioCloudSlot {
  static const settingsKey = 'ngmy_app_studio_cloud_slot';

  static String _norm(String email) => email.toLowerCase().trim();

  static Map<String, dynamic> _appsFromUserEntry(Map<String, dynamic> entry) {
    final apps = entry['apps'];
    if (apps is Map) {
      return apps.map((k, v) => MapEntry(k.toString(), v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{}));
    }
    // Legacy: single project per user.
    if (entry['project'] is Map) {
      final id = (entry['projectId'] ?? 'legacy').toString();
      return {id: entry};
    }
    return {};
  }

  static Future<Map<String, dynamic>?> _fetchUsersMap() async {
    if (!await ngmyCanReachCloud()) return null;
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', settingsKey).maybeSingle();
      if (row == null) return null;
      final value = row['value'];
      if (value is! Map) return null;
      final users = value['users'];
      if (users is! Map) return {};
      return Map<String, dynamic>.from(users);
    } catch (e) {
      debugPrint('[app studio cloud] fetch users: $e');
      return null;
    }
  }

  static Future<Set<String>> fetchSavedProjectIds(String email) async {
    if (email.trim().isEmpty) return {};
    final users = await _fetchUsersMap();
    if (users == null) return {};
    final entry = users[_norm(email)];
    if (entry is! Map) return {};
    return _appsFromUserEntry(Map<String, dynamic>.from(entry)).keys.toSet();
  }

  @Deprecated('Use fetchSavedProjectIds')
  static Future<String?> fetchSavedProjectId(String email) async {
    final ids = await fetchSavedProjectIds(email);
    return ids.isEmpty ? null : ids.first;
  }

  static Future<NgmyAppBundle?> fetchBundle(String email, String projectId) async {
    if (!await ngmyCanReachCloud() || email.trim().isEmpty) return null;
    try {
      final users = await _fetchUsersMap();
      if (users == null) return null;
      final entry = users[_norm(email)];
      if (entry is! Map) return null;
      final apps = _appsFromUserEntry(Map<String, dynamic>.from(entry));
      final appEntry = apps[projectId];
      if (appEntry == null) return null;
      final projectRaw = appEntry['project'];
      if (projectRaw is! Map) return null;
      final project = NgmyAppProject.fromMap(Map<String, dynamic>.from(projectRaw));
      final runtime = appEntry['runtimeData'];
      return NgmyAppBundle(
        project: project,
        runtimeData: runtime is Map ? Map<String, dynamic>.from(runtime) : const {},
      );
    } catch (e) {
      debugPrint('[app studio cloud] fetch bundle: $e');
      return null;
    }
  }

  /// Returns null on success, or an error message for the UI.
  static Future<String?> save(String email, NgmyAppProject project) async {
    if (!await ngmyCanReachCloud() || email.trim().isEmpty) {
      return 'No internet connection.';
    }
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
      final userEntry = users[key] is Map ? Map<String, dynamic>.from(users[key] as Map) : <String, dynamic>{};
      final apps = _appsFromUserEntry(userEntry);
      final isUpdate = apps.containsKey(project.id);
      if (!isUpdate && apps.length >= NgmyAppStudioPayments.maxCloudApps) {
        return 'Cloud limit reached (${NgmyAppStudioPayments.maxCloudApps} apps). Remove one from cloud or update an existing save.';
      }
      apps[project.id] = {
        'project': bundle.project.toMap(),
        'runtimeData': bundle.runtimeData,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
        'projectId': project.id,
      };
      userEntry['apps'] = apps;
      users[key] = userEntry;
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': settingsKey,
          'value': {'users': users, 'savedAt': DateTime.now().toUtc().toIso8601String()},
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
      return null;
    } catch (e) {
      debugPrint('[app studio cloud] save: $e');
      return 'Cloud save failed. Try again.';
    }
  }

  /// Pull all cloud apps into local storage.
  static Future<List<NgmyAppProject>> pullAllIntoLocal(String email) async {
    final ids = await fetchSavedProjectIds(email);
    if (ids.isEmpty) return [];
    final pulled = <NgmyAppProject>[];
    for (final id in ids) {
      final bundle = await fetchBundle(email, id);
      if (bundle == null) continue;
      await NgmyAppDataStore.importRawData(bundle.project.id, bundle.runtimeData);
      final project = bundle.project.copyWith(
        ownerEmail: _norm(email),
        updatedAt: DateTime.now().toUtc().toIso8601String(),
      );
      await ngmySaveUserAppProject(email, project);
      pulled.add(project);
    }
    return pulled;
  }

  /// Pull cloud slot into local storage (all apps).
  static Future<NgmyAppProject?> pullIntoLocal(String email) async {
    final list = await pullAllIntoLocal(email);
    return list.isEmpty ? null : list.first;
  }
}
