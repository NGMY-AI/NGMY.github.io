import 'dart:async';
import 'dart:convert';

/// Debounces small config column writes so toggles do not spam Supabase disk I/O.
class NgmySupabaseSyncThrottle {
  NgmySupabaseSyncThrottle._();

  static Timer? _criticalDebounce;
  static String? _lastCriticalSig;
  static String criticalConfigSig(dynamic config) => jsonEncode({
        'civicSelfEnrollmentEnabled': (config as dynamic).civicSelfEnrollmentEnabled,
        'familyTreeCreateFee': (config as dynamic).familyTreeCreateFee,
        'familyTreePhotoMonthlyFee': (config as dynamic).familyTreePhotoMonthlyFee,
        'familyTreePhotoAccessUntilByEmail': (config as dynamic).familyTreePhotoAccessUntilByEmail,
        'civicRegistryPin': (config as dynamic).civicRegistryPin,
        'civicRegistryPinsByState': (config as dynamic).civicRegistryPinsByState,
      });

  static void scheduleCriticalConfigPersist<T>(
    T config,
    Future<void> Function(T config) persist,
  ) {
    final sig = criticalConfigSig(config);
    if (sig == _lastCriticalSig) return;
    _criticalDebounce?.cancel();
    _criticalDebounce = Timer(const Duration(seconds: 6), () {
      final nextSig = criticalConfigSig(config);
      if (nextSig == _lastCriticalSig) return;
      _lastCriticalSig = nextSig;
      unawaited(persist(config));
    });
  }

  static void reset() {
    _criticalDebounce?.cancel();
    _lastCriticalSig = null;
  }
}
