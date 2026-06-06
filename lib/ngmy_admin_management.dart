part of 'main.dart';

const String _kNgmyManagementListsCloudKey = 'management_operational_lists';
const String _kNgmyManagementListsPrefsKey = 'ngmy_management_operational_lists_v1';
const String _kNgmyStoreSellAccessSettingsKey = 'store_sell_access_emails';
const String _kNgmyDeletedMediaSettingsKey = 'deleted_media_ids';

Future<Set<String>> _fetchDeletedMediaIdsFromCloud() async {
  final row = await _fetchNgmySettingSafe(_kNgmyDeletedMediaSettingsKey);
  if (row == null) return {};
  final raw = row['ids'];
  if (raw is! List) return {};
  return raw.map((e) => e.toString()).where((id) => id.isNotEmpty).toSet();
}

Future<void> _hydrateMediaTombstonesFromCloud(Set<String> tombstones) async {
  if (!await ngmyCanReachCloud()) return;
  final cloud = await _fetchDeletedMediaIdsFromCloud();
  if (cloud.isEmpty) return;
  tombstones.addAll(cloud);
  await _persistTombstonedMediaIds(tombstones);
}

Future<bool> _persistDeletedMediaIdAuthoritative(String id, Set<String> tombstones) async {
  if (id.isEmpty) return false;
  tombstones.add(id);
  await _persistTombstonedMediaIds(tombstones);
  if (!await ngmyCanReachCloud()) return false;
  try {
    final merged = {...await _fetchDeletedMediaIdsFromCloud(), id};
    return await _upsertNgmySettingSafe(_kNgmyDeletedMediaSettingsKey, {
      'ids': merged.toList()..sort(),
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    });
  } catch (e) {
    debugPrint('[media] tombstone cloud save: $e');
    return false;
  }
}

Future<bool> _persistDeletedMediaIdsBatchAuthoritative(Set<String> ids, Set<String> tombstones) async {
  if (ids.isEmpty) return false;
  tombstones.addAll(ids);
  await _persistTombstonedMediaIds(tombstones);
  if (!await ngmyCanReachCloud()) return false;
  try {
    final merged = {...await _fetchDeletedMediaIdsFromCloud(), ...ids};
    return await _upsertNgmySettingSafe(_kNgmyDeletedMediaSettingsKey, {
      'ids': merged.toList()..sort(),
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    });
  } catch (e) {
    debugPrint('[media] tombstone batch cloud save: $e');
    return false;
  }
}

void _applyDeletedMediaIdsPayload(Set<String> tombstones, Map<String, dynamic> value) {
  final raw = value['ids'];
  if (raw is! List) return;
  for (final id in raw) {
    final s = id.toString();
    if (s.isNotEmpty) tombstones.add(s);
  }
}

List<Map<String, dynamic>> _managementListFromPayload(dynamic raw) {
  if (raw is! List) return const [];
  return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
}

Map<String, dynamic> _managementOperationalListsPayload(AppConfig config) {
  return {
    'jobWorkerApplications': config.jobWorkerApplications.map((e) => Map<String, dynamic>.from(e)).toList(),
    'jobPosts': config.jobPosts.map((e) => Map<String, dynamic>.from(e)).toList(),
    'loanApplications': config.loanApplications.map((e) => Map<String, dynamic>.from(e)).toList(),
    'helpHelperApplications': config.helpHelperApplications.map((e) => Map<String, dynamic>.from(e)).toList(),
    'helpRequests': config.helpRequests.map((e) => Map<String, dynamic>.from(e)).toList(),
    'helpBusinesses': config.helpBusinesses.map((e) => Map<String, dynamic>.from(e)).toList(),
    'civicRegistrarApplications':
        config.civicRegistrarApplications.map((e) => Map<String, dynamic>.from(e)).toList(),
    'savedAt': DateTime.now().toUtc().toIso8601String(),
  };
}

Future<void> _persistManagementOperationalListsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyManagementListsPrefsKey, jsonEncode(_managementOperationalListsPayload(config)));
  } catch (e) {
    debugPrint('[admin mgmt] local lists backup: $e');
  }
}

Future<Map<String, dynamic>?> _loadManagementOperationalListsLocal() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyManagementListsPrefsKey);
    if (raw == null || raw.trim().isEmpty) return null;
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return null;
    return Map<String, dynamic>.from(decoded);
  } catch (e) {
    debugPrint('[admin mgmt] local lists load: $e');
    return null;
  }
}

Future<Map<String, dynamic>?> _fetchManagementOperationalListsCloud() async {
  final remote = await _fetchNgmySettingSafe(_kNgmyManagementListsCloudKey);
  if (remote == null || remote.isEmpty) return null;
  return remote;
}

void _applyManagementOperationalListsPayload(AppConfig config, Map<String, dynamic> payload) {
  final jobApps = _managementListFromPayload(payload['jobWorkerApplications']);
  if (jobApps.isNotEmpty) {
    config.jobWorkerApplications = _mergeJobWorkerApplicationsLists(config.jobWorkerApplications, jobApps);
  }
  final jobPosts = _managementListFromPayload(payload['jobPosts']);
  if (jobPosts.isNotEmpty) {
    config.jobPosts = _mergeJobPostsLists(config.jobPosts, jobPosts);
  }
  final loans = _managementListFromPayload(payload['loanApplications']);
  if (loans.isNotEmpty) {
    config.loanApplications = _mergeLoanApplicationsLists(config.loanApplications, loans);
  }
  final helpApps = _managementListFromPayload(payload['helpHelperApplications']);
  if (helpApps.isNotEmpty) {
    config.helpHelperApplications = _mergeJobWorkerApplicationsLists(config.helpHelperApplications, helpApps);
  }
  final helpReqs = _managementListFromPayload(payload['helpRequests']);
  if (helpReqs.isNotEmpty) {
    config.helpRequests = _mergeJobWorkerApplicationsLists(config.helpRequests, helpReqs);
  }
  final helpBiz = _managementListFromPayload(payload['helpBusinesses']);
  if (helpBiz.isNotEmpty) {
    config.helpBusinesses = _mergeJobWorkerApplicationsLists(config.helpBusinesses, helpBiz);
  }
  final registrarApps = _managementListFromPayload(payload['civicRegistrarApplications']);
  if (registrarApps.isNotEmpty) {
    config.civicRegistrarApplications = _mergeCivicRegistrarApplications(
      config.civicRegistrarApplications,
      registrarApps,
    );
  }
}

/// Merge authoritative ngmy_settings + device backups into [config] (never drops local rows).
Future<void> ngmyHydrateManagementListsFromAllBackups(AppConfig config) async {
  final local = await _loadManagementOperationalListsLocal();
  if (local != null) _applyManagementOperationalListsPayload(config, local);
  if (await ngmyCanReachCloud()) {
    final cloud = await _fetchManagementOperationalListsCloud();
    if (cloud != null) _applyManagementOperationalListsPayload(config, cloud);
  }
}

Future<bool> _upsertManagementListColumn(String column, dynamic value) async {
  try {
    await Supabase.instance.client.from('config').upsert({
      'id': kNgmyConfigRowId,
      column: value,
    });
    return true;
  } catch (e) {
    debugPrint('[admin mgmt] config column $column: $e');
    return false;
  }
}

Future<bool> _persistManagementOperationalListsAuthoritative(AppConfig config) async {
  final payload = _managementOperationalListsPayload(config);
  await _persistManagementOperationalListsLocal(config);

  var settingsOk = false;
  if (await ngmyCanReachCloud()) {
    settingsOk = await _upsertNgmySettingSafe(_kNgmyManagementListsCloudKey, payload);
  }

  var configOk = false;
  if (await ngmyCanReachCloud()) {
    final client = Supabase.instance.client;
    var row = Map<String, dynamic>.from(payload)..['id'] = kNgmyConfigRowId;
    for (var i = 0; i < 12; i++) {
      try {
        await client.from('config').upsert(row);
        configOk = true;
        break;
      } catch (e) {
        final missing = _missingColumnFromPostgrestError(e);
        if (missing != null && missing.isNotEmpty && row.containsKey(missing)) {
          row = Map<String, dynamic>.from(row)..remove(missing);
          if (row.length <= 1) break;
          continue;
        }
        debugPrint('[admin mgmt] lists config upsert: $e');
        break;
      }
    }
    if (!configOk) {
      for (final col in [
        'jobWorkerApplications',
        'jobPosts',
        'loanApplications',
        'helpHelperApplications',
        'helpRequests',
        'helpBusinesses',
        'civicRegistrarApplications',
      ]) {
        if (await _upsertManagementListColumn(col, payload[col])) {
          configOk = true;
        }
      }
    }
  }

  return settingsOk || configOk;
}

Future<bool> ngmyPersistStoreSellAccessAuthoritative(AppConfig config) async {
  final emails = List<String>.from(config.storeSellAccessEmails)..sort();
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('app_config', jsonEncode(config.toJson()));
  } catch (_) {}
  var ok = false;
  if (await ngmyCanReachCloud()) {
    ok = await _upsertNgmySettingSafe(_kNgmyStoreSellAccessSettingsKey, {
      'emails': emails,
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    });
    await _persistStoreSellAccessEmails(config);
  }
  return ok;
}

Future<void> ngmyApplyStoreSellAccessFromSettings(AppConfig config) async {
  if (!await ngmyCanReachCloud()) return;
  final row = await _fetchNgmySettingSafe(_kNgmyStoreSellAccessSettingsKey);
  if (row == null) return;
  final raw = row['emails'];
  if (raw is! List) return;
  final remote = raw.map((e) => e.toString().toLowerCase().trim()).where((e) => e.isNotEmpty).toSet();
  if (remote.isEmpty && config.storeSellAccessEmails.isEmpty) return;
  if (remote.isNotEmpty) {
    config.storeSellAccessEmails = remote.toList()..sort();
  }
}

/// Fast path — local + ngmy_settings only (opens management panels instantly).
Future<void> ngmyAdminRefreshManagementConfigLight(AppConfig config) async {
  await ngmyHydrateManagementListsFromAllBackups(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
}

/// Full Supabase + local persist for Admin → Management Menus (loans, jobs, civic, payments, etc.).
Future<bool> ngmyAdminPersistManagementConfig(AppConfig config) async {
  _operationalConfigCloudDebounce?.cancel();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistManagementOperationalListsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    for (var attempt = 0; attempt < 3 && !cloudOk; attempt++) {
      final authoritativeOk = await _persistManagementOperationalListsAuthoritative(config);
      final operationalOk = await _persistOperationalConfigToCloud(config);
      await _persistCriticalConfigFields(config);
      cloudOk = authoritativeOk || operationalOk;
      if (!cloudOk && attempt < 2) {
        await Future.delayed(Duration(milliseconds: 400 * (attempt + 1)));
      }
    }
  }

  if (config.termsAndConditions.trim().isNotEmpty || config.privacyPolicy.trim().isNotEmpty) {
    unawaited(
      _persistLegalContentToCloud(
        config.termsAndConditions,
        config.privacyPolicy,
      ),
    );
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

void ngmyAdminShowCloudSaveSnackBar(
  BuildContext context, {
  required bool cloudOk,
  String success = 'Saved to cloud for all users.',
  String offline = 'Saved on this device — connect and save again to sync.',
}) {
  if (!context.mounted) return;
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(cloudOk ? success : offline),
      backgroundColor: cloudOk ? const Color(0xFF00B25A) : Colors.orange,
    ),
  );
}

/// Background refresh when a management panel is already open.
Future<void> ngmyAdminRefreshManagementConfig(AppConfig config) async {
  await ngmyHydrateManagementListsFromAllBackups(config);
  final snapshot = AppConfig.fromJson(config.toJson());

  if (await ngmyCanReachCloud()) {
    try {
      var cfgMap = <String, dynamic>{};
      final poll = await _fetchNgmyConfigRow(columns: NgmySupabaseColumns.configPoll)
          .timeout(const Duration(seconds: 8), onTimeout: () => null);
      if (poll != null) cfgMap.addAll(poll);
      if (cfgMap.isEmpty) {
        final core = await _fetchNgmyConfigRow(columns: NgmySupabaseColumns.configBootstrapCore)
            .timeout(const Duration(seconds: 6), onTimeout: () => null);
        if (core != null) cfgMap.addAll(core);
      }
      if (cfgMap.isNotEmpty) {
        _applyRemoteConfigMerge(config, cfgMap, snapshot);
      }
    } catch (e) {
      debugPrint('[admin mgmt] refresh: $e');
    }
  }

  await ngmyHydrateManagementListsFromAllBackups(config);
  _mergeOperationalManagementListsIntoConfig(config, snapshot);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
}

Future<void> _refreshPopupsFromCloudStatic(AppConfig config) async {
  try {
    final remote = await _fetchAuthoritativeNgmyPopups();
    if (remote.popups.isEmpty && remote.videos.isEmpty) return;
    config.ngmyPopups = NgmyPopupDefaults.ensurePopups(remote.popups);
    config.ngmyVideoPopups = NgmyPopupDefaults.ensureVideoPopups(remote.videos);
  } catch (e) {
    debugPrint('[admin mgmt] popups refresh: $e');
  }
}
