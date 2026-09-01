import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_ai_memory.dart';
import 'ngmy_edge_invoke.dart';

/// Re-export for legacy error messages in sibling modules.
export 'ngmy_edge_invoke.dart' show kNgmySupabaseAiFunction;

/// Sentinel meaning "AI key lives on the server only — never fetch/send the real key".
const String kNgmyServerManagedAiKey = '__NGMY_SERVER_MANAGED__';

bool ngmyIsServerManagedAiKey(String? key) {
  final k = (key ?? '').trim();
  return k.isEmpty || k == kNgmyServerManagedAiKey;
}

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
  if (key.isEmpty || key == kNgmyServerManagedAiKey) {
    return const NgmyAiCredentials(
      provider: NgmyAiProviderKind.gemini,
      apiKey: kNgmyServerManagedAiKey,
    );
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
    return 'Network or browser security blocked the AI request. Save the API key in Admin → Management Menus → NGMY AI, then reload. On web, ensure the Supabase AI proxy function is deployed.';
  }
  if (text.length > 200) return '${text.substring(0, 200)}…';
  return text.isEmpty ? 'Unknown AI error' : text;
}

typedef NgmyAiImagePart = ({String mimeType, String data});

List<Map<String, dynamic>> _geminiPartsFor(String prompt, List<NgmyAiImagePart> images) {
  final parts = <Map<String, dynamic>>[];
  for (final img in images) {
    final data = img.data.trim();
    if (data.isEmpty) continue;
    parts.add({
      'inline_data': {
        'mime_type': img.mimeType.trim().isEmpty ? 'image/jpeg' : img.mimeType.trim(),
        'data': data,
      },
    });
  }
  parts.add({'text': prompt});
  return parts;
}

Future<({String? text, String? error})> _callGeminiDirect(
  String apiKey,
  String prompt, {
  List<NgmyAiImagePart> images = const [],
}) async {
  const models = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-1.5-flash-latest',
    'gemini-1.5-flash',
    'gemini-1.5-flash-8b',
  ];
  final geminiParts = _geminiPartsFor(prompt, images);
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
                {'parts': geminiParts},
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

/// One fast Gemini model for advisor chat — avoids trying 6 models sequentially.
Future<({String? text, String? error})> _callGeminiDirectCommunicate(
  String apiKey,
  String prompt, {
  List<NgmyAiImagePart> images = const [],
  Duration timeout = const Duration(seconds: 26),
  int maxOutputTokens = 1400,
}) async {
  const model = 'gemini-2.0-flash';
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
              {'parts': _geminiPartsFor(prompt, images)},
            ],
            'generationConfig': {
              'maxOutputTokens': maxOutputTokens,
              'temperature': 0.92,
            },
          }),
        )
        .timeout(timeout);
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
    }
    return (text: null, error: _extractApiErrorMessage('HTTP ${response.statusCode}', body: response.body));
  } catch (e) {
    return (text: null, error: _extractApiErrorMessage(e));
  }
}

/// Fast advisor reply — hard time budget so typing never hangs for minutes.
Future<({String? text, String? error})> ngmyAiGenerateCommunicateFast(
  NgmyAiCredentials creds,
  String prompt, {
  List<NgmyAiImagePart> images = const [],
  Duration budget = const Duration(seconds: 22),
}) async {
  try {
    return await () async {
      final proxied = await _callAiViaSupabaseProxy(
        prompt: prompt,
        provider: creds.provider,
        openAiBaseUrl: creds.openAiBaseUrl,
        images: images,
      );
      if (proxied.text != null && proxied.text!.trim().isNotEmpty) return proxied;
      if (ngmyIsServerManagedAiKey(creds.apiKey)) return proxied;
      if (kIsWeb && ngmyIsOfflineOrNetworkError(proxied.error ?? '')) {
        return proxied;
      }
      final gemini = await _callGeminiDirectCommunicate(
        creds.apiKey,
        prompt,
        images: images,
        timeout: const Duration(seconds: 18),
      );
      if (gemini.text != null && gemini.text!.trim().isNotEmpty) return gemini;
      return (text: null, error: proxied.error ?? gemini.error);
    }().timeout(budget);
  } on TimeoutException {
    return (text: null, error: 'timeout');
  } catch (e) {
    return (text: null, error: _extractApiErrorMessage(e));
  }
}

/// Stronger Gemini call for App Builder — larger JSON apps, longer timeout.
Future<({String? text, String? error})> _callGeminiDirectAppBuilder(String apiKey, String prompt) async {
  const models = [
    'gemini-2.5-pro',
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-pro-latest',
    'gemini-1.5-flash-latest',
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
                {'parts': [{'text': prompt}]},
              ],
              'generationConfig': {
                'maxOutputTokens': 16384,
                'temperature': 0.35,
              },
            }),
          )
          .timeout(const Duration(seconds: 180));
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

/// App Builder AI — uses stronger models and longer output for full app JSON.
Future<({String? text, String? error})> ngmyAiGenerateForAppBuilder(
  NgmyAiCredentials creds,
  String prompt,
) async {
  // App Builder replies are a full multi-screen app as JSON — 2048 tokens
  // (the budget used for short chat replies elsewhere) cuts that off
  // mid-structure. Small text-only edits fit and succeed; full rebuilds get
  // truncated, fail to parse, and only the chat preamble survives — which
  // looks exactly like "the AI only changes text". Use a much larger budget
  // and a stronger model here.
  const appBuilderMaxTokens = 8000;

  Future<({String? text, String? error})> runDirect() async {
    if (ngmyIsServerManagedAiKey(creds.apiKey)) {
      return (text: null, error: 'Direct AI disabled — server key only.');
    }
    switch (creds.provider) {
      case NgmyAiProviderKind.gemini:
        final strong = await _callGeminiDirectAppBuilder(creds.apiKey, prompt);
        if (strong.text != null) return strong;
        return _callGeminiDirect(creds.apiKey, prompt);
      case NgmyAiProviderKind.openai:
        return _callOpenAiDirect(creds.apiKey, prompt, model: 'gpt-4o', maxTokens: appBuilderMaxTokens);
      case NgmyAiProviderKind.anthropic:
        return _callAnthropicDirect(creds.apiKey, prompt, maxTokens: appBuilderMaxTokens, preferStrong: true);
      case NgmyAiProviderKind.openaiCompatible:
        return _callOpenAiDirect(
          creds.apiKey,
          prompt,
          baseUrl: creds.openAiBaseUrl ?? 'https://api.openai.com/v1',
          model: 'gpt-4o',
          maxTokens: appBuilderMaxTokens,
        );
    }
  }

  final proxied = await _callAiViaSupabaseProxy(
    prompt: prompt,
    provider: creds.provider,
    openAiBaseUrl: creds.openAiBaseUrl,
    mode: 'appBuilder',
  );
  if (proxied.text != null) return proxied;
  if (ngmyIsServerManagedAiKey(creds.apiKey)) {
    return (text: null, error: proxied.error ?? 'AI request failed.');
  }
  final direct = await runDirect();
  if (direct.text != null) return direct;
  return (text: null, error: proxied.error ?? direct.error ?? 'AI request failed.');
}

Future<({String? text, String? error})> _callOpenAiDirect(
  String apiKey,
  String prompt, {
  String baseUrl = 'https://api.openai.com/v1',
  String model = 'gpt-4o-mini',
  int maxTokens = 2048,
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
              'max_tokens': maxTokens,
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

Future<({String? text, String? error})> _callAnthropicDirect(
  String apiKey,
  String prompt, {
  int maxTokens = 2048,
  bool preferStrong = false,
}) async {
  Object? lastError;
  String? lastBody;
  final models = preferStrong
      ? ['claude-3-5-sonnet-latest', 'claude-3-5-haiku-latest', 'claude-3-haiku-20240307']
      : ['claude-3-5-haiku-latest', 'claude-3-5-sonnet-latest', 'claude-3-haiku-20240307'];
  for (final model in models) {
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
              'max_tokens': maxTokens,
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
/// Never sends the real API key — the Edge Function loads it from secrets / service role.
Future<({String? text, String? error})> _callAiViaSupabaseProxy({
  required String prompt,
  required NgmyAiProviderKind provider,
  String? openAiBaseUrl,
  List<NgmyAiImagePart> images = const [],
  String? mode,
}) async {
  try {
    final body = <String, dynamic>{
      'action': 'chat',
      'provider': images.isNotEmpty ? NgmyAiProviderKind.gemini.name : provider.name,
      'prompt': prompt,
      if (mode != null && mode.isNotEmpty) 'mode': mode,
      if (openAiBaseUrl != null && openAiBaseUrl.isNotEmpty) 'openAiBaseUrl': openAiBaseUrl,
      if (images.isNotEmpty)
        'images': images
            .where((img) => img.data.trim().isNotEmpty)
            .map((img) => {
                  'mimeType': img.mimeType.trim().isEmpty ? 'image/jpeg' : img.mimeType.trim(),
                  'data': img.data.trim(),
                })
            .toList(),
    };
    final data = await ngmyEdgeInvoke(body);
    if (data != null) {
      final text = data['text']?.toString();
      if (text != null && text.trim().isNotEmpty) {
        return (text: NgmyAiMemoryStore.sanitizeHelperReply(text.trim()), error: null);
      }
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (text: null, error: err);
    }
    return (text: null, error: 'AI proxy unavailable. Try again.');
  } catch (e) {
    debugPrint('[ngmy-ai] proxy error: $e');
    return (text: null, error: _extractApiErrorMessage(e));
  }
}

Future<({String? text, String? error})> ngmyAiGenerateWithCredentials(
  NgmyAiCredentials creds,
  String prompt, {
  List<NgmyAiImagePart> images = const [],
}) async {
  Future<({String? text, String? error})> runDirect() async {
    if (ngmyIsServerManagedAiKey(creds.apiKey)) {
      return (text: null, error: 'Direct AI disabled — server key only.');
    }
    if (images.isNotEmpty) {
      return _callGeminiDirect(creds.apiKey, prompt, images: images);
    }
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

  // Always prefer the server proxy so the real API key never leaves Supabase.
  final proxied = await _callAiViaSupabaseProxy(
    prompt: prompt,
    provider: creds.provider,
    openAiBaseUrl: creds.openAiBaseUrl,
    images: images,
  );
  if (proxied.text != null) return proxied;
  if (ngmyIsServerManagedAiKey(creds.apiKey) || kIsWeb) {
    return (
      text: null,
      error: proxied.error ?? 'AI request failed.',
    );
  }

  final direct = await runDirect();
  if (direct.text != null) return direct;
  return (text: null, error: proxied.error ?? direct.error);
}

/// NGMY Helper + any feature that used Gemini-only chat.
Future<String?> ngmyAiGenerateReply(
  String apiKey,
  String userQuery, {
  required String systemContext,
  List<Map<String, dynamic>> memory = const [],
}) async {
  final creds = ngmyParseAiCredentials(apiKey);

  final memoryBlock = memory.isNotEmpty
      ? '\n${NgmyAiMemoryStore.transcriptForPrompt(memory)}\n'
      : '';
  final prompt = '$systemContext$memoryBlock\n'
      'Answer using the LIVE NGMY APP DATABASE section when the user asks about menus, wallet, pending requests, or current app state.\n'
      'User: $userQuery';

  final result = await ngmyAiGenerateWithCredentials(creds, prompt);
  if (result.text != null) return result.text;
  if (result.error != null) {
    debugPrint('[ngmy-ai] ${ngmyAiProviderLabel(creds.provider)} failed: ${result.error}');
  }
  return null;
}

/// True when an error looks like "no internet"/connectivity failure rather
/// than a real API/config problem — covers the browser-specific wording for
/// this (Safari says "Load failed", Chrome says "Failed to fetch", etc.),
/// none of which contain the word "network" itself.
bool ngmyIsOfflineOrNetworkError(String err) {
  final e = err.toLowerCase();
  return e.contains('timeout') ||
      e.contains('socket') ||
      e.contains('network') ||
      e.contains('failed to fetch') ||
      e.contains('load failed') ||
      e.contains('clientexception') ||
      e.contains('connection') ||
      e.contains('offline') ||
      e.contains('dns') ||
      e.contains('unreachable') ||
      e.contains('handshake');
}

/// Soft chat copy when AI fails — never leak HTTP codes, Gemini, or stack traces.
const String kNgmySoftAiRetryMessage =
    "One sec — that glitched on my side. Send your message again and I'll catch it 💕";

const String kNgmySoftHelperRetryMessage =
    "That reply glitched. Tap send again in a moment and we'll continue.";

bool ngmyIsTransientAiHttpError(String err) {
  final e = err.toLowerCase();
  return RegExp(r'\b(429|500|502|503|504)\b').hasMatch(e) ||
      e.contains('unavailable') ||
      e.contains('internal error') ||
      e.contains('overloaded') ||
      e.contains('resource exhausted') ||
      e.contains('deadline') ||
      e.contains('timeout');
}

/// Friendly, on-brand copy for when the device has no internet — never a
/// raw exception message or URL.
const String kNgmyOfflineAiMessage =
    "NGMY AI can't reach the internet right now. Connect to Wi-Fi or mobile data and we'll be right back!";

/// User-facing error when AI returns null.
String ngmyAiHelperFailureMessage({
  required String apiKey,
  String? lastError,
}) {
  final err = (lastError ?? '').trim();
  if (ngmyIsOfflineOrNetworkError(err)) {
    return kNgmyOfflineAiMessage;
  }
  if (err.contains('proxy not deployed') || err.contains('404')) {
    return 'Your API key is saved, but the web AI proxy is not deployed in Supabase yet. Admin: deploy the $kNgmySupabaseAiFunction Edge Function, then try again.';
  }
  if (err.toLowerCase().contains('not configured on the server') ||
      err.toLowerCase().contains('no api key')) {
    return 'NGMY Helper is not connected yet. An admin must save the AI API key in Management Menus → NGMY AI → Save AI Settings, then reload the app.';
  }
  // Never show "could not reach Google Gemini: HTTP 500" to users.
  if (err.isEmpty || ngmyIsTransientAiHttpError(err) || err.toLowerCase().contains('http ')) {
    return kNgmySoftHelperRetryMessage;
  }
  return kNgmySoftHelperRetryMessage;
}

/// Advisor chat errors — never blame the user for having internet, and
/// never surface a raw exception message, HTTP code, or Gemini branding.
String ngmyCommunicateAiFailureMessage({required String apiKey, String? lastError}) {
  final err = (lastError ?? '').trim();
  if (apiKey.trim().isEmpty) {
    return 'Hang tight — I\'m still waking up. Send again in a few seconds 💕';
  }
  if (ngmyIsOfflineOrNetworkError(err) || err == 'empty reply' || err == 'timeout') {
    if (err == 'timeout' || err == 'empty reply') {
      return 'My signal hiccuped — connect to Wi‑Fi and send that one more time 💕';
    }
    return kNgmyOfflineAiMessage.replaceAll('NGMY AI', 'I');
  }
  return kNgmySoftAiRetryMessage;
}

Future<({String? text, String? error})> ngmyAiGenerateWithRetry(
  NgmyAiCredentials creds,
  String prompt, {
  List<NgmyAiImagePart> images = const [],
  int attempts = 4,
}) async {
  ({String? text, String? error}) result = (text: null, error: null);
  for (var i = 0; i < attempts; i++) {
    if (i > 0) await Future<void>.delayed(Duration(milliseconds: 450 * i));
    result = await ngmyAiGenerateWithCredentials(creds, prompt, images: images);
    if (result.text != null && result.text!.trim().isNotEmpty) return result;
    final err = (result.error ?? '').toLowerCase();
    final retryable = ngmyIsOfflineOrNetworkError(err) ||
        ngmyIsTransientAiHttpError(err) ||
        err.contains('socket') ||
        err.contains('network') ||
        err.contains('connection');
    if (!retryable) break;
  }
  return result;
}

/// Reads AI key from any Supabase config row shape (admin/legacy only — prefer server proxy).
String ngmyGeminiKeyFromMap(Map<String, dynamic>? json) {
  if (json == null) return '';
  for (final field in ['aiApiKey', 'ai_api_key', 'geminiApiKey', 'gemini_api_key', 'geminiapikey']) {
    final v = json[field]?.toString().trim();
    if (v != null && v.isNotEmpty) return v;
  }
  return '';
}

Future<Map<String, dynamic>?> _ngmyInvokeBrightHandler(Map<String, dynamic> body) async {
  return ngmyEdgeInvoke(body);
}

/// Asks the Edge Function whether a server-side AI key is configured (never returns the key).
Future<bool> ngmyAiKeyConfiguredOnServer({int retries = 2}) async {
  for (var attempt = 0; attempt < retries; attempt++) {
    if (attempt > 0) await Future<void>.delayed(Duration(milliseconds: 300 * attempt));
    final data = await _ngmyInvokeBrightHandler({'action': 'aiKeyConfigured'});
    if (data != null && data['configured'] == true) return true;
  }
  return false;
}

/// Admin-only: save AI key via Edge Function (service role). Never write key columns from the client.
Future<bool> ngmyPersistAiApiKeyViaServer({
  required String requesterEmail,
  required String apiKey,
}) async {
  final email = requesterEmail.trim().toLowerCase();
  final key = apiKey.trim();
  if (email.isEmpty || key.isEmpty || key == kNgmyServerManagedAiKey) return false;
  final data = await _ngmyInvokeBrightHandler({
    'action': 'saveAiApiKey',
    'requesterEmail': email,
    'apiKey': key,
  });
  return data != null && data['ok'] == true;
}

/// Password login without downloading passwordHash to the browser.
/// On success, establishes a real Supabase Auth session (required for RLS).
Future<({bool ok, String? error, Map<String, dynamic>? user})> ngmyVerifyPasswordLoginViaServer({
  required String email,
  required String passwordHash,
}) async {
  final data = await _ngmyInvokeBrightHandler({
    'action': 'verifyPasswordLogin',
    'email': email.trim().toLowerCase(),
    'passwordHash': passwordHash.trim(),
  });
  if (data == null) {
    return (ok: false, error: 'Could not reach login server.', user: null);
  }
  if (data['ok'] == true) {
    await ngmyApplyAuthSessionFromServer(data['session']);
    final user = data['user'];
    return (
      ok: true,
      error: null,
      user: user is Map ? Map<String, dynamic>.from(user) : null,
    );
  }
  return (
    ok: false,
    error: data['error']?.toString() ?? 'Login failed',
    user: null,
  );
}

/// Creates the cloud user row + Auth session for new signups (service role).
Future<({bool ok, String? error, Map<String, dynamic>? user})> ngmyRegisterAppUserViaServer({
  required String email,
  required String passwordHash,
  String username = '',
  String phone = '',
}) async {
  final data = await _ngmyInvokeBrightHandler({
    'action': 'registerAppUser',
    'email': email.trim().toLowerCase(),
    'passwordHash': passwordHash.trim(),
    'username': username.trim(),
    'phone': phone.trim(),
  });
  if (data == null) {
    return (ok: false, error: 'Could not reach signup server.', user: null);
  }
  if (data['ok'] == true) {
    await ngmyApplyAuthSessionFromServer(data['session']);
    final user = data['user'];
    return (
      ok: true,
      error: null,
      user: user is Map ? Map<String, dynamic>.from(user) : null,
    );
  }
  return (
    ok: false,
    error: data['error']?.toString() ?? 'Signup failed',
    user: null,
  );
}

/// Apply access/refresh tokens returned by bright-handler login/signup.
Future<void> ngmyApplyAuthSessionFromServer(dynamic session) async {
  if (session is! Map) return;
  final refresh = session['refresh_token']?.toString().trim() ?? '';
  final access = session['access_token']?.toString().trim() ?? '';
  if (refresh.isEmpty) return;
  try {
    final client = Supabase.instance.client;
    // Prefer refresh-token session restore (stores JWT with email claim for RLS).
    await client.auth.setSession(refresh);
    // Some runtimes need an explicit access token refresh check.
    if (client.auth.currentSession == null && access.isNotEmpty) {
      await client.auth.setSession(refresh);
    }
    debugPrint('[ngmy-auth] session established for ${client.auth.currentUser?.email}');
  } catch (e) {
    debugPrint('[ngmy-auth] setSession failed: $e');
  }
}

/// Never pulls the real Gemini key to the client. Returns a server-managed sentinel when configured.
Future<String> ngmyFetchRemoteGeminiApiKey() async {
  try {
    if (await ngmyAiKeyConfiguredOnServer()) return kNgmyServerManagedAiKey;
  } catch (e) {
    debugPrint('[ngmy-ai] fetch gemini configured: $e');
  }
  return '';
}

/// Local admin paste (if any) or server-managed sentinel — never downloads the shared cloud key.
Future<String> ngmyResolveGeminiApiKey({
  String localKey = '',
  dynamic config,
  int retries = 3,
}) async {
  var key = localKey.trim();
  if ((key.isEmpty || key == kNgmyServerManagedAiKey) && config != null) {
    try {
      final cfg = (config as dynamic).geminiApiKey?.toString().trim() ?? '';
      if (cfg.isNotEmpty && cfg != kNgmyServerManagedAiKey) key = cfg;
    } catch (_) {}
  }
  if (key.isNotEmpty && key != kNgmyServerManagedAiKey) return key;

  for (var attempt = 0; attempt < retries; attempt++) {
    if (attempt > 0) await Future<void>.delayed(Duration(milliseconds: 350 * attempt));
    if (await ngmyAiKeyConfiguredOnServer()) {
      if (config != null) {
        try {
          (config as dynamic).geminiApiKey = kNgmyServerManagedAiKey;
        } catch (_) {}
      }
      return kNgmyServerManagedAiKey;
    }
  }
  return '';
}

/// Free image fallback — works without an API key (romantic chat selfies, etc.).
Future<({Uint8List? bytes, String? error})> ngmyPollinationsImage(
  String prompt, {
  bool allowAdult = false,
  int? seed,
  Duration timeout = const Duration(seconds: 28),
}) async {
  final p = prompt.trim();
  if (p.isEmpty) return (bytes: null, error: 'Enter an image description.');
  // Keep URL short — long NSFW prompts fail more often and waste the typing wait.
  final clipped = p.length > 320 ? '${p.substring(0, 317)}...' : p;
  final s = seed ?? DateTime.now().millisecondsSinceEpoch;
  try {
    final params = <String, String>{
      'width': '768',
      'height': '768',
      'nologo': 'true',
      // enhance slows mobile web and often times out — keep it off for chat pics.
      'enhance': 'false',
      'seed': '$s',
      if (allowAdult) 'safe': 'false',
    };
    final url = Uri.parse(
      'https://image.pollinations.ai/prompt/${Uri.encodeComponent(clipped)}',
    ).replace(queryParameters: params);
    final response = await http.get(url).timeout(timeout);
    if (response.statusCode == 200 && response.bodyBytes.length > 2048) {
      return (bytes: response.bodyBytes, error: null);
    }
    return (bytes: null, error: 'Image service returned ${response.statusCode}.');
  } catch (e) {
    return (bytes: null, error: _extractApiErrorMessage(e));
  }
}

bool ngmyPartnerImagePromptLooksAdult(String prompt) {
  final t = prompt.toLowerCase();
  return RegExp(
    r'\b(nude|naked|nsfw|sexual|sexy|lingerie|bra|panties|pussy|vagina|dick|cock|tits|titties|boobs|breasts|'
    r'nipples|ass|asshole|clit|cum|fuck|blowjob|handjob|spread|bent over|on all fours|'
    r'without clothes|no clothes|topless|bottomless|explicit|bedroom|in bed|'
    r'your body|body pics?|body shots?|adult partner|uncensored|horny)\b',
  ).hasMatch(t);
}

/// Server-side image fetch via Supabase proxy (avoids browser CORS on ngmy.org).
Future<({Uint8List? bytes, String? error})> _callImageActionViaProxy({
  required String action,
  required String prompt,
  Uint8List? personBytes,
  String personMime = 'image/jpeg',
  bool allowAdult = false,
  Duration timeout = const Duration(seconds: 18),
}) async {
  try {
    final body = <String, dynamic>{
      'action': action,
      'prompt': prompt.trim(),
      'allowAdult': allowAdult,
      if (personBytes != null && personBytes.isNotEmpty)
        'images': [
          {'mimeType': personMime, 'data': base64Encode(personBytes)},
        ],
      if (personBytes != null && personBytes.isNotEmpty) 'personOnly': true,
    };

    Future<({Uint8List? bytes, String? error})> parse(Map<String, dynamic>? data) async {
      if (data == null) return (bytes: null, error: 'AI image proxy unavailable.');
      if (data['ok'] == false) {
        final err = data['error']?.toString();
        if (err != null && err.isNotEmpty) return (bytes: null, error: err);
      }
      final b64 = data['imageBase64']?.toString();
      if (b64 != null && b64.trim().isNotEmpty) {
        return (bytes: base64Decode(b64.trim()), error: null);
      }
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (bytes: null, error: err);
      return (bytes: null, error: 'AI image proxy unavailable.');
    }

    final data = await ngmyEdgeInvoke(body, timeout: timeout);
    return parse(data);
  } catch (e) {
    return (bytes: null, error: _extractApiErrorMessage(e));
  }
}

/// Romantic partner chat images — deliver a real photo every time when possible.
/// Order: short Pollinations (proxy + direct) → Gemini lookalike → soft retry.
/// Hard [budget] so chat typing cannot hang forever. Never throws.
Future<({Uint8List? bytes, String? error})> ngmyGenerateRomanticChatImage(
  String prompt, {
  NgmyAiCredentials? creds,
  Uint8List? lookalikePortraitBytes,
  String lookalikeMime = 'image/jpeg',
  bool preferSceneVariety = true,
  int varietySeed = 0,
  bool fast = false,
  bool tryLookalike = true,
  bool lookalikeFirst = false,
  bool allowAdultGeneration = false,
  Duration budget = const Duration(seconds: 35),
}) async {
  final p = prompt.trim();
  if (p.isEmpty) return (bytes: null, error: 'Empty image prompt.');
  final adult = allowAdultGeneration;
  final short = p.length > 280 ? '${p.substring(0, 277)}...' : p;
  String? lastError;
  final started = DateTime.now();
  final effectiveBudget = fast ? const Duration(seconds: 12) : budget;
  final seedBase = DateTime.now().microsecondsSinceEpoch ^ short.hashCode ^ (varietySeed * 7919);

  bool hasTime([Duration need = const Duration(seconds: 3)]) =>
      DateTime.now().difference(started) + need <= effectiveBudget;

  try {
    final key = creds?.apiKey.trim() ?? '';
    final hasPortrait = lookalikePortraitBytes != null && lookalikePortraitBytes.isNotEmpty;

    Future<({Uint8List? bytes, String? error})> tryPollinationsOnce(
      String text, {
      required int seed,
      bool adultMode = false,
    }) async {
      if (!hasTime(const Duration(seconds: 4))) {
        return (bytes: null, error: 'Photo timed out.');
      }
      final remainingMs = (effectiveBudget - DateTime.now().difference(started)).inMilliseconds;
      final slice = Duration(
        milliseconds: fast
            ? remainingMs.clamp(3500, 9000)
            : remainingMs.clamp(6000, 20000),
      );
      // Proxy works without a real Gemini key for pollinationsImage — always try.
      final viaProxy = await _callImageActionViaProxy(
        action: 'pollinationsImage',
        prompt: text,
        allowAdult: adultMode,
        timeout: slice,
      );
      if (viaProxy.bytes != null && viaProxy.bytes!.isNotEmpty) return viaProxy;
      lastError = viaProxy.error ?? lastError;

      if (fast) {
        return (bytes: null, error: lastError ?? 'Image generation failed.');
      }

      if (!hasTime(const Duration(seconds: 4))) {
        return (bytes: null, error: lastError ?? 'Photo timed out.');
      }
      // Direct fetch — backup when proxy fails.
      final directSlice = Duration(
        milliseconds: (effectiveBudget - DateTime.now().difference(started)).inMilliseconds.clamp(6000, 18000),
      );
      final poll = await ngmyPollinationsImage(
        text,
        allowAdult: adultMode,
        seed: seed,
        timeout: directSlice,
      );
      if (poll.bytes != null && poll.bytes!.isNotEmpty) return poll;
      lastError = poll.error ?? lastError;
      return (bytes: null, error: lastError ?? 'Image generation failed.');
    }

    final personHint = short.length > 120 ? short.substring(0, 120) : short;

    // Optional one NSFW try when caller explicitly allows it — always followed by SFW paths.
    if (allowAdultGeneration) {
      final hit = await tryPollinationsOnce(
        'Photorealistic adult dating partner photo: $personHint. No watermark, no text.',
        seed: seedBase,
        adultMode: true,
      );
      if (hit.bytes != null && hit.bytes!.isNotEmpty) return hit;
    }

    // Gemini lookalike first — this path produced the working full-body partner photos.
    final prompts = <({String text, bool adultMode})>[
      (
        text: preferSceneVariety
            ? 'Brand-new photorealistic full-body photo, different outfit and pose: $personHint, whole body visible, natural light, no text'
            : 'Photorealistic flattering photo of $personHint, new angle, natural light, no text, no watermark',
        adultMode: false,
      ),
      (
        text: adult
            ? 'Photorealistic sexy full-body photo matching: $short. Lingerie or fitted outfit, seductive, no text.'
            : 'Photorealistic photo matching: $short. New wardrobe and background. Full body or three-quarter. No text, no watermark.',
        adultMode: adult,
      ),
      (
        text: 'Completely new photograph, NOT a profile selfie copy: $personHint. Different clothes and setting. Photorealistic.',
        adultMode: false,
      ),
      if (adult)
        (
          text: 'Photorealistic sexy full-body standing photo of $personHint, fitted clothes or lingerie, whole body visible, seductive, no text',
          adultMode: true,
        ),
    ];

    final promptLimit = fast ? 2 : prompts.length;

    Future<({Uint8List? bytes, String? error})> tryGeminiLookalike() async {
      if (!tryLookalike || !hasPortrait || key.isEmpty) {
        return (bytes: null, error: lastError);
      }
      if (!hasTime(lookalikeFirst ? const Duration(seconds: 5) : const Duration(seconds: 8))) {
        return (bytes: null, error: lastError ?? 'Photo timed out.');
      }
      final lookalikePrompt = adult
          ? 'Reference image is FACE IDENTITY ONLY. Create ONE sexy full-body photograph of this exact person for their dating partner. '
              'Request: $short. Lingerie or fitted outfit, seductive pose. No text.'
          : preferSceneVariety
              ? 'Reference image is FACE IDENTITY ONLY — do NOT copy its outfit, jewelry, pose, background, or selfie framing. '
                  'Create ONE BRAND-NEW photorealistic photograph of this exact person. '
                  'CRITICAL: full-body standing shot — whole body head to toe in frame, NOT a profile selfie. '
                  'Different clothes and setting from the reference. Request: $short. Natural lighting. No text, no watermark.'
              : 'Reference is face only — new photo, new outfit and angle. $short No text, no watermark.';
      try {
        final remaining = effectiveBudget - DateTime.now().difference(started);
        final geminiCap = lookalikeFirst ? const Duration(seconds: 16) : const Duration(seconds: 12);
        final proxied = await _callGeminiOutfitViaProxy(
          personBytes: lookalikePortraitBytes!,
          personMime: lookalikeMime,
          prompt: lookalikePrompt,
        ).timeout(remaining > geminiCap ? remaining : geminiCap);
        if (proxied.bytes != null && proxied.bytes!.isNotEmpty) return proxied;
        lastError = proxied.error ?? lastError;
      } catch (e) {
        lastError = _extractApiErrorMessage(e);
      }
      return (bytes: null, error: lastError);
    }

    if (lookalikeFirst) {
      final geminiHit = await tryGeminiLookalike();
      if (geminiHit.bytes != null && geminiHit.bytes!.isNotEmpty) return geminiHit;
    }

    for (var i = 0; i < promptLimit; i++) {
      final hit = await tryPollinationsOnce(
        prompts[i].text,
        seed: seedBase + i * 91,
        adultMode: prompts[i].adultMode,
      );
      if (hit.bytes != null && hit.bytes!.isNotEmpty) return hit;
      if (!hasTime(const Duration(seconds: 5))) break;
    }

    // Gemini lookalike — after Pollinations unless lookalikeFirst already ran.
    if (!lookalikeFirst &&
        tryLookalike &&
        hasPortrait &&
        hasTime(fast ? const Duration(seconds: 4) : const Duration(seconds: 8))) {
      final geminiHit = await tryGeminiLookalike();
      if (geminiHit.bytes != null && geminiHit.bytes!.isNotEmpty) return geminiHit;
    }

    if (!fast && key.isNotEmpty && creds != null && hasTime(const Duration(seconds: 8))) {
      try {
        final remaining = effectiveBudget - DateTime.now().difference(started);
        final api = await ngmyAiGenerateImage(creds, prompts.first.text).timeout(
          remaining > const Duration(seconds: 10) ? remaining : const Duration(seconds: 10),
        );
        if (api.bytes != null && api.bytes!.isNotEmpty) return api;
        lastError = api.error ?? lastError;
      } catch (e) {
        lastError = _extractApiErrorMessage(e);
      }
    }

    return (bytes: null, error: lastError ?? 'Image generation failed.');
  } catch (e) {
    return (bytes: null, error: _extractApiErrorMessage(e));
  }
}

/// Admin image generation — any prompt, no content filter (companion avatars, etc.).
Future<({Uint8List? bytes, String? error})> ngmyAiGenerateImage(
  NgmyAiCredentials creds,
  String prompt,
) async {
  final p = prompt.trim();
  if (creds.apiKey.isEmpty) return (bytes: null, error: 'No API key configured.');
  if (p.isEmpty) return (bytes: null, error: 'Enter an image description.');

  Future<({Uint8List? bytes, String? error})> openAiImage({String? baseUrl}) async {
    final root = (baseUrl ?? 'https://api.openai.com/v1').replaceAll(RegExp(r'/+$'), '');
    try {
      final response = await http
          .post(
            Uri.parse('$root/images/generations'),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ${creds.apiKey}',
            },
            body: jsonEncode({
              'model': 'dall-e-3',
              'prompt': p,
              'n': 1,
              'size': '1024x1024',
              'response_format': 'b64_json',
            }),
          )
          .timeout(const Duration(seconds: 120));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final items = data['data'];
        if (items is List && items.isNotEmpty) {
          final b64 = items[0]['b64_json']?.toString();
          if (b64 != null && b64.isNotEmpty) {
            return (bytes: base64Decode(b64), error: null);
          }
        }
      }
      return (bytes: null, error: _extractApiErrorMessage('HTTP ${response.statusCode}', body: response.body));
    } catch (e) {
      return (bytes: null, error: _extractApiErrorMessage(e));
    }
  }

  Future<({Uint8List? bytes, String? error})> geminiImage() async {
    const models = ['imagen-3.0-generate-002', 'imagen-3.0-fast-generate-001'];
    for (final model in models) {
      try {
        final url = Uri.parse(
          'https://generativelanguage.googleapis.com/v1beta/models/$model:predict?key=${Uri.encodeQueryComponent(creds.apiKey)}',
        );
        final response = await http
            .post(
              url,
              headers: {'Content-Type': 'application/json'},
              body: jsonEncode({
                'instances': [
                  {'prompt': p},
                ],
                'parameters': {'sampleCount': 1},
              }),
            )
            .timeout(const Duration(seconds: 120));
        if (response.statusCode != 200) continue;
        final data = jsonDecode(response.body);
        final preds = data['predictions'];
        if (preds is List && preds.isNotEmpty) {
          final b64 = preds[0]['bytesBase64Encoded']?.toString() ?? preds[0]['b64_json']?.toString();
          if (b64 != null && b64.isNotEmpty) {
            return (bytes: base64Decode(b64), error: null);
          }
        }
      } catch (_) {}
    }
    return (bytes: null, error: 'Gemini image models unavailable for this key.');
  }

  ({Uint8List? bytes, String? error}) primary;
  switch (creds.provider) {
    case NgmyAiProviderKind.openai:
      primary = await openAiImage();
      break;
    case NgmyAiProviderKind.openaiCompatible:
      primary = await openAiImage(baseUrl: creds.openAiBaseUrl);
      break;
    case NgmyAiProviderKind.gemini:
      primary = await geminiImage();
      if (primary.bytes == null) primary = await openAiImage();
      break;
    case NgmyAiProviderKind.anthropic:
      primary = await openAiImage();
      if (primary.bytes == null) primary = await geminiImage();
      break;
  }
  if (primary.bytes != null) return primary;

  final fallback = await ngmyPollinationsImage(p);
  if (fallback.bytes != null) return fallback;
  return (bytes: null, error: primary.error ?? fallback.error ?? 'Could not generate image.');
}

const _kNgmyOutfitVisionBriefPrompt = '''
You are a fashion stylist preparing a virtual try-on brief. Study both images carefully.

IMAGE 1: The real person who must appear in the final photo (preserve their identity).
IMAGE 2: The outfit/clothing they must wear (study every garment piece).

Reply in plain text with these exact section headers:

PERSON_IDENTITY:
Face, skin tone, hair style, facial hair, approximate age, body build — for identity lock.

CURRENT_CLOTHING_TO_REMOVE:
List every garment visible on the person in image 1 that must be fully replaced.

OUTFIT_TO_WEAR:
Describe the COMPLETE outfit from image 2 in exhaustive detail — every layer (shirt, blazer, vest, pants, shoes, belt, etc.), colors, fabrics, patterns, fit, buttons, lapels, sleeves, footwear. If image 2 shows a full look on a model, transfer that entire look.

Be specific. This brief drives photorealistic full-body dressing — not overlays.
''';

String ngmyBuildOutfitTryOnPrompt({
  required String visionBrief,
  String styleNotes = '',
}) {
  final creative = styleNotes.trim();
  return '''
PROFESSIONAL FASHION PHOTOGRAPH — COMPLETE VIRTUAL TRY-ON

Generate ONE photorealistic photograph. It must look like a real camera shot from a luxury fashion lookbook — NOT an edit, collage, or overlay.

=== STYLIST BRIEF (from reference photos) ===
$visionBrief

=== USER CREATIVE DIRECTION ===
${creative.isEmpty ? 'Confident natural pose. Premium editorial lighting. Person fully wearing the entire outfit head-to-toe.' : creative}

=== INPUT PHOTO ===
The attached image is the REAL PERSON. Preserve their exact face, skin tone, hair, facial features, and body identity.

=== TASK ===
Create a NEW photo of THIS SAME PERSON wearing the COMPLETE outfit described above — every garment piece, head to toe.

CRITICAL — DO NOT VIOLATE:
1. FULL GARMENT REPLACEMENT: Remove ALL original clothing and dress the person in the entire new outfit. Torso, arms, legs, and feet must show the new clothes only.
2. NO OVERLAYS: Never paste, float, or stick clothing pieces on shoulders, chest, or body. No partial jackets/vests sitting on top of old shirts. No cutout stickers.
3. NATURAL FIT: Clothes must wrap the body with correct anatomy — folds at elbows, lapels following chest, pants following legs, shoes on feet with proper perspective.
4. LIGHTING & SHADOWS: Match scene lighting. Garments cast realistic shadows on skin and each other.
5. ACCESSORIES: If user requested glasses, watches, or jewelry — place them naturally with correct scale, angle, and reflections. They must look worn, not pasted.
6. SCENE & POSE: User may request a new location (luxury home, beach house, city street) and pose — you may change background and body pose. Identity stays the same.
7. QUALITY: Sharp, editorial, photorealistic — like the person was professionally photographed wearing this outfit.

FORBIDDEN OUTPUTS: flat overlays, visible garment edges, original purple/shirt fabric showing under new jacket, shoulder patches of fabric, AI collage artifacts.

Output only the final photograph.
''';
}

const _kNgmyOutfitRetryExtra = '''

RETRY — previous attempt had overlay/cutout artifacts. This time: completely REPLACE all clothing on the body. The person must be INSIDE the outfit, not with clothes placed ON TOP of them. Full suit/blazer must wrap the torso with arms through sleeves.
''';

Future<String?> _ngmyOutfitVisionBrief({
  required String apiKey,
  required Uint8List personBytes,
  required String personMime,
  required Uint8List outfitBytes,
  required String outfitMime,
}) async {
  final result = await _callGeminiDirect(
    apiKey,
    _kNgmyOutfitVisionBriefPrompt,
    images: [
      (mimeType: personMime, data: base64Encode(personBytes)),
      (mimeType: outfitMime, data: base64Encode(outfitBytes)),
    ],
  );
  final text = result.text?.trim();
  if (text != null && text.length > 80) return text;
  return null;
}

Uint8List? _extractGeminiImageFromResponse(Map<String, dynamic> data) {
  final candidates = data['candidates'];
  if (candidates is! List || candidates.isEmpty) return null;
  final parts = candidates[0]['content']?['parts'];
  if (parts is! List) return null;
  for (final part in parts) {
    if (part is! Map) continue;
    final inline = part['inlineData'] ?? part['inline_data'];
    if (inline is Map) {
      final b64 = inline['data']?.toString();
      if (b64 != null && b64.trim().isNotEmpty) {
        try {
          return base64Decode(b64.trim());
        } catch (_) {}
      }
    }
  }
  return null;
}

Future<({Uint8List? bytes, String? error})> _callGeminiOutfitDirect({
  required String apiKey,
  required Uint8List personBytes,
  required String personMime,
  required String prompt,
}) async {
  const models = [
    'gemini-2.5-flash-image',
    'gemini-2.5-flash-image-preview',
    'gemini-2.0-flash-preview-image-generation',
  ];
  // Person photo only — outfit is described in text to avoid paste/overlay artifacts.
  final parts = <Map<String, dynamic>>[
    {'text': prompt},
    {
      'inline_data': {
        'mime_type': personMime.trim().isEmpty ? 'image/jpeg' : personMime,
        'data': base64Encode(personBytes),
      },
    },
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
                {'parts': parts},
              ],
              'generationConfig': {
                'responseModalities': ['TEXT', 'IMAGE'],
                'temperature': 0.35,
              },
            }),
          )
          .timeout(const Duration(seconds: 180));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body) as Map<String, dynamic>;
        final bytes = _extractGeminiImageFromResponse(data);
        if (bytes != null && bytes.length > 2048) {
          return (bytes: bytes, error: null);
        }
        lastError = 'No image in AI response';
      } else {
        lastBody = response.body;
        lastError = 'HTTP ${response.statusCode}';
      }
    } catch (e) {
      lastError = e;
    }
  }
  return (bytes: null, error: _extractApiErrorMessage(lastError, body: lastBody));
}

Future<({Uint8List? bytes, String? error})> _callGeminiOutfitViaProxy({
  required Uint8List personBytes,
  required String personMime,
  required String prompt,
}) async {
  try {
    final body = <String, dynamic>{
      'action': 'geminiVirtualOutfit',
      'prompt': prompt,
      'personOnly': true,
      'images': [
        {'mimeType': personMime, 'data': base64Encode(personBytes)},
      ],
    };

    final data = await ngmyEdgeInvoke(body, timeout: const Duration(seconds: 22));
    if (data != null) {
      final b64 = data['imageBase64']?.toString();
      if (b64 != null && b64.trim().isNotEmpty) {
        return (bytes: base64Decode(b64.trim()), error: null);
      }
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (bytes: null, error: err);
    }
    return (bytes: null, error: 'AI proxy unavailable.');
  } catch (e) {
    return (bytes: null, error: _extractApiErrorMessage(e));
  }
}

/// Virtual outfit try-on — person photo + outfit reference → photorealistic dressed image.
Future<({Uint8List? bytes, String? error})> ngmyAiVirtualOutfitTryOn({
  required String apiKey,
  required Uint8List personBytes,
  required Uint8List outfitBytes,
  String personMime = 'image/jpeg',
  String outfitMime = 'image/jpeg',
  String styleNotes = '',
  void Function(String status)? onStatus,
}) async {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.provider != NgmyAiProviderKind.gemini && !ngmyIsServerManagedAiKey(creds.apiKey)) {
    return (
      bytes: null,
      error: 'AI Outfit Studio needs a Google Gemini API key (AIza… or gemini: prefix).',
    );
  }
  if (personBytes.length < 1024) return (bytes: null, error: 'Person photo is too small or missing.');
  if (outfitBytes.length < 512) return (bytes: null, error: 'Outfit photo is too small or missing.');

  onStatus?.call('Studying your photo and outfit…');
  String? brief;
  if (!ngmyIsServerManagedAiKey(creds.apiKey)) {
    brief = await _ngmyOutfitVisionBrief(
      apiKey: creds.apiKey,
      personBytes: personBytes,
      personMime: personMime,
      outfitBytes: outfitBytes,
      outfitMime: outfitMime,
    );
  }

  final visionBrief = brief ??
      'Dress the person in the complete outfit from the reference — full replacement of all original clothing.';
  var prompt = ngmyBuildOutfitTryOnPrompt(visionBrief: visionBrief, styleNotes: styleNotes);

  Future<({Uint8List? bytes, String? error})> runOnce(String p) async {
    final proxied = await _callGeminiOutfitViaProxy(
      personBytes: personBytes,
      personMime: personMime,
      prompt: p,
    );
    if (proxied.bytes != null) return proxied;
    if (ngmyIsServerManagedAiKey(creds.apiKey) || kIsWeb) return proxied;
    return _callGeminiOutfitDirect(
      apiKey: creds.apiKey,
      personBytes: personBytes,
      personMime: personMime,
      prompt: p,
    );
  }

  onStatus?.call('Dressing you in the full outfit — pass 1…');
  var result = await runOnce(prompt);
  if (result.bytes == null) {
    onStatus?.call('Refining fit — pass 2…');
    prompt = '$prompt$_kNgmyOutfitRetryExtra';
    result = await runOnce(prompt);
  }

  if (result.bytes != null) return result;
  return (
    bytes: null,
    error: result.error ?? 'Could not generate outfit image. Try clearer full-body photos.',
  );
}
