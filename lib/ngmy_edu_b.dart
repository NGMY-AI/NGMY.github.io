import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

Widget _note(String text, Color c, {Widget? action}) => Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 10),
      decoration: BoxDecoration(color: c.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: c.withValues(alpha: 0.4))),
      child: Row(children: [
        Expanded(child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.4, fontWeight: FontWeight.w600))),
        if (action != null) ...[const SizedBox(width: 8), action],
      ]),
    );

void _text(Canvas canvas, String s, Offset at, {Color color = Colors.white, double size = 13, bool center = true, FontWeight weight = FontWeight.w800}) {
  final tp = TextPainter(text: TextSpan(text: s, style: TextStyle(color: color, fontSize: size, fontWeight: weight)), textDirection: TextDirection.ltr)..layout();
  tp.paint(canvas, center ? at - Offset(tp.width / 2, tp.height / 2) : at);
}

// ═════════════════════════════════════════════════════════════════════════════
// OPTICS LAB: how a lens makes an image. The same maths is in cameras and your eye.
// ═════════════════════════════════════════════════════════════════════════════

/// Image distance for a thin lens (positive: real image on the far side). Null if the image is at infinity.
double? lensImageDistance(double u, double f) {
  final inv = 1 / f - 1 / u;
  if (inv.abs() < 1e-9) return null;
  return 1 / inv;
}

class NgmyOpticsStudio extends StatefulWidget {
  const NgmyOpticsStudio({super.key});

  @override
  State<NgmyOpticsStudio> createState() => _NgmyOpticsStudioState();
}

class _NgmyOpticsStudioState extends State<NgmyOpticsStudio> {
  double _u = 160;
  double _f = 60;
  bool _convex = true;

  @override
  Widget build(BuildContext context) {
    final f = _convex ? _f : -_f;
    final v = lensImageDistance(_u, f);
    final m = v == null ? double.infinity : -v / _u;
    String what;
    String use;
    if (!_convex) {
      what = 'A smaller, upright, virtual image on the same side as the object';
      use = 'A diverging lens always spreads light out. It is used in glasses for short-sightedness and in door peepholes.';
    } else if (v == null) {
      what = 'No image: the rays come out parallel';
      use = 'The object is exactly at the focal point. This is how a torch or a lighthouse makes a straight beam.';
    } else if (_u < _f) {
      what = 'A bigger, upright, virtual image (you look through the lens)';
      use = 'The object is closer than the focal length: this is a magnifying glass.';
    } else if (_u < 2 * _f) {
      what = 'A bigger, upside-down, real image';
      use = 'The object is between f and 2f: this is a projector. A small slide becomes a big picture on the screen.';
    } else if ((_u - 2 * _f).abs() < 3) {
      what = 'The same size, upside-down, real image';
      use = 'At exactly 2f the image is the same size as the object, and 2f behind the lens.';
    } else {
      what = 'A smaller, upside-down, real image';
      use = 'The object is beyond 2f: this is a camera, or your eye. The image on the back of your eye is really upside-down, and your brain flips it.';
    }
    return StudioPage(
      title: 'OPTICS LAB',
      accent: const Color(0xFFFACC15),
      help: 'A lens bends light. A convex (fat in the middle) lens brings rays together at a focus. Where the image forms depends on how far the object is from the lens (u) and the lens strength, its focal length (f):\n\n1/f = 1/u + 1/v\n\nThe three coloured rays are the ones you can always draw: one through the centre, one parallel to the axis that bends through the focus, and one through the near focus that comes out parallel. Where they meet is the image. Drag the object (or use the sliders) and swap lenses.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(10, 6, 10, 4), child: _note('$what. ${v == null ? '' : 'Image distance ${v.abs().round()}, size ×${m.abs().toStringAsFixed(2)}. '}$use', const Color(0xFFFACC15))),
        Expanded(
          child: LayoutBuilder(builder: (context, c) => GestureDetector(
                onPanUpdate: (d) {
                  final unit = c.maxWidth / 760;
                  setState(() => _u = (_u - d.delta.dx / unit).clamp(20, 340));
                },
                child: CustomPaint(size: Size.infinite, painter: _OpticsPainter(_u, f, v)),
              )),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Convex lens', selected: _convex, color: const Color(0xFFFACC15), onTap: () => setState(() => _convex = true)),
          StudioChip(label: 'Concave lens', selected: !_convex, color: const Color(0xFFA78BFA), onTap: () => setState(() => _convex = false)),
        ]),
        StudioSlider(label: 'Object distance (u)', value: _u, min: 20, max: 340, display: '${_u.round()}', color: const Color(0xFFF472B6), onChanged: (x) => setState(() => _u = x)),
        StudioSlider(label: 'Focal length (f)', value: _f, min: 25, max: 140, display: '${_f.round()}', color: const Color(0xFFFACC15), onChanged: (x) => setState(() => _f = x)),
      ]),
    );
  }
}

class _OpticsPainter extends CustomPainter {
  _OpticsPainter(this.u, this.f, this.v);
  final double u;
  final double f;
  final double? v;

  @override
  void paint(Canvas canvas, Size size) {
    final unit = size.width / 760;
    final cx = size.width / 2, cy = size.height / 2;
    Offset p(double x, double y) => Offset(cx + x * unit, cy - y * unit);
    canvas.drawLine(Offset(0, cy), Offset(size.width, cy), Paint()..color = Colors.white24..strokeWidth = 1.4);
    // Lens.
    final lens = Path();
    final h = size.height * 0.42;
    if (f > 0) {
      lens.moveTo(cx, cy - h);
      lens.quadraticBezierTo(cx + 22, cy, cx, cy + h);
      lens.quadraticBezierTo(cx - 22, cy, cx, cy - h);
    } else {
      lens.moveTo(cx - 12, cy - h);
      lens.quadraticBezierTo(cx + 2, cy, cx - 12, cy + h);
      lens.lineTo(cx + 12, cy + h);
      lens.quadraticBezierTo(cx - 2, cy, cx + 12, cy - h);
      lens.close();
    }
    canvas.drawPath(lens, Paint()..color = const Color(0xFF7DD3FC).withValues(alpha: 0.35));
    canvas.drawPath(lens, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFBAE6FD));
    // Focal points.
    for (final s in [-1.0, 1.0]) {
      canvas.drawCircle(p(s * f.abs(), 0), 4, Paint()..color = const Color(0xFFFACC15));
      _text(canvas, 'F', p(s * f.abs(), 0) + const Offset(0, 14), color: const Color(0xFFFACC15), size: 11);
      canvas.drawCircle(p(s * 2 * f.abs(), 0), 3, Paint()..color = Colors.white38);
      _text(canvas, '2F', p(s * 2 * f.abs(), 0) + const Offset(0, 14), color: Colors.white38, size: 10);
    }
    // Object.
    const oh = 46.0;
    final top = p(-u, oh);
    void arrow(Offset base, Offset tip, Color c, {bool dashed = false}) {
      final paint = Paint()..color = c..strokeWidth = 4..strokeCap = StrokeCap.round;
      if (dashed) {
        final d = tip - base;
        for (var i = 0; i < 8; i++) {
          canvas.drawLine(base + d * (i / 8), base + d * ((i + 0.55) / 8), paint);
        }
      } else {
        canvas.drawLine(base, tip, paint);
      }
      final dir = (tip - base) / math.max((tip - base).distance, 0.01);
      final n = Offset(-dir.dy, dir.dx);
      canvas.drawPath(Path()..moveTo(tip.dx, tip.dy)..lineTo((tip - dir * 10 + n * 6).dx, (tip - dir * 10 + n * 6).dy)..lineTo((tip - dir * 10 - n * 6).dx, (tip - dir * 10 - n * 6).dy)..close(), Paint()..color = c);
    }

    arrow(p(-u, 0), top, const Color(0xFFF472B6));
    _text(canvas, 'object', p(-u, 0) + const Offset(0, 28), color: const Color(0xFFF472B6), size: 11);
    // Rays from the object tip.
    final lensTop = p(0, oh);
    final rays = <Color>[const Color(0xFFFB923C), const Color(0xFF4ADE80), const Color(0xFF38BDF8)];
    // 1: parallel to the axis, then through (or away from) the focus.
    // 2: through the centre of the lens, straight on.
    // 3: aimed at the near focus, leaves parallel.
    final far = size.width;
    Offset ext(Offset a, Offset b, double len) {
      final d = b - a;
      return a + d / math.max(d.distance, 0.01) * len;
    }

    // Ray 1.
    final focusRight = p(f.abs() * (f > 0 ? 1 : -1), 0);
    canvas.drawLine(top, lensTop, Paint()..color = rays[0]..strokeWidth = 2);
    final out1 = f > 0 ? ext(lensTop, focusRight, far) : lensTop + (lensTop - focusRight) / math.max((lensTop - focusRight).distance, 0.01) * far;
    canvas.drawLine(lensTop, out1, Paint()..color = rays[0]..strokeWidth = 2);
    if (f < 0) {
      canvas.drawLine(lensTop, focusRight, Paint()..color = rays[0].withValues(alpha: 0.4)..strokeWidth = 1.4);
    } else if (v != null && v! < 0) {
      canvas.drawLine(lensTop, ext(lensTop, focusRight, -far), Paint()..color = rays[0].withValues(alpha: 0.4)..strokeWidth = 1.4);
    }
    // Ray 2.
    canvas.drawLine(top, ext(top, p(0, 0), far * 2), Paint()..color = rays[1]..strokeWidth = 2);
    // Ray 3.
    final nearFocus = p(-f.abs() * (f > 0 ? 1 : -1), 0);
    if (f > 0 && u > f && (nearFocus - top).dx.abs() > 0.5) {
      final d = nearFocus - top;
      final t = (cx - top.dx) / d.dx;
      final hit = top + d * t;
      canvas.drawLine(top, hit, Paint()..color = rays[2]..strokeWidth = 2);
      canvas.drawLine(hit, Offset(size.width, hit.dy), Paint()..color = rays[2]..strokeWidth = 2);
    } else if ((nearFocus - top).dx.abs() > 0.5) {
      final aim = nearFocus;
      final d = aim - top;
      final t = (cx - top.dx) / d.dx;
      final hit = top + d * t;
      canvas.drawLine(top, hit, Paint()..color = rays[2].withValues(alpha: 0.9)..strokeWidth = 2);
      canvas.drawLine(hit, Offset(size.width, hit.dy), Paint()..color = rays[2]..strokeWidth = 2);
    }
    // Image.
    final vv = v;
    if (vv != null) {
      final m = -vv / u;
      final ih = oh * m;
      final base = p(vv, 0);
      final tip = p(vv, ih);
      arrow(base, tip, const Color(0xFF4ADE80), dashed: vv < 0 || f < 0);
      _text(canvas, vv < 0 || f < 0 ? 'virtual image' : 'real image', base + Offset(0, ih > 0 ? 24 : -24), color: const Color(0xFF4ADE80), size: 11);
    }
  }

  @override
  bool shouldRepaint(covariant _OpticsPainter old) => true;
}
