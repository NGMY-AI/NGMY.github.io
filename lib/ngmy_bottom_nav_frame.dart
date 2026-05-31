import 'dart:ui';

import 'package:flutter/material.dart';

/// Shared layout numbers — frame and icons use the same values so everything aligns.
class NgmyBottomNavMetrics {
  NgmyBottomNavMetrics._();

  static const sideIconSize = 26.0;
  static const centerButtonSize = 44.0;
  static const iconPad = 8.0;
  static const wingCorner = 20.0;
  static const bottomJoin = 10.0;

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

  /// Side wings stop here at the bottom — same inset as top padding around small icons.
  static double wingBottomY(double frameH) {
    final cy = iconCenterY(frameH);
    return cy + sideIconSize / 2 + iconPad;
  }
}

/// One continuous bottom nav frame — side wings inset at bottom, clean center arch on top.
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

  static Path buildPath(double w, double h) {
    final wingTop = NgmyBottomNavMetrics.wingTopY(h);
    final centerTop = NgmyBottomNavMetrics.centerTopY(h);
    final wingBottom = NgmyBottomNavMetrics.wingBottomY(h);
    final bottom = h;
    final leftEnd = w * (3 / 7);
    final rightStart = w * (4 / 7);
    final cx = w / 2;
    final r = NgmyBottomNavMetrics.wingCorner;
    final join = NgmyBottomNavMetrics.bottomJoin;
    final sideInset = NgmyBottomNavMetrics.iconPad * 0.65;

    final path = Path();

    // ── Left wing bottom (inset up to match top padding) ──
    path.moveTo(r, wingBottom);
    path.lineTo(leftEnd - sideInset, wingBottom);

    // Inner join: curve down into full NGMY bottom (unchanged).
    path.cubicTo(
      leftEnd - 2,
      wingBottom,
      leftEnd + 2,
      bottom - 2,
      leftEnd + join,
      bottom,
    );

    // ── NGMY flat bottom (do not change) ──
    path.lineTo(rightStart - join, bottom);

    // Inner join on right wing.
    path.cubicTo(
      rightStart - 2,
      bottom - 2,
      rightStart + 2,
      wingBottom,
      rightStart + sideInset,
      wingBottom,
    );

    // ── Right wing bottom ──
    path.lineTo(w - r, wingBottom);
    path.quadraticBezierTo(w, wingBottom, w, wingBottom - r);

    // Right outer edge.
    path.lineTo(w, wingTop + r);
    path.quadraticBezierTo(w, wingTop, w - r, wingTop);

    // Right wing top (pushed in slightly on inner edge).
    path.lineTo(rightStart + sideInset, wingTop);

    // ── Clean top curve over NGMY (one arc, end to end) ──
    path.quadraticBezierTo(cx, centerTop, leftEnd + sideInset, wingTop);

    // Left wing top.
    path.lineTo(r, wingTop);
    path.quadraticBezierTo(0, wingTop, 0, wingTop + r);

    // Left outer edge.
    path.lineTo(0, wingBottom - r);
    path.quadraticBezierTo(0, wingBottom, r, wingBottom);
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
