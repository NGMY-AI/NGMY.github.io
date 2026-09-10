import 'package:flutter/material.dart';

/// Layout for the bottom nav dock.
class NgmyBottomNavMetrics {
  NgmyBottomNavMetrics._();

  static const barHeight = 64.0;
  static const sideIconSize = 24.0;
  static const centerButtonSize = 46.0;
  static const centerLogoSize = 30.0;

  /// Compact pill for Local Growth Income (3 tabs, tighter layout).
  static const localBarHeight = 52.0;
  static const localSelectionBall = 36.0;
  static const localNavMaxWidth = 248.0;
  static const localNavItemWidth = 52.0;
  static const localNavItemGap = 6.0;

  static const selectionOrb = 40.0;

  static double get frameHeight => barHeight;
}

/// Flat dock bar — solid surface, thin hairline, no pulsing glow.
class NgmySculptedBottomNavFrame extends StatelessWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
    this.barHeight,
    this.borderRadius,
  });

  final Widget child;
  final double? barHeight;
  final double? borderRadius;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final height = widgetBarHeight;
    final radius = widget.borderRadius ?? 22.0;

    return SizedBox(
      height: height,
      child: DecoratedBox(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(radius),
          color: isDark ? const Color(0xFF151A22) : const Color(0xFFF4F6F8),
          border: Border.all(
            color: isDark ? const Color(0xFF2A3340) : const Color(0xFFD9DEE6),
            width: 1,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: isDark ? 0.35 : 0.10),
              blurRadius: 18,
              offset: const Offset(0, 8),
            ),
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(radius),
          child: child,
        ),
      ),
    );
  }

  double get widgetBarHeight => barHeight ?? NgmyBottomNavMetrics.barHeight;
}

/// Sliding selection highlight behind the active bottom-nav tab.
class NgmyNavSelectionOrb extends StatelessWidget {
  const NgmyNavSelectionOrb({
    super.key,
    this.size = NgmyBottomNavMetrics.selectionOrb,
    this.accent = const Color(0xFF67E8F9),
  });

  final double size;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return DecoratedBox(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(14),
        color: accent.withValues(alpha: isDark ? 0.18 : 0.14),
        border: Border.all(color: accent.withValues(alpha: isDark ? 0.40 : 0.28), width: 1),
      ),
    );
  }
}
