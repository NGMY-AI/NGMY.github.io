import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_electronics_screens.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The lab TV: every channel is an NGMY animation (drawn live, no video files).
// ═════════════════════════════════════════════════════════════════════════════

class NgmyTvChannel {
  const NgmyTvChannel(this.title, this.blurb);
  final String title;
  final String blurb;
}

const List<NgmyTvChannel> kNgmyTvChannels = [
  NgmyTvChannel('NGMY Tree Story', 'A family grows, one branch at a time'),
  NgmyTvChannel('Coin Hero', 'A little coin saves up and wins the day'),
  NgmyTvChannel('Space Voyage', 'The NGMY rocket explores the stars'),
  NgmyTvChannel('Ocean Friends', 'Fish, bubbles and a friendly whale'),
  NgmyTvChannel('Rainy Village', 'Storm clouds, then a rainbow'),
  NgmyTvChannel('Spark Adventure', 'Follow a spark round a circuit'),
  NgmyTvChannel('Fireworks Night', 'Colour bursts over the city'),
  NgmyTvChannel('Little Train', 'A train rolls past the hills'),
  NgmyTvChannel('Robot Disco', 'A robot dances to the beat'),
  NgmyTvChannel('Garden Time', 'Flowers grow and butterflies fly'),
];

/// Paints one frame of the TV picture (the boot logo for the first seconds, then the channel).
/// [age] is how many seconds the TV has been on; [t] is the running clock.
void paintNgmyTv(Canvas c, Size s, int channel, double t, {double age = 99, int app = -1}) {
  c.save();
  c.clipRect(Offset.zero & s);
  if (age < 3.0) {
    _boot(c, s, age);
  } else if (app >= 0) {
    paintNgmyApp(c, s, app, t);
  } else {
    final k = ((age - 3.0) / 0.5).clamp(0.0, 1.0);
    final ch = channel % kNgmyTvChannels.length;
    switch (ch) {
      case 0:
        _treeStory(c, s, t);
      case 1:
        _coinHero(c, s, t);
      case 2:
        _space(c, s, t);
      case 3:
        _ocean(c, s, t);
      case 4:
        _rain(c, s, t);
      case 5:
        _spark(c, s, t);
      case 6:
        _fireworks(c, s, t);
      case 7:
        _train(c, s, t);
      case 8:
        _robotDance(c, s, t);
      default:
        _garden(c, s, t);
    }
    _bug(c, s, channel, t);
    if (k < 1) c.drawRect(Offset.zero & s, Paint()..color = Colors.white.withValues(alpha: 0.6 * (1 - k)));
  }
  // Scan lines and a soft glass reflection.
  final line = Paint()..color = Colors.black.withValues(alpha: 0.07);
  for (var y = 0.0; y < s.height; y += 3) {
    c.drawRect(Rect.fromLTWH(0, y, s.width, 1), line);
  }
  c.drawPath(Path()..moveTo(0, 0)..lineTo(s.width * 0.45, 0)..lineTo(0, s.height * 0.5)..close(), Paint()..color = Colors.white.withValues(alpha: 0.04));
  c.restore();
}

void _text(Canvas c, String t, Offset o, double size, Color col, {bool bold = true, TextAlign align = TextAlign.left, double? width, double spacing = 0}) {
  final tp = TextPainter(
    text: TextSpan(text: t, style: TextStyle(color: col, fontSize: size, fontWeight: bold ? FontWeight.w900 : FontWeight.w600, letterSpacing: spacing)),
    textDirection: TextDirection.ltr,
    textAlign: align,
    maxLines: 1,
  )..layout(maxWidth: width ?? 9999);
  final dx = align == TextAlign.center && width != null ? (width - tp.width) / 2 : 0.0;
  tp.paint(c, o + Offset(dx, 0));
}

void _boot(Canvas c, Size s, double age) {
  c.drawRect(Offset.zero & s, Paint()..color = const Color(0xFF020409));
  final glow = (age < 0.5 ? age / 0.5 : (age > 2.4 ? (3.0 - age) / 0.6 : 1.0)).clamp(0.0, 1.0);
  c.drawCircle(s.center(Offset.zero), s.shortestSide * 0.5, Paint()..shader = RadialGradient(colors: [const Color(0xFF38BDF8).withValues(alpha: 0.35 * glow), Colors.transparent]).createShader(Rect.fromCircle(center: s.center(Offset.zero), radius: s.shortestSide * 0.5)));
  _text(c, 'NGMY', Offset(0, s.height * 0.36), s.height * 0.2, Colors.white.withValues(alpha: glow), align: TextAlign.center, width: s.width, spacing: s.height * 0.03);
  _text(c, 'T V', Offset(0, s.height * 0.6), s.height * 0.08, const Color(0xFF38BDF8).withValues(alpha: glow), align: TextAlign.center, width: s.width, spacing: s.height * 0.05);
  // A line that sweeps while it warms up.
  c.drawRect(Rect.fromLTWH(s.width * 0.3, s.height * 0.78, s.width * 0.4 * (age / 3.0), 3), Paint()..color = const Color(0xFF38BDF8).withValues(alpha: glow));
}

void _bug(Canvas c, Size s, int ch, double t) {
  final h = s.height;
  final r = RRect.fromRectAndRadius(Rect.fromLTWH(s.width - h * 0.34, h * 0.04, h * 0.3, h * 0.1), Radius.circular(h * 0.03));
  c.drawRRect(r, Paint()..color = Colors.black.withValues(alpha: 0.55));
  _text(c, 'NGMY', Offset(r.left + h * 0.025, r.top + h * 0.012), h * 0.07, Colors.white, spacing: 1);
  // Caption bar.
  final bar = Rect.fromLTWH(0, h * 0.86, s.width, h * 0.14);
  c.drawRect(bar, Paint()..color = Colors.black.withValues(alpha: 0.6));
  _text(c, 'CH ${ch + 1}  ·  ${kNgmyTvChannels[ch % kNgmyTvChannels.length].title}', Offset(h * 0.04, h * 0.885), h * 0.075, Colors.white, width: s.width - h * 0.08);
}

// 0 ── A family tree grows and name bubbles pop open.
void _treeStory(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final cycle = t % 14.0;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7DD3FC), Color(0xFFFEF3C7)]).createShader(Offset.zero & s));
  c.drawCircle(Offset(w * 0.85, h * 0.18), h * 0.08, Paint()..color = const Color(0xFFFDE047));
  c.drawRect(Rect.fromLTWH(0, h * 0.78, w, h * 0.22), Paint()..color = const Color(0xFF65A30D));
  final grow = (cycle / 5).clamp(0.0, 1.0);
  final base = Offset(w * 0.5, h * 0.8);
  void branch(Offset from, double ang, double len, int depth, double prog) {
    if (depth == 0 || prog <= 0) return;
    final l = len * prog.clamp(0.0, 1.0);
    final to = from + Offset(math.cos(ang) * l, -math.sin(ang) * l);
    c.drawLine(from, to, Paint()..color = const Color(0xFF78350F)..strokeWidth = depth * 2.2..strokeCap = StrokeCap.round);
    if (prog > 0.95) {
      final sway = math.sin(t * 1.6 + depth) * 0.04;
      branch(to, ang + 0.5 + sway, len * 0.72, depth - 1, prog * 1.6 - 0.9 - (5 - depth) * 0.0);
      branch(to, ang - 0.5 + sway, len * 0.72, depth - 1, prog * 1.6 - 0.9);
    }
    if (depth == 1 && prog > 0.5) {
      c.drawCircle(to, h * 0.035, Paint()..color = Color.lerp(const Color(0xFF16A34A), const Color(0xFF4ADE80), (math.sin(t * 2 + to.dx) + 1) / 2)!);
    }
  }
  branch(base, math.pi / 2, h * 0.24, 5, grow * 1.4);
  // Names pop open on the branches.
  const names = ['Mama', 'Baba', 'Bibi', 'Babu', 'Dada', 'Kaka'];
  for (var i = 0; i < names.length; i++) {
    final start = 5.0 + i * 1.3;
    final k = ((cycle - start) / 0.5).clamp(0.0, 1.0);
    if (k <= 0) continue;
    final pos = Offset(w * (0.2 + 0.12 * i + (i.isOdd ? 0.04 : 0)), h * (0.16 + 0.14 * (i % 3)));
    final sc = Curves.elasticOut.transform(k);
    c.save();
    c.translate(pos.dx, pos.dy);
    c.scale(sc);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: h * 0.26, height: h * 0.11), Radius.circular(h * 0.05)), Paint()..color = Colors.white);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: h * 0.26, height: h * 0.11), Radius.circular(h * 0.05)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFEC4899));
    _text(c, '♥ ${names[i]}', Offset(-h * 0.1, -h * 0.04), h * 0.065, const Color(0xFF9D174D));
    c.restore();
  }
  if (cycle > 11.5) _text(c, 'Family is everything', Offset(0, h * 0.62), h * 0.09, const Color(0xFF7C2D12), align: TextAlign.center, width: w);
}

// 1 ── A coin hops over hills collecting stars.
void _coinHero(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF312E81), Color(0xFFDB2777), Color(0xFFFB923C)]).createShader(Offset.zero & s));
  final scroll = t * 40;
  for (var layer = 0; layer < 2; layer++) {
    final path = Path()..moveTo(0, h);
    for (var x = 0.0; x <= w; x += 6) {
      final sx = x + scroll * (layer == 0 ? 0.4 : 1);
      path.lineTo(x, h * (layer == 0 ? 0.62 : 0.78) + math.sin(sx / (layer == 0 ? 40 : 28)) * h * 0.05);
    }
    path.lineTo(w, h);
    c.drawPath(path, Paint()..color = layer == 0 ? const Color(0xFF4C1D95) : const Color(0xFF14532D));
  }
  var stars = 0;
  for (var i = 0; i < 6; i++) {
    final x = ((i * 90.0 - scroll * 1.3) % (w + 60)) - 30;
    final y = h * (0.35 + 0.08 * math.sin(i * 1.7 + t));
    final near = (x - w * 0.3).abs() < 12;
    if (near) stars++;
    _star(c, Offset(x, y), h * 0.04, const Color(0xFFFDE047));
  }
  final hop = (math.sin(t * 5)).abs();
  final cp = Offset(w * 0.3, h * 0.72 - hop * h * 0.22);
  c.drawOval(Rect.fromCenter(center: Offset(cp.dx, h * 0.82), width: h * 0.14 * (1 - hop * 0.4), height: h * 0.025), Paint()..color = Colors.black26);
  c.drawCircle(cp, h * 0.085, Paint()..shader = const RadialGradient(center: Alignment(-0.3, -0.3), colors: [Color(0xFFFEF08A), Color(0xFFEAB308)]).createShader(Rect.fromCircle(center: cp, radius: h * 0.085)));
  c.drawCircle(cp, h * 0.085, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFA16207));
  _text(c, '\$', cp + Offset(-h * 0.03, -h * 0.045), h * 0.09, const Color(0xFFA16207));
  c.drawCircle(cp + Offset(-h * 0.028, -h * 0.01), 2.4, Paint()..color = Colors.black);
  c.drawCircle(cp + Offset(h * 0.028, -h * 0.01), 2.4, Paint()..color = Colors.black);
  _text(c, 'Saved: \$${(t * 3).floor() % 1000 + stars}', Offset(h * 0.05, h * 0.06), h * 0.08, Colors.white);
}

void _star(Canvas c, Offset p, double r, Color col) {
  final path = Path();
  for (var i = 0; i < 10; i++) {
    final a = -math.pi / 2 + i * math.pi / 5;
    final rr = i.isEven ? r : r * 0.45;
    final o = p + Offset(math.cos(a) * rr, math.sin(a) * rr);
    i == 0 ? path.moveTo(o.dx, o.dy) : path.lineTo(o.dx, o.dy);
  }
  path.close();
  c.drawPath(path, Paint()..color = col);
}

// 2 ── The NGMY rocket flies past planets.
void _space(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..color = const Color(0xFF030617));
  final r = math.Random(7);
  for (var i = 0; i < 60; i++) {
    final x = ((r.nextDouble() * w - t * (10 + r.nextDouble() * 60)) % w + w) % w;
    c.drawCircle(Offset(x, r.nextDouble() * h * 0.85), 0.6 + r.nextDouble() * 1.4, Paint()..color = Colors.white.withValues(alpha: 0.5 + 0.5 * math.sin(t * 3 + i)));
  }
  final px = w * 1.2 - ((t * 22) % (w * 1.6));
  c.drawCircle(Offset(px, h * 0.3), h * 0.2, Paint()..shader = const RadialGradient(center: Alignment(-0.4, -0.4), colors: [Color(0xFFFCA5A5), Color(0xFFB91C1C), Color(0xFF450A0A)]).createShader(Rect.fromCircle(center: Offset(px, h * 0.3), radius: h * 0.2)));
  c.drawOval(Rect.fromCenter(center: Offset(px, h * 0.3), width: h * 0.6, height: h * 0.07), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFFFDE68A).withValues(alpha: 0.7));
  final rx = w * 0.42, ry = h * 0.52 + math.sin(t * 2) * h * 0.04;
  c.save();
  c.translate(rx, ry);
  c.rotate(-0.25);
  final flame = Path()..moveTo(-h * 0.04, h * 0.1)..quadraticBezierTo(0, h * (0.2 + 0.05 * math.sin(t * 30)), h * 0.04, h * 0.1)..close();
  c.drawPath(flame, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFDE047), Color(0xFFEF4444)]).createShader(Rect.fromLTWH(-h * 0.04, h * 0.1, h * 0.08, h * 0.12)));
  final body = Path()..moveTo(0, -h * 0.17)..quadraticBezierTo(h * 0.09, -h * 0.05, h * 0.05, h * 0.1)..lineTo(-h * 0.05, h * 0.1)..quadraticBezierTo(-h * 0.09, -h * 0.05, 0, -h * 0.17)..close();
  c.drawPath(body, Paint()..shader = const LinearGradient(colors: [Color(0xFFE5E7EB), Colors.white, Color(0xFF94A3B8)]).createShader(Rect.fromLTWH(-h * 0.08, -h * 0.17, h * 0.16, h * 0.27)));
  c.drawCircle(Offset(0, -h * 0.05), h * 0.035, Paint()..color = const Color(0xFF38BDF8));
  c.drawPath(Path()..moveTo(-h * 0.05, h * 0.04)..lineTo(-h * 0.1, h * 0.12)..lineTo(-h * 0.05, h * 0.1)..close(), Paint()..color = const Color(0xFFEF4444));
  c.drawPath(Path()..moveTo(h * 0.05, h * 0.04)..lineTo(h * 0.1, h * 0.12)..lineTo(h * 0.05, h * 0.1)..close(), Paint()..color = const Color(0xFFEF4444));
  c.restore();
}

// 3 ── Fish, bubbles and a whale.
void _ocean(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF38BDF8), Color(0xFF0369A1), Color(0xFF082F49)]).createShader(Offset.zero & s));
  for (var i = 0; i < 4; i++) {
    final x = w * (0.1 + 0.25 * i);
    c.drawPath(Path()..moveTo(x, h)..quadraticBezierTo(x + math.sin(t + i) * 10, h * 0.85, x + 4, h * 0.7 + i * 6), Paint()..style = PaintingStyle.stroke..strokeWidth = 5..color = const Color(0xFF16A34A));
  }
  final wx = ((t * 18) % (w * 1.5)) - w * 0.25;
  c.save();
  c.translate(wx, h * 0.35 + math.sin(t) * 6);
  c.drawOval(Rect.fromCenter(center: Offset.zero, width: h * 0.5, height: h * 0.22), Paint()..color = const Color(0xFF475569));
  c.drawPath(Path()..moveTo(-h * 0.22, 0)..quadraticBezierTo(-h * 0.36, -h * 0.12 + math.sin(t * 3) * 5, -h * 0.34, -h * 0.16)..quadraticBezierTo(-h * 0.28, -h * 0.02, -h * 0.22, 0), Paint()..color = const Color(0xFF475569));
  c.drawOval(Rect.fromCenter(center: Offset(0, h * 0.03), width: h * 0.34, height: h * 0.1), Paint()..color = const Color(0xFFE2E8F0));
  c.drawCircle(Offset(h * 0.15, -h * 0.02), 3, Paint()..color = Colors.white);
  c.drawCircle(Offset(h * 0.155, -h * 0.02), 1.5, Paint()..color = Colors.black);
  c.restore();
  const cols = [Color(0xFFFB923C), Color(0xFFFACC15), Color(0xFFF472B6), Color(0xFF4ADE80)];
  for (var i = 0; i < 6; i++) {
    final dir = i.isEven ? 1.0 : -1.0;
    final x = (((t * (24 + i * 7) * dir) + i * 80) % (w + 40) + w + 40) % (w + 40) - 20;
    final y = h * (0.52 + 0.06 * i) + math.sin(t * 2 + i) * 6;
    c.save();
    c.translate(x, y);
    c.scale(dir, 1);
    c.drawOval(Rect.fromCenter(center: Offset.zero, width: h * 0.1, height: h * 0.06), Paint()..color = cols[i % 4]);
    c.drawPath(Path()..moveTo(-h * 0.04, 0)..lineTo(-h * 0.08, -h * 0.03)..lineTo(-h * 0.08, h * 0.03)..close(), Paint()..color = cols[i % 4]);
    c.drawCircle(Offset(h * 0.03, -h * 0.005), 1.8, Paint()..color = Colors.black);
    c.restore();
  }
  for (var i = 0; i < 14; i++) {
    final x = w * ((i * 0.071 + 0.05) % 1);
    final y = h - ((t * (14 + i * 3) + i * 40) % h);
    c.drawCircle(Offset(x + math.sin(t * 2 + i) * 4, y), 2 + (i % 3), Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = Colors.white.withValues(alpha: 0.7));
  }
}

// 4 ── A storm, then a rainbow.
void _rain(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final cycle = t % 12.0;
  final storm = cycle < 7;
  c.drawRect(Offset.zero & s, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: storm ? const [Color(0xFF334155), Color(0xFF64748B)] : const [Color(0xFF7DD3FC), Color(0xFFFEF9C3)]).createShader(Offset.zero & s));
  c.drawRect(Rect.fromLTWH(0, h * 0.74, w, h * 0.26), Paint()..color = storm ? const Color(0xFF3F6212) : const Color(0xFF65A30D));
  for (var i = 0; i < 4; i++) {
    final x = w * (0.08 + 0.24 * i);
    final hh = h * (0.14 + 0.03 * (i % 2));
    c.drawRect(Rect.fromLTWH(x, h * 0.74 - hh, h * 0.2, hh), Paint()..color = const [Color(0xFFFCA5A5), Color(0xFFFDE68A), Color(0xFFA5B4FC), Color(0xFF86EFAC)][i]);
    c.drawPath(Path()..moveTo(x - 4, h * 0.74 - hh)..lineTo(x + h * 0.1, h * 0.74 - hh - h * 0.09)..lineTo(x + h * 0.2 + 4, h * 0.74 - hh)..close(), Paint()..color = const Color(0xFF7F1D1D));
    c.drawRect(Rect.fromLTWH(x + h * 0.07, h * 0.74 - hh * 0.55, h * 0.06, hh * 0.55), Paint()..color = storm && (t * 2).floor() % 2 == 0 ? const Color(0xFFFEF08A) : const Color(0xFF78350F));
  }
  if (storm) {
    for (var i = 0; i < 70; i++) {
      final x = (i * 37.0 + t * 20) % w;
      final y = ((i * 53.0 + t * 260) % (h * 0.8));
      c.drawLine(Offset(x, y), Offset(x - 3, y + 9), Paint()..color = const Color(0xFFBAE6FD)..strokeWidth = 1.4);
    }
    if ((t * 3).floor() % 7 == 0 && (t * 3) % 1 < 0.3) {
      c.drawRect(Offset.zero & s, Paint()..color = Colors.white.withValues(alpha: 0.5));
      c.drawPath(Path()..moveTo(w * 0.6, h * 0.1)..lineTo(w * 0.55, h * 0.3)..lineTo(w * 0.62, h * 0.3)..lineTo(w * 0.55, h * 0.55), Paint()..style = PaintingStyle.stroke..strokeWidth = 4..color = const Color(0xFFFEF08A));
    }
  } else {
    const rb = [Color(0xFFEF4444), Color(0xFFF97316), Color(0xFFFACC15), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFF8B5CF6)];
    final k = ((cycle - 7) / 2).clamp(0.0, 1.0);
    for (var i = 0; i < rb.length; i++) {
      c.drawArc(Rect.fromCenter(center: Offset(w * 0.5, h * 0.74), width: w * (0.9 - i * 0.07), height: w * (0.9 - i * 0.07)), math.pi, math.pi * k, false, Paint()..style = PaintingStyle.stroke..strokeWidth = h * 0.035..color = rb[i].withValues(alpha: 0.9));
    }
    c.drawCircle(Offset(w * 0.86, h * 0.16), h * 0.08, Paint()..color = const Color(0xFFFDE047));
  }
  for (var i = 0; i < 3; i++) {
    final x = ((t * (8 + i * 4) + i * 120) % (w + 120)) - 60;
    for (final o in const [Offset(0, 0), Offset(26, -8), Offset(52, 0), Offset(26, 8)]) {
      c.drawCircle(Offset(x, h * (0.12 + 0.1 * i)) + o, h * 0.07, Paint()..color = storm ? const Color(0xFF1E293B) : Colors.white.withValues(alpha: 0.95));
    }
  }
}

// 5 ── A spark runs round a circuit and lights the bulb.
void _spark(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..color = const Color(0xFF0B1220));
  final grid = Paint()..color = Colors.white.withValues(alpha: 0.05);
  for (var x = 0.0; x < w; x += 16) {
    c.drawLine(Offset(x, 0), Offset(x, h), grid);
  }
  for (var y = 0.0; y < h; y += 16) {
    c.drawLine(Offset(0, y), Offset(w, y), grid);
  }
  final loop = RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.14, h * 0.2, w * 0.72, h * 0.5), Radius.circular(h * 0.08));
  final path = Path()..addRRect(loop);
  c.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 5..color = const Color(0xFF475569));
  final m = path.computeMetrics().first;
  final d = (t * m.length / 5) % m.length;
  for (var k = 0; k < 10; k++) {
    final pos = m.getTangentForOffset((d - k * 9) % m.length)!.position;
    c.drawCircle(pos, 6.0 - k * 0.5, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 1 - k * 0.09)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2));
  }
  // Battery on the left, bulb on the right.
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(w * 0.14, h * 0.45), width: h * 0.12, height: h * 0.22), const Radius.circular(4)), Paint()..color = const Color(0xFF16A34A));
  _text(c, '+', Offset(w * 0.14 - 5, h * 0.33), h * 0.07, Colors.white);
  final lit = (math.sin(t * 2) + 1) / 2;
  final bc = Offset(w * 0.86, h * 0.45);
  c.drawCircle(bc, h * 0.16, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.25 + 0.5 * lit)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 12));
  c.drawCircle(bc, h * 0.08, Paint()..color = Color.lerp(const Color(0xFF94A3B8), const Color(0xFFFEF9C3), lit)!);
  _text(c, 'Electricity needs a full loop!', Offset(0, h * 0.74), h * 0.075, const Color(0xFF7DD3FC), align: TextAlign.center, width: w);
}

// 6 ── Fireworks over the NGMY tower.
void _fireworks(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF020617), Color(0xFF1E1B4B)]).createShader(Offset.zero & s));
  c.drawRect(Rect.fromLTWH(0, h * 0.82, w, h * 0.18), Paint()..color = const Color(0xFF0B1220));
  for (var k = 0; k < 7; k++) {
    final bx = w * (0.05 + k * 0.15), bh = h * (0.1 + 0.07 * ((k * 5) % 4));
    c.drawRect(Rect.fromLTWH(bx, h * 0.82 - bh, w * 0.1, bh), Paint()..color = const Color(0xFF111827));
  }
  const cols = [Color(0xFFF472B6), Color(0xFF38BDF8), Color(0xFFFDE047), Color(0xFF4ADE80), Color(0xFFFB923C)];
  for (var f = 0; f < 4; f++) {
    final cyc = (t * 0.55 + f * 0.27) % 1.0;
    final seed = ((t * 0.55 + f * 0.27).floor() * 7 + f * 3);
    final cx = w * (0.15 + 0.7 * ((seed * 0.37) % 1.0)), cy = h * (0.2 + 0.25 * ((seed * 0.53) % 1.0));
    final col = cols[seed.abs() % cols.length];
    if (cyc < 0.3) {
      final k = cyc / 0.3;
      c.drawCircle(Offset(cx, h * 0.82 - (h * 0.82 - cy) * k), 2.5, Paint()..color = Colors.white);
    } else {
      final k = (cyc - 0.3) / 0.7;
      for (var i = 0; i < 28; i++) {
        final a = i * math.pi * 2 / 28;
        final r = h * 0.2 * Curves.easeOut.transform(k);
        final p = Offset(cx + math.cos(a) * r, cy + math.sin(a) * r + k * k * h * 0.08);
        c.drawCircle(p, 2.4 * (1 - k) + 0.4, Paint()..color = col.withValues(alpha: (1 - k).clamp(0.0, 1.0))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 1.2));
      }
    }
  }
}

// 7 ── A little train crosses the hills.
void _train(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7DD3FC), Color(0xFFFEF3C7)]).createShader(Offset.zero & s));
  for (var layer = 0; layer < 2; layer++) {
    final path = Path()..moveTo(0, h);
    for (var x = 0.0; x <= w; x += 6) {
      final sx = x + t * (layer == 0 ? 8 : 20);
      path.lineTo(x, h * (layer == 0 ? 0.55 : 0.68) + math.sin(sx / (layer == 0 ? 50 : 34)) * h * 0.06);
    }
    path.lineTo(w, h);
    c.drawPath(path, Paint()..color = layer == 0 ? const Color(0xFF4D7C0F) : const Color(0xFF65A30D));
  }
  c.drawRect(Rect.fromLTWH(0, h * 0.8, w, h * 0.04), Paint()..color = const Color(0xFF475569));
  for (var x = -((t * 80) % 24); x < w; x += 24) {
    c.drawRect(Rect.fromLTWH(x, h * 0.84, 8, h * 0.03), Paint()..color = const Color(0xFF78350F));
  }
  final bob = math.sin(t * 14) * 1.2;
  double cx = w * 0.12;
  for (var k = 0; k < 4; k++) {
    final isEngine = k == 0;
    final body = Rect.fromLTWH(cx, h * 0.62 + bob, w * (isEngine ? 0.16 : 0.15), h * 0.18);
    c.drawRRect(RRect.fromRectAndRadius(body, Radius.circular(h * 0.02)), Paint()..color = isEngine ? const Color(0xFFDC2626) : const [Color(0xFF2563EB), Color(0xFFF59E0B), Color(0xFF16A34A)][k - 1]);
    for (var q = 0; q < 3; q++) {
      c.drawRect(Rect.fromLTWH(body.left + body.width * (0.12 + q * 0.28), body.top + h * 0.03, body.width * 0.18, h * 0.06), Paint()..color = const Color(0xFFBAE6FD));
    }
    c.drawCircle(Offset(body.left + body.width * 0.25, h * 0.8 + bob), h * 0.025, Paint()..color = Colors.black87);
    c.drawCircle(Offset(body.left + body.width * 0.75, h * 0.8 + bob), h * 0.025, Paint()..color = Colors.black87);
    cx += body.width + w * 0.012;
  }
  for (var k = 0; k < 5; k++) {
    final ph = (t * 0.8 + k * 0.2) % 1.0;
    c.drawCircle(Offset(w * 0.2 - ph * w * 0.12, h * 0.6 - ph * h * 0.25), h * 0.02 + ph * h * 0.04, Paint()..color = Colors.white.withValues(alpha: 0.7 * (1 - ph)));
  }
}

// 8 ── A friendly robot dances to the beat.
void _robotDance(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(const Color(0xFF4C1D95), const Color(0xFF0E7490), (math.sin(t * 2) + 1) / 2)!, const Color(0xFF111827)]).createShader(Offset.zero & s));
  for (var k = 0; k < 8; k++) {
    final on = (t * 2 + k) % 2 < 1;
    c.drawRect(Rect.fromLTWH(w * k / 8, h * 0.86, w / 8 - 2, h * 0.14), Paint()..color = (on ? const Color(0xFFF472B6) : const Color(0xFF38BDF8)).withValues(alpha: 0.5));
  }
  final beat = math.sin(t * 6);
  c.save();
  c.translate(w * 0.5, h * 0.55 + beat.abs() * -h * 0.03);
  c.rotate(beat * 0.06);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: h * 0.26, height: h * 0.3), Radius.circular(h * 0.04)), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFE2E8F0), Color(0xFF64748B)]).createShader(Rect.fromCenter(center: Offset.zero, width: h * 0.26, height: h * 0.3)));
  c.drawRect(Rect.fromCenter(center: Offset(0, h * 0.02), width: h * 0.14, height: h * 0.08), Paint()..color = const Color(0xFF22D3EE).withValues(alpha: 0.7));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(0, -h * 0.25), width: h * 0.22, height: h * 0.17), Radius.circular(h * 0.04)), Paint()..color = const Color(0xFFCBD5E1));
  final blink = (t * 1.3) % 1.0 > 0.08;
  for (final x in const [-0.05, 0.05]) {
    c.drawCircle(Offset(x * h, -h * 0.26), h * 0.025, Paint()..color = blink ? const Color(0xFF22D3EE) : const Color(0xFF0E7490));
  }
  c.drawLine(Offset(0, -h * 0.335), Offset(0, -h * 0.38), Paint()..color = Colors.white70..strokeWidth = 3);
  c.drawCircle(Offset(0, -h * 0.39), h * 0.015, Paint()..color = const Color(0xFFEF4444));
  for (final side in const [-1.0, 1.0]) {
    c.save();
    c.translate(side * h * 0.14, -h * 0.08);
    c.rotate(side * (0.7 + math.sin(t * 6 + (side > 0 ? 0 : math.pi)) * 0.8));
    c.drawLine(Offset.zero, Offset(side * h * 0.16, 0), Paint()..color = const Color(0xFF94A3B8)..strokeWidth = h * 0.035..strokeCap = StrokeCap.round);
    c.restore();
    c.drawLine(Offset(side * h * 0.06, h * 0.15), Offset(side * h * 0.08, h * 0.28 + (side > 0 ? beat : -beat) * h * 0.02), Paint()..color = const Color(0xFF94A3B8)..strokeWidth = h * 0.04..strokeCap = StrokeCap.round);
  }
  c.restore();
  for (var k = 0; k < 4; k++) {
    final ph = (t * 0.7 + k * 0.25) % 1.0;
    _text(c, '♪', Offset(w * (0.2 + 0.18 * k) + math.sin(t * 2 + k) * 8, h * 0.7 - ph * h * 0.5), h * 0.08, Colors.white.withValues(alpha: 1 - ph));
  }
}

// 9 ── A garden with butterflies and growing flowers.
void _garden(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF93C5FD), Color(0xFFFEF9C3)]).createShader(Offset.zero & s));
  c.drawCircle(Offset(w * 0.12, h * 0.16), h * 0.07, Paint()..color = const Color(0xFFFDE047));
  c.drawRect(Rect.fromLTWH(0, h * 0.72, w, h * 0.28), Paint()..color = const Color(0xFF4D7C0F));
  const cols = [Color(0xFFF472B6), Color(0xFFFACC15), Color(0xFFEF4444), Color(0xFFA78BFA), Color(0xFFFB923C)];
  for (var k = 0; k < 9; k++) {
    final x = w * (0.07 + k * 0.105);
    final grow = ((t * 0.25 - k * 0.12) % 3.0).clamp(0.0, 1.0);
    final stemH = h * (0.12 + 0.05 * (k % 3)) * grow;
    final top = Offset(x + math.sin(t + k) * 3, h * 0.78 - stemH);
    c.drawLine(Offset(x, h * 0.78), top, Paint()..color = const Color(0xFF166534)..strokeWidth = 3);
    if (grow > 0.7) {
      for (var p = 0; p < 6; p++) {
        final a = p * math.pi / 3 + t * 0.3;
        c.drawCircle(top + Offset(math.cos(a), math.sin(a)) * h * 0.028, h * 0.022, Paint()..color = cols[k % cols.length]);
      }
      c.drawCircle(top, h * 0.016, Paint()..color = const Color(0xFFFDE047));
    }
  }
  for (var k = 0; k < 3; k++) {
    final x = w * (0.2 + 0.28 * k) + math.sin(t * 0.9 + k * 2) * w * 0.12;
    final y = h * (0.3 + 0.1 * k) + math.cos(t * 1.3 + k) * h * 0.06;
    final flap = math.sin(t * 18 + k).abs();
    for (final side in const [-1.0, 1.0]) {
      c.drawOval(Rect.fromCenter(center: Offset(x + side * h * 0.025 * flap, y), width: h * 0.05 * flap + 2, height: h * 0.06), Paint()..color = cols[(k + 2) % cols.length]);
    }
    c.drawLine(Offset(x, y - h * 0.03), Offset(x, y + h * 0.03), Paint()..color = Colors.black87..strokeWidth = 2);
  }
}

// ─── The big screen ──────────────────────────────────────────────────────────

/// Opens the TV full screen. It starts with the NGMY logo for 3 seconds, plays the chosen channel and
/// goes back to the board by itself after [stayFor] (or when the person taps the close button).
Future<int?> showNgmyTvScreen(BuildContext context, {int channel = 0, Duration stayFor = const Duration(seconds: 60), bool showBoot = true}) {
  return Navigator.of(context).push<int>(PageRouteBuilder(
    opaque: true,
    transitionDuration: const Duration(milliseconds: 260),
    pageBuilder: (_, __, ___) => NgmyTvScreen(channel: channel, stayFor: stayFor, showBoot: showBoot),
    transitionsBuilder: (_, a, __, child) => FadeTransition(opacity: a, child: ScaleTransition(scale: Tween(begin: 0.85, end: 1.0).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: child)),
  ));
}

class NgmyTvScreen extends StatefulWidget {
  const NgmyTvScreen({super.key, this.channel = 0, this.stayFor = const Duration(seconds: 60), this.showBoot = true});
  final int channel;
  final bool showBoot;
  final Duration stayFor;

  @override
  State<NgmyTvScreen> createState() => _NgmyTvScreenState();
}

class _NgmyTvScreenState extends State<NgmyTvScreen> with SingleTickerProviderStateMixin {
  late final AnimationController _clock = AnimationController(vsync: this, duration: const Duration(days: 1))..forward();
  late int _ch = widget.channel;
  int _app = -1; // -1: watching a channel, otherwise the app that is open
  bool _menu = false;
  Timer? _auto;
  double _channelSince = 0;
  bool _hud = true;
  Timer? _hudTimer;

  @override
  void initState() {
    super.initState();
    _auto = Timer(widget.stayFor, _close);
    _hideHudSoon();
    NgmyTone.play(520, ms: 80, wave: 'tri', volume: 0.25);
  }

  void _hideHudSoon() {
    _hudTimer?.cancel();
    _hudTimer = Timer(const Duration(seconds: 6), () {
      if (mounted && !_menu) setState(() => _hud = false);
    });
  }

  void _close() {
    if (mounted && Navigator.of(context).canPop()) Navigator.of(context).pop(_ch);
  }

  /// Using the remote means the person is here and watching: the one-minute timer stops.
  void _touched() {
    _auto?.cancel();
    _auto = null;
    _hud = true;
    _hideHudSoon();
  }

  void _go(int d) {
    setState(() {
      _app = -1;
      _ch = (_ch + d) % kNgmyTvChannels.length;
      if (_ch < 0) _ch += kNgmyTvChannels.length;
      _channelSince = _clock.lastElapsedDuration?.inMilliseconds.toDouble() ?? 0;
      _touched();
    });
    NgmyTone.play(900, ms: 40, wave: 'noise', volume: 0.3);
  }

  void _openApp(int a) {
    setState(() {
      _app = a;
      _menu = false;
      _touched();
    });
    NgmyTone.play(700, ms: 60, wave: 'tri', volume: 0.3);
  }

  @override
  void dispose() {
    _auto?.cancel();
    _hudTimer?.cancel();
    _clock.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: () => setState(_touched),
          child: Stack(fit: StackFit.expand, children: [
            Center(
              child: AspectRatio(
                aspectRatio: 16 / 9,
                child: Container(
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border: Border.all(color: const Color(0xFF1F2937), width: 6), boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.25), blurRadius: 40)]),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(4),
                    child: Stack(fit: StackFit.expand, children: [
                      AnimatedBuilder(
                      animation: _clock,
                      builder: (_, __) {
                        final ms = (_clock.lastElapsedDuration?.inMilliseconds ?? 0).toDouble();
                        final t = ms / 1000;
                        // The logo only shows when the TV first starts, not at every channel change.
                        final age = _channelSince == 0 && widget.showBoot ? t : 99.0;
                        return CustomPaint(painter: _TvPainter(_ch, t, age, _app), size: Size.infinite);
                      },
                    ),
                      if (_menu) _appsMenu(),
                    ]),
                  ),
                ),
              ),
            ),
            AnimatedOpacity(
              opacity: _hud ? 1 : 0,
              duration: const Duration(milliseconds: 250),
              child: IgnorePointer(
                ignoring: !_hud,
                child: Column(children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(10, 10, 10, 0),
                    child: Row(children: [
                      _round(Icons.close_rounded, 'Back to the board', _close),
                      const Spacer(),
                      Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6), decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)), child: Text(_app >= 0 ? 'NGMY TV · ${kNgmyApps[_app].name}' : 'NGMY TV · CH ${_ch + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5))),
                    ]),
                  ),
                  const SizedBox(height: 6),
                  _remote(),
                  const Spacer(),
                  Container(
                    margin: const EdgeInsets.all(12),
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.65), borderRadius: BorderRadius.circular(18)),
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      Text(_app >= 0 ? kNgmyApps[_app].name : kNgmyTvChannels[_ch].title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                      Text(_app >= 0 ? kNgmyApps[_app].blurb : kNgmyTvChannels[_ch].blurb, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white60, fontSize: 11.5)),
                    ]),
                  ),
                ]),
              ),
            ),
          ]),
        ),
      ),
    );
  }

  /// The little remote control, at the top in the middle.
  Widget _remote() {
    Widget key(IconData icon, String label, VoidCallback f, {Color color = Colors.white, bool on = false}) => GestureDetector(
          onTap: f,
          child: Container(
            width: 56,
            padding: const EdgeInsets.symmetric(vertical: 6),
            margin: const EdgeInsets.symmetric(horizontal: 3),
            decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.28) : Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(14), border: Border.all(color: on ? color : Colors.white24)),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              Icon(icon, color: color, size: 20),
              const SizedBox(height: 1),
              Text(label, style: TextStyle(color: color, fontSize: 9.5, fontWeight: FontWeight.w800)),
            ]),
          ),
        );
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 7),
      decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.72), borderRadius: BorderRadius.circular(22), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.5))),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        key(Icons.remove_rounded, 'CH −', () => _go(-1)),
        key(Icons.add_rounded, 'CH +', () => _go(1)),
        key(Icons.live_tv_rounded, 'TV', () => _go(0), color: const Color(0xFF38BDF8), on: _app < 0),
        key(Icons.apps_rounded, 'APPS', () => setState(() {
              _menu = !_menu;
              _touched();
            }), color: const Color(0xFFA78BFA), on: _menu),
        key(Icons.campaign_rounded, 'ADS', () => _openApp(0), color: const Color(0xFFF472B6), on: _app == 0),
      ]),
    );
  }

  /// The apps screen is drawn inside the TV, not over it.
  Widget _appsMenu() => GestureDetector(
        onTap: () => setState(() => _menu = false),
        child: Container(
          color: Colors.black.withValues(alpha: 0.9),
          padding: const EdgeInsets.fromLTRB(8, 6, 8, 6),
          child: Column(children: [
            const Text('NGMY Apps', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 1)),
            const SizedBox(height: 4),
            Expanded(
              child: GridView.builder(
                padding: EdgeInsets.zero,
                gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 78, mainAxisExtent: 56, mainAxisSpacing: 6, crossAxisSpacing: 6),
                itemCount: kNgmyApps.length,
                itemBuilder: (_, k) => GestureDetector(
                  onTap: () => _openApp(k),
                  child: Container(
                    decoration: BoxDecoration(color: kNgmyApps[k].color.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(12), border: Border.all(color: kNgmyApps[k].color.withValues(alpha: 0.6))),
                    child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Text(kNgmyApps[k].emoji, style: const TextStyle(fontSize: 20)),
                      Text(kNgmyApps[k].name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w800)),
                    ]),
                  ),
                ),
              ),
            ),
          ]),
        ),
      );

  Widget _round(IconData i, String tip, VoidCallback f) => IconButton(onPressed: f, tooltip: tip, style: IconButton.styleFrom(backgroundColor: Colors.black54), icon: Icon(i, color: Colors.white));
}

class _TvPainter extends CustomPainter {
  _TvPainter(this.ch, this.t, this.age, this.app);
  final int ch, app;
  final double t, age;

  @override
  void paint(Canvas canvas, Size size) => paintNgmyTv(canvas, size, ch, t, age: age, app: app);

  @override
  bool shouldRepaint(covariant _TvPainter old) => true;
}
