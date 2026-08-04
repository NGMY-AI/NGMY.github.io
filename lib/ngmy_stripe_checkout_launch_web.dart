import 'dart:html' as html;

/// Web: same-tab checkout so the post-payment redirect lands back on ngmy.org.
void ngmyLaunchPaymentCheckout(String url) {
  html.window.location.assign(url);
}

void ngmyClearPaymentQueryFromUrl() {
  final loc = html.window.location;
  final uri = Uri.parse(loc.href);
  if (!uri.queryParameters.containsKey('ngmy_pay_ok')) return;
  final cleaned = uri.replace(queryParameters: {});
  html.window.history.replaceState(null, '', cleaned.toString());
}
