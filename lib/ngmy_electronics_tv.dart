import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

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
];

/// Paints one frame of the TV picture (the boot logo for the first seconds, then the channel).
/// [age] is how many seconds the TV has been on; [t] is the running clock.
void paintNgmyTv(Canvas c, Size s, int channel, double t, {double age = 99}) {
  c.save();
  c.clipRect(Offset.zero & s);
  if (age < 3.0) {
    _boot(c, s, age);
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
      default:
        _spark(c, s, t);
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
    _hudTimer = Timer(const Duration(seconds: 4), () {
      if (mounted) setState(() => _hud = false);
    });
  }

  void _close() {
    if (mounted && Navigator.of(context).canPop()) Navigator.of(context).pop(_ch);
  }

  void _go(int d) {
    setState(() {
      _ch = (_ch + d) % kNgmyTvChannels.length;
      if (_ch < 0) _ch += kNgmyTvChannels.length;
      _channelSince = _clock.lastElapsedDuration?.inMilliseconds.toDouble() ?? 0;
      _hud = true;
    });
    NgmyTone.play(900, ms: 40, wave: 'noise', volume: 0.3);
    _hideHudSoon();
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
          onTap: () {
            setState(() => _hud = true);
            _hideHudSoon();
          },
          child: Stack(fit: StackFit.expand, children: [
            Center(
              child: AspectRatio(
                aspectRatio: 16 / 9,
                child: Container(
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border: Border.all(color: const Color(0xFF1F2937), width: 6), boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.25), blurRadius: 40)]),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(4),
                    child: AnimatedBuilder(
                      animation: _clock,
                      builder: (_, __) {
                        final ms = (_clock.lastElapsedDuration?.inMilliseconds ?? 0).toDouble();
                        final t = ms / 1000;
                        // The logo only shows when the TV first starts, not at every channel change.
                        final age = _channelSince == 0 && widget.showBoot ? t : 99.0;
                        return CustomPaint(painter: _TvPainter(_ch, t, age), size: Size.infinite);
                      },
                    ),
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
                    padding: const EdgeInsets.all(10),
                    child: Row(children: [
                      _round(Icons.close_rounded, 'Back to the board', _close),
                      const Spacer(),
                      Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6), decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)), child: Text('NGMY TV · CH ${_ch + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5))),
                    ]),
                  ),
                  const Spacer(),
                  Container(
                    margin: const EdgeInsets.all(12),
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.65), borderRadius: BorderRadius.circular(18)),
                    child: Row(children: [
                      _round(Icons.skip_previous_rounded, 'Previous channel', () => _go(-1)),
                      Expanded(child: Column(mainAxisSize: MainAxisSize.min, children: [
                        Text(kNgmyTvChannels[_ch].title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                        Text(kNgmyTvChannels[_ch].blurb, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white60, fontSize: 11.5)),
                      ])),
                      _round(Icons.skip_next_rounded, 'Next channel', () => _go(1)),
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

  Widget _round(IconData i, String tip, VoidCallback f) => IconButton(onPressed: f, tooltip: tip, style: IconButton.styleFrom(backgroundColor: Colors.black54), icon: Icon(i, color: Colors.white));
}

class _TvPainter extends CustomPainter {
  _TvPainter(this.ch, this.t, this.age);
  final int ch;
  final double t, age;

  @override
  void paint(Canvas canvas, Size size) => paintNgmyTv(canvas, size, ch, t, age: age);

  @override
  bool shouldRepaint(covariant _TvPainter old) => true;
}
