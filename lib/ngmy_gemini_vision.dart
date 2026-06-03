import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_ai_memory.dart';

String _visionApiError(Object? err, {String? body}) {
  if (body != null && body.trim().isNotEmpty) {
    try {
      final decoded = jsonDecode(body);
      if (decoded is Map) {
        final error = decoded['error'];
        if (error is Map) {
          final msg = error['message']?.toString();
          if (msg != null && msg.isNotEmpty) return msg;
        }
      }
    } catch (_) {
      if (body.length < 280) return body;
    }
  }
  final text = err?.toString() ?? '';
  if (text.contains('XMLHttpRequest') || text.contains('Failed to fetch')) {
    return 'Network blocked the AI request. Reload the app or deploy the Supabase AI proxy.';
  }
  if (text.length > 200) return '${text.substring(0, 200)}…';
  return text.isEmpty ? 'Unknown AI error' : text;
}

const _geminiVisionModels = [
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
];

String? _extractGeminiText(Map<String, dynamic> data) {
  final candidates = data['candidates'];
  if (candidates is! List || candidates.isEmpty) return null;
  final parts = candidates[0]['content']?['parts'];
  if (parts is! List || parts.isEmpty) return null;
  final text = parts[0]['text']?.toString();
  if (text == null || text.trim().isEmpty) return null;
  return NgmyAiMemoryStore.sanitizeHelperReply(text.trim());
}

Future<({String? text, String? error})> _callGeminiVisionDirect({
  required String apiKey,
  required String prompt,
  required List<({Uint8List bytes, String mimeType})> images,
}) async {
  final key = apiKey.trim();
  if (key.isEmpty) return (text: null, error: 'No API key configured.');

  final parts = <Map<String, dynamic>>[];
  for (final img in images) {
    parts.add({
      'inline_data': {
        'mime_type': img.mimeType.trim().isEmpty ? 'image/jpeg' : img.mimeType,
        'data': base64Encode(img.bytes),
      },
    });
  }
  parts.add({'text': prompt});

  Object? lastError;
  String? lastBody;

  for (final model in _geminiVisionModels) {
    try {
      final url = Uri.parse(
        'https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent?key=${Uri.encodeQueryComponent(key)}',
      );
      final response = await http
          .post(
            url,
            headers: {'Content-Type': 'application/json'},
            body: jsonEncode({
              'contents': [
                {'parts': parts},
              ],
            }),
          )
          .timeout(const Duration(seconds: 120));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body) as Map<String, dynamic>;
        final text = _extractGeminiText(data);
        if (text != null) return (text: text, error: null);
        lastError = 'Empty AI response';
      } else {
        lastBody = response.body;
        lastError = 'HTTP ${response.statusCode}';
      }
    } catch (e) {
      lastError = e;
    }
  }
  return (text: null, error: _visionApiError(lastError, body: lastBody));
}

/// Supabase Edge Function (same as NGMY Helper) — required for web/PWA CORS.
Future<({String? text, String? error})> _callGeminiVisionViaProxy({
  required String apiKey,
  required String prompt,
  required List<({Uint8List bytes, String mimeType})> images,
}) async {
  try {
    final client = Supabase.instance.client;
    final imagePayload = images
        .map(
          (img) => {
            'mimeType': img.mimeType.trim().isEmpty ? 'image/jpeg' : img.mimeType,
            'data': base64Encode(img.bytes),
          },
        )
        .toList();
    final body = <String, dynamic>{
      'provider': 'gemini',
      'apiKey': apiKey.trim(),
      'prompt': prompt,
      'images': imagePayload,
    };

    try {
      final res = await client.functions.invoke('ngmy-ai-chat', body: body);
      if (res.status == 200) {
        final data = res.data;
        if (data is Map) {
          final text = data['text']?.toString();
          if (text != null && text.trim().isNotEmpty) {
            return (text: NgmyAiMemoryStore.sanitizeHelperReply(text.trim()), error: null);
          }
          final err = data['error']?.toString();
          if (err != null && err.isNotEmpty) return (text: null, error: err);
        }
      } else if (res.status == 404) {
        return (
          text: null,
          error: 'AI proxy not deployed. Deploy ngmy-ai-chat in Supabase, then try again.',
        );
      } else {
        return (text: null, error: 'AI proxy HTTP ${res.status}');
      }
    } catch (e) {
      debugPrint('[gemini vision] functions.invoke: $e');
    }

    final restUrl = client.rest.url;
    final base = restUrl.contains('/rest/v1')
        ? restUrl.substring(0, restUrl.indexOf('/rest/v1'))
        : restUrl;
    final url = '$base/functions/v1/ngmy-ai-chat';
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
        .timeout(const Duration(seconds: 120));
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      final text = data['text']?.toString();
      if (text != null && text.trim().isNotEmpty) {
        return (text: NgmyAiMemoryStore.sanitizeHelperReply(text.trim()), error: null);
      }
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (text: null, error: err);
    }
    if (response.statusCode == 404) {
      return (
        text: null,
        error: 'AI proxy not deployed. Deploy ngmy-ai-chat in Supabase Dashboard.',
      );
    }
    return (text: null, error: _visionApiError('HTTP ${response.statusCode}', body: response.body));
  } catch (e) {
    debugPrint('[gemini vision] proxy error: $e');
    return (text: null, error: _visionApiError(e));
  }
}

/// Gemini vision — summarize documents / images (Document Scanner).
Future<String?> geminiAnalyzeImage({
  required String apiKey,
  required Uint8List imageBytes,
  required String mimeType,
  required String prompt,
}) async {
  final result = await geminiAnalyzeImages(
    apiKey: apiKey,
    images: [(bytes: imageBytes, mimeType: mimeType)],
    prompt: prompt,
  );
  return result.text;
}

/// Analyze up to two document images in one request.
Future<({String? text, String? error})> geminiAnalyzeImages({
  required String apiKey,
  required List<({Uint8List bytes, String mimeType})> images,
  required String prompt,
}) async {
  if (images.isEmpty) return (text: null, error: 'No images to scan.');
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) return (text: null, error: 'No API key configured.');

  if (creds.provider != NgmyAiProviderKind.gemini) {
    return (
      text: null,
      error: 'Document Scanner needs a Google Gemini API key (AIza… or gemini: prefix in Management Hub).',
    );
  }

  Future<({String? text, String? error})> runDirect() => _callGeminiVisionDirect(
        apiKey: creds.apiKey,
        prompt: prompt,
        images: images,
      );

  if (kIsWeb) {
    final proxied = await _callGeminiVisionViaProxy(
      apiKey: creds.apiKey,
      prompt: prompt,
      images: images,
    );
    if (proxied.text != null) return proxied;
    final direct = await runDirect();
    if (direct.text != null) return direct;
    return (
      text: null,
      error: proxied.error ?? direct.error ?? 'Document scan failed on web.',
    );
  }

  final direct = await runDirect();
  if (direct.text != null) return direct;
  return (text: null, error: direct.error ?? 'Could not reach Gemini.');
}

String ngmyDocumentScanPrompt({String userQuestion = '', int pageCount = 1, String languageCode = 'en'}) {
  final q = userQuestion.trim();
  final ask = q.isEmpty
      ? 'Summarize this document and list the most important details.'
      : q;
  final pagesNote = pageCount > 1
      ? 'The user uploaded $pageCount document pages (images). Read and combine BOTH pages — do not ignore the second page.\n'
      : 'The user photographed or uploaded a document image.\n';
  final langLine = languageCode == 'sw'
      ? 'Write your entire response in Swahili (Kiswahili). Use simple, clear language.'
      : 'Write your entire response in English.';
  return 'You are a document analysis assistant. $pagesNote'
      '$langLine\n'
      'Provide:\n'
      '1. A clear summary (2–5 sentences)\n'
      '2. **Key details** as bullet points (names, dates, amounts, deadlines, addresses, signatures, action items)\n'
      'If text is unreadable, say so briefly and suggest retaking the photo with better lighting.\n'
      'Answer directly — do not introduce yourself as "NGMY AI".\n\n'
      'User request: $ask';
}
