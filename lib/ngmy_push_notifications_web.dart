// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;
import 'dart:js_util' as js_util;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_notification_routes.dart';

Future<bool> ngmyPushIsSupported() async => html.Notification.supported ?? false;

Future<bool> ngmyPushHasPermission() async {
  if (!await ngmyPushIsSupported()) return false;
  return html.Notification.permission == 'granted';
}

Future<bool> ngmyPushRequestPermission() async {
  if (!await ngmyPushIsSupported()) return false;
  if (html.Notification.permission == 'granted') return true;
  if (html.Notification.permission == 'denied') return false;
  final result = await html.Notification.requestPermission();
  return result == 'granted';
}

/// Shows a notification. Tapping it opens the place it came from (`route`, or worked out from the tag and
/// title): Signal Grid, Options, Scalper, Civic Registry and so on.
Future<void> ngmyPushShow({
  required String title,
  required String body,
  String? tag,
  bool silent = false,
  String? route,
}) async {
  if (!await ngmyPushHasPermission()) return;
  final place = route ?? ngmyNotificationRoute(tag, title: title, body: body);
  final options = <String, Object?>{
    'body': body,
    if (tag != null && tag.isNotEmpty) 'tag': tag,
    if (silent) 'silent': true,
    'data': {'route': place},
  };
  // Through the service worker first: the notification stays in the phone's list and a tap reaches the
  // app even when it is in the background. Without a service worker, a plain page notification.
  try {
    final sw = html.window.navigator.serviceWorker;
    if (sw != null && sw.controller != null) {
      final reg = await sw.ready.timeout(const Duration(seconds: 2));
      await js_util.promiseToFuture<void>(js_util.callMethod(reg, 'showNotification', [title, js_util.jsify(options)]));
      return;
    }
  } catch (e) {
    debugPrint('[ngmy push] service worker show failed, using a page notification: $e');
  }
  try {
    final ctor = js_util.getProperty(html.window, 'Notification');
    final n = js_util.callConstructor(ctor, [title, js_util.jsify(options)]);
    js_util.setProperty(n, 'onclick', js_util.allowInterop((dynamic _) {
      try {
        js_util.callMethod(html.window, 'focus', []);
        js_util.callMethod(n, 'close', []);
      } catch (_) {}
      NgmyNotificationOpen.deliver(place);
    }));
  } catch (e) {
    debugPrint('[ngmy push] show failed: $e');
  }
}

bool _openListening = false;

/// Taps on notifications: a message from the service worker while the app is open, or the
/// ?ngmy_open= link the service worker opens when the app was closed. Each one opens its place.
void ngmyPushListenForOpen() {
  if (_openListening) return;
  _openListening = true;
  try {
    final uri = Uri.base;
    final first = uri.queryParameters['ngmy_open'];
    if (first != null && first.isNotEmpty) {
      NgmyNotificationOpen.deliver(first);
      final rest = Map<String, String>.from(uri.queryParameters)..remove('ngmy_open');
      // (Uri.replace with no parameters would keep the old query, so the bare link is built by hand.)
      final clean = rest.isEmpty
          ? '${uri.toString().split('?').first}${uri.hasFragment ? '#${uri.fragment}' : ''}'
          : uri.replace(queryParameters: rest).toString();
      html.window.history.replaceState(null, '', clean);
    }
  } catch (e) {
    debugPrint('[ngmy push] open link: $e');
  }
  try {
    final sw = html.window.navigator.serviceWorker;
    sw?.addEventListener('message', (html.Event e) {
      try {
        final data = js_util.dartify(js_util.getProperty(e, 'data'));
        if (data is Map && data['ngmyOpen'] != null) NgmyNotificationOpen.deliver('${data['ngmyOpen']}');
      } catch (_) {}
    });
    // Make sure messages are delivered (they wait until the page says it is listening).
    if (sw != null) js_util.callMethod(sw, 'startMessages', []);
  } catch (e) {
    debugPrint('[ngmy push] open listener: $e');
  }
}

Future<void> ngmyPushMaybePrompt(BuildContext context, String userEmail) async {
  final email = userEmail.toLowerCase().trim();
  if (email.isEmpty) return;
  if (!await ngmyPushIsSupported()) return;

  final prefs = await SharedPreferences.getInstance();
  final promptedKey = 'ngmy_push_prompted_$email';
  if (prefs.getBool(promptedKey) == true) return;
  if (html.Notification.permission == 'granted') {
    await prefs.setBool(promptedKey, true);
    return;
  }
  if (!context.mounted) return;

  await showDialog<void>(
    context: context,
    barrierDismissible: false,
    builder: (ctx) => AlertDialog(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      title: const Row(
        children: [
          Icon(Icons.notifications_active_rounded, color: Color(0xFF00B25A)),
          SizedBox(width: 10),
          Expanded(child: Text('Enable notifications?')),
        ],
      ),
      content: const Text(
        'Allow NGMY to send push alerts when you receive money or make purchases outside Game Center — even when the app is in the background.',
        style: TextStyle(height: 1.35),
      ),
      actions: [
        TextButton(
          onPressed: () async {
            await prefs.setBool(promptedKey, true);
            if (ctx.mounted) Navigator.pop(ctx);
          },
          child: const Text('Not now'),
        ),
        FilledButton(
          style: FilledButton.styleFrom(backgroundColor: const Color(0xFF00B25A)),
          onPressed: () async {
            await prefs.setBool(promptedKey, true);
            await ngmyPushRequestPermission();
            if (ctx.mounted) Navigator.pop(ctx);
          },
          child: const Text('Allow notifications'),
        ),
      ],
    ),
  );
}
