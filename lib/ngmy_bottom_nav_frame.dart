import 'package:flutter/material.dart';

/// Bottom nav shell — recessed left/right wings (3 icons each) + raised center bump for NGMY.
class NgmySculptedBottomNavFrame extends StatelessWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
    this.height = 92,
  });

  final Widget child;
  final double height;

  @override
  Widget build(BuildContext context) {
    final cardColor = Theme.of(context).cardColor;
    return SizedBox(
      height: height,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.bottomCenter,
        children: [
          Positioned.fill(
            child: CustomPaint(
              painter: _NgmySculptedNavBarPainter(fillColor: cardColor),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            height: 75,
            child: child,
          ),
        ],
      ),
    );
  }
}

class _NgmySculptedNavBarPainter extends CustomPainter {
  _NgmySculptedNavBarPainter({required this.fillColor});

  final Color fillColor;

  double _topY(double x, double w) {
    final seg = w / 7;
    // Segments 0–2 and 4–6: lower wing; segment 3 (center): raised bump.
    const wingTop = 22.0;
    const centerTop = -6.0;
    const blend = 18.0;

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

  double _easeInOut(double t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return t * t * (3 - 2 * t);
  }

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    const corner = 26.0;
    const steps = 48;

    final path = Path()..moveTo(corner, _topY(corner, w));

    for (var i = 1; i <= steps; i++) {
      final x = corner + (w - corner * 2) * (i / steps);
      path.lineTo(x, _topY(x, w));
    }

    path
      ..lineTo(w - corner, _topY(w - corner, w))
      ..quadraticBezierTo(w, _topY(w - corner, w), w, _topY(w - corner, w) + corner)
      ..lineTo(w, h - corner)
      ..quadraticBezierTo(w, h, w - corner, h)
      ..lineTo(corner, h)
      ..quadraticBezierTo(0, h, 0, h - corner)
      ..lineTo(0, _topY(corner, w) + corner)
      ..quadraticBezierTo(0, _topY(corner, w), corner, _topY(corner, w))
      ..close();

    canvas.drawShadow(path, Colors.black.withValues(alpha: 0.14), 10, false);
    canvas.drawPath(path, Paint()..color = fillColor);
  }

  @override
  bool shouldRepaint(covariant _NgmySculptedNavBarPainter oldDelegate) =>
      oldDelegate.fillColor != fillColor;
}
