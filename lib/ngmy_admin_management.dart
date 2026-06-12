part of 'main.dart';

const String _kNgmyManagementListsCloudKey = 'management_operational_lists';
const String _kNgmyManagementListsPrefsKey = 'ngmy_management_operational_lists_v1';
const String _kNgmyStoreSellAccessSettingsKey = 'store_sell_access_emails';
const String _kNgmyDeletedMediaSettingsKey = 'deleted_media_ids';
const String _kNgmyFamilyTreePaymentSettingsKey = 'family_tree_payment_settings';
const String _kNgmyFamilyTreePaymentPrefsKey = 'ngmy_family_tree_payment_settings_v1';
const String _kNgmyInvoicePaymentSettingsKey = 'invoice_payment_settings';
const String _kNgmyInvoicePaymentPrefsKey = 'ngmy_invoice_payment_settings_v1';
const String _kNgmyMusicPaymentSettingsKey = 'music_studio_payment_settings';
const String _kNgmyMusicPaymentPrefsKey = 'ngmy_music_payment_settings_v1';
const String _kNgmyAppStudioPaymentSettingsKey = 'app_studio_payment_settings';
const String _kNgmyAppStudioPaymentPrefsKey = 'ngmy_app_studio_payment_settings_v1';
const String _kNgmyCommunicateSettingsKey = 'communicate_settings';
const String _kNgmyCommunicatePrefsKey = 'ngmy_communicate_settings_v1';
const String _kNgmyCommunicatePaymentSettingsKey = 'communicate_payment_settings';
const String _kNgmyCommunicatePaymentPrefsKey = 'ngmy_communicate_payment_settings_v1';
const String _kNgmyWalletPaymentSettingsKey = 'wallet_payment_settings';
const String _kNgmyWalletPaymentPrefsKey = 'ngmy_wallet_payment_settings_v1';
const String _kNgmyRepairEstimatePaymentSettingsKey = 'repair_estimate_payment_settings';
const String _kNgmyRepairEstimatePaymentPrefsKey = 'ngmy_repair_estimate_payment_settings_v1';
const String _kNgmyTranslatePaymentSettingsKey = 'translate_message_payment_settings';
const String _kNgmyTranslatePaymentPrefsKey = 'ngmy_translate_message_payment_settings_v1';
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

List<Map<String, dynamic>> _loanApplicationsForCloudSync(List<Map<String, dynamic>> apps) {
  return apps.map((raw) {
    final app = Map<String, dynamic>.from(raw);
    for (final k in ngmyLoanPhotoKeys) {
      final v = (app[k] ?? '').toString().trim();
      // Cloud payload keeps only storage URLs — base64/local paths stay in NgmyLoanPhotosStore.
      if (!v.startsWith('supabase://')) {
        app[k] = '';
      }
    }
    return app;
  }).toList();
}

Map<String, dynamic> _managementOperationalListsPayload(AppConfig config, {bool forCloud = false}) {
  final loans = forCloud
      ? _loanApplicationsForCloudSync(config.loanApplications)
      : config.loanApplications.map((e) => Map<String, dynamic>.from(e)).toList();
  return {
    'jobWorkerApplications': config.jobWorkerApplications.map((e) => Map<String, dynamic>.from(e)).toList(),
    'jobPosts': config.jobPosts.map((e) => Map<String, dynamic>.from(e)).toList(),
    'loanApplications': loans,
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
  await NgmyLoanPhotosStore.applyTo(config.loanApplications);
  await NgmyLoanStatusStore.applyTo(config.loanApplications);
  await NgmyLoanStatusCloud.fetchAndApply(config.loanApplications);
  await NgmyLoanPaymentsStore.applyTo(config.loanApplications);
  await NgmyLoanPaymentsCloud.fetchAndApply(config.loanApplications);
  if (await ngmyCanReachCloud()) {
    final cloud = await _fetchManagementOperationalListsCloud();
    if (cloud != null) _applyManagementOperationalListsPayload(config, cloud);
    await NgmyLoanPhotosStore.applyTo(config.loanApplications);
    await NgmyLoanStatusStore.applyTo(config.loanApplications);
    await NgmyLoanStatusCloud.fetchAndApply(config.loanApplications);
    await NgmyLoanPaymentsStore.applyTo(config.loanApplications);
    await NgmyLoanPaymentsCloud.fetchAndApply(config.loanApplications);
  }
  for (final app in config.loanApplications) {
    await NgmyLoanPhotosStore.saveForApp(app);
  }
}

/// User loan screen — pull latest approve/reject from cloud before showing status.
Future<void> ngmyRefreshUserLoanApplications(AppConfig config) async {
  await ngmyHydrateManagementListsFromAllBackups(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
}

/// User loan submit — merge cloud first so pending never overwrites admin approval.
Future<bool> ngmyUserPersistLoanApplications(AppConfig config) async {
  await ngmyHydrateManagementListsFromAllBackups(config);
  await _persistManagementOperationalListsLocal(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  unawaited(NgmyLoanStatusCloud.pushFromApps(config.loanApplications));
  unawaited(NgmyLoanPaymentsCloud.pushFromApps(config.loanApplications));
  if (await ngmyCanReachCloud()) {
    return _persistOperationalConfigToCloud(config);
  }
  return true;
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
  await NgmyLoanStore.ensureAllCloudPhotoRefs(config.loanApplications);
  await _persistManagementOperationalListsLocal(config);
  final payload = _managementOperationalListsPayload(config, forCloud: true);

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

Map<String, dynamic> _walletPaymentPayload(AppConfig config) => {
      'officialCashApp': config.officialCashApp.trim(),
      'officialBitcoin': config.officialBitcoin.trim(),
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyWalletPaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  final cash = (payload['officialCashApp'] ?? payload['official_cash_app'] ?? '').toString().trim();
  final btc = (payload['officialBitcoin'] ?? payload['official_bitcoin'] ?? '').toString().trim();
  if (cash.isNotEmpty) config.officialCashApp = cash;
  if (btc.isNotEmpty) config.officialBitcoin = btc;
}

Future<void> _persistWalletPaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyWalletPaymentPrefsKey, jsonEncode(_walletPaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin wallet payments] local backup: $e');
  }
}

Future<void> ngmyHydrateWalletPaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyWalletPaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyWalletPaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin wallet payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyWalletPaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyWalletPaymentPayload(config, row);
    }
    try {
      final cfg = await _fetchNgmyConfigRow(columns: 'officialCashApp,officialBitcoin');
      if (cfg != null) {
        _applyWalletPaymentPayload(config, cfg);
      }
    } catch (e) {
      debugPrint('[admin wallet payments] config hydrate: $e');
    }
  }
}

/// Authoritative save for Admin → Wallet → Payments (Cash App + Bitcoin for all users).
Future<bool> ngmyPersistWalletPaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistWalletPaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _walletPaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyWalletPaymentSettingsKey, payload);
    for (final entry in <String, String>{
      'officialCashApp': config.officialCashApp.trim(),
      'officialBitcoin': config.officialBitcoin.trim(),
    }.entries) {
      try {
        await Supabase.instance.client.from('config').upsert({
          'id': kNgmyConfigRowId,
          entry.key: entry.value,
        });
        cloudOk = true;
      } catch (e) {
        debugPrint('[admin wallet payments] config column ${entry.key}: $e');
      }
    }
    cloudOk = await _persistOperationalConfigToCloud(config) || cloudOk;
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

Map<String, dynamic> _musicPaymentPayload(AppConfig config) => {
      'musicStudioPerSongFee': config.musicStudioPerSongFee,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyMusicPaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final fee = payload['musicStudioPerSongFee'];
  if (fee is num && fee >= 0) config.musicStudioPerSongFee = fee.toDouble();
}

Future<void> _persistMusicPaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyMusicPaymentPrefsKey, jsonEncode(_musicPaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin music payments] local backup: $e');
  }
}

Future<void> ngmyHydrateMusicPaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyMusicPaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyMusicPaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin music payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyMusicPaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyMusicPaymentPayload(config, row);
    }
  }
}

/// Authoritative save for Admin → Management → Payments (Music Studio fee).
Future<bool> ngmyPersistMusicPaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistMusicPaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _musicPaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyMusicPaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Map<String, dynamic> _appStudioPaymentPayload(AppConfig config) => {
      'appStudioCloudSaveFee': config.appStudioCloudSaveFee,
      'appStudioAiMonthlyFee': config.appStudioAiMonthlyFee,
      'appStudioAiPromptLimit': config.appStudioAiPromptLimit,
      'appStudioAiFreeAppLimit': config.appStudioAiFreeAppLimit,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyAppStudioPaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final fee = payload['appStudioCloudSaveFee'];
  if (fee is num && fee >= 0) config.appStudioCloudSaveFee = fee.toDouble();
  final aiFee = payload['appStudioAiMonthlyFee'];
  if (aiFee is num && aiFee >= 0) config.appStudioAiMonthlyFee = aiFee.toDouble();
  final prompts = payload['appStudioAiPromptLimit'];
  if (prompts is num && prompts >= 0) config.appStudioAiPromptLimit = prompts.toInt();
  final apps = payload['appStudioAiFreeAppLimit'];
  if (apps is num && apps >= 0) config.appStudioAiFreeAppLimit = apps.toInt();
}

Future<void> _persistAppStudioPaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyAppStudioPaymentPrefsKey, jsonEncode(_appStudioPaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin app studio payments] local backup: $e');
  }
}

Future<void> ngmyHydrateAppStudioPaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyAppStudioPaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyAppStudioPaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin app studio payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyAppStudioPaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyAppStudioPaymentPayload(config, row);
    }
  }
}

/// Authoritative save for Admin → Management → Payments (App Studio cloud save fee).
Future<bool> ngmyPersistAppStudioPaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistAppStudioPaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _appStudioPaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyAppStudioPaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Map<String, dynamic> _repairEstimatePaymentPayload(AppConfig config) => {
      'repairEstimateMonthlyFee': config.repairEstimateMonthlyFee,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyRepairEstimatePaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final fee = payload['repairEstimateMonthlyFee'];
  if (fee is num && fee >= 0) config.repairEstimateMonthlyFee = fee.toDouble();
}

Future<void> _persistRepairEstimatePaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyRepairEstimatePaymentPrefsKey, jsonEncode(_repairEstimatePaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin repair estimate payments] local backup: $e');
  }
}

Future<void> ngmyHydrateRepairEstimatePaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyRepairEstimatePaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyRepairEstimatePaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin repair estimate payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyRepairEstimatePaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyRepairEstimatePaymentPayload(config, row);
    }
  }
}

Map<String, dynamic> _translatePaymentPayload(AppConfig config) => {
      'translateWeeklyFreeLimit': config.translateWeeklyFreeLimit,
      'translateWeeklyUnlockFee': config.translateWeeklyUnlockFee,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyTranslatePaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final limit = payload['translateWeeklyFreeLimit'];
  if (limit is num && limit >= 0) config.translateWeeklyFreeLimit = limit.toInt();
  final fee = payload['translateWeeklyUnlockFee'];
  if (fee is num && fee >= 0) config.translateWeeklyUnlockFee = fee.toDouble();
}

Future<void> _persistTranslatePaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyTranslatePaymentPrefsKey, jsonEncode(_translatePaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin translate payments] local backup: $e');
  }
}

Future<void> ngmyHydrateTranslatePaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyTranslatePaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyTranslatePaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin translate payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyTranslatePaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyTranslatePaymentPayload(config, row);
    }
  }
}

Future<bool> ngmyPersistTranslatePaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistTranslatePaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _translatePaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyTranslatePaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Future<bool> ngmyPersistRepairEstimatePaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistRepairEstimatePaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _repairEstimatePaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyRepairEstimatePaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Map<String, dynamic> _communicateSettingsPayload(AppConfig config) => {
      'communicateEnabled': config.communicateEnabled,
      'communicateProfiles': config.communicateProfiles,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyCommunicateSettingsPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  if (payload.containsKey('communicateEnabled')) {
    config.communicateEnabled = payload['communicateEnabled'] == true;
  }
  final raw = payload['communicateProfiles'];
  if (raw is List) {
    config.communicateProfiles = raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
  }
}

Future<void> _persistCommunicateSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyCommunicatePrefsKey, jsonEncode(_communicateSettingsPayload(config)));
  } catch (e) {
    debugPrint('[admin communicate] local backup: $e');
  }
}

Future<void> ngmyHydrateCommunicateSettingsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCommunicatePrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyCommunicateSettingsPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin communicate] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyCommunicateSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyCommunicateSettingsPayload(config, row);
    }
  }
  unawaited(ngmyWarmCommunicateAvatarsFromConfig(config));
}

Future<bool> ngmyPersistCommunicateSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistCommunicateSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _communicateSettingsPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyCommunicateSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Map<String, dynamic> _communicatePaymentPayload(AppConfig config) => {
      'communicateFeeAmount': config.communicateFeeAmount,
      'communicateMinutesPerPayment': config.communicateMinutesPerPayment,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyCommunicatePaymentPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final fee = payload['communicateFeeAmount'];
  if (fee is num && fee >= 0) config.communicateFeeAmount = fee.toDouble();
  final mins = payload['communicateMinutesPerPayment'];
  if (mins is num && mins > 0) config.communicateMinutesPerPayment = mins.toInt();
}

Future<void> _persistCommunicatePaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyCommunicatePaymentPrefsKey, jsonEncode(_communicatePaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin communicate payments] local backup: $e');
  }
}

Future<void> ngmyHydrateCommunicatePaymentsFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCommunicatePaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyCommunicatePaymentPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[admin communicate payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyCommunicatePaymentSettingsKey);
    if (row != null && row.isNotEmpty) {
      _applyCommunicatePaymentPayload(config, row);
    }
  }
}

Future<bool> ngmyPersistCommunicatePaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistCommunicatePaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _communicatePaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyCommunicatePaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
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
  await ngmyHydrateManagementListsFromAllBackups(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistManagementOperationalListsLocal(config);
  unawaited(NgmyLoanStatusCloud.pushFromApps(config.loanApplications));
  unawaited(NgmyLoanPaymentsCloud.pushFromApps(config.loanApplications));

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
  return cloudOk || true;
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
  await ngmyHydrateWalletPaymentsFromAllBackups(config);
  await ngmyHydrateRepairEstimatePaymentsFromAllBackups(config);
  await ngmyHydrateTranslatePaymentsFromAllBackups(config);
  await NgmyAppStudioAccess.hydrate(config);
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
