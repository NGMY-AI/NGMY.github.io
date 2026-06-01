import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

/// Full-screen 3D notification permission prompt (same style as weekend clock-in).
class NgmyPushNotificationPrompt {
  /// Returns true when user taps Enable, false for Not now.
  static Future<bool?> show(BuildContext context) {
    return Ngmy3DFloatingPopup.showInteractive(
      context,
      config: {
        'enabled': true,
        'themeId': 'ngmy',
        'title': 'NOTIFICATIONS',
        'subtitle': 'Turn on alerts for transactions, earnings & news',
        'orbitWords': const ['ALERT', 'NEWS', 'EARN', 'PAY', 'NGMY', 'UPDATE', 'NOW'],
        'sizeScale': 1.12,
        'titleMaxLines': 1,
        'subtitleMaxLines': 3,
      },
      primaryLabel: 'Enable notifications',
      secondaryLabel: 'Not now',
    );
  }
}
