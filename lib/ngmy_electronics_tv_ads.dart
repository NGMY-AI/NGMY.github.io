import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'ngmy_text_cache.dart';

// Channel 6 of the lab TV: Spark Adventure, a short 3D film. A real looking circuit board is seen at an angle in a dark
// studio: gold tracks, a battery standing up, a switch whose lever drops shut, a striped resistor, a blue capacitor,
// two NGMY chips and a glass bulb. A glowing spark with a trail of light races round the tracks, and the bulb lights up
// when it gets there. Short captions say what happens, and the end card invites you to build it in the Electronics Lab.
// Everything is drawn live from the clock (no video files). One run is ten seconds (one channel turn of the TV).

const double _kLoop = 10.0;
const String _kFont = 'Roboto';

double _k(double t, double from, double len) => ((t - from) / len).clamp(0.0, 1.0);
double _ease(double x) => Curves.easeOutCubic.transform(x.clamp(0.0, 1.0));

double _text(Canvas c, String s, Offset o, double size, Color col, {double maxW = 1e9, double align = 0, FontWeight w = FontWeight.w900, double ls = 0, List<Color>? grad}) {
  if (size < 1 || s.isEmpty) return 0;
  TextPainter make(double v) => grad == null
      ? ngmyCachedText(s, TextStyle(fontFamily: _kFont, fontSize: ngmyTextSizeStep(v), fontWeight: w, letterSpacing: ls, height: 1.1, color: ngmyTextColorStep(col)))
      : TextPainter(
        text: TextSpan(
          text: s,
          style: TextStyle(
            fontFamily: _kFont,
            fontSize: v,
            fontWeight: w,
            letterSpacing: ls,
            height: 1.1,
            foreground: Paint()..shader = LinearGradient(colors: grad).createShader(Rect.fromLTWH(o.dx - align * maxW.clamp(0, 4000), o.dy, maxW.clamp(1, 4000).toDouble(), v)),
          ),
        ),
        textDirection: TextDirection.ltr,
        maxLines: 1,
      )..layout();
  var tp = make(size);
  if (tp.width > maxW && tp.width > 0) tp = make(size * maxW / tp.width);
  tp.paint(c, Offset(o.dx - tp.width * align, o.dy));
  return tp.height;
}

/// The camera: the board lies flat (x right, z away, y up) and is seen from the front and above, turning slowly.
class _Cam {
  _Cam(this.size, double t) {
    yaw = math.sin(t * 0.32) * 0.22;
    tilt = 0.86 + math.sin(t * 0.21) * 0.05;
    f = size.height * 1.8;
    centre = Offset(size.width * 0.5, size.height * 0.5);
  }
  final Size size;
  late final double yaw, tilt, f;
  late final Offset centre;
  static const double dist = 6.0;

  /// Where a point of the board world is on the screen, and how big things are there.
  (Offset, double) p(double x, double y, double z) {
    final cy = math.cos(yaw), sy = math.sin(yaw);
    final xr = x * cy - z * sy;
    final zr = x * sy + z * cy;
    final ct = math.cos(tilt), st = math.sin(tilt);
    final up = y * ct + zr * st;
    final depth = dist + zr * ct - y * st;
    final k = f / depth;
    return (Offset(centre.dx + xr * k, centre.dy - up * k + size.height * 0.03), k);
  }

  Offset o(double x, double y, double z) => p(x, y, z).$1;
}

Color _lift(Color c, double k) => Color.lerp(c, Colors.white, k)!;
Color _sink(Color c, double k) => Color.lerp(c, Colors.black, k)!;

/// A box standing on the board: its top and the two sides you can see, lit from the top left.
void _box(Canvas c, _Cam cam, double x, double z, double w, double d, double h, Color col, {double y0 = 0}) {
  final x0 = x - w / 2, x1 = x + w / 2, z0 = z - d / 2, z1 = z + d / 2, y1 = y0 + h;
  Path quad(List<Offset> pts) => Path()..addPolygon(pts, true);
  // The front face (towards the camera) and the side face that turns towards it.
  c.drawPath(quad([cam.o(x0, y0, z0), cam.o(x1, y0, z0), cam.o(x1, y1, z0), cam.o(x0, y1, z0)]), Paint()..color = _sink(col, 0.28));
  final sideRight = cam.yaw < 0;
  final sx = sideRight ? x1 : x0;
  c.drawPath(quad([cam.o(sx, y0, z0), cam.o(sx, y0, z1), cam.o(sx, y1, z1), cam.o(sx, y1, z0)]), Paint()..color = _sink(col, 0.45));
  final top = quad([cam.o(x0, y1, z0), cam.o(x1, y1, z0), cam.o(x1, y1, z1), cam.o(x0, y1, z1)]);
  c.drawPath(top, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [_lift(col, 0.25), col]).createShader(top.getBounds()));
}

/// A cylinder standing on the board, shaded round like metal or plastic.
void _cyl(Canvas c, _Cam cam, double x, double z, double r, double h, List<Color> body, Color top, {double y0 = 0}) {
  final (b, kb) = cam.p(x, y0, z);
  final (tp, kt) = cam.p(x, y0 + h, z);
  final rb = r * kb, rt = r * kt;
  final squash = math.sin(cam.tilt) * 0.55 + 0.1;
  final rect = Rect.fromLTRB(math.min(b.dx - rb, tp.dx - rt), tp.dy, math.max(b.dx + rb, tp.dx + rt), b.dy);
  final path = Path()
    ..moveTo(tp.dx - rt, tp.dy)
    ..lineTo(b.dx - rb, b.dy)
    ..arcTo(Rect.fromCenter(center: b, width: rb * 2, height: rb * 2 * squash), math.pi, -math.pi, false)
    ..lineTo(tp.dx + rt, tp.dy)
    ..close();
  c.drawPath(path, Paint()..shader = LinearGradient(colors: body, stops: body.length == 3 ? const [0.0, 0.35, 1.0] : null).createShader(rect));
  final topOval = Rect.fromCenter(center: tp, width: rt * 2, height: rt * 2 * squash);
  c.drawOval(topOval, Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.4), colors: [_lift(top, 0.4), top]).createShader(topOval));
}

/// The loop of gold track: battery (left), switch and resistor (back), bulb (right), capacitor (front).
const double _lx = 1.25, _lz = 0.62;
double get _perimeter => 4 * _lx + 4 * _lz;

/// Where the bulb is on the loop (0 to 1).
double get _bulbAt => (2 * _lz + 2 * _lx + _lz) / _perimeter;

/// The point on the track at [s] (0 to 1, round the loop clockwise from the battery).
(double, double) _onLoop(double s) {
  var d = (s % 1.0) * _perimeter;
  final sides = [2 * _lz, 2 * _lx, 2 * _lz, 2 * _lx];
  final starts = [(-_lx, -_lz, 0.0, 1.0), (-_lx, _lz, 1.0, 0.0), (_lx, _lz, 0.0, -1.0), (_lx, -_lz, -1.0, 0.0)];
  for (var i = 0; i < 4; i++) {
    if (d <= sides[i]) {
      final (x, z, dx, dz) = starts[i];
      return (x + dx * d, z + dz * d);
    }
    d -= sides[i];
  }
  return (-_lx, -_lz);
}

void paintSparkAdventure(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  if (w <= 0 || h <= 0) return;
  final lt = t % _kLoop;
  final r = Offset.zero & s;
  c.save();
  c.clipRect(r);
  // The dark studio.
  c.drawRect(r, Paint()..shader = const RadialGradient(center: Alignment(0, -0.2), radius: 1.1, colors: [Color(0xFF0E2A3A), Color(0xFF071521), Color(0xFF020409)], stops: [0.0, 0.55, 1.0]).createShader(r));
  final rich = s.shortestSide >= 120;
  if (rich) {
    final rnd = math.Random(5);
    for (var i = 0; i < 8; i++) {
      final p = Offset((rnd.nextDouble() * w + t * w * 0.01) % w, rnd.nextDouble() * h * 0.5);
      c.drawCircle(p, h * (0.02 + rnd.nextDouble() * 0.04), Paint()
        ..color = const Color(0xFF38BDF8).withValues(alpha: 0.07)
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, h * 0.02));
    }
  }
  final cam = _Cam(s, t);

  // When things happen: the switch closes, the spark goes round, the bulb lights up.
  final close = _ease(_k(lt, 1.6, 0.5));
  final runFrom = 2.2, lap = 3.4;
  final run = lt < runFrom ? -1.0 : (lt - runFrom) / lap;
  // The bulb lights the moment the spark reaches it (half way along the right side of the loop).
  final lit = run >= _bulbAt;
  final glow = lit ? (0.75 + 0.25 * math.sin(t * 9).abs()) : 0.0;

  // The board: a dark green plate with a thickness, a soft shadow under it and a fine grid.
  const bx = 1.75, bz = 1.05, bt = 0.07;
  final shadow = Path()..addPolygon([cam.o(-bx - 0.1, -bt - 0.02, -bz - 0.15), cam.o(bx + 0.1, -bt - 0.02, -bz - 0.15), cam.o(bx + 0.1, -bt - 0.02, bz + 0.1), cam.o(-bx - 0.1, -bt - 0.02, bz + 0.1)], true);
  final sp = Paint()..color = Colors.black.withValues(alpha: 0.55);
  if (rich) sp.maskFilter = MaskFilter.blur(BlurStyle.normal, h * 0.025);
  c.drawPath(shadow, sp);
  c.drawPath(Path()..addPolygon([cam.o(-bx, -bt, -bz), cam.o(bx, -bt, -bz), cam.o(bx, 0, -bz), cam.o(-bx, 0, -bz)], true), Paint()..color = const Color(0xFF05301F));
  final plate = Path()..addPolygon([cam.o(-bx, 0, -bz), cam.o(bx, 0, -bz), cam.o(bx, 0, bz), cam.o(-bx, 0, bz)], true);
  c.drawPath(plate, Paint()..shader = const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF14613F), Color(0xFF0B4A30), Color(0xFF083823)]).createShader(plate.getBounds()));
  if (rich) {
    final g = Paint()
      ..color = const Color(0xFF34D399).withValues(alpha: 0.08)
      ..strokeWidth = 1;
    for (var gx = -bx; gx <= bx + 0.01; gx += 0.25) {
      c.drawLine(cam.o(gx, 0, -bz), cam.o(gx, 0, bz), g);
    }
    for (var gz = -bz; gz <= bz + 0.01; gz += 0.25) {
      c.drawLine(cam.o(-bx, 0, gz), cam.o(bx, 0, gz), g);
    }
  }
  // Mounting holes with gold rings in the corners.
  for (final (hx, hz) in [(-bx + 0.15, -bz + 0.15), (bx - 0.15, -bz + 0.15), (-bx + 0.15, bz - 0.15), (bx - 0.15, bz - 0.15)]) {
    final (p, k) = cam.p(hx, 0, hz);
    final squash = math.sin(cam.tilt) * 0.55 + 0.1;
    c.drawOval(Rect.fromCenter(center: p, width: k * 0.12, height: k * 0.12 * squash), Paint()..color = const Color(0xFFD4A017));
    c.drawOval(Rect.fromCenter(center: p, width: k * 0.06, height: k * 0.06 * squash), Paint()..color = const Color(0xFF020409));
  }

  // The gold track, with a soft glow where the current has been.
  final track = Path();
  for (var i = 0; i <= 120; i++) {
    final (x, z) = _onLoop(i / 120);
    final p = cam.o(x, 0.004, z);
    i == 0 ? track.moveTo(p.dx, p.dy) : track.lineTo(p.dx, p.dy);
  }
  final kMid = cam.p(0, 0, 0).$2;
  c.drawPath(track, Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = kMid * 0.07
    ..strokeJoin = StrokeJoin.round
    ..color = const Color(0xFF8A6A10));
  c.drawPath(track, Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = kMid * 0.045
    ..strokeJoin = StrokeJoin.round
    ..shader = const LinearGradient(colors: [Color(0xFFFDE68A), Color(0xFFD4A017), Color(0xFFFDE68A)]).createShader(r));
  if (lit) {
    final gp = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = kMid * 0.09
      ..color = const Color(0xFF7DD3FC).withValues(alpha: 0.25 + 0.1 * math.sin(t * 6));
    if (rich) gp.maskFilter = MaskFilter.blur(BlurStyle.normal, kMid * 0.04);
    c.drawPath(track, gp);
  }

  // Two NGMY chips inside the loop, with silver legs.
  for (final (cx, cz) in [(-0.35, -0.05), (0.45, 0.05)]) {
    for (var i = 0; i < 5; i++) {
      final lx = cx - 0.2 + i * 0.1;
      _box(c, cam, lx, cz - 0.17, 0.035, 0.08, 0.03, const Color(0xFFCBD5E1));
      _box(c, cam, lx, cz + 0.17, 0.035, 0.08, 0.03, const Color(0xFFCBD5E1));
    }
    _box(c, cam, cx, cz, 0.55, 0.3, 0.08, const Color(0xFF1F2937));
    final (tp, k) = cam.p(cx, 0.081, cz);
    _text(c, 'NGMY', tp - Offset(0, k * 0.05), k * 0.08, Colors.white.withValues(alpha: 0.75), align: 0.5, ls: k * 0.01);
  }

  // Back to front so the near things cover the far ones.
  // The switch (back, left): a base and a lever that drops shut.
  _box(c, cam, -0.55, _lz, 0.34, 0.2, 0.08, const Color(0xFF334155));
  {
    final pivot = cam.o(-0.7, 0.1, _lz);
    final ang = (1 - close) * 0.75;
    final tip = cam.o(-0.7 + 0.32 * math.cos(ang), 0.1 + 0.32 * math.sin(ang), _lz);
    c.drawLine(pivot, tip, Paint()
      ..strokeWidth = kMid * 0.04
      ..strokeCap = StrokeCap.round
      ..shader = const LinearGradient(colors: [Color(0xFFE5E7EB), Color(0xFF9CA3AF)]).createShader(Rect.fromPoints(pivot, tip)));
    c.drawCircle(pivot, kMid * 0.025, Paint()..color = const Color(0xFFEF4444));
    if (close > 0.95 && lt < 2.6) {
      c.drawCircle(tip, kMid * 0.08 * (1 - _k(lt, 2.1, 0.5)), Paint()..color = const Color(0xFFFDE68A).withValues(alpha: 0.8));
    }
  }
  // The resistor (back, right): a beige body with colour bands.
  {
    const rx = 0.55, rz = _lz;
    _box(c, cam, rx, rz, 0.46, 0.12, 0.1, const Color(0xFFE7D2A6), y0: 0.02);
    for (final (i, col) in [(0, const Color(0xFF92400E)), (1, Colors.black), (2, const Color(0xFFDC2626)), (3, const Color(0xFFD4A017))]) {
      _box(c, cam, rx - 0.14 + i * 0.09, rz, 0.035, 0.125, 0.105, col, y0: 0.02);
    }
  }
  // The battery (left): a tall cell standing up, black and copper.
  _cyl(c, cam, -_lx, 0, 0.17, 0.62, const [Color(0xFF111827), Color(0xFF4B5563), Color(0xFF0B0F17)], const Color(0xFFB87333));
  {
    final (bp, k) = cam.p(-_lx, 0.62, 0);
    _cyl(c, cam, -_lx, 0, 0.06, 0.06, const [Color(0xFFB87333), Color(0xFFF5C49A), Color(0xFF8A5523)], const Color(0xFFF5C49A), y0: 0.62);
    final (mid, _) = cam.p(-_lx, 0.3, 0);
    _text(c, '9V', mid - Offset(0, k * 0.06), k * 0.11, const Color(0xFFFACC15), align: 0.5);
    _text(c, '+', bp - Offset(k * 0.16, k * 0.18), k * 0.12, Colors.white70, align: 0.5);
  }
  // The capacitor (front): a blue can with a silver top.
  _cyl(c, cam, 0, -_lz, 0.13, 0.36, const [Color(0xFF1E3A8A), Color(0xFF60A5FA), Color(0xFF172554)], const Color(0xFFD1D5DB));
  // The bulb (right): a base and a glass globe that glows when the spark arrives.
  _cyl(c, cam, _lx, 0, 0.12, 0.16, const [Color(0xFF6B7280), Color(0xFFE5E7EB), Color(0xFF4B5563)], const Color(0xFF9CA3AF));
  {
    final (gp, k) = cam.p(_lx, 0.36, 0);
    final rad = k * 0.22;
    if (glow > 0) {
      final halo = Paint()..shader = RadialGradient(colors: [const Color(0xFFFDE68A).withValues(alpha: 0.65 * glow), const Color(0xFFF59E0B).withValues(alpha: 0.18 * glow), Colors.transparent], stops: const [0.0, 0.4, 1.0]).createShader(Rect.fromCircle(center: gp, radius: rad * 4));
      c.drawCircle(gp, rad * 4, halo);
    }
    final globe = Rect.fromCircle(center: gp, radius: rad);
    c.drawOval(globe, Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.35), colors: glow > 0 ? [Colors.white, const Color(0xFFFDE68A), const Color(0xFFF59E0B)] : [Colors.white.withValues(alpha: 0.5), const Color(0xFF94A3B8).withValues(alpha: 0.35), const Color(0xFF334155).withValues(alpha: 0.55)]).createShader(globe));
    // The filament.
    final fp = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = math.max(1, rad * 0.06)
      ..color = glow > 0 ? Colors.white : const Color(0xFF78716C);
    final fil = Path()..moveTo(gp.dx - rad * 0.35, gp.dy + rad * 0.3);
    for (var i = 0; i < 6; i++) {
      fil.lineTo(gp.dx - rad * 0.35 + rad * 0.14 * (i + 1), gp.dy + (i.isEven ? -rad * 0.05 : rad * 0.12));
    }
    fil.lineTo(gp.dx + rad * 0.35, gp.dy + rad * 0.3);
    c.drawPath(fil, fp);
    c.drawOval(Rect.fromCenter(center: gp + Offset(-rad * 0.35, -rad * 0.4), width: rad * 0.45, height: rad * 0.25), Paint()..color = Colors.white.withValues(alpha: 0.6));
  }

  // The spark: a glowing ball of light with a tail, racing round the track (and on round after the bulb lights).
  if (run >= 0) {
    final headS = run;
    for (var i = 14; i >= 0; i--) {
      final ss = headS - i * 0.008;
      if (ss < 0) continue;
      final (x, z) = _onLoop(ss);
      final (p, k) = cam.p(x, 0.06, z);
      final a = 1 - i / 15;
      c.drawCircle(p, k * 0.05 * (0.4 + 0.6 * a), Paint()..color = const Color(0xFF7DD3FC).withValues(alpha: 0.35 * a));
    }
    final (x, z) = _onLoop(headS);
    final (p, k) = cam.p(x, 0.06, z);
    final rr = k * 0.09;
    c.drawCircle(p, rr * 3, Paint()..shader = RadialGradient(colors: [const Color(0xFFBAE6FD).withValues(alpha: 0.7), const Color(0xFF38BDF8).withValues(alpha: 0.2), Colors.transparent], stops: const [0.0, 0.35, 1.0]).createShader(Rect.fromCircle(center: p, radius: rr * 3)));
    c.drawCircle(p, rr, Paint()..shader = RadialGradient(colors: const [Colors.white, Color(0xFFBAE6FD), Color(0xFF38BDF8)]).createShader(Rect.fromCircle(center: p, radius: rr)));
    // Little sparks flying off it.
    final rnd = math.Random((t * 20).floor());
    for (var i = 0; i < 6; i++) {
      final a = rnd.nextDouble() * math.pi * 2, len = rr * (1.2 + rnd.nextDouble() * 1.6);
      c.drawLine(p + Offset(math.cos(a), math.sin(a)) * rr, p + Offset(math.cos(a), math.sin(a)) * len, Paint()
        ..strokeWidth = math.max(1, rr * 0.12)
        ..strokeCap = StrokeCap.round
        ..color = Colors.white.withValues(alpha: 0.8));
    }
  }

  // Small screens (the little TV on the board): the picture only.
  if (s.shortestSide < 90) {
    c.restore();
    return;
  }

  // The words: the title, then a caption for each step, then the end card.
  final u = math.min(h, w * 0.6);
  if (lt < 1.9) {
    final a = _k(lt, 0.2, 0.5) * (1 - _k(lt, 1.5, 0.4));
    _text(c, 'NGMY ELECTRONICS LAB PRESENTS', Offset(w / 2, h * 0.08), u * 0.035, const Color(0xFF7DD3FC).withValues(alpha: a), align: 0.5, ls: u * 0.006);
    c.save();
    c.translate(0, (1 - _ease(_k(lt, 0.4, 0.6))) * u * 0.05);
    _text(c, 'Spark Adventure', Offset(w / 2, h * 0.13), u * 0.1, Colors.white.withValues(alpha: a), align: 0.5, maxW: w * 0.9, grad: [Colors.white, const Color(0xFF7DD3FC)]);
    c.restore();
  }
  String? caption;
  var step = 0;
  if (lt >= 1.6 && lt < 2.6) {
    caption = 'The switch closes';
    step = 1;
  } else if (run >= 0 && !lit) {
    // Which part the spark is passing on its way to the bulb.
    final (x, z) = _onLoop(run);
    if (z > _lz - 0.01 && x > 0.1) {
      caption = 'The resistor slows the current';
      step = 2;
    } else if (x > _lx - 0.01) {
      caption = 'Almost at the bulb';
      step = 3;
    } else {
      caption = 'Current flows from the battery';
      step = 2;
    }
  } else if (lit && lt < 7.6) {
    caption = 'The bulb lights up!';
    step = 4;
  }
  if (caption != null) {
    final tp = ngmyCachedText(caption, TextStyle(fontFamily: _kFont, fontSize: ngmyTextSizeStep(u * 0.045), fontWeight: FontWeight.w800, color: Colors.white));
    final pad = u * 0.025;
    final badge = u * 0.06;
    final pill = RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.05, h * 0.66, badge + pad * 3 + tp.width, tp.height + pad * 1.4), Radius.circular(u * 0.04));
    c.drawRRect(pill, Paint()..color = Colors.black.withValues(alpha: 0.6));
    c.drawRRect(pill, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1
      ..color = const Color(0xFF38BDF8).withValues(alpha: 0.6));
    final bc = Offset(pill.left + pad + badge / 2, pill.center.dy);
    c.drawCircle(bc, badge / 2, Paint()..color = const Color(0xFF38BDF8));
    _text(c, '$step', bc - Offset(0, badge * 0.38), badge * 0.6, const Color(0xFF0B1220), align: 0.5);
    tp.paint(c, Offset(pill.left + pad * 2 + badge, pill.center.dy - tp.height / 2));
  }
  if (lt >= 7.6) {
    final k = _k(lt, 7.6, 0.4);
    c.drawRect(r, Paint()..color = Colors.black.withValues(alpha: 0.55 * k));
    final pop = Curves.easeOutBack.transform(_k(lt, 7.7, 0.5));
    final cy = h * 0.3;
    c.save();
    c.translate(w / 2, cy);
    c.scale(0.75 + 0.25 * pop);
    c.translate(-w / 2, -cy);
    _text(c, 'Build it yourself', Offset(w / 2, cy - u * 0.06), u * 0.1, Colors.white.withValues(alpha: k), align: 0.5, maxW: w * 0.9, grad: [Colors.white, const Color(0xFF7DD3FC)]);
    c.restore();
    _text(c, 'NGMY Electronics Lab', Offset(w / 2, cy + u * 0.08), u * 0.05, Colors.white70.withValues(alpha: 0.85 * k), align: 0.5, w: FontWeight.w800);
    final bk = Curves.easeOutBack.transform(_k(lt, 8.1, 0.4));
    if (bk > 0) {
      final btn = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(w / 2, cy + u * 0.24), width: math.max(w * 0.3, u * 0.55) * bk, height: u * 0.1), Radius.circular(u * 0.05));
      c.drawRRect(btn, Paint()..shader = const LinearGradient(colors: [Color(0xFF155E75), Color(0xFF38BDF8)]).createShader(btn.outerRect));
      if (bk > 0.7) _text(c, 'Open the Electronics Lab', Offset(w / 2, btn.center.dy - u * 0.03), u * 0.045, Colors.white, align: 0.5, maxW: btn.width * 0.85);
    }
  }
  // A soft fade between one run and the next.
  final fade = lt < 0.3 ? 1 - lt / 0.3 : (lt > _kLoop - 0.3 ? (lt - (_kLoop - 0.3)) / 0.3 : 0.0);
  if (fade > 0) c.drawRect(r, Paint()..color = Colors.black.withValues(alpha: fade.clamp(0.0, 1.0)));
  c.restore();
}
