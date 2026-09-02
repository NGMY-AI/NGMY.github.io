import 'package:flutter/foundation.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_supabase_config.dart';

class NgmySupabaseHealth {
  const NgmySupabaseHealth({
    required this.reachable,
    required this.invalidApiKey,
    required this.ngmySettingsOk,
    required this.configOk,
    this.detail = '',
  });

  final bool reachable;
  final bool invalidApiKey;
  final bool ngmySettingsOk;
  final bool configOk;
  final String detail;

  bool get adminPersistOk => reachable && !invalidApiKey && (ngmySettingsOk || configOk);
}

Future<NgmySupabaseHealth> ngmyProbeSupabaseHealth() async {
  try {
    var invalidApiKey = false;
    var ngmySettingsOk = false;
    var configOk = false;
    var detail = '';

    try {
      final rows = await ngmyDbRelaySelect('config', cols: 'id', timeout: const Duration(seconds: 8));
      if (rows.isEmpty) throw Exception('No config row returned');
      configOk = true;
    } catch (e) {
      detail = e.toString();
      if (ngmySupabaseErrorIsInvalidApiKey(e)) invalidApiKey = true;
    }

    if (!invalidApiKey) {
      try {
        // Relayed through bright-handler instead of a direct ngmy_settings
        // probe; throws on genuine failure, succeeds even if the row is missing.
        await ngmyDbRelayPing('ngmy_popups', timeout: const Duration(seconds: 8));
        ngmySettingsOk = true;
      } catch (e) {
        if (detail.isEmpty) detail = e.toString();
        if (ngmySupabaseErrorIsInvalidApiKey(e)) invalidApiKey = true;
      }
    }

    return NgmySupabaseHealth(
      reachable: configOk || ngmySettingsOk,
      invalidApiKey: invalidApiKey,
      ngmySettingsOk: ngmySettingsOk,
      configOk: configOk,
      detail: detail,
    );
  } catch (e) {
    debugPrint('[supabase] health probe: $e');
    return NgmySupabaseHealth(
      reachable: false,
      invalidApiKey: ngmySupabaseErrorIsInvalidApiKey(e),
      ngmySettingsOk: false,
      configOk: false,
      detail: e.toString(),
    );
  }
}
