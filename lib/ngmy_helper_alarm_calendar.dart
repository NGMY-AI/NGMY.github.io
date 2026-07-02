import 'package:flutter/foundation.dart';

import 'ngmy_calendar_download_stub.dart' if (dart.library.html) 'ngmy_calendar_download_web.dart';
import 'ngmy_calendar_ics.dart';
import 'ngmy_system_alarm_stub.dart' if (dart.library.io) 'ngmy_system_alarm_io.dart';

/// Installs wake alarm on the user's phone — Clock app on native, notifications/phone alert on web.
Future<String> ngmyInstallWakeAlarmOnDevice({
  required String title,
  required DateTime when,
  String? notes,
  bool allowPhoneAlertFallback = false,
}) async {
  final localWhen = when.toLocal();
  final safeTitle = title.trim().isEmpty ? 'Wake up — NGMY' : title.trim();
  final whenLabel = _formatWhen(localWhen);
  final clockTime = _formatClockTime(localWhen);

  if (kIsWeb) {
    if (allowPhoneAlertFallback) {
      final ics = ngmyBuildIcsBytes(
        title: safeTitle,
        start: localWhen,
        end: localWhen.add(const Duration(minutes: 1)),
        notes: notes,
        alarmAtStart: true,
      );
      final inviteMsg = await ngmyDownloadIcsFile(ics, 'ngmy-wake-alarm.ics', eventTitle: safeTitle);
      return 'Phone alert set for $whenLabel. Tap Allow on the iPhone prompt — your phone will ring at that time even with NGMY closed. '
          '$inviteMsg Also add $clockTime in Clock → Alarm as a backup.';
    }
    return 'Could not enable phone notifications. Open Settings → Safari → ngmy.org → Allow Notifications, then ask NGMY to set the alarm again.';
  }

  final parts = <String>['NGMY alarm armed for $whenLabel.'];

  final clockOk = await ngmyTryOpenSystemClockAlarm(when: localWhen, label: safeTitle);
  if (clockOk) {
    parts.add('Clock app opened — tap Save to confirm the alarm on your phone.');
  } else {
    final iosOpened = await ngmyTryOpenIosClockApp();
    if (iosOpened) {
      parts.add('Clock app opened — tap + and set $clockTime, then Save.');
    } else {
      parts.add('Open Clock → Alarm → + and set $clockTime (Apple requires you to confirm in Clock).');
    }
  }

  parts.add('Your phone will also ring via NGMY notification at that time.');
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
