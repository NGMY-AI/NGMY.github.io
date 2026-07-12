import 'dart:html' as html;

bool ngmyPendingCivicSelfEnrollmentOpen = false;

String ngmyCivicSelfEnrollmentShareUrl({String? state}) {
  try {
    final origin = html.window.location.origin;
    if (origin.isNotEmpty) {
      final st = (state ?? '').trim();
      if (st.isNotEmpty) {
        return '$origin/?civic=enroll&state=${Uri.encodeQueryComponent(st)}';
      }
      return '$origin/?civic=enroll';
    }
  } catch (_) {}
  final st = (state ?? '').trim();
  if (st.isNotEmpty) {
    return 'https://ngmy.org/?civic=enroll&state=${Uri.encodeQueryComponent(st)}';
  }
  return 'https://ngmy.org/?civic=enroll';
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
