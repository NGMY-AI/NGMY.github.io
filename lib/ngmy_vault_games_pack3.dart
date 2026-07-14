import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// Third wave of Vault Channel skill games — action / timing / aim / dodge.
/// No quiz and no pair-matching. Shares wallet via [VaultProgressStore].

Widget _p3Chrome({
  required BuildContext context,
  required String title,
  required List<Color> colors,
  required int score,
  required Duration timeLeft,
  required Widget child,
  String? hint,
}) {
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
          if (hint != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: Text(hint, style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 11)),
            ),
        ],
      ),
    ),
  );
}

class _P3End extends StatelessWidget {
  const _P3End({required this.score, required this.coins, required this.colors, required this.onAgain, required this.onExit});
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

mixin _VaultTimedGame<T extends StatefulWidget> on State<T> {
  Timer? clock;
  Duration left = const Duration(seconds: 40);
  bool over = false;
  int score = 0;

  List<Color> get colors;
  String get gameId;

  int get coinDivisor => 6;

  void startClock({Duration duration = const Duration(seconds: 40), VoidCallback? onTick}) {
    left = duration;
    clock?.cancel();
    clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (over || !mounted) return;
      setState(() {
        left -= const Duration(seconds: 1);
        onTick?.call();
      });
      if (left.inSeconds <= 0) finish();
    });
  }

  Future<void> finish() async {
    if (over) return;
    clock?.cancel();
    setState(() => over = true);
    final coins = score ~/ coinDivisor;
    await VaultProgressStore.saveRun(gameId: gameId, level: 1, score: score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void cancelTimers() => clock?.cancel();

  void exitWithResult(BuildContext context) {
    Navigator.pop(context, VaultGameResult(coinsEarned: score ~/ coinDivisor, score: score));
  }

  Widget endOverlay({required VoidCallback onAgain}) {
    return _P3End(
      score: score,
      coins: score ~/ coinDivisor,
      colors: colors,
      onAgain: onAgain,
      onExit: () => exitWithResult(context),
    );
  }
}

// ── 10. Brick Breaker ───────────────────────────────────────────────────────

class NgmyVaultBrickBreakerGame extends StatefulWidget {
  const NgmyVaultBrickBreakerGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultBrickBreakerGame> createState() => _BrickBreakerState();
}

class _BrickBreakerState extends State<NgmyVaultBrickBreakerGame> with _VaultTimedGame<NgmyVaultBrickBreakerGame> {
  Timer? _tick;
  double _paddle = 0.5;
  Offset _ball = const Offset(0.5, 0.7);
  Offset _vel = const Offset(0.008, -0.01);
  late List<Rect> _bricks;
  final _rnd = math.Random();

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    _resetBricks();
    startClock();
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) => _step());
  }

  void _resetBricks() {
    _bricks = [];
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 6; c++) {
        _bricks.add(Rect.fromLTWH(0.06 + c * 0.15, 0.08 + r * 0.07, 0.13, 0.05));
      }
    }
  }

  void _step() {
    if (over) return;
    setState(() {
      _ball = Offset(_ball.dx + _vel.dx, _ball.dy + _vel.dy);
      if (_ball.dx < 0.03 || _ball.dx > 0.97) _vel = Offset(-_vel.dx, _vel.dy);
      if (_ball.dy < 0.03) _vel = Offset(_vel.dx, -_vel.dy.abs());
      if (_ball.dy > 0.88 && (_ball.dx - _paddle).abs() < 0.12) {
        _vel = Offset((_ball.dx - _paddle) * 0.08, -_vel.dy.abs());
      }
      if (_ball.dy > 1.05) {
        _ball = const Offset(0.5, 0.7);
        _vel = Offset((_rnd.nextDouble() - 0.5) * 0.016, -0.01);
      }
      for (final b in _bricks.toList()) {
        if (b.contains(_ball)) {
          _bricks.remove(b);
          _vel = Offset(_vel.dx, -_vel.dy);
          score += 10;
          HapticFeedback.selectionClick();
        }
      }
      if (_bricks.isEmpty) {
        _resetBricks();
        score += 50;
      }
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _paddle = 0.5;
      _ball = const Offset(0.5, 0.7);
      _vel = const Offset(0.008, -0.01);
      _resetBricks();
    });
    startClock();
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) => _step());
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Drag to move the paddle',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanUpdate: (d) => setState(() => _paddle = (d.localPosition.dx / c.maxWidth).clamp(0.1, 0.9)),
                child: CustomPaint(
                  size: Size(c.maxWidth, c.maxHeight),
                  painter: _BrickPainter(paddle: _paddle, ball: _ball, bricks: _bricks, colors: colors),
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _BrickPainter extends CustomPainter {
  _BrickPainter({required this.paddle, required this.ball, required this.bricks, required this.colors});
  final double paddle;
  final Offset ball;
  final List<Rect> bricks;
  final List<Color> colors;

  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 0; i < bricks.length; i++) {
      final r = bricks[i];
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(r.left * size.width, r.top * size.height, r.width * size.width, r.height * size.height),
          const Radius.circular(4),
        ),
        Paint()..color = Color.lerp(colors.first, colors.last, (i % 6) / 6)!,
      );
    }
    canvas.drawCircle(Offset(ball.dx * size.width, ball.dy * size.height), 8, Paint()..color = Colors.white);
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(paddle * size.width, size.height * 0.92), width: size.width * 0.22, height: 12),
        const Radius.circular(6),
      ),
      Paint()..color = colors.first,
    );
  }

  @override
  bool shouldRepaint(covariant _BrickPainter old) => true;
}

// ── 11. Gravity Flap ────────────────────────────────────────────────────────

class NgmyVaultGravityFlapGame extends StatefulWidget {
  const NgmyVaultGravityFlapGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultGravityFlapGame> createState() => _GravityFlapState();
}

class _GravityFlapState extends State<NgmyVaultGravityFlapGame> with _VaultTimedGame<NgmyVaultGravityFlapGame> {
  Timer? _tick;
  double _y = 0.5;
  double _vy = 0;
  final List<_Pipe> _pipes = [];
  final _rnd = math.Random();
  double _scroll = 0;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    _spawnPipe();
    startClock(duration: const Duration(seconds: 45));
    _tick = Timer.periodic(const Duration(milliseconds: 22), (_) => _step());
  }

  void _spawnPipe() {
    _pipes.add(_Pipe(x: 1.15, gapY: 0.25 + _rnd.nextDouble() * 0.45, gap: 0.28));
  }

  void _step() {
    if (over) return;
    setState(() {
      _vy += 0.0014;
      _y = (_y + _vy).clamp(-0.05, 1.05);
      _scroll += 0.012;
      for (final p in _pipes) {
        p.x -= 0.012;
      }
      if (_pipes.isEmpty || _pipes.last.x < 0.55) _spawnPipe();
      _pipes.removeWhere((p) => p.x < -0.2);
      for (final p in _pipes) {
        if ((p.x - 0.28).abs() < 0.06) {
          final inGap = _y > p.gapY && _y < p.gapY + p.gap;
          if (!inGap) {
            HapticFeedback.heavyImpact();
            finish();
            return;
          }
          if (!p.scored) {
            p.scored = true;
            score += 15;
          }
        }
      }
      if (_y < 0 || _y > 1) finish();
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _y = 0.5;
      _vy = 0;
      _pipes.clear();
      _scroll = 0;
      _spawnPipe();
    });
    startClock(duration: const Duration(seconds: 45));
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 22), (_) => _step());
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap to flap',
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTap: () {
              if (over) return;
              setState(() => _vy = -0.018);
              HapticFeedback.lightImpact();
            },
            child: CustomPaint(
              painter: _FlapPainter(y: _y, pipes: _pipes, colors: colors, scroll: _scroll),
              child: const SizedBox.expand(),
            ),
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Pipe {
  _Pipe({required this.x, required this.gapY, required this.gap});
  double x;
  final double gapY;
  final double gap;
  bool scored = false;
}

class _FlapPainter extends CustomPainter {
  _FlapPainter({required this.y, required this.pipes, required this.colors, required this.scroll});
  final double y;
  final List<_Pipe> pipes;
  final List<Color> colors;
  final double scroll;

  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 0; i < 8; i++) {
      final x = ((i * 80 - scroll * 40) % (size.width + 80)) - 40;
      canvas.drawCircle(Offset(x, 40.0 + i * 30), 12, Paint()..color = Colors.white.withValues(alpha: 0.06));
    }
    for (final p in pipes) {
      final px = p.x * size.width;
      final topH = p.gapY * size.height;
      final botY = (p.gapY + p.gap) * size.height;
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(px - 28, 0, 56, topH), const Radius.circular(8)), Paint()..color = colors.last);
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(px - 28, botY, 56, size.height - botY), const Radius.circular(8)), Paint()..color = colors.last);
    }
    canvas.drawCircle(Offset(size.width * 0.28, y * size.height), 16, Paint()..color = colors.first);
  }

  @override
  bool shouldRepaint(covariant _FlapPainter old) => true;
}

// ── 12. Traffic Weave ───────────────────────────────────────────────────────

class NgmyVaultTrafficWeaveGame extends StatefulWidget {
  const NgmyVaultTrafficWeaveGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultTrafficWeaveGame> createState() => _TrafficWeaveState();
}

class _TrafficWeaveState extends State<NgmyVaultTrafficWeaveGame> with _VaultTimedGame<NgmyVaultTrafficWeaveGame> {
  Timer? _tick;
  Timer? _spawn;
  int _lane = 1;
  final List<_Car> _cars = [];
  final _rnd = math.Random();
  int _lives = 3;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(onTick: () => score += 1);
    _spawn = Timer.periodic(const Duration(milliseconds: 520), (_) {
      if (over) return;
      setState(() => _cars.add(_Car(lane: _rnd.nextInt(4), y: -0.12, speed: 0.012 + _rnd.nextDouble() * 0.01)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final c in _cars) {
          c.y += c.speed;
        }
        _cars.removeWhere((c) => c.y > 1.1);
        for (final c in _cars.toList()) {
          if (c.lane == _lane && c.y > 0.7 && c.y < 0.88) {
            _cars.remove(c);
            _lives--;
            HapticFeedback.heavyImpact();
            if (_lives <= 0) finish();
          }
        }
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    _spawn?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    _spawn?.cancel();
    setState(() {
      over = false;
      score = 0;
      _lane = 1;
      _lives = 3;
      _cars.clear();
    });
    startClock(onTick: () => score += 1);
    _spawn = Timer.periodic(const Duration(milliseconds: 520), (_) {
      if (over) return;
      setState(() => _cars.add(_Car(lane: _rnd.nextInt(4), y: -0.12, speed: 0.012 + _rnd.nextDouble() * 0.01)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final c in _cars) {
          c.y += c.speed;
        }
        _cars.removeWhere((c) => c.y > 1.1);
        for (final c in _cars.toList()) {
          if (c.lane == _lane && c.y > 0.7 && c.y < 0.88) {
            _cars.remove(c);
            _lives--;
            if (_lives <= 0) finish();
          }
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Swipe to weave lanes · lives $_lives',
          child: GestureDetector(
            onHorizontalDragEnd: (d) {
              final v = d.primaryVelocity ?? 0;
              if (v < -80) setState(() => _lane = math.max(0, _lane - 1));
              if (v > 80) setState(() => _lane = math.min(3, _lane + 1));
            },
            child: LayoutBuilder(
              builder: (context, c) {
                final w = c.maxWidth / 4;
                return Stack(
                  children: [
                    for (var i = 1; i < 4; i++) Positioned(left: i * w, top: 0, bottom: 0, child: Container(width: 1, color: Colors.white12)),
                    for (final car in _cars)
                      Positioned(
                        left: car.lane * w + w / 2 - 16,
                        top: car.y * c.maxHeight,
                        child: Icon(Icons.directions_car_filled_rounded, color: colors.last, size: 32),
                      ),
                    AnimatedPositioned(
                      duration: const Duration(milliseconds: 120),
                      left: _lane * w + w / 2 - 18,
                      bottom: 24,
                      child: Icon(Icons.two_wheeler_rounded, color: colors.first, size: 36),
                    ),
                  ],
                );
              },
            ),
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Car {
  _Car({required this.lane, required this.y, required this.speed});
  final int lane;
  double y;
  final double speed;
}

// ── 13. Keep Up ─────────────────────────────────────────────────────────────

class NgmyVaultKeepUpGame extends StatefulWidget {
  const NgmyVaultKeepUpGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultKeepUpGame> createState() => _KeepUpState();
}

class _KeepUpState extends State<NgmyVaultKeepUpGame> with _VaultTimedGame<NgmyVaultKeepUpGame> {
  Timer? _tick;
  Offset _ball = const Offset(0.5, 0.35);
  Offset _vel = const Offset(0.004, 0.012);
  double _pad = 0.5;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 5;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 50));
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) {
      if (over) return;
      setState(() {
        _vel = Offset(_vel.dx, _vel.dy + 0.0006);
        _ball = Offset((_ball.dx + _vel.dx).clamp(0.04, 0.96), _ball.dy + _vel.dy);
        if (_ball.dx <= 0.04 || _ball.dx >= 0.96) _vel = Offset(-_vel.dx, _vel.dy);
        if (_ball.dy > 0.86 && (_ball.dx - _pad).abs() < 0.14) {
          _vel = Offset((_ball.dx - _pad) * 0.05, -0.018 - math.Random().nextDouble() * 0.006);
          score += 8;
          HapticFeedback.selectionClick();
        }
        if (_ball.dy > 1.05) finish();
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    setState(() {
      over = false;
      score = 0;
      _ball = const Offset(0.5, 0.35);
      _vel = const Offset(0.004, 0.012);
      _pad = 0.5;
    });
    startClock(duration: const Duration(seconds: 50));
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) {
      if (over) return;
      setState(() {
        _vel = Offset(_vel.dx, _vel.dy + 0.0006);
        _ball = Offset((_ball.dx + _vel.dx).clamp(0.04, 0.96), _ball.dy + _vel.dy);
        if (_ball.dx <= 0.04 || _ball.dx >= 0.96) _vel = Offset(-_vel.dx, _vel.dy);
        if (_ball.dy > 0.86 && (_ball.dx - _pad).abs() < 0.14) {
          _vel = Offset((_ball.dx - _pad) * 0.05, -0.018);
          score += 8;
        }
        if (_ball.dy > 1.05) finish();
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Drag paddle under the ball',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanUpdate: (d) => setState(() => _pad = (d.localPosition.dx / c.maxWidth).clamp(0.1, 0.9)),
                child: Stack(
                  children: [
                    Positioned(
                      left: _ball.dx * c.maxWidth - 14,
                      top: _ball.dy * c.maxHeight - 14,
                      child: Container(width: 28, height: 28, decoration: BoxDecoration(shape: BoxShape.circle, color: colors.first, boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.5), blurRadius: 12)])),
                    ),
                    Positioned(
                      left: _pad * c.maxWidth - c.maxWidth * 0.11,
                      bottom: 28,
                      child: Container(width: c.maxWidth * 0.22, height: 14, decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: colors.last)),
                    ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

// ── 14. Whack Pulse ─────────────────────────────────────────────────────────

class NgmyVaultWhackPulseGame extends StatefulWidget {
  const NgmyVaultWhackPulseGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultWhackPulseGame> createState() => _WhackPulseState();
}

class _WhackPulseState extends State<NgmyVaultWhackPulseGame> with _VaultTimedGame<NgmyVaultWhackPulseGame> {
  Timer? _spawn;
  final _rnd = math.Random();
  final Map<int, double> _lit = {};

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 700), (_) {
      if (over) return;
      setState(() {
        _lit.removeWhere((_, life) => life <= 0);
        for (final k in _lit.keys.toList()) {
          _lit[k] = _lit[k]! - 0.35;
        }
        _lit[_rnd.nextInt(9)] = 1.0;
        if (_rnd.nextBool()) _lit[_rnd.nextInt(9)] = 1.0;
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _spawn?.cancel();
    super.dispose();
  }

  void _hit(int i) {
    if (over) return;
    if ((_lit[i] ?? 0) > 0.15) {
      setState(() {
        score += 12;
        _lit.remove(i);
      });
      HapticFeedback.mediumImpact();
    }
  }

  void _restart() {
    _spawn?.cancel();
    setState(() {
      over = false;
      score = 0;
      _lit.clear();
    });
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 700), (_) {
      if (over) return;
      setState(() {
        _lit.removeWhere((_, life) => life <= 0);
        for (final k in _lit.keys.toList()) {
          _lit[k] = _lit[k]! - 0.35;
        }
        _lit[_rnd.nextInt(9)] = 1.0;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap glowing cells',
          child: GridView.builder(
            padding: const EdgeInsets.all(24),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12),
            itemCount: 9,
            itemBuilder: (context, i) {
              final lit = (_lit[i] ?? 0).clamp(0.0, 1.0);
              return GestureDetector(
                onTap: () => _hit(i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 120),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(18),
                    color: Color.lerp(const Color(0xFF111827), colors.first, lit),
                    border: Border.all(color: colors.first.withValues(alpha: 0.25 + lit * 0.6)),
                    boxShadow: lit > 0.2 ? [BoxShadow(color: colors.first.withValues(alpha: 0.45 * lit), blurRadius: 16)] : null,
                  ),
                  child: Icon(Icons.bolt_rounded, color: Colors.white.withValues(alpha: 0.35 + lit * 0.65), size: 32),
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

// ── 15. Slice Drift ─────────────────────────────────────────────────────────

class NgmyVaultSliceDriftGame extends StatefulWidget {
  const NgmyVaultSliceDriftGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultSliceDriftGame> createState() => _SliceDriftState();
}

class _SliceDriftState extends State<NgmyVaultSliceDriftGame> with _VaultTimedGame<NgmyVaultSliceDriftGame> {
  Timer? _tick;
  Timer? _spawn;
  final _rnd = math.Random();
  final List<_Fall> _items = [];
  Offset? _swipeA;
  Offset? _swipeB;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 650), (_) {
      if (over) return;
      setState(() => _items.add(_Fall(x: 0.1 + _rnd.nextDouble() * 0.8, y: -0.08, r: 18 + _rnd.nextDouble() * 10)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final i in _items) {
          i.y += 0.014;
        }
        _items.removeWhere((i) => i.y > 1.1);
      });
    });
  }

  void _slice(Offset a, Offset b, Size size) {
    if (over) return;
    setState(() {
      _items.removeWhere((i) {
        final p = Offset(i.x * size.width, i.y * size.height);
        final hit = _segmentNear(a, b, p, i.r + 8);
        if (hit) {
          score += 14;
          HapticFeedback.selectionClick();
        }
        return hit;
      });
    });
  }

  bool _segmentNear(Offset a, Offset b, Offset p, double r) {
    final ab = b - a;
    final t = ((p - a).dx * ab.dx + (p - a).dy * ab.dy) / (ab.distanceSquared == 0 ? 1 : ab.distanceSquared);
    final c = a + ab * t.clamp(0.0, 1.0);
    return (c - p).distance <= r;
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    _spawn?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    _spawn?.cancel();
    setState(() {
      over = false;
      score = 0;
      _items.clear();
    });
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 650), (_) {
      if (over) return;
      setState(() => _items.add(_Fall(x: 0.1 + _rnd.nextDouble() * 0.8, y: -0.08, r: 18 + _rnd.nextDouble() * 10)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final i in _items) {
          i.y += 0.014;
        }
        _items.removeWhere((i) => i.y > 1.1);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Swipe through falling targets',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanStart: (d) => _swipeA = d.localPosition,
                onPanUpdate: (d) {
                  _swipeB = d.localPosition;
                  if (_swipeA != null) _slice(_swipeA!, _swipeB!, Size(c.maxWidth, c.maxHeight));
                  _swipeA = d.localPosition;
                },
                onPanEnd: (_) {
                  _swipeA = null;
                  _swipeB = null;
                },
                child: Stack(
                  children: [
                    for (final i in _items)
                      Positioned(
                        left: i.x * c.maxWidth - i.r,
                        top: i.y * c.maxHeight - i.r,
                        child: Container(
                          width: i.r * 2,
                          height: i.r * 2,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(colors: colors),
                            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.4), blurRadius: 10)],
                          ),
                        ),
                      ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Fall {
  _Fall({required this.x, required this.y, required this.r});
  final double x;
  double y;
  final double r;
}

// ── 16. Darts Timing ────────────────────────────────────────────────────────

class NgmyVaultDartsTimingGame extends StatefulWidget {
  const NgmyVaultDartsTimingGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultDartsTimingGame> createState() => _DartsTimingState();
}

class _DartsTimingState extends State<NgmyVaultDartsTimingGame> with SingleTickerProviderStateMixin, _VaultTimedGame<NgmyVaultDartsTimingGame> {
  late final AnimationController _needle;
  double _zone = 0.55;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 4;

  @override
  void initState() {
    super.initState();
    _needle = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..repeat(reverse: true);
    startClock(duration: const Duration(seconds: 30));
  }

  @override
  void dispose() {
    cancelTimers();
    _needle.dispose();
    super.dispose();
  }

  void _throw() {
    if (over) return;
    final t = _needle.value;
    final dist = (t - _zone).abs();
    setState(() {
      if (dist < 0.06) {
        score += 30;
        HapticFeedback.heavyImpact();
      } else if (dist < 0.14) {
        score += 12;
        HapticFeedback.selectionClick();
      } else {
        HapticFeedback.lightImpact();
      }
      _zone = 0.25 + math.Random().nextDouble() * 0.5;
    });
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _zone = 0.55;
    });
    startClock(duration: const Duration(seconds: 30));
    _needle.repeat(reverse: true);
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap when the needle hits green',
          child: AnimatedBuilder(
            animation: _needle,
            builder: (context, _) {
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: _throw,
                child: Padding(
                  padding: const EdgeInsets.all(28),
                  child: Column(
                    children: [
                      Expanded(
                        child: Center(
                          child: CustomPaint(
                            size: const Size(220, 220),
                            painter: _DartBoardPainter(needle: _needle.value, zone: _zone, colors: colors),
                          ),
                        ),
                      ),
                      FilledButton(
                        onPressed: _throw,
                        style: FilledButton.styleFrom(backgroundColor: colors.first, minimumSize: const Size(160, 48)),
                        child: const Text('THROW', style: TextStyle(fontWeight: FontWeight.w900)),
                      ),
                      const SizedBox(height: 20),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _DartBoardPainter extends CustomPainter {
  _DartBoardPainter({required this.needle, required this.zone, required this.colors});
  final double needle;
  final double zone;
  final List<Color> colors;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    canvas.drawCircle(c, 100, Paint()..color = const Color(0xFF111827));
    canvas.drawCircle(c, 100, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = colors.last.withValues(alpha: 0.5));
    // sweet zone arc
    canvas.drawArc(Rect.fromCircle(center: c, radius: 88), (zone - 0.08) * math.pi * 2 - math.pi / 2, 0.16 * math.pi * 2, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 14..color = const Color(0xFF34D399));
    final a = needle * math.pi * 2 - math.pi / 2;
    final tip = Offset(c.dx + math.cos(a) * 90, c.dy + math.sin(a) * 90);
    canvas.drawLine(c, tip, Paint()..color = colors.first..strokeWidth = 3);
    canvas.drawCircle(c, 8, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _DartBoardPainter old) => true;
}

// ── 17. Ring Toss ───────────────────────────────────────────────────────────

class NgmyVaultRingTossGame extends StatefulWidget {
  const NgmyVaultRingTossGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultRingTossGame> createState() => _RingTossState();
}

class _RingTossState extends State<NgmyVaultRingTossGame> with _VaultTimedGame<NgmyVaultRingTossGame> {
  double _aim = 0.5;
  double _power = 0.5;
  bool _flying = false;
  Offset _ring = const Offset(0.5, 0.85);
  Offset _vel = Offset.zero;
  Timer? _tick;
  final List<double> _pegs = [0.25, 0.5, 0.75];

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 5;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 40));
  }

  void _toss() {
    if (over || _flying) return;
    setState(() {
      _flying = true;
      _ring = Offset(_aim, 0.85);
      _vel = Offset((_aim - 0.5) * 0.02, -0.022 - _power * 0.018);
    });
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) {
      if (!_flying || over) return;
      setState(() {
        _vel = Offset(_vel.dx, _vel.dy + 0.0012);
        _ring = Offset(_ring.dx + _vel.dx, _ring.dy + _vel.dy);
        if (_ring.dy < 0.22) {
          for (final peg in _pegs) {
            if ((_ring.dx - peg).abs() < 0.08) {
              score += 20;
              HapticFeedback.mediumImpact();
            }
          }
          _flying = false;
          _ring = Offset(_aim, 0.85);
          _tick?.cancel();
        }
        if (_ring.dy > 1.0 || _ring.dx < -0.1 || _ring.dx > 1.1) {
          _flying = false;
          _ring = Offset(_aim, 0.85);
          _tick?.cancel();
        }
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    setState(() {
      over = false;
      score = 0;
      _aim = 0.5;
      _power = 0.5;
      _flying = false;
      _ring = const Offset(0.5, 0.85);
    });
    startClock(duration: const Duration(seconds: 40));
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Aim · set power · Toss',
          child: LayoutBuilder(
            builder: (context, c) {
              return Column(
                children: [
                  Expanded(
                    child: Stack(
                      children: [
                        for (final peg in _pegs)
                          Positioned(
                            left: peg * c.maxWidth - 8,
                            top: c.maxHeight * 0.18,
                            child: Container(width: 16, height: 48, decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: colors.last)),
                          ),
                        Positioned(
                          left: _ring.dx * c.maxWidth - 22,
                          top: _ring.dy * c.maxHeight - 22,
                          child: Container(
                            width: 44,
                            height: 44,
                            decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: colors.first, width: 5)),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Text('AIM', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11, fontWeight: FontWeight.w800)),
                  Slider(value: _aim, onChanged: _flying ? null : (v) => setState(() => _aim = v), activeColor: colors.first),
                  Text('POWER', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11, fontWeight: FontWeight.w800)),
                  Slider(value: _power, onChanged: _flying ? null : (v) => setState(() => _power = v), activeColor: colors.last),
                  FilledButton(
                    onPressed: _toss,
                    style: FilledButton.styleFrom(backgroundColor: colors.first),
                    child: const Text('TOSS', style: TextStyle(fontWeight: FontWeight.w900)),
                  ),
                  const SizedBox(height: 8),
                ],
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

// ── 18. Pinball Bump ────────────────────────────────────────────────────────

class NgmyVaultPinballBumpGame extends StatefulWidget {
  const NgmyVaultPinballBumpGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultPinballBumpGame> createState() => _PinballBumpState();
}

class _PinballBumpState extends State<NgmyVaultPinballBumpGame> with _VaultTimedGame<NgmyVaultPinballBumpGame> {
  Timer? _tick;
  Offset _ball = const Offset(0.5, 0.8);
  Offset _vel = Offset.zero;
  final List<Offset> _bumps = const [Offset(0.3, 0.35), Offset(0.7, 0.35), Offset(0.5, 0.55)];

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 40));
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) => _step());
  }

  void _step() {
    if (over) return;
    if (_vel == Offset.zero) return;
    setState(() {
      _vel = Offset(_vel.dx * 0.995, _vel.dy * 0.995 + 0.0004);
      _ball = Offset((_ball.dx + _vel.dx).clamp(0.05, 0.95), (_ball.dy + _vel.dy).clamp(0.05, 0.95));
      if (_ball.dx <= 0.05 || _ball.dx >= 0.95) _vel = Offset(-_vel.dx, _vel.dy);
      if (_ball.dy <= 0.05) _vel = Offset(_vel.dx, -_vel.dy);
      for (final b in _bumps) {
        if ((_ball - b).distance < 0.09) {
          final n = (_ball - b);
          final len = n.distance == 0 ? 1.0 : n.distance;
          _vel = Offset(n.dx / len * 0.02, n.dy / len * 0.02);
          score += 8;
          HapticFeedback.selectionClick();
        }
      }
      if (_ball.dy > 0.93) {
        _vel = Offset.zero;
        _ball = const Offset(0.5, 0.8);
      }
    });
  }

  void _flick(DragEndDetails d) {
    if (over) return;
    final v = d.velocity.pixelsPerSecond;
    setState(() => _vel = Offset((v.dx / 8000).clamp(-0.03, 0.03), (v.dy / 8000).clamp(-0.04, 0.01)));
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _ball = const Offset(0.5, 0.8);
      _vel = Offset.zero;
    });
    startClock(duration: const Duration(seconds: 40));
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Flick the ball into bumpers',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanEnd: _flick,
                child: Stack(
                  children: [
                    for (final b in _bumps)
                      Positioned(
                        left: b.dx * c.maxWidth - 22,
                        top: b.dy * c.maxHeight - 22,
                        child: Container(width: 44, height: 44, decoration: BoxDecoration(shape: BoxShape.circle, color: colors.last.withValues(alpha: 0.8), border: Border.all(color: Colors.white54))),
                      ),
                    Positioned(
                      left: _ball.dx * c.maxWidth - 10,
                      top: _ball.dy * c.maxHeight - 10,
                      child: Container(width: 20, height: 20, decoration: BoxDecoration(shape: BoxShape.circle, color: colors.first)),
                    ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

// ── 19. Orbit Dock ──────────────────────────────────────────────────────────

class NgmyVaultOrbitDockGame extends StatefulWidget {
  const NgmyVaultOrbitDockGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultOrbitDockGame> createState() => _OrbitDockState();
}

class _OrbitDockState extends State<NgmyVaultOrbitDockGame> with _VaultTimedGame<NgmyVaultOrbitDockGame> {
  Timer? _tick;
  Offset _craft = const Offset(0.2, 0.5);
  Offset _target = const Offset(0.75, 0.45);
  double _drift = 0;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 5;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 40));
    _tick = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (over) return;
      setState(() {
        _drift += 0.04;
        _target = Offset(0.72 + math.sin(_drift) * 0.08, 0.45 + math.cos(_drift * 0.7) * 0.12);
        final d = (_craft - _target).distance;
        if (d < 0.05) {
          score += 25;
          HapticFeedback.mediumImpact();
          _craft = Offset(0.15 + math.Random().nextDouble() * 0.2, 0.3 + math.Random().nextDouble() * 0.4);
        }
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _craft = const Offset(0.2, 0.5);
      _drift = 0;
    });
    startClock(duration: const Duration(seconds: 40));
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Drag craft into the docking ring',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanUpdate: (d) => setState(() {
                  _craft = Offset(
                    (_craft.dx + d.delta.dx / c.maxWidth).clamp(0.05, 0.95),
                    (_craft.dy + d.delta.dy / c.maxHeight).clamp(0.05, 0.95),
                  );
                }),
                child: Stack(
                  children: [
                    Positioned(
                      left: _target.dx * c.maxWidth - 36,
                      top: _target.dy * c.maxHeight - 36,
                      child: Container(
                        width: 72,
                        height: 72,
                        decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: colors.last, width: 4)),
                      ),
                    ),
                    Positioned(
                      left: _craft.dx * c.maxWidth - 16,
                      top: _craft.dy * c.maxHeight - 16,
                      child: Icon(Icons.rocket_launch_rounded, color: colors.first, size: 32),
                    ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

// ── 20. Laser Defense ───────────────────────────────────────────────────────

class NgmyVaultLaserDefenseGame extends StatefulWidget {
  const NgmyVaultLaserDefenseGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultLaserDefenseGame> createState() => _LaserDefenseState();
}

class _LaserDefenseState extends State<NgmyVaultLaserDefenseGame> with _VaultTimedGame<NgmyVaultLaserDefenseGame> {
  Timer? _tick;
  Timer? _spawn;
  final _rnd = math.Random();
  final List<_Bolt> _bolts = [];
  int _lives = 3;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 580), (_) {
      if (over) return;
      setState(() => _bolts.add(_Bolt(x: _rnd.nextDouble(), y: -0.05, speed: 0.012 + _rnd.nextDouble() * 0.01)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final b in _bolts) {
          b.y += b.speed;
        }
        for (final b in _bolts.toList()) {
          if (b.y > 0.95) {
            _bolts.remove(b);
            _lives--;
            HapticFeedback.heavyImpact();
            if (_lives <= 0) finish();
          }
        }
      });
    });
  }

  void _tap(Offset local, Size size) {
    if (over) return;
    setState(() {
      _bolts.removeWhere((b) {
        final p = Offset(b.x * size.width, b.y * size.height);
        final hit = (p - local).distance < 42;
        if (hit) {
          score += 10;
          HapticFeedback.selectionClick();
        }
        return hit;
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    _spawn?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    _spawn?.cancel();
    setState(() {
      over = false;
      score = 0;
      _lives = 3;
      _bolts.clear();
    });
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 580), (_) {
      if (over) return;
      setState(() => _bolts.add(_Bolt(x: _rnd.nextDouble(), y: -0.05, speed: 0.012 + _rnd.nextDouble() * 0.01)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final b in _bolts) {
          b.y += b.speed;
        }
        for (final b in _bolts.toList()) {
          if (b.y > 0.95) {
            _bolts.remove(b);
            _lives--;
            if (_lives <= 0) finish();
          }
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap bolts · lives $_lives',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapDown: (d) => _tap(d.localPosition, Size(c.maxWidth, c.maxHeight)),
                child: Stack(
                  children: [
                    Positioned(left: 0, right: 0, bottom: 0, height: 8, child: Container(color: colors.first.withValues(alpha: 0.35))),
                    for (final b in _bolts)
                      Positioned(
                        left: b.x * c.maxWidth - 4,
                        top: b.y * c.maxHeight,
                        child: Container(
                          width: 8,
                          height: 36,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(4),
                            gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white, colors.first]),
                            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.6), blurRadius: 8)],
                          ),
                        ),
                      ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Bolt {
  _Bolt({required this.x, required this.y, required this.speed});
  final double x;
  double y;
  final double speed;
}

// ── 21. Platform Hop ────────────────────────────────────────────────────────

class NgmyVaultPlatformHopGame extends StatefulWidget {
  const NgmyVaultPlatformHopGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultPlatformHopGame> createState() => _PlatformHopState();
}

class _PlatformHopState extends State<NgmyVaultPlatformHopGame> with _VaultTimedGame<NgmyVaultPlatformHopGame> {
  Timer? _tick;
  double _px = 0.5;
  double _py = 0.7;
  double _vy = 0;
  bool _grounded = true;
  final List<_Pad> _pads = [];

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    _pads.addAll([
      _Pad(x: 0.5, y: 0.85, w: 0.28),
      _Pad(x: 0.25, y: 0.6, w: 0.2, drift: 0.006),
      _Pad(x: 0.7, y: 0.4, w: 0.2, drift: -0.005),
      _Pad(x: 0.4, y: 0.22, w: 0.18, drift: 0.007),
    ]);
    startClock(duration: const Duration(seconds: 45), onTick: () => score += 1);
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) => _step());
  }

  void _step() {
    if (over) return;
    setState(() {
      for (final p in _pads) {
        p.x = (p.x + p.drift).clamp(0.12, 0.88);
        if (p.x <= 0.12 || p.x >= 0.88) p.drift = -p.drift;
      }
      _vy += 0.0012;
      _py += _vy;
      _grounded = false;
      for (final p in _pads) {
        if (_vy >= 0 && (_px - p.x).abs() < p.w / 2 + 0.03 && _py > p.y - 0.04 && _py < p.y + 0.02) {
          _py = p.y - 0.03;
          _vy = 0;
          _grounded = true;
        }
      }
      if (_py > 1.1) finish();
    });
  }

  void _jump() {
    if (over || !_grounded) return;
    setState(() {
      _vy = -0.024;
      _grounded = false;
      score += 5;
    });
    HapticFeedback.lightImpact();
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _px = 0.5;
      _py = 0.7;
      _vy = 0;
      _grounded = true;
    });
    startClock(duration: const Duration(seconds: 45), onTick: () => score += 1);
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap to jump · drag to move',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onTap: _jump,
                onPanUpdate: (d) => setState(() => _px = (_px + d.delta.dx / c.maxWidth).clamp(0.08, 0.92)),
                child: Stack(
                  children: [
                    for (final p in _pads)
                      Positioned(
                        left: (p.x - p.w / 2) * c.maxWidth,
                        top: p.y * c.maxHeight,
                        child: Container(
                          width: p.w * c.maxWidth,
                          height: 14,
                          decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: colors.last),
                        ),
                      ),
                    Positioned(
                      left: _px * c.maxWidth - 14,
                      top: _py * c.maxHeight - 14,
                      child: Container(width: 28, height: 28, decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: colors.first)),
                    ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Pad {
  _Pad({required this.x, required this.y, required this.w, this.drift = 0});
  double x;
  final double y;
  final double w;
  double drift;
}

// ── 22. Balance Beam ────────────────────────────────────────────────────────

class NgmyVaultBalanceBeamGame extends StatefulWidget {
  const NgmyVaultBalanceBeamGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultBalanceBeamGame> createState() => _BalanceBeamState();
}

class _BalanceBeamState extends State<NgmyVaultBalanceBeamGame> with _VaultTimedGame<NgmyVaultBalanceBeamGame> {
  Timer? _tick;
  double _pos = 0.5;
  double _vel = 0;
  double _noise = 0;
  final _rnd = math.Random();

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 5;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 40), onTick: () {
      if ((_pos - 0.5).abs() < 0.12) score += 3;
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        _noise += (_rnd.nextDouble() - 0.5) * 0.004;
        _vel += _noise * 0.02;
        _pos = (_pos + _vel).clamp(0.0, 1.0);
        _vel *= 0.98;
        if (_pos <= 0.02 || _pos >= 0.98) finish();
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _pos = 0.5;
      _vel = 0;
      _noise = 0;
    });
    startClock(duration: const Duration(seconds: 40), onTick: () {
      if ((_pos - 0.5).abs() < 0.12) score += 3;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap left / right to counter the tip',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onTapDown: (d) {
                  final leftSide = d.localPosition.dx < c.maxWidth / 2;
                  setState(() => _vel += leftSide ? -0.012 : 0.012);
                },
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      margin: const EdgeInsets.symmetric(horizontal: 24),
                      height: 16,
                      decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: Colors.white12),
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment((_pos * 2) - 1, 0),
                            child: Container(width: 28, height: 28, decoration: BoxDecoration(shape: BoxShape.circle, color: colors.first, boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.5), blurRadius: 12)])),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 40),
                    Text('Stay centered', style: TextStyle(color: Colors.white.withValues(alpha: 0.4))),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

// ── 23. Curl Bowl ───────────────────────────────────────────────────────────

class NgmyVaultCurlBowlGame extends StatefulWidget {
  const NgmyVaultCurlBowlGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultCurlBowlGame> createState() => _CurlBowlState();
}

class _CurlBowlState extends State<NgmyVaultCurlBowlGame> with _VaultTimedGame<NgmyVaultCurlBowlGame> {
  double _aim = 0.5;
  double _power = 0.5;
  bool _rolling = false;
  double _ballX = 0.5;
  double _ballY = 0.9;
  Timer? _tick;
  final List<Offset> _pins = [const Offset(0.5, 0.18), const Offset(0.42, 0.26), const Offset(0.58, 0.26), const Offset(0.35, 0.34), const Offset(0.5, 0.34), const Offset(0.65, 0.34)];
  final Set<int> _down = {};

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 4;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 45));
  }

  void _roll() {
    if (over || _rolling) return;
    setState(() {
      _rolling = true;
      _ballX = 0.5;
      _ballY = 0.9;
      _down.clear();
    });
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) {
      if (!_rolling) return;
      setState(() {
        _ballY -= 0.012 + _power * 0.01;
        _ballX += (_aim - 0.5) * 0.018;
        for (var i = 0; i < _pins.length; i++) {
          if (_down.contains(i)) continue;
          if ((Offset(_ballX, _ballY) - _pins[i]).distance < 0.07) {
            _down.add(i);
            score += 15;
            HapticFeedback.selectionClick();
          }
        }
        if (_ballY < 0.08) {
          _rolling = false;
          _ballY = 0.9;
          _ballX = 0.5;
          _tick?.cancel();
        }
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    setState(() {
      over = false;
      score = 0;
      _rolling = false;
      _down.clear();
      _ballY = 0.9;
      _ballX = 0.5;
    });
    startClock(duration: const Duration(seconds: 45));
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Aim · power · ROLL',
          child: LayoutBuilder(
            builder: (context, c) {
              return Column(
                children: [
                  Expanded(
                    child: Stack(
                      children: [
                        for (var i = 0; i < _pins.length; i++)
                          if (!_down.contains(i))
                            Positioned(
                              left: _pins[i].dx * c.maxWidth - 10,
                              top: _pins[i].dy * c.maxHeight - 18,
                              child: Icon(Icons.location_on_rounded, color: colors.last, size: 28),
                            ),
                        Positioned(
                          left: _ballX * c.maxWidth - 12,
                          top: _ballY * c.maxHeight - 12,
                          child: Container(width: 24, height: 24, decoration: BoxDecoration(shape: BoxShape.circle, color: colors.first)),
                        ),
                      ],
                    ),
                  ),
                  Slider(value: _aim, onChanged: _rolling ? null : (v) => setState(() => _aim = v), activeColor: colors.first),
                  Slider(value: _power, onChanged: _rolling ? null : (v) => setState(() => _power = v), activeColor: colors.last),
                  FilledButton(onPressed: _roll, style: FilledButton.styleFrom(backgroundColor: colors.first), child: const Text('ROLL', style: TextStyle(fontWeight: FontWeight.w900))),
                  const SizedBox(height: 8),
                ],
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

// ── 24. Balloon Rush ────────────────────────────────────────────────────────

class NgmyVaultBalloonRushGame extends StatefulWidget {
  const NgmyVaultBalloonRushGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultBalloonRushGame> createState() => _BalloonRushState();
}

class _BalloonRushState extends State<NgmyVaultBalloonRushGame> with _VaultTimedGame<NgmyVaultBalloonRushGame> {
  Timer? _tick;
  Timer? _spawn;
  final _rnd = math.Random();
  final List<_Balloon> _balls = [];

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 700), (_) {
      if (over) return;
      setState(() => _balls.add(_Balloon(x: 0.1 + _rnd.nextDouble() * 0.8, y: 1.05, speed: 0.008 + _rnd.nextDouble() * 0.008, hue: _rnd.nextDouble())));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final b in _balls) {
          b.y -= b.speed;
        }
        _balls.removeWhere((b) => b.y < -0.1);
      });
    });
  }

  void _pop(Offset local, Size size) {
    if (over) return;
    setState(() {
      _balls.removeWhere((b) {
        final p = Offset(b.x * size.width, b.y * size.height);
        final hit = (p - local).distance < 36;
        if (hit) {
          score += 11;
          HapticFeedback.selectionClick();
        }
        return hit;
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    _spawn?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    _spawn?.cancel();
    setState(() {
      over = false;
      score = 0;
      _balls.clear();
    });
    startClock(duration: const Duration(seconds: 35));
    _spawn = Timer.periodic(const Duration(milliseconds: 700), (_) {
      if (over) return;
      setState(() => _balls.add(_Balloon(x: 0.1 + _rnd.nextDouble() * 0.8, y: 1.05, speed: 0.008 + _rnd.nextDouble() * 0.008, hue: _rnd.nextDouble())));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final b in _balls) {
          b.y -= b.speed;
        }
        _balls.removeWhere((b) => b.y < -0.1);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap balloons before they escape',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapDown: (d) => _pop(d.localPosition, Size(c.maxWidth, c.maxHeight)),
                child: Stack(
                  children: [
                    for (final b in _balls)
                      Positioned(
                        left: b.x * c.maxWidth - 22,
                        top: b.y * c.maxHeight - 28,
                        child: Icon(Icons.cloud_rounded, color: Color.lerp(colors.first, colors.last, b.hue), size: 48),
                      ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Balloon {
  _Balloon({required this.x, required this.y, required this.speed, required this.hue});
  final double x;
  double y;
  final double speed;
  final double hue;
}

// ── 25. Spin Stop ───────────────────────────────────────────────────────────

class NgmyVaultSpinStopGame extends StatefulWidget {
  const NgmyVaultSpinStopGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultSpinStopGame> createState() => _SpinStopState();
}

class _SpinStopState extends State<NgmyVaultSpinStopGame> with SingleTickerProviderStateMixin, _VaultTimedGame<NgmyVaultSpinStopGame> {
  late final AnimationController _spin;
  double _prize = 0.0;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 4;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat();
    _prize = math.Random().nextDouble();
    startClock(duration: const Duration(seconds: 30));
  }

  @override
  void dispose() {
    cancelTimers();
    _spin.dispose();
    super.dispose();
  }

  void _stop() {
    if (over) return;
    final ang = (_spin.value - _prize).abs() % 1.0;
    final dist = math.min(ang, 1 - ang);
    setState(() {
      if (dist < 0.05) {
        score += 40;
        HapticFeedback.heavyImpact();
      } else if (dist < 0.12) {
        score += 15;
        HapticFeedback.mediumImpact();
      } else {
        score += 2;
      }
      _prize = math.Random().nextDouble();
    });
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _prize = math.Random().nextDouble();
    });
    startClock(duration: const Duration(seconds: 30));
    _spin.repeat();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Stop on the glowing wedge',
          child: AnimatedBuilder(
            animation: _spin,
            builder: (context, _) {
              return Column(
                children: [
                  Expanded(
                    child: Center(
                      child: Transform.rotate(
                        angle: _spin.value * math.pi * 2,
                        child: CustomPaint(
                          size: const Size(240, 240),
                          painter: _WheelPainter(prize: _prize, colors: colors),
                        ),
                      ),
                    ),
                  ),
                  FilledButton(
                    onPressed: _stop,
                    style: FilledButton.styleFrom(backgroundColor: colors.first, minimumSize: const Size(160, 48)),
                    child: const Text('STOP', style: TextStyle(fontWeight: FontWeight.w900)),
                  ),
                  const SizedBox(height: 24),
                ],
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _WheelPainter extends CustomPainter {
  _WheelPainter({required this.prize, required this.colors});
  final double prize;
  final List<Color> colors;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    for (var i = 0; i < 8; i++) {
      final a0 = i * math.pi / 4;
      canvas.drawArc(Rect.fromCircle(center: c, radius: 110), a0, math.pi / 4, true, Paint()..color = i.isEven ? colors.first.withValues(alpha: 0.55) : colors.last.withValues(alpha: 0.45));
    }
    canvas.drawArc(Rect.fromCircle(center: c, radius: 110), prize * math.pi * 2 - 0.2, 0.4, true, Paint()..color = const Color(0xFF34D399));
    canvas.drawCircle(c, 18, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _WheelPainter old) => true;
}

// ── 26. Metro Flow ──────────────────────────────────────────────────────────

class NgmyVaultMetroFlowGame extends StatefulWidget {
  const NgmyVaultMetroFlowGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultMetroFlowGame> createState() => _MetroFlowState();
}

class _MetroFlowState extends State<NgmyVaultMetroFlowGame> with _VaultTimedGame<NgmyVaultMetroFlowGame> {
  Timer? _spawn;
  final _rnd = math.Random();
  final List<_Train> _trains = [];
  static const _tubeColors = [Color(0xFFEF4444), Color(0xFF22D3EE), Color(0xFFFBBF24)];

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 40));
    _spawn = Timer.periodic(const Duration(milliseconds: 900), (_) {
      if (over) return;
      setState(() => _trains.add(_Train(colorIdx: _rnd.nextInt(3), y: 0.15 + _trains.length * 0.02)));
    });
  }

  void _swipe(int dir) {
    if (over || _trains.isEmpty) return;
    final t = _trains.first;
    setState(() {
      if (t.colorIdx == dir) {
        score += 14;
        HapticFeedback.selectionClick();
      } else {
        score = math.max(0, score - 4);
        HapticFeedback.heavyImpact();
      }
      _trains.removeAt(0);
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _spawn?.cancel();
    super.dispose();
  }

  void _restart() {
    _spawn?.cancel();
    setState(() {
      over = false;
      score = 0;
      _trains.clear();
    });
    startClock(duration: const Duration(seconds: 40));
    _spawn = Timer.periodic(const Duration(milliseconds: 900), (_) {
      if (over) return;
      setState(() => _trains.add(_Train(colorIdx: _rnd.nextInt(3), y: 0.15)));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Swipe train into matching tube',
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Row(
                  children: List.generate(3, (i) {
                    return Expanded(
                      child: Container(
                        margin: const EdgeInsets.symmetric(horizontal: 4),
                        height: 54,
                        decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), color: _tubeColors[i].withValues(alpha: 0.25), border: Border.all(color: _tubeColors[i])),
                        child: Icon(Icons.subway_rounded, color: _tubeColors[i]),
                      ),
                    );
                  }),
                ),
              ),
              Expanded(
                child: GestureDetector(
                  onHorizontalDragEnd: (d) {
                    final v = d.primaryVelocity ?? 0;
                    if (v < -120) {
                      _swipe(0);
                    } else if (v > 120) {
                      _swipe(2);
                    }
                  },
                  onVerticalDragEnd: (d) {
                    if ((d.primaryVelocity ?? 0) < -120) _swipe(1);
                  },
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      for (var i = 0; i < _trains.length && i < 4; i++)
                        Positioned(
                          top: 80.0 + i * 70,
                          child: Container(
                            width: 120,
                            height: 48,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(12),
                              color: _tubeColors[_trains[i].colorIdx],
                              boxShadow: [BoxShadow(color: _tubeColors[_trains[i].colorIdx].withValues(alpha: 0.4), blurRadius: 12)],
                            ),
                            alignment: Alignment.center,
                            child: const Icon(Icons.train_rounded, color: Colors.white),
                          ),
                        ),
                      Text('← red · ↑ cyan · yellow →', style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 12)),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Train {
  _Train({required this.colorIdx, required this.y});
  final int colorIdx;
  double y;
}

// ── 27. Asteroid Drift ──────────────────────────────────────────────────────

class NgmyVaultAsteroidDriftGame extends StatefulWidget {
  const NgmyVaultAsteroidDriftGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultAsteroidDriftGame> createState() => _AsteroidDriftState();
}

class _AsteroidDriftState extends State<NgmyVaultAsteroidDriftGame> with _VaultTimedGame<NgmyVaultAsteroidDriftGame> {
  Timer? _tick;
  Timer? _spawn;
  Offset _ship = const Offset(0.5, 0.75);
  final List<_Rock> _rocks = [];
  final _rnd = math.Random();
  int _lives = 3;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;

  @override
  void initState() {
    super.initState();
    startClock(onTick: () => score += 1);
    _spawn = Timer.periodic(const Duration(milliseconds: 480), (_) {
      if (over) return;
      setState(() => _rocks.add(_Rock(x: _rnd.nextDouble(), y: -0.08, r: 0.04 + _rnd.nextDouble() * 0.05, speed: 0.01 + _rnd.nextDouble() * 0.012)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final r in _rocks) {
          r.y += r.speed;
        }
        _rocks.removeWhere((r) => r.y > 1.15);
        for (final r in _rocks.toList()) {
          if ((Offset(r.x, r.y) - _ship).distance < r.r + 0.04) {
            _rocks.remove(r);
            _lives--;
            HapticFeedback.heavyImpact();
            if (_lives <= 0) finish();
          }
        }
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    _spawn?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    _spawn?.cancel();
    setState(() {
      over = false;
      score = 0;
      _lives = 3;
      _ship = const Offset(0.5, 0.75);
      _rocks.clear();
    });
    startClock(onTick: () => score += 1);
    _spawn = Timer.periodic(const Duration(milliseconds: 480), (_) {
      if (over) return;
      setState(() => _rocks.add(_Rock(x: _rnd.nextDouble(), y: -0.08, r: 0.04 + _rnd.nextDouble() * 0.05, speed: 0.01 + _rnd.nextDouble() * 0.012)));
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final r in _rocks) {
          r.y += r.speed;
        }
        _rocks.removeWhere((r) => r.y > 1.15);
        for (final r in _rocks.toList()) {
          if ((Offset(r.x, r.y) - _ship).distance < r.r + 0.04) {
            _rocks.remove(r);
            _lives--;
            if (_lives <= 0) finish();
          }
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Drag ship · lives $_lives',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanUpdate: (d) => setState(() {
                  _ship = Offset(
                    (_ship.dx + d.delta.dx / c.maxWidth).clamp(0.06, 0.94),
                    (_ship.dy + d.delta.dy / c.maxHeight).clamp(0.1, 0.92),
                  );
                }),
                child: CustomPaint(
                  size: Size(c.maxWidth, c.maxHeight),
                  painter: _AsteroidPainter(ship: _ship, rocks: _rocks, colors: colors),
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Rock {
  _Rock({required this.x, required this.y, required this.r, required this.speed});
  final double x;
  double y;
  final double r;
  final double speed;
}

class _AsteroidPainter extends CustomPainter {
  _AsteroidPainter({required this.ship, required this.rocks, required this.colors});
  final Offset ship;
  final List<_Rock> rocks;
  final List<Color> colors;

  @override
  void paint(Canvas canvas, Size size) {
    for (final r in rocks) {
      canvas.drawCircle(Offset(r.x * size.width, r.y * size.height), r.r * size.shortestSide, Paint()..color = colors.last);
    }
    final s = Offset(ship.dx * size.width, ship.dy * size.height);
    final path = Path()
      ..moveTo(s.dx, s.dy - 16)
      ..lineTo(s.dx - 12, s.dy + 12)
      ..lineTo(s.dx + 12, s.dy + 12)
      ..close();
    canvas.drawPath(path, Paint()..color = colors.first);
  }

  @override
  bool shouldRepaint(covariant _AsteroidPainter old) => true;
}

// ── 28. Slingshot Score ─────────────────────────────────────────────────────

class NgmyVaultSlingshotScoreGame extends StatefulWidget {
  const NgmyVaultSlingshotScoreGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultSlingshotScoreGame> createState() => _SlingshotScoreState();
}

class _SlingshotScoreState extends State<NgmyVaultSlingshotScoreGame> with _VaultTimedGame<NgmyVaultSlingshotScoreGame> {
  Timer? _tick;
  final Offset _anchor = const Offset(0.5, 0.82);
  Offset? _pull;
  Offset? _proj;
  Offset _pvel = Offset.zero;
  Offset _mark = const Offset(0.5, 0.25);
  final _rnd = math.Random();

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 5;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 40));
    _tick = Timer.periodic(const Duration(milliseconds: 20), (_) {
      if (over) return;
      setState(() {
        _mark = Offset(0.2 + (_rnd.nextDouble() * 0.002) + math.sin(DateTime.now().millisecondsSinceEpoch / 700) * 0.3 + 0.3, 0.18 + math.cos(DateTime.now().millisecondsSinceEpoch / 900) * 0.08);
        if (_proj != null) {
          _pvel = Offset(_pvel.dx, _pvel.dy + 0.0008);
          _proj = Offset(_proj!.dx + _pvel.dx, _proj!.dy + _pvel.dy);
          if ((_proj! - _mark).distance < 0.07) {
            score += 22;
            HapticFeedback.mediumImpact();
            _proj = null;
            _mark = Offset(0.2 + _rnd.nextDouble() * 0.6, 0.15 + _rnd.nextDouble() * 0.25);
          } else if (_proj!.dy > 1.05 || _proj!.dx < -0.1 || _proj!.dx > 1.1) {
            _proj = null;
          }
        }
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _pull = null;
      _proj = null;
    });
    startClock(duration: const Duration(seconds: 40));
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Pull back and release',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanStart: (d) {
                  final p = Offset(d.localPosition.dx / c.maxWidth, d.localPosition.dy / c.maxHeight);
                  if ((p - _anchor).distance < 0.15) setState(() => _pull = p);
                },
                onPanUpdate: (d) {
                  if (_pull == null) return;
                  setState(() {
                    _pull = Offset(d.localPosition.dx / c.maxWidth, d.localPosition.dy / c.maxHeight)
                        .clamp(const Offset(0.2, 0.55), const Offset(0.8, 0.95));
                  });
                },
                onPanEnd: (_) {
                  if (_pull == null) return;
                  final delta = _anchor - _pull!;
                  setState(() {
                    _proj = _anchor;
                    _pvel = Offset(delta.dx * 0.12, delta.dy * 0.12);
                    _pull = null;
                  });
                },
                child: CustomPaint(
                  size: Size(c.maxWidth, c.maxHeight),
                  painter: _SlingPainter(anchor: _anchor, pull: _pull, proj: _proj, mark: _mark, colors: colors),
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

extension on Offset {
  Offset clamp(Offset min, Offset max) => Offset(dx.clamp(min.dx, max.dx), dy.clamp(min.dy, max.dy));
}

class _SlingPainter extends CustomPainter {
  _SlingPainter({required this.anchor, required this.pull, required this.proj, required this.mark, required this.colors});
  final Offset anchor;
  final Offset? pull;
  final Offset? proj;
  final Offset mark;
  final List<Color> colors;

  @override
  void paint(Canvas canvas, Size size) {
    final a = Offset(anchor.dx * size.width, anchor.dy * size.height);
    canvas.drawCircle(Offset(mark.dx * size.width, mark.dy * size.height), 22, Paint()..color = colors.last.withValues(alpha: 0.8));
    if (pull != null) {
      final p = Offset(pull!.dx * size.width, pull!.dy * size.height);
      canvas.drawLine(a, p, Paint()..color = colors.first..strokeWidth = 3);
      canvas.drawCircle(p, 12, Paint()..color = colors.first);
    }
    if (proj != null) {
      canvas.drawCircle(Offset(proj!.dx * size.width, proj!.dy * size.height), 10, Paint()..color = Colors.white);
    }
    canvas.drawCircle(a, 8, Paint()..color = Colors.white70);
  }

  @override
  bool shouldRepaint(covariant _SlingPainter old) => true;
}

// ── 29. Juggle Tap ──────────────────────────────────────────────────────────

class NgmyVaultJuggleTapGame extends StatefulWidget {
  const NgmyVaultJuggleTapGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultJuggleTapGame> createState() => _JuggleTapState();
}

class _JuggleTapState extends State<NgmyVaultJuggleTapGame> with _VaultTimedGame<NgmyVaultJuggleTapGame> {
  Timer? _tick;
  final List<_Orb> _orbs = [];
  final _rnd = math.Random();

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 5;

  @override
  void initState() {
    super.initState();
    _spawnOrb();
    _spawnOrb();
    startClock(duration: const Duration(seconds: 40));
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final o in _orbs) {
          o.vy += 0.0009;
          o.y += o.vy;
          o.x += o.vx;
          if (o.x < 0.06 || o.x > 0.94) o.vx = -o.vx;
          if (o.y > 1.05) {
            finish();
            return;
          }
        }
        if (_orbs.length < 2 + score ~/ 80) _spawnOrb();
      });
    });
  }

  void _spawnOrb() {
    _orbs.add(_Orb(x: 0.2 + _rnd.nextDouble() * 0.6, y: 0.25 + _rnd.nextDouble() * 0.3, vx: (_rnd.nextDouble() - 0.5) * 0.01, vy: -0.002));
  }

  void _tap(Offset local, Size size) {
    if (over) return;
    for (final o in _orbs) {
      final p = Offset(o.x * size.width, o.y * size.height);
      if ((p - local).distance < 40) {
        setState(() {
          o.vy = -0.018 - _rnd.nextDouble() * 0.006;
          score += 9;
        });
        HapticFeedback.selectionClick();
        break;
      }
    }
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    _tick?.cancel();
    setState(() {
      over = false;
      score = 0;
      _orbs.clear();
      _spawnOrb();
      _spawnOrb();
    });
    startClock(duration: const Duration(seconds: 40));
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        for (final o in _orbs) {
          o.vy += 0.0009;
          o.y += o.vy;
          o.x += o.vx;
          if (o.x < 0.06 || o.x > 0.94) o.vx = -o.vx;
          if (o.y > 1.05) {
            finish();
            return;
          }
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Tap orbs to keep them airborne',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapDown: (d) => _tap(d.localPosition, Size(c.maxWidth, c.maxHeight)),
                child: Stack(
                  children: [
                    for (final o in _orbs)
                      Positioned(
                        left: o.x * c.maxWidth - 18,
                        top: o.y * c.maxHeight - 18,
                        child: Container(
                          width: 36,
                          height: 36,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(colors: colors),
                            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.45), blurRadius: 12)],
                          ),
                        ),
                      ),
                  ],
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _Orb {
  _Orb({required this.x, required this.y, required this.vx, required this.vy});
  double x;
  double y;
  double vx;
  double vy;
}

// ── 30. Vortex Hold ─────────────────────────────────────────────────────────

class NgmyVaultVortexHoldGame extends StatefulWidget {
  const NgmyVaultVortexHoldGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultVortexHoldGame> createState() => _VortexHoldState();
}

class _VortexHoldState extends State<NgmyVaultVortexHoldGame> with _VaultTimedGame<NgmyVaultVortexHoldGame> {
  Timer? _tick;
  Offset _token = const Offset(0.5, 0.5);
  double _angle = 0;
  double _pull = 0.004;

  @override
  List<Color> get colors => widget.game.colors;
  @override
  String get gameId => widget.game.id;
  @override
  int get coinDivisor => 5;

  @override
  void initState() {
    super.initState();
    startClock(duration: const Duration(seconds: 40), onTick: () {
      score += 2;
      _pull = math.min(0.012, _pull + 0.0003);
    });
    _tick = Timer.periodic(const Duration(milliseconds: 24), (_) {
      if (over) return;
      setState(() {
        _angle += 0.08;
        final c = const Offset(0.5, 0.5);
        final toCenter = c - _token;
        _token = Offset(
          (_token.dx + toCenter.dx * _pull + math.cos(_angle) * 0.002).clamp(0.05, 0.95),
          (_token.dy + toCenter.dy * _pull + math.sin(_angle) * 0.002).clamp(0.05, 0.95),
        );
        if ((c - _token).distance < 0.06) finish();
      });
    });
  }

  @override
  void dispose() {
    cancelTimers();
    _tick?.cancel();
    super.dispose();
  }

  void _restart() {
    setState(() {
      over = false;
      score = 0;
      _token = const Offset(0.5, 0.72);
      _angle = 0;
      _pull = 0.004;
    });
    startClock(duration: const Duration(seconds: 40), onTick: () {
      score += 2;
      _pull = math.min(0.012, _pull + 0.0003);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _p3Chrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: colors,
          score: score,
          timeLeft: left,
          hint: 'Drag against the vortex — don’t get pulled in',
          child: LayoutBuilder(
            builder: (context, c) {
              return GestureDetector(
                onPanUpdate: (d) => setState(() {
                  _token = Offset(
                    (_token.dx + d.delta.dx / c.maxWidth).clamp(0.05, 0.95),
                    (_token.dy + d.delta.dy / c.maxHeight).clamp(0.05, 0.95),
                  );
                }),
                child: CustomPaint(
                  size: Size(c.maxWidth, c.maxHeight),
                  painter: _VortexPainter(token: _token, angle: _angle, colors: colors),
                ),
              );
            },
          ),
        ),
        if (over) endOverlay(onAgain: _restart),
      ],
    );
  }
}

class _VortexPainter extends CustomPainter {
  _VortexPainter({required this.token, required this.angle, required this.colors});
  final Offset token;
  final double angle;
  final List<Color> colors;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    for (var i = 1; i <= 6; i++) {
      canvas.drawArc(
        Rect.fromCircle(center: c, radius: 20.0 * i),
        angle + i * 0.4,
        2.2,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..color = colors.first.withValues(alpha: 0.2 + i * 0.05),
      );
    }
    canvas.drawCircle(c, 16, Paint()..color = colors.last.withValues(alpha: 0.7));
    canvas.drawCircle(Offset(token.dx * size.width, token.dy * size.height), 14, Paint()..color = colors.first..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2));
  }

  @override
  bool shouldRepaint(covariant _VortexPainter old) => true;
}
