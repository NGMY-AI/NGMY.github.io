import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_bible_dictionary_v1';

String _keyFor(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

/// Matches this app's existing Bible Study Teacher advisor persona — warm,
/// sharp, opens the text, leans on the original languages — so a lookup
/// here reads like it came from that same teacher.
String _buildPrompt(String query) {
  return '''
You are the Bible Study Teacher inside NGMY's Bible Dictionary tool: warm, sharp-minded, and clear. You explain Scripture plainly, invite real understanding rather than preaching, and reach for the original language when it actually helps.

A user is looking up: "$query"

Respond as a dictionary entry using EXACTLY this structure — one field per line, nothing before the first field and nothing after the last:
WORD: the key word or phrase being defined, in English
REFERENCE: the Bible verse reference this centers on, or "General" if none was given
ORIGINAL: the original Greek (or Hebrew for Old Testament words) term, a transliteration, and a short pronunciation guide — e.g. "agapē (ah-gah-PAY)"
MEANING: a clear, accurate, plain-English definition, 1-3 sentences
IN CONTEXT: how the word or verse is actually used in that passage and what it means there, 2-4 sentences
TEACHER'S NOTE: a short, warm teaching point or application in your own voice, 1-3 sentences

Stay accurate to the original Biblical languages and mainstream Christian scholarship. If the question isn't Bible-related, gently connect it to a relevant Biblical word or theme instead of refusing.
''';
}

class NgmyBibleLookup {
  NgmyBibleLookup({required this.id, required this.query, required this.raw, required this.timestamp});
  final String id;
  final String query;
  final String raw;
  final DateTime timestamp;

  Map<String, String> get fields {
    final result = <String, String>{};
    final pattern = RegExp(r"^(WORD|REFERENCE|ORIGINAL|MEANING|IN CONTEXT|TEACHER'S NOTE):\s*", multiLine: true, caseSensitive: false);
    final matches = pattern.allMatches(raw).toList();
    for (var i = 0; i < matches.length; i++) {
      final m = matches[i];
      final label = m.group(1)!.toUpperCase();
      final start = m.end;
      final end = i + 1 < matches.length ? matches[i + 1].start : raw.length;
      result[label] = raw.substring(start, end).trim();
    }
    return result;
  }

  Map<String, dynamic> toJson() => {'id': id, 'query': query, 'raw': raw, 'timestamp': timestamp.toUtc().toIso8601String()};

  factory NgmyBibleLookup.fromJson(Map<String, dynamic> j) => NgmyBibleLookup(
        id: (j['id'] ?? '').toString(),
        query: (j['query'] ?? '').toString(),
        raw: (j['raw'] ?? '').toString(),
        timestamp: DateTime.tryParse((j['timestamp'] ?? '').toString()) ?? DateTime.now(),
      );
}

Future<List<NgmyBibleLookup>> _loadHistory(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_keyFor(userEmail));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw) as List;
    return list.map((e) => NgmyBibleLookup.fromJson(Map<String, dynamic>.from(e as Map))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _saveHistory(String userEmail, List<NgmyBibleLookup> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_keyFor(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyBibleDictionaryCount({required String userEmail}) async => (await _loadHistory(userEmail)).length;

const _kExampleQueries = ['agape', 'John 3:16', 'grace in Ephesians 2:8', 'logos', 'shalom', 'Psalm 23'];

Future<void> showNgmyBibleDictionaryDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Bible Dictionary',
    barrierColor: NgmyHubTheme.of(context).barrier,
    transitionDuration: const Duration(milliseconds: 300),
    pageBuilder: (ctx, a1, a2) => _BibleDictionaryScreen(userEmail: userEmail),
    transitionBuilder: (ctx, anim, a2, child) => FadeTransition(
      opacity: anim,
      child: ScaleTransition(scale: Tween<double>(begin: 0.96, end: 1).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)), child: child),
    ),
  );
}

class _BibleDictionaryScreen extends StatefulWidget {
  const _BibleDictionaryScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_BibleDictionaryScreen> createState() => _BibleDictionaryScreenState();
}

class _BibleDictionaryScreenState extends State<_BibleDictionaryScreen> {
  static const _accent1 = Color(0xFF7C3AED);
  static const _accent2 = Color(0xFFD4AF37);

  final _query = TextEditingController();
  List<NgmyBibleLookup> _history = [];
  bool _loading = true;
  bool _searching = false;
  String? _error;
  String? _apiKey;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  @override
  void dispose() {
    _query.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final h = await _loadHistory(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _history = h;
      _loading = false;
    });
  }

  Future<void> _lookup([String? preset]) async {
    final q = (preset ?? _query.text).trim();
    if (q.isEmpty || _searching) return;
    setState(() {
      _searching = true;
      _error = null;
    });
    HapticFeedback.selectionClick();

    _apiKey ??= await ngmyResolveGeminiApiKey();
    final creds = ngmyParseAiCredentials(_apiKey ?? '');
    final result = await ngmyAiGenerateWithRetry(creds, _buildPrompt(q));

    if (!mounted) return;
    final text = result.text?.trim();
    if (text == null || text.isEmpty) {
      setState(() {
        _searching = false;
        _error = ngmyAiHelperFailureMessage(apiKey: _apiKey ?? '', lastError: result.error);
      });
      return;
    }

    final entry = NgmyBibleLookup(id: DateTime.now().microsecondsSinceEpoch.toString(), query: q, raw: text, timestamp: DateTime.now());
    final next = [entry, ..._history];
    await _saveHistory(widget.userEmail, next);
    if (!mounted) return;
    setState(() {
      _history = next;
      _searching = false;
      _query.clear();
    });
    HapticFeedback.mediumImpact();
  }

  Future<void> _delete(NgmyBibleLookup entry) async {
    final next = _history.where((e) => e.id != entry.id).toList();
    await _saveHistory(widget.userEmail, next);
    if (!mounted) return;
    setState(() => _history = next);
  }

  @override
  Widget build(BuildContext context) {
    final hub = NgmyHubTheme.of(context);
    final pad = MediaQuery.paddingOf(context);
    return Material(
      color: hub.scaffold,
      child: SafeArea(
        child: Padding(
          padding: EdgeInsets.fromLTRB(16, 10, 16, pad.bottom + 10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _header(hub),
              const SizedBox(height: 12),
              _searchBar(hub),
              const SizedBox(height: 10),
              _exampleChips(hub),
              const SizedBox(height: 12),
              if (_error != null) _errorBanner(hub),
              Expanded(
                child: _loading
                    ? const Center(child: CircularProgressIndicator(color: _accent1))
                    : _history.isEmpty
                        ? _emptyState(hub)
                        : ListView.separated(
                            itemCount: _history.length,
                            separatorBuilder: (_, __) => const SizedBox(height: 10),
                            itemBuilder: (_, i) => _entryCard(hub, _history[i]),
                          ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _header(NgmyHubTheme hub) {
    return Row(
      children: [
        Container(
          width: 42,
          height: 42,
          decoration: BoxDecoration(
            gradient: const LinearGradient(colors: [_accent1, _accent2]),
            borderRadius: BorderRadius.circular(14),
            boxShadow: [BoxShadow(color: _accent1.withValues(alpha: 0.35), blurRadius: 14, offset: const Offset(0, 5))],
          ),
          child: const Center(child: Text('📖', style: TextStyle(fontSize: 20))),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Bible Dictionary', style: TextStyle(color: hub.title, fontWeight: FontWeight.w900, fontSize: 20)),
              Text('Word meanings, Greek & Hebrew roots, verse study', style: TextStyle(color: hub.subtitle, fontSize: 11.5, fontWeight: FontWeight.w600)),
            ],
          ),
        ),
        IconButton(
          onPressed: () => Navigator.pop(context),
          icon: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(color: hub.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: hub.border)),
            child: Icon(Icons.close_rounded, color: hub.iconButtonIcon, size: 18),
          ),
        ),
      ],
    );
  }

  Widget _searchBar(NgmyHubTheme hub) {
    return Row(
      children: [
        Expanded(
          child: TextField(
            controller: _query,
            style: TextStyle(color: hub.title, fontWeight: FontWeight.w600),
            onSubmitted: (_) => _lookup(),
            decoration: InputDecoration(
              hintText: 'A word, a verse, or a question…',
              hintStyle: TextStyle(color: hub.muted),
              filled: true,
              fillColor: hub.inputFill,
              contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: hub.inputBorder)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: hub.inputBorder)),
            ),
          ),
        ),
        const SizedBox(width: 8),
        Material(
          color: Colors.transparent,
          child: InkWell(
            borderRadius: BorderRadius.circular(14),
            onTap: _searching ? null : () => _lookup(),
            child: Container(
              width: 46,
              height: 46,
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [_accent1, _accent2]),
                borderRadius: BorderRadius.circular(14),
                boxShadow: [BoxShadow(color: _accent1.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4))],
              ),
              child: _searching
                  ? const Padding(padding: EdgeInsets.all(13), child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2.4))
                  : const Icon(Icons.auto_stories_rounded, color: Colors.white, size: 20),
            ),
          ),
        ),
      ],
    );
  }

  Widget _exampleChips(NgmyHubTheme hub) {
    return SizedBox(
      height: 30,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: _kExampleQueries.length,
        separatorBuilder: (_, __) => const SizedBox(width: 8),
        itemBuilder: (_, i) {
          final ex = _kExampleQueries[i];
          return GestureDetector(
            onTap: _searching ? null : () => _lookup(ex),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(color: hub.chipOffBg, borderRadius: BorderRadius.circular(16), border: Border.all(color: hub.chipOffBorder)),
              child: Text(ex, style: TextStyle(color: hub.chipOffLabel, fontSize: 11.5, fontWeight: FontWeight.w700)),
            ),
          );
        },
      ),
    );
  }

  Widget _errorBanner(NgmyHubTheme hub) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: const Color(0xFFEF4444).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.3))),
      child: Text(_error!, style: TextStyle(color: hub.title, fontSize: 12.5, fontWeight: FontWeight.w600)),
    );
  }

  Widget _emptyState(NgmyHubTheme hub) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text('📖', style: TextStyle(fontSize: 40, color: hub.muted)),
          const SizedBox(height: 10),
          Text('Look up a word or a verse', style: TextStyle(color: hub.title, fontWeight: FontWeight.w800, fontSize: 15)),
          const SizedBox(height: 4),
          Text('Try one of the examples above to get started', style: TextStyle(color: hub.subtitle, fontSize: 12)),
        ],
      ),
    );
  }

  Widget _entryCard(NgmyHubTheme hub, NgmyBibleLookup entry) {
    final f = entry.fields;
    final word = f['WORD']?.trim();
    final hasStructured = word != null && word.isNotEmpty;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: hub.surface,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: hub.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Text(
                  hasStructured ? word : entry.query,
                  style: TextStyle(color: hub.title, fontWeight: FontWeight.w900, fontSize: 18),
                ),
              ),
              if ((f['REFERENCE'] ?? '').trim().isNotEmpty && (f['REFERENCE'] ?? '').trim().toLowerCase() != 'general')
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  margin: const EdgeInsets.only(left: 8, top: 2),
                  decoration: BoxDecoration(color: _accent1.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(8)),
                  child: Text(f['REFERENCE']!.trim(), style: const TextStyle(color: _accent1, fontWeight: FontWeight.w800, fontSize: 11)),
                ),
              GestureDetector(
                onTap: () => _delete(entry),
                child: Padding(
                  padding: const EdgeInsets.only(left: 8, top: 2),
                  child: Icon(Icons.close_rounded, size: 16, color: hub.muted),
                ),
              ),
            ],
          ),
          if (!hasStructured) ...[
            const SizedBox(height: 6),
            Text(entry.raw, style: TextStyle(color: hub.subtitle, fontSize: 13, height: 1.4)),
          ] else ...[
            if ((f['ORIGINAL'] ?? '').trim().isNotEmpty) ...[
              const SizedBox(height: 6),
              Text(f['ORIGINAL']!.trim(), style: const TextStyle(color: _accent2, fontStyle: FontStyle.italic, fontWeight: FontWeight.w700, fontSize: 13)),
            ],
            if ((f['MEANING'] ?? '').trim().isNotEmpty) ...[
              const SizedBox(height: 8),
              Text(f['MEANING']!.trim(), style: TextStyle(color: hub.title, fontSize: 13, height: 1.42, fontWeight: FontWeight.w600)),
            ],
            if ((f['IN CONTEXT'] ?? '').trim().isNotEmpty) ...[
              const SizedBox(height: 8),
              Text('IN CONTEXT', style: TextStyle(color: hub.muted, fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 0.6)),
              const SizedBox(height: 2),
              Text(f['IN CONTEXT']!.trim(), style: TextStyle(color: hub.subtitle, fontSize: 12.5, height: 1.4)),
            ],
            if ((f["TEACHER'S NOTE"] ?? '').trim().isNotEmpty) ...[
              const SizedBox(height: 10),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: _accent1.withValues(alpha: hub.isDark ? 0.12 : 0.07), borderRadius: BorderRadius.circular(12)),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('🕊️', style: TextStyle(fontSize: 13)),
                    const SizedBox(width: 6),
                    Expanded(child: Text(f["TEACHER'S NOTE"]!.trim(), style: TextStyle(color: hub.title, fontSize: 12.5, height: 1.4, fontWeight: FontWeight.w600, fontStyle: FontStyle.italic))),
                  ],
                ),
              ),
            ],
          ],
        ],
      ),
    );
  }
}
