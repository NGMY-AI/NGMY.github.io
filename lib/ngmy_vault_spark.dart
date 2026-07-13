import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Vault Channel — fast daily spark: quote + one-tap mood + streak (no long waits).
class NgmyVaultSparkScreen extends StatefulWidget {
  const NgmyVaultSparkScreen({super.key});

  @override
  State<NgmyVaultSparkScreen> createState() => _NgmyVaultSparkScreenState();
}

class _NgmyVaultSparkScreenState extends State<NgmyVaultSparkScreen> with TickerProviderStateMixin {
  static const _kPrefs = 'ngmy_vault_spark_v1';
  static const _colors = [Color(0xFFFBBF24), Color(0xFFF97316), Color(0xFFEF4444)];

  static const _sparks = [
    'One clear move beats ten half-starts.',
    'Protect your peace like it’s money.',
    'Small progress still counts as progress.',
    'You don’t need perfect — you need today.',
    'Speak kindly to yourself out loud.',
    'Finish one thing before starting three.',
    'Breathe once, then choose again.',
    'Your future self is watching this choice.',
    'Keep the promise you made this morning.',
    'Quiet focus is a superpower.',
    'Leave people better than you found them.',
    'Discipline is self-respect in motion.',
  ];

  late final AnimationController _boot;
  late final AnimationController _spin;
  late final AnimationController _wave;

  bool _ready = false;
  int _streak = 0;
  String _lastSparkDay = '';
  String? _todayMood;
  late String _spark;

  @override
  void initState() {
    super.initState();
    final dayIndex = DateTime.now().difference(DateTime(2024)).inDays;
    _spark = _sparks[dayIndex.abs() % _sparks.length];
    _boot = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed && mounted) setState(() => _ready = true);
      })
      ..forward();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 4800))..repeat();
    _wave = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat();
    unawaited(_load());
  }

  @override
  void dispose() {
    _boot.dispose();
    _spin.dispose();
    _wave.dispose();
    super.dispose();
  }

  String get _todayKey {
    final n = DateTime.now();
    return '${n.year}-${n.month.toString().padLeft(2, '0')}-${n.day.toString().padLeft(2, '0')}';
  }

  Future<void> _load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kPrefs);
      if (raw == null || raw.isEmpty) return;
      final map = jsonDecode(raw);
      if (map is! Map) return;
      if (!mounted) return;
      setState(() {
        _streak = (map['streak'] as num?)?.toInt() ?? 0;
        _lastSparkDay = (map['lastSparkDay'] ?? '').toString();
        if (_lastSparkDay == _todayKey) {
          _todayMood = (map['todayMood'] ?? '').toString();
          if (_todayMood!.isEmpty) _todayMood = null;
        }
      });
    } catch (_) {}
  }

  Future<void> _persist({String? mood}) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _kPrefs,
        jsonEncode({
          'streak': _streak,
          'lastSparkDay': _lastSparkDay,
          'todayMood': mood ?? _todayMood ?? '',
        }),
      );
    } catch (_) {}
  }

  void _claimSpark(String mood) {
    final key = _todayKey;
    var streak = _streak;
    if (_lastSparkDay != key) {
      final yesterday = DateTime.now().subtract(const Duration(days: 1));
      final yKey =
          '${yesterday.year}-${yesterday.month.toString().padLeft(2, '0')}-${yesterday.day.toString().padLeft(2, '0')}';
      streak = _lastSparkDay == yKey ? streak + 1 : 1;
    }
    setState(() {
      _todayMood = mood;
      _lastSparkDay = key;
      _streak = streak;
    });
    unawaited(_persist(mood: mood));
    HapticFeedback.mediumImpact();
  }

  void _shuffleSpark() {
    HapticFeedback.selectionClick();
    setState(() {
      final pool = List<String>.from(_sparks)..remove(_spark);
      pool.shuffle(math.Random());
      _spark = pool.first;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: AnimatedBuilder(
        animation: Listenable.merge([_boot, _spin, _wave]),
        builder: (context, _) {
          final boot = Curves.easeOutCubic.transform(_boot.value.clamp(0.0, 1.0));
          return Stack(
            fit: StackFit.expand,
            children: [
              CustomPaint(
                painter: _SparkBackdropPainter(colors: _colors, spin: _spin.value, wave: _wave.value, boot: boot),
              ),
              if (!_ready) _bootOverlay(boot) else _readyBody(),
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
                Text(
                  'SYSTEM · SECURE',
                  style: TextStyle(color: _colors.first.withValues(alpha: 0.9), fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 11),
                ),
                const Spacer(),
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7)),
                ),
              ],
            ),
            const Spacer(),
            Transform.scale(
              scale: 0.75 + boot * 0.28,
              child: SizedBox(
                width: 180,
                height: 180,
                child: CustomPaint(
                  painter: _SparkOrbPainter(
                    colors: _colors,
                    pulse: 0.4 + math.sin(_wave.value * math.pi * 2) * 0.45,
                    orbit: _spin.value,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
            Text('VAULT CHANNEL', style: TextStyle(color: Colors.white.withValues(alpha: boot), fontSize: 24, fontWeight: FontWeight.w900, letterSpacing: 2)),
            const SizedBox(height: 10),
            Text('Opening daily spark…', style: TextStyle(color: Colors.white.withValues(alpha: 0.6 * boot), fontSize: 13, fontWeight: FontWeight.w600)),
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

  Widget _readyBody() {
    final claimed = _lastSparkDay == _todayKey && _todayMood != null;
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 6, 12, 0),
            child: Row(
              children: [
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20),
                ),
                const Expanded(
                  child: Text('DAILY SPARK', style: TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, letterSpacing: 1.5, fontSize: 13)),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(999),
                    border: Border.all(color: _colors.first.withValues(alpha: 0.45)),
                    color: _colors.first.withValues(alpha: 0.15),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.local_fire_department_rounded, color: Color(0xFFFBBF24), size: 15),
                      const SizedBox(width: 4),
                      Text('$_streak', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(18, 14, 18, 28),
              children: [
                _panel(
                  child: Column(
                    children: [
                      SizedBox(
                        width: 120,
                        height: 120,
                        child: CustomPaint(
                          painter: _SparkOrbPainter(
                            colors: _colors,
                            pulse: 0.35 + math.sin(_wave.value * math.pi * 2) * 0.25,
                            orbit: _spin.value,
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        _spark,
                        textAlign: TextAlign.center,
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 18, height: 1.35),
                      ),
                      const SizedBox(height: 14),
                      TextButton.icon(
                        onPressed: _shuffleSpark,
                        icon: const Icon(Icons.refresh_rounded, size: 18),
                        label: const Text('Another spark', style: TextStyle(fontWeight: FontWeight.w800)),
                        style: TextButton.styleFrom(foregroundColor: _colors.first),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                _panel(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        claimed ? 'Locked in for today' : 'How are you right now?',
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                      ),
                      const SizedBox(height: 12),
                      Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        children: [
                          for (final m in const ['Focused', 'Calm', 'Tired', 'Fired up', 'Grateful'])
                            ChoiceChip(
                              label: Text(m, style: TextStyle(fontWeight: FontWeight.w800, color: _todayMood == m ? Colors.black : Colors.white70)),
                              selected: _todayMood == m,
                              selectedColor: _colors.first,
                              backgroundColor: Colors.white.withValues(alpha: 0.06),
                              onSelected: (_) => _claimSpark(m),
                            ),
                        ],
                      ),
                      if (claimed) ...[
                        const SizedBox(height: 12),
                        Text(
                          'Come back tomorrow to keep the streak.',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 12, fontWeight: FontWeight.w600),
                        ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _panel({required Widget child}) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white.withValues(alpha: 0.06),
            border: Border.all(color: _colors.first.withValues(alpha: 0.28)),
          ),
          child: child,
        ),
      ),
    );
  }
}

class _SparkOrbPainter extends CustomPainter {
  _SparkOrbPainter({required this.colors, required this.pulse, required this.orbit});
  final List<Color> colors;
  final double pulse;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide * 0.32;
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        radius + i * 6 + pulse * 3,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: 0.12 * i),
      );
    }
    canvas.drawCircle(
      c,
      radius,
      Paint()
        ..shader = RadialGradient(colors: [
          Colors.white.withValues(alpha: 0.55),
          colors.first.withValues(alpha: 0.85),
          colors.last.withValues(alpha: 0.55),
        ]).createShader(Rect.fromCircle(center: c, radius: radius)),
    );
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: radius + 10),
      -math.pi / 2 + orbit * math.pi * 2,
      math.pi * 1.2,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.2
        ..color = colors.first.withValues(alpha: 0.9),
    );
  }

  @override
  bool shouldRepaint(covariant _SparkOrbPainter old) => old.pulse != pulse || old.orbit != orbit;
}

class _SparkBackdropPainter extends CustomPainter {
  _SparkBackdropPainter({required this.colors, required this.spin, required this.wave, required this.boot});
  final List<Color> colors;
  final double spin;
  final double wave;
  final double boot;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.36);
    for (var i = 1; i <= 4; i++) {
      canvas.drawCircle(
        c,
        36.0 * i + wave * 14,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: (0.11 / i) * boot),
      );
    }
    final grid = Paint()
      ..color = Colors.white.withValues(alpha: 0.035 * boot)
      ..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 28) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 28) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: 140),
      spin * math.pi * 2,
      1.3,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = colors.last.withValues(alpha: 0.4 * boot),
    );
  }

  @override
  bool shouldRepaint(covariant _SparkBackdropPainter old) => old.spin != spin || old.wave != wave || old.boot != boot;
}
