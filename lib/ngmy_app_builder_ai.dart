import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_runtime.dart';

class NgmyAppBuilderCopilotResult {
  final String message;
  final NgmyAppProject? updatedProject;

  const NgmyAppBuilderCopilotResult({required this.message, this.updatedProject});
}

Future<NgmyAppBuilderCopilotResult> ngmyAppBuilderAiCopilot({
  required String apiKey,
  required String userMessage,
  NgmyAppProject? project,
  List<Map<String, String>> history = const [],
}) async {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) {
    return const NgmyAppBuilderCopilotResult(
      message: 'Add an AI API key in Admin → Management Hub → Global Settings, then try again.',
    );
  }

  final actor = kNgmyAppBuilderActors.firstWhere((a) => a.id == 'builder');
  final projectBlock = project == null
      ? '\nNo app loaded yet — user may want to create a new app from scratch.'
      : '\n\nCURRENT APP JSON (edit this when user asks for changes):\n${jsonEncode(project.toMap())}';

  final transcript = StringBuffer();
  for (final m in history.takeLast(10)) {
    final role = m['role'] == 'ai' ? 'Bolt' : 'User';
    transcript.writeln('$role: ${m['text']}');
  }

  final prompt = '''
${actor.systemPrompt}

You can handle ANY App Studio request — new apps, edits, renames, theme changes, dark/light mode toggles, adding menus, forms, lists, settings, workouts, venues, databases, SEO, navigation, or fixing broken screens.

NEVER say a feature is impossible or limited. App Studio is FREE and UNLIMITED — no caps on screens, features, or complexity.
Dark mode WORKS: switch setting "dark_mode". Users can write custom code in customCode and edit Code Studio.
Always emit ---APP_JSON--- when they want any change. Build like a professional no-code app creator.

You build WORKING apps — not text-only brochures. Every feature must FUNCTION:
- Forms MUST have "collection" and save data (venues, check-ins, contacts, etc.)
- Lists MUST use "dataList" widget bound to the same collection
- Settings MUST use "switch" widgets that persist
- Workouts MUST use "workoutPlan" with checkable exercises
- Venues/bookings/products: form + dataList + stat on home screen

BUTTONS & NAVIGATION (critical — wire everything):
- When user says "add a button that does X" or "button to go to Y", add {"type":"button","label":"...","target":"<screenId>","action":"navigate"}.
- action: navigate (default) | snack (needs "message") | clear (needs "collection").
- Every button MUST have "target" pointing to a real screen id. Create the target screen if missing.
- menuGrid items use "target" (not targetScreenId). Forms may use "navigateAfter" after save.
- After adding screens, wire home menuGrid + buttons so the app is usable without extra taps.

DOMAIN INTELLIGENCE — infer full apps from one command:
- STORE / SHOP / E-COMMERCE: home (hero+stat+menuGrid), add_product form (collection: products), products_list dataList, product detail optional, cart dataList (collection: cart), checkout form, settings with dark_mode. Wire Browse→list, Sell→form, Cart→cart, Checkout button on cart.
- SOCIAL / FEED: post form, feed dataList, profile content, settings.
- BOOKING / VENUE: venue form, venues_list, booking form, settings.
- FITNESS: workoutPlan screens, progress stat, settings.
Always include ALL screens a real app of that type needs — never a single text screen.

Use kind "custom" with data.layout for ALL interactive screens. NEVER use kind "content" with only body text for features users can use.

IMPORTANT RESPONSE FORMAT:
1) Always write a friendly reply to the user first (2-4 sentences).
2) When the user wants to create, edit, add, remove, or change ANY part of the app, append exactly:
   ---APP_JSON---
   then valid JSON:
   {
     "name": "string",
     "tagline": "string",
     "themeColorHex": "#6366F1",
     "seoDescription": "short description for Google search",
     "screens": [
       {
         "id": "stable-id",
         "title": "Screen title",
         "kind": "welcome|menu|content|form|aiChat|custom",
         "data": {
           "layout": { "type": "column", "children": [...] }
         }
       }
     ],
     "database": {"provider":"none|firebase|supabase|mongodb|custom","projectUrl":"","apiKey":"","collectionPath":"","notes":""},
     "customCode": "optional notes"
   }
3) If user only asks questions, do NOT include ---APP_JSON---.
4) Keep screen ids stable when editing. Use target / targetScreenId for navigation.
5) Use data.layout with form+dataList+switch+workoutPlan+stat widgets. Forms without "collection" are WRONG.
6) When user asks for settings, venues, workouts, contact — build working UI not placeholder text.
7) If the user says "change", "add", "remove", "fix", or "make it like" — always emit ---APP_JSON--- with the full updated app.
8) You may add appIcon (emoji), themeColorHex, tagline, seoDescription, and multiple screens in one reply.

$kNgmyAppBuilderCodeSchemaHelp

$projectBlock

${transcript.isNotEmpty ? 'Recent chat:\n$transcript\n' : ''}
User: $userMessage
''';

  try {
    final reply = await ngmyAiGenerateWithCredentials(creds, prompt);
    final text = reply.text?.trim();
    if (text == null || text.isEmpty) {
      return NgmyAppBuilderCopilotResult(message: reply.error ?? 'AI returned an empty reply. Try again.');
    }
    return _parseCopilotReply(text, project);
  } catch (e) {
    debugPrint('[app builder copilot] $e');
    return NgmyAppBuilderCopilotResult(message: 'AI error: $e');
  }
}

NgmyAppBuilderCopilotResult _parseCopilotReply(String raw, NgmyAppProject? base) {
  final marker = '---APP_JSON---';
  if (!raw.contains(marker)) {
    return NgmyAppBuilderCopilotResult(message: raw.trim());
  }
  final parts = raw.split(marker);
  final message = parts.first.trim();
  final jsonPart = parts.length > 1 ? parts.sublist(1).join(marker).trim() : '';
  final jsonText = _extractJson(jsonPart);
  if (jsonText == null) {
    return NgmyAppBuilderCopilotResult(
      message: message.isEmpty ? 'I could not apply that change. Try being more specific.' : message,
    );
  }
  try {
    final decoded = jsonDecode(jsonText);
    if (decoded is! Map) {
      return NgmyAppBuilderCopilotResult(message: message.isEmpty ? raw.trim() : message);
    }
    final updated = _projectFromAiMap(Map<String, dynamic>.from(decoded), base);
    if (updated == null) {
      return NgmyAppBuilderCopilotResult(message: message.isEmpty ? 'Could not parse app changes.' : message);
    }
    final suffix = message.isEmpty ? 'Done — I updated your app. Check Preview to see changes.' : message;
    return NgmyAppBuilderCopilotResult(message: suffix, updatedProject: updated);
  } catch (e) {
    debugPrint('[app builder copilot parse] $e');
    return NgmyAppBuilderCopilotResult(message: message.isEmpty ? 'Could not apply changes: $e' : message);
  }
}

NgmyAppProject? _projectFromAiMap(Map<String, dynamic> map, NgmyAppProject? base) {
  final screensRaw = map['screens'];
  final screens = <NgmyAppScreen>[];
  if (screensRaw is List) {
    for (final item in screensRaw) {
      if (item is Map) screens.add(NgmyAppScreen.fromMap(Map<String, dynamic>.from(item)));
    }
  }
  if (screens.isEmpty && base != null) return base;

  final now = DateTime.now().toUtc().toIso8601String();
  final dbRaw = map['database'];
  final database = dbRaw is Map
      ? NgmyAppDatabaseConfig.fromMap(Map<String, dynamic>.from(dbRaw))
      : (base?.database ?? const NgmyAppDatabaseConfig());

  return NgmyAppProject(
    id: base?.id ?? 'app_${DateTime.now().millisecondsSinceEpoch}',
    name: (map['name'] ?? base?.name ?? 'My App').toString(),
    tagline: (map['tagline'] ?? base?.tagline ?? '').toString(),
    ownerEmail: base?.ownerEmail ?? '',
    themeColor: _parseColorHex(map['themeColorHex']?.toString() ?? '#6366F1'),
    screens: screens.isEmpty ? (base?.screens ?? [NgmyAppScreen.welcome(id: 'home', title: 'Welcome')]) : screens,
    status: base?.status ?? NgmyAppBuilderStatus.draft,
    createdAt: base?.createdAt ?? now,
    updatedAt: now,
    slug: base?.slug ?? '',
    publicUrl: base?.publicUrl ?? '',
    seoDescription: (map['seoDescription'] ?? base?.seoDescription ?? map['tagline'] ?? '').toString(),
    database: database,
    customCode: (map['customCode'] ?? base?.customCode ?? '').toString(),
    appIcon: (map['appIcon'] ?? base?.appIcon ?? '').toString(),
    publishedAt: base?.publishedAt,
    reviewNote: base?.reviewNote,
  );
}

Future<String> ngmyAppBuilderAiChat({
  required String apiKey,
  required NgmyAppBuilderActor actor,
  required String userMessage,
  NgmyAppProject? project,
  List<Map<String, String>> history = const [],
}) async {
  if (actor.id == 'builder') {
    final r = await ngmyAppBuilderAiCopilot(apiKey: apiKey, userMessage: userMessage, project: project, history: history);
    return r.message;
  }
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
  final result = await ngmyAppBuilderAiCopilot(
    apiKey: apiKey,
    userMessage: 'Create a complete WORKING app for: $idea. Use custom layouts with form (collection saves data), dataList (shows saved items), switch (settings), workoutPlan (if fitness). No text-only screens for interactive features.',
    project: base,
  );
  final p = result.updatedProject;
  if (p == null) return null;
  return p.copyWith(ownerEmail: ownerEmail.toLowerCase().trim());
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
