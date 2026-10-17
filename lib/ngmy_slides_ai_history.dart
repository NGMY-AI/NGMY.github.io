import 'dart:async';
import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Keeps the words, style and effects of an AI-made presentation just before the AI changes
/// them, so the user can say "undo" or "bring back what it was" within this window.
const Duration kNgmySlidesAiHistoryWindow = Duration(minutes: 20);

const String _kHistoryPrefsKey = 'ngmy_slides_ai_history_v1';

/// One saved version: the AI outline (words, style, frames) and the effects it used.
class NgmySlidesAiSnapshot {
  const NgmySlidesAiSnapshot({required this.at, required this.outlineJson, required this.extras, required this.request});
  final DateTime at;
  final String outlineJson;
  final List<String> extras;
  /// What the user asked for when this version was replaced.
  final String request;

  Map<String, dynamic> toJson() => {
        'at': at.toUtc().toIso8601String(),
        'outline': outlineJson,
        'extras': extras,
        'request': request,
      };

  static NgmySlidesAiSnapshot? fromJson(Object? raw) {
    if (raw is! Map) return null;
    final at = DateTime.tryParse('${raw['at']}');
    final outline = '${raw['outline'] ?? ''}';
    if (at == null || outline.isEmpty) return null;
    final extras = raw['extras'] is List ? (raw['extras'] as List).map((e) => '$e').toList() : <String>[];
    return NgmySlidesAiSnapshot(at: at.toLocal(), outlineJson: outline, extras: extras, request: '${raw['request'] ?? ''}');
  }
}

/// Newest first, per presentation id. Kept in memory so saving is instant; also written to
/// local storage so it survives a reload.
final Map<String, List<NgmySlidesAiSnapshot>> _history = {};
bool _historyLoaded = false;
bool _lastEditWasRestore = false;

/// Reads the saved versions from local storage (once, at start). Safe to call again.
Future<void> ngmySlidesAiLoadHistory() async {
  if (_historyLoaded) return;
  _historyLoaded = true;
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kHistoryPrefsKey);
    if (raw == null || raw.isEmpty) return;
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return;
    for (final entry in decoded.entries) {
      final list = <NgmySlidesAiSnapshot>[];
      if (entry.value is List) {
        for (final item in entry.value as List) {
          final snap = NgmySlidesAiSnapshot.fromJson(item);
          if (snap != null) list.add(snap);
        }
      }
      _history.putIfAbsent('${entry.key}', () => list);
    }
    _pruneAll();
  } catch (_) {
    // Storage can be unavailable (private window); the in-memory history still works.
  }
}

void _pruneAll() {
  final cutoff = DateTime.now().subtract(kNgmySlidesAiHistoryWindow);
  for (final list in _history.values) {
    list.removeWhere((s) => s.at.isBefore(cutoff));
  }
  _history.removeWhere((_, list) => list.isEmpty);
}

Future<void> _persist() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final out = <String, dynamic>{
      for (final e in _history.entries) e.key: [for (final s in e.value) s.toJson()],
    };
    await prefs.setString(_kHistoryPrefsKey, jsonEncode(out));
  } catch (_) {
    // Keep working from memory if storage is unavailable.
  }
}

/// Saves the version that is about to be replaced. Called before every AI change.
void ngmySlidesAiRemember({
  required String deckId,
  required String outlineJson,
  required Set<String> extras,
  required String request,
}) {
  if (deckId.isEmpty || outlineJson.trim().isEmpty) return;
  _pruneAll();
  final list = _history.putIfAbsent(deckId, () => <NgmySlidesAiSnapshot>[]);
  list.insert(
    0,
    NgmySlidesAiSnapshot(
      at: DateTime.now(),
      outlineJson: outlineJson,
      extras: extras.toList(),
      request: request,
    ),
  );
  unawaited(_persist());
}

/// The newest saved version of this presentation that is still inside the window, or null.
NgmySlidesAiSnapshot? ngmySlidesAiLatest(String deckId) {
  _pruneAll();
  final list = _history[deckId];
  return (list == null || list.isEmpty) ? null : list.first;
}

/// Drops the version that was just brought back, so the next "undo" goes one step further.
void ngmySlidesAiDropLatest(String deckId) {
  final list = _history[deckId];
  if (list == null || list.isEmpty) return;
  list.removeAt(0);
  if (list.isEmpty) _history.remove(deckId);
  unawaited(_persist());
}

/// True when the request asks to go back to an earlier version (no AI call is needed).
bool ngmySlidesAiIsUndoRequest(String text) {
  final t = text.toLowerCase();
  return RegExp(
    r"\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|"
    r"go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\b",
  ).hasMatch(t);
}

/// The studio asks this after an edit: was the last change a restore (swap the whole deck in)?
bool ngmySlidesAiTakeRestoreFlag() {
  final was = _lastEditWasRestore;
  _lastEditWasRestore = false;
  return was;
}

void ngmySlidesAiMarkRestore() => _lastEditWasRestore = true;

