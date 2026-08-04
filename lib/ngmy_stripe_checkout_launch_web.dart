import 'dart:html' as html;

import 'ngmy_stripe_return_capture_web.dart';

/// Web: same-tab checkout so the post-payment redirect lands back on ngmy.org.
void ngmyLaunchPaymentCheckout(String url) {
  ngmyCapturePaymentReturnInPage();
  html.window.location.assign(url);
}

void ngmyClearPaymentQueryFromUrl() {
  final loc = html.window.location;
  final uri = Uri.parse(loc.href);
  if (!uri.queryParameters.containsKey('ngmy_pay_ok')) return;
  final cleaned = uri.replace(queryParameters: {});
  html.window.history.replaceState(null, '', cleaned.toString());
}
