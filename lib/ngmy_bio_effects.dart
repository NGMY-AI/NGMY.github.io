import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

/// Visual atmosphere behind a bio page — rain, bokeh, aurora, etc.
enum NgmyBioSceneEffect {
  none,
  rain,
  rainBokeh,
  aurora,
  sparkle,
  oceanRipple,
  neonMesh,
}

/// Full-bleed animated or static scene behind bio content.
class NgmyBioSceneLayer extends StatefulWidget {
  const NgmyBioSceneLayer({
    super.key,
    required this.effect,
    required this.accent,
    this.animate = true,
  });

  final NgmyBioSceneEffect effect;
  final Color accent;
  final bool animate;

  @override
  State<NgmyBioSceneLayer> createState() => _NgmyBioSceneLayerState();
}

class _NgmyBioSceneLayerState extends State<NgmyBioSceneLayer> with SingleTickerProviderStateMixin {
  late final AnimationController _tick;

  @override
  void initState() {
    super.initState();
    _tick = AnimationController(vsync: this, duration: const Duration(seconds: 3))..repeat();
    if (!widget.animate) _tick.stop();
  }

  @override
  void didUpdateWidget(covariant NgmyBioSceneLayer oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.animate && !_tick.isAnimating) {
      _tick.repeat();
    } else if (!widget.animate) {
      _tick.stop();
    }
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.effect == NgmyBioSceneEffect.none) return const SizedBox.shrink();
    return AnimatedBuilder(
      animation: _tick,
      builder: (_, __) => CustomPaint(
        painter: NgmyBioScenePainter(
          effect: widget.effect,
          accent: widget.accent,
          phase: widget.animate ? _tick.value : 0.35,
        ),
        size: Size.infinite,
      ),
    );
  }
}

class NgmyBioScenePainter extends CustomPainter {
  NgmyBioScenePainter({required this.effect, required this.accent, required this.phase});

  final NgmyBioSceneEffect effect;
  final Color accent;
  final double phase;

  @override
  void paint(Canvas canvas, Size size) {
    switch (effect) {
      case NgmyBioSceneEffect.none:
        break;
      case NgmyBioSceneEffect.rain:
        _paintRain(canvas, size, heavy: false);
      case NgmyBioSceneEffect.rainBokeh:
        _paintBokeh(canvas, size);
        _paintRain(canvas, size, heavy: true);
        _paintGlassSheen(canvas, size);
      case NgmyBioSceneEffect.aurora:
        _paintAurora(canvas, size);
      case NgmyBioSceneEffect.sparkle:
        _paintSparkle(canvas, size);
      case NgmyBioSceneEffect.oceanRipple:
        _paintOceanRipple(canvas, size);
      case NgmyBioSceneEffect.neonMesh:
        _paintNeonMesh(canvas, size);
    }
  }

  void _paintBokeh(Canvas canvas, Size size) {
    final spots = <(double, double, double, Color)>[
      (0.18, 0.22, 48, const Color(0xFF22D3EE)),
      (0.72, 0.18, 62, const Color(0xFF06B6D4)),
      (0.55, 0.38, 36, const Color(0xFF38BDF8)),
      (0.32, 0.55, 28, accent.withValues(alpha: 0.55)),
      (0.82, 0.48, 40, const Color(0xFF0EA5E9)),
    ];
    for (final (fx, fy, r, c) in spots) {
      final paint = Paint()
        ..color = c.withValues(alpha: 0.22)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 18);
      canvas.drawCircle(Offset(size.width * fx, size.height * fy), r, paint);
    }
  }

  void _paintRain(Canvas canvas, Size size, {required bool heavy}) {
    final count = heavy ? 90 : 48;
    final rng = math.Random(17);
    final paint = Paint()
      ..strokeWidth = heavy ? 1.2 : 0.9
      ..strokeCap = StrokeCap.round;
    for (var i = 0; i < count; i++) {
      final seed = i * 1.618;
      final x = (rng.nextDouble() * size.width + seed * 37) % size.width;
      final speed = 0.6 + (i % 7) * 0.12;
      final len = heavy ? 14.0 + (i % 5) * 4 : 10.0 + (i % 4) * 3;
      final y = ((phase * size.height * speed) + seed * 41) % (size.height + len) - len;
      paint.color = Colors.white.withValues(alpha: heavy ? 0.14 + (i % 3) * 0.04 : 0.08);
      canvas.drawLine(Offset(x, y), Offset(x - 1.5, y + len), paint);
    }
  }

  void _paintGlassSheen(Canvas canvas, Size size) {
    final sheen = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [
          Colors.white.withValues(alpha: 0.06),
          Colors.transparent,
          Colors.white.withValues(alpha: 0.03),
        ],
        stops: const [0.0, 0.45, 1.0],
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height));
    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), sheen);
  }

  void _paintAurora(Canvas canvas, Size size) {
    final t = phase * math.pi * 2;
    final path = Path();
    path.moveTo(0, size.height * 0.15);
    for (var i = 0; i <= 8; i++) {
      final x = size.width * (i / 8);
      final y = size.height * (0.12 + 0.08 * math.sin(t + i * 0.9));
      path.lineTo(x, y);
    }
    path.lineTo(size.width, size.height * 0.45);
    path.lineTo(0, size.height * 0.38);
    path.close();
    final paint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          accent.withValues(alpha: 0.45),
          const Color(0xFF7C3AED).withValues(alpha: 0.25),
          Colors.transparent,
        ],
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height));
    canvas.drawPath(path, paint);
  }

  void _paintSparkle(Canvas canvas, Size size) {
    final rng = math.Random(42);
    for (var i = 0; i < 28; i++) {
      final x = rng.nextDouble() * size.width;
      final y = rng.nextDouble() * size.height * 0.7;
      final pulse = 0.35 + 0.65 * math.sin(phase * math.pi * 2 + i);
      final paint = Paint()..color = accent.withValues(alpha: 0.12 * pulse);
      canvas.drawCircle(Offset(x, y), 1.2 + pulse, paint);
    }
  }

  void _paintOceanRipple(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2;
    for (var w = 0; w < 4; w++) {
      final path = Path();
      final baseY = size.height * (0.55 + w * 0.08);
      path.moveTo(0, baseY);
      for (var x = 0.0; x <= size.width; x += 12) {
        final y = baseY + math.sin((x / size.width * 4 * math.pi) + phase * math.pi * 2 + w) * (8 - w * 1.5);
        path.lineTo(x, y);
      }
      paint.color = accent.withValues(alpha: 0.14 - w * 0.02);
      canvas.drawPath(path, paint);
    }
  }

  void _paintNeonMesh(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.6
      ..color = accent.withValues(alpha: 0.12);
    const step = 28.0;
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (var y = 0.0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
    final glow = Paint()
      ..color = accent.withValues(alpha: 0.08)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 24);
    canvas.drawCircle(Offset(size.width * 0.5, size.height * 0.25), size.width * 0.35, glow);
  }

  @override
  bool shouldRepaint(covariant NgmyBioScenePainter old) =>
      old.effect != effect || old.phase != phase || old.accent != accent;
}
