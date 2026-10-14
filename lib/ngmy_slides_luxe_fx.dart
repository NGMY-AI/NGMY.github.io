import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

/// "Luxury FX" — the premium motion package for AI slides.
///
/// Every deck gets its own royal theme (black & gold, emerald court, sapphire crown, ruby
/// throne, ivory marble…), its own frame and ornaments, and its own mix of moving light —
/// so no two Luxury FX presentations look alike.
///
/// Each effect is a `loopFx` name on a slide element, optionally with its metal colour:
/// `"bokeh@FFE9C46A"`. [ngmyLuxeFxBuild] draws it from the clock (angle [a] goes 0 → 2π per
/// loop), so it keeps running smoothly between slides.

const kNgmyLuxeFx = {
  'shimmer', 'golddust', 'spotlight', 'goldframe', 'twinkle', 'orbit', //
  'rays', 'bokeh', 'aurora', 'sparkle', 'sheen', 'velvet', 'crest', 'filigree',
};

const kNgmyLuxeGold = 0xFFE9C46A;

/// The effect's name without its colour.
String ngmyLuxeFxName(String fx) => fx.split('@').first;

bool ngmyIsLuxeFx(String fx) => kNgmyLuxeFx.contains(ngmyLuxeFxName(fx));

/// "rays@FFE9C46A" → rays in that colour (gold when none is given).
String ngmyLuxeFxWith(String fx, int color) => '$fx@${color.toRadixString(16).padLeft(8, '0').toUpperCase()}';

Color _fxColor(String fx) {
  final parts = fx.split('@');
  if (parts.length > 1) {
    final v = int.tryParse(parts[1], radix: 16);
    if (v != null) return Color(v);
  }
  return const Color(kNgmyLuxeGold);
}

int? ngmyLuxeFxMillis(String fx) => switch (ngmyLuxeFxName(fx)) {
      'shimmer' => 3400,
      'golddust' => 16000,
      'spotlight' => 14000,
      'goldframe' => 5200,
      'twinkle' => 2600,
      'orbit' => 7000,
      'rays' => 30000,
      'bokeh' => 22000,
      'aurora' => 18000,
      'sparkle' => 4200,
      'sheen' => 7000,
      'velvet' => 9000,
      'crest' => 6000,
      'filigree' => 8000,
      _ => null,
    };

Color _lighten(Color c, double t) => Color.lerp(c, Colors.white, t)!;

Widget ngmyLuxeFxBuild(String fxRaw, double a, int seed, Widget child) {
  final fx = ngmyLuxeFxName(fxRaw);
  final metal = _fxColor(fxRaw);
  switch (fx) {
    case 'shimmer':
      // A bright band of light sweeps across the text, then rests.
      final t = ((a % (math.pi * 2)) / (math.pi * 2)) * 1.8 - 0.4;
      return ShaderMask(
        blendMode: BlendMode.srcATop,
        shaderCallback: (r) => LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Colors.transparent, _lighten(metal, 0.75).withValues(alpha: 0.9), Colors.transparent],
          stops: [(t - 0.12).clamp(0.0, 1.0), t.clamp(0.0, 1.0), (t + 0.12).clamp(0.0, 1.0)],
        ).createShader(r),
        child: child,
      );
    case 'golddust':
      return _over(child, _GoldDustPainter(a, seed, metal));
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
      return _over(child, _FrameStreakPainter(a, metal));
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
    case 'rays':
      return _under(child, _RaysPainter(a, seed, metal));
    case 'bokeh':
      return _under(child, _BokehPainter(a, seed, metal));
    case 'aurora':
      return _under(child, _AuroraPainter(a, seed, metal));
    case 'velvet':
      return _over(child, _VelvetPainter(a, metal));
    case 'sparkle':
      return _over(child, _SparklePainter(a, seed, metal));
    case 'sheen':
      return _over(child, _SheenPainter(a, metal));
    case 'filigree':
      return _over(child, _FiligreePainter(a, seed, metal));
    case 'crest':
      // A royal emblem breathing with a soft halo, gently rocking.
      final s = math.sin(a);
      return Stack(
        alignment: Alignment.center,
        clipBehavior: Clip.none,
        children: [
          Positioned.fill(
            child: IgnorePointer(
              child: Transform.scale(
                scale: 1.6 + s * 0.15,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(colors: [metal.withValues(alpha: 0.35 + s * 0.12), metal.withValues(alpha: 0)]),
                  ),
                ),
              ),
            ),
          ),
          Transform.rotate(angle: s * 0.06, child: Transform.scale(scale: 1 + s * 0.05, child: child)),
        ],
      );
  }
  return child;
}

Widget _over(Widget child, CustomPainter p) => Stack(fit: StackFit.expand, children: [
      child,
      IgnorePointer(child: CustomPaint(painter: p)),
    ]);

Widget _under(Widget child, CustomPainter p) => Stack(fit: StackFit.expand, children: [
      IgnorePointer(child: CustomPaint(painter: p)),
      child,
    ]);

/// Gold dust rising and twinkling across the whole slide.
class _GoldDustPainter extends CustomPainter {
  _GoldDustPainter(this.a, this.seed, this.metal);
  final double a;
  final int seed;
  final Color metal;

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
      final c = (white ? _lighten(metal, 0.85) : metal).withValues(alpha: (0.35 + tw * 0.35).clamp(0.05, 0.85));
      canvas.drawCircle(p, sz * 2.4, glow..color = c.withValues(alpha: c.a * 0.5));
      canvas.drawCircle(p, sz, core..color = c);
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

/// A bright comet of light racing round the frame.
class _FrameStreakPainter extends CustomPainter {
  _FrameStreakPainter(this.a, this.metal);
  final double a;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(14));
    final pulse = 0.5 + math.sin(a * 2) * 0.5;
    canvas.drawRRect(
      rect,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 6
        ..color = metal.withValues(alpha: 0.12 + pulse * 0.18)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8),
    );
    final metric = (Path()..addRRect(rect)).computeMetrics().first;
    final len = metric.length;
    final head = (a / (math.pi * 2)) * len;
    final light = _lighten(metal, 0.8);
    for (var k = 0; k < 2; k++) {
      final h = (head + k * len / 2) % len;
      final tail = len * 0.14;
      const pieces = 10;
      for (var j = 0; j < pieces; j++) {
        final s = h - tail * (1 - j / pieces);
        final e = h - tail * (1 - (j + 1) / pieces);
        final paint = Paint()
          ..style = PaintingStyle.stroke
          ..strokeCap = StrokeCap.round
          ..strokeWidth = 1.5 + 2.0 * j / pieces
          ..color = light.withValues(alpha: (j + 1) / pieces);
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
          ..color = light
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
        canvas.drawCircle(tip, 2, Paint()..color = Colors.white);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _FrameStreakPainter old) => old.a != a;
}

/// Slow-turning rays of light fanning out from a point, like light through palace windows.
class _RaysPainter extends CustomPainter {
  _RaysPainter(this.a, this.seed, this.metal);
  final double a;
  final int seed;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final r = math.Random(seed);
    final c = Offset(size.width * (0.2 + r.nextDouble() * 0.6), size.height * (r.nextBool() ? -0.1 : 1.1));
    final reach = size.longestSide * 1.4;
    const n = 14;
    for (var i = 0; i < n; i++) {
      final ang = a * 0.25 + i * math.pi * 2 / n;
      final w = 0.06 + 0.04 * math.sin(a * 2 + i);
      final p = Path()
        ..moveTo(c.dx, c.dy)
        ..lineTo(c.dx + math.cos(ang - w) * reach, c.dy + math.sin(ang - w) * reach)
        ..lineTo(c.dx + math.cos(ang + w) * reach, c.dy + math.sin(ang + w) * reach)
        ..close();
      canvas.drawPath(
        p,
        Paint()
          ..shader = ui.Gradient.radial(c, reach, [metal.withValues(alpha: 0.16), metal.withValues(alpha: 0)])
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _RaysPainter old) => old.a != a;
}

/// Soft out-of-focus lights drifting slowly, like candlelight in a ballroom.
class _BokehPainter extends CustomPainter {
  _BokehPainter(this.a, this.seed, this.metal);
  final double a;
  final int seed;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final r = math.Random(seed * 7 + 3);
    for (var i = 0; i < 16; i++) {
      final x0 = r.nextDouble(), y0 = r.nextDouble();
      final rad = size.shortestSide * (0.03 + r.nextDouble() * 0.09);
      final ph = r.nextDouble() * math.pi * 2;
      final x = (x0 + math.sin(a + ph) * 0.04) * size.width;
      final y = (y0 + math.cos(a * 0.8 + ph) * 0.05) * size.height;
      final al = 0.08 + 0.1 * (0.5 + 0.5 * math.sin(a * 2 + ph));
      final col = i.isEven ? metal : _lighten(metal, 0.6);
      canvas.drawCircle(
        Offset(x, y),
        rad,
        Paint()
          ..color = col.withValues(alpha: al)
          ..maskFilter = MaskFilter.blur(BlurStyle.normal, rad * 0.35),
      );
      canvas.drawCircle(
        Offset(x, y),
        rad,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = _lighten(col, 0.5).withValues(alpha: al * 0.9),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _BokehPainter old) => old.a != a;
}

/// Silk ribbons of light flowing across the slide.
class _AuroraPainter extends CustomPainter {
  _AuroraPainter(this.a, this.seed, this.metal);
  final double a;
  final int seed;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final r = math.Random(seed + 11);
    for (var k = 0; k < 3; k++) {
      final base = size.height * (0.25 + k * 0.25 + (r.nextDouble() - 0.5) * 0.1);
      final amp = size.height * (0.06 + r.nextDouble() * 0.05);
      final ph = r.nextDouble() * math.pi * 2;
      final path = Path()..moveTo(0, base);
      for (var x = 0.0; x <= size.width; x += size.width / 24) {
        final y = base + math.sin(x / size.width * math.pi * 2 + a + ph) * amp + math.sin(x / size.width * 7 + a * 2) * amp * 0.25;
        path.lineTo(x, y);
      }
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = size.height * 0.08
          ..strokeCap = StrokeCap.round
          ..color = (k == 1 ? _lighten(metal, 0.5) : metal).withValues(alpha: 0.07 + 0.04 * math.sin(a + k))
          ..maskFilter = MaskFilter.blur(BlurStyle.normal, size.height * 0.04),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _AuroraPainter old) => old.a != a;
}

/// A rich velvet vignette that slowly breathes at the edges.
class _VelvetPainter extends CustomPainter {
  _VelvetPainter(this.a, this.metal);
  final double a;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    final s = 0.5 + 0.5 * math.sin(a);
    canvas.drawRect(
      rect,
      Paint()
        ..shader = RadialGradient(
          radius: 0.95,
          colors: [Colors.transparent, Colors.black.withValues(alpha: 0.28 + s * 0.12)],
          stops: const [0.62, 1],
        ).createShader(rect),
    );
    // A thin metallic glow just inside the edge.
    canvas.drawRect(
      rect.deflate(3),
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = metal.withValues(alpha: 0.10 + s * 0.12)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6),
    );
  }

  @override
  bool shouldRepaint(covariant _VelvetPainter old) => old.a != a;
}

/// Diamond-like sparkles flashing at different places.
class _SparklePainter extends CustomPainter {
  _SparklePainter(this.a, this.seed, this.metal);
  final double a;
  final int seed;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final cycle = (a / (math.pi * 2) * 3).floor(); // new places every third of a loop
    for (var i = 0; i < 7; i++) {
      final r = math.Random(seed * 31 + cycle * 7 + i);
      final p = Offset(r.nextDouble() * size.width, r.nextDouble() * size.height);
      final local = ((a / (math.pi * 2) * 3) % 1.0);
      final phase = (local + i / 7) % 1.0;
      final s = math.sin(phase * math.pi); // flash in, flash out
      if (s < 0.05) continue;
      final len = size.shortestSide * (0.02 + r.nextDouble() * 0.025) * s;
      final col = _lighten(metal, 0.7).withValues(alpha: s);
      final paint = Paint()
        ..color = col
        ..strokeWidth = 1.4
        ..strokeCap = StrokeCap.round;
      canvas.drawLine(p - Offset(len, 0), p + Offset(len, 0), paint);
      canvas.drawLine(p - Offset(0, len * 1.4), p + Offset(0, len * 1.4), paint);
      canvas.drawLine(p - Offset(len * 0.45, len * 0.45), p + Offset(len * 0.45, len * 0.45), paint..strokeWidth = 0.8);
      canvas.drawLine(p - Offset(len * 0.45, -len * 0.45), p + Offset(len * 0.45, -len * 0.45), paint);
      canvas.drawCircle(p, len * 0.35, Paint()
        ..color = Colors.white.withValues(alpha: s * 0.9)
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, len * 0.3));
    }
  }

  @override
  bool shouldRepaint(covariant _SparklePainter old) => old.a != a;
}

/// A wide diagonal sheen gliding over the whole slide, like light across polished marble.
class _SheenPainter extends CustomPainter {
  _SheenPainter(this.a, this.metal);
  final double a;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final t = (a / (math.pi * 2)) * 2.2 - 0.6;
    if (t < -0.3 || t > 1.3) return;
    final rect = Offset.zero & size;
    canvas.drawRect(
      rect,
      Paint()
        ..blendMode = BlendMode.plus
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Colors.transparent, _lighten(metal, 0.6).withValues(alpha: 0.16), Colors.transparent],
          stops: [(t - 0.15).clamp(0.0, 1.0), t.clamp(0.0, 1.0), (t + 0.15).clamp(0.0, 1.0)],
        ).createShader(rect),
    );
  }

  @override
  bool shouldRepaint(covariant _SheenPainter old) => old.a != a;
}

/// Ornamental scrollwork in the corners, drawn on and glowing like engraved metal.
class _FiligreePainter extends CustomPainter {
  _FiligreePainter(this.a, this.seed, this.metal);
  final double a;
  final int seed;
  final Color metal;

  @override
  void paint(Canvas canvas, Size size) {
    final s = size.shortestSide * 0.16;
    final glow = 0.55 + 0.45 * math.sin(a);
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.4
      ..strokeCap = StrokeCap.round
      ..color = metal.withValues(alpha: 0.55 + glow * 0.35);
    final halo = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 4
      ..color = metal.withValues(alpha: 0.12 * glow)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4);
    void corner(Offset o, double sx, double sy) {
      final p = Path()
        ..moveTo(o.dx + sx * s * 1.2, o.dy + sy * s * 0.12)
        ..quadraticBezierTo(o.dx + sx * s * 0.25, o.dy + sy * s * 0.12, o.dx + sx * s * 0.18, o.dy + sy * s * 0.5)
        ..quadraticBezierTo(o.dx + sx * s * 0.12, o.dy + sy * s * 1.0, o.dx + sx * s * 0.12, o.dy + sy * s * 1.2);
      // Little curl.
      p.addArc(Rect.fromCircle(center: Offset(o.dx + sx * s * 0.42, o.dy + sy * s * 0.42), radius: s * 0.14), 0, math.pi * 1.6);
      canvas.drawPath(p, halo);
      canvas.drawPath(p, paint);
      canvas.drawCircle(Offset(o.dx + sx * s * 0.12, o.dy + sy * s * 0.12), 2.2, Paint()..color = _lighten(metal, 0.6));
    }

    final m = size.shortestSide * 0.045;
    corner(Offset(m, m), 1, 1);
    corner(Offset(size.width - m, m), -1, 1);
    corner(Offset(m, size.height - m), 1, -1);
    corner(Offset(size.width - m, size.height - m), -1, -1);
  }

  @override
  bool shouldRepaint(covariant _FiligreePainter old) => old.a != a;
}

/// A royal look for one Luxury FX deck: velvet backgrounds, a precious metal and its ornaments.
class NgmyLuxeTheme {
  const NgmyLuxeTheme({
    required this.name,
    required this.backgrounds,
    required this.metal,
    required this.metalLight,
    required this.text,
    required this.muted,
    required this.ornaments,
  });
  final String name;
  final List<(int, int)> backgrounds;
  final int metal;
  final int metalLight;
  final int text;
  final int muted;
  /// Emblems that suit this court (crowns, fleur-de-lis, stars…).
  final List<String> ornaments;
}

const kNgmyLuxeThemes = <NgmyLuxeTheme>[
  NgmyLuxeTheme(
    name: 'Royal Onyx & Gold',
    backgrounds: [(0xFF0B0906, 0xFF1C1408), (0xFF120D05, 0xFF050403), (0xFF1A1206, 0xFF0A0703)],
    metal: 0xFFD4AF37, metalLight: 0xFFF6E3A1, text: 0xFFFFF8E7, muted: 0xE6E8DCC0,
    ornaments: ['♛', '⚜', '✦'],
  ),
  NgmyLuxeTheme(
    name: 'Imperial Emerald',
    backgrounds: [(0xFF02160F, 0xFF063B2A), (0xFF032419, 0xFF010D09), (0xFF064030, 0xFF021A12)],
    metal: 0xFFE2C275, metalLight: 0xFFFBEBC0, text: 0xFFF3FFF8, muted: 0xE6CDE8DA,
    ornaments: ['⚜', '❖', '✧'],
  ),
  NgmyLuxeTheme(
    name: 'Sapphire Crown',
    backgrounds: [(0xFF040B24, 0xFF0B1E5B), (0xFF06102F, 0xFF02061A), (0xFF0D2470, 0xFF040B24)],
    metal: 0xFFC9D6EA, metalLight: 0xFFFFFFFF, text: 0xFFF5F8FF, muted: 0xE6C9D3EA,
    ornaments: ['♔', '✦', '❈'],
  ),
  NgmyLuxeTheme(
    name: 'Ruby Throne',
    backgrounds: [(0xFF1A0206, 0xFF4A0712), (0xFF2B030A, 0xFF0D0103), (0xFF5C0A18, 0xFF1A0206)],
    metal: 0xFFE7C27D, metalLight: 0xFFFFEFC9, text: 0xFFFFF4F2, muted: 0xE6EBCFC9,
    ornaments: ['♛', '❦', '✦'],
  ),
  NgmyLuxeTheme(
    name: 'Amethyst Palace',
    backgrounds: [(0xFF12051F, 0xFF3A0F5C), (0xFF1D0833, 0xFF080210), (0xFF4A157A, 0xFF12051F)],
    metal: 0xFFE6C9A8, metalLight: 0xFFFFF0DD, text: 0xFFFBF5FF, muted: 0xE6DCCBEA,
    ornaments: ['♕', '❖', '✧'],
  ),
  NgmyLuxeTheme(
    name: 'Obsidian & Platinum',
    backgrounds: [(0xFF050505, 0xFF1C1C1F), (0xFF0E0E10, 0xFF020202), (0xFF232327, 0xFF08080A)],
    metal: 0xFFE5E4E2, metalLight: 0xFFFFFFFF, text: 0xFFFAFAFA, muted: 0xE6CFCFD4,
    ornaments: ['✦', '◆', '❂'],
  ),
  NgmyLuxeTheme(
    name: 'Rose Gold Velvet',
    backgrounds: [(0xFF1A0A0C, 0xFF3D1A1F), (0xFF24100F, 0xFF0D0506), (0xFF4A2228, 0xFF1A0A0C)],
    metal: 0xFFE8B4A0, metalLight: 0xFFFFE4D9, text: 0xFFFFF6F3, muted: 0xE6EBD2CA,
    ornaments: ['❦', '✿', '✧'],
  ),
  NgmyLuxeTheme(
    name: 'Midnight Brass',
    backgrounds: [(0xFF050A14, 0xFF0F1D33), (0xFF08101F, 0xFF02050B), (0xFF14263F, 0xFF050A14)],
    metal: 0xFFC9A55C, metalLight: 0xFFF0DCA8, text: 0xFFF7F3EA, muted: 0xE6D6CFBC,
    ornaments: ['⚜', '✶', '❖'],
  ),
  NgmyLuxeTheme(
    name: 'Ivory Marble & Gold',
    backgrounds: [(0xFFFBF7EE, 0xFFEDE3CC), (0xFFF5EEDD, 0xFFE4D6B5), (0xFFFFFCF5, 0xFFF0E6CF)],
    metal: 0xFFB08D3C, metalLight: 0xFF7A5C18, text: 0xFF2A2116, muted: 0xE64A3F2E,
    ornaments: ['⚜', '♛', '✦'],
  ),
  NgmyLuxeTheme(
    name: 'Onyx & Copper',
    backgrounds: [(0xFF0C0806, 0xFF241610), (0xFF140D09, 0xFF050302), (0xFF2E1C13, 0xFF0C0806)],
    metal: 0xFFD08A5B, metalLight: 0xFFF6D2B8, text: 0xFFFFF5EE, muted: 0xE6E6CDBE,
    ornaments: ['❂', '✦', '♜'],
  ),
];
