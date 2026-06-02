import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_ai_memory.dart';

/// Supported AI backends for NGMY Helper (auto-detected from key shape or prefix).
enum NgmyAiProviderKind {
  gemini,
  openai,
  anthropic,
  openaiCompatible,
}

class NgmyAiCredentials {
  final NgmyAiProviderKind provider;
  final String apiKey;
  final String? openAiBaseUrl;

  const NgmyAiCredentials({
    required this.provider,
    required this.apiKey,
    this.openAiBaseUrl,
  });
}

/// Parses admin key: optional `gemini:`, `openai:`, `anthropic:`, or
/// `compat:https://host/v1|sk-...` prefix.
NgmyAiCredentials ngmyParseAiCredentials(String raw) {
  var key = raw.trim();
  if (key.isEmpty) {
    return const NgmyAiCredentials(provider: NgmyAiProviderKind.gemini, apiKey: '');
  }

  final lower = key.toLowerCase();
  for (final prefix in ['gemini:', 'google:', 'openai:', 'anthropic:', 'claude:', 'compat:']) {
    if (lower.startsWith(prefix)) {
      final kind = switch (prefix) {
        'gemini:' || 'google:' => NgmyAiProviderKind.gemini,
        'openai:' => NgmyAiProviderKind.openai,
        'anthropic:' || 'claude:' => NgmyAiProviderKind.anthropic,
        _ => NgmyAiProviderKind.openaiCompatible,
      };
      key = key.substring(prefix.length).trim();
      if (kind == NgmyAiProviderKind.openaiCompatible && key.contains('|')) {
        final pipe = key.indexOf('|');
        final base = key.substring(0, pipe).trim();
        final token = key.substring(pipe + 1).trim();
        return NgmyAiCredentials(
          provider: kind,
          apiKey: token,
          openAiBaseUrl: base.endsWith('/') ? base.substring(0, base.length - 1) : base,
        );
      }
      return NgmyAiCredentials(provider: kind, apiKey: key);
    }
  }

  if (key.startsWith('sk-ant-')) {
    return NgmyAiCredentials(provider: NgmyAiProviderKind.anthropic, apiKey: key);
  }
  if (key.startsWith('sk-') || key.startsWith('pk-')) {
    return NgmyAiCredentials(provider: NgmyAiProviderKind.openai, apiKey: key);
  }
  if (key.startsWith('AIza')) {
    return NgmyAiCredentials(provider: NgmyAiProviderKind.gemini, apiKey: key);
  }
  // Unknown format — try Gemini first, then OpenAI-compatible fallbacks in generate.
  return NgmyAiCredentials(provider: NgmyAiProviderKind.gemini, apiKey: key);
}

String ngmyAiProviderLabel(NgmyAiProviderKind kind) => switch (kind) {
      NgmyAiProviderKind.gemini => 'Google Gemini',
      NgmyAiProviderKind.openai => 'OpenAI',
      NgmyAiProviderKind.anthropic => 'Anthropic Claude',
      NgmyAiProviderKind.openaiCompatible => 'OpenAI-compatible API',
    };

String _extractApiErrorMessage(Object? err, {String? body}) {
  if (body != null && body.trim().isNotEmpty) {
    try {
      final decoded = jsonDecode(body);
      if (decoded is Map) {
        final error = decoded['error'];
        if (error is Map) {
          final msg = error['message']?.toString();
          if (msg != null && msg.isNotEmpty) return msg;
        }
        final msg = decoded['message']?.toString();
        if (msg != null && msg.isNotEmpty) return msg;
      }
    } catch (_) {
      if (body.length < 280) return body;
    }
  }
  final text = err?.toString() ?? '';
  if (text.contains('XMLHttpRequest') || text.contains('Failed to fetch')) {
    return 'Network or browser security blocked the AI request. Save the API key in Admin → Management Hub, then reload. On web, ensure the Supabase AI proxy function is deployed.';
  }
  if (text.length > 200) return '${text.substring(0, 200)}…';
  return text.isEmpty ? 'Unknown AI error' : text;
}

Future<({String? text, String? error})> _callGeminiDirect(String apiKey, String prompt) async {
  const models = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-1.5-flash-latest',
    'gemini-1.5-flash',
    'gemini-1.5-flash-8b',
  ];
  Object? lastError;
  String? lastBody;
  for (final model in models) {
    try {
      final url = Uri.parse(
        'https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent?key=${Uri.encodeQueryComponent(apiKey)}',
      );
      final response = await http
          .post(
            url,
            headers: {'Content-Type': 'application/json'},
            body: jsonEncode({
              'contents': [
                {
                  'parts': [
                    {'text': prompt},
                  ],
                },
              ],
            }),
          )
          .timeout(const Duration(seconds: 90));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final candidates = data['candidates'];
        if (candidates is List && candidates.isNotEmpty) {
          final parts = candidates[0]['content']?['parts'];
          if (parts is List && parts.isNotEmpty) {
            final text = parts[0]['text']?.toString();
            if (text != null && text.trim().isNotEmpty) {
              return (text: NgmyAiMemoryStore.sanitizeHelperReply(text.trim()), error: null);
            }
          }
        }
      } else {
        lastBody = response.body;
        lastError = 'HTTP ${response.statusCode}';
      }
    } catch (e) {
      lastError = e;
    }
  }
  return (text: null, error: _extractApiErrorMessage(lastError, body: lastBody));
}

Future<({String? text, String? error})> _callOpenAiDirect(
  String apiKey,
  String prompt, {
  String baseUrl = 'https://api.openai.com/v1',
  String model = 'gpt-4o-mini',
}) async {
  Object? lastError;
  String? lastBody;
  for (final m in [model, 'gpt-4o-mini', 'gpt-3.5-turbo']) {
    try {
      final url = Uri.parse('$baseUrl/chat/completions');
      final response = await http
          .post(
            url,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer $apiKey',
            },
            body: jsonEncode({
              'model': m,
              'messages': [
                {'role': 'user', 'content': prompt},
              ],
              'max_tokens': 2048,
            }),
          )
          .timeout(const Duration(seconds: 90));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final choices = data['choices'];
        if (choices is List && choices.isNotEmpty) {
          final text = choices[0]['message']?['content']?.toString();
          if (text != null && text.trim().isNotEmpty) {
            return (text: NgmyAiMemoryStore.sanitizeHelperReply(text.trim()), error: null);
          }
        }
      } else {
        lastBody = response.body;
        lastError = 'HTTP ${response.statusCode}';
      }
    } catch (e) {
      lastError = e;
    }
  }
  return (text: null, error: _extractApiErrorMessage(lastError, body: lastBody));
}

Future<({String? text, String? error})> _callAnthropicDirect(String apiKey, String prompt) async {
  Object? lastError;
  String? lastBody;
  for (final model in ['claude-3-5-haiku-latest', 'claude-3-5-sonnet-latest', 'claude-3-haiku-20240307']) {
    try {
      final response = await http
          .post(
            Uri.parse('https://api.anthropic.com/v1/messages'),
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
            },
            body: jsonEncode({
              'model': model,
              'max_tokens': 2048,
              'messages': [
                {'role': 'user', 'content': prompt},
              ],
            }),
          )
          .timeout(const Duration(seconds: 90));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final content = data['content'];
        if (content is List && content.isNotEmpty) {
          final text = content[0]['text']?.toString();
          if (text != null && text.trim().isNotEmpty) {
            return (text: NgmyAiMemoryStore.sanitizeHelperReply(text.trim()), error: null);
          }
        }
      } else {
        lastBody = response.body;
        lastError = 'HTTP ${response.statusCode}';
      }
    } catch (e) {
      lastError = e;
    }
  }
  return (text: null, error: _extractApiErrorMessage(lastError, body: lastBody));
}

/// Supabase Edge Function proxy (fixes browser CORS for PWA / phone web).
Future<({String? text, String? error})> _callAiViaSupabaseProxy({
  required String apiKey,
  required String prompt,
  required NgmyAiProviderKind provider,
  String? openAiBaseUrl,
}) async {
  try {
    final client = Supabase.instance.client;
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
          body: jsonEncode({
            'provider': provider.name,
            'apiKey': apiKey,
            'prompt': prompt,
            if (openAiBaseUrl != null && openAiBaseUrl.isNotEmpty) 'openAiBaseUrl': openAiBaseUrl,
          }),
        )
        .timeout(const Duration(seconds: 95));
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      final text = data['text']?.toString();
      if (text != null && text.trim().isNotEmpty) {
        return (text: NgmyAiMemoryStore.sanitizeHelperReply(text.trim()), error: null);
      }
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (text: null, error: err);
    }
    return (text: null, error: _extractApiErrorMessage('HTTP ${response.statusCode}', body: response.body));
  } catch (e) {
    debugPrint('[ngmy-ai] proxy error: $e');
    return (text: null, error: null);
  }
}

Future<({String? text, String? error})> ngmyAiGenerateWithCredentials(
  NgmyAiCredentials creds,
  String prompt,
) async {
  if (creds.apiKey.isEmpty) {
    return (text: null, error: 'No API key configured.');
  }

  Future<({String? text, String? error})> runDirect() async {
    switch (creds.provider) {
      case NgmyAiProviderKind.gemini:
        return _callGeminiDirect(creds.apiKey, prompt);
      case NgmyAiProviderKind.openai:
        return _callOpenAiDirect(creds.apiKey, prompt);
      case NgmyAiProviderKind.anthropic:
        return _callAnthropicDirect(creds.apiKey, prompt);
      case NgmyAiProviderKind.openaiCompatible:
        return _callOpenAiDirect(
          creds.apiKey,
          prompt,
          baseUrl: creds.openAiBaseUrl ?? 'https://api.openai.com/v1',
        );
    }
  }

  if (kIsWeb) {
    final proxied = await _callAiViaSupabaseProxy(
      apiKey: creds.apiKey,
      prompt: prompt,
      provider: creds.provider,
      openAiBaseUrl: creds.openAiBaseUrl,
    );
    if (proxied.text != null) return proxied;
    final direct = await runDirect();
    if (direct.text != null) return direct;
    return (
      text: null,
      error: proxied.error ?? direct.error ?? 'AI request failed on web.',
    );
  }

  final direct = await runDirect();
  if (direct.text != null) return direct;

  if (creds.provider != NgmyAiProviderKind.gemini) {
    final geminiTry = await _callGeminiDirect(creds.apiKey, prompt);
    if (geminiTry.text != null) return geminiTry;
  }
  if (creds.provider != NgmyAiProviderKind.openai) {
    final openTry = await _callOpenAiDirect(creds.apiKey, prompt);
    if (openTry.text != null) return openTry;
  }

  return direct;
}

/// NGMY Helper + any feature that used Gemini-only chat.
Future<String?> ngmyAiGenerateReply(
  String apiKey,
  String userQuery, {
  required String systemContext,
  List<Map<String, dynamic>> memory = const [],
}) async {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) return null;

  final memoryBlock = memory.isNotEmpty
      ? '\n${NgmyAiMemoryStore.transcriptForPrompt(memory)}\n'
      : '';
  final prompt = '$systemContext$memoryBlock\nUser: $userQuery';

  final result = await ngmyAiGenerateWithCredentials(creds, prompt);
  if (result.text != null) return result.text;
  if (result.error != null) {
    debugPrint('[ngmy-ai] ${ngmyAiProviderLabel(creds.provider)} failed: ${result.error}');
  }
  return null;
}

/// User-facing error when AI returns null.
String ngmyAiHelperFailureMessage({
  required String apiKey,
  String? lastError,
}) {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) {
    return 'The helper is not connected yet. Ask an admin to save an AI API key in Admin → Management Hub → Save Global Settings.';
  }
  final provider = ngmyAiProviderLabel(creds.provider);
  if (lastError != null && lastError.trim().isNotEmpty) {
    return 'Could not reach $provider right now: $lastError';
  }
  return 'Could not reach $provider right now. Check the API key in Admin → Management Hub (Gemini, OpenAI, or Claude keys are supported).';
}
