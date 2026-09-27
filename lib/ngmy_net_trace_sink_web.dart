import 'dart:js' as js;

/// Mirrors trace lines into `window.__ngmyNetTrace` so they can be read from DevTools.
void ngmyNetTraceSink(String line) {
  try {
    var list = js.context['__ngmyNetTrace'];
    if (list is! js.JsArray) {
      list = js.JsArray();
      js.context['__ngmyNetTrace'] = list;
    }
    list.add(line);
  } catch (_) {}
}
