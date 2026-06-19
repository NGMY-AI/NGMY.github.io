import 'package:flutter/foundation.dart';

import 'ngmy_calendar_download_stub.dart' if (dart.library.html) 'ngmy_calendar_download_web.dart';
import 'ngmy_calendar_ics.dart';
import 'ngmy_calendar_native_stub.dart' if (dart.library.io) 'ngmy_calendar_native_io.dart';
import 'ngmy_system_alarm_stub.dart' if (dart.library.io) 'ngmy_system_alarm_io.dart';

/// Adds a wake alarm to the phone Calendar (with alert) and tries the system Clock on Android.
Future<String> ngmyInstallWakeAlarmOnDevice({
  required String title,
  required DateTime when,
  String? notes,
}) async {
  final localWhen = when.toLocal();
  final end = localWhen.add(const Duration(minutes: 15));
  final body = notes?.trim().isNotEmpty == true ? notes!.trim() : 'Wake alarm set by NGMY Helper';
  final safeTitle = title.trim().isEmpty ? 'Wake up — NGMY' : title.trim();

  if (kIsWeb) {
    final bytes = ngmyBuildIcsBytes(
      title: safeTitle,
      start: localWhen,
      end: end,
      notes: body,
      alarmAtStart: true,
    );
    final msg = await ngmyDownloadIcsFile(
      bytes,
      '${safeTitle.replaceAll(RegExp(r'[^\w]+'), '_')}.ics',
      eventTitle: safeTitle,
    );
    return '$msg Your phone will ring at ${_formatWhen(localWhen)} after you tap Allow / Add.';
  }

  var parts = <String>[];

  final calOk = await ngmyAddNativeCalendarEvent(
    title: safeTitle,
    start: localWhen,
    end: end,
    notes: body,
    reminderMinutesBefore: 0,
  );
  if (calOk) {
    parts.add('Added to Calendar with alert at ${_formatWhen(localWhen)}.');
  } else {
    parts.add('Open Calendar and confirm the wake event at ${_formatWhen(localWhen)}.');
  }

  final clockOk = await ngmyTryOpenSystemClockAlarm(when: localWhen, label: safeTitle);
  if (clockOk) {
    parts.add('Clock app opened — tap Save to add the alarm there too.');
  }

  return parts.join(' ');
}

String _formatWhen(DateTime dt) {
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '${dt.month}/${dt.day} at $h:$min $ampm';
}
