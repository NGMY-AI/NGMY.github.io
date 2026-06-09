part of 'main.dart';

const String _kNgmyManagementListsCloudKey = 'management_operational_lists';
const String _kNgmyManagementListsPrefsKey = 'ngmy_management_operational_lists_v1';
const String _kNgmyStoreSellAccessSettingsKey = 'store_sell_access_emails';
const String _kNgmyDeletedMediaSettingsKey = 'deleted_media_ids';
const String _kNgmyFamilyTreePaymentSettingsKey = 'family_tree_payment_settings';
const String _kNgmyFamilyTreePaymentPrefsKey = 'ngmy_family_tree_payment_settings_v1';
const String _kNgmyInvoicePaymentSettingsKey = 'invoice_payment_settings';
const String _kNgmyInvoicePaymentPrefsKey = 'ngmy_invoice_payment_settings_v1';
const String _kNgmyHelperAiSettingsKey = 'ngmy_helper_ai_settings';
const String _kNgmyHelperAiPrefsKey = 'ngmy_helper_ai_settings_v1';
const String _kNgmyAppBrandingSettingsKey = 'ngmy_app_branding';
const String _kNgmyAppBrandingPrefsKey = 'ngmy_app_branding_v1';

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
  final merged = {..._storeSellAccessEmailSet(config), ...remote};
  config.storeSellAccessEmails = merged.toList()..sort();
}

Map<String, dynamic> _familyTreePaymentPayload(AppConfig config) => {
      'familyTreeCreateFee': config.familyTreeCreateFee,
      'familyTreePhotoMonthlyFee': config.familyTreePhotoMonthlyFee,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyFamilyTreePaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final create = payload['familyTreeCreateFee'];
  if (create is num && create >= 0) config.familyTreeCreateFee = create.toDouble();
  final photo = payload['familyTreePhotoMonthlyFee'];
  if (photo is num && photo >= 0) config.familyTreePhotoMonthlyFee = photo.toDouble();
}

Map<String, dynamic> _invoicePaymentPayload(AppConfig config) => {
      'invoicePremiumOneTimeFee': config.invoicePremiumOneTimeFee,
      'invoicePremiumMonthlyFee': config.invoicePremiumMonthlyFee,
      'invoiceLuxuryOneTimeFee': config.invoiceLuxuryOneTimeFee,
      'invoiceLuxuryMonthlyFee': config.invoiceLuxuryMonthlyFee,
      'invoicePremiumAllowOneTime': config.invoicePremiumAllowOneTime,
      'invoicePremiumAllowMonthly': config.invoicePremiumAllowMonthly,
      'invoiceLuxuryAllowOneTime': config.invoiceLuxuryAllowOneTime,
      'invoiceLuxuryAllowMonthly': config.invoiceLuxuryAllowMonthly,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyInvoicePaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  void fee(String k, void Function(double v) set, double fallback) {
    final v = payload[k];
    if (v is num && v >= 0) set(v.toDouble());
  }

  fee('invoicePremiumOneTimeFee', (v) => config.invoicePremiumOneTimeFee = v, NgmyInvoicePayments.defaultPremiumOneTime);
  fee('invoicePremiumMonthlyFee', (v) => config.invoicePremiumMonthlyFee = v, NgmyInvoicePayments.defaultPremiumMonthly);
  fee('invoiceLuxuryOneTimeFee', (v) => config.invoiceLuxuryOneTimeFee = v, NgmyInvoicePayments.defaultLuxuryOneTime);
  fee('invoiceLuxuryMonthlyFee', (v) => config.invoiceLuxuryMonthlyFee = v, NgmyInvoicePayments.defaultLuxuryMonthly);
  if (payload.containsKey('invoicePremiumAllowOneTime')) {
    config.invoicePremiumAllowOneTime = payload['invoicePremiumAllowOneTime'] == true;
  }
  if (payload.containsKey('invoicePremiumAllowMonthly')) {
    config.invoicePremiumAllowMonthly = payload['invoicePremiumAllowMonthly'] == true;
  }
  if (payload.containsKey('invoiceLuxuryAllowOneTime')) {
    config.invoiceLuxuryAllowOneTime = payload['invoiceLuxuryAllowOneTime'] == true;
  }
  if (payload.containsKey('invoiceLuxuryAllowMonthly')) {
    config.invoiceLuxuryAllowMonthly = payload['invoiceLuxuryAllowMonthly'] == true;
  }
}

Future<void> _persistInvoicePaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyInvoicePaymentPrefsKey, jsonEncode(_invoicePaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin invoice payments] local backup: $e');
  }
}

Future<void> ngmyHydrateInvoicePaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyInvoicePaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyInvoicePaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin invoice payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyInvoicePaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyInvoicePaymentPayload(config, row);
    }
  }
}

Future<bool> ngmyPersistInvoicePaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistInvoicePaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _invoicePaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyInvoicePaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Future<void> _persistFamilyTreePaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyFamilyTreePaymentPrefsKey, jsonEncode(_familyTreePaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin payments] local backup: $e');
  }
}

Future<void> ngmyHydrateFamilyTreePaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyFamilyTreePaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyFamilyTreePaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyFamilyTreePaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyFamilyTreePaymentPayload(config, row);
    }
  }
}

/// Authoritative save for Admin → Management → Payments (family tree fees).
Future<bool> ngmyPersistFamilyTreePaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistFamilyTreePaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _familyTreePaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyFamilyTreePaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
    try {
      var row = <String, dynamic>{
        'id': kNgmyConfigRowId,
        'familyTreeCreateFee': config.familyTreeCreateFee,
        'familyTreePhotoMonthlyFee': config.familyTreePhotoMonthlyFee,
      };
      for (var i = 0; i < 6; i++) {
        try {
          await Supabase.instance.client.from('config').upsert(row);
          cloudOk = true;
          break;
        } catch (e) {
          final missing = _missingColumnFromPostgrestError(e);
          if (missing != null && missing.isNotEmpty && row.containsKey(missing)) {
            row = Map<String, dynamic>.from(row)..remove(missing);
            if (row.length <= 1) break;
            continue;
          }
          debugPrint('[admin payments] config upsert: $e');
          break;
        }
      }
    } catch (e) {
      debugPrint('[admin payments] config save: $e');
    }
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Map<String, dynamic> _helperAiSettingsPayload(AppConfig config) => {
      'ngmyHelperDailyMessageLimit': config.ngmyHelperDailyMessageLimit,
      'maxMediaPostsPerWeek': config.maxMediaPostsPerWeek,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyHelperAiSettingsPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final helper = payload['ngmyHelperDailyMessageLimit'];
  if (helper is num && helper >= 0) config.ngmyHelperDailyMessageLimit = helper.toInt();
  final media = payload['maxMediaPostsPerWeek'];
  if (media is num && media >= 0) config.maxMediaPostsPerWeek = media.toInt();
}

Future<void> _persistHelperAiSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyHelperAiPrefsKey, jsonEncode(_helperAiSettingsPayload(config)));
  } catch (e) {
    debugPrint('[admin helper ai] local backup: $e');
  }
}

Future<void> ngmyHydrateHelperAiSettingsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyHelperAiPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyHelperAiSettingsPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin helper ai] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyHelperAiSettingsKey);
    if (row != null) _applyHelperAiSettingsPayload(config, row);
  }
}

Map<String, dynamic> _appBrandingPayload(AppConfig config) => {
      'logoUrl': config.logoUrl.trim(),
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyAppBrandingPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final logo = (payload['logoUrl'] ?? '').toString().trim();
  if (logo.isNotEmpty) config.logoUrl = logo;
}

Future<void> _persistAppBrandingLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyAppBrandingPrefsKey, jsonEncode(_appBrandingPayload(config)));
  } catch (e) {
    debugPrint('[admin branding] local backup: $e');
  }
}

Future<void> ngmyHydrateAppBrandingFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyAppBrandingPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyAppBrandingPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin branding] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyAppBrandingSettingsKey);
    if (row != null) _applyAppBrandingPayload(config, row);
  }
}

Future<bool> ngmyPersistAppBrandingSettings(AppConfig config) async {
  await _persistAppBrandingLocal(config);
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    cloudOk = await _upsertNgmySettingSafe(_kNgmyAppBrandingSettingsKey, _appBrandingPayload(config));
    try {
      var row = <String, dynamic>{
        'id': kNgmyConfigRowId,
        'logoUrl': config.logoUrl.trim(),
      };
      for (var i = 0; i < 6; i++) {
        try {
          await Supabase.instance.client.from('config').upsert(row);
          cloudOk = true;
          break;
        } catch (e) {
          final missing = _missingColumnFromPostgrestError(e);
          if (missing != null && missing.isNotEmpty && row.containsKey(missing)) {
            row = Map<String, dynamic>.from(row)..remove(missing);
            if (row.length <= 1) break;
            continue;
          }
          debugPrint('[admin branding] config upsert: $e');
          break;
        }
      }
    } catch (e) {
      debugPrint('[admin branding] config save: $e');
    }
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Future<bool> ngmyPersistHelperAiSettings(AppConfig config) async {
  await _persistHelperAiSettingsLocal(config);
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _helperAiSettingsPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyHelperAiSettingsKey, payload);
    try {
      var row = <String, dynamic>{
        'id': kNgmyConfigRowId,
        'ngmyHelperDailyMessageLimit': config.ngmyHelperDailyMessageLimit,
        'maxMediaPostsPerWeek': config.maxMediaPostsPerWeek,
      };
      for (var i = 0; i < 6; i++) {
        try {
          await Supabase.instance.client.from('config').upsert(row);
          cloudOk = true;
          break;
        } catch (e) {
          final missing = _missingColumnFromPostgrestError(e);
          if (missing != null && missing.isNotEmpty && row.containsKey(missing)) {
            row = Map<String, dynamic>.from(row)..remove(missing);
            if (row.length <= 1) break;
            continue;
          }
          debugPrint('[admin helper ai] config upsert: $e');
          break;
        }
      }
    } catch (e) {
      debugPrint('[admin helper ai] config save: $e');
    }
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
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
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  await ngmyHydrateManagementListsFromAllBackups(config);
  await ngmyHydrateFamilyTreePaymentsFromAllBackups(config);
  await ngmyHydrateInvoicePaymentsFromAllBackups(config);
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
  await ngmyHydrateAppBrandingFromAllBackups(config);
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
