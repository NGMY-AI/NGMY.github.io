import 'dart:async';
import 'dart:html' as html;
import 'dart:js_util' as js_util;

String? _lastError;
Object? _recognition;
html.MediaStream? _micStream;

String? get ngmyVoiceEngineLastError => _lastError;

void ngmyVoiceEngineClearError() => _lastError = null;

dynamic _recognitionCtor() {
  return js_util.getProperty(html.window, 'webkitSpeechRecognition') ??
      js_util.getProperty(html.window, 'SpeechRecognition');
}

Future<bool> ngmyVoiceEngineSupported() async => _recognitionCtor() != null;

Future<void> _releaseMic() async {
  try {
    _micStream?.getTracks().forEach((t) => t.stop());
  } catch (_) {}
  _micStream = null;
}

Future<void> ngmyVoiceEngineStop() async {
  final r = _recognition;
  if (r != null) {
    try {
      js_util.callMethod(r, 'stop', const []);
    } catch (_) {
      try {
        js_util.callMethod(r, 'abort', const []);
      } catch (_) {}
    }
  }
  _recognition = null;
  await _releaseMic();
}

Future<bool> ngmyVoiceEngineListen({
  required void Function(String text, {bool isFinal}) onText,
}) async {
  ngmyVoiceEngineClearError();
  final ctor = _recognitionCtor();
  if (ctor == null) {
    _lastError = 'not-supported';
    return false;
  }

  await ngmyVoiceEngineStop();

  try {
    final devices = html.window.navigator.mediaDevices;
    if (devices != null) {
      _micStream = await devices.getUserMedia({'audio': true});
    }
  } catch (e) {
    _lastError = 'not-allowed';
    return false;
  }

  final recognition = js_util.callConstructor(ctor, []);
  _recognition = recognition;
  js_util.setProperty(recognition, 'continuous', true);
  js_util.setProperty(recognition, 'interimResults', true);
  js_util.setProperty(recognition, 'lang', 'en-US');
  js_util.setProperty(recognition, 'maxAlternatives', 1);

  final completer = Completer<bool>();
  var heardStart = false;

  void completeOnce(bool ok) {
    if (!completer.isCompleted) completer.complete(ok);
  }

  js_util.setProperty(recognition, 'onstart', js_util.allowInterop((_) {
    heardStart = true;
    completeOnce(true);
  }));

  js_util.setProperty(recognition, 'onaudiostart', js_util.allowInterop((_) {
    heardStart = true;
    completeOnce(true);
  }));

  js_util.setProperty(recognition, 'onspeechstart', js_util.allowInterop((_) {
    heardStart = true;
    completeOnce(true);
  }));

  js_util.setProperty(recognition, 'onresult', js_util.allowInterop((event) {
    try {
      final results = js_util.getProperty(event, 'results');
      if (results == null) return;
      final length = (js_util.getProperty(results, 'length') as num?)?.toInt() ?? 0;
      final buffer = StringBuffer();
      var isFinal = false;
      for (var i = 0; i < length; i++) {
        final result = js_util.callMethod(results, 'item', [i]);
        final alt = js_util.callMethod(result, 'item', [0]);
        buffer.write(js_util.getProperty(alt, 'transcript') as String? ?? '');
        if (js_util.getProperty(result, 'isFinal') == true) isFinal = true;
      }
      final transcript = buffer.toString().trim();
      if (transcript.isNotEmpty) onText(transcript, isFinal: isFinal);
    } catch (_) {}
  }));

  js_util.setProperty(recognition, 'onerror', js_util.allowInterop((event) {
    _lastError = js_util.getProperty(event, 'error')?.toString() ?? 'error';
    completeOnce(false);
  }));

  js_util.setProperty(recognition, 'onend', js_util.allowInterop((_) async {
    _recognition = null;
    await _releaseMic();
  }));

  try {
    js_util.callMethod(recognition, 'start', const []);
  } catch (e) {
    _lastError = 'listen-failed';
    await _releaseMic();
    return false;
  }

  // Safari sometimes skips onstart — accept if no error within 900ms.
  unawaited(Future<void>.delayed(const Duration(milliseconds: 900), () {
    if (!completer.isCompleted) completeOnce(heardStart || _lastError == null);
  }));

  return completer.future;
}
