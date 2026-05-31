import 'package:flutter/material.dart';

/// Layout for the classic pill bottom nav (matches FloatingTitle-style bar).
class NgmyBottomNavMetrics {
  NgmyBottomNavMetrics._();

  static const barHeight = 68.0;
  static const sideIconSize = 28.0;
  static const centerButtonSize = 52.0;

  static double get frameHeight => barHeight;
}

/// Simple rounded pill bar — all icons share one horizontal center line.
class NgmySculptedBottomNavFrame extends StatelessWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
  });

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return SizedBox(
      height: NgmyBottomNavMetrics.barHeight,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.bottomCenter,
        children: [
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                color: Theme.of(context).cardColor,
                borderRadius: BorderRadius.circular(30),
                border: Border.all(
                  color: isDark ? Colors.white.withValues(alpha: 0.06) : Colors.black.withValues(alpha: 0.04),
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: isDark ? 0.35 : 0.08),
                    blurRadius: 15,
                    offset: const Offset(0, 5),
                  ),
                ],
              ),
            ),
          ),
          Positioned.fill(child: child),
        ],
      ),
    );
  }
}
