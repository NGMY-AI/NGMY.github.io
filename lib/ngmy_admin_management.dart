part of 'main.dart';

const String _kNgmyManagementListsCloudKey = 'management_operational_lists';
const String _kNgmyManagementListsPrefsKey = 'ngmy_management_operational_lists_v1';
String? _lastManagementOperationalListsCloudSig;
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
const String _kNgmyDocumentScanPaymentSettingsKey = 'document_scan_payment_settings';
const String _kNgmyDocumentScanPaymentPrefsKey = 'ngmy_document_scan_payment_settings_v1';
const String _kNgmyDocSharePaymentSettingsKey = 'doc_share_payment_settings';
const String _kNgmyDocSharePaymentPrefsKey = 'ngmy_doc_share_payment_settings_v1';
const String _kNgmyCivicSelfEnrollmentSettingsKey = 'civic_self_enrollment_settings';
const String _kNgmyCivicSelfEnrollmentPrefsKey = 'ngmy_civic_self_enrollment_settings_v1';
const String _kNgmyHelperAiSettingsKey = 'ngmy_helper_ai_settings';
const String _kNgmyHelperAiPrefsKey = 'ngmy_helper_ai_settings_v1';
const String _kNgmyAppBrandingSettingsKey = 'ngmy_app_branding';
const String _kNgmyCivicHelpModeSettingsKey = 'civic_help_mode_settings';
const String _kNgmyCivicHelpModePrefsKey = 'ngmy_civic_help_mode_settings_v1';
const String _kNgmyCivicReceiptRemovedSettingsKey = 'civic_contribution_receipt_removed';
const String _kNgmyCivicReceiptRemovedPrefsKey = 'ngmy_civic_contribution_receipt_removed_v1';
const String _kNgmyCivicDeletedContributionsSettingsKey = 'civic_deleted_contribution_ids';
const String _kNgmyCivicDeletedContributionsPrefsKey = 'ngmy_civic_deleted_contribution_ids_v1';
const String _kNgmyCivicHelpCampaignSpendingsSettingsKey =
    'civic_help_campaign_spendings';
const String _kNgmyCivicHelpCampaignSpendingsPrefsKey =
    'ngmy_civic_help_campaign_spendings_v1';
const String _kNgmyCivicContributionsLocalPrefsKey = 'ngmy_civic_contributions_local_v1';
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
    // civicRegistrarApplications: Edge-only locked settings — never mirror here.
    'adminDeletedUserEmails': config.adminDeletedUserEmails,
    'adminUserAccountStatusByEmail': config.adminUserAccountStatusByEmail,
    'adminUserCrownBadgeByEmail': config.adminUserCrownBadgeByEmail,
    'savedAt': DateTime.now().toUtc().toIso8601String(),
  };
}

Future<void> _persistManagementOperationalListsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final payload = _managementOperationalListsPayload(config, forCloud: true);
    await prefs.setString(_kNgmyManagementListsPrefsKey, jsonEncode(payload));
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
  final email = ngmyCurrentAuthEmail();
  if (email.isEmpty) return null;
  final data = await ngmyPrivateListsFetch(email: email);
  if (data == null) return null;
  final mgmt = data['management'];
  if (mgmt is Map) {
    // Also absorb other private lists into config while we're here.
    final invites = data['gameInvites'];
    if (invites is List) {
      // Applied by caller via _applyPrivateListsPayload when available.
    }
    return Map<String, dynamic>.from(mgmt);
  }
  return null;
}

Future<bool> _persistManagementOperationalListsAuthoritative(AppConfig config) async {
  await NgmyLoanStore.ensureAllCloudPhotoRefs(config.loanApplications);
  await _persistManagementOperationalListsLocal(config);
  final payload = _managementOperationalListsPayload(config, forCloud: true);
  final sigPayload = Map<String, dynamic>.from(payload)..remove('savedAt');
  final sig = jsonEncode(sigPayload);
  if (sig == _lastManagementOperationalListsCloudSig) return true;

  final email = ngmyCurrentAuthEmail();
  if (email.isEmpty || !await ngmyCanReachCloud()) return false;
  final ok = await ngmyPrivateListsPersistManagement(email: email, management: payload);
  if (ok) _lastManagementOperationalListsCloudSig = sig;
  return ok;
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
  // civicRegistrarApplications come from Edge — ignore if present in old blobs.
  final deleted = payload['adminDeletedUserEmails'];
  if (deleted is List) {
    final merged = <String>{
      for (final e in config.adminDeletedUserEmails) ngmyNormalizeEmail(e.toString()),
      for (final e in deleted) ngmyNormalizeEmail(e.toString()),
    }..removeWhere((e) => e.isEmpty);
    config.adminDeletedUserEmails = merged.toList()..sort();
  }
  final statuses = payload['adminUserAccountStatusByEmail'];
  if (statuses is Map) {
    final next = Map<String, String>.from(config.adminUserAccountStatusByEmail);
    statuses.forEach((k, v) {
      final key = ngmyNormalizeEmail(k.toString());
      final status = v.toString().trim().toLowerCase();
      if (key.isEmpty) return;
      if (status.isEmpty || status == 'active') {
        next.remove(key);
      } else {
        next[key] = status;
      }
    });
    config.adminUserAccountStatusByEmail = next;
  }
  final crowns = payload['adminUserCrownBadgeByEmail'];
  if (crowns is Map) {
    final next = Map<String, String>.from(config.adminUserCrownBadgeByEmail);
    crowns.forEach((k, v) {
      final key = ngmyNormalizeEmail(k.toString());
      final crown = v.toString().trim().toLowerCase();
      if (key.isEmpty) return;
      if (crown == 'king' || crown == 'queen') {
        next[key] = crown;
      } else {
        next.remove(key);
      }
    });
    config.adminUserCrownBadgeByEmail = next;
  }
}

/// Merge authoritative private lists (Edge) + device backups into [config].
Future<void> ngmyHydrateManagementListsFromAllBackups(AppConfig config) async {
  final local = await _loadManagementOperationalListsLocal();
  if (local != null) _applyManagementOperationalListsPayload(config, local);
  await NgmyLoanPhotosStore.applyTo(config.loanApplications);
  await NgmyLoanStatusStore.applyTo(config.loanApplications);
  await NgmyLoanStatusCloud.fetchAndApply(config.loanApplications);
  await NgmyLoanPaymentsStore.applyTo(config.loanApplications);
  await NgmyLoanPaymentsCloud.fetchAndApply(config.loanApplications);
  if (await ngmyCanReachCloud()) {
    final email = ngmyCurrentAuthEmail();
    if (email.isNotEmpty) {
      final isAdmin = ngmyEmailIsAdmin(email);
      final allowAdminBulkFetch =
          NgmyFeatureSyncSession.adminDashboardActive || NgmyFeatureSyncSession.loansActive;
      if (!isAdmin || allowAdminBulkFetch) {
        final data = await ngmyPrivateListsFetch(email: email);
        if (data != null && data['networkEmpty'] != true) {
          final mgmt = data['management'];
          if (mgmt is Map) {
            _applyManagementOperationalListsPayload(config, Map<String, dynamic>.from(mgmt));
          }
          final invites = data['gameInvites'];
          if (invites is List) {
            config.gameInvites = mergeGameInvites(
              config.gameInvites,
              invites.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList(),
            );
          }
          final inquiries = data['storeInquiries'];
          if (inquiries is List) {
            config.storeInquiries = inquiries.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
          }
          final orders = data['storeOrders'];
          if (orders is List) {
            config.storeOrders = orders.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
          }
          final family = data['familyTreePhotoAccessUntilByEmail'];
          if (family is Map) {
            config.familyTreePhotoAccessUntilByEmail = family.map(
              (k, v) => MapEntry(k.toString(), v.toString()),
            );
          }
          final spendings = data['helpCampaignSpendings'];
          if (spendings is List) {
            final remote = spendings.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
            config.helpCampaignSpendings = _mergeHelpCampaignSpendingsLists(
              config.helpCampaignSpendings,
              remote,
            );
          }
        }
      }
    }
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
  final snapshot = config.loanApplications.map((e) => Map<String, dynamic>.from(e)).toList();
  await ngmyHydrateManagementListsFromAllBackups(config);
  if (snapshot.isNotEmpty) {
    config.loanApplications = _mergeLoanApplicationsLists(snapshot, config.loanApplications);
  }
  await NgmyLoanPhotosStore.applyTo(config.loanApplications);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
}

Future<bool> _pushLoanApplicationsColumnOnly(AppConfig config) async {
  // Never write PII loan arrays to public config — Edge only.
  final email = ngmyCurrentAuthEmail();
  if (email.isEmpty) return false;
  final payload = _managementOperationalListsPayload(config, forCloud: true);
  return ngmyPrivateListsPersistManagement(email: email, management: payload);
}

/// User loan submit — upload to authoritative management lists so admin receives applications.
Future<bool> ngmyUserPersistLoanApplications(AppConfig config) async {
  await NgmyLoanStore.ensureAllCloudPhotoRefs(config.loanApplications);
  for (final app in config.loanApplications) {
    await NgmyLoanPhotosStore.saveForApp(app);
    ngmyLoanCompactPhotoRefsForListStorage(app);
  }
  await _persistManagementOperationalListsLocal(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  unawaited(NgmyLoanStatusCloud.pushFromApps(config.loanApplications));
  unawaited(NgmyLoanPaymentsCloud.pushFromApps(config.loanApplications));
  if (!await ngmyCanReachCloud()) return true;

  for (var attempt = 0; attempt < 3; attempt++) {
    final ok = await _persistManagementOperationalListsAuthoritative(config);
    if (ok) return true;
    if (attempt < 2) await Future.delayed(Duration(milliseconds: 450 * (attempt + 1)));
  }
  return _pushLoanApplicationsColumnOnly(config);
}

Future<bool> _upsertManagementListColumn(String column, dynamic value) async {
  try {
    await ngmyDbRelayUpsert('config', [
      {'id': kNgmyConfigRowId, column: value},
    ]);
    return true;
  } catch (e) {
    debugPrint('[admin mgmt] config column $column: $e');
    return false;
  }
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
        await ngmyDbRelayUpsert('config', [
          {'id': kNgmyConfigRowId, entry.key: entry.value},
        ]);
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
          await ngmyDbRelayUpsert('config', [row]);
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

Future<void> ngmyHydrateCivicSelfEnrollmentFromAllBackups(AppConfig config) async {
  final local = await NgmyCivicSelfEnrollment.loadLocalPayload();
  await NgmyCivicSelfEnrollment.hydrateLocal(config);
  // Do NOT fetch civic_self_enrollment_settings over REST — that row historically
  // contained cities/rooms and showed them in DevTools. Flag comes from config column.
  if (!await ngmyCanReachCloud()) return;
  try {
    final cfg = await _fetchNgmyConfigRow(columns: 'civicSelfEnrollmentEnabled');
    if (cfg != null && cfg.containsKey('civicSelfEnrollmentEnabled')) {
      final cloud = <String, dynamic>{
        'civicSelfEnrollmentEnabled': cfg['civicSelfEnrollmentEnabled'] == true,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      };
      NgmyCivicSelfEnrollment.applyCloudOverLocal(config, cloud, local);
      await NgmyCivicSelfEnrollment.saveLocalBackup(config);
    }
  } catch (e) {
    debugPrint('[civic self enrollment] hydrate from config: $e');
  }
  // Write-only scrub: replace any legacy cities/rooms blob with flag-only (no GET).
  unawaited(ngmyUpsertSettingsRowReliable(
    _kNgmyCivicSelfEnrollmentSettingsKey,
    NgmyCivicSelfEnrollment.payload(config),
  ));
}

Future<bool> ngmyPersistCivicSelfEnrollmentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await NgmyCivicSelfEnrollment.saveLocalBackup(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  final payload = NgmyCivicSelfEnrollment.payload(config);
  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    // REST-first so guest enroll links (anon) can read the same row.
    cloudOk = await ngmyUpsertSettingsRowReliable(_kNgmyCivicSelfEnrollmentSettingsKey, payload);
    if (!cloudOk) {
      cloudOk = await _upsertNgmySettingSafe(_kNgmyCivicSelfEnrollmentSettingsKey, payload);
    }
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
    await _persistOperationalConfigToCloud(config);
    // Verify write succeeded without re-downloading the sensitive settings blob.
    if (cloudOk) {
      // Guests read enrollment via Edge civicPublicCatalog — not public REST.
    }
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Future<void> ngmyHydrateCivicRegistryMembersFromAllBackups(
  AppConfig config,
  List<UserData> allUsers, {
  String? requesterEmail,
  String? state,
  String? pinSig,
}) async {
  final email = (requesterEmail ?? ngmyCurrentAuthEmail()).trim().toLowerCase();
  var cloudHydrated = false;
  // Always try cloud when signed in — reachability probe can false-negative on Wi‑Fi.
  if (email.isNotEmpty) {
    final resolvedState = (state ?? '').trim();
    var resolvedPin = (pinSig ?? '').trim();
    if (resolvedPin.isEmpty && resolvedState.isNotEmpty) {
      resolvedPin = (await civicRegistryStoredPinSig(email, state: resolvedState)) ?? '';
    }
    final row = await ngmyCivicFetchRoster(
      email: email,
      state: resolvedState,
      pinSig: resolvedPin,
    );
    if (row != null && row['networkEmpty'] != true && row['needsUnlock'] != true) {
      final view = (row['view'] ?? '').toString();
      // Member-view rows are sanitized (masked email, no phone/dob) — never merge into config.
      if (view == 'admin' || view == 'registrar') {
        final scope = view == 'registrar'
            ? (row['registrarState'] ?? resolvedState).toString()
            : '';
        NgmyCivicRegistryMembers.adoptCloudPayload(
          config,
          {
            'members': row['members'] ?? const [],
            'removed': row['removed'] ?? const [],
            'deceased': row['deceased'] ?? const [],
          },
          scopeState: scope,
        );
        await NgmyCivicRegistryMembers.saveLocalBackup(config);
        cloudHydrated = true;
      }
    }
  }
  if (!cloudHydrated) {
    await NgmyCivicRegistryMembers.hydrateLocal(config);
  }
}

Future<bool> ngmyPersistCivicRegistryMembers(
  AppConfig config, {
  String? requesterEmail,
  String? state,
}) async {
  // Deploy stamp: keep enroll + print roster fixes published to ngmy.org.
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyCivicRegistryMembers.pruneIncompleteEnrollments(config);
  await NgmyCivicRegistryMembers.saveLocalBackup(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  var cloudOk = false;
  final email = (requesterEmail ?? ngmyCurrentAuthEmail()).trim().toLowerCase();
  // Do not gate on ngmyCanReachCloud() — probe often false-negatives while Wi‑Fi works.
  if (email.isNotEmpty) {
    // Never write soft-delete rows for people already back on the roster.
    NgmyCivicRegistryMembers.clearSoftDeletesForActiveMembers(config);

    // Safety net: union cloud roster into local before upload so a stale device
    // never pushes a truncated state slice (server also merges, but this keeps
    // local backups accurate too).
    final scope = (state ?? '').trim();
    final cloudRow = await ngmyCivicFetchRoster(
      email: email,
      state: scope,
    );
    if (cloudRow != null &&
        cloudRow['networkEmpty'] != true &&
        cloudRow['needsUnlock'] != true) {
      final view = (cloudRow['view'] ?? '').toString();
      if (view == 'admin' || view == 'registrar') {
        NgmyCivicRegistryMembers.applyPayload(
          config,
          {
            'members': cloudRow['members'] ?? const [],
            'removed': cloudRow['removed'] ?? const [],
            'deceased': cloudRow['deceased'] ?? const [],
          },
        );
        if (scope.isNotEmpty) {
          NgmyCivicRegistryMembers.repairRedactedFields(config, fallbackState: scope);
        }
        NgmyCivicRegistryMembers.clearSoftDeletesForActiveMembers(config);
      }
    }

    final result = await ngmyCivicPersistRoster(
      email: email,
      state: scope,
      payload: scope.isEmpty
          ? NgmyCivicRegistryMembers.payload(config)
          : NgmyCivicRegistryMembers.payloadForState(config, state: scope),
    );
    cloudOk = result.ok;
  }
  await NgmyCivicRegistryMembers.saveLocalBackup(config);
  // Notify after save so listeners pull the updated cloud roster (not a mid-write race).
  if (cloudOk) NgmyAdminLiveRefresh.notify();
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

bool _communicateProfilesEffectivelyEmpty(AppConfig config) {
  if (config.communicateProfiles.isEmpty) return true;
  for (final raw in config.communicateProfiles) {
    if (raw is! Map) continue;
    final id = (raw['id'] ?? '').toString().trim();
    if (id.isEmpty) continue;
    if (raw['active'] == false) continue;
    return false;
  }
  return true;
}

void _applyCommunicateSettingsPayload(AppConfig config, Map<String, dynamic> payload) {
  final localEmpty = _communicateProfilesEffectivelyEmpty(config);
  if (ngmyShouldDeferRemoteConfigOverwrite() && !localEmpty) return;
  if (payload.containsKey('communicateEnabled')) {
    config.communicateEnabled = payload['communicateEnabled'] == true;
  }
  final raw = payload['communicateProfiles'];
  if (raw is List) {
    final next = raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
    if (next.isNotEmpty || config.communicateProfiles.isEmpty) {
      config.communicateProfiles = next;
    }
  }
}

Future<void> _persistCommunicateSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final embedded = await NgmyCommunicateAvatarCache.profilesWithEmbeddedAvatars(config.communicateProfiles);
    await prefs.setString(
      _kNgmyCommunicatePrefsKey,
      jsonEncode({
        'communicateEnabled': config.communicateEnabled,
        'communicateProfiles': embedded,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      }),
    );
  } catch (e) {
    debugPrint('[admin communicate] local backup: $e');
  }
}

Future<void> ngmyPersistCommunicateSettingsLocalBackup(AppConfig config) =>
    _persistCommunicateSettingsLocal(config);

Future<void> ngmyHydrateCommunicateSettingsFromAllBackups(AppConfig config) async {
  await NgmyCommunicateAvatarCache.hydrateRamFromDisk();
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
  unawaited(_persistCommunicateSettingsLocal(config));
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
      'communicatePassTwoWeekFee': config.communicatePassTwoWeekFee,
      'communicatePassTwoWeekEnabled': config.communicatePassTwoWeekEnabled,
      'communicatePassMonthlyFee': config.communicatePassMonthlyFee,
      'communicatePassMonthlyEnabled': config.communicatePassMonthlyEnabled,
      'communicatePassYearlyFee': config.communicatePassYearlyFee,
      'communicatePassYearlyEnabled': config.communicatePassYearlyEnabled,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

DateTime? _ngmySettingsPayloadSavedAt(Map<String, dynamic> payload) =>
    DateTime.tryParse((payload['savedAt'] ?? '').toString());

bool _shouldApplyRemoteNgmySettingsPayload(Map<String, dynamic>? localPayload, Map<String, dynamic> remotePayload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return false;
  final remoteAt = _ngmySettingsPayloadSavedAt(remotePayload);
  if (remoteAt == null) return true;
  if (localPayload == null || localPayload.isEmpty) return true;
  final localAt = _ngmySettingsPayloadSavedAt(localPayload);
  if (localAt == null) return true;
  return !remoteAt.isBefore(localAt);
}

void _applyCommunicatePaymentPayload(AppConfig config, Map<String, dynamic> payload, {bool fromRemote = false}) {
  if (fromRemote && ngmyShouldDeferRemoteConfigOverwrite()) return;
  final fee = payload['communicateFeeAmount'];
  if (fee is num && fee >= 0) config.communicateFeeAmount = fee.toDouble();
  final mins = payload['communicateMinutesPerPayment'];
  if (mins is num && mins > 0) config.communicateMinutesPerPayment = mins.toInt();
  final twoWeekFee = payload['communicatePassTwoWeekFee'];
  if (twoWeekFee is num && twoWeekFee >= 0) config.communicatePassTwoWeekFee = twoWeekFee.toDouble();
  if (payload.containsKey('communicatePassTwoWeekEnabled')) {
    config.communicatePassTwoWeekEnabled = payload['communicatePassTwoWeekEnabled'] == true;
  }
  final monthlyFee = payload['communicatePassMonthlyFee'];
  if (monthlyFee is num && monthlyFee >= 0) config.communicatePassMonthlyFee = monthlyFee.toDouble();
  if (payload.containsKey('communicatePassMonthlyEnabled')) {
    config.communicatePassMonthlyEnabled = payload['communicatePassMonthlyEnabled'] == true;
  }
  final yearlyFee = payload['communicatePassYearlyFee'];
  if (yearlyFee is num && yearlyFee >= 0) config.communicatePassYearlyFee = yearlyFee.toDouble();
  if (payload.containsKey('communicatePassYearlyEnabled')) {
    config.communicatePassYearlyEnabled = payload['communicatePassYearlyEnabled'] == true;
  }
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
  Map<String, dynamic>? localPayload;
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCommunicatePaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) {
        localPayload = Map<String, dynamic>.from(decoded);
        _applyCommunicatePaymentPayload(config, localPayload!, fromRemote: false);
      }
    }
  } catch (e) {
    debugPrint('[admin communicate payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyCommunicatePaymentSettingsKey);
    if (row != null && row.isNotEmpty && _shouldApplyRemoteNgmySettingsPayload(localPayload, row)) {
      _applyCommunicatePaymentPayload(config, row, fromRemote: true);
      await _persistCommunicatePaymentSettingsLocal(config);
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

Map<String, dynamic> _documentScanPaymentPayload(AppConfig config) => {
      'documentScanFreeLimit': config.documentScanFreeLimit,
      'documentScanUnlockFee': config.documentScanUnlockFee,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyDocumentScanPaymentPayload(AppConfig config, Map<String, dynamic> payload, {bool fromRemote = false}) {
  if (fromRemote && ngmyShouldDeferRemoteConfigOverwrite()) return;
  final limit = payload['documentScanFreeLimit'];
  if (limit is num && limit >= 0) config.documentScanFreeLimit = limit.toInt();
  final fee = payload['documentScanUnlockFee'];
  if (fee is num && fee >= 0) config.documentScanUnlockFee = fee.toDouble();
}

Future<void> _persistDocumentScanPaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyDocumentScanPaymentPrefsKey, jsonEncode(_documentScanPaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin document scan payments] local backup: $e');
  }
}

Future<void> ngmyHydrateDocumentScanPaymentsFromAllBackups(AppConfig config) async {
  Map<String, dynamic>? localPayload;
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyDocumentScanPaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) {
        localPayload = Map<String, dynamic>.from(decoded);
        _applyDocumentScanPaymentPayload(config, localPayload!, fromRemote: false);
      }
    }
  } catch (e) {
    debugPrint('[admin document scan payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyDocumentScanPaymentSettingsKey);
    if (row != null && row.isNotEmpty && _shouldApplyRemoteNgmySettingsPayload(localPayload, row)) {
      _applyDocumentScanPaymentPayload(config, row, fromRemote: true);
      await _persistDocumentScanPaymentSettingsLocal(config);
    }
  }
}

Future<bool> ngmyPersistDocumentScanPaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistDocumentScanPaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _documentScanPaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyDocumentScanPaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Map<String, dynamic> _docSharePaymentPayload(AppConfig config) => {
      'docShareIndividualFreeLimit': config.docShareIndividualFreeLimit,
      'docShareIndividualUnlockFee': config.docShareIndividualUnlockFee,
      'docShareSchoolLicenseFee': config.docShareSchoolLicenseFee,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyDocSharePaymentPayload(AppConfig config, Map<String, dynamic> payload, {bool fromRemote = false}) {
  if (fromRemote && ngmyShouldDeferRemoteConfigOverwrite()) return;
  final limit = payload['docShareIndividualFreeLimit'];
  if (limit is num && limit >= 0) config.docShareIndividualFreeLimit = limit.toInt();
  final indFee = payload['docShareIndividualUnlockFee'];
  if (indFee is num && indFee >= 0) config.docShareIndividualUnlockFee = indFee.toDouble();
  final schoolFee = payload['docShareSchoolLicenseFee'];
  if (schoolFee is num && schoolFee >= 0) config.docShareSchoolLicenseFee = schoolFee.toDouble();
}

Future<void> _persistDocSharePaymentSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyDocSharePaymentPrefsKey, jsonEncode(_docSharePaymentPayload(config)));
  } catch (e) {
    debugPrint('[admin doc share payments] local backup: $e');
  }
}

Future<void> ngmyHydrateDocSharePaymentsFromAllBackups(AppConfig config) async {
  Map<String, dynamic>? localPayload;
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyDocSharePaymentPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) {
        localPayload = Map<String, dynamic>.from(decoded);
        _applyDocSharePaymentPayload(config, localPayload!, fromRemote: false);
      }
    }
  } catch (e) {
    debugPrint('[admin doc share payments] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyDocSharePaymentSettingsKey);
    if (row != null && row.isNotEmpty && _shouldApplyRemoteNgmySettingsPayload(localPayload, row)) {
      _applyDocSharePaymentPayload(config, row, fromRemote: true);
      await _persistDocSharePaymentSettingsLocal(config);
    }
  }
}

Future<bool> ngmyPersistDocSharePaymentSettings(AppConfig config) async {
  ngmyAdminConfigMutationAt = DateTime.now();
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistDocSharePaymentSettingsLocal(config);

  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _docSharePaymentPayload(config);
    cloudOk = await _upsertNgmySettingSafe(_kNgmyDocSharePaymentSettingsKey, payload);
    await NgmySupabaseSyncThrottle.persistCriticalConfigNow(config, _persistCriticalConfigFields);
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

Map<String, dynamic> _helperAiSettingsPayload(AppConfig config) => {
      'ngmyHelperDailyMessageLimit': config.ngmyHelperDailyMessageLimit,
      'maxMediaPostsPerWeek': config.maxMediaPostsPerWeek,
      'elevenLabsApiKey': config.elevenLabsApiKey.trim(),
      'resendApiKey': config.resendApiKey.trim(),
      'resendFromEmail': config.resendFromEmail.trim(),
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyHelperAiSettingsPayload(AppConfig config, Map<String, dynamic> payload) {
  if (ngmyShouldDeferRemoteConfigOverwrite()) return;
  final helper = payload['ngmyHelperDailyMessageLimit'];
  if (helper is num && helper >= 0) config.ngmyHelperDailyMessageLimit = helper.toInt();
  final media = payload['maxMediaPostsPerWeek'];
  if (media is num && media >= 0) config.maxMediaPostsPerWeek = media.toInt();
  if (payload.containsKey('elevenLabsApiKey')) {
    config.elevenLabsApiKey = (payload['elevenLabsApiKey'] ?? '').toString().trim();
  }
  if (payload.containsKey('resendApiKey')) {
    config.resendApiKey = (payload['resendApiKey'] ?? '').toString().trim();
  }
  if (payload.containsKey('resendFromEmail')) {
    config.resendFromEmail = (payload['resendFromEmail'] ?? 'NGMY <noreply@ngmy.org>').toString().trim();
  }
}

Future<void> _persistHelperAiSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyHelperAiPrefsKey, jsonEncode(_helperAiSettingsPayload(config)));
    await NgmyElevenLabsTts.persistLocalKey(config.elevenLabsApiKey);
    await NgmyResendEmail.persistLocalKey(config.resendApiKey);
    await NgmyResendEmail.persistLocalFrom(config.resendFromEmail);
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
          await ngmyDbRelayUpsert('config', [row]);
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
          await ngmyDbRelayUpsert('config', [row]);
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

Map<String, dynamic> _civicHelpModeSettingsPayload(AppConfig config) => {
      'helpModeActive': config.helpModeActive,
      'helpPurpose': config.helpPurpose.trim(),
      'helpCashApp': config.helpCashApp.trim(),
      'helpZelle': config.helpZelle.trim(),
      'helpPhone': config.helpPhone.trim(),
      'helpScopeType': config.helpScopeType.trim().isEmpty ? 'all' : config.helpScopeType.trim(),
      'helpScopeValue': config.helpScopeValue.trim(),
      'helpState': config.helpState.trim(),
      'helpCampaignId': config.helpCampaignId.trim(),
      'helpCampaignStartedAt': config.helpCampaignStartedAt.trim(),
      // Per-state campaigns (see AppConfigHelpMode) — the fields above are
      // legacy and no longer written to, but kept for old-payload
      // migration. This is the live data; without it here, the periodic
      // help-mode poll (_refreshCivicHelpModeAndContributions) wouldn't
      // pick up another device's per-state activate/deactivate until a
      // full app config resync happened.
      'helpModeByState': config.helpModeByState,
      'helpCampaignClosures': config.helpCampaignClosures,
  // helpCampaignSpendings — Edge-only (civic_help_campaign_spendings)
  'savedAt': DateTime.now().toUtc().toIso8601String(),
    };

void _applyCivicHelpModeSettingsPayload(AppConfig config, Map<String, dynamic> payload) {
  if (payload.isEmpty) return;
  // A registrar's own Activate/Deactivate/Save marks
  // ngmyAdminConfigMutationAt (see ngmyPersistCivicHelpModeSettings below).
  // Without this guard, the 75s poll (_refreshCivicHelpModeAndContributions)
  // or any other concurrent fetch could read back a not-yet-caught-up cloud
  // row and silently overwrite the local change — e.g. a registrar deactivates,
  // the local UI updates, but a stale "still active" row from a lagging cloud
  // read flips it back on moments later, which looked to registrars like
  // Deactivate simply "did nothing." helpCampaignSpendings is exempt since
  // it's merged (additive, id-keyed) rather than overwritten, so deferring it
  // would only delay other users from seeing a just-recorded spend for no
  // safety benefit.
  final deferLiveFields = ngmyShouldDeferRemoteConfigOverwrite();
  final rawStateMap = payload['helpModeByState'];
  final hasPerStatePayload = rawStateMap is Map && rawStateMap.isNotEmpty;
  // Flat help fields are migration input for old payloads only. Once either
  // side has per-state data, accepting a stale legacy `helpModeActive: true`
  // can recreate a campaign that an authorized registrar already closed.
  if (!deferLiveFields &&
      !hasPerStatePayload &&
      config.helpModeByState.isEmpty) {
    if (payload.containsKey('helpModeActive')) {
      config.helpModeActive = payload['helpModeActive'] == true;
    }
    if (payload.containsKey('helpPurpose')) {
      config.helpPurpose = (payload['helpPurpose'] ?? '').toString().trim();
    }
    if (payload.containsKey('helpCashApp')) {
      config.helpCashApp = (payload['helpCashApp'] ?? '').toString().trim();
    }
    if (payload.containsKey('helpZelle')) {
      config.helpZelle = (payload['helpZelle'] ?? '').toString().trim();
    }
    if (payload.containsKey('helpPhone')) {
      config.helpPhone = (payload['helpPhone'] ?? '').toString().trim();
    }
    if (payload.containsKey('helpScopeType')) {
      final v = (payload['helpScopeType'] ?? 'all').toString().trim();
      config.helpScopeType = v.isEmpty ? 'all' : v;
    }
    if (payload.containsKey('helpScopeValue')) {
      config.helpScopeValue = (payload['helpScopeValue'] ?? '').toString().trim();
    }
    if (payload.containsKey('helpState')) {
      config.helpState = (payload['helpState'] ?? '').toString().trim();
    }
    if (payload.containsKey('helpCampaignId')) {
      config.helpCampaignId = (payload['helpCampaignId'] ?? '').toString().trim();
    }
    if (payload.containsKey('helpCampaignStartedAt')) {
      config.helpCampaignStartedAt =
          (payload['helpCampaignStartedAt'] ?? '').toString().trim();
    }
  }
  if (payload.containsKey('helpModeByState') && payload['helpModeByState'] is Map && !deferLiveFields) {
    final remote = Map<String, dynamic>.from(payload['helpModeByState'] as Map);
    // Merge closures first when both arrive in the same payload so inactive
    // closed campaigns cannot be resurrected by a stale active cloud row.
    final pendingClosures = payload.containsKey('helpCampaignClosures') && payload['helpCampaignClosures'] is List
        ? _mergeHelpCampaignClosuresLists(
            config.helpCampaignClosures,
            (payload['helpCampaignClosures'] as List).map((e) => Map<String, dynamic>.from(e as Map)).toList(),
          )
        : config.helpCampaignClosures;
    config.helpModeByState = ngmyMergeHelpModeByStateMaps(
      config.helpModeByState,
      remote,
      closures: pendingClosures,
    );
  }
  if (payload.containsKey('helpCampaignClosures') && payload['helpCampaignClosures'] is List && !deferLiveFields) {
    final remote = (payload['helpCampaignClosures'] as List)
        .map((e) => Map<String, dynamic>.from(e as Map))
        .toList();
    config.helpCampaignClosures = _mergeHelpCampaignClosuresLists(config.helpCampaignClosures, remote);
  }
  if (!deferLiveFields && config.helpModeByState.isNotEmpty) {
    // Disable the one-time flat-field migration after per-state storage exists.
    config.helpModeActive = false;
  }
  // helpCampaignSpendings intentionally ignored here — loaded via Edge privateListsFetch.
}

Future<void> _persistCivicHelpModeSettingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyCivicHelpModePrefsKey, jsonEncode(_civicHelpModeSettingsPayload(config)));
  } catch (e) {
    debugPrint('[civic help mode] local backup: $e');
  }
}

Future<void> ngmyHydrateCivicHelpModeFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCivicHelpModePrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyCivicHelpModeSettingsPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[civic help mode] local hydrate: $e');
  }
  if (await ngmyCanReachCloud()) {
    try {
      // This row is deliberately shared by RLS with every authenticated user;
      // the generic admin-only settings helper would leave other devices stale.
      final row = await ngmyDbRelaySettingsFetch(_kNgmyCivicHelpModeSettingsKey,
      );
    if (row != null) {
        _applyCivicHelpModeSettingsPayload(config, row);
        await _persistCivicHelpModeSettingsLocal(config);
      }
    } catch (e) {
      debugPrint('[civic help mode] shared cloud hydrate: $e');
    }
  }
}

Future<bool> ngmyPersistCivicHelpModeSettings(AppConfig config) async {
  // Marks "just mutated locally" so a concurrent/lagging remote fetch
  // (the 75s help-mode poll, or another device's stale read) defers
  // overwriting helpModeByState/helpCampaignClosures for the next 45s
  // instead of silently reverting this activate/deactivate/save/spend.
  // See _applyCivicHelpModeSettingsPayload.
  ngmyAdminConfigMutationAt = DateTime.now();
  await _persistCivicHelpModeSettingsLocal(config);
  await _persistCivicHelpCampaignSpendingsLocal(config);
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  var helpModeCloudOk = false;
  if (await ngmyCanReachCloud()) {
    final payload = _civicHelpModeSettingsPayload(config);
    final email = ngmyCurrentAuthEmail();
    helpModeCloudOk = await ngmyCivicAdminSettingsPersist(
      email: email,
      kind: 'civicHelpModeSettings', payload: payload);
    if (!helpModeCloudOk) {
      try {
        helpModeCloudOk = await ngmyDbRelaySettingsUpsert(
          _kNgmyCivicHelpModeSettingsKey,
        payload,
      );
    } catch (e) {
        debugPrint('[civic help mode] shared relay save: $e');
      }
    }
    if (email.isNotEmpty) {
      var spendOk = await ngmyPrivateListsPersistHelpSpendings(
        email: email,
        items: config.helpCampaignSpendings.map((e) => Map<String, dynamic>.from(e)).toList(),
      );
      if (!spendOk) {
        try {
          spendOk = await ngmyDbRelaySettingsUpsert(
            _kNgmyCivicHelpCampaignSpendingsSettingsKey,
            {
              'items': config.helpCampaignSpendings
                  .map((e) => Map<String, dynamic>.from(e))
                  .toList(),
            },
          );
        } catch (e) {
          debugPrint('[civic help spendings] shared relay save: $e');
    }
      }
    }
    try {
      var row = <String, dynamic>{
        'id': kNgmyConfigRowId,
        'helpModeActive': config.helpModeActive,
        'helpPurpose': config.helpPurpose,
        'helpCashApp': config.helpCashApp,
        'helpZelle': config.helpZelle,
        'helpPhone': config.helpPhone,
        'helpScopeType': config.helpScopeType,
        'helpScopeValue': config.helpScopeValue,
        'helpState': config.helpState,
        'helpCampaignId': config.helpCampaignId,
        'helpCampaignStartedAt': config.helpCampaignStartedAt,
        'helpModeByState': config.helpModeByState,
        'helpCampaignClosures': config.helpCampaignClosures,
      };
      for (var i = 0; i < 8; i++) {
        try {
          // See _upsertNgmySettingSafe — no timeout here meant a stalled
          // connection could block Deactivate Help Mode's await forever.
          await ngmyDbRelayUpsert('config', [row], timeout: kNgmyCloudWriteTimeout);
          break;
        } catch (e) {
          final missing = _missingColumnFromPostgrestError(e);
          if (missing != null && missing.isNotEmpty && row.containsKey(missing)) {
            row = Map<String, dynamic>.from(row)..remove(missing);
            if (row.length <= 1) break;
            continue;
          }
          debugPrint('[civic help mode] config upsert: $e');
          break;
        }
      }
    } catch (e) {
      debugPrint('[civic help mode] config save: $e');
    }
  }
  _scheduleOperationalConfigCloudPersist(config);
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  // Spending/config fallbacks must not disguise a failed shared help-mode
  // write. Activate/deactivate callers use this result to tell registrars
  // whether every other device can receive the new state.
  return helpModeCloudOk;
}

/// Fast path — local + ngmy_settings only (opens management panels instantly).
Future<void> ngmyAdminRefreshManagementConfigLight(AppConfig config) async {
  await ngmyHydrateManagementListsFromAllBackups(config);
  await ngmyHydrateHelpCenterHubFromAllBackups(config);
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
  await ngmyHydrateDocumentScanPaymentsFromAllBackups(config);
  await ngmyHydrateDocSharePaymentsFromAllBackups(config);
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
  await ngmyHydrateCivicSelfEnrollmentFromAllBackups(config);
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

const String _kNgmyHelpCenterSettingsKey = 'help_center_hub_settings';
const String _kNgmyHelpCenterPrefsKey = 'ngmy_help_center_hub_settings_v1';

Map<String, dynamic> _helpCenterHubPayload(AppConfig config) => Map<String, dynamic>.from(config.helpCenterHub);

void _applyHelpCenterHubPayload(AppConfig config, Map<String, dynamic> payload) {
  if (payload.isEmpty) return;
  config.helpCenterHub = Map<String, dynamic>.from(payload);
}

Future<void> _persistHelpCenterHubLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyHelpCenterPrefsKey, jsonEncode(_helpCenterHubPayload(config)));
  } catch (e) {
    debugPrint('[help center] local backup: $e');
  }
}

Future<void> ngmyHydrateHelpCenterHubFromAllBackups(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyHelpCenterPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyHelpCenterHubPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[help center] local hydrate: $e');
  }
  if (config.helpCenterHub.isEmpty) {
    config.helpCenterHub = NgmyHelpCenterConfig.defaults().toMap();
  }
  if (await ngmyCanReachCloud()) {
    final row = await _fetchNgmySettingSafe(_kNgmyHelpCenterSettingsKey);
    if (row != null && row.isNotEmpty) _applyHelpCenterHubPayload(config, row);
  }
}

Future<bool> ngmyPersistHelpCenterHubSettings(AppConfig config) async {
  await _persistHelpCenterHubLocal(config);
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  var cloudOk = false;
  if (await ngmyCanReachCloud()) {
    cloudOk = await _upsertNgmySettingSafe(_kNgmyHelpCenterSettingsKey, _helpCenterHubPayload(config));
  }
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  return cloudOk;
}

List<String> _stringIdListFromPayload(dynamic raw) {
  if (raw is! List) return const [];
  return raw.map((e) => e.toString().trim()).where((e) => e.isNotEmpty).toList();
}

Map<String, dynamic> _civicReceiptRemovedPayload(AppConfig config) {
  final ids = config.contributionReceiptRemovedKeys
      .map((e) => e.trim())
      .where((e) => e.isNotEmpty)
      .toSet()
      .toList()
    ..sort();
  return {
    'ids': ids,
    'updatedAt': DateTime.now().toUtc().toIso8601String(),
  };
}

void _applyCivicReceiptRemovedPayload(AppConfig config, Map<String, dynamic> payload) {
  final incoming = _stringIdListFromPayload(payload['ids'] ?? payload['keys'] ?? payload['contributionReceiptRemovedKeys']);
  if (incoming.isEmpty && !payload.containsKey('ids') && !payload.containsKey('keys')) return;
  config.contributionReceiptRemovedKeys = List<String>.from(
    NgmyCivicReadState.mergeSets(config.contributionReceiptRemovedKeys, incoming),
  );
}

Future<void> _persistCivicReceiptRemovedLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyCivicReceiptRemovedPrefsKey, jsonEncode(_civicReceiptRemovedPayload(config)));
  } catch (e) {
    debugPrint('[civic receipt removed] local backup: $e');
  }
}

Future<Set<String>> _fetchCivicReceiptRemovedFromCloud() async {
  final email = ngmyCurrentAuthEmail();
  if (email.isEmpty) return {};
  final payload = await ngmyDbRelaySettingsFetch(
    _kNgmyCivicReceiptRemovedSettingsKey,
  );
  if (payload == null) return {};
  return _stringIdListFromPayload(payload['ids'] ?? payload['keys']).toSet();
}

Future<void> ngmyHydrateCivicContributionReceiptRemoved(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCivicReceiptRemovedPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyCivicReceiptRemovedPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[civic receipt removed] local hydrate: $e');
  }
  if (!await ngmyCanReachCloud()) return;
  try {
    final cloud = await _fetchCivicReceiptRemovedFromCloud();
    if (cloud.isEmpty) return;
    config.contributionReceiptRemovedKeys = List<String>.from(
      NgmyCivicReadState.mergeSets(config.contributionReceiptRemovedKeys, cloud),
    );
    await _persistCivicReceiptRemovedLocal(config);
  } catch (e) {
    debugPrint('[civic receipt removed] cloud hydrate: $e');
  }
}

/// Registrar delete — shared tombstone so every user stops seeing this receipt.
Future<bool> ngmyPersistCivicContributionReceiptRemoved(AppConfig config, {String? addedKey}) async {
  final key = (addedKey ?? '').trim();
  if (key.isNotEmpty && !config.contributionReceiptRemovedKeys.contains(key)) {
    config.contributionReceiptRemovedKeys = [...config.contributionReceiptRemovedKeys, key];
  }
  await _persistCivicReceiptRemovedLocal(config);
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  if (!await ngmyCanReachCloud()) return false;
  try {
    final merged = {
      ...await _fetchCivicReceiptRemovedFromCloud(),
      ...config.contributionReceiptRemovedKeys.map((e) => e.trim()).where((e) => e.isNotEmpty),
    };
    config.contributionReceiptRemovedKeys = merged.toList()..sort();
    await _persistCivicReceiptRemovedLocal(config);
    final edgeOk = await ngmyCivicAdminSettingsPersist(
      email: ngmyCurrentAuthEmail(),
      kind: 'civicContributionReceiptRemoved',
      payload: _civicReceiptRemovedPayload(config),
    );
    if (edgeOk) return true;
    return ngmyDbRelaySettingsUpsert(
      _kNgmyCivicReceiptRemovedSettingsKey,
      _civicReceiptRemovedPayload(config),
    );
  } catch (e) {
    debugPrint('[civic receipt removed] cloud save: $e');
    return false;
  }
}

Map<String, dynamic> _civicDeletedContributionsPayload(AppConfig config) {
  final ids = config.civicDeletedContributionIds
      .map((e) => e.trim())
      .where((e) => e.isNotEmpty)
      .toSet()
      .toList()
    ..sort();
  return {
    'ids': ids,
    'updatedAt': DateTime.now().toUtc().toIso8601String(),
  };
}

void _applyCivicDeletedContributionsPayload(AppConfig config, Map<String, dynamic> payload) {
  final incoming = _stringIdListFromPayload(payload['ids'] ?? payload['keys'] ?? payload['civicDeletedContributionIds']);
  if (incoming.isEmpty && !payload.containsKey('ids') && !payload.containsKey('keys')) return;
  config.civicDeletedContributionIds = List<String>.from(
    NgmyCivicReadState.mergeSets(config.civicDeletedContributionIds, incoming),
  );
}

Future<void> _persistCivicDeletedContributionsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyCivicDeletedContributionsPrefsKey, jsonEncode(_civicDeletedContributionsPayload(config)));
  } catch (e) {
    debugPrint('[civic deleted contributions] local backup: $e');
  }
}

/// One Edge round-trip for civic/admin settings (no emails in ngmy_settings REST).
Future<void> ngmyHydratePrivilegedCivicSettingsFromEdge(AppConfig config, {UserData? user}) async {
  final email = ngmyCurrentAuthEmail();
  if (email.isEmpty) return;
  final isAdmin = user?.isAdmin == true || ngmyEmailIsAdmin(email);
  final isRegistrar = user?.isAuthorizedRegistrar == true;
  if (!isAdmin && !isRegistrar) {
    // Members: cities for own state only.
    await _mergeCivicCitiesAndRoomsIntoConfig(config);
    return;
  }
  if (isAdmin && !NgmyFeatureSyncSession.adminDashboardActive) {
    // Admin civic settings (emails, deleted ids) load only while Admin Dashboard is open.
    return;
  }
  final data = await ngmyCivicAdminSettingsFetch(email: email);
  if (data == null || data['ok'] != true || data['networkEmpty'] == true) return;

  final deleted = data['civicDeletedContributionIds'];
  if (deleted is List) {
    config.civicDeletedContributionIds = List<String>.from(
      NgmyCivicReadState.mergeSets(
        config.civicDeletedContributionIds,
        deleted.map((e) => e.toString()).where((e) => e.isNotEmpty),
      ),
    );
  }
  final receipt = data['civicContributionReceiptRemoved'];
  if (receipt is Map) {
    _applyCivicReceiptRemovedPayload(config, Map<String, dynamic>.from(receipt));
  }
  final help = data['civicHelpModeSettings'];
  if (help is Map) {
    _applyCivicHelpModeSettingsPayload(config, Map<String, dynamic>.from(help));
  }
  final sell = data['storeSellAccessEmails'];
  if (sell is List && isAdmin) {
    config.storeSellAccessEmails = sell.map((e) => e.toString().trim().toLowerCase()).where((e) => e.isNotEmpty).toList()
      ..sort();
  }
  final byState = data['civicCitiesByState'];
  if (byState is Map) {
    final remoteByState = NgmyCivicRegistryStats.parseCivicCitiesByState(byState);
    if (remoteByState.isNotEmpty) {
      config.civicCitiesByState =
          NgmyCivicRegistryStats.mergeCitiesByState(config.civicCitiesByState, remoteByState);
      config.cities = NgmyCivicRegistryStats.allCitiesUnion(config.civicCitiesByState);
    }
  }
  final rooms = data['rooms'];
  if (rooms is List && rooms.isNotEmpty) {
    config.rooms = NgmyCivicRegistryStats.mergeRooms(
      config.rooms,
      rooms.map((e) => e.toString()).toList(),
    );
  }
}

Future<Set<String>> _fetchCivicDeletedContributionsFromCloud() async {
  final email = ngmyCurrentAuthEmail();
  if (email.isEmpty) return {};
  final payload = await ngmyDbRelaySettingsFetch(
    _kNgmyCivicDeletedContributionsSettingsKey,
  );
  if (payload == null) return {};
  return _stringIdListFromPayload(payload['ids'] ?? payload['keys']).toSet();
}

Future<void> ngmyHydrateCivicDeletedContributions(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCivicDeletedContributionsPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) _applyCivicDeletedContributionsPayload(config, Map<String, dynamic>.from(decoded));
    }
  } catch (e) {
    debugPrint('[civic deleted contributions] local hydrate: $e');
  }
  if (!await ngmyCanReachCloud()) return;
  try {
    final cloud = await _fetchCivicDeletedContributionsFromCloud();
    if (cloud.isEmpty) return;
    config.civicDeletedContributionIds = List<String>.from(
      NgmyCivicReadState.mergeSets(config.civicDeletedContributionIds, cloud),
    );
    await _persistCivicDeletedContributionsLocal(config);
  } catch (e) {
    debugPrint('[civic deleted contributions] cloud hydrate: $e');
  }
}

/// Admin hard-delete tombstone — contribution ids stay gone across devices.
Future<bool> ngmyPersistCivicDeletedContributions(AppConfig config, {Iterable<String> addedIds = const []}) async {
  final next = {
    ...config.civicDeletedContributionIds.map((e) => e.trim()).where((e) => e.isNotEmpty),
    ...addedIds.map((e) => e.trim()).where((e) => e.isNotEmpty),
  };
  config.civicDeletedContributionIds = next.toList()..sort();
  await _persistCivicDeletedContributionsLocal(config);
  NgmyAdminLiveRefresh.notify();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  if (!await ngmyCanReachCloud()) return false;
  try {
    final merged = {
      ...await _fetchCivicDeletedContributionsFromCloud(),
      ...config.civicDeletedContributionIds,
    };
    config.civicDeletedContributionIds = merged.toList()..sort();
    await _persistCivicDeletedContributionsLocal(config);
    final edgeOk = await ngmyCivicAdminSettingsPersist(
      email: ngmyCurrentAuthEmail(),
      kind: 'civicDeletedContributionIds',
      ids: config.civicDeletedContributionIds,
    );
    if (edgeOk) return true;
    return ngmyDbRelaySettingsUpsert(
      _kNgmyCivicDeletedContributionsSettingsKey,
      _civicDeletedContributionsPayload(config),
    );
  } catch (e) {
    debugPrint('[civic deleted contributions] cloud save: $e');
    return false;
  }
}

/// Shared state-wallet outflows and trust transfers. These must hydrate on
/// every device or the Contribution Case available balance diverges.
Future<void> _persistCivicHelpCampaignSpendingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _kNgmyCivicHelpCampaignSpendingsPrefsKey,
      jsonEncode(
        config.helpCampaignSpendings
            .map((e) => Map<String, dynamic>.from(e))
            .toList(),
      ),
    );
  } catch (e) {
    debugPrint('[civic help spendings] local persist: $e');
  }
}

Future<void> _hydrateCivicHelpCampaignSpendingsLocal(AppConfig config) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCivicHelpCampaignSpendingsPrefsKey);
    if (raw == null || raw.trim().isEmpty) return;
    final decoded = jsonDecode(raw);
    if (decoded is! List) return;
    final local = decoded
        .whereType<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
    config.helpCampaignSpendings = _mergeHelpCampaignSpendingsLists(
      config.helpCampaignSpendings,
      local,
    );
  } catch (e) {
    debugPrint('[civic help spendings] local hydrate: $e');
  }
}

Future<void> ngmyHydrateCivicHelpCampaignSpendings(AppConfig config) async {
  await _hydrateCivicHelpCampaignSpendingsLocal(config);
  if (ngmyCurrentAuthEmail().isEmpty || !await ngmyCanReachCloud()) return;
  try {
    final payload = await ngmyDbRelaySettingsFetch(
      _kNgmyCivicHelpCampaignSpendingsSettingsKey,
    );
    if (payload == null) return;
    final raw = payload['items'] ?? payload['list'];
    if (raw is! List) return;
    final remote = raw
        .whereType<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
    config.helpCampaignSpendings = _mergeHelpCampaignSpendingsLists(
      config.helpCampaignSpendings,
      remote,
    );
    await _persistCivicHelpCampaignSpendingsLocal(config);
  } catch (e) {
    debugPrint('[civic help spendings] shared cloud hydrate: $e');
  }
}

/// Offline-safe backup of approved civic contributions — survives app restarts
/// even when cloud sync is slow or the row only lived in memory briefly.
Future<void> ngmyPersistCivicContributionsLocal(
  Iterable<AppTransaction> contributions, {
  Iterable<String> deletedIds = const [],
}) async {
  try {
    final deleted = deletedIds.map((e) => e.trim()).where((e) => e.isNotEmpty).toSet();
    final byId = <String, Map<String, dynamic>>{};
    for (final t in contributions) {
      if (t.type != TransactionType.contribution || t.status != TransactionStatus.approved) continue;
      final id = t.id.trim();
      if (id.isEmpty || deleted.contains(id)) continue;
      byId[id] = t.toJson();
    }
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNgmyCivicContributionsLocalPrefsKey, jsonEncode(byId.values.toList()));
  } catch (e) {
    debugPrint('[civic contributions local] persist: $e');
  }
}

Future<List<AppTransaction>> ngmyHydrateCivicContributionsLocal({
  Iterable<String> deletedIds = const [],
}) async {
  try {
    final deleted = deletedIds.map((e) => e.trim()).where((e) => e.isNotEmpty).toSet();
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kNgmyCivicContributionsLocalPrefsKey);
    if (raw == null || raw.trim().isEmpty) return const [];
    final decoded = jsonDecode(raw);
    if (decoded is! List) return const [];
    return decoded
        .map((e) => AppTransaction.fromJson(Map<String, dynamic>.from(e as Map)))
        .where((t) => t.type == TransactionType.contribution && t.status == TransactionStatus.approved)
        .where((t) => !deleted.contains(t.id.trim()))
        .toList();
  } catch (e) {
    debugPrint('[civic contributions local] hydrate: $e');
    return const [];
  }
}
