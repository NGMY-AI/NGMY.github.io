import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;

class NgmyVoiceInput {
  static final stt.SpeechToText _speech = stt.SpeechToText();
  static bool _initialized = false;

  static Future<bool> ensureReady() async {
    if (_initialized) return _speech.isAvailable;
    _initialized = true;
    try {
      return await _speech.initialize(onStatus: (_) {}, onError: (e) => debugPrint('[voice] $e'));
    } catch (e) {
      debugPrint('[voice] init: $e');
      return false;
    }
  }

  static bool get isListening => _speech.isListening;

  static Future<void> stop() async {
    if (_speech.isListening) await _speech.stop();
  }

  static Future<bool> listen({required void Function(String text, {bool isFinal}) onText}) async {
    final ok = await ensureReady();
    if (!ok) return false;
    if (_speech.isListening) await _speech.stop();
    return _speech.listen(
      onResult: (result) => onText(result.recognizedWords, isFinal: result.finalResult),
      listenMode: stt.ListenMode.confirmation,
      partialResults: true,
      cancelOnError: true,
    ).then((v) => v == true);
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
        const SnackBar(content: Text('Microphone not available. Allow mic access in browser settings.')),
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
