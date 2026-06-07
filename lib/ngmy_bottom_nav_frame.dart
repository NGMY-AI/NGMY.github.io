import 'dart:math' as math;
import 'dart:ui';

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

  static double get frameHeight => barHeight;
}

/// Frosted-glass pill bar with emerald glass styling (matches clock-in name tag).
class NgmySculptedBottomNavFrame extends StatefulWidget {
  const NgmySculptedBottomNavFrame({
    super.key,
    required this.child,
  });

  final Widget child;

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
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final useBlur = !ngmyPreferLightGraphics;

    return SizedBox(
      height: NgmyBottomNavMetrics.barHeight,
      child: AnimatedBuilder(
        animation: _glassCtrl,
        builder: (context, child) {
          final shimmer = (math.sin(_glassCtrl.value * 2 * math.pi) + 1) / 2;
          final glassPanel = Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: isDark
                    ? [
                        const Color(0xFF34D399).withValues(alpha: 0.14 + shimmer * 0.06),
                        Colors.white.withValues(alpha: 0.06),
                        const Color(0xFF047857).withValues(alpha: 0.12),
                      ]
                    : [
                        const Color(0xFF6EE7B7).withValues(alpha: 0.22 + shimmer * 0.08),
                        Colors.white.withValues(alpha: 0.38),
                        const Color(0xFF059669).withValues(alpha: 0.16),
                      ],
              ),
              border: Border.all(
                color: Colors.white.withValues(alpha: isDark ? 0.22 + shimmer * 0.14 : 0.48 + shimmer * 0.18),
                width: 1.1,
              ),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF22C55E).withValues(alpha: 0.12 + shimmer * 0.1),
                  blurRadius: 16,
                  offset: const Offset(0, 4),
                ),
                BoxShadow(
                  color: Colors.black.withValues(alpha: isDark ? 0.22 : 0.06),
                  blurRadius: 12,
                  offset: const Offset(0, 5),
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
                          Colors.white.withValues(alpha: isDark ? 0.14 + shimmer * 0.08 : 0.32 + shimmer * 0.1),
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
            padding: const EdgeInsets.all(1.5),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(32),
              gradient: SweepGradient(
                colors: [
                  const Color(0xFF86EFAC).withValues(alpha: 0.04),
                  const Color(0xFFBBF7D0).withValues(alpha: 0.35 + shimmer * 0.2),
                  const Color(0xFF22C55E).withValues(alpha: 0.55),
                  const Color(0xFF6EE7B7).withValues(alpha: 0.22 + shimmer * 0.12),
                  const Color(0xFF86EFAC).withValues(alpha: 0.04),
                ],
                transform: GradientRotation(_glassCtrl.value * 2 * math.pi),
              ),
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(30),
              child: useBlur
                  ? BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20),
                      child: glassPanel,
                    )
                  : glassPanel,
            ),
          );
        },
        child: widget.child,
      ),
    );
  }
}
