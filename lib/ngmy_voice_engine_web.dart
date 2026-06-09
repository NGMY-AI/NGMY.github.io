import 'dart:async';
import 'dart:html' as html;
import 'dart:js_util' as js_util;

String? _lastError;
Object? _recognition;
bool _keepListening = false;

String? get ngmyVoiceEngineLastError => _lastError;

void ngmyVoiceEngineClearError() => _lastError = null;

dynamic _recognitionCtor() {
  return js_util.getProperty(html.window, 'webkitSpeechRecognition') ??
      js_util.getProperty(html.window, 'SpeechRecognition');
}

Future<void> ngmyVoiceEngineStop() async {
  _keepListening = false;
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
}

void _attachRecognitionHandlers(
  Object recognition, {
  required void Function(String text, {bool isFinal}) onText,
  required void Function(bool ok) onStarted,
}) {
  js_util.setProperty(recognition, 'onstart', js_util.allowInterop((_) {
    onStarted(true);
  }));

  js_util.setProperty(recognition, 'onaudiostart', js_util.allowInterop((_) {
    onStarted(true);
  }));

  js_util.setProperty(recognition, 'onspeechstart', js_util.allowInterop((_) {
    onStarted(true);
  }));

  js_util.setProperty(recognition, 'onresult', js_util.allowInterop((event) {
    try {
      final results = js_util.getProperty(event, 'results');
      if (results == null) return;
      final length = (js_util.getProperty(results, 'length') as num?)?.toInt() ?? 0;
      if (length == 0) return;
      final resultIndex = (js_util.getProperty(event, 'resultIndex') as num?)?.toInt() ?? 0;
      final buffer = StringBuffer();
      var isFinal = false;
      for (var i = 0; i < length; i++) {
        final result = js_util.callMethod(results, 'item', [i]);
        final alt = js_util.callMethod(result, 'item', [0]);
        final piece = (js_util.getProperty(alt, 'transcript') as String? ?? '').trim();
        if (piece.isNotEmpty) {
          if (buffer.isNotEmpty) buffer.write(' ');
          buffer.write(piece);
        }
        if (js_util.getProperty(result, 'isFinal') == true && i >= resultIndex) {
          isFinal = true;
        }
      }
      final transcript = buffer.toString().trim();
      if (transcript.isNotEmpty) onText(transcript, isFinal: isFinal);
    } catch (_) {}
  }));

  js_util.setProperty(recognition, 'onerror', js_util.allowInterop((event) {
    final err = js_util.getProperty(event, 'error')?.toString() ?? 'error';
    if (_keepListening && (err == 'no-speech' || err == 'aborted')) {
      return;
    }
    _lastError = err;
    if (err != 'no-speech') _keepListening = false;
  }));

  js_util.setProperty(recognition, 'onend', js_util.allowInterop((_) {
    _recognition = null;
    if (!_keepListening) return;
    unawaited(Future<void>.delayed(const Duration(milliseconds: 180), () {
      if (_keepListening) {
        unawaited(_startRecognition(onText: onText, onStarted: onStarted));
      }
    }));
  }));
}

Future<bool> _startRecognition({
  required void Function(String text, {bool isFinal}) onText,
  required void Function(bool ok) onStarted,
}) async {
  final ctor = _recognitionCtor();
  if (ctor == null) {
    _lastError = 'not-supported';
    return false;
  }

  final recognition = js_util.callConstructor(ctor, []);
  _recognition = recognition;
  js_util.setProperty(recognition, 'continuous', true);
  js_util.setProperty(recognition, 'interimResults', true);
  js_util.setProperty(recognition, 'lang', 'en-US');
  js_util.setProperty(recognition, 'maxAlternatives', 1);

  _attachRecognitionHandlers(recognition, onText: onText, onStarted: onStarted);

  try {
    js_util.callMethod(recognition, 'start', const []);
    return true;
  } catch (e) {
    _lastError = 'listen-failed';
    _recognition = null;
    return false;
  }
}

Future<bool> ngmyVoiceEngineSupported() async => _recognitionCtor() != null;

Future<bool> ngmyVoiceEngineListen({
  required void Function(String text, {bool isFinal}) onText,
}) async {
  ngmyVoiceEngineClearError();
  if (_recognitionCtor() == null) {
    _lastError = 'not-supported';
    return false;
  }

  await ngmyVoiceEngineStop();
  _keepListening = true;

  final completer = Completer<bool>();
  var heardStart = false;

  void completeOnce(bool ok) {
    if (!completer.isCompleted) completer.complete(ok);
  }

  final started = await _startRecognition(
    onText: onText,
    onStarted: (_) {
      heardStart = true;
      completeOnce(true);
    },
  );
  if (!started) {
    _keepListening = false;
    return false;
  }

  // Safari sometimes skips onstart — accept if no error within 900ms.
  unawaited(Future<void>.delayed(const Duration(milliseconds: 900), () {
    if (!completer.isCompleted) completeOnce(heardStart || _lastError == null);
  }));

  return completer.future;
}
