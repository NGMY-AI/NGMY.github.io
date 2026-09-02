/// Generic DB relay client — sends table/settings-key reads and writes through
/// `bright-handler`'s `dbRelay` action instead of calling Supabase tables
/// directly, so DevTools' Network tab shows `/api/sync` instead of
/// `ngmy_settings?key=eq.<feature name>` or `family_trees?...`.
///
/// This is a transport-only disguise: the relay forwards the caller's own
/// session (or the anon key if logged out) to Postgres, so Row Level Security
/// governs the result exactly as it would for a direct call. Keep this file's
/// two codebooks (`kNgmySettingsKeyCodes`, `kNgmySettingsPrefixCodes`) and
/// `kNgmyRelayTableCodes` in sync with the server-side copies in
/// `supabase/functions/ngmy-ai-chat/index.ts` (`RELAY_TABLE_CODES`,
/// `RELAY_SETTINGS_KEY_CODES`, `RELAY_SETTINGS_PREFIX_CODES`).
library;

import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_network_resilience.dart';

const Map<String, String> kNgmyRelayTableCodes = {
  'ngmy_settings': 's',
  'config': 'c',
  'family_trees': 'f',
  'home_cards': 'h',
  'ngmy_stripe_access': 'x',
};

const Map<String, String> kNgmySettingsKeyCodes = {
  'ngmy_loan_status_map_v1': 'k1',
  'ngmy_loan_payments_map_v1': 'k2',
  'wallet_txn_decisions': 'k3',
  'app_studio_access_settings': 'k4',
  'ngmy_app_studio_cloud_slot': 'k5',
  'ngmy_app_studio_published_registry': 'k6',
  'ngmy_bio_publish_registry': 'k7',
  'ngmy_menu_publish_registry': 'k8',
  'ngmy_invoice_publish_registry': 'k9',
  'civic_user_groups_v1': 'k10',
  'civic_state_registrar_subscriptions': 'k11',
  'civic_voting_settings': 'k12',
  'civic_hati_kiapo_uongozi': 'k13',
  'home_vote_ad_campaign': 'k14',
  'ngmy_helper_kb': 'k15',
  'ngmy_communicate_backup_codes_v1': 'k16',
  'ngmy_family_tree_backup_codes_v1': 'k17',
  'ngmy_family_tree_qr_stashes_v1': 'k18',
  'ngmy_slides_transfer_qr_stashes_v1': 'k19',
  'ngmy_worksheet_project_qr_stashes_v1': 'k20',
  'ngmy_doc_share_school_accounts_v1': 'k21',
  'ngmy_doc_share_video_relay_v1': 'k22',
  'ngmy_doc_share_webrtc_signal_v1': 'k23',
  'ngmy_user_saved_sync_qrs_v1': 'k24',
  'terms_and_conditions': 'k25',
  'privacy_policy': 'k26',
  'investment_plans': 'k27',
  'ngmy_popups': 'k28',
  'ngmy_chat_closed': 'k29',
  'management_operational_lists': 'k30',
  'store_sell_access_emails': 'k31',
  'deleted_media_ids': 'k32',
  'family_tree_payment_settings': 'k33',
  'invoice_payment_settings': 'k34',
  'music_studio_payment_settings': 'k35',
  'app_studio_payment_settings': 'k36',
  'communicate_settings': 'k37',
  'communicate_payment_settings': 'k38',
  'wallet_payment_settings': 'k39',
  'repair_estimate_payment_settings': 'k40',
  'translate_message_payment_settings': 'k41',
  'document_scan_payment_settings': 'k42',
  'doc_share_payment_settings': 'k43',
  'civic_self_enrollment_settings': 'k44',
  'ngmy_helper_ai_settings': 'k45',
  'ngmy_app_branding': 'k46',
  'civic_help_mode_settings': 'k47',
  'help_center_hub_settings': 'k48',
};

/// Dynamic key prefixes — the suffix (share code/token/base64 email) is sent
/// as its own field, only the feature-identifying prefix is coded.
const Map<String, String> kNgmySettingsPrefixCodes = {
  'ngmy_bio_pub_': 'd1',
  'ngmy_menu_pub_': 'd2',
  'ngmy_doc_share_stash_v2_': 'd3',
  'ngmy_doc_share_code_v2_': 'd4',
  'ngmy_essentials_code_v1_': 'd5',
  'ngmy_bio_lib_v1_': 'd6',
  'ngmy_menu_lib_v1_': 'd7',
  'ngmy_studio_entitlement_v1_': 'd8',
  'ngmy_doc_share_inbox_v1_': 'd9',
  'ngmy_game_receipts_': 'd10',
  'ngmy_local_growth_income_stash_v1_': 'd11',
  'ngmy_local_growth_income_code_v1_': 'd12',
  'ngmy_local_deposit_qr_v1_': 'd13',
  'ngmy_local_deposit_code_v1_': 'd14',
  'ngmy_local_deposit_inbox_v1_': 'd15',
  'ngmy_refcode_': 'd16',
  'ngmy_transfer_relay_v1_': 'd17',
  'ngmy_transfer_v1_': 'd18',
  'ngmy_transfer_signal_v1_': 'd19',
};

({String code, String? suffix})? _resolveSettingsKey(String key) {
  final direct = kNgmySettingsKeyCodes[key];
  if (direct != null) return (code: direct, suffix: null);
  for (final entry in kNgmySettingsPrefixCodes.entries) {
    if (key.startsWith(entry.key)) {
      return (code: entry.value, suffix: key.substring(entry.key.length));
    }
  }
  return null;
}

bool get _ngmyHasSession => Supabase.instance.client.auth.currentSession != null;

/// Fetches one `ngmy_settings` row's `value` by key through the relay.
/// Returns null if the row doesn't exist, the key isn't in the codebook, or
/// the caller isn't authorized (mirrors the old direct-call behavior).
Future<Map<String, dynamic>?> ngmyDbRelaySettingsFetch(
  String key, {
  Duration timeout = kNgmyCloudLoadTimeout,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) return null;
  final data = await ngmyEdgeInvoke(
    {
      'action': 'dbRelay',
      'op': 's',
      't': kNgmyRelayTableCodes['ngmy_settings'],
      'sk': resolved.code,
      if (resolved.suffix != null) 'sfx': resolved.suffix,
      'cols': 'value',
      'single': true,
    },
    anonymous: !_ngmyHasSession,
    timeout: timeout,
  );
  if (data == null || data['ok'] != true) return null;
  final row = data['data'];
  if (row is! Map) return null;
  final value = row['value'];
  if (value is! Map) return null;
  return Map<String, dynamic>.from(value);
}

/// Upserts a `ngmy_settings` row through the relay. Returns false if the key
/// isn't in the codebook or the write is rejected (matches old return shape).
Future<bool> ngmyDbRelaySettingsUpsert(
  String key,
  Map<String, dynamic> value, {
  String? updatedAt,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) return false;
  final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();
  final data = await ngmyEdgeInvoke(
    {
      'action': 'dbRelay',
      'op': 'up',
      't': kNgmyRelayTableCodes['ngmy_settings'],
      'sk': resolved.code,
      if (resolved.suffix != null) 'sfx': resolved.suffix,
      'onConflict': 'key',
      'rows': [
        {'value': value, 'updated_at': at},
      ],
    },
    anonymous: !_ngmyHasSession,
    timeout: timeout,
  );
  return data != null && data['ok'] == true;
}

/// Deletes a `ngmy_settings` row by key through the relay.
Future<bool> ngmyDbRelaySettingsDelete(
  String key, {
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) return false;
  final data = await ngmyEdgeInvoke(
    {
      'action': 'dbRelay',
      'op': 'd',
      't': kNgmyRelayTableCodes['ngmy_settings'],
      'sk': resolved.code,
      if (resolved.suffix != null) 'sfx': resolved.suffix,
    },
    anonymous: !_ngmyHasSession,
    timeout: timeout,
  );
  return data != null && data['ok'] == true;
}

/// Generic relayed select for a non-`ngmy_settings` table (`config`,
/// `family_trees`, `home_cards`, `ngmy_stripe_access`). [eq] are simple
/// equality filters; [contains] filters by jsonb/array containment.
Future<List<Map<String, dynamic>>> ngmyDbRelaySelect(
  String table, {
  String cols = '*',
  Map<String, dynamic>? eq,
  Map<String, dynamic>? contains,
  bool single = false,
  Duration timeout = kNgmyCloudLoadTimeout,
}) async {
  final tableCode = kNgmyRelayTableCodes[table];
  if (tableCode == null) return const [];
  final data = await ngmyEdgeInvoke(
    {
      'action': 'dbRelay',
      'op': 's',
      't': tableCode,
      'cols': cols,
      if (eq != null && eq.isNotEmpty) 'eq': eq,
      if (contains != null && contains.isNotEmpty) 'contains': contains,
      'single': single,
    },
    anonymous: !_ngmyHasSession,
    timeout: timeout,
  );
  if (data == null || data['ok'] != true) return const [];
  final result = data['data'];
  if (result == null) return const [];
  if (result is Map) return [Map<String, dynamic>.from(result)];
  if (result is List) {
    return result.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
  }
  return const [];
}

/// Generic relayed upsert for a non-`ngmy_settings` table.
Future<bool> ngmyDbRelayUpsert(
  String table,
  List<Map<String, dynamic>> rows, {
  String? onConflict,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final tableCode = kNgmyRelayTableCodes[table];
  if (tableCode == null || rows.isEmpty) return false;
  final data = await ngmyEdgeInvoke(
    {
      'action': 'dbRelay',
      'op': 'up',
      't': tableCode,
      'rows': rows,
      if (onConflict != null) 'onConflict': onConflict,
    },
    anonymous: !_ngmyHasSession,
    timeout: timeout,
  );
  return data != null && data['ok'] == true;
}

/// Generic relayed delete for a non-`ngmy_settings` table. [eq] must be
/// non-empty — the server refuses an unscoped delete.
Future<bool> ngmyDbRelayDelete(
  String table, {
  required Map<String, dynamic> eq,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final tableCode = kNgmyRelayTableCodes[table];
  if (tableCode == null || eq.isEmpty) return false;
  final data = await ngmyEdgeInvoke(
    {
      'action': 'dbRelay',
      'op': 'd',
      't': tableCode,
      'eq': eq,
    },
    anonymous: !_ngmyHasSession,
    timeout: timeout,
  );
  return data != null && data['ok'] == true;
}
