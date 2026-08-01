import 'dart:math' as math;
import 'dart:ui' show PathMetric;

import 'package:flutter/material.dart';

import 'ngmy_worksheet_helpers.dart';

/// Accent colors per worksheet section (border glow only — nothing drawn on content).
enum WorksheetFrameStyle {
  standard,
  header,
  projects,
  cashier,
  familyTree,
}

/// Animated rounded border for Worksheets — light travels along the frame edge only.
class WorksheetGlowFrame extends StatefulWidget {
  const WorksheetGlowFrame({
    super.key,
    required this.child,
    this.borderRadius = 16,
    this.padding = EdgeInsets.zero,
    this.glowStrength = 1.0,
    this.style = WorksheetFrameStyle.standard,
  });

  final Widget child;
  final double borderRadius;
  final EdgeInsetsGeometry padding;
  final double glowStrength;
  final WorksheetFrameStyle style;

  @override
  State<WorksheetGlowFrame> createState() => _WorksheetGlowFrameState();
}

class _WorksheetGlowFrameState extends State<WorksheetGlowFrame> with SingleTickerProviderStateMixin {
  late final AnimationController _spin;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 3800))..repeat();
  }

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  List<Color> get _accentColors {
    switch (widget.style) {
      case WorksheetFrameStyle.header:
        return [WorksheetPalette.green, WorksheetPalette.teal, WorksheetPalette.greenDark];
      case WorksheetFrameStyle.projects:
        return [const Color(0xFF34D399), WorksheetPalette.green, const Color(0xFF059669)];
      case WorksheetFrameStyle.cashier:
        return [const Color(0xFF38BDF8), const Color(0xFF6366F1), const Color(0xFF4F46E5)];
      case WorksheetFrameStyle.familyTree:
        return [const Color(0xFF2DD4BF), WorksheetPalette.teal, const Color(0xFF0D9488)];
      case WorksheetFrameStyle.standard:
        return [WorksheetPalette.green, WorksheetPalette.teal, WorksheetPalette.greenDark];
    }
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return AnimatedBuilder(
      animation: _spin,
      builder: (context, _) {
        final t = _spin.value;
        final pulse = 0.5 + 0.5 * math.sin(t * math.pi * 2);
        return CustomPaint(
          painter: _WorksheetGlowBorderPainter(
            t: t,
            borderRadius: widget.borderRadius,
            isDark: p.isDark,
            strength: widget.glowStrength,
            accents: _accentColors,
          ),
          child: Padding(
            padding: const EdgeInsets.all(3),
            child: Container(
              padding: widget.padding,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(widget.borderRadius - 1),
                boxShadow: [
                  BoxShadow(
                    color: _accentColors[1].withValues(alpha: 0.10 + 0.12 * pulse * widget.glowStrength),
                    blurRadius: 18 + pulse * 6,
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

/// Shimmer + pulse for the New Project action.
class WorksheetNewProjectButton extends StatefulWidget {
  const WorksheetNewProjectButton({super.key, required this.onPressed});

  final VoidCallback onPressed;

  @override
  State<WorksheetNewProjectButton> createState() => _WorksheetNewProjectButtonState();
}

class _WorksheetNewProjectButtonState extends State<WorksheetNewProjectButton> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (context, _) {
        final t = Curves.easeInOut.transform(_ctrl.value);
        final pulse = 0.5 + 0.5 * math.sin(_ctrl.value * math.pi * 2);
        return Material(
          color: Colors.transparent,
          borderRadius: BorderRadius.circular(12),
          child: InkWell(
            onTap: widget.onPressed,
            borderRadius: BorderRadius.circular(12),
            child: Ink(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                gradient: LinearGradient(
                  begin: Alignment(-1.2 + t * 2.4, -0.5),
                  end: Alignment(1.2 - t * 2.4, 0.8),
                  colors: [
                    WorksheetPalette.greenDark,
                    Color.lerp(WorksheetPalette.green, WorksheetPalette.teal, t)!,
                    WorksheetPalette.green,
                  ],
                ),
                border: Border.all(
                  color: Colors.white.withValues(alpha: 0.35 + pulse * 0.25),
                  width: 1.8,
                ),
                boxShadow: [
                  BoxShadow(
                    color: WorksheetPalette.green.withValues(alpha: 0.35 + pulse * 0.25),
                    blurRadius: 14 + pulse * 10,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Transform.rotate(
                      angle: math.sin(_ctrl.value * math.pi * 2) * 0.12,
                      child: Container(
                        width: 26,
                        height: 26,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: Colors.white.withValues(alpha: 0.22 + pulse * 0.12),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.45)),
                        ),
                        child: const Icon(Icons.add_rounded, color: Colors.white, size: 18),
                      ),
                    ),
                    const SizedBox(width: 8),
                    const Text(
                      'New Project',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5, letterSpacing: 0.2),
                    ),
                  ],
                ),
              ),
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
    required this.accents,
  });

  final double t;
  final double borderRadius;
  final bool isDark;
  final double strength;
  final List<Color> accents;

  @override
  void paint(Canvas canvas, Size size) {
    if (size.width < 8 || size.height < 8) return;
    final r = RRect.fromRectAndRadius(
      Rect.fromLTWH(2, 2, size.width - 4, size.height - 4),
      Radius.circular(borderRadius),
    );
    final path = Path()..addRRect(r);

    // Outer soft bloom — follows rounded frame
    canvas.drawRRect(
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 12
        ..color = accents[1].withValues(alpha: 0.10 * strength)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8),
    );

    // Steady rounded rail
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3.2
        ..color = (isDark ? accents[0] : accents[2]).withValues(alpha: 0.50 * strength),
    );

    // Traveling highlights trace the rounded perimeter (no corner brackets, no inner boxes)
    final metrics = path.computeMetrics();
    for (final metric in metrics) {
      final len = metric.length;
      _drawTraceSegment(canvas, metric, len, t, 0.0, 0.22, 5.0, 0.95);
      _drawTraceSegment(canvas, metric, len, t, 0.38, 0.14, 4.0, 0.70);
      _drawTraceSegment(canvas, metric, len, -t * 0.85, 0.55, 0.12, 3.5, 0.55);
    }
  }

  void _drawTraceSegment(
    Canvas canvas,
    PathMetric metric,
    double len,
    double phase,
    double phaseOffset,
    double fraction,
    double width,
    double alpha,
  ) {
    final segLen = len * fraction;
    final start = ((phase + phaseOffset) % 1.0) * len;
    final end = start + segLen;
    final segment = metric.extractPath(start, end);
    final bounds = segment.getBounds();
    canvas.drawPath(
      segment,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = width
        ..strokeCap = StrokeCap.round
        ..shader = LinearGradient(
          colors: [
            accents[0].withValues(alpha: 0.0),
            accents[0].withValues(alpha: alpha * strength),
            accents[1].withValues(alpha: alpha * strength),
            accents[2].withValues(alpha: 0.45 * strength),
            accents[0].withValues(alpha: 0.0),
          ],
          stops: const [0.0, 0.25, 0.5, 0.75, 1.0],
        ).createShader(bounds),
    );
  }

  @override
  bool shouldRepaint(covariant _WorksheetGlowBorderPainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.isDark != isDark;
}
