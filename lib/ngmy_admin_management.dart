part of 'main.dart';

/// Full Supabase + local persist for Admin → Management Menus (loans, jobs, civic, payments, etc.).
Future<bool> ngmyAdminPersistManagementConfig(AppConfig config) async {
  _operationalConfigCloudDebounce?.cancel();
  await ngmyFlushCriticalConfigLocalAndCloud(config, cloud: false);
  await _persistOperationalConfigToCloud(config);
  await _persistCriticalConfigFields(config);
  if (config.termsAndConditions.trim().isNotEmpty || config.privacyPolicy.trim().isNotEmpty) {
    unawaited(
      _persistLegalContentToCloud(
        config.termsAndConditions,
        config.privacyPolicy,
      ),
    );
  }
  return await ngmyCanReachCloud();
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

/// Pull latest management config from Supabase before opening an admin panel.
Future<void> ngmyAdminRefreshManagementConfig(AppConfig config) async {
  if (!await ngmyCanReachCloud()) return;
  try {
    final snapshot = AppConfig.fromJson(config.toJson());
    var cfgMap = <String, dynamic>{};
    final poll = await _fetchNgmyConfigRow(columns: NgmySupabaseColumns.configPoll);
    if (poll != null) cfgMap.addAll(poll);
    if (cfgMap.isEmpty) {
      final core = await _fetchNgmyConfigRow(columns: NgmySupabaseColumns.configBootstrapCore);
      if (core != null) cfgMap.addAll(core);
      final heavy = await _fetchNgmyConfigRow(columns: NgmySupabaseColumns.configBootstrapHeavy);
      if (heavy != null) cfgMap.addAll(heavy);
    }
    if (cfgMap.isEmpty) return;
    _applyRemoteConfigMerge(config, cfgMap, snapshot);
    await _refreshPopupsFromCloudStatic(config);
  } catch (e) {
    debugPrint('[admin mgmt] refresh: $e');
  }
}

/// Popups refresh without needing [_NGMYAppState] (used during management hub refresh).
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
