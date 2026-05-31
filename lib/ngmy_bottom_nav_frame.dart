import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

/// Shared layout — frame and icons use the same numbers for alignment.
class NgmyBottomNavMetrics {
  NgmyBottomNavMetrics._();

  static const sideIconSize = 30.0;
  static const centerButtonSize = 52.0;
  static const iconPad = 9.0;
  static const outerRadius = 22.0;
  static const centerJoin = 8.0;

  static double get frameHeight => iconPad * 2 + centerButtonSize;

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

  static double wingBottomY(double frameH) {
    final cy = iconCenterY(frameH);
    return cy + sideIconSize / 2 + iconPad;
  }
}

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
          Positioned.fill(child: child),
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

  /// Perfect circular arc between two points at [y0], bulging to [peakY] (smaller = higher).
  static void _arcBulgeUp(
    Path path,
    double x0,
    double x1,
    double y0,
    double peakY,
    double cx,
  ) {
    final half = (x1 - x0) / 2;
    final sagitta = y0 - peakY;
    if (sagitta <= 0.5 || half <= 0.5) {
      path.lineTo(x0, y0);
      return;
    }
    final radius = (half * half + sagitta * sagitta) / (2 * sagitta);
    final centerY = peakY + radius;
    final start = math.atan2(y0 - centerY, x1 - cx);
    final end = math.atan2(y0 - centerY, x0 - cx);
    var sweep = end - start;
    if (sweep > math.pi) sweep -= 2 * math.pi;
    if (sweep < -math.pi) sweep += 2 * math.pi;
    path.arcTo(
      Rect.fromCircle(center: Offset(cx, centerY), radius: radius),
      start,
      sweep,
      false,
    );
  }

  /// Perfect circular arc between two points at [y0], bulging down to [valleyY].
  static void _arcBulgeDown(
    Path path,
    double x0,
    double x1,
    double y0,
    double valleyY,
    double cx,
  ) {
    final half = (x1 - x0) / 2;
    final sagitta = valleyY - y0;
    if (sagitta <= 0.5 || half <= 0.5) {
      path.lineTo(x1, y0);
      return;
    }
    final radius = (half * half + sagitta * sagitta) / (2 * sagitta);
    final centerY = y0 - radius + sagitta;
    final start = math.atan2(y0 - centerY, x0 - cx);
    final end = math.atan2(y0 - centerY, x1 - cx);
    var sweep = end - start;
    if (sweep > math.pi) sweep -= 2 * math.pi;
    if (sweep < -math.pi) sweep += 2 * math.pi;
    path.arcTo(
      Rect.fromCircle(center: Offset(cx, centerY), radius: radius),
      start,
      sweep,
      false,
    );
  }

  static Path buildPath(double w, double h) {
    final wingTop = NgmyBottomNavMetrics.wingTopY(h);
    final centerTop = NgmyBottomNavMetrics.centerTopY(h);
    final wingBottom = NgmyBottomNavMetrics.wingBottomY(h);
    final bottom = h;
    final leftEnd = w * (3 / 7);
    final rightStart = w * (4 / 7);
    final cx = w / 2;
    final r = NgmyBottomNavMetrics.outerRadius;
    final join = NgmyBottomNavMetrics.centerJoin;

    final leftJoin = leftEnd + join;
    final rightJoin = rightStart - join;

    final path = Path();

    // ── Bottom-left outer corner ──
    path.moveTo(r, wingBottom);

    // Straight bottom edge — left wing.
    path.lineTo(leftJoin, wingBottom);

    // Symmetric circular curve under NGMY.
    _arcBulgeDown(path, leftJoin, rightJoin, wingBottom, bottom, cx);

    // Straight bottom edge — right wing.
    path.lineTo(w - r, wingBottom);

    // Bottom-right outer corner.
    path.arcToPoint(
      Offset(w, wingBottom - r),
      radius: Radius.circular(r),
      clockwise: true,
    );

    // Straight right outer edge.
    path.lineTo(w, wingTop + r);

    // Top-right outer corner.
    path.arcToPoint(
      Offset(w - r, wingTop),
      radius: Radius.circular(r),
      clockwise: true,
    );

    // Straight top edge — right wing.
    path.lineTo(rightJoin, wingTop);

    // Symmetric circular curve over NGMY.
    _arcBulgeUp(path, leftJoin, rightJoin, wingTop, centerTop, cx);

    // Straight top edge — left wing.
    path.lineTo(r, wingTop);

    // Top-left outer corner.
    path.arcToPoint(
      Offset(0, wingTop + r),
      radius: Radius.circular(r),
      clockwise: true,
    );

    // Straight left outer edge.
    path.lineTo(0, wingBottom - r);

    // Bottom-left outer corner.
    path.arcToPoint(
      Offset(r, wingBottom),
      radius: Radius.circular(r),
      clockwise: true,
    );

    path.close();
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
