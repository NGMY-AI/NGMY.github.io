import 'dart:ui';

import 'package:flutter/material.dart';

/// Layout for the classic pill bottom nav (matches FloatingTitle-style bar).
class NgmyBottomNavMetrics {
  NgmyBottomNavMetrics._();

  static const barHeight = 68.0;
  static const sideIconSize = 28.0;
  /// Fits inside [barHeight] with equal top/bottom inset (68 − 2×6 = 56).
  static const centerButtonSize = 56.0;
  static const centerLogoSize = 38.0;

  static double get frameHeight => barHeight;
}

/// Frosted-glass pill bar — all icons share one horizontal center line.
class NgmySculptedBottomNavFrame extends StatelessWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
  });

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final fillColor = Theme.of(context).cardColor.withValues(alpha: isDark ? 0.50 : 0.56);

    return SizedBox(
      height: NgmyBottomNavMetrics.barHeight,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.bottomCenter,
        children: [
          Positioned.fill(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(30),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
                child: Container(
                  decoration: BoxDecoration(
                    color: fillColor,
                    borderRadius: BorderRadius.circular(30),
                    border: Border.all(
                      color: isDark ? Colors.white.withValues(alpha: 0.12) : Colors.black.withValues(alpha: 0.06),
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: isDark ? 0.28 : 0.07),
                        blurRadius: 15,
                        offset: const Offset(0, 5),
                      ),
                    ],
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
