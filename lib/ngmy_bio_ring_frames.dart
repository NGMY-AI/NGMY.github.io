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
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat();
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.ringId == 'none') return widget.child;

    // Leave room for glow, ticks, and orbit dots so the ring is never boxed.
    final pad = math.max(widget.size * 0.52, 16.0);
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
    canvas.save();
    canvas.clipPath(
      Path()..addOval(Rect.fromCircle(center: o, radius: r - 0.5)),
      ClipOp.difference,
    );
    const boost = 1.55;
    double ringR(double extra) => r + extra * boost;
    double ringW(double w) => w * boost;

    switch (ringId) {
      case 'none':
        break;
      case 'white':
        _vibePulse(canvas, o, ringR(5), Colors.white.withValues(alpha: 0.35), phase);
        _luxBand(canvas, o, ringR(4), [Colors.white, const Color(0xFFF1F5F9), Colors.white], ringW(4.5));
        _softShadow(canvas, o, ringR(6), Colors.black.withValues(alpha: 0.14));
      case 'gold':
        _warmPulse(canvas, o, ringR(7), const Color(0xFFD4AF37));
        _luxBand(canvas, o, ringR(5), const [Color(0xFFFFF8DC), Color(0xFFD4AF37), Color(0xFF8B6914), Color(0xFFD4AF37)], ringW(5));
        _shimmerArc(canvas, o, ringR(6), const Color(0xFFFFF3C4), ringW(3));
      case 'silver':
        _vibePulse(canvas, o, ringR(6), const Color(0xFFCBD5E1), phase);
        _luxBand(canvas, o, ringR(5), const [Color(0xFFF8FAFC), Color(0xFFCBD5E1), Color(0xFF64748B), Color(0xFFE2E8F0)], ringW(4.5));
        _luxBand(canvas, o, ringR(2), const [Color(0xFFFFFFFF), Color(0xFFE2E8F0)], ringW(2));
      case 'rose_gold':
        _warmPulse(canvas, o, ringR(7), const Color(0xFFE8B4B8));
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFFFF1F2), Color(0xFFE8B4B8), Color(0xFFB76E79)], ringW(4.5));
        _pearlDots(canvas, o, ringR(8), 8, const Color(0xFFFDF2F8), phase);
      case 'emerald':
        _warmPulse(canvas, o, ringR(7), const Color(0xFF34D399));
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFA7F3D0), Color(0xFF059669), Color(0xFF064E3B)], ringW(4.5));
        _gemFacet(canvas, o, ringR(6.5), const Color(0xFF34D399));
      case 'midnight':
        _glowRing(canvas, o, ringR(6), const Color(0xFF6366F1), 0.35 + math.sin(phase * math.pi * 2) * 0.12);
        _luxBand(canvas, o, ringR(4), const [Color(0xFF1E293B), Color(0xFF0F172A), Color(0xFF312E81)], ringW(4));
      case 'double':
        _doubleOrbitRing(canvas, o, ringR(7.5), ringR(3.5), phase, ringW(3));
      case 'ornate':
        _braidRing(canvas, o, ringR(5), const Color(0xFFD4AF37), ringW(1.8));
        _pearlDots(canvas, o, ringR(9), 10, const Color(0xFFFFF8E7), phase);
      case 'thin_gold':
        _glowRing(canvas, o, ringR(5), const Color(0xFFD4AF37), 0.25 + math.sin(phase * math.pi * 2) * 0.15);
        _stroke(canvas, o, ringR(3), const Color(0xFFD4AF37), ringW(2.5));
        _shimmerArc(canvas, o, ringR(3.5), const Color(0xFFD4AF37), ringW(3));
      case 'glow_blue':
        _glowRing(canvas, o, ringR(7), const Color(0xFF38BDF8), 0.45 + math.sin(phase * math.pi * 2) * 0.15);
        _stroke(canvas, o, ringR(3.5), const Color(0xFF38BDF8), ringW(2.5));
        _rainbowWaves(canvas, o, ringR(9), phase, const Color(0xFF38BDF8));
      case 'sapphire':
        _shimmerArc(canvas, o, ringR(6), const Color(0xFF93C5FD), ringW(3));
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFDBEAFE), Color(0xFF2563EB), Color(0xFF1E3A8A)], ringW(4.5));
        _cardinalGems(canvas, o, ringR(6.5), const Color(0xFF3B82F6));
      case 'amethyst':
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFEDE9FE), Color(0xFF8B5CF6), Color(0xFF5B21B6)], ringW(4.5));
        _orbitBeads(canvas, o, ringR(9), 6, const Color(0xFFC4B5FD), phase);
      case 'fire':
        _warmPulse(canvas, o, ringR(8), const Color(0xFFFB923C));
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFFEF3C7), Color(0xFFF97316), Color(0xFFDC2626)], ringW(4.5));
      case 'ice':
        _frostSparkle(canvas, o, ringR(7), const Color(0xFFBAE6FD), phase);
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFF0F9FF), Color(0xFF7DD3FC), Color(0xFF0284C7)], ringW(4));
      case 'rainbow':
        _rainbowWaves(canvas, o, ringR(10), phase);
        _spectrumRingRotating(canvas, o, ringR(5.5), phase, ringW(5.5));
      case 'neon_pink':
        _glowRing(canvas, o, ringR(7), const Color(0xFFEC4899), 0.4 + math.sin(phase * math.pi * 2) * 0.2);
        _stroke(canvas, o, ringR(4), const Color(0xFFEC4899), ringW(3));
        _rainbowWaves(canvas, o, ringR(9), phase, const Color(0xFFEC4899));
      case 'sunburst':
        _fineRays(canvas, o, ringR(6), 28, const Color(0xFFF59E0B), phase);
        _luxBand(canvas, o, ringR(4), const [Color(0xFFFDE68A), Color(0xFFD97706)], ringW(3.5));
      case 'moonlight':
        _moonlightRing(canvas, o, ringR(5), phase);
      case 'olive':
        _vibePulse(canvas, o, ringR(6), const Color(0xFF84CC16), phase);
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFECFCCB), Color(0xFF65A30D), Color(0xFF365314)], ringW(4.5));
      case 'coral':
        _coralReefRing(canvas, o, ringR(5.5), phase, ringW(5));
      case 'lavender':
        _shimmerArc(canvas, o, ringR(6), const Color(0xFFDDD6FE), ringW(3));
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFF5F3FF), Color(0xFFC4B5FD), Color(0xFF7C3AED)], ringW(4.5));
      case 'bronze':
        _vibePulse(canvas, o, ringR(6), const Color(0xFFB45309), phase);
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFFEF3C7), Color(0xFFB45309), Color(0xFF78350F)], ringW(4.5));
        _microStuds(canvas, o, ringR(6), 14, const Color(0xFFFDE68A));
      case 'carbon':
        _vibePulse(canvas, o, ringR(6), const Color(0xFF71717A), phase);
        _stroke(canvas, o, ringR(4), const Color(0xFF3F3F46), ringW(3.5));
        _stroke(canvas, o, ringR(7), const Color(0xFF71717A), ringW(2));
      case 'holo':
        _prismFacetRing(canvas, o, ringR(5.5), phase, ringW(5.5));
      case 'crimson':
        _warmPulse(canvas, o, ringR(8), const Color(0xFFEF4444));
        _luxBand(canvas, o, ringR(4.5), const [Color(0xFFFEE2E2), Color(0xFFEF4444), Color(0xFF7F1D1D)], ringW(4.5));
        _orbitBeads(canvas, o, ringR(9), 8, const Color(0xFFFECACA), phase);
      case 'electric':
        _glowRing(canvas, o, ringR(8), const Color(0xFF22D3EE), 0.4 + math.sin(phase * math.pi * 2) * 0.18);
        _stroke(canvas, o, ringR(3.5), const Color(0xFF67E8F9), ringW(2.8));
        _fineRays(canvas, o, ringR(6.5), 16, const Color(0xFF22D3EE), phase);
      case 'sunset':
        _warmPulse(canvas, o, ringR(8), const Color(0xFFFB7185));
        _luxBand(canvas, o, ringR(5), const [Color(0xFFFDE68A), Color(0xFFF97316), Color(0xFFFB7185), Color(0xFF7C3AED)], ringW(5));
        _shimmerArc(canvas, o, ringR(6.5), const Color(0xFFFFF7ED), ringW(3));
      default:
        _vibePulse(canvas, o, ringR(5), accent, phase);
        _stroke(canvas, o, ringR(3.5), accent, ringW(3));
    }
    canvas.restore();
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

  void _shimmerArc(Canvas c, Offset o, double radius, Color color, [double strokeW = 2.5]) {
    c.drawArc(
      Rect.fromCircle(center: o, radius: radius),
      phase * math.pi * 2,
      math.pi * 0.45,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeW
        ..color = color.withValues(alpha: 0.9),
    );
  }

  void _pearlDots(Canvas c, Offset o, double radius, int n, Color color, [double animPhase = 0]) {
    for (var i = 0; i < n; i++) {
      final a = (i / n) * math.pi * 2 - math.pi / 2 + animPhase * math.pi * 0.5;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      final dot = 2.5 + math.sin(animPhase * math.pi * 2 + i) * 0.6;
      c.drawCircle(p, dot, Paint()..color = color);
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

  void _braidRing(Canvas c, Offset o, double radius, Color color, [double w = 1.2]) {
    for (var i = 0; i < 3; i++) {
      _stroke(c, o, radius + i * 2.2, color.withValues(alpha: 0.75 - i * 0.12), w);
    }
  }

  void _cardinalGems(Canvas c, Offset o, double radius, Color color) {
    for (var i = 0; i < 4; i++) {
      final a = (i / 4) * math.pi * 2;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawRect(Rect.fromCenter(center: p, width: 4, height: 4), Paint()..color = color);
    }
  }

  void _orbitBeads(Canvas c, Offset o, double radius, int n, Color color, [double animPhase = 0]) {
    for (var i = 0; i < n; i++) {
      final a = animPhase * math.pi * 2 + (i / n) * math.pi * 2;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawCircle(p, 3, Paint()..color = color);
    }
  }

  void _warmPulse(Canvas c, Offset o, double radius, Color color) {
    final a = 0.15 + (math.sin(phase * math.pi * 2) + 1) * 0.1;
    _glowRing(c, o, radius, color, a);
  }

  void _frostSparkle(Canvas c, Offset o, double radius, Color color, [double animPhase = 0]) {
    for (var i = 0; i < 8; i++) {
      final a = (i / 8) * math.pi * 2 + animPhase * math.pi * 2;
      final p = o + Offset(math.cos(a) * radius, math.sin(a) * radius);
      c.drawCircle(p, 2 + math.sin(animPhase * math.pi * 4 + i) * 0.8, Paint()..color = color.withValues(alpha: 0.9));
    }
  }

  void _vibePulse(Canvas c, Offset o, double radius, Color color, double animPhase) {
    final a = 0.12 + (math.sin(animPhase * math.pi * 2) + 1) * 0.14;
    _glowRing(c, o, radius, color, a);
  }

  void _rainbowWaves(Canvas c, Offset o, double radius, double animPhase, [Color? tint]) {
    for (var i = 0; i < 3; i++) {
      final wave = radius + i * 4 + math.sin(animPhase * math.pi * 2 + i) * 2;
      final alpha = 0.35 - i * 0.08;
      c.drawCircle(
        o,
        wave,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..color = (tint ?? const Color(0xFF8B5CF6)).withValues(alpha: alpha),
      );
    }
  }

  void _spectrumRingRotating(Canvas c, Offset o, double radius, double animPhase, double strokeW) {
    c.drawCircle(
      o,
      radius,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeW
        ..shader = SweepGradient(
          colors: const [
            Color(0xFFEF4444),
            Color(0xFFF97316),
            Color(0xFFEAB308),
            Color(0xFF22C55E),
            Color(0xFF3B82F6),
            Color(0xFF8B5CF6),
            Color(0xFFEC4899),
            Color(0xFFEF4444),
          ],
          transform: GradientRotation(animPhase * math.pi * 2),
        ).createShader(Rect.fromCircle(center: o, radius: radius + strokeW)),
    );
  }

  void _moonlightRing(Canvas c, Offset o, double radius, double animPhase) {
    final pulse = 0.2 + math.sin(animPhase * math.pi * 2) * 0.15;
    _glowRing(c, o, radius + 10, const Color(0xFF94A3B8), pulse);
    _glowRing(c, o, radius + 6, const Color(0xFFE2E8F0), pulse * 0.7);
    _luxBand(
      c,
      o,
      radius,
      const [Color(0xFFFFFFFF), Color(0xFFCBD5E1), Color(0xFF64748B), Color(0xFFCBD5E1), Color(0xFFFFFFFF)],
      5,
    );
    final moonR = radius + 7;
    final moonCenter = o + Offset(math.cos(animPhase * math.pi * 2) * 2, math.sin(animPhase * math.pi * 2) * 2);
    c.drawArc(
      Rect.fromCircle(center: moonCenter, radius: moonR),
      -math.pi * 0.35,
      math.pi * 1.1,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = const Color(0xFFF8FAFC).withValues(alpha: 0.9),
    );
    for (var i = 0; i < 5; i++) {
      final a = animPhase * math.pi * 2 + (i / 5) * math.pi * 2;
      final p = o + Offset(math.cos(a) * (radius + 12), math.sin(a) * (radius + 12));
      c.drawCircle(p, 1.8, Paint()..color = const Color(0xFFF1F5F9).withValues(alpha: 0.7 + math.sin(a * 3) * 0.2));
    }
  }

  void _fineRays(Canvas c, Offset o, double radius, int rays, Color color, [double animPhase = 0]) {
    for (var i = 0; i < rays; i++) {
      final a = (i / rays) * math.pi * 2 + animPhase * math.pi * 0.25;
      final len = 6 + math.sin(animPhase * math.pi * 2 + i) * 2;
      c.drawLine(
        o + Offset(math.cos(a) * (radius - 2), math.sin(a) * (radius - 2)),
        o + Offset(math.cos(a) * (radius + len), math.sin(a) * (radius + len)),
        Paint()
          ..strokeWidth = 1.2
          ..color = color.withValues(alpha: 0.35 + math.sin(animPhase * math.pi * 2 + i) * 0.15),
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

  void _doubleOrbitRing(Canvas c, Offset o, double outerR, double innerR, double animPhase, double strokeW) {
    _glowRing(c, o, outerR + 3, Colors.white, 0.18 + math.sin(animPhase * math.pi * 2) * 0.08);
    for (var i = 0; i < 16; i++) {
      final a = animPhase * math.pi * 2 + (i / 16) * math.pi * 2;
      final dash = i.isEven;
      if (!dash) continue;
      final p1 = o + Offset(math.cos(a) * (outerR - 2), math.sin(a) * (outerR - 2));
      final p2 = o + Offset(math.cos(a) * (outerR + 5), math.sin(a) * (outerR + 5));
      c.drawLine(p1, p2, Paint()
        ..strokeWidth = 2
        ..color = Colors.white.withValues(alpha: 0.75));
    }
    _stroke(c, o, outerR, Colors.white.withValues(alpha: 0.95), strokeW);
    _stroke(c, o, innerR, const Color(0xFFE2E8F0).withValues(alpha: 0.9), strokeW * 0.85);
    for (var i = 0; i < 3; i++) {
      final a = -animPhase * math.pi * 2 + (i / 3) * math.pi * 2;
      final p = o + Offset(math.cos(a) * outerR, math.sin(a) * outerR);
      c.drawCircle(p, 3.5, Paint()..color = Colors.white);
    }
  }

  void _coralReefRing(Canvas c, Offset o, double radius, double animPhase, double strokeW) {
    _warmPulse(c, o, radius + 8, const Color(0xFFFB7185));
    const colors = [Color(0xFFFFF1F2), Color(0xFFFB7185), Color(0xFFF43F5E), Color(0xFFE11D48)];
    for (var i = 0; i < 14; i++) {
      final a = (i / 14) * math.pi * 2 + animPhase * 0.4;
      final bump = radius + 4 + math.sin(i * 1.7 + animPhase * math.pi * 2) * 3;
      final p = o + Offset(math.cos(a) * bump, math.sin(a) * bump);
      c.drawCircle(p, 3.2, Paint()..color = colors[i % colors.length]);
    }
    _luxBand(c, o, radius, const [Color(0xFFFFE4E6), Color(0xFFFB7185), Color(0xFFE11D48), Color(0xFFFB7185)], strokeW);
    for (var i = 0; i < 5; i++) {
      final a = animPhase * math.pi * 1.5 + (i / 5) * math.pi * 2;
      final p = o + Offset(math.cos(a) * (radius - 6), math.sin(a) * (radius - 6));
      c.drawCircle(p, 2, Paint()..color = const Color(0xFFFFF1F2).withValues(alpha: 0.9));
    }
  }

  void _prismFacetRing(Canvas c, Offset o, double radius, double animPhase, double strokeW) {
    _glowRing(c, o, radius + 8, const Color(0xFF22D3EE), 0.2 + math.sin(animPhase * math.pi * 2) * 0.12);
    for (var i = 0; i < 6; i++) {
      final a = (i / 6) * math.pi * 2 + animPhase * math.pi * 0.5;
      final p1 = o + Offset(math.cos(a) * (radius - 3), math.sin(a) * (radius - 3));
      final p2 = o + Offset(math.cos(a + math.pi / 3) * (radius - 3), math.sin(a + math.pi / 3) * (radius - 3));
      c.drawLine(p1, p2, Paint()
        ..strokeWidth = 1.5
        ..color = const Color(0xFFA78BFA).withValues(alpha: 0.55));
    }
    c.drawCircle(
      o,
      radius,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeW
        ..shader = SweepGradient(
          colors: const [
            Color(0xFF22D3EE),
            Color(0xFF34D399),
            Color(0xFFFBBF24),
            Color(0xFFF472B6),
            Color(0xFFA78BFA),
            Color(0xFF22D3EE),
          ],
          transform: GradientRotation(animPhase * math.pi * 2),
        ).createShader(Rect.fromCircle(center: o, radius: radius + strokeW)),
    );
    _shimmerArc(c, o, radius + 2, const Color(0xFFFFFFFF), strokeW * 0.55);
  }

  @override
  bool shouldRepaint(covariant NgmyBioRingFramePainter old) =>
      old.phase != phase || old.ringId != ringId;
}
