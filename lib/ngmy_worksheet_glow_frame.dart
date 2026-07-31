import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_worksheet_helpers.dart';

/// Soft green shimmer border for Worksheets cards — clean, not HUD/tech style.
class WorksheetGlowFrame extends StatefulWidget {
  const WorksheetGlowFrame({
    super.key,
    required this.child,
    this.borderRadius = 16,
    this.padding = EdgeInsets.zero,
    this.glowStrength = 1.0,
  });

  final Widget child;
  final double borderRadius;
  final EdgeInsetsGeometry padding;
  final double glowStrength;

  @override
  State<WorksheetGlowFrame> createState() => _WorksheetGlowFrameState();
}

class _WorksheetGlowFrameState extends State<WorksheetGlowFrame> with SingleTickerProviderStateMixin {
  late final AnimationController _spin;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(seconds: 5))..repeat();
  }

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return AnimatedBuilder(
      animation: _spin,
      builder: (context, _) {
        return CustomPaint(
          painter: _WorksheetGlowBorderPainter(
            t: _spin.value,
            borderRadius: widget.borderRadius,
            isDark: p.isDark,
            strength: widget.glowStrength,
          ),
          child: Padding(
            padding: const EdgeInsets.all(1.6),
            child: Container(
              padding: widget.padding,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(widget.borderRadius - 1),
                boxShadow: [
                  BoxShadow(
                    color: WorksheetPalette.green.withValues(alpha: 0.08 + 0.06 * math.sin(_spin.value * math.pi * 2)),
                    blurRadius: 18,
                    offset: const Offset(0, 6),
                  ),
                ],
              ),
              child: widget.child,
            ),
          ),
        );
      },
    );
  }
}

class _WorksheetGlowBorderPainter extends CustomPainter {
  _WorksheetGlowBorderPainter({
    required this.t,
    required this.borderRadius,
    required this.isDark,
    required this.strength,
  });

  final double t;
  final double borderRadius;
  final bool isDark;
  final double strength;

  @override
  void paint(Canvas canvas, Size size) {
    if (size.width < 4 || size.height < 4) return;
    final r = RRect.fromRectAndRadius(
      Rect.fromLTWH(0.5, 0.5, size.width - 1, size.height - 1),
      Radius.circular(borderRadius),
    );

    final base = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2
      ..color = (isDark ? WorksheetPalette.green : WorksheetPalette.greenDark)
          .withValues(alpha: 0.22 * strength);
    canvas.drawRRect(r, base);

    final sweep = SweepGradient(
      startAngle: t * math.pi * 2,
      colors: [
        WorksheetPalette.green.withValues(alpha: 0.0),
        WorksheetPalette.green.withValues(alpha: 0.55 * strength),
        WorksheetPalette.teal.withValues(alpha: 0.75 * strength),
        WorksheetPalette.greenDark.withValues(alpha: 0.45 * strength),
        WorksheetPalette.green.withValues(alpha: 0.0),
      ],
      stops: const [0.0, 0.35, 0.5, 0.65, 1.0],
    );
    final glow = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.2
      ..shader = sweep.createShader(Rect.fromLTWH(0, 0, size.width, size.height));
    canvas.drawRRect(r, glow);
  }

  @override
  bool shouldRepaint(covariant _WorksheetGlowBorderPainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.isDark != isDark;
}
