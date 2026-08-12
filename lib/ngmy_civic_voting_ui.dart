import 'dart:async';
import 'dart:math' as math;
import 'dart:ui' show ImageFilter;

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';

import 'ngmy_civic_voting.dart';
import 'ngmy_coming_soon.dart';
import 'ngmy_nav.dart';

/// Animated voting entry card for Civic Registry Search tab (home-card size).
class NgmyCivicVotingEntryCard extends StatefulWidget {
  const NgmyCivicVotingEntryCard({
    super.key,
    required this.config,
    required this.userEmail,
    this.userPhone,
    required this.memberState,
    this.isAdmin = false,
  });

  final dynamic config;
  final String userEmail;
  final String? userPhone;
  final String memberState;
  final bool isAdmin;

  @override
  State<NgmyCivicVotingEntryCard> createState() => _NgmyCivicVotingEntryCardState();
}

class _NgmyCivicVotingEntryCardState extends State<NgmyCivicVotingEntryCard>
    with TickerProviderStateMixin {
  NgmyCivicVotingState _voting = NgmyCivicVotingState();
  late final AnimationController _spin;
  late final AnimationController _pulse;
  late final AnimationController _spark;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(seconds: 8))..repeat();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat(reverse: true);
    _spark = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat();
    unawaited(_load());
  }

  Future<void> _load() async {
    final v = await NgmyCivicVotingStore.load();
    if (!mounted) return;
    setState(() => _voting = v);
  }

  @override
  void dispose() {
    _spin.dispose();
    _pulse.dispose();
    _spark.dispose();
    super.dispose();
  }

  Future<void> _open() async {
    await NgmyNavigator.push<void>(
      context,
      NgmyCivicVotingScreen(
        config: widget.config,
        userEmail: widget.userEmail,
        userPhone: widget.userPhone,
        memberState: widget.memberState,
        isAdmin: widget.isAdmin,
      ),
      routeName: 'NgmyCivicVotingScreen',
    );
    if (mounted) await _load();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final year = _voting.yearLabel.trim().isEmpty ? '2026' : _voting.yearLabel.trim();
    final title = _voting.title.trim().isEmpty ? 'Civic Voting' : _voting.title.trim();
    final open = _voting.open;

    return AnimatedBuilder(
      animation: Listenable.merge([_spin, _pulse, _spark]),
      builder: (context, _) {
        final glow = 0.35 + (_pulse.value * 0.45);
        return Material(
          color: Colors.transparent,
          child: InkWell(
            borderRadius: BorderRadius.circular(28),
            onTap: _open,
            child: SizedBox(
              // Match NGMY Hub home cards (~aspect 1.6 row height).
              height: 112,
              width: double.infinity,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  // Outer rotating light ring
                  Positioned.fill(
                    child: CustomPaint(
                      painter: _VotingAuraPainter(
                        progress: _spin.value,
                        spark: _spark.value,
                        intensity: glow,
                        isDark: isDark,
                      ),
                    ),
                  ),
                  // Glass body
                  Positioned.fill(
                    child: Padding(
                      padding: const EdgeInsets.all(3),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(26),
                        child: BackdropFilter(
                          filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18),
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(26),
                              gradient: LinearGradient(
                                begin: Alignment.topLeft,
                                end: Alignment.bottomRight,
                                colors: isDark
                                    ? const [
                                        Color(0xEE1A1035),
                                        Color(0xEE0B1220),
                                        Color(0xEE14261F),
                                      ]
                                    : const [
                                        Color(0xF5FFF7ED),
                                        Color(0xF5EEF2FF),
                                        Color(0xF5ECFDF5),
                                      ],
                              ),
                              border: Border.all(
                                color: Color.lerp(
                                      const Color(0xFFFBBF24),
                                      const Color(0xFF34D399),
                                      _pulse.value,
                                    )!
                                    .withValues(alpha: 0.85),
                                width: 1.4,
                              ),
                              boxShadow: [
                                BoxShadow(
                                  color: const Color(0xFFF59E0B).withValues(alpha: 0.22 + _pulse.value * 0.18),
                                  blurRadius: 28,
                                  spreadRadius: -4,
                                  offset: const Offset(0, 10),
                                ),
                                BoxShadow(
                                  color: const Color(0xFF10B981).withValues(alpha: 0.16),
                                  blurRadius: 22,
                                  offset: const Offset(0, 6),
                                ),
                              ],
                            ),
                            child: Stack(
                              children: [
                                // Celebration dots
                                ...List.generate(8, (i) {
                                  final t = (_spark.value + i * 0.09) % 1.0;
                                  final x = 18.0 + (i * 37) % 280;
                                  final y = 8.0 + math.sin(t * math.pi * 2 + i) * 10 + t * 55;
                                  return Positioned(
                                    left: x,
                                    top: y,
                                    child: Opacity(
                                      opacity: (1 - t) * 0.55,
                                      child: Container(
                                        width: 5,
                                        height: 5,
                                        decoration: BoxDecoration(
                                          shape: BoxShape.circle,
                                          color: i.isEven ? const Color(0xFFFBBF24) : const Color(0xFF34D399),
                                        ),
                                      ),
                                    ),
                                  );
                                }),
                                Padding(
                                  padding: const EdgeInsets.fromLTRB(14, 12, 14, 10),
                                  child: Row(
                                    children: [
                                      // Year badge
                                      Transform.scale(
                                        scale: 0.96 + _pulse.value * 0.08,
                                        child: Container(
                                          width: 64,
                                          height: 64,
                                          decoration: BoxDecoration(
                                            shape: BoxShape.circle,
                                            gradient: SweepGradient(
                                              colors: const [
                                                Color(0xFFFBBF24),
                                                Color(0xFFF472B6),
                                                Color(0xFF34D399),
                                                Color(0xFF60A5FA),
                                                Color(0xFFFBBF24),
                                              ],
                                              transform: GradientRotation(_spin.value * math.pi * 2),
                                            ),
                                            boxShadow: [
                                              BoxShadow(
                                                color: const Color(0xFFF59E0B).withValues(alpha: 0.45),
                                                blurRadius: 16,
                                              ),
                                            ],
                                          ),
                                          padding: const EdgeInsets.all(3),
                                          child: Container(
                                            decoration: BoxDecoration(
                                              shape: BoxShape.circle,
                                              color: isDark ? const Color(0xFF0F172A) : Colors.white,
                                            ),
                                            alignment: Alignment.center,
                                            child: Text(
                                              year,
                                              style: TextStyle(
                                                fontWeight: FontWeight.w900,
                                                fontSize: 15,
                                                letterSpacing: -0.5,
                                                color: isDark ? Colors.white : const Color(0xFF0F172A),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                      const SizedBox(width: 12),
                                      Expanded(
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          mainAxisAlignment: MainAxisAlignment.center,
                                          children: [
                                            Text(
                                              'VOTING',
                                              style: TextStyle(
                                                color: const Color(0xFFF59E0B),
                                                fontWeight: FontWeight.w900,
                                                fontSize: 10,
                                                letterSpacing: 2.0,
                                              ),
                                            ),
                                            const SizedBox(height: 2),
                                            Text(
                                              title,
                                              maxLines: 1,
                                              overflow: TextOverflow.ellipsis,
                                              style: TextStyle(
                                                color: isDark ? Colors.white : const Color(0xFF0F172A),
                                                fontWeight: FontWeight.w900,
                                                fontSize: 17,
                                                height: 1.1,
                                              ),
                                            ),
                                            const SizedBox(height: 3),
                                            Text(
                                              open
                                                  ? (_voting.dateLabel.trim().isEmpty
                                                      ? 'Tap to vote · live results'
                                                      : _voting.dateLabel.trim())
                                                  : 'Coming soon · we\'ll be back soon',
                                              maxLines: 1,
                                              overflow: TextOverflow.ellipsis,
                                              style: TextStyle(
                                                color: isDark ? Colors.white70 : const Color(0xFF475569),
                                                fontWeight: FontWeight.w600,
                                                fontSize: 11.5,
                                                height: 1.2,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Icon(
                                        open ? Icons.how_to_vote_rounded : Icons.lock_clock_rounded,
                                        color: open ? const Color(0xFF34D399) : const Color(0xFFFBBF24),
                                        size: 26,
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

class _VotingAuraPainter extends CustomPainter {
  _VotingAuraPainter({
    required this.progress,
    required this.spark,
    required this.intensity,
    required this.isDark,
  });

  final double progress;
  final double spark;
  final double intensity;
  final bool isDark;

  @override
  void paint(Canvas canvas, Size size) {
    final r = RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(28));
    final sweep = Paint()
      ..shader = SweepGradient(
        colors: [
          const Color(0x00FBBF24),
          Color(0xFFFBBF24).withValues(alpha: 0.55 * intensity),
          const Color(0xFF34D399).withValues(alpha: 0.7 * intensity),
          const Color(0xFF60A5FA).withValues(alpha: 0.5 * intensity),
          const Color(0x00FBBF24),
        ],
        transform: GradientRotation(progress * math.pi * 2),
      ).createShader(Offset.zero & size)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3.2;
    canvas.drawRRect(r.deflate(1.2), sweep);

    final shimmer = Paint()
      ..shader = LinearGradient(
        begin: Alignment(-1 + spark * 2, 0),
        end: Alignment(-0.2 + spark * 2, 1),
        colors: [
          Colors.transparent,
          Colors.white.withValues(alpha: isDark ? 0.08 : 0.22),
          Colors.transparent,
        ],
      ).createShader(Offset.zero & size);
    canvas.drawRRect(r.deflate(4), shimmer);
  }

  @override
  bool shouldRepaint(covariant _VotingAuraPainter old) =>
      old.progress != progress || old.spark != spark || old.intensity != intensity;
}

class NgmyCivicVotingScreen extends StatefulWidget {
  const NgmyCivicVotingScreen({
    super.key,
    required this.config,
    required this.userEmail,
    this.userPhone,
    required this.memberState,
    this.isAdmin = false,
  });

  final dynamic config;
  final String userEmail;
  final String? userPhone;
  final String memberState;
  final bool isAdmin;

  @override
  State<NgmyCivicVotingScreen> createState() => _NgmyCivicVotingScreenState();
}

class _NgmyCivicVotingScreenState extends State<NgmyCivicVotingScreen> {
  NgmyCivicVotingState _voting = NgmyCivicVotingState();
  bool _busy = false;
  Timer? _livePoll;

  @override
  void initState() {
    super.initState();
    unawaited(_boot());
  }

  Future<void> _boot() async {
    final v = await NgmyCivicVotingStore.load(forceCloud: true);
    if (!mounted) return;
    setState(() => _voting = v);
    // Live refresh only while this screen is open — one cloud read every few seconds.
    _livePoll = Timer.periodic(const Duration(seconds: 5), (_) async {
      if (!mounted) return;
      final next = await NgmyCivicVotingStore.refreshWhileOpen();
      if (!mounted) return;
      if (next.updatedAt != _voting.updatedAt || next.ballots.length != _voting.ballots.length) {
        setState(() => _voting = next);
      } else {
        // Drip votes advance with time even without new ballots.
        setState(() {});
      }
    });
  }

  @override
  void dispose() {
    _livePoll?.cancel();
    super.dispose();
  }

  Future<void> _castVote(NgmyCivicVotingCandidate candidate) async {
    if (_busy) return;
    final can = ngmyCanCivicVote(
      config: widget.config,
      email: widget.userEmail,
      phone: widget.userPhone,
      memberState: widget.memberState,
      voting: _voting,
    );
    if (!can) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Only linked Civic Registry members can vote.')),
      );
      return;
    }
    if (_voting.hasVoted(widget.userEmail)) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('You already voted.')),
      );
      return;
    }
    setState(() => _busy = true);
    try {
      // Re-load once so we don't overwrite concurrent votes — one write per vote.
      final latest = await NgmyCivicVotingStore.load(forceCloud: true);
      if (latest.hasVoted(widget.userEmail)) {
        if (mounted) setState(() => _voting = latest);
        return;
      }
      latest.ballots.add(
        NgmyCivicVotingBallot(
          voterEmail: widget.userEmail.toLowerCase().trim(),
          candidateId: candidate.id,
          at: DateTime.now().toUtc().toIso8601String(),
        ),
      );
      await NgmyCivicVotingStore.save(latest);
      if (!mounted) return;
      setState(() => _voting = latest);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B1220) : const Color(0xFFF8FAFC);
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);

    if (!_voting.open) {
      return Scaffold(
        backgroundColor: bg,
        appBar: AppBar(
          backgroundColor: bg,
          foregroundColor: ink,
          title: Text(_voting.title),
        ),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: ngmyComingSoonFrame(
              context: context,
              icon: Icons.how_to_vote_rounded,
              title: _voting.yearLabel.trim().isEmpty ? 'Voting' : '${_voting.yearLabel} Voting',
              message: 'We\'ll be back soon. Check back when voting opens.',
            ),
          ),
        ),
      );
    }

    final canVote = ngmyCanCivicVote(
      config: widget.config,
      email: widget.userEmail,
      phone: widget.userPhone,
      memberState: widget.memberState,
      voting: _voting,
    );
    final myPick = _voting.votedCandidateId(widget.userEmail);
    final sorted = [..._voting.candidates]
      ..sort((a, b) => _voting.votesFor(b.id).compareTo(_voting.votesFor(a.id)));

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: ink,
        title: Text(_voting.title, style: const TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          if (_voting.yearLabel.trim().isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(right: 14),
              child: Center(
                child: Text(
                  _voting.yearLabel,
                  style: const TextStyle(fontWeight: FontWeight.w900, color: Color(0xFFF59E0B)),
                ),
              ),
            ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 28),
        children: [
          if (!canVote)
            Container(
              margin: const EdgeInsets.only(bottom: 14),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: const Color(0xFFF59E0B).withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: const Color(0xFFF59E0B).withValues(alpha: 0.35)),
              ),
              child: Text(
                'Voting is for linked Civic Registry members in allowed states.',
                style: TextStyle(color: ink.withValues(alpha: 0.8), fontWeight: FontWeight.w600),
              ),
            ),
          if (sorted.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Text('No candidates yet.', textAlign: TextAlign.center, style: TextStyle(color: ink.withValues(alpha: 0.55))),
            ),
          ...sorted.map((c) {
            final votes = _voting.votesFor(c.id);
            final selected = myPick == c.id;
            final photo = ngmyCivicVotingPhotoProvider(c.photoUrl);
            final hasProfile = c.bioNote.trim().isNotEmpty || c.voiceNoteUrl.trim().isNotEmpty;
            return Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  borderRadius: BorderRadius.circular(20),
                  onTap: (!canVote || myPick != null || _busy) ? null : () => _castVote(c),
                  child: Ink(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: isDark ? const Color(0xFF151C2C) : Colors.white,
                      border: Border.all(
                        color: selected ? const Color(0xFF34D399) : (isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                        width: selected ? 2 : 1,
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: isDark ? 0.25 : 0.06),
                          blurRadius: 14,
                          offset: const Offset(0, 6),
                        ),
                      ],
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(12),
                      child: Row(
                        children: [
                          GestureDetector(
                            onTap: hasProfile ? () => _showCandidateProfile(c) : null,
                            child: CircleAvatar(
                              radius: 30,
                              backgroundColor: const Color(0xFF334155),
                              backgroundImage: photo,
                              child: photo == null
                                  ? Text(
                                      c.name.trim().isEmpty ? '?' : c.name.trim()[0].toUpperCase(),
                                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22),
                                    )
                                  : null,
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(c.name, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 16)),
                                const SizedBox(height: 4),
                                Text(
                                  '$votes vote${votes == 1 ? '' : 's'}',
                                  style: const TextStyle(
                                    color: Color(0xFF34D399),
                                    fontWeight: FontWeight.w800,
                                    fontSize: 13,
                                  ),
                                ),
                                if (hasProfile) ...[
                                  const SizedBox(height: 6),
                                  GestureDetector(
                                    onTap: () => _showCandidateProfile(c),
                                    child: Text(
                                      'View profile & notes',
                                      style: TextStyle(
                                        color: ink.withValues(alpha: 0.55),
                                        fontWeight: FontWeight.w700,
                                        fontSize: 12,
                                        decoration: TextDecoration.underline,
                                      ),
                                    ),
                                  ),
                                ],
                              ],
                            ),
                          ),
                          if (selected)
                            const Icon(Icons.check_circle_rounded, color: Color(0xFF34D399), size: 28)
                          else if (canVote && myPick == null)
                            Icon(Icons.how_to_vote_rounded, color: ink.withValues(alpha: 0.35)),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            );
          }),
        ],
      ),
    );
  }

  Future<void> _showCandidateProfile(NgmyCivicVotingCandidate c) async {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final player = AudioPlayer();
    var playing = false;

    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (ctx, setLocal) {
            return SafeArea(
              child: Container(
                margin: const EdgeInsets.all(12),
                padding: const EdgeInsets.fromLTRB(18, 16, 18, 20),
                constraints: const BoxConstraints(maxWidth: 520),
                decoration: BoxDecoration(
                  color: isDark ? const Color(0xFF0B1220) : Colors.white,
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Row(
                      children: [
                        CircleAvatar(
                          radius: 28,
                          backgroundColor: const Color(0xFF334155),
                          backgroundImage: ngmyCivicVotingPhotoProvider(c.photoUrl),
                          child: ngmyCivicVotingPhotoProvider(c.photoUrl) == null
                              ? Text(
                                  c.name.trim().isEmpty ? '?' : c.name.trim()[0].toUpperCase(),
                                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900),
                                )
                              : null,
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(c.name, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 18)),
                        ),
                        IconButton(onPressed: () => Navigator.pop(ctx), icon: Icon(Icons.close_rounded, color: muted)),
                      ],
                    ),
                    const SizedBox(height: 14),
                    if (c.bioNote.trim().isNotEmpty)
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          c.bioNote.trim(),
                          style: TextStyle(color: ink.withValues(alpha: 0.88), height: 1.45, fontSize: 14.5),
                        ),
                      )
                    else
                      Text('No written notes yet.', style: TextStyle(color: muted)),
                    if (c.voiceNoteUrl.trim().isNotEmpty) ...[
                      const SizedBox(height: 16),
                      FilledButton.tonalIcon(
                        onPressed: () async {
                          if (playing) {
                            await player.stop();
                            setLocal(() => playing = false);
                            return;
                          }
                          await player.play(UrlSource(c.voiceNoteUrl));
                          setLocal(() => playing = true);
                          player.onPlayerComplete.listen((_) {
                            if (ctx.mounted) setLocal(() => playing = false);
                          });
                        },
                        icon: Icon(playing ? Icons.stop_rounded : Icons.play_arrow_rounded),
                        label: Text(playing ? 'Stop voice note' : 'Play voice note', style: const TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ],
                  ],
                ),
              ),
            );
          },
        );
      },
    );
    await player.dispose();
  }
}
