import 'package:flutter/foundation.dart';

import 'ngmy_system_alarm_stub.dart' if (dart.library.io) 'ngmy_system_alarm_io.dart';

/// Installs wake alarm on device — Clock app on Android/iOS, never Calendar.
Future<String> ngmyInstallWakeAlarmOnDevice({
  required String title,
  required DateTime when,
  String? notes,
}) async {
  final localWhen = when.toLocal();
  final safeTitle = title.trim().isEmpty ? 'Wake up — NGMY' : title.trim();
  final whenLabel = _formatWhen(localWhen);
  final clockTime = _formatClockTime(localWhen);

  if (kIsWeb) {
    return 'NGMY alarm armed for $whenLabel. Keep this app open — it will ring loud at that time. '
        'For iPhone Clock backup: open Clock → Alarm → + → set $clockTime.';
  }

  final parts = <String>['NGMY alarm armed for $whenLabel.'];

  final clockOk = await ngmyTryOpenSystemClockAlarm(when: localWhen, label: safeTitle);
  if (clockOk) {
    parts.add('Clock app opened — tap Save to confirm the alarm.');
  } else {
    final iosOpened = await ngmyTryOpenIosClockApp();
    if (iosOpened) {
      parts.add('Clock app opened — tap + and set $clockTime, then Save.');
    } else {
      parts.add('Open Clock → Alarm → + and set $clockTime (Apple blocks auto-set from apps).');
    }
  }

  parts.add('You will also get a phone notification and in-app alarm from NGMY.');
  return parts.join(' ');
}

String _formatWhen(DateTime dt) {
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '${dt.month}/${dt.day} at $h:$min $ampm';
}

String _formatClockTime(DateTime dt) {
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '$h:$min $ampm';
}
