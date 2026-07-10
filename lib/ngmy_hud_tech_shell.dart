import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

/// Shared pulse / scan / orbit clocks — same motion language as home tech frames.
class NgmyHudMotion extends StatefulWidget {
  const NgmyHudMotion({super.key, required this.builder});

  final Widget Function(BuildContext context, double pulse, double scan, double orbit) builder;

  @override
  State<NgmyHudMotion> createState() => _NgmyHudMotionState();
}

class _NgmyHudMotionState extends State<NgmyHudMotion> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _scan;
  late final AnimationController _orbit;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
    _scan = AnimationController(vsync: this, duration: const Duration(milliseconds: 3400))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(milliseconds: 9000))..repeat();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _scan.dispose();
    _orbit.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([_pulse, _scan, _orbit]),
      builder: (context, _) {
        final pulse = Curves.easeInOut.transform(_pulse.value);
        return widget.builder(context, pulse, _scan.value, _orbit.value);
      },
    );
  }
}

/// Robotic HUD chrome around any launcher / advisor card content.
class NgmyHudTechFrame extends StatelessWidget {
  const NgmyHudTechFrame({
    super.key,
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.child,
    this.onTap,
    this.borderRadius = 22,
    this.padding = EdgeInsets.zero,
    this.phase = 0,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final Widget child;
  final VoidCallback? onTap;
  final double borderRadius;
  final EdgeInsetsGeometry padding;
  /// Offsets scan/orbit so neighboring cards don't animate in lockstep.
  final double phase;

  @override
  Widget build(BuildContext context) {
    final glow = 0.35 + pulse * 0.35;
    final scanV = (scan + phase) % 1.0;
    final orbitV = (orbit + phase * 0.7) % 1.0;
    final body = CustomPaint(
      painter: NgmyHudFramePainter(
        colors: colors,
        pulse: pulse,
        scan: scanV,
        orbit: orbitV,
        glow: glow,
        borderRadius: borderRadius,
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(borderRadius),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
          child: Container(
            width: double.infinity,
            height: double.infinity,
            padding: padding,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(borderRadius),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Colors.white.withValues(alpha: 0.10),
                  colors.first.withValues(alpha: 0.16 + pulse * 0.08),
                  colors.last.withValues(alpha: 0.12),
                  Colors.black.withValues(alpha: 0.18),
                ],
              ),
            ),
            child: child,
          ),
        ),
      ),
    );

    if (onTap == null) return body;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(borderRadius),
        child: body,
      ),
    );
  }
}

/// Compact animated orb used inside toolkit / hub tiles.
class NgmyHudMiniOrb extends StatelessWidget {
  const NgmyHudMiniOrb({
    super.key,
    required this.colors,
    required this.pulse,
    required this.orbit,
    this.size = 56,
    this.icon,
  });

  final List<Color> colors;
  final double pulse;
  final double orbit;
  final double size;
  final IconData? icon;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        alignment: Alignment.center,
        children: [
          CustomPaint(
            size: Size.square(size),
            painter: NgmyHudMiniOrbPainter(colors: colors, pulse: pulse, orbit: orbit),
          ),
          if (icon != null)
            Icon(icon, color: Colors.white.withValues(alpha: 0.95), size: size * 0.42),
        ],
      ),
    );
  }
}

class NgmyHudFramePainter extends CustomPainter {
  NgmyHudFramePainter({
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.glow,
    this.borderRadius = 22,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final double glow;
  final double borderRadius;

  @override
  void paint(Canvas canvas, Size size) {
    final r = RRect.fromRectAndRadius(Offset.zero & size, Radius.circular(borderRadius));
    final border = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.4
      ..shader = LinearGradient(
        colors: [
          colors.first.withValues(alpha: 0.35 + glow * 0.45),
          Colors.white.withValues(alpha: 0.35),
          colors.last.withValues(alpha: 0.45 + glow * 0.35),
        ],
      ).createShader(Offset.zero & size);
    canvas.drawRRect(r, border);

    final bracket = Paint()
      ..color = colors.first.withValues(alpha: 0.75 + pulse * 0.25)
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    const c = 14.0;
    const inset = 8.0;
    void corner(double x, double y, double dx, double dy) {
      canvas.drawPath(
        Path()
          ..moveTo(x + dx * c, y)
          ..lineTo(x, y)
          ..lineTo(x, y + dy * c),
        bracket,
      );
    }

    corner(inset, inset, 1, 1);
    corner(size.width - inset, inset, -1, 1);
    corner(inset, size.height - inset, 1, -1);
    corner(size.width - inset, size.height - inset, -1, -1);

    final sy = size.height * scan;
    final scanPaint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          colors.first.withValues(alpha: 0.0),
          colors.first.withValues(alpha: 0.22),
          colors.first.withValues(alpha: 0.0),
        ],
      ).createShader(Rect.fromLTWH(0, sy - 18, size.width, 36));
    canvas.drawRect(Rect.fromLTWH(6, sy - 18, size.width - 12, 36), scanPaint);

    final cx = size.width - 22;
    final cy = 22.0;
    final tick = Paint()
      ..color = colors.last.withValues(alpha: 0.7)
      ..strokeWidth = 1.5;
    for (var i = 0; i < 6; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 3);
      canvas.drawCircle(Offset(cx + math.cos(a) * 8, cy + math.sin(a) * 8), 1.2, tick);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyHudFramePainter old) =>
      old.pulse != pulse || old.scan != scan || old.orbit != orbit || old.glow != glow;
}

class NgmyHudMiniOrbPainter extends CustomPainter {
  NgmyHudMiniOrbPainter({
    required this.colors,
    required this.pulse,
    required this.orbit,
  });

  final List<Color> colors;
  final double pulse;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide * 0.32;
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        radius + i * 3.2 + pulse * 2.2,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: 0.12 * i),
      );
    }
    canvas.drawCircle(
      c,
      radius,
      Paint()
        ..shader = RadialGradient(
          colors: [
            Colors.white.withValues(alpha: 0.55),
            colors.first.withValues(alpha: 0.85),
            colors.last.withValues(alpha: 0.55),
          ],
        ).createShader(Rect.fromCircle(center: c, radius: radius)),
    );
    canvas.drawCircle(
      c,
      radius + 2,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = Colors.white.withValues(alpha: 0.55 + pulse * 0.35),
    );
    for (var i = 0; i < 4; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 2);
      final p = Offset(c.dx + math.cos(a) * (radius + 8), c.dy + math.sin(a) * (radius + 8));
      canvas.drawCircle(p, 2.0, Paint()..color = colors[i % colors.length]);
      canvas.drawLine(c, p, Paint()..color = colors.first.withValues(alpha: 0.35)..strokeWidth = 1);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyHudMiniOrbPainter old) => old.pulse != pulse || old.orbit != orbit;
}
