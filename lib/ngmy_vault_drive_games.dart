import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// One Vault driving title — redesigned car, road motion, and steering wheel.
class NgmyVaultStreetRacerGame extends StatefulWidget {
  const NgmyVaultStreetRacerGame({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultStreetRacerGame> createState() => _StreetRacerState();
}

class _StreetRacerState extends State<NgmyVaultStreetRacerGame> {
  static const _maxWheel = 2.4;
  static const _dt = 1 / 60.0;

  final _rnd = math.Random();
  Timer? _loop;

  double _wheel = 0;
  bool _dragging = false;
  bool _gas = false;
  bool _brake = false;

  double _speed = 0; // 0..1 normalized feel, displayed as km/h
  double _playerX = 0; // -1..1
  double _yaw = 0; // visual car lean
  double _roadZ = 0;
  double _curve = 0;
  double _curveTarget = 0;
  double _rumble = 0;
  double _shake = 0;

  int _score = 0;
  int _lives = 3;
  int _coins = 0;
  bool _over = false;
  bool _hitLock = false;

  final List<_Npc> _cars = [];
  final List<_Prop> _props = [];
  final List<_Spark> _sparks = [];

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _seedProps();
    _loop = Timer.periodic(const Duration(milliseconds: 16), (_) => _tick());
  }

  @override
  void dispose() {
    _loop?.cancel();
    super.dispose();
  }

  void _seedProps() {
    for (var i = 0; i < 28; i++) {
      _props.add(
        _Prop(
          side: i.isEven ? -1.0 : 1.0,
          z: i / 28.0,
          kind: i % 3 == 0 ? 1 : 0,
        ),
      );
    }
  }

  void _tick() {
    if (_over || !mounted) return;

    if (!_dragging) {
      _wheel *= 0.88;
      if (_wheel.abs() < 0.008) _wheel = 0;
    }
    final steer = (_wheel / _maxWheel).clamp(-1.0, 1.0);

    // Acceleration feels punchy
    if (_brake) {
      _speed = math.max(0, _speed - 1.6 * _dt);
    } else if (_gas) {
      _speed = math.min(1.0, _speed + (0.55 + (1 - _speed) * 0.7) * _dt);
    } else {
      _speed = math.max(0, _speed - 0.35 * _dt);
    }

    if (_rnd.nextDouble() < 0.01) {
      _curveTarget = (_rnd.nextDouble() * 2 - 1) * 0.85;
    }
    _curve += (_curveTarget - _curve) * 0.03;

    final turn = steer * (0.9 + _speed * 1.8);
    _playerX = (_playerX + turn * _dt - _curve * 0.5 * _speed * _dt).clamp(-1.2, 1.2);
    _yaw += (steer * 0.35 - _yaw) * 0.18;

    // Road scroll — this is what sells “moving”
    final scroll = 0.35 + _speed * 2.8;
    _roadZ += scroll * _dt;

    // Props rush toward camera
    for (final p in _props) {
      p.z -= scroll * _dt * 0.55;
      if (p.z < 0) {
        p.z += 1.0;
        p.side = _rnd.nextBool() ? -1.0 : 1.0;
        p.kind = _rnd.nextInt(3);
      }
    }

    // Spawn traffic
    if (_speed > 0.12 && _rnd.nextDouble() < 0.035 + _speed * 0.04) {
      _cars.add(
        _Npc(
          lane: (_rnd.nextInt(3) - 1) * 0.55,
          z: 0.98,
          color: [
            const Color(0xFF3B82F6),
            const Color(0xFF22C55E),
            const Color(0xFFF97316),
            const Color(0xFFE2E8F0),
            const Color(0xFFA855F7),
            const Color(0xFFEF4444),
          ][_rnd.nextInt(6)],
          bodyStyle: _rnd.nextInt(3),
        ),
      );
    }

    for (final car in _cars) {
      car.z -= (_speed * 1.15 - 0.25) * _dt * 0.7;
    }
    _cars.removeWhere((c) => c.z < 0.02 || c.z > 1.05);

    // Collisions near bumper
    for (final car in _cars.toList()) {
      if (car.z > 0.1 && car.z < 0.28) {
        if ((car.lane - _playerX).abs() < 0.38) {
          _crash();
          _cars.remove(car);
        }
      }
    }

    // Off road
    if (_playerX.abs() > 0.95 && _speed > 0.15) {
      _speed *= 0.97;
      _rumble = 1;
      if (_rnd.nextDouble() < 0.02) _crash();
    } else {
      _rumble *= 0.9;
    }

    // Sparks / exhaust feel
    if (_speed > 0.2 && _rnd.nextDouble() < _speed * 0.4) {
      _sparks.add(_Spark(x: _playerX * 0.2 + (_rnd.nextDouble() - 0.5) * 0.08, life: 0.05 + _rnd.nextDouble() * 0.08));
    }
    for (final s in _sparks) {
      s.life -= _dt;
      s.y += _dt * 0.4;
    }
    _sparks.removeWhere((s) => s.life <= 0);

    if (_speed > 0.05) {
      _score += (1 + _speed * 4).round();
    }
    if (_shake > 0) _shake = math.max(0, _shake - _dt * 3);

    setState(() {});
  }

  void _crash() {
    if (_hitLock || _over) return;
    _hitLock = true;
    _lives -= 1;
    _speed *= 0.25;
    _shake = 1;
    HapticFeedback.heavyImpact();
    Future<void>.delayed(const Duration(milliseconds: 700), () => _hitLock = false);
    if (_lives <= 0) unawaited(_finish());
  }

  Future<void> _finish() async {
    if (_over) return;
    _loop?.cancel();
    _coins = math.max(1, _score ~/ 12);
    await VaultProgressStore.saveRun(
      gameId: widget.game.id,
      level: 1,
      score: _score,
      coinsEarned: _coins,
    );
    if (mounted) setState(() => _over = true);
  }

  void _restart() {
    setState(() {
      _wheel = 0;
      _gas = false;
      _brake = false;
      _speed = 0;
      _playerX = 0;
      _yaw = 0;
      _roadZ = 0;
      _curve = 0;
      _curveTarget = 0;
      _score = 0;
      _lives = 3;
      _coins = 0;
      _over = false;
      _hitLock = false;
      _shake = 0;
      _cars.clear();
      _sparks.clear();
      _props.clear();
      _seedProps();
    });
    _loop?.cancel();
    _loop = Timer.periodic(const Duration(milliseconds: 16), (_) => _tick());
  }

  void _panWheel(DragUpdateDetails d, double size) {
    _dragging = true;
    // Circular-ish: horizontal + vertical around center
    final add = (d.delta.dx - d.delta.dy * 0.15) / (size * 0.38);
    setState(() => _wheel = (_wheel + add * 1.5).clamp(-_maxWheel, _maxWheel));
  }

  @override
  Widget build(BuildContext context) {
    final kmh = (20 + _speed * 200).round();
    final shake = math.sin(_shake * 50) * _shake * 10 + math.sin(_rumble * 30) * _rumble * 2;

    return Scaffold(
      backgroundColor: const Color(0xFF020617),
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                _header(kmh),
                Expanded(
                  flex: 64,
                  child: Transform.translate(
                    offset: Offset(shake, 0),
                    child: CustomPaint(
                      painter: _StreetWorldPainter(
                        playerX: _playerX,
                        yaw: _yaw,
                        roadZ: _roadZ,
                        curve: _curve,
                        speed: _speed,
                        cars: _cars,
                        props: _props,
                        sparks: _sparks,
                        carColor: _c.first,
                        accent: _c.length > 1 ? _c[1] : _c.first,
                        hit: _hitLock,
                      ),
                      child: const SizedBox.expand(),
                    ),
                  ),
                ),
                Expanded(flex: 36, child: _controls()),
              ],
            ),
            if (_over) _endCard(),
          ],
        ),
      ),
    );
  }

  Widget _header(int kmh) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 2, 14, 2),
      child: Row(
        children: [
          IconButton(
            onPressed: () => Navigator.pop(context),
            icon: const Icon(Icons.close_rounded, color: Colors.white70),
          ),
          Expanded(
            child: Column(
              children: [
                Text(
                  'STREET RACER',
                  style: TextStyle(color: _c.first, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 13),
                ),
                const SizedBox(height: 4),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(3, (i) {
                    final on = i < _lives;
                    return Container(
                      margin: const EdgeInsets.symmetric(horizontal: 3),
                      width: 9,
                      height: 9,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: on ? const Color(0xFFEF4444) : Colors.white24,
                      ),
                    );
                  }),
                ),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text('SCORE $_score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
              Text('$kmh km/h', style: TextStyle(color: _c.first, fontWeight: FontWeight.w900, fontSize: 18)),
            ],
          ),
        ],
      ),
    );
  }

  Widget _controls() {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF0F172A), Color(0xFF020617)],
        ),
      ),
      child: Column(
        children: [
          Container(height: 3, color: _c.first.withValues(alpha: 0.4)),
          const Padding(
            padding: EdgeInsets.only(top: 6),
            child: Text('Drag the wheel to steer · hold GAS', style: TextStyle(color: Colors.white38, fontSize: 11)),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(14, 6, 14, 10),
              child: Row(
                children: [
                  _pedal('BRAKE', const Color(0xFFEF4444), _brake, () => setState(() => _brake = true), () => setState(() => _brake = false)),
                  const SizedBox(width: 10),
                  Expanded(
                    child: LayoutBuilder(
                      builder: (context, box) {
                        final s = math.min(box.maxWidth, box.maxHeight).clamp(128.0, 176.0);
                        return Center(
                          child: GestureDetector(
                            onPanStart: (_) => _dragging = true,
                            onPanUpdate: (d) => _panWheel(d, s),
                            onPanEnd: (_) => setState(() => _dragging = false),
                            onPanCancel: () => setState(() => _dragging = false),
                            child: Transform.rotate(
                              angle: _wheel,
                              child: CustomPaint(
                                size: Size(s, s),
                                painter: _RealWheelPainter(accent: _c.first),
                              ),
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                  const SizedBox(width: 10),
                  _pedal('GAS', const Color(0xFF22C55E), _gas, () => setState(() => _gas = true), () => setState(() => _gas = false)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _pedal(String label, Color color, bool on, VoidCallback down, VoidCallback up) {
    return GestureDetector(
      onTapDown: (_) => down(),
      onTapUp: (_) => up(),
      onTapCancel: up,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 70),
        width: 62,
        height: 118,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: on ? [color, color.withValues(alpha: 0.65)] : [color.withValues(alpha: 0.4), color.withValues(alpha: 0.18)],
          ),
          border: Border.all(color: color, width: 2),
          boxShadow: on ? [BoxShadow(color: color.withValues(alpha: 0.5), blurRadius: 18)] : null,
        ),
        alignment: Alignment.center,
        child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
      ),
    );
  }

  Widget _endCard() {
    return Container(
      color: Colors.black.withValues(alpha: 0.8),
      alignment: Alignment.center,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 34),
        padding: const EdgeInsets.all(22),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          color: const Color(0xFF0B1220),
          border: Border.all(color: _c.first.withValues(alpha: 0.6)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('CRASHED OUT', style: TextStyle(color: _c.first, fontWeight: FontWeight.w900, fontSize: 18)),
            const SizedBox(height: 8),
            Text('Score $_score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
            Text('+$_coins coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w700)),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
                    child: const Text('Exit'),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: FilledButton(
                    onPressed: _restart,
                    style: FilledButton.styleFrom(backgroundColor: _c.first),
                    child: const Text('Race again'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _Npc {
  _Npc({required this.lane, required this.z, required this.color, required this.bodyStyle});
  double lane;
  double z;
  Color color;
  int bodyStyle;
}

class _Prop {
  _Prop({required this.side, required this.z, required this.kind});
  double side;
  double z;
  int kind;
}

class _Spark {
  _Spark({required this.x, required this.life});
  double x;
  double y = 0;
  double life;
}

// ── Steering wheel ───────────────────────────────────────────────────────────

class _RealWheelPainter extends CustomPainter {
  _RealWheelPainter({required this.accent});
  final Color accent;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.width / 2;

    // Soft shadow
    canvas.drawCircle(c.translate(0, 4), r * 0.9, Paint()..color = Colors.black.withValues(alpha: 0.35));

    // Leather outer rim
    final rim = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = r * 0.2
      ..color = const Color(0xFF0F172A);
    canvas.drawCircle(c, r * 0.78, rim);

    // Grip texture ring
    canvas.drawCircle(
      c,
      r * 0.78,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = r * 0.07
        ..color = const Color(0xFF1E293B),
    );

    // Red accent stripe (top)
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: r * 0.78),
      -math.pi / 2 - 0.35,
      0.7,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = r * 0.055
        ..strokeCap = StrokeCap.round
        ..color = const Color(0xFFEF4444),
    );

    // Chrome inner edge
    canvas.drawCircle(
      c,
      r * 0.66,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.5
        ..color = const Color(0xFF94A3B8),
    );

    // Three spokes
    final spoke = Paint()
      ..color = const Color(0xFF334155)
      ..strokeWidth = r * 0.13
      ..strokeCap = StrokeCap.round;
    final spokeHi = Paint()
      ..color = const Color(0xFF64748B)
      ..strokeWidth = r * 0.04
      ..strokeCap = StrokeCap.round;
    for (var i = 0; i < 3; i++) {
      final a = -math.pi / 2 + i * (2 * math.pi / 3) + 0.35;
      final inner = Offset(c.dx + math.cos(a) * r * 0.16, c.dy + math.sin(a) * r * 0.16);
      final outer = Offset(c.dx + math.cos(a) * r * 0.62, c.dy + math.sin(a) * r * 0.62);
      canvas.drawLine(inner, outer, spoke);
      canvas.drawLine(inner, outer, spokeHi);
    }

    // Hub
    canvas.drawCircle(c, r * 0.22, Paint()..color = const Color(0xFF0F172A));
    canvas.drawCircle(
      c,
      r * 0.22,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = accent,
    );
    canvas.drawCircle(c, r * 0.1, Paint()..color = accent);
    canvas.drawCircle(c, r * 0.04, Paint()..color = Colors.white70);
  }

  @override
  bool shouldRepaint(covariant _RealWheelPainter old) => old.accent != accent;
}

// ── World ────────────────────────────────────────────────────────────────────

class _StreetWorldPainter extends CustomPainter {
  _StreetWorldPainter({
    required this.playerX,
    required this.yaw,
    required this.roadZ,
    required this.curve,
    required this.speed,
    required this.cars,
    required this.props,
    required this.sparks,
    required this.carColor,
    required this.accent,
    required this.hit,
  });

  final double playerX;
  final double yaw;
  final double roadZ;
  final double curve;
  final double speed;
  final List<_Npc> cars;
  final List<_Prop> props;
  final List<_Spark> sparks;
  final Color carColor;
  final Color accent;
  final bool hit;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final horizon = h * 0.36;

    // Sky
    canvas.drawRect(
      Rect.fromLTWH(0, 0, w, horizon),
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF38BDF8), Color(0xFFE0F2FE), Color(0xFFFEF9C3)],
        ).createShader(Rect.fromLTWH(0, 0, w, horizon)),
    );

    // Sun
    canvas.drawCircle(Offset(w * 0.82, horizon * 0.22), 26, Paint()..color = const Color(0xFFFFF7ED));
    canvas.drawCircle(Offset(w * 0.82, horizon * 0.22), 18, Paint()..color = const Color(0xFFFDE68A));

    // City blocks on horizon
    var bx = 0.0;
    while (bx < w) {
      final bw = 22.0 + (bx * 13 % 40);
      final bh = 18.0 + (bx * 7 % 55);
      canvas.drawRect(
        Rect.fromLTRB(bx, horizon - bh, bx + bw, horizon),
        Paint()..color = Color.lerp(const Color(0xFF64748B), const Color(0xFF334155), (bx / w))!,
      );
      bx += bw + 3;
    }

    // Ground + perspective road
    const rows = 56;
    for (var i = 0; i < rows; i++) {
      final t0 = i / rows;
      final t1 = (i + 1) / rows;
      final y0 = horizon + (h - horizon) * (t0 * t0);
      final y1 = horizon + (h - horizon) * (t1 * t1);
      final mid = (t0 + t1) * 0.5;
      final depth = mid * mid;
      final roadW = w * (0.06 + 0.78 * depth);
      final shift = curve * (1 - mid) * w * 0.5;
      final cx = w * 0.5 + shift;

      // roadside
      final sideColor = Color.lerp(const Color(0xFF4B5563), const Color(0xFF9CA3AF), mid)!;
      canvas.drawRect(Rect.fromLTRB(0, y0, w, y1), Paint()..color = sideColor);

      final left = cx - roadW / 2;
      final right = cx + roadW / 2;

      // asphalt with slight stripe variation for motion
      final asphalt = Color.lerp(const Color(0xFF1F2937), const Color(0xFF374151), ((roadZ * 8 + mid * 12) % 1.0) < 0.5 ? 0.0 : 0.15)!;
      canvas.drawRect(Rect.fromLTRB(left, y0, right, y1), Paint()..color = asphalt);

      // curb
      final ew = math.max(2.0, 7 * depth);
      canvas.drawRect(Rect.fromLTRB(left, y0, left + ew, y1), Paint()..color = const Color(0xFFF8FAFC));
      canvas.drawRect(Rect.fromLTRB(right - ew, y0, right, y1), Paint()..color = const Color(0xFFF8FAFC));

      // dashed center — scrolls with roadZ so it clearly “moves”
      final phase = (roadZ * 3.2 + mid * 18) % 1.0;
      if (phase < 0.5) {
        canvas.drawRect(
          Rect.fromCenter(center: Offset(cx, (y0 + y1) / 2), width: math.max(2.0, 6 * depth), height: math.max(1.0, y1 - y0)),
          Paint()..color = const Color(0xFFFBBF24),
        );
      }

      // lane markers
      for (final lane in [-0.33, 0.33]) {
        final lx = cx + roadW * lane * 0.5;
        final lp = (roadZ * 2.6 + mid * 14 + lane) % 1.0;
        if (lp < 0.4) {
          canvas.drawRect(
            Rect.fromCenter(center: Offset(lx, (y0 + y1) / 2), width: math.max(1.5, 3.5 * depth), height: math.max(1.0, y1 - y0)),
            Paint()..color = const Color(0xFFE2E8F0).withValues(alpha: 0.7),
          );
        }
      }
    }

    // Roadside props (trees / lamps) — rush past = motion cue
    final propSorted = [...props]..sort((a, b) => b.z.compareTo(a.z));
    for (final p in propSorted) {
      _drawProp(canvas, size, horizon, p);
    }

    // Traffic far → near
    final sorted = [...cars]..sort((a, b) => b.z.compareTo(a.z));
    for (final car in sorted) {
      _drawTrafficCar(canvas, size, horizon, car);
    }

    // Exhaust sparks
    for (final s in sparks) {
      final x = w * 0.5 + playerX * w * 0.28 + s.x * w;
      final y = h * 0.88 + s.y * h * 0.1;
      canvas.drawCircle(Offset(x, y), 2.5, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: s.life));
    }

    // Player car
    _drawPlayerCar(canvas, size);

    // Speed lines
    if (speed > 0.35) {
      final n = (speed * 18).round();
      for (var i = 0; i < n; i++) {
        final x = (i * 97 + roadZ * 120) % w;
        final y = horizon + 20 + (i * 53 % (h - horizon - 40));
        canvas.drawLine(
          Offset(x, y),
          Offset(x, y + 10 + speed * 24),
          Paint()
            ..color = Colors.white.withValues(alpha: 0.08 + speed * 0.1)
            ..strokeWidth = 1.5,
        );
      }
    }

    if (hit) {
      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0x55EF4444));
    }
  }

  void _drawProp(Canvas canvas, Size size, double horizon, _Prop p) {
    final w = size.width;
    final h = size.height;
    final depth = (1 - p.z);
    final persp = depth * depth;
    if (persp < 0.02) return;
    final y = horizon + (h - horizon) * persp;
    final roadW = w * (0.06 + 0.78 * persp);
    final shift = curve * p.z * w * 0.5;
    final cx = w * 0.5 + shift + p.side * (roadW * 0.5 + 18 + 40 * persp);
    final scale = 8 + 55 * persp;

    if (p.kind == 0) {
      // tree
      canvas.drawRect(Rect.fromCenter(center: Offset(cx, y - scale * 0.25), width: scale * 0.12, height: scale * 0.45), Paint()..color = const Color(0xFF78350F));
      canvas.drawCircle(Offset(cx, y - scale * 0.55), scale * 0.35, Paint()..color = const Color(0xFF166534));
      canvas.drawCircle(Offset(cx - scale * 0.12, y - scale * 0.45), scale * 0.22, Paint()..color = const Color(0xFF15803D));
    } else if (p.kind == 1) {
      // lamp
      canvas.drawRect(Rect.fromCenter(center: Offset(cx, y - scale * 0.4), width: scale * 0.06, height: scale * 0.8), Paint()..color = const Color(0xFF334155));
      canvas.drawCircle(Offset(cx, y - scale * 0.85), scale * 0.1, Paint()..color = const Color(0xFFFDE68A));
    } else {
      // barrier
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx, y - scale * 0.15), width: scale * 0.35, height: scale * 0.25), const Radius.circular(3)),
        Paint()..color = const Color(0xFFF97316),
      );
    }
  }

  void _drawTrafficCar(Canvas canvas, Size size, double horizon, _Npc car) {
    final w = size.width;
    final h = size.height;
    final depth = (1 - car.z);
    final persp = depth * depth;
    final y = horizon + (h - horizon) * persp;
    final roadW = w * (0.06 + 0.78 * persp);
    final shift = curve * car.z * w * 0.5;
    final cx = w * 0.5 + shift + car.lane * roadW * 0.38;
    final carW = roadW * 0.28;
    final carH = carW * 0.55;
    _paintCarBody(canvas, Offset(cx, y - carH * 0.15), carW, carH, car.color, 0, small: true);
  }

  void _drawPlayerCar(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final cx = w * 0.5 + playerX * w * 0.30;
    final cy = h * 0.86;
    final carW = w * 0.42;
    final carH = h * 0.26;

    canvas.save();
    canvas.translate(cx, cy);
    canvas.rotate(yaw * 0.25);
    // shadow
    canvas.drawOval(
      Rect.fromCenter(center: const Offset(0, 18), width: carW * 0.92, height: 22),
      Paint()..color = Colors.black.withValues(alpha: 0.4),
    );
    _paintCarBody(canvas, Offset.zero, carW, carH, carColor, roadZ * 14, small: false);
    canvas.restore();
  }

  /// Draws a rear 3/4 sports car that reads as a car (body, cabin, lights, wheels).
  void _paintCarBody(Canvas canvas, Offset center, double carW, double carH, Color color, double wheelSpin, {required bool small}) {
    final cx = center.dx;
    final cy = center.dy;

    // Lower chassis
    final chassis = Path()
      ..moveTo(cx - carW * 0.48, cy + carH * 0.18)
      ..lineTo(cx - carW * 0.42, cy - carH * 0.05)
      ..lineTo(cx - carW * 0.28, cy - carH * 0.22)
      ..lineTo(cx + carW * 0.28, cy - carH * 0.22)
      ..lineTo(cx + carW * 0.42, cy - carH * 0.05)
      ..lineTo(cx + carW * 0.48, cy + carH * 0.18)
      ..lineTo(cx + carW * 0.40, cy + carH * 0.32)
      ..lineTo(cx - carW * 0.40, cy + carH * 0.32)
      ..close();

    canvas.drawPath(
      chassis,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            Color.lerp(color, Colors.white, 0.35)!,
            color,
            Color.lerp(color, Colors.black, 0.35)!,
          ],
        ).createShader(Rect.fromCenter(center: Offset(cx, cy), width: carW, height: carH)),
    );

    // Cabin / rear windshield
    final cabin = Path()
      ..moveTo(cx - carW * 0.26, cy - carH * 0.18)
      ..lineTo(cx - carW * 0.18, cy - carH * 0.48)
      ..lineTo(cx + carW * 0.18, cy - carH * 0.48)
      ..lineTo(cx + carW * 0.26, cy - carH * 0.18)
      ..close();
    canvas.drawPath(
      cabin,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            const Color(0xFF7DD3FC).withValues(alpha: 0.85),
            const Color(0xFF0EA5E9).withValues(alpha: 0.55),
            const Color(0xFF0369A1).withValues(alpha: 0.7),
          ],
        ).createShader(Rect.fromCenter(center: Offset(cx, cy - carH * 0.3), width: carW * 0.5, height: carH * 0.4)),
    );

    // Roof highlight
    canvas.drawLine(
      Offset(cx - carW * 0.12, cy - carH * 0.46),
      Offset(cx + carW * 0.12, cy - carH * 0.46),
      Paint()
        ..color = Colors.white.withValues(alpha: 0.45)
        ..strokeWidth = 2,
    );

    // Spoiler
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(cx, cy - carH * 0.08), width: carW * 0.55, height: carH * 0.06),
        const Radius.circular(2),
      ),
      Paint()..color = Color.lerp(color, Colors.black, 0.4)!,
    );

    // Taillights
    final lightPaint = Paint()..color = const Color(0xFFEF4444);
    final glow = Paint()
      ..color = const Color(0x88EF4444)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6);
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx - carW * 0.30, cy + carH * 0.05), width: carW * 0.14, height: carH * 0.1), const Radius.circular(3)),
      glow,
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx + carW * 0.30, cy + carH * 0.05), width: carW * 0.14, height: carH * 0.1), const Radius.circular(3)),
      glow,
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx - carW * 0.30, cy + carH * 0.05), width: carW * 0.12, height: carH * 0.08), const Radius.circular(2)),
      lightPaint,
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx + carW * 0.30, cy + carH * 0.05), width: carW * 0.12, height: carH * 0.08), const Radius.circular(2)),
      lightPaint,
    );

    // Exhaust
    canvas.drawCircle(Offset(cx - carW * 0.12, cy + carH * 0.28), carW * 0.025, Paint()..color = const Color(0xFF94A3B8));
    canvas.drawCircle(Offset(cx + carW * 0.12, cy + carH * 0.28), carW * 0.025, Paint()..color = const Color(0xFF94A3B8));

    // Wheels (rear)
    _wheel(canvas, Offset(cx - carW * 0.34, cy + carH * 0.28), carW * 0.09, wheelSpin);
    _wheel(canvas, Offset(cx + carW * 0.34, cy + carH * 0.28), carW * 0.09, wheelSpin);

    if (!small) {
      // Side mirrors
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx - carW * 0.36, cy - carH * 0.2), width: carW * 0.07, height: carH * 0.06), const Radius.circular(2)),
        Paint()..color = const Color(0xFF0F172A),
      );
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx + carW * 0.36, cy - carH * 0.2), width: carW * 0.07, height: carH * 0.06), const Radius.circular(2)),
        Paint()..color = const Color(0xFF0F172A),
      );
      // Plate
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(cx, cy + carH * 0.18), width: carW * 0.22, height: carH * 0.08), const Radius.circular(2)),
        Paint()..color = const Color(0xFFF8FAFC),
      );
    }
  }

  void _wheel(Canvas canvas, Offset c, double r, double spin) {
    canvas.drawCircle(c, r, Paint()..color = const Color(0xFF0F172A));
    canvas.drawCircle(c, r * 0.55, Paint()..color = const Color(0xFF475569));
    canvas.drawCircle(c, r * 0.2, Paint()..color = const Color(0xFF94A3B8));
    // spinning spoke mark
    final a = spin;
    canvas.drawLine(
      Offset(c.dx + math.cos(a) * r * 0.15, c.dy + math.sin(a) * r * 0.15),
      Offset(c.dx + math.cos(a) * r * 0.5, c.dy + math.sin(a) * r * 0.5),
      Paint()
        ..color = Colors.white54
        ..strokeWidth = 1.5,
    );
  }

  @override
  bool shouldRepaint(covariant _StreetWorldPainter old) => true;
}

Widget ngmyVaultDriveGameScreen(VaultGameDef game) {
  if (game.id == 'street_racer') {
    return NgmyVaultStreetRacerGame(game: game);
  }
  throw ArgumentError('Unknown drive game: ${game.id}');
}

bool ngmyVaultIsDriveGame(String id) => id == 'street_racer';
