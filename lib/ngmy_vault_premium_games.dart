import 'dart:async';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// Routes premium Vault arcade titles (CustomPainter games, not icon stubs).
Widget ngmyVaultPremiumGameScreen(VaultGameDef game) {
  switch (game.id) {
    case 'neon_drift':
      return NgmyVaultNeonDriftGame(game: game);
    case 'sky_flap':
      return NgmyVaultSkyFlapGame(game: game);
    case 'crystal_breaker':
      return NgmyVaultCrystalBreakerGame(game: game);
    case 'fruit_slash':
      return NgmyVaultFruitSlashGame(game: game);
    case 'peak_hopper':
      return NgmyVaultPeakHopperGame(game: game);
    case 'bubble_rush':
      return NgmyVaultBubbleRushGame(game: game);
    case 'paddle_duel':
      return NgmyVaultPaddleDuelGame(game: game);
    case 'orbit_dodge':
      return NgmyVaultOrbitDodgeGame(game: game);
    case 'cascade_match':
      return NgmyVaultCascadeMatchGame(game: game);
    default:
      throw ArgumentError('Unknown premium vault game: ${game.id}');
  }
}

// ── Shared chrome + end card ─────────────────────────────────────────────────

Widget _premiumChrome({
  required BuildContext context,
  required String title,
  required List<Color> colors,
  required int score,
  required String rightLabel,
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
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.close_rounded, color: Colors.white70),
                ),
                Expanded(
                  child: Text(
                    title,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: colors.first,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 1.2,
                      fontSize: 14,
                    ),
                  ),
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
                Text(
                  'SCORE  $score',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15),
                ),
                Text(
                  rightLabel,
                  style: TextStyle(
                    color: colors.last.withValues(alpha: 0.95),
                    fontWeight: FontWeight.w900,
                    fontSize: 15,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Expanded(child: child),
          if (hint != null)
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 10),
              child: Text(
                hint,
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 11),
              ),
            ),
        ],
      ),
    ),
  );
}

class _PremiumEndCard extends StatelessWidget {
  const _PremiumEndCard({
    required this.score,
    required this.coins,
    required this.colors,
    required this.onAgain,
    required this.onExit,
  });

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
        builder: (context, t, child) => Transform.scale(
          scale: t.clamp(0, 1.2),
          child: Opacity(opacity: t.clamp(0, 1), child: child),
        ),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 36),
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(
              colors: [colors.first.withValues(alpha: 0.28), const Color(0xFF0B0A16)],
            ),
            border: Border.all(color: colors.first.withValues(alpha: 0.6)),
            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 30)],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.emoji_events_rounded, color: colors.first, size: 46),
              const SizedBox(height: 10),
              const Text(
                'RUN COMPLETE',
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.4),
              ),
              const SizedBox(height: 14),
              Text('$score', style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 40)),
              const Text(
                'SCORE',
                style: TextStyle(color: Colors.white38, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2),
              ),
              const SizedBox(height: 10),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.monetization_on_rounded, color: Color(0xFFFBBF24), size: 18),
                  const SizedBox(width: 4),
                  Text(
                    '+$coins coins',
                    style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 15),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: onExit,
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.white70,
                        side: const BorderSide(color: Colors.white24),
                      ),
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

Future<int> _persistPremiumRun({
  required String gameId,
  required int score,
}) async {
  final coins = math.max(0, score ~/ 6);
  await VaultProgressStore.saveRun(gameId: gameId, level: 1, score: score, coinsEarned: coins);
  return coins;
}

class _Particle {
  _Particle({
    required this.x,
    required this.y,
    required this.vx,
    required this.vy,
    required this.life,
    required this.color,
    this.size = 3,
  });
  double x, y, vx, vy, life;
  Color color;
  double size;
}

void _burst(List<_Particle> into, double x, double y, Color c, math.Random rnd, {int n = 12}) {
  for (var i = 0; i < n; i++) {
    final a = rnd.nextDouble() * math.pi * 2;
    final s = 40 + rnd.nextDouble() * 120;
    into.add(_Particle(
      x: x,
      y: y,
      vx: math.cos(a) * s,
      vy: math.sin(a) * s,
      life: 0.35 + rnd.nextDouble() * 0.45,
      color: c,
      size: 2 + rnd.nextDouble() * 3,
    ));
  }
}

void _stepParticles(List<_Particle> ps, double dt) {
  for (final p in ps) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 180 * dt;
    p.life -= dt;
  }
  ps.removeWhere((p) => p.life <= 0);
}

void _paintParticles(Canvas canvas, List<_Particle> ps) {
  for (final p in ps) {
    final paint = Paint()..color = p.color.withValues(alpha: p.life.clamp(0, 1));
    canvas.drawCircle(Offset(p.x, p.y), p.size, paint);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 1. Neon Drift — 3-lane endless racer
// ═══════════════════════════════════════════════════════════════════════════

class _DriftCar {
  _DriftCar({required this.lane, this.y = -80, this.color = const Color(0xFFEF4444)});
  int lane;
  double y;
  Color color;
}

class NgmyVaultNeonDriftGame extends StatefulWidget {
  const NgmyVaultNeonDriftGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultNeonDriftGame> createState() => _NeonDriftState();
}

class _NeonDriftState extends State<NgmyVaultNeonDriftGame> {
  final _rnd = math.Random();
  Timer? _tick;
  int _lane = 1;
  int _score = 0;
  int _lives = 3;
  int _coins = 0;
  double _scroll = 0;
  double _sky = 0;
  double _speed = 280;
  double _spawnAcc = 0;
  double _distAcc = 0;
  bool _over = false;
  Size _size = Size.zero;
  final List<_DriftCar> _cars = [];
  final List<_Particle> _fx = [];

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      _scroll += _speed * dt;
      _sky += _speed * 0.25 * dt;
      _speed = math.min(520.0, _speed + 8 * dt);
      _distAcc += _speed * dt;
      while (_distAcc >= 40) {
        _distAcc -= 40;
        _score += 1;
      }
      _spawnAcc += dt;
      final interval = math.max(0.55, 1.35 - _speed / 900);
      if (_spawnAcc >= interval) {
        _spawnAcc = 0;
        var lane = _rnd.nextInt(3);
        if (_cars.isNotEmpty && _rnd.nextBool()) {
          final last = _cars.last.lane;
          lane = (last + 1 + _rnd.nextInt(2)) % 3;
        }
        _cars.add(_DriftCar(
          lane: lane,
          y: -90,
          color: [
            const Color(0xFF22D3EE),
            const Color(0xFFF472B6),
            const Color(0xFFFBBF24),
            const Color(0xFFA78BFA),
          ][_rnd.nextInt(4)],
        ));
      }
      for (final car in _cars) {
        car.y += _speed * dt;
      }
      final playerY = _size.height * 0.78;
      final laneW = _size.width / 3;
      for (final car in _cars.toList()) {
        if (car.y > _size.height + 80) {
          _cars.remove(car);
          continue;
        }
        if (car.lane == _lane && (car.y - playerY).abs() < 48) {
          _cars.remove(car);
          _lives -= 1;
          HapticFeedback.heavyImpact();
          _burst(_fx, laneW * (_lane + 0.5), playerY, _c.first, _rnd, n: 18);
          if (_lives <= 0) {
            unawaited(_finish());
          }
        }
      }
      _stepParticles(_fx, dt);
    });
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _lane = 1;
      _score = 0;
      _lives = 3;
      _coins = 0;
      _scroll = 0;
      _sky = 0;
      _speed = 280;
      _spawnAcc = 0;
      _distAcc = 0;
      _over = false;
      _cars.clear();
      _fx.clear();
    });
    _startLoop();
  }

  void _shift(int d) {
    if (_over) return;
    setState(() => _lane = (_lane + d).clamp(0, 2));
    HapticFeedback.selectionClick();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: '♥ $_lives',
          hint: 'Swipe or tap left / right to change lanes',
          child: LayoutBuilder(
            builder: (context, constraints) {
              _size = Size(constraints.maxWidth, constraints.maxHeight);
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onHorizontalDragEnd: (d) {
                  final v = d.primaryVelocity ?? 0;
                  if (v < -80) _shift(-1);
                  if (v > 80) _shift(1);
                },
                onTapUp: (d) {
                  final mid = constraints.maxWidth / 2;
                  _shift(d.localPosition.dx < mid ? -1 : 1);
                },
                child: CustomPaint(
                  size: _size,
                  painter: _NeonDriftPainter(
                    lane: _lane,
                    cars: _cars,
                    scroll: _scroll,
                    sky: _sky,
                    colors: _c,
                    particles: _fx,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _NeonDriftPainter extends CustomPainter {
  _NeonDriftPainter({
    required this.lane,
    required this.cars,
    required this.scroll,
    required this.sky,
    required this.colors,
    required this.particles,
  });

  final int lane;
  final List<_DriftCar> cars;
  final double scroll;
  final double sky;
  final List<Color> colors;
  final List<_Particle> particles;

  @override
  void paint(Canvas canvas, Size size) {
    final skyRect = Rect.fromLTWH(0, 0, size.width, size.height * 0.42);
    canvas.drawRect(
      skyRect,
      Paint()
        ..shader = ui.Gradient.linear(
          Offset.zero,
          Offset(0, skyRect.height),
          [const Color(0xFF0B1026), const Color(0xFF1E1B4B), const Color(0xFF312E81)],
        ),
    );
    final buildingPaint = Paint()..color = const Color(0xFF0F172A).withValues(alpha: 0.85);
    final windowPaint = Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.35);
    for (var i = 0; i < 14; i++) {
      final bx = ((i * 58.0 - sky * 0.35) % (size.width + 80)) - 40;
      final bh = 40.0 + ((i * 37) % 90);
      final by = skyRect.height - bh;
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(bx, by, 42, bh), const Radius.circular(2)), buildingPaint);
      for (var wy = by + 8; wy < by + bh - 8; wy += 12) {
        for (var wx = bx + 6; wx < bx + 36; wx += 10) {
          if (((wx + wy).toInt() + i) % 3 == 0) canvas.drawRect(Rect.fromLTWH(wx, wy, 4, 5), windowPaint);
        }
      }
    }

    final roadTop = size.height * 0.38;
    canvas.drawRect(
      Rect.fromLTWH(0, roadTop, size.width, size.height - roadTop),
      Paint()
        ..shader = ui.Gradient.linear(
          Offset(0, roadTop),
          Offset(0, size.height),
          [const Color(0xFF111827), const Color(0xFF030712)],
        ),
    );

    final laneW = size.width / 3;
    final dashPaint = Paint()
      ..color = Colors.white.withValues(alpha: 0.45)
      ..strokeWidth = 3
      ..style = PaintingStyle.stroke;
    for (var i = 1; i < 3; i++) {
      final x = i * laneW;
      var y = roadTop - (scroll % 36);
      while (y < size.height) {
        canvas.drawLine(Offset(x, y), Offset(x, y + 16), dashPaint);
        y += 36;
      }
    }
    final edge = Paint()
      ..color = colors.first.withValues(alpha: 0.55)
      ..strokeWidth = 4
      ..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 4);
    canvas.drawLine(Offset(4, roadTop), Offset(4, size.height), edge);
    canvas.drawLine(Offset(size.width - 4, roadTop), Offset(size.width - 4, size.height), edge);

    for (final car in cars) {
      _drawCar(canvas, Offset(laneW * (car.lane + 0.5), car.y), car.color, false);
    }
    final playerY = size.height * 0.78;
    _drawCar(canvas, Offset(laneW * (lane + 0.5), playerY), colors.first, true);
    _paintParticles(canvas, particles);
  }

  void _drawCar(Canvas canvas, Offset c, Color color, bool player) {
    final body = RRect.fromRectAndRadius(Rect.fromCenter(center: c, width: 46, height: 72), const Radius.circular(10));
    canvas.drawRRect(
      body,
      Paint()
        ..color = color.withValues(alpha: 0.35)
        ..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 10),
    );
    canvas.drawRRect(
      body,
      Paint()
        ..shader = ui.Gradient.linear(
          c.translate(0, -36),
          c.translate(0, 36),
          [color.withValues(alpha: 0.95), color.withValues(alpha: 0.55)],
        ),
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromCenter(center: c.translate(0, -10), width: 28, height: 22), const Radius.circular(6)),
      Paint()..color = const Color(0xFF67E8F9).withValues(alpha: 0.55),
    );
    final light = Paint()..color = player ? const Color(0xFFFDE68A) : const Color(0xFFF87171);
    canvas.drawCircle(c.translate(-12, 30), 4, light);
    canvas.drawCircle(c.translate(12, 30), 4, light);
    if (player) {
      canvas.drawCircle(c.translate(-12, -30), 3, Paint()..color = const Color(0xFF93C5FD));
      canvas.drawCircle(c.translate(12, -30), 3, Paint()..color = const Color(0xFF93C5FD));
    }
  }

  @override
  bool shouldRepaint(covariant _NeonDriftPainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. Sky Flap — Flappy-style
// ═══════════════════════════════════════════════════════════════════════════

class _PipePair {
  _PipePair({required this.x, required this.gapY});
  double x;
  double gapY;
  bool scored = false;
}

class NgmyVaultSkyFlapGame extends StatefulWidget {
  const NgmyVaultSkyFlapGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultSkyFlapGame> createState() => _SkyFlapState();
}

class _SkyFlapState extends State<NgmyVaultSkyFlapGame> {
  final _rnd = math.Random();
  Timer? _tick;
  double _birdY = 0.45;
  double _vy = 0;
  double _wing = 0;
  double _scroll = 0;
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  bool _started = false;
  Size _size = Size.zero;
  final List<_PipePair> _pipes = [];
  final List<_Particle> _fx = [];

  List<Color> get _c => widget.game.colors;
  static const _gap = 150.0;
  static const _pipeW = 62.0;

  @override
  void initState() {
    super.initState();
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _ensurePipes() {
    if (_size == Size.zero) return;
    if (_pipes.isEmpty) {
      for (var i = 0; i < 3; i++) {
        _pipes.add(_PipePair(
          x: _size.width + 40 + i * 210,
          gapY: 0.28 + _rnd.nextDouble() * 0.4,
        ));
      }
    }
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      _wing += dt * 10;
      _scroll += 90 * dt;
      if (!_started) return;
      _ensurePipes();
      _vy += 980 * dt;
      _birdY += (_vy * dt) / math.max(1, _size.height);
      for (final p in _pipes) {
        p.x -= 170 * dt;
      }
      if (_pipes.isNotEmpty && _pipes.first.x < -_pipeW) {
        _pipes.removeAt(0);
        _pipes.add(_PipePair(
          x: _pipes.last.x + 210,
          gapY: 0.28 + _rnd.nextDouble() * 0.4,
        ));
      }
      final bx = _size.width * 0.28;
      final by = _birdY * _size.height;
      for (final p in _pipes) {
        final gapTop = p.gapY * _size.height - _gap / 2;
        final gapBot = gapTop + _gap;
        final hitX = bx + 16 > p.x && bx - 16 < p.x + _pipeW;
        if (hitX && (by - 14 < gapTop || by + 14 > gapBot)) {
          _burst(_fx, bx, by, _c.first, _rnd);
          unawaited(_finish());
          return;
        }
        if (!p.scored && p.x + _pipeW < bx) {
          p.scored = true;
          _score += 1;
          HapticFeedback.lightImpact();
        }
      }
      if (_birdY < 0.02 || _birdY > 0.94) {
        unawaited(_finish());
        return;
      }
      _stepParticles(_fx, dt);
    });
  }

  void _flap() {
    if (_over) return;
    if (!_started) setState(() => _started = true);
    setState(() => _vy = -340);
    HapticFeedback.selectionClick();
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    HapticFeedback.heavyImpact();
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _birdY = 0.45;
      _vy = 0;
      _wing = 0;
      _scroll = 0;
      _score = 0;
      _coins = 0;
      _over = false;
      _started = false;
      _pipes.clear();
      _fx.clear();
    });
    _startLoop();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: _started ? 'TAP' : 'READY',
          hint: 'Tap to flap through the pipes',
          child: LayoutBuilder(
            builder: (context, constraints) {
              _size = Size(constraints.maxWidth, constraints.maxHeight);
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: _flap,
                child: CustomPaint(
                  size: _size,
                  painter: _SkyFlapPainter(
                    birdY: _birdY,
                    wing: _wing,
                    pipes: _pipes,
                    scroll: _scroll,
                    colors: _c,
                    gap: _gap,
                    pipeW: _pipeW,
                    particles: _fx,
                    started: _started,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _SkyFlapPainter extends CustomPainter {
  _SkyFlapPainter({
    required this.birdY,
    required this.wing,
    required this.pipes,
    required this.scroll,
    required this.colors,
    required this.gap,
    required this.pipeW,
    required this.particles,
    required this.started,
  });

  final double birdY, wing, scroll, gap, pipeW;
  final List<_PipePair> pipes;
  final List<Color> colors;
  final List<_Particle> particles;
  final bool started;

  @override
  void paint(Canvas canvas, Size size) {
    final dusk = (scroll / 4000).clamp(0.0, 1.0);
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = ui.Gradient.linear(
          Offset.zero,
          Offset(0, size.height),
          [
            Color.lerp(const Color(0xFF7DD3FC), const Color(0xFFF97316), dusk)!,
            Color.lerp(const Color(0xFFBAE6FD), const Color(0xFF7C3AED), dusk)!,
            Color.lerp(const Color(0xFFFEF3C7), const Color(0xFF1E1B4B), dusk)!,
          ],
        ),
    );
    final cloud = Paint()..color = Colors.white.withValues(alpha: 0.55);
    for (var i = 0; i < 6; i++) {
      final cx = ((i * 120.0 - scroll * 0.4) % (size.width + 100)) - 50;
      final cy = 40.0 + (i % 3) * 36;
      canvas.drawOval(Rect.fromCenter(center: Offset(cx, cy), width: 70, height: 28), cloud);
      canvas.drawOval(Rect.fromCenter(center: Offset(cx + 22, cy + 4), width: 46, height: 22), cloud);
    }

    final pipePaint = Paint()
      ..shader = ui.Gradient.linear(Offset.zero, Offset(pipeW, 0), const [Color(0xFF16A34A), Color(0xFF4ADE80)]);
    final capPaint = Paint()..color = const Color(0xFF15803D);
    for (final p in pipes) {
      final gapTop = p.gapY * size.height - gap / 2;
      final gapBot = gapTop + gap;
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(p.x, 0, pipeW, gapTop), const Radius.circular(6)), pipePaint);
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(p.x - 6, gapTop - 22, pipeW + 12, 22), const Radius.circular(6)), capPaint);
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(p.x, gapBot, pipeW, size.height - gapBot - 28), const Radius.circular(6)), pipePaint);
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(p.x - 6, gapBot, pipeW + 12, 22), const Radius.circular(6)), capPaint);
    }

    canvas.drawRect(
      Rect.fromLTWH(0, size.height - 28, size.width, 28),
      Paint()..color = const Color(0xFF65A30D),
    );

    final bx = size.width * 0.28;
    final by = birdY * size.height;
    final flap = math.sin(wing) * 0.45;
    final body = Paint()
      ..shader = ui.Gradient.radial(Offset(bx, by), 22, [colors.first, colors.last]);
    canvas.drawOval(Rect.fromCenter(center: Offset(bx, by), width: 36, height: 28), body);
    final wingPath = Path()
      ..moveTo(bx - 4, by)
      ..quadraticBezierTo(bx - 8, by - 18 - flap * 20, bx + 14, by - 4)
      ..quadraticBezierTo(bx + 2, by + 2, bx - 4, by);
    canvas.drawPath(wingPath, Paint()..color = colors.last.withValues(alpha: 0.9));
    canvas.drawCircle(Offset(bx + 10, by - 4), 3.5, Paint()..color = Colors.white);
    canvas.drawCircle(Offset(bx + 11, by - 4), 1.6, Paint()..color = Colors.black87);
    final beak = Path()
      ..moveTo(bx + 16, by)
      ..lineTo(bx + 28, by + 2)
      ..lineTo(bx + 16, by + 6)
      ..close();
    canvas.drawPath(beak, Paint()..color = const Color(0xFFF97316));
    _paintParticles(canvas, particles);
    if (!started) {
      final tp = TextPainter(
        text: const TextSpan(text: 'TAP TO START', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, Offset((size.width - tp.width) / 2, size.height * 0.55));
    }
  }

  @override
  bool shouldRepaint(covariant _SkyFlapPainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. Crystal Breaker — brick breaker
// ═══════════════════════════════════════════════════════════════════════════

class _Brick {
  _Brick({required this.rect, required this.color});
  Rect rect;
  Color color;
  bool alive = true;
}

class NgmyVaultCrystalBreakerGame extends StatefulWidget {
  const NgmyVaultCrystalBreakerGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultCrystalBreakerGame> createState() => _CrystalBreakerState();
}

class _CrystalBreakerState extends State<NgmyVaultCrystalBreakerGame> {
  final _rnd = math.Random();
  Timer? _tick;
  double _paddleX = 0.5;
  Offset _ball = const Offset(0.5, 0.7);
  Offset _vel = const Offset(160, -260);
  int _score = 0;
  int _lives = 3;
  int _coins = 0;
  bool _over = false;
  bool _launched = false;
  Size _size = Size.zero;
  final List<_Brick> _bricks = [];
  final List<_Particle> _fx = [];
  final List<Offset> _trail = [];

  List<Color> get _c => widget.game.colors;

  static const _rowColors = [
    Color(0xFFEF4444),
    Color(0xFFF97316),
    Color(0xFFFBBF24),
    Color(0xFF22C55E),
    Color(0xFF06B6D4),
    Color(0xFF8B5CF6),
  ];

  @override
  void initState() {
    super.initState();
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _buildBricks() {
    _bricks.clear();
    if (_size == Size.zero) return;
    const rows = 6;
    const cols = 8;
    final pad = 8.0;
    final bw = (_size.width - pad * (cols + 1)) / cols;
    final bh = 18.0;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        _bricks.add(_Brick(
          rect: Rect.fromLTWH(pad + c * (bw + pad), 24 + r * (bh + 6), bw, bh),
          color: _rowColors[r % _rowColors.length],
        ));
      }
    }
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      if (_size != Size.zero && _bricks.isEmpty) _buildBricks();
      if (!_launched) {
        _ball = Offset(_paddleX, 0.82);
        return;
      }
      var next = Offset(_ball.dx + (_vel.dx * dt) / _size.width, _ball.dy + (_vel.dy * dt) / _size.height);
      final px = next.dx * _size.width;
      final py = next.dy * _size.height;
      if (px < 10 || px > _size.width - 10) {
        _vel = Offset(-_vel.dx, _vel.dy);
        next = Offset(_ball.dx, next.dy);
      }
      if (py < 10) {
        _vel = Offset(_vel.dx, -_vel.dy);
        next = Offset(next.dx, _ball.dy);
      }
      final paddleRect = Rect.fromCenter(
        center: Offset(_paddleX * _size.width, _size.height * 0.88),
        width: 90,
        height: 16,
      );
      final ballR = Rect.fromCircle(center: Offset(px, py), radius: 8);
      if (ballR.overlaps(paddleRect) && _vel.dy > 0) {
        final hit = ((px - paddleRect.center.dx) / (paddleRect.width / 2)).clamp(-1.0, 1.0).toDouble();
        _vel = Offset(220 * hit, -_vel.dy.abs().clamp(220.0, 420.0));
        HapticFeedback.selectionClick();
      }
      for (final b in _bricks) {
        if (!b.alive) continue;
        if (ballR.overlaps(b.rect)) {
          b.alive = false;
          _score += 10;
          _vel = Offset(_vel.dx, -_vel.dy);
          _burst(_fx, b.rect.center.dx, b.rect.center.dy, b.color, _rnd, n: 10);
          HapticFeedback.lightImpact();
          break;
        }
      }
      if (_bricks.every((b) => !b.alive)) {
        _buildBricks();
        _score += 50;
      }
      if (next.dy > 1.02) {
        _lives -= 1;
        _launched = false;
        _vel = Offset(160 * (_rnd.nextBool() ? 1 : -1), -260);
        HapticFeedback.heavyImpact();
        if (_lives <= 0) {
          unawaited(_finish());
          return;
        }
      } else {
        _ball = next;
      }
      _trail.insert(0, Offset(_ball.dx * _size.width, _ball.dy * _size.height));
      if (_trail.length > 10) _trail.removeLast();
      _stepParticles(_fx, dt);
    });
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _paddleX = 0.5;
      _ball = const Offset(0.5, 0.7);
      _vel = const Offset(160, -260);
      _score = 0;
      _lives = 3;
      _coins = 0;
      _over = false;
      _launched = false;
      _bricks.clear();
      _fx.clear();
      _trail.clear();
    });
    _startLoop();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: '♥ $_lives',
          hint: 'Drag to move paddle · tap to launch',
          child: LayoutBuilder(
            builder: (context, constraints) {
              final s = Size(constraints.maxWidth, constraints.maxHeight);
              if (_size != s) {
                _size = s;
                if (_bricks.isEmpty) _buildBricks();
              }
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onPanUpdate: (d) {
                  setState(() => _paddleX = (d.localPosition.dx / s.width).clamp(0.08, 0.92));
                },
                onTap: () {
                  if (!_launched && !_over) setState(() => _launched = true);
                },
                child: CustomPaint(
                  size: s,
                  painter: _CrystalBreakerPainter(
                    paddleX: _paddleX,
                    ball: _ball,
                    bricks: _bricks,
                    colors: _c,
                    trail: _trail,
                    particles: _fx,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _CrystalBreakerPainter extends CustomPainter {
  _CrystalBreakerPainter({
    required this.paddleX,
    required this.ball,
    required this.bricks,
    required this.colors,
    required this.trail,
    required this.particles,
  });

  final double paddleX;
  final Offset ball;
  final List<_Brick> bricks;
  final List<Color> colors;
  final List<Offset> trail;
  final List<_Particle> particles;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = ui.Gradient.linear(Offset.zero, Offset(0, size.height), const [Color(0xFF0F172A), Color(0xFF030712)]),
    );
    for (final b in bricks) {
      if (!b.alive) continue;
      final rr = RRect.fromRectAndRadius(b.rect, const Radius.circular(5));
      canvas.drawRRect(
        rr,
        Paint()
          ..color = b.color.withValues(alpha: 0.35)
          ..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 6),
      );
      canvas.drawRRect(
        rr,
        Paint()
          ..shader = ui.Gradient.linear(b.rect.topLeft, b.rect.bottomRight, [b.color, b.color.withValues(alpha: 0.55)]),
      );
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTWH(b.rect.left + 4, b.rect.top + 3, b.rect.width * 0.45, 4), const Radius.circular(2)),
        Paint()..color = Colors.white.withValues(alpha: 0.45),
      );
    }
    for (var i = 0; i < trail.length; i++) {
      canvas.drawCircle(trail[i], 6 - i * 0.4, Paint()..color = colors.first.withValues(alpha: 0.15 + (1 - i / trail.length) * 0.25));
    }
    final bc = Offset(ball.dx * size.width, ball.dy * size.height);
    canvas.drawCircle(bc, 10, Paint()..color = colors.first.withValues(alpha: 0.35)..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 8));
    canvas.drawCircle(bc, 8, Paint()..shader = ui.Gradient.radial(bc, 8, [Colors.white, colors.first]));
    final paddle = Rect.fromCenter(center: Offset(paddleX * size.width, size.height * 0.88), width: 90, height: 16);
    final pr = RRect.fromRectAndRadius(paddle, const Radius.circular(10));
    canvas.drawRRect(pr, Paint()..color = colors.last.withValues(alpha: 0.4)..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 10));
    canvas.drawRRect(pr, Paint()..shader = ui.Gradient.linear(paddle.topLeft, paddle.topRight, [colors.first, colors.last]));
    _paintParticles(canvas, particles);
  }

  @override
  bool shouldRepaint(covariant _CrystalBreakerPainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. Fruit Slash
// ═══════════════════════════════════════════════════════════════════════════

enum _FruitKind { apple, orange, melon, banana, bomb }

class _Fruit {
  _Fruit({
    required this.kind,
    required this.x,
    required this.y,
    required this.vx,
    required this.vy,
  });
  _FruitKind kind;
  double x, y, vx, vy;
  double rot = 0;
  bool alive = true;
}

class NgmyVaultFruitSlashGame extends StatefulWidget {
  const NgmyVaultFruitSlashGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultFruitSlashGame> createState() => _FruitSlashState();
}

class _FruitSlashState extends State<NgmyVaultFruitSlashGame> {
  final _rnd = math.Random();
  Timer? _tick;
  int _score = 0;
  int _lives = 3;
  int _coins = 0;
  double _time = 45;
  double _spawnAcc = 0;
  bool _over = false;
  Size _size = Size.zero;
  final List<_Fruit> _fruits = [];
  final List<_Particle> _fx = [];
  final List<Offset> _slash = [];

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _spawn() {
    if (_size == Size.zero) return;
    final bomb = _rnd.nextDouble() < 0.12;
    final kinds = [_FruitKind.apple, _FruitKind.orange, _FruitKind.melon, _FruitKind.banana];
    _fruits.add(_Fruit(
      kind: bomb ? _FruitKind.bomb : kinds[_rnd.nextInt(kinds.length)],
      x: 40 + _rnd.nextDouble() * (_size.width - 80),
      y: _size.height + 20,
      vx: (_rnd.nextDouble() - 0.5) * 180,
      vy: -(520 + _rnd.nextDouble() * 220),
    ));
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      _time -= dt;
      if (_time <= 0) {
        unawaited(_finish());
        return;
      }
      _spawnAcc += dt;
      if (_spawnAcc > math.max(0.35, 0.9 - (45 - _time) * 0.01)) {
        _spawnAcc = 0;
        _spawn();
        if (_rnd.nextDouble() < 0.35) _spawn();
      }
      for (final f in _fruits) {
        f.vy += 780 * dt;
        f.x += f.vx * dt;
        f.y += f.vy * dt;
        f.rot += dt * 3;
      }
      _fruits.removeWhere((f) => f.y > _size.height + 60 && f.alive);
      if (_slash.length >= 2) {
        for (final f in _fruits) {
          if (!f.alive) continue;
          for (var i = 1; i < _slash.length; i++) {
            if ((_slash[i] - Offset(f.x, f.y)).distance < 36) {
              f.alive = false;
              if (f.kind == _FruitKind.bomb) {
                _lives -= 1;
                HapticFeedback.heavyImpact();
                _burst(_fx, f.x, f.y, const Color(0xFF111827), _rnd, n: 20);
                if (_lives <= 0) {
                  unawaited(_finish());
                  return;
                }
              } else {
                _score += 8;
                HapticFeedback.mediumImpact();
                _burst(_fx, f.x, f.y, _fruitColor(f.kind), _rnd, n: 14);
              }
              break;
            }
          }
        }
        _fruits.removeWhere((f) => !f.alive);
      }
      if (_slash.isNotEmpty) {
        _slash.removeAt(0);
        if (_slash.length > 1) _slash.removeAt(0);
      }
      _stepParticles(_fx, dt);
    });
  }

  Color _fruitColor(_FruitKind k) {
    switch (k) {
      case _FruitKind.apple:
        return const Color(0xFFEF4444);
      case _FruitKind.orange:
        return const Color(0xFFF97316);
      case _FruitKind.melon:
        return const Color(0xFF22C55E);
      case _FruitKind.banana:
        return const Color(0xFFFACC15);
      case _FruitKind.bomb:
        return const Color(0xFF1F2937);
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _lives = 3;
      _coins = 0;
      _time = 45;
      _spawnAcc = 0;
      _over = false;
      _fruits.clear();
      _fx.clear();
      _slash.clear();
    });
    _startLoop();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: '${_time.ceil()}s · ♥ $_lives',
          hint: 'Swipe to slash fruit — avoid bombs',
          child: LayoutBuilder(
            builder: (context, constraints) {
              _size = Size(constraints.maxWidth, constraints.maxHeight);
              return Listener(
                behavior: HitTestBehavior.opaque,
                onPointerDown: (e) => setState(() {
                  _slash
                    ..clear()
                    ..add(e.localPosition);
                }),
                onPointerMove: (e) => setState(() {
                  _slash.add(e.localPosition);
                  if (_slash.length > 18) _slash.removeAt(0);
                }),
                onPointerUp: (_) {},
                child: CustomPaint(
                  size: _size,
                  painter: _FruitSlashPainter(
                    fruits: _fruits,
                    slash: _slash,
                    particles: _fx,
                    colors: _c,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _FruitSlashPainter extends CustomPainter {
  _FruitSlashPainter({
    required this.fruits,
    required this.slash,
    required this.particles,
    required this.colors,
  });

  final List<_Fruit> fruits;
  final List<Offset> slash;
  final List<_Particle> particles;
  final List<Color> colors;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = ui.Gradient.linear(Offset.zero, Offset(0, size.height), const [Color(0xFF1E293B), Color(0xFF0F172A), Color(0xFF020617)]),
    );
    for (final f in fruits) {
      canvas.save();
      canvas.translate(f.x, f.y);
      canvas.rotate(f.rot);
      switch (f.kind) {
        case _FruitKind.apple:
          canvas.drawCircle(Offset.zero, 22, Paint()..color = const Color(0xFFEF4444));
          canvas.drawCircle(const Offset(-6, -6), 6, Paint()..color = Colors.white.withValues(alpha: 0.25));
          canvas.drawLine(const Offset(0, -22), const Offset(0, -30), Paint()..color = const Color(0xFF78350F)..strokeWidth = 3);
          canvas.drawOval(const Rect.fromLTWH(2, -32, 12, 8), Paint()..color = const Color(0xFF22C55E));
        case _FruitKind.orange:
          canvas.drawCircle(Offset.zero, 20, Paint()..color = const Color(0xFFF97316));
          canvas.drawCircle(const Offset(-5, -5), 5, Paint()..color = Colors.white.withValues(alpha: 0.2));
          canvas.drawOval(const Rect.fromLTWH(-4, -26, 10, 7), Paint()..color = const Color(0xFF16A34A));
        case _FruitKind.melon:
          final path = Path()
            ..moveTo(-24, 8)
            ..quadraticBezierTo(0, -22, 24, 8)
            ..quadraticBezierTo(0, 18, -24, 8)
            ..close();
          canvas.drawPath(path, Paint()..color = const Color(0xFF22C55E));
          canvas.drawPath(path, Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.85)..style = PaintingStyle.stroke..strokeWidth = 2);
          for (var i = -2; i <= 2; i++) {
            canvas.drawCircle(Offset(i * 6.0, 2), 2, Paint()..color = const Color(0xFF111827));
          }
        case _FruitKind.banana:
          final banana = Path()
            ..moveTo(-18, 8)
            ..quadraticBezierTo(0, -18, 20, -4)
            ..quadraticBezierTo(8, 10, -18, 8);
          canvas.drawPath(banana, Paint()..color = const Color(0xFFFACC15));
        case _FruitKind.bomb:
          canvas.drawCircle(Offset.zero, 20, Paint()..color = const Color(0xFF111827));
          canvas.drawCircle(const Offset(-5, -5), 4, Paint()..color = Colors.white24);
          canvas.drawLine(const Offset(10, -14), const Offset(18, -24), Paint()..color = const Color(0xFF78716C)..strokeWidth = 3);
          canvas.drawCircle(const Offset(18, -24), 4, Paint()..color = const Color(0xFFF97316));
      }
      canvas.restore();
    }
    if (slash.length >= 2) {
      final path = Path()..moveTo(slash.first.dx, slash.first.dy);
      for (final p in slash.skip(1)) {
        path.lineTo(p.dx, p.dy);
      }
      canvas.drawPath(
        path,
        Paint()
          ..color = Colors.white.withValues(alpha: 0.85)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 4
          ..strokeCap = StrokeCap.round
          ..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 2),
      );
      canvas.drawPath(
        path,
        Paint()
          ..color = colors.first.withValues(alpha: 0.55)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..strokeCap = StrokeCap.round,
      );
    }
    _paintParticles(canvas, particles);
  }

  @override
  bool shouldRepaint(covariant _FruitSlashPainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. Peak Hopper — Doodle Jump-ish
// ═══════════════════════════════════════════════════════════════════════════

class _Platform {
  _Platform({required this.x, required this.y, this.w = 70});
  double x, y, w;
}

class NgmyVaultPeakHopperGame extends StatefulWidget {
  const NgmyVaultPeakHopperGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultPeakHopperGame> createState() => _PeakHopperState();
}

class _PeakHopperState extends State<NgmyVaultPeakHopperGame> {
  final _rnd = math.Random();
  Timer? _tick;
  double _px = 0.5;
  double _py = 0.7;
  double _vx = 0;
  double _vy = 0;
  double _cam = 0;
  double _maxH = 0;
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  Size _size = Size.zero;
  final List<_Platform> _plats = [];
  final List<_Particle> _fx = [];

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _seedPlatforms() {
    _plats.clear();
    if (_size == Size.zero) return;
    _plats.add(_Platform(x: _size.width * 0.5 - 40, y: _size.height * 0.85, w: 90));
    var y = _size.height * 0.85;
    for (var i = 0; i < 18; i++) {
      y -= 70 + _rnd.nextDouble() * 50;
      _plats.add(_Platform(x: 20 + _rnd.nextDouble() * (_size.width - 100), y: y, w: 55 + _rnd.nextDouble() * 35));
    }
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      if (_size != Size.zero && _plats.isEmpty) {
        _seedPlatforms();
        _py = 0.75;
        _vy = -420;
      }
      _vy += 1100 * dt;
      _px += (_vx * dt) / math.max(1, _size.width);
      _py += (_vy * dt) / math.max(1, _size.height);
      if (_px < -0.05) _px = 1.05;
      if (_px > 1.05) _px = -0.05;
      final worldY = _py * _size.height + _cam;
      if (_vy > 0) {
        for (final p in _plats) {
          final feet = worldY + 18;
          if (feet >= p.y && feet <= p.y + 14) {
            final cx = _px * _size.width;
            if (cx > p.x - 8 && cx < p.x + p.w + 8) {
              _vy = -520;
              _py = (p.y - 18 - _cam) / _size.height;
              HapticFeedback.selectionClick();
              _burst(_fx, cx, p.y - _cam, _c.first, _rnd, n: 6);
              break;
            }
          }
        }
      }
      final screenY = _py * _size.height;
      if (screenY < _size.height * 0.35) {
        final lift = _size.height * 0.35 - screenY;
        _cam += lift;
        _py = 0.35;
      }
      if (_cam > _maxH) {
        _maxH = _cam;
        _score = (_maxH / 8).floor();
      }
      _plats.removeWhere((p) => p.y - _cam > _size.height + 40);
      while (_plats.isNotEmpty && _plats.length < 18) {
        final top = _plats.map((p) => p.y).reduce(math.min);
        _plats.add(_Platform(
          x: 20 + _rnd.nextDouble() * (_size.width - 100),
          y: top - (70 + _rnd.nextDouble() * 55),
          w: 55 + _rnd.nextDouble() * 35,
        ));
      }
      if (_py > 1.15) {
        unawaited(_finish());
        return;
      }
      _vx *= math.pow(0.92, dt * 60).toDouble();
      _stepParticles(_fx, dt);
    });
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    HapticFeedback.heavyImpact();
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _px = 0.5;
      _py = 0.7;
      _vx = 0;
      _vy = 0;
      _cam = 0;
      _maxH = 0;
      _score = 0;
      _coins = 0;
      _over = false;
      _plats.clear();
      _fx.clear();
    });
    _startLoop();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: 'HEIGHT',
          hint: 'Drag left / right · bounce up platforms',
          child: LayoutBuilder(
            builder: (context, constraints) {
              final s = Size(constraints.maxWidth, constraints.maxHeight);
              if (_size != s) {
                _size = s;
                if (_plats.isEmpty) _seedPlatforms();
              }
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onHorizontalDragUpdate: (d) {
                  setState(() => _vx = (d.delta.dx * 55).clamp(-320.0, 320.0));
                },
                child: CustomPaint(
                  size: s,
                  painter: _PeakHopperPainter(
                    px: _px,
                    py: _py,
                    cam: _cam,
                    plats: _plats,
                    colors: _c,
                    particles: _fx,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _PeakHopperPainter extends CustomPainter {
  _PeakHopperPainter({
    required this.px,
    required this.py,
    required this.cam,
    required this.plats,
    required this.colors,
    required this.particles,
  });

  final double px, py, cam;
  final List<_Platform> plats;
  final List<Color> colors;
  final List<_Particle> particles;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = ui.Gradient.linear(
          Offset.zero,
          Offset(0, size.height),
          [const Color(0xFF38BDF8), const Color(0xFFBAE6FD), const Color(0xFFE0F2FE)],
        ),
    );
    for (final p in plats) {
      final y = p.y - cam;
      if (y < -20 || y > size.height + 20) continue;
      final rect = RRect.fromRectAndRadius(Rect.fromLTWH(p.x, y, p.w, 14), const Radius.circular(4));
      canvas.drawRRect(rect, Paint()..color = const Color(0xFF92400E));
      canvas.drawRRect(rect, Paint()..color = const Color(0xFFD97706)..style = PaintingStyle.stroke..strokeWidth = 1.5);
      for (var i = 0; i < 3; i++) {
        canvas.drawLine(
          Offset(p.x + 8 + i * (p.w / 3), y + 3),
          Offset(p.x + 8 + i * (p.w / 3) + 10, y + 11),
          Paint()..color = const Color(0xFF78350F).withValues(alpha: 0.45)..strokeWidth = 1,
        );
      }
    }
    final c = Offset(px * size.width, py * size.height);
    final body = RRect.fromRectAndRadius(Rect.fromCenter(center: c, width: 28, height: 36), const Radius.circular(14));
    canvas.drawRRect(body, Paint()..shader = ui.Gradient.linear(c.translate(0, -18), c.translate(0, 18), [colors.first, colors.last]));
    canvas.drawCircle(c.translate(-6, -6), 3.2, Paint()..color = Colors.white);
    canvas.drawCircle(c.translate(6, -6), 3.2, Paint()..color = Colors.white);
    canvas.drawCircle(c.translate(-5.5, -6), 1.5, Paint()..color = Colors.black87);
    canvas.drawCircle(c.translate(6.5, -6), 1.5, Paint()..color = Colors.black87);
    _paintParticles(canvas, particles);
  }

  @override
  bool shouldRepaint(covariant _PeakHopperPainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. Bubble Rush
// ═══════════════════════════════════════════════════════════════════════════

class _Bubble {
  _Bubble({
    required this.x,
    required this.y,
    required this.r,
    required this.color,
    required this.vy,
  });
  double x, y, r, vy;
  double pop = 0;
  Color color;
}

class NgmyVaultBubbleRushGame extends StatefulWidget {
  const NgmyVaultBubbleRushGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultBubbleRushGame> createState() => _BubbleRushState();
}

class _BubbleRushState extends State<NgmyVaultBubbleRushGame> {
  final _rnd = math.Random();
  Timer? _tick;
  int _score = 0;
  int _lives = 3;
  int _coins = 0;
  double _time = 40;
  double _spawnAcc = 0;
  int _targetIdx = 0;
  bool _over = false;
  Size _size = Size.zero;
  final List<_Bubble> _bubbles = [];
  final List<_Particle> _fx = [];

  static const _palette = [
    Color(0xFFEF4444),
    Color(0xFF3B82F6),
    Color(0xFF22C55E),
    Color(0xFFFBBF24),
    Color(0xFFA855F7),
  ];

  List<Color> get _c => widget.game.colors;
  Color get _target => _palette[_targetIdx];

  @override
  void initState() {
    super.initState();
    _targetIdx = _rnd.nextInt(_palette.length);
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _spawn() {
    if (_size == Size.zero) return;
    _bubbles.add(_Bubble(
      x: 30 + _rnd.nextDouble() * (_size.width - 60),
      y: _size.height + 30,
      r: 18 + _rnd.nextDouble() * 16,
      color: _palette[_rnd.nextInt(_palette.length)],
      vy: -(70 + _rnd.nextDouble() * 90 + (40 - _time) * 1.5),
    ));
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      _time -= dt;
      if (_time <= 0) {
        unawaited(_finish());
        return;
      }
      _spawnAcc += dt;
      final rate = math.max(0.22, 0.7 - (40 - _time) * 0.01);
      if (_spawnAcc >= rate) {
        _spawnAcc = 0;
        _spawn();
      }
      for (final b in _bubbles) {
        if (b.pop > 0) {
          b.pop += dt * 4;
          continue;
        }
        b.y += b.vy * dt;
        b.x += math.sin(b.y * 0.02) * 18 * dt;
      }
      _bubbles.removeWhere((b) => b.y < -40 || b.pop > 1);
      _stepParticles(_fx, dt);
    });
  }

  void _tap(Offset local) {
    if (_over) return;
    for (final b in _bubbles.reversed) {
      if (b.pop > 0) continue;
      if ((Offset(b.x, b.y) - local).distance <= b.r + 8) {
        if (b.color == _target) {
          _score += 10;
          b.pop = 0.01;
          HapticFeedback.lightImpact();
          _burst(_fx, b.x, b.y, b.color, _rnd, n: 10);
          if (_rnd.nextDouble() < 0.35) {
            setState(() => _targetIdx = _rnd.nextInt(_palette.length));
          }
        } else {
          _lives -= 1;
          b.pop = 0.01;
          HapticFeedback.heavyImpact();
          if (_lives <= 0) unawaited(_finish());
        }
        setState(() {});
        return;
      }
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _lives = 3;
      _coins = 0;
      _time = 40;
      _spawnAcc = 0;
      _targetIdx = _rnd.nextInt(_palette.length);
      _over = false;
      _bubbles.clear();
      _fx.clear();
    });
    _startLoop();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: '${_time.ceil()}s · ♥ $_lives',
          hint: 'Tap bubbles matching the target color',
          child: LayoutBuilder(
            builder: (context, constraints) {
              _size = Size(constraints.maxWidth, constraints.maxHeight);
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapDown: (d) => _tap(d.localPosition),
                child: CustomPaint(
                  size: _size,
                  painter: _BubbleRushPainter(
                    bubbles: _bubbles,
                    target: _target,
                    colors: _c,
                    particles: _fx,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _BubbleRushPainter extends CustomPainter {
  _BubbleRushPainter({
    required this.bubbles,
    required this.target,
    required this.colors,
    required this.particles,
  });

  final List<_Bubble> bubbles;
  final Color target;
  final List<Color> colors;
  final List<_Particle> particles;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = ui.Gradient.linear(Offset.zero, Offset(0, size.height), const [Color(0xFF0C4A6E), Color(0xFF082F49), Color(0xFF020617)]),
    );
    final badge = RRect.fromRectAndRadius(Rect.fromLTWH(size.width / 2 - 54, 10, 108, 36), const Radius.circular(18));
    canvas.drawRRect(badge, Paint()..color = Colors.black.withValues(alpha: 0.35));
    canvas.drawCircle(Offset(size.width / 2, 28), 12, Paint()..color = target);
    canvas.drawCircle(Offset(size.width / 2 - 3, 25), 3, Paint()..color = Colors.white.withValues(alpha: 0.5));
    for (final b in bubbles) {
      final scale = b.pop > 0 ? 1 + b.pop * 0.8 : 1.0;
      final alpha = b.pop > 0 ? (1 - b.pop).clamp(0.0, 1.0) : 1.0;
      final c = Offset(b.x, b.y);
      if (b.pop > 0) {
        canvas.drawCircle(
          c,
          b.r * scale,
          Paint()
            ..color = b.color.withValues(alpha: alpha * 0.5)
            ..style = PaintingStyle.stroke
            ..strokeWidth = 3,
        );
      } else {
        canvas.drawCircle(c, b.r, Paint()..color = b.color.withValues(alpha: 0.55));
        canvas.drawCircle(c, b.r, Paint()..color = b.color.withValues(alpha: 0.25)..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 8));
        canvas.drawCircle(c.translate(-b.r * 0.3, -b.r * 0.35), b.r * 0.28, Paint()..color = Colors.white.withValues(alpha: 0.55));
      }
    }
    _paintParticles(canvas, particles);
  }

  @override
  bool shouldRepaint(covariant _BubbleRushPainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 7. Paddle Duel — glow pong vs AI
// ═══════════════════════════════════════════════════════════════════════════

class NgmyVaultPaddleDuelGame extends StatefulWidget {
  const NgmyVaultPaddleDuelGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultPaddleDuelGame> createState() => _PaddleDuelState();
}

class _PaddleDuelState extends State<NgmyVaultPaddleDuelGame> {
  final _rnd = math.Random();
  Timer? _tick;
  double _playerX = 0.5;
  double _aiX = 0.5;
  Offset _ball = const Offset(0.5, 0.5);
  Offset _vel = const Offset(180, -220);
  int _playerScore = 0;
  int _aiScore = 0;
  int _score = 0;
  int _coins = 0;
  double _time = 45;
  bool _over = false;
  Size _size = Size.zero;
  final List<Offset> _trail = [];
  final List<_Particle> _fx = [];

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _serve({required bool toPlayer}) {
    _ball = const Offset(0.5, 0.5);
    _vel = Offset((_rnd.nextBool() ? 1 : -1) * (160 + _rnd.nextDouble() * 60), toPlayer ? 220 : -220);
    _trail.clear();
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      _time -= dt;
      if (_time <= 0 || _playerScore >= 7 || _aiScore >= 7) {
        unawaited(_finish());
        return;
      }
      var next = Offset(_ball.dx + (_vel.dx * dt) / math.max(1, _size.width), _ball.dy + (_vel.dy * dt) / math.max(1, _size.height));
      if (next.dx < 0.03 || next.dx > 0.97) {
        _vel = Offset(-_vel.dx, _vel.dy);
        next = Offset(_ball.dx, next.dy);
      }
      final target = _ball.dx;
      _aiX += ((target - _aiX) * 4.2 * dt).clamp(-0.035, 0.035);
      _aiX = _aiX.clamp(0.08, 0.92);

      final ballPx = Offset(next.dx * _size.width, next.dy * _size.height);
      final playerPad = Rect.fromCenter(center: Offset(_playerX * _size.width, _size.height * 0.9), width: 96, height: 14);
      final aiPad = Rect.fromCenter(center: Offset(_aiX * _size.width, _size.height * 0.1), width: 96, height: 14);
      final ballR = Rect.fromCircle(center: ballPx, radius: 8);
      if (ballR.overlaps(playerPad) && _vel.dy > 0) {
        final hit = ((ballPx.dx - playerPad.center.dx) / 48).clamp(-1.0, 1.0).toDouble();
        _vel = Offset(240 * hit, -_vel.dy.abs().clamp(200.0, 380.0));
        HapticFeedback.selectionClick();
      }
      if (ballR.overlaps(aiPad) && _vel.dy < 0) {
        final hit = ((ballPx.dx - aiPad.center.dx) / 48).clamp(-1.0, 1.0).toDouble();
        _vel = Offset(220 * hit, _vel.dy.abs().clamp(200.0, 360.0));
      }
      if (next.dy > 1.05) {
        _aiScore += 1;
        _serve(toPlayer: false);
        HapticFeedback.heavyImpact();
        return;
      }
      if (next.dy < -0.05) {
        _playerScore += 1;
        _score = _playerScore * 10;
        _burst(_fx, ballPx.dx, 20, _c.first, _rnd, n: 12);
        HapticFeedback.mediumImpact();
        _serve(toPlayer: true);
        return;
      }
      _ball = next;
      _trail.insert(0, Offset(_ball.dx * _size.width, _ball.dy * _size.height));
      if (_trail.length > 12) _trail.removeLast();
      _stepParticles(_fx, dt);
    });
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    setState(() {
      _over = true;
      _score = math.max(_score, _playerScore * 10 + (_playerScore > _aiScore ? 25 : 0));
    });
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _playerX = 0.5;
      _aiX = 0.5;
      _ball = const Offset(0.5, 0.5);
      _vel = const Offset(180, -220);
      _playerScore = 0;
      _aiScore = 0;
      _score = 0;
      _coins = 0;
      _time = 45;
      _over = false;
      _trail.clear();
      _fx.clear();
    });
    _startLoop();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: '$_playerScore – $_aiScore · ${_time.ceil()}s',
          hint: 'Drag to move your paddle · first to 7',
          child: LayoutBuilder(
            builder: (context, constraints) {
              _size = Size(constraints.maxWidth, constraints.maxHeight);
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onPanUpdate: (d) {
                  setState(() => _playerX = (d.localPosition.dx / _size.width).clamp(0.08, 0.92));
                },
                child: CustomPaint(
                  size: _size,
                  painter: _PaddleDuelPainter(
                    playerX: _playerX,
                    aiX: _aiX,
                    ball: _ball,
                    trail: _trail,
                    colors: _c,
                    particles: _fx,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _PaddleDuelPainter extends CustomPainter {
  _PaddleDuelPainter({
    required this.playerX,
    required this.aiX,
    required this.ball,
    required this.trail,
    required this.colors,
    required this.particles,
  });

  final double playerX, aiX;
  final Offset ball;
  final List<Offset> trail;
  final List<Color> colors;
  final List<_Particle> particles;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = ui.Gradient.linear(Offset.zero, Offset(0, size.height), const [Color(0xFF111827), Color(0xFF030712)]),
    );
    final dash = Paint()
      ..color = Colors.white24
      ..strokeWidth = 2;
    var x = 8.0;
    final mid = size.height / 2;
    while (x < size.width) {
      canvas.drawLine(Offset(x, mid), Offset(x + 12, mid), dash);
      x += 22;
    }
    void paddle(double nx, double ny, Color c) {
      final r = RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(nx * size.width, ny * size.height), width: 96, height: 14),
        const Radius.circular(8),
      );
      canvas.drawRRect(r, Paint()..color = c.withValues(alpha: 0.35)..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 8));
      canvas.drawRRect(r, Paint()..color = c);
    }

    paddle(aiX, 0.1, colors.last);
    paddle(playerX, 0.9, colors.first);
    for (var i = 0; i < trail.length; i++) {
      canvas.drawCircle(trail[i], 5 - i * 0.25, Paint()..color = colors.first.withValues(alpha: 0.12 + (1 - i / trail.length) * 0.3));
    }
    final bc = Offset(ball.dx * size.width, ball.dy * size.height);
    canvas.drawCircle(bc, 10, Paint()..color = colors.first.withValues(alpha: 0.4)..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 8));
    canvas.drawCircle(bc, 7, Paint()..color = Colors.white);
    _paintParticles(canvas, particles);
  }

  @override
  bool shouldRepaint(covariant _PaddleDuelPainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 8. Orbit Dodge — top-down space
// ═══════════════════════════════════════════════════════════════════════════

class _Asteroid {
  _Asteroid({
    required this.x,
    required this.y,
    required this.vx,
    required this.vy,
    required this.r,
    required this.rot,
    required this.spin,
    required this.verts,
  });
  double x, y, vx, vy, r, rot, spin;
  List<double> verts;
}

class NgmyVaultOrbitDodgeGame extends StatefulWidget {
  const NgmyVaultOrbitDodgeGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultOrbitDodgeGame> createState() => _OrbitDodgeState();
}

class _OrbitDodgeState extends State<NgmyVaultOrbitDodgeGame> {
  final _rnd = math.Random();
  Timer? _tick;
  Offset _ship = const Offset(0.5, 0.7);
  Offset _vel = Offset.zero;
  int _score = 0;
  int _lives = 3;
  int _coins = 0;
  double _spawnAcc = 0;
  double _alive = 0;
  bool _over = false;
  Size _size = Size.zero;
  final List<_Asteroid> _rocks = [];
  final List<_Particle> _fx = [];
  final List<Offset> _stars = [];

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _startLoop();
  }

  void _startLoop() {
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 16), (_) => _frame(0.016));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  List<double> _makeVerts() {
    final n = 7 + _rnd.nextInt(3);
    return List.generate(n, (i) => 0.65 + _rnd.nextDouble() * 0.45);
  }

  void _spawnRock() {
    if (_size == Size.zero) return;
    final edge = _rnd.nextInt(4);
    late double x, y, vx, vy;
    switch (edge) {
      case 0:
        x = _rnd.nextDouble() * _size.width;
        y = -30;
        vx = (_rnd.nextDouble() - 0.5) * 80;
        vy = 40 + _rnd.nextDouble() * 120;
      case 1:
        x = _size.width + 30;
        y = _rnd.nextDouble() * _size.height;
        vx = -(40 + _rnd.nextDouble() * 120);
        vy = (_rnd.nextDouble() - 0.5) * 80;
      case 2:
        x = _rnd.nextDouble() * _size.width;
        y = _size.height + 30;
        vx = (_rnd.nextDouble() - 0.5) * 80;
        vy = -(40 + _rnd.nextDouble() * 120);
      default:
        x = -30;
        y = _rnd.nextDouble() * _size.height;
        vx = 40 + _rnd.nextDouble() * 120;
        vy = (_rnd.nextDouble() - 0.5) * 80;
    }
    _rocks.add(_Asteroid(
      x: x,
      y: y,
      vx: vx,
      vy: vy,
      r: 16 + _rnd.nextDouble() * 22,
      rot: _rnd.nextDouble() * math.pi * 2,
      spin: (_rnd.nextDouble() - 0.5) * 3,
      verts: _makeVerts(),
    ));
  }

  void _frame(double dt) {
    if (_over || !mounted) return;
    setState(() {
      if (_stars.isEmpty && _size != Size.zero) {
        _stars.addAll(List.generate(60, (_) => Offset(_rnd.nextDouble() * _size.width, _rnd.nextDouble() * _size.height)));
      }
      _alive += dt;
      _score = _alive.floor() * 2;
      _spawnAcc += dt;
      if (_spawnAcc > math.max(0.35, 1.1 - _alive * 0.02)) {
        _spawnAcc = 0;
        _spawnRock();
      }
      _ship = Offset(
        (_ship.dx + _vel.dx * dt / math.max(1, _size.width)).clamp(0.06, 0.94),
        (_ship.dy + _vel.dy * dt / math.max(1, _size.height)).clamp(0.06, 0.94),
      );
      _vel *= math.pow(0.90, dt * 60).toDouble();
      final sx = _ship.dx * _size.width;
      final sy = _ship.dy * _size.height;
      // engine flame particles
      if (_vel.distance > 20) {
        _fx.add(_Particle(
          x: sx,
          y: sy + 12,
          vx: (_rnd.nextDouble() - 0.5) * 40,
          vy: 60 + _rnd.nextDouble() * 40,
          life: 0.25,
          color: const Color(0xFFF97316),
          size: 2.5,
        ));
      }
      for (final a in _rocks) {
        a.x += a.vx * dt;
        a.y += a.vy * dt;
        a.rot += a.spin * dt;
        final d = (Offset(a.x, a.y) - Offset(sx, sy)).distance;
        if (d < a.r + 14) {
          _rocks.remove(a);
          _lives -= 1;
          HapticFeedback.heavyImpact();
          _burst(_fx, sx, sy, _c.first, _rnd, n: 16);
          if (_lives <= 0) {
            unawaited(_finish());
            return;
          }
          break;
        } else if (d < a.r + 42) {
          _score += 1;
        }
      }
      _rocks.removeWhere((a) => a.x < -80 || a.x > _size.width + 80 || a.y < -80 || a.y > _size.height + 80);
      _stepParticles(_fx, dt);
    });
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _ship = const Offset(0.5, 0.7);
      _vel = Offset.zero;
      _score = 0;
      _lives = 3;
      _coins = 0;
      _spawnAcc = 0;
      _alive = 0;
      _over = false;
      _rocks.clear();
      _fx.clear();
    });
    _startLoop();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: '♥ $_lives',
          hint: 'Drag to steer · dodge asteroids',
          child: LayoutBuilder(
            builder: (context, constraints) {
              _size = Size(constraints.maxWidth, constraints.maxHeight);
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onPanUpdate: (d) {
                  setState(() {
                    _vel = Offset(
                      (_vel.dx + d.delta.dx * 18).clamp(-280.0, 280.0),
                      (_vel.dy + d.delta.dy * 18).clamp(-280.0, 280.0),
                    );
                  });
                },
                child: CustomPaint(
                  size: _size,
                  painter: _OrbitDodgePainter(
                    ship: _ship,
                    rocks: _rocks,
                    stars: _stars,
                    colors: _c,
                    particles: _fx,
                    vel: _vel,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _OrbitDodgePainter extends CustomPainter {
  _OrbitDodgePainter({
    required this.ship,
    required this.rocks,
    required this.stars,
    required this.colors,
    required this.particles,
    required this.vel,
  });

  final Offset ship;
  final List<_Asteroid> rocks;
  final List<Offset> stars;
  final List<Color> colors;
  final List<_Particle> particles;
  final Offset vel;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF020617));
    for (final s in stars) {
      canvas.drawCircle(s, 1.2, Paint()..color = Colors.white.withValues(alpha: 0.55));
    }
    for (final a in rocks) {
      final path = Path();
      for (var i = 0; i < a.verts.length; i++) {
        final ang = a.rot + i * math.pi * 2 / a.verts.length;
        final p = Offset(a.x + math.cos(ang) * a.r * a.verts[i], a.y + math.sin(ang) * a.r * a.verts[i]);
        if (i == 0) {
          path.moveTo(p.dx, p.dy);
        } else {
          path.lineTo(p.dx, p.dy);
        }
      }
      path.close();
      canvas.drawPath(path, Paint()..color = const Color(0xFF78716C));
      canvas.drawPath(path, Paint()..color = const Color(0xFFA8A29E)..style = PaintingStyle.stroke..strokeWidth = 1.5);
    }
    final c = Offset(ship.dx * size.width, ship.dy * size.height);
    final ang = math.atan2(vel.dy, vel.dx);
    canvas.save();
    canvas.translate(c.dx, c.dy);
    if (vel.distance > 8) canvas.rotate(ang + math.pi / 2);
    final flame = Path()
      ..moveTo(-6, 12)
      ..lineTo(0, 22 + (vel.distance / 40).clamp(0, 10))
      ..lineTo(6, 12);
    canvas.drawPath(flame, Paint()..color = const Color(0xFFF97316).withValues(alpha: 0.85));
    final shipPath = Path()
      ..moveTo(0, -16)
      ..lineTo(12, 14)
      ..lineTo(0, 8)
      ..lineTo(-12, 14)
      ..close();
    canvas.drawPath(
      shipPath,
      Paint()
        ..shader = ui.Gradient.linear(const Offset(0, -16), const Offset(0, 14), [colors.first, colors.last]),
    );
    canvas.drawCircle(const Offset(0, -2), 2.5, Paint()..color = const Color(0xFF67E8F9));
    canvas.restore();
    _paintParticles(canvas, particles);
  }

  @override
  bool shouldRepaint(covariant _OrbitDodgePainter old) => true;
}

// ═══════════════════════════════════════════════════════════════════════════
// 9. Cascade Match — match-3 with gravity
// ═══════════════════════════════════════════════════════════════════════════

class NgmyVaultCascadeMatchGame extends StatefulWidget {
  const NgmyVaultCascadeMatchGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultCascadeMatchGame> createState() => _CascadeMatchState();
}

class _CascadeMatchState extends State<NgmyVaultCascadeMatchGame> {
  static const _n = 7;
  static const _gemColors = [
    Color(0xFFEF4444),
    Color(0xFF3B82F6),
    Color(0xFF22C55E),
    Color(0xFFFBBF24),
    Color(0xFFA855F7),
    Color(0xFF06B6D4),
  ];

  final _rnd = math.Random();
  late List<List<int>> _grid;
  int? _selR;
  int? _selC;
  int _score = 0;
  int _moves = 40;
  int _combo = 0;
  int _coins = 0;
  bool _over = false;
  bool _busy = false;
  final List<_Particle> _fx = [];
  Timer? _fxTick;

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _grid = List.generate(_n, (_) => List.generate(_n, (_) => _rnd.nextInt(_gemColors.length)));
    _resolveInitial();
    _fxTick = Timer.periodic(const Duration(milliseconds: 16), (_) {
      if (!mounted || _fx.isEmpty) return;
      setState(() => _stepParticles(_fx, 0.016));
    });
  }

  @override
  void dispose() {
    _fxTick?.cancel();
    super.dispose();
  }

  void _resolveInitial() {
    for (var guard = 0; guard < 40; guard++) {
      final m = _findMatches();
      if (m.isEmpty) break;
      for (final cell in m) {
        _grid[cell.$1][cell.$2] = _rnd.nextInt(_gemColors.length);
      }
    }
  }

  Set<(int, int)> _findMatches() {
    final hits = <(int, int)>{};
    for (var r = 0; r < _n; r++) {
      var run = 1;
      for (var c = 1; c < _n; c++) {
        if (_grid[r][c] == _grid[r][c - 1] && _grid[r][c] >= 0) {
          run++;
        } else {
          if (run >= 3) {
            for (var k = 0; k < run; k++) {
              hits.add((r, c - 1 - k));
            }
          }
          run = 1;
        }
      }
      if (run >= 3) {
        for (var k = 0; k < run; k++) {
          hits.add((r, _n - 1 - k));
        }
      }
    }
    for (var c = 0; c < _n; c++) {
      var run = 1;
      for (var r = 1; r < _n; r++) {
        if (_grid[r][c] == _grid[r - 1][c] && _grid[r][c] >= 0) {
          run++;
        } else {
          if (run >= 3) {
            for (var k = 0; k < run; k++) {
              hits.add((r - 1 - k, c));
            }
          }
          run = 1;
        }
      }
      if (run >= 3) {
        for (var k = 0; k < run; k++) {
          hits.add((_n - 1 - k, c));
        }
      }
    }
    return hits;
  }

  Future<void> _cascadeLoop(double cell, Offset origin) async {
    _combo = 0;
    while (mounted && !_over) {
      final matches = _findMatches();
      if (matches.isEmpty) break;
      _combo += 1;
      _score += matches.length * 10 * _combo;
      HapticFeedback.mediumImpact();
      for (final m in matches) {
        final gx = origin.dx + (m.$2 + 0.5) * cell;
        final gy = origin.dy + (m.$1 + 0.5) * cell;
        _burst(_fx, gx, gy, _gemColors[_grid[m.$1][m.$2].clamp(0, _gemColors.length - 1)], _rnd, n: 8);
        _grid[m.$1][m.$2] = -1;
      }
      setState(() {});
      await Future<void>.delayed(const Duration(milliseconds: 120));
      if (!mounted) return;
      for (var c = 0; c < _n; c++) {
        var write = _n - 1;
        for (var r = _n - 1; r >= 0; r--) {
          if (_grid[r][c] >= 0) {
            _grid[write][c] = _grid[r][c];
            write--;
          }
        }
        while (write >= 0) {
          _grid[write][c] = _rnd.nextInt(_gemColors.length);
          write--;
        }
      }
      setState(() {});
      await Future<void>.delayed(const Duration(milliseconds: 100));
    }
    _combo = 0;
  }

  Future<void> _tapCell(int r, int c, double cell, Offset origin) async {
    if (_busy || _over || _moves <= 0) return;
    if (_selR == null) {
      setState(() {
        _selR = r;
        _selC = c;
      });
      return;
    }
    final sr = _selR!;
    final sc = _selC!;
    final adj = (r - sr).abs() + (c - sc).abs() == 1;
    if (!adj) {
      setState(() {
        _selR = r;
        _selC = c;
      });
      return;
    }
    setState(() {
      _busy = true;
      final tmp = _grid[sr][sc];
      _grid[sr][sc] = _grid[r][c];
      _grid[r][c] = tmp;
      _selR = null;
      _selC = null;
      _moves -= 1;
    });
    HapticFeedback.selectionClick();
    final matches = _findMatches();
    if (matches.isEmpty) {
      await Future<void>.delayed(const Duration(milliseconds: 140));
      if (!mounted) return;
      setState(() {
        final tmp = _grid[sr][sc];
        _grid[sr][sc] = _grid[r][c];
        _grid[r][c] = tmp;
        _busy = false;
      });
    } else {
      await _cascadeLoop(cell, origin);
      if (!mounted) return;
      setState(() => _busy = false);
    }
    if (_moves <= 0) await _finish();
  }

  Future<void> _finish() async {
    if (_over) return;
    setState(() => _over = true);
    _coins = await _persistPremiumRun(gameId: widget.game.id, score: _score);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _grid = List.generate(_n, (_) => List.generate(_n, (_) => _rnd.nextInt(_gemColors.length)));
      _resolveInitial();
      _selR = null;
      _selC = null;
      _score = 0;
      _moves = 40;
      _combo = 0;
      _coins = 0;
      _over = false;
      _busy = false;
      _fx.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _premiumChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          score: _score,
          rightLabel: 'MOVES $_moves',
          hint: 'Tap two adjacent gems to swap · match 3+',
          child: LayoutBuilder(
            builder: (context, constraints) {
              final side = math.min(constraints.maxWidth, constraints.maxHeight) - 16;
              final cell = side / _n;
              final origin = Offset((constraints.maxWidth - side) / 2, (constraints.maxHeight - side) / 2);
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapDown: (d) {
                  final lx = d.localPosition.dx - origin.dx;
                  final ly = d.localPosition.dy - origin.dy;
                  if (lx < 0 || ly < 0 || lx >= side || ly >= side) return;
                  final c = (lx / cell).floor().clamp(0, _n - 1);
                  final r = (ly / cell).floor().clamp(0, _n - 1);
                  unawaited(_tapCell(r, c, cell, origin));
                },
                child: CustomPaint(
                  size: Size(constraints.maxWidth, constraints.maxHeight),
                  painter: _CascadeMatchPainter(
                    grid: _grid,
                    selR: _selR,
                    selC: _selC,
                    origin: origin,
                    cell: cell,
                    gemColors: _gemColors,
                    particles: _fx,
                    accent: _c.first,
                  ),
                ),
              );
            },
          ),
        ),
        if (_over)
          _PremiumEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

class _CascadeMatchPainter extends CustomPainter {
  _CascadeMatchPainter({
    required this.grid,
    required this.selR,
    required this.selC,
    required this.origin,
    required this.cell,
    required this.gemColors,
    required this.particles,
    required this.accent,
  });

  final List<List<int>> grid;
  final int? selR, selC;
  final Offset origin;
  final double cell;
  final List<Color> gemColors;
  final List<_Particle> particles;
  final Color accent;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = ui.Gradient.linear(Offset.zero, Offset(0, size.height), const [Color(0xFF1E1B4B), Color(0xFF0F172A)]),
    );
    final board = RRect.fromRectAndRadius(
      Rect.fromLTWH(origin.dx - 6, origin.dy - 6, cell * grid.length + 12, cell * grid.length + 12),
      const Radius.circular(16),
    );
    canvas.drawRRect(board, Paint()..color = Colors.black.withValues(alpha: 0.35));
    for (var r = 0; r < grid.length; r++) {
      for (var c = 0; c < grid[r].length; c++) {
        final id = grid[r][c];
        if (id < 0) continue;
        final center = Offset(origin.dx + (c + 0.5) * cell, origin.dy + (r + 0.5) * cell);
        final color = gemColors[id % gemColors.length];
        final selected = selR == r && selC == c;
        if (selected) {
          canvas.drawCircle(center, cell * 0.42, Paint()..color = accent.withValues(alpha: 0.35)..maskFilter = const ui.MaskFilter.blur(ui.BlurStyle.normal, 8));
        }
        final gem = Path()
          ..moveTo(center.dx, center.dy - cell * 0.32)
          ..lineTo(center.dx + cell * 0.28, center.dy)
          ..lineTo(center.dx, center.dy + cell * 0.32)
          ..lineTo(center.dx - cell * 0.28, center.dy)
          ..close();
        canvas.drawPath(
          gem,
          Paint()
            ..shader = ui.Gradient.linear(
              center.translate(-cell * 0.2, -cell * 0.2),
              center.translate(cell * 0.2, cell * 0.2),
              [color.withValues(alpha: 0.95), color.withValues(alpha: 0.55)],
            ),
        );
        canvas.drawPath(
          Path()
            ..moveTo(center.dx, center.dy - cell * 0.22)
            ..lineTo(center.dx + cell * 0.12, center.dy - cell * 0.04)
            ..lineTo(center.dx, center.dy),
          Paint()..color = Colors.white.withValues(alpha: 0.45),
        );
      }
    }
    _paintParticles(canvas, particles);
  }

  @override
  bool shouldRepaint(covariant _CascadeMatchPainter old) => true;
}
