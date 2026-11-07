import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart' show ValueListenable;

import 'package:flutter/material.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE FIRESIDE VILLAGE, PAINTED: an African village at dusk drawn by hand in code, with people who have real faces. They blink, look at whoever
// is speaking, move their mouths while they talk, nod, laugh, gasp and clap, and the village round them is alive: someone pounds grain,
// a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays, fireflies drift and smoke rises.
// ═════════════════════════════════════════════════════════════════════════════

/// What the elder and the children are doing right now. The game changes it; the painter only reads it.
class FiresideState {
  /// 0 greeting, 1 the elder teaches, 2 the elder asks, 3 the answer, 4 the end.
  int step = 0;
  bool elderIsWoman = false;

  /// True while the elder is talking (the words are still coming out).
  bool elderTalking = false;
  bool correct = false;

  /// The clock time when the step began.
  double stepSince = 0;
  double cheerUntil = -1, gaspUntil = -1;
  double fire = 0.35;

  /// The answer the player gave, said out loud by the child who answers.
  String? answerText;
  double answerUntil = -1;

  /// A short thing one child says to another (or to the elder), and who says it.
  String? reaction;
  int reactionBy = 3;
  double reactionUntil = -1;
}

const double _w = 450, _h = 900;

/// Smooth wandering numbers between -1 and 1, so nothing moves like a machine.
double _wob(double t, double seed) => (math.sin(t * 1.3 + seed * 7.1) + math.sin(t * 2.1 + seed * 3.7) * 0.6 + math.sin(t * 0.7 + seed * 11.3) * 0.4) / 2;

Color _mix(Color a, Color b, double t) => Color.lerp(a, b, t)!;

Paint _f(Color c) => Paint()..color = c;

Paint _s(Color c, double w) => Paint()
  ..style = PaintingStyle.stroke
  ..strokeWidth = w
  ..color = c
  ..strokeCap = StrokeCap.round
  ..strokeJoin = StrokeJoin.round;

// ─── What one person looks like ──────────────────────────────────────────────

class _Look {
  const _Look({required this.skin, required this.cloth, required this.accent, required this.hair, this.hairStyle = 0, this.female = false, this.elder = false, this.child = false, this.pattern = 0, this.wrap});
  final Color skin, cloth, accent, hair;

  /// 0 short curly, 1 bald with a cap and a white beard, 2 head wrap, 3 braids with beads, 4 puffs, 5 close fade.
  final int hairStyle;
  final bool female, elder, child;

  /// 0 plain, 1 kente stripes, 2 wax print circles, 3 shuka check.
  final int pattern;
  final Color? wrap;
}

class _Pose {
  double mouth = 0, smile = 0.25, brow = 0, squint = 0, turn = 0, tilt = 0, nod = 0, lean = 0, bounce = 0, gx = 0, gy = 0;
  Offset? handL, handR;
  bool stick = false;
}

// ─── The painter ─────────────────────────────────────────────────────────────

/// Keeps the still part of the picture (sky, hills, huts, tree, ground) drawn once, so each frame only draws what moves.
class FiresideBackdrop {
  ui.Picture? _pic;
  Size? _size;

  ui.Picture of(Size size) {
    if (_pic == null || _size != size) {
      _pic?.dispose();
      _pic = _record(size);
      _size = size;
    }
    return _pic!;
  }

  void dispose() => _pic?.dispose();
}

class FiresideArt extends CustomPainter {
  FiresideArt({required this.clock, required this.state, required this.backdrop}) : super(repaint: clock);
  final ValueListenable<double> clock;
  final FiresideState state;
  final FiresideBackdrop backdrop;

  static const Offset _fire = Offset(225, 574);

  @override
  void paint(Canvas c, Size size) {
    final t = clock.value;
    final s = state;
    c.drawPicture(backdrop.of(size));
    final u = math.min(size.width / _w, size.height / _h);
    c.save();
    c.translate((size.width - _w * u) / 2, (size.height - _h * u) / 2);
    c.scale(u);
    _sky(c, t);
    _doorsAndSmoke(c, t);
    _village(c, t, s);
    _firelight(c, t, s);
    // The people and the fire, from the back to the front.
    final order = <(double, void Function())>[
      (528, () => _personAt(c, 0, t, s)),
      (540, () => _personAt(c, 3, t, s)),
      (546, () => _personAt(c, 1, t, s)),
      (_fire.dy, () => _fireItself(c, t, s)),
      (612, () => _personAt(c, 4, t, s)),
      (650, () => _personAt(c, 2, t, s)),
      (656, () => _personAt(c, 5, t, s)),
    ]..sort((a, b) => a.$1.compareTo(b.$1));
    for (final o in order) {
      o.$2();
    }
    _bubbles(c, t, s);
    _fireflies(c, t);
    c.restore();
    // A dark edge, so the eye goes to the fire.
    final r = Offset.zero & size;
    c.drawRect(r, Paint()..shader = ui.Gradient.radial(Offset(size.width / 2, size.height * 0.6), size.longestSide * 0.75, [Colors.transparent, const Color(0xAA000010)], [0.55, 1]));
  }

  @override
  bool shouldRepaint(covariant FiresideArt old) => old.state != state || old.backdrop != backdrop;

  // ── sky, with the things that twinkle and fly across it ──

  void _sky(Canvas c, double t) {
    final r = math.Random(3);
    for (var i = 0; i < 36; i++) {
      final x = r.nextDouble() * _w, y = 20 + r.nextDouble() * 300;
      final a = 0.5 + 0.5 * math.sin(t * (1.5 + r.nextDouble() * 2) + i);
      c.drawCircle(Offset(x, y), 0.8 + r.nextDouble() * 1.1, _f(Colors.white.withValues(alpha: 0.25 + 0.7 * a)));
    }
    // A shooting star now and then.
    final k = (t % 17) / 1.2;
    if (k < 1) {
      final p = Offset(60 + k * 220, 70 + k * 90);
      c.drawLine(p, p - const Offset(46, 20), _s(Colors.white.withValues(alpha: (1 - k) * 0.9), 1.6));
    }
    // Birds going home across the moon.
    for (var b = 0; b < 3; b++) {
      final bt = (t * 0.035 + b * 0.05) % 1.0;
      final p = Offset(-20 + bt * 500, 120 + math.sin(bt * 9 + b) * 14 + b * 12);
      final flap = math.sin(t * 9 + b * 2) * 4;
      c.drawPath(Path()..moveTo(p.dx - 6, p.dy + flap)..quadraticBezierTo(p.dx - 2, p.dy - 3, p.dx, p.dy)..quadraticBezierTo(p.dx + 2, p.dy - 3, p.dx + 6, p.dy + flap), _s(const Color(0xFF0B0B20), 1.6));
    }
  }

  void _doorsAndSmoke(Canvas c, double t) {
    final flick = 0.75 + 0.25 * math.sin(t * 9) * math.sin(t * 5.3);
    for (final h in _huts) {
      // The warm glow in the doorway.
      final d = Offset(h.x + h.r * 0.1, h.y - h.h * 0.38);
      c.drawOval(Rect.fromCenter(center: d, width: h.r * 0.5, height: h.h * 0.74), _f(const Color(0xFFFFB347).withValues(alpha: 0.78 * flick)));
      c.drawOval(Rect.fromCenter(center: d + Offset(0, h.h * 0.1), width: h.r * 0.28, height: h.h * 0.4), _f(const Color(0xFFFFE08A).withValues(alpha: 0.7 * flick)));
      // Smoke from the thatch.
      for (var i = 0; i < 5; i++) {
        final ph = (t * 0.12 + i / 5 + h.x * 0.01) % 1.0;
        final p = Offset(h.x + math.sin(ph * 6 + i) * 6 + ph * 18, h.y - h.h - h.roof * 0.9 - ph * 70);
        c.drawCircle(p, 4 + ph * 12, _f(const Color(0xFFB8BCD8).withValues(alpha: 0.16 * (1 - ph))));
      }
    }
  }

  // ── the life of the village ──

  void _village(Canvas c, double t, FiresideState s) {
    // A woman pounds grain with a long pestle.
    _standing(c, const Offset(42, 468), 0.9, t, const _Look(skin: Color(0xFF6B4423), cloth: Color(0xFFDB2777), accent: Color(0xFFF2B01E), hair: Color(0xFF1F1209), female: true, wrap: Color(0xFF7C3AED)), pose: _Stand.pound);
    c.drawPath(Path()..moveTo(52, 470)..lineTo(50, 486)..lineTo(66, 486)..lineTo(64, 470)..close(), _f(const Color(0xFF5B3A22)));
    // A drummer by the big hut.
    _standing(c, const Offset(431, 520), 0.95, t, const _Look(skin: Color(0xFF5C3A21), cloth: Color(0xFF2E9B4F), accent: Color(0xFFF2B01E), hair: Color(0xFF1F1209), hairStyle: 5), pose: _Stand.drum, seated: true);
    c.drawPath(Path()..moveTo(417, 510)..quadraticBezierTo(431, 532, 445, 510)..lineTo(441, 548)..quadraticBezierTo(431, 553, 421, 548)..close(), _f(const Color(0xFF7A4A28)));
    c.drawOval(Rect.fromCenter(center: const Offset(431, 510), width: 28, height: 8), _f(const Color(0xFFE6CFA0)));
    // A girl walks along the path with a water pot on her head.
    final wt = (t / 26) % 1.0;
    _standing(c, Offset(-30 + wt * 510, 492), 0.82, t, const _Look(skin: Color(0xFF8D5524), cloth: Color(0xFFF59E0B), accent: Color(0xFFB91C1C), hair: Color(0xFF1F1209), hairStyle: 3, female: true), pose: _Stand.walk, carry: true);
    // Two children roll a hoop and run after it.
    final ht = (t / 11) % 1.0;
    final hx = 150 + math.sin(ht * math.pi * 2) * 110, hy = 507 + math.cos(ht * math.pi * 2) * 7;
    final hdir = math.cos(ht * math.pi * 2) >= 0 ? 1.0 : -1.0;
    c.drawOval(Rect.fromCenter(center: Offset(hx + hdir * 16, hy - 6), width: 11, height: 16), _s(const Color(0xFFD9B26B), 1.8));
    _standing(c, Offset(hx - hdir * 6, hy), 0.62, t, const _Look(skin: Color(0xFF7A4A28), cloth: Color(0xFFE21B3C), accent: Color(0xFFFFFFFF), hair: Color(0xFF1F1209), hairStyle: 5, child: true), pose: _Stand.walk, flip: hdir < 0, rate: 2.2);
    _standing(c, Offset(hx - hdir * 32, hy + 4), 0.58, t + 1, const _Look(skin: Color(0xFFA9703A), cloth: Color(0xFF1368CE), accent: Color(0xFFF2B01E), hair: Color(0xFF1F1209), hairStyle: 4, female: true, child: true), pose: _Stand.walk, flip: hdir < 0, rate: 2.2);
    // A goat grazes.
    _goat(c, const Offset(318, 476), t);
    // Hens peck in the dust.
    for (var i = 0; i < 3; i++) {
      final p = Offset(88 + i * 17 + math.sin(t * 0.5 + i) * 6, 520 + (i % 2) * 6);
      final peck = math.max(0.0, math.sin(t * 4 + i * 2)) * 4;
      c.drawOval(Rect.fromCenter(center: p, width: 11, height: 8), _f(i == 1 ? const Color(0xFFB5651D) : const Color(0xFFD8CBB0)));
      c.drawCircle(p + Offset(5, -3 + peck), 2.6, _f(i == 1 ? const Color(0xFFB5651D) : const Color(0xFFD8CBB0)));
      c.drawLine(p + Offset(7.5, -2 + peck), p + Offset(10, -1.5 + peck), _s(const Color(0xFFF59E0B), 1));
      c.drawLine(p + const Offset(-1, 4), p + const Offset(-1, 8), _s(const Color(0xFFF59E0B), 1));
    }
    // The dog sleeps by the fire, and lifts its head when the children cheer.
    final up = t < s.cheerUntil;
    final breath = math.sin(t * 2) * 0.8;
    const dp = Offset(150, 592);
    c.drawOval(Rect.fromCenter(center: dp, width: 40, height: 15 + breath), _f(const Color(0xFF8A6A48)));
    c.drawOval(Rect.fromCenter(center: dp + Offset(-14, up ? -9 : -2), width: 15, height: 12), _f(const Color(0xFF9A7A56)));
    c.drawPath(Path()..moveTo(dp.dx - 20, dp.dy - (up ? 16 : 6))..lineTo(dp.dx - 16, dp.dy - (up ? 22 : 9))..lineTo(dp.dx - 12, dp.dy - (up ? 16 : 6))..close(), _f(const Color(0xFF6B4F33)));
    c.drawCircle(dp + Offset(-17, up ? -9 : -2), 1.1, _f(const Color(0xFF111111)));
    c.drawPath(Path()..moveTo(dp.dx + 18, dp.dy - 2)..quadraticBezierTo(dp.dx + 30, dp.dy - 4 + math.sin(t * 8) * (up ? 6 : 0), dp.dx + 28, dp.dy + 3), _s(const Color(0xFF8A6A48), 3.5));
  }

  void _goat(Canvas c, Offset p, double t) {
    final graze = math.max(0.0, math.sin(t * 0.6)) * 9;
    final walk = math.sin(t * 0.25) * 10;
    final b = p + Offset(walk, 0);
    final col = const Color(0xFFD9D2C0), dark = const Color(0xFF8A7C66);
    for (final lx in [-9.0, -4.0, 6.0, 11.0]) {
      c.drawLine(b + Offset(lx, 3), b + Offset(lx + math.sin(t * 2 + lx) * 1.5, 16), _s(dark, 2));
    }
    c.drawOval(Rect.fromCenter(center: b, width: 32, height: 17), _f(col));
    c.drawOval(Rect.fromCenter(center: b + const Offset(1, 5), width: 26, height: 7), _f(_mix(col, Colors.black, 0.12)));
    c.drawPath(Path()..moveTo(b.dx + 13, b.dy - 3)..lineTo(b.dx + 22, b.dy - 8 + graze)..lineTo(b.dx + 20, b.dy + graze - 0.5)..lineTo(b.dx + 12, b.dy + 3)..close(), _f(col));
    c.drawOval(Rect.fromCenter(center: b + Offset(24, -7 + graze), width: 12, height: 9), _f(col));
    c.drawLine(b + Offset(22, -11 + graze), b + Offset(21, -17 + graze), _s(dark, 1.6));
    c.drawLine(b + Offset(26, -11 + graze), b + Offset(28, -16 + graze), _s(dark, 1.6));
    c.drawCircle(b + Offset(26, -8 + graze), 0.9, _f(Colors.black));
    c.drawLine(b + Offset(26, -3 + graze), b + Offset(26, 1 + graze), _s(const Color(0xFFF5F0E0), 1.4));
    c.drawLine(b + const Offset(-15, -3), b + Offset(-19, -7 + math.sin(t * 7) * 2), _s(col, 2.4));
  }

  // ── the glow of the fire on the ground and on everything near ──

  void _firelight(Canvas c, double t, FiresideState s) {
    final k = 0.8 + 0.2 * math.sin(t * 8) * math.sin(t * 3.7) + s.fire * 0.4;
    c.save();
    c.translate(_fire.dx, _fire.dy + 6);
    c.scale(1, 0.42);
    c.drawCircle(Offset.zero, 240 * (0.6 + 0.5 * s.fire), Paint()..shader = ui.Gradient.radial(Offset.zero, 240 * (0.6 + 0.5 * s.fire), [const Color(0xFFFF9A2E).withValues(alpha: 0.55 * k), const Color(0xFFFF6A00).withValues(alpha: 0.2 * k), Colors.transparent], [0, 0.5, 1]));
    c.restore();
  }

  // ── the fire ──

  void _fireItself(Canvas c, double t, FiresideState s) {
    final f = _fire;
    // The stones round the fire, the logs, and the glow of the coals.
    for (var i = 0; i < 14; i++) {
      final a = i * math.pi * 2 / 14;
      final p = f + Offset(math.cos(a) * 36, math.sin(a) * 13 + 6);
      if (math.sin(a) < 0) {
        c.drawOval(Rect.fromCenter(center: p, width: 11, height: 8), _f(const Color(0xFF58606E)));
      }
    }
    c.drawOval(Rect.fromCenter(center: f + const Offset(0, 6), width: 52, height: 17), _f(const Color(0xFF2B1608)));
    c.drawOval(Rect.fromCenter(center: f + const Offset(0, 6), width: 44, height: 12), _f(const Color(0xFFFF7A1A).withValues(alpha: 0.6 + 0.3 * math.sin(t * 6))));
    for (final a in const [0.5, 2.0, 3.6]) {
      final p = f + Offset(math.cos(a) * 3, 5);
      c.drawLine(p + Offset(math.cos(a) * 24, math.sin(a) * 4), p - Offset(math.cos(a) * 24, math.sin(a) * 4), _s(const Color(0xFF4A2C14), 7));
      c.drawLine(p + Offset(math.cos(a) * 24, math.sin(a) * 4 - 2), p - Offset(math.cos(a) * 24, math.sin(a) * 4 + 2), _s(const Color(0xFF7A4A24).withValues(alpha: 0.6), 2));
    }
    // The flames: tongues that sway, each in three colours, taller as the fire grows.
    final big = 46 + 80 * s.fire;
    final tongues = [(-17.0, 0.7, 0.0), (-8.0, 0.95, 1.3), (0.0, 1.15, 2.6), (9.0, 0.9, 3.9), (18.0, 0.65, 5.2)];
    for (var layer = 0; layer < 3; layer++) {
      final sc = [1.0, 0.72, 0.42][layer];
      final col = [const Color(0xFFE5421B), const Color(0xFFFF9A1F), const Color(0xFFFFF0A0)][layer];
      for (final tg in tongues) {
        final hgt = big * tg.$2 * sc * (0.9 + 0.12 * math.sin(t * 8 + tg.$3) + 0.06 * math.sin(t * 15 + tg.$3 * 2));
        final sway = math.sin(t * 3.3 + tg.$3) * 5 * (hgt / big);
        final bx = f.dx + tg.$1 * (1 - layer * 0.15);
        final w = (12 + 8 * s.fire) * tg.$2 * sc;
        final by = f.dy + 4;
        final path = Path()
          ..moveTo(bx - w, by)
          ..cubicTo(bx - w * 1.1, by - hgt * 0.45, bx + sway * 0.6 - w * 0.2, by - hgt * 0.7, bx + sway, by - hgt)
          ..cubicTo(bx + sway * 0.6 + w * 0.3, by - hgt * 0.65, bx + w * 1.15, by - hgt * 0.4, bx + w, by)
          ..close();
        c.drawPath(path, _f(col.withValues(alpha: layer == 0 ? 0.9 : 0.95)));
      }
    }
    // Sparks and smoke rise.
    for (var i = 0; i < 22; i++) {
      final ph = (t * (0.35 + (i % 5) * 0.06) + i / 22) % 1.0;
      final p = Offset(f.dx + math.sin(i * 1.9 + t * 1.5) * (10 + ph * 26), f.dy - 10 - ph * (110 + 80 * s.fire));
      c.drawCircle(p, 1.2 + (i % 3) * 0.6, _f(const Color(0xFFFFD24A).withValues(alpha: (1 - ph) * 0.9)));
    }
    for (var i = 0; i < 6; i++) {
      final ph = (t * 0.1 + i / 6) % 1.0;
      c.drawCircle(Offset(f.dx + math.sin(ph * 5 + i) * 16 + ph * 12, f.dy - big - ph * 120), 7 + ph * 20, _f(const Color(0xFFB8BCD8).withValues(alpha: 0.1 * (1 - ph))));
    }
  }

  void _fireflies(Canvas c, double t) {
    for (var i = 0; i < 16; i++) {
      final x = (i * 83.0 + math.sin(t * 0.3 + i) * 40 + t * 3) % _w;
      final y = 420 + (i * 37 % 300) + math.sin(t * 0.7 + i * 2) * 26;
      final a = math.max(0.0, math.sin(t * 1.4 + i * 1.7));
      c.drawCircle(Offset(x, y), 5, _f(const Color(0xFFD9FF6A).withValues(alpha: 0.18 * a)));
      c.drawCircle(Offset(x, y), 1.4, _f(const Color(0xFFF4FFB0).withValues(alpha: 0.9 * a)));
    }
  }

  // ── the seven seated people ──

  static const List<(Offset, double)> _spots = [
    (Offset(225, 528), 1.0), // the elder
    (Offset(350, 548), 0.95), // the second elder
    (Offset(158, 656), 1.12), // the child who answers: you
    (Offset(92, 544), 0.93),
    (Offset(398, 614), 1.04),
    (Offset(318, 662), 1.1),
  ];

  _Look _lookOf(int i, FiresideState s) {
    switch (i) {
      case 0:
        return s.elderIsWoman
            ? const _Look(skin: Color(0xFF5C3A21), cloth: Color(0xFFB91C1C), accent: Color(0xFFF2B01E), hair: Color(0xFFE5E7EB), hairStyle: 2, female: true, elder: true, pattern: 2, wrap: Color(0xFFF2B01E))
            : const _Look(skin: Color(0xFF5C3A21), cloth: Color(0xFFB91C1C), accent: Color(0xFFF2B01E), hair: Color(0xFFE5E7EB), hairStyle: 1, elder: true, pattern: 1);
      case 1:
        return s.elderIsWoman
            ? const _Look(skin: Color(0xFF6B4423), cloth: Color(0xFF1D4ED8), accent: Color(0xFFF2B01E), hair: Color(0xFFE5E7EB), hairStyle: 1, elder: true, pattern: 1)
            : const _Look(skin: Color(0xFF6B4423), cloth: Color(0xFF7C3AED), accent: Color(0xFFF2B01E), hair: Color(0xFFE5E7EB), hairStyle: 2, female: true, elder: true, pattern: 2, wrap: Color(0xFFDB2777));
      case 2:
        return const _Look(skin: Color(0xFF8D5524), cloth: Color(0xFF2E9B4F), accent: Color(0xFFFFFFFF), hair: Color(0xFF1F1209), hairStyle: 0, child: true);
      case 3:
        return const _Look(skin: Color(0xFFA9703A), cloth: Color(0xFFDB2777), accent: Color(0xFFF2B01E), hair: Color(0xFF1F1209), hairStyle: 3, female: true, child: true, pattern: 2);
      case 4:
        return const _Look(skin: Color(0xFF6B4423), cloth: Color(0xFFD62828), accent: Color(0xFF111111), hair: Color(0xFF1F1209), hairStyle: 5, child: true, pattern: 3);
      default:
        return const _Look(skin: Color(0xFF7A4A28), cloth: Color(0xFFF59E0B), accent: Color(0xFF7C3AED), hair: Color(0xFF1F1209), hairStyle: 4, female: true, child: true, pattern: 2);
    }
  }

  /// How each person is behaving at this moment: who they look at, what their face and hands do.
  _Pose _poseOf(int i, double t, FiresideState s) {
    final p = _Pose();
    final since = t - s.stepSince;
    final cheer = t < s.cheerUntil, gasp = t < s.gaspUntil;
    final talking = s.elderTalking;
    final w = _wob(t, i.toDouble());
    p.lean = 0;
    p.nod = 0;
    final spot = _spots[i].$1;
    // Everybody looks at the elder; the elder looks at the child who answers.
    final target = i == 0 ? _spots[2].$1 : _spots[0].$1;
    p.gx = ((target.dx - spot.dx) / 160).clamp(-1.0, 1.0) * 0.8 + w * 0.25;
    p.gy = i == 0 ? 0.35 : -0.3 + w * 0.2;
    p.turn = p.gx * 0.55;
    p.handL = const Offset(-36, -24);
    p.handR = const Offset(36, -24);
    if (i == 0) {
      p.mouth = talking ? _talk(t, 0) : 0;
      p.smile = 0.3 + (s.step == 3 && s.correct ? 0.7 : 0) + (s.step == 4 ? 0.8 : 0);
      p.brow = s.step == 2 ? 0.5 : 0.1;
      p.tilt = w * 0.05;
      if (talking) {
        p.nod = math.sin(t * 4.2) * 1.4;
        p.handR = Offset(46 + math.sin(t * 3.1) * 10, -64 + math.sin(t * 4.3) * 13);
        p.handL = Offset(-40 + math.sin(t * 2.2 + 1) * 4, -40 + math.sin(t * 3.4) * 6);
      }
      if (s.step == 3 && !s.correct) p.turn += math.sin(since * 6) * 0.35 * math.max(0.0, 1 - since / 1.8);
      if (cheer) {
        p.mouth = 0.5;
        p.smile = 1;
        p.handL = Offset(-4 - math.max(0.0, math.sin(t * 9)) * 7, -58);
        p.handR = Offset(4 + math.max(0.0, math.sin(t * 9)) * 7, -58);
      }
      p.stick = !cheer && !(talking && p.handR!.dy < -50);
    } else if (i == 1) {
      p.smile = 0.35;
      if (talking) p.nod = math.sin(t * 2.4 + 1) * 1.6;
      if (cheer) {
        p.smile = 1;
        p.mouth = 0.35 + 0.35 * math.max(0.0, math.sin(t * 13));
        p.squint = 0.7;
        p.handL = Offset(-4 - math.max(0.0, math.sin(t * 8)) * 7, -56);
        p.handR = Offset(4 + math.max(0.0, math.sin(t * 8)) * 7, -56);
        p.bounce = math.max(0.0, math.sin(t * 8)) * 3;
      } else if (s.step == 3 && !s.correct) {
        p.handR = const Offset(21, -78);
        p.turn += math.sin(since * 5) * 0.2 * math.max(0.0, 1 - since / 2);
        p.smile = -0.2;
      }
    } else {
      p.smile = 0.3 + 0.1 * math.sin(t * 0.5 + i);
      p.lean = 2 + (talking ? math.sin(t * 1.6 + i) * 1.6 : 0);
      if (talking) p.nod = math.max(0.0, math.sin(t * 1.9 + i * 2)) * 2.2;
      if (s.step == 2) {
        p.brow = 0.6;
        p.lean = 4;
        if (i == 2) p.handR = const Offset(8, -76);
        if (i == 4) p.handR = Offset(36, -128 + math.sin(t * 5) * 4);
      }
      if (cheer) {
        p.smile = 1;
        p.mouth = 0.45 + 0.4 * math.max(0.0, math.sin(t * 12 + i));
        p.squint = 0.5;
        p.bounce = math.max(0.0, math.sin(t * 9 + i * 1.3)) * 9;
        final cl = math.max(0.0, math.sin(t * 10 + i));
        p.handL = Offset(-3 - cl * 8, -56 - p.bounce * 0.3);
        p.handR = Offset(3 + cl * 8, -56 - p.bounce * 0.3);
      } else if (gasp) {
        p.mouth = 0.55;
        p.smile = -0.1;
        p.brow = 1;
        p.handL = const Offset(-9, -79);
        p.handR = const Offset(9, -79);
      }
      // The child who answers talks when the answer is given.
      if (i == 2 && s.answerText != null && t < s.answerUntil) {
        p.mouth = _talk(t, 5);
        p.smile = 0.4;
        p.handR = Offset(34 + math.sin(t * 3) * 6, -70 + math.sin(t * 4) * 8);
      }
      if (i == s.reactionBy && s.reaction != null && t < s.reactionUntil) {
        p.mouth = _talk(t, i * 3.0);
        p.smile = 0.5;
        p.brow = 0.4;
      }
    }
    return p;
  }

  double _talk(double t, double seed) => (0.2 + 0.8 * math.sin(t * 10 + seed).abs()) * (0.55 + 0.45 * math.sin(t * 3.1 + seed * 2));

  void _personAt(Canvas c, int i, double t, FiresideState s) {
    final spot = _spots[i];
    final look = _lookOf(i, s);
    final pose = _poseOf(i, t, s);
    _seated(c, spot.$1, spot.$2 * 1.2, look, pose, t, i);
  }

  // ── speech bubbles ──

  void _bubbles(Canvas c, double t, FiresideState s) {
    void bubble(int who, String text) {
      final spot = _spots[who];
      final top = spot.$1 + Offset(0, -spot.$2 * 1.2 * 124);
      final tp = TextPainter(text: TextSpan(text: text, style: const TextStyle(color: Color(0xFF2A150A), fontSize: 13, fontWeight: FontWeight.w800, height: 1.15)), textDirection: TextDirection.ltr, maxLines: 3)..layout(maxWidth: 130);
      final r = RRect.fromRectAndRadius(Rect.fromCenter(center: top - Offset(0, tp.height / 2 + 8), width: tp.width + 18, height: tp.height + 12), const Radius.circular(12));
      c.drawRRect(r.shift(const Offset(0, 2)), _f(Colors.black26));
      c.drawRRect(r, _f(const Color(0xFFFFF3DC)));
      c.drawPath(Path()..moveTo(top.dx - 5, r.bottom - 1)..lineTo(top.dx + 1, top.dy + 1)..lineTo(top.dx + 6, r.bottom - 1)..close(), _f(const Color(0xFFFFF3DC)));
      tp.paint(c, Offset(r.left + 9, r.top + 6));
    }

    if (s.reaction != null && t < s.reactionUntil) bubble(s.reactionBy, s.reaction!);
    if (s.answerText != null && t < s.answerUntil) bubble(2, s.answerText!);
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// Drawing people
// ═════════════════════════════════════════════════════════════════════════════

enum _Stand { still, walk, pound, drum }

/// A small standing (or seated) villager, for the life in the background.
void _standing(Canvas c, Offset base, double sc, double t, _Look look, {_Stand pose = _Stand.still, bool carry = false, bool seated = false, bool flip = false, double rate = 1}) {
  c.save();
  c.translate(base.dx, base.dy);
  c.scale(flip ? -sc : sc, sc);
  c.drawOval(Rect.fromCenter(center: const Offset(0, 1), width: 36, height: 8), _f(Colors.black.withValues(alpha: 0.3)));
  final step = pose == _Stand.walk ? math.sin(t * 5 * rate) : 0.0;
  final bob = pose == _Stand.walk ? math.sin(t * 10 * rate).abs() * 1.6 : 0.0;
  final skin = look.skin;
  final dark = _mix(look.cloth, Colors.black, 0.3);
  if (!seated) {
    // Legs.
    c.drawLine(const Offset(-4, -26), Offset(-4 + step * 7, -2), _s(skin, 5));
    c.drawLine(const Offset(4, -26), Offset(4 - step * 7, -2), _s(skin, 5));
  } else {
    c.drawOval(Rect.fromCenter(center: const Offset(0, -8), width: 40, height: 14), _f(dark));
  }
  // Body in a wrap or a dress.
  final body = Path()
    ..moveTo(-11, -64 - bob)
    ..quadraticBezierTo(-15, -40, -14, seated ? -12 : -18)
    ..lineTo(14, seated ? -12 : -18)
    ..quadraticBezierTo(15, -40, 11, -64 - bob)
    ..close();
  c.drawPath(body, _f(look.cloth));
  c.drawPath(Path()..moveTo(-12, -50 - bob)..lineTo(12, -46 - bob)..lineTo(12.5, -42 - bob)..lineTo(-12.5, -46 - bob)..close(), _f(look.accent));
  // Arms.
  final a = switch (pose) {
    _Stand.pound => math.sin(t * 3.4),
    _Stand.drum => math.sin(t * 7.5),
    _ => step,
  };
  if (pose == _Stand.pound) {
    // The pestle goes up and down in both hands.
    final hy = -52 + a * 14;
    c.drawLine(Offset(10, hy - 22), Offset(10, hy + 44), _s(const Color(0xFF7A4A28), 3.4));
    c.drawLine(const Offset(-9, -58), Offset(9, hy), _s(skin, 4));
    c.drawLine(const Offset(9, -58), Offset(10, hy), _s(skin, 4));
  } else if (pose == _Stand.drum) {
    c.drawLine(const Offset(-10, -58), Offset(-8, -26 - math.max(0.0, a) * 6), _s(skin, 4));
    c.drawLine(const Offset(10, -58), Offset(8, -26 - math.max(0.0, -a) * 6), _s(skin, 4));
  } else {
    c.drawLine(const Offset(-11, -60), Offset(-12 - step * 3, -38 - bob), _s(skin, 4));
    c.drawLine(const Offset(11, -60), Offset(12 + step * 3, -38 - bob), _s(skin, 4));
  }
  c.drawRect(const Rect.fromLTWH(-3, -70, 6, 7), _f(skin));
  // Head, hair or wrap.
  final head = Offset(0, -77 - bob);
  c.drawOval(Rect.fromCenter(center: head, width: 19, height: 22), _f(skin));
  if (look.wrap != null) {
    c.drawOval(Rect.fromCenter(center: head + const Offset(0, -6), width: 24, height: 15), _f(look.wrap!));
    c.drawCircle(head + const Offset(10, -10), 4, _f(look.wrap!));
  } else {
    c.drawArc(Rect.fromCenter(center: head + const Offset(0, -1), width: 20, height: 23), math.pi * 1.05, math.pi * 0.9, true, _f(look.hair));
    if (look.hairStyle == 3) {
      c.drawLine(head + const Offset(-9, -2), head + const Offset(-10, 14), _s(look.hair, 2.2));
      c.drawLine(head + const Offset(9, -2), head + const Offset(10, 14), _s(look.hair, 2.2));
    }
    if (look.hairStyle == 4) {
      c.drawCircle(head + const Offset(-9, -9), 6, _f(look.hair));
      c.drawCircle(head + const Offset(9, -9), 6, _f(look.hair));
    }
  }
  c.drawCircle(head + const Offset(-3.2, 0), 0.9, _f(const Color(0xFF111111)));
  c.drawCircle(head + const Offset(3.2, 0), 0.9, _f(const Color(0xFF111111)));
  if (carry) {
    // A clay water pot on the head, held with one hand.
    final pot = head + const Offset(0, -20);
    c.drawOval(Rect.fromCenter(center: pot, width: 22, height: 21), _f(const Color(0xFFB4532A)));
    c.drawOval(Rect.fromCenter(center: pot + const Offset(0, -9), width: 12, height: 5), _f(const Color(0xFF7A3A18)));
    c.drawLine(pot + const Offset(-8, -3), pot + const Offset(8, -3), _s(const Color(0xFFF2B01E), 1.4));
    c.drawLine(const Offset(11, -60), Offset(15, -88 - bob), _s(skin, 3.6));
  }
  c.restore();
}

/// A seated person drawn from the shoulders up in detail: a real face with eyes that look and blink, a mouth that talks, hands that gesture.
void _seated(Canvas c, Offset base, double sc, _Look look, _Pose p, double t, int id) {
  c.save();
  c.translate(base.dx, base.dy - p.bounce * sc);
  c.scale(sc);
  // Shadow on the ground.
  c.drawOval(Rect.fromCenter(center: const Offset(0, 2), width: 96, height: 18), _f(Colors.black.withValues(alpha: 0.28)));
  c.drawOval(Rect.fromCenter(center: const Offset(0, 2), width: 70, height: 11), _f(Colors.black.withValues(alpha: 0.2)));
  final bounds = const Rect.fromLTRB(-80, -190, 80, 20);
  c.saveLayer(bounds, Paint());
  _drawPerson(c, look, p, t, id);
  // The firelight falls on the side that faces the fire, only on the person.
  final toFire = FiresideArt._fire.dx - base.dx;
  final side = toFire >= 0 ? 1.0 : -1.0;
  c.drawRect(bounds, Paint()
    ..blendMode = BlendMode.srcATop
    ..shader = ui.Gradient.linear(Offset(side * 70, -60), Offset(-side * 70, -60), [const Color(0xFFFF8A1E).withValues(alpha: 0.5), const Color(0xFFFF8A1E).withValues(alpha: 0.12), const Color(0xFF2A2C6A).withValues(alpha: 0.22)], [0, 0.55, 1]));
  c.restore();
  c.restore();
}

void _drawPerson(Canvas c, _Look look, _Pose p, double t, int id) {
  final skin = look.skin;
  final skinDark = _mix(skin, Colors.black, 0.28);
  final skinLight = _mix(skin, Colors.white, 0.16);
  final cloth = look.cloth;
  final clothDark = _mix(cloth, Colors.black, 0.32);
  final breath = math.sin(t * 1.9 + id) * 0.8;
  final headS = look.child ? 1.06 : 1.0;
  final bodyS = look.child ? 0.86 : 1.0;

  // Crossed legs, in the cloth.
  c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTRB(-44, -22, 44, 0), const Radius.circular(11)), _f(clothDark));
  c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTRB(-38, -26, 12, -6), const Radius.circular(10)), _f(_mix(cloth, Colors.black, 0.18)));
  c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTRB(-8, -26, 40, -6), const Radius.circular(10)), _f(_mix(cloth, Colors.black, 0.1)));
  c.drawOval(const Rect.fromLTRB(-46, -9, -30, 1), _f(skin));
  c.drawOval(const Rect.fromLTRB(30, -9, 46, 1), _f(skin));

  // The body.
  c.save();
  c.translate(p.lean, 0);
  c.save();
  c.scale(bodyS, bodyS * (1 + breath * 0.012));
  final shoulderW = look.female && !look.elder ? 25.0 : 28.0;
  final torso = Path()
    ..moveTo(-shoulderW + 2, -58)
    ..quadraticBezierTo(-shoulderW - 3, -62, -shoulderW, -52)
    ..lineTo(-shoulderW + 4, -14)
    ..lineTo(shoulderW - 4, -14)
    ..lineTo(shoulderW, -52)
    ..quadraticBezierTo(shoulderW + 3, -62, shoulderW - 2, -58)
    ..quadraticBezierTo(0, -70, -shoulderW + 2, -58)
    ..close();
  c.drawPath(torso, _f(cloth));
  // Patterns on the cloth.
  c.save();
  c.clipPath(torso);
  switch (look.pattern) {
    case 1:
      // A kente band over the shoulder.
      const stripes = [Color(0xFFF2B01E), Color(0xFFD62828), Color(0xFF111111), Color(0xFF2E9B4F), Color(0xFFF2B01E)];
      for (var i = 0; i < stripes.length; i++) {
        c.drawLine(Offset(-34 + i * 5.0, -64), Offset(14 + i * 5.0, -14), _s(stripes[i], 5));
      }
    case 2:
      for (var y = -56.0; y < -14; y += 11) {
        for (var x = -26.0 + ((y ~/ 11) % 2) * 6; x < 28; x += 12) {
          c.drawCircle(Offset(x, y), 3.6, _f(look.accent.withValues(alpha: 0.85)));
          c.drawCircle(Offset(x, y), 1.6, _f(clothDark));
        }
      }
    case 3:
      for (var x = -28.0; x < 30; x += 8) {
        c.drawLine(Offset(x, -64), Offset(x, -14), _s(look.accent.withValues(alpha: 0.7), 1.6));
      }
      for (var y = -60.0; y < -14; y += 8) {
        c.drawLine(Offset(-30, y), Offset(30, y), _s(look.accent.withValues(alpha: 0.7), 1.6));
      }
    default:
      c.drawLine(const Offset(-24, -52), const Offset(24, -52), _s(look.accent.withValues(alpha: 0.9), 3));
  }
  // Folds, and a dark side.
  c.drawLine(const Offset(-8, -48), const Offset(-12, -16), _s(Colors.black.withValues(alpha: 0.18), 1.6));
  c.drawLine(const Offset(10, -46), const Offset(14, -18), _s(Colors.black.withValues(alpha: 0.18), 1.6));
  c.drawRect(const Rect.fromLTRB(14, -64, 34, -12), _f(Colors.black.withValues(alpha: 0.12)));
  c.restore();
  // Neck and collar.
  c.drawRect(const Rect.fromLTRB(-6.5, -74, 6.5, -58), _f(skinDark));
  c.drawPath(Path()..moveTo(-9, -66)..quadraticBezierTo(0, -57, 9, -66)..quadraticBezierTo(0, -60, -9, -66), _f(skin));
  if (look.hairStyle == 1 || look.elder && !look.female) {
    c.drawArc(const Rect.fromLTRB(-11, -70, 11, -56), 0.1, math.pi - 0.2, false, _s(look.accent, 2.2));
  }
  c.restore();

  // Arms and hands: two bones, so the elbows bend the right way.
  final sleeve = cloth;
  _arm(c, Offset(-shoulderW * bodyS + 2, -56 * bodyS), p.handL ?? const Offset(-36, -24), 25 * bodyS, 23 * bodyS, -1, sleeve, skin, 9 * bodyS);
  _arm(c, Offset(shoulderW * bodyS - 2, -56 * bodyS), p.handR ?? const Offset(36, -24), 25 * bodyS, 23 * bodyS, 1, sleeve, skin, 9 * bodyS);
  if (p.stick) {
    // The elder holds a carved walking stick.
    c.drawLine(const Offset(48, -4), const Offset(46, -92), _s(const Color(0xFF5B3A22), 4));
    c.drawLine(const Offset(47, -4), const Offset(45, -92), _s(const Color(0xFF8A5A33).withValues(alpha: 0.7), 1.4));
    c.drawCircle(const Offset(46, -94), 5, _f(const Color(0xFFF2B01E)));
  }
  c.restore();

  // The head: it turns, nods and tilts, and has a face.
  final hx = p.lean * 1.2 + p.turn * 4;
  final hy = -88 + p.nod - breath * 0.4;
  c.save();
  c.translate(hx, hy);
  c.rotate(p.tilt);
  c.scale(headS);
  _drawHead(c, look, p, t, id, skin, skinDark, skinLight);
  c.restore();
}

void _arm(Canvas c, Offset shoulder, Offset hand, double a, double b, double outward, Color sleeve, Color skin, double thick) {
  final v = hand - shoulder;
  final dist = v.distance;
  final dir = dist == 0 ? const Offset(0, 1) : v / dist;
  final d = dist.clamp((a - b).abs() + 0.5, a + b - 0.5).toDouble();
  final x = (a * a - b * b + d * d) / (2 * d);
  final hh = math.sqrt(math.max(0.0, a * a - x * x));
  var perp = Offset(-dir.dy, dir.dx);
  if (perp.dx * outward < 0) perp = -perp;
  final elbow = shoulder + dir * x + perp * hh;
  final h = shoulder + dir * d;
  c.drawLine(shoulder, elbow, _s(sleeve, thick));
  c.drawLine(shoulder, elbow, _s(_mix(sleeve, Colors.black, 0.2), thick * 0.35));
  c.drawLine(elbow, h, _s(skin, thick * 0.78));
  c.drawLine(elbow, h, _s(_mix(skin, Colors.black, 0.22), thick * 0.22));
  c.drawCircle(elbow, thick * 0.55, _f(sleeve));
  // The hand, with a thumb.
  c.drawOval(Rect.fromCenter(center: h, width: thick * 1.0, height: thick * 1.15), _f(skin));
  c.drawCircle(h + Offset(outward * -thick * 0.45, -thick * 0.1), thick * 0.28, _f(skin));
}

void _drawHead(Canvas c, _Look look, _Pose p, double t, int id, Color skin, Color skinDark, Color skinLight) {
  final hairC = look.hair;
  // Hair behind the head.
  if (look.hairStyle == 3 || look.hairStyle == 4) {
    c.drawOval(Rect.fromCenter(center: const Offset(0, -2), width: 38, height: 40), _f(hairC));
  }
  if (look.hairStyle == 4) {
    c.drawCircle(const Offset(-15, -15), 9.5, _f(hairC));
    c.drawCircle(const Offset(15, -15), 9.5, _f(hairC));
  }
  // Ears, then the head itself with a jaw.
  c.drawOval(Rect.fromCenter(center: const Offset(-16.5, 2), width: 6, height: 10), _f(skinDark));
  c.drawOval(Rect.fromCenter(center: const Offset(16.5, 2), width: 6, height: 10), _f(skinDark));
  final face = Path()
    ..moveTo(0, -20)
    ..cubicTo(13, -20, 17, -9, 16, 2)
    ..cubicTo(15, 13, 8, 20, 0, 20)
    ..cubicTo(-8, 20, -15, 13, -16, 2)
    ..cubicTo(-17, -9, -13, -20, 0, -20)
    ..close();
  c.drawPath(face, Paint()..shader = ui.Gradient.radial(const Offset(-4, -6), 28, [skinLight, skin, skinDark], [0, 0.55, 1]));
  if (look.elder) {
    // Lines of a long life: the forehead, round the eyes, and the smile.
    final w = _s(skinDark.withValues(alpha: 0.5), 0.8);
    c.drawArc(const Rect.fromLTRB(-9, -15, 9, -9), math.pi * 1.1, math.pi * 0.8, false, w);
    c.drawArc(const Rect.fromLTRB(-8, -12.5, 8, -7), math.pi * 1.1, math.pi * 0.8, false, w);
    c.drawLine(const Offset(-14, -2), const Offset(-11, -1), w);
    c.drawLine(const Offset(14, -2), const Offset(11, -1), w);
    c.drawArc(const Rect.fromLTRB(-11, 2, -4, 14), 2.2, 1.4, false, w);
    c.drawArc(const Rect.fromLTRB(4, 2, 11, 14), -0.4, 1.4, false, w);
  }
  // Hair on top.
  switch (look.hairStyle) {
    case 0:
      for (var i = 0; i < 16; i++) {
        final a = math.pi * (1.02 + 0.96 * i / 15);
        c.drawCircle(Offset(math.cos(a) * 14.5, -3 + math.sin(a) * 17.5), 4.3, _f(hairC));
      }
      c.drawArc(const Rect.fromLTRB(-15, -21, 15, 0), math.pi, math.pi, true, _f(hairC));
    case 1:
      // A bald head with a woven cap, white tufts at the ears, and a white beard.
      c.drawPath(Path()..moveTo(-15, -11)..quadraticBezierTo(0, -30, 15, -11)..lineTo(13, -6)..quadraticBezierTo(0, -12, -13, -6)..close(), _f(look.accent));
      c.drawLine(const Offset(-11, -10), const Offset(11, -10), _s(const Color(0xFFD62828), 1.4));
      c.drawCircle(const Offset(-16, -1), 3, _f(hairC));
      c.drawCircle(const Offset(16, -1), 3, _f(hairC));
      c.drawPath(Path()..moveTo(-13, 6)..quadraticBezierTo(-12, 22, 0, 26)..quadraticBezierTo(12, 22, 13, 6)..quadraticBezierTo(8, 13, 0, 12)..quadraticBezierTo(-8, 13, -13, 6)..close(), _f(const Color(0xFFF3F4F6)));
      c.drawPath(Path()..moveTo(-7, 8)..quadraticBezierTo(0, 6, 7, 8)..quadraticBezierTo(0, 10.5, -7, 8), _f(const Color(0xFFE5E7EB)));
    case 2:
      // A head wrap tied in a bow.
      final wc = look.wrap ?? look.cloth;
      c.drawPath(Path()..moveTo(-17, -4)..quadraticBezierTo(-20, -27, 0, -29)..quadraticBezierTo(20, -27, 17, -4)..quadraticBezierTo(0, -14, -17, -4)..close(), _f(wc));
      c.drawArc(const Rect.fromLTRB(-16, -26, 16, -6), 3.4, 2.5, false, _s(_mix(wc, Colors.black, 0.3), 1.4));
      c.drawArc(const Rect.fromLTRB(-13, -24, 13, -4), 3.6, 2.2, false, _s(_mix(wc, Colors.white, 0.3), 1.2));
      c.drawPath(Path()..moveTo(11, -22)..quadraticBezierTo(27, -34, 25, -19)..quadraticBezierTo(18, -18, 11, -22), _f(_mix(wc, Colors.white, 0.1)));
      c.drawPath(Path()..moveTo(11, -22)..quadraticBezierTo(24, -12, 27, -26)..quadraticBezierTo(18, -22, 11, -22), _f(_mix(wc, Colors.black, 0.2)));
      c.drawCircle(const Offset(11, -21), 3, _f(look.accent));
    case 3:
      // Cornrows going back, and braids with beads.
      c.drawArc(const Rect.fromLTRB(-16, -21, 16, 2), math.pi * 1.02, math.pi * 0.96, true, _f(hairC));
      for (var i = -3; i <= 3; i++) {
        c.drawLine(Offset(i * 3.6, -19 + (i.abs() * 0.8)), Offset(i * 4.6, -4), _s(_mix(hairC, Colors.white, 0.18), 0.9));
      }
      for (final x in const [-17.0, 17.0]) {
        c.drawLine(Offset(x, 0), Offset(x * 1.12, 22), _s(hairC, 4.5));
        for (var k = 0; k < 3; k++) {
          c.drawCircle(Offset(x * (1.0 + k * 0.04), 7 + k * 6.5), 1.8, _f(look.accent));
        }
      }
    case 4:
      c.drawArc(const Rect.fromLTRB(-16, -21, 16, 1), math.pi * 1.02, math.pi * 0.96, true, _f(hairC));
      c.drawLine(const Offset(0, -20), const Offset(0, -14), _s(_mix(hairC, Colors.white, 0.25), 1));
    default:
      c.drawArc(const Rect.fromLTRB(-16.5, -21, 16.5, 1), math.pi * 1.04, math.pi * 0.92, true, _f(hairC));
  }

  // Cheeks and the shape of the nose.
  final glow = (p.smile.clamp(0.0, 1.0)) * 0.4 + 0.1;
  c.drawOval(Rect.fromCenter(center: const Offset(-9.5, 6), width: 8, height: 5), _f(const Color(0xFFE5645B).withValues(alpha: glow)));
  c.drawOval(Rect.fromCenter(center: const Offset(9.5, 6), width: 8, height: 5), _f(const Color(0xFFE5645B).withValues(alpha: glow)));
  final tx = p.turn * 2.4;
  c.drawPath(Path()..moveTo(tx - 0.6, -2)..quadraticBezierTo(tx - 3.4, 6, tx - 2.6, 7.4)..quadraticBezierTo(tx, 8.8, tx + 2.6, 7.4), _s(skinDark.withValues(alpha: 0.75), 1.1));
  c.drawCircle(Offset(tx - 1.5, 7.2), 0.7, _f(skinDark));
  c.drawCircle(Offset(tx + 1.5, 7.2), 0.7, _f(skinDark));

  // Eyes: they look at whoever is talking, and blink.
  final blinkPhase = (t * 0.33 + id * 0.37) % 1.0;
  final blink = blinkPhase > 0.965 ? 1.0 : 0.0;
  final open = (1 - blink) * (1 - p.squint * 0.6) * (p.brow > 0.8 ? 1.25 : 1.0);
  for (final side in const [-1.0, 1.0]) {
    final ex = side * 6.4 + p.turn * 2 * (side > 0 ? 0.7 : 1.0);
    final ey = -3.0;
    final rx = 3.5, ry = 2.5 * open;
    if (open > 0.12) {
      c.drawOval(Rect.fromCenter(center: Offset(ex, ey), width: rx * 2, height: math.max(0.6, ry * 2)), _f(Colors.white.withValues(alpha: 0.96)));
      final ix = ex + p.gx * 1.5, iy = ey + p.gy * 0.7;
      c.save();
      c.clipPath(Path()..addOval(Rect.fromCenter(center: Offset(ex, ey), width: rx * 2, height: math.max(0.6, ry * 2))));
      c.drawCircle(Offset(ix, iy), 2.1, _f(const Color(0xFF3B2314)));
      c.drawCircle(Offset(ix, iy), 1.05, _f(Colors.black));
      c.drawCircle(Offset(ix - 0.7, iy - 0.7), 0.55, _f(Colors.white));
      c.restore();
    }
    // The lid, lashes for the women, and the brow.
    final lid = _s(look.female ? const Color(0xFF1A0F08) : skinDark.withValues(alpha: 0.9), look.female ? 1.5 : 1.1);
    c.drawArc(Rect.fromCenter(center: Offset(ex, ey + (open < 0.15 ? 0.8 : 0)), width: rx * 2.1, height: math.max(1.2, ry * 2.2)), math.pi * 1.05, math.pi * 0.9, false, lid);
    final by = -9.2 - p.brow * 2.2;
    final inner = Offset(ex - side * 3.6, by - (p.brow < 0 ? -p.brow * 1.6 : 0) + 0.4);
    final outer = Offset(ex + side * 3.6, by - 0.6 - (p.brow > 0 ? p.brow * 0.6 : 0));
    c.drawLine(inner, outer, _s(look.elder ? const Color(0xFFD1D5DB) : _mix(look.hair, Colors.black, 0.2), 1.7));
  }

  // The mouth: closed and smiling, or open and talking, or a big laugh.
  final my = 11.5;
  final open2 = p.mouth.clamp(0.0, 1.0);
  final lipC = look.female ? const Color(0xFF8B2C3B) : _mix(skinDark, const Color(0xFF5A1F1F), 0.6);
  if (open2 > 0.06) {
    final mw = 5.0 + p.smile.clamp(0.0, 1.0) * 2.2;
    final mh = 1.2 + open2 * 6.5;
    final mouth = Path()
      ..moveTo(-mw, my)
      ..quadraticBezierTo(0, my + mh * 0.2 - p.smile * 1.5, mw, my)
      ..quadraticBezierTo(0, my + mh * 1.5 + p.smile * 1.5, -mw, my)
      ..close();
    c.drawPath(mouth, _f(const Color(0xFF3A0F10)));
    c.save();
    c.clipPath(mouth);
    c.drawRect(Rect.fromLTWH(-mw, my - 0.5, mw * 2, 2.2), _f(Colors.white.withValues(alpha: 0.95)));
    c.drawOval(Rect.fromCenter(center: Offset(0, my + mh * 1.1), width: mw * 1.4, height: mh * 0.9), _f(const Color(0xFFD9625B)));
    c.restore();
    c.drawPath(mouth, _s(lipC, 1.1));
  } else {
    final sm = p.smile;
    c.drawPath(Path()..moveTo(-5.2, my - sm * 0.8)..quadraticBezierTo(0, my + 1.6 + sm * 2.8, 5.2, my - sm * 0.8), _s(lipC, 1.5));
    if (sm > 0.6) c.drawPath(Path()..moveTo(-4.6, my + 0.3)..quadraticBezierTo(0, my + 3.6 + sm * 1.4, 4.6, my + 0.3)..quadraticBezierTo(0, my + 2, -4.6, my + 0.3), _f(Colors.white.withValues(alpha: 0.9)));
  }
  if (p.smile > 0.2) {
    // Dimples where the smile ends.
    c.drawArc(const Rect.fromLTRB(-10, 8, -6, 14), -1.2, 2.2, false, _s(skinDark.withValues(alpha: 0.5), 0.8));
    c.drawArc(const Rect.fromLTRB(6, 8, 10, 14), math.pi - 1.0, 2.2, false, _s(skinDark.withValues(alpha: 0.5), 0.8));
  }
  if (look.female && look.hairStyle != 2) {
    c.drawCircle(const Offset(-16.5, 8), 1.7, _f(look.accent));
    c.drawCircle(const Offset(16.5, 8), 1.7, _f(look.accent));
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// The still part: sky, hills, huts, the baobab, the ground
// ═════════════════════════════════════════════════════════════════════════════

class _Hut {
  const _Hut(this.x, this.y, this.r, this.h, this.roof);
  final double x, y, r, h, roof;
}

const List<_Hut> _huts = [
  _Hut(78, 424, 48, 44, 56),
  _Hut(214, 396, 34, 34, 42),
  _Hut(442, 452, 56, 50, 64),
];

ui.Picture _record(Size size) {
  final rec = ui.PictureRecorder();
  final c = Canvas(rec);
  final u = math.min(size.width / _w, size.height / _h);
  final full = Rect.fromLTWH(0, 0, size.width, size.height);
  // The sky fills the whole screen: deep blue at the top, purple, and a last orange glow along the hills.
  c.drawRect(full, Paint()..shader = ui.Gradient.linear(Offset.zero, Offset(0, size.height * 0.46), const [Color(0xFF05081F), Color(0xFF14174A), Color(0xFF3A2A62), Color(0xFF8A4A5E), Color(0xFFE08A45)], const [0, 0.45, 0.72, 0.92, 1]));
  c.save();
  c.translate((size.width - _w * u) / 2, (size.height - _h * u) / 2);
  c.scale(u);
  final r = math.Random(8);
  for (var i = 0; i < 120; i++) {
    c.drawCircle(Offset(r.nextDouble() * _w * 1.4 - _w * 0.2, r.nextDouble() * 330 - 40), 0.5 + r.nextDouble() * 0.9, _f(Colors.white.withValues(alpha: 0.2 + r.nextDouble() * 0.5)));
  }
  // The Milky Way, faint.
  c.save();
  c.translate(200, 120);
  c.rotate(-0.5);
  c.drawOval(const Rect.fromLTRB(-230, -26, 230, 26), Paint()..shader = ui.Gradient.radial(Offset.zero, 230, [const Color(0x22B8B0FF), Colors.transparent]));
  c.restore();
  // The moon, with its glow.
  c.drawCircle(const Offset(332, 150), 58, Paint()..shader = ui.Gradient.radial(const Offset(332, 150), 58, [const Color(0x55FFF3C4), Colors.transparent]));
  c.drawCircle(const Offset(332, 150), 24, _f(const Color(0xFFFFF4D2)));
  c.drawCircle(const Offset(324, 144), 5, _f(const Color(0x22B89A5A)));
  c.drawCircle(const Offset(340, 158), 3.4, _f(const Color(0x22B89A5A)));
  c.drawCircle(const Offset(338, 140), 2.4, _f(const Color(0x22B89A5A)));
  // Hills and the far acacias.
  for (var l = 0; l < 3; l++) {
    final path = Path()..moveTo(-60, 420);
    for (var x = -60.0; x <= _w + 60; x += 8) {
      path.lineTo(x, 372 + l * 12 + math.sin(x / (60 + l * 20) + l * 2) * (14 - l * 3) + math.sin(x / 23 + l) * 3);
    }
    path.lineTo(_w + 60, 470);
    path.lineTo(-60, 470);
    path.close();
    c.drawPath(path, _f([const Color(0xFF2B2658), const Color(0xFF211E4A), const Color(0xFF181638)][l]));
  }
  for (final x in const [30.0, 140.0, 262.0, 360.0]) {
    final y = 384.0 + (x % 11);
    c.drawLine(Offset(x, y), Offset(x - 2, y - 24), _s(const Color(0xFF110F2A), 2.4));
    c.drawOval(Rect.fromCenter(center: Offset(x - 2, y - 27), width: 46, height: 11), _f(const Color(0xFF110F2A)));
    c.drawOval(Rect.fromCenter(center: Offset(x - 12, y - 24), width: 24, height: 8), _f(const Color(0xFF110F2A)));
  }
  // Lights of villages far away.
  for (var i = 0; i < 9; i++) {
    c.drawCircle(Offset(20 + i * 52.0 + (i % 3) * 7, 400 + (i % 4) * 5.0), 1.2, _f(const Color(0xFFFFC66B).withValues(alpha: 0.8)));
  }
  // The ground: earth in the dark, with dust, pebbles and tufts of grass.
  c.drawRect(Rect.fromLTRB(-200, 412, _w + 200, _h + 400), Paint()..shader = ui.Gradient.linear(const Offset(0, 412), const Offset(0, 900), const [Color(0xFF3B2B34), Color(0xFF3A2824), Color(0xFF241714)], const [0, 0.45, 1]));
  final g = math.Random(21);
  for (var i = 0; i < 260; i++) {
    final x = g.nextDouble() * _w, y = 420 + g.nextDouble() * 480;
    c.drawOval(Rect.fromCenter(center: Offset(x, y), width: 1.5 + g.nextDouble() * 4 * (y / 900 + 0.4), height: 1 + g.nextDouble() * 2 * (y / 900 + 0.4)), _f((g.nextBool() ? Colors.white : Colors.black).withValues(alpha: 0.06 + g.nextDouble() * 0.06)));
  }
  // A packed circle of earth where the family sits.
  c.save();
  c.translate(225, 590);
  c.scale(1, 0.34);
  c.drawCircle(Offset.zero, 250, Paint()..shader = ui.Gradient.radial(Offset.zero, 250, [const Color(0xFF6B4A3A), const Color(0xFF55382E), const Color(0x0055382E)], [0, 0.8, 1]));
  c.restore();
  for (var i = 0; i < 40; i++) {
    final x = g.nextDouble() * _w, y = 640 + g.nextDouble() * 260;
    final h = 6 + g.nextDouble() * 10;
    final col = _mix(const Color(0xFF3A5A34), const Color(0xFF1F3320), g.nextDouble());
    for (var b = -1; b <= 1; b++) {
      c.drawLine(Offset(x + b * 2, y), Offset(x + b * 5, y - h + b.abs() * 3), _s(col, 1.3));
    }
  }
  // The baobab: a fat bottle trunk, thick branches like roots in the sky, and sparse leaves and hanging fruit.
  _baobab(c);
  for (final h in _huts) {
    _hut(c, h);
  }
  // A granary on stilts and a fence of stakes.
  _granary(c, const Offset(300, 440));
  for (var x = 118.0; x < 190; x += 11) {
    c.drawLine(Offset(x, 452 + (x % 3)), Offset(x + 1, 436 + (x % 4)), _s(const Color(0xFF3A2A22), 2.4));
  }
  c.drawLine(const Offset(116, 442), const Offset(190, 444), _s(const Color(0xFF4A3528), 1.6));
  c.restore();
  return rec.endRecording();
}

void _baobab(Canvas c) {
  const bx = 392.0, by = 462.0;
  final trunk = Path()
    ..moveTo(bx - 34, by)
    ..cubicTo(bx - 38, by - 40, bx - 22, by - 80, bx - 18, by - 130)
    ..lineTo(bx + 18, by - 130)
    ..cubicTo(bx + 24, by - 80, bx + 40, by - 40, bx + 36, by)
    ..close();
  c.drawPath(trunk, Paint()..shader = ui.Gradient.linear(Offset(bx - 38, 0), Offset(bx + 38, 0), const [Color(0xFF4A3F4A), Color(0xFF6B5A58), Color(0xFF3A3040)], const [0, 0.5, 1]));
  final r = math.Random(4);
  for (var i = 0; i < 30; i++) {
    final x = bx - 28 + r.nextDouble() * 56, y = by - r.nextDouble() * 126;
    c.drawLine(Offset(x, y), Offset(x + r.nextDouble() * 3 - 1.5, y + 8 + r.nextDouble() * 12), _s(Colors.black.withValues(alpha: 0.18), 1.1));
  }
  // Branches.
  const dirs = [(-1.0, 0.0), (-0.65, 0.6), (-0.2, 0.95), (0.25, 0.95), (0.7, 0.6), (1.0, 0.1)];
  for (final d in dirs) {
    final p0 = Offset(bx + d.$1 * 12, by - 126);
    final p1 = p0 + Offset(d.$1 * 52, -d.$2 * 46 - 8);
    final p2 = p1 + Offset(d.$1 * 42, -d.$2 * 34 + 4);
    c.drawPath(Path()..moveTo(p0.dx, p0.dy)..quadraticBezierTo(p1.dx, p1.dy, p2.dx, p2.dy), _s(const Color(0xFF4A3F4A), 8));
    for (var k = 0; k < 6; k++) {
      final lp = p2 + Offset(r.nextDouble() * 36 - 18, r.nextDouble() * 18 - 14);
      c.drawCircle(lp, 8 + r.nextDouble() * 7, _f(_mix(const Color(0xFF2A5A3A), const Color(0xFF16381F), r.nextDouble()).withValues(alpha: 0.92)));
    }
    c.drawLine(p2 + const Offset(0, 8), p2 + const Offset(0, 22), _s(const Color(0xFF3A2A22), 1.2));
    c.drawOval(Rect.fromCenter(center: p2 + const Offset(0, 28), width: 7, height: 13), _f(const Color(0xFF6B5A3A)));
  }
}

void _hut(Canvas c, _Hut h) {
  final x = h.x, y = h.y, r = h.r, ht = h.h;
  c.drawOval(Rect.fromCenter(center: Offset(x, y + 2), width: r * 2.8, height: r * 0.5), _f(Colors.black.withValues(alpha: 0.3)));
  // Mud walls with a lit side and a shadow side.
  final wall = Path()
    ..moveTo(x - r, y - ht)
    ..lineTo(x - r, y)
    ..quadraticBezierTo(x, y + r * 0.22, x + r, y)
    ..lineTo(x + r, y - ht)
    ..close();
  c.drawPath(wall, Paint()..shader = ui.Gradient.linear(Offset(x - r, 0), Offset(x + r, 0), const [Color(0xFF8A5A48), Color(0xFF6B4034), Color(0xFF3F2530)], const [0, 0.5, 1]));
  final rr = math.Random((x * 7).round());
  c.save();
  c.clipPath(wall);
  for (var i = 0; i < 40; i++) {
    final px = x - r + rr.nextDouble() * r * 2, py = y - ht + rr.nextDouble() * ht;
    c.drawLine(Offset(px, py), Offset(px + 4 + rr.nextDouble() * 5, py + rr.nextDouble() * 2 - 1), _s(Colors.black.withValues(alpha: 0.14), 1));
  }
  // A painted band of triangles and a zigzag under the thatch.
  c.drawRect(Rect.fromLTWH(x - r, y - ht + 5, r * 2, 7), _f(const Color(0xFFE9D8B4).withValues(alpha: 0.75)));
  for (var k = 0; k < (r / 5).floor(); k++) {
    final tx = x - r + 2 + k * 10;
    c.drawPath(Path()..moveTo(tx, y - ht + 12)..lineTo(tx + 5, y - ht + 20)..lineTo(tx + 10, y - ht + 12)..close(), _f(const Color(0xFFB4532A).withValues(alpha: 0.85)));
  }
  final zig = Path()..moveTo(x - r, y - 8);
  for (var k = 0; k <= (r * 2 / 6).floor(); k++) {
    zig.lineTo(x - r + k * 6, y - 8 + (k.isEven ? 0 : -5));
  }
  c.drawPath(zig, _s(const Color(0xFFE9D8B4).withValues(alpha: 0.7), 1.6));
  c.restore();
  // The doorway (the glow is painted each frame), and a small round window.
  c.drawPath(Path()..moveTo(x + r * 0.1 - r * 0.28, y + 1)..lineTo(x + r * 0.1 - r * 0.28, y - ht * 0.55)..quadraticBezierTo(x + r * 0.1, y - ht * 0.82, x + r * 0.1 + r * 0.28, y - ht * 0.55)..lineTo(x + r * 0.1 + r * 0.28, y + 1)..close(), _f(const Color(0xFF1A1018)));
  c.drawCircle(Offset(x - r * 0.62, y - ht * 0.5), r * 0.1, _f(const Color(0xFF1A1018)));
  // The thatched roof: a cone of straw, laid in rows, with a fringe at the eaves.
  final apex = Offset(x, y - ht - h.roof);
  final eaveL = Offset(x - r * 1.38, y - ht + 4), eaveR = Offset(x + r * 1.38, y - ht + 4);
  final roof = Path()
    ..moveTo(eaveL.dx, eaveL.dy)
    ..quadraticBezierTo(x - r * 0.5, y - ht - h.roof * 0.55, apex.dx, apex.dy)
    ..quadraticBezierTo(x + r * 0.5, y - ht - h.roof * 0.55, eaveR.dx, eaveR.dy)
    ..quadraticBezierTo(x, y - ht + r * 0.34, eaveL.dx, eaveL.dy)
    ..close();
  c.drawPath(roof, Paint()..shader = ui.Gradient.linear(Offset(x - r * 1.4, 0), Offset(x + r * 1.4, 0), const [Color(0xFFA2793E), Color(0xFF7A5A2E), Color(0xFF46341F)], const [0, 0.5, 1]));
  c.save();
  c.clipPath(roof);
  for (var i = 0; i < 70; i++) {
    final t = i / 69;
    final ex = eaveL.dx + (eaveR.dx - eaveL.dx) * t;
    final ey = eaveL.dy + math.sin(t * math.pi) * r * 0.3;
    c.drawLine(apex + Offset((rr.nextDouble() - 0.5) * 3, 0), Offset(ex, ey), _s((rr.nextBool() ? Colors.black : const Color(0xFFE2C070)).withValues(alpha: 0.16), 0.9));
  }
  for (var k = 1; k < 5; k++) {
    final fy = y - ht - h.roof + h.roof * k / 4.6;
    final wdt = r * 1.38 * k / 4.6;
    c.drawPath(Path()..moveTo(x - wdt, fy + 2)..quadraticBezierTo(x, fy + 7 + k * 1.5, x + wdt, fy + 2), _s(Colors.black.withValues(alpha: 0.22), 1.2));
  }
  c.restore();
  for (var i = 0; i < 46; i++) {
    final t = i / 45;
    final ex = eaveL.dx + (eaveR.dx - eaveL.dx) * t;
    final ey = eaveL.dy + math.sin(t * math.pi) * r * 0.3;
    c.drawLine(Offset(ex, ey), Offset(ex + (rr.nextDouble() - 0.5) * 2, ey + 3 + rr.nextDouble() * 4), _s(const Color(0xFF8A6A38), 1.1));
  }
  c.drawPath(Path()..moveTo(apex.dx - 2.5, apex.dy + 4)..lineTo(apex.dx, apex.dy - 7)..lineTo(apex.dx + 2.5, apex.dy + 4)..close(), _f(const Color(0xFF5A4424)));
}

void _granary(Canvas c, Offset b) {
  for (final dx in const [-12.0, 12.0]) {
    c.drawLine(b + Offset(dx, 0), b + Offset(dx, -16), _s(const Color(0xFF3A2A22), 3));
  }
  c.drawOval(Rect.fromCenter(center: b + const Offset(0, -26), width: 36, height: 24), _f(const Color(0xFF6B4A38)));
  c.drawPath(Path()..moveTo(b.dx - 24, b.dy - 30)..lineTo(b.dx, b.dy - 54)..lineTo(b.dx + 24, b.dy - 30)..quadraticBezierTo(b.dx, b.dy - 24, b.dx - 24, b.dy - 30)..close(), _f(const Color(0xFF7A5A2E)));
}
