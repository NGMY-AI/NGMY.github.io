import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Each ring id maps to a structurally unique frame — not just color swaps.
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
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 3600))..repeat();
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.ringId == 'none') return widget.child;

    final pad = widget.size * 0.14;
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
    final center = Offset(size.width / 2, size.height / 2);
    final r = coreSize / 2;
    switch (ringId) {
      case 'none':
        break;
      case 'white':
        _band(canvas, center, r, Colors.white, 4);
      case 'gold':
        _crownSpikes(canvas, center, r, const Color(0xFFD4AF37), 8);
        _band(canvas, center, r + 3, const Color(0xFFFFF3C4), 3);
      case 'silver':
        _band(canvas, center, r + 5, const Color(0xFFCBD5E1), 2);
        _band(canvas, center, r + 1, Colors.white, 2.5);
      case 'rose_gold':
        _scallops(canvas, center, r, const Color(0xFFE8B4B8), 12);
      case 'emerald':
        _polygonRing(canvas, center, r + 4, 8, const Color(0xFF059669), 2.5);
      case 'midnight':
        _tickRing(canvas, center, r + 4, 24, const Color(0xFF6366F1));
        _band(canvas, center, r, const Color(0xFF0F172A), 3);
      case 'double':
        _band(canvas, center, r + 6, Colors.white, 2);
        _band(canvas, center, r + 2, Colors.white, 2);
      case 'ornate':
        _crownSpikes(canvas, center, r + 2, const Color(0xFFD4AF37), 12);
        _gemDots(canvas, center, r + 8, 12, const Color(0xFFFFF8E7));
      case 'thin_gold':
        _band(canvas, center, r + 2, const Color(0xFFD4AF37), 1.5);
      case 'glow_blue':
        _glow(canvas, center, r + 4, const Color(0xFF38BDF8));
        _band(canvas, center, r + 2, const Color(0xFF38BDF8), 2);
      case 'sapphire':
        _gemDots(canvas, center, r + 5, 4, const Color(0xFF2563EB));
        _band(canvas, center, r + 2, const Color(0xFF93C5FD), 2);
      case 'amethyst':
        _polygonRing(canvas, center, r + 5, 5, const Color(0xFF8B5CF6), 2.5);
        _orbitDots(canvas, center, r + 9, 5, const Color(0xFFC4B5FD));
      case 'fire':
        _flamePeaks(canvas, center, r + 3, const Color(0xFFF97316));
      case 'ice':
        _icicles(canvas, center, r + 3, const Color(0xFF7DD3FC));
        _band(canvas, center, r, Colors.white, 2);
      case 'rainbow':
        _rainbowSegments(canvas, center, r + 4, 7);
      case 'neon_pink':
        _dashedRing(canvas, center, r + 4, const Color(0xFFEC4899), phase);
      case 'sunburst':
        _sunRays(canvas, center, r + 6, 18, const Color(0xFFF59E0B));
      case 'moonlight':
        _crescent(canvas, center, r + 6, const Color(0xFFE2E8F0));
        _band(canvas, center, r + 2, const Color(0xFF94A3B8), 2);
      case 'olive':
        _leafBumps(canvas, center, r + 4, 10, const Color(0xFF65A30D));
      case 'coral':
        _bubblePearls(canvas, center, r + 5, 8, const Color(0xFFFB7185));
      case 'lavender':
        _ribbonBow(canvas, center, r + 8, const Color(0xFFC4B5FD));
        _band(canvas, center, r + 2, const Color(0xFF7C3AED), 2);
      case 'bronze':
        _rivets(canvas, center, r + 4, 10, const Color(0xFFB45309));
      case 'carbon':
        _polygonRing(canvas, center, r + 4, 6, const Color(0xFF52525B), 2);
      case 'holo':
        _holoSegments(canvas, center, r + 4, phase);
      default:
        _band(canvas, center, r + 2, accent, 2.5);
    }
  }

  void _band(Canvas c, Offset o, double radius, Color color, double w) {
    c.drawCircle(o, radius, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = w
      ..color = color);
  }

  void _glow(Canvas c, Offset o, double radius, Color color) {
    c.drawCircle(
      o,
      radius,
      Paint()
        ..color = color.withValues(alpha: 0.25 + math.sin(phase * math.pi * 2) * 0.1)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 12),
    );
  }

  void _crownSpikes(Canvas c, Offset o, double r, Color color, int spikes) {
    final path = Path();
    for (var i = 0; i < spikes; i++) {
      final a = (i / spikes) * math.pi * 2 - math.pi / 2;
      final a2 = ((i + 0.5) / spikes) * math.pi * 2 - math.pi / 2;
      final outer = o + Offset(math.cos(a) * (r + 10), math.sin(a) * (r + 10));
      final inner = o + Offset(math.cos(a2) * (r + 2), math.sin(a2) * (r + 2));
      i == 0 ? path.moveTo(outer.dx, outer.dy) : path.lineTo(outer.dx, outer.dy);
      path.lineTo(inner.dx, inner.dy);
    }
    path.close();
    c.drawPath(path, Paint()..color = color.withValues(alpha: 0.85));
  }

  void _scallops(Canvas c, Offset o, double r, Color color, int n) {
    for (var i = 0; i < n; i++) {
      final a = (i / n) * math.pi * 2;
      final p = o + Offset(math.cos(a) * (r + 4), math.sin(a) * (r + 4));
      c.drawCircle(p, 4, Paint()..color = color.withValues(alpha: 0.75));
    }
    _band(c, o, r + 1, color, 2);
  }

  void _polygonRing(Canvas c, Offset o, double r, int sides, Color color, double w) {
    final path = Path();
    for (var i = 0; i < sides; i++) {
      final a = (i / sides) * math.pi * 2 - math.pi / 2;
      final p = o + Offset(math.cos(a) * r, math.sin(a) * r);
      i == 0 ? path.moveTo(p.dx, p.dy) : path.lineTo(p.dx, p.dy);
    }
    path.close();
    c.drawPath(path, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = w
      ..color = color);
  }

  void _tickRing(Canvas c, Offset o, double r, int ticks, Color color) {
    for (var i = 0; i < ticks; i++) {
      final a = (i / ticks) * math.pi * 2 + phase * math.pi * 2;
      final p1 = o + Offset(math.cos(a) * (r - 3), math.sin(a) * (r - 3));
      final p2 = o + Offset(math.cos(a) * (r + 3), math.sin(a) * (r + 3));
      c.drawLine(p1, p2, Paint()
        ..strokeWidth = 1.5
        ..color = color.withValues(alpha: 0.7));
    }
  }

  void _gemDots(Canvas c, Offset o, double r, int n, Color color) {
    for (var i = 0; i < n; i++) {
      final a = (i / n) * math.pi * 2 - math.pi / 2;
      final p = o + Offset(math.cos(a) * r, math.sin(a) * r);
      c.drawCircle(p, 3.2, Paint()..color = color);
      c.drawCircle(p, 5, Paint()
        ..color = color.withValues(alpha: 0.25)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3));
    }
  }

  void _orbitDots(Canvas c, Offset o, double r, int n, Color color) {
    for (var i = 0; i < n; i++) {
      final a = phase * math.pi * 2 + (i / n) * math.pi * 2;
      final p = o + Offset(math.cos(a) * r, math.sin(a) * r);
      c.drawCircle(p, 2.5, Paint()..color = color);
    }
  }

  void _flamePeaks(Canvas c, Offset o, double r, Color color) {
    for (var i = 0; i < 8; i++) {
      final t = (phase + i * 0.08) % 1.0;
      final a = (i / 8) * math.pi * 2;
      final len = 8 + t * 10;
      final p1 = o + Offset(math.cos(a) * r, math.sin(a) * r);
      final p2 = o + Offset(math.cos(a) * (r + len), math.sin(a) * (r + len));
      c.drawLine(p1, p2, Paint()
        ..strokeWidth = 3
        ..strokeCap = StrokeCap.round
        ..color = color.withValues(alpha: 0.65 * (1 - t * 0.5)));
    }
    _band(c, o, r, color, 2);
  }

  void _icicles(Canvas c, Offset o, double r, Color color) {
    for (var i = 0; i < 10; i++) {
      final a = (i / 10) * math.pi * 2;
      final p = o + Offset(math.cos(a) * (r + 2), math.sin(a) * (r + 2));
      c.drawLine(p, p + Offset(math.cos(a) * 6, math.sin(a) * 6), Paint()
        ..strokeWidth = 2
        ..color = color.withValues(alpha: 0.8));
    }
  }

  void _rainbowSegments(Canvas c, Offset o, double r, int segments) {
    const colors = [Color(0xFFEF4444), Color(0xFFF97316), Color(0xFFFBBF24), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFF8B5CF6), Color(0xFFEC4899)];
    final rect = Rect.fromCircle(center: o, radius: r);
    for (var i = 0; i < segments; i++) {
      c.drawArc(
        rect,
        (i / segments) * math.pi * 2,
        math.pi * 2 / segments,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 4
          ..color = colors[i % colors.length],
      );
    }
  }

  void _dashedRing(Canvas c, Offset o, double r, Color color, double t) {
    const dash = 10;
    const gap = 6;
    final circ = 2 * math.pi * r;
    final count = (circ / (dash + gap)).floor();
    for (var i = 0; i < count; i++) {
      final start = ((i / count) + t) % 1.0 * math.pi * 2;
      final sweep = (dash / circ) * math.pi * 2;
      c.drawArc(
        Rect.fromCircle(center: o, radius: r),
        start,
        sweep,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 3
          ..color = color,
      );
    }
  }

  void _sunRays(Canvas c, Offset o, double r, int rays, Color color) {
    for (var i = 0; i < rays; i++) {
      final a = (i / rays) * math.pi * 2 + phase * 0.2;
      c.drawLine(
        o + Offset(math.cos(a) * (r - 4), math.sin(a) * (r - 4)),
        o + Offset(math.cos(a) * (r + 10), math.sin(a) * (r + 10)),
        Paint()
          ..strokeWidth = 1.5
          ..color = color.withValues(alpha: 0.55),
      );
    }
    _band(c, o, r, color, 2);
  }

  void _crescent(Canvas c, Offset o, double r, Color color) {
    c.drawArc(
      Rect.fromCircle(center: o + const Offset(4, -2), radius: r),
      -math.pi * 0.2,
      math.pi * 1.2,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = color,
    );
  }

  void _leafBumps(Canvas c, Offset o, double r, int n, Color color) {
    for (var i = 0; i < n; i++) {
      final a = (i / n) * math.pi * 2;
      final p = o + Offset(math.cos(a) * (r + 2), math.sin(a) * (r + 2));
      c.drawOval(Rect.fromCenter(center: p, width: 7, height: 10), Paint()..color = color.withValues(alpha: 0.7));
    }
  }

  void _bubblePearls(Canvas c, Offset o, double r, int n, Color color) {
    for (var i = 0; i < n; i++) {
      final t = (phase + i * 0.1) % 1.0;
      final a = (i / n) * math.pi * 2;
      final pr = r + 4 + math.sin(t * math.pi * 2) * 3;
      final p = o + Offset(math.cos(a) * pr, math.sin(a) * pr);
      c.drawCircle(p, 2.5, Paint()..color = color.withValues(alpha: 0.85));
    }
  }

  void _ribbonBow(Canvas c, Offset o, double r, Color color) {
    final top = o + Offset(0, -r - 2);
    c.drawCircle(top + const Offset(-6, 0), 5, Paint()..color = color);
    c.drawCircle(top + const Offset(6, 0), 5, Paint()..color = color);
    c.drawCircle(top, 3, Paint()..color = color.withValues(alpha: 0.9));
  }

  void _rivets(Canvas c, Offset o, double r, int n, Color color) {
    _band(c, o, r, color, 3);
    for (var i = 0; i < n; i++) {
      final a = (i / n) * math.pi * 2;
      final p = o + Offset(math.cos(a) * r, math.sin(a) * r);
      c.drawCircle(p, 2, Paint()..color = const Color(0xFFFFF8E7));
    }
  }

  void _holoSegments(Canvas c, Offset o, double r, double t) {
    const colors = [Color(0xFF22D3EE), Color(0xFFA78BFA), Color(0xFFF472B6), Color(0xFFFBBF24)];
    final rect = Rect.fromCircle(center: o, radius: r);
    for (var i = 0; i < 4; i++) {
      c.drawArc(
        rect,
        t * math.pi * 2 + (i / 4) * math.pi * 2,
        math.pi / 2 - 0.2,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 4
          ..color = colors[i],
      );
    }
  }

  @override
  bool shouldRepaint(covariant NgmyBioRingFramePainter old) =>
      old.phase != phase || old.ringId != ringId || old.accent != accent;
}
