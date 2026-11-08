import 'dart:async';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:image/image.dart' as img;
import 'package:share_plus/share_plus.dart';

import 'ngmy_bytes_save.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// TITLE ANIMATOR: type a word, pick how every letter moves (24 ways), how the letters are designed (8 looks), and a whole animated
// background scene (20 designs), then save the WHOLE animation as a moving GIF, not just a picture.
// The card is one painter that draws a moment of the loop, so the preview and the saved animation are exactly the same.
// ═════════════════════════════════════════════════════════════════════════════

/// How long one loop of the title lasts.
const double kTitleLoopSecs = 3.2;

const List<(String, String)> kTitleMoves = [
  ('type', 'Typewriter'),
  ('bounce', 'Bounce'),
  ('wave', 'Wave'),
  ('neon', 'Neon flicker'),
  ('glitch', 'Glitch'),
  ('zoom', 'Pop'),
  ('rainbow', 'Rainbow'),
  ('drop', 'Drop in'),
  ('fly', 'Fly in'),
  ('spin', 'Spin in'),
  ('flip', 'Flip'),
  ('jelly', 'Jelly'),
  ('shake', 'Shake'),
  ('float', 'Float'),
  ('pulse', 'Heartbeat'),
  ('swing', 'Swing'),
  ('reveal', 'Reveal'),
  ('blur', 'Zoom out'),
  ('domino', 'Domino'),
  ('spiral', 'Spiral in'),
  ('cascade', 'Shine sweep'),
  ('wobble', 'Wobble'),
  ('rise', 'Rise up'),
  ('scatter', 'Scatter & gather'),
];

const List<(String, String)> kTitleStyles = [
  ('solid', 'Solid'),
  ('outline', 'Outline'),
  ('three', '3D block'),
  ('neon', 'Neon tube'),
  ('gradient', 'Gradient'),
  ('sticker', 'Sticker'),
  ('retro', 'Retro'),
  ('gold', 'Gold'),
];

const List<(String, String)> kTitleBackgrounds = [
  ('🌙', 'Midnight'),
  ('✨', 'Starfield'),
  ('🌌', 'Aurora'),
  ('🌅', 'Savanna sunset'),
  ('🌊', 'Ocean waves'),
  ('🕹️', 'Neon grid'),
  ('💻', 'Code rain'),
  ('🎉', 'Confetti'),
  ('🎆', 'Fireworks'),
  ('🫧', 'Bubbles'),
  ('❄️', 'Snowfall'),
  ('🧶', 'Kente weave'),
  ('🔮', 'Bokeh lights'),
  ('🌧️', 'Rain'),
  ('🔥', 'Fire'),
  ('🏔️', 'Paper hills'),
  ('🎭', 'Stage'),
  ('☀️', 'Sunburst'),
  ('🫠', 'Lava lamp'),
  ('🌃', 'City night'),
];

/// The three shapes a title card can have: wide, square, or tall like a story.
const List<(String, double)> kTitleShapes = [('Wide', 16 / 9), ('Square', 1.0), ('Tall', 9 / 16)];

// ─── The moving background designs ───────────────────────────────────────────

const double _tau = math.pi * 2;

Paint _fill(Color c) => Paint()..color = c;

Paint _line(Color c, double w) => Paint()
  ..color = c
  ..strokeWidth = w
  ..style = PaintingStyle.stroke
  ..strokeCap = StrokeCap.round;

Shader _vgrad(Size s, List<Color> cols, [List<double>? stops]) => ui.Gradient.linear(Offset.zero, Offset(0, s.height), cols, stops ?? (cols.length == 2 ? null : [for (var i = 0; i < cols.length; i++) i / (cols.length - 1)]));

final Map<String, TextPainter> _glyphCache = {};

TextPainter _glyph(String ch, double size, Color col) => _glyphCache.putIfAbsent('$ch|${size.round()}|${col.toARGB32()}', () => TextPainter(text: TextSpan(text: ch, style: TextStyle(color: col, fontSize: size, fontWeight: FontWeight.w700, fontFamily: 'monospace')), textDirection: TextDirection.ltr)..layout());

/// Draws background design [d] at moment [t] (0 to 1, and the end joins the start, so the loop never jumps).
void paintTitleBackground(Canvas c, Size s, double t, int d) {
  final w = s.width, h = s.height;
  final r = Offset.zero & s;
  final rnd = math.Random(d * 97 + 5);
  double rn() => rnd.nextDouble();
  switch (d % kTitleBackgrounds.length) {
    case 0:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF0B0B10), Color(0xFF1B1B33)]));
      final p = Offset(w * (0.5 + 0.2 * math.sin(_tau * t)), h * 0.5);
      c.drawCircle(p, w * 0.5, Paint()..shader = ui.Gradient.radial(p, w * 0.5, [const Color(0x33818CF8), Colors.transparent]));
    case 1:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF030617), Color(0xFF14174A)]));
      for (var i = 0; i < 70; i++) {
        final x = rn() * w, y = rn() * h, k = 1 + rnd.nextInt(3);
        c.drawCircle(Offset(x, y), 0.6 + rn() * 1.4, _fill(Colors.white.withValues(alpha: 0.35 + 0.65 * (0.5 + 0.5 * math.sin(_tau * t * k + i)))));
      }
      final sp = (t * 2) % 1.0;
      c.drawLine(Offset(w * (0.1 + sp * 0.7), h * (0.1 + sp * 0.3)), Offset(w * (0.1 + sp * 0.7) - w * 0.12, h * (0.1 + sp * 0.3) - h * 0.05), _line(Colors.white.withValues(alpha: 1 - sp), 2));
      c.drawCircle(Offset(w * 0.85, h * 0.2), h * 0.09, _fill(const Color(0xFFFFF3D2)));
      c.drawCircle(Offset(w * 0.85 + h * 0.03, h * 0.2 - h * 0.01), h * 0.08, _fill(const Color(0xFF0B1030)));
    case 2:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF04112B), Color(0xFF0B2A3F), Color(0xFF05101D)]));
      for (var i = 0; i < 40; i++) {
        c.drawCircle(Offset(rn() * w, rn() * h * 0.6), 0.7, _fill(Colors.white.withValues(alpha: 0.5)));
      }
      const cols = [Color(0xFF34D399), Color(0xFF22D3EE), Color(0xFFA78BFA), Color(0xFF4ADE80)];
      for (var k = 0; k < 4; k++) {
        final path = Path();
        for (var x = 0.0; x <= w; x += w / 24) {
          final y = h * (0.3 + 0.07 * k) + math.sin(_tau * (x / w * 1.4 + t) + k * 1.3) * h * 0.09;
          x == 0 ? path.moveTo(x, y) : path.lineTo(x, y);
        }
        c.drawPath(path, Paint()..color = cols[k].withValues(alpha: 0.5)..style = PaintingStyle.stroke..strokeWidth = h * 0.12..maskFilter = const MaskFilter.blur(BlurStyle.normal, 16));
      }
    case 3:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF2B1055), Color(0xFFF7797D), Color(0xFFFBD786)], const [0, 0.62, 1]));
      final sun = Offset(w * 0.5, h * (0.64 + 0.01 * math.sin(_tau * t)));
      c.drawCircle(sun, h * 0.36, Paint()..shader = ui.Gradient.radial(sun, h * 0.36, [const Color(0x66FFE3A3), Colors.transparent]));
      c.drawCircle(sun, h * 0.13, _fill(const Color(0xFFFFF1B8)));
      for (var l = 0; l < 3; l++) {
        final path = Path()..moveTo(0, h);
        for (var x = 0.0; x <= w; x += 8) {
          path.lineTo(x, h * (0.7 + 0.07 * l) + math.sin(x / w * (3 + l) + l * 2) * h * 0.04);
        }
        path.lineTo(w, h);
        c.drawPath(path, _fill([const Color(0xFF6B2D5C), const Color(0xFF3F1D4A), const Color(0xFF1E1033)][l]));
      }
      for (final x in [0.18, 0.78]) {
        final b = Offset(w * x, h * 0.78);
        c.drawLine(b, b + Offset(-w * 0.005, -h * 0.2), _line(const Color(0xFF140A22), 3));
        c.drawOval(Rect.fromCenter(center: b + Offset(-w * 0.005, -h * 0.21), width: w * 0.2, height: h * 0.06), _fill(const Color(0xFF140A22)));
      }
      for (var i = 0; i < 4; i++) {
        final p = (t + i * 0.22) % 1.0;
        final b = Offset(-w * 0.05 + p * w * 1.1, h * (0.25 + 0.05 * i) + math.sin(_tau * p * 3) * h * 0.02);
        final f = math.sin(_tau * t * 6 + i) * h * 0.012;
        c.drawPath(Path()..moveTo(b.dx - 8, b.dy + f)..quadraticBezierTo(b.dx - 3, b.dy - 4, b.dx, b.dy)..quadraticBezierTo(b.dx + 3, b.dy - 4, b.dx + 8, b.dy + f), _line(const Color(0xFF1E1033), 2));
      }
    case 4:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF7DD3FC), Color(0xFFE0F2FE), Color(0xFF38BDF8), Color(0xFF075985)], const [0, 0.42, 0.43, 1]));
      c.drawCircle(Offset(w * 0.75, h * 0.2), h * 0.1, _fill(const Color(0xFFFFF7B2)));
      for (var l = 0; l < 5; l++) {
        final path = Path()..moveTo(0, h);
        for (var x = 0.0; x <= w; x += 6) {
          path.lineTo(x, h * (0.46 + 0.1 * l) + math.sin(_tau * (x / w * (1.5 + l * 0.4) + t * (l.isEven ? 1 : -1))) * h * 0.025);
        }
        path.lineTo(w, h);
        c.drawPath(path, _fill(Color.lerp(const Color(0xFF0EA5E9), const Color(0xFF082F49), l / 5)!.withValues(alpha: 0.85)));
      }
    case 5:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF14002E), Color(0xFF4C0A5E), Color(0xFFB4177D)], const [0, 0.55, 0.6]));
      final hz = h * 0.6;
      c.drawCircle(Offset(w / 2, hz), h * 0.26, Paint()..shader = ui.Gradient.linear(Offset(0, hz - h * 0.26), Offset(0, hz), const [Color(0xFFFFE066), Color(0xFFFF2E93)]));
      for (var i = 0; i < 5; i++) {
        c.drawRect(Rect.fromLTWH(w * 0.2, hz - h * 0.2 + i * h * 0.045, w * 0.6, h * 0.012 * (i + 1) * 0.6), _fill(const Color(0xFF14002E)));
      }
      c.drawRect(Rect.fromLTRB(0, hz, w, h), _fill(const Color(0xFF14002E)));
      final gl = _line(const Color(0xFFFF2E93).withValues(alpha: 0.85), 1.4);
      for (var k = 0; k < 10; k++) {
        final f = (k + t) / 9;
        if (f < 0.02) continue;
        final y = hz + f * f * (h - hz);
        c.drawLine(Offset(0, y), Offset(w, y), gl);
      }
      for (var k = -8; k <= 8; k++) {
        c.drawLine(Offset(w / 2 + k * w * 0.02, hz), Offset(w / 2 + k * w * 0.2, h), gl);
      }
    case 6:
      c.drawRect(r, _fill(const Color(0xFF020B05)));
      const chars = '01ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      final cw = math.max(12.0, w / 20);
      for (var col = 0; col < w / cw; col++) {
        final speed = 1 + col % 3;
        final head = ((t * speed + rn()) % 1.0) * (h + cw * 9) - cw * 2;
        for (var k = 0; k < 10; k++) {
          final y = head - k * cw;
          if (y < -cw || y > h) continue;
          final ch = chars[(col * 7 + k * 3 + (t * 12 * speed).floor()) % chars.length];
          _glyph(ch, cw * 0.9, k == 0 ? const Color(0xFFD9FFE4) : const Color(0xFF22C55E).withValues(alpha: 1 - k / 9)).paint(c, Offset(col * cw, y));
        }
      }
    case 7:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF3B0764), Color(0xFFBE185D)]));
      const cols = [Color(0xFFFACC15), Color(0xFF38BDF8), Color(0xFF4ADE80), Color(0xFFF472B6), Color(0xFFFFFFFF), Color(0xFFFB923C)];
      for (var i = 0; i < 60; i++) {
        final x = rn() * w, k = 1 + rnd.nextInt(2), off = rn();
        final y = ((t * k + off) % 1.0) * (h + 30) - 15;
        c.save();
        c.translate(x + math.sin(_tau * t + i) * 8, y);
        c.rotate(_tau * t * (1 + i % 3) + i);
        c.drawRect(Rect.fromCenter(center: Offset.zero, width: 8, height: 4), _fill(cols[i % cols.length]));
        c.restore();
      }
    case 8:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF020617), Color(0xFF1E1B4B)]));
      const cols = [Color(0xFFFACC15), Color(0xFFF472B6), Color(0xFF38BDF8)];
      for (var b = 0; b < 3; b++) {
        final p = (t + b / 3) % 1.0;
        final cx = w * (0.22 + 0.28 * b), cy = h * (0.3 + 0.1 * (b % 2));
        if (p < 0.22) {
          final q = p / 0.22;
          c.drawLine(Offset(cx, h * (1 - q * (1 - cy / h))), Offset(cx, h * (1 - q * (1 - cy / h)) + h * 0.08), _line(Colors.white70, 2));
        } else {
          final q = (p - 0.22) / 0.78;
          final e = 1 - math.pow(1 - q, 3).toDouble();
          for (var i = 0; i < 28; i++) {
            final a = _tau * i / 28;
            c.drawCircle(Offset(cx + math.cos(a) * e * h * 0.34, cy + math.sin(a) * e * h * 0.34 + q * q * h * 0.1), 2.6 * (1 - q) + 0.4, _fill(cols[b].withValues(alpha: 1 - q)));
          }
        }
      }
    case 9:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF0E7490), Color(0xFF042F2E)]));
      for (var i = 0; i < 30; i++) {
        final k = 1 + rnd.nextInt(2), off = rn(), x = rn() * w, rad = 4 + rn() * h * 0.05;
        final y = h - ((t * k + off) % 1.0) * (h + rad * 3) + rad;
        final p = Offset(x + math.sin(_tau * t * k + i) * 10, y);
        c.drawCircle(p, rad, _fill(Colors.white.withValues(alpha: 0.12)));
        c.drawCircle(p, rad, _line(Colors.white.withValues(alpha: 0.5), 1.2));
        c.drawCircle(p + Offset(-rad * 0.3, -rad * 0.3), rad * 0.2, _fill(Colors.white.withValues(alpha: 0.7)));
      }
    case 10:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF0B1B3F), Color(0xFF1E3A8A)]));
      c.drawCircle(Offset(w * 0.2, h * 0.2), h * 0.08, _fill(const Color(0xFFFFF3D2)));
      for (var i = 0; i < 90; i++) {
        final k = 1 + rnd.nextInt(3), off = rn(), x = rn() * w;
        final y = ((t * k + off) % 1.0) * (h + 10) - 5;
        c.drawCircle(Offset(x + math.sin(_tau * t * k + i) * 12, y), 1.2 + rn() * 2.4, _fill(Colors.white.withValues(alpha: 0.9)));
      }
      c.drawOval(Rect.fromLTWH(-w * 0.1, h * 0.9, w * 1.2, h * 0.3), _fill(Colors.white));
    case 11:
      c.drawRect(r, _fill(const Color(0xFF111111)));
      const cols = [Color(0xFFF2B01E), Color(0xFFD62828), Color(0xFF111111), Color(0xFF1B7F3B), Color(0xFFF2B01E), Color(0xFF111111)];
      final bw = w / 12;
      final shift = (t * bw * 6) % (bw * 6);
      for (var i = -6; i < 24; i++) {
        final x = i * bw + shift;
        c.drawRect(Rect.fromLTWH(x, 0, bw, h), _fill(cols[(i % 6 + 6) % 6]));
      }
      for (var y = 0.0; y < h; y += bw) {
        for (var i = -6; i < 24; i++) {
          if ((i + (y / bw).floor()) % 3 == 0) {
            final cx = i * bw + shift + bw / 2, cy = y + bw / 2;
            c.drawPath(Path()..moveTo(cx, cy - bw * 0.3)..lineTo(cx + bw * 0.3, cy)..lineTo(cx, cy + bw * 0.3)..lineTo(cx - bw * 0.3, cy)..close(), _fill(Colors.white.withValues(alpha: 0.75)));
          }
        }
      }
      c.drawRect(r, Paint()..shader = ui.Gradient.radial(r.center, w * 0.7, [Colors.transparent, Colors.black.withValues(alpha: 0.55)], [0.4, 1]));
    case 12:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF0F172A), Color(0xFF312E81)]));
      const cols = [Color(0xFFF472B6), Color(0xFF38BDF8), Color(0xFFFACC15), Color(0xFFA78BFA), Color(0xFF4ADE80)];
      for (var i = 0; i < 18; i++) {
        final p = Offset(rn() * w + math.sin(_tau * t + i) * 18, rn() * h + math.cos(_tau * t + i * 1.7) * 14);
        final rad = h * (0.05 + rn() * 0.1) * (1 + 0.15 * math.sin(_tau * t * 2 + i));
        c.drawCircle(p, rad, Paint()..color = cols[i % cols.length].withValues(alpha: 0.28)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 7));
        c.drawCircle(p, rad * 0.9, _line(cols[i % cols.length].withValues(alpha: 0.35), 1.2));
      }
    case 13:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF1F2937), Color(0xFF0F172A)]));
      final flash = math.max(0.0, 1 - ((t - 0.3).abs() * 14));
      if (flash > 0) c.drawRect(r, _fill(Colors.white.withValues(alpha: 0.35 * flash)));
      for (var i = 0; i < 70; i++) {
        final x = rn() * w, k = 2 + rnd.nextInt(2), off = rn();
        final y = ((t * k + off) % 1.0) * (h + 40) - 20;
        c.drawLine(Offset(x, y), Offset(x - 6, y + 18), _line(const Color(0xFF93C5FD).withValues(alpha: 0.6), 1.3));
      }
      for (var i = 0; i < 10; i++) {
        final x = rn() * w, off = rn();
        final y = ((t + off) % 1.0) * h;
        c.drawOval(Rect.fromCenter(center: Offset(x, y), width: 7, height: 11), _fill(Colors.white.withValues(alpha: 0.18)));
      }
    case 14:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF050505), Color(0xFF3B0A0A), Color(0xFF7F1D1D)]));
      for (var i = 0; i < 7; i++) {
        final bx = w * (i + 0.5) / 7;
        final hh = h * (0.28 + 0.1 * math.sin(_tau * t * 2 + i * 2.1) + 0.06 * (i % 3));
        final p = Path()..moveTo(bx - w * 0.07, h)..cubicTo(bx - w * 0.08, h - hh * 0.5, bx + math.sin(_tau * t * 3 + i) * 6, h - hh * 0.8, bx, h - hh)..cubicTo(bx + w * 0.02, h - hh * 0.6, bx + w * 0.08, h - hh * 0.4, bx + w * 0.07, h)..close();
        c.drawPath(p, _fill(const Color(0xFFEA580C).withValues(alpha: 0.85)));
        c.drawPath(Path()..moveTo(bx - w * 0.035, h)..quadraticBezierTo(bx, h - hh * 0.9, bx + w * 0.035, h)..close(), _fill(const Color(0xFFFDE047).withValues(alpha: 0.9)));
      }
      for (var i = 0; i < 40; i++) {
        final k = 1 + rnd.nextInt(2), off = rn(), x = rn() * w;
        final y = h - ((t * k + off) % 1.0) * h * 0.9;
        c.drawCircle(Offset(x + math.sin(_tau * t * k + i) * 10, y), 1.5, _fill(const Color(0xFFFFD24A).withValues(alpha: 0.9)));
      }
    case 15:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFFFDE68A), Color(0xFFFCA5A5)]));
      c.drawCircle(Offset(w * 0.7, h * 0.28), h * 0.12, _fill(const Color(0xFFFFF7ED)));
      const cols = [Color(0xFFF59E0B), Color(0xFFEA580C), Color(0xFFBE185D), Color(0xFF6D28D9), Color(0xFF1E1B4B)];
      for (var l = 0; l < 5; l++) {
        final path = Path()..moveTo(0, h);
        final off = math.sin(_tau * t + l) * w * 0.02 * (l + 1);
        for (var x = -20.0; x <= w + 20; x += w / 12) {
          final y = h * (0.45 + 0.1 * l) - (math.sin((x + off) / w * (4 + l) + l * 1.7).abs()) * h * 0.18;
          path.lineTo(x, y);
        }
        path.lineTo(w + 20, h);
        c.drawPath(path, _fill(cols[l]));
      }
    case 16:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF1B0A0A), Color(0xFF2A0F0F)]));
      final ang = math.sin(_tau * t) * 0.18;
      c.save();
      c.translate(w / 2, 0);
      c.rotate(ang);
      c.drawPath(Path()..moveTo(-w * 0.03, 0)..lineTo(w * 0.03, 0)..lineTo(w * 0.34, h)..lineTo(-w * 0.34, h)..close(), Paint()..shader = ui.Gradient.linear(Offset.zero, Offset(0, h), [Colors.white.withValues(alpha: 0.5), Colors.white.withValues(alpha: 0.04)]));
      c.restore();
      c.drawOval(Rect.fromCenter(center: Offset(w / 2 + math.sin(ang) * h, h * 0.95), width: w * 0.6, height: h * 0.14), _fill(Colors.white.withValues(alpha: 0.22)));
      for (final side in [-1.0, 1.0]) {
        final base = side < 0 ? 0.0 : w * 0.82;
        for (var i = 0; i < 6; i++) {
          c.drawRect(Rect.fromLTWH(base + i * w * 0.03, 0, w * 0.03, h), Paint()..shader = ui.Gradient.linear(Offset(0, 0), Offset(w * 0.03, 0), [const Color(0xFF7F1D1D), const Color(0xFFB91C1C), const Color(0xFF7F1D1D)], const [0, 0.5, 1]));
        }
        c.drawRect(Rect.fromLTWH(side < 0 ? 0 : w * 0.82, 0, w * 0.18, h * 0.06), _fill(const Color(0xFF450A0A)));
      }
    case 17:
      c.drawRect(r, Paint()..shader = ui.Gradient.radial(r.center, w * 0.7, const [Color(0xFFFFF176), Color(0xFFFB923C), Color(0xFFB45309)], const [0, 0.5, 1]));
      c.save();
      c.translate(w / 2, h / 2);
      c.rotate(t * _tau / 8);
      for (var i = 0; i < 16; i += 2) {
        final a0 = _tau * i / 16, a1 = _tau * (i + 1) / 16;
        c.drawPath(Path()..moveTo(0, 0)..lineTo(math.cos(a0) * w, math.sin(a0) * w)..lineTo(math.cos(a1) * w, math.sin(a1) * w)..close(), _fill(Colors.white.withValues(alpha: 0.22)));
      }
      c.restore();
    case 18:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF3B0764), Color(0xFF7C2D12)]));
      const cols = [Color(0xFFF472B6), Color(0xFFFB923C), Color(0xFFFACC15), Color(0xFFA78BFA)];
      for (var i = 0; i < 7; i++) {
        final x = w * (0.1 + 0.8 * rn());
        final y = h * (0.5 + 0.38 * math.sin(_tau * t + i * 1.1));
        final rad = h * (0.1 + 0.08 * rn());
        c.drawCircle(Offset(x + math.sin(_tau * t * 2 + i) * 10, y), rad, Paint()..color = cols[i % cols.length].withValues(alpha: 0.7)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
      }
    case 19:
      c.drawRect(r, Paint()..shader = _vgrad(s, const [Color(0xFF0B1030), Color(0xFF3B2A5E), Color(0xFFB45F8A)], const [0, 0.7, 1]));
      for (var i = 0; i < 40; i++) {
        c.drawCircle(Offset(rn() * w, rn() * h * 0.45), 0.7, _fill(Colors.white.withValues(alpha: 0.6)));
      }
      c.drawCircle(Offset(w * 0.8, h * 0.2), h * 0.07, _fill(const Color(0xFFFFF3D2)));
      var x = -w * 0.02;
      var bi = 0;
      while (x < w) {
        final bw2 = w * (0.07 + rn() * 0.07), bh2 = h * (0.25 + rn() * 0.4);
        c.drawRect(Rect.fromLTWH(x, h - bh2, bw2, bh2), _fill(const Color(0xFF0B0820)));
        for (var wy = h - bh2 + 6; wy < h - 8; wy += 11) {
          for (var wx = x + 4; wx < x + bw2 - 6; wx += 9) {
            final on = ((bi * 31 + (wy * 7).round() + (wx * 3).round() + (t * 6).floor()) % 5) != 0;
            if (on) c.drawRect(Rect.fromLTWH(wx, wy, 4, 6), _fill(const Color(0xFFFFD27A).withValues(alpha: 0.85)));
          }
        }
        x += bw2 + 2;
        bi++;
      }
  }
}

// ─── How each letter moves ───────────────────────────────────────────────────

/// How one letter is placed at one moment: sideways and up-down, stretched, turned, how see-through, and an optional colour.
class _Xf {
  double dx = 0, dy = 0, sx = 1, sy = 1, rot = 0, opacity = 1, pivotY = 0;
  Color? color;
  double glow = 0;
}

double _clamp01(double v) => v.clamp(0.0, 1.0).toDouble();

double _bounceOut(double x) {
  const n1 = 7.5625, d1 = 2.75;
  if (x < 1 / d1) return n1 * x * x;
  if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
  if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
  return n1 * (x -= 2.625 / d1) * x + 0.984375;
}

/// The moment a letter arrives: 0 before, 1 after. Letters come one after another, and all go at the end of the loop, so it joins up.
double _arrive(double t, int i, int n) {
  final frac = n <= 1 ? 0.0 : i / (n - 1);
  return _clamp01((t / 0.5 - frac * 0.45) / 0.55);
}

/// 1 while the title is there, fading to 0 at the end of the loop.
double _stay(double t) => t < 0.86 ? 1.0 : _clamp01((1 - t) / 0.14);

_Xf _xf(String move, int i, int n, double t, double fs, double width, Color base) {
  final f = _Xf();
  final frac = n <= 1 ? 0.0 : i / (n - 1);
  final p = _arrive(t, i, n);
  final stay = _stay(t);
  final rr = math.Random(i * 53 + 11);
  switch (move) {
    case 'type':
      f.opacity = (t / 0.55 * n).floor() > i ? stay : 0;
    case 'bounce':
      f.dy = -math.sin(((t * 2 - frac * 0.5) % 1.0) * math.pi).abs() * fs * 0.5;
    case 'wave':
      f.dy = math.sin(_tau * t - frac * 3) * fs * 0.28;
    case 'neon':
      final fl = math.sin(_tau * t * 13 + i * 7) > 0.92 ? 0.25 : 1.0;
      f.opacity = fl;
      f.glow = fl;
    case 'glitch':
      final g = (t * 12).floor() % 6 == 0;
      f.dx = g ? math.sin(i * 12.9898 + t * 100) * fs * 0.14 : 0;
      if (g) f.color = i.isEven ? const Color(0xFF22D3EE) : const Color(0xFFF472B6);
    case 'zoom':
      f.sx = f.sy = Curves.elasticOut.transform(p);
      f.opacity = p * stay;
    case 'rainbow':
      f.color = HSVColor.fromAHSV(1, (t * 360 + i * 40) % 360, 0.75, 1).toColor();
    case 'drop':
      f.dy = -(1 - _bounceOut(p)) * fs * 4;
      f.opacity = _clamp01(p * 6) * stay;
    case 'fly':
      f.dx = -(1 - Curves.easeOutBack.transform(p)) * width * 0.8;
      f.opacity = _clamp01(p * 4) * stay;
    case 'spin':
      f.rot = (1 - p) * _tau;
      f.sx = f.sy = p;
      f.opacity = stay;
    case 'flip':
      f.sx = math.cos(math.pi * (1 - Curves.easeOut.transform(p)));
      f.opacity = _clamp01(p * 5) * stay;
    case 'jelly':
      final j = math.sin(_tau * t * 2 + i) * 0.25;
      f.sx = 1 + j;
      f.sy = 1 - j;
    case 'shake':
      f.dx = math.sin(_tau * t * 30 + i * 3) * fs * 0.05;
      f.dy = math.cos(_tau * t * 27 + i * 5) * fs * 0.05;
    case 'float':
      f.dy = math.sin(_tau * t + i * 0.8) * fs * 0.15;
      f.rot = math.sin(_tau * t + i) * 0.05;
    case 'pulse':
      final b = math.pow(math.max(0.0, math.sin(_tau * t * 2)), 3).toDouble();
      f.sx = f.sy = 1 + 0.18 * b;
    case 'swing':
      f.pivotY = -fs * 0.5;
      f.rot = math.sin(_tau * t + frac * 2) * 0.35;
    case 'reveal':
      final rv = _clamp01(t / 0.5);
      f.opacity = _clamp01((rv - frac) * 6) * stay;
    case 'blur':
      f.sx = f.sy = 2.4 - 1.4 * Curves.easeOut.transform(p);
      f.opacity = p * stay;
    case 'domino':
      final q = _clamp01(t * 1.6 - frac * 0.6);
      f.rot = math.sin(q * math.pi) * 0.9;
      f.pivotY = fs * 0.5;
    case 'spiral':
      final a = (1 - p) * math.pi * 3, rad = (1 - p) * fs * 3;
      f.dx = math.cos(a) * rad;
      f.dy = math.sin(a) * rad;
      f.opacity = p * stay;
    case 'cascade':
      final k = math.pow(math.sin(math.pi * ((t * 2 - frac) % 1.0)), 4).toDouble();
      f.color = Color.lerp(base, Colors.white, k);
      f.glow = k;
    case 'wobble':
      f.rot = math.sin(_tau * t * 2 + i) * 0.15;
      f.sx = 1 + 0.05 * math.sin(_tau * t * 2 + i * 2);
    case 'rise':
      f.dy = (1 - Curves.easeOutCubic.transform(p)) * fs * 2;
      f.opacity = p * stay;
    case 'scatter':
      final e = Curves.easeInOut.transform(p);
      f.dx = (1 - e) * (rr.nextDouble() - 0.5) * width;
      f.dy = (1 - e) * (rr.nextDouble() - 0.5) * fs * 6;
      f.rot = (1 - e) * (rr.nextDouble() - 0.5) * 6;
      f.opacity = stay;
  }
  return f;
}

// ─── How each letter is designed ─────────────────────────────────────────────

TextPainter _tp(String ch, double fs, {Color? color, Paint? paint, FontWeight w = FontWeight.w900}) => TextPainter(
      text: TextSpan(text: ch, style: TextStyle(fontSize: fs, fontWeight: w, height: 1.0, color: paint == null ? color : null, foreground: paint)),
      textDirection: TextDirection.ltr,
    )..layout();

void _paintGlyph(Canvas c, String ch, double fs, String style, Color col, double opacity, double glow) {
  final a = opacity.clamp(0.0, 1.0);
  if (a <= 0.01) return;
  final probe = _tp(ch, fs);
  final o = Offset(-probe.width / 2, -probe.height / 2);
  final box = Rect.fromLTWH(o.dx, o.dy, probe.width, probe.height);
  Color al(Color x, [double m = 1]) => x.withValues(alpha: (x.a * a * m).clamp(0.0, 1.0));
  void stroke(Color sc, double wdt, {Offset shift = Offset.zero, MaskFilter? blur}) {
    final p = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = wdt
      ..strokeJoin = StrokeJoin.round
      ..color = sc;
    if (blur != null) p.maskFilter = blur;
    _tp(ch, fs, paint: p).paint(c, o + shift);
  }

  switch (style) {
    case 'outline':
      stroke(al(col), fs * 0.07);
    case 'three':
      final dark = Color.lerp(col, Colors.black, 0.55)!;
      for (var k = 9; k >= 1; k--) {
        _tp(ch, fs, color: al(Color.lerp(col, dark, k / 9)!)).paint(c, o + Offset(k * fs * 0.012, k * fs * 0.014));
      }
      _tp(ch, fs, color: al(col)).paint(c, o);
    case 'neon':
      final g = 0.6 + 0.4 * glow;
      stroke(al(col, 0.9 * g), fs * 0.16, blur: MaskFilter.blur(BlurStyle.normal, fs * 0.2));
      stroke(al(col, 0.9), fs * 0.07);
      stroke(al(Colors.white, 0.95), fs * 0.025);
    case 'gradient':
      final p = Paint()..shader = ui.Gradient.linear(box.topCenter, box.bottomCenter, [al(Color.lerp(col, Colors.white, 0.45)!), al(col), al(Color.lerp(col, const Color(0xFF7C3AED), 0.6)!)], const [0, 0.5, 1]);
      _tp(ch, fs, paint: p).paint(c, o);
    case 'sticker':
      _tp(ch, fs, color: al(Colors.black, 0.3)).paint(c, o + Offset(fs * 0.04, fs * 0.06));
      stroke(al(Colors.white), fs * 0.2);
      stroke(al(const Color(0xFF111827)), fs * 0.24, shift: Offset.zero, blur: null);
      stroke(al(Colors.white), fs * 0.17);
      _tp(ch, fs, color: al(col)).paint(c, o);
    case 'retro':
      final alt = HSVColor.fromColor(col).withHue((HSVColor.fromColor(col).hue + 150) % 360).toColor();
      for (var k = 5; k >= 1; k--) {
        _tp(ch, fs, color: al(alt)).paint(c, o + Offset(k * fs * 0.014, k * fs * 0.014));
      }
      stroke(al(const Color(0xFF111827)), fs * 0.05);
      _tp(ch, fs, color: al(col)).paint(c, o);
    case 'gold':
      final p = Paint()..shader = ui.Gradient.linear(box.topCenter, box.bottomCenter, [al(const Color(0xFFFFF3B0)), al(const Color(0xFFF2B01E)), al(const Color(0xFFB45309)), al(const Color(0xFFFFE08A)), al(const Color(0xFF92400E))], const [0, 0.35, 0.55, 0.75, 1]);
      stroke(al(const Color(0xFF451A03)), fs * 0.06);
      _tp(ch, fs, paint: p).paint(c, o);
    default:
      _tp(ch, fs, color: al(col)).paint(c, o);
  }
}

// ─── The card: background and letters ───────────────────────────────────────

/// Draws moment [t] (0 to 1) of a title card of any size.
class TitleCardPainter extends CustomPainter {
  TitleCardPainter({required this.t, required this.text, required this.move, required this.style, required this.bg, required this.color, required this.fontSize, Listenable? repaint}) : super(repaint: repaint);
  final double t;
  final String text, move, style;
  final int bg;
  final Color color;

  /// The size of the letters on a card 360 wide; the card scales it.
  final double fontSize;

  @override
  void paint(Canvas c, Size s) {
    paintTitleCard(c, s, t, text: text, move: move, style: style, bg: bg, color: color, fontSize: fontSize);
  }

  @override
  bool shouldRepaint(covariant TitleCardPainter old) => old.t != t || old.text != text || old.move != move || old.style != style || old.bg != bg || old.color != color || old.fontSize != fontSize;
}

void paintTitleCard(Canvas c, Size s, double t, {required String text, required String move, required String style, required int bg, required Color color, required double fontSize}) {
  c.save();
  c.clipRect(Offset.zero & s);
  paintTitleBackground(c, s, t, bg);
  final fs = fontSize * s.width / 360 * (s.width < s.height ? 0.9 : 1.0);
  final chars = text.trim().isEmpty ? ['…'] : text.trim().characters.toList();
  // Lay the letters out in lines that fit, breaking at spaces.
  final widths = [for (final ch in chars) _tp(ch == ' ' ? 'n' : ch, fs).width * (ch == ' ' ? 0.7 : 1.0)];
  final maxW = s.width * 0.86;
  final lines = <List<int>>[[]];
  var lw = 0.0, wordStart = 0;
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] == ' ') {
      lines.last.add(i);
      lw += widths[i];
      wordStart = lines.last.length;
      continue;
    }
    if (lw + widths[i] > maxW && lines.last.isNotEmpty) {
      // Move the unfinished word to a new line.
      final carry = wordStart > 0 && wordStart < lines.last.length ? lines.last.sublist(wordStart) : <int>[];
      if (carry.isNotEmpty) lines.last.removeRange(wordStart, lines.last.length);
      lines.add([...carry]);
      lw = carry.fold(0.0, (a, k) => a + widths[k]);
      wordStart = 0;
    }
    lines.last.add(i);
    lw += widths[i];
  }
  final lineH = fs * 1.15;
  final top = s.height / 2 - lines.length * lineH / 2 + lineH / 2;
  for (var li = 0; li < lines.length; li++) {
    final line = lines[li];
    final total = line.fold(0.0, (a, k) => a + widths[k]);
    var x = s.width / 2 - total / 2;
    for (final i in line) {
      final cx = x + widths[i] / 2;
      x += widths[i];
      if (chars[i] == ' ') continue;
      final f = _xf(move, i, chars.length, t, fs, s.width, color);
      c.save();
      c.translate(cx + f.dx, top + li * lineH + f.dy);
      if (f.pivotY != 0) c.translate(0, f.pivotY);
      c.rotate(f.rot);
      if (f.pivotY != 0) c.translate(0, -f.pivotY);
      c.scale(f.sx == 0 ? 0.001 : f.sx, f.sy == 0 ? 0.001 : f.sy);
      _paintGlyph(c, chars[i], fs, style, f.color ?? color, f.opacity, f.glow);
      c.restore();
    }
  }
  c.restore();
}

/// Saves the whole title as a moving GIF: every moment of the loop is drawn and joined into one animated picture.
/// [onProgress] is told how far it has got (0 to 1).
Future<Uint8List> ngmyTitleGif({
  required String text,
  required String move,
  required String style,
  required int bg,
  required Color color,
  required double fontSize,
  double aspect = 16 / 9,
  int longEdge = 480,
  int fps = 15,
  void Function(double)? onProgress,
}) async {
  final w = (aspect >= 1 ? longEdge : longEdge * aspect).round();
  final h = (aspect >= 1 ? longEdge / aspect : longEdge).round();
  final frames = (kTitleLoopSecs * fps).round();
  final enc = img.GifEncoder(delay: 0, repeat: 0, samplingFactor: 12, dither: img.DitherKernel.none);
  final delay = (100 / fps).round();
  for (var f = 0; f < frames; f++) {
    final rec = ui.PictureRecorder();
    final canvas = Canvas(rec);
    paintTitleCard(canvas, Size(w.toDouble(), h.toDouble()), f / frames, text: text, move: move, style: style, bg: bg, color: color, fontSize: fontSize);
    final pic = rec.endRecording();
    final image = await pic.toImage(w, h);
    final data = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
    image.dispose();
    pic.dispose();
    if (data == null) continue;
    final frame = img.Image.fromBytes(width: w, height: h, bytes: data.buffer, numChannels: 4, order: img.ChannelOrder.rgba);
    enc.addFrame(frame, duration: delay);
    onProgress?.call((f + 1) / frames);
    // Let the screen breathe so the progress bar moves.
    await Future<void>.delayed(Duration.zero);
  }
  return enc.finish() ?? Uint8List(0);
}

// ─── The studio ─────────────────────────────────────────────────────────────

class NgmyTitleStudio extends StatefulWidget {
  const NgmyTitleStudio({super.key});

  @override
  State<NgmyTitleStudio> createState() => NgmyTitleStudioState();
}

class NgmyTitleStudioState extends State<NgmyTitleStudio> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: Duration(milliseconds: (kTitleLoopSecs * 1000).round()))..repeat();
  final TextEditingController _text = TextEditingController(text: 'NGMY');
  String move = 'bounce';
  String style = 'solid';
  int color = 3;
  double size = 56;
  int bg = 0;
  int shape = 0;
  bool sound = true;
  double _prevT = 0;
  double saving = -1;
  String note = '';

  Color get textColor => color < 0 ? Colors.white : kStudioColors[color];

  @override
  void initState() {
    super.initState();
    _c.addListener(_hear);
  }

  /// A note as each letter arrives (a click for the typewriter).
  void _hear() {
    final t = _c.value;
    final n = math.max(1, _text.text.characters.length);
    if (sound && t >= _prevT) {
      const pent = [0, 2, 4, 7, 9, 12, 14, 16];
      for (var i = 0; i < n; i++) {
        final at = move == 'type' ? i / n / 1.8 : (n <= 1 ? 0.0 : i / (n - 1) * 0.45);
        if (_prevT < at && t >= at) {
          if (move == 'type') {
            NgmyTone.play(1500, ms: 35, wave: 'square', volume: 0.18);
          } else if (move == 'glitch') {
            NgmyTone.play(400 + i * 60.0, ms: 70, wave: 'square', volume: 0.2);
          } else {
            NgmyTone.playNote(move == 'neon' ? 'synth' : 'pluck', pent[i % pent.length] + 12, ms: 450, volume: 0.35);
          }
        }
      }
    }
    _prevT = t;
  }

  @override
  void dispose() {
    _c.dispose();
    _text.dispose();
    super.dispose();
  }

  void setMove(String m) {
    setState(() => move = m);
    _c.forward(from: 0);
    _c.repeat();
  }

  /// Draws every moment of the loop and saves them as one animated GIF.
  Future<void> downloadAnimation() async {
    if (saving >= 0) return;
    setState(() {
      saving = 0;
      note = '';
    });
    try {
      final bytes = await ngmyTitleGif(text: _text.text, move: move, style: style, bg: bg, color: textColor, fontSize: size, aspect: kTitleShapes[shape].$2, onProgress: (p) {
        if (mounted) setState(() => saving = p);
      });
      if (bytes.isEmpty) throw StateError('empty');
      final name = (_text.text.trim().isEmpty ? 'title' : _text.text.trim()).replaceAll(RegExp(r'[^A-Za-z0-9_-]+'), '_');
      var done = false;
      try {
        final res = await Share.shareXFiles([XFile.fromData(bytes, mimeType: 'image/gif', name: '$name.gif')], text: 'Made in NGMY Core Protocol');
        done = res.status != ShareResultStatus.unavailable;
      } catch (_) {}
      if (!done) done = await ngmySaveBytes(bytes, '$name.gif', 'image/gif');
      if (mounted) setState(() => note = done ? 'Your animated title is saved (a moving GIF).' : 'Could not save here. Try another browser.');
    } catch (_) {
      if (mounted) setState(() => note = 'Could not make the animation. Try a shorter title.');
    }
    if (mounted) setState(() => saving = -1);
  }

  @override
  Widget build(BuildContext context) {
    const gold = Color(0xFFFACC15);
    final aspect = kTitleShapes[shape].$2;
    return StudioPage(
      title: 'TITLE ANIMATOR',
      accent: gold,
      help: 'Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a moving GIF to post or send.',
      stage: Padding(
        padding: const EdgeInsets.all(14),
        child: Center(
          child: AspectRatio(
            aspectRatio: aspect,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(22),
              child: RepaintBoundary(
                child: AnimatedBuilder(
                  animation: _c,
                  builder: (context, _) => CustomPaint(painter: TitleCardPainter(t: _c.value, text: _text.text, move: move, style: style, bg: bg, color: textColor, fontSize: size), size: Size.infinite),
                ),
              ),
            ),
          ),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        TextField(
          controller: _text,
          maxLength: 28,
          onChanged: (_) => setState(() {}),
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
          decoration: InputDecoration(
            counterText: '',
            hintText: 'Type your title',
            hintStyle: const TextStyle(color: Colors.white30),
            filled: true,
            fillColor: Colors.white.withValues(alpha: 0.06),
            isDense: true,
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
          ),
        ),
        const SizedBox(height: 8),
        StudioRow(label: 'MOVE', children: [for (final a in kTitleMoves) StudioChip(label: a.$2, selected: move == a.$1, color: gold, onTap: () => setMove(a.$1))]),
        StudioRow(label: 'LOOK', children: [for (final a in kTitleStyles) StudioChip(label: a.$2, selected: style == a.$1, color: const Color(0xFFF472B6), onTap: () => setState(() => style = a.$1))]),
        StudioRow(label: 'SCENE', children: [for (var i = 0; i < kTitleBackgrounds.length; i++) StudioChip(label: '${kTitleBackgrounds[i].$1} ${kTitleBackgrounds[i].$2}', selected: bg == i, color: const Color(0xFF38BDF8), onTap: () => setState(() => bg = i))]),
        StudioRow(label: 'COLOUR', children: [for (var i = 0; i < kStudioColors.length; i++) StudioSwatch(color: kStudioColors[i], selected: color == i, onTap: () => setState(() => color = i))]),
        StudioRow(label: 'SHAPE', children: [
          for (var i = 0; i < kTitleShapes.length; i++) StudioChip(label: kTitleShapes[i].$1, selected: shape == i, color: gold, onTap: () => setState(() => shape = i)),
          const SizedBox(width: 6),
          StudioChip(label: sound ? 'Sound on' : 'Sound off', icon: sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, selected: sound, color: gold, onTap: () => setState(() => sound = !sound)),
          const SizedBox(width: 6),
          StudioButton(icon: Icons.replay_rounded, label: 'Replay', onTap: () {
            _c.forward(from: 0);
            _c.repeat();
          }),
        ]),
        StudioSlider(label: 'Size', value: size, min: 28, max: 96, display: size.round().toString(), onChanged: (v) => setState(() => size = v), color: gold),
        const SizedBox(height: 4),
        if (saving >= 0)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 6),
            child: Column(children: [
              ClipRRect(borderRadius: BorderRadius.circular(6), child: LinearProgressIndicator(value: saving, minHeight: 8, backgroundColor: Colors.white12, color: gold)),
              const SizedBox(height: 4),
              Text('Making your animation… ${(saving * 100).round()}%', style: const TextStyle(color: Colors.white70, fontSize: 12)),
            ]),
          )
        else
          SizedBox(
            width: double.infinity,
            child: FilledButton.icon(
              onPressed: downloadAnimation,
              style: FilledButton.styleFrom(backgroundColor: gold, foregroundColor: Colors.black, padding: const EdgeInsets.symmetric(vertical: 13)),
              icon: const Icon(Icons.download_rounded),
              label: const Text('Download the animation (GIF)', style: TextStyle(fontWeight: FontWeight.w900)),
            ),
          ),
        if (note.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 6), child: Text(note, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w700, fontSize: 12.5))),
      ]),
    );
  }
}
