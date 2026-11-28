import 'dart:async';
import 'dart:convert';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_hub_form_ui.dart';
import 'ngmy_local_store.dart';
import 'ngmy_local_tts.dart';

/// Learn English: look up an English word in the free Dictionary API
/// (dictionaryapi.dev, no key), read what it means and hear how to say it.
/// Only the word itself is ever sent to the API.

const _kRecentKey = 'ngmy_learn_english_recent_v1';
const _kSavedCacheKey = 'ngmy_learn_english_saved_cache_v1';
const _kSavedTable = 'learn_english_saved_words';

const _accent1 = Color(0xFF0891B2);
const _accent2 = Color(0xFF22D3EE);

String _hashKey(String base, String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${base}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

/// Useful everyday words. The Word of the Day is picked from this list by date,
/// so every member sees the same word today and a new one tomorrow.
const kNgmyWordOfTheDayList = <String>[
  'work', 'job', 'salary', 'manager', 'meeting', 'office', 'schedule', 'deadline', 'interview', 'skill',
  'money', 'price', 'budget', 'save', 'spend', 'bank', 'cash', 'receipt', 'bill', 'change',
  'house', 'rent', 'kitchen', 'bedroom', 'key', 'door', 'window', 'neighbor', 'clean', 'repair',
  'health', 'doctor', 'nurse', 'medicine', 'fever', 'pain', 'hospital', 'pharmacy', 'healthy', 'rest',
  'family', 'mother', 'father', 'brother', 'sister', 'child', 'parent', 'friend', 'wedding', 'together',
  'appointment', 'early', 'late', 'today', 'tomorrow', 'yesterday', 'morning', 'evening', 'weekend', 'calendar',
  'drive', 'car', 'road', 'traffic', 'license', 'fuel', 'park', 'turn', 'stop', 'passenger',
  'help', 'please', 'thank', 'sorry', 'question', 'answer', 'learn', 'teach', 'read', 'write',
  'buy', 'sell', 'market', 'customer', 'order', 'deliver', 'weather', 'water', 'food', 'breakfast',
];

String ngmyWordOfTheDay([DateTime? now]) {
  final d = now ?? DateTime.now();
  final days = DateTime.utc(d.year, d.month, d.day).millisecondsSinceEpoch ~/ Duration.millisecondsPerDay;
  return kNgmyWordOfTheDayList[days % kNgmyWordOfTheDayList.length];
}

// ─── Data ────────────────────────────────────────────────────────────────────

class NgmyWordDefinition {
  const NgmyWordDefinition({required this.definition, this.example, this.synonyms = const []});
  final String definition;
  final String? example;
  final List<String> synonyms;
}

class NgmyWordMeaning {
  NgmyWordMeaning(this.partOfSpeech);
  final String partOfSpeech;
  final List<NgmyWordDefinition> definitions = [];
}

class NgmyWordEntry {
  NgmyWordEntry({required this.word, this.phonetic, this.audioUrl, required this.meanings});
  final String word;
  final String? phonetic;
  final String? audioUrl;
  final List<NgmyWordMeaning> meanings;

  /// Joins every entry the API returns into one card, meanings grouped by part of speech.
  static NgmyWordEntry? fromApi(String fallbackWord, dynamic body) {
    if (body is! List || body.isEmpty) return null;
    String? word;
    String? phonetic;
    String? audio;
    String? otherAudio;
    final byPart = <String, NgmyWordMeaning>{};
    for (final raw in body) {
      if (raw is! Map) continue;
      word ??= _str(raw['word']);
      phonetic ??= _str(raw['phonetic']);
      for (final p in (raw['phonetics'] as List?) ?? const []) {
        if (p is! Map) continue;
        phonetic ??= _str(p['text']);
        // MP3 first: it plays everywhere (iPhones cannot play the .ogg files).
        final a = _str(p['audio']);
        if (a != null && a.toLowerCase().endsWith('.mp3')) {
          audio ??= a;
        } else if (a != null) {
          otherAudio ??= a;
        }
      }
      for (final m in (raw['meanings'] as List?) ?? const []) {
        if (m is! Map) continue;
        final part = _str(m['partOfSpeech']) ?? 'other';
        final meaning = byPart.putIfAbsent(part, () => NgmyWordMeaning(part));
        final meaningSyn = _strList(m['synonyms']);
        var first = true;
        for (final d in (m['definitions'] as List?) ?? const []) {
          if (d is! Map) continue;
          final def = _str(d['definition']);
          if (def == null) continue;
          if (meaning.definitions.length >= 5) break;
          final syn = <String>{..._strList(d['synonyms']), if (first) ...meaningSyn}.take(6).toList();
          first = false;
          meaning.definitions.add(NgmyWordDefinition(definition: def, example: _str(d['example']), synonyms: syn));
        }
      }
    }
    byPart.removeWhere((_, m) => m.definitions.isEmpty);
    if (byPart.isEmpty) return null;
    audio ??= otherAudio;
    if (audio != null && audio.startsWith('//')) audio = 'https:$audio';
    return NgmyWordEntry(word: word ?? fallbackWord, phonetic: phonetic, audioUrl: audio, meanings: byPart.values.toList());
  }

  static String? _str(dynamic v) {
    final s = v?.toString().trim() ?? '';
    return s.isEmpty ? null : s;
  }

  static List<String> _strList(dynamic v) =>
      v is List ? v.map((e) => e.toString().trim()).where((e) => e.isNotEmpty).toList() : const [];
}

enum _LookupError { notFound, network }

class _LookupResult {
  const _LookupResult({this.entry, this.error});
  final NgmyWordEntry? entry;
  final _LookupError? error;
}

final Map<String, NgmyWordEntry> _entryCache = {};

Future<_LookupResult> _lookupWord(String word) async {
  final cached = _entryCache[word];
  if (cached != null) return _LookupResult(entry: cached);
  try {
    final res = await http
        .get(Uri.https('api.dictionaryapi.dev', '/api/v2/entries/en/$word'))
        .timeout(const Duration(seconds: 12));
    if (res.statusCode == 404) return const _LookupResult(error: _LookupError.notFound);
    if (res.statusCode != 200) return const _LookupResult(error: _LookupError.network);
    final entry = NgmyWordEntry.fromApi(word, jsonDecode(utf8.decode(res.bodyBytes)));
    if (entry == null) return const _LookupResult(error: _LookupError.notFound);
    _entryCache[word] = entry;
    return _LookupResult(entry: entry);
  } catch (_) {
    return const _LookupResult(error: _LookupError.network);
  }
}

// ─── Local lists ─────────────────────────────────────────────────────────────

Future<List<String>> _readList(String key) async {
  final raw = await ngmyLocalRead(key);
  if (raw == null || raw.isEmpty) return [];
  try {
    return (jsonDecode(raw) as List).map((e) => e.toString()).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _writeList(String key, List<String> items) => ngmyLocalWrite(key, jsonEncode(items));

/// Number shown on the Business Essentials tile: the member's saved words.
Future<int> ngmyLearnEnglishCount({required String userEmail}) async =>
    (await _readList(_hashKey(_kSavedCacheKey, userEmail))).length;

String? _supabaseUserId() {
  try {
    return Supabase.instance.client.auth.currentUser?.id;
  } catch (_) {
    return null;
  }
}

// ─── Screen ──────────────────────────────────────────────────────────────────

Future<void> showNgmyLearnEnglishDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Learn English',
    barrierColor: NgmyHubTheme.of(context).barrier,
    transitionDuration: const Duration(milliseconds: 300),
    pageBuilder: (ctx, a1, a2) => _LearnEnglishScreen(userEmail: userEmail),
    transitionBuilder: (ctx, anim, a2, child) => FadeTransition(
      opacity: anim,
      child: ScaleTransition(scale: Tween<double>(begin: 0.96, end: 1).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)), child: child),
    ),
  );
}

class _LearnEnglishScreen extends StatefulWidget {
  const _LearnEnglishScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_LearnEnglishScreen> createState() => _LearnEnglishScreenState();
}

class _LearnEnglishScreenState extends State<_LearnEnglishScreen> {
  final _query = TextEditingController();
  final _player = AudioPlayer();

  final String _wotdWord = ngmyWordOfTheDay();
  NgmyWordEntry? _wotd;
  bool _wotdFailed = false;

  NgmyWordEntry? _result;
  bool _searching = false;
  String? _note;
  String? _error;

  List<String> _recent = [];
  List<String> _saved = [];
  bool _savingBusy = false;
  String? _speakingKey;

  String get _recentKey => _hashKey(_kRecentKey, widget.userEmail);
  String get _savedCacheKey => _hashKey(_kSavedCacheKey, widget.userEmail);

  @override
  void initState() {
    super.initState();
    _loadLists();
    _loadWordOfTheDay();
  }

  @override
  void dispose() {
    _query.dispose();
    _player.dispose();
    NgmyLocalTts.stop();
    super.dispose();
  }

  Future<void> _loadLists() async {
    final recent = await _readList(_recentKey);
    final cached = await _readList(_savedCacheKey);
    if (!mounted) return;
    setState(() {
      _recent = recent;
      _saved = cached;
    });
    await _loadSavedFromServer();
  }

  /// My Words live in Supabase for logged-in members. If the table is not there
  /// yet, the copy on this device is used and look-ups still work.
  Future<void> _loadSavedFromServer() async {
    final uid = _supabaseUserId();
    if (uid == null) return;
    try {
      final rows = await Supabase.instance.client
          .from(_kSavedTable)
          .select('word, saved_at')
          .eq('user_id', uid)
          .order('saved_at', ascending: false)
          .limit(200);
      final words = <String>[];
      for (final r in rows) {
        final w = (r['word'] ?? '').toString().trim();
        if (w.isNotEmpty && !words.contains(w)) words.add(w);
      }
      await _writeList(_savedCacheKey, words);
      if (!mounted) return;
      setState(() => _saved = words);
    } catch (_) {}
  }

  Future<void> _loadWordOfTheDay() async {
    final r = await _lookupWord(_wotdWord);
    if (!mounted) return;
    setState(() {
      _wotd = r.entry;
      _wotdFailed = r.entry == null;
    });
  }

  Future<void> _search([String? preset]) async {
    if (_searching) return;
    final typed = (preset ?? _query.text).trim();
    if (typed.isEmpty) return;
    final parts = typed.split(RegExp(r'\s+'));
    final word = parts.first.replaceAll(RegExp(r"[^A-Za-z'\-]"), '').toLowerCase();
    if (word.isEmpty) {
      setState(() {
        _note = null;
        _error = 'Type an English word.';
      });
      return;
    }
    FocusScope.of(context).unfocus();
    HapticFeedback.selectionClick();
    setState(() {
      _searching = true;
      _error = null;
      _note = parts.length > 1 ? 'One word at a time.' : null;
      _query.text = word;
    });
    final r = await _lookupWord(word);
    if (!mounted) return;
    if (r.entry == null) {
      setState(() {
        _searching = false;
        _error = r.error == _LookupError.notFound
            ? 'That word was not found. Check the spelling and try again.'
            : 'Could not load. Check your connection and try again.';
      });
      return;
    }
    final recent = [word, ..._recent.where((w) => w != word)].take(10).toList();
    await _writeList(_recentKey, recent);
    if (!mounted) return;
    setState(() {
      _searching = false;
      _result = r.entry;
      _recent = recent;
    });
  }

  void _clearResult() {
    setState(() {
      _result = null;
      _error = null;
      _note = null;
      _query.clear();
    });
  }

  /// Plays the real voice from the API. If there is none (or it will not play),
  /// the phone or browser reads the word aloud in en-US.
  Future<void> _speak(NgmyWordEntry entry, String key) async {
    HapticFeedback.selectionClick();
    setState(() => _speakingKey = key);
    var played = false;
    final url = entry.audioUrl;
    if (url != null) {
      try {
        // Play straight away (no waiting first) so phones still count it as part of the tap.
        final playing = _player.play(UrlSource(url));
        unawaited(NgmyLocalTts.stop());
        await playing.timeout(const Duration(seconds: 6));
        played = true;
        unawaited(_player.onPlayerComplete.first.timeout(const Duration(seconds: 6), onTimeout: () {}).then((_) {
          if (mounted && _speakingKey == key) setState(() => _speakingKey = null);
        }));
      } catch (_) {
        played = false;
      }
    }
    if (!played) {
      try {
        await _player.stop();
      } catch (_) {}
      await NgmyLocalTts.speak(text: entry.word, key: 'learn_english_$key');
      if (mounted && _speakingKey == key) setState(() => _speakingKey = null);
    }
  }

  Future<void> _toggleSave(NgmyWordEntry entry) async {
    if (_savingBusy) return;
    final uid = _supabaseUserId();
    if (uid == null) {
      _showGentle('Log in to save words to My Words.');
      return;
    }
    final word = entry.word.toLowerCase();
    final isSaved = _saved.contains(word);
    setState(() => _savingBusy = true);
    try {
      final table = Supabase.instance.client.from(_kSavedTable);
      if (isSaved) {
        await table.delete().eq('user_id', uid).eq('word', word);
      } else {
        try {
          await table.insert({'user_id': uid, 'word': word});
        } on PostgrestException catch (e) {
          if (e.code != '23505') rethrow; // Already saved is fine.
        }
      }
      final next = isSaved ? _saved.where((w) => w != word).toList() : [word, ..._saved.where((w) => w != word)];
      await _writeList(_savedCacheKey, next);
      if (!mounted) return;
      HapticFeedback.mediumImpact();
      setState(() => _saved = next);
    } catch (_) {
      _showGentle('Saving words is not ready yet. You can still look up words. Please try saving again later.');
    } finally {
      if (mounted) setState(() => _savingBusy = false);
    }
  }

  /// A calm note under the search box (snack bars would sit behind this full-screen dialog).
  void _showGentle(String msg) {
    if (!mounted) return;
    setState(() {
      _error = null;
      _note = msg;
    });
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
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _header(hub),
              const SizedBox(height: 12),
              _searchBar(hub),
              if (_note != null) ...[const SizedBox(height: 8), _banner(hub, _note!, warn: false)],
              if (_error != null) ...[const SizedBox(height: 8), _banner(hub, _error!, warn: true)],
              const SizedBox(height: 12),
              Expanded(
                child: ListView(
                  children: [
                    if (_result != null)
                      _wordCard(hub, _result!, key: 'result', label: null, onClose: _clearResult)
                    else
                      _wordOfTheDay(hub),
                    const SizedBox(height: 16),
                    _wordList(hub, 'My Words', Icons.bookmark_rounded, _saved,
                        empty: _supabaseUserId() == null ? 'Log in to save words here.' : 'Tap Save word on a word card to keep it here.'),
                    const SizedBox(height: 14),
                    _wordList(hub, 'Recent searches', Icons.history_rounded, _recent, empty: 'Words you look up will show here.'),
                    const SizedBox(height: 12),
                  ],
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
          child: const Center(child: Text('🗣️', style: TextStyle(fontSize: 20))),
        ),
        const SizedBox(width: 10),
        const Expanded(child: NgmyFramedTitle(title: 'Learn English', subtitle: 'Meanings and how to say them', accent: _accent1)),
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
            textInputAction: TextInputAction.search,
            style: TextStyle(color: hub.title, fontWeight: FontWeight.w700, fontSize: 18),
            onSubmitted: (_) => _search(),
            decoration: InputDecoration(
              hintText: 'Type an English word',
              hintStyle: TextStyle(color: hub.muted, fontSize: 16),
              filled: true,
              fillColor: hub.inputFill,
              contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: hub.inputBorder)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: hub.inputBorder)),
            ),
          ),
        ),
        const SizedBox(width: 8),
        Material(
          color: Colors.transparent,
          child: InkWell(
            borderRadius: BorderRadius.circular(16),
            onTap: _searching ? null : () => _search(),
            child: Container(
              height: 56,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [_accent1, _accent2]),
                borderRadius: BorderRadius.circular(16),
                boxShadow: [BoxShadow(color: _accent1.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4))],
              ),
              alignment: Alignment.center,
              child: _searching
                  ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2.4))
                  : const Text('Search', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
            ),
          ),
        ),
      ],
    );
  }

  Widget _banner(NgmyHubTheme hub, String text, {required bool warn}) {
    final c = warn ? const Color(0xFFEF4444) : _accent1;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(color: c.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: c.withValues(alpha: 0.3))),
      child: Text(text, style: TextStyle(color: hub.title, fontSize: 14, fontWeight: FontWeight.w600)),
    );
  }

  Widget _wordOfTheDay(NgmyHubTheme hub) {
    final entry = _wotd;
    if (entry != null) return _wordCard(hub, entry, key: 'wotd', label: 'Word of the Day');
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: _cardDecoration(hub),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _labelChip('Word of the Day'),
          const SizedBox(height: 10),
          Text(_wotdWord, style: TextStyle(color: hub.title, fontSize: 32, fontWeight: FontWeight.w900)),
          const SizedBox(height: 8),
          if (_wotdFailed)
            Row(
              children: [
                Expanded(child: Text('Could not load. Check your connection and try again.', style: TextStyle(color: hub.subtitle, fontSize: 14))),
                TextButton(
                  onPressed: () {
                    setState(() => _wotdFailed = false);
                    _loadWordOfTheDay();
                  },
                  child: const Text('Try again'),
                ),
              ],
            )
          else
            const SizedBox(height: 20, width: 20, child: CircularProgressIndicator(strokeWidth: 2.2, color: _accent1)),
        ],
      ),
    );
  }

  BoxDecoration _cardDecoration(NgmyHubTheme hub) => BoxDecoration(
        color: hub.listItemBg,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _accent1.withValues(alpha: 0.35)),
        boxShadow: [BoxShadow(color: _accent1.withValues(alpha: 0.12), blurRadius: 16, offset: const Offset(0, 6))],
      );

  Widget _labelChip(String text) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(gradient: const LinearGradient(colors: [_accent1, _accent2]), borderRadius: BorderRadius.circular(12)),
        child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w800)),
      );

  Widget _wordCard(NgmyHubTheme hub, NgmyWordEntry entry, {required String key, String? label, VoidCallback? onClose}) {
    final speaking = _speakingKey == key;
    final saved = _saved.contains(entry.word.toLowerCase());
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: _cardDecoration(hub),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (label != null || onClose != null)
            Row(
              children: [
                if (label != null) _labelChip(label),
                const Spacer(),
                if (onClose != null)
                  InkWell(
                    onTap: onClose,
                    borderRadius: BorderRadius.circular(12),
                    child: Padding(padding: const EdgeInsets.all(4), child: Icon(Icons.close_rounded, color: hub.muted, size: 20)),
                  ),
              ],
            ),
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(entry.word, style: TextStyle(color: hub.title, fontSize: 34, fontWeight: FontWeight.w900, height: 1.1)),
                    if (entry.phonetic != null) ...[
                      const SizedBox(height: 4),
                      Text(entry.phonetic!, style: TextStyle(color: _accent1, fontSize: 18, fontWeight: FontWeight.w600)),
                    ],
                  ],
                ),
              ),
              const SizedBox(width: 10),
              Tooltip(
                message: 'Hear the word',
                child: Material(
                  color: Colors.transparent,
                  shape: const CircleBorder(),
                  child: InkWell(
                    customBorder: const CircleBorder(),
                    onTap: () => _speak(entry, key),
                    child: Container(
                      width: 68,
                      height: 68,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(colors: [_accent1, _accent2]),
                        boxShadow: [BoxShadow(color: _accent1.withValues(alpha: speaking ? 0.6 : 0.35), blurRadius: speaking ? 22 : 14, offset: const Offset(0, 5))],
                      ),
                      child: Icon(speaking ? Icons.graphic_eq_rounded : Icons.volume_up_rounded, color: Colors.white, size: 34),
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),
          for (final m in entry.meanings) ...[
            Text(m.partOfSpeech, style: const TextStyle(color: _accent1, fontSize: 15, fontWeight: FontWeight.w900, letterSpacing: 0.3)),
            const SizedBox(height: 6),
            for (var i = 0; i < m.definitions.length; i++) _definition(hub, i + 1, m.definitions[i]),
            const SizedBox(height: 8),
          ],
          const SizedBox(height: 4),
          SizedBox(
            width: double.infinity,
            height: 50,
            child: ElevatedButton.icon(
              onPressed: _savingBusy ? null : () => _toggleSave(entry),
              style: ElevatedButton.styleFrom(
                backgroundColor: saved ? hub.chipOffBg : _accent1,
                foregroundColor: saved ? hub.title : Colors.white,
                elevation: 0,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800),
              ),
              icon: Icon(saved ? Icons.bookmark_rounded : Icons.bookmark_add_outlined),
              label: Text(saved ? 'Saved (tap to remove)' : 'Save word'),
            ),
          ),
        ],
      ),
    );
  }

  Widget _definition(NgmyHubTheme hub, int n, NgmyWordDefinition d) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('$n. ${d.definition}', style: TextStyle(color: hub.title, fontSize: 16, height: 1.35, fontWeight: FontWeight.w500)),
          if (d.example != null)
            Padding(
              padding: const EdgeInsets.only(left: 16, top: 4),
              child: Text('"${d.example}"', style: TextStyle(color: hub.subtitle, fontSize: 15, fontStyle: FontStyle.italic, height: 1.3)),
            ),
          if (d.synonyms.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(left: 16, top: 6),
              child: Wrap(
                spacing: 6,
                runSpacing: 6,
                children: [
                  for (final s in d.synonyms)
                    GestureDetector(
                      onTap: s.contains(' ') ? null : () => _search(s),
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(color: hub.chipOffBg, borderRadius: BorderRadius.circular(14), border: Border.all(color: hub.chipOffBorder)),
                        child: Text(s, style: TextStyle(color: hub.chipOffLabel, fontSize: 13, fontWeight: FontWeight.w700)),
                      ),
                    ),
                ],
              ),
            ),
        ],
      ),
    );
  }

  Widget _wordList(NgmyHubTheme hub, String title, IconData icon, List<String> words, {required String empty}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Icon(icon, color: _accent1, size: 20),
            const SizedBox(width: 6),
            Text(title, style: TextStyle(color: hub.title, fontSize: 17, fontWeight: FontWeight.w900)),
          ],
        ),
        const SizedBox(height: 8),
        if (words.isEmpty)
          Text(empty, style: TextStyle(color: hub.subtitle, fontSize: 14))
        else
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              for (final w in words)
                Material(
                  color: Colors.transparent,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(18),
                    onTap: _searching ? null : () => _search(w),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
                      decoration: BoxDecoration(color: hub.chipOffBg, borderRadius: BorderRadius.circular(18), border: Border.all(color: hub.chipOffBorder)),
                      child: Text(w, style: TextStyle(color: hub.title, fontSize: 15, fontWeight: FontWeight.w700)),
                    ),
                  ),
                ),
            ],
          ),
      ],
    );
  }
}
