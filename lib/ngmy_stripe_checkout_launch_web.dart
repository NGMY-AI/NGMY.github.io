import 'dart:html' as html;

import 'ngmy_stripe_return_capture_web.dart';

/// Web: open Stripe in a separate tab so the app itself never unloads.
///
/// Same-tab `location.assign` is what was leaving the black band under the
/// bottom menu: iOS Safari hands the Flutter page back from bfcache without
/// a viewport resize, so the canvas stays short and the page background shows
/// through underneath. Leaving the app tab alone avoids that entirely.
///
/// Payment success still lands on ngmy.org with `ngmy_pay_ok=1`, which writes
/// `ngmy_pay_return_v1` into localStorage (see index.html). The original tab
/// picks that up on resume / storage events.
void ngmyLaunchPaymentCheckout(String url) {
  ngmyCapturePaymentReturnInPage();

  html.WindowBase? opened;
  try {
    // Do not pass "noopener" in the features string — browsers then return
    // null from open(), which would force same-tab navigation and recreate
    // the black-bar bug. Stripe is a trusted host; keep the handle.
    opened = html.window.open(url, '_blank');
  } catch (_) {
    opened = null;
  }

  // Popup blockers return null. Some browsers return a closed window handle.
  var blocked = opened == null;
  try {
    if (!blocked && opened is html.Window && opened.closed == true) {
      blocked = true;
    }
  } catch (_) {}
  if (blocked) {
    html.window.location.assign(url);
  }
}

void ngmyClearPaymentQueryFromUrl() {
  final loc = html.window.location;
  final uri = Uri.parse(loc.href);
  if (!uri.queryParameters.containsKey('ngmy_pay_ok')) return;
  final cleaned = uri.replace(queryParameters: {});
  html.window.history.replaceState(null, '', cleaned.toString());
}
