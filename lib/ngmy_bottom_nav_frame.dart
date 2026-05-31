import 'dart:ui';

import 'package:flutter/material.dart';

/// Shared layout numbers — frame and icons use the same values so everything aligns.
class NgmyBottomNavMetrics {
  NgmyBottomNavMetrics._();

  static const sideIconSize = 26.0;
  static const centerButtonSize = 44.0;
  static const iconPad = 8.0;
  static const cornerRadius = 26.0;
  static const blend = 14.0;

  /// Total painted frame height (center dome + flat bottom).
  static double get frameHeight => iconPad * 2 + centerButtonSize;

  /// Vertical center for every icon — same horizontal ruler through all menus.
  static double iconCenterY(double frameH) =>
      frameH - iconPad - centerButtonSize / 2;

  static double wingTopY(double frameH) {
    final cy = iconCenterY(frameH);
    return cy - sideIconSize / 2 - iconPad;
  }

  static double centerTopY(double frameH) {
    final cy = iconCenterY(frameH);
    return cy - centerButtonSize / 2 - iconPad;
  }
}

/// One continuous bottom nav frame — low wings + raised center, frosted glass.
class NgmySculptedBottomNavFrame extends StatelessWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
  });

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final h = NgmyBottomNavMetrics.frameHeight;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final fillColor = Theme.of(context).cardColor.withValues(alpha: isDark ? 0.55 : 0.62);
    final borderColor = isDark ? Colors.white.withValues(alpha: 0.14) : Colors.black.withValues(alpha: 0.07);

    return SizedBox(
      height: h,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.bottomCenter,
        children: [
          Positioned.fill(
            child: ClipPath(
              clipper: _NgmyUnifiedNavClipper(),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
                child: CustomPaint(
                  painter: _NgmyUnifiedNavPainter(
                    fillColor: fillColor,
                    borderColor: borderColor,
                  ),
                ),
              ),
            ),
          ),
          Positioned.fill(
            child: child,
          ),
        ],
      ),
    );
  }
}

class _NgmyUnifiedNavClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) => _NgmyUnifiedNavPainter.buildPath(size.width, size.height);

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

class _NgmyUnifiedNavPainter extends CustomPainter {
  _NgmyUnifiedNavPainter({
    required this.fillColor,
    required this.borderColor,
  });

  final Color fillColor;
  final Color borderColor;

  static double _topY(double x, double w, double h) {
    final wingTop = NgmyBottomNavMetrics.wingTopY(h);
    final centerTop = NgmyBottomNavMetrics.centerTopY(h);
    final leftEnd = w * (3 / 7);
    final rightStart = w * (4 / 7);
    final blend = NgmyBottomNavMetrics.blend;

    if (x <= leftEnd) return wingTop;
    if (x >= rightStart) return wingTop;

    if (x < leftEnd + blend) {
      final t = (x - leftEnd) / blend;
      return wingTop + (centerTop - wingTop) * _ease(t);
    }
    if (x > rightStart - blend) {
      final t = (rightStart - x) / blend;
      return wingTop + (centerTop - wingTop) * _ease(t);
    }
    return centerTop;
  }

  static double _ease(double t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return t * t * (3 - 2 * t);
  }

  static Path buildPath(double w, double h) {
    final r = NgmyBottomNavMetrics.cornerRadius;
    const steps = 48;
    final bottom = h;

    final path = Path()..moveTo(r, _topY(r, w, h));

    for (var i = 1; i <= steps; i++) {
      final x = r + (w - r * 2) * (i / steps);
      path.lineTo(x, _topY(x, w, h));
    }

    path
      ..lineTo(w - r, _topY(w - r, w, h))
      ..quadraticBezierTo(w, _topY(w - r, w, h), w, _topY(w - r, w, h) + r)
      ..lineTo(w, bottom - r)
      ..quadraticBezierTo(w, bottom, w - r, bottom)
      ..lineTo(r, bottom)
      ..quadraticBezierTo(0, bottom, 0, bottom - r)
      ..lineTo(0, _topY(r, w, h) + r)
      ..quadraticBezierTo(0, _topY(r, w, h), r, _topY(r, w, h))
      ..close();

    return path;
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
        ..strokeWidth = 1.1,
    );
  }

  @override
  bool shouldRepaint(covariant _NgmyUnifiedNavPainter oldDelegate) =>
      oldDelegate.fillColor != fillColor || oldDelegate.borderColor != borderColor;
}
