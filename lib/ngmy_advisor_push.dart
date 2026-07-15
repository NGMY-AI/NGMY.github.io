import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

import 'ngmy_push_notifications.dart';

final FlutterLocalNotificationsPlugin _ngmyAdvisorNotify = FlutterLocalNotificationsPlugin();
bool _ngmyAdvisorNotifyReady = false;
int _ngmyAdvisorNotifyId = 76000;

Future<void> _ensureAdvisorLocalNotify() async {
  if (kIsWeb || _ngmyAdvisorNotifyReady) return;
  const android = AndroidInitializationSettings('@mipmap/ic_launcher');
  const darwin = DarwinInitializationSettings(
    requestAlertPermission: true,
    requestBadgePermission: true,
    requestSoundPermission: true,
  );
  await _ngmyAdvisorNotify.initialize(
    settings: const InitializationSettings(android: android, iOS: darwin, macOS: darwin),
  );
  await _ngmyAdvisorNotify
      .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
      ?.requestNotificationsPermission();
  await _ngmyAdvisorNotify
      .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
      ?.requestPermissions(alert: true, badge: true, sound: true);
  _ngmyAdvisorNotifyReady = true;
}

/// Push / local notification when an advisor texts and the user may be away.
Future<void> ngmyAdvisorMessagePush({
  required String advisorName,
  required String message,
  String? profileId,
}) async {
  final title = advisorName.trim().isEmpty ? 'NGMY Advisor' : advisorName.trim();
  final body = message.trim();
  if (body.isEmpty) return;
  final preview = body.length > 140 ? '${body.substring(0, 137)}…' : body;
  final tag = 'advisor_${(profileId ?? title).trim()}';

  try {
    if (kIsWeb) {
      final ok = await ngmyPushHasPermission() || await ngmyPushRequestPermission();
      if (!ok) return;
      await ngmyPushShow(title: title, body: preview, tag: tag);
      return;
    }
    await _ensureAdvisorLocalNotify();
    const android = AndroidNotificationDetails(
      'ngmy_advisors',
      'NGMY Advisors',
      channelDescription: 'Messages from your advisors when you haven’t replied',
      importance: Importance.high,
      priority: Priority.high,
      playSound: true,
    );
    const darwin = DarwinNotificationDetails(
      presentAlert: true,
      presentBadge: true,
      presentSound: true,
    );
    await _ngmyAdvisorNotify.show(
      id: _ngmyAdvisorNotifyId++,
      title: title,
      body: preview,
      notificationDetails: const NotificationDetails(android: android, iOS: darwin, macOS: darwin),
    );
  } catch (e) {
    debugPrint('[advisor push] $e');
  }
}
