import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/data/latest.dart' as tz_data;
import 'package:timezone/timezone.dart' as tz;

import 'ngmy_helper_alarm_calendar.dart';
import 'ngmy_helper_alarm_memory.dart';
import 'ngmy_helper_alarm_web_stub.dart' if (dart.library.html) 'ngmy_helper_alarm_web.dart' as web_alarm;

final FlutterLocalNotificationsPlugin _ngmyAlarmNotifications = FlutterLocalNotificationsPlugin();
bool _ngmyAlarmNotificationsReady = false;
bool _ngmyAlarmTzReady = false;
int _ngmyAlarmIdSeq = 90000;

Future<void> _ensureAlarmNotificationsReady() async {
  if (kIsWeb) return;
  if (!_ngmyAlarmTzReady) {
    tz_data.initializeTimeZones();
    _ngmyAlarmTzReady = true;
  }
  if (_ngmyAlarmNotificationsReady) return;
  const android = AndroidInitializationSettings('@mipmap/ic_launcher');
  const darwin = DarwinInitializationSettings(
    requestAlertPermission: true,
    requestBadgePermission: true,
    requestSoundPermission: true,
  );
  await _ngmyAlarmNotifications.initialize(
    settings: const InitializationSettings(android: android, iOS: darwin, macOS: darwin),
  );
  await _ngmyAlarmNotifications
      .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
      ?.requestNotificationsPermission();
  await _ngmyAlarmNotifications
      .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
      ?.requestExactAlarmsPermission();
  await _ngmyAlarmNotifications
      .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
      ?.requestPermissions(alert: true, badge: true, sound: true);
  _ngmyAlarmNotificationsReady = true;
}

tz.TZDateTime _alarmScheduleInstant(DateTime when) {
  return tz.TZDateTime.from(when.toLocal(), tz.local);
}

Future<void> _schedulePhoneNotification({
  required String title,
  required DateTime when,
  String? notes,
}) async {
  if (kIsWeb) return;
  try {
    await _ensureAlarmNotificationsReady();
    final id = _ngmyAlarmIdSeq++;
    final android = AndroidNotificationDetails(
      'ngmy_wake_alarms',
      'NGMY Wake Alarms',
      channelDescription: 'Wake-up alarms set by NGMY Helper',
      importance: Importance.max,
      priority: Priority.high,
      playSound: true,
      category: AndroidNotificationCategory.alarm,
    );
    const darwin = DarwinNotificationDetails(
      presentAlert: true,
      presentBadge: true,
      presentSound: true,
      interruptionLevel: InterruptionLevel.timeSensitive,
    );
    final details = NotificationDetails(android: android, iOS: darwin, macOS: darwin);
    final scheduled = _alarmScheduleInstant(when);
    await _ngmyAlarmNotifications.zonedSchedule(
      id: id,
      title: title,
      body: notes?.trim().isNotEmpty == true ? notes!.trim() : 'Time to wake up — NGMY',
      scheduledDate: scheduled,
      notificationDetails: details,
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
    );
  } catch (e) {
    debugPrint('[helper-alarm] phone notification failed: $e');
  }
}

Future<String> ngmyScheduleHelperWakeAlarm({
  required String userEmail,
  required String title,
  required DateTime when,
  String? notes,
}) async {
  final localWhen = when.toLocal();
  if (localWhen.isBefore(DateTime.now().add(const Duration(seconds: 20)))) {
    return 'That time already passed — pick a future time for your alarm.';
  }

  final entry = NgmyHelperAlarmEntry(
    id: 'alarm_${DateTime.now().microsecondsSinceEpoch}',
    title: title.trim().isEmpty ? 'Wake up' : title.trim(),
    when: localWhen,
    notes: notes,
  );
  await NgmyHelperAlarmMemoryStore.add(userEmail, entry);

  if (kIsWeb) {
    final webWhen = await web_alarm.ngmyScheduleWebPhoneAlarm(
      id: entry.id,
      title: entry.title,
      when: localWhen,
      notes: notes,
    );
    if (webWhen != null) {
      return 'Phone alarm set for $webWhen. Your iPhone will ring on the lock screen — you can close NGMY. '
          'Tip: also add ${_formatClockTime(localWhen)} in Clock → Alarm for a backup buzz.';
    }
    final fallback = await ngmyInstallWakeAlarmOnDevice(
      title: entry.title,
      when: localWhen,
      notes: notes,
      allowPhoneAlertFallback: true,
    );
    return fallback;
  }

  final deviceMsg = await ngmyInstallWakeAlarmOnDevice(
    title: entry.title,
    when: localWhen,
    notes: notes,
  );
  await _schedulePhoneNotification(title: entry.title, when: localWhen, notes: notes);

  return '$deviceMsg Your phone will ring at ${_formatWhen(localWhen)} even if NGMY is closed.';
}

String _formatClockTime(DateTime dt) {
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '$h:$min $ampm';
}

String _formatWhen(DateTime dt) {
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '${dt.month}/${dt.day} at $h:$min $ampm';
}
