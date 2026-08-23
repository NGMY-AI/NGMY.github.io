import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// Theme pack for pseudo-3D Vault driving games (steering wheel + pedals).
class VaultDriveTheme {
  const VaultDriveTheme({
    required this.id,
    required this.title,
    required this.skyTop,
    required this.skyBottom,
    required this.road,
    required this.roadEdge,
    required this.grassLeft,
    required this.grassRight,
    required this.playerBody,
    required this.accent,
    required this.maxSpeed,
    required this.trafficDensity,
    required this.vehicleKind,
    this.night = false,
    this.hint = 'Turn the wheel · hold gas & brake',
  });

  final String id;
  final String title;
  final Color skyTop;
  final Color skyBottom;
  final Color road;
  final Color roadEdge;
  final Color grassLeft;
  final Color grassRight;
  final Color playerBody;
  final Color accent;
  final double maxSpeed;
  final double trafficDensity;
  final String vehicleKind;
  final bool night;
  final String hint;
}

const kVaultDriveThemes = <String, VaultDriveTheme>{
  'city_cruise': VaultDriveTheme(
    id: 'city_cruise',
    title: 'City Cruise',
    skyTop: Color(0xFF7DD3FC),
    skyBottom: Color(0xFFE0F2FE),
    road: Color(0xFF374151),
    roadEdge: Color(0xFFF8FAFC),
    grassLeft: Color(0xFF4B5563),
    grassRight: Color(0xFF6B7280),
    playerBody: Color(0xFFEF4444),
    accent: Color(0xFF22D3EE),
    maxSpeed: 180,
    trafficDensity: 1.0,
    vehicleKind: 'sport',
  ),
  'highway_rush': VaultDriveTheme(
    id: 'highway_rush',
    title: 'Highway Rush',
    skyTop: Color(0xFF38BDF8),
    skyBottom: Color(0xFFBAE6FD),
    road: Color(0xFF1F2937),
    roadEdge: Color(0xFFFBBF24),
    grassLeft: Color(0xFF365314),
    grassRight: Color(0xFF3F6212),
    playerBody: Color(0xFF2563EB),
    accent: Color(0xFFFACC15),
    maxSpeed: 240,
    trafficDensity: 1.25,
    vehicleKind: 'sport',
  ),
  'night_neon': VaultDriveTheme(
    id: 'night_neon',
    title: 'Night Neon',
    skyTop: Color(0xFF020617),
    skyBottom: Color(0xFF312E81),
    road: Color(0xFF111827),
    roadEdge: Color(0xFF22D3EE),
    grassLeft: Color(0xFF0F172A),
    grassRight: Color(0xFF1E1B4B),
    playerBody: Color(0xFFEC4899),
    accent: Color(0xFFA78BFA),
    maxSpeed: 200,
    trafficDensity: 1.1,
    vehicleKind: 'sport',
    night: true,
  ),
  'mountain_pass': VaultDriveTheme(
    id: 'mountain_pass',
    title: 'Mountain Pass',
    skyTop: Color(0xFF67E8F9),
    skyBottom: Color(0xFFECFEFF),
    road: Color(0xFF57534E),
    roadEdge: Color(0xFFE7E5E4),
    grassLeft: Color(0xFF166534),
    grassRight: Color(0xFF15803D),
    playerBody: Color(0xFF0F766E),
    accent: Color(0xFF34D399),
    maxSpeed: 160,
    trafficDensity: 0.75,
    vehicleKind: 'suv',
  ),
  'bus_route': VaultDriveTheme(
    id: 'bus_route',
    title: 'Bus Route',
    skyTop: Color(0xFF93C5FD),
    skyBottom: Color(0xFFDBEAFE),
    road: Color(0xFF4B5563),
    roadEdge: Color(0xFFFDE68A),
    grassLeft: Color(0xFF6B7280),
    grassRight: Color(0xFF9CA3AF),
    playerBody: Color(0xFFF59E0B),
    accent: Color(0xFFF97316),
    maxSpeed: 120,
    trafficDensity: 0.9,
    vehicleKind: 'bus',
  ),
  'police_chase': VaultDriveTheme(
    id: 'police_chase',
    title: 'Police Chase',
    skyTop: Color(0xFF64748B),
    skyBottom: Color(0xFFCBD5E1),
    road: Color(0xFF1E293B),
    roadEdge: Color(0xFFF8FAFC),
    grassLeft: Color(0xFF334155),
    grassRight: Color(0xFF475569),
    playerBody: Color(0xFF1D4ED8),
    accent: Color(0xFFEF4444),
    maxSpeed: 220,
    trafficDensity: 1.4,
    vehicleKind: 'police',
  ),
  'formula_circuit': VaultDriveTheme(
    id: 'formula_circuit',
    title: 'Formula Circuit',
    skyTop: Color(0xFF0EA5E9),
    skyBottom: Color(0xFFE0F2FE),
    road: Color(0xFF0F172A),
    roadEdge: Color(0xFFF8FAFC),
    grassLeft: Color(0xFF14532D),
    grassRight: Color(0xFF166534),
    playerBody: Color(0xFFDC2626),
    accent: Color(0xFFFBBF24),
    maxSpeed: 280,
    trafficDensity: 0.85,
    vehicleKind: 'formula',
  ),
  'offroad_trail': VaultDriveTheme(
    id: 'offroad_trail',
    title: 'Offroad Trail',
    skyTop: Color(0xFFFDBA74),
    skyBottom: Color(0xFFFEF3C7),
    road: Color(0xFF92400E),
    roadEdge: Color(0xFFD97706),
    grassLeft: Color(0xFFA16207),
    grassRight: Color(0xFF854D0E),
    playerBody: Color(0xFF15803D),
    accent: Color(0xFFF97316),
    maxSpeed: 140,
    trafficDensity: 0.6,
    vehicleKind: 'offroad',
  ),
  'taxi_city': VaultDriveTheme(
    id: 'taxi_city',
    title: 'Taxi City',
    skyTop: Color(0xFF7DD3FC),
    skyBottom: Color(0xFFF0F9FF),
    road: Color(0xFF374151),
    roadEdge: Color(0xFFFACC15),
    grassLeft: Color(0xFF4B5563),
    grassRight: Color(0xFF6B7280),
    playerBody: Color(0xFFFACC15),
    accent: Color(0xFF111827),
    maxSpeed: 150,
    trafficDensity: 1.5,
    vehicleKind: 'taxi',
  ),
};

Widget ngmyVaultDriveGameScreen(VaultGameDef game) {
  final theme = kVaultDriveThemes[game.id];
  if (theme == null) {
    throw ArgumentError('Unknown drive game: ${game.id}');
  }
  return NgmyVaultDriveGame(game: game, theme: theme);
}

bool ngmyVaultIsDriveGame(String id) => kVaultDriveThemes.containsKey(id);

// ── Traffic car ──────────────────────────────────────────────────────────────

class _TrafficCar {
  _TrafficCar({
    required this.lane,
    required this.z,
    required this.speed,
    required this.color,
    required this.kind,
  });

  double lane; // -1..1 relative road
  double z; // 0 = near bumper, 1 = horizon
  double speed;
  Color color;
  String kind;
}

// ── Main drive game ──────────────────────────────────────────────────────────

class NgmyVaultDriveGame extends StatefulWidget {
  const NgmyVaultDriveGame({super.key, required this.game, required this.theme});

  final VaultGameDef game;
  final VaultDriveTheme theme;

  @override
  State<NgmyVaultDriveGame> createState() => _NgmyVaultDriveGameState();
}

class _NgmyVaultDriveGameState extends State<NgmyVaultDriveGame> {
  static const _maxWheel = 2.15;
  static const _tickMs = 16;

  final _rnd = math.Random();
  Timer? _tick;
  Timer? _spawn;

  double _wheelAngle = 0;
  double _steer = 0;
  bool _gas = false;
  bool _brake = false;
  double _speed = 0;
  double _playerX = 0;
  double _roadCurve = 0;
  double _curveTarget = 0;
  double _roadScroll = 0;
  double _distance = 0;
  int _score = 0;
  int _lives = 3;
  int _coins = 0;
  bool _over = false;
  bool _crashing = false;
  double _shake = 0;
  double _offRoadTimer = 0;

  final List<_TrafficCar> _traffic = [];

  VaultDriveTheme get t => widget.theme;

  @override
  void initState() {
    super.initState();
    _startLoops();
  }

  void _startLoops() {
    _tick?.cancel();
    _spawn?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: _tickMs), (_) => _frame());
    final spawnMs = (900 / t.trafficDensity).round().clamp(420, 1400);
    _spawn = Timer.periodic(Duration(milliseconds: spawnMs), (_) => _spawnCar());
  }

  @override
  void dispose() {
    _tick?.cancel();
    _spawn?.cancel();
    super.dispose();
  }

  void _spawnCar() {
    if (_over || _speed < 18) return;
    final lane = (_rnd.nextInt(3) - 1) * 0.55 + (_rnd.nextDouble() - 0.5) * 0.08;
    final kinds = ['sport', 'suv', 'taxi', 'truck'];
    setState(() {
      _traffic.add(
        _TrafficCar(
          lane: lane.clamp(-0.85, 0.85),
          z: 0.97,
          speed: 35 + _rnd.nextDouble() * (t.maxSpeed * 0.45),
          color: [
            const Color(0xFF60A5FA),
            const Color(0xFF34D399),
            const Color(0xFFF472B6),
            const Color(0xFFFBBF24),
            const Color(0xFFE2E8F0),
            const Color(0xFFFB7185),
          ][_rnd.nextInt(6)],
          kind: kinds[_rnd.nextInt(kinds.length)],
        ),
      );
    });
  }

  void _frame() {
    if (_over || !mounted) return;
    final dt = _tickMs / 1000.0;

    // Wheel spring-back when not dragging hard
    if (!_draggingWheel) {
      _wheelAngle *= 0.92;
      if (_wheelAngle.abs() < 0.01) _wheelAngle = 0;
    }
    _steer = (_wheelAngle / _maxWheel).clamp(-1.0, 1.0);

    // Speed
    if (_brake) {
      _speed = math.max(0, _speed - 95 * dt);
    } else if (_gas) {
      final accel = t.vehicleKind == 'bus'
          ? 42.0
          : t.vehicleKind == 'formula'
              ? 78.0
              : 58.0;
      _speed = math.min(t.maxSpeed, _speed + accel * dt);
    } else {
      _speed = math.max(0, _speed - 22 * dt);
    }

    // Road curve wandering
    if (_rnd.nextDouble() < 0.012) {
      _curveTarget = (_rnd.nextDouble() * 2 - 1) * 0.72;
    }
    _roadCurve += (_curveTarget - _roadCurve) * 0.018;

    final speedNorm = (_speed / t.maxSpeed).clamp(0.0, 1.0);
    final turnPower = 0.55 + speedNorm * 1.35;
    _playerX += _steer * turnPower * dt;
    // Pull toward road center opposing curve
    _playerX -= _roadCurve * 0.55 * speedNorm * dt;
    _playerX = _playerX.clamp(-1.35, 1.35);

    _roadScroll += _speed * dt * 0.085;
    _distance += _speed * dt * 0.28;
    if (_speed > 5) {
      _score = _distance.round() + (_nearMissBonus);
    }

    // Off-road
    final onRoad = _playerX.abs() <= 0.92;
    if (!onRoad && _speed > 8) {
      _offRoadTimer += dt;
      _speed *= 0.985;
      if (_offRoadTimer > 1.6) {
        _hit('Off road!');
        _offRoadTimer = 0;
      }
    } else {
      _offRoadTimer = 0;
    }

    // Traffic movement + collision
    for (final c in _traffic) {
      final rel = (_speed - c.speed) * dt * 0.0022;
      c.z -= rel;
      // slight lane sway
      c.lane += math.sin(_roadScroll * 3 + c.z * 10) * 0.0004;
    }
    _traffic.removeWhere((c) => c.z < 0.02 || c.z > 1.05);

    for (final c in _traffic.toList()) {
      if (c.z > 0.08 && c.z < 0.22) {
        final dx = (c.lane - _playerX).abs();
        final hitW = t.vehicleKind == 'bus' ? 0.42 : 0.34;
        if (dx < hitW) {
          _hit('Crash!');
          _traffic.remove(c);
        } else if (dx < hitW + 0.18 && _speed > 40) {
          _nearMissBonus += 2;
        }
      }
    }

    if (_shake > 0) _shake = math.max(0, _shake - dt * 4);

    setState(() {});
  }

  int _nearMissBonus = 0;
  bool _draggingWheel = false;

  void _hit(String _) {
    if (_crashing || _over) return;
    _crashing = true;
    _lives -= 1;
    _speed *= 0.35;
    _shake = 1;
    HapticFeedback.heavyImpact();
    Future<void>.delayed(const Duration(milliseconds: 650), () {
      _crashing = false;
    });
    if (_lives <= 0) {
      unawaited(_finish());
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _tick?.cancel();
    _spawn?.cancel();
    _coins = math.max(1, _score ~/ 8);
    await VaultProgressStore.saveRun(
      gameId: widget.game.id,
      level: 1,
      score: _score,
      coinsEarned: _coins,
    );
    if (!mounted) return;
    setState(() => _over = true);
  }

  void _restart() {
    setState(() {
      _wheelAngle = 0;
      _steer = 0;
      _gas = false;
      _brake = false;
      _speed = 0;
      _playerX = 0;
      _roadCurve = 0;
      _curveTarget = 0;
      _roadScroll = 0;
      _distance = 0;
      _score = 0;
      _nearMissBonus = 0;
      _lives = 3;
      _coins = 0;
      _over = false;
      _crashing = false;
      _shake = 0;
      _offRoadTimer = 0;
      _traffic.clear();
    });
    _startLoops();
  }

  void _onWheelPan(DragUpdateDetails d, Size wheelSize) {
    _draggingWheel = true;
    // Horizontal drag primarily turns the wheel
    final delta = d.delta.dx / (wheelSize.width * 0.42);
    setState(() {
      _wheelAngle = (_wheelAngle + delta * 1.35).clamp(-_maxWheel, _maxWheel);
    });
  }

  @override
  Widget build(BuildContext context) {
    final shakeX = math.sin(_shake * 40) * _shake * 8;
    final kmh = _speed.round();

    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                _buildHeader(kmh),
                Expanded(
                  flex: 62,
                  child: Transform.translate(
                    offset: Offset(shakeX, 0),
                    child: LayoutBuilder(
                      builder: (context, c) {
                        return CustomPaint(
                          painter: _DriveWorldPainter(
                            theme: t,
                            playerX: _playerX,
                            roadCurve: _roadCurve,
                            roadScroll: _roadScroll,
                            speed: _speed,
                            traffic: _traffic,
                            crashing: _crashing,
                          ),
                          size: Size(c.maxWidth, c.maxHeight),
                        );
                      },
                    ),
                  ),
                ),
                Expanded(
                  flex: 38,
                  child: _buildControls(),
                ),
              ],
            ),
            if (_over) _buildEndCard(),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader(int kmh) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 4, 12, 4),
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
                  t.title.toUpperCase(),
                  style: TextStyle(
                    color: t.accent,
                    fontWeight: FontWeight.w900,
                    letterSpacing: 1.1,
                    fontSize: 13,
                  ),
                ),
                const SizedBox(height: 2),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(3, (i) {
                    final on = i < _lives;
                    return Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 3),
                      child: Container(
                        width: 10,
                        height: 10,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: on ? const Color(0xFFEF4444) : Colors.white24,
                          boxShadow: on
                              ? [const BoxShadow(color: Color(0x88EF4444), blurRadius: 6)]
                              : null,
                        ),
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
              Text(
                'SCORE $_score',
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12),
              ),
              Text(
                '$kmh km/h',
                style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: 16),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildControls() {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF0B1220), Color(0xFF030712)],
        ),
      ),
      child: Column(
        children: [
          Container(height: 2, color: t.accent.withValues(alpha: 0.35)),
          Padding(
            padding: const EdgeInsets.only(top: 6),
            child: Text(
              t.hint,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
              child: Row(
                children: [
                  // Brake
                  _Pedal(
                    label: 'BRAKE',
                    color: const Color(0xFFEF4444),
                    active: _brake,
                    onDown: () => setState(() => _brake = true),
                    onUp: () => setState(() => _brake = false),
                  ),
                  const SizedBox(width: 12),
                  // Steering wheel
                  Expanded(
                    child: Center(
                      child: LayoutBuilder(
                        builder: (context, c) {
                          final size = math.min(c.maxWidth, c.maxHeight).clamp(120.0, 168.0);
                          return GestureDetector(
                            onPanStart: (_) => _draggingWheel = true,
                            onPanUpdate: (d) => _onWheelPan(d, Size(size, size)),
                            onPanEnd: (_) => setState(() => _draggingWheel = false),
                            onPanCancel: () => setState(() => _draggingWheel = false),
                            child: Transform.rotate(
                              angle: _wheelAngle,
                              child: CustomPaint(
                                size: Size(size, size),
                                painter: _SteeringWheelPainter(accent: t.accent, body: t.playerBody),
                              ),
                            ),
                          );
                        },
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  // Gas
                  _Pedal(
                    label: 'GAS',
                    color: const Color(0xFF22C55E),
                    active: _gas,
                    onDown: () => setState(() => _gas = true),
                    onUp: () => setState(() => _gas = false),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEndCard() {
    return Container(
      color: Colors.black.withValues(alpha: 0.78),
      alignment: Alignment.center,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 36),
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24),
          gradient: LinearGradient(
            colors: [t.accent.withValues(alpha: 0.28), const Color(0xFF0B0A16)],
          ),
          border: Border.all(color: t.accent.withValues(alpha: 0.6)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('RUN OVER', style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: 20)),
            const SizedBox(height: 8),
            Text('Score $_score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
            Text('+$_coins coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w700)),
            const SizedBox(height: 18),
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
                    style: FilledButton.styleFrom(backgroundColor: t.accent),
                    child: const Text('Drive again'),
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

class _Pedal extends StatelessWidget {
  const _Pedal({
    required this.label,
    required this.color,
    required this.active,
    required this.onDown,
    required this.onUp,
  });

  final String label;
  final Color color;
  final bool active;
  final VoidCallback onDown;
  final VoidCallback onUp;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => onDown(),
      onTapUp: (_) => onUp(),
      onTapCancel: onUp,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 80),
        width: 64,
        height: 110,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(14),
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: active
                ? [color, color.withValues(alpha: 0.7)]
                : [color.withValues(alpha: 0.35), color.withValues(alpha: 0.18)],
          ),
          border: Border.all(color: color.withValues(alpha: 0.9), width: 2),
          boxShadow: active ? [BoxShadow(color: color.withValues(alpha: 0.45), blurRadius: 16)] : null,
        ),
        alignment: Alignment.center,
        child: Text(
          label,
          textAlign: TextAlign.center,
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 0.6),
        ),
      ),
    );
  }
}

// ── Steering wheel painter ───────────────────────────────────────────────────

class _SteeringWheelPainter extends CustomPainter {
  _SteeringWheelPainter({required this.accent, required this.body});

  final Color accent;
  final Color body;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.width / 2;

    // Outer rim
    final rim = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = r * 0.18
      ..color = const Color(0xFF111827);
    canvas.drawCircle(c, r * 0.82, rim);

    final rimHi = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = r * 0.06
      ..color = const Color(0xFF4B5563);
    canvas.drawCircle(c, r * 0.82, rimHi);

    // Accent stitch ring
    final stitch = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..color = accent.withValues(alpha: 0.7);
    canvas.drawCircle(c, r * 0.72, stitch);

    // Spokes
    final spoke = Paint()
      ..color = const Color(0xFF1F2937)
      ..strokeWidth = r * 0.11
      ..strokeCap = StrokeCap.round;
    for (var i = 0; i < 3; i++) {
      final a = -math.pi / 2 + i * (2 * math.pi / 3);
      final inner = Offset(c.dx + math.cos(a) * r * 0.18, c.dy + math.sin(a) * r * 0.18);
      final outer = Offset(c.dx + math.cos(a) * r * 0.68, c.dy + math.sin(a) * r * 0.68);
      canvas.drawLine(inner, outer, spoke);
    }

    // Hub
    canvas.drawCircle(c, r * 0.2, Paint()..color = body);
    canvas.drawCircle(c, r * 0.12, Paint()..color = accent);
    canvas.drawCircle(c, r * 0.05, Paint()..color = Colors.white70);
  }

  @override
  bool shouldRepaint(covariant _SteeringWheelPainter old) =>
      old.accent != accent || old.body != body;
}

// ── World painter ────────────────────────────────────────────────────────────

class _DriveWorldPainter extends CustomPainter {
  _DriveWorldPainter({
    required this.theme,
    required this.playerX,
    required this.roadCurve,
    required this.roadScroll,
    required this.speed,
    required this.traffic,
    required this.crashing,
  });

  final VaultDriveTheme theme;
  final double playerX;
  final double roadCurve;
  final double roadScroll;
  final double speed;
  final List<_TrafficCar> traffic;
  final bool crashing;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final horizon = h * 0.38;

    // Sky
    final sky = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [theme.skyTop, theme.skyBottom],
      ).createShader(Rect.fromLTWH(0, 0, w, horizon));
    canvas.drawRect(Rect.fromLTWH(0, 0, w, horizon), sky);

    // Sun / moon
    final orb = Paint()..color = theme.night ? const Color(0xFFE2E8F0) : const Color(0xFFFFF7ED);
    canvas.drawCircle(Offset(w * 0.78, horizon * 0.28), theme.night ? 14 : 22, orb);
    if (theme.night) {
      canvas.drawCircle(Offset(w * 0.78 - 6, horizon * 0.26), 12, Paint()..color = theme.skyTop);
    }

    // Skyline / mountains
    _drawSkyline(canvas, w, horizon);

    // Ground strips (pseudo-3D road)
    const rows = 48;
    for (var i = 0; i < rows; i++) {
      final p1 = i / rows;
      final p2 = (i + 1) / rows;
      // perspective: near (p=1) is bottom
      final y1 = horizon + (h - horizon) * (p1 * p1);
      final y2 = horizon + (h - horizon) * (p2 * p2);
      final mid = (p1 + p2) / 2;
      final depth = mid * mid;
      final roadW = w * (0.04 + 0.72 * depth);
      final curveShift = roadCurve * (1 - mid) * w * 0.55;
      final cx = w / 2 + curveShift;

      // grass / dirt
      canvas.drawRect(
        Rect.fromLTRB(0, y1, w, y2),
        Paint()..color = Color.lerp(theme.grassLeft, theme.grassRight, mid)!,
      );

      // road
      final left = cx - roadW / 2;
      final right = cx + roadW / 2;
      canvas.drawRect(
        Rect.fromLTRB(left, y1, right, y2),
        Paint()..color = theme.road,
      );

      // edges
      final edgeW = math.max(2.0, 6 * depth);
      canvas.drawRect(Rect.fromLTRB(left, y1, left + edgeW, y2), Paint()..color = theme.roadEdge);
      canvas.drawRect(Rect.fromLTRB(right - edgeW, y1, right, y2), Paint()..color = theme.roadEdge);

      // center dashes
      final dashPhase = (roadScroll * 2 + mid * 20) % 1.0;
      if (dashPhase < 0.45) {
        final dw = math.max(2.0, 5 * depth);
        canvas.drawRect(
          Rect.fromCenter(center: Offset(cx, (y1 + y2) / 2), width: dw, height: math.max(1, y2 - y1)),
          Paint()..color = const Color(0xFFFBBF24),
        );
      }
    }

    // Traffic (far to near)
    final sorted = [...traffic]..sort((a, b) => b.z.compareTo(a.z));
    for (final car in sorted) {
      _drawTraffic(canvas, size, horizon, car);
    }

    // Player car
    _drawPlayer(canvas, size);

    if (crashing) {
      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0x55EF4444));
    }

    // Speed vignette
    if (speed > theme.maxSpeed * 0.7) {
      final vig = Paint()
        ..shader = RadialGradient(
          colors: [Colors.transparent, Colors.black.withValues(alpha: 0.35)],
        ).createShader(Offset.zero & size);
      canvas.drawRect(Offset.zero & size, vig);
    }
  }

  void _drawSkyline(Canvas canvas, double w, double horizon) {
    final path = Path()..moveTo(0, horizon);
    if (theme.vehicleKind == 'offroad' || theme.id == 'mountain_pass') {
      var x = 0.0;
      while (x < w) {
        final peak = horizon - 30 - _rndHash(x) * 50;
        path.lineTo(x + 40, peak);
        path.lineTo(x + 80, horizon - 10);
        x += 80;
      }
      path
        ..lineTo(w, horizon)
        ..close();
      canvas.drawPath(path, Paint()..color = const Color(0xFF334155).withValues(alpha: 0.85));
    } else {
      var x = 0.0;
      while (x < w) {
        final bw = 18 + _rndHash(x) * 36;
        final bh = 20 + _rndHash(x + 9) * (theme.night ? 70 : 55);
        canvas.drawRect(
          Rect.fromLTRB(x, horizon - bh, x + bw, horizon),
          Paint()..color = theme.night ? const Color(0xFF1E1B4B) : const Color(0xFF475569),
        );
        if (theme.night && _rndHash(x + 3) > 0.55) {
          canvas.drawRect(
            Rect.fromLTRB(x + 4, horizon - bh + 8, x + bw - 4, horizon - bh + 18),
            Paint()..color = const Color(0x99FBBF24),
          );
        }
        x += bw + 4;
      }
    }
  }

  double _rndHash(double x) {
    final s = math.sin(x * 12.9898) * 43758.5453;
    return s - s.floorToDouble();
  }

  void _drawTraffic(Canvas canvas, Size size, double horizon, _TrafficCar car) {
    final w = size.width;
    final h = size.height;
    final depth = (1 - car.z);
    final persp = depth * depth;
    final y = horizon + (h - horizon) * persp;
    final roadW = w * (0.04 + 0.72 * persp);
    final curveShift = roadCurve * car.z * w * 0.55;
    final cx = w / 2 + curveShift + car.lane * roadW * 0.42;
    final carW = roadW * 0.22;
    final carH = carW * (car.kind == 'bus' || car.kind == 'truck' ? 1.15 : 0.72);

    final rect = RRect.fromRectAndRadius(
      Rect.fromCenter(center: Offset(cx, y - carH / 2), width: carW, height: carH),
      Radius.circular(carW * 0.12),
    );
    canvas.drawRRect(rect, Paint()..color = car.color);
    // rear window
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(cx, y - carH * 0.62), width: carW * 0.62, height: carH * 0.28),
        const Radius.circular(4),
      ),
      Paint()..color = const Color(0xFF0EA5E9).withValues(alpha: 0.55),
    );
    // lights
    canvas.drawCircle(Offset(cx - carW * 0.28, y - carH * 0.15), carW * 0.06, Paint()..color = const Color(0xFFEF4444));
    canvas.drawCircle(Offset(cx + carW * 0.28, y - carH * 0.15), carW * 0.06, Paint()..color = const Color(0xFFEF4444));
  }

  void _drawPlayer(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final baseY = h * 0.92;
    final cx = w / 2 + playerX * w * 0.28;
    final kind = theme.vehicleKind;

    double carW = w * 0.34;
    double carH = h * 0.22;
    if (kind == 'bus') {
      carW = w * 0.38;
      carH = h * 0.28;
    } else if (kind == 'formula') {
      carW = w * 0.30;
      carH = h * 0.16;
    } else if (kind == 'bike') {
      carW = w * 0.18;
      carH = h * 0.20;
    } else if (kind == 'suv' || kind == 'offroad') {
      carW = w * 0.36;
      carH = h * 0.24;
    }

    // shadow
    canvas.drawOval(
      Rect.fromCenter(center: Offset(cx, baseY + 4), width: carW * 0.9, height: 16),
      Paint()..color = Colors.black.withValues(alpha: 0.35),
    );

    final body = RRect.fromRectAndRadius(
      Rect.fromCenter(center: Offset(cx, baseY - carH / 2), width: carW, height: carH),
      Radius.circular(carW * 0.1),
    );
    canvas.drawRRect(
      body,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            Color.lerp(theme.playerBody, Colors.white, 0.25)!,
            theme.playerBody,
            Color.lerp(theme.playerBody, Colors.black, 0.25)!,
          ],
        ).createShader(body.outerRect),
    );

    // cabin
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(cx, baseY - carH * 0.72), width: carW * 0.62, height: carH * 0.32),
        const Radius.circular(8),
      ),
      Paint()..color = const Color(0xFF38BDF8).withValues(alpha: 0.55),
    );

    // taillights
    final light = Paint()..color = const Color(0xFFEF4444);
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(cx - carW * 0.32, baseY - carH * 0.22), width: carW * 0.12, height: carH * 0.1),
        const Radius.circular(3),
      ),
      light,
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(cx + carW * 0.32, baseY - carH * 0.22), width: carW * 0.12, height: carH * 0.1),
        const Radius.circular(3),
      ),
      light,
    );

    if (kind == 'police') {
      canvas.drawCircle(Offset(cx - 10, baseY - carH * 0.95), 5, Paint()..color = const Color(0xFF3B82F6));
      canvas.drawCircle(Offset(cx + 10, baseY - carH * 0.95), 5, Paint()..color = const Color(0xFFEF4444));
    }
    if (kind == 'taxi') {
      canvas.drawRect(
        Rect.fromCenter(center: Offset(cx, baseY - carH * 0.98), width: carW * 0.2, height: 8),
        Paint()..color = const Color(0xFF111827),
      );
    }
    if (kind == 'formula') {
      canvas.drawRect(
        Rect.fromCenter(center: Offset(cx, baseY - carH * 0.15), width: carW * 1.05, height: 6),
        Paint()..color = const Color(0xFF111827),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _DriveWorldPainter old) => true;
}
