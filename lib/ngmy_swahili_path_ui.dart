import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_swahili_curriculum.dart';

/// Gamified winding "road" map for a 5-day week + test (screenshot style).
/// Stateful so day unlocks refresh immediately when returning from a lesson.
class SwahiliWeekPathPage extends StatefulWidget {
  const SwahiliWeekPathPage({
    super.key,
    required this.level,
    required this.levelIndex,
    required this.isDayDone,
    required this.isDayUnlocked,
    required this.allDaysDone,
    required this.levelPassed,
    this.bestScore,
    required this.onDayTap,
    required this.onTestTap,
  });

  final SwahiliLevel level;
  final int levelIndex;
  final bool Function(int dayIndex) isDayDone;
  final bool Function(int dayIndex) isDayUnlocked;
  final bool Function() allDaysDone;
  final bool Function() levelPassed;
  final int? Function()? bestScore;
  final Future<void> Function(int dayIndex, BuildContext pathContext) onDayTap;
  final Future<void> Function(BuildContext pathContext)? onTestTap;

  @override
  State<SwahiliWeekPathPage> createState() => _SwahiliWeekPathPageState();
}

class _SwahiliWeekPathPageState extends State<SwahiliWeekPathPage> {
  int get _currentDay {
    for (var d = 0; d < widget.level.days.length; d++) {
      if (!widget.isDayDone(d) && widget.isDayUnlocked(d)) return d;
    }
    return widget.level.days.length - 1;
  }

  Future<void> _openDay(int d) async {
    await widget.onDayTap(d, context);
    if (mounted) setState(() {});
  }

  Future<void> _openTest() async {
    final tap = widget.onTestTap;
    if (tap == null) return;
    await tap(context);
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
    final points = _pathPoints(size);
    final allDone = widget.allDaysDone();
    final passed = widget.levelPassed();
    final score = widget.bestScore?.call();

    return Scaffold(
      backgroundColor: const Color(0xFF3D9A5F),
      body: NgmyHudMotion(
        builder: (context, pulse, scan, orbit) {
          const colors = [Color(0xFF4AAF6E), Color(0xFF14B8A6)];
          return Stack(
            children: [
              const _PathBackground(),
              SafeArea(
                child: Column(
                  children: [
                    NgmyToolkitAliveSection(
                      colors: colors,
                      pulse: pulse,
                      scan: scan,
                      orbit: orbit,
                      phase: 0.04,
                      padding: const EdgeInsets.fromLTRB(4, 2, 8, 2),
                      child: Row(
                        children: [
                          IconButton(
                            onPressed: () => Navigator.pop(context),
                            icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18),
                          ),
                          Expanded(
                            child: Text(
                              widget.level.title,
                              textAlign: TextAlign.center,
                              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17),
                            ),
                          ),
                          NgmyHudMiniOrb(
                            colors: colors,
                            pulse: pulse,
                            orbit: orbit,
                            size: 36,
                            icon: Icons.flag_rounded,
                          ),
                          const SizedBox(width: 6),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.2),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Text(
                              'Wiki ${widget.levelIndex + 1}',
                              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11),
                            ),
                          ),
                          const SizedBox(width: 4),
                        ],
                      ),
                    ),
                    Expanded(
                      child: LayoutBuilder(
                        builder: (context, constraints) {
                          final w = constraints.maxWidth;
                          final h = constraints.maxHeight;
                          final scaled = points.map((p) => Offset(p.dx * w, p.dy * h)).toList();
                          return Stack(
                            clipBehavior: Clip.none,
                            children: [
                              CustomPaint(
                                size: Size(w, h),
                                painter: _DashedPathPainter(scaled),
                              ),
                              ...List.generate(widget.level.days.length, (d) {
                                final pos = scaled[d];
                                final done = widget.isDayDone(d);
                                final unlocked = widget.isDayUnlocked(d);
                                final isCurrent = d == _currentDay && !done;
                                return Positioned(
                                  left: pos.dx - 52,
                                  top: pos.dy - 52,
                                  child: _PathNode(
                                    label: isCurrent ? 'Anza' : 'Siku ${d + 1}',
                                    subtitle: widget.level.days[d].title.split('—').last.trim(),
                                    state: done
                                        ? _NodeState.done
                                        : isCurrent
                                            ? _NodeState.current
                                            : unlocked
                                                ? _NodeState.available
                                                : _NodeState.locked,
                                    pulse: pulse,
                                    orbit: orbit,
                                    phase: 0.1 + d * 0.08,
                                    onTap: unlocked || done ? () => unawaited(_openDay(d)) : null,
                                  ),
                                );
                              }),
                              Positioned(
                                left: scaled.last.dx - 56,
                                top: scaled.last.dy - 56,
                                child: _PathNode(
                                  label: 'Mtihani',
                                  subtitle: passed
                                      ? 'Bora: ${score ?? 0}%'
                                      : allDone
                                          ? 'Pita 70%+'
                                          : 'Funga siku 5',
                                  state: passed
                                      ? _NodeState.done
                                      : allDone
                                          ? _NodeState.current
                                          : _NodeState.locked,
                                  isTest: true,
                                  pulse: pulse,
                                  orbit: orbit,
                                  phase: 0.55,
                                  onTap: allDone && widget.onTestTap != null ? () => unawaited(_openTest()) : null,
                                ),
                              ),
                              Positioned(
                                right: 8,
                                bottom: h * 0.18,
                                child: Icon(Icons.pets_rounded, size: 56, color: Colors.green.shade300.withValues(alpha: 0.9)),
                              ),
                            ],
                          );
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  /// Normalized path points bottom → top (days 1-5, then test).
  List<Offset> _pathPoints(Size size) {
    return const [
      Offset(0.52, 0.86),
      Offset(0.28, 0.70),
      Offset(0.74, 0.56),
      Offset(0.32, 0.42),
      Offset(0.68, 0.28),
      Offset(0.48, 0.10),
    ];
  }
}

enum _NodeState { current, available, locked, done }

class _PathNode extends StatelessWidget {
  const _PathNode({
    required this.label,
    required this.subtitle,
    required this.state,
    this.isTest = false,
    this.onTap,
    this.pulse = 0,
    this.orbit = 0,
    this.phase = 0,
  });

  final String label;
  final String subtitle;
  final _NodeState state;
  final bool isTest;
  final VoidCallback? onTap;
  final double pulse;
  final double orbit;
  final double phase;

  @override
  Widget build(BuildContext context) {
    Color c1;
    Color c2;
    Color c3;
    switch (state) {
      case _NodeState.current:
        c1 = const Color(0xFFFFB020);
        c2 = const Color(0xFFFF8C00);
        c3 = Colors.white;
      case _NodeState.done:
        c1 = const Color(0xFF7EE081);
        c2 = const Color(0xFF4CAF50);
        c3 = Colors.white;
      case _NodeState.available:
        c1 = const Color(0xFFB8E6C8);
        c2 = const Color(0xFF8FD4A8);
        c3 = const Color(0xFF1B5E3B);
      case _NodeState.locked:
        c1 = const Color(0xFF9DCBAA);
        c2 = const Color(0xFF7BB892);
        c3 = Colors.white70;
    }

    final glow = state == _NodeState.current || state == _NodeState.done
        ? 0.35 + ((pulse + phase) % 1.0) * 0.35
        : 0.2;
    // Keep orbit referenced so neighboring nodes stay phase-offset ready.
    final size = isTest ? 88.0 : 104.0;
    final borderPulse = 0.55 + ((pulse + orbit * 0.15 + phase) % 1.0) * 0.15;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        customBorder: const CircleBorder(),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              width: size,
              height: size,
              child: Container(
                width: size,
                height: size,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [c1, c2],
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: c2.withValues(alpha: glow),
                      blurRadius: 16 + pulse * 8,
                      offset: const Offset(0, 6),
                    ),
                  ],
                  border: Border.all(color: Colors.white.withValues(alpha: borderPulse), width: 3),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      state == _NodeState.locked
                          ? Icons.lock_rounded
                          : state == _NodeState.done
                              ? Icons.check_rounded
                              : isTest
                                  ? Icons.quiz_rounded
                                  : Icons.flag_rounded,
                      color: c3,
                      size: 26,
                    ),
                    const SizedBox(height: 2),
                    Text(
                      label,
                      style: TextStyle(
                        color: c3,
                        fontWeight: FontWeight.w900,
                        fontSize: isTest ? 11 : 13,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 4),
            SizedBox(
              width: 110,
              child: Text(
                subtitle,
                textAlign: TextAlign.center,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  color: Colors.white.withValues(alpha: 0.92),
                  fontSize: 9,
                  fontWeight: FontWeight.w600,
                  height: 1.2,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PathBackground extends StatelessWidget {
  const _PathBackground();

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFF4AAF6E), Color(0xFF358F55), Color(0xFF2D7A4A)],
            ),
          ),
        ),
        CustomPaint(painter: _TopoPainter()),
        Positioned(left: 24, top: 120, child: Icon(Icons.park_rounded, size: 28, color: Colors.white.withValues(alpha: 0.25))),
        Positioned(right: 40, top: 200, child: Icon(Icons.forest_rounded, size: 32, color: Colors.white.withValues(alpha: 0.2))),
        Positioned(left: 50, bottom: 180, child: Icon(Icons.grass_rounded, size: 24, color: Colors.white.withValues(alpha: 0.22))),
      ],
    );
  }
}

class _DashedPathPainter extends CustomPainter {
  _DashedPathPainter(this.points);

  final List<Offset> points;

  @override
  void paint(Canvas canvas, Size size) {
    if (points.length < 2) return;

    final path = Path();
    path.moveTo(points.first.dx, points.first.dy);
    for (var i = 1; i < points.length; i++) {
      final prev = points[i - 1];
      final cur = points[i];
      final midY = (prev.dy + cur.dy) / 2;
      path.cubicTo(prev.dx, midY, cur.dx, midY, cur.dx, cur.dy);
    }

    final paint = Paint()
      ..color = Colors.white.withValues(alpha: 0.85)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round;

    const dash = 14.0;
    const gap = 10.0;
    for (final metric in path.computeMetrics()) {
      var dist = 0.0;
      while (dist < metric.length) {
        final len = math.min(dash, metric.length - dist);
        canvas.drawPath(metric.extractPath(dist, dist + len), paint);
        dist += dash + gap;
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DashedPathPainter old) => old.points != points;
}

class _TopoPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.white.withValues(alpha: 0.06)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2;

    for (var y = 0.0; y < size.height; y += 36) {
      final path = Path();
      for (var x = 0.0; x <= size.width; x += 8) {
        final dy = y + math.sin(x / 42 + y / 55) * 6;
        if (x == 0) {
          path.moveTo(x, dy);
        } else {
          path.lineTo(x, dy);
        }
      }
      canvas.drawPath(path, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Dashboard level card (screenshot left style).
class SwahiliLevelDashboardCard extends StatelessWidget {
  const SwahiliLevelDashboardCard({
    super.key,
    required this.level,
    required this.levelIndex,
    required this.progress,
    required this.locked,
    required this.passed,
    required this.onTap,
    this.bare = false,
  });

  final SwahiliLevel level;
  final int levelIndex;
  final double progress;
  final bool locked;
  final bool passed;
  final VoidCallback? onTap;
  /// When true, skip outer Material/InkWell chrome (parent supplies AliveSection).
  final bool bare;

  static const _gradients = [
    [Color(0xFFFF9A4A), Color(0xFFFF6B35)],
    [Color(0xFF9B6DFF), Color(0xFF7C3AED)],
    [Color(0xFF38BDF8), Color(0xFF2563EB)],
    [Color(0xFFF472B6), Color(0xFFDB2777)],
    [Color(0xFF34D399), Color(0xFF059669)],
    [Color(0xFFFBBF24), Color(0xFFD97706)],
  ];

  static List<Color> gradientsFor(int levelIndex) => _gradients[levelIndex % _gradients.length];

  @override
  Widget build(BuildContext context) {
    final g = gradientsFor(levelIndex);
    final pct = (progress * 100).round();

    final content = SizedBox(
      width: 168,
      height: 200,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Stack(
          children: [
            if (locked)
              Positioned(
                top: 0,
                right: 0,
                child: Icon(Icons.lock_rounded, color: Colors.white.withValues(alpha: 0.8), size: 20),
              ),
            if (passed)
              const Positioned(top: 0, right: 0, child: Icon(Icons.verified_rounded, color: Colors.white, size: 22)),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(level.icon, color: Colors.white, size: 32),
                const Spacer(),
                Text(
                  level.title,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
                ),
                const SizedBox(height: 4),
                Text(
                  'Hatua ${levelIndex + 1} · $pct%',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 11, fontWeight: FontWeight.w600),
                ),
              ],
            ),
            Positioned(
              right: 0,
              bottom: 0,
              child: SizedBox(
                width: 44,
                height: 44,
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    CircularProgressIndicator(
                      value: progress,
                      strokeWidth: 4,
                      backgroundColor: Colors.white.withValues(alpha: 0.25),
                      color: Colors.white,
                    ),
                    Text('$pct%', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10)),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );

    if (bare) return content;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: locked ? null : onTap,
        borderRadius: BorderRadius.circular(24),
        child: Ink(
          width: 168,
          height: 200,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: g),
            boxShadow: [
              BoxShadow(color: g.first.withValues(alpha: 0.35), blurRadius: 18, offset: const Offset(0, 8)),
            ],
          ),
          child: Stack(
            children: [
              if (locked)
                Positioned(
                  top: 0,
                  right: 0,
                  child: Icon(Icons.lock_rounded, color: Colors.white.withValues(alpha: 0.8), size: 20),
                ),
              if (passed)
                const Positioned(top: 0, right: 0, child: Icon(Icons.verified_rounded, color: Colors.white, size: 22)),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(level.icon, color: Colors.white, size: 32),
                  const Spacer(),
                  Text(
                    level.title,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Hatua ${levelIndex + 1} · $pct%',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 11, fontWeight: FontWeight.w600),
                  ),
                ],
              ),
              Positioned(
                right: 0,
                bottom: 0,
                child: SizedBox(
                  width: 44,
                  height: 44,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      CircularProgressIndicator(
                        value: progress,
                        strokeWidth: 4,
                        backgroundColor: Colors.white.withValues(alpha: 0.25),
                        color: Colors.white,
                      ),
                      Text('$pct%', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10)),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
