import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_video_studio_models.dart';

/// Paints decorative frames around the brand logo slot (preview + export helper).
class NgmyLogoFramePainter {
  static void paint(
    Canvas canvas,
    Rect rect, {
    required NgmyVideoSlotShape shape,
    required NgmyLogoFrameStyle frame,
    double animT = 0,
  }) {
    if (frame == NgmyLogoFrameStyle.none) return;
    final r = rect.deflate(2);
    switch (frame) {
      case NgmyLogoFrameStyle.none:
        break;
      case NgmyLogoFrameStyle.goldRing:
        _goldRing(canvas, r, shape);
      case NgmyLogoFrameStyle.presidentialSeal:
        _presidentialSeal(canvas, r, shape);
      case NgmyLogoFrameStyle.glassPanel:
        _glassPanel(canvas, r, shape);
      case NgmyLogoFrameStyle.diamondCrest:
        _diamondCrest(canvas, r, shape);
      case NgmyLogoFrameStyle.neonHalo:
        _neonHalo(canvas, r, shape, animT);
      case NgmyLogoFrameStyle.marbleInset:
        _marbleInset(canvas, r, shape);
      case NgmyLogoFrameStyle.velvetBadge:
        _velvetBadge(canvas, r, shape);
      case NgmyLogoFrameStyle.silverLaurel:
        _silverLaurel(canvas, r, shape);
      case NgmyLogoFrameStyle.crownJewel:
        _crownJewel(canvas, r, shape, animT);
    }
  }

  static void _goldRing(Canvas c, Rect r, NgmyVideoSlotShape shape) {
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3;
    paint.shader = LinearGradient(
      colors: const [Color(0xFFFDE68A), Color(0xFFD97706), Color(0xFFFBBF24)],
    ).createShader(r);
    _strokeShape(c, r, shape, paint);
    paint.strokeWidth = 1.4;
    paint.color = const Color(0xFFFFF7ED).withValues(alpha: 0.9);
    _strokeShape(c, r.deflate(6), shape, paint);
  }

  static void _presidentialSeal(Canvas c, Rect r, NgmyVideoSlotShape shape) {
    c.drawRRect(
      RRect.fromRectAndRadius(r.inflate(3), Radius.circular(shape == NgmyVideoSlotShape.circle ? r.shortestSide : 10)),
      Paint()..color = const Color(0xFF1E3A8A).withValues(alpha: 0.92),
    );
    final ring = Paint()
      ..color = const Color(0xFFFBBF24)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.2;
    _strokeShape(c, r.deflate(4), shape, ring);
    for (var i = 0; i < 8; i++) {
      final a = i * math.pi / 4;
      final cx = r.center.dx + math.cos(a) * (r.shortestSide * 0.46);
      final cy = r.center.dy + math.sin(a) * (r.shortestSide * 0.46);
      c.drawCircle(Offset(cx, cy), 2.2, Paint()..color = const Color(0xFFFDE68A));
    }
  }

  static void _glassPanel(Canvas c, Rect r, NgmyVideoSlotShape shape) {
    final bg = Paint()..color = Colors.white.withValues(alpha: 0.14);
    _fillShape(c, r, shape, bg);
    final border = Paint()
      ..color = Colors.white.withValues(alpha: 0.55)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.6;
    _strokeShape(c, r.deflate(1), shape, border);
    c.drawLine(
      Offset(r.left + 6, r.top + 8),
      Offset(r.right - 6, r.top + 8),
      Paint()..color = Colors.white.withValues(alpha: 0.35)..strokeWidth = 1.2,
    );
  }

  static void _diamondCrest(Canvas c, Rect r, NgmyVideoSlotShape shape) {
    final corners = [
      Offset(r.left, r.top + 10),
      Offset(r.left + 10, r.top),
      Offset(r.right, r.top + 10),
      Offset(r.right - 10, r.top),
      Offset(r.left, r.bottom - 10),
      Offset(r.left + 10, r.bottom),
      Offset(r.right, r.bottom - 10),
      Offset(r.right - 10, r.bottom),
    ];
    final p = Paint()
      ..color = const Color(0xFF38BDF8)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2;
    for (final o in corners) {
      c.drawPath(Path()..moveTo(o.dx, o.dy - 5)..lineTo(o.dx + 5, o.dy)..lineTo(o.dx, o.dy + 5)..lineTo(o.dx - 5, o.dy)..close(), p);
    }
    _strokeShape(c, r.deflate(3), shape, Paint()..color = const Color(0xFF0EA5E9)..style = PaintingStyle.stroke..strokeWidth = 2);
  }

  static void _neonHalo(Canvas c, Rect r, NgmyVideoSlotShape shape, double t) {
    final glow = 0.45 + math.sin(t * math.pi * 2) * 0.25;
    final p = Paint()
      ..color = const Color(0xFF22D3EE).withValues(alpha: glow)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 4
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6);
    _strokeShape(c, r.deflate(2), shape, p);
    _strokeShape(c, r.deflate(2), shape, Paint()..color = const Color(0xFF67E8F9)..style = PaintingStyle.stroke..strokeWidth = 1.5);
  }

  static void _marbleInset(Canvas c, Rect r, NgmyVideoSlotShape shape) {
    final paint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [const Color(0xFFF5F5F4), const Color(0xFFE7E5E4), const Color(0xFFD6D3D1)],
      ).createShader(r.inflate(4));
    _fillShape(c, r.inflate(4), shape, paint);
    _strokeShape(c, r.deflate(2), shape, Paint()..color = const Color(0xFFA8A29E)..style = PaintingStyle.stroke..strokeWidth = 1.4);
  }

  static void _velvetBadge(Canvas c, Rect r, NgmyVideoSlotShape shape) {
    _fillShape(c, r.inflate(3), shape, Paint()..color = const Color(0xFF7F1D1D).withValues(alpha: 0.92));
    _strokeShape(c, r.inflate(1), shape, Paint()..color = const Color(0xFFFBBF24)..style = PaintingStyle.stroke..strokeWidth = 2.4);
  }

  static void _silverLaurel(Canvas c, Rect r, NgmyVideoSlotShape shape) {
    _strokeShape(c, r.deflate(2), shape, Paint()..color = const Color(0xFFE5E7EB)..style = PaintingStyle.stroke..strokeWidth = 2.6);
    for (var i = 0; i < 12; i++) {
      final a = i * math.pi / 6;
      final rad = r.shortestSide * 0.52;
      c.drawCircle(
        Offset(r.center.dx + math.cos(a) * rad, r.center.dy + math.sin(a) * rad),
        2,
        Paint()..color = const Color(0xFF9CA3AF),
      );
    }
  }

  static void _crownJewel(Canvas c, Rect r, NgmyVideoSlotShape shape, double t) {
    _goldRing(c, r, shape);
    final crownY = r.top - 6;
    final cw = r.width * 0.42;
    final cx = r.center.dx;
    final path = Path()
      ..moveTo(cx - cw / 2, crownY + 8)
      ..lineTo(cx - cw * 0.35, crownY)
      ..lineTo(cx - cw * 0.15, crownY + 6)
      ..lineTo(cx, crownY - 2 + math.sin(t * math.pi * 2) * 1.5)
      ..lineTo(cx + cw * 0.15, crownY + 6)
      ..lineTo(cx + cw * 0.35, crownY)
      ..lineTo(cx + cw / 2, crownY + 8)
      ..close();
    c.drawPath(path, Paint()..color = const Color(0xFFFBBF24));
    c.drawCircle(Offset(cx, crownY + 2), 3.5, Paint()..color = const Color(0xFFEF4444));
  }

  static void _strokeShape(Canvas c, Rect r, NgmyVideoSlotShape shape, Paint paint) {
    if (shape == NgmyVideoSlotShape.circle) {
      c.drawCircle(r.center, r.shortestSide / 2, paint);
    } else {
      c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(10)), paint);
    }
  }

  static void _fillShape(Canvas c, Rect r, NgmyVideoSlotShape shape, Paint paint) {
    if (shape == NgmyVideoSlotShape.circle) {
      c.drawCircle(r.center, r.shortestSide / 2, paint);
    } else {
      c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(10)), paint);
    }
  }
}
