import 'package:flutter_tts/flutter_tts.dart';

/// Local, on-device text-to-speech — no network calls, no API key, no cloud
/// service. Reads an English word aloud (learners here are Swahili speakers
/// learning English) using the browser/OS's own built-in voice engine (Web
/// Speech API on web, native TTS on Android/iOS).
class NgmyLocalTts {
  NgmyLocalTts._();

  static final FlutterTts _tts = FlutterTts();
  static bool _ready = false;
  static String? _activeKey;

  /// Names/labels that tend to be natural-sounding, non-robotic English
  /// voices on Android/iOS/macOS. Best-effort only — getVoices/setVoice
  /// aren't supported on web, so this is a no-op there.
  static const _preferredVoiceHints = [
    'samantha', // iOS/macOS
    'zira', // Windows-style, but also appears via some Android engines
    'aria',
    'jenny',
    'karen',
    'moira',
    'tessa',
    'victoria',
    'susan',
    'female',
  ];

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
      // Slower and clear — this is for language learners, not fast reading.
      await _tts.setSpeechRate(0.42);
    } catch (_) {}
    try {
      // A slightly higher pitch reads as a younger, brighter voice on most engines.
      await _tts.setPitch(1.15);
    } catch (_) {}
    try {
      await _tts.setLanguage('en-US');
    } catch (_) {}
    await _tryPickNaturalVoice();
  }

  /// Best-effort: pick a natural-sounding English voice by name where the
  /// platform exposes a voice list (Android/iOS/macOS only — silently
  /// skipped on web and anywhere the call isn't supported).
  static Future<void> _tryPickNaturalVoice() async {
    try {
      final dynamic voices = await _tts.getVoices;
      if (voices is! List) return;
      for (final hint in _preferredVoiceHints) {
        for (final v in voices) {
          if (v is! Map) continue;
          final name = v['name']?.toString().toLowerCase() ?? '';
          final locale = v['locale']?.toString().toLowerCase() ?? '';
          if (!locale.startsWith('en')) continue;
          if (name.contains(hint)) {
            final voiceName = v['name']?.toString();
            final voiceLocale = v['locale']?.toString();
            if (voiceName != null && voiceLocale != null) {
              await _tts.setVoice({'name': voiceName, 'locale': voiceLocale});
            }
            return;
          }
        }
      }
    } catch (_) {}
  }

  static bool isSpeaking(String key) => _activeKey == key;

  static Future<void> stop() async {
    _activeKey = null;
    try {
      await _tts.stop();
    } catch (_) {}
  }

  /// Speaks [text] aloud on-device in English.
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
