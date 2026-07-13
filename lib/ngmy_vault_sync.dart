import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Vault Channel — addictive timing game: tap when rings sync, chase combo + high score.
class NgmyVaultSyncScreen extends StatefulWidget {
  const NgmyVaultSyncScreen({super.key});

  @override
  State<NgmyVaultSyncScreen> createState() => _NgmyVaultSyncScreenState();
}

class _NgmyVaultSyncScreenState extends State<NgmyVaultSyncScreen> with TickerProviderStateMixin {
  static const _kPrefs = 'ngmy_vault_sync_v2';
  static const _colors = [Color(0xFFFBBF24), Color(0xFFF97316), Color(0xFFEF4444)];

  late final AnimationController _boot;
  late final AnimationController _spin;
  late final AnimationController _wave;
  late final AnimationController _hitFlash;

  bool _ready = false;
  bool _playing = false;
  int _score = 0;
  int _combo = 0;
  int _best = 0;
  int _bestCombo = 0;
  int _lives = 3;
  double _targetAngle = 0;
  double _speed = 1.0;
  String _feedback = 'Tap when the arcs meet';
  Color _feedbackColor = Colors.white70;
  Timer? _missWatch;

  @override
  void initState() {
    super.initState();
    _boot = AnimationController(vsync: this, duration: const Duration(milliseconds: 850))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed && mounted) setState(() => _ready = true);
      })
      ..forward();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat();
    _wave = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat();
    _hitFlash = AnimationController(vsync: this, duration: const Duration(milliseconds: 220));
    unawaited(_loadBest());
  }

  @override
  void dispose() {
    _missWatch?.cancel();
    _boot.dispose();
    _spin.dispose();
    _wave.dispose();
    _hitFlash.dispose();
    super.dispose();
  }

  Future<void> _loadBest() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kPrefs);
      if (raw == null) return;
      final map = jsonDecode(raw);
      if (map is! Map) return;
      if (!mounted) return;
      setState(() {
        _best = (map['best'] as num?)?.toInt() ?? 0;
        _bestCombo = (map['bestCombo'] as num?)?.toInt() ?? 0;
      });
    } catch (_) {}
  }

  Future<void> _saveBest() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_kPrefs, jsonEncode({'best': _best, 'bestCombo': _bestCombo}));
    } catch (_) {}
  }

  void _startRun() {
    HapticFeedback.mediumImpact();
    _missWatch?.cancel();
    setState(() {
      _playing = true;
      _score = 0;
      _combo = 0;
      _lives = 3;
      _speed = 1.0;
      _targetAngle = math.Random().nextDouble() * math.pi * 2;
      _feedback = 'Sync the pulse';
      _feedbackColor = Colors.white70;
    });
    _spin
      ..duration = Duration(milliseconds: (2200 / _speed).round())
      ..repeat();
  }

  double get _needle => _spin.value * math.pi * 2;

  double _angleDelta(double a, double b) {
    var d = (a - b) % (math.pi * 2);
    if (d > math.pi) d -= math.pi * 2;
    if (d < -math.pi) d += math.pi * 2;
    return d.abs();
  }

  void _tapSync() {
    if (!_playing) {
      _startRun();
      return;
    }
    final delta = _angleDelta(_needle, _targetAngle);
    // Perfect / good / miss windows (radians)
    if (delta < 0.22) {
      _registerHit(perfect: true);
    } else if (delta < 0.48) {
      _registerHit(perfect: false);
    } else {
      _registerMiss();
    }
  }

  void _registerHit({required bool perfect}) {
    HapticFeedback.lightImpact();
    unawaited(_hitFlash.forward(from: 0));
    final nextCombo = _combo + 1;
    final gain = (perfect ? 25 : 12) + (nextCombo * 3);
    setState(() {
      _combo = nextCombo;
      _score += gain;
      if (_combo > _bestCombo) _bestCombo = _combo;
      _feedback = perfect ? 'PERFECT +$gain' : 'SYNC +$gain';
      _feedbackColor = perfect ? const Color(0xFFFBBF24) : const Color(0xFF34D399);
      _targetAngle = (_targetAngle + 1.1 + math.Random().nextDouble() * 2.2) % (math.pi * 2);
      if (_score > 0 && _score % 100 < gain) {
        _speed = (_speed + 0.08).clamp(1.0, 2.4);
        _spin
          ..duration = Duration(milliseconds: (2200 / _speed).round())
          ..repeat();
      }
    });
  }

  void _registerMiss() {
    HapticFeedback.heavyImpact();
    final lives = _lives - 1;
    setState(() {
      _lives = lives;
      _combo = 0;
      _feedback = lives > 0 ? 'DESYNC — $lives left' : 'CHANNEL LOCKED';
      _feedbackColor = const Color(0xFFEF4444);
      _targetAngle = math.Random().nextDouble() * math.pi * 2;
    });
    if (lives <= 0) _endRun();
  }

  void _endRun() {
    final isNewBest = _score > _best;
    if (isNewBest) _best = _score;
    unawaited(_saveBest());
    setState(() {
      _playing = false;
      _feedback = isNewBest ? 'NEW BEST · $_score' : 'Run over · $_score pts';
      _feedbackColor = isNewBest ? const Color(0xFFFBBF24) : Colors.white70;
    });
    _spin
      ..duration = const Duration(milliseconds: 2200)
      ..repeat();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: AnimatedBuilder(
        animation: Listenable.merge([_boot, _spin, _wave, _hitFlash]),
        builder: (context, _) {
          final boot = Curves.easeOutCubic.transform(_boot.value.clamp(0.0, 1.0));
          return Stack(
            fit: StackFit.expand,
            children: [
              CustomPaint(
                painter: _SyncBackdropPainter(colors: _colors, spin: _spin.value, wave: _wave.value, boot: boot),
              ),
              if (!_ready) _bootOverlay(boot) else _playBody(),
            ],
          );
        },
      ),
    );
  }

  Widget _bootOverlay(double boot) {
    final fill = Curves.easeInOut.transform(_boot.value.clamp(0.0, 1.0));
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 18, 24, 28),
        child: Column(
          children: [
            Row(
              children: [
                Text('SYSTEM · SECURE', style: TextStyle(color: _colors.first.withValues(alpha: 0.9), fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 11)),
                const Spacer(),
                IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7))),
              ],
            ),
            const Spacer(),
            Transform.scale(
              scale: 0.75 + boot * 0.3,
              child: SizedBox(
                width: 200,
                height: 200,
                child: CustomPaint(
                  painter: _SyncRingPainter(
                    colors: _colors,
                    needle: _spin.value * math.pi * 2,
                    target: 1.2,
                    pulse: 0.4 + math.sin(_wave.value * math.pi * 2) * 0.4,
                    flash: 0,
                    playing: false,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
            Text('VAULT CHANNEL', style: TextStyle(color: Colors.white.withValues(alpha: boot), fontSize: 24, fontWeight: FontWeight.w900, letterSpacing: 2)),
            const SizedBox(height: 10),
            Text('Calibrating sync lane…', style: TextStyle(color: Colors.white.withValues(alpha: 0.6 * boot), fontSize: 13, fontWeight: FontWeight.w600)),
            const SizedBox(height: 20),
            ClipRRect(
              borderRadius: BorderRadius.circular(999),
              child: SizedBox(
                height: 6,
                width: 180,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    ColoredBox(color: Colors.white.withValues(alpha: 0.12)),
                    FractionallySizedBox(
                      alignment: Alignment.centerLeft,
                      widthFactor: fill,
                      child: const DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(colors: _colors))),
                    ),
                  ],
                ),
              ),
            ),
            const Spacer(),
          ],
        ),
      ),
    );
  }

  Widget _playBody() {
    final flash = Curves.easeOut.transform(_hitFlash.value);
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 4, 14, 0),
            child: Row(
              children: [
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
                const Expanded(
                  child: Text('VAULT SYNC', style: TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, letterSpacing: 1.6, fontSize: 13)),
                ),
                _statPill(Icons.emoji_events_rounded, '$_best'),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 8, 18, 0),
            child: Row(
              children: [
                _statPill(Icons.bolt_rounded, '$_score'),
                const SizedBox(width: 8),
                _statPill(Icons.local_fire_department_rounded, 'x$_combo'),
                const Spacer(),
                Row(
                  children: List.generate(3, (i) {
                    final on = i < _lives;
                    return Padding(
                      padding: const EdgeInsets.only(left: 4),
                      child: Icon(Icons.favorite_rounded, size: 18, color: on ? const Color(0xFFEF4444) : Colors.white24),
                    );
                  }),
                ),
              ],
            ),
          ),
          Expanded(
            child: Center(
              child: GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: _tapSync,
                child: SizedBox(
                  width: 280,
                  height: 280,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      if (flash > 0)
                        Container(
                          width: 280,
                          height: 280,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            boxShadow: [BoxShadow(color: _colors.first.withValues(alpha: 0.35 * (1 - flash)), blurRadius: 40, offset: Offset.zero)],
                          ),
                        ),
                      CustomPaint(
                        size: const Size(280, 280),
                        painter: _SyncRingPainter(
                          colors: _colors,
                          needle: _needle,
                          target: _targetAngle,
                          pulse: 0.35 + math.sin(_wave.value * math.pi * 2) * 0.3,
                          flash: flash,
                          playing: _playing,
                        ),
                      ),
                      Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            _playing ? 'TAP' : 'START',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.95),
                              fontWeight: FontWeight.w900,
                              fontSize: 22,
                              letterSpacing: 2,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            _feedback,
                            textAlign: TextAlign.center,
                            style: TextStyle(color: _feedbackColor, fontWeight: FontWeight.w800, fontSize: 12),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 0, 20, 24),
            child: Column(
              children: [
                Text(
                  _playing ? 'Hit the gold notch as the arc sweeps past' : 'Beat your best · unlimited runs',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 12),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton(
                    onPressed: _playing ? _tapSync : _startRun,
                    style: FilledButton.styleFrom(
                      backgroundColor: _colors[1],
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                    child: Text(
                      _playing ? 'SYNC NOW' : (_score > 0 ? 'PLAY AGAIN' : 'ENTER CHANNEL'),
                      style: const TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.2),
                    ),
                  ),
                ),
                if (_bestCombo > 0) ...[
                  const SizedBox(height: 10),
                  Text('Best combo x$_bestCombo', style: TextStyle(color: _colors.first.withValues(alpha: 0.7), fontWeight: FontWeight.w800, fontSize: 11)),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _statPill(IconData icon, String text) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(999),
        color: Colors.white.withValues(alpha: 0.06),
        border: Border.all(color: _colors.first.withValues(alpha: 0.35)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 14, color: _colors.first),
          const SizedBox(width: 4),
          Text(text, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
        ],
      ),
    );
  }
}

class _SyncRingPainter extends CustomPainter {
  _SyncRingPainter({
    required this.colors,
    required this.needle,
    required this.target,
    required this.pulse,
    required this.flash,
    required this.playing,
  });

  final List<Color> colors;
  final double needle;
  final double target;
  final double pulse;
  final double flash;
  final bool playing;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.shortestSide * 0.38;

    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        r + i * 8 + pulse * 4,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2
          ..color = colors.first.withValues(alpha: 0.1 * i),
      );
    }

    canvas.drawCircle(
      c,
      r * 0.55,
      Paint()
        ..shader = RadialGradient(colors: [
          Colors.white.withValues(alpha: 0.35 + flash * 0.35),
          colors.first.withValues(alpha: 0.55),
          colors.last.withValues(alpha: 0.25),
        ]).createShader(Rect.fromCircle(center: c, radius: r * 0.55)),
    );

    canvas.drawCircle(
      c,
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = Colors.white.withValues(alpha: 0.18),
    );

    // Target notch
    final tx = c.dx + math.cos(target) * r;
    final ty = c.dy + math.sin(target) * r;
    canvas.drawCircle(Offset(tx, ty), 10 + pulse * 2, Paint()..color = colors.first.withValues(alpha: 0.95));
    canvas.drawCircle(Offset(tx, ty), 4, Paint()..color = Colors.white);

    // Sweeping arc / needle
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: r),
      needle - 0.55,
      1.1,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 5
        ..strokeCap = StrokeCap.round
        ..shader = SweepGradient(
          colors: [colors.last.withValues(alpha: 0.1), colors.first, colors[1]],
          transform: GradientRotation(needle - 0.55),
        ).createShader(Rect.fromCircle(center: c, radius: r)),
    );

    final nx = c.dx + math.cos(needle) * r;
    final ny = c.dy + math.sin(needle) * r;
    canvas.drawCircle(Offset(nx, ny), playing ? 7 : 5, Paint()..color = Colors.white);

    // Outer accent arc
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: r + 14),
      needle,
      math.pi * 0.9,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = colors[1].withValues(alpha: 0.55),
    );
  }

  @override
  bool shouldRepaint(covariant _SyncRingPainter old) =>
      old.needle != needle || old.target != target || old.pulse != pulse || old.flash != flash || old.playing != playing;
}

class _SyncBackdropPainter extends CustomPainter {
  _SyncBackdropPainter({required this.colors, required this.spin, required this.wave, required this.boot});
  final List<Color> colors;
  final double spin;
  final double wave;
  final double boot;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.42);
    for (var i = 1; i <= 5; i++) {
      canvas.drawCircle(
        c,
        38.0 * i + wave * 16,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: (0.1 / i) * boot),
      );
    }
    final grid = Paint()
      ..color = Colors.white.withValues(alpha: 0.035 * boot)
      ..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 26) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 26) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: 160),
      spin * math.pi * 2,
      1.5,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = colors.last.withValues(alpha: 0.4 * boot),
    );
  }

  @override
  bool shouldRepaint(covariant _SyncBackdropPainter old) => old.spin != spin || old.wave != wave || old.boot != boot;
}
