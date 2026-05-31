import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

/// Frameless floating 3D weekend clock-in notice — 7s full 360° spin.
class NgmyWeekendClockOverlay {
  static const Duration _visibleFor = Duration(milliseconds: 7000);

  static Future<void> show(BuildContext context) {
    return Ngmy3DFloatingPopup.show(
      context,
      config: {
        'enabled': true,
        'themeId': 'cosmic',
        'title': 'WEEKEND',
        'subtitle': 'Clock-in rests · Back Monday midnight',
        'orbitWords': ['WEEKEND', 'REST', 'SATURDAY', 'SUNDAY', 'MONDAY', 'RECHARGE', 'NGMY'],
        'durationMs': 7000,
      },
    ).timeout(_visibleFor + const Duration(milliseconds: 1200), onTimeout: () {});
  }
}
