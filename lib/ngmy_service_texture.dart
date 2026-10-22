import 'dart:math' as math;

import 'package:flutter/material.dart';

/// The look a Help Center service gets when it is opened. Each one has its own colours, glow
/// and pattern; nothing is drawn until a service is chosen.
enum NgmyServiceLook { house, money, moving, general }

class _Palette {
  const _Palette(this.colors, this.glow, this.line);
  final List<Color> colors;
  final Color glow;
  final Color line;
}

const Map<NgmyServiceLook, _Palette> _palettes = {
  // The same warm dark orange as the Post work pop-up.
  NgmyServiceLook.house: _Palette([Color(0xFF2A1606), Color(0xFF0E0B10), Color(0xFF0A1420)], Color(0xFFFF8A1F), Color(0xFFFF8A1F)),
  NgmyServiceLook.money: _Palette([Color(0xFF0A2A1C), Color(0xFF04120C), Color(0xFF071B2B)], Color(0xFF22E07A), Color(0xFF22E07A)),
  NgmyServiceLook.moving: _Palette([Color(0xFF0B2347), Color(0xFF070D1A), Color(0xFF10233A)], Color(0xFF38BDF8), Color(0xFF38BDF8)),
  NgmyServiceLook.general: _Palette([Color(0xFF2A1250), Color(0xFF0D0818), Color(0xFF1B1030)], Color(0xFFA78BFA), Color(0xFFA78BFA)),
};

/// A card with a dark gradient, a soft glow and a fine pattern behind its content.
class NgmyServiceTexture extends StatelessWidget {
  const NgmyServiceTexture({super.key, required this.look, required this.child, this.radius = 24});

  final NgmyServiceLook look;
  final Widget child;
  final double radius;

  @override
  Widget build(BuildContext context) {
    final p = _palettes[look]!;
    final r = BorderRadius.circular(radius);
    return Container(
      decoration: BoxDecoration(
        borderRadius: r,
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: p.colors),
        border: Border.all(color: p.glow.withOpacity(0.32)),
        boxShadow: [BoxShadow(color: p.glow.withOpacity(0.22), blurRadius: 34, spreadRadius: -10)],
      ),
      child: ClipRRect(
        borderRadius: r,
        child: CustomPaint(painter: NgmyServiceTexturePainter(look), child: child),
      ),
    );
  }
}

class NgmyServiceTexturePainter extends CustomPainter {
  NgmyServiceTexturePainter(this.look);
  final NgmyServiceLook look;

  @override
  void paint(Canvas canvas, Size size) {
    final p = _palettes[look]!;
    // Two soft glows, one in each corner.
    for (final c in [Offset(size.width * 1.0, 0), Offset(0, size.height * 1.0)]) {
      canvas.drawCircle(
        c,
        size.shortestSide * 0.85,
        Paint()..shader = RadialGradient(colors: [p.glow.withOpacity(0.2), Colors.transparent]).createShader(Rect.fromCircle(center: c, radius: size.shortestSide * 0.85)),
      );
    }
    final line = Paint()
      ..color = p.line.withOpacity(0.07)
      ..strokeWidth = 1
      ..style = PaintingStyle.stroke;
    final dot = Paint()..color = p.line.withOpacity(0.1);
    switch (look) {
      case NgmyServiceLook.house:
        // Fine diagonal weave, like plaster and wood grain.
        for (double x = -size.height; x < size.width; x += 14) {
          canvas.drawLine(Offset(x, size.height), Offset(x + size.height, 0), line);
        }
        for (double y = 10; y < size.height; y += 28) {
          for (double x = 10; x < size.width; x += 28) {
            canvas.drawCircle(Offset(x, y), 1.1, dot);
          }
        }
      case NgmyServiceLook.money:
        // A grid with coin rings.
        for (double x = 0; x < size.width; x += 22) {
          canvas.drawLine(Offset(x, 0), Offset(x, size.height), line);
        }
        for (double y = 0; y < size.height; y += 22) {
          canvas.drawLine(Offset(0, y), Offset(size.width, y), line);
        }
        final ring = Paint()
          ..color = p.line.withOpacity(0.1)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.4;
        for (var i = 0; i < 6; i++) {
          canvas.drawCircle(Offset(size.width * (0.12 + 0.17 * i), size.height * (i.isEven ? 0.2 : 0.78)), 15 + (i % 3) * 5, ring);
        }
      case NgmyServiceLook.moving:
        // Road dashes and route arcs.
        final dash = Paint()
          ..color = p.line.withOpacity(0.12)
          ..strokeWidth = 2
          ..strokeCap = StrokeCap.round;
        for (double y = 20; y < size.height; y += 36) {
          for (double x = 0; x < size.width; x += 30) {
            canvas.drawLine(Offset(x, y), Offset(x + 14, y), dash);
          }
        }
        final arc = Paint()
          ..color = p.line.withOpacity(0.1)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.4;
        for (var i = 1; i <= 3; i++) {
          canvas.drawArc(Rect.fromCircle(center: Offset(size.width * 0.9, size.height * 0.1), radius: 46.0 * i), math.pi * 0.5, math.pi * 0.5, false, arc);
        }
      case NgmyServiceLook.general:
        // Concentric rings and sparkles.
        final ring = Paint()
          ..color = p.line.withOpacity(0.09)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2;
        for (var i = 1; i <= 7; i++) {
          canvas.drawCircle(Offset(size.width * 0.82, size.height * 0.22), 26.0 * i, ring);
        }
        final rnd = math.Random(7);
        for (var i = 0; i < 26; i++) {
          canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), 0.8 + rnd.nextDouble() * 1.4, dot);
        }
    }
  }

  @override
  bool shouldRepaint(covariant NgmyServiceTexturePainter old) => old.look != look;
}
