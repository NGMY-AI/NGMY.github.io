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

/// The common look of every advert: a colour wash, the NGMY name in the corner, the headline and the line under it.
void _backdrop(Canvas c, Size s, List<Color> g, double t, String head, String tag) {
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: g).createShader(r));
  final h = s.height;
  for (var i = 0; i < 3; i++) {
    final x = s.width * (0.15 + 0.35 * i + 0.05 * math.sin(t * 0.6 + i));
    c.drawCircle(Offset(x, h * (0.25 + 0.1 * math.cos(t * 0.5 + i))), h * (0.3 + 0.05 * i), Paint()..color = Colors.white.withValues(alpha: 0.05));
  }
  final pill = RRect.fromRectAndRadius(Rect.fromLTWH(s.width * 0.04, h * 0.04, h * 0.3, h * 0.1), Radius.circular(h * 0.05));
  c.drawRRect(pill, Paint()..color = Colors.black.withValues(alpha: 0.35));
  _txt(c, 'NGMY', Offset(pill.left + h * 0.04, pill.top + h * 0.012), h * 0.07, Colors.white, left: true);
  _txt(c, head, Offset(s.width / 2, h * 0.64), h * 0.095, Colors.white, width: s.width * 0.92);
  _txt(c, tag, Offset(s.width / 2, h * 0.76), h * 0.05, Colors.white.withValues(alpha: 0.85), width: s.width * 0.92, bold: false);
}

double _k(double t, double from, double len) => ((t - from) / len).clamp(0.0, 1.0);

/// 0 Construction Lab: a house goes up wall by wall, then the roof, the door and the window.
void _construction(Canvas c, Size s, double t) {
  _backdrop(c, s, const [Color(0xFFB45309), Color(0xFF7C2D12)], t, 'NGMY Construction Lab', 'Build, wire and finish a real house');
  final h = s.height, w = s.width;
  final lt = t % 7;
  final ground = h * 0.58;
  c.drawRect(Rect.fromLTWH(0, ground, w, h * 0.04), Paint()..color = const Color(0xFF3F2A14));
  final bw = h * 0.5, bh = h * 0.26, x0 = w / 2 - bw / 2;
  final wall = Curves.easeOut.transform(_k(lt, 0, 2));
  c.drawRect(Rect.fromLTWH(x0, ground - bh * wall, bw, bh * wall), Paint()..color = const Color(0xFFF4D9A8));
  // Studs show while the wall rises.
  for (var i = 0; i <= 6; i++) {
    c.drawRect(Rect.fromLTWH(x0 + i * bw / 6 - 1.5, ground - bh * wall, 3, bh * wall), Paint()..color = const Color(0xFFC08A4A));
  }
  final roof = Curves.easeOutBack.transform(_k(lt, 2.2, 1.4));
  if (roof > 0) {
    final p = Path()
      ..moveTo(x0 - bw * 0.08, ground - bh)
      ..lineTo(w / 2, ground - bh - bh * 0.55 * roof)
      ..lineTo(x0 + bw * 1.08, ground - bh)
      ..close();
    c.drawPath(p, Paint()..color = const Color(0xFFB91C1C));
  }
  final fin = Curves.easeOut.transform(_k(lt, 3.8, 1));
  if (fin > 0) {
    c.drawRect(Rect.fromLTWH(x0 + bw * 0.14, ground - bh * 0.62 * fin, bw * 0.2, bh * 0.62 * fin), Paint()..color = const Color(0xFF6B3F1D));
    c.drawRect(Rect.fromLTWH(x0 + bw * 0.58, ground - bh * 0.75, bw * 0.24, bh * 0.36 * fin), Paint()..color = const Color(0xFF93C5FD));
  }
  // A hammer taps the wall while it goes up; a spark of light pops when the house is done.
  if (lt < 3.5) {
    final a = math.sin(t * 9) * 0.5 - 0.6;
    c.save();
    c.translate(x0 + bw + h * 0.07, ground - bh * 0.4);
    c.rotate(a);
    c.drawRect(Rect.fromLTWH(-2, 0, 4, h * 0.12), Paint()..color = const Color(0xFFA16207));
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(-h * 0.04, -h * 0.025, h * 0.08, h * 0.04), const Radius.circular(3)), Paint()..color = const Color(0xFF9CA3AF));
    c.restore();
  } else if (lt > 5) {
    for (var i = 0; i < 6; i++) {
      final ang = i * math.pi / 3 + t;
      final d = h * 0.05 + h * 0.08 * _k(lt, 5, 1);
      c.drawCircle(Offset(w / 2 + math.cos(ang) * d * 2.2, ground - bh * 1.5 + math.sin(ang) * d), 3, Paint()..color = Colors.yellowAccent.withValues(alpha: 1 - _k(lt, 5, 2)));
    }
  }
}

/// 1 Electronics Lab: the power goes round the wire and the bulb lights.
void _electronics(Canvas c, Size s, double t) {
  _backdrop(c, s, const [Color(0xFF0E7490), Color(0xFF1E1B4B)], t, 'NGMY Electronics Lab', 'Build circuits that really light up');
  final h = s.height, w = s.width;
  final l = w * 0.28, r = w * 0.72, top = h * 0.2, bot = h * 0.52;
  final wire = Paint()
    ..color = const Color(0xFFFBBF24)
    ..style = PaintingStyle.stroke
    ..strokeWidth = h * 0.012;
  c.drawRect(Rect.fromLTRB(l, top, r, bot), wire);
  // The battery on the left side.
  c.drawRect(Rect.fromCenter(center: Offset(l, (top + bot) / 2), width: h * 0.1, height: h * 0.15), Paint()..color = const Color(0xFF111827));
  c.drawRect(Rect.fromCenter(center: Offset(l, (top + bot) / 2 - h * 0.035), width: h * 0.1, height: h * 0.06), Paint()..color = const Color(0xFF22C55E));
  _txt(c, '+', Offset(l, top + (bot - top) / 2 - h * 0.1), h * 0.06, Colors.white);
  // Little dots of current go round.
  final per = 2 * ((r - l) + (bot - top));
  for (var i = 0; i < 16; i++) {
    var d = ((t * 90 + i * per / 16) % per);
    Offset p;
    if (d < r - l) {
      p = Offset(l + d, top);
    } else if ((d -= r - l) < bot - top) {
      p = Offset(r, top + d);
    } else if ((d -= bot - top) < r - l) {
      p = Offset(r - d, bot);
    } else {
      d -= r - l;
      p = Offset(l, bot - d);
    }
    c.drawCircle(p, h * 0.012, Paint()..color = Colors.white);
  }
  // The bulb on the right side: it pulses.
  final glow = 0.6 + 0.4 * math.sin(t * 3);
  final bc = Offset(r, (top + bot) / 2);
  c.drawCircle(bc, h * (0.14 + 0.03 * glow), Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.25 * glow));
  c.drawCircle(bc, h * 0.07, Paint()..color = Color.lerp(const Color(0xFFFEF9C3), const Color(0xFFFACC15), glow)!);
  c.drawRect(Rect.fromCenter(center: bc + Offset(0, h * 0.085), width: h * 0.06, height: h * 0.03), Paint()..color = const Color(0xFF6B7280));
}

/// 2 Advisors: chat bubbles open between a member and an advisor.
void _advisors(Canvas c, Size s, double t) {
  _backdrop(c, s, const [Color(0xFF7C3AED), Color(0xFFBE185D)], t, 'NGMY Advisors', 'Say hi to a friendly advisor');
  final h = s.height, w = s.width;
  final lt = t % 6;
  void avatar(Offset o, Color col) {
    c.drawCircle(o, h * 0.075, Paint()..color = col);
    c.drawCircle(o + Offset(0, -h * 0.012), h * 0.028, Paint()..color = Colors.white.withValues(alpha: 0.9));
    c.drawArc(Rect.fromCenter(center: o + Offset(0, h * 0.075), width: h * 0.1, height: h * 0.08), math.pi, math.pi, true, Paint()..color = Colors.white.withValues(alpha: 0.9));
  }

  void bubble(Rect r, Color col, double k, String text, Color ink) {
    if (k <= 0) return;
    c.save();
    c.translate(r.center.dx, r.center.dy);
    c.scale(Curves.elasticOut.transform(k).clamp(0.01, 1.2));
    final rr = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: r.width, height: r.height), Radius.circular(h * 0.05));
    c.drawRRect(rr, Paint()..color = col);
    _txt(c, text, Offset(0, -h * 0.032), h * 0.052, ink, width: r.width - 16);
    c.restore();
  }

  avatar(Offset(w * 0.14, h * 0.22), const Color(0xFFF472B6));
  avatar(Offset(w * 0.86, h * 0.42), const Color(0xFF38BDF8));
  bubble(Rect.fromLTWH(w * 0.25, h * 0.14, w * 0.4, h * 0.14), Colors.white, _k(lt, 0.3, 0.8), 'Hi! Can you help me?', const Color(0xFF111827));
  bubble(Rect.fromLTWH(w * 0.35, h * 0.34, w * 0.4, h * 0.14), const Color(0xFF111827), _k(lt, 2.2, 0.8), 'Of course! Say hi', Colors.white);
  // Three typing dots while the advisor writes.
  if (lt > 1.4 && lt < 2.2) {
    for (var i = 0; i < 3; i++) {
      c.drawCircle(Offset(w * 0.5 + i * h * 0.04, h * 0.41), h * 0.012 + h * 0.008 * math.sin(t * 10 + i), Paint()..color = Colors.white);
    }
  }
  if (lt > 4) {
    final k = _k(lt, 4, 0.6);
    c.drawCircle(Offset(w * 0.5, h * 0.52), h * 0.04 * Curves.easeOutBack.transform(k), Paint()..color = const Color(0xFFFB7185));
  }
}

/// 3 Game Center: coins fall into a game pad and the score goes up.
void _games(Canvas c, Size s, double t) {
  _backdrop(c, s, const [Color(0xFF16A34A), Color(0xFF064E3B)], t, 'NGMY Game Center', 'Play games and win coins');
  final h = s.height, w = s.width;
  final padRect = Rect.fromCenter(center: Offset(w / 2, h * 0.46), width: h * 0.5, height: h * 0.16);
  for (var i = 0; i < 8; i++) {
    final ph = ((t * 0.35 + i / 8) % 1.0);
    final x = w * (0.2 + 0.6 * ((i * 0.37) % 1.0));
    final y = h * 0.1 + ph * h * 0.3;
    final sq = math.cos(ph * 20).abs();
    c.drawOval(Rect.fromCenter(center: Offset(x, y), width: h * 0.06 * (0.3 + 0.7 * sq), height: h * 0.06), Paint()..color = const Color(0xFFFACC15));
    c.drawOval(Rect.fromCenter(center: Offset(x, y), width: h * 0.035 * (0.3 + 0.7 * sq), height: h * 0.035), Paint()..color = const Color(0xFFFDE68A));
  }
  c.drawRRect(RRect.fromRectAndRadius(padRect, Radius.circular(h * 0.07)), Paint()..color = const Color(0xFF111827));
  c.drawRRect(RRect.fromRectAndRadius(padRect.deflate(3), Radius.circular(h * 0.065)), Paint()..color = const Color(0xFF1F2937));
  final cross = Offset(padRect.left + h * 0.1, padRect.center.dy);
  c.drawRect(Rect.fromCenter(center: cross, width: h * 0.07, height: h * 0.02), Paint()..color = Colors.white70);
  c.drawRect(Rect.fromCenter(center: cross, width: h * 0.02, height: h * 0.07), Paint()..color = Colors.white70);
  final press = (t * 2).floor() % 2 == 0;
  c.drawCircle(Offset(padRect.right - h * 0.12, padRect.center.dy + h * 0.015), h * 0.025, Paint()..color = press ? const Color(0xFFF87171) : const Color(0xFF991B1B));
  c.drawCircle(Offset(padRect.right - h * 0.07, padRect.center.dy - h * 0.015), h * 0.025, Paint()..color = press ? const Color(0xFF166534) : const Color(0xFF4ADE80));
  _txt(c, '+${((t * 4).floor() % 50) * 10}', Offset(w * 0.8, h * 0.17), h * 0.07, const Color(0xFFFDE047));
}

/// 4 Vault: the dial turns and the vault door swings open on the gold.
void _vault(Canvas c, Size s, double t) {
  _backdrop(c, s, const [Color(0xFF334155), Color(0xFF0F172A)], t, 'NGMY Vault', 'Keep what matters safe');
  final h = s.height, w = s.width;
  final lt = t % 7;
  final ctr = Offset(w / 2, h * 0.33);
  final r = h * 0.24;
  c.drawCircle(ctr, r * 1.1, Paint()..color = const Color(0xFF0B1220));
  // The gold inside shines once the door is open.
  final open = Curves.easeInOut.transform(_k(lt, 3.2, 1.2));
  if (open > 0) {
    for (var i = 0; i < 5; i++) {
      c.drawOval(Rect.fromCenter(center: ctr + Offset((i - 2) * r * 0.32, r * 0.35 - (i % 2) * r * 0.2), width: r * 0.34, height: r * 0.2), Paint()..color = const Color(0xFFFACC15));
    }
    c.drawCircle(ctr, r * (0.6 + 0.2 * math.sin(t * 4)), Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.18 * open));
  }
  // The door: it narrows as it swings, with a dial that spins before.
  final dw = r * 2 * (1 - 0.8 * open);
  final door = Rect.fromCenter(center: Offset(ctr.dx - r * 0.9 * open, ctr.dy), width: dw, height: r * 2);
  c.drawOval(door, Paint()..color = const Color(0xFF94A3B8));
  c.drawOval(door.deflate(r * 0.1), Paint()..color = const Color(0xFFCBD5E1));
  if (open < 0.6) {
    c.save();
    c.translate(door.center.dx, door.center.dy);
    c.rotate(lt < 3.2 ? lt * 3 : 3.2 * 3);
    c.drawCircle(Offset.zero, r * 0.35 * (dw / (r * 2)), Paint()..color = const Color(0xFF475569));
    for (var i = 0; i < 6; i++) {
      c.drawRect(Rect.fromCenter(center: Offset.zero, width: r * 0.55 * (dw / (r * 2)), height: 3), Paint()..color = Colors.white70);
      c.rotate(math.pi / 6);
    }
    c.restore();
  }
}

/// 5 Studios: coloured tiles pop in one after another, like the studios of the app.
void _studios(Canvas c, Size s, double t) {
  _backdrop(c, s, const [Color(0xFF4F46E5), Color(0xFF0EA5E9)], t, 'NGMY Studios', 'Make music, art, titles and more');
  final h = s.height, w = s.width;
  const cols = [Color(0xFF38BDF8), Color(0xFF4ADE80), Color(0xFFFB923C), Color(0xFFF472B6), Color(0xFFFACC15), Color(0xFFA78BFA)];
  final tile = h * 0.15;
  final lt = t % 5;
  for (var i = 0; i < 6; i++) {
    final cx = w / 2 + ((i % 3) - 1) * tile * 1.35;
    final cy = h * 0.2 + (i ~/ 3) * tile * 1.35;
    final k = _k(lt, 0.2 + i * 0.35, 0.6);
    if (k <= 0) continue;
    c.save();
    c.translate(cx, cy);
    c.scale(Curves.elasticOut.transform(k).clamp(0.01, 1.2));
    final rr = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: tile, height: tile), Radius.circular(tile * 0.28));
    c.drawRRect(rr, Paint()..color = cols[i]);
    c.drawCircle(Offset.zero, tile * 0.22, Paint()..color = Colors.white.withValues(alpha: 0.9));
    if (i % 3 == 0) {
      c.drawRect(Rect.fromCenter(center: Offset.zero, width: tile * 0.1, height: tile * 0.3), Paint()..color = cols[i]);
    } else if (i % 3 == 1) {
      c.drawCircle(Offset.zero, tile * 0.1, Paint()..color = cols[i]);
    } else {
      c.drawRect(Rect.fromCenter(center: Offset.zero, width: tile * 0.3, height: tile * 0.1), Paint()..color = cols[i]);
    }
    c.restore();
  }
}

/// 6 Business Cards: a card flips between its front and its back, and a phone taps it to share.
void _cards(Canvas c, Size s, double t) {
  _backdrop(c, s, const [Color(0xFF0F766E), Color(0xFF1E3A8A)], t, 'NGMY Business Cards', 'Make a card people remember');
  final h = s.height, w = s.width;
  final cw = h * 0.62, ch = h * 0.36;
  final ctr = Offset(w * 0.4, h * 0.3);
  // A second card fanned out behind.
  c.save();
  c.translate(ctr.dx + h * 0.06, ctr.dy + h * 0.03);
  c.rotate(0.14);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: cw, height: ch), Radius.circular(h * 0.03)), Paint()..color = const Color(0xFFFDE68A));
  c.restore();
  final cs = math.cos(t * 1.3);
  c.save();
  c.translate(ctr.dx, ctr.dy);
  c.rotate(-0.05);
  c.scale(math.max(0.06, cs.abs()), 1);
  final rr = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: cw, height: ch), Radius.circular(h * 0.03));
  if (cs >= 0) {
    c.drawRRect(rr, Paint()..shader = const LinearGradient(colors: [Color(0xFFFFFFFF), Color(0xFFE2E8F0)]).createShader(rr.outerRect));
    c.drawCircle(Offset(-cw * 0.33, -ch * 0.12), ch * 0.2, Paint()..color = const Color(0xFF0F766E));
    _txt(c, 'N', Offset(-cw * 0.33, -ch * 0.12 - ch * 0.12), ch * 0.24, Colors.white);
    c.drawRect(Rect.fromLTWH(-cw * 0.08, -ch * 0.26, cw * 0.4, ch * 0.07), Paint()..color = const Color(0xFF1E293B));
    c.drawRect(Rect.fromLTWH(-cw * 0.08, -ch * 0.1, cw * 0.3, ch * 0.05), Paint()..color = const Color(0xFF94A3B8));
    c.drawRect(Rect.fromLTWH(-cw * 0.08, ch * 0.02, cw * 0.36, ch * 0.05), Paint()..color = const Color(0xFF94A3B8));
    c.drawRect(Rect.fromLTWH(-cw * 0.4, ch * 0.28, cw * 0.8, ch * 0.05), Paint()..color = const Color(0xFFF59E0B));
  } else {
    c.drawRRect(rr, Paint()..color = const Color(0xFF111827));
    final q = ch * 0.5;
    c.drawRect(Rect.fromCenter(center: Offset.zero, width: q, height: q), Paint()..color = Colors.white);
    final rnd = math.Random(4);
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 7; j++) {
        if (rnd.nextBool() || (i < 2 && j < 2)) {
          c.drawRect(Rect.fromLTWH(-q / 2 + 3 + i * (q - 6) / 7, -q / 2 + 3 + j * (q - 6) / 7, (q - 6) / 7, (q - 6) / 7), Paint()..color = Colors.black);
        }
      }
    }
  }
  c.restore();
  // A phone on the right taps the card: rings spread from it.
  final ph = Rect.fromCenter(center: Offset(w * 0.8, h * 0.32), width: h * 0.17, height: h * 0.3);
  c.drawRRect(RRect.fromRectAndRadius(ph, Radius.circular(h * 0.03)), Paint()..color = const Color(0xFF020617));
  c.drawRRect(RRect.fromRectAndRadius(ph.deflate(3), Radius.circular(h * 0.025)), Paint()..color = const Color(0xFF38BDF8));
  for (var i = 0; i < 3; i++) {
    final k = (t * 0.8 + i / 3) % 1.0;
    c.drawArc(Rect.fromCircle(center: Offset(ph.left, ph.center.dy), radius: h * (0.04 + 0.14 * k)), math.pi * 0.7, math.pi * 0.6, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white.withValues(alpha: 1 - k));
  }
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

/// The adverts, in the order the channels use them.
void paintNgmyTvAd(Canvas c, Size s, int ad, double t) {
  switch (ad) {
    case 0:
      _construction(c, s, t);
    case 1:
      _electronics(c, s, t);
    case 2:
      _advisors(c, s, t);
    case 3:
      _games(c, s, t);
    case 4:
      _vault(c, s, t);
    case 5:
      _studios(c, s, t);
    default:
      _cards(c, s, t);
  }
}
