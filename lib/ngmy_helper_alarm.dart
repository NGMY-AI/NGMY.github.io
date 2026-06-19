import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/data/latest.dart' as tz_data;
import 'package:timezone/timezone.dart' as tz;

import 'ngmy_helper_alarm_calendar.dart';
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

Future<void> _scheduleBackupNotification({
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
    final scheduled = tz.TZDateTime.from(when.toLocal(), tz.local);
    await _ngmyAlarmNotifications.zonedSchedule(
      id: id,
      title: title,
      body: notes?.trim().isNotEmpty == true ? notes!.trim() : 'Time to wake up — NGMY Helper',
      scheduledDate: scheduled,
      notificationDetails: details,
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
    );
  } catch (e) {
    debugPrint('[helper-alarm] backup notification failed: $e');
  }
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

  final calendarMsg = await ngmyInstallWakeAlarmOnDevice(
    title: entry.title,
    when: localWhen,
    notes: notes,
  );

  await _scheduleBackupNotification(title: entry.title, when: localWhen, notes: notes);

  if (kIsWeb) {
    return calendarMsg;
  }

  return '$calendarMsg A backup NGMY notification is also scheduled.';
}

String ngmyWakeAlarmIosClockNote() =>
    'On iPhone, Apple does not let any app add alarms inside the Clock app. NGMY adds a Calendar alert that rings at the set time — tap Allow when prompted.';
