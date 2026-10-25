import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// Shared pieces for the robotic / technology bio templates (Neural Core, Quantum Grid, Mech Terminal).

double _hash(int i, int salt) {
  final x = math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - x.floorToDouble();
}

/// A box with two cut (chamfered) corners and a glowing outline.
class NgmyChamferBox extends StatelessWidget {
  const NgmyChamferBox({
    super.key,
    required this.child,
    required this.color,
    this.cut = 12,
    this.fill,
    this.height,
    this.flip = false,
    this.glow = true,
  });

  final Widget child;
  final Color color;
  final double cut;
  final Gradient? fill;
  final double? height;
  final bool flip;
  final bool glow;

  @override
  Widget build(BuildContext context) {
    final clipper = _ChamferClipper(cut, flip);
    return SizedBox(
      height: height,
      child: CustomPaint(
        foregroundPainter: _ChamferBorderPainter(color, cut, flip, glow),
        child: ClipPath(
          clipper: clipper,
          child: DecoratedBox(
            decoration: BoxDecoration(
              gradient: fill ?? LinearGradient(colors: [color.withValues(alpha: 0.18), color.withValues(alpha: 0.04)]),
            ),
            child: child,
          ),
        ),
      ),
    );
  }
}

Path _chamferPath(Size s, double c, bool flip) {
  final p = Path();
  if (!flip) {
    p
      ..moveTo(c, 0)
      ..lineTo(s.width, 0)
      ..lineTo(s.width, s.height - c)
      ..lineTo(s.width - c, s.height)
      ..lineTo(0, s.height)
      ..lineTo(0, c)
      ..close();
  } else {
    p
      ..moveTo(0, 0)
      ..lineTo(s.width - c, 0)
      ..lineTo(s.width, c)
      ..lineTo(s.width, s.height)
      ..lineTo(c, s.height)
      ..lineTo(0, s.height - c)
      ..close();
  }
  return p;
}

class _ChamferClipper extends CustomClipper<Path> {
  _ChamferClipper(this.cut, this.flip);
  final double cut;
  final bool flip;
  @override
  Path getClip(Size size) => _chamferPath(size, cut, flip);
  @override
  bool shouldReclip(covariant _ChamferClipper old) => old.cut != cut || old.flip != flip;
}

class _ChamferBorderPainter extends CustomPainter {
  _ChamferBorderPainter(this.color, this.cut, this.flip, this.glow);
  final Color color;
  final double cut;
  final bool flip;
  final bool glow;
  @override
  void paint(Canvas canvas, Size size) {
    final path = _chamferPath(size, cut, flip);
    if (glow) {
      canvas.drawPath(path, Paint()..color = color.withValues(alpha: 0.35)..style = PaintingStyle.stroke..strokeWidth = 4..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    }
    canvas.drawPath(path, Paint()..color = color.withValues(alpha: 0.85)..style = PaintingStyle.stroke..strokeWidth = 1.3);
  }

  @override
  bool shouldRepaint(covariant _ChamferBorderPainter old) => old.color != color;
}

/// A hexagon / octagon clip for the profile photo.
class NgmyPolyClipper extends CustomClipper<Path> {
  const NgmyPolyClipper(this.sides);
  final int sides;
  @override
  Path getClip(Size size) {
    final p = Path();
    final r = size.width / 2;
    final c = Offset(size.width / 2, size.height / 2);
    final off = sides == 8 ? math.pi / 8 : math.pi / 2;
    for (var i = 0; i < sides; i++) {
      final a = off + i * 2 * math.pi / sides;
      final pt = Offset(c.dx + r * math.cos(a), c.dy + r * math.sin(a));
      i == 0 ? p.moveTo(pt.dx, pt.dy) : p.lineTo(pt.dx, pt.dy);
    }
    return p..close();
  }

  @override
  bool shouldReclip(covariant NgmyPolyClipper old) => old.sides != sides;
}

/// Floating network of nodes joined by lines, with data pulses running along them.
class NgmyTechNetPainter extends CustomPainter {
  NgmyTechNetPainter(this.color, this.color2, this.t);
  final Color color;
  final Color color2;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    const n = 26;
    final pts = <Offset>[];
    for (var i = 0; i < n; i++) {
      final bx = _hash(i, 1), by = _hash(i, 2);
      final sx = 0.04 + _hash(i, 3) * 0.05, sy = 0.04 + _hash(i, 4) * 0.05;
      final ph = _hash(i, 5) * math.pi * 2;
      final x = (bx + sx * math.sin(t * math.pi * 2 + ph)) * size.width;
      final y = (by + sy * math.cos(t * math.pi * 2 + ph * 1.3)) * size.height;
      pts.add(Offset(x, y));
    }
    final maxD = math.min(size.width, size.height) * 0.42;
    final line = Paint()..strokeWidth = 1;
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        final d = (pts[i] - pts[j]).distance;
        if (d > maxD) continue;
        final a = (1 - d / maxD) * 0.32;
        line.color = color.withValues(alpha: a);
        canvas.drawLine(pts[i], pts[j], line);
        if ((i * 7 + j * 3) % 5 == 0) {
          final p = (t * 3 + _hash(i + j, 9)) % 1;
          final pos = Offset.lerp(pts[i], pts[j], p)!;
          canvas.drawCircle(pos, 2.2, Paint()..color = color2.withValues(alpha: (a * 3).clamp(0.0, 0.9)));
        }
      }
    }
    for (var i = 0; i < n; i++) {
      final big = i % 6 == 0;
      canvas.drawCircle(pts[i], big ? 7 : 3.5, Paint()..color = color.withValues(alpha: big ? 0.16 : 0.1)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
      canvas.drawCircle(pts[i], big ? 2.6 : 1.7, Paint()..color = (big ? color2 : color).withValues(alpha: 0.85));
    }
  }

  @override
  bool shouldRepaint(covariant NgmyTechNetPainter old) => old.t != t || old.color != color;
}

/// A scanner ring: ticks, counter-rotating arcs and a radar sweep around the profile photo.
class NgmyTechHudRingPainter extends CustomPainter {
  NgmyTechHudRingPainter(this.color, this.color2, this.t, {this.sweep = true});
  final Color color;
  final Color color2;
  final double t;
  final bool sweep;

  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero);
    final r = size.width / 2;
    final tau = math.pi * 2;
    // Ticks.
    final tick = Paint()..color = color.withValues(alpha: 0.55)..strokeWidth = 1.4;
    for (var i = 0; i < 72; i++) {
      final a = i * tau / 72 + t * tau * 0.25;
      final long = i % 6 == 0;
      final r0 = r * (long ? 0.88 : 0.92);
      canvas.drawLine(c + Offset(math.cos(a), math.sin(a)) * r0, c + Offset(math.cos(a), math.sin(a)) * (r * 0.97), tick);
    }
    // Arcs.
    final arc = Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round;
    arc.color = color2.withValues(alpha: 0.9);
    arc.strokeWidth = 3;
    canvas.drawArc(Rect.fromCircle(center: c, radius: r * 0.8), -t * tau * 1.5, math.pi * 0.55, false, arc);
    canvas.drawArc(Rect.fromCircle(center: c, radius: r * 0.8), -t * tau * 1.5 + math.pi, math.pi * 0.35, false, arc);
    arc.color = color.withValues(alpha: 0.8);
    arc.strokeWidth = 2;
    canvas.drawArc(Rect.fromCircle(center: c, radius: r * 0.72), t * tau * 2, math.pi * 0.9, false, arc);
    final thin = Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = color.withValues(alpha: 0.35);
    canvas.drawCircle(c, r * 0.64, thin);
    canvas.drawCircle(c, r * 0.99, thin);
    // Radar sweep.
    if (sweep) {
      final rect = Rect.fromCircle(center: c, radius: r * 0.64);
      final a0 = t * tau * 3;
      final shader = SweepGradient(startAngle: 0, endAngle: tau, transform: GradientRotation(a0 - 1.2), colors: [color.withValues(alpha: 0), color.withValues(alpha: 0.35), color.withValues(alpha: 0)], stops: const [0, 0.17, 0.18]).createShader(rect);
      canvas.drawCircle(c, r * 0.64, Paint()..shader = shader);
    }
    // Corner brackets.
    final br = Paint()..color = color2..strokeWidth = 2.2..style = PaintingStyle.stroke;
    final k = r * 0.2;
    final e = r * 0.02;
    for (final s in [const Offset(-1, -1), const Offset(1, -1), const Offset(1, 1), const Offset(-1, 1)]) {
      final corner = Offset(c.dx + s.dx * (r - e), c.dy + s.dy * (r - e));
      canvas.drawLine(corner, corner + Offset(-s.dx * k, 0), br);
      canvas.drawLine(corner, corner + Offset(0, -s.dy * k), br);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyTechHudRingPainter old) => old.t != t || old.color != color;
}

/// A neon grid floor running toward a glowing horizon, with drifting stars.
class NgmyTechGridPainter extends CustomPainter {
  NgmyTechGridPainter(this.color, this.color2, this.t);
  final Color color;
  final Color color2;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final horizon = size.height * 0.62;
    // Stars.
    for (var i = 0; i < 40; i++) {
      final x = _hash(i, 11) * size.width;
      final y = _hash(i, 12) * horizon;
      final tw = 0.35 + 0.65 * (0.5 + 0.5 * math.sin(t * math.pi * 6 + i));
      canvas.drawCircle(Offset(x, y), 0.8 + _hash(i, 13) * 1.1, Paint()..color = Colors.white.withValues(alpha: 0.5 * tw));
    }
    // Horizon glow.
    final glow = Rect.fromLTWH(0, horizon - 90, size.width, 130);
    canvas.drawRect(glow, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [color.withValues(alpha: 0), color.withValues(alpha: 0.35)]).createShader(glow));
    canvas.drawCircle(Offset(size.width / 2, horizon), size.width * 0.22, Paint()..color = color2.withValues(alpha: 0.2)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 26));
    final hl = Paint()..color = color2.withValues(alpha: 0.9)..strokeWidth = 1.6;
    canvas.drawLine(Offset(0, horizon), Offset(size.width, horizon), hl);
    // Perspective lines.
    final cx = size.width / 2;
    final g = Paint()..color = color.withValues(alpha: 0.4)..strokeWidth = 1;
    for (var i = -12; i <= 12; i++) {
      canvas.drawLine(Offset(cx + i * 14, horizon), Offset(cx + i * size.width * 0.16, size.height), g);
    }
    for (var i = 0; i < 12; i++) {
      final p = ((i + t * 3) % 12) / 12;
      final y = horizon + (size.height - horizon) * p * p;
      g.color = color.withValues(alpha: 0.12 + 0.35 * p);
      canvas.drawLine(Offset(0, y), Offset(size.width, y), g);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyTechGridPainter old) => old.t != t || old.color != color;
}

/// Circuit-board traces with pulses of current travelling along them.
class NgmyTechCircuitPainter extends CustomPainter {
  NgmyTechCircuitPainter(this.color, this.color2, this.t);
  final Color color;
  final Color color2;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    const rows = 14;
    final trace = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..strokeJoin = StrokeJoin.round;
    for (var i = 0; i < rows; i++) {
      final y0 = (i + 0.5) / rows * size.height;
      final fromLeft = i.isEven;
      final len = (0.12 + _hash(i, 21) * 0.22) * size.width;
      final jog = (_hash(i, 22) - 0.5) * 60;
      final x0 = fromLeft ? 0.0 : size.width;
      final dir = fromLeft ? 1.0 : -1.0;
      final a = Offset(x0, y0);
      final b = Offset(x0 + dir * len, y0);
      final c2 = Offset(b.dx + dir * 24, y0 + jog);
      final d = Offset(c2.dx + dir * len * 0.4, c2.dy);
      final path = Path()..moveTo(a.dx, a.dy)..lineTo(b.dx, b.dy)..lineTo(c2.dx, c2.dy)..lineTo(d.dx, d.dy);
      trace.color = color.withValues(alpha: 0.28);
      canvas.drawPath(path, trace);
      canvas.drawCircle(d, 3, Paint()..color = color.withValues(alpha: 0.55)..style = PaintingStyle.stroke);
      // Pulse.
      for (final m in path.computeMetrics()) {
        final p = ((t * 2 + _hash(i, 23)) % 1) * m.length;
        final tan = m.getTangentForOffset(p);
        if (tan != null) {
          canvas.drawCircle(tan.position, 5, Paint()..color = color2.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
          canvas.drawCircle(tan.position, 1.8, Paint()..color = color2);
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant NgmyTechCircuitPainter old) => old.t != t || old.color != color;
}

/// Little live readouts: bars that move like system telemetry.
class NgmyTechTelemetry extends StatelessWidget {
  const NgmyTechTelemetry({super.key, required this.color, required this.t, this.labels = const ['CPU', 'NET', 'PWR']});
  final Color color;
  final double t;
  final List<String> labels;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        for (var i = 0; i < labels.length; i++) ...[
          if (i > 0) const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(labels[i], style: TextStyle(fontFamily: 'monospace', color: color.withValues(alpha: 0.8), fontSize: 8.5, fontWeight: FontWeight.w800, letterSpacing: 1)),
                const SizedBox(height: 3),
                ClipRRect(
                  borderRadius: BorderRadius.circular(2),
                  child: Stack(children: [
                    Container(height: 5, color: color.withValues(alpha: 0.15)),
                    FractionallySizedBox(
                      widthFactor: (0.45 + 0.4 * math.sin(t * math.pi * 2 * (1 + i * 0.6) + i * 2)).clamp(0.08, 1.0),
                      child: Container(height: 5, decoration: BoxDecoration(color: color, boxShadow: [BoxShadow(color: color.withValues(alpha: 0.6), blurRadius: 5)])),
                    ),
                  ]),
                ),
              ],
            ),
          ),
        ],
      ],
    );
  }
}

/// Visitors can react to a profile: tap a chip and it lights up and counts.
/// (Counts are kept on the visitor's own device; they are not shared yet.)
class NgmyTechReactions extends StatefulWidget {
  const NgmyTechReactions({super.key, required this.color, required this.interactive, this.seed = 0});
  final Color color;
  final bool interactive;
  final int seed;

  @override
  State<NgmyTechReactions> createState() => _NgmyTechReactionsState();
}

class _NgmyTechReactionsState extends State<NgmyTechReactions> with SingleTickerProviderStateMixin {
  static const _items = <(IconData, String)>[
    (Icons.bolt_rounded, 'SPARK'),
    (Icons.rocket_launch_rounded, 'LAUNCH'),
    (Icons.memory_rounded, 'GENIUS'),
    (Icons.favorite_rounded, 'LOVE'),
  ];
  final Set<int> _on = {};
  int? _burst;
  late final AnimationController _pop = AnimationController(vsync: this, duration: const Duration(milliseconds: 420));

  @override
  void dispose() {
    _pop.dispose();
    super.dispose();
  }

  int _base(int i) => 0;

  void _tap(int i) {
    if (!widget.interactive) return;
    HapticFeedback.selectionClick();
    setState(() {
      _on.contains(i) ? _on.remove(i) : _on.add(i);
      _burst = i;
    });
    _pop.forward(from: 0);
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.color;
    return Wrap(
      alignment: WrapAlignment.center,
      spacing: 8,
      runSpacing: 8,
      children: [
        for (var i = 0; i < _items.length; i++)
          GestureDetector(
            onTap: () => _tap(i),
            child: AnimatedBuilder(
              animation: _pop,
              builder: (_, __) {
                final on = _on.contains(i);
                final pulse = _burst == i ? math.sin(_pop.value * math.pi) : 0.0;
                return Transform.scale(
                  scale: 1 + 0.18 * pulse,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
                    decoration: BoxDecoration(
                      color: on ? c.withValues(alpha: 0.22) : Colors.white.withValues(alpha: 0.04),
                      borderRadius: BorderRadius.circular(6),
                      border: Border.all(color: on ? c : c.withValues(alpha: 0.35), width: on ? 1.5 : 1),
                      boxShadow: on ? [BoxShadow(color: c.withValues(alpha: 0.5), blurRadius: 10 + 8 * pulse)] : null,
                    ),
                    child: Row(mainAxisSize: MainAxisSize.min, children: [
                      Icon(_items[i].$1, size: 15, color: on ? c : c.withValues(alpha: 0.75)),
                      const SizedBox(width: 5),
                      Text('${_base(i) + (on ? 1 : 0)}', style: TextStyle(fontFamily: 'monospace', color: on ? Colors.white : c.withValues(alpha: 0.85), fontWeight: FontWeight.w900, fontSize: 11.5)),
                    ]),
                  ),
                );
              },
            ),
          ),
      ],
    );
  }
}
