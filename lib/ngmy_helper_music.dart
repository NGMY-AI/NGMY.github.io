import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_voice_input.dart';

enum NgmyMusicLane { swahili, english, mix }

enum NgmyMusicRhymeScheme { abab, aaaBbb, aabb }

extension NgmyMusicRhymeSchemeExt on NgmyMusicRhymeScheme {
  String get label => switch (this) {
        NgmyMusicRhymeScheme.abab => 'ABAB',
        NgmyMusicRhymeScheme.aaaBbb => 'AAA · BBB',
        NgmyMusicRhymeScheme.aabb => 'AABB',
      };

  String get subtitle => switch (this) {
        NgmyMusicRhymeScheme.abab => '1↔3 · 2↔4',
        NgmyMusicRhymeScheme.aaaBbb => '3 lines · 3 lines',
        NgmyMusicRhymeScheme.aabb => '2 + 2',
      };

  String get aiInstruction => switch (this) {
        NgmyMusicRhymeScheme.abab =>
          'ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 — every verse.',
        NgmyMusicRhymeScheme.aaaBbb =>
          'AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme.',
        NgmyMusicRhymeScheme.aabb =>
          'AABB rhyme: lines 1–2 rhyme; lines 3–4 rhyme.',
      };
}

class NgmyMusicStyleOption {
  final String id;
  final String label;
  final String emoji;
  final String aiHint;

  const NgmyMusicStyleOption(this.id, this.label, this.emoji, this.aiHint);
}

const _swahiliStyles = [
  NgmyMusicStyleOption('bongo', 'Bongo Flava', '🎤', 'Tanzanian bongo flava — singeli bounce, Dar es Salaam street energy.'),
  NgmyMusicStyleOption('afro', 'Afrobeat', '🥁', 'East African afrobeat — groove, horns, danceable Swahili hooks.'),
  NgmyMusicStyleOption('kanisa', 'Kanisa / Gospel', '⛪', 'Swahili church praise — worship, hope, choir-ready lines.'),
  NgmyMusicStyleOption('mitaani', 'Mitaani / Street', '🔥', 'Street Swahili — raw bars, mitaani slang, hard punchlines.'),
  NgmyMusicStyleOption('mapenzi', 'Mapenzi', '💜', 'Swahili love ballad — romantic, melodic, emotional.'),
  NgmyMusicStyleOption('taarab', 'Taarab Vibe', '🌙', 'Coastal taarab flavor — poetic Swahili, classic romance.'),
];

const _englishStyles = [
  NgmyMusicStyleOption('gospel', 'Gospel', '✨', 'English gospel — uplift, faith, big chorus.'),
  NgmyMusicStyleOption('rap', 'Rap / Hip-Hop', '🎧', 'English rap — flow, internal rhymes, bars.'),
  NgmyMusicStyleOption('rnb', 'R&B / Soul', '🎹', 'Smooth R&B — melody, heartbreak or love.'),
  NgmyMusicStyleOption('church', 'Church / Worship', '🙏', 'English worship — hymn-like or modern praise.'),
  NgmyMusicStyleOption('street', 'Street / Drill', '⚡', 'Street English — gritty, punchy, anthem energy.'),
  NgmyMusicStyleOption('afro_eng', 'Afro-Fusion', '🌍', 'English with African bounce — global club ready.'),
];

bool _isContinueRequest(String text) {
  final t = text.toLowerCase();
  return t.contains('continue') ||
      t.contains('keep going') ||
      t.contains('go on') ||
      t.contains('next verse') ||
      t.contains('more lyrics') ||
      t.contains('endelea') ||
      t.contains('endelea na') ||
      t.contains('ongeza') ||
      t.contains('tuendelee');
}

String ngmyMusicAiSystemContext({
  required NgmyMusicLane lane,
  required NgmyMusicRhymeScheme rhyme,
  required NgmyMusicStyleOption? style,
  required bool continuing,
}) {
  final laneBlock = switch (lane) {
    NgmyMusicLane.swahili =>
      'Language: Swahili (East African — Tanzania/Kenya). Style: ${style?.aiHint ?? "general Swahili song"}.',
    NgmyMusicLane.english =>
      'Language: English. Style: ${style?.aiHint ?? "general English song"}.',
    NgmyMusicLane.mix =>
      'Language: Swahili–English MIX (code-switching). Drop fire lines with DOUBLE MEANINGS — words that hit in both languages or flip meaning mid-bar. '
          'Examples of the vibe: "KATI YA KISU NA JUA NINI KINA CHOMA" (knife vs sun — what burns?). '
          '"We just live in the moment — atulipi rent" (freedom vs broke). '
          'Use parables, street wisdom, church metaphors, and bars that make listeners rewind. Hard punchlines > safe lines.',
  };

  final continueBlock = continuing
      ? 'CONTINUE MODE: The user wants the NEXT part of the SAME song. Read the full lyrics you already wrote in this chat. '
          'Pick up exactly where you stopped — same topic, same characters, same vibe. Do NOT restart from scratch. '
          'Label new sections ([Verse 2], [Chorus repeat], [Bridge], [Outro]) and keep the rhyme scheme.\n'
      : '';

  return 'You are NGMY Music AI — elite songwriter for Swahili, English, and mixed street/gospel/bongo tracks.\n'
      '$laneBlock\n'
      '${rhyme.aiInstruction}\n'
      '$continueBlock'
      'Output singable lyrics with [Verse], [Chorus], [Bridge] labels. Strong rhythm. No lecture about rhyme rules.\n'
      'When user says continue / endelea / keep going — always extend the existing song in this conversation.\n';
}

/// Music studio inside NGMY Helper — lane pickers, sub-styles, rhyme, AI lyrics.
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

class _NgmyHelperMusicPanelState extends State<NgmyHelperMusicPanel> with SingleTickerProviderStateMixin {
  final _controller = TextEditingController();
  final _scroll = ScrollController();
  final List<Map<String, String>> _messages = [];
  bool _busy = false;
  bool _stylesExpanded = false;

  NgmyMusicLane _lane = NgmyMusicLane.swahili;
  NgmyMusicRhymeScheme _rhyme = NgmyMusicRhymeScheme.abab;
  String? _swahiliStyleId;
  String? _englishStyleId;

  late final AnimationController _pulseCtrl;

  static const _violet = Color(0xFF7C3AED);
  static const _pink = Color(0xFFEC4899);
  static const _cyan = Color(0xFF22D3EE);
  static const _gold = Color(0xFFFBBF24);

  @override
  void initState() {
    super.initState();
    _pulseCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _swahiliStyleId = _swahiliStyles.first.id;
  }

  @override
  void dispose() {
    _pulseCtrl.dispose();
    _controller.dispose();
    _scroll.dispose();
    super.dispose();
  }

  NgmyMusicStyleOption? get _activeStyle {
    if (_lane == NgmyMusicLane.mix) return null;
    final list = _lane == NgmyMusicLane.swahili ? _swahiliStyles : _englishStyles;
    final id = _lane == NgmyMusicLane.swahili ? _swahiliStyleId : _englishStyleId;
    for (final s in list) {
      if (s.id == id) return s;
    }
    return list.isNotEmpty ? list.first : null;
  }

  List<NgmyMusicStyleOption> get _styleList =>
      _lane == NgmyMusicLane.swahili ? _swahiliStyles : _englishStyles;

  String? get _styleId => _lane == NgmyMusicLane.swahili ? _swahiliStyleId : _englishStyleId;

  void _setStyleId(String id) => setState(() {
        if (_lane == NgmyMusicLane.swahili) {
          _swahiliStyleId = id;
        } else {
          _englishStyleId = id;
        }
      });

  void _scrollBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scroll.hasClients) return;
      _scroll.animateTo(
        _scroll.position.maxScrollExtent,
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeOutCubic,
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

    HapticFeedback.lightImpact();
    final continuing = _isContinueRequest(text);

    setState(() {
      _messages.add({'role': 'user', 'text': text});
      _controller.clear();
      _busy = true;
    });
    _scrollBottom();

    final apiKey = widget.apiKey.trim();
    if (apiKey.isEmpty) {
      const err = 'Music AI is warming up — try again in a moment.';
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
          .map((m) => '${m['role'] == 'user' ? 'Artist' : 'NGMY Music'}: ${m['text']}')
          .join('\n\n');
      final prompt = '${ngmyMusicAiSystemContext(lane: _lane, rhyme: _rhyme, style: _activeStyle, continuing: continuing)}\n'
          '${transcript.isNotEmpty ? '--- Conversation so far ---\n$transcript\n---\n' : ''}'
          'Artist request: $text';
      final result = await ngmyAiGenerateWithCredentials(creds, prompt);
      final reply = (result.text != null && result.text!.trim().isNotEmpty)
          ? result.text!.trim()
          : ngmyAiHelperFailureMessage(apiKey: apiKey, lastError: result.error);
      if (!mounted) return;
      setState(() => _messages.add({'role': 'ai', 'text': reply}));
    } catch (_) {
      if (mounted) {
        setState(() => _messages.add({'role': 'ai', 'text': 'Connection glitch — check internet and try again.'}));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
      _scrollBottom();
    }
  }

  void _continueSong() => _send('Continue the song from where you stopped — same vibe, next verse or bridge.');

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF070B14) : const Color(0xFFF3F0FF);

    return Container(
      color: bg,
      child: Column(
        children: [
          _studioHeader(isDark),
          Expanded(child: _lyricsFeed(isDark)),
          if (_messages.isNotEmpty && !_busy) _continueChip(isDark),
          _composer(isDark),
        ],
      ),
    );
  }

  Widget _studioHeader(bool isDark) {
    return AnimatedBuilder(
      animation: _pulseCtrl,
      builder: (context, _) {
        final glow = 0.35 + _pulseCtrl.value * 0.25;
        return Container(
          margin: const EdgeInsets.fromLTRB(12, 4, 12, 8),
          padding: const EdgeInsets.fromLTRB(14, 14, 14, 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: isDark
                  ? [const Color(0xFF1E1035), const Color(0xFF0F172A), const Color(0xFF134E4A)]
                  : [const Color(0xFFEDE9FE), const Color(0xFFFCE7F3), const Color(0xFFECFEFF)],
            ),
            boxShadow: [
              BoxShadow(color: _violet.withValues(alpha: glow), blurRadius: 28, spreadRadius: -4, offset: const Offset(0, 8)),
              BoxShadow(color: _pink.withValues(alpha: glow * 0.6), blurRadius: 18, offset: const Offset(-4, 4)),
            ],
            border: Border.all(color: Colors.white.withValues(alpha: isDark ? 0.08 : 0.5)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  _vinylBadge(),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        ShaderMask(
                          shaderCallback: (r) => const LinearGradient(
                            colors: [_violet, _pink, _cyan],
                          ).createShader(r),
                          child: const Text(
                            'NGMY Music Studio',
                            style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 0.3),
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          'Swipe News ↔ Music · Pick language · Write fire',
                          style: TextStyle(fontSize: 10, color: isDark ? Colors.white60 : Colors.black54, fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 14),
              Row(
                children: [
                  _laneCard(NgmyMusicLane.swahili, 'Swahili', '🇹🇿', isDark),
                  const SizedBox(width: 8),
                  _laneCard(NgmyMusicLane.english, 'English', '🇬🇧', isDark),
                  const SizedBox(width: 8),
                  _laneCard(NgmyMusicLane.mix, 'Mix', '🔥', isDark),
                ],
              ),
              if (_lane != NgmyMusicLane.mix) ...[
                const SizedBox(height: 10),
                Material(
                  color: Colors.transparent,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(14),
                    onTap: _busy ? null : () => setState(() => _stylesExpanded = !_stylesExpanded),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                      decoration: BoxDecoration(
                        color: Colors.black.withValues(alpha: isDark ? 0.35 : 0.06),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: _cyan.withValues(alpha: 0.35)),
                      ),
                      child: Row(
                        children: [
                          Text(_activeStyle?.emoji ?? '🎵', style: const TextStyle(fontSize: 18)),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  _lane == NgmyMusicLane.swahili ? 'Swahili style' : 'English style',
                                  style: TextStyle(fontSize: 9, color: isDark ? Colors.white54 : Colors.black45, fontWeight: FontWeight.w700),
                                ),
                                Text(
                                  _activeStyle?.label ?? 'Choose',
                                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87),
                                ),
                              ],
                            ),
                          ),
                          Icon(
                            _stylesExpanded ? Icons.expand_less_rounded : Icons.expand_more_rounded,
                            color: _cyan,
                            size: 22,
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                AnimatedCrossFade(
                  firstChild: const SizedBox.shrink(),
                  secondChild: Padding(
                    padding: const EdgeInsets.only(top: 8),
                    child: Wrap(
                      spacing: 6,
                      runSpacing: 6,
                      children: _styleList.map((s) => _styleTile(s, isDark)).toList(),
                    ),
                  ),
                  crossFadeState: _stylesExpanded ? CrossFadeState.showSecond : CrossFadeState.showFirst,
                  duration: const Duration(milliseconds: 220),
                ),
              ] else
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: [_pink.withValues(alpha: 0.2), _violet.withValues(alpha: 0.15)]),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: _pink.withValues(alpha: 0.4)),
                    ),
                    child: Text(
                      'Mix mode — double meanings, parables, Swahili×English bars that hit twice. '
                      'e.g. "KATI YA KISU NA JUA…" · "atulipi rent"',
                      style: TextStyle(fontSize: 10, height: 1.35, color: isDark ? const Color(0xFFFBCFE8) : const Color(0xFF831843), fontWeight: FontWeight.w600),
                    ),
                  ),
                ),
              const SizedBox(height: 10),
              Row(
                children: NgmyMusicRhymeScheme.values.map((r) {
                  final sel = _rhyme == r;
                  return Expanded(
                    child: Padding(
                      padding: EdgeInsets.only(right: r != NgmyMusicRhymeScheme.aabb ? 6 : 0),
                      child: Material(
                        elevation: sel ? 6 : 0,
                        shadowColor: _violet.withValues(alpha: 0.5),
                        borderRadius: BorderRadius.circular(12),
                        color: sel
                            ? (isDark ? _violet.withValues(alpha: 0.45) : _violet.withValues(alpha: 0.15))
                            : Colors.black.withValues(alpha: isDark ? 0.25 : 0.05),
                        child: InkWell(
                          borderRadius: BorderRadius.circular(12),
                          onTap: _busy ? null : () => setState(() => _rhyme = r),
                          child: Padding(
                            padding: const EdgeInsets.symmetric(vertical: 8),
                            child: Column(
                              children: [
                                Text(r.label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: sel ? Colors.white : (isDark ? Colors.white70 : Colors.black87))),
                                Text(r.subtitle, style: TextStyle(fontSize: 8, color: sel ? Colors.white70 : (isDark ? Colors.white38 : Colors.black45))),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                }).toList(),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _vinylBadge() {
    return Transform(
      transform: Matrix4.identity()
        ..setEntry(3, 2, 0.001)
        ..rotateY(_pulseCtrl.value * 0.08),
      alignment: Alignment.center,
      child: Container(
        width: 48,
        height: 48,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: const RadialGradient(colors: [Color(0xFF1F2937), Color(0xFF030712)]),
          boxShadow: [
            BoxShadow(color: _violet.withValues(alpha: 0.5), blurRadius: 12, offset: const Offset(0, 4)),
          ],
          border: Border.all(color: _gold.withValues(alpha: 0.6), width: 2),
        ),
        child: const Icon(Icons.album_rounded, color: _gold, size: 26),
      ),
    );
  }

  Widget _laneCard(NgmyMusicLane lane, String label, String flag, bool isDark) {
    final sel = _lane == lane;
    final colors = switch (lane) {
      NgmyMusicLane.swahili => [const Color(0xFF059669), const Color(0xFF10B981)],
      NgmyMusicLane.english => [const Color(0xFF2563EB), const Color(0xFF60A5FA)],
      NgmyMusicLane.mix => [_pink, _violet],
    };
    return Expanded(
      child: Material(
        elevation: sel ? 8 : 1,
        shadowColor: colors.first.withValues(alpha: 0.45),
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: _busy
              ? null
              : () => setState(() {
                    _lane = lane;
                    _stylesExpanded = lane != NgmyMusicLane.mix;
                    if (lane == NgmyMusicLane.english && _englishStyleId == null) {
                      _englishStyleId = _englishStyles.first.id;
                    }
                  }),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 200),
            padding: const EdgeInsets.symmetric(vertical: 12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              gradient: sel ? LinearGradient(colors: colors) : null,
              color: sel ? null : Colors.black.withValues(alpha: isDark ? 0.3 : 0.05),
              border: Border.all(color: sel ? Colors.white24 : Colors.white10),
            ),
            child: Column(
              children: [
                Text(flag, style: const TextStyle(fontSize: 18)),
                const SizedBox(height: 4),
                Text(
                  label,
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w900,
                    color: sel ? Colors.white : (isDark ? Colors.white70 : Colors.black87),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _styleTile(NgmyMusicStyleOption s, bool isDark) {
    final sel = _styleId == s.id;
    return Material(
      elevation: sel ? 4 : 0,
      borderRadius: BorderRadius.circular(20),
      color: sel ? _cyan.withValues(alpha: isDark ? 0.25 : 0.15) : Colors.black.withValues(alpha: isDark ? 0.2 : 0.04),
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: _busy
            ? null
            : () {
                _setStyleId(s.id);
                HapticFeedback.selectionClick();
              },
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(s.emoji, style: const TextStyle(fontSize: 14)),
              const SizedBox(width: 5),
              Text(s.label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: isDark ? Colors.white : Colors.black87)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _lyricsFeed(bool isDark) {
    if (_messages.isEmpty) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(28),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.lyrics_rounded, size: 56, color: _violet.withValues(alpha: 0.5)),
              const SizedBox(height: 16),
              Text(
                'Pick Swahili, English, or Mix\nDescribe your song — AI writes the lyrics',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.45, color: isDark ? Colors.white54 : Colors.black45, fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 16),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                alignment: WrapAlignment.center,
                children: [
                  _starterChip('Bongo love song ABAB', isDark),
                  _starterChip('Gospel hook in English', isDark),
                  _starterChip('Mix — mitaani wordplay', isDark),
                ],
              ),
            ],
          ),
        ),
      );
    }

    return ListView.builder(
      controller: _scroll,
      padding: const EdgeInsets.fromLTRB(12, 4, 12, 8),
      itemCount: _messages.length + (_busy ? 1 : 0),
      itemBuilder: (context, i) {
        if (_busy && i == _messages.length) {
          return Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                SizedBox(
                  width: 22,
                  height: 22,
                  child: CircularProgressIndicator(strokeWidth: 2, color: _pink.withValues(alpha: 0.9)),
                ),
                const SizedBox(width: 10),
                Text('Composing…', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black45, fontStyle: FontStyle.italic)),
              ],
            ),
          );
        }
        final m = _messages[i];
        final user = m['role'] == 'user';
        return Align(
          alignment: user ? Alignment.centerRight : Alignment.centerLeft,
          child: Transform(
            transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateX(user ? 0 : -0.02),
            alignment: user ? Alignment.centerRight : Alignment.centerLeft,
            child: Container(
              margin: const EdgeInsets.only(bottom: 12),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.9),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.only(
                  topLeft: const Radius.circular(18),
                  topRight: const Radius.circular(18),
                  bottomLeft: Radius.circular(user ? 18 : 4),
                  bottomRight: Radius.circular(user ? 4 : 18),
                ),
                gradient: user
                    ? LinearGradient(colors: [_violet, _pink.withValues(alpha: 0.85)])
                    : LinearGradient(
                        colors: isDark
                            ? [const Color(0xFF1E293B), const Color(0xFF0F172A)]
                            : [Colors.white, const Color(0xFFF8FAFC)],
                      ),
                boxShadow: [
                  BoxShadow(
                    color: (user ? _pink : _violet).withValues(alpha: 0.25),
                    blurRadius: 14,
                    offset: const Offset(0, 5),
                  ),
                ],
                border: Border.all(color: Colors.white.withValues(alpha: user ? 0.2 : 0.08)),
              ),
              child: Text(
                m['text'] ?? '',
                style: TextStyle(
                  color: user ? Colors.white : (isDark ? const Color(0xFFE2E8F0) : Colors.black87),
                  fontSize: 13.5,
                  height: 1.5,
                  fontStyle: user ? FontStyle.normal : FontStyle.italic,
                  fontWeight: user ? FontWeight.w600 : FontWeight.w500,
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _starterChip(String label, bool isDark) {
    return ActionChip(
      label: Text(label, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700)),
      backgroundColor: _violet.withValues(alpha: isDark ? 0.2 : 0.1),
      side: BorderSide(color: _violet.withValues(alpha: 0.4)),
      onPressed: _busy ? null : () => _send(label),
    );
  }

  Widget _continueChip(bool isDark) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
      child: Material(
        elevation: 6,
        shadowColor: _gold.withValues(alpha: 0.4),
        borderRadius: BorderRadius.circular(24),
        child: InkWell(
          borderRadius: BorderRadius.circular(24),
          onTap: _busy ? null : _continueSong,
          child: Ink(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(24),
              gradient: LinearGradient(colors: [_gold.withValues(alpha: 0.9), const Color(0xFFF59E0B)]),
            ),
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 18, vertical: 10),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.fast_forward_rounded, color: Color(0xFF422006), size: 18),
                  SizedBox(width: 8),
                  Text('Continue song', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12, color: Color(0xFF422006))),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _composer(bool isDark) {
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 4, 12, 14),
      padding: const EdgeInsets.fromLTRB(10, 10, 6, 10),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        gradient: LinearGradient(
          colors: isDark
              ? [const Color(0xFF1E1B4B).withValues(alpha: 0.9), const Color(0xFF0F172A)]
              : [Colors.white, const Color(0xFFF5F3FF)],
        ),
        boxShadow: [
          BoxShadow(color: _violet.withValues(alpha: 0.2), blurRadius: 20, offset: const Offset(0, -2)),
        ],
        border: Border.all(color: _violet.withValues(alpha: 0.25)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Expanded(
            child: TextField(
              controller: _controller,
              minLines: 1,
              maxLines: 4,
              style: TextStyle(color: isDark ? Colors.white : Colors.black87, fontSize: 14),
              decoration: InputDecoration(
                hintText: _lane == NgmyMusicLane.mix
                    ? 'Describe your mix — wordplay, parables, fire…'
                    : 'Describe your ${_lane == NgmyMusicLane.swahili ? "Swahili" : "English"} song…',
                hintStyle: TextStyle(color: isDark ? Colors.white38 : Colors.black38, fontSize: 13),
                border: InputBorder.none,
                contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              ),
              onSubmitted: (_) => _send(),
            ),
          ),
          NgmyVoiceMicButton(controller: _controller, color: _violet),
          const SizedBox(width: 4),
          Material(
            elevation: 8,
            shadowColor: _pink.withValues(alpha: 0.5),
            shape: const CircleBorder(),
            child: InkWell(
              onTap: _busy ? null : () => _send(),
              customBorder: const CircleBorder(),
              child: Ink(
                width: 46,
                height: 46,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(colors: [_violet, _pink]),
                ),
                child: _busy
                    ? const Padding(
                        padding: EdgeInsets.all(12),
                        child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                      )
                    : const Icon(Icons.send_rounded, color: Colors.white, size: 20),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
