import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

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
    final client = Supabase.instance.client;
    var invalidApiKey = false;
    var ngmySettingsOk = false;
    var configOk = false;
    var detail = '';

    try {
      await client.from('config').select('id').limit(1);
      configOk = true;
    } catch (e) {
      detail = e.toString();
      if (ngmySupabaseErrorIsInvalidApiKey(e)) invalidApiKey = true;
    }

    if (!invalidApiKey) {
      try {
        await client.from('ngmy_settings').select('key').limit(1);
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
