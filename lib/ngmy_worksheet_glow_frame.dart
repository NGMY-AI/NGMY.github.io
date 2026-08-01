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

/// Crisp animated rounded border for Worksheets — light travels along the edge only.
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
    return RepaintBoundary(
      child: AnimatedBuilder(
        animation: _spin,
        builder: (context, _) {
          return CustomPaint(
            foregroundPainter: _WorksheetGlowBorderPainter(
              t: _spin.value,
              borderRadius: widget.borderRadius,
              isDark: p.isDark,
              strength: widget.glowStrength,
              accents: _accentColors,
            ),
            child: Padding(
              padding: const EdgeInsets.all(2.5),
              child: RepaintBoundary(
                child: Container(
                  padding: widget.padding,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(widget.borderRadius - 1),
                  ),
                  child: widget.child,
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

/// Shimmer for the New Project action — no heavy blur shadows.
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
                border: Border.all(color: Colors.white.withValues(alpha: 0.4), width: 1.5),
              ),
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.add_rounded, color: Colors.white, size: 18),
                    SizedBox(width: 8),
                    Text(
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
      Rect.fromLTWH(1.5, 1.5, size.width - 3, size.height - 3),
      Radius.circular(borderRadius),
    );
    final path = Path()..addRRect(r);

    // Soft outer rail — crisp stroke only (no MaskFilter blur).
    canvas.drawRRect(
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 5
        ..color = accents[1].withValues(alpha: 0.14 * strength),
    );

    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.8
        ..color = (isDark ? accents[0] : accents[2]).withValues(alpha: 0.55 * strength),
    );

    final metrics = path.computeMetrics();
    for (final metric in metrics) {
      final len = metric.length;
      _drawTraceSegment(canvas, metric, len, t, 0.0, 0.20, 4.2, 0.92);
      _drawTraceSegment(canvas, metric, len, -t * 0.85, 0.52, 0.11, 3.2, 0.58);
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
        ..isAntiAlias = true
        ..shader = LinearGradient(
          colors: [
            accents[0].withValues(alpha: 0.0),
            accents[0].withValues(alpha: alpha * strength),
            accents[1].withValues(alpha: alpha * strength),
            accents[0].withValues(alpha: 0.0),
          ],
          stops: const [0.0, 0.35, 0.65, 1.0],
        ).createShader(bounds),
    );
  }

  @override
  bool shouldRepaint(covariant _WorksheetGlowBorderPainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.isDark != isDark;
}
