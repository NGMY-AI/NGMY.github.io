import 'dart:html' as html;

/// Goes to [url] in this same window (used when the Stripe link was not ready at the moment of the tap,
/// so a new window could be blocked by the phone).
void ngmyHelpServicesGoTo(String url) => html.window.location.assign(url);

/// Reads ?svc_paid=<session> or ?svc_cancel=1 once, then removes it from the address bar.
/// Returns the Stripe session id, 'cancel', or null.
String? ngmyHelpServicesReadReturnParam() {
  final uri = Uri.parse(html.window.location.href);
  final paid = uri.queryParameters['svc_paid'] ?? '';
  final cancel = uri.queryParameters.containsKey('svc_cancel');
  if (paid.isEmpty && !cancel) return null;
  final rest = Map<String, String>.from(uri.queryParameters)
    ..remove('svc_paid')
    ..remove('svc_cancel');
  final cleaned = uri.replace(queryParameters: rest.isEmpty ? null : rest);
  var href = cleaned.toString();
  if (rest.isEmpty && href.endsWith('?')) href = href.substring(0, href.length - 1);
  html.window.history.replaceState(null, '', href);
  return paid.isNotEmpty ? paid : 'cancel';
}
