import 'dart:js' as js;

/// True when index.html skipped the service worker (Instagram / guest bio).
/// `/api/sync` only exists as a SW proxy, so those browsers must hit Edge directly.
bool ngmyWebUseDirectEdge() {
  try {
    return js.context['__NGMY_SKIP_SW__'] == true;
  } catch (_) {
    return false;
  }
}
