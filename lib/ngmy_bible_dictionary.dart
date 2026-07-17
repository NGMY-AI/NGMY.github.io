import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_bible_dictionary_threads_v2';
const _kLangKey = 'ngmy_bible_dictionary_lang_v1';

String _hashKey(String base, String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${base}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

enum NgmyBibleLang {
  en('en', 'English', '🇺🇸'),
  sw('sw', 'Swahili', '🇹🇿');

  const NgmyBibleLang(this.code, this.label, this.flag);
  final String code;
  final String label;
  final String flag;

  NgmyBibleLang get other => this == en ? sw : en;
}

Future<NgmyBibleLang> _loadLanguage(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final code = prefs.getString(_hashKey(_kLangKey, userEmail));
  return NgmyBibleLang.values.firstWhere((l) => l.code == code, orElse: () => NgmyBibleLang.en);
}

Future<void> _saveLanguage(String userEmail, NgmyBibleLang lang) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_hashKey(_kLangKey, userEmail), lang.code);
}

/// This is NGMY's own doctrinal stance for the dictionary, not a neutral
/// survey of Christian views — every prompt below carries it so the AI
/// never slides into presenting the Trinity as the default/correct view.
const _kDoctrineNote =
    'Doctrine you must follow: there is only ONE God — the Father. The Father has a Son, Jesus Christ, who is distinct from the Father '
    '(not a separate co-equal God, and not the same person as the Father). God and Jesus share ONE Spirit — the Spirit of God, also called the '
    'Spirit of Christ — not a separate third divine person. Do NOT teach, affirm, or present the traditional doctrine of the Trinity (three '
    'co-equal, co-eternal "persons" in one God) as correct or standard, and never describe the Father, Son, and Holy Spirit as "three persons" '
    'or "three gods." Anchor this in 1 Corinthians 8:6 — "yet for us there is one God, the Father... and one Lord, Jesus Christ" — whenever the '
    'question concerns who God is or how the Father, Jesus, and the Spirit relate.';

/// Matches this app's existing Bible Study Teacher advisor persona — warm,
/// sharp, opens the text, leans on the original languages — so a lookup
/// here reads like it came from that same teacher.
String _buildEntryPrompt(String query, NgmyBibleLang lang) {
  return '''
You are the Bible Study Teacher inside NGMY's Bible Dictionary tool: warm, sharp-minded, and clear. You explain Scripture plainly, invite real understanding rather than preaching, and reach for the original language when it actually helps.

$_kDoctrineNote

A user is looking up: "$query"

Respond as a dictionary entry using EXACTLY this structure — one field per line, nothing before the first field and nothing after the last. Keep the field labels below exactly as written, in English, but write every field's content in ${lang.label}:
WORD: the key word or phrase being defined
REFERENCE: the Bible verse reference this centers on, or "General" if none was given
ORIGINAL: the original Greek (or Hebrew for Old Testament words) term, a transliteration, and a short pronunciation guide — e.g. "agapē (ah-gah-PAY)"
MEANING: a clear, accurate definition, 1-3 sentences
IN CONTEXT: how the word or verse is actually used in that passage and what it means there, 2-4 sentences
TEACHER'S NOTE: a short, warm teaching point or application in your own voice, 1-3 sentences

Stay accurate to the original Biblical languages. If the question isn't Bible-related, gently connect it to a relevant Biblical word or theme instead of refusing.
''';
}

String _buildFollowUpPrompt(NgmyBibleThread thread, String question, NgmyBibleLang lang) {
  final buf = StringBuffer()
    ..writeln('You are the Bible Study Teacher inside NGMY\'s Bible Dictionary tool: warm, sharp-minded, and clear. Answer entirely in ${lang.label}.')
    ..writeln()
    ..writeln(_kDoctrineNote)
    ..writeln()
    ..writeln('Earlier, the user looked up: "${thread.query}"')
    ..writeln('Here is what you told them then:')
    ..writeln(thread.raw)
    ..writeln();
  for (final f in thread.followUps) {
    buf
      ..writeln('They then asked: "${f.question}"')
      ..writeln('You answered: ${f.answer}')
      ..writeln();
  }
  buf
    ..writeln('Now they are asking a follow-up question about that SAME verse/word: "$question"')
    ..writeln()
    ..writeln(
      'Answer directly and conversationally, 2-5 sentences, in ${lang.label} only — no field labels, no headers, just the answer. '
      'Reference the original Greek (or Hebrew for Old Testament words) when it clarifies the answer, transliterated. '
      'Stay warm and clear, and follow the doctrine note above exactly when the question touches who God is or how the Father, Jesus, and the Spirit relate.',
    );
  return buf.toString();
}

class NgmyBibleFollowUp {
  NgmyBibleFollowUp({required this.question, required this.answer, required this.timestamp});
  final String question;
  final String answer;
  final DateTime timestamp;

  Map<String, dynamic> toJson() => {'question': question, 'answer': answer, 'timestamp': timestamp.toUtc().toIso8601String()};

  factory NgmyBibleFollowUp.fromJson(Map<String, dynamic> j) => NgmyBibleFollowUp(
        question: (j['question'] ?? '').toString(),
        answer: (j['answer'] ?? '').toString(),
        timestamp: DateTime.tryParse((j['timestamp'] ?? '').toString()) ?? DateTime.now(),
      );
}

class NgmyBibleThread {
  NgmyBibleThread({required this.id, required this.query, required this.raw, required this.timestamp, List<NgmyBibleFollowUp>? followUps})
      : followUps = followUps ?? [];
  final String id;
  final String query;
  final String raw;
  final DateTime timestamp;
  final List<NgmyBibleFollowUp> followUps;

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

  Map<String, dynamic> toJson() => {
        'id': id,
        'query': query,
        'raw': raw,
        'timestamp': timestamp.toUtc().toIso8601String(),
        'followUps': followUps.map((e) => e.toJson()).toList(),
      };

  factory NgmyBibleThread.fromJson(Map<String, dynamic> j) => NgmyBibleThread(
        id: (j['id'] ?? '').toString(),
        query: (j['query'] ?? '').toString(),
        raw: (j['raw'] ?? '').toString(),
        timestamp: DateTime.tryParse((j['timestamp'] ?? '').toString()) ?? DateTime.now(),
        followUps: ((j['followUps'] as List?) ?? []).map((e) => NgmyBibleFollowUp.fromJson(Map<String, dynamic>.from(e as Map))).toList(),
      );
}

Future<List<NgmyBibleThread>> _loadHistory(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_hashKey(_kStorageKey, userEmail));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw) as List;
    return list.map((e) => NgmyBibleThread.fromJson(Map<String, dynamic>.from(e as Map))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _saveHistory(String userEmail, List<NgmyBibleThread> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_hashKey(_kStorageKey, userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
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
  List<NgmyBibleThread> _history = [];
  NgmyBibleThread? _active;
  NgmyBibleLang _lang = NgmyBibleLang.en;
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
    final results = await Future.wait([_loadHistory(widget.userEmail), _loadLanguage(widget.userEmail)]);
    if (!mounted) return;
    setState(() {
      _history = results[0] as List<NgmyBibleThread>;
      _lang = results[1] as NgmyBibleLang;
      _loading = false;
    });
  }

  Future<void> _setLanguage(NgmyBibleLang lang) async {
    if (lang == _lang) return;
    setState(() => _lang = lang);
    await _saveLanguage(widget.userEmail, lang);
  }

  Future<void> _toggleLanguage() async {
    HapticFeedback.selectionClick();
    await _setLanguage(_lang.other);
  }

  Future<void> _persist(List<NgmyBibleThread> next) async {
    await _saveHistory(widget.userEmail, next);
    if (!mounted) return;
    setState(() => _history = next);
  }

  Future<void> _submit([String? preset]) async {
    final text = (preset ?? _query.text).trim();
    if (text.isEmpty || _searching) return;
    if (_active == null) {
      await _startThread(text);
    } else {
      await _askFollowUp(text);
    }
  }

  Future<void> _startThread(String query) async {
    setState(() {
      _searching = true;
      _error = null;
    });
    HapticFeedback.selectionClick();

    _apiKey ??= await ngmyResolveGeminiApiKey();
    final creds = ngmyParseAiCredentials(_apiKey ?? '');
    final result = await ngmyAiGenerateWithRetry(creds, _buildEntryPrompt(query, _lang));

    if (!mounted) return;
    final text = result.text?.trim();
    if (text == null || text.isEmpty) {
      setState(() {
        _searching = false;
        _error = ngmyAiHelperFailureMessage(apiKey: _apiKey ?? '', lastError: result.error);
      });
      return;
    }

    final thread = NgmyBibleThread(id: DateTime.now().microsecondsSinceEpoch.toString(), query: query, raw: text, timestamp: DateTime.now());
    await _persist([thread, ..._history]);
    if (!mounted) return;
    setState(() {
      _active = thread;
      _searching = false;
      _query.clear();
    });
    HapticFeedback.mediumImpact();
  }

  Future<void> _askFollowUp(String question) async {
    final thread = _active;
    if (thread == null) return;
    setState(() {
      _searching = true;
      _error = null;
    });
    HapticFeedback.selectionClick();

    _apiKey ??= await ngmyResolveGeminiApiKey();
    final creds = ngmyParseAiCredentials(_apiKey ?? '');
    final result = await ngmyAiGenerateWithRetry(creds, _buildFollowUpPrompt(thread, question, _lang));

    if (!mounted) return;
    final answer = result.text?.trim();
    if (answer == null || answer.isEmpty) {
      setState(() {
        _searching = false;
        _error = ngmyAiHelperFailureMessage(apiKey: _apiKey ?? '', lastError: result.error);
      });
      return;
    }

    final updated = NgmyBibleThread(
      id: thread.id,
      query: thread.query,
      raw: thread.raw,
      timestamp: thread.timestamp,
      followUps: [...thread.followUps, NgmyBibleFollowUp(question: question, answer: answer, timestamp: DateTime.now())],
    );
    final next = _history.map((t) => t.id == updated.id ? updated : t).toList();
    await _persist(next);
    if (!mounted) return;
    setState(() {
      _active = updated;
      _searching = false;
      _query.clear();
    });
    HapticFeedback.mediumImpact();
  }

  void _closeThread() {
    setState(() {
      _active = null;
      _query.clear();
      _error = null;
    });
  }

  void _openThread(NgmyBibleThread thread) {
    setState(() {
      _active = thread;
      _error = null;
    });
  }

  Future<void> _delete(NgmyBibleThread thread) async {
    final next = _history.where((e) => e.id != thread.id).toList();
    await _persist(next);
    if (!mounted) return;
    if (_active?.id == thread.id) setState(() => _active = null);
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
              const SizedBox(height: 10),
              _searchBar(hub),
              if (_active == null) ...[
                const SizedBox(height: 10),
                _exampleChips(hub),
              ],
              const SizedBox(height: 12),
              if (_error != null) _errorBanner(hub),
              Expanded(
                child: _loading
                    ? const Center(child: CircularProgressIndicator(color: _accent1))
                    : _active != null
                        ? _activeThreadView(hub, _active!)
                        : _history.isEmpty
                            ? _emptyState(hub)
                            : ListView.separated(
                                itemCount: _history.length,
                                separatorBuilder: (_, __) => const SizedBox(height: 10),
                                itemBuilder: (_, i) => _historyCard(hub, _history[i]),
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
        _languageFlag(hub),
        const SizedBox(width: 8),
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

  /// Just the flag, tap to switch language — matches the Document Scanner's
  /// language picker instead of showing a text label.
  Widget _languageFlag(NgmyHubTheme hub) {
    return Tooltip(
      message: 'Tap to switch to ${_lang.other.label}',
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: _toggleLanguage,
          borderRadius: BorderRadius.circular(12),
          child: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(color: hub.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: hub.border)),
            child: AnimatedSwitcher(
              duration: const Duration(milliseconds: 260),
              transitionBuilder: (child, anim) => ScaleTransition(scale: anim, child: RotationTransition(turns: anim, child: child)),
              child: Text(_lang.flag, key: ValueKey<String>(_lang.code), style: const TextStyle(fontSize: 18)),
            ),
          ),
        ),
      ),
    );
  }

  Widget _searchBar(NgmyHubTheme hub) {
    final followUpMode = _active != null;
    return Row(
      children: [
        Expanded(
          child: TextField(
            controller: _query,
            style: TextStyle(color: hub.title, fontWeight: FontWeight.w600),
            onSubmitted: (_) => _submit(),
            decoration: InputDecoration(
              hintText: followUpMode ? 'Ask a follow-up about this verse…' : 'A word, a verse, or a question…',
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
            onTap: _searching ? null : () => _submit(),
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
                  : Icon(followUpMode ? Icons.send_rounded : Icons.auto_stories_rounded, color: Colors.white, size: 20),
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
            onTap: _searching ? null : () => _submit(ex),
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

  Widget _historyCard(NgmyHubTheme hub, NgmyBibleThread thread) {
    final f = thread.fields;
    final word = f['WORD']?.trim();
    final hasStructured = word != null && word.isNotEmpty;
    return Dismissible(
      key: ValueKey(thread.id),
      direction: DismissDirection.horizontal,
      // Swipe right to open, swipe left to delete.
      background: Container(
        alignment: Alignment.centerLeft,
        padding: const EdgeInsets.symmetric(horizontal: 22),
        decoration: BoxDecoration(color: _accent1.withValues(alpha: hub.isDark ? 0.22 : 0.14), borderRadius: BorderRadius.circular(18)),
        child: const Icon(Icons.menu_book_rounded, color: _accent1),
      ),
      secondaryBackground: Container(
        alignment: Alignment.centerRight,
        padding: const EdgeInsets.symmetric(horizontal: 22),
        decoration: BoxDecoration(color: const Color(0xFFEF4444).withValues(alpha: 0.15), borderRadius: BorderRadius.circular(18)),
        child: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444)),
      ),
      confirmDismiss: (direction) async {
        if (direction == DismissDirection.startToEnd) {
          _openThread(thread);
          return false;
        }
        return true;
      },
      onDismissed: (direction) {
        if (direction == DismissDirection.endToStart) _delete(thread);
      },
      child: GestureDetector(
        onTap: () => _openThread(thread),
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: hub.surface,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: hub.border),
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(hasStructured ? word : thread.query, style: TextStyle(color: hub.title, fontWeight: FontWeight.w900, fontSize: 16)),
                    if ((f['MEANING'] ?? '').trim().isNotEmpty) ...[
                      const SizedBox(height: 4),
                      Text(f['MEANING']!.trim(), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: hub.subtitle, fontSize: 12.5, height: 1.35)),
                    ],
                    if (thread.followUps.isNotEmpty) ...[
                      const SizedBox(height: 6),
                      Text('${thread.followUps.length} follow-up${thread.followUps.length == 1 ? '' : 's'}', style: const TextStyle(color: _accent1, fontSize: 11, fontWeight: FontWeight.w800)),
                    ],
                  ],
                ),
              ),
              if ((f['REFERENCE'] ?? '').trim().isNotEmpty && (f['REFERENCE'] ?? '').trim().toLowerCase() != 'general')
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  margin: const EdgeInsets.only(left: 8),
                  decoration: BoxDecoration(color: _accent1.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(8)),
                  child: Text(f['REFERENCE']!.trim(), style: const TextStyle(color: _accent1, fontWeight: FontWeight.w800, fontSize: 11)),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _activeThreadView(NgmyHubTheme hub, NgmyBibleThread thread) {
    final f = thread.fields;
    final word = f['WORD']?.trim();
    final hasStructured = word != null && word.isNotEmpty;
    return SingleChildScrollView(
      child: Container(
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
                    hasStructured ? word : thread.query,
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
                  onTap: _closeThread,
                  child: Container(
                    margin: const EdgeInsets.only(left: 8),
                    padding: const EdgeInsets.all(4),
                    decoration: BoxDecoration(color: hub.iconButtonBg, shape: BoxShape.circle),
                    child: Icon(Icons.close_rounded, size: 15, color: hub.iconButtonIcon),
                  ),
                ),
              ],
            ),
            if (!hasStructured) ...[
              const SizedBox(height: 6),
              Text(thread.raw, style: TextStyle(color: hub.subtitle, fontSize: 13, height: 1.4)),
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
            if (thread.followUps.isNotEmpty) ...[
              const SizedBox(height: 14),
              Divider(color: hub.border, height: 1),
              const SizedBox(height: 12),
              ...thread.followUps.expand((fu) => [_followUpBubble(hub, fu), const SizedBox(height: 10)]),
            ],
            if (_searching) ...[
              const SizedBox(height: 6),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: _accent1)),
                  const SizedBox(width: 8),
                  Text('Thinking…', style: TextStyle(color: hub.muted, fontSize: 12, fontWeight: FontWeight.w600)),
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _followUpBubble(NgmyHubTheme hub, NgmyBibleFollowUp f) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Align(
          alignment: Alignment.centerRight,
          child: Container(
            constraints: const BoxConstraints(maxWidth: 260),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(color: _accent1.withValues(alpha: hub.isDark ? 0.22 : 0.12), borderRadius: BorderRadius.circular(12)),
            child: Text(f.question, style: TextStyle(color: hub.title, fontSize: 12.5, fontWeight: FontWeight.w700)),
          ),
        ),
        const SizedBox(height: 6),
        Text(f.answer, style: TextStyle(color: hub.subtitle, fontSize: 12.5, height: 1.42)),
      ],
    );
  }
}
