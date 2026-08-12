import 'dart:async';
import 'dart:math' as math;
import 'dart:ui' show ImageFilter;

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';

import 'ngmy_civic_member_report_print_stub.dart'
    if (dart.library.html) 'ngmy_civic_member_report_print_web.dart';
import 'ngmy_civic_voting.dart';
import 'ngmy_civic_voting_download.dart';
import 'ngmy_civic_voting_results_pdf.dart';
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

  NgmyCivicVotingState get _cardPoll {
    final open = _voting.openPolls;
    if (open.isNotEmpty) return open.first;
    final all = _voting.allPolls;
    return all.isNotEmpty ? all.first : _voting;
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
    final poll = _cardPoll;
    final year = poll.yearLabel.trim().isEmpty ? '2026' : poll.yearLabel.trim();
    final title = poll.title.trim().isEmpty ? 'Voting' : poll.title.trim();
    final open = _voting.anyOpen;

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
                                                  ? (poll.dateLabel.trim().isEmpty
                                                      ? 'Tap to vote · live results'
                                                      : poll.dateLabel.trim())
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

  @override
  void dispose() {
    _spin.dispose();
    _pulse.dispose();
    _spark.dispose();
    super.dispose();
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
  NgmyCivicVotingState _bundle = NgmyCivicVotingState();
  NgmyCivicVotingState _poll = NgmyCivicVotingState();
  bool _busy = false;
  Timer? _livePoll;
  bool _searchOpen = false;
  String _searchQuery = '';
  final _searchCtrl = TextEditingController();

  static const _accent = Color(0xFF22C55E);
  static const _gold = Color(0xFFFBBF24);
  static const _silver = Color(0xFFC0C0C0);
  static const _bronze = Color(0xFFCD7F32);

  @override
  void initState() {
    super.initState();
    unawaited(_boot());
  }

  void _selectPoll(NgmyCivicVotingState poll) {
    _poll = poll;
    _searchQuery = '';
    _searchCtrl.clear();
    _searchOpen = false;
  }

  void _applyBundle(NgmyCivicVotingState bundle, {String? keepPollId}) {
    _bundle = bundle;
    final polls = bundle.allPolls;
    if (polls.isEmpty) {
      _poll = NgmyCivicVotingState();
      return;
    }
    final open = bundle.openPolls;
    final preferId = keepPollId ?? _poll.id;
    NgmyCivicVotingState? match;
    for (final p in polls) {
      if (p.id == preferId) {
        match = p;
        break;
      }
    }
    if (match != null) {
      _selectPoll(match);
      return;
    }
    _selectPoll(open.isNotEmpty ? open.first : polls.first);
  }

  Future<void> _boot() async {
    final v = await NgmyCivicVotingStore.load(forceCloud: true);
    if (!mounted) return;
    setState(() => _applyBundle(v));
    _livePoll = Timer.periodic(const Duration(seconds: 5), (_) async {
      if (!mounted) return;
      final next = await NgmyCivicVotingStore.refreshWhileOpen();
      if (!mounted) return;
      if (next.updatedAt != _bundle.updatedAt) {
        setState(() => _applyBundle(next, keepPollId: _poll.id));
      } else {
        // Keep selected poll reference fresh for drip counts.
        setState(() => _applyBundle(next, keepPollId: _poll.id));
      }
    });
  }

  @override
  void dispose() {
    _livePoll?.cancel();
    _searchCtrl.dispose();
    super.dispose();
  }

  Color _bg(bool isDark) => isDark ? const Color(0xFF111111) : const Color(0xFFF4F4F5);
  Color _card(bool isDark) => isDark ? const Color(0xFF1C1C1C) : Colors.white;
  Color _ink(bool isDark) => isDark ? Colors.white : const Color(0xFF18181B);
  Color _muted(bool isDark) => isDark ? const Color(0xFFA1A1AA) : const Color(0xFF71717A);

  String get _registryId => ngmyCivicVoterRegistryId(
        config: widget.config,
        email: widget.userEmail,
        phone: widget.userPhone,
      );

  Future<void> _castVote(NgmyCivicVotingCandidate candidate) async {
    if (_busy) return;
    final can = ngmyCanCivicVote(
      config: widget.config,
      email: widget.userEmail,
      phone: widget.userPhone,
      memberState: widget.memberState,
      voting: _poll,
    );
    if (!can) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            _poll.membersOnly ? 'Only linked Civic Registry members can vote.' : 'Sign in to vote.',
          ),
        ),
      );
      return;
    }
    final rid = _poll.membersOnly ? _registryId : '';
    if (_poll.hasVoted(widget.userEmail, registryId: rid)) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('You can vote only once in this poll.')),
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
            'Vote for ${candidate.name}?\nYou can vote only once in this poll.',
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
      NgmyCivicVotingState? target;
      for (final p in latest.allPolls) {
        if (p.id == _poll.id) {
          target = p;
          break;
        }
      }
      target ??= latest.allPolls.isNotEmpty ? latest.allPolls.first : null;
      if (target == null) return;
      final checkRid = target.membersOnly ? _registryId : '';
      if (target.hasVoted(widget.userEmail, registryId: checkRid)) {
        if (mounted) {
          setState(() => _applyBundle(latest, keepPollId: target!.id));
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('You can vote only once in this poll.')),
          );
        }
        return;
      }
      target.ballots.add(
        NgmyCivicVotingBallot(
          voterEmail: widget.userEmail.toLowerCase().trim(),
          candidateId: candidate.id,
          at: DateTime.now().toUtc().toIso8601String(),
          voterRegistryId: checkRid,
        ),
      );
      await NgmyCivicVotingStore.save(latest);
      if (!mounted) return;
      setState(() => _applyBundle(latest, keepPollId: target!.id));
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Your vote for ${candidate.name} was counted.'), backgroundColor: _accent),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  void _openPhotoZoom(String photoUrl) {
    final provider = ngmyCivicVotingPhotoProvider(photoUrl);
    if (provider == null) return;
    showDialog<void>(
      context: context,
      barrierColor: Colors.black87,
      builder: (ctx) {
        return Dialog.fullscreen(
          backgroundColor: Colors.black,
          child: Stack(
            children: [
              Positioned.fill(
                child: InteractiveViewer(
                  minScale: 0.8,
                  maxScale: 5,
                  child: Center(
                    child: Image(image: provider, fit: BoxFit.contain),
                  ),
                ),
              ),
              SafeArea(
                child: Align(
                  alignment: Alignment.topRight,
                  child: IconButton(
                    onPressed: () => Navigator.pop(ctx),
                    icon: const Icon(Icons.close_rounded, color: Colors.white, size: 28),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Future<void> _downloadResults() async {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final choice = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: _card(isDark),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (ctx) {
        final ink = _ink(isDark);
        final muted = _muted(isDark);
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 18),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(
                  child: Container(
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(color: muted.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(99)),
                  ),
                ),
                const SizedBox(height: 14),
                Text('Download results', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 18)),
                const SizedBox(height: 4),
                Text('Choose how you want the results', style: TextStyle(color: muted, fontSize: 13)),
                const SizedBox(height: 12),
                ListTile(
                  leading: CircleAvatar(
                    backgroundColor: _accent.withValues(alpha: 0.15),
                    child: const Icon(Icons.description_rounded, color: _accent),
                  ),
                  title: Text('Paper results', style: TextStyle(color: ink, fontWeight: FontWeight.w800)),
                  subtitle: Text('Opens a printable paper PDF you can see right away', style: TextStyle(color: muted, fontSize: 12)),
                  onTap: () => Navigator.pop(ctx, 'paper'),
                ),
                ListTile(
                  leading: CircleAvatar(
                    backgroundColor: _gold.withValues(alpha: 0.18),
                    child: const Icon(Icons.table_chart_rounded, color: _gold),
                  ),
                  title: Text('Spreadsheet (CSV)', style: TextStyle(color: ink, fontWeight: FontWeight.w800)),
                  subtitle: Text('Download the raw results file', style: TextStyle(color: muted, fontSize: 12)),
                  onTap: () => Navigator.pop(ctx, 'csv'),
                ),
              ],
            ),
          ),
        );
      },
    );
    if (choice == null || !mounted) return;

    final sorted = [..._poll.candidates]
      ..sort((a, b) => _poll.votesFor(b.id).compareTo(_poll.votesFor(a.id)));
    final year = _poll.yearLabel.trim().isEmpty ? 'voting' : _poll.yearLabel.trim();

    if (choice == 'csv') {
      final buf = StringBuffer()
        ..writeln('Rank,Candidate,Votes')
        ..writeln('# ${_poll.title} · ${_poll.yearLabel} · ${_poll.dateLabel}')
        ..writeln('# Downloaded ${DateTime.now().toLocal()}');
      for (var i = 0; i < sorted.length; i++) {
        final c = sorted[i];
        buf.writeln('${i + 1},${c.name.replaceAll(',', ' ')},${_poll.votesFor(c.id)}');
      }
      final total = sorted.fold<int>(0, (n, c) => n + _poll.votesFor(c.id));
      buf.writeln('TOTAL,,$total');
      final msg = await ngmyDownloadCivicVotingResults(
        fileName: 'civic_voting_${year}_results.csv',
        content: buf.toString(),
      );
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
      return;
    }

    // Paper: open printable sheet immediately + download PDF.
    final html = ngmyCivicVotingResultsPaperHtml(voting: _poll);
    unawaited(
      ngmyPrintCivicMemberReport(
        htmlContent: html,
        plainText: '${_poll.title} results',
        fileName: 'civic_voting_${year}_results',
      ),
    );
    final pdfBytes = await ngmyBuildCivicVotingResultsPdfBytes(voting: _poll);
    final msg = await ngmyDownloadCivicVotingPdfResults(
      fileName: 'civic_voting_${year}_results.pdf',
      pdfBytes: pdfBytes,
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

    if (!_poll.open && !_bundle.anyOpen) {
      return Scaffold(
        backgroundColor: bg,
        appBar: AppBar(
          backgroundColor: bg,
          foregroundColor: ink,
          elevation: 0,
          title: Text(_poll.title, style: const TextStyle(fontWeight: FontWeight.w900)),
        ),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: ngmyComingSoonFrame(
              context: context,
              icon: Icons.how_to_vote_rounded,
              title: _poll.yearLabel.trim().isEmpty ? 'Voting' : '${_poll.yearLabel} Voting',
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
      voting: _poll,
    );
    final voteRid = _poll.membersOnly ? _registryId : '';
    final myPick = _poll.votedCandidateId(widget.userEmail, registryId: voteRid);
    final q = _searchQuery.trim().toLowerCase();
    final sorted = [..._poll.candidates]
      ..sort((a, b) {
        final vb = _poll.votesFor(b.id);
        final va = _poll.votesFor(a.id);
        if (vb != va) return vb.compareTo(va);
        return a.name.compareTo(b.name);
      });
    final visible = q.isEmpty
        ? sorted
        : sorted.where((c) => c.name.toLowerCase().contains(q)).toList();
    final totalVotes = sorted.fold<int>(0, (n, c) => n + _poll.votesFor(c.id));
    final leadVotes = sorted.isEmpty ? 0 : _poll.votesFor(sorted.first.id);
    final openPolls = _bundle.openPolls.isNotEmpty ? _bundle.openPolls : _bundle.allPolls;

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: ink,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        title: Text(_poll.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
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
          if (openPolls.length > 1) ...[
            SizedBox(
              height: 38,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: openPolls.length,
                separatorBuilder: (_, _) => const SizedBox(width: 8),
                itemBuilder: (_, i) {
                  final p = openPolls[i];
                  final selected = p.id == _poll.id;
                  return ChoiceChip(
                    label: Text(
                      p.title.trim().isEmpty ? NgmyVotingCategory.labelOf(p.category) : p.title,
                      style: TextStyle(
                        fontWeight: FontWeight.w800,
                        fontSize: 12,
                        color: selected ? Colors.white : ink,
                      ),
                    ),
                    selected: selected,
                    selectedColor: _accent,
                    backgroundColor: card,
                    onSelected: (_) => setState(() => _selectPoll(p)),
                  );
                },
              ),
            ),
            const SizedBox(height: 10),
          ],
          Container(
            padding: const EdgeInsets.fromLTRB(12, 8, 6, 8),
            decoration: BoxDecoration(
              color: card,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE4E4E7)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: _accent.withValues(alpha: 0.16),
                        borderRadius: BorderRadius.circular(99),
                      ),
                      child: const Text(
                        'LIVE',
                        style: TextStyle(color: _accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.8),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: _searchOpen
                          ? TextField(
                              controller: _searchCtrl,
                              autofocus: true,
                              textCapitalization: TextCapitalization.characters,
                              onChanged: (v) => setState(() => _searchQuery = v),
                              style: TextStyle(color: ink, fontWeight: FontWeight.w700, fontSize: 14),
                              decoration: InputDecoration(
                                isDense: true,
                                hintText: 'Search name…',
                                hintStyle: TextStyle(color: muted, fontSize: 13),
                                border: InputBorder.none,
                                contentPadding: const EdgeInsets.symmetric(vertical: 6),
                              ),
                            )
                          : Text(
                              _poll.dateLabel.trim().isEmpty ? 'Cast your vote' : _poll.dateLabel.trim(),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15),
                            ),
                    ),
                    if (!_searchOpen && _poll.yearLabel.trim().isNotEmpty)
                      Padding(
                        padding: const EdgeInsets.only(right: 2),
                        child: Text(
                          _poll.yearLabel,
                          style: const TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 13),
                        ),
                      ),
                    IconButton(
                      tooltip: 'Search candidate',
                      visualDensity: VisualDensity.compact,
                      padding: EdgeInsets.zero,
                      constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
                      onPressed: () {
                        setState(() {
                          _searchOpen = !_searchOpen;
                          if (!_searchOpen) {
                            _searchQuery = '';
                            _searchCtrl.clear();
                          }
                        });
                      },
                      icon: Icon(
                        _searchOpen ? Icons.close_rounded : Icons.search_rounded,
                        color: ink,
                        size: 22,
                      ),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 2, top: 2),
                  child: Text(
                    '$totalVotes vote${totalVotes == 1 ? '' : 's'} · one per member',
                    style: TextStyle(color: muted, fontWeight: FontWeight.w600, fontSize: 11.5),
                  ),
                ),
                if (myPick != null) ...[
                  const SizedBox(height: 6),
                  Text(
                    'You already voted — one vote only.',
                    style: TextStyle(color: _accent, fontWeight: FontWeight.w700, fontSize: 12),
                  ),
                ] else if (!canVote) ...[
                  const SizedBox(height: 6),
                  Text(
                    _poll.membersOnly
                        ? 'Linked Civic Registry members in allowed states only.'
                        : 'Anyone signed in can vote in this poll.',
                    style: TextStyle(color: _gold, fontWeight: FontWeight.w700, fontSize: 12),
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
            )
          else if (visible.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 32),
              child: Text('No candidate matches that name.', textAlign: TextAlign.center, style: TextStyle(color: muted, fontWeight: FontWeight.w600)),
            ),
          ...visible.map((c) {
            final rank = sorted.indexWhere((x) => x.id == c.id) + 1;
            final votes = _poll.votesFor(c.id);
            final selected = myPick == c.id;
            final photo = ngmyCivicVotingPhotoProvider(c.photoUrl);
            final hasProfile = c.bioNote.trim().isNotEmpty || c.voiceNoteUrl.trim().isNotEmpty;
            final share = leadVotes <= 0 ? 0.0 : (votes / leadVotes).clamp(0.0, 1.0);
            final canCast = canVote && myPick == null && !_busy;
            final crownColor = rank == 1
                ? _gold
                : rank == 2
                    ? _silver
                    : rank == 3
                        ? _bronze
                        : null;

            return Container(
              margin: const EdgeInsets.only(bottom: 14),
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: card,
                borderRadius: BorderRadius.circular(22),
                border: Border.all(
                  color: selected
                      ? _accent
                      : (rank == 1
                          ? _gold.withValues(alpha: 0.55)
                          : (isDark ? Colors.white10 : const Color(0xFFE4E4E7))),
                  width: selected || rank == 1 ? 1.6 : 1,
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      GestureDetector(
                        onTap: photo == null ? null : () => _openPhotoZoom(c.photoUrl),
                        child: SizedBox(
                          width: 72,
                          height: 78,
                          child: Stack(
                            clipBehavior: Clip.none,
                            alignment: Alignment.bottomCenter,
                            children: [
                              if (crownColor != null)
                                Positioned(
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  child: Icon(
                                    Icons.workspace_premium_rounded,
                                    color: crownColor,
                                    size: rank == 1 ? 26 : 22,
                                  ),
                                ),
                              Positioned(
                                bottom: 0,
                                child: CircleAvatar(
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
                              ),
                              Positioned(
                                right: 2,
                                bottom: 0,
                                child: Container(
                                  width: 22,
                                  height: 22,
                                  alignment: Alignment.center,
                                  decoration: BoxDecoration(
                                    color: crownColor ?? (isDark ? const Color(0xFF2A2A2A) : const Color(0xFFF4F4F5)),
                                    shape: BoxShape.circle,
                                    border: Border.all(color: card, width: 2),
                                  ),
                                  child: Text(
                                    '$rank',
                                    style: TextStyle(
                                      fontSize: 10,
                                      fontWeight: FontWeight.w900,
                                      color: crownColor != null ? const Color(0xFF18181B) : ink,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Expanded(
                                  child: Text(c.name, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 17)),
                                ),
                                if (crownColor != null)
                                  Text(
                                    rank == 1 ? '1st' : (rank == 2 ? '2nd' : '3rd'),
                                    style: TextStyle(color: crownColor, fontWeight: FontWeight.w900, fontSize: 12),
                                  ),
                              ],
                            ),
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
                            backgroundColor: _accent,
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
                      GestureDetector(
                        onTap: photo == null ? null : () => _openPhotoZoom(c.photoUrl),
                        child: CircleAvatar(
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
                      ),
                      if (photo != null) ...[
                        const SizedBox(height: 6),
                        Text('Tap photo to zoom', style: TextStyle(color: muted, fontSize: 12, fontWeight: FontWeight.w600)),
                      ],
                      const SizedBox(height: 12),
                      Text(c.name, textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 20)),
                      const SizedBox(height: 4),
                      Text(
                        '${_poll.votesFor(c.id)} vote${_poll.votesFor(c.id) == 1 ? '' : 's'}',
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

