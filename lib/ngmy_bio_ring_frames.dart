import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Premium profile ring frames — each ring has a distinct jewelry-style design.
class NgmyBioRingFrame extends StatefulWidget {
  const NgmyBioRingFrame({
    super.key,
    required this.ringId,
    required this.size,
    required this.accent,
    required this.child,
  });

  final String ringId;
  final double size;
  final Color accent;
  final Widget child;

  @override
  State<NgmyBioRingFrame> createState() => _NgmyBioRingFrameState();
}

class _NgmyBioRingFrameState extends State<NgmyBioRingFrame> with SingleTickerProviderStateMixin {
  late final AnimationController _tick;

  @override
  void initState() {
    super.initState();
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 4800))..repeat();
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.ringId == 'none') return widget.child;

    final pad = widget.size * 0.11;
    final outer = widget.size + pad * 2;
    return SizedBox(
      width: outer,
      height: outer,
      child: AnimatedBuilder(
        animation: _tick,
        builder: (context, _) => CustomPaint(
          painter: NgmyBioRingFramePainter(
            ringId: widget.ringId,
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

class NgmyBioRingFramePainter extends CustomPainter {
  NgmyBioRingFramePainter({
    required this.ringId,
    required this.accent,
    required this.phase,
    required this.coreSize,
  });

  final String ringId;
  final Color accent;
  final double phase;
  final double coreSize;

  @override
  void paint(Canvas canvas, Size size) {
    final o = Offset(size.width / 2, size.height / 2);
    final r = coreSize / 2;
    switch (ringId) {
      case 'none':
        break;
      case 'white':
        _luxBand(canvas, o, r + 3, [Colors.white, const Color(0xFFF1F5F9)], 3);
        _softShadow(canvas, o, r + 4, Colors.black.withValues(alpha: 0.12));
      case 'gold':
        _luxBand(canvas, o, r + 4, const [Color(0xFFFFF8DC), Color(0xFFD4AF37), Color(0xFF8B6914)], 3.5);
        _shimmerArc(canvas, o, r + 5, const Color(0xFFFFF3C4));
      case 'silver':
        _luxBand(canvas, o, r + 4, const [Color(0xFFF8FAFC), Color(0xFFCBD5E1), Color(0xFF64748B)], 3);
        _luxBand(canvas, o, r + 1.5, const [Color(0xFFFFFFFF), Color(0xFFE2E8F0)], 1.5);
      case 'rose_gold':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFFFF1F2), Color(0xFFE8B4B8), Color(0xFFB76E79)], 3);
        _pearlDots(canvas, o, r + 6, 6, const Color(0xFFFDF2F8));
      case 'emerald':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFA7F3D0), Color(0xFF059669), Color(0xFF064E3B)], 3);
        _gemFacet(canvas, o, r + 5, const Color(0xFF34D399));
      case 'midnight':
        _glowRing(canvas, o, r + 3, const Color(0xFF6366F1), 0.35);
        _luxBand(canvas, o, r + 3, const [Color(0xFF1E293B), Color(0xFF0F172A)], 2.5);
      case 'double':
        _stroke(canvas, o, r + 6, Colors.white.withValues(alpha: 0.9), 1.8);
        _stroke(canvas, o, r + 2.5, Colors.white.withValues(alpha: 0.7), 1.8);
      case 'ornate':
        _braidRing(canvas, o, r + 4, const Color(0xFFD4AF37));
        _pearlDots(canvas, o, r + 7, 8, const Color(0xFFFFF8E7));
      case 'thin_gold':
        _stroke(canvas, o, r + 2, const Color(0xFFD4AF37), 1.2);
        _shimmerArc(canvas, o, r + 2.5, const Color(0xFFD4AF37));
      case 'glow_blue':
        _glowRing(canvas, o, r + 5, const Color(0xFF38BDF8), 0.45 + math.sin(phase * math.pi * 2) * 0.1);
        _stroke(canvas, o, r + 2.5, const Color(0xFF38BDF8), 1.5);
      case 'sapphire':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFDBEAFE), Color(0xFF2563EB), Color(0xFF1E3A8A)], 3);
        _cardinalGems(canvas, o, r + 5, const Color(0xFF3B82F6));
      case 'amethyst':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFEDE9FE), Color(0xFF8B5CF6), Color(0xFF5B21B6)], 3);
        _orbitBeads(canvas, o, r + 7, 5, const Color(0xFFC4B5FD));
      case 'fire':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFFEF3C7), Color(0xFFF97316), Color(0xFFDC2626)], 3);
        _warmPulse(canvas, o, r + 5, const Color(0xFFFB923C));
      case 'ice':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFF0F9FF), Color(0xFF7DD3FC), Color(0xFF0284C7)], 2.5);
        _frostSparkle(canvas, o, r + 5, const Color(0xFFBAE6FD));
      case 'rainbow':
        _spectrumRing(canvas, o, r + 4);
      case 'neon_pink':
        _glowRing(canvas, o, r + 5, const Color(0xFFEC4899), 0.4);
        _stroke(canvas, o, r + 3, const Color(0xFFEC4899), 2);
      case 'sunburst':
        _fineRays(canvas, o, r + 5, 24, const Color(0xFFF59E0B));
        _luxBand(canvas, o, r + 3, const [Color(0xFFFDE68A), Color(0xFFD97706)], 2);
      case 'moonlight':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFE2E8F0), Color(0xFF94A3B8), Color(0xFF475569)], 2.5);
        _glowRing(canvas, o, r + 6, const Color(0xFFCBD5E1), 0.25);
      case 'olive':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFECFCCB), Color(0xFF65A30D), Color(0xFF365314)], 3);
      case 'coral':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFFFE4E6), Color(0xFFFB7185), Color(0xFFE11D48)], 3);
        _softShadow(canvas, o, r + 4, const Color(0xFFFDA4AF).withValues(alpha: 0.3));
      case 'lavender':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFF5F3FF), Color(0xFFC4B5FD), Color(0xFF7C3AED)], 3);
        _shimmerArc(canvas, o, r + 4.5, const Color(0xFFDDD6FE));
      case 'bronze':
        _luxBand(canvas, o, r + 3.5, const [Color(0xFFFEF3C7), Color(0xFFB45309), Color(0xFF78350F)], 3);
        _microStuds(canvas, o, r + 4.5, 12, const Color(0xFFFDE68A));
      case 'carbon':
        _stroke(canvas, o, r + 3, const Color(0xFF3F3F46), 2.5);
        _stroke(canvas, o, r + 5.5, const Color(0xFF71717A), 1);
      case 'holo':
        _holoBand(canvas, o, r + 4, phase);
      default:
        _stroke(canvas, o, r + 2.5, accent, 2);
    }
  }

  void _stroke(Canvas c, Offset o, double radius, Color color, double w) {
    c.drawCircle(o, radius, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = w
      ..color = color);
  }

  void _luxBand(Canvas c, Offset o, double radius, List<Color> colors, double w) {
    c.drawCircle(
      o,
      radius,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = w
        ..shader = SweepGradient(colors: [...colors, colors.first]).createShader(Rect.fromCircle(center: o, radius: radius + w)),
    );
  }

  void _softShadow(Canvas c, Offset o, double radius, Color color) {
    c.drawCircle(o, radius, Paint()
      ..color = color
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
  }

  void _glowRing(Canvas c, Offset o, double radius, Color color, double alpha) {
    c.drawCircle(o, radius, Paint()
      ..color = color.withValues(alpha: alpha)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
  }

  void _shimmerArc(Canvas c, Offset o, double radius, Color color) {
    c.drawArc(
      Rect.fromCircle(center: o, radius: radius),
      phase * math.pi * 2,
      math.pi * 0.4,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.5
        ..color = color.withValues(alpha: 0.85),
    );
  }

  void _pearlDots(Canvas c, Offset o, double radius, int n, Color color) {
    for (var i = 0; i < n; i++) {
      final a = (i / n) * math.pi * 2 - math.pi / 2;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawCircle(p, 2, Paint()..color = color);
    }
  }

  void _gemFacet(Canvas c, Offset o, double radius, Color color) {
    _stroke(c, o, radius, color.withValues(alpha: 0.5), 1);
    for (var i = 0; i < 4; i++) {
      final a = (i / 4) * math.pi * 2 + math.pi / 4;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawCircle(p, 2.5, Paint()..color = color);
    }
  }

  void _braidRing(Canvas c, Offset o, double radius, Color color) {
    for (var i = 0; i < 3; i++) {
      _stroke(c, o, radius + i * 1.8, color.withValues(alpha: 0.7 - i * 0.15), 1.2);
    }
  }

  void _cardinalGems(Canvas c, Offset o, double radius, Color color) {
    for (var i = 0; i < 4; i++) {
      final a = (i / 4) * math.pi * 2;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawRect(Rect.fromCenter(center: p, width: 4, height: 4), Paint()..color = color);
    }
  }

  void _orbitBeads(Canvas c, Offset o, double radius, int n, Color color) {
    for (var i = 0; i < n; i++) {
      final a = phase * math.pi * 2 + (i / n) * math.pi * 2;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawCircle(p, 2.2, Paint()..color = color);
    }
  }

  void _warmPulse(Canvas c, Offset o, double radius, Color color) {
    final a = 0.15 + (math.sin(phase * math.pi * 2) + 1) * 0.1;
    _glowRing(c, o, radius, color, a);
  }

  void _frostSparkle(Canvas c, Offset o, double radius, Color color) {
    for (var i = 0; i < 6; i++) {
      final a = (i / 6) * math.pi * 2 + phase;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawCircle(p, 1.5, Paint()..color = color.withValues(alpha: 0.8));
    }
  }

  void _spectrumRing(Canvas c, Offset o, double radius) {
    const colors = [Color(0xFFEF4444), Color(0xFFF97316), Color(0xFFEAB308), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFF8B5CF6)];
    final rect = Rect.fromCircle(center: o, radius: radius);
    for (var i = 0; i < colors.length; i++) {
      c.drawArc(rect, (i / colors.length) * math.pi * 2, math.pi * 2 / colors.length, false, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = colors[i]);
    }
  }

  void _fineRays(Canvas c, Offset o, double radius, int rays, Color color) {
    for (var i = 0; i < rays; i++) {
      final a = (i / rays) * math.pi * 2;
      c.drawLine(
        o + Offset(math.cos(a) * (radius - 2), math.sin(a) * (radius - 2)),
        o + Offset(math.cos(a) * (radius + 6), math.sin(a) * (radius + 6)),
        Paint()
          ..strokeWidth = 1
          ..color = color.withValues(alpha: 0.35),
      );
    }
  }

  void _microStuds(Canvas c, Offset o, double radius, int n, Color color) {
    for (var i = 0; i < n; i++) {
      final a = (i / n) * math.pi * 2;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawCircle(p, 1.5, Paint()..color = color);
    }
  }

  void _holoBand(Canvas c, Offset o, double radius, double t) {
    c.drawCircle(
      o,
      radius,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..shader = SweepGradient(
          colors: const [Color(0xFF22D3EE), Color(0xFFA78BFA), Color(0xFFF472B6), Color(0xFFFBBF24), Color(0xFF22D3EE)],
          transform: GradientRotation(t * math.pi * 2),
        ).createShader(Rect.fromCircle(center: o, radius: radius)),
    );
  }

  @override
  bool shouldRepaint(covariant NgmyBioRingFramePainter old) =>
      old.phase != phase || old.ringId != ringId;
}
