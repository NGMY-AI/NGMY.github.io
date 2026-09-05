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
///
/// Every function here throws [NgmyDbRelayException] when the edge call
/// itself fails or the server reports an error — matching the old direct
/// Supabase client's throw-on-error behavior, so existing `try/catch` retry
/// logic (e.g. missing-column fallback) keeps working. A successful call
/// that simply found no matching row returns null/false/empty normally;
/// that is not an error.
library;

import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_network_resilience.dart';

class NgmyDbRelayException implements Exception {
  NgmyDbRelayException(this.message);
  final String message;
  @override
  String toString() => message;
}

const Map<String, String> kNgmyRelayTableCodes = {
  'ngmy_settings': 's',
  'config': 'c',
  'family_trees': 'f',
  'home_cards': 'h',
  'ngmy_stripe_access': 'x',
  'users': 'u',
  'transactions': 't',
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
  'platform_live_stats': 'k49',
  'civic_contribution_receipt_removed': 'k50',
  'civic_deleted_contribution_ids': 'k51',
  'civic_help_campaign_spendings': 'k52',
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
  'ngmy_doc_share_my_code_lookup_v1_': 'd20',
  'ngmy_doc_share_my_code_user_v1_': 'd21',
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

bool get _ngmyHasSession {
  try {
    return Supabase.instance.client.auth.currentSession != null;
  } catch (_) {
    return false;
  }
}

/// Throws [NgmyDbRelayException] if the edge call itself failed or the server
/// reported an error. A successful call that found no matching row still
/// returns normally (`data` key present but null) — that is not an error.
Map<String, dynamic> _checkOk(Map<String, dynamic>? data) {
  if (data == null) {
    throw NgmyDbRelayException('Could not reach server.');
  }
  if (data['ok'] != true) {
    throw NgmyDbRelayException((data['error'] ?? 'Relay error').toString());
  }
  return data;
}

/// Low-level reachability probe — a response proves the round trip worked
/// even if no row matched. Throws on genuine failure (network/auth/server).
Future<Map<String, dynamic>?> ngmyDbRelayPing(
  String settingsKey, {
  Duration timeout = kNgmyCloudLoadTimeout,
}) async {
  final resolved = _resolveSettingsKey(settingsKey);
  if (resolved == null) throw NgmyDbRelayException('Unknown settings key: $settingsKey');
  final data = _checkOk(
    await ngmyEdgeInvoke(
      {
        'action': 'dbRelay',
        'op': 's',
        't': kNgmyRelayTableCodes['ngmy_settings'],
        'sk': resolved.code,
        if (resolved.suffix != null) 'sfx': resolved.suffix,
        'cols': 'key',
        'single': true,
      },
      anonymous: !_ngmyHasSession,
      timeout: timeout,
    ),
  );
  return data;
}

/// Fetches one `ngmy_settings` row's `value` by key through the relay.
/// Returns null if the row doesn't exist. Throws on a genuine failure.
Future<Map<String, dynamic>?> ngmyDbRelaySettingsFetch(
  String key, {
  Duration timeout = kNgmyCloudLoadTimeout,
  bool? anonymous,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) throw NgmyDbRelayException('Unknown settings key: $key');
  final data = _checkOk(
    await ngmyEdgeInvoke(
      {
        'action': 'dbRelay',
        'op': 's',
        't': kNgmyRelayTableCodes['ngmy_settings'],
        'sk': resolved.code,
        if (resolved.suffix != null) 'sfx': resolved.suffix,
        'cols': 'value',
        'single': true,
      },
      anonymous: anonymous ?? !_ngmyHasSession,
      timeout: timeout,
    ),
  );
  final row = data['data'];
  if (row is! Map) return null;
  final value = row['value'];
  if (value is! Map) return null;
  return Map<String, dynamic>.from(value);
}

/// Upserts a `ngmy_settings` row through the relay. Throws on failure.
Future<bool> ngmyDbRelaySettingsUpsert(
  String key,
  Map<String, dynamic> value, {
  String? updatedAt,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) throw NgmyDbRelayException('Unknown settings key: $key');
  final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();
  _checkOk(
    await ngmyEdgeInvoke(
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
    ),
  );
  return true;
}

/// Fetches a `ngmy_settings` row's raw `value` by key — use when the stored
/// value is a JSON array rather than an object (`ngmyDbRelaySettingsFetch`
/// only accepts object-shaped values). Throws on a genuine failure.
Future<dynamic> ngmyDbRelaySettingsFetchRaw(
  String key, {
  Duration timeout = kNgmyCloudLoadTimeout,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) throw NgmyDbRelayException('Unknown settings key: $key');
  final data = _checkOk(
    await ngmyEdgeInvoke(
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
    ),
  );
  final row = data['data'];
  if (row is! Map) return null;
  return row['value'];
}

/// Upserts a `ngmy_settings` row with an arbitrary JSON-encodable [value]
/// (array or object) through the relay. Throws on failure.
Future<bool> ngmyDbRelaySettingsUpsertRaw(
  String key,
  dynamic value, {
  String? updatedAt,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) throw NgmyDbRelayException('Unknown settings key: $key');
  final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();
  _checkOk(
    await ngmyEdgeInvoke(
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
    ),
  );
  return true;
}

/// Deletes a `ngmy_settings` row by key through the relay. Throws on failure.
Future<bool> ngmyDbRelaySettingsDelete(
  String key, {
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final resolved = _resolveSettingsKey(key);
  if (resolved == null) throw NgmyDbRelayException('Unknown settings key: $key');
  _checkOk(
    await ngmyEdgeInvoke(
      {
        'action': 'dbRelay',
        'op': 'd',
        't': kNgmyRelayTableCodes['ngmy_settings'],
        'sk': resolved.code,
        if (resolved.suffix != null) 'sfx': resolved.suffix,
      },
      anonymous: !_ngmyHasSession,
      timeout: timeout,
    ),
  );
  return true;
}

/// Generic relayed select for a non-`ngmy_settings` table (`config`,
/// `family_trees`, `home_cards`, `ngmy_stripe_access`). [eq] are simple
/// equality filters; [contains] filters by jsonb/array containment. Throws
/// on a genuine failure (bad column, permission denied, network); an empty
/// result set is returned normally as `[]`.
Future<List<Map<String, dynamic>>> ngmyDbRelaySelect(
  String table, {
  String cols = '*',
  Map<String, dynamic>? eq,
  Map<String, dynamic>? contains,
  Map<String, List<dynamic>>? inFilter,
  Map<String, String>? ilike,
  String? orderBy,
  bool orderAscending = true,
  int? limit,
  (int, int)? range,
  bool single = false,
  Duration timeout = kNgmyCloudLoadTimeout,
}) async {
  final tableCode = kNgmyRelayTableCodes[table];
  if (tableCode == null) throw NgmyDbRelayException('Unknown relay table: $table');
  final data = _checkOk(
    await ngmyEdgeInvoke(
      {
        'action': 'dbRelay',
        'op': 's',
        't': tableCode,
        'cols': cols,
        if (eq != null && eq.isNotEmpty) 'eq': eq,
        if (contains != null && contains.isNotEmpty) 'contains': contains,
        if (inFilter != null && inFilter.isNotEmpty) 'in': inFilter,
        if (ilike != null && ilike.isNotEmpty) 'ilike': ilike,
        if (orderBy != null) 'order': {'col': orderBy, 'ascending': orderAscending},
        if (limit != null) 'limit': limit,
        if (range != null) 'range': [range.$1, range.$2],
        'single': single,
      },
      anonymous: !_ngmyHasSession,
      timeout: timeout,
    ),
  );
  final result = data['data'];
  if (result == null) return const [];
  if (result is Map) return [Map<String, dynamic>.from(result)];
  if (result is List) {
    return result.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
  }
  return const [];
}

/// Generic relayed upsert for a non-`ngmy_settings` table. Throws on failure.
Future<bool> ngmyDbRelayUpsert(
  String table,
  List<Map<String, dynamic>> rows, {
  String? onConflict,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final tableCode = kNgmyRelayTableCodes[table];
  if (tableCode == null) throw NgmyDbRelayException('Unknown relay table: $table');
  if (rows.isEmpty) return false;
  _checkOk(
    await ngmyEdgeInvoke(
      {
        'action': 'dbRelay',
        'op': 'up',
        't': tableCode,
        'rows': rows,
        if (onConflict != null) 'onConflict': onConflict,
      },
      anonymous: !_ngmyHasSession,
      timeout: timeout,
    ),
  );
  return true;
}

/// Generic relayed delete for a non-`ngmy_settings` table. Either [eq] or
/// [inFilter] must be non-empty — the server refuses an unscoped delete.
/// Throws on failure.
Future<bool> ngmyDbRelayDelete(
  String table, {
  Map<String, dynamic>? eq,
  Map<String, List<dynamic>>? inFilter,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final tableCode = kNgmyRelayTableCodes[table];
  if (tableCode == null) throw NgmyDbRelayException('Unknown relay table: $table');
  final hasEq = eq != null && eq.isNotEmpty;
  final hasIn = inFilter != null && inFilter.isNotEmpty;
  if (!hasEq && !hasIn) return false;
  _checkOk(
    await ngmyEdgeInvoke(
      {
        'action': 'dbRelay',
        'op': 'd',
        't': tableCode,
        if (hasEq) 'eq': eq,
        if (hasIn) 'in': inFilter,
      },
      anonymous: !_ngmyHasSession,
      timeout: timeout,
    ),
  );
  return true;
}

/// Generic relayed partial column update for a non-`ngmy_settings` table
/// (unlike [ngmyDbRelayUpsert], this does not require a full row / onConflict
/// key — it patches only the given columns on rows matching [eq]). [eq] must
/// be non-empty — the server refuses an unscoped update. Throws on failure.
Future<bool> ngmyDbRelayUpdate(
  String table,
  Map<String, dynamic> patch, {
  required Map<String, dynamic> eq,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  final tableCode = kNgmyRelayTableCodes[table];
  if (tableCode == null) throw NgmyDbRelayException('Unknown relay table: $table');
  if (eq.isEmpty || patch.isEmpty) return false;
  _checkOk(
    await ngmyEdgeInvoke(
      {
        'action': 'dbRelay',
        'op': 'u',
        't': tableCode,
        'eq': eq,
        'patch': patch,
      },
      anonymous: !_ngmyHasSession,
      timeout: timeout,
    ),
  );
  return true;
}
