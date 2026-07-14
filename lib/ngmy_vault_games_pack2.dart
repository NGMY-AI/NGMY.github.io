import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// Second wave of Vault Channel games — nine reusable engines (lane
/// dodging, drag-launch timing, precision parking, wheelie balance,
/// endless-runner jumping, item collecting, target aim, quick math, and
/// pattern memory), each skinned into several car/motorcycle/skill themed
/// variants via [VaultGameDef]. Fully offline, pays into the shared wallet.

Widget _chrome({required BuildContext context, required String title, required List<Color> colors, required int score, required Duration timeLeft, required Widget child}) {
  return Scaffold(
    backgroundColor: const Color(0xFF030712),
    body: SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(6, 6, 16, 6),
            child: Row(
              children: [
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                Expanded(
                  child: Text(title, textAlign: TextAlign.center, style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 14)),
                ),
                const SizedBox(width: 40),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('SCORE  $score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                Text('${timeLeft.inSeconds}s', style: TextStyle(color: timeLeft.inSeconds <= 5 ? const Color(0xFFEF4444) : Colors.white70, fontWeight: FontWeight.w900, fontSize: 15)),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Expanded(child: child),
        ],
      ),
    ),
  );
}

class _EndCard extends StatelessWidget {
  const _EndCard({required this.score, required this.coins, required this.colors, required this.onAgain, required this.onExit});
  final int score;
  final int coins;
  final List<Color> colors;
  final VoidCallback onAgain;
  final VoidCallback onExit;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black.withValues(alpha: 0.74),
      alignment: Alignment.center,
      child: TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: const Duration(milliseconds: 460),
        curve: Curves.elasticOut,
        builder: (context, t, child) => Transform.scale(scale: t.clamp(0, 1.2), child: Opacity(opacity: t.clamp(0, 1), child: child)),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 36),
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(colors: [colors.first.withValues(alpha: 0.28), const Color(0xFF0B0A16)]),
            border: Border.all(color: colors.first.withValues(alpha: 0.6)),
            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 30)],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.emoji_events_rounded, color: colors.first, size: 46),
              const SizedBox(height: 10),
              const Text('RUN COMPLETE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.4)),
              const SizedBox(height: 14),
              Text('$score', style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 40)),
              const Text('SCORE', style: TextStyle(color: Colors.white38, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2)),
              const SizedBox(height: 10),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.monetization_on_rounded, color: Color(0xFFFBBF24), size: 18),
                  const SizedBox(width: 4),
                  Text('+$coins coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 15)),
                ],
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: onExit,
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                      child: const Text('Exit'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: onAgain,
                      style: FilledButton.styleFrom(backgroundColor: colors.first),
                      child: const Text('Play Again', style: TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Engine A: Lane Racer — steer across lanes, dodge oncoming obstacles ─────

class _LaneObstacle {
  _LaneObstacle({required this.lane, this.y = -0.15});
  final int lane;
  double y;
}

class NgmyVaultLaneRacerGame extends StatefulWidget {
  const NgmyVaultLaneRacerGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultLaneRacerGame> createState() => _LaneRacerState();
}

class _LaneRacerState extends State<NgmyVaultLaneRacerGame> {
  final _rnd = math.Random();
  int _lane = 1;
  int _score = 0;
  int _lives = 3;
  double _speed = 0.010;
  final List<_LaneObstacle> _obstacles = [];
  Timer? _spawn;
  Timer? _tick;
  Timer? _clock;
  Duration _left = const Duration(seconds: 40);
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _spawn = Timer.periodic(const Duration(milliseconds: 850), (_) {
      if (_over) return;
      setState(() => _obstacles.add(_LaneObstacle(lane: _rnd.nextInt(3))));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        for (final o in _obstacles) {
          o.y += _speed;
        }
        final passed = _obstacles.where((o) => o.y > 1.05).length;
        if (passed > 0) {
          _score += passed * 5;
          _obstacles.removeWhere((o) => o.y > 1.05);
        }
        for (final o in _obstacles.toList()) {
          if (o.lane == _lane && o.y > 0.72 && o.y < 0.9) {
            _obstacles.remove(o);
            _lives -= 1;
            HapticFeedback.heavyImpact();
          }
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.022, _speed + 0.0003);
        _score += 1;
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _spawn?.cancel();
    _tick?.cancel();
    _clock?.cancel();
    super.dispose();
  }

  Future<void> _finish() async {
    if (_over) return;
    _spawn?.cancel();
    _tick?.cancel();
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _lane = 1;
      _score = 0;
      _lives = 3;
      _speed = 0.010;
      _obstacles.clear();
      _left = const Duration(seconds: 40);
      _over = false;
    });
    _spawn = Timer.periodic(const Duration(milliseconds: 850), (_) {
      if (_over) return;
      setState(() => _obstacles.add(_LaneObstacle(lane: _rnd.nextInt(3))));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        for (final o in _obstacles) {
          o.y += _speed;
        }
        _obstacles.removeWhere((o) => o.y > 1.05);
        for (final o in _obstacles.toList()) {
          if (o.lane == _lane && o.y > 0.72 && o.y < 0.9) {
            _obstacles.remove(o);
            _lives -= 1;
          }
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.022, _speed + 0.0003);
        _score += 1;
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onHorizontalDragEnd: (d) {
              final v = d.primaryVelocity ?? 0;
              if (v < -80) setState(() => _lane = math.max(0, _lane - 1));
              if (v > 80) setState(() => _lane = math.min(2, _lane + 1));
            },
            onTapUp: (d) {
              final w = MediaQuery.sizeOf(context).width;
              if (d.globalPosition.dx < w / 2) {
                setState(() => _lane = math.max(0, _lane - 1));
              } else {
                setState(() => _lane = math.min(2, _lane + 1));
              }
            },
            child: Column(
              children: [
                Row(mainAxisAlignment: MainAxisAlignment.center, children: List.generate(_lives.clamp(0, 3), (i) => const Padding(padding: EdgeInsets.symmetric(horizontal: 2), child: Icon(Icons.favorite_rounded, color: Color(0xFFF472B6), size: 14)))),
                Expanded(
                  child: LayoutBuilder(
                    builder: (context, c) {
                      final laneW = c.maxWidth / 3;
                      return Stack(
                        children: [
                          for (var i = 1; i < 3; i++) Positioned(left: i * laneW, top: 0, bottom: 0, child: Container(width: 1, color: Colors.white12)),
                          for (final o in _obstacles)
                            Positioned(
                              left: o.lane * laneW + laneW / 2 - 18,
                              top: o.y * c.maxHeight,
                              child: Icon(Icons.warning_amber_rounded, color: _colors.last, size: 34),
                            ),
                          AnimatedPositioned(
                            duration: const Duration(milliseconds: 140),
                            left: _lane * laneW + laneW / 2 - 20,
                            bottom: c.maxHeight * 0.08,
                            child: Icon(widget.game.icon, color: _colors.first, size: 40),
                          ),
                        ],
                      );
                    },
                  ),
                ),
                Padding(padding: const EdgeInsets.only(bottom: 10), child: Text('Swipe or tap left/right to change lanes', style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 11))),
              ],
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine B: Drag Launch — tap the needle in the green launch zone ─────────

class NgmyVaultDragLaunchGame extends StatefulWidget {
  const NgmyVaultDragLaunchGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultDragLaunchGame> createState() => _DragLaunchState();
}

class _DragLaunchState extends State<NgmyVaultDragLaunchGame> with SingleTickerProviderStateMixin {
  late final AnimationController _needle;
  final _rnd = math.Random();
  int _score = 0;
  int _combo = 0;
  Duration _left = const Duration(seconds: 30);
  Timer? _clock;
  bool _over = false;
  double _zone = 0.5;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _needle = AnimationController(vsync: this, duration: const Duration(milliseconds: 1000))..repeat();
    _rollZone();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    _needle.dispose();
    super.dispose();
  }

  void _rollZone() => _zone = 0.2 + _rnd.nextDouble() * 0.6;

  void _tap() {
    if (_over) return;
    final dist = (_needle.value - _zone).abs();
    if (dist < 0.06) {
      _combo++;
      setState(() => _score += 18 + _combo * 4);
      HapticFeedback.mediumImpact();
    } else if (dist < 0.14) {
      setState(() => _score += 7);
      _combo = 0;
      HapticFeedback.selectionClick();
    } else {
      _combo = 0;
      setState(() => _score = math.max(0, _score - 6));
      HapticFeedback.heavyImpact();
    }
    _rollZone();
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _combo = 0;
      _left = const Duration(seconds: 30);
      _over = false;
    });
    _rollZone();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: GestureDetector(
            onTap: _tap,
            behavior: HitTestBehavior.opaque,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 26),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(widget.game.icon, size: 54, color: _colors.first),
                  const SizedBox(height: 10),
                  if (_combo >= 3) Text('COMBO x$_combo', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900)),
                  const SizedBox(height: 18),
                  AnimatedBuilder(
                    animation: _needle,
                    builder: (context, _) {
                      return SizedBox(
                        height: 56,
                        child: Stack(
                          children: [
                            Positioned.fill(child: Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(28), color: Colors.white.withValues(alpha: 0.06)))),
                            Align(alignment: Alignment(_zone * 2 - 1, 0), child: Container(width: 40, height: 56, decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), color: const Color(0xFF34D399).withValues(alpha: 0.4)))),
                            Align(
                              alignment: Alignment(_needle.value * 2 - 1, 0),
                              child: Container(width: 22, height: 22, decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: _colors), boxShadow: [BoxShadow(color: _colors.first.withValues(alpha: 0.6), blurRadius: 12)])),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                  const SizedBox(height: 18),
                  Text('Tap when the needle hits the green launch zone', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12)),
                ],
              ),
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine C: Perfect Park — stop the sliding car in the target zone ────────

class NgmyVaultPerfectParkGame extends StatefulWidget {
  const NgmyVaultPerfectParkGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultPerfectParkGame> createState() => _PerfectParkState();
}

class _PerfectParkState extends State<NgmyVaultPerfectParkGame> {
  final _rnd = math.Random();
  Timer? _tick;
  Timer? _clock;
  double _pos = 0;
  bool _movingRight = true;
  double _speed = 0.02;
  double _zoneWidth = 0.26;
  late double _zoneCenter;
  int _score = 0;
  int _lives = 3;
  bool _moving = true;
  Duration _left = const Duration(seconds: 40);
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _rollZone();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) {
      if (_over || !_moving) return;
      setState(() {
        _pos += _movingRight ? _speed : -_speed;
        if (_pos > 1) {
          _pos = 1;
          _movingRight = false;
        } else if (_pos < -1) {
          _pos = -1;
          _movingRight = true;
        }
      });
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _tick?.cancel();
    _clock?.cancel();
    super.dispose();
  }

  void _rollZone() => _zoneCenter = -0.6 + _rnd.nextDouble() * 1.2;

  void _stop() {
    if (_over || !_moving) return;
    final dist = (_pos - _zoneCenter).abs();
    setState(() => _moving = false);
    if (dist < _zoneWidth / 2) {
      setState(() {
        _score += 25;
        _zoneWidth = math.max(0.1, _zoneWidth - 0.015);
      });
      HapticFeedback.mediumImpact();
    } else {
      setState(() => _lives -= 1);
      HapticFeedback.heavyImpact();
    }
    Future<void>.delayed(const Duration(milliseconds: 500), () {
      if (!mounted || _over) return;
      if (_lives <= 0) {
        _finish();
        return;
      }
      setState(() {
        _moving = true;
        _pos = -1;
        _movingRight = true;
        _speed = math.min(0.05, _speed + 0.0015);
      });
      _rollZone();
    });
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _pos = -1;
      _movingRight = true;
      _speed = 0.02;
      _zoneWidth = 0.26;
      _score = 0;
      _lives = 3;
      _moving = true;
      _left = const Duration(seconds: 40);
      _over = false;
    });
    _rollZone();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: GestureDetector(
            onTap: _stop,
            behavior: HitTestBehavior.opaque,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 26),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: List.generate(_lives.clamp(0, 3), (i) => const Padding(padding: EdgeInsets.symmetric(horizontal: 2), child: Icon(Icons.favorite_rounded, color: Color(0xFFF472B6), size: 14)))),
                  const SizedBox(height: 18),
                  SizedBox(
                    height: 64,
                    child: Stack(
                      children: [
                        Positioned.fill(child: Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(16), color: Colors.white.withValues(alpha: 0.05)))),
                        Align(alignment: Alignment(_zoneCenter, 0), child: Container(width: _zoneWidth * 140, height: 64, decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), color: const Color(0xFF34D399).withValues(alpha: 0.35), border: Border.all(color: const Color(0xFF34D399))))),
                        Align(alignment: Alignment(_pos, 0), child: Icon(widget.game.icon, color: _colors.first, size: 38)),
                      ],
                    ),
                  ),
                  const SizedBox(height: 18),
                  Text('Tap to stop right in the green zone', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12)),
                ],
              ),
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine D: Wheelie Balance — hold to keep the balance meter in the zone ──

class NgmyVaultWheelieGame extends StatefulWidget {
  const NgmyVaultWheelieGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultWheelieGame> createState() => _WheelieState();
}

class _WheelieState extends State<NgmyVaultWheelieGame> {
  double _balance = 0.5;
  bool _holding = false;
  int _score = 0;
  Duration _left = const Duration(seconds: 35);
  Timer? _tick;
  Timer? _clock;
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _tick = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        _balance += _holding ? 0.018 : -0.014;
        _balance = _balance.clamp(0, 1);
        if (_balance > 0.4 && _balance < 0.75) {
          _score += 2;
        }
      });
      if (_balance <= 0.02 || _balance >= 0.98) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _tick?.cancel();
    _clock?.cancel();
    super.dispose();
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _balance = 0.5;
      _score = 0;
      _left = const Duration(seconds: 35);
      _over = false;
    });
    _tick = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        _balance += _holding ? 0.018 : -0.014;
        _balance = _balance.clamp(0, 1);
        if (_balance > 0.4 && _balance < 0.75) _score += 2;
      });
      if (_balance <= 0.02 || _balance >= 0.98) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    final inZone = _balance > 0.4 && _balance < 0.75;
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: Listener(
            onPointerDown: (_) => setState(() => _holding = true),
            onPointerUp: (_) => setState(() => _holding = false),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 40),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Transform.rotate(angle: -(_balance - 0.5) * 0.9, child: Icon(widget.game.icon, size: 64, color: inZone ? const Color(0xFF34D399) : _colors.first)),
                  const SizedBox(height: 26),
                  Container(
                    height: 220,
                    width: 40,
                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(20), color: Colors.white.withValues(alpha: 0.06)),
                    child: Stack(
                      alignment: Alignment.bottomCenter,
                      children: [
                        Positioned(
                          bottom: 220 * 0.4,
                          child: Container(width: 40, height: 220 * 0.35, decoration: BoxDecoration(color: const Color(0xFF34D399).withValues(alpha: 0.3), borderRadius: BorderRadius.circular(20))),
                        ),
                        AnimatedPositioned(
                          duration: const Duration(milliseconds: 60),
                          bottom: _balance * 220 - 8,
                          child: Container(width: 40, height: 16, decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), gradient: LinearGradient(colors: _colors))),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text('Press & hold to lift, release to drop — stay in the green', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12)),
                ],
              ),
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine E: Jump Runner — endless auto-run, tap to jump obstacles ─────────

class _RunnerObstacle {
  _RunnerObstacle(this.x);
  double x;
}

class NgmyVaultJumpRunnerGame extends StatefulWidget {
  const NgmyVaultJumpRunnerGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultJumpRunnerGame> createState() => _JumpRunnerState();
}

class _JumpRunnerState extends State<NgmyVaultJumpRunnerGame> {
  final _rnd = math.Random();
  double _jump = 0;
  bool _jumping = false;
  int _score = 0;
  int _lives = 3;
  double _speed = 0.014;
  final List<_RunnerObstacle> _obstacles = [];
  Timer? _spawn;
  Timer? _tick;
  Timer? _clock;
  Duration _left = const Duration(seconds: 40);
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _spawn = Timer.periodic(const Duration(milliseconds: 1100), (_) {
      if (_over) return;
      setState(() => _obstacles.add(_RunnerObstacle(1.1)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) {
      if (_over) return;
      setState(() {
        for (final o in _obstacles) {
          o.x -= _speed;
        }
        final passed = _obstacles.where((o) => o.x < -0.15).length;
        if (passed > 0) {
          _score += passed * 8;
          _obstacles.removeWhere((o) => o.x < -0.15);
        }
        if (_jumping) {
          _jump += 0.05;
          if (_jump >= 1) _jumping = false;
        } else if (_jump > 0) {
          _jump = math.max(0, _jump - 0.05);
        }
        final jumpHeight = math.sin(_jump * math.pi) * 0.42;
        for (final o in _obstacles.toList()) {
          if (o.x > -0.05 && o.x < 0.08 && jumpHeight < 0.18) {
            _obstacles.remove(o);
            _lives -= 1;
            HapticFeedback.heavyImpact();
          }
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.026, _speed + 0.0004);
        _score += 1;
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _spawn?.cancel();
    _tick?.cancel();
    _clock?.cancel();
    super.dispose();
  }

  void _doJump() {
    if (_over || _jumping || _jump > 0) return;
    setState(() => _jumping = true);
    HapticFeedback.lightImpact();
  }

  Future<void> _finish() async {
    if (_over) return;
    _spawn?.cancel();
    _tick?.cancel();
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _jump = 0;
      _jumping = false;
      _score = 0;
      _lives = 3;
      _speed = 0.014;
      _obstacles.clear();
      _left = const Duration(seconds: 40);
      _over = false;
    });
    _spawn = Timer.periodic(const Duration(milliseconds: 1100), (_) {
      if (_over) return;
      setState(() => _obstacles.add(_RunnerObstacle(1.1)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) {
      if (_over) return;
      setState(() {
        for (final o in _obstacles) {
          o.x -= _speed;
        }
        _obstacles.removeWhere((o) => o.x < -0.15);
        if (_jumping) {
          _jump += 0.05;
          if (_jump >= 1) _jumping = false;
        } else if (_jump > 0) {
          _jump = math.max(0, _jump - 0.05);
        }
        final jumpHeight = math.sin(_jump * math.pi) * 0.42;
        for (final o in _obstacles.toList()) {
          if (o.x > -0.05 && o.x < 0.08 && jumpHeight < 0.18) {
            _obstacles.remove(o);
            _lives -= 1;
          }
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.026, _speed + 0.0004);
        _score += 1;
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    final jumpHeight = math.sin(_jump * math.pi) * 0.42;
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: GestureDetector(
            onTap: _doJump,
            behavior: HitTestBehavior.opaque,
            child: Column(
              children: [
                Row(mainAxisAlignment: MainAxisAlignment.center, children: List.generate(_lives.clamp(0, 3), (i) => const Padding(padding: EdgeInsets.symmetric(horizontal: 2), child: Icon(Icons.favorite_rounded, color: Color(0xFFF472B6), size: 14)))),
                Expanded(
                  child: LayoutBuilder(
                    builder: (context, c) {
                      return Stack(
                        children: [
                          Positioned(left: 0, right: 0, bottom: c.maxHeight * 0.12, child: Container(height: 2, color: Colors.white24)),
                          for (final o in _obstacles)
                            Positioned(
                              left: o.x * c.maxWidth,
                              bottom: c.maxHeight * 0.14,
                              child: const Icon(Icons.change_history_rounded, color: Color(0xFFEF4444), size: 30),
                            ),
                          Positioned(
                            left: c.maxWidth * 0.08,
                            bottom: c.maxHeight * 0.14 + jumpHeight * c.maxHeight,
                            child: Icon(widget.game.icon, color: _colors.first, size: 40),
                          ),
                        ],
                      );
                    },
                  ),
                ),
                Padding(padding: const EdgeInsets.only(bottom: 10), child: Text('Tap anywhere to jump', style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 11))),
              ],
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine F: Item Collector — steer across lanes, grab items, dodge hazards ─

class _FallItem {
  _FallItem({required this.lane, required this.good, this.y = -0.15});
  final int lane;
  final bool good;
  double y;
}

class NgmyVaultCollectorGame extends StatefulWidget {
  const NgmyVaultCollectorGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultCollectorGame> createState() => _CollectorState();
}

class _CollectorState extends State<NgmyVaultCollectorGame> {
  final _rnd = math.Random();
  int _lane = 1;
  int _score = 0;
  int _lives = 3;
  double _speed = 0.011;
  final List<_FallItem> _items = [];
  Timer? _spawn;
  Timer? _tick;
  Timer? _clock;
  Duration _left = const Duration(seconds: 40);
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _spawn = Timer.periodic(const Duration(milliseconds: 620), (_) {
      if (_over) return;
      setState(() => _items.add(_FallItem(lane: _rnd.nextInt(3), good: _rnd.nextDouble() > 0.28)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        for (final it in _items) {
          it.y += _speed;
        }
        _items.removeWhere((it) => it.y > 1.05);
        for (final it in _items.toList()) {
          if (it.lane == _lane && it.y > 0.72 && it.y < 0.9) {
            _items.remove(it);
            if (it.good) {
              _score += 10;
              HapticFeedback.lightImpact();
            } else {
              _lives -= 1;
              HapticFeedback.heavyImpact();
            }
          }
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.02, _speed + 0.00025);
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _spawn?.cancel();
    _tick?.cancel();
    _clock?.cancel();
    super.dispose();
  }

  Future<void> _finish() async {
    if (_over) return;
    _spawn?.cancel();
    _tick?.cancel();
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _lane = 1;
      _score = 0;
      _lives = 3;
      _speed = 0.011;
      _items.clear();
      _left = const Duration(seconds: 40);
      _over = false;
    });
    _spawn = Timer.periodic(const Duration(milliseconds: 620), (_) {
      if (_over) return;
      setState(() => _items.add(_FallItem(lane: _rnd.nextInt(3), good: _rnd.nextDouble() > 0.28)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        for (final it in _items) {
          it.y += _speed;
        }
        _items.removeWhere((it) => it.y > 1.05);
        for (final it in _items.toList()) {
          if (it.lane == _lane && it.y > 0.72 && it.y < 0.9) {
            _items.remove(it);
            if (it.good) {
              _score += 10;
            } else {
              _lives -= 1;
            }
          }
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.02, _speed + 0.00025);
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapUp: (d) {
              final w = MediaQuery.sizeOf(context).width;
              if (d.globalPosition.dx < w / 2) {
                setState(() => _lane = math.max(0, _lane - 1));
              } else {
                setState(() => _lane = math.min(2, _lane + 1));
              }
            },
            child: Column(
              children: [
                Row(mainAxisAlignment: MainAxisAlignment.center, children: List.generate(_lives.clamp(0, 3), (i) => const Padding(padding: EdgeInsets.symmetric(horizontal: 2), child: Icon(Icons.favorite_rounded, color: Color(0xFFF472B6), size: 14)))),
                Expanded(
                  child: LayoutBuilder(
                    builder: (context, c) {
                      final laneW = c.maxWidth / 3;
                      return Stack(
                        children: [
                          for (var i = 1; i < 3; i++) Positioned(left: i * laneW, top: 0, bottom: 0, child: Container(width: 1, color: Colors.white12)),
                          for (final it in _items)
                            Positioned(
                              left: it.lane * laneW + laneW / 2 - 16,
                              top: it.y * c.maxHeight,
                              child: Icon(it.good ? Icons.local_gas_station_rounded : Icons.dangerous_rounded, color: it.good ? const Color(0xFF34D399) : const Color(0xFFEF4444), size: 30),
                            ),
                          AnimatedPositioned(
                            duration: const Duration(milliseconds: 140),
                            left: _lane * laneW + laneW / 2 - 20,
                            bottom: c.maxHeight * 0.08,
                            child: Icon(widget.game.icon, color: _colors.first, size: 40),
                          ),
                        ],
                      );
                    },
                  ),
                ),
                Padding(padding: const EdgeInsets.only(bottom: 10), child: Text('Tap left/right — grab green, dodge red', style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 11))),
              ],
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine G: Target Aim — tap the target the instant it appears ────────────

class NgmyVaultTargetAimGame extends StatefulWidget {
  const NgmyVaultTargetAimGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultTargetAimGame> createState() => _TargetAimState();
}

class _TargetAimState extends State<NgmyVaultTargetAimGame> {
  final _rnd = math.Random();
  double _tx = 0.5;
  double _ty = 0.5;
  bool _visible = false;
  int _score = 0;
  Duration _left = const Duration(seconds: 30);
  Timer? _clock;
  Timer? _hide;
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _spawnTarget();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    _hide?.cancel();
    super.dispose();
  }

  void _spawnTarget() {
    _hide?.cancel();
    setState(() {
      _tx = 0.15 + _rnd.nextDouble() * 0.7;
      _ty = 0.15 + _rnd.nextDouble() * 0.6;
      _visible = true;
    });
    _hide = Timer(const Duration(milliseconds: 900), () {
      if (!mounted || _over) return;
      setState(() {
        _visible = false;
        _score = math.max(0, _score - 3);
      });
      Future<void>.delayed(const Duration(milliseconds: 260), () {
        if (mounted && !_over) _spawnTarget();
      });
    });
  }

  void _hit() {
    if (_over || !_visible) return;
    _hide?.cancel();
    setState(() {
      _score += 16;
      _visible = false;
    });
    HapticFeedback.mediumImpact();
    Future<void>.delayed(const Duration(milliseconds: 160), () {
      if (mounted && !_over) _spawnTarget();
    });
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    _hide?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _left = const Duration(seconds: 30);
      _over = false;
    });
    _spawnTarget();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: LayoutBuilder(
            builder: (context, c) {
              return Stack(
                children: [
                  if (_visible)
                    Positioned(
                      left: _tx * c.maxWidth - 28,
                      top: _ty * c.maxHeight - 28,
                      child: GestureDetector(
                        onTap: _hit,
                        child: Container(
                          width: 56,
                          height: 56,
                          decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: _colors), boxShadow: [BoxShadow(color: _colors.first.withValues(alpha: 0.6), blurRadius: 16)]),
                          child: Icon(widget.game.icon, color: Colors.white, size: 26),
                        ),
                      ),
                    ),
                  Positioned(
                    bottom: 8,
                    left: 0,
                    right: 0,
                    child: Text('Tap the target the instant it appears', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 11)),
                  ),
                ],
              );
            },
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine H: Quick Math — solve simple arithmetic fast ─────────────────────

class NgmyVaultQuickMathGame extends StatefulWidget {
  const NgmyVaultQuickMathGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultQuickMathGame> createState() => _QuickMathState();
}

class _QuickMathState extends State<NgmyVaultQuickMathGame> {
  final _rnd = math.Random();
  int _a = 0, _b = 0, _answer = 0;
  String _op = '+';
  List<int> _options = [];
  int _score = 0;
  int _combo = 0;
  Duration _left = const Duration(seconds: 30);
  Timer? _clock;
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _roll();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    super.dispose();
  }

  void _roll() {
    final ops = ['+', '-', '×'];
    _op = ops[_rnd.nextInt(ops.length)];
    _a = 2 + _rnd.nextInt(12);
    _b = 2 + _rnd.nextInt(_op == '×' ? 9 : 12);
    _answer = switch (_op) { '+' => _a + _b, '-' => _a - _b, _ => _a * _b };
    final opts = <int>{_answer};
    while (opts.length < 3) {
      opts.add(_answer + (_rnd.nextInt(9) - 4).clamp(-999, 999) * (_rnd.nextBool() ? 1 : -1) + (_rnd.nextInt(3) + 1));
    }
    setState(() => _options = opts.toList()..shuffle());
  }

  void _pick(int v) {
    if (_over) return;
    if (v == _answer) {
      _combo++;
      setState(() => _score += 10 + _combo * 2);
      HapticFeedback.lightImpact();
    } else {
      _combo = 0;
      setState(() => _score = math.max(0, _score - 4));
      HapticFeedback.heavyImpact();
    }
    _roll();
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _combo = 0;
      _left = const Duration(seconds: 30);
      _over = false;
    });
    _roll();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _colors,
          score: _score,
          timeLeft: _left,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 26),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (_combo >= 3) Text('COMBO x$_combo', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900)),
                const SizedBox(height: 10),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(vertical: 26),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(20), gradient: LinearGradient(colors: [_colors.first.withValues(alpha: 0.2), _colors.last.withValues(alpha: 0.12)]), border: Border.all(color: _colors.first.withValues(alpha: 0.5))),
                  child: Text('$_a $_op $_b = ?', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 30)),
                ),
                const SizedBox(height: 22),
                ..._options.map((o) => Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: SizedBox(
                        width: double.infinity,
                        child: FilledButton(
                          onPressed: () => _pick(o),
                          style: FilledButton.styleFrom(backgroundColor: Colors.white.withValues(alpha: 0.08), padding: const EdgeInsets.symmetric(vertical: 16)),
                          child: Text('$o', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                        ),
                      ),
                    )),
              ],
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── Engine I: Pattern Sequence — repeat the growing Simon-says sequence ─────

class NgmyVaultPatternGame extends StatefulWidget {
  const NgmyVaultPatternGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultPatternGame> createState() => _PatternState();
}

class _PatternState extends State<NgmyVaultPatternGame> {
  static const _padColors = [Color(0xFFF43F5E), Color(0xFF3B82F6), Color(0xFF22C55E), Color(0xFFF59E0B)];
  final _rnd = math.Random();
  final List<int> _sequence = [];
  int _showIdx = -1;
  int _inputIdx = 0;
  bool _showingSeq = true;
  bool _accepting = false;
  int _score = 0;
  bool _over = false;

  List<Color> get _colors => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _sequence.add(_rnd.nextInt(4));
    Future<void>.delayed(const Duration(milliseconds: 500), _playSequence);
  }

  Future<void> _playSequence() async {
    setState(() {
      _showingSeq = true;
      _accepting = false;
      _inputIdx = 0;
    });
    for (var i = 0; i < _sequence.length; i++) {
      if (!mounted) return;
      setState(() => _showIdx = _sequence[i]);
      await Future<void>.delayed(const Duration(milliseconds: 420));
      if (!mounted) return;
      setState(() => _showIdx = -1);
      await Future<void>.delayed(const Duration(milliseconds: 180));
    }
    if (!mounted) return;
    setState(() {
      _showingSeq = false;
      _accepting = true;
    });
  }

  void _tapPad(int i) {
    if (!_accepting || _over) return;
    setState(() => _showIdx = i);
    Future<void>.delayed(const Duration(milliseconds: 160), () {
      if (mounted) setState(() => _showIdx = -1);
    });
    if (_sequence[_inputIdx] == i) {
      HapticFeedback.lightImpact();
      _inputIdx++;
      if (_inputIdx == _sequence.length) {
        setState(() {
          _score += 15;
          _accepting = false;
          _sequence.add(_rnd.nextInt(4));
        });
        Future<void>.delayed(const Duration(milliseconds: 500), _playSequence);
      }
    } else {
      HapticFeedback.heavyImpact();
      _finish();
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    setState(() => _over = true);
    final coins = _score ~/ 4;
    await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _sequence
        ..clear()
        ..add(_rnd.nextInt(4));
      _score = 0;
      _over = false;
    });
    Future<void>.delayed(const Duration(milliseconds: 400), _playSequence);
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Scaffold(
          backgroundColor: const Color(0xFF030712),
          body: SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(6, 6, 16, 6),
                  child: Row(
                    children: [
                      IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                      Expanded(child: Text(widget.game.title.toUpperCase(), textAlign: TextAlign.center, style: TextStyle(color: _colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 14))),
                      const SizedBox(width: 40),
                    ],
                  ),
                ),
                Text('SCORE  $_score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                const SizedBox(height: 6),
                Text(_showingSeq ? 'Watch the pattern…' : 'Your turn — repeat it', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12, fontWeight: FontWeight.w700)),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(28),
                    child: GridView.builder(
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 14, crossAxisSpacing: 14),
                      itemCount: 4,
                      itemBuilder: (context, i) {
                        final on = _showIdx == i;
                        return GestureDetector(
                          onTap: () => _tapPad(i),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 120),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                              color: on ? _padColors[i] : _padColors[i].withValues(alpha: 0.22),
                              boxShadow: on ? [BoxShadow(color: _padColors[i].withValues(alpha: 0.7), blurRadius: 20)] : null,
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 4, colors: _colors, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 4, score: _score))),
      ],
    );
  }
}
