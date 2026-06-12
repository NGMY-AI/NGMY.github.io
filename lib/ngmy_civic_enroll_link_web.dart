import 'dart:html' as html;

bool ngmyPendingCivicSelfEnrollmentOpen = false;

String ngmyCivicSelfEnrollmentShareUrl() {
  try {
    final origin = html.window.location.origin;
    if (origin.isNotEmpty) return '$origin/?civic=enroll';
  } catch (_) {}
  return 'https://ngmy.org/?civic=enroll';
}

void ngmyCaptureCivicEnrollLaunchIntent() {
  try {
    final uri = Uri.parse(html.window.location.href);
    final civic = uri.queryParameters['civic']?.trim().toLowerCase();
    final fragment = uri.fragment.trim().toLowerCase();
    if (civic == 'enroll' || fragment == 'civic-enroll' || fragment.contains('civic-enroll')) {
      ngmyPendingCivicSelfEnrollmentOpen = true;
      html.window.sessionStorage['ngmy_civic_enroll'] = '1';
      if (civic == 'enroll') {
        final qp = Map<String, String>.from(uri.queryParameters)..remove('civic');
        final clean = uri.replace(
          queryParameters: qp.isEmpty ? null : qp,
          fragment: uri.fragment,
        );
        html.window.history.replaceState(null, '', clean.toString());
      }
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
