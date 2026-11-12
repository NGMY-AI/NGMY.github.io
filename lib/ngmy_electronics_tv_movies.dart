import 'dart:math' as math;

import 'package:flutter/material.dart';

// The adverts of the lab TV: each one is a little movie of about ten seconds with four scenes (what it is, what you do, what you get, and
// the end card), drawn live with no video files. paintNgmyTvAd draws one frame of advert [ad] at the running time [t].

typedef _Art = void Function(Canvas c, Size s, double lt);

class _Scene {
  const _Scene(this.head, this.tag, this.art);
  final String head, tag;
  final _Art art;
}

const double _sceneLen = 2.5;

void _txt(Canvas c, String text, Offset o, double size, Color col, {double width = 0, bool left = false, bool bold = true}) {
  TextPainter make(double v) => TextPainter(
        text: TextSpan(text: text, style: TextStyle(color: col, fontSize: v, fontWeight: bold ? FontWeight.w900 : FontWeight.w600, letterSpacing: 0.4)),
        textDirection: TextDirection.ltr,
        maxLines: 1,
      )..layout();
  var tp = make(size);
  if (width > 0 && tp.width > width) tp = make(size * width / tp.width);
  tp.paint(c, Offset(left ? o.dx : o.dx - tp.width / 2, o.dy));
}

double _k(double t, double from, double len) => ((t - from) / len).clamp(0.0, 1.0);

void _circ(Canvas c, Offset o, double r, Color col) => c.drawCircle(o, r, Paint()..color = col);

void _rr(Canvas c, Rect r, double rad, Color col) => c.drawRRect(RRect.fromRectAndRadius(r, Radius.circular(rad)), Paint()..color = col);

void _line(Canvas c, Offset a, Offset b, double w, Color col) => c.drawLine(a, b, Paint()..strokeWidth = w..strokeCap = StrokeCap.round..color = col);

/// Something that pops in with a little bounce at [from] seconds.
void _pop(Canvas c, Offset at, double lt, double from, void Function() draw) {
  final k = _k(lt, from, 0.5);
  if (k <= 0) return;
  c.save();
  c.translate(at.dx, at.dy);
  c.scale(Curves.elasticOut.transform(k).clamp(0.01, 1.25));
  c.translate(-at.dx, -at.dy);
  draw();
  c.restore();
}

/// The movie: the background, the scene that is on now (sliding in at its start), its headline, the progress dots, and on the last scene the end banner.
void _movie(Canvas c, Size s, double t, List<Color> g, List<_Scene> scenes) {
  final w = s.width, h = s.height;
  final total = scenes.length * _sceneLen;
  final lt = t % total;
  final i = (lt / _sceneLen).floor().clamp(0, scenes.length - 1);
  final st = lt - i * _sceneLen;
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: g).createShader(r));
  for (var n = 0; n < 3; n++) {
    c.drawCircle(Offset(w * (0.15 + 0.35 * n + 0.05 * math.sin(t * 0.6 + n)), h * (0.28 + 0.1 * math.cos(t * 0.5 + n))), h * (0.3 + 0.05 * n), Paint()..color = Colors.white.withValues(alpha: 0.05));
  }
  final k = Curves.easeOutCubic.transform(_k(st, 0, 0.4));
  final sc = scenes[i];
  c.save();
  c.clipRect(r);
  c.translate((1 - k) * w * 0.3, 0);
  sc.art(c, s, st);
  c.restore();
  // The name in the corner, the headline and the line under it.
  final pill = RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.04, h * 0.04, h * 0.3, h * 0.1), Radius.circular(h * 0.05));
  c.drawRRect(pill, Paint()..color = Colors.black.withValues(alpha: 0.35));
  _txt(c, 'NGMY', Offset(pill.left + h * 0.04, pill.top + h * 0.012), h * 0.07, Colors.white, left: true);
  final slide = (1 - k) * h * 0.05;
  _txt(c, sc.head, Offset(w / 2, h * 0.64 + slide), h * 0.095, Colors.white.withValues(alpha: k), width: w * 0.92);
  _txt(c, sc.tag, Offset(w / 2, h * 0.76 + slide), h * 0.05, Colors.white.withValues(alpha: 0.85 * k), width: w * 0.92, bold: false);
  // Progress dots; on the last scene the end banner.
  if (i == scenes.length - 1) {
    final b = Rect.fromCenter(center: Offset(w / 2, h * 0.835), width: w * 0.46, height: h * 0.06);
    _rr(c, b, h * 0.03, Colors.white.withValues(alpha: 0.92 * _k(st, 0.4, 0.4)));
    _txt(c, 'Get NGMY  ·  ngmy.org', Offset(w / 2, b.top + h * 0.008), h * 0.04, const Color(0xFF111827), width: b.width - 12);
  } else {
    for (var n = 0; n < scenes.length; n++) {
      _circ(c, Offset(w / 2 + (n - (scenes.length - 1) / 2) * h * 0.045, h * 0.835), n == i ? h * 0.014 : h * 0.01, Colors.white.withValues(alpha: n == i ? 0.95 : 0.4));
    }
  }
}

// ── Construction Lab ─────────────────────────────────────────────────────────

Rect _wall(Size s) => Rect.fromLTRB(s.width * 0.2, s.height * 0.16, s.width * 0.8, s.height * 0.56);

void _studs(Canvas c, Size s, double lt, {double speed = 0.18, bool all = false}) {
  final r = _wall(s);
  c.drawRect(Rect.fromLTRB(r.left, r.bottom, r.right, r.bottom + s.height * 0.03), Paint()..color = const Color(0xFF3F2A14));
  for (var i = 0; i < 9; i++) {
    final k = all ? 1.0 : Curves.easeOut.transform(_k(lt, i * speed, 0.35));
    final x = r.left + i * r.width / 8;
    c.drawRect(Rect.fromLTRB(x - 3, r.bottom - r.height * k, x + 3, r.bottom), Paint()..color = const Color(0xFFD9A760));
  }
  final top = all ? 1.0 : _k(lt, 1.6, 0.4);
  c.drawRect(Rect.fromLTRB(r.left - 4, r.top - 5, r.left - 4 + (r.width + 8) * top, r.top + 3), Paint()..color = const Color(0xFFC08A4A));
}

void _constructionFrame(Canvas c, Size s, double lt) => _studs(c, s, lt);

void _constructionWire(Canvas c, Size s, double lt) {
  _studs(c, s, lt, all: true);
  final r = _wall(s);
  final y = r.top + r.height * 0.55;
  final k = _k(lt, 0.2, 1.4);
  _line(c, Offset(r.left, y), Offset(r.left + r.width * k, y), 5, const Color(0xFFFACC15));
  final box = Offset(r.left + r.width * 0.5, y + r.height * 0.18);
  _pop(c, box, lt, 1.2, () {
    _rr(c, Rect.fromCenter(center: box, width: r.height * 0.14, height: r.height * 0.2), 4, const Color(0xFF2563EB));
    _rr(c, Rect.fromCenter(center: box, width: r.height * 0.09, height: r.height * 0.13), 3, const Color(0xFFDBEAFE));
  });
  if (lt > 1.6) {
    for (var i = 0; i < 6; i++) {
      final a = i * math.pi / 3 + lt * 4;
      _line(c, box + Offset(math.cos(a), math.sin(a)) * r.height * 0.13, box + Offset(math.cos(a), math.sin(a)) * r.height * 0.2, 3, const Color(0xFFFEF08A));
    }
  }
}

void _constructionBoards(Canvas c, Size s, double lt) {
  _studs(c, s, lt, all: true);
  final r = _wall(s);
  for (var i = 0; i < 3; i++) {
    final k = Curves.easeOutCubic.transform(_k(lt, 0.1 + i * 0.5, 0.6));
    final x0 = r.left + i * r.width / 3;
    c.drawRect(Rect.fromLTWH(x0 + (1 - k) * s.width * 0.6, r.top, r.width / 3 - 2, r.height), Paint()..color = const Color(0xFFE5E7EB));
    if (k >= 1) {
      for (var j = 0; j < 4; j++) {
        _circ(c, Offset(x0 + 6, r.top + (j + 0.5) * r.height / 4), 2, const Color(0xFF9CA3AF));
        _circ(c, Offset(x0 + r.width / 3 - 8, r.top + (j + 0.5) * r.height / 4), 2, const Color(0xFF9CA3AF));
      }
    }
  }
}

void _constructionHouse(Canvas c, Size s, double lt) {
  final w = s.width, h = s.height;
  final ground = h * 0.56;
  c.drawRect(Rect.fromLTWH(0, ground, w, h * 0.03), Paint()..color = const Color(0xFF3F2A14));
  final bw = h * 0.55, bh = h * 0.28, x0 = w / 2 - bw / 2;
  // The sun comes up behind the house.
  _circ(c, Offset(w * 0.8, ground - h * 0.3 * Curves.easeOut.transform(_k(lt, 0, 1.5))), h * 0.07, const Color(0xFFFDE047));
  c.drawRect(Rect.fromLTWH(x0, ground - bh, bw, bh), Paint()..color = const Color(0xFFF4D9A8));
  c.drawPath(Path()..moveTo(x0 - bw * 0.08, ground - bh)..lineTo(w / 2, ground - bh - bh * 0.55)..lineTo(x0 + bw * 1.08, ground - bh)..close(), Paint()..color = const Color(0xFFB91C1C));
  c.drawRect(Rect.fromLTWH(x0 + bw * 0.14, ground - bh * 0.62, bw * 0.2, bh * 0.62), Paint()..color = const Color(0xFF6B3F1D));
  final lit = _k(lt, 0.8, 0.5);
  for (var i = 0; i < 2; i++) {
    final wx = x0 + bw * (0.5 + 0.25 * i);
    c.drawRect(Rect.fromLTWH(wx, ground - bh * 0.75, bw * 0.17, bh * 0.38), Paint()..color = Color.lerp(const Color(0xFF93C5FD), const Color(0xFFFDE047), lit)!);
  }
  for (var i = 0; i < 6; i++) {
    final a = i * math.pi / 3 + lt * 2;
    _circ(c, Offset(w / 2, ground - bh * 1.4) + Offset(math.cos(a), math.sin(a)) * h * 0.1 * _k(lt, 1.2, 1), 3, Colors.yellowAccent.withValues(alpha: _k(lt, 1.2, 0.3)));
  }
}

// ── Electronics Lab ──────────────────────────────────────────────────────────

void _electronicsCircuit(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final l = w * 0.28, r = w * 0.72, top = h * 0.2, bot = h * 0.52;
  final wire = Paint()..color = const Color(0xFFFBBF24)..style = PaintingStyle.stroke..strokeWidth = h * 0.012;
  c.drawRect(Rect.fromLTRB(l, top, r, bot), wire);
  _rr(c, Rect.fromCenter(center: Offset(l, (top + bot) / 2), width: h * 0.1, height: h * 0.15), 3, const Color(0xFF111827));
  _rr(c, Rect.fromCenter(center: Offset(l, (top + bot) / 2 - h * 0.035), width: h * 0.1, height: h * 0.06), 3, const Color(0xFF22C55E));
  final per = 2 * ((r - l) + (bot - top));
  for (var i = 0; i < 16; i++) {
    var d = (lt * 110 + i * per / 16) % per;
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
    _circ(c, p, h * 0.012, Colors.white);
  }
  final glow = _k(lt, 0.6, 0.5) * (0.7 + 0.3 * math.sin(lt * 7));
  final bc = Offset(r, (top + bot) / 2);
  _circ(c, bc, h * (0.14 + 0.03 * glow), const Color(0xFFFDE047).withValues(alpha: 0.28 * glow));
  _circ(c, bc, h * 0.07, Color.lerp(const Color(0xFF64748B), const Color(0xFFFEF9C3), glow)!);
}

void _electronicsBoard(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final b = Rect.fromCenter(center: Offset(w / 2, h * 0.34), width: w * 0.62, height: h * 0.38);
  _rr(c, b, 10, const Color(0xFFF1F5F9));
  for (var i = 0; i < 18; i++) {
    for (var j = 0; j < 6; j++) {
      _circ(c, Offset(b.left + 14 + i * (b.width - 28) / 17, b.top + 14 + j * (b.height - 28) / 5), 2, const Color(0xFF94A3B8));
    }
  }
  // The parts pop in one after another: a resistor, an LED, a capacitor and two jumper wires.
  final rp = Offset(b.left + b.width * 0.25, b.top + b.height * 0.3);
  _pop(c, rp, lt, 0.2, () {
    _rr(c, Rect.fromCenter(center: rp, width: b.width * 0.16, height: b.height * 0.12), 6, const Color(0xFFD6B98C));
    for (final (i, col) in const [(-0.04, Color(0xFFDC2626)), (0.0, Color(0xFF7C3AED)), (0.04, Color(0xFFF59E0B))]) {
      c.drawRect(Rect.fromCenter(center: rp + Offset(i * b.width, 0), width: 4, height: b.height * 0.12), Paint()..color = col);
    }
  });
  final lp = Offset(b.left + b.width * 0.55, b.top + b.height * 0.32);
  _pop(c, lp, lt, 0.7, () {
    _circ(c, lp, b.height * 0.13, const Color(0xFFEF4444));
    _circ(c, lp + Offset(-3, -4), b.height * 0.04, Colors.white.withValues(alpha: 0.7));
  });
  final cp = Offset(b.left + b.width * 0.78, b.top + b.height * 0.55);
  _pop(c, cp, lt, 1.1, () {
    _rr(c, Rect.fromCenter(center: cp, width: b.height * 0.16, height: b.height * 0.26), 5, const Color(0xFF2563EB));
    c.drawRect(Rect.fromCenter(center: cp, width: 4, height: b.height * 0.2), Paint()..color = Colors.white);
  });
  final k = _k(lt, 1.4, 0.7);
  c.drawLine(Offset(b.left + b.width * 0.1, b.top + b.height * 0.8), Offset(b.left + b.width * (0.1 + 0.6 * k), b.top + b.height * 0.8), Paint()..strokeWidth = 4..color = const Color(0xFF16A34A)..strokeCap = StrokeCap.round);
  if (lt > 2.0) {
    final g = 0.6 + 0.4 * math.sin(lt * 12);
    _circ(c, lp, b.height * 0.2, const Color(0xFFEF4444).withValues(alpha: 0.3 * g));
  }
}

void _electronicsTv(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final tv = Rect.fromCenter(center: Offset(w * 0.4, h * 0.32), width: h * 0.62, height: h * 0.36);
  _rr(c, tv.inflate(5), 8, const Color(0xFF111827));
  final bars = const [Color(0xFFFFFFFF), Color(0xFFFACC15), Color(0xFF22D3EE), Color(0xFF4ADE80), Color(0xFFE879F9), Color(0xFFEF4444), Color(0xFF3B82F6)];
  c.save();
  c.clipRRect(RRect.fromRectAndRadius(tv, const Radius.circular(5)));
  final on = _k(lt, 0.7, 0.2);
  for (var i = 0; i < bars.length; i++) {
    c.drawRect(Rect.fromLTWH(tv.left + i * tv.width / bars.length, tv.top, tv.width / bars.length + 1, tv.height), Paint()..color = Color.lerp(const Color(0xFF020617), bars[i], on)!);
  }
  c.restore();
  // A 12 volt battery next to it, with a wire that reaches the TV.
  final bt = Rect.fromCenter(center: Offset(w * 0.8, h * 0.4), width: h * 0.16, height: h * 0.24);
  _rr(c, bt, 6, const Color(0xFF111827));
  _rr(c, bt.deflate(5), 4, const Color(0xFF22C55E));
  _txt(c, '12 V', Offset(bt.center.dx, bt.center.dy - h * 0.025), h * 0.05, Colors.black);
  final k = _k(lt, 0.1, 0.6);
  c.drawLine(Offset(bt.left, bt.center.dy), Offset(bt.left - (bt.left - tv.right) * k, bt.center.dy), Paint()..strokeWidth = 4..color = const Color(0xFFFBBF24)..strokeCap = StrokeCap.round);
}

void _electronicsMeter(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final m = Rect.fromCenter(center: Offset(w / 2, h * 0.32), width: h * 0.42, height: h * 0.48);
  _rr(c, m, 14, const Color(0xFFF59E0B));
  _rr(c, Rect.fromLTWH(m.left + 10, m.top + 10, m.width - 20, m.height * 0.3), 6, const Color(0xFFBBF7D0));
  final v = 12.0 * Curves.easeOut.transform(_k(lt, 0.2, 1.6));
  _txt(c, '${v.toStringAsFixed(1)} V', Offset(m.center.dx, m.top + 14), h * 0.085, const Color(0xFF064E3B), width: m.width - 30);
  _circ(c, Offset(m.center.dx, m.bottom - m.height * 0.3), m.width * 0.22, const Color(0xFF111827));
  c.save();
  c.translate(m.center.dx, m.bottom - m.height * 0.3);
  c.rotate(-1.2 + 2.4 * _k(lt, 0.2, 1.6));
  _line(c, Offset.zero, Offset(0, -m.width * 0.18), 3, Colors.white);
  c.restore();
  // Two probes that touch the circuit.
  final k = Curves.easeOut.transform(_k(lt, 0.0, 0.8));
  _line(c, Offset(m.left, m.bottom), Offset(w * 0.2 + (1 - k) * -40, h * 0.5), 4, const Color(0xFFEF4444));
  _line(c, Offset(m.right, m.bottom), Offset(w * 0.8 + (1 - k) * 40, h * 0.5), 4, const Color(0xFF111827));
}

// ── Advisors ─────────────────────────────────────────────────────────────────

void _avatar(Canvas c, Offset o, double r, Color col) {
  _circ(c, o, r, col);
  _circ(c, o + Offset(0, -r * 0.18), r * 0.38, Colors.white.withValues(alpha: 0.92));
  c.drawArc(Rect.fromCenter(center: o + Offset(0, r * 0.95), width: r * 1.3, height: r * 1.1), math.pi, math.pi, true, Paint()..color = Colors.white.withValues(alpha: 0.92));
}

void _star(Canvas c, Offset o, double r, Color col) {
  final p = Path();
  for (var i = 0; i < 10; i++) {
    final a = -math.pi / 2 + i * math.pi / 5;
    final rr = i.isEven ? r : r * 0.45;
    final q = o + Offset(math.cos(a), math.sin(a)) * rr;
    i == 0 ? p.moveTo(q.dx, q.dy) : p.lineTo(q.dx, q.dy);
  }
  c.drawPath(p..close(), Paint()..color = col);
}

void _advisorMeet(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final o = Offset(w * 0.38, h * 0.32);
  _pop(c, o, lt, 0.1, () => _avatar(c, o, h * 0.15, const Color(0xFFF472B6)));
  final badge = o + Offset(h * 0.11, h * 0.11);
  _pop(c, badge, lt, 0.7, () {
    _circ(c, badge, h * 0.045, const Color(0xFF22C55E));
    c.drawPath(Path()..moveTo(badge.dx - h * 0.02, badge.dy)..lineTo(badge.dx - h * 0.005, badge.dy + h * 0.015)..lineTo(badge.dx + h * 0.022, badge.dy - h * 0.014), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white);
  });
  final tag = Rect.fromLTWH(w * 0.52, h * 0.22, w * 0.3, h * 0.2);
  final k = _k(lt, 0.5, 0.6);
  _rr(c, Rect.fromLTWH(tag.left, tag.top, tag.width * k, tag.height), 10, Colors.white.withValues(alpha: 0.92));
  if (k > 0.6) {
    _rr(c, Rect.fromLTWH(tag.left + 10, tag.top + 12, tag.width * 0.7, 8), 3, const Color(0xFF111827));
    _rr(c, Rect.fromLTWH(tag.left + 10, tag.top + 30, tag.width * 0.5, 6), 3, const Color(0xFF94A3B8));
    _rr(c, Rect.fromLTWH(tag.left + 10, tag.top + 46, tag.width * 0.6, 6), 3, const Color(0xFF94A3B8));
  }
}

void _advisorChat(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  void bubble(Rect r, Color col, double from, Color ink) {
    final o = r.center;
    _pop(c, o, lt, from, () {
      _rr(c, r, h * 0.05, col);
      _rr(c, Rect.fromLTWH(r.left + 12, r.center.dy - 9, r.width * 0.6, 6), 3, ink.withValues(alpha: 0.8));
      _rr(c, Rect.fromLTWH(r.left + 12, r.center.dy + 3, r.width * 0.4, 6), 3, ink.withValues(alpha: 0.5));
    });
  }

  _avatar(c, Offset(w * 0.14, h * 0.2), h * 0.07, const Color(0xFF38BDF8));
  _avatar(c, Offset(w * 0.86, h * 0.42), h * 0.07, const Color(0xFFF472B6));
  bubble(Rect.fromLTWH(w * 0.25, h * 0.13, w * 0.42, h * 0.14), Colors.white, 0.2, const Color(0xFF111827));
  if (lt > 0.9 && lt < 1.5) {
    for (var i = 0; i < 3; i++) {
      _circ(c, Offset(w * 0.6 + i * h * 0.04, h * 0.38), h * 0.012 + h * 0.008 * math.sin(lt * 12 + i), Colors.white);
    }
  }
  bubble(Rect.fromLTWH(w * 0.33, h * 0.32, w * 0.46, h * 0.14), const Color(0xFF111827), 1.5, Colors.white);
}

void _advisorStars(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  for (var i = 0; i < 5; i++) {
    final o = Offset(w / 2 + (i - 2) * h * 0.13, h * 0.3);
    final on = lt > 0.2 + i * 0.35;
    _pop(c, o, lt, 0.2 + i * 0.35, () => _star(c, o, h * 0.065, on ? const Color(0xFFFACC15) : const Color(0xFF64748B)));
    if (!on) _star(c, o, h * 0.06, const Color(0xFF64748B).withValues(alpha: 0.5));
  }
  final k = _k(lt, 2.0, 0.4);
  if (k > 0) _txt(c, '5.0  ·  Loved by members', Offset(w / 2, h * 0.46), h * 0.05, Colors.white.withValues(alpha: k));
}

void _advisorGrid(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  const cols = [Color(0xFFF472B6), Color(0xFF38BDF8), Color(0xFFFACC15), Color(0xFF4ADE80), Color(0xFFA78BFA), Color(0xFFFB923C)];
  for (var i = 0; i < 6; i++) {
    final o = Offset(w / 2 + ((i % 3) - 1) * h * 0.2, h * 0.2 + (i ~/ 3) * h * 0.2);
    _pop(c, o, lt, i * 0.2, () => _avatar(c, o, h * 0.075, cols[i]));
  }
  final pulse = 1 + 0.06 * math.sin(lt * 8);
  final b = Rect.fromCenter(center: Offset(w / 2, h * 0.5), width: w * 0.22 * pulse, height: h * 0.07 * pulse);
  if (lt > 1.4) {
    _rr(c, b, h * 0.035, const Color(0xFFFB7185));
    _txt(c, 'Say hi', Offset(b.center.dx, b.top + h * 0.012), h * 0.045, Colors.white, width: b.width - 10);
  }
}

// ── Game Center ──────────────────────────────────────────────────────────────

void _coins(Canvas c, Size s, double lt, {int n = 9}) {
  final h = s.height, w = s.width;
  for (var i = 0; i < n; i++) {
    final ph = (lt * 0.5 + i / n) % 1.0;
    final x = w * (0.15 + 0.7 * ((i * 0.37) % 1.0));
    final y = h * 0.08 + ph * h * 0.5;
    final sq = math.cos(ph * 22).abs();
    c.drawOval(Rect.fromCenter(center: Offset(x, y), width: h * 0.06 * (0.3 + 0.7 * sq), height: h * 0.06), Paint()..color = const Color(0xFFFACC15));
    c.drawOval(Rect.fromCenter(center: Offset(x, y), width: h * 0.035 * (0.3 + 0.7 * sq), height: h * 0.035), Paint()..color = const Color(0xFFFDE68A));
  }
}

void _gamesPick(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  const cols = [Color(0xFFEF4444), Color(0xFF3B82F6), Color(0xFFF59E0B)];
  for (var i = 0; i < 3; i++) {
    final k = Curves.easeOutBack.transform(_k(lt, i * 0.3, 0.6));
    final r = Rect.fromCenter(center: Offset(w / 2 + (i - 1) * h * 0.32 + (1 - k) * w * 0.5, h * 0.32 - (i == 1 ? h * 0.02 : 0)), width: h * 0.28, height: h * 0.36);
    _rr(c, r, 12, cols[i]);
    _rr(c, r.deflate(8), 8, Colors.white.withValues(alpha: 0.2));
    _circ(c, r.center, h * 0.07, Colors.white.withValues(alpha: 0.9));
    if (i == 0) _line(c, r.center + Offset(-h * 0.02, -h * 0.03), r.center + Offset(h * 0.03, 0), 5, cols[i]);
    if (i == 1) _rr(c, Rect.fromCenter(center: r.center, width: h * 0.06, height: h * 0.06), 4, cols[i]);
    if (i == 2) _star(c, r.center, h * 0.045, cols[i]);
  }
  if (lt > 1.3) {
    final hand = Offset(w / 2 + h * 0.05, h * 0.5 - (lt - 1.3).clamp(0.0, 0.5) * h * 0.1);
    _circ(c, hand, h * 0.025, Colors.white.withValues(alpha: 0.85));
  }
}

void _gamesPlay(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  _coins(c, s, lt);
  final pad = Rect.fromCenter(center: Offset(w / 2, h * 0.46), width: h * 0.5, height: h * 0.16);
  _rr(c, pad, h * 0.07, const Color(0xFF111827));
  _rr(c, pad.deflate(3), h * 0.065, const Color(0xFF1F2937));
  final cross = Offset(pad.left + h * 0.1, pad.center.dy);
  c.drawRect(Rect.fromCenter(center: cross, width: h * 0.07, height: h * 0.02), Paint()..color = Colors.white70);
  c.drawRect(Rect.fromCenter(center: cross, width: h * 0.02, height: h * 0.07), Paint()..color = Colors.white70);
  final press = (lt * 4).floor() % 2 == 0;
  _circ(c, Offset(pad.right - h * 0.12, pad.center.dy + h * 0.015), h * 0.025, press ? const Color(0xFFF87171) : const Color(0xFF991B1B));
  _circ(c, Offset(pad.right - h * 0.07, pad.center.dy - h * 0.015), h * 0.025, press ? const Color(0xFF166534) : const Color(0xFF4ADE80));
}

void _gamesScore(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final b = Rect.fromCenter(center: Offset(w / 2, h * 0.3), width: w * 0.5, height: h * 0.3);
  _rr(c, b, 14, const Color(0xFF0F172A));
  _txt(c, 'SCORE', Offset(b.center.dx, b.top + h * 0.02), h * 0.05, const Color(0xFF7DD3FC));
  final v = (Curves.easeOut.transform(_k(lt, 0.1, 1.9)) * 9800).round();
  _txt(c, '$v', Offset(b.center.dx, b.top + h * 0.085), h * 0.12, const Color(0xFFFDE047), width: b.width - 20);
  final bar = Rect.fromLTWH(b.left + 16, b.bottom - h * 0.05, b.width - 32, h * 0.025);
  _rr(c, bar, 6, Colors.white24);
  _rr(c, Rect.fromLTWH(bar.left, bar.top, bar.width * _k(lt, 0.1, 1.9), bar.height), 6, const Color(0xFF4ADE80));
}

void _gamesTrophy(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final base = Offset(w / 2, h * 0.5);
  final k = Curves.easeOutBack.transform(_k(lt, 0, 0.8));
  c.save();
  c.translate(base.dx, base.dy + (1 - k) * h * 0.3);
  c.drawPath(Path()..moveTo(-h * 0.09, -h * 0.26)..lineTo(h * 0.09, -h * 0.26)..quadraticBezierTo(h * 0.09, -h * 0.1, 0, -h * 0.08)..quadraticBezierTo(-h * 0.09, -h * 0.1, -h * 0.09, -h * 0.26)..close(), Paint()..color = const Color(0xFFFACC15));
  c.drawRect(Rect.fromLTRB(-h * 0.015, -h * 0.08, h * 0.015, -h * 0.03), Paint()..color = const Color(0xFFCA8A04));
  _rr(c, Rect.fromLTRB(-h * 0.07, -h * 0.03, h * 0.07, 0), 4, const Color(0xFF92400E));
  c.restore();
  final rnd = math.Random(3);
  for (var i = 0; i < 22; i++) {
    final a = rnd.nextDouble() * math.pi * 2, sp = 0.4 + rnd.nextDouble();
    final t = _k(lt, 0.6, 1.8);
    final p = Offset(w / 2, h * 0.25) + Offset(math.cos(a) * h * 0.4 * sp * t, math.sin(a) * h * 0.25 * sp * t + 30 * t * t);
    c.drawRect(Rect.fromCenter(center: p, width: 6, height: 4), Paint()..color = [const Color(0xFFF472B6), const Color(0xFF38BDF8), const Color(0xFFFACC15), const Color(0xFF4ADE80)][i % 4].withValues(alpha: 1 - t * 0.6));
  }
}

// ── Store ────────────────────────────────────────────────────────────────────

void _storeFront(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final body = Rect.fromCenter(center: Offset(w / 2, h * 0.38), width: h * 0.7, height: h * 0.34);
  _rr(c, body, 6, const Color(0xFFFEF3C7));
  final drop = Curves.bounceOut.transform(_k(lt, 0.1, 0.9));
  for (var i = 0; i < 8; i++) {
    final x = body.left - 6 + i * (body.width + 12) / 8;
    c.drawRect(Rect.fromLTWH(x, body.top - h * 0.07 + 0, (body.width + 12) / 8, h * 0.1 * drop), Paint()..color = i.isEven ? const Color(0xFFEF4444) : Colors.white);
  }
  _rr(c, Rect.fromLTWH(body.left + 14, body.top + h * 0.1, body.width * 0.35, body.height * 0.55), 4, const Color(0xFF93C5FD));
  _rr(c, Rect.fromLTWH(body.right - body.width * 0.3, body.top + h * 0.1, body.width * 0.2, body.height * 0.7), 4, const Color(0xFF78350F));
  final sign = _k(lt, 1.0, 0.5);
  if (sign > 0) _txt(c, 'OPEN', Offset(w / 2, body.top - h * 0.14), h * 0.07 * sign, const Color(0xFFFDE047));
}

void _storeProducts(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  const cols = [Color(0xFF60A5FA), Color(0xFF34D399), Color(0xFFF472B6)];
  const prices = ['\$12', '\$8', '\$25'];
  for (var i = 0; i < 3; i++) {
    final k = Curves.easeOutBack.transform(_k(lt, i * 0.35, 0.6));
    final r = Rect.fromCenter(center: Offset(w / 2 + (i - 1) * h * 0.33, h * 0.32 + (1 - k) * h * 0.4), width: h * 0.28, height: h * 0.38);
    _rr(c, r, 12, Colors.white);
    _rr(c, Rect.fromLTWH(r.left + 8, r.top + 8, r.width - 16, r.height * 0.55), 8, cols[i]);
    _circ(c, Offset(r.center.dx, r.top + 8 + r.height * 0.27), h * 0.05, Colors.white.withValues(alpha: 0.85));
    _rr(c, Rect.fromLTWH(r.left + 12, r.bottom - r.height * 0.3, r.width * 0.5, 7), 3, const Color(0xFF94A3B8));
    _txt(c, prices[i], Offset(r.center.dx, r.bottom - r.height * 0.18), h * 0.06, const Color(0xFF111827));
  }
}

void _storeCart(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final x = w * (0.2 + 0.3 * Curves.easeOut.transform(_k(lt, 0, 1.0)));
  final cart = Rect.fromCenter(center: Offset(x + h * 0.2, h * 0.4), width: h * 0.44, height: h * 0.2);
  for (var i = 0; i < 3; i++) {
    final k = _k(lt, 0.6 + i * 0.4, 0.5);
    if (k <= 0) continue;
    _rr(c, Rect.fromCenter(center: Offset(cart.center.dx + (i - 1) * h * 0.1, cart.top - h * 0.13 * (1 - k) * 2 + 4), width: h * 0.09, height: h * 0.09), 5, [const Color(0xFF60A5FA), const Color(0xFFF472B6), const Color(0xFFFACC15)][i]);
  }
  c.drawPath(Path()..moveTo(cart.left, cart.top)..lineTo(cart.right, cart.top)..lineTo(cart.right - h * 0.04, cart.bottom)..lineTo(cart.left + h * 0.04, cart.bottom)..close(), Paint()..color = const Color(0xFFE2E8F0));
  _line(c, Offset(cart.left, cart.top), Offset(cart.left - h * 0.05, cart.top - h * 0.07), 4, const Color(0xFFE2E8F0));
  _circ(c, Offset(cart.left + h * 0.08, cart.bottom + h * 0.03), h * 0.025, const Color(0xFF111827));
  _circ(c, Offset(cart.right - h * 0.08, cart.bottom + h * 0.03), h * 0.025, const Color(0xFF111827));
}

void _storeDelivered(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final tx = -h * 0.4 + (w + h * 0.6) * _k(lt, 0, 2.4);
  _rr(c, Rect.fromLTWH(tx, h * 0.36, h * 0.28, h * 0.17), 5, Colors.white);
  _rr(c, Rect.fromLTWH(tx + h * 0.28, h * 0.4, h * 0.12, h * 0.13), 5, const Color(0xFFFB923C));
  _circ(c, Offset(tx + h * 0.07, h * 0.54), h * 0.03, const Color(0xFF111827));
  _circ(c, Offset(tx + h * 0.32, h * 0.54), h * 0.03, const Color(0xFF111827));
  final p = Offset(w / 2, h * 0.24);
  _pop(c, p, lt, 0.5, () {
    _rr(c, Rect.fromCenter(center: p, width: h * 0.2, height: h * 0.16), 6, const Color(0xFFD6A25B));
    c.drawRect(Rect.fromCenter(center: p, width: h * 0.03, height: h * 0.16), Paint()..color = const Color(0xFFB45309));
  });
  _pop(c, p + Offset(h * 0.11, -h * 0.07), lt, 1.1, () {
    _circ(c, p + Offset(h * 0.11, -h * 0.07), h * 0.045, const Color(0xFF22C55E));
    c.drawPath(Path()..moveTo(p.dx + h * 0.09, p.dy - h * 0.07)..lineTo(p.dx + h * 0.105, p.dy - h * 0.055)..lineTo(p.dx + h * 0.135, p.dy - h * 0.09), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white);
  });
}

// ── Business Cards ───────────────────────────────────────────────────────────

Rect _cardRect(Size s) => Rect.fromCenter(center: Offset(s.width * 0.45, s.height * 0.32), width: s.height * 0.62, height: s.height * 0.36);

void _cardFace(Canvas c, Rect r, double k, {Color accent = const Color(0xFF0F766E)}) {
  final h = r.height;
  _rr(c, r, h * 0.08, Colors.white);
  _circ(c, Offset(r.left + r.width * 0.2, r.center.dy - h * 0.12), h * 0.2, accent);
  _rr(c, Rect.fromLTWH(r.left + r.width * 0.42, r.top + h * 0.2, r.width * 0.4 * k, h * 0.07), 3, const Color(0xFF1E293B));
  _rr(c, Rect.fromLTWH(r.left + r.width * 0.42, r.top + h * 0.38, r.width * 0.3 * k, h * 0.05), 3, const Color(0xFF94A3B8));
  _rr(c, Rect.fromLTWH(r.left + r.width * 0.42, r.top + h * 0.5, r.width * 0.36 * k, h * 0.05), 3, const Color(0xFF94A3B8));
  c.drawRect(Rect.fromLTWH(r.left + r.width * 0.06, r.bottom - h * 0.12, r.width * 0.88 * k, h * 0.04), Paint()..color = const Color(0xFFF59E0B));
}

void _cardsDesign(Canvas c, Size s, double lt) {
  final r = _cardRect(s);
  _pop(c, r.center, lt, 0, () => _cardFace(c, r, 0));
  _cardFace(c, r, Curves.easeOut.transform(_k(lt, 0.4, 1.6)));
}

void _cardsColors(Canvas c, Size s, double lt) {
  final r = _cardRect(s);
  const cols = [Color(0xFF0F766E), Color(0xFF7C3AED), Color(0xFFDB2777), Color(0xFFEA580C)];
  final i = (lt / 0.6).floor() % cols.length;
  c.save();
  c.translate(r.center.dx, r.center.dy);
  c.rotate(-0.06 + 0.03 * math.sin(lt * 3));
  c.translate(-r.center.dx, -r.center.dy);
  _cardFace(c, r, 1, accent: cols[i]);
  c.restore();
  for (var n = 0; n < cols.length; n++) {
    _circ(c, Offset(s.width * 0.78, s.height * 0.16 + n * s.height * 0.09), s.height * 0.032, cols[n]);
    if (n == i) c.drawCircle(Offset(s.width * 0.78, s.height * 0.16 + n * s.height * 0.09), s.height * 0.045, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white);
  }
}

void _cardsShare(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final cx = Offset(w * 0.34, h * 0.32);
  c.save();
  c.translate(cx.dx, cx.dy);
  c.rotate(-0.1);
  final cr = Rect.fromCenter(center: Offset.zero, width: h * 0.4, height: h * 0.24);
  _cardFace(c, cr, 1);
  c.restore();
  final ph = Rect.fromCenter(center: Offset(w * 0.74, h * 0.32), width: h * 0.17, height: h * 0.3);
  _rr(c, ph, h * 0.03, const Color(0xFF020617));
  _rr(c, ph.deflate(3), h * 0.025, const Color(0xFF38BDF8));
  for (var i = 0; i < 3; i++) {
    final k = (lt * 0.9 + i / 3) % 1.0;
    c.drawArc(Rect.fromCircle(center: Offset(ph.left, ph.center.dy), radius: h * (0.04 + 0.16 * k)), math.pi * 0.7, math.pi * 0.6, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white.withValues(alpha: 1 - k));
  }
  if (lt > 1.4) {
    final k = Curves.easeOutBack.transform(_k(lt, 1.4, 0.5));
    final mini = Rect.fromCenter(center: ph.center, width: ph.width * 0.8 * k, height: ph.width * 0.5 * k);
    _cardFace(c, mini, 1);
  }
}

void _cardsStack(Canvas c, Size s, double lt) {
  final r = _cardRect(s);
  const cols = [Color(0xFFFDE68A), Color(0xFFFCA5A5), Color(0xFFA5B4FC), Color(0xFF86EFAC)];
  for (var i = 0; i < 4; i++) {
    final k = Curves.easeOutBack.transform(_k(lt, i * 0.25, 0.6));
    c.save();
    c.translate(r.center.dx + (i - 1.5) * s.height * 0.1, r.center.dy);
    c.rotate((i - 1.5) * 0.18 * k);
    _rr(c, Rect.fromCenter(center: Offset.zero, width: r.width * 0.8, height: r.height * 0.9), 10, cols[i]);
    c.restore();
  }
  _pop(c, r.center, lt, 1.2, () => _cardFace(c, Rect.fromCenter(center: r.center + Offset(0, -s.height * 0.01), width: r.width * 0.9, height: r.height * 0.9), 1));
}

// ── Vault ────────────────────────────────────────────────────────────────────

void _vaultLock(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final o = Offset(w / 2, h * 0.38);
  final close = Curves.easeOutBack.transform(_k(lt, 0.2, 1.0));
  final lift = (1 - close) * h * 0.07;
  c.drawArc(Rect.fromCenter(center: o + Offset(0, -h * 0.07 - lift), width: h * 0.17, height: h * 0.2), math.pi, math.pi, false, Paint()..style = PaintingStyle.stroke..strokeWidth = h * 0.03..color = const Color(0xFFCBD5E1));
  _rr(c, Rect.fromCenter(center: o, width: h * 0.26, height: h * 0.2), 10, const Color(0xFFFACC15));
  _circ(c, o, h * 0.025, const Color(0xFF713F12));
  c.drawRect(Rect.fromCenter(center: o + Offset(0, h * 0.04), width: h * 0.012, height: h * 0.05), Paint()..color = const Color(0xFF713F12));
  if (lt > 1.2) _circ(c, o, h * (0.17 + 0.04 * ((lt * 2) % 1.0)), const Color(0xFFFDE047).withValues(alpha: 0.25 * (1 - (lt * 2) % 1.0)));
}

void _vaultDial(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final ctr = Offset(w / 2, h * 0.34);
  final r = h * 0.24;
  _circ(c, ctr, r * 1.1, const Color(0xFF0B1220));
  _circ(c, ctr, r, const Color(0xFF94A3B8));
  _circ(c, ctr, r * 0.9, const Color(0xFFCBD5E1));
  c.save();
  c.translate(ctr.dx, ctr.dy);
  c.rotate(lt * 3 * (lt < 1.4 ? 1 : 0.3));
  _circ(c, Offset.zero, r * 0.35, const Color(0xFF475569));
  for (var i = 0; i < 6; i++) {
    c.drawRect(Rect.fromCenter(center: Offset.zero, width: r * 0.6, height: 3), Paint()..color = Colors.white70);
    c.rotate(math.pi / 6);
  }
  c.restore();
  for (var i = 0; i < 4; i++) {
    final on = lt > 0.4 + i * 0.5;
    _circ(c, Offset(w / 2 + (i - 1.5) * h * 0.06, h * 0.6 - h * 0.04), h * 0.014, on ? const Color(0xFF4ADE80) : Colors.white24);
  }
}

void _vaultStore(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final ctr = Offset(w * 0.62, h * 0.34);
  final r = h * 0.22;
  _circ(c, ctr, r * 1.1, const Color(0xFF0B1220));
  _circ(c, ctr, r * 0.7, const Color(0xFFFDE047).withValues(alpha: 0.12));
  // The door stands open, to the side.
  c.drawOval(Rect.fromCenter(center: ctr + Offset(-r * 1.15, 0), width: r * 0.35, height: r * 2), Paint()..color = const Color(0xFF94A3B8));
  // Things fly in: a photo, a note and a document.
  const cols = [Color(0xFF38BDF8), Color(0xFFFACC15), Color(0xFFF1F5F9)];
  for (var i = 0; i < 3; i++) {
    final k = Curves.easeIn.transform(_k(lt, 0.2 + i * 0.6, 0.9));
    final from = Offset(w * 0.12, h * (0.18 + i * 0.12));
    final p = Offset.lerp(from, ctr, k)!;
    c.save();
    c.translate(p.dx, p.dy);
    c.rotate(0.4 * (1 - k));
    c.scale(1 - 0.6 * k);
    _rr(c, Rect.fromCenter(center: Offset.zero, width: h * 0.12, height: h * 0.15), 5, cols[i]);
    c.drawRect(Rect.fromCenter(center: Offset.zero, width: h * 0.07, height: 3), Paint()..color = Colors.black26);
    c.restore();
  }
}

void _vaultShield(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  final o = Offset(w / 2, h * 0.32);
  for (var i = 0; i < 3; i++) {
    final k = (lt * 0.7 + i / 3) % 1.0;
    c.drawCircle(o, h * (0.12 + 0.22 * k), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFF38BDF8).withValues(alpha: 0.6 * (1 - k)));
  }
  final k = Curves.easeOutBack.transform(_k(lt, 0, 0.7));
  c.save();
  c.translate(o.dx, o.dy);
  c.scale(k);
  c.drawPath(Path()..moveTo(0, -h * 0.17)..lineTo(h * 0.14, -h * 0.11)..quadraticBezierTo(h * 0.14, h * 0.09, 0, h * 0.18)..quadraticBezierTo(-h * 0.14, h * 0.09, -h * 0.14, -h * 0.11)..close(), Paint()..color = const Color(0xFF38BDF8));
  c.drawPath(Path()..moveTo(-h * 0.06, 0)..lineTo(-h * 0.015, h * 0.05)..lineTo(h * 0.07, -h * 0.05), Paint()..style = PaintingStyle.stroke..strokeWidth = h * 0.03..strokeCap = StrokeCap.round..color = Colors.white);
  c.restore();
}

// ── Studios ──────────────────────────────────────────────────────────────────

void _studiosTiles(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  const cols = [Color(0xFF38BDF8), Color(0xFF4ADE80), Color(0xFFFB923C), Color(0xFFF472B6), Color(0xFFFACC15), Color(0xFFA78BFA)];
  final tile = h * 0.15;
  for (var i = 0; i < 6; i++) {
    final o = Offset(w / 2 + ((i % 3) - 1) * tile * 1.35, h * 0.2 + (i ~/ 3) * tile * 1.35);
    _pop(c, o, lt, 0.1 + i * 0.3, () {
      _rr(c, Rect.fromCenter(center: o, width: tile, height: tile), tile * 0.28, cols[i]);
      _circ(c, o, tile * 0.22, Colors.white.withValues(alpha: 0.9));
    });
  }
}

void _studiosPaint(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  const cols = [Color(0xFFEF4444), Color(0xFFF59E0B), Color(0xFFFACC15), Color(0xFF4ADE80), Color(0xFF38BDF8), Color(0xFFA78BFA)];
  final k = _k(lt, 0.1, 2.0);
  for (var i = 0; i < cols.length; i++) {
    final r = h * (0.36 - i * 0.04);
    final sweep = math.pi * ((k * cols.length) - i).clamp(0.0, 1.0);
    c.drawArc(Rect.fromCenter(center: Offset(w / 2, h * 0.56), width: r * 2, height: r * 2), math.pi, sweep, false, Paint()..style = PaintingStyle.stroke..strokeWidth = h * 0.035..strokeCap = StrokeCap.round..color = cols[i]);
  }
  final a = math.pi + math.pi * k;
  final br = Offset(w / 2 + math.cos(a) * h * 0.2, h * 0.56 + math.sin(a) * h * 0.2);
  _circ(c, br, h * 0.03, Colors.white);
  _line(c, br, br + Offset(h * 0.06, -h * 0.07), 5, const Color(0xFFD97706));
}

void _studiosMusic(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  const cols = [Color(0xFF38BDF8), Color(0xFF4ADE80), Color(0xFFFACC15), Color(0xFFFB923C), Color(0xFFF472B6), Color(0xFFA78BFA), Color(0xFF38BDF8)];
  for (var i = 0; i < 7; i++) {
    final bh = h * (0.08 + 0.2 * (0.5 + 0.5 * math.sin(lt * 7 + i * 1.3)));
    _rr(c, Rect.fromLTWH(w / 2 + (i - 3.5) * h * 0.09, h * 0.5 - bh, h * 0.07, bh), 5, cols[i]);
  }
  for (var i = 0; i < 3; i++) {
    final k = (lt * 0.6 + i / 3) % 1.0;
    final o = Offset(w * (0.3 + 0.4 * i / 2) + 10 * math.sin(k * 6), h * 0.3 - k * h * 0.2);
    _circ(c, o, 6, Colors.white.withValues(alpha: 1 - k));
    _line(c, o + const Offset(5, 0), o + const Offset(5, -18), 2.5, Colors.white.withValues(alpha: 1 - k));
  }
}

void _studiosTitle(Canvas c, Size s, double lt) {
  final h = s.height, w = s.width;
  const word = 'NGMY';
  const cols = [Color(0xFF38BDF8), Color(0xFF4ADE80), Color(0xFFFACC15), Color(0xFFF472B6)];
  for (var i = 0; i < word.length; i++) {
    final k = _k(lt, i * 0.3, 0.7);
    if (k <= 0) continue;
    final bounce = (1 - Curves.bounceOut.transform(k)) * h * 0.25;
    _txt(c, word[i], Offset(w / 2 + (i - 1.5) * h * 0.2, h * 0.14 - bounce), h * 0.26, cols[i]);
  }
  final u = _k(lt, 1.4, 0.6);
  c.drawRect(Rect.fromLTWH(w / 2 - h * 0.4, h * 0.46, h * 0.8 * u, 4), Paint()..color = Colors.white);
}

// ── The adverts ──────────────────────────────────────────────────────────────

final List<List<Object>> _ads = [
  [
    const [Color(0xFFB45309), Color(0xFF7C2D12)],
    const [
      _Scene('NGMY Construction Lab', 'Frame a room, stud by stud', _constructionFrame),
      _Scene('Wire it', 'Pull the cable, set the box, no shocks', _constructionWire),
      _Scene('Hang the drywall', 'Screw it, tape it, mud it, sand it', _constructionBoards),
      _Scene('Move in', 'Learn real trades, one room at a time', _constructionHouse),
    ],
  ],
  [
    const [Color(0xFF0E7490), Color(0xFF1E1B4B)],
    const [
      _Scene('NGMY Electronics Lab', 'Power goes round a loop', _electronicsCircuit),
      _Scene('Build it', 'Drop in resistors, LEDs and capacitors', _electronicsBoard),
      _Scene('Run a TV', 'Real volts, real gadgets', _electronicsTv),
      _Scene('Measure it', 'Read the volts like a pro', _electronicsMeter),
    ],
  ],
  [
    const [Color(0xFF7C3AED), Color(0xFFBE185D)],
    const [
      _Scene('NGMY Advisors', 'Meet a friendly, checked advisor', _advisorMeet),
      _Scene('Ask anything', 'Chat and get an answer', _advisorChat),
      _Scene('Loved by members', 'Real help, five stars', _advisorStars),
      _Scene('Say hi today', 'Pick an advisor and start', _advisorGrid),
    ],
  ],
  [
    const [Color(0xFF16A34A), Color(0xFF064E3B)],
    const [
      _Scene('NGMY Game Center', 'Lots of games in one place', _gamesPick),
      _Scene('Play', 'Tap, jump and catch the coins', _gamesPlay),
      _Scene('Beat the score', 'Climb the board every day', _gamesScore),
      _Scene('Win coins', 'Win, celebrate, play again', _gamesTrophy),
    ],
  ],
  [
    const [Color(0xFF334155), Color(0xFF0F172A)],
    const [
      _Scene('NGMY Vault', 'Lock away what matters', _vaultLock),
      _Scene('Dial it', 'Only you know the code', _vaultDial),
      _Scene('Store it', 'Photos, notes and documents', _vaultStore),
      _Scene('Stay safe', 'Private, protected, always yours', _vaultShield),
    ],
  ],
  [
    const [Color(0xFF4F46E5), Color(0xFF0EA5E9)],
    const [
      _Scene('NGMY Studios', 'A studio for every idea', _studiosTiles),
      _Scene('Paint with light', 'Colours that glow', _studiosPaint),
      _Scene('Make music', 'Beats, notes and tunes', _studiosMusic),
      _Scene('Add your title', 'Moving words for any picture', _studiosTitle),
    ],
  ],
  [
    const [Color(0xFF0F766E), Color(0xFF1E3A8A)],
    const [
      _Scene('NGMY Business Cards', 'Design a card in seconds', _cardsDesign),
      _Scene('Make it yours', 'Pick your colours and your look', _cardsColors),
      _Scene('Share it', 'One tap and it is on their phone', _cardsShare),
      _Scene('Be remembered', 'Cards people keep', _cardsStack),
    ],
  ],
  [
    const [Color(0xFFD97706), Color(0xFFBE123C)],
    const [
      _Scene('NGMY Store', 'Open the doors to something new', _storeFront),
      _Scene('Find anything', 'Shop gadgets, books and more', _storeProducts),
      _Scene('Add to cart', 'Fill it up, pay your way', _storeCart),
      _Scene('Delivered', 'Right to your door', _storeDelivered),
    ],
  ],
];

/// One frame of advert [ad] (0 Construction Lab, 1 Electronics Lab, 2 Advisors, 3 Game Center, 4 Vault, 5 Studios, 6 Business Cards, 7 Store)
/// at the running time [t]. Each advert is four scenes of two and a half seconds: ten seconds, then it plays again.
void paintNgmyTvAd(Canvas c, Size s, int ad, double t) {
  final a = _ads[ad.clamp(0, _ads.length - 1)];
  _movie(c, s, t, a[0] as List<Color>, a[1] as List<_Scene>);
}
