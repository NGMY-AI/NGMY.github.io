import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

/// Visual atmosphere behind a bio page — each template gets a unique effect.
enum NgmyBioSceneEffect {
  none,
  rain,
  rainBokeh,
  aurora,
  sparkle,
  oceanRipple,
  neonMesh,
  crimsonGrid,
  hexLattice,
  starfield,
  circuitBoard,
  slateMesh,
  cyberScan,
  cottonClouds,
  pearlSheen,
  frostCrystals,
  marbleVeins,
  paperGrain,
  lightRays,
  goldDust,
  emberGlow,
  prismShimmer,
  petalDrift,
  leafCanopy,
  cyanPulse,
  goldStream,
  tealBubbles,
  champagneFloat,
  cosmicDust,
  waveLattice,
  northernLights,
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
    return SizedBox.expand(
      child: AnimatedBuilder(
        animation: _tick,
        builder: (context, _) => CustomPaint(
          painter: NgmyBioScenePainter(
            effect: widget.effect,
            accent: widget.accent,
            phase: widget.animate ? _tick.value : 0.35,
          ),
          child: const SizedBox.expand(),
        ),
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
        _paintGrid(canvas, size, step: 28, alpha: 0.12, glow: true);
      case NgmyBioSceneEffect.crimsonGrid:
        _paintGrid(canvas, size, step: 24, alpha: 0.18, glow: false);
      case NgmyBioSceneEffect.hexLattice:
        _paintHexLattice(canvas, size);
      case NgmyBioSceneEffect.starfield:
        _paintStarfield(canvas, size);
      case NgmyBioSceneEffect.circuitBoard:
        _paintCircuitBoard(canvas, size);
      case NgmyBioSceneEffect.slateMesh:
        _paintGrid(canvas, size, step: 22, alpha: 0.1, glow: false, secondary: const Color(0xFF94A3B8));
      case NgmyBioSceneEffect.cyberScan:
        _paintCyberScan(canvas, size);
      case NgmyBioSceneEffect.cottonClouds:
        _paintCottonClouds(canvas, size);
      case NgmyBioSceneEffect.pearlSheen:
        _paintPearlSheen(canvas, size);
      case NgmyBioSceneEffect.frostCrystals:
        _paintFrostCrystals(canvas, size);
      case NgmyBioSceneEffect.marbleVeins:
        _paintMarbleVeins(canvas, size);
      case NgmyBioSceneEffect.paperGrain:
        _paintPaperGrain(canvas, size);
      case NgmyBioSceneEffect.lightRays:
        _paintLightRays(canvas, size);
      case NgmyBioSceneEffect.goldDust:
        _paintGoldDust(canvas, size);
      case NgmyBioSceneEffect.emberGlow:
        _paintEmberGlow(canvas, size);
      case NgmyBioSceneEffect.prismShimmer:
        _paintPrismShimmer(canvas, size);
      case NgmyBioSceneEffect.petalDrift:
        _paintPetalDrift(canvas, size);
      case NgmyBioSceneEffect.leafCanopy:
        _paintLeafCanopy(canvas, size);
      case NgmyBioSceneEffect.cyanPulse:
        _paintCyanPulse(canvas, size);
      case NgmyBioSceneEffect.goldStream:
        _paintGoldStream(canvas, size);
      case NgmyBioSceneEffect.tealBubbles:
        _paintTealBubbles(canvas, size);
      case NgmyBioSceneEffect.champagneFloat:
        _paintChampagneFloat(canvas, size);
      case NgmyBioSceneEffect.cosmicDust:
        _paintCosmicDust(canvas, size);
      case NgmyBioSceneEffect.waveLattice:
        _paintWaveLattice(canvas, size);
      case NgmyBioSceneEffect.northernLights:
        _paintNorthernLights(canvas, size);
    }
  }

  void _paintGrid(Canvas canvas, Size size, {required double step, required double alpha, required bool glow, Color? secondary}) {
    final c = secondary ?? accent;
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.7
      ..color = c.withValues(alpha: alpha);
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (var y = 0.0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
    if (glow) {
      final g = Paint()
        ..color = accent.withValues(alpha: 0.07)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 24);
      canvas.drawCircle(Offset(size.width * 0.5, size.height * 0.3), size.width * 0.3, g);
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
        colors: [Colors.white.withValues(alpha: 0.06), Colors.transparent, Colors.white.withValues(alpha: 0.03)],
        stops: const [0.0, 0.45, 1.0],
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height));
    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), sheen);
  }

  void _paintAurora(Canvas canvas, Size size) => _paintNorthernLights(canvas, size, variant: 0);

  void _paintNorthernLights(Canvas canvas, Size size, {int variant = 1}) {
    final t = phase * math.pi * 2;
    for (var band = 0; band < 3; band++) {
      final path = Path();
      path.moveTo(0, size.height * (0.1 + band * 0.06));
      for (var i = 0; i <= 10; i++) {
        final x = size.width * (i / 10);
        final y = size.height * (0.1 + band * 0.08 + 0.04 * math.sin(t + i * 0.8 + band));
        path.lineTo(x, y);
      }
      path.lineTo(size.width, size.height * 0.5);
      path.lineTo(0, size.height * 0.42);
      path.close();
      final colors = variant == 0
          ? [accent.withValues(alpha: 0.4), const Color(0xFF7C3AED).withValues(alpha: 0.2), Colors.transparent]
          : [const Color(0xFF34D399).withValues(alpha: 0.35), accent.withValues(alpha: 0.25), Colors.transparent];
      canvas.drawPath(
        path,
        Paint()
          ..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: colors)
              .createShader(Rect.fromLTWH(0, 0, size.width, size.height)),
      );
    }
  }

  void _paintSparkle(Canvas canvas, Size size) {
    final rng = math.Random(42);
    for (var i = 0; i < 28; i++) {
      final x = rng.nextDouble() * size.width;
      final y = rng.nextDouble() * size.height * 0.7;
      final pulse = 0.35 + 0.65 * math.sin(phase * math.pi * 2 + i);
      canvas.drawCircle(Offset(x, y), 1.2 + pulse, Paint()..color = accent.withValues(alpha: 0.12 * pulse));
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

  void _paintHexLattice(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.8
      ..color = accent.withValues(alpha: 0.14);
    const r = 16.0;
    final h = r * math.sqrt(3);
    for (var row = 0.0; row < size.height + h; row += h * 0.75) {
      final offset = ((row / (h * 0.75)).round() % 2) * r * 1.5;
      for (var col = -r; col < size.width + r; col += r * 3) {
        final cx = col + offset;
        final cy = row;
        final path = Path();
        for (var i = 0; i < 6; i++) {
          final a = math.pi / 3 * i - math.pi / 6;
          final p = Offset(cx + r * math.cos(a), cy + r * math.sin(a));
          i == 0 ? path.moveTo(p.dx, p.dy) : path.lineTo(p.dx, p.dy);
        }
        path.close();
        canvas.drawPath(path, paint);
      }
    }
  }

  void _paintStarfield(Canvas canvas, Size size) {
    final rng = math.Random(99);
    for (var i = 0; i < 80; i++) {
      final x = rng.nextDouble() * size.width;
      final y = rng.nextDouble() * size.height;
      final tw = 0.3 + 0.7 * math.sin(phase * math.pi * 2 + i * 0.7);
      canvas.drawCircle(Offset(x, y), 0.6 + (i % 3) * 0.4, Paint()..color = Colors.white.withValues(alpha: 0.15 * tw));
    }
  }

  void _paintCircuitBoard(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1
      ..color = accent.withValues(alpha: 0.16);
    final rng = math.Random(31);
    for (var i = 0; i < 12; i++) {
      final x = rng.nextDouble() * size.width;
      final y = rng.nextDouble() * size.height;
      final path = Path()..moveTo(x, y);
      var cx = x;
      var cy = y;
      for (var s = 0; s < 4; s++) {
        if (s % 2 == 0) {
          cx += (rng.nextBool() ? 1 : -1) * (30 + rng.nextInt(40));
          path.lineTo(cx, cy);
        } else {
          cy += (rng.nextBool() ? 1 : -1) * (20 + rng.nextInt(35));
          path.lineTo(cx, cy);
        }
      }
      canvas.drawPath(path, paint);
      canvas.drawCircle(Offset(cx, cy), 2.5, Paint()..color = accent.withValues(alpha: 0.35));
    }
  }

  void _paintCyberScan(Canvas canvas, Size size) {
    _paintGrid(canvas, size, step: 32, alpha: 0.08, glow: false);
    final y = size.height * phase;
    final scan = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [Colors.transparent, accent.withValues(alpha: 0.25), Colors.transparent],
      ).createShader(Rect.fromLTWH(0, y - 40, size.width, 80));
    canvas.drawRect(Rect.fromLTWH(0, y - 40, size.width, 80), scan);
  }

  void _paintCottonClouds(Canvas canvas, Size size) {
    for (var i = 0; i < 5; i++) {
      final x = size.width * (0.1 + i * 0.18 + 0.04 * math.sin(phase * math.pi * 2 + i));
      final y = size.height * (0.55 + (i % 3) * 0.12);
      final paint = Paint()
        ..color = accent.withValues(alpha: 0.12)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 28);
      canvas.drawCircle(Offset(x, y), 36 + i * 8.0, paint);
      canvas.drawCircle(Offset(x + 24, y - 8), 28 + i * 6.0, paint);
    }
  }

  void _paintPearlSheen(Canvas canvas, Size size) {
    for (var i = 0; i < 6; i++) {
      final t = (phase + i * 0.15) % 1.0;
      final paint = Paint()
        ..shader = RadialGradient(
          colors: [Colors.white.withValues(alpha: 0.2), accent.withValues(alpha: 0.05), Colors.transparent],
        ).createShader(Rect.fromCircle(center: Offset(size.width * (0.15 + i * 0.14), size.height * (0.3 + t * 0.5)), radius: 60));
      canvas.drawCircle(Offset(size.width * (0.15 + i * 0.14), size.height * (0.3 + t * 0.5)), 50, paint);
    }
  }

  void _paintFrostCrystals(Canvas canvas, Size size) {
    final rng = math.Random(55);
    for (var i = 0; i < 24; i++) {
      final x = rng.nextDouble() * size.width;
      final y = rng.nextDouble() * size.height;
      final paint = Paint()
        ..color = accent.withValues(alpha: 0.15)
        ..strokeWidth = 1;
      for (var a = 0; a < 6; a++) {
        final ang = a * math.pi / 3;
        canvas.drawLine(Offset(x, y), Offset(x + 8 * math.cos(ang), y + 8 * math.sin(ang)), paint);
      }
    }
  }

  void _paintMarbleVeins(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2
      ..color = accent.withValues(alpha: 0.08);
    for (var i = 0; i < 5; i++) {
      final path = Path()..moveTo(0, size.height * (0.2 + i * 0.15));
      for (var x = 0.0; x <= size.width; x += 20) {
        path.lineTo(x, size.height * (0.2 + i * 0.15) + math.sin(x * 0.02 + i) * 18);
      }
      canvas.drawPath(path, paint);
    }
  }

  void _paintPaperGrain(Canvas canvas, Size size) {
    final rng = math.Random(12);
    for (var i = 0; i < 200; i++) {
      canvas.drawCircle(
        Offset(rng.nextDouble() * size.width, rng.nextDouble() * size.height),
        0.5,
        Paint()..color = accent.withValues(alpha: 0.04),
      );
    }
  }

  void _paintLightRays(Canvas canvas, Size size) {
    final center = Offset(size.width * 0.5, -20);
    for (var i = 0; i < 7; i++) {
      final a = -math.pi / 2 + (i - 3) * 0.18 + math.sin(phase * math.pi * 2) * 0.05;
      final path = Path()
        ..moveTo(center.dx, center.dy)
        ..lineTo(center.dx + size.height * 1.4 * math.cos(a), center.dy + size.height * 1.4 * math.sin(a))
        ..lineTo(center.dx + size.height * 1.4 * math.cos(a + 0.06), center.dy + size.height * 1.4 * math.sin(a + 0.06))
        ..close();
      canvas.drawPath(path, Paint()..color = accent.withValues(alpha: 0.06));
    }
  }

  void _paintGoldDust(Canvas canvas, Size size) {
    final rng = math.Random(77);
    for (var i = 0; i < 40; i++) {
      final x = (rng.nextDouble() * size.width + phase * 40) % size.width;
      final y = (rng.nextDouble() * size.height + phase * 20) % size.height;
      canvas.drawCircle(Offset(x, y), 1.5, Paint()..color = accent.withValues(alpha: 0.25));
    }
  }

  void _paintEmberGlow(Canvas canvas, Size size) {
    for (var i = 0; i < 16; i++) {
      final t = (phase + i * 0.06) % 1.0;
      final x = size.width * (0.1 + (i % 8) * 0.11);
      final y = size.height * (0.55 + t * 0.4);
      canvas.drawCircle(
        Offset(x, y),
        3 + t * 4,
        Paint()
          ..color = accent.withValues(alpha: (1 - t) * 0.4)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6),
      );
    }
  }

  void _paintPrismShimmer(Canvas canvas, Size size) {
    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    canvas.drawRect(
      rect,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment(-1 + phase * 2, -1),
          end: Alignment(phase * 2, 1),
          colors: [
            accent.withValues(alpha: 0),
            const Color(0xFFEC4899).withValues(alpha: 0.08),
            const Color(0xFF8B5CF6).withValues(alpha: 0.1),
            accent.withValues(alpha: 0),
          ],
        ).createShader(rect),
    );
  }

  void _paintPetalDrift(Canvas canvas, Size size) {
    for (var i = 0; i < 12; i++) {
      final t = (phase + i * 0.08) % 1.0;
      final x = size.width * (0.05 + (i % 6) * 0.16 + math.sin(t * math.pi * 2) * 0.04);
      final y = size.height * t;
      canvas.drawOval(
        Rect.fromCenter(center: Offset(x, y), width: 8, height: 12),
        Paint()..color = accent.withValues(alpha: 0.2),
      );
    }
  }

  void _paintLeafCanopy(Canvas canvas, Size size) {
    for (var i = 0; i < 8; i++) {
      final paint = Paint()
        ..color = accent.withValues(alpha: 0.1)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 16);
      canvas.drawCircle(Offset(size.width * (0.1 + i * 0.12), size.height * 0.15), 30 + i * 4.0, paint);
    }
  }

  void _paintCyanPulse(Canvas canvas, Size size) {
    final wave = (math.sin(phase * math.pi * 2) + 1) / 2;
    for (var i = 0; i < 4; i++) {
      final r = size.width * (0.15 + i * 0.12 + wave * 0.04);
      canvas.drawCircle(
        Offset(size.width * 0.5, size.height * 0.65),
        r,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.5
          ..color = accent.withValues(alpha: 0.12 - i * 0.02),
      );
    }
  }

  void _paintGoldStream(Canvas canvas, Size size) {
    for (var i = 0; i < 20; i++) {
      final t = (phase + i * 0.05) % 1.0;
      canvas.drawLine(
        Offset(size.width * (i / 20), size.height * (1 - t)),
        Offset(size.width * (i / 20) + 8, size.height * (1 - t) + 24),
        Paint()
          ..strokeWidth = 1.2
          ..color = accent.withValues(alpha: 0.2),
      );
    }
  }

  void _paintTealBubbles(Canvas canvas, Size size) {
    for (var i = 0; i < 10; i++) {
      final t = (phase + i * 0.1) % 1.0;
      final x = size.width * (0.08 + (i % 5) * 0.18);
      final y = size.height * (0.9 - t * 0.8);
      canvas.drawCircle(
        Offset(x, y),
        4 + i * 1.5,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = accent.withValues(alpha: 0.2),
      );
    }
  }

  void _paintChampagneFloat(Canvas canvas, Size size) {
    for (var i = 0; i < 18; i++) {
      final t = (phase + i * 0.07) % 1.0;
      canvas.drawCircle(
        Offset(size.width * (0.05 + (i % 9) * 0.1), size.height * (0.95 - t * 0.9)),
        1.5 + (i % 3),
        Paint()..color = accent.withValues(alpha: 0.22 * (1 - t * 0.5)),
      );
    }
  }

  void _paintCosmicDust(Canvas canvas, Size size) {
    final rng = math.Random(3);
    for (var i = 0; i < 60; i++) {
      canvas.drawCircle(
        Offset(rng.nextDouble() * size.width, rng.nextDouble() * size.height),
        0.8,
        Paint()..color = Colors.white.withValues(alpha: 0.08),
      );
    }
  }

  void _paintWaveLattice(Canvas canvas, Size size) {
    _paintOceanRipple(canvas, size);
    _paintGrid(canvas, size, step: 36, alpha: 0.06, glow: false);
  }

  @override
  bool shouldRepaint(covariant NgmyBioScenePainter old) =>
      old.effect != effect || old.phase != phase || old.accent != accent;
}
