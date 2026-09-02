import 'dart:html' as html;

import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_registry_stats.dart';

bool ngmyPendingCivicSelfEnrollmentOpen = false;

/// Short path link: `https://ngmy.org/enroll/georgia` or `…/enroll/georgia?r=…&k=2`.
String ngmyCivicSelfEnrollmentShareUrl({
  String? state,
  String? registrarEmail,
  String? stateLinkToken,
  int linkVersion = 0,
}) {
  final st = (state ?? '').trim();
  final reg = (registrarEmail ?? '').trim();
  final slug = NgmyCivicRegistryStats.enrollStateSlug(st);
  if (slug.isEmpty) return 'https://ngmy.org/';
  final params = <String>[];
  if (reg.isNotEmpty) params.add('r=${NgmyCivicRegistryMembers.registrarLinkToken(reg)}');
  final version = linkVersion > 0 ? linkVersion : int.tryParse((stateLinkToken ?? '').trim()) ?? 0;
  if (version > 1) params.add('k=$version');
  final query = params.isEmpty ? '' : '?${params.join('&')}';
  try {
    final origin = html.window.location.origin;
    if (origin.isNotEmpty) return '$origin/enroll/$slug$query';
  } catch (_) {}
  return 'https://ngmy.org/enroll/$slug$query';
}

bool _isEnrollLaunchUri(Uri uri) {
  final civic = uri.queryParameters['civic']?.trim().toLowerCase();
  if (civic == 'enroll') return true;
  final fragment = uri.fragment.trim().toLowerCase();
  if (fragment == 'civic-enroll' || fragment.contains('civic-enroll')) return true;
  return RegExp(r'/enroll/[^/?#]+', caseSensitive: false).hasMatch(uri.path);
}

bool ngmyPeekCivicEnrollLaunchIntent() {
  try {
    if (ngmyPendingCivicSelfEnrollmentOpen) return true;
    if (html.window.sessionStorage['ngmy_civic_enroll'] == '1') return true;
    final uri = Uri.parse(html.window.location.href);
    return _isEnrollLaunchUri(uri);
  } catch (_) {
    return false;
  }
}

void ngmyCaptureCivicEnrollLaunchIntent() {
  try {
    final uri = Uri.parse(html.window.location.href);
    if (_isEnrollLaunchUri(uri)) {
      ngmyPendingCivicSelfEnrollmentOpen = true;
      html.window.sessionStorage['ngmy_civic_enroll'] = '1';
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
