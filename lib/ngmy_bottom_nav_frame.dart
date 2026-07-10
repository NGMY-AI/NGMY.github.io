import 'dart:math' as math;
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

/// Frosted-glass pill bar — translucent so content shows through, with robotic HUD motion.
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

class _NgmySculptedBottomNavFrameState extends State<NgmySculptedBottomNavFrame> with TickerProviderStateMixin {
  late final AnimationController _spin;
  late final AnimationController _pulse;
  late final AnimationController _scan;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 10000))..repeat();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _scan = AnimationController(vsync: this, duration: const Duration(milliseconds: 4200))..repeat();
  }

  @override
  void dispose() {
    _spin.dispose();
    _pulse.dispose();
    _scan.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final height = widget.barHeight ?? NgmyBottomNavMetrics.barHeight;
    final radius = widget.borderRadius ?? 30.0;
    final outerRadius = radius + 2;

    return SizedBox(
      height: height,
      child: AnimatedBuilder(
        animation: Listenable.merge([_spin, _pulse, _scan]),
        builder: (context, child) {
          final pulse = Curves.easeInOut.transform(_pulse.value);
          final scan = _scan.value;
          final glow = 0.28 + pulse * 0.22;

          final glassPanel = ClipRRect(
            borderRadius: BorderRadius.circular(radius),
            child: Stack(
              fit: StackFit.expand,
              children: [
                // Frosted glass so content behind the bar stays visible.
                BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20),
                  child: const SizedBox.expand(),
                ),
                DecoratedBox(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(radius),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: isDark
                          ? [
                              Colors.white.withValues(alpha: 0.12 + pulse * 0.04),
                              const Color(0xFF0F172A).withValues(alpha: 0.38),
                              const Color(0xFF111827).withValues(alpha: 0.48),
                            ]
                          : [
                              Colors.white.withValues(alpha: 0.42 + pulse * 0.08),
                              Colors.white.withValues(alpha: 0.22),
                              const Color(0xFFE0F2FE).withValues(alpha: 0.28),
                            ],
                    ),
                    border: Border.all(
                      color: Color.lerp(
                        const Color(0xFF67E8F9),
                        const Color(0xFFA78BFA),
                        pulse,
                      )!.withValues(alpha: isDark ? 0.45 + glow * 0.25 : 0.35 + glow * 0.2),
                      width: 1.2,
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: isDark ? 0.28 : 0.10),
                        blurRadius: 18,
                        offset: const Offset(0, 6),
                      ),
                      BoxShadow(
                        color: const Color(0xFF67E8F9).withValues(alpha: 0.10 + pulse * 0.08),
                        blurRadius: 16,
                        offset: const Offset(0, 2),
                      ),
                    ],
                  ),
                ),
                // Top sheen
                Positioned(
                  left: 10,
                  right: 10,
                  top: 0,
                  height: 20,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          Colors.white.withValues(alpha: isDark ? 0.16 + pulse * 0.06 : 0.42 + pulse * 0.08),
                          Colors.white.withValues(alpha: 0.0),
                        ],
                      ),
                    ),
                  ),
                ),
                // Soft scan sweep
                Positioned.fill(
                  child: IgnorePointer(
                    child: CustomPaint(
                      painter: _NavHudPainter(
                        isDark: isDark,
                        spin: _spin.value,
                        scan: scan,
                        pulse: pulse,
                      ),
                    ),
                  ),
                ),
                child!,
              ],
            ),
          );

          return Container(
            padding: const EdgeInsets.all(1.5),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(outerRadius),
              gradient: SweepGradient(
                colors: [
                  const Color(0xFF67E8F9).withValues(alpha: 0.05),
                  const Color(0xFF67E8F9).withValues(alpha: 0.45 + pulse * 0.2),
                  const Color(0xFFA78BFA).withValues(alpha: 0.55),
                  const Color(0xFF34D399).withValues(alpha: 0.35 + pulse * 0.15),
                  const Color(0xFF67E8F9).withValues(alpha: 0.05),
                ],
                transform: GradientRotation(_spin.value * 2 * math.pi),
              ),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF8B5CF6).withValues(alpha: 0.12 + pulse * 0.08),
                  blurRadius: 20,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: glassPanel,
          );
        },
        child: widget.child,
      ),
    );
  }
}

class _NavHudPainter extends CustomPainter {
  _NavHudPainter({
    required this.isDark,
    required this.spin,
    required this.scan,
    required this.pulse,
  });

  final bool isDark;
  final double spin;
  final double scan;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    // Corner brackets
    final bracket = Paint()
      ..color = const Color(0xFF67E8F9).withValues(alpha: 0.35 + pulse * 0.25)
      ..strokeWidth = 1.6
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    const c = 10.0;
    const inset = 7.0;
    void corner(double x, double y, double dx, double dy) {
      canvas.drawPath(
        Path()
          ..moveTo(x + dx * c, y)
          ..lineTo(x, y)
          ..lineTo(x, y + dy * c),
        bracket,
      );
    }

    corner(inset, inset, 1, 1);
    corner(size.width - inset, inset, -1, 1);
    corner(inset, size.height - inset, 1, -1);
    corner(size.width - inset, size.height - inset, -1, -1);

    // Horizontal scan line
    final sy = size.height * scan;
    final scanPaint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          const Color(0xFF67E8F9).withValues(alpha: 0.0),
          const Color(0xFF67E8F9).withValues(alpha: isDark ? 0.16 : 0.10),
          const Color(0xFF67E8F9).withValues(alpha: 0.0),
        ],
      ).createShader(Rect.fromLTWH(0, sy - 10, size.width, 20));
    canvas.drawRect(Rect.fromLTWH(8, sy - 10, size.width - 16, 20), scanPaint);

    // Tiny orbit ticks on the right
    final cx = size.width - 16;
    final cy = size.height / 2;
    final tick = Paint()
      ..color = const Color(0xFFA78BFA).withValues(alpha: 0.55)
      ..strokeWidth = 1.2;
    for (var i = 0; i < 5; i++) {
      final a = spin * math.pi * 2 + i * (math.pi * 2 / 5);
      canvas.drawCircle(Offset(cx + math.cos(a) * 5, cy + math.sin(a) * 5), 1.1, tick);
    }
  }

  @override
  bool shouldRepaint(covariant _NavHudPainter old) =>
      old.spin != spin || old.scan != scan || old.pulse != pulse || old.isDark != isDark;
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
            Colors.white.withValues(alpha: isDark ? 0.28 : 0.55),
            accent.withValues(alpha: isDark ? 0.38 : 0.28),
            accent.withValues(alpha: isDark ? 0.12 : 0.08),
          ],
        ),
        border: Border.all(color: accent.withValues(alpha: isDark ? 0.65 : 0.45), width: 1.3),
        boxShadow: [
          BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 2)),
          BoxShadow(color: Colors.white.withValues(alpha: isDark ? 0.08 : 0.35), blurRadius: 8),
        ],
      ),
    );
  }
}
