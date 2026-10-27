import 'dart:math' as math;

import 'package:flutter/material.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Screens for the Electronics Lab TV and phone: NGMY ads and little apps.
// Everything is drawn live from the clock, so there are no video files.
// ═════════════════════════════════════════════════════════════════════════════

/// Draws [text] centred on [center], shrinking it so that it never gets wider than [maxW].
void _label(Canvas c, String text, Offset center, double size, Color col, {double maxW = 9999, bool bold = true, double spacing = 0}) {
  var sz = size;
  TextPainter make(double s) => TextPainter(
        text: TextSpan(text: text, style: TextStyle(color: col, fontSize: s, fontWeight: bold ? FontWeight.w900 : FontWeight.w600, letterSpacing: spacing)),
        textDirection: TextDirection.ltr,
        maxLines: 1,
      )..layout();
  var tp = make(sz);
  if (tp.width > maxW && tp.width > 0) {
    sz = math.max(2.0, sz * maxW / tp.width);
    tp = make(sz);
  }
  tp.paint(c, center - Offset(tp.width / 2, tp.height / 2));
}

/// Draws a paragraph that wraps inside [rect].
void _para(Canvas c, String text, Rect rect, double size, Color col, {TextAlign align = TextAlign.center, bool bold = false}) {
  final tp = TextPainter(
    text: TextSpan(text: text, style: TextStyle(color: col, fontSize: size, height: 1.3, fontWeight: bold ? FontWeight.w800 : FontWeight.w600)),
    textDirection: TextDirection.ltr,
    textAlign: align,
    maxLines: 6,
  )..layout(maxWidth: rect.width);
  tp.paint(c, Offset(rect.left, rect.top + math.max(0, (rect.height - tp.height) / 2)));
}

Paint _fill(Color c) => Paint()..color = c;
Paint _stroke(Color c, double w) => Paint()..style = PaintingStyle.stroke..strokeWidth = w..color = c..strokeCap = StrokeCap.round;

// ─── NGMY ads ────────────────────────────────────────────────────────────────

class _Ad {
  const _Ad(this.brand, this.line, this.emoji, this.a, this.b);
  final String brand, line, emoji;
  final Color a, b;
}

const List<_Ad> _kAds = [
  _Ad('NGMY Family Book', 'Write your family story', '📖', Color(0xFF7C3AED), Color(0xFFDB2777)),
  _Ad('NGMY Wallet', 'Save, send and win coins', '🪙', Color(0xFFB45309), Color(0xFFFACC15)),
  _Ad('NGMY Games', 'Play, win and learn', '🎮', Color(0xFF1D4ED8), Color(0xFF22D3EE)),
  _Ad('NGMY Electronics Lab', 'Build real circuits', '💡', Color(0xFF0F766E), Color(0xFF38BDF8)),
  _Ad('NGMY Advisors', 'Friendly help, any time', '💬', Color(0xFF4338CA), Color(0xFFA78BFA)),
  _Ad('NGMY Learn', 'Swahili and more', '🎓', Color(0xFF15803D), Color(0xFF86EFAC)),
  _Ad('NGMY Family Tree', 'Grow your family tree', '🌳', Color(0xFF166534), Color(0xFFFDE68A)),
  _Ad('NGMY Helper', 'Ask anything, get an answer', '🤖', Color(0xFF9D174D), Color(0xFFFB923C)),
];

/// How many different NGMY ads the loop plays.
int get kNgmyAdCount => _kAds.length;

String ngmyAdName(double t) => _kAds[((t / 5).floor()) % _kAds.length].brand;

/// One NGMY ad after another, five seconds each.
void paintNgmyAd(Canvas c, Size s, double t) {
  const len = 5.0;
  final i = ((t / len).floor()) % _kAds.length;
  final lt = t % len;
  final ad = _kAds[i];
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [ad.a, ad.b]).createShader(Offset.zero & s));
  // Soft moving bubbles.
  final r = math.Random(i + 3);
  for (var k = 0; k < 9; k++) {
    final x = ((r.nextDouble() * w + math.sin(t * 0.7 + k) * w * 0.05) % w);
    final y = (h - ((t * (6 + r.nextDouble() * 14) + r.nextDouble() * h) % (h + 20))) + 10;
    c.drawCircle(Offset(x, y), 2 + r.nextDouble() * h * 0.05, _fill(Colors.white.withValues(alpha: 0.16)));
  }
  final landscape = w >= h;
  final pop = Curves.elasticOut.transform((lt / 0.9).clamp(0.0, 1.0));
  final em = Offset(w / 2, h * (landscape ? 0.4 : 0.34) + math.sin(t * 3) * h * 0.012);
  c.drawCircle(em, h * 0.2 * pop, _fill(Colors.white.withValues(alpha: 0.2)));
  c.save();
  c.translate(em.dx, em.dy);
  c.scale(pop.clamp(0.01, 1.5));
  _label(c, ad.emoji, Offset.zero, h * (landscape ? 0.26 : 0.17), Colors.white);
  c.restore();
  final slide = Curves.easeOutCubic.transform(((lt - 0.3) / 0.6).clamp(0.0, 1.0));
  c.save();
  c.translate((1 - slide) * w * 0.3, 0);
  final a = slide.clamp(0.0, 1.0);
  _label(c, ad.brand, Offset(w / 2, h * (landscape ? 0.68 : 0.58)), h * (landscape ? 0.1 : 0.07), Colors.white.withValues(alpha: a), maxW: w * 0.92);
  _label(c, ad.line, Offset(w / 2, h * (landscape ? 0.8 : 0.67)), h * (landscape ? 0.058 : 0.045), Colors.white.withValues(alpha: 0.9 * a), maxW: w * 0.92, bold: false);
  c.restore();
  // Dots show which ad this is; the little tag says it is an ad.
  for (var k = 0; k < _kAds.length; k++) {
    c.drawCircle(Offset(w / 2 + (k - (_kAds.length - 1) / 2) * h * 0.04, h * 0.94), h * 0.011 + (k == i ? h * 0.005 : 0), _fill(Colors.white.withValues(alpha: k == i ? 0.95 : 0.35)));
  }
  _label(c, 'AD', Offset(w - h * 0.07, h * 0.06), h * 0.045, Colors.white.withValues(alpha: 0.85), spacing: 1);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(w - h * 0.07, h * 0.06), width: h * 0.1, height: h * 0.065), Radius.circular(h * 0.02)), _stroke(Colors.white70, 1));
}

// ─── Apps ────────────────────────────────────────────────────────────────────

class NgmyApp {
  const NgmyApp(this.name, this.emoji, this.color, this.blurb);
  final String name, emoji, blurb;
  final Color color;
}

const List<NgmyApp> kNgmyApps = [
  NgmyApp('NGMY Ads', '📢', Color(0xFFF472B6), 'Ads for everything NGMY'),
  NgmyApp('Clock', '🕒', Color(0xFF38BDF8), 'The real time, right now'),
  NgmyApp('Weather', '⛅', Color(0xFFFBBF24), 'Sun, cloud, rain and snow'),
  NgmyApp('Music', '🎵', Color(0xFFA78BFA), 'NGMY Beats'),
  NgmyApp('Photos', '🖼️', Color(0xFF34D399), 'A slideshow of places'),
  NgmyApp('Arcade', '🕹️', Color(0xFFF87171), 'Pong plays itself'),
  NgmyApp('News', '📰', Color(0xFFE2E8F0), 'NGMY News today'),
  NgmyApp('School', '🎓', Color(0xFF4ADE80), 'Learn electricity'),
];

void paintNgmyApp(Canvas c, Size s, int app, double t) {
  c.save();
  c.clipRect(Offset.zero & s);
  switch (app % kNgmyApps.length) {
    case 0:
      paintNgmyAd(c, s, t);
    case 1:
      _clockApp(c, s, t);
    case 2:
      _weather(c, s, t);
    case 3:
      _music(c, s, t);
    case 4:
      _photos(c, s, t);
    case 5:
      _arcade(c, s, t);
    case 6:
      _news(c, s, t);
    default:
      _school(c, s, t);
  }
  c.restore();
}

void _clockApp(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF0B1220), Color(0xFF1E1B4B)]).createShader(Offset.zero & s));
  final now = DateTime.now();
  final landscape = w >= h;
  final centre = Offset(landscape ? w * 0.3 : w / 2, landscape ? h / 2 : h * 0.34);
  final rad = math.min(landscape ? w * 0.22 : w * 0.38, h * (landscape ? 0.36 : 0.26));
  c.drawCircle(centre, rad, _fill(const Color(0xFF111827)));
  c.drawCircle(centre, rad, _stroke(const Color(0xFF38BDF8), rad * 0.05));
  for (var k = 0; k < 12; k++) {
    final a = k * math.pi / 6;
    c.drawLine(centre + Offset(math.cos(a), math.sin(a)) * rad * 0.82, centre + Offset(math.cos(a), math.sin(a)) * rad * 0.94, _stroke(Colors.white70, k % 3 == 0 ? rad * 0.04 : rad * 0.02));
  }
  void hand(double frac, double len, double wd, Color col) {
    final a = frac * math.pi * 2 - math.pi / 2;
    c.drawLine(centre, centre + Offset(math.cos(a), math.sin(a)) * rad * len, _stroke(col, wd));
  }
  final sec = now.second + now.millisecond / 1000;
  hand((now.hour % 12 + now.minute / 60) / 12, 0.5, rad * 0.07, Colors.white);
  hand((now.minute + sec / 60) / 60, 0.75, rad * 0.05, Colors.white);
  hand(sec / 60, 0.88, rad * 0.025, const Color(0xFFEF4444));
  c.drawCircle(centre, rad * 0.06, _fill(const Color(0xFFEF4444)));
  final hh = now.hour.toString().padLeft(2, '0'), mm = now.minute.toString().padLeft(2, '0'), ss = now.second.toString().padLeft(2, '0');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  final tc = landscape ? Offset(w * 0.7, h * 0.45) : Offset(w / 2, h * 0.7);
  _label(c, '$hh:$mm', tc, h * (landscape ? 0.2 : 0.11), const Color(0xFF4ADE80), maxW: w * 0.42);
  _label(c, ':$ss', tc + Offset(0, h * (landscape ? 0.14 : 0.08)), h * (landscape ? 0.07 : 0.045), const Color(0xFF86EFAC), maxW: w * 0.4);
  _label(c, '${days[now.weekday - 1]} ${now.day} ${months[now.month - 1]}', tc + Offset(0, h * (landscape ? 0.24 : 0.15)), h * (landscape ? 0.05 : 0.035), Colors.white60, maxW: w * 0.9, bold: false);
}

void _weather(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final ph = (t / 5).floor() % 4;
  const skies = [
    [Color(0xFF38BDF8), Color(0xFFFEF3C7)],
    [Color(0xFF64748B), Color(0xFFCBD5E1)],
    [Color(0xFF334155), Color(0xFF64748B)],
    [Color(0xFF94A3B8), Color(0xFFF1F5F9)],
  ];
  c.drawRect(Offset.zero & s, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: skies[ph]).createShader(Offset.zero & s));
  final cx = w * 0.5, cy = h * 0.34;
  if (ph == 0) {
    c.save();
    c.translate(cx, cy);
    c.rotate(t * 0.4);
    for (var k = 0; k < 12; k++) {
      final a = k * math.pi / 6;
      c.drawLine(Offset(math.cos(a), math.sin(a)) * h * 0.14, Offset(math.cos(a), math.sin(a)) * h * 0.2, _stroke(const Color(0xFFFDE047), h * 0.014));
    }
    c.restore();
    c.drawCircle(Offset(cx, cy), h * 0.11, _fill(const Color(0xFFFDE047)));
  } else {
    for (final o in const [Offset(-0.1, 0.02), Offset(0.02, -0.04), Offset(0.12, 0.02), Offset(0.0, 0.04)]) {
      c.drawCircle(Offset(cx + o.dx * h + math.sin(t + o.dx * 9) * 4, cy + o.dy * h), h * 0.1, _fill(ph == 2 ? const Color(0xFF1E293B) : Colors.white));
    }
  }
  if (ph == 2) {
    for (var k = 0; k < 36; k++) {
      final x = (k * 41.0 + t * 30) % w;
      final y = (k * 59.0 + t * 280) % (h * 0.8);
      c.drawLine(Offset(x, y), Offset(x - 3, y + h * 0.03), _stroke(const Color(0xFFBAE6FD), 1.4));
    }
  } else if (ph == 3) {
    for (var k = 0; k < 40; k++) {
      final x = ((k * 47.0 + math.sin(t + k) * 12) % w);
      final y = (k * 61.0 + t * 50) % (h * 0.85);
      c.drawCircle(Offset(x, y), 2.2, _fill(Colors.white));
    }
  }
  const names = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'];
  const temps = ['27°', '21°', '16°', '-2°'];
  _label(c, temps[ph], Offset(cx, h * 0.62), h * 0.16, Colors.white, maxW: w * 0.5);
  _label(c, names[ph], Offset(cx, h * 0.74), h * 0.06, Colors.white.withValues(alpha: 0.9), maxW: w * 0.6, bold: false);
  const em = ['☀️', '☁️', '🌧️', '❄️'];
  for (var k = 0; k < 4; k++) {
    final x = w * (0.2 + k * 0.2);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(x, h * 0.88), width: w * 0.16, height: h * 0.14), Radius.circular(h * 0.03)), _fill(Colors.black.withValues(alpha: 0.25)));
    _label(c, em[(ph + k) % 4], Offset(x, h * 0.865), h * 0.055, Colors.white);
    _label(c, temps[(ph + k) % 4], Offset(x, h * 0.915), h * 0.03, Colors.white70, maxW: w * 0.14);
  }
}

void _music(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF1E1B4B), Color(0xFF7E22CE), Color(0xFFDB2777)]).createShader(Offset.zero & s));
  final landscape = w >= h;
  final vc = Offset(landscape ? w * 0.27 : w / 2, landscape ? h * 0.46 : h * 0.3);
  final vr = math.min(landscape ? w * 0.2 : w * 0.3, h * 0.28);
  c.drawCircle(vc, vr, _fill(const Color(0xFF111827)));
  for (var k = 1; k < 5; k++) {
    c.drawCircle(vc, vr * (0.35 + k * 0.14), _stroke(Colors.white.withValues(alpha: 0.08), 1));
  }
  c.save();
  c.translate(vc.dx, vc.dy);
  c.rotate(t * 1.6);
  c.drawCircle(Offset.zero, vr * 0.3, _fill(const Color(0xFFF472B6)));
  c.drawCircle(Offset(vr * 0.16, 0), vr * 0.04, _fill(Colors.white70));
  c.restore();
  c.drawCircle(vc, vr * 0.05, _fill(Colors.black));
  final bx = landscape ? w * 0.52 : w * 0.1;
  final bw = landscape ? w * 0.4 : w * 0.8;
  final by = landscape ? h * 0.2 : h * 0.55;
  final bh = landscape ? h * 0.4 : h * 0.18;
  const n = 18;
  for (var k = 0; k < n; k++) {
    final v = ((math.sin(t * 3 + k * 0.7) + math.sin(t * 5.1 + k * 1.3) + 2) / 4).clamp(0.05, 1.0);
    final x = bx + bw / n * k;
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(x, by + bh * (1 - v), bw / n * 0.7, bh * v), const Radius.circular(3)), _fill(Color.lerp(const Color(0xFF22D3EE), const Color(0xFFF472B6), k / n)!));
  }
  final tx = landscape ? Offset(w * 0.72, h * 0.72) : Offset(w / 2, h * 0.8);
  _label(c, 'NGMY Beats', tx, h * (landscape ? 0.08 : 0.055), Colors.white, maxW: w * 0.8);
  _label(c, 'Now playing: Spark Song ${(t / 20).floor() % 9 + 1}', tx + Offset(0, h * 0.075), h * (landscape ? 0.045 : 0.032), Colors.white70, maxW: w * 0.85, bold: false);
  final prog = (t % 20) / 20;
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.1, h * 0.93, w * 0.8, h * 0.012), const Radius.circular(3)), _fill(Colors.white24));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.1, h * 0.93, w * 0.8 * prog, h * 0.012), const Radius.circular(3)), _fill(Colors.white));
}

void _photos(Canvas c, Size s, double t) {
  const each = 5.0;
  final i = (t / each).floor() % 4;
  final lt = t % each;
  void scene(int k, double zoom, double alpha) {
    final w = s.width, h = s.height;
    c.saveLayer(Offset.zero & s, Paint()..color = Colors.white.withValues(alpha: alpha));
    c.translate(w / 2, h / 2);
    c.scale(zoom);
    c.translate(-w / 2, -h / 2);
    switch (k) {
      case 0: // mountains
        c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF38BDF8), Color(0xFFFEF3C7)]).createShader(Offset.zero & s));
        c.drawPath(Path()..moveTo(0, h)..lineTo(w * 0.25, h * 0.35)..lineTo(w * 0.5, h * 0.7)..lineTo(w * 0.75, h * 0.3)..lineTo(w, h)..close(), _fill(const Color(0xFF475569)));
        c.drawPath(Path()..moveTo(w * 0.25, h * 0.35)..lineTo(w * 0.2, h * 0.47)..lineTo(w * 0.3, h * 0.47)..close(), _fill(Colors.white));
        c.drawPath(Path()..moveTo(w * 0.75, h * 0.3)..lineTo(w * 0.69, h * 0.44)..lineTo(w * 0.81, h * 0.44)..close(), _fill(Colors.white));
        c.drawRect(Rect.fromLTWH(0, h * 0.82, w, h * 0.18), _fill(const Color(0xFF166534)));
      case 1: // sunset beach
        c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7C2D12), Color(0xFFF97316), Color(0xFFFDE68A)]).createShader(Offset.zero & s));
        c.drawCircle(Offset(w * 0.5, h * 0.52), h * 0.14, _fill(const Color(0xFFFEF9C3)));
        c.drawRect(Rect.fromLTWH(0, h * 0.55, w, h * 0.3), _fill(const Color(0xFF0369A1)));
        c.drawRect(Rect.fromLTWH(0, h * 0.85, w, h * 0.15), _fill(const Color(0xFFFDE68A)));
        c.drawLine(Offset(w * 0.8, h * 0.9), Offset(w * 0.82, h * 0.55), _stroke(const Color(0xFF78350F), h * 0.02));
        for (var k = 0; k < 5; k++) {
          final a = -2.6 + k * 0.5;
          c.drawLine(Offset(w * 0.82, h * 0.55), Offset(w * 0.82 + math.cos(a) * h * 0.13, h * 0.55 + math.sin(a) * h * 0.1), _stroke(const Color(0xFF15803D), h * 0.012));
        }
      case 2: // city at night
        c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF020617), Color(0xFF312E81)]).createShader(Offset.zero & s));
        final r = math.Random(5);
        for (var k = 0; k < 8; k++) {
          final bw = w * 0.1, bh = h * (0.25 + r.nextDouble() * 0.4);
          final x = w * (0.04 + k * 0.12);
          c.drawRect(Rect.fromLTWH(x, h - bh, bw, bh), _fill(const Color(0xFF111827)));
          for (var q = 0; q < 14; q++) {
            if (r.nextDouble() < 0.6) c.drawRect(Rect.fromLTWH(x + bw * 0.15 + (q % 3) * bw * 0.3, h - bh + h * 0.04 + (q ~/ 3) * h * 0.06, bw * 0.15, h * 0.03), _fill(const Color(0xFFFDE047)));
          }
        }
        c.drawCircle(Offset(w * 0.85, h * 0.2), h * 0.05, _fill(const Color(0xFFF1F5F9)));
      default: // forest
        c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFBBF7D0), Color(0xFF166534)]).createShader(Offset.zero & s));
        for (var k = 0; k < 7; k++) {
          final x = w * (0.08 + k * 0.14), th = h * (0.35 + 0.1 * (k % 3));
          c.drawRect(Rect.fromLTWH(x - h * 0.012, h * 0.9 - th * 0.3, h * 0.024, th * 0.3), _fill(const Color(0xFF78350F)));
          c.drawPath(Path()..moveTo(x, h * 0.9 - th)..lineTo(x - h * 0.08, h * 0.9 - th * 0.25)..lineTo(x + h * 0.08, h * 0.9 - th * 0.25)..close(), _fill(Color.lerp(const Color(0xFF15803D), const Color(0xFF052E16), k / 7)!));
        }
    }
    c.restore();
  }
  final z = 1 + 0.06 * (lt / each);
  scene(i, z, 1);
  if (lt > each - 0.8) scene((i + 1) % 4, 1, (lt - (each - 0.8)) / 0.8);
  final w = s.width, h = s.height;
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.04, h * 0.84, w * 0.5, h * 0.11), Radius.circular(h * 0.03)), _fill(Colors.black54));
  const names = ['Mountain walk', 'Sunset at the beach', 'City lights', 'Forest trail'];
  _label(c, '🖼️ ${names[i]}', Offset(w * 0.29, h * 0.895), h * 0.045, Colors.white, maxW: w * 0.46);
}

void _arcade(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, _fill(const Color(0xFF020617)));
  for (var y = h * 0.04; y < h; y += h * 0.07) {
    c.drawRect(Rect.fromLTWH(w / 2 - 1.5, y, 3, h * 0.035), _fill(Colors.white24));
  }
  double tri(double x) => (x % 2 < 1 ? x % 2 : 2 - x % 2);
  final bx = w * (0.08 + 0.84 * tri(t * 0.55));
  final by = h * (0.12 + 0.72 * tri(t * 0.83 + 0.3));
  final pad = h * 0.2;
  final ly = (by - pad / 2).clamp(0.0, h - pad), ry = (h * (0.12 + 0.72 * tri(t * 0.83 + 0.45)) - pad / 2).clamp(0.0, h - pad);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.04, ly, w * 0.02, pad), const Radius.circular(3)), _fill(const Color(0xFF4ADE80)));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.94, ry, w * 0.02, pad), const Radius.circular(3)), _fill(const Color(0xFFF472B6)));
  c.drawCircle(Offset(bx, by), h * 0.025, _fill(Colors.white));
  c.drawCircle(Offset(bx, by), h * 0.05, _fill(Colors.white.withValues(alpha: 0.15)));
  _label(c, '${(t / 4).floor() % 10}', Offset(w * 0.4, h * 0.12), h * 0.12, const Color(0xFF4ADE80));
  _label(c, '${(t / 5).floor() % 10}', Offset(w * 0.6, h * 0.12), h * 0.12, const Color(0xFFF472B6));
  _label(c, 'NGMY ARCADE', Offset(w / 2, h * 0.94), h * 0.055, Colors.white54, maxW: w * 0.8, spacing: 2);
}

const List<String> _kHeadlines = [
  'Students build a working TV from a battery and some wires',
  'Family trees grow bigger every week on NGMY',
  'New games arrive in the NGMY Arcade',
  'Solar panels now charge flat batteries in the lab',
  'A step-down converter saves a phone from burning out',
  'The NGMY Wallet makes saving coins simple',
  'Kids learn Swahili with picture cards',
  'Wind turbine lights a whole village in a story',
];

void _news(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1E3A8A), Color(0xFF0F172A)]).createShader(Offset.zero & s));
  c.drawRect(Rect.fromLTWH(0, 0, w, h * 0.16), _fill(const Color(0xFFDC2626)));
  _label(c, 'NGMY NEWS', Offset(w / 2, h * 0.08), h * 0.09, Colors.white, maxW: w * 0.8, spacing: 2);
  final i = (t / 6).floor();
  final lt = t % 6;
  final k = Curves.easeOutCubic.transform((lt / 0.6).clamp(0.0, 1.0));
  c.save();
  c.translate((1 - k) * w * 0.4, 0);
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.06, h * 0.24, w * 0.88, h * 0.4), Radius.circular(h * 0.03)), _fill(Colors.white.withValues(alpha: 0.1 * k + 0.02)));
  _para(c, _kHeadlines[i % _kHeadlines.length], Rect.fromLTWH(w * 0.1, h * 0.26, w * 0.8, h * 0.36), h * 0.072, Colors.white.withValues(alpha: k), bold: true);
  c.restore();
  c.drawRect(Rect.fromLTWH(0, h * 0.76, w, h * 0.1), _fill(Colors.black54));
  final text = _kHeadlines.join('   •   ');
  final tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: const Color(0xFFFDE047), fontSize: h * 0.05, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr, maxLines: 1)..layout();
  tp.paint(c, Offset(w - (t * h * 0.35) % (tp.width + w), h * 0.775));
  _label(c, 'LIVE', Offset(w * 0.08, h * 0.22), h * 0.04, const Color(0xFFEF4444), spacing: 1);
}

class _SchoolCard {
  const _SchoolCard(this.title, this.body, this.formula, this.speed);
  final String title, body, formula;
  final double speed;
}

const List<_SchoolCard> _kSchool = [
  _SchoolCard('VOLTS (V)', 'The push that moves electricity round a loop. Like water pressure in a pipe. A bigger battery has more volts.', '9 V = a strong push', 1.4),
  _SchoolCard('AMPS (A)', 'How much electricity flows past each second. Like how much water runs through the pipe.', '0.5 A = half an amp', 1.0),
  _SchoolCard('OHMS (Ω)', 'How much a part holds the flow back. A resistor is made just to do this.', 'Big Ω = small flow', 0.5),
  _SchoolCard("OHM'S LAW", 'Volts, amps and ohms are linked. If you know two, you can work out the third.', 'V = I × R', 1.0),
  _SchoolCard('WATTS (W)', 'Power is how fast energy is used. Multiply the volts by the amps.', 'W = V × I', 1.2),
  _SchoolCard('SAFETY', 'Too many volts burn a gadget. A step-down converter brings the volts down so a phone is safe on a 9 V battery.', '9 V → 5 V', 1.0),
  _SchoolCard('DIODES', 'A diode lets electricity go one way only. It drops about 0.7 V and protects parts from being wired backwards.', '→|→ one way', 0.9),
  _SchoolCard('FUSES', 'A fuse is the weak link on purpose. It melts first, so the loop breaks and nothing catches fire.', 'Fuse melts, parts live', 0.9),
];

void _school(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  c.drawRect(Offset.zero & s, _fill(const Color(0xFF3F2A14)));
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.02, h * 0.03, w * 0.96, h * 0.94), Radius.circular(h * 0.03)), _fill(const Color(0xFF14532D)));
  final i = (t / 8).floor() % _kSchool.length;
  final card = _kSchool[i];
  final lt = t % 8;
  final a = (lt < 0.5 ? lt / 0.5 : (lt > 7.5 ? (8 - lt) / 0.5 : 1.0)).clamp(0.0, 1.0);
  _label(c, '🎓 ${card.title}', Offset(w / 2, h * 0.14), h * 0.085, const Color(0xFFFDE047).withValues(alpha: a), maxW: w * 0.86, spacing: 1);
  _para(c, card.body, Rect.fromLTWH(w * 0.1, h * 0.22, w * 0.8, h * 0.3), h * 0.055, Colors.white.withValues(alpha: a));
  // A loop with moving dots: faster dots for more current.
  final loop = RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.2, h * 0.56, w * 0.6, h * 0.2), Radius.circular(h * 0.05));
  final path = Path()..addRRect(loop);
  c.drawPath(path, _stroke(Colors.white.withValues(alpha: 0.5 * a), 3));
  final m = path.computeMetrics().first;
  for (var k = 0; k < 14; k++) {
    final d = ((t * card.speed * 0.12 + k / 14) % 1.0) * m.length;
    c.drawCircle(m.getTangentForOffset(d)!.position, h * 0.012, _fill(const Color(0xFFFDE047).withValues(alpha: a)));
  }
  _label(c, '🔋', Offset(w * 0.2, h * 0.66), h * 0.07, Colors.white.withValues(alpha: a));
  _label(c, '💡', Offset(w * 0.8, h * 0.66), h * 0.07, Colors.white.withValues(alpha: a));
  _label(c, card.formula, Offset(w / 2, h * 0.87), h * 0.085, const Color(0xFF86EFAC).withValues(alpha: a), maxW: w * 0.86);
}

// ─── The big phone ───────────────────────────────────────────────────────────

Future<void> showNgmyPhoneScreen(BuildContext context, {int charge = 0}) {
  return Navigator.of(context).push<void>(PageRouteBuilder(
    opaque: true,
    transitionDuration: const Duration(milliseconds: 260),
    pageBuilder: (_, __, ___) => NgmyPhoneScreen(charge: charge),
    transitionsBuilder: (_, a, __, child) => FadeTransition(opacity: a, child: ScaleTransition(scale: Tween(begin: 0.85, end: 1.0).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: child)),
  ));
}

class NgmyPhoneScreen extends StatefulWidget {
  const NgmyPhoneScreen({super.key, this.charge = 0});

  /// How full the battery looked when the phone was opened (0..100).
  final int charge;

  @override
  State<NgmyPhoneScreen> createState() => _NgmyPhoneScreenState();
}

class _NgmyPhoneScreenState extends State<NgmyPhoneScreen> with SingleTickerProviderStateMixin {
  late final AnimationController _clock = AnimationController(vsync: this, duration: const Duration(days: 1))..forward();
  int? _open;

  @override
  void dispose() {
    _clock.dispose();
    super.dispose();
  }

  double get _t => (_clock.lastElapsedDuration?.inMilliseconds ?? 0) / 1000;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF05070C),
      body: SafeArea(
        child: Stack(children: [
          Center(
            child: AspectRatio(
              aspectRatio: 9 / 18.5,
              child: Container(
                margin: const EdgeInsets.all(10),
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(34), border: Border.all(color: const Color(0xFF334155), width: 5), boxShadow: [BoxShadow(color: const Color(0xFF60A5FA).withValues(alpha: 0.25), blurRadius: 36)]),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(28),
                  child: AnimatedBuilder(
                    animation: _clock,
                    builder: (_, __) => _open == null ? _home() : _app(_open!),
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            top: 8,
            left: 8,
            child: IconButton(onPressed: () => Navigator.of(context).maybePop(), tooltip: 'Back to the board', style: IconButton.styleFrom(backgroundColor: Colors.black54), icon: const Icon(Icons.close_rounded, color: Colors.white)),
          ),
        ]),
      ),
    );
  }

  Widget _status() {
    final now = DateTime.now();
    final pct = (widget.charge + (_t * 0.4).floor()).clamp(0, 100);
    return Padding(
      padding: const EdgeInsets.fromLTRB(56, 10, 18, 4),
      child: Row(children: [
        Text('${now.hour.toString().padLeft(2, '0')}:${now.minute.toString().padLeft(2, '0')}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
        const Spacer(),
        const Text('⚡ ', style: TextStyle(fontSize: 11)),
        Text('$pct%', style: const TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900, fontSize: 12)),
      ]),
    );
  }

  Widget _home() {
    return Container(
      decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF0C4A6E), Color(0xFF312E81), Color(0xFF831843)])),
      child: Column(children: [
        _status(),
        const SizedBox(height: 4),
        const Text('NGMY Phone', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 1)),
        const SizedBox(height: 10),
        GestureDetector(
          onTap: () => setState(() => _open = 0),
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 14),
            height: 140,
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(20), border: Border.all(color: Colors.white24)),
            child: ClipRRect(borderRadius: BorderRadius.circular(19), child: CustomPaint(painter: _ScreenPainter(0, _t), size: Size.infinite)),
          ),
        ),
        const SizedBox(height: 12),
        Expanded(
          child: GridView.count(
            padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
            crossAxisCount: 4,
            mainAxisSpacing: 12,
            crossAxisSpacing: 8,
            childAspectRatio: 0.86,
            children: [
              for (var k = 0; k < kNgmyApps.length; k++)
                GestureDetector(
                  onTap: () => setState(() => _open = k),
                  child: Column(children: [
                    Container(
                      width: 52,
                      height: 52,
                      decoration: BoxDecoration(color: kNgmyApps[k].color.withValues(alpha: 0.25), borderRadius: BorderRadius.circular(16), border: Border.all(color: kNgmyApps[k].color.withValues(alpha: 0.7))),
                      child: Center(child: Text(kNgmyApps[k].emoji, style: const TextStyle(fontSize: 26))),
                    ),
                    const SizedBox(height: 4),
                    Text(kNgmyApps[k].name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 10.5, fontWeight: FontWeight.w800)),
                  ]),
                ),
            ],
          ),
        ),
      ]),
    );
  }

  Widget _app(int k) {
    return Container(
      color: Colors.black,
      child: Column(children: [
        Container(color: Colors.black, child: _status()),
        Expanded(child: CustomPaint(painter: _ScreenPainter(k, _t), size: Size.infinite)),
        GestureDetector(
          onTap: () => setState(() => _open = null),
          child: Container(
            height: 46,
            color: Colors.black,
            child: Center(child: Container(width: 120, height: 5, decoration: BoxDecoration(color: Colors.white70, borderRadius: BorderRadius.circular(3)))),
          ),
        ),
      ]),
    );
  }
}

class _ScreenPainter extends CustomPainter {
  _ScreenPainter(this.app, this.t);
  final int app;
  final double t;

  @override
  void paint(Canvas canvas, Size size) => paintNgmyApp(canvas, size, app, t);

  @override
  bool shouldRepaint(covariant _ScreenPainter old) => true;
}
