import 'dart:ui';

import 'package:flutter/material.dart';

/// Bottom nav shell — short recessed wings (3 icons each) + subtle center lift for NGMY.
class NgmySculptedBottomNavFrame extends StatelessWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
    this.height = 72,
  });

  final Widget child;
  final double height;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final fillColor = Theme.of(context).cardColor.withValues(alpha: isDark ? 0.52 : 0.58);
    final borderColor = isDark ? Colors.white.withValues(alpha: 0.12) : Colors.black.withValues(alpha: 0.06);

    return SizedBox(
      height: height,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.bottomCenter,
        children: [
          Positioned.fill(
            child: ClipPath(
              clipper: _NgmySculptedNavBarClipper(),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 14, sigmaY: 14),
                child: CustomPaint(
                  painter: _NgmySculptedNavBarPainter(
                    fillColor: fillColor,
                    borderColor: borderColor,
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            height: 64,
            child: child,
          ),
        ],
      ),
    );
  }
}

class _NgmySculptedNavBarClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) => _NgmySculptedNavBarPainter.buildPath(size.width, size.height);

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

class _NgmySculptedNavBarPainter extends CustomPainter {
  _NgmySculptedNavBarPainter({
    required this.fillColor,
    required this.borderColor,
  });

  final Color fillColor;
  final Color borderColor;

  static Path buildPath(double w, double h) {
    const corner = 22.0;
    const bottomLift = 4.0;
    const steps = 40;
    final bottom = h - bottomLift;

    final path = Path()..moveTo(corner, _topY(corner, w));

    for (var i = 1; i <= steps; i++) {
      final x = corner + (w - corner * 2) * (i / steps);
      path.lineTo(x, _topY(x, w));
    }

    path
      ..lineTo(w - corner, _topY(w - corner, w))
      ..quadraticBezierTo(w, _topY(w - corner, w), w, _topY(w - corner, w) + corner)
      ..lineTo(w, bottom - corner)
      ..quadraticBezierTo(w, bottom, w - corner, bottom)
      ..lineTo(corner, bottom)
      ..quadraticBezierTo(0, bottom, 0, bottom - corner)
      ..lineTo(0, _topY(corner, w) + corner)
      ..quadraticBezierTo(0, _topY(corner, w), corner, _topY(corner, w))
      ..close();

    return path;
  }

  /// Wings sit lower/shorter; center lifts only slightly above them.
  static double _topY(double x, double w) {
    final seg = w / 7;
    const wingTop = 34.0;
    const centerTop = 26.0;
    const blend = 7.0;

    if (x <= seg * 3) return wingTop;
    if (x >= seg * 4) return wingTop;

    if (x < seg * 3 + blend) {
      final t = (x - seg * 3) / blend;
      return wingTop + (centerTop - wingTop) * _easeInOut(t);
    }
    if (x > seg * 4 - blend) {
      final t = (seg * 4 - x) / blend;
      return wingTop + (centerTop - wingTop) * _easeInOut(t);
    }
    return centerTop;
  }

  static double _easeInOut(double t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return t * t * (3 - 2 * t);
  }

  @override
  void paint(Canvas canvas, Size size) {
    final path = buildPath(size.width, size.height);

    canvas.drawShadow(path, Colors.black.withValues(alpha: 0.08), 6, false);
    canvas.drawPath(path, Paint()..color = fillColor);
    canvas.drawPath(
      path,
      Paint()
        ..color = borderColor
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1,
    );
  }

  @override
  bool shouldRepaint(covariant _NgmySculptedNavBarPainter oldDelegate) =>
      oldDelegate.fillColor != fillColor || oldDelegate.borderColor != borderColor;
}
