import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:timezone/data/latest.dart' as tz_data;
import 'package:timezone/timezone.dart' as tz;

const String _kRemindersKey = 'ngmy_item_reminders_v1';
int _notifyIdSeq = 88000;

final FlutterLocalNotificationsPlugin _itemReminderNotify = FlutterLocalNotificationsPlugin();
bool _notifyReady = false;

String _storageKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  if (e.isEmpty) return _kRemindersKey;
  return '${_kRemindersKey}_${e.hashCode.abs()}';
}

class NgmyItemReminder {
  NgmyItemReminder({
    String? id,
    required this.itemName,
    required this.locationNote,
    required this.remindAt,
    DateTime? createdAt,
    this.notificationId,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        createdAt = createdAt ?? DateTime.now();

  final String id;
  final String itemName;
  final String locationNote;
  final DateTime remindAt;
  final DateTime createdAt;
  final int? notificationId;

  bool get isDue => DateTime.now().isAfter(remindAt);

  Map<String, dynamic> toJson() => {
        'id': id,
        'itemName': itemName,
        'locationNote': locationNote,
        'remindAt': remindAt.toIso8601String(),
        'createdAt': createdAt.toIso8601String(),
        if (notificationId != null) 'notificationId': notificationId,
      };

  factory NgmyItemReminder.fromJson(Map<String, dynamic> json) => NgmyItemReminder(
        id: (json['id'] ?? '').toString(),
        itemName: (json['itemName'] ?? '').toString(),
        locationNote: (json['locationNote'] ?? '').toString(),
        remindAt: DateTime.tryParse((json['remindAt'] ?? '').toString()) ?? DateTime.now(),
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
        notificationId: json['notificationId'] is int ? json['notificationId'] as int : int.tryParse('${json['notificationId']}'),
      );
}

Future<List<NgmyItemReminder>> loadNgmyItemReminders({String userEmail = ''}) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_storageKey(userEmail));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => NgmyItemReminder.fromJson(Map<String, dynamic>.from(e)))
        .where((e) => e.id.isNotEmpty)
        .toList()
      ..sort((a, b) => a.remindAt.compareTo(b.remindAt));
  } catch (_) {
    return [];
  }
}

Future<void> saveNgmyItemReminders(List<NgmyItemReminder> items, {String userEmail = ''}) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_storageKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<void> _ensureNotifyReady() async {
  if (kIsWeb || _notifyReady) return;
  tz_data.initializeTimeZones();
  const android = AndroidInitializationSettings('@mipmap/ic_launcher');
  const darwin = DarwinInitializationSettings(
    requestAlertPermission: true,
    requestBadgePermission: true,
    requestSoundPermission: true,
  );
  await _itemReminderNotify.initialize(
    settings: const InitializationSettings(android: android, iOS: darwin, macOS: darwin),
  );
  await _itemReminderNotify
      .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
      ?.requestNotificationsPermission();
  await _itemReminderNotify
      .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
      ?.requestPermissions(alert: true, badge: true, sound: true);
  _notifyReady = true;
}

Future<int?> _scheduleItemReminderNotification(NgmyItemReminder reminder) async {
  if (kIsWeb) return null;
  if (reminder.remindAt.isBefore(DateTime.now().add(const Duration(seconds: 30)))) return null;
  try {
    await _ensureNotifyReady();
    final id = _notifyIdSeq++;
    final android = AndroidNotificationDetails(
      'ngmy_item_reminders',
      'Where I Put It',
      channelDescription: 'Reminders for where you left personal items',
      importance: Importance.high,
      priority: Priority.high,
      playSound: true,
    );
    const darwin = DarwinNotificationDetails(
      presentAlert: true,
      presentBadge: true,
      presentSound: true,
    );
    final details = NotificationDetails(android: android, iOS: darwin, macOS: darwin);
    await _itemReminderNotify.zonedSchedule(
      id: id,
      title: 'Where is your ${reminder.itemName}?',
      body: reminder.locationNote.trim().isEmpty ? 'Check the app for your saved location.' : reminder.locationNote.trim(),
      scheduledDate: tz.TZDateTime.from(reminder.remindAt.toLocal(), tz.local),
      notificationDetails: details,
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
    );
    return id;
  } catch (e) {
    debugPrint('[item-reminder] schedule failed: $e');
    return null;
  }
}

Future<String> addNgmyItemReminder({
  required String userEmail,
  required String itemName,
  required String locationNote,
  required Duration remindAfter,
}) async {
  final name = itemName.trim();
  final note = locationNote.trim();
  if (name.isEmpty) return 'Enter what you put away (e.g. car keys).';
  if (note.isEmpty) return 'Write where you put it.';
  if (remindAfter.inMinutes < 1) return 'Pick when you want to be reminded.';

  final remindAt = DateTime.now().add(remindAfter);
  var reminder = NgmyItemReminder(itemName: name, locationNote: note, remindAt: remindAt);
  final nid = await _scheduleItemReminderNotification(reminder);
  if (nid != null) {
    reminder = NgmyItemReminder(
      id: reminder.id,
      itemName: reminder.itemName,
      locationNote: reminder.locationNote,
      remindAt: reminder.remindAt,
      createdAt: reminder.createdAt,
      notificationId: nid,
    );
  }

  final list = await loadNgmyItemReminders(userEmail: userEmail);
  list.add(reminder);
  await saveNgmyItemReminders(list, userEmail: userEmail);

  if (kIsWeb) {
    return 'Saved! On phone/tablet app install, push reminders work. This device will show due reminders when you open the frame.';
  }
  return 'Reminder set for ${_formatWhen(remindAt)}.';
}

Future<void> deleteNgmyItemReminder(String id, {String userEmail = ''}) async {
  final list = await loadNgmyItemReminders(userEmail: userEmail);
  final hit = list.where((e) => e.id == id).toList();
  for (final r in hit) {
    if (!kIsWeb && r.notificationId != null) {
      await _itemReminderNotify.cancel(id: r.notificationId!);
    }
  }
  list.removeWhere((e) => e.id == id);
  await saveNgmyItemReminders(list, userEmail: userEmail);
}

Future<int> ngmyItemReminderDueCount({String userEmail = ''}) async {
  final list = await loadNgmyItemReminders(userEmail: userEmail);
  return list.where((e) => e.isDue).length;
}

String _formatWhen(DateTime dt) {
  final local = dt.toLocal();
  final h = local.hour > 12 ? local.hour - 12 : (local.hour == 0 ? 12 : local.hour);
  final m = local.minute.toString().padLeft(2, '0');
  final ampm = local.hour >= 12 ? 'PM' : 'AM';
  return '${local.month}/${local.day} at $h:$m $ampm';
}
