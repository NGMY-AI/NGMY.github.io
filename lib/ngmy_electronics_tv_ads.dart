import 'dart:math' as math;

import 'package:flutter/material.dart';

// NGMY adverts for the lab TV channels: each one shows an NGMY service in a short animation, drawn live (no video files).

void _txt(Canvas c, String text, Offset o, double size, Color col, {double width = 0, bool left = false, bool bold = true}) {
  TextPainter make(double v) => TextPainter(
        text: TextSpan(text: text, style: TextStyle(color: col, fontSize: v, fontWeight: bold ? FontWeight.w900 : FontWeight.w600, letterSpacing: 0.4)),
        textDirection: TextDirection.ltr,
        maxLines: 1,
      )..layout();
  var tp = make(size);
  // One line, made smaller when it is wider than its box.
  if (width > 0 && tp.width > width) tp = make(size * width / tp.width);
  tp.paint(c, Offset(left ? o.dx : o.dx - tp.width / 2, o.dy));
}

/// Spark Adventure: Sparky, a little spark with a face, runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb.
void paintSparkAdventure(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF020617), Color(0xFF0F172A), Color(0xFF172554)]).createShader(r));
  final grid = Paint()..color = const Color(0xFF38BDF8).withValues(alpha: 0.07);
  for (var x = 0.0; x < w; x += 18) {
    c.drawLine(Offset(x, 0), Offset(x, h), grid);
  }
  for (var y = 0.0; y < h; y += 18) {
    c.drawLine(Offset(0, y), Offset(w, y), grid);
  }
  // Floating motes of light.
  for (var i = 0; i < 18; i++) {
    final px = w * ((i * 0.173) % 1.0);
    final py = h * ((i * 0.311 + t * 0.02 * (1 + i % 3)) % 1.0);
    c.drawCircle(Offset(px, py), 1.2 + (i % 3), Paint()..color = const Color(0xFF7DD3FC).withValues(alpha: 0.25));
  }
  final left = w * 0.12, right = w * 0.88, top = h * 0.2, bottom = h * 0.62;
  final path = Path()
    ..moveTo(left, top)
    ..lineTo(right, top)
    ..lineTo(right, bottom)
    ..lineTo(left, bottom)
    ..close();
  const cycle = 10.0;
  final lt = t % cycle;
  final closed = lt > 1.8;
  c.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 7..color = const Color(0xFF1E293B));
  c.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = closed ? const Color(0xFF38BDF8) : const Color(0xFF475569));
  final m = path.computeMetrics().first;
  final len = m.length;
  // The battery on the left side: three cells and a plus.
  final bc = Offset(left, (top + bottom) / 2);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: bc, width: h * 0.15, height: h * 0.26), Radius.circular(h * 0.02)), Paint()..color = const Color(0xFF111827));
  for (var i = 0; i < 3; i++) {
    c.drawRect(Rect.fromCenter(center: bc + Offset(0, (i - 1) * h * 0.075), width: h * 0.11, height: h * 0.05), Paint()..color = const Color(0xFF22C55E));
  }
  _txt(c, '+', Offset(bc.dx, bc.dy - h * 0.22), h * 0.07, Colors.white);
  // The switch on the top, near the left: its blade lifts and then clicks shut.
  final sw = Offset(left + (right - left) * 0.22, top);
  c.drawCircle(sw + Offset(-h * 0.06, 0), 4, Paint()..color = Colors.white);
  c.drawCircle(sw + Offset(h * 0.06, 0), 4, Paint()..color = Colors.white);
  final lift = closed ? 0.0 : 0.6 + 0.05 * math.sin(t * 6);
  c.drawLine(sw + Offset(-h * 0.06, 0), sw + Offset(math.cos(-lift) * h * 0.12 - h * 0.06, math.sin(-lift) * h * 0.12), Paint()..strokeWidth = 4..strokeCap = StrokeCap.round..color = closed ? const Color(0xFFFACC15) : Colors.white70);
  // The resistor on the top, in the middle: a zigzag.
  final rs = Offset(left + (right - left) * 0.62, top);
  c.drawRect(Rect.fromCenter(center: rs, width: h * 0.3, height: h * 0.05), Paint()..color = const Color(0xFF0F172A));
  final zig = Path()..moveTo(rs.dx - h * 0.14, rs.dy);
  for (var i = 0; i < 6; i++) {
    zig.lineTo(rs.dx - h * 0.14 + (i + 0.5) * h * 0.28 / 6, rs.dy + (i.isEven ? -h * 0.035 : h * 0.035));
  }
  zig.lineTo(rs.dx + h * 0.14, rs.dy);
  c.drawPath(zig, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..strokeJoin = StrokeJoin.round..color = const Color(0xFFFB923C));
  // The capacitor on the bottom: two plates.
  final cp = Offset((left + right) / 2, bottom);
  c.drawRect(Rect.fromCenter(center: cp, width: h * 0.16, height: h * 0.2), Paint()..color = const Color(0xFF0F172A));
  c.drawRect(Rect.fromCenter(center: cp + Offset(-h * 0.02, 0), width: 4, height: h * 0.15), Paint()..color = const Color(0xFFA78BFA));
  c.drawRect(Rect.fromCenter(center: cp + Offset(h * 0.02, 0), width: 4, height: h * 0.15), Paint()..color = const Color(0xFFA78BFA));
  // The bulb on the right side: dark until the spark has been round once.
  final bulbOn = closed && lt > 3.2;
  final glow = bulbOn ? 0.7 + 0.3 * math.sin(t * 6) : 0.0;
  final bb = Offset(right, (top + bottom) / 2);
  if (bulbOn) {
    c.drawCircle(bb, h * (0.2 + 0.03 * glow), Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.28)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
    for (var i = 0; i < 8; i++) {
      final a = i * math.pi / 4 + t * 0.5;
      c.drawLine(bb + Offset(math.cos(a), math.sin(a)) * h * 0.1, bb + Offset(math.cos(a), math.sin(a)) * h * (0.15 + 0.03 * glow), Paint()..strokeWidth = 3..strokeCap = StrokeCap.round..color = const Color(0xFFFEF08A));
    }
  }
  c.drawCircle(bb, h * 0.075, Paint()..color = bulbOn ? const Color(0xFFFEF9C3) : const Color(0xFF475569));
  c.drawRect(Rect.fromCenter(center: bb + Offset(0, h * 0.1), width: h * 0.07, height: h * 0.04), Paint()..color = const Color(0xFF94A3B8));
  // Sparky: a bright spark with a face and a tail of light. It waits near the battery until the switch is shut.
  const lap = 4.6;
  final run = closed ? ((lt - 1.8) / lap) : 0.0;
  final pos = (run * len) % len;
  if (closed) {
    for (var k = 14; k >= 1; k--) {
      final p = m.getTangentForOffset((pos - k * 7 + len * 4) % len)!.position;
      c.drawCircle(p, 7.0 - k * 0.4, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.8 * (1 - k / 15))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2));
    }
  }
  final sp = m.getTangentForOffset(closed ? pos : len * 0.88)!.position;
  c.drawCircle(sp, h * 0.07, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
  c.drawCircle(sp, h * 0.045, Paint()..color = const Color(0xFFFEF08A));
  c.drawCircle(sp + Offset(-h * 0.015, -h * 0.005), h * 0.008, Paint()..color = Colors.black);
  c.drawCircle(sp + Offset(h * 0.015, -h * 0.005), h * 0.008, Paint()..color = Colors.black);
  c.drawArc(Rect.fromCenter(center: sp + Offset(0, h * 0.01), width: h * 0.03, height: h * 0.02), 0, math.pi, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.5..color = Colors.black);
  // What is happening, in a caption.
  final said = lt < 1.8 ? 'The switch is open: the loop is broken' : (lt < 3.2 ? 'Click! The loop is closed, Sparky runs' : (lt < 6 ? 'The resistor slows the current down' : 'The bulb lights: a full loop!'));
  final cap = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(w / 2, h * 0.76), width: w * 0.8, height: h * 0.1), Radius.circular(h * 0.05));
  c.drawRRect(cap, Paint()..color = const Color(0xFF020617).withValues(alpha: 0.7));
  _txt(c, said, Offset(w / 2, h * 0.76 - h * 0.035), h * 0.06, const Color(0xFF7DD3FC), width: w * 0.76);
}

