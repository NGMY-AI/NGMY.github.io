import 'dart:math' as math;

import 'package:flutter/material.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Little cartoons for the NGMY ads on the lab TVs and phones.
// Everything is drawn live from the clock: a friendly kid and a scene for each promotion.
// ═════════════════════════════════════════════════════════════════════════════

Paint _f(Color c) => Paint()..color = c;
Paint _s(Color c, double w) => Paint()..style = PaintingStyle.stroke..strokeWidth = w..color = c..strokeCap = StrokeCap.round;

void _t(Canvas c, String text, Offset center, double size, Color col, {double maxW = 9999, bool bold = true}) {
  var sz = size;
  TextPainter make(double v) => TextPainter(text: TextSpan(text: text, style: TextStyle(color: col, fontSize: v, fontWeight: bold ? FontWeight.w900 : FontWeight.w600)), textDirection: TextDirection.ltr, maxLines: 1)..layout();
  var tp = make(sz);
  if (tp.width > maxW && tp.width > 0) {
    sz = math.max(2.0, sz * maxW / tp.width);
    tp = make(sz);
  }
  tp.paint(c, center - Offset(tp.width / 2, tp.height / 2));
}

/// A cartoon kid standing with [feet] on the ground and [sz] tall.
void cartoonKid(Canvas c, Offset feet, double sz, double t, {Color skin = const Color(0xFF8D5524), Color shirt = const Color(0xFFEF4444), Color pants = const Color(0xFF1E3A8A), Color hair = const Color(0xFF1F1209), double wave = 0, bool talk = false, double bounce = 0, int hairStyle = 0, bool armUp = false}) {
  c.save();
  c.translate(feet.dx, feet.dy - bounce);
  c.drawOval(Rect.fromCenter(center: Offset(0, bounce + sz * 0.005), width: sz * 0.45, height: sz * 0.06), _f(Colors.black.withValues(alpha: 0.22)));
  // Legs and shoes.
  for (final x in const [-1.0, 1.0]) {
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(x * sz * 0.075 - sz * 0.05, -sz * 0.24, sz * 0.1, sz * 0.2), Radius.circular(sz * 0.04)), _f(pants));
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(x * sz * 0.075 - sz * 0.065, -sz * 0.05, sz * 0.14, sz * 0.05), Radius.circular(sz * 0.025)), _f(Colors.white));
  }
  // Body.
  final body = RRect.fromRectAndRadius(Rect.fromLTWH(-sz * 0.16, -sz * 0.52, sz * 0.32, sz * 0.32), Radius.circular(sz * 0.09));
  c.drawRRect(body, _f(shirt));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(-sz * 0.16, -sz * 0.27, sz * 0.32, sz * 0.045), Radius.circular(sz * 0.02)), _f(Colors.white.withValues(alpha: 0.35)));
  // Arms.
  final sh = Offset(-sz * 0.15, -sz * 0.47), sh2 = Offset(sz * 0.15, -sz * 0.47);
  c.drawLine(sh, sh + Offset(-sz * 0.06, sz * 0.17), _s(skin, sz * 0.07));
  c.drawCircle(sh + Offset(-sz * 0.06, sz * 0.18), sz * 0.04, _f(skin));
  final ang = armUp ? -2.5 + wave * 0.5 : 0.5 - wave * 2.2;
  final hand = sh2 + Offset(math.sin(ang) * sz * 0.2, math.cos(ang) * sz * 0.2);
  c.drawLine(sh2, hand, _s(skin, sz * 0.07));
  c.drawCircle(hand, sz * 0.04, _f(skin));
  // Head.
  final hc = Offset(0, -sz * 0.7);
  final hr = sz * 0.22;
  if (hairStyle == 1) c.drawCircle(hc + Offset(0, -hr * 0.12), hr * 1.18, _f(hair));
  c.drawCircle(hc, hr, _f(skin));
  if (hairStyle == 0) {
    c.drawArc(Rect.fromCircle(center: hc, radius: hr), math.pi * 1.0, math.pi, true, _f(hair));
  } else if (hairStyle == 2) {
    c.drawArc(Rect.fromCircle(center: hc, radius: hr), math.pi * 1.0, math.pi, true, _f(hair));
    for (final x in const [-1.0, 1.0]) {
      c.drawCircle(hc + Offset(x * hr * 1.05, hr * 0.3), hr * 0.2, _f(hair));
    }
  }
  final blink = (t * 0.8) % 3 > 2.85;
  for (final x in const [-1.0, 1.0]) {
    final ec = hc + Offset(x * hr * 0.4, hr * 0.05);
    if (blink) {
      c.drawLine(ec + Offset(-hr * 0.15, 0), ec + Offset(hr * 0.15, 0), _s(Colors.black87, 1.6));
    } else {
      c.drawCircle(ec, hr * 0.25, _f(Colors.white));
      c.drawCircle(ec + Offset(math.sin(t * 0.7) * hr * 0.06, 0), hr * 0.13, _f(Colors.black));
    }
    c.drawCircle(hc + Offset(x * hr * 0.62, hr * 0.42), hr * 0.12, _f(const Color(0xFFFB7185).withValues(alpha: 0.5)));
  }
  final mc = hc + Offset(0, hr * 0.5);
  if (talk) {
    final open = 0.35 + 0.65 * ((math.sin(t * 12) + 1) / 2);
    c.drawOval(Rect.fromCenter(center: mc, width: hr * 0.5, height: hr * 0.4 * open), _f(const Color(0xFF7F1D1D)));
  } else {
    c.drawArc(Rect.fromCenter(center: mc - Offset(0, hr * 0.1), width: hr * 0.65, height: hr * 0.4), 0.2, math.pi - 0.4, false, _s(Colors.black87, 1.8));
  }
  c.restore();
}

void _speech(Canvas c, Offset at, String text, double size, double pop, {Color fill = Colors.white, Color ink = const Color(0xFF111827)}) {
  if (pop <= 0) return;
  c.save();
  c.translate(at.dx, at.dy);
  c.scale(Curves.elasticOut.transform(pop.clamp(0.0, 1.0)).clamp(0.01, 1.3));
  final tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: ink, fontSize: size, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
  final r = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: tp.width + size * 1.1, height: tp.height + size * 0.7), Radius.circular(size * 0.8));
  c.drawRRect(r, _f(fill));
  c.drawPath(Path()..moveTo(-size * 0.3, r.bottom - 1)..lineTo(-size * 0.7, r.bottom + size * 0.6)..lineTo(size * 0.2, r.bottom - 1)..close(), _f(fill));
  tp.paint(c, Offset(-tp.width / 2, -tp.height / 2));
  c.restore();
}

void _coin(Canvas c, Offset p, double r, double spin) {
  final k = math.cos(spin).abs().clamp(0.15, 1.0);
  c.drawOval(Rect.fromCenter(center: p, width: r * 2 * k, height: r * 2), _f(const Color(0xFFFACC15)));
  c.drawOval(Rect.fromCenter(center: p, width: r * 2 * k, height: r * 2), _s(const Color(0xFFA16207), r * 0.18));
  if (k > 0.5) _t(c, '\$', p, r * 1.2, const Color(0xFFA16207));
}

void _confetti(Canvas c, Size s, double t, {int n = 18, double from = 0}) {
  final r = math.Random(4);
  const cols = [Color(0xFFF472B6), Color(0xFF38BDF8), Color(0xFFFDE047), Color(0xFF4ADE80), Color(0xFFFB923C)];
  for (var i = 0; i < n; i++) {
    final x = r.nextDouble() * s.width;
    final y = (((t - from) * (40 + r.nextDouble() * 60) + r.nextDouble() * s.height) % s.height);
    c.save();
    c.translate(x, y);
    c.rotate(t * 3 + i);
    c.drawRect(Rect.fromCenter(center: Offset.zero, width: s.height * 0.025, height: s.height * 0.012), _f(cols[i % cols.length]));
    c.restore();
  }
}

/// How many ad scenes there are.
const int kCartoonScenes = 11;

/// Draws scene [i] in the top part of [s]; [lt] is the seconds since the scene began (it repeats every 6 s).
void cartoonScene(Canvas c, Size s, int i, double lt) {
  switch (i % kCartoonScenes) {
    case 0:
      _civic(c, s, lt);
    case 1:
      _jobs(c, s, lt);
    case 2:
      _store(c, s, lt);
    case 3:
      _swahili(c, s, lt);
    case 4:
      _scanner(c, s, lt);
    case 5:
      _invoice(c, s, lt);
    case 6:
      _book(c, s, lt);
    case 7:
      _wallet(c, s, lt);
    case 8:
      _games(c, s, lt);
    case 9:
      _lab(c, s, lt);
    default:
      _helper(c, s, lt);
  }
}

// 0 ── Civic Registry: an ID card flips and gets stamped.
void _civic(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  for (var k = 0; k < 6; k++) {
    final x = w * (0.04 + k * 0.17), hh = h * (0.18 + 0.08 * (k % 3));
    c.drawRect(Rect.fromLTWH(x, ground - hh, w * 0.12, hh), _f(Colors.white.withValues(alpha: 0.2)));
    c.drawPath(Path()..moveTo(x - 3, ground - hh)..lineTo(x + w * 0.06, ground - hh - h * 0.06)..lineTo(x + w * 0.12 + 3, ground - hh)..close(), _f(Colors.white.withValues(alpha: 0.3)));
  }
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.18)));
  final flip = math.cos(t * 1.6);
  final cw = math.min(w * 0.46, h * 0.95), ch = cw * 0.62;
  c.save();
  c.translate(w * 0.58, h * 0.45);
  c.scale(math.max(0.08, flip.abs()), 1);
  final card = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: cw, height: ch), Radius.circular(ch * 0.1));
  c.drawRRect(card, Paint()..shader = LinearGradient(colors: flip >= 0 ? const [Color(0xFFFFFFFF), Color(0xFFDBEAFE)] : const [Color(0xFF1D4ED8), Color(0xFF312E81)]).createShader(card.outerRect));
  c.drawRRect(card, _s(const Color(0xFF1E3A8A), 2));
  if (flip >= 0) {
    c.drawCircle(Offset(-cw * 0.28, -ch * 0.05), ch * 0.22, _f(const Color(0xFF8D5524)));
    c.drawArc(Rect.fromCircle(center: Offset(-cw * 0.28, -ch * 0.05), radius: ch * 0.22), math.pi, math.pi, true, _f(const Color(0xFF1F1209)));
    for (var k = 0; k < 3; k++) {
      c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(-cw * 0.05, -ch * 0.25 + k * ch * 0.16, cw * (0.42 - k * 0.06), ch * 0.07), const Radius.circular(3)), _f(const Color(0xFF93C5FD)));
    }
    _t(c, 'COMMUNITY ID', Offset(0, -ch * 0.4), ch * 0.1, const Color(0xFF1E3A8A), maxW: cw * 0.8);
  } else {
    _t(c, '★ NGMY ★', Offset.zero, ch * 0.16, Colors.white, maxW: cw * 0.8);
  }
  c.restore();
  if (t > 2.6) {
    final k = ((t - 2.6) / 0.35).clamp(0.0, 1.0);
    c.save();
    c.translate(w * 0.58, h * 0.52);
    c.rotate(-0.25);
    c.scale(2.2 - 1.2 * Curves.easeOutBack.transform(k));
    final r = Rect.fromCenter(center: Offset.zero, width: cw * 0.7, height: ch * 0.3);
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(6)), _s(const Color(0xFF16A34A).withValues(alpha: k), 3));
    _t(c, '✓ REGISTERED', Offset.zero, ch * 0.13, const Color(0xFF16A34A).withValues(alpha: k), maxW: r.width * 0.9);
    c.restore();
  }
  cartoonKid(c, Offset(w * 0.2, ground), h * 0.7, t, wave: (math.sin(t * 5) + 1) / 2, bounce: math.sin(t * 5).abs() * h * 0.015, shirt: const Color(0xFF16A34A), talk: t > 2.6 && t < 4);
  if (t > 3) _confetti(c, Size(w, h * 0.9), t, from: 3);
}

// 1 ── Jobs: the kid walks to the office and gets hired.
void _jobs(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  final bx = w * 0.62, bw = w * 0.3, bh = h * 0.62;
  c.drawRect(Rect.fromLTWH(bx, ground - bh, bw, bh), _f(const Color(0xFF1E293B)));
  for (var r = 0; r < 4; r++) {
    for (var q = 0; q < 3; q++) {
      c.drawRect(Rect.fromLTWH(bx + bw * (0.12 + q * 0.3), ground - bh + bh * (0.1 + r * 0.17), bw * 0.2, bh * 0.1), _f(((r + q + (t * 1.5).floor()) % 3 == 0) ? const Color(0xFFFDE047) : const Color(0xFF38BDF8).withValues(alpha: 0.6)));
    }
  }
  c.drawRect(Rect.fromLTWH(bx + bw * 0.38, ground - bh * 0.16, bw * 0.24, bh * 0.16), _f(const Color(0xFF78350F)));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(bx, ground - bh - h * 0.09, bw, h * 0.08), Radius.circular(h * 0.02)), _f(const Color(0xFFF59E0B)));
  _t(c, 'JOBS', Offset(bx + bw / 2, ground - bh - h * 0.05), h * 0.06, Colors.white);
  final walk = (t / 2.8).clamp(0.0, 1.0);
  final kx = w * 0.12 + (bx + bw * 0.3 - w * 0.12) * Curves.easeInOut.transform(walk);
  final bob = walk < 1 ? math.sin(t * 12).abs() * h * 0.02 : 0.0;
  cartoonKid(c, Offset(kx, ground), h * 0.6, t, bounce: bob, shirt: const Color(0xFF8B5CF6), wave: walk >= 1 ? (math.sin(t * 6) + 1) / 2 : 0, talk: walk >= 1, hairStyle: 2, skin: const Color(0xFF6B4423));
  // Briefcase in the other hand.
  if (walk < 1) {
    final bc = Offset(kx - h * 0.12, ground - h * 0.17 - bob);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: bc, width: h * 0.1, height: h * 0.075), const Radius.circular(3)), _f(const Color(0xFF78350F)));
  }
  if (walk >= 1) {
    _speech(c, Offset(kx + h * 0.05, ground - h * 0.78), 'Hired! 🎉', h * 0.07, (t - 2.8) / 0.4);
    for (var k = 0; k < 6; k++) {
      final ph = ((t - 2.8) * 0.8 + k * 0.17) % 1.0;
      _coin(c, Offset(kx + math.sin(k * 2.1) * h * 0.2, ground - h * 0.5 - ph * h * 0.25), h * 0.03, t * 8 + k);
    }
  }
  // A job board with cards sliding in.
  final board = Rect.fromLTWH(w * 0.04, h * 0.06, w * 0.3, h * 0.3);
  c.drawRRect(RRect.fromRectAndRadius(board, Radius.circular(h * 0.02)), _f(const Color(0xFF92400E)));
  for (var k = 0; k < 3; k++) {
    final a = ((t - k * 0.5) / 0.5).clamp(0.0, 1.0);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(board.left + board.width * 0.08 + (1 - a) * w * 0.3, board.top + board.height * (0.08 + k * 0.3), board.width * 0.84, board.height * 0.24), const Radius.circular(3)), _f(Colors.white));
    c.drawRect(Rect.fromLTWH(board.left + board.width * 0.14 + (1 - a) * w * 0.3, board.top + board.height * (0.14 + k * 0.3), board.width * 0.5, board.height * 0.05), _f(const Color(0xFF94A3B8)));
  }
}

// 3 ── NGMY Store: an African food stall that supports our community.
void _store(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(const Color(0xFF78350F).withValues(alpha: 0.6)));
  final sx = w * 0.3, sw = w * 0.66;
  const kente = [Color(0xFFDC2626), Color(0xFFFACC15), Color(0xFF16A34A), Color(0xFF111827)];
  for (var k = 0; k < 12; k++) {
    c.drawRect(Rect.fromLTWH(sx + sw / 12 * k, h * 0.14, sw / 12 + 1, h * 0.12), _f(kente[k % 4]));
  }
  for (var k = 0; k < 12; k++) {
    c.drawArc(Rect.fromLTWH(sx + sw / 12 * k, h * 0.2, sw / 12, h * 0.1), 0, math.pi, true, _f(kente[k % 4]));
  }
  c.drawRect(Rect.fromLTWH(sx + 4, h * 0.3, 4, ground - h * 0.3), _f(const Color(0xFF78350F)));
  c.drawRect(Rect.fromLTWH(sx + sw - 8, h * 0.3, 4, ground - h * 0.3), _f(const Color(0xFF78350F)));
  final table = Rect.fromLTWH(sx, h * 0.68, sw, h * 0.26);
  c.drawRRect(RRect.fromRectAndRadius(table, const Radius.circular(4)), _f(const Color(0xFF92400E)));
  for (var k = 0; k < 6; k++) {
    c.drawRect(Rect.fromLTWH(table.left + table.width / 6 * k, table.top + 2, table.width / 12, table.height - 4), _f((k.isEven ? const Color(0xFFDC2626) : const Color(0xFFFACC15)).withValues(alpha: 0.9)));
  }
  // A steaming pot, bananas and mangoes.
  final pot = Offset(sx + sw * 0.2, h * 0.62);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: pot, width: h * 0.17, height: h * 0.11), Radius.circular(h * 0.03)), _f(const Color(0xFF1F2937)));
  c.drawOval(Rect.fromCenter(center: pot + Offset(0, -h * 0.05), width: h * 0.17, height: h * 0.04), _f(const Color(0xFFEA580C)));
  for (var k = 0; k < 3; k++) {
    final ph = (t * 0.8 + k * 0.33) % 1.0;
    c.drawCircle(pot + Offset(math.sin(ph * 6 + k) * 5, -h * 0.08 - ph * h * 0.14), h * 0.015 + ph * h * 0.02, _f(Colors.white.withValues(alpha: 0.6 * (1 - ph))));
  }
  for (var k = 0; k < 5; k++) {
    c.drawArc(Rect.fromCenter(center: Offset(sx + sw * 0.5, h * 0.62), width: h * (0.1 + k * 0.01), height: h * 0.14), 0.4 + k * 0.1, 1.9, false, _s(const Color(0xFFFACC15), h * 0.018));
  }
  for (var k = 0; k < 4; k++) {
    c.drawCircle(Offset(sx + sw * (0.72 + 0.06 * (k % 2)) + k * h * 0.02, h * 0.63 + (k ~/ 2) * h * 0.035), h * 0.032, _f(k.isEven ? const Color(0xFFF97316) : const Color(0xFF84CC16)));
  }
  // The vendor waves.
  cartoonKid(c, Offset(w * 0.14, ground), h * 0.68, t, shirt: const Color(0xFFFACC15), wave: (math.sin(t * 5) + 1) / 2, talk: true, hairStyle: 1, skin: const Color(0xFF5C3A1E));
  // Hearts float up: we support our community.
  for (var k = 0; k < 5; k++) {
    final ph = (t * 0.45 + k * 0.2) % 1.0;
    _t(c, '♥', Offset(w * 0.16 + math.sin(ph * 5 + k) * h * 0.08 + k * h * 0.03, h * 0.45 - ph * h * 0.4), h * 0.06, const Color(0xFFEF4444).withValues(alpha: 1 - ph));
  }
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(sx + sw / 2, h * 0.08), width: sw * 0.7, height: h * 0.1), Radius.circular(h * 0.03)), _f(const Color(0xFF111827)));
  _t(c, 'NGMY STORE · African food', Offset(sx + sw / 2, h * 0.08), h * 0.05, const Color(0xFFFDE047), maxW: sw * 0.64);
}

// 4 ── Kiswahili: two kids say hello in two languages.
void _swahili(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  const pairs = [('Jambo!', 'Hello!'), ('Asante', 'Thank you'), ('Karibu', 'Welcome'), ('Rafiki', 'Friend')];
  final idx = (t / 1.5).floor() % pairs.length;
  final lt = t % 1.5;
  final left = lt < 0.75;
  cartoonKid(c, Offset(w * 0.25, ground), h * 0.68, t, shirt: const Color(0xFF16A34A), wave: left ? (math.sin(t * 8) + 1) / 2 : 0, talk: left, skin: const Color(0xFF8D5524), hairStyle: 2, bounce: left ? math.sin(t * 8).abs() * h * 0.01 : 0);
  cartoonKid(c, Offset(w * 0.75, ground), h * 0.68, t, shirt: const Color(0xFF2563EB), wave: left ? 0 : (math.sin(t * 8) + 1) / 2, talk: !left, skin: const Color(0xFFE0AC69), hairStyle: 0, bounce: left ? 0 : math.sin(t * 8).abs() * h * 0.01);
  if (left) {
    _speech(c, Offset(w * 0.26, h * 0.15), pairs[idx].$1, h * 0.085, lt / 0.25, fill: const Color(0xFFFEF9C3));
  } else {
    _speech(c, Offset(w * 0.74, h * 0.15), pairs[idx].$2, h * 0.085, (lt - 0.75) / 0.25, fill: const Color(0xFFE0F2FE));
  }
  for (var k = 0; k < 3; k++) {
    _t(c, '→', Offset(w * 0.5, h * (0.35 + k * 0.1)), h * 0.07, Colors.white.withValues(alpha: 0.3 + 0.5 * ((t * 2 + k) % 1)));
  }
}

// 5 ── Document scanner: a beam sweeps a page and it becomes a PDF.
void _scanner(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  final page = Rect.fromCenter(center: Offset(w * 0.6, h * 0.45), width: math.min(w * 0.3, h * 0.55), height: h * 0.7);
  c.drawRRect(RRect.fromRectAndRadius(page, const Radius.circular(4)), _f(Colors.white));
  for (var k = 0; k < 9; k++) {
    c.drawRect(Rect.fromLTWH(page.left + page.width * 0.1, page.top + page.height * (0.1 + k * 0.095), page.width * (k % 3 == 2 ? 0.5 : 0.8), page.height * 0.03), _f(const Color(0xFFCBD5E1)));
  }
  final sweep = (t / 3).clamp(0.0, 1.0);
  final by = page.top + page.height * sweep;
  if (sweep < 1) {
    c.drawRect(Rect.fromLTWH(page.left - 8, by - 2, page.width + 16, 4), _f(const Color(0xFF4ADE80)));
    c.drawRect(Rect.fromLTWH(page.left - 8, page.top, page.width + 16, by - page.top), _f(const Color(0xFF4ADE80).withValues(alpha: 0.18)));
  } else {
    final k = ((t - 3) / 0.4).clamp(0.0, 1.0);
    c.drawCircle(Offset(page.right, page.top), h * 0.08 * Curves.elasticOut.transform(k), _f(const Color(0xFFDC2626)));
    _t(c, 'PDF', Offset(page.right, page.top), h * 0.045 * k, Colors.white);
    _t(c, '✓ Saved', Offset(page.center.dx, page.bottom + h * 0.06), h * 0.06, Colors.white.withValues(alpha: k));
  }
  cartoonKid(c, Offset(w * 0.2, ground), h * 0.66, t, shirt: const Color(0xFF0EA5E9), armUp: true, wave: (math.sin(t * 4) + 1) / 2, bounce: math.sin(t * 4).abs() * h * 0.01);
  final ph = Rect.fromCenter(center: Offset(w * 0.3, h * 0.3), width: h * 0.1, height: h * 0.18);
  c.drawRRect(RRect.fromRectAndRadius(ph, Radius.circular(h * 0.02)), _f(const Color(0xFF111827)));
  c.drawRRect(RRect.fromRectAndRadius(ph.deflate(3), Radius.circular(h * 0.015)), _f(const Color(0xFF4ADE80).withValues(alpha: 0.35 + 0.3 * math.sin(t * 6))));
}

// 6 ── Invoice creator: lines appear, the total counts up, PAID stamps.
void _invoice(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  final page = Rect.fromCenter(center: Offset(w * 0.62, h * 0.47), width: math.min(w * 0.4, h * 0.75), height: h * 0.8);
  c.drawRRect(RRect.fromRectAndRadius(page, const Radius.circular(5)), _f(Colors.white));
  _t(c, 'INVOICE', Offset(page.left + page.width * 0.3, page.top + page.height * 0.09), page.height * 0.07, const Color(0xFF1E3A8A));
  const items = [('Chairs', 120), ('Cloth', 80), ('Delivery', 25)];
  var total = 0;
  for (var k = 0; k < items.length; k++) {
    final a = ((t - 0.5 - k * 0.6) / 0.4).clamp(0.0, 1.0);
    if (a <= 0) continue;
    total += items[k].$2;
    final y = page.top + page.height * (0.24 + k * 0.14);
    c.save();
    c.translate((1 - a) * 30, 0);
    c.drawRect(Rect.fromLTWH(page.left + page.width * 0.08, y, page.width * 0.5, page.height * 0.045), _f(const Color(0xFFCBD5E1).withValues(alpha: a)));
    _t(c, '\$${items[k].$2}', Offset(page.right - page.width * 0.17, y + page.height * 0.02), page.height * 0.06, const Color(0xFF111827).withValues(alpha: a));
    c.restore();
  }
  c.drawLine(Offset(page.left + page.width * 0.08, page.top + page.height * 0.7), Offset(page.right - page.width * 0.08, page.top + page.height * 0.7), _s(Colors.black26, 1.4));
  _t(c, 'TOTAL  \$$total', Offset(page.center.dx, page.top + page.height * 0.78), page.height * 0.075, const Color(0xFF111827), maxW: page.width * 0.8);
  if (t > 2.8) {
    final k = ((t - 2.8) / 0.3).clamp(0.0, 1.0);
    c.save();
    c.translate(page.center.dx, page.top + page.height * 0.55);
    c.rotate(-0.3);
    c.scale(2 - Curves.easeOutBack.transform(k));
    final r = Rect.fromCenter(center: Offset.zero, width: page.width * 0.6, height: page.height * 0.17);
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(6)), _s(const Color(0xFF16A34A).withValues(alpha: k), 3.5));
    _t(c, 'PAID', Offset.zero, page.height * 0.11, const Color(0xFF16A34A).withValues(alpha: k));
    c.restore();
    for (var q = 0; q < 6; q++) {
      final ph = ((t - 2.8) * 0.7 + q * 0.17) % 1.0;
      _coin(c, Offset(page.left - h * 0.05 + math.sin(q * 2.0) * h * 0.1, h * 0.7 - ph * h * 0.5), h * 0.03, t * 8 + q);
    }
  }
  cartoonKid(c, Offset(w * 0.2, ground), h * 0.66, t, shirt: const Color(0xFFEC4899), armUp: true, wave: t > 2.8 ? (math.sin(t * 6) + 1) / 2 : 0, talk: t > 2.8, hairStyle: 1, skin: const Color(0xFF6B4423));
}

// 7 ── Family Book and Family Tree.
void _book(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(const Color(0xFF14532D).withValues(alpha: 0.7)));
  final bc = Offset(w * 0.6, h * 0.62);
  final bw = math.min(w * 0.3, h * 0.6);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: bc, width: bw * 2.1, height: bw * 1.3), const Radius.circular(6)), _f(const Color(0xFF7C2D12)));
  c.drawRect(Rect.fromCenter(center: bc - Offset(bw * 0.5, 0), width: bw, height: bw * 1.2), _f(const Color(0xFFFEF3C7)));
  c.drawRect(Rect.fromCenter(center: bc + Offset(bw * 0.5, 0), width: bw, height: bw * 1.2), _f(const Color(0xFFFEF3C7)));
  final flip = (t % 2.0) / 2.0;
  c.save();
  c.translate(bc.dx, bc.dy);
  c.scale(math.cos(flip * math.pi), 1);
  c.drawRect(Rect.fromLTWH(0, -bw * 0.6, bw, bw * 1.2), _f(const Color(0xFFFDE68A)));
  c.restore();
  // A tiny tree grows from the book.
  final grow = (t / 3).clamp(0.0, 1.0);
  c.drawLine(Offset(bc.dx, bc.dy - bw * 0.6), Offset(bc.dx, bc.dy - bw * 0.6 - h * 0.28 * grow), _s(const Color(0xFF78350F), h * 0.025));
  for (var k = 0; k < 5; k++) {
    final a = (grow - 0.4 - k * 0.1).clamp(0.0, 1.0);
    c.drawCircle(Offset(bc.dx + math.cos(k * 1.3) * h * 0.14 * a, bc.dy - bw * 0.6 - h * 0.28 * grow + math.sin(k * 1.3) * h * 0.08 * a), h * 0.05 * a, _f(const Color(0xFF22C55E)));
    if (a > 0.6) _t(c, '♥', Offset(bc.dx + math.cos(k * 1.3) * h * 0.14, bc.dy - bw * 0.6 - h * 0.28 * grow + math.sin(k * 1.3) * h * 0.08), h * 0.04, const Color(0xFFEC4899));
  }
  cartoonKid(c, Offset(w * 0.2, ground), h * 0.66, t, shirt: const Color(0xFF7C3AED), wave: (math.sin(t * 4) + 1) / 2, hairStyle: 2, bounce: math.sin(t * 4).abs() * h * 0.01);
}

// 8 ── Wallet: coins stack up while the kid saves.
void _wallet(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  final n = ((t / 5.5).clamp(0.0, 1.0) * 9).floor() + 1;
  for (var k = 0; k < n; k++) {
    final x = w * 0.62;
    c.drawOval(Rect.fromCenter(center: Offset(x, ground - h * 0.03 - k * h * 0.055), width: h * 0.26, height: h * 0.07), _f(const Color(0xFFFACC15)));
    c.drawOval(Rect.fromCenter(center: Offset(x, ground - h * 0.03 - k * h * 0.055), width: h * 0.26, height: h * 0.07), _s(const Color(0xFFA16207), 2));
  }
  final drop = (t * 1.6) % 1.0;
  _coin(c, Offset(w * 0.62, h * 0.1 + drop * (ground - h * 0.07 - n * h * 0.055 - h * 0.1)), h * 0.05, t * 8);
  _t(c, '\$${n * 25}', Offset(w * 0.62, h * 0.08), h * 0.08, const Color(0xFFFDE047));
  cartoonKid(c, Offset(w * 0.25, ground), h * 0.66, t, shirt: const Color(0xFF0EA5E9), wave: (math.sin(t * 5) + 1) / 2, talk: true, bounce: math.sin(t * 5).abs() * h * 0.012, hairStyle: 1);
}

// 9 ── Games: dice and stars bounce while the kid plays.
void _games(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  for (var k = 0; k < 3; k++) {
    final p = Offset(w * (0.5 + 0.14 * k), h * 0.55 - (math.sin(t * 4 + k * 1.7)).abs() * h * 0.3);
    c.save();
    c.translate(p.dx, p.dy);
    c.rotate(t * 2 + k);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: h * 0.15, height: h * 0.15), Radius.circular(h * 0.03)), _f(Colors.white));
    for (var d = 0; d < (k + 1) * 2 - (k == 0 ? 1 : 0); d++) {
      c.drawCircle(Offset(math.cos(d * 2.1) * h * 0.04, math.sin(d * 2.1) * h * 0.04), h * 0.012, _f(Colors.black87));
    }
    c.restore();
  }
  for (var k = 0; k < 5; k++) {
    final ph = (t * 0.6 + k * 0.2) % 1.0;
    _t(c, '★', Offset(w * (0.45 + k * 0.1), h * 0.25 - ph * h * 0.2), h * 0.06, const Color(0xFFFDE047).withValues(alpha: 1 - ph));
  }
  cartoonKid(c, Offset(w * 0.22, ground), h * 0.66, t, shirt: const Color(0xFFF97316), armUp: true, wave: (math.sin(t * 6) + 1) / 2, talk: true, bounce: math.sin(t * 6).abs() * h * 0.015);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(w * 0.22, ground - h * 0.28), width: h * 0.16, height: h * 0.07), Radius.circular(h * 0.03)), _f(const Color(0xFF1F2937)));
  c.drawCircle(Offset(w * 0.22 + h * 0.05, ground - h * 0.28), h * 0.012, _f(const Color(0xFFEF4444)));
}

// 10 ── Electronics lab: the bulb lights up.
void _lab(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  final loop = RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.42, h * 0.18, w * 0.5, h * 0.5), Radius.circular(h * 0.08));
  final path = Path()..addRRect(loop);
  c.drawPath(path, _s(Colors.white.withValues(alpha: 0.5), 4));
  final m = path.computeMetrics().first;
  for (var k = 0; k < 10; k++) {
    final d = ((t * 0.18 + k / 10) % 1.0) * m.length;
    c.drawCircle(m.getTangentForOffset(d)!.position, h * 0.016, _f(const Color(0xFFFDE047)));
  }
  final on = t > 1.5;
  final bulb = Offset(w * 0.92, h * 0.43);
  if (on) c.drawCircle(bulb, h * 0.2, _f(const Color(0xFFFDE047).withValues(alpha: 0.4 + 0.2 * math.sin(t * 8)))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
  c.drawCircle(bulb, h * 0.07, _f(on ? const Color(0xFFFEF9C3) : const Color(0xFF94A3B8)));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(w * 0.42, h * 0.43), width: h * 0.1, height: h * 0.2), const Radius.circular(4)), _f(const Color(0xFF16A34A)));
  _t(c, '+', Offset(w * 0.42, h * 0.36), h * 0.07, Colors.white);
  cartoonKid(c, Offset(w * 0.2, ground), h * 0.68, t, shirt: const Color(0xFF14B8A6), wave: on ? (math.sin(t * 6) + 1) / 2 : 0, talk: on, bounce: on ? math.sin(t * 6).abs() * h * 0.012 : 0);
  if (on) _speech(c, Offset(w * 0.24, h * 0.16), 'It works!', h * 0.07, (t - 1.5) / 0.4);
}

// 11 ── Helper and Advisors: a chat with typing dots.
void _helper(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ground = h * 0.94;
  c.drawRect(Rect.fromLTWH(0, ground, w, h - ground), _f(Colors.black.withValues(alpha: 0.2)));
  final a1 = ((t - 0.3) / 0.4).clamp(0.0, 1.0);
  final a2 = ((t - 1.8) / 0.4).clamp(0.0, 1.0);
  _speech(c, Offset(w * 0.3, h * 0.2), 'How do I enroll?', h * 0.065, a1, fill: const Color(0xFFFEF9C3));
  if (t > 1.0 && t < 1.8) {
    for (var k = 0; k < 3; k++) {
      c.drawCircle(Offset(w * 0.72 + k * h * 0.05, h * 0.38 - math.sin(t * 9 + k).abs() * h * 0.02), h * 0.015, _f(Colors.white));
    }
  }
  _speech(c, Offset(w * 0.7, h * 0.38), 'Tap Civic Registry!', h * 0.065, a2, fill: const Color(0xFFE0F2FE));
  cartoonKid(c, Offset(w * 0.2, ground), h * 0.62, t, shirt: const Color(0xFFEF4444), talk: t < 1.0, hairStyle: 2);
  // A friendly robot helper.
  final rx = w * 0.78, ry = ground - h * 0.28;
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(rx, ry), width: h * 0.2, height: h * 0.22), Radius.circular(h * 0.04)), _f(const Color(0xFFE2E8F0)));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(rx, ry - h * 0.18), width: h * 0.18, height: h * 0.14), Radius.circular(h * 0.04)), _f(const Color(0xFFCBD5E1)));
  for (final x in const [-1.0, 1.0]) {
    c.drawCircle(Offset(rx + x * h * 0.04, ry - h * 0.18), h * 0.02, _f((t * 1.1) % 1 > 0.08 ? const Color(0xFF22D3EE) : const Color(0xFF0E7490)));
  }
  c.drawLine(Offset(rx, ry - h * 0.25), Offset(rx, ry - h * 0.3), _s(Colors.white70, 3));
  c.drawCircle(Offset(rx, ry - h * 0.31), h * 0.015, _f(const Color(0xFFEF4444)));
}
