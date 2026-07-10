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

  /// Compact pill for Local Growth Income (3 tabs, tighter layout).
  static const localBarHeight = 52.0;
  static const localSelectionBall = 36.0;
  static const localNavMaxWidth = 248.0;
  static const localNavItemWidth = 52.0;
  static const localNavItemGap = 6.0;

  /// Sliding glass selection orb for the main 7-tab bar.
  static const selectionOrb = 46.0;

  static double get frameHeight => barHeight;
}

/// Frosted-glass pill bar — translucent, soft breathing glow (no scan / rainbow motion).
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
  late final AnimationController _breathe;

  @override
  void initState() {
    super.initState();
    _breathe = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _breathe.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final height = widget.barHeight ?? NgmyBottomNavMetrics.barHeight;
    final radius = widget.borderRadius ?? 30.0;

    return SizedBox(
      height: height,
      child: AnimatedBuilder(
        animation: _breathe,
        builder: (context, child) {
          final t = Curves.easeInOut.transform(_breathe.value);
          final borderA = (isDark ? 0.38 : 0.30) + t * 0.18;
          final glowA = 0.10 + t * 0.14;

          return DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(radius),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF67E8F9).withValues(alpha: glowA),
                  blurRadius: 22 + t * 8,
                  offset: const Offset(0, 4),
                ),
                BoxShadow(
                  color: Colors.black.withValues(alpha: isDark ? 0.22 : 0.08),
                  blurRadius: 14,
                  offset: const Offset(0, 6),
                ),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(radius),
              child: Stack(
                fit: StackFit.expand,
                children: [
                  BackdropFilter(
                    filter: ImageFilter.blur(sigmaX: 22, sigmaY: 22),
                    child: const SizedBox.expand(),
                  ),
                  DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(radius),
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: isDark
                            ? [
                                Colors.white.withValues(alpha: 0.16 + t * 0.04),
                                const Color(0xFF0F172A).withValues(alpha: 0.42),
                                const Color(0xFF111827).withValues(alpha: 0.52),
                              ]
                            : [
                                Colors.white.withValues(alpha: 0.52 + t * 0.06),
                                Colors.white.withValues(alpha: 0.30),
                                const Color(0xFFE0F2FE).withValues(alpha: 0.34),
                              ],
                      ),
                      border: Border.all(
                        color: const Color(0xFF67E8F9).withValues(alpha: borderA),
                        width: 1.35,
                      ),
                    ),
                  ),
                  // Soft top glass sheen only — no moving bands.
                  Positioned(
                    left: 12,
                    right: 12,
                    top: 0,
                    height: 18,
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
                        gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: [
                            Colors.white.withValues(alpha: isDark ? 0.18 + t * 0.06 : 0.48 + t * 0.08),
                            Colors.white.withValues(alpha: 0.0),
                          ],
                        ),
                      ),
                    ),
                  ),
                  child!,
                ],
              ),
            ),
          );
        },
        child: widget.child,
      ),
    );
  }
}

/// Sliding glass selection orb used behind the active bottom-nav tab.
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
        shape: BoxShape.circle,
        gradient: RadialGradient(
          colors: [
            Colors.white.withValues(alpha: isDark ? 0.34 : 0.62),
            accent.withValues(alpha: isDark ? 0.42 : 0.32),
            accent.withValues(alpha: isDark ? 0.10 : 0.06),
          ],
        ),
        border: Border.all(color: accent.withValues(alpha: isDark ? 0.70 : 0.50), width: 1.3),
        boxShadow: [
          BoxShadow(color: accent.withValues(alpha: 0.40), blurRadius: 14, offset: const Offset(0, 2)),
        ],
      ),
    );
  }
}
