import 'package:flutter/material.dart';

typedef NgmyAiToolOpener = Future<String?> Function(BuildContext context);
typedef NgmyAiPlaceOpener = Future<String?> Function(BuildContext context, Map<String, String> args);
typedef NgmyAiLookup = Future<NgmyAiLookupResult> Function(Map<String, String> args);

/// A place in the app an advisor can take the user to.
class NgmyAiPlace {
  const NgmyAiPlace({required this.description, required this.open, this.args = ''});

  /// One line for the advisor prompt ("Civic Registry — members, enrollment").
  final String description;

  /// Extra fields the advisor may pass, e.g. `query` (shown in the prompt).
  final String args;
  final NgmyAiPlaceOpener open;
}

/// Answer to an in-app lookup: real data the app found, plus places the user
/// can tap to go to (each map is an `open_tool` action's fields).
class NgmyAiLookupResult {
  const NgmyAiLookupResult(this.text, {this.goTo = const []});
  final String text;
  final List<Map<String, String>> goTo;
}

/// Lets NGMY advisors and the Helper AI open places inside the app and look
/// things up for the user.
///
/// Two layers:
/// - **App-wide places and lookups** come from the main shell
///   ([registerAppWide]) and stay registered for the whole session.
/// - **Screen tools** come from whichever chat screen is open ([register]);
///   a screen re-registering or clearing never wipes the app-wide places.
class NgmyAiAppBridge {
  NgmyAiAppBridge._();

  static BuildContext? Function()? _context;
  static final Map<String, NgmyAiToolOpener> _tools = {};

  static BuildContext? Function()? _appContext;
  static final Map<String, NgmyAiPlace> _places = {};
  static final Map<String, ({String description, NgmyAiLookup run})> _lookups = {};

  static void register({
    required BuildContext? Function() context,
    required Map<String, NgmyAiToolOpener> tools,
  }) {
    _context = context;
    _tools
      ..clear()
      ..addAll(tools);
  }

  static void clear() {
    _context = null;
    _tools.clear();
  }

  static void registerAppWide({
    required BuildContext? Function() context,
    required Map<String, NgmyAiPlace> places,
    Map<String, ({String description, NgmyAiLookup run})> lookups = const {},
  }) {
    _appContext = context;
    _places
      ..clear()
      ..addAll(places);
    _lookups
      ..clear()
      ..addAll(lookups);
  }

  static List<String> get toolIds => {..._tools.keys, ..._places.keys}.toList()..sort();

  static bool get hasAppWide => _places.isNotEmpty;

  /// Prompt lines describing every place and lookup, for the advisor.
  static String catalogForPrompt() {
    final buf = StringBuffer();
    final ids = _places.keys.toList()..sort();
    for (final id in ids) {
      final p = _places[id]!;
      buf.writeln('- $id — ${p.description}${p.args.isEmpty ? '' : ' (fields: ${p.args})'}');
    }
    final extra = _tools.keys.where((k) => !_places.containsKey(k)).toList()..sort();
    if (extra.isNotEmpty) buf.writeln('- also: ${extra.join(', ')}');
    return buf.toString().trimRight();
  }

  static String lookupCatalogForPrompt() {
    final buf = StringBuffer();
    for (final e in _lookups.entries) {
      buf.writeln('- ${e.key} — ${e.value.description}');
    }
    return buf.toString().trimRight();
  }

  static BuildContext? _liveContext() {
    final screen = _context?.call();
    if (screen != null && screen.mounted) return screen;
    final app = _appContext?.call();
    if (app != null && app.mounted) return app;
    return null;
  }

  static Future<String?> open(String toolId, {Map<String, String> args = const {}}) async {
    final ctx = _liveContext();
    if (ctx == null) {
      return 'Open NGMY on your phone first, then ask the AI again.';
    }
    final id = toolId.trim().toLowerCase();
    final place = _places[id];
    if (place != null) return place.open(ctx, args);
    final fn = _tools[id];
    if (fn == null) {
      return 'Unknown place "$toolId". Try: ${toolIds.join(', ')}.';
    }
    return fn(ctx);
  }

  static Future<NgmyAiLookupResult> lookup(String kind, Map<String, String> args) async {
    final l = _lookups[kind.trim().toLowerCase()];
    if (l == null) {
      return NgmyAiLookupResult('I can\'t look that up from here yet.');
    }
    try {
      return await l.run(args);
    } catch (e) {
      debugPrint('[ai-bridge] lookup $kind: $e');
      return const NgmyAiLookupResult('Something went wrong while looking that up. Try again in a moment.');
    }
  }
}
