import 'dart:math' as math;

import 'package:flutter/material.dart';

enum NgmyBioRingAnimation { none, smoke, pulse, orbit, shimmer }

/// Animated aura around profile rings — smoke, glow pulse, orbiting sparks.
class NgmyBioRingAura extends StatefulWidget {
  const NgmyBioRingAura({
    super.key,
    required this.animation,
    required this.size,
    required this.accent,
    required this.child,
  });

  final NgmyBioRingAnimation animation;
  final double size;
  final Color accent;
  final Widget child;

  @override
  State<NgmyBioRingAura> createState() => _NgmyBioRingAuraState();
}

class _NgmyBioRingAuraState extends State<NgmyBioRingAura> with SingleTickerProviderStateMixin {
  late final AnimationController _tick;

  @override
  void initState() {
    super.initState();
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 4200))..repeat();
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.animation == NgmyBioRingAnimation.none) return widget.child;

    final pad = widget.size * 0.22;
    return SizedBox(
      width: widget.size + pad * 2,
      height: widget.size + pad * 2,
      child: AnimatedBuilder(
        animation: _tick,
        builder: (context, _) => CustomPaint(
          painter: _RingAuraPainter(
            animation: widget.animation,
            accent: widget.accent,
            phase: _tick.value,
            coreSize: widget.size,
          ),
          child: Center(child: widget.child),
        ),
      ),
    );
  }
}

class _RingAuraPainter extends CustomPainter {
  _RingAuraPainter({
    required this.animation,
    required this.accent,
    required this.phase,
    required this.coreSize,
  });

  final NgmyBioRingAnimation animation;
  final Color accent;
  final double phase;
  final double coreSize;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = coreSize / 2;

    switch (animation) {
      case NgmyBioRingAnimation.none:
        break;
      case NgmyBioRingAnimation.smoke:
        _paintSmoke(canvas, center, radius);
      case NgmyBioRingAnimation.pulse:
        _paintPulse(canvas, center, radius);
      case NgmyBioRingAnimation.orbit:
        _paintOrbit(canvas, center, radius);
      case NgmyBioRingAnimation.shimmer:
        _paintShimmer(canvas, center, radius);
    }
  }

  void _paintSmoke(Canvas canvas, Offset center, double radius) {
    final rng = math.Random(7);
    for (var i = 0; i < 10; i++) {
      final t = (phase + i * 0.09) % 1.0;
      final angle = (i / 10) * math.pi * 2 + phase * math.pi * 2;
      final dist = radius + 6 + t * 18;
      final p = center + Offset(math.cos(angle), math.sin(angle)) * dist;
      final alpha = (1 - t) * 0.35;
      final r = 3 + rng.nextDouble() * 5 + t * 4;
      canvas.drawCircle(
        p,
        r,
        Paint()
          ..color = accent.withValues(alpha: alpha)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6),
      );
    }
  }

  void _paintPulse(Canvas canvas, Offset center, double radius) {
    final wave = (math.sin(phase * math.pi * 2) + 1) / 2;
    for (var i = 0; i < 3; i++) {
      final t = (phase + i * 0.28) % 1.0;
      final r = radius + 4 + t * 22;
      canvas.drawCircle(
        center,
        r,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.5
          ..color = accent.withValues(alpha: (1 - t) * 0.45 * (0.6 + wave * 0.4)),
      );
    }
    canvas.drawCircle(
      center,
      radius + 2,
      Paint()
        ..color = accent.withValues(alpha: 0.12 + wave * 0.18)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10),
    );
  }

  void _paintOrbit(Canvas canvas, Offset center, double radius) {
    for (var i = 0; i < 6; i++) {
      final angle = phase * math.pi * 2 + (i / 6) * math.pi * 2;
      final orbitR = radius + 10;
      final p = center + Offset(math.cos(angle), math.sin(angle)) * orbitR;
      canvas.drawCircle(
        p,
        2.2,
        Paint()..color = accent.withValues(alpha: 0.75),
      );
      canvas.drawCircle(
        p,
        4.5,
        Paint()
          ..color = accent.withValues(alpha: 0.2)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4),
      );
    }
  }

  void _paintShimmer(Canvas canvas, Offset center, double radius) {
    final sweep = phase * math.pi * 2;
    final rect = Rect.fromCircle(center: center, radius: radius + 5);
    canvas.drawArc(
      rect,
      sweep,
      math.pi * 0.55,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..shader = SweepGradient(
          colors: [
            accent.withValues(alpha: 0),
            accent.withValues(alpha: 0.85),
            accent.withValues(alpha: 0),
          ],
          stops: const [0.0, 0.5, 1.0],
          transform: GradientRotation(sweep),
        ).createShader(rect),
    );
    canvas.drawCircle(
      center,
      radius + 3,
      Paint()
        ..color = accent.withValues(alpha: 0.08 + math.sin(phase * math.pi * 2) * 0.06)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8),
    );
  }

  @override
  bool shouldRepaint(covariant _RingAuraPainter oldDelegate) =>
      oldDelegate.phase != phase || oldDelegate.animation != animation;
}
