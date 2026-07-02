import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/foundation.dart';

import 'ngmy_push_notifications_web.dart';

/// Schedules a lock-screen notification via the service worker (PWA — app may be closed).
/// Returns null if permission denied (caller should use phone alert fallback).
Future<String?> ngmyScheduleWebPhoneAlarm({
  required String id,
  required String title,
  required DateTime when,
  String? notes,
}) async {
  if (!await ngmyPushIsSupported()) return null;

  var granted = await ngmyPushHasPermission();
  if (!granted) {
    granted = await ngmyPushRequestPermission();
  }
  if (!granted) return null;

  try {
    await _postAlarmToServiceWorker(
      id: id,
      title: title.trim().isEmpty ? 'Wake up' : title.trim(),
      when: when.toLocal(),
      body: notes?.trim().isNotEmpty == true ? notes!.trim() : 'Your NGMY wake alarm',
    );
    return _formatWhen(when.toLocal());
  } catch (e) {
    debugPrint('[helper-alarm] web schedule failed: $e');
    return null;
  }
}

Future<void> _postAlarmToServiceWorker({
  required String id,
  required String title,
  required DateTime when,
  required String body,
}) async {
  final sw = html.window.navigator.serviceWorker;
  if (sw == null) throw StateError('no service worker');

  Future<void> send(html.ServiceWorkerRegistration reg) async {
    final worker = reg.active ?? reg.installing ?? reg.waiting;
    worker?.postMessage({
      'type': 'SCHEDULE_ALARM',
      'id': id,
      'at': when.toUtc().toIso8601String(),
      'title': title,
      'body': body,
    });
  }

  try {
    final reg = await sw.ready.timeout(const Duration(seconds: 8));
    await send(reg);
    return;
  } catch (_) {}

  final reg = await sw.register('/ngmy_service_worker.js').timeout(const Duration(seconds: 8));
  await send(reg);
}

String _formatWhen(DateTime dt) {
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '${dt.month}/${dt.day} at $h:$min $ampm';
}
