import 'dart:js' as js;

/// True when `/api/sync` cannot work: index.html skipped the service worker
/// (Instagram / guest bio), or the worker does not control this page yet
/// (first visit before activation). `/api/sync` only exists as a SW proxy,
/// so those pages must hit Edge directly instead of failing over per call.
bool ngmyWebUseDirectEdge() {
  try {
    if (js.context['__NGMY_SKIP_SW__'] == true) return true;
    final navigator = js.context['navigator'];
    if (navigator is! js.JsObject) return true;
    final sw = navigator['serviceWorker'];
    if (sw is! js.JsObject) return true;
    return sw['controller'] == null;
  } catch (_) {
    return false;
  }
}
