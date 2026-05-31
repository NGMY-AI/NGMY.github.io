import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

/// Three-part bottom nav frame matching the hand-drawn layout:
/// compact left pill (3 icons) | tall center arch (NGMY) | compact right pill (3 icons).
class NgmySculptedBottomNavFrame extends StatelessWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
    this.height = 86,
  });

  final Widget child;
  final double height;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final fillColor = Theme.of(context).cardColor.withValues(alpha: isDark ? 0.55 : 0.62);
    final borderColor = isDark ? Colors.white.withValues(alpha: 0.14) : Colors.black.withValues(alpha: 0.07);

    return SizedBox(
      height: height,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.bottomCenter,
        children: [
          Positioned.fill(
            child: ClipPath(
              clipper: _NgmyTripleNavClipper(),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
                child: CustomPaint(
                  painter: _NgmyTripleNavPainter(
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
            height: 58,
            child: child,
          ),
        ],
      ),
    );
  }
}

class _NgmyTripleNavClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) => _NgmyTripleNavPainter.unionPath(size.width, size.height);

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

class _NgmyTripleNavPainter extends CustomPainter {
  _NgmyTripleNavPainter({
    required this.fillColor,
    required this.borderColor,
  });

  final Color fillColor;
  final Color borderColor;

  static const _gap = 5.0;
  static const _wingH = 48.0;
  static const _bottomInset = 2.0;
  static const _capW = 74.0;
  static const _capFlatH = 44.0;

  static Path unionPath(double w, double h) {
    final p = Path()
      ..addPath(leftWingPath(w, h), Offset.zero)
      ..addPath(centerArchPath(w, h), Offset.zero)
      ..addPath(rightWingPath(w, h), Offset.zero);
    return p;
  }

  static double _wingWidth(double w) => w * (3 / 7) - _gap;

  static Path leftWingPath(double w, double h) {
    final width = _wingWidth(w);
    final top = h - _bottomInset - _wingH;
    return Path()
      ..addRRect(
        RRect.fromRectAndCorners(
          Rect.fromLTWH(0, top, width, _wingH),
          topLeft: const Radius.circular(24),
          topRight: const Radius.circular(14),
          bottomLeft: const Radius.circular(24),
          bottomRight: const Radius.circular(14),
        ),
      );
  }

  static Path rightWingPath(double w, double h) {
    final width = _wingWidth(w);
    final left = w - width;
    final top = h - _bottomInset - _wingH;
    return Path()
      ..addRRect(
        RRect.fromRectAndCorners(
          Rect.fromLTWH(left, top, width, _wingH),
          topLeft: const Radius.circular(14),
          topRight: const Radius.circular(24),
          bottomLeft: const Radius.circular(14),
          bottomRight: const Radius.circular(24),
        ),
      );
  }

  /// Center cap: flat base + semicircle dome hugging the NGMY button.
  static Path centerArchPath(double w, double h) {
    final cx = w / 2;
    final halfW = _capW / 2;
    final left = cx - halfW;
    final right = cx + halfW;
    final bottom = h - _bottomInset;
    final flatTop = bottom - _capFlatH;
    final arcCenter = Offset(cx, flatTop);
    const corner = 16.0;

    return Path()
      ..moveTo(left + corner, bottom)
      ..lineTo(right - corner, bottom)
      ..quadraticBezierTo(right, bottom, right, bottom - corner)
      ..lineTo(right, flatTop)
      ..arcTo(
        Rect.fromCircle(center: arcCenter, radius: halfW),
        0,
        -math.pi,
        false,
      )
      ..lineTo(left, bottom - corner)
      ..quadraticBezierTo(left, bottom, left + corner, bottom)
      ..close();
  }

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final paths = [
      leftWingPath(w, h),
      centerArchPath(w, h),
      rightWingPath(w, h),
    ];

    final fill = Paint()..color = fillColor;
    final stroke = Paint()
      ..color = borderColor
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.1;

    for (final path in paths) {
      canvas.drawShadow(path, Colors.black.withValues(alpha: 0.07), 5, false);
      canvas.drawPath(path, fill);
      canvas.drawPath(path, stroke);
    }
  }

  @override
  bool shouldRepaint(covariant _NgmyTripleNavPainter oldDelegate) =>
      oldDelegate.fillColor != fillColor || oldDelegate.borderColor != borderColor;
}
