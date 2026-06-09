import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;

import 'ngmy_voice_engine_stub.dart'
    if (dart.library.html) 'ngmy_voice_engine_web.dart';

class NgmyVoiceInput {
  static final stt.SpeechToText _speech = stt.SpeechToText();
  static bool _nativeInitWorked = false;
  static String? _lastError;

  static String? get lastError => _lastError ?? ngmyVoiceEngineLastError;

  static Future<bool> _ensureNativeReady() async {
    if (_nativeInitWorked) return true;
    try {
      final options = kIsWeb ? null : <stt.SpeechConfigOption>[stt.SpeechToText.webDoNotAggregate];
      final ok = await _speech.initialize(
        debugLogging: kDebugMode,
        onError: (e) {
          _lastError = e.errorMsg;
          debugPrint('[voice] error: ${e.errorMsg}');
        },
        onStatus: (s) => debugPrint('[voice] status: $s'),
        options: options,
      );
      _nativeInitWorked = ok;
      if (!ok) _lastError ??= 'not-supported';
      return ok;
    } catch (e) {
      debugPrint('[voice] init: $e');
      _nativeInitWorked = false;
      _lastError = 'init-failed';
      return false;
    }
  }

  static bool get isListening {
    if (kIsWeb) return _webListening;
    return _speech.isListening;
  }

  static bool _webListening = false;

  static Future<void> stop() async {
    _webListening = false;
    if (kIsWeb) {
      await ngmyVoiceEngineStop();
      return;
    }
    if (_speech.isListening) await _speech.stop();
  }

  static Future<bool> listen({required void Function(String text, {bool isFinal}) onText}) async {
    _lastError = null;
    ngmyVoiceEngineClearError();

    if (kIsWeb) {
      final supported = await ngmyVoiceEngineSupported();
      if (!supported) {
        _lastError = 'not-supported';
        return false;
      }
      _webListening = true;
      final started = await ngmyVoiceEngineListen(onText: onText);
      if (!started) {
        _webListening = false;
        _lastError ??= ngmyVoiceEngineLastError ?? 'listen-failed';
      }
      return started;
    }

    final ok = await _ensureNativeReady();
    if (!ok) return false;
    if (_speech.isListening) await _speech.stop();

    try {
      await _speech.listen(
        onResult: (result) => onText(result.recognizedWords, isFinal: result.finalResult),
        listenFor: const Duration(seconds: 60),
        pauseFor: const Duration(seconds: 4),
        listenOptions: stt.SpeechListenOptions(
          partialResults: true,
          cancelOnError: false,
          listenMode: stt.ListenMode.dictation,
        ),
      );
      await Future<void>.delayed(const Duration(milliseconds: 350));
      final err = _speech.lastError;
      if (err != null) {
        _lastError = err.errorMsg;
        return false;
      }
      return _speech.isListening || _speech.lastStatus == stt.SpeechToText.listeningStatus;
    } catch (e) {
      debugPrint('[voice] listen: $e');
      _lastError = 'listen-failed';
      return false;
    }
  }

  static String userMessageForError(String? code) {
    final c = (code ?? '').toLowerCase();
    if (c.contains('not-allowed') || c.contains('permission')) {
      return 'Microphone blocked. On iPhone: Settings → Safari → Microphone → Allow, or tap “aA” in the address bar → Website Settings → Microphone → Allow, then reload NGMY.';
    }
    if (c.contains('not-supported') || c.contains('speech_not_supported')) {
      return 'Voice input needs a browser with speech recognition. On iPhone, use Safari and allow microphone for this site.';
    }
    if (c.contains('network')) {
      return 'Voice needs internet. Check your connection and try again.';
    }
    if (c.contains('no-speech') || c.contains('no_match')) {
      return 'No speech heard. Tap the mic and speak clearly.';
    }
    if (c.contains('aborted')) {
      return 'Voice input stopped.';
    }
    return 'Could not start voice. Allow microphone for NGMY in browser settings, reload, and try again.';
  }
}

class NgmyVoiceMicButton extends StatefulWidget {
  final TextEditingController controller;
  final Color? color;

  const NgmyVoiceMicButton({super.key, required this.controller, this.color});

  @override
  State<NgmyVoiceMicButton> createState() => _NgmyVoiceMicButtonState();
}

class _NgmyVoiceMicButtonState extends State<NgmyVoiceMicButton> {
  bool _listening = false;
  String _base = '';

  Future<void> _toggle() async {
    if (_listening) {
      await NgmyVoiceInput.stop();
      if (mounted) setState(() => _listening = false);
      return;
    }
    _base = widget.controller.text.trim();
    final started = await NgmyVoiceInput.listen(onText: (text, {bool isFinal = false}) {
      if (!mounted) return;
      final spoken = text.trim();
      if (spoken.isEmpty) return;
      widget.controller.text = _base.isEmpty ? spoken : '$_base $spoken';
      widget.controller.selection = TextSelection.collapsed(offset: widget.controller.text.length);
      if (isFinal && mounted) setState(() => _listening = false);
    });
    if (mounted) setState(() => _listening = started);
    if (!started && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(NgmyVoiceInput.userMessageForError(NgmyVoiceInput.lastError)),
          duration: const Duration(seconds: 6),
        ),
      );
    }
  }

  @override
  void dispose() {
    if (_listening) NgmyVoiceInput.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.color ?? Theme.of(context).colorScheme.primary;
    return IconButton(
      tooltip: _listening ? 'Stop recording' : 'Voice input',
      onPressed: _toggle,
      icon: Icon(_listening ? Icons.stop_circle_rounded : Icons.mic_rounded, color: _listening ? Colors.red : c),
    );
  }
}
