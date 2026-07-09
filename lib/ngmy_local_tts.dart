import 'package:flutter_tts/flutter_tts.dart';

/// Local, on-device text-to-speech — no network calls, no API key, no cloud
/// service. Reads a word aloud using the browser/OS's own built-in voice
/// engine (Web Speech API on web, native TTS on Android/iOS).
class NgmyLocalTts {
  NgmyLocalTts._();

  static final FlutterTts _tts = FlutterTts();
  static bool _ready = false;
  static String? _activeKey;

  static Future<void> _ensureReady() async {
    if (_ready) return;
    _ready = true;
    try {
      await _tts.awaitSpeakCompletion(true);
    } catch (_) {}
    try {
      await _tts.setVolume(1.0);
    } catch (_) {}
    try {
      await _tts.setSpeechRate(0.42);
    } catch (_) {}
    try {
      // A slightly higher pitch reads as a younger, brighter voice on most engines.
      await _tts.setPitch(1.15);
    } catch (_) {}
  }

  static bool isSpeaking(String key) => _activeKey == key;

  static Future<void> stop() async {
    _activeKey = null;
    try {
      await _tts.stop();
    } catch (_) {}
  }

  /// Speaks [text] aloud on-device. Tries a Swahili voice first for correct
  /// pronunciation; falls back to the device's default voice if none is
  /// installed (still reads the word, just with a different accent).
  static Future<({bool ok, String? error})> speak({
    required String text,
    required String key,
  }) async {
    final trimmed = text.trim();
    if (trimmed.isEmpty) return (ok: false, error: 'Nothing to read aloud.');

    if (isSpeaking(key)) {
      await stop();
      return (ok: true, error: null);
    }

    await stop();
    await _ensureReady();

    try {
      final available = await _tts.isLanguageAvailable('sw-KE');
      await _tts.setLanguage(available == true ? 'sw-KE' : 'en-US');
    } catch (_) {}

    _activeKey = key;
    try {
      await _tts.speak(trimmed);
      return (ok: true, error: null);
    } catch (e) {
      return (ok: false, error: 'Could not play voice on this device.');
    } finally {
      if (_activeKey == key) _activeKey = null;
    }
  }
}
