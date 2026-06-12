import 'dart:html' as html;

String? _ngmyPendingReferralCode;

String _normalizeReferralCode(String raw) {
  var code = raw.trim().toUpperCase();
  if (code.isEmpty) return '';
  if (!code.startsWith('REFD')) code = 'REFD$code';
  return code;
}

String? ngmyPeekPendingReferralCode() {
  try {
    if (_ngmyPendingReferralCode != null && _ngmyPendingReferralCode!.isNotEmpty) {
      return _ngmyPendingReferralCode;
    }
    final stored = html.window.sessionStorage['ngmy_referral_code']?.trim();
    if (stored != null && stored.isNotEmpty) {
      _ngmyPendingReferralCode = _normalizeReferralCode(stored);
      return _ngmyPendingReferralCode;
    }
  } catch (_) {}
  return null;
}

void ngmyClearPendingReferralCode() {
  _ngmyPendingReferralCode = null;
  try {
    html.window.sessionStorage.remove('ngmy_referral_code');
  } catch (_) {}
}

String ngmyReferralInviteUrl(String referralCode) {
  final code = _normalizeReferralCode(referralCode);
  try {
    final origin = html.window.location.origin;
    if (origin.isNotEmpty && code.isNotEmpty) return '$origin/?ref=$code';
  } catch (_) {}
  if (code.isEmpty) return 'https://ngmy.org/';
  return 'https://ngmy.org/?ref=$code';
}

void ngmyCaptureReferralLaunchIntent() {
  try {
    final uri = Uri.parse(html.window.location.href);
    final ref = uri.queryParameters['ref']?.trim();
    if (ref != null && ref.isNotEmpty) {
      final code = _normalizeReferralCode(ref);
      _ngmyPendingReferralCode = code;
      html.window.sessionStorage['ngmy_referral_code'] = code;
      final qp = Map<String, String>.from(uri.queryParameters)..remove('ref');
      final clean = uri.replace(
        queryParameters: qp.isEmpty ? null : qp,
        fragment: uri.fragment,
      );
      html.window.history.replaceState(null, '', clean.toString());
      return;
    }
    final stored = html.window.sessionStorage['ngmy_referral_code']?.trim();
    if (stored != null && stored.isNotEmpty) {
      _ngmyPendingReferralCode = _normalizeReferralCode(stored);
    }
  } catch (_) {}
}
