import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_invoice_templates.dart';
import 'ngmy_app_builder_layout_utils.dart';
import 'ngmy_app_builder_runtime.dart';
import 'ngmy_app_builder_social_blueprints.dart';

class NgmyAppBuilderCopilotResult {
  final String message;
  final NgmyAppProject? updatedProject;

  const NgmyAppBuilderCopilotResult({required this.message, this.updatedProject});
}

Future<NgmyAppBuilderCopilotResult> ngmyAppBuilderAiCopilot({
  required String apiKey,
  required String userMessage,
  NgmyAppProject? project,
  String ownerEmail = '',
  List<Map<String, String>> history = const [],
}) async {
  final resolvedOwnerEmail = ownerEmail.isNotEmpty ? ownerEmail : (project?.ownerEmail ?? '');
  final blueprintKind = NgmyAppSocialBlueprints.detectKind(userMessage);
  if (blueprintKind != null && (project == null || _looksLikeBuildRequest(userMessage))) {
    final built = NgmyAppSocialBlueprints.build(blueprintKind, ownerEmail: resolvedOwnerEmail, name: project?.name);
    if (built != null) {
      final merged = project == null
          ? built
          : built.copyWith(
              id: project.id,
              status: project.status,
              slug: project.slug,
              publicUrl: project.publicUrl,
              publishedAt: project.publishedAt,
              reviewNote: project.reviewNote,
            );
      return NgmyAppBuilderCopilotResult(
        message: 'Built your ${NgmyAppSocialBlueprints.label(blueprintKind)} app — real screens, navigation, and working data are wired up. Check Preview, then ask me to tweak colors, text, or add more screens anytime.',
        updatedProject: merged,
      );
    }
  }

  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) {
    return const NgmyAppBuilderCopilotResult(
      message: 'Add an AI API key in Admin → Management Menus → NGMY AI, then try again.',
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

NEVER say a feature is impossible. You can build ANY app type — media feeds, stores, invoices, QR, video hubs, social, fitness, booking, dashboards — with no cap on screens or complexity.
Dark mode WORKS: switch setting "dark_mode". Users can write custom code in customCode and edit Code Studio.
Always emit ---APP_JSON--- when they want any change. Build like a professional no-code app creator.

CRITICAL — CREATE / BUILD / MAKE / GENERATE requests:
If the user asks to CREATE, BUILD, MAKE, GENERATE, or "give me" an app (QR code, invoice, video links, store, anything) — you MUST ALWAYS end your reply with ---APP_JSON--- containing a COMPLETE working app. Never reply with only instructions or "I can't". You CAN build everything using layout widgets.

QR CODE APPS: use {"type":"qrGenerator","mode":"url"} and {"type":"qrGenerator","mode":"text"} screens + dataList of saved codes.
INVOICE APPS: use {"type":"invoiceBuilder","collection":"invoices"} + dataList of invoices.
VIDEO / DOWNLOAD LINK APPS: form saves url field + dataList with urlField:"url" so tapping opens the link.

TIKTOK / REELS: NEVER hero+menuGrid. Use reelFeed on home (fullBleed+hideAppBar), postComposer, profile, shell.bottomNav. Real vertical video swipe.

FACEBOOK: socialFeed home + postComposer + bottomNav. NOT menu hub.

GOOGLE: searchHub home (fullBleed) + bookmark form.

MAPS / NAVIGATION / TRAVEL / UBER / DELIVERY / REAL ESTATE:
YOU must build these from scratch in JSON — never tell the user to use a template.
Home screen MUST be mapView (fullBleed+hideAppBar):
{"type":"mapView","collection":"places","titleField":"name","subtitleField":"address","latField":"lat","lngField":"lng","centerLat":40.7128,"centerLng":-74.006,"height":420,"placeholder":"Search places…"}
Add screens: save-place form (name, address, lat, lng), saved places dataList, profile, settings.
shell.bottomNav: Map→home, Saved→list, Add→form, Profile→profile.
Pins open Google Maps. Works for fleet tracking, travel, food delivery, store locator — build ALL screens the user needs.

GAMES / ENGINES / CALCULATORS / CUSTOM TOOLS:
Use forms + dataList + stat + buttons + checklist + customCode notes. Multi-screen flows with real navigation. Never say "I can't build games" — build score trackers, quiz apps, timers, engines with state via collections.

BOOKING / CRM / SCHOOL / CHURCH / PORTFOLIO / DASHBOARDS:
Infer 5-8 screens minimum. Every data type gets form + list pair. Home shows stats and navigation.

AI CUSTOM BUILDS ONLY: Design unique layouts per request — mapView, socialFeed, reelFeed, searchHub, tabs, product feeds, CRM dashboards. Do NOT tell users to pick templates — YOU build it in ---APP_JSON---.

VISUAL VARIETY IS MANDATORY — this is not optional polish, it is the difference between a working app and a broken-looking one. hero+stat+menuGrid as the ONLY pattern, used for every single app regardless of what it does, is exactly what makes apps look like cookie-cutter copies of each other and is the single biggest complaint users have. Before writing the home screen, pick ONE dominant pattern based on what the app actually needs — do not reach for hero+stat+menuGrid by default:
- Checklist-led (habit trackers, daily routines, pet/plant care): lead with "checklist", hero optional, menuGrid optional/secondary.
- Schedule-led (coaching, fitness, classes): lead with "workoutPlan", not a menu of links to it.
- Catalog-led (recipe boxes, listings, directories): lead with "dataList" directly on the home screen, no menu wrapper needed.
- Dashboard-led (finance, sales, analytics): lead with 2-3 "stat" widgets (use "sumField" for totals) plus a "progress" bar, menuGrid secondary and smaller.
- Tabs-led (multi-category content — menus, episodes, multi-section info): lead with "tabs", each tab its own mini layout.
- Feed-led (social/community/marketplace browsing): socialFeed/reelFeed/searchHub fullBleed, never a menu hub.
- Map-led (places, real estate, delivery, travel): mapView fullBleed, never a menu hub.
Only fall back to hero+stat+menuGrid for apps that are genuinely just "a few unrelated tools in one place" with no natural dominant widget — and even then, vary it: alternate which "style" the menuGrid uses ("classic", "neon", "hologram", "pulse" — pick whichever fits the app's mood, do not always use "classic"), vary whether stat appears above or below the hero, and vary the emoji/theme color so two different app ideas never render identically.

MEDIA / SOCIAL: use socialFeed or reelFeed widgets — NOT plain dataList as home.

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
- FITNESS / WORKOUT / CALORIE / DIET / HABIT TRACKING: home screen MUST lead with "workoutPlan" or "checklist" directly (not a menuGrid of links to them) + a "stat" or "progress" widget, settings. Never wrap these behind a hero+menuGrid hub — the checkable list itself is the home screen.
- MONEY MAKING / SIDE HUSTLE / PASSIVE INCOME / EARN CASH / AFFILIATE: this is NOT a generic hero screen with a renamed title — it needs real earning mechanics. Build: home with a "stat" using "sumField":"amount" on collection "sales" (label "Total earned", prefix "\$") + menuGrid (Add listing→form, My listings→dataList, Sales history→stat+dataList, Referral link→qrGenerator, Withdraw→form collection "payouts"). add_listing form (title, price as type "number", description as type "textarea", collection "listings"). My listings dataList MUST use itemActions so selling something never makes the user retype the title/price: {"type":"dataList","collection":"listings","titleField":"title","subtitleField":"price","itemActions":[{"label":"Mark sold","targetCollection":"sales","copyFields":{"title":"item","price":"amount"},"extraFields":{},"removeSource":true,"successMessage":"Sale recorded!"}],"addTarget":"add_listing","addLabel":"Add listing"} — this is the ONLY way to record a sale, there is no separate "record a sale" form to retype into. referral screen: text explaining the bonus + qrGenerator (mode "text") so they can share a code. withdraw form (amount, method, note, collection "payouts"). Wire shell.bottomNav across these screens.
Always include ALL screens a real app of that type needs — never a single text screen.

"stat" widget: add "sumField" (e.g. "amount") to total a numeric field instead of just counting records — use this for any earnings/revenue/total-sales dashboard. Add "prefix":"\$" for money.

STRUCTURAL VS COSMETIC — when the user describes a different PURPOSE or TYPE of app than what is currently loaded (e.g. "turn this into a money making app", "make this a marketplace", "I want it to be a booking app instead"), you MUST restructure: add/replace screens, data collections, and navigation to match using the DOMAIN INTELLIGENCE above. Renaming the title/text on the existing screens WITHOUT adding the real screens/collections that domain needs is WRONG and will look broken to the user — they are asking for new functionality, not new words.

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
     "customCode": "optional notes",
     "shell": {"bottomNav":[{"icon":"home","label":"Home","target":"feed"}]}
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
    final reply = await ngmyAiGenerateForAppBuilder(creds, prompt);
    final text = reply.text?.trim();
    if (text == null || text.isEmpty) {
      return NgmyAppBuilderCopilotResult(message: reply.error ?? 'AI returned an empty reply. Try again.');
    }
    final email = ownerEmail.isNotEmpty ? ownerEmail : (project?.ownerEmail ?? '');
    return _parseCopilotReply(text, project, email);
  } catch (e) {
    debugPrint('[app builder copilot] $e');
    return NgmyAppBuilderCopilotResult(message: 'AI error: $e');
  }
}

NgmyAppBuilderCopilotResult _parseCopilotReply(String raw, NgmyAppProject? base, [String ownerEmail = '']) {
  final marker = '---APP_JSON---';
  if (!raw.contains(marker)) {
    final fallback = _extractJson(raw);
    if (fallback != null) {
      try {
        final decoded = jsonDecode(fallback);
        if (decoded is Map) {
          final updated = _projectFromAiMap(Map<String, dynamic>.from(decoded), base, ownerEmail);
          if (updated != null && _projectHasUsableScreens(updated)) {
            return NgmyAppBuilderCopilotResult(
              message: '${raw.trim()}\n\n(Done — I applied the app JSON from your reply.)',
              updatedProject: updated,
            );
          }
        }
      } catch (e) {
        debugPrint('[app builder copilot fallback] $e');
      }
    }
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
    final updated = _projectFromAiMap(Map<String, dynamic>.from(decoded), base, ownerEmail);
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

bool _projectHasUsableScreens(NgmyAppProject p) {
  if (p.screens.isEmpty) return false;
  if (p.screens.length > 1) return true;
  final s = p.screens.first;
  if (ngmyScreenLayout(s) != null) return true;
  return s.kind != NgmyAppScreenKind.content;
}

NgmyAppProject? _projectFromAiMap(Map<String, dynamic> map, NgmyAppProject? base, [String ownerEmail = '']) {
  final screensRaw = map['screens'];
  final screens = <NgmyAppScreen>[];
  if (screensRaw is List) {
    for (final item in screensRaw) {
      if (item is Map) screens.add(NgmyAppScreen.fromMap(Map<String, dynamic>.from(item)));
    }
  }
  if (screens.isEmpty && base != null) return base;
  if (screens.isEmpty) return null;

  final now = DateTime.now().toUtc().toIso8601String();
  final dbRaw = map['database'];
  final database = dbRaw is Map
      ? NgmyAppDatabaseConfig.fromMap(Map<String, dynamic>.from(dbRaw))
      : (base?.database ?? const NgmyAppDatabaseConfig());

  return NgmyAppProject(
    id: base?.id ?? 'app_${DateTime.now().millisecondsSinceEpoch}',
    name: (map['name'] ?? base?.name ?? 'My App').toString(),
    tagline: (map['tagline'] ?? base?.tagline ?? '').toString(),
    ownerEmail: ownerEmail.isNotEmpty ? ownerEmail : (base?.ownerEmail ?? ''),
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
    shell: map['shell'] is Map
        ? Map<String, dynamic>.from(map['shell'] as Map)
        : (base?.shell ?? const {}),
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
    return 'Add an AI API key in Admin → Management Menus → NGMY AI, then try again.';
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

class NgmyAppScreenAiResult {
  final String message;
  final NgmyAppScreen? screen;

  const NgmyAppScreenAiResult({required this.message, this.screen});
}

/// AI edits a single screen layout from natural language (buttons, text, wiring).
Future<NgmyAppScreenAiResult> ngmyAppBuilderAiEditScreen({
  required String apiKey,
  required NgmyAppScreen screen,
  required List<NgmyAppScreen> allScreens,
  required String userMessage,
  List<Map<String, String>> history = const [],
}) async {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) {
    return const NgmyAppScreenAiResult(
      message: 'Add an AI API key in Admin → Management Menus → NGMY AI, then try again.',
    );
  }

  final screensList = [for (final s in allScreens) {'id': s.id, 'title': s.title}];
  final transcript = StringBuffer();
  for (final m in history.takeLast(12)) {
    final role = m['role'] == 'ai' ? 'Bolt' : 'User';
    transcript.writeln('$role: ${m['text']}');
  }
  final prompt = '''
You are Bolt editing ONE screen in NGMY App Studio.
The user describes how buttons, text, widgets, colors, or designs should look or behave on this screen.
Remember prior conversation below — continue from context, do not forget earlier requests.

PRIOR CHAT:
${transcript.isEmpty ? '(none)' : transcript.toString()}

DESIGN POWERS — you CAN change:
- Any widget text, labels, URLs, collections, navigation
- Colors on widgets: "backgroundColor", "textColor", "accentColor" as hex (#RRGGBB or #AARRGGBB)
- Button look: large, outlined_button, custom colors
- Images: image url, profile handle, hero emoji
- Invoice templateId: ${ngmyAppBuilderInvoiceTemplateIdsForAi()}
- Map: "inApp": true (stay in app), centerLat, centerLng, height
- QR generator: mode, placeholder, colors, title

RESPONSE FORMAT:
1) Short friendly reply (1-3 sentences).
2) Append exactly ---SCREEN_JSON---
3) Then ONE screen JSON object:
   {"id":"${screen.id}","title":"...","kind":"custom","data":{"layout":{"type":"column","children":[...]}}}

RULES:
- Keep screen id "${screen.id}" unchanged.
- Use kind "custom" with data.layout.children for all widgets.
- Buttons: {"type":"button","label":"...","target":"<screenId>","action":"navigate|snack|clear"}
- Text: {"type":"text","text":"...","style":"title|subtitle|body"}
- Wire "target" to real ids: ${jsonEncode(screensList)}
- If user wants a button to show a message, use action "snack" with "message".
- Build working widgets — not placeholder-only text.

Current screen JSON:
${jsonEncode(screen.toMap())}

$kNgmyAppBuilderCodeSchemaHelp

User request: $userMessage
''';

  try {
    final reply = await ngmyAiGenerateForAppBuilder(creds, prompt);
    final text = reply.text?.trim();
    if (text == null || text.isEmpty) {
      return NgmyAppScreenAiResult(message: reply.error ?? 'AI returned an empty reply. Try again.');
    }
    const marker = '---SCREEN_JSON---';
    if (!text.contains(marker)) {
      return NgmyAppScreenAiResult(message: text);
    }
    final parts = text.split(marker);
    final message = parts.first.trim();
    final jsonPart = parts.length > 1 ? parts.sublist(1).join(marker).trim() : '';
    final jsonText = _extractJson(jsonPart);
    if (jsonText == null) {
      return NgmyAppScreenAiResult(
        message: message.isEmpty ? 'Could not apply that change — try being more specific.' : message,
      );
    }
    final map = jsonDecode(jsonText);
    if (map is! Map) {
      return NgmyAppScreenAiResult(message: message.isEmpty ? 'Invalid screen JSON from AI.' : message);
    }
    final screenMap = Map<String, dynamic>.from(map);
    screenMap['id'] = screen.id;
    final updated = NgmyAppScreen.fromMap(screenMap);
    return NgmyAppScreenAiResult(
      message: message.isEmpty ? 'Screen updated!' : message,
      screen: updated,
    );
  } catch (e) {
    debugPrint('[app builder screen ai] $e');
    return NgmyAppScreenAiResult(message: 'AI error: $e');
  }
}

/// AI edit for ONE widget at a specific index — keeps all other widgets unchanged.
Future<NgmyAppScreenAiResult> ngmyAppBuilderAiEditWidget({
  required String apiKey,
  required NgmyAppScreen screen,
  required int widgetIndex,
  required Map<String, dynamic> widgetJson,
  required List<NgmyAppScreen> allScreens,
  required String userMessage,
  List<Map<String, String>> history = const [],
}) async {
  final creds = ngmyParseAiCredentials(apiKey);
  if (creds.apiKey.isEmpty) {
    return const NgmyAppScreenAiResult(
      message: 'Add an AI API key in Admin → Management Menus → NGMY AI, then try again.',
    );
  }

  final widgets = ngmyLayoutChildren(screen);
  final screensList = [for (final s in allScreens) {'id': s.id, 'title': s.title}];
  final transcript = StringBuffer();
  for (final m in history.takeLast(12)) {
    if ((m['text'] ?? '').toString().trim().isEmpty) continue;
    final role = m['role'] == 'ai' ? 'Bolt' : 'User';
    transcript.writeln('$role: ${m['text']}');
  }
  final prompt = '''
You are Bolt editing ONE widget in NGMY App Studio.

CRITICAL — follow exactly:
- Screen id MUST stay "${screen.id}".
- layout.children MUST have EXACTLY ${widgets.length} widgets (same count, same order).
- ONLY change the widget at index $widgetIndex (0-based). Every other child must be identical to the current screen JSON.
- Apply whatever the user asks: text, labels, colors, design, templates, URLs, fields, collections, navigation.
- Remember prior conversation — user expects you to recall earlier messages in this widget chat.

PRIOR CHAT FOR THIS WIDGET:
${transcript.isEmpty ? '(none)' : transcript.toString()}

DESIGN — add any of these to the widget JSON when user asks:
- backgroundColor, textColor, accentColor (hex #RRGGBB)
- image url, profile handle, hero emoji/title/subtitle
- invoiceBuilder: templateId one of ${ngmyAppBuilderInvoiceTemplateIdsForAi()}
- mapView: inApp true (map stays in app), centerLat, centerLng, height, placeholder
- qrGenerator: mode url|text, placeholder, title, defaultValue, accentColor
- button: large true/false, action navigate|snack|openurl|clear

Widget at index $widgetIndex (edit this):
${jsonEncode(widgetJson)}

RESPONSE FORMAT:
1) Short friendly reply (1-2 sentences).
2) Append exactly ---SCREEN_JSON---
3) Full screen JSON:
   {"id":"${screen.id}","title":"...","kind":"custom","data":{"layout":{"type":"column","children":[...]}}}

Buttons: {"type":"button","label":"...","target":"<screenId>","action":"navigate|snack|clear|openurl","url":"..."}
Text: {"type":"text","text":"...","style":"title|subtitle|body"}
Link: {"type":"link","label":"...","url":"https://..."}
Banner: {"type":"banner","text":"...","variant":"info|warning|success"}
Progress: {"type":"progress","label":"...","value":0.0-1.0}
Rating: {"type":"rating","label":"...","value":1-5}
Contact: {"type":"contact","name":"...","phone":"...","email":"..."}
Video: {"type":"video","url":"https://...mp4","caption":"..."}
Invoice: {"type":"invoiceBuilder","collection":"invoices","title":"Create invoice","templateId":"modern"}
Map: {"type":"mapView","collection":"places","inApp":true,"centerLat":40.71,"centerLng":-74.0,"height":280}
QR: {"type":"qrGenerator","mode":"url","placeholder":"https://...","title":"Scan me","accentColor":"#6366F1"}

Screen ids for navigation: ${jsonEncode(screensList)}

Current full screen JSON:
${jsonEncode(screen.toMap())}

$kNgmyAppBuilderCodeSchemaHelp

User request for widget at index $widgetIndex: $userMessage
''';

  try {
    final reply = await ngmyAiGenerateForAppBuilder(creds, prompt);
    final text = reply.text?.trim();
    if (text == null || text.isEmpty) {
      return NgmyAppScreenAiResult(message: reply.error ?? 'AI returned an empty reply. Try again.');
    }
    const marker = '---SCREEN_JSON---';
    if (!text.contains(marker)) {
      return NgmyAppScreenAiResult(message: text);
    }
    final parts = text.split(marker);
    final message = parts.first.trim();
    final jsonPart = parts.length > 1 ? parts.sublist(1).join(marker).trim() : '';
    final jsonText = _extractJson(jsonPart);
    if (jsonText == null) {
      return NgmyAppScreenAiResult(
        message: message.isEmpty ? 'Could not apply that change — try being more specific.' : message,
      );
    }
    final map = jsonDecode(jsonText);
    if (map is! Map) {
      return NgmyAppScreenAiResult(message: message.isEmpty ? 'Invalid screen JSON from AI.' : message);
    }
    final screenMap = Map<String, dynamic>.from(map);
    screenMap['id'] = screen.id;
    var updated = NgmyAppScreen.fromMap(screenMap);
    final newChildren = ngmyLayoutChildren(updated);
    if (newChildren.length != widgets.length) {
      if (widgetIndex >= 0 && widgetIndex < newChildren.length) {
        final merged = List<Map<String, dynamic>>.from(widgets);
        merged[widgetIndex] = newChildren[widgetIndex];
        updated = ngmyScreenWithLayoutChildren(screen, merged);
      } else {
        return NgmyAppScreenAiResult(
          message: message.isEmpty
              ? 'AI changed the widget list — try a simpler request for this widget only.'
              : message,
        );
      }
    }
    return NgmyAppScreenAiResult(
      message: message.isEmpty ? 'Widget updated!' : message,
      screen: updated,
    );
  } catch (e) {
    debugPrint('[app builder widget ai] $e');
    return NgmyAppScreenAiResult(message: 'AI error: $e');
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

/// True when the message reads like "create/build/turn this into X" rather
/// than a small tweak to the app already loaded (so mentioning e.g. "map" in
/// passing doesn't hijack an unrelated edit on an existing project).
bool _looksLikeBuildRequest(String message) {
  final q = message.toLowerCase();
  const verbs = [
    'create', 'build', 'make', 'generate', 'give me', 'start over',
    'turn this into', 'turn it into', 'i want an app', 'switch to', 'rebuild',
    'convert this', 'change this into', 'change it into',
  ];
  return verbs.any((v) => q.contains(v));
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
