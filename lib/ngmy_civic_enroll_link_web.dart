import 'dart:html' as html;

bool ngmyPendingCivicSelfEnrollmentOpen = false;

String ngmyCivicSelfEnrollmentShareUrl({String? state, String? registrarEmail}) {
  final st = (state ?? '').trim();
  final reg = (registrarEmail ?? '').trim().toLowerCase();
  final params = <String>['civic=enroll'];
  if (st.isNotEmpty) params.add('state=${Uri.encodeQueryComponent(st)}');
  if (reg.isNotEmpty) params.add('registrar=${Uri.encodeQueryComponent(reg)}');
  final query = params.join('&');
  try {
    final origin = html.window.location.origin;
    if (origin.isNotEmpty) {
      return '$origin/?$query';
    }
  } catch (_) {}
  return 'https://ngmy.org/?$query';
}

bool ngmyPeekCivicEnrollLaunchIntent() {
  try {
    if (ngmyPendingCivicSelfEnrollmentOpen) return true;
    if (html.window.sessionStorage['ngmy_civic_enroll'] == '1') return true;
    final uri = Uri.parse(html.window.location.href);
    final civic = uri.queryParameters['civic']?.trim().toLowerCase();
    final fragment = uri.fragment.trim().toLowerCase();
    return civic == 'enroll' || fragment == 'civic-enroll' || fragment.contains('civic-enroll');
  } catch (_) {
    return false;
  }
}

void ngmyCaptureCivicEnrollLaunchIntent() {
  try {
    final uri = Uri.parse(html.window.location.href);
    final civic = uri.queryParameters['civic']?.trim().toLowerCase();
    final fragment = uri.fragment.trim().toLowerCase();
    if (civic == 'enroll' || fragment == 'civic-enroll' || fragment.contains('civic-enroll')) {
      ngmyPendingCivicSelfEnrollmentOpen = true;
      html.window.sessionStorage['ngmy_civic_enroll'] = '1';
      // Keep ?civic=enroll in the URL so refresh still opens guest enrollment.
      return;
    }
    if (html.window.sessionStorage['ngmy_civic_enroll'] == '1') {
      ngmyPendingCivicSelfEnrollmentOpen = true;
    }
  } catch (_) {}
}

bool ngmyTakePendingCivicSelfEnrollmentOpen() {
  try {
    html.window.sessionStorage.remove('ngmy_civic_enroll');
  } catch (_) {}
  final pending = ngmyPendingCivicSelfEnrollmentOpen;
  ngmyPendingCivicSelfEnrollmentOpen = false;
  return pending;
}
