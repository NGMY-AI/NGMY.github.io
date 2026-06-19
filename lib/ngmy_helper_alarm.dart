import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/data/latest.dart' as tz_data;
import 'package:timezone/timezone.dart' as tz;

import 'ngmy_helper_alarm_memory.dart';

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
      .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
      ?.requestPermissions(alert: true, badge: true, sound: true);
  _ngmyAlarmNotificationsReady = true;
}

Future<String> ngmyScheduleHelperWakeAlarm({
  required String userEmail,
  required String title,
  required DateTime when,
  String? notes,
}) async {
  final localWhen = when.toLocal();
  if (localWhen.isBefore(DateTime.now().add(const Duration(minutes: 1)))) {
    return 'That time already passed — pick a future time for your wake alarm.';
  }

  final entry = NgmyHelperAlarmEntry(
    id: 'alarm_${DateTime.now().microsecondsSinceEpoch}',
    title: title.trim().isEmpty ? 'Wake up' : title.trim(),
    when: localWhen,
    notes: notes,
  );
  await NgmyHelperAlarmMemoryStore.add(userEmail, entry);

  if (kIsWeb) {
    return 'Saved wake alarm for ${_formatWhen(localWhen)}. On iPhone, also add it to Calendar so your phone can ring even if the browser is closed.';
  }

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
    final scheduled = tz.TZDateTime.from(localWhen, tz.local);
    await _ngmyAlarmNotifications.zonedSchedule(
      id: id,
      title: entry.title,
      body: notes?.trim().isNotEmpty == true ? notes!.trim() : 'Time to wake up — NGMY Helper',
      scheduledDate: scheduled,
      notificationDetails: details,
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
    );
    return 'Wake alarm set for ${_formatWhen(localWhen)}. Keep notifications on for NGMY.';
  } catch (e) {
    debugPrint('[helper-alarm] schedule failed: $e');
    return 'Saved alarm for ${_formatWhen(localWhen)}, but could not schedule the phone notification. Allow notifications for NGMY in Settings.';
  }
}

String _formatWhen(DateTime dt) {
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '${dt.month}/${dt.day} at $h:$min $ampm';
}
