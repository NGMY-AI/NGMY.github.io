import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:url_launcher/url_launcher.dart';

/// Opens the Android Clock app with alarm fields filled.
Future<bool> ngmyTryOpenSystemClockAlarm({
  required DateTime when,
  required String label,
}) async {
  if (kIsWeb || !Platform.isAndroid) return false;
  try {
    final encoded = Uri.encodeComponent(label);
    final intentUri = Uri.parse(
      'intent:#Intent;action=android.intent.action.SET_ALARM;'
      'S.android.intent.extra.alarm.MESSAGE=$encoded;'
      'i.android.intent.extra.alarm.HOUR=${when.hour};'
      'i.android.intent.extra.alarm.MINUTES=${when.minute};'
      'end',
    );
    if (await canLaunchUrl(intentUri)) {
      return await launchUrl(intentUri, mode: LaunchMode.externalApplication);
    }
  } catch (e) {
    debugPrint('[alarm] SET_ALARM intent failed: $e');
  }
  return false;
}

/// Best-effort open iPhone/iPad Clock app (no API to pre-fill alarm time).
Future<bool> ngmyTryOpenIosClockApp() async {
  if (kIsWeb || !Platform.isIOS) return false;
  for (final uri in [
    Uri.parse('clock-alarm://'),
    Uri.parse('clock-worldclock://'),
    Uri.parse('clock-timer://'),
  ]) {
    try {
      if (await canLaunchUrl(uri)) {
        final ok = await launchUrl(uri, mode: LaunchMode.externalApplication);
        if (ok) return true;
      }
    } catch (e) {
      debugPrint('[alarm] iOS clock url failed ($uri): $e');
    }
  }
  return false;
}
