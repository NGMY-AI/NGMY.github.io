import 'dart:convert';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// ElevenLabs text-to-speech for translated chat messages (English / Swahili).
class NgmyElevenLabsTts {
  NgmyElevenLabsTts._();

  static const _prefsKey = 'ngmy_elevenlabs_api_key_v1';
  static const _voiceId = '21m00Tcm4TlvDq8ikWAM'; // Rachel — multilingual
  static const _models = ['eleven_turbo_v2_5', 'eleven_flash_v2_5', 'eleven_multilingual_v2'];

  static final AudioPlayer _player = AudioPlayer();
  static String? _activeKey;
  static bool _webUnlocked = false;

  static String sanitizeKey(String raw) => raw.trim().replaceAll(RegExp(r'[\r\n\t]'), '');

  static String voiceForLang(String langCode) => _voiceId;

  static Future<void> persistLocalKey(String key) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final cleaned = sanitizeKey(key);
      if (cleaned.isEmpty) {
        await prefs.remove(_prefsKey);
      } else {
        await prefs.setString(_prefsKey, cleaned);
      }
    } catch (e) {
      debugPrint('[elevenlabs] local key save: $e');
    }
  }

  static Future<String> resolveApiKey({dynamic config}) async {
    final fromConfig = config != null ? sanitizeKey((config as dynamic).elevenLabsApiKey?.toString() ?? '') : '';
    if (fromConfig.isNotEmpty) return fromConfig;
    try {
      final prefs = await SharedPreferences.getInstance();
      return sanitizeKey(prefs.getString(_prefsKey) ?? '');
    } catch (_) {
      return '';
    }
  }

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

    final cleanedKey = sanitizeKey(apiKey);
    if (cleanedKey.isEmpty) {
      return (ok: false, error: 'ElevenLabs key missing. Admin → NGMY AI → paste key → Save AI Settings.');
    }

    if (isSpeaking(key)) {
      await stop();
      return (ok: true, error: null);
    }

    await stop();

    if (kIsWeb && !_webUnlocked) {
      _webUnlocked = true;
    }

    final fetched = await _fetchSpeechBytes(apiKey: cleanedKey, text: trimmed, langCode: langCode);
    if (fetched.bytes == null || fetched.bytes!.isEmpty) {
      return (ok: false, error: fetched.error ?? 'Could not load speech audio. Check ElevenLabs key and try again.');
    }

    try {
      _activeKey = key;
      await _player.play(BytesSource(fetched.bytes!, mimeType: 'audio/mpeg'));
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

  static Future<({Uint8List? bytes, String? error})> _fetchSpeechBytes({
    required String apiKey,
    required String text,
    required String langCode,
  }) async {
    String? lastError;

    if (!kIsWeb) {
      for (final model in _models) {
        final direct = await _fetchDirect(apiKey: apiKey, text: text, modelId: model);
        if (direct.bytes != null) return direct;
        lastError = direct.error ?? lastError;
      }
    }

    for (final model in _models) {
      final viaAiChat = await _fetchViaSupabaseFunction(
        functionName: 'ngmy-ai-chat',
        apiKey: apiKey,
        text: text,
        langCode: langCode,
        modelId: model,
        action: 'elevenlabsTts',
      );
      if (viaAiChat.bytes != null) return viaAiChat;
      lastError = viaAiChat.error ?? lastError;
    }

    for (final model in _models) {
      final viaTts = await _fetchViaSupabaseFunction(
        functionName: 'ngmy-elevenlabs-tts',
        apiKey: apiKey,
        text: text,
        langCode: langCode,
        modelId: model,
      );
      if (viaTts.bytes != null) return viaTts;
      lastError = viaTts.error ?? lastError;
    }

    if (kIsWeb && (lastError == null || lastError.contains('404'))) {
      lastError =
          'Voice proxy needs updating. Admin: redeploy Supabase function ngmy-ai-chat (see supabase/functions/ngmy-ai-chat).';
    }

    return (bytes: null, error: _friendlyError(lastError));
  }

  static String? _friendlyError(String? raw) {
    if (raw == null || raw.trim().isEmpty) return null;
    final lower = raw.toLowerCase();
    if (lower.contains('invalid_api_key') || lower.contains('invalid api key')) {
      return 'ElevenLabs rejected this API key. Copy it again from elevenlabs.io → Profile → API Keys, then Save AI Settings.';
    }
    if (lower.contains('quota_exceeded') || lower.contains('insufficient')) {
      return 'ElevenLabs character quota used up. Add credits in your ElevenLabs account.';
    }
    if (lower.contains('prompt are required') || lower.contains('voice proxy not deployed')) {
      return 'Voice server needs updating. Supabase Dashboard → Edge Functions → redeploy ngmy-ai-chat, then try again.';
    }
    if (lower.contains('401')) {
      return 'ElevenLabs auth failed (401). Check the API key and that Text-to-Speech is enabled for that key.';
    }
    if (raw.length > 180) return '${raw.substring(0, 177)}…';
    return raw;
  }

  static String? _parseElevenLabsError(String body, int status) {
    try {
      final data = jsonDecode(body);
      if (data is Map) {
        final detail = data['detail'];
        if (detail is Map) {
          final msg = detail['message']?.toString();
          final statusCode = detail['status']?.toString();
          if (msg != null && msg.isNotEmpty) {
            return statusCode != null ? '$statusCode: $msg' : msg;
          }
        }
        final err = data['error']?.toString();
        if (err != null && err.isNotEmpty) return err;
      }
    } catch (_) {}
    if (body.trim().isNotEmpty) return 'HTTP $status: ${body.length > 120 ? body.substring(0, 120) : body}';
    return 'HTTP $status';
  }

  static Future<({Uint8List? bytes, String? error})> _fetchDirect({
    required String apiKey,
    required String text,
    required String modelId,
  }) async {
    try {
      final url = Uri.parse('https://api.elevenlabs.io/v1/text-to-speech/$_voiceId');
      final res = await http
          .post(
            url,
            headers: {
              'accept': 'audio/mpeg',
              'content-type': 'application/json',
              'xi-api-key': apiKey,
            },
            body: jsonEncode({'text': text, 'model_id': modelId}),
          )
          .timeout(const Duration(seconds: 45));
      if (res.statusCode == 200 && res.bodyBytes.isNotEmpty) return (bytes: res.bodyBytes, error: null);
      final err = _parseElevenLabsError(res.body, res.statusCode);
      debugPrint('[elevenlabs] direct $modelId: $err');
      return (bytes: null, error: err);
    } catch (e) {
      debugPrint('[elevenlabs] direct $modelId: $e');
      return (bytes: null, error: e.toString());
    }
  }

  static Future<({Uint8List? bytes, String? error})> _fetchViaSupabaseFunction({
    required String functionName,
    required String apiKey,
    required String text,
    required String langCode,
    required String modelId,
    String action = 'tts',
  }) async {
    try {
      final client = Supabase.instance.client;
      final body = {
        'action': action,
        'apiKey': apiKey,
        'text': text,
        'langCode': langCode,
        'voiceId': voiceForLang(langCode),
        'modelId': modelId,
      };

      try {
        final res = await client.functions.invoke(functionName, body: body);
        final parsed = _parseProxyResponse(res.status, res.data);
        if (parsed.bytes != null) return parsed;
        if (res.status != 404) return parsed;
      } catch (e) {
        debugPrint('[elevenlabs] $functionName invoke: $e');
      }

      final restUrl = client.rest.url;
      final base = restUrl.contains('/rest/v1') ? restUrl.substring(0, restUrl.indexOf('/rest/v1')) : restUrl;
      final url = '$base/functions/v1/$functionName';
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
      return _parseProxyHttp(response.statusCode, response.body);
    } catch (e) {
      debugPrint('[elevenlabs] $functionName fetch: $e');
      return (bytes: null, error: e.toString());
    }
  }

  static ({Uint8List? bytes, String? error}) _parseProxyResponse(int status, dynamic data) {
    if (status == 200 && data is Map) {
      final b64 = data['audioBase64']?.toString();
      if (b64 != null && b64.isNotEmpty) {
        try {
          return (bytes: base64Decode(b64), error: null);
        } catch (e) {
          return (bytes: null, error: 'Bad audio from voice proxy: $e');
        }
      }
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (bytes: null, error: err);
    }
    if (status == 404) return (bytes: null, error: 'Voice proxy not deployed (404).');
    return (bytes: null, error: status > 0 ? 'Voice proxy HTTP $status' : null);
  }

  static ({Uint8List? bytes, String? error}) _parseProxyHttp(int status, String body) {
    if (status == 200) {
      try {
        final data = jsonDecode(body);
        return _parseProxyResponse(status, data);
      } catch (e) {
        return (bytes: null, error: 'Voice proxy bad JSON: $e');
      }
    }
    if (status == 404) return (bytes: null, error: 'Voice proxy not deployed (404).');
    try {
      final data = jsonDecode(body);
      if (data is Map && data['error'] != null) {
        return (bytes: null, error: data['error'].toString());
      }
    } catch (_) {}
    return (bytes: null, error: 'Voice proxy HTTP $status');
  }
}
