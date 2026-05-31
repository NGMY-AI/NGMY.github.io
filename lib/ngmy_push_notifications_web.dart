// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

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

Future<void> ngmyPushShow({required String title, required String body, String? tag}) async {
  if (!await ngmyPushHasPermission()) return;
  try {
    html.Notification(title, body: body, tag: tag ?? title);
  } catch (e) {
    debugPrint('[ngmy push] show failed: $e');
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
        'Allow NGMY to send you push alerts for transactions, earnings, and news announcements — even when the app is in the background.',
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
