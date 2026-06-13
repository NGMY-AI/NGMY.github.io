import 'dart:convert';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

/// ElevenLabs text-to-speech for translated chat messages (English / Swahili).
class NgmyElevenLabsTts {
  NgmyElevenLabsTts._();

  static const _modelId = 'eleven_multilingual_v2';
  static const _voiceEn = '21m00Tcm4TlvDq8ikWAM'; // Rachel — multilingual
  static const _voiceSw = '21m00Tcm4TlvDq8ikWAM';

  static final AudioPlayer _player = AudioPlayer();
  static String? _activeKey;
  static bool _webUnlocked = false;

  static String voiceForLang(String langCode) => langCode == 'sw' ? _voiceSw : _voiceEn;

  static bool isSpeaking(String key) => _activeKey == key && _player.state == PlayerState.playing;

  static Future<void> stop() async {
    _activeKey = null;
    await _player.stop();
  }

  static Future<({bool ok, String? error})> speak({
    required String apiKey,
    required String text,
    required String langCode,
    required String key,
  }) async {
    final trimmed = text.trim();
    if (trimmed.isEmpty) return (ok: false, error: 'Nothing to read aloud.');
    if (apiKey.trim().isEmpty) {
      return (ok: false, error: 'Voice is not set up. Admin → Management Menus → NGMY AI → ElevenLabs key.');
    }

    if (isSpeaking(key)) {
      await stop();
      return (ok: true, error: null);
    }

    await stop();

    if (kIsWeb && !_webUnlocked) {
      try {
        await _player.setVolume(0);
        await _player.play(BytesSource(Uint8List(0), mimeType: 'audio/mpeg'));
        await _player.stop();
        await _player.setVolume(1);
        _webUnlocked = true;
      } catch (_) {
        _webUnlocked = true;
      }
    }

    final bytes = await _fetchSpeechBytes(apiKey: apiKey.trim(), text: trimmed, langCode: langCode);
    if (bytes == null || bytes.isEmpty) {
      return (ok: false, error: 'Could not load speech audio. Check ElevenLabs key and try again.');
    }

    try {
      _activeKey = key;
      await _player.play(BytesSource(bytes, mimeType: 'audio/mpeg'));
      _player.onPlayerComplete.first.then((_) {
        if (_activeKey == key) _activeKey = null;
      });
      return (ok: true, error: null);
    } catch (e) {
      _activeKey = null;
      debugPrint('[elevenlabs] play failed: $e');
      return (ok: false, error: 'Could not play audio on this device.');
    }
  }

  static Future<Uint8List?> _fetchSpeechBytes({
    required String apiKey,
    required String text,
    required String langCode,
  }) async {
    if (kIsWeb) {
      final viaProxy = await _fetchViaSupabaseProxy(apiKey: apiKey, text: text, langCode: langCode);
      if (viaProxy != null) return viaProxy;
    }
    return _fetchDirect(apiKey: apiKey, text: text, langCode: langCode);
  }

  static Future<Uint8List?> _fetchDirect({
    required String apiKey,
    required String text,
    required String langCode,
  }) async {
    try {
      final voiceId = voiceForLang(langCode);
      final url = Uri.parse('https://api.elevenlabs.io/v1/text-to-speech/$voiceId');
      final res = await http
          .post(
            url,
            headers: {
              'accept': 'audio/mpeg',
              'content-type': 'application/json',
              'xi-api-key': apiKey,
            },
            body: jsonEncode({
              'text': text,
              'model_id': _modelId,
            }),
          )
          .timeout(const Duration(seconds: 45));
      if (res.statusCode == 200 && res.bodyBytes.isNotEmpty) return res.bodyBytes;
      debugPrint('[elevenlabs] HTTP ${res.statusCode}: ${res.body.length > 200 ? res.body.substring(0, 200) : res.body}');
    } catch (e) {
      debugPrint('[elevenlabs] direct fetch: $e');
    }
    return null;
  }

  static Future<Uint8List?> _fetchViaSupabaseProxy({
    required String apiKey,
    required String text,
    required String langCode,
  }) async {
    try {
      final client = Supabase.instance.client;
      final body = {
        'apiKey': apiKey,
        'text': text,
        'langCode': langCode,
        'voiceId': voiceForLang(langCode),
        'modelId': _modelId,
      };

      try {
        final res = await client.functions.invoke('ngmy-elevenlabs-tts', body: body);
        if (res.status == 200 && res.data is Map) {
          final b64 = res.data['audioBase64']?.toString();
          if (b64 != null && b64.isNotEmpty) return base64Decode(b64);
          final err = res.data['error']?.toString();
          if (err != null && err.isNotEmpty) debugPrint('[elevenlabs] proxy: $err');
        } else if (res.status != 404) {
          debugPrint('[elevenlabs] proxy HTTP ${res.status}');
        }
      } catch (e) {
        debugPrint('[elevenlabs] functions.invoke: $e');
      }

      final restUrl = client.rest.url;
      final base = restUrl.contains('/rest/v1') ? restUrl.substring(0, restUrl.indexOf('/rest/v1')) : restUrl;
      final url = '$base/functions/v1/ngmy-elevenlabs-tts';
      final session = client.auth.currentSession;
      final anonKey = client.headers['apikey'] ?? client.headers['Apikey'] ?? '';
      final token = session?.accessToken ?? anonKey;
      final response = await http
          .post(
            Uri.parse(url),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer $token',
              if (anonKey.isNotEmpty) 'apikey': anonKey,
            },
            body: jsonEncode(body),
          )
          .timeout(const Duration(seconds: 45));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final b64 = data['audioBase64']?.toString();
        if (b64 != null && b64.isNotEmpty) return base64Decode(b64);
      }
    } catch (e) {
      debugPrint('[elevenlabs] proxy fetch: $e');
    }
    return null;
  }
}
