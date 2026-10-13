import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

/// "Luxury FX" — the premium motion package for AI slides: drifting gold dust,
/// a gold frame with a light streak racing round it, a moving spotlight,
/// twinkling corner jewels, orbiting gems and a light sweep across titles.
///
/// Each effect is a `loopFx` name on a slide element; [ngmyLuxeFxBuild] draws it
/// from the clock (angle [a] goes 0 → 2π per loop), so it keeps running smoothly
/// between slides.

const kNgmyLuxeFx = {'shimmer', 'golddust', 'spotlight', 'goldframe', 'twinkle', 'orbit'};

const kNgmyLuxeGold = 0xFFE9C46A;

int? ngmyLuxeFxMillis(String fx) => switch (fx) {
      'shimmer' => 3400,
      'golddust' => 16000,
      'spotlight' => 14000,
      'goldframe' => 5200,
      'twinkle' => 2600,
      'orbit' => 7000,
      _ => null,
    };

Widget ngmyLuxeFxBuild(String fx, double a, int seed, Widget child) {
  switch (fx) {
    case 'shimmer':
      // A bright band of light sweeps across the text, then rests.
      final t = ((a % (math.pi * 2)) / (math.pi * 2)) * 1.8 - 0.4;
      return ShaderMask(
        blendMode: BlendMode.srcATop,
        shaderCallback: (r) => LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Colors.transparent, const Color(0xFFFFF4D6).withValues(alpha: 0.9), Colors.transparent],
          stops: [(t - 0.12).clamp(0.0, 1.0), t.clamp(0.0, 1.0), (t + 0.12).clamp(0.0, 1.0)],
        ).createShader(r),
        child: child,
      );
    case 'golddust':
      return Stack(fit: StackFit.expand, children: [
        child,
        IgnorePointer(child: CustomPaint(painter: _GoldDustPainter(a, seed))),
      ]);
    case 'spotlight':
      return Transform.translate(
        offset: Offset(math.sin(a) * 60, math.cos(a * 0.7) * 26),
        child: Transform.scale(
          scale: 1 + math.sin(a * 2) * 0.08,
          child: Opacity(
            opacity: 0.75 + math.sin(a * 3) * 0.25,
            child: ImageFiltered(imageFilter: ui.ImageFilter.blur(sigmaX: 40, sigmaY: 40), child: child),
          ),
        ),
      );
    case 'goldframe':
      return Stack(fit: StackFit.expand, children: [
        child,
        IgnorePointer(child: CustomPaint(painter: _FrameStreakPainter(a))),
      ]);
    case 'twinkle':
      final s = math.sin(a);
      return Opacity(
        opacity: (0.55 + s * 0.45).clamp(0.0, 1.0),
        child: Transform.rotate(angle: a * 0.5, child: Transform.scale(scale: 0.8 + (s + 1) * 0.18, child: child)),
      );
    case 'orbit':
      return Transform.translate(
        offset: Offset(math.cos(a) * 22, math.sin(a) * 12),
        child: Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.002)
            ..rotateY(a)
            ..rotateZ(math.sin(a) * 0.3),
          child: child,
        ),
      );
  }
  return child;
}

/// Gold dust rising and twinkling across the whole slide.
class _GoldDustPainter extends CustomPainter {
  _GoldDustPainter(this.a, this.seed);
  final double a;
  final int seed;

  @override
  void paint(Canvas canvas, Size size) {
    final r = math.Random(seed);
    final t = a / (math.pi * 2);
    final glow = Paint()..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3);
    final core = Paint();
    for (var i = 0; i < 46; i++) {
      final x0 = r.nextDouble(), y0 = r.nextDouble();
      final speed = 0.4 + r.nextDouble() * 0.9;
      final sz = 0.8 + r.nextDouble() * 2.2;
      final tw = math.sin(a * (3 + r.nextInt(4)) + i);
      final y = (y0 - t * speed) % 1.0;
      final x = x0 + math.sin(a * 2 + i) * 0.012;
      final p = Offset(x * size.width, y * size.height);
      final white = r.nextDouble() < 0.25;
      final c = (white ? const Color(0xFFFFFBEB) : const Color(kNgmyLuxeGold)).withValues(alpha: (0.35 + tw * 0.35).clamp(0.05, 0.85));
      canvas.drawCircle(p, sz * 2.4, glow..color = c.withValues(alpha: c.a * 0.5));
      canvas.drawCircle(p, sz, core..color = c);
      // Some flakes flash into a four-point star.
      if (tw > 0.85 && sz > 2) {
        final s = sz * 4 * (tw - 0.85) / 0.15;
        final line = Paint()
          ..color = c
          ..strokeWidth = 1;
        canvas.drawLine(p - Offset(s, 0), p + Offset(s, 0), line);
        canvas.drawLine(p - Offset(0, s), p + Offset(0, s), line);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _GoldDustPainter old) => old.a != a;
}

/// A bright comet of light racing round the gold frame.
class _FrameStreakPainter extends CustomPainter {
  _FrameStreakPainter(this.a);
  final double a;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(14));
    final pulse = 0.5 + math.sin(a * 2) * 0.5;
    canvas.drawRRect(
      rect,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 6
        ..color = const Color(kNgmyLuxeGold).withValues(alpha: 0.12 + pulse * 0.18)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8),
    );
    final metric = (Path()..addRRect(rect)).computeMetrics().first;
    final len = metric.length;
    final head = (a / (math.pi * 2)) * len;
    for (var k = 0; k < 2; k++) {
      final h = (head + k * len / 2) % len;
      // The tail fades out behind the head, piece by piece along the frame.
      final tail = len * 0.14;
      const pieces = 10;
      for (var j = 0; j < pieces; j++) {
        final s = h - tail * (1 - j / pieces);
        final e = h - tail * (1 - (j + 1) / pieces);
        final paint = Paint()
          ..style = PaintingStyle.stroke
          ..strokeCap = StrokeCap.round
          ..strokeWidth = 1.5 + 2.0 * j / pieces
          ..color = const Color(0xFFFFF4D6).withValues(alpha: (j + 1) / pieces);
        final from = s % len, to = e % len;
        if (from <= to) {
          canvas.drawPath(metric.extractPath(from, to), paint);
        } else {
          canvas.drawPath(metric.extractPath(from, len), paint);
          canvas.drawPath(metric.extractPath(0, to), paint);
        }
      }
      final tip = metric.getTangentForOffset(h)?.position;
      if (tip != null) {
        canvas.drawCircle(tip, 5, Paint()
          ..color = const Color(0xFFFFFBEB)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
        canvas.drawCircle(tip, 2, Paint()..color = Colors.white);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _FrameStreakPainter old) => old.a != a;
}
