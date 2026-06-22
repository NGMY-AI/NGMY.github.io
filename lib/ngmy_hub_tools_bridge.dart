import 'package:flutter/material.dart';

/// Lets Creator Toolkit open tools whose state lives on [NgmyHubScreen].
class NgmyHubToolBridge {
  NgmyHubToolBridge._();

  static VoidCallback? openPickTwo;
  static VoidCallback? openQrGenerator;
  static VoidCallback? openFunGames;

  static void register({
    VoidCallback? pickTwo,
    VoidCallback? qrGenerator,
    VoidCallback? funGames,
  }) {
    openPickTwo = pickTwo;
    openQrGenerator = qrGenerator;
    openFunGames = funGames;
  }

  static void clear() {
    openPickTwo = null;
    openQrGenerator = null;
    openFunGames = null;
  }

  static void invokeOrSnack(BuildContext context, VoidCallback? action, String label) {
    if (action != null) {
      action();
      return;
    }
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Open NGMY Hub once, then try $label again.')),
    );
  }
}
