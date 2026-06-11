import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_app_builder_models.dart';

Future<String> ngmyAppBuilderAiChat({
  required String apiKey,
  required NgmyAppBuilderActor actor,
  required String userMessage,
  NgmyAppProject? project,
  List<Map<String, String>> history = const [],
}) async {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) {
    return 'Add an AI API key in Admin → Management Hub → Global Settings, then try again.';
  }

  final projectBlock = project == null
      ? ''
      : '\n\nCurrent app JSON:\n${jsonEncode(project.toMap())}';

  final transcript = StringBuffer();
  for (final m in history.takeLast(8)) {
    final role = m['role'] == 'ai' ? 'Assistant' : 'User';
    transcript.writeln('$role: ${m['text']}');
  }

  final prompt = '''
${actor.systemPrompt}

$projectBlock

${transcript.isNotEmpty ? 'Recent chat:\n$transcript\n' : ''}
User: $userMessage
''';

  try {
    final reply = await ngmyAiGenerateWithCredentials(creds, prompt);
    final text = reply.text?.trim();
    if (text != null && text.isNotEmpty) return text;
    return reply.error ?? 'AI returned an empty reply. Try again.';
  } catch (e) {
    debugPrint('[app builder ai] $e');
    return 'AI error: $e';
  }
}

Future<NgmyAppProject?> ngmyAppBuilderAiGenerateApp({
  required String apiKey,
  required String ownerEmail,
  required String idea,
  NgmyAppProject? base,
}) async {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) return null;

  final prompt = '''
You are Bolt, the NGMY App Builder AI. Create a mini mobile app from this idea:
"$idea"

Return ONLY valid JSON (no markdown fences) with:
{
  "name": "string",
  "tagline": "string",
  "themeColorHex": "#6366F1",
  "screens": [
    {"id":"home","title":"Welcome","kind":"welcome","data":{"subtitle":"...","buttonLabel":"Start","buttonTargetScreenId":"menu","heroEmoji":"✨"}},
    {"id":"menu","title":"Menu","kind":"menu","data":{"items":[{"label":"...","targetScreenId":"...","icon":"star"}]}},
    {"id":"about","title":"About","kind":"content","data":{"body":"..."}}
  ]
}
Use kinds: welcome, menu, content, form, aiChat. Include 3-6 screens with working navigation ids.
''';

  try {
    final raw = await ngmyAiGenerateWithCredentials(creds, prompt);
    if (raw.text == null) return null;
    final jsonText = _extractJson(raw.text!);
    if (jsonText == null) return null;
    final decoded = jsonDecode(jsonText);
    if (decoded is! Map) return null;
    final map = Map<String, dynamic>.from(decoded);
    final now = DateTime.now().toUtc().toIso8601String();
    final screens = <NgmyAppScreen>[];
    final screensRaw = map['screens'];
    if (screensRaw is List) {
      for (final item in screensRaw) {
        if (item is Map) screens.add(NgmyAppScreen.fromMap(Map<String, dynamic>.from(item)));
      }
    }
    if (screens.isEmpty) return null;

    final color = _parseColorHex(map['themeColorHex']?.toString() ?? '#6366F1');
    return NgmyAppProject(
      id: base?.id ?? 'app_${DateTime.now().millisecondsSinceEpoch}',
      name: (map['name'] ?? base?.name ?? 'AI App').toString(),
      tagline: (map['tagline'] ?? base?.tagline ?? '').toString(),
      ownerEmail: ownerEmail.toLowerCase().trim(),
      themeColor: color,
      screens: screens,
      status: base?.status ?? NgmyAppBuilderStatus.draft,
      createdAt: base?.createdAt ?? now,
      updatedAt: now,
    );
  } catch (e) {
    debugPrint('[app builder ai generate] $e');
    return null;
  }
}

String? _extractJson(String raw) {
  var text = raw.trim();
  if (text.startsWith('```')) {
    text = text.replaceAll(RegExp(r'^```[a-zA-Z]*\n?'), '').replaceAll('```', '').trim();
  }
  final start = text.indexOf('{');
  final end = text.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  return text.substring(start, end + 1);
}

int _parseColorHex(String hex) {
  var h = hex.trim().toUpperCase();
  if (h.startsWith('#')) h = h.substring(1);
  if (h.length == 6) h = 'FF$h';
  final v = int.tryParse(h, radix: 16);
  return v ?? 0xFF6366F1;
}

extension _TakeLast<T> on List<T> {
  Iterable<T> takeLast(int count) {
    if (length <= count) return this;
    return sublist(length - count);
  }
}
