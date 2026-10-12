// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;
import 'dart:js_util' as js_util;

Object? _api() => js_util.getProperty(html.window, 'ngmyVoiceCapture');

bool ngmyVoiceCaptureSupported() {
  final api = _api();
  if (api == null) return false;
  try {
    return js_util.callMethod(api, 'supported', const []) == true;
  } catch (_) {
    return false;
  }
}

/// Null when recording started, otherwise an error code.
Future<String?> ngmyVoiceCaptureStart(void Function(double level) onLevel) async {
  final api = _api();
  if (api == null) return 'not-supported';
  try {
    await js_util.promiseToFuture<Object?>(
      js_util.callMethod(api, 'start', [js_util.allowInterop((num v) => onLevel(v.toDouble()))]),
    );
    return null;
  } catch (e) {
    final s = e.toString();
    final m = RegExp(r'(NotAllowedError|NotFoundError|NotReadableError|SecurityError|OverconstrainedError|AbortError|not-supported|not-allowed)').firstMatch(s);
    return m?.group(1) ?? s;
  }
}

Future<({String b64, String mime, double seconds})> ngmyVoiceCaptureStop() async {
  final api = _api();
  if (api == null) return (b64: '', mime: 'audio/wav', seconds: 0.0);
  try {
    final r = await js_util.promiseToFuture<Object?>(js_util.callMethod(api, 'stop', const []));
    if (r == null) return (b64: '', mime: 'audio/wav', seconds: 0.0);
    return (
      b64: (js_util.getProperty(r, 'b64') ?? '').toString(),
      mime: (js_util.getProperty(r, 'mime') ?? 'audio/wav').toString(),
      seconds: ((js_util.getProperty(r, 'seconds') as num?) ?? 0).toDouble(),
    );
  } catch (_) {
    return (b64: '', mime: 'audio/wav', seconds: 0.0);
  }
}

void ngmyVoiceCaptureCancel() {
  final api = _api();
  if (api == null) return;
  try {
    js_util.callMethod(api, 'cancel', const []);
  } catch (_) {}
}
