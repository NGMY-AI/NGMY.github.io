import 'dart:async';
import 'dart:math' as math;
import 'dart:ui' show ImageFilter;

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';

import 'ngmy_civic_voting.dart';
import 'ngmy_civic_voting_download.dart';
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

  static const _accent = Color(0xFF22C55E);
  static const _gold = Color(0xFFFBBF24);

  @override
  void initState() {
    super.initState();
    unawaited(_boot());
  }

  Future<void> _boot() async {
    final v = await NgmyCivicVotingStore.load(forceCloud: true);
    if (!mounted) return;
    setState(() => _voting = v);
    _livePoll = Timer.periodic(const Duration(seconds: 5), (_) async {
      if (!mounted) return;
      final next = await NgmyCivicVotingStore.refreshWhileOpen();
      if (!mounted) return;
      if (next.updatedAt != _voting.updatedAt || next.ballots.length != _voting.ballots.length) {
        setState(() => _voting = next);
      } else {
        setState(() {});
      }
    });
  }

  @override
  void dispose() {
    _livePoll?.cancel();
    super.dispose();
  }

  Color _bg(bool isDark) => isDark ? const Color(0xFF111111) : const Color(0xFFF4F4F5);
  Color _card(bool isDark) => isDark ? const Color(0xFF1C1C1C) : Colors.white;
  Color _ink(bool isDark) => isDark ? Colors.white : const Color(0xFF18181B);
  Color _muted(bool isDark) => isDark ? const Color(0xFFA1A1AA) : const Color(0xFF71717A);

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

    final confirm = await showDialog<bool>(
      context: context,
      barrierColor: Colors.black54,
      builder: (ctx) {
        final isDark = Theme.of(ctx).brightness == Brightness.dark;
        return AlertDialog(
          backgroundColor: _card(isDark),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
          title: Text('Confirm vote', style: TextStyle(color: _ink(isDark), fontWeight: FontWeight.w900)),
          content: Text(
            'Vote for ${candidate.name}?\nThis cannot be changed later.',
            style: TextStyle(color: _muted(isDark), height: 1.4),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(
              onPressed: () => Navigator.pop(ctx, true),
              style: FilledButton.styleFrom(backgroundColor: _accent),
              child: const Text('Vote', style: TextStyle(fontWeight: FontWeight.w800)),
            ),
          ],
        );
      },
    );
    if (confirm != true || !mounted) return;

    setState(() => _busy = true);
    try {
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
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Your vote for ${candidate.name} was counted.'), backgroundColor: _accent),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _downloadResults() async {
    final sorted = [..._voting.candidates]
      ..sort((a, b) => _voting.votesFor(b.id).compareTo(_voting.votesFor(a.id)));
    final buf = StringBuffer()
      ..writeln('Rank,Candidate,Votes')
      ..writeln('# ${_voting.title} · ${_voting.yearLabel} · ${_voting.dateLabel}')
      ..writeln('# Downloaded ${DateTime.now().toLocal()}');
    for (var i = 0; i < sorted.length; i++) {
      final c = sorted[i];
      final name = c.name.replaceAll(',', ' ');
      buf.writeln('${i + 1},$name,${_voting.votesFor(c.id)}');
    }
    final total = sorted.fold<int>(0, (n, c) => n + _voting.votesFor(c.id));
    buf.writeln('TOTAL,,$total');
    final year = _voting.yearLabel.trim().isEmpty ? 'voting' : _voting.yearLabel.trim();
    final msg = await ngmyDownloadCivicVotingResults(
      fileName: 'civic_voting_${year}_results.csv',
      content: buf.toString(),
    );
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = _bg(isDark);
    final ink = _ink(isDark);
    final muted = _muted(isDark);
    final card = _card(isDark);

    if (!_voting.open) {
      return Scaffold(
        backgroundColor: bg,
        appBar: AppBar(
          backgroundColor: bg,
          foregroundColor: ink,
          elevation: 0,
          title: Text(_voting.title, style: const TextStyle(fontWeight: FontWeight.w900)),
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
    final totalVotes = sorted.fold<int>(0, (n, c) => n + _voting.votesFor(c.id));
    final leadVotes = sorted.isEmpty ? 0 : _voting.votesFor(sorted.first.id);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: ink,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        title: Text(_voting.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
        actions: [
          IconButton(
            tooltip: 'Download results',
            onPressed: sorted.isEmpty ? null : _downloadResults,
            icon: const Icon(Icons.download_rounded),
          ),
          const SizedBox(width: 4),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 32),
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
            decoration: BoxDecoration(
              color: card,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE4E4E7)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(
                        color: _accent.withValues(alpha: 0.16),
                        borderRadius: BorderRadius.circular(99),
                      ),
                      child: const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.circle, size: 8, color: _accent),
                          SizedBox(width: 6),
                          Text('LIVE', style: TextStyle(color: _accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1)),
                        ],
                      ),
                    ),
                    const Spacer(),
                    if (_voting.yearLabel.trim().isNotEmpty)
                      Text(
                        _voting.yearLabel,
                        style: const TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 16),
                      ),
                  ],
                ),
                const SizedBox(height: 12),
                Text(
                  _voting.dateLabel.trim().isEmpty ? 'Cast your vote' : _voting.dateLabel.trim(),
                  style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 20),
                ),
                const SizedBox(height: 4),
                Text(
                  '$totalVotes total vote${totalVotes == 1 ? '' : 's'} · updates while you are here',
                  style: TextStyle(color: muted, fontWeight: FontWeight.w600, fontSize: 13),
                ),
                if (myPick != null) ...[
                  const SizedBox(height: 10),
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    decoration: BoxDecoration(
                      color: _accent.withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      'You already voted. Thanks for participating.',
                      style: TextStyle(color: ink.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 13),
                    ),
                  ),
                ] else if (!canVote) ...[
                  const SizedBox(height: 10),
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    decoration: BoxDecoration(
                      color: _gold.withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      'Only linked Civic Registry members in allowed states can vote.',
                      style: TextStyle(color: ink.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 13),
                    ),
                  ),
                ],
              ],
            ),
          ),
          const SizedBox(height: 16),
          if (sorted.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 48),
              child: Text('No candidates yet.', textAlign: TextAlign.center, style: TextStyle(color: muted, fontWeight: FontWeight.w600)),
            ),
          ...sorted.asMap().entries.map((entry) {
            final rank = entry.key + 1;
            final c = entry.value;
            final votes = _voting.votesFor(c.id);
            final selected = myPick == c.id;
            final photo = ngmyCivicVotingPhotoProvider(c.photoUrl);
            final hasProfile = c.bioNote.trim().isNotEmpty || c.voiceNoteUrl.trim().isNotEmpty;
            final share = leadVotes <= 0 ? 0.0 : (votes / leadVotes).clamp(0.0, 1.0);
            final canCast = canVote && myPick == null && !_busy;

            return Container(
              margin: const EdgeInsets.only(bottom: 14),
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: card,
                borderRadius: BorderRadius.circular(22),
                border: Border.all(
                  color: selected ? _accent : (isDark ? Colors.white10 : const Color(0xFFE4E4E7)),
                  width: selected ? 1.6 : 1,
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Stack(
                        children: [
                          CircleAvatar(
                            radius: 34,
                            backgroundColor: isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE4E4E7),
                            backgroundImage: photo,
                            child: photo == null
                                ? Text(
                                    c.name.trim().isEmpty ? '?' : c.name.trim()[0].toUpperCase(),
                                    style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 24),
                                  )
                                : null,
                          ),
                          Positioned(
                            right: 0,
                            bottom: 0,
                            child: Container(
                              width: 22,
                              height: 22,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                color: rank == 1 ? _gold : (isDark ? const Color(0xFF2A2A2A) : const Color(0xFFF4F4F5)),
                                shape: BoxShape.circle,
                                border: Border.all(color: card, width: 2),
                              ),
                              child: Text(
                                '$rank',
                                style: TextStyle(
                                  fontSize: 10,
                                  fontWeight: FontWeight.w900,
                                  color: rank == 1 ? const Color(0xFF18181B) : ink,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(c.name, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 17)),
                            const SizedBox(height: 4),
                            Text(
                              '$votes vote${votes == 1 ? '' : 's'}',
                              style: const TextStyle(color: _accent, fontWeight: FontWeight.w800, fontSize: 14),
                            ),
                            const SizedBox(height: 8),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(99),
                              child: LinearProgressIndicator(
                                value: share,
                                minHeight: 6,
                                backgroundColor: isDark ? Colors.white10 : const Color(0xFFE4E4E7),
                                color: selected || rank == 1 ? _accent : _gold.withValues(alpha: 0.85),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => _showCandidateProfile(c),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: ink,
                            side: BorderSide(color: isDark ? Colors.white24 : const Color(0xFFD4D4D8)),
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: Text(
                            hasProfile ? 'View profile' : 'Profile',
                            style: const TextStyle(fontWeight: FontWeight.w800),
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: FilledButton(
                          onPressed: canCast ? () => _castVote(c) : null,
                          style: FilledButton.styleFrom(
                            backgroundColor: selected ? _accent : _accent,
                            disabledBackgroundColor: isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE4E4E7),
                            disabledForegroundColor: muted,
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: Text(
                            selected ? 'Your vote' : (myPick != null ? 'Voted' : 'Vote'),
                            style: const TextStyle(fontWeight: FontWeight.w900),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            );
          }),
        ],
      ),
    );
  }

  Future<void> _showCandidateProfile(NgmyCivicVotingCandidate c) async {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ink = _ink(isDark);
    final muted = _muted(isDark);
    final card = _card(isDark);
    final player = AudioPlayer();
    var playing = false;
    final photo = ngmyCivicVotingPhotoProvider(c.photoUrl);

    await showDialog<void>(
      context: context,
      barrierColor: Colors.black54,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (ctx, setLocal) {
            return Dialog(
              backgroundColor: card,
              insetPadding: const EdgeInsets.symmetric(horizontal: 24, vertical: 24),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 420),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 18, 12, 20),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Row(
                        children: [
                          Expanded(
                            child: Text('Candidate profile', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 16)),
                          ),
                          IconButton(
                            onPressed: () => Navigator.pop(ctx),
                            icon: Icon(Icons.close_rounded, color: muted),
                          ),
                        ],
                      ),
                      const SizedBox(height: 6),
                      CircleAvatar(
                        radius: 42,
                        backgroundColor: isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE4E4E7),
                        backgroundImage: photo,
                        child: photo == null
                            ? Text(
                                c.name.trim().isEmpty ? '?' : c.name.trim()[0].toUpperCase(),
                                style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 28),
                              )
                            : null,
                      ),
                      const SizedBox(height: 12),
                      Text(c.name, textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 20)),
                      const SizedBox(height: 4),
                      Text(
                        '${_voting.votesFor(c.id)} vote${_voting.votesFor(c.id) == 1 ? '' : 's'}',
                        style: const TextStyle(color: _accent, fontWeight: FontWeight.w800),
                      ),
                      const SizedBox(height: 14),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          c.bioNote.trim().isEmpty ? 'No written notes yet.' : c.bioNote.trim(),
                          style: TextStyle(
                            color: c.bioNote.trim().isEmpty ? muted : ink.withValues(alpha: 0.9),
                            height: 1.45,
                            fontSize: 14.5,
                          ),
                        ),
                      ),
                      if (c.voiceNoteUrl.trim().isNotEmpty) ...[
                        const SizedBox(height: 16),
                        SizedBox(
                          width: double.infinity,
                          child: FilledButton.tonalIcon(
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
                            style: FilledButton.styleFrom(
                              backgroundColor: isDark ? const Color(0xFF2A2A2A) : const Color(0xFFF4F4F5),
                              foregroundColor: ink,
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                            ),
                            icon: Icon(playing ? Icons.stop_rounded : Icons.play_arrow_rounded),
                            label: Text(
                              playing ? 'Stop voice note' : 'Play voice note',
                              style: const TextStyle(fontWeight: FontWeight.w800),
                            ),
                          ),
                        ),
                      ],
                    ],
                  ),
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

