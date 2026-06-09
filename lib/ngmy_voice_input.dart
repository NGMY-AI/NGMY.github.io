import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;

import 'ngmy_voice_mic_permission_stub.dart'
    if (dart.library.html) 'ngmy_voice_mic_permission_web.dart';

class NgmyVoiceInput {
  static final stt.SpeechToText _speech = stt.SpeechToText();
  static bool _initWorked = false;
  static String? _lastError;

  static String? get lastError => _lastError;

  static Future<bool> ensureReady() async {
    if (_initWorked) return true;
    try {
      final options = kIsWeb ? <stt.SpeechConfigOption>[stt.SpeechToText.webDoNotAggregate] : null;
      final ok = await _speech.initialize(
        debugLogging: kDebugMode,
        onError: (e) {
          _lastError = e.errorMsg;
          debugPrint('[voice] error: ${e.errorMsg}');
        },
        onStatus: (s) => debugPrint('[voice] status: $s'),
        options: options,
      );
      _initWorked = ok;
      if (!ok) _lastError ??= 'not-supported';
      return ok;
    } catch (e) {
      debugPrint('[voice] init: $e');
      _initWorked = false;
      _lastError = 'init-failed';
      return false;
    }
  }

  static bool get isListening => _speech.isListening;

  static Future<void> stop() async {
    if (_speech.isListening) await _speech.stop();
  }

  static Future<bool> listen({required void Function(String text, {bool isFinal}) onText}) async {
    _lastError = null;

    final micOk = await ngmyRequestMicPermission();
    if (!micOk) {
      _lastError = 'not-allowed';
      return false;
    }

    final ok = await ensureReady();
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

      // listen() returns void — wait for the engine to start or report an error.
      await Future<void>.delayed(const Duration(milliseconds: 350));

      final err = _speech.lastError;
      if (err != null) {
        _lastError = err.errorMsg;
        return false;
      }

      return _speech.isListening ||
          _speech.lastStatus == stt.SpeechToText.listeningStatus ||
          _speech.lastStatus == 'listening';
    } catch (e) {
      debugPrint('[voice] listen: $e');
      _lastError = 'listen-failed';
      return false;
    }
  }

  static String userMessageForError(String? code) {
    switch (code) {
      case 'not-allowed':
      case 'error_permission':
      case 'permission':
        return 'Microphone blocked. Tap the lock icon in your browser address bar, allow Microphone for this site, then reload.';
      case 'not-supported':
      case 'speech_not_supported':
      case 'not supported':
        return 'Voice input is not supported in this browser. Try Chrome or Edge on desktop or Android.';
      case 'network':
      case 'error_network':
        return 'Voice needs an internet connection. Check your network and try again.';
      case 'no-speech':
      case 'error_no_match':
        return 'No speech detected. Tap the mic and speak clearly.';
      default:
        return 'Could not start voice input. Use Chrome/Edge, allow microphone access, and reload the page.';
    }
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
      widget.controller.text = _base.isEmpty ? text : '$_base $text';
      widget.controller.selection = TextSelection.collapsed(offset: widget.controller.text.length);
      if (isFinal && mounted) setState(() => _listening = false);
    });
    if (mounted) setState(() => _listening = started);
    if (!started && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(NgmyVoiceInput.userMessageForError(NgmyVoiceInput.lastError)),
          duration: const Duration(seconds: 5),
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
