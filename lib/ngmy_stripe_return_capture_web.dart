import 'dart:convert';
import 'dart:html' as html;

import 'package:flutter/widgets.dart';

const _returnKey = 'ngmy_pay_return_v1';

Uri? ngmyPaymentReturnUri() {
  try {
    return Uri.parse(html.window.location.href);
  } catch (_) {
    return null;
  }
}

Map<String, dynamic>? ngmyConsumeStoredPaymentReturn() {
  try {
    final raw = html.window.localStorage[_returnKey];
    if (raw == null || raw.isEmpty) return null;
    html.window.localStorage.remove(_returnKey);
    final decoded = jsonDecode(raw);
    if (decoded is Map<String, dynamic>) return decoded;
    if (decoded is Map) return Map<String, dynamic>.from(decoded);
  } catch (_) {}
  return null;
}

/// Captures Stripe success redirect params before Flutter boots (also called from index.html).
void ngmyCapturePaymentReturnInPage() {
  try {
    final uri = Uri.parse(html.window.location.href);
    if (uri.queryParameters['ngmy_pay_ok'] != '1') return;
    html.window.localStorage[_returnKey] = jsonEncode({
      'ok': true,
      'pay': uri.queryParameters['ngmy_pay'] ?? '',
      'email': uri.queryParameters['ngmy_pay_email'] ?? '',
      'at': DateTime.now().millisecondsSinceEpoch,
    });
  } catch (_) {}
}

/// Fires when the checkout tab writes [ngmy_pay_return_v1], or when this tab
/// becomes visible again after the user leaves Stripe without paying.
void ngmyListenForCrossTabPaymentReturn(void Function() onMaybePaid) {
  html.window.onStorage.listen((event) {
    if (event.key == _returnKey && event.newValue != null && event.newValue!.isNotEmpty) {
      onMaybePaid();
    }
  });
  html.document.onVisibilityChange.listen((_) {
    if (html.document.visibilityState == 'visible') onMaybePaid();
  });
}

/// Re-fires the resize the Flutter engine listens for, then forces a metrics
/// rebuild so a stale short canvas cannot leave a black band under the menu.
void ngmyForceWebViewportResettle() {
  try {
    html.window.scrollTo(0, 0);
    html.document.documentElement?.scrollTop = 0;
    html.document.body?.scrollTop = 0;
  } catch (_) {}

  void remeasure() {
    try {
      final vv = html.window.visualViewport;
      if (vv != null) {
        vv.dispatchEvent(html.Event('resize'));
      } else {
        html.window.dispatchEvent(html.Event('resize'));
      }
    } catch (_) {}
    try {
      WidgetsBinding.instance.handleMetricsChanged();
    } catch (_) {}
  }

  remeasure();
  for (final ms in const [50, 150, 350, 700, 1200]) {
    Future<void>.delayed(Duration(milliseconds: ms), remeasure);
  }
}
