import 'dart:html' as html;

/// Goes to [url] in this same window (used when the Stripe link was not ready at the moment of the tap,
/// so a new window could be blocked by the phone).
void ngmyHelpServicesGoTo(String url) => html.window.location.assign(url);

const _kOpenFromBioKey = 'ngmy_svc_open_from_bio';

/// A visitor tapped the hidden Help & Services spot on an admin Bio page: open ngmy.org and land on
/// Help & Services. The wish is kept for 30 minutes so it still works after the visitor logs in.
void ngmyHelpServicesOpenFromBio() {
  try {
    html.window.localStorage[_kOpenFromBioKey] = DateTime.now().millisecondsSinceEpoch.toString();
  } catch (_) {}
  html.window.location.assign('${html.window.location.origin}/?svc_open=1');
}

/// Reads ?svc_paid=<session>, ?svc_cancel=1 or ?svc_open=1 once, then removes it from the address bar.
/// Returns the Stripe session id, 'cancel', 'open' (came from a Bio page), or null.
String? ngmyHelpServicesReadReturnParam() {
  final uri = Uri.parse(html.window.location.href);
  final paid = uri.queryParameters['svc_paid'] ?? '';
  final cancel = uri.queryParameters.containsKey('svc_cancel');
  final open = uri.queryParameters.containsKey('svc_open');
  var openSaved = false;
  try {
    final at = int.tryParse(html.window.localStorage[_kOpenFromBioKey] ?? '');
    if (at != null) {
      html.window.localStorage.remove(_kOpenFromBioKey);
      openSaved = DateTime.now().millisecondsSinceEpoch - at < 30 * 60 * 1000;
    }
  } catch (_) {}
  if (paid.isEmpty && !cancel && !open && !openSaved) return null;
  if (paid.isEmpty && !cancel && !open) return 'open';
  final rest = Map<String, String>.from(uri.queryParameters)
    ..remove('svc_paid')
    ..remove('svc_cancel')
    ..remove('svc_open');
  final cleaned = (rest.isEmpty ? uri.replace(query: "") : uri.replace(queryParameters: rest));
  var href = cleaned.toString();
  if (rest.isEmpty && href.endsWith('?')) href = href.substring(0, href.length - 1);
  html.window.history.replaceState(null, '', href);
  if (paid.isNotEmpty) return paid;
  return cancel ? 'cancel' : 'open';
}

/// A visitor link to Help & Services that needs no login: ?svc_open=1 (from the admin Bio page),
/// ?svc_guest=<token> (a guest receipt link), or the return from Stripe for a guest
/// (?svc_paid=<session>&svc_guest=<token>). Returns null when the address is none of these.
/// The address is cleaned so a reload does not repeat it.
({String token, String paid})? ngmyHelpServicesGuestLaunch() {
  final uri = Uri.parse(html.window.location.href);
  final open = uri.queryParameters.containsKey('svc_open');
  final token = (uri.queryParameters['svc_guest'] ?? '').trim().toLowerCase();
  final paid = (uri.queryParameters['svc_paid'] ?? '').trim();
  var fromBio = false;
  try {
    final at = int.tryParse(html.window.localStorage[_kOpenFromBioKey] ?? '');
    fromBio = at != null && DateTime.now().millisecondsSinceEpoch - at < 30 * 60 * 1000;
  } catch (_) {}
  if (!open && token.isEmpty && !fromBio) return null;
  try {
    html.window.localStorage.remove(_kOpenFromBioKey);
  } catch (_) {}
  final rest = Map<String, String>.from(uri.queryParameters)
    ..remove('svc_open')
    ..remove('svc_guest')
    ..remove('svc_paid')
    ..remove('svc_cancel');
  var href = (rest.isEmpty ? uri.replace(query: "") : uri.replace(queryParameters: rest)).toString();
  if (rest.isEmpty && href.endsWith('?')) href = href.substring(0, href.length - 1);
  html.window.history.replaceState(null, '', href);
  return (token: RegExp(r'^[a-f0-9]{48}$').hasMatch(token) ? token : '', paid: token.isEmpty ? '' : paid);
}
