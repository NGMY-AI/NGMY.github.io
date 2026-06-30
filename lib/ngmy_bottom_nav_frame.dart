import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';

/// Layout for the classic pill bottom nav (matches FloatingTitle-style bar).
class NgmyBottomNavMetrics {
  NgmyBottomNavMetrics._();

  static const barHeight = 68.0;
  static const sideIconSize = 28.0;
  /// Fits inside [barHeight] with equal top/bottom inset (68 − 2×6 = 56).
  static const centerButtonSize = 56.0;
  static const centerLogoSize = 38.0;

  /// Compact pill for Local Growth Income (3 tabs, tighter layout).
  static const localBarHeight = 52.0;
  static const localSelectionBall = 36.0;
  static const localNavMaxWidth = 248.0;
  static const localNavItemWidth = 52.0;
  static const localNavItemGap = 6.0;

  static double get frameHeight => barHeight;
}

/// Frosted-glass pill bar — theme-aware (light/dark), content shows through behind.
class NgmySculptedBottomNavFrame extends StatefulWidget {
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
  State<NgmySculptedBottomNavFrame> createState() => _NgmySculptedBottomNavFrameState();
}

class _NgmySculptedBottomNavFrameState extends State<NgmySculptedBottomNavFrame> with SingleTickerProviderStateMixin {
  late AnimationController _glassCtrl;

  @override
  void initState() {
    super.initState();
    _glassCtrl = AnimationController(vsync: this, duration: const Duration(seconds: 9));
    if (!ngmyPreferLightGraphics) _glassCtrl.repeat();
  }

  @override
  void dispose() {
    _glassCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final card = theme.cardColor;
    final borderNeutral = isDark ? Colors.white : Colors.black;

    final height = widget.barHeight ?? NgmyBottomNavMetrics.barHeight;
    final radius = widget.borderRadius ?? 30.0;
    final outerRadius = radius + 2;

    return SizedBox(
      height: height,
      child: AnimatedBuilder(
        animation: _glassCtrl,
        builder: (context, child) {
          final shimmer = (math.sin(_glassCtrl.value * 2 * math.pi) + 1) / 2;
          final glassPanel = Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(radius),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: isDark
                    ? [
                        card.withValues(alpha: ngmyPreferLightGraphics ? 0.94 : 0.52 + shimmer * 0.04),
                        card.withValues(alpha: ngmyPreferLightGraphics ? 0.88 : 0.05),
                        card.withValues(alpha: ngmyPreferLightGraphics ? 0.92 : 0.38),
                      ]
                    : [
                        Colors.white.withValues(alpha: ngmyPreferLightGraphics ? 0.96 : 0.62 + shimmer * 0.06),
                        card.withValues(alpha: ngmyPreferLightGraphics ? 0.90 : 0.28),
                        Colors.white.withValues(alpha: ngmyPreferLightGraphics ? 0.94 : 0.48),
                      ],
              ),
              border: Border.all(
                color: borderNeutral.withValues(alpha: isDark ? 0.16 + shimmer * 0.08 : 0.10 + shimmer * 0.06),
                width: 1.1,
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: isDark ? 0.28 : 0.08),
                  blurRadius: 16,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: Stack(
              children: [
                Positioned(
                  left: 8,
                  right: 8,
                  top: 0,
                  height: 22,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          Colors.white.withValues(alpha: isDark ? 0.10 + shimmer * 0.06 : 0.38 + shimmer * 0.08),
                          Colors.white.withValues(alpha: 0.0),
                        ],
                      ),
                    ),
                  ),
                ),
                Positioned.fill(child: child!),
              ],
            ),
          );

          return Container(
            padding: const EdgeInsets.all(1.4),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(outerRadius),
              gradient: SweepGradient(
                colors: [
                  borderNeutral.withValues(alpha: 0.02),
                  borderNeutral.withValues(alpha: isDark ? 0.18 + shimmer * 0.12 : 0.12 + shimmer * 0.08),
                  borderNeutral.withValues(alpha: isDark ? 0.28 : 0.18),
                  borderNeutral.withValues(alpha: isDark ? 0.14 + shimmer * 0.08 : 0.10 + shimmer * 0.06),
                  borderNeutral.withValues(alpha: 0.02),
                ],
                transform: GradientRotation(_glassCtrl.value * 2 * math.pi),
              ),
            ),
            child: ngmyClipBackdrop(
              borderRadius: BorderRadius.circular(radius),
              sigma: 20,
              child: glassPanel,
            ),
          );
        },
        child: widget.child,
      ),
    );
  }
}
