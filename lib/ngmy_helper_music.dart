import 'package:flutter/material.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_voice_input.dart';

/// Rhyme schemes for AI music lyrics.
enum NgmyMusicRhymeScheme {
  abab,
  aaaBbb,
  aabb,
  wordplay,
}

extension NgmyMusicRhymeSchemeExt on NgmyMusicRhymeScheme {
  String get label => switch (this) {
        NgmyMusicRhymeScheme.abab => 'ABAB',
        NgmyMusicRhymeScheme.aaaBbb => 'AAA · BBB',
        NgmyMusicRhymeScheme.aabb => 'AABB',
        NgmyMusicRhymeScheme.wordplay => 'Wordplay / Mix',
      };

  String get aiInstruction => switch (this) {
        NgmyMusicRhymeScheme.abab =>
          'Use ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4. Keep the pattern clear in every verse.',
        NgmyMusicRhymeScheme.aaaBbb =>
          'Use AAA BBB rhyme: the first three lines share one rhyme sound; the next three lines share a different rhyme sound.',
        NgmyMusicRhymeScheme.aabb =>
          'Use AABB rhyme: lines 1–2 rhyme together; lines 3–4 rhyme together.',
        NgmyMusicRhymeScheme.wordplay =>
          'Use clever wordplay — double meanings, Swahili–English code-switching (e.g. "atulipi rent" / "kati ya kisu na jua"), street slang, and rhymes that work in both languages when natural.',
      };
}

/// Music genres users can request.
enum NgmyMusicGenre {
  church,
  street,
  tanzanian,
  swahili,
  english,
  gospel,
  bongo,
  afrobeats,
  love,
  any,
}

extension NgmyMusicGenreExt on NgmyMusicGenre {
  String get label => switch (this) {
        NgmyMusicGenre.church => 'Church',
        NgmyMusicGenre.street => 'Street',
        NgmyMusicGenre.tanzanian => 'Tanzanian',
        NgmyMusicGenre.swahili => 'Swahili',
        NgmyMusicGenre.english => 'English',
        NgmyMusicGenre.gospel => 'Gospel',
        NgmyMusicGenre.bongo => 'Bongo Flava',
        NgmyMusicGenre.afrobeats => 'Afrobeats',
        NgmyMusicGenre.love => 'Love / R&B',
        NgmyMusicGenre.any => 'Any style',
      };
}

String ngmyMusicAiSystemContext({
  required NgmyMusicRhymeScheme rhyme,
  required NgmyMusicGenre genre,
  required String languageMix,
}) {
  final genreLine = genre == NgmyMusicGenre.any
      ? 'Any genre the user asks for (church, street, Tanzanian, gospel, bongo flava, etc.).'
      : 'Focus on ${genre.label} music style and culture.';
  return 'You are NGMY Music AI — a professional songwriter for Swahili and English lyrics.\n'
      '$genreLine\n'
      'Language: $languageMix. Write singable lyrics with strong rhythm — verses, hook/chorus, and optional bridge.\n'
      '${rhyme.aiInstruction}\n'
      'Support church hymns, street anthems, Tanzanian pop, gospel, bongo flava, and English rap/R&B when asked.\n'
      'When using Swahili, keep it natural (Tanzania/Kenya East African Swahili). You may blend English lines for modern street/gospel tracks.\n'
      'Format output clearly: [Verse], [Chorus], [Bridge] labels. Do not explain the rhyme scheme unless the user asks.\n'
      'Be creative with metaphors and wordplay when Wordplay mode is selected.\n';
}

/// Music tab inside NGMY Helper — AI lyrics with rhyme schemes and genres.
class NgmyHelperMusicPanel extends StatefulWidget {
  final String apiKey;
  final String userEmail;
  final bool isTypingLocked;
  final Future<bool> Function()? onBeforeSend;

  const NgmyHelperMusicPanel({
    super.key,
    required this.apiKey,
    required this.userEmail,
    this.isTypingLocked = false,
    this.onBeforeSend,
  });

  @override
  State<NgmyHelperMusicPanel> createState() => _NgmyHelperMusicPanelState();
}

class _NgmyHelperMusicPanelState extends State<NgmyHelperMusicPanel> {
  final _controller = TextEditingController();
  final _scroll = ScrollController();
  final List<Map<String, String>> _messages = [];
  bool _busy = false;
  NgmyMusicRhymeScheme _rhyme = NgmyMusicRhymeScheme.abab;
  NgmyMusicGenre _genre = NgmyMusicGenre.any;
  String _languageMix = 'Swahili & English';

  static const _quickPrompts = [
    'Church praise song — ABAB — Swahili',
    'Street banger — wordplay — Swahili & English mix',
    'Tanzanian love song — AABB — Swahili',
    'Gospel hook about hope — AAA BBB — English',
  ];

  @override
  void dispose() {
    _controller.dispose();
    _scroll.dispose();
    super.dispose();
  }

  void _scrollBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scroll.hasClients) return;
      _scroll.animateTo(
        _scroll.position.maxScrollExtent,
        duration: const Duration(milliseconds: 280),
        curve: Curves.easeOut,
      );
    });
  }

  Future<void> _send([String? override]) async {
    final text = (override ?? _controller.text).trim();
    if (text.isEmpty || _busy || widget.isTypingLocked) return;
    if (widget.onBeforeSend != null) {
      final ok = await widget.onBeforeSend!();
      if (!ok) return;
    }

    setState(() {
      _messages.add({'role': 'user', 'text': text});
      _controller.clear();
      _busy = true;
    });
    _scrollBottom();

    final apiKey = widget.apiKey.trim();
    if (apiKey.isEmpty) {
      const err = 'Music AI needs the admin API key. Try again later.';
      setState(() {
        _messages.add({'role': 'ai', 'text': err});
        _busy = false;
      });
      _scrollBottom();
      return;
    }

    try {
      final creds = ngmyParseAiCredentials(apiKey);
      final transcript = _messages
          .map((m) => '${m['role'] == 'user' ? 'User' : 'Music AI'}: ${m['text']}')
          .join('\n');
      final prompt = '${ngmyMusicAiSystemContext(rhyme: _rhyme, genre: _genre, languageMix: _languageMix)}\n'
          '${transcript.isNotEmpty ? '$transcript\n' : ''}'
          'User request: $text';
      final result = await ngmyAiGenerateWithCredentials(creds, prompt);
      final reply = (result.text != null && result.text!.trim().isNotEmpty)
          ? result.text!.trim()
          : ngmyAiHelperFailureMessage(apiKey: apiKey, lastError: result.error);
      if (!mounted) return;
      setState(() => _messages.add({'role': 'ai', 'text': reply}));
    } catch (_) {
      if (mounted) {
        setState(() => _messages.add({'role': 'ai', 'text': 'Connection error. Check internet and try again.'}));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
      _scrollBottom();
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    const accent = Color(0xFF00B25A);

    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 0, 14, 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Swipe ← → between News and Music. Create Swahili & English lyrics with rhyme patterns.',
                style: TextStyle(fontSize: 10, color: isDark ? Colors.white54 : Colors.black54, height: 1.3),
              ),
              const SizedBox(height: 8),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: NgmyMusicRhymeScheme.values
                      .map(
                        (r) => Padding(
                          padding: const EdgeInsets.only(right: 6),
                          child: ChoiceChip(
                            label: Text(r.label, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700)),
                            selected: _rhyme == r,
                            onSelected: _busy ? null : (_) => setState(() => _rhyme = r),
                            selectedColor: accent.withOpacity(0.25),
                            side: BorderSide(color: _rhyme == r ? accent : Colors.grey.shade400),
                          ),
                        ),
                      )
                      .toList(),
                ),
              ),
              const SizedBox(height: 6),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: NgmyMusicGenre.values
                      .map(
                        (g) => Padding(
                          padding: const EdgeInsets.only(right: 6),
                          child: FilterChip(
                            label: Text(g.label, style: const TextStyle(fontSize: 10)),
                            selected: _genre == g,
                            onSelected: _busy ? null : (_) => setState(() => _genre = g),
                            selectedColor: accent.withOpacity(0.2),
                          ),
                        ),
                      )
                      .toList(),
                ),
              ),
              const SizedBox(height: 6),
              SegmentedButton<String>(
                segments: const [
                  ButtonSegment(value: 'Swahili', label: Text('Swahili', style: TextStyle(fontSize: 10))),
                  ButtonSegment(value: 'English', label: Text('English', style: TextStyle(fontSize: 10))),
                  ButtonSegment(value: 'Swahili & English', label: Text('Mix', style: TextStyle(fontSize: 10))),
                ],
                selected: {_languageMix},
                onSelectionChanged: _busy
                    ? null
                    : (s) => setState(() => _languageMix = s.first),
                style: ButtonStyle(
                  visualDensity: VisualDensity.compact,
                  tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                ),
              ),
            ],
          ),
        ),
        Expanded(
          child: _messages.isEmpty
              ? Center(
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Text(
                      'Describe your song — church, street, Tanzanian, gospel, bongo…\nPick ABAB, AAA·BBB, AABB, or Wordplay.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: isDark ? Colors.white54 : Colors.black45, fontSize: 13, height: 1.4),
                    ),
                  ),
                )
              : ListView.builder(
                  controller: _scroll,
                  padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
                  itemCount: _messages.length + (_busy ? 1 : 0),
                  itemBuilder: (context, i) {
                    if (_busy && i == _messages.length) {
                      return const Align(
                        alignment: Alignment.centerLeft,
                        child: Padding(
                          padding: EdgeInsets.all(12),
                          child: SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2)),
                        ),
                      );
                    }
                    final m = _messages[i];
                    final user = m['role'] == 'user';
                    return Align(
                      alignment: user ? Alignment.centerRight : Alignment.centerLeft,
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 10),
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                        constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.88),
                        decoration: BoxDecoration(
                          color: user
                              ? accent.withOpacity(isDark ? 0.35 : 0.15)
                              : (isDark ? const Color(0xFF1C2433) : Colors.white),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: user ? accent.withOpacity(0.4) : (isDark ? Colors.white12 : Colors.black12)),
                        ),
                        child: Text(
                          m['text'] ?? '',
                          style: TextStyle(
                            color: isDark ? Colors.white : Colors.black87,
                            fontSize: 13,
                            height: 1.45,
                            fontStyle: user ? FontStyle.normal : FontStyle.italic,
                          ),
                        ),
                      ),
                    );
                  },
                ),
        ),
        if (_messages.isEmpty)
          SizedBox(
            height: 36,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 14),
              itemCount: _quickPrompts.length,
              separatorBuilder: (_, __) => const SizedBox(width: 8),
              itemBuilder: (_, i) => ActionChip(
                label: Text(_quickPrompts[i], style: const TextStyle(fontSize: 10)),
                onPressed: _busy ? null : () => _send(_quickPrompts[i]),
              ),
            ),
          ),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 8, 14, 16),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Expanded(
                child: TextField(
                  controller: _controller,
                  minLines: 1,
                  maxLines: 4,
                  style: TextStyle(color: isDark ? Colors.white : Colors.black87),
                  decoration: InputDecoration(
                    hintText: 'e.g. Church song about faith — ABAB Swahili…',
                    hintStyle: TextStyle(color: isDark ? Colors.white54 : Colors.black45, fontSize: 13),
                    filled: true,
                    fillColor: isDark ? const Color(0xFF151C28) : Colors.white,
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: BorderSide.none),
                    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  ),
                  onSubmitted: (_) => _send(),
                ),
              ),
              NgmyVoiceMicButton(controller: _controller, color: accent),
              const SizedBox(width: 6),
              Material(
                color: accent,
                shape: const CircleBorder(),
                child: InkWell(
                  onTap: _busy ? null : () => _send(),
                  customBorder: const CircleBorder(),
                  child: SizedBox(
                    width: 44,
                    height: 44,
                    child: _busy
                        ? const Padding(
                            padding: EdgeInsets.all(11),
                            child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                          )
                        : const Icon(Icons.music_note_rounded, color: Colors.white, size: 20),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
