import 'dart:convert';
import 'dart:html' as html;

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
