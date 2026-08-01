import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_worksheet_helpers.dart';

/// Visual personality for worksheet card frames (Projects / Cashier / Family Tree).
enum WorksheetFrameStyle {
  standard,
  header,
  projects,
  cashier,
  familyTree,
}

/// Animated border + inner motif for Worksheets — thick, visible, per-tab styling.
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
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 4200))..repeat();
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
            style: widget.style,
            accents: _accentColors,
          ),
          child: Padding(
            padding: const EdgeInsets.all(3.2),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(widget.borderRadius - 2),
              child: Stack(
                fit: StackFit.passthrough,
                children: [
                  Container(
                    padding: widget.padding,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(widget.borderRadius - 2),
                      boxShadow: [
                        BoxShadow(
                          color: _accentColors[1].withValues(alpha: 0.12 + 0.14 * pulse * widget.glowStrength),
                          blurRadius: 22 + pulse * 8,
                          spreadRadius: 0.5,
                          offset: const Offset(0, 8),
                        ),
                      ],
                    ),
                    child: widget.child,
                  ),
                  Positioned.fill(
                    child: IgnorePointer(
                      child: CustomPaint(
                        painter: _WorksheetInnerMotifPainter(
                          t: t,
                          style: widget.style,
                          accents: _accentColors,
                          strength: widget.glowStrength,
                          overlay: true,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
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
    required this.style,
    required this.accents,
  });

  final double t;
  final double borderRadius;
  final bool isDark;
  final double strength;
  final WorksheetFrameStyle style;
  final List<Color> accents;

  @override
  void paint(Canvas canvas, Size size) {
    if (size.width < 8 || size.height < 8) return;
    final r = RRect.fromRectAndRadius(
      Rect.fromLTWH(1.5, 1.5, size.width - 3, size.height - 3),
      Radius.circular(borderRadius),
    );

    // Soft outer bloom
    canvas.drawRRect(
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 10
        ..color = accents[1].withValues(alpha: 0.08 * strength)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6),
    );

    // Base rail — thick & always visible
    canvas.drawRRect(
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3.6
        ..color = (isDark ? accents[0] : accents[2]).withValues(alpha: 0.42 * strength),
    );

    // Counter-rotating highlight arcs
    _drawTravelingArc(canvas, size, r, phase: t, width: 5.2, alpha: 0.95);
    _drawTravelingArc(canvas, size, r, phase: -t * 0.72, width: 4.0, alpha: 0.65);

    // Corner brackets — pulse so edges read even on bright cards
    _drawCorners(canvas, size, r);
  }

  void _drawTravelingArc(
    Canvas canvas,
    Size size,
    RRect r, {
    required double phase,
    required double width,
    required double alpha,
  }) {
    final sweep = SweepGradient(
      startAngle: phase * math.pi * 2,
      colors: [
        accents[0].withValues(alpha: 0.0),
        accents[0].withValues(alpha: alpha * strength),
        accents[1].withValues(alpha: alpha * strength),
        accents[2].withValues(alpha: 0.55 * strength),
        accents[0].withValues(alpha: 0.0),
      ],
      stops: const [0.0, 0.28, 0.42, 0.58, 1.0],
    );
    canvas.drawRRect(
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = width
        ..shader = sweep.createShader(Rect.fromLTWH(0, 0, size.width, size.height)),
    );
  }

  void _drawCorners(Canvas canvas, Size size, RRect r) {
    final pulse = 0.55 + 0.45 * math.sin(t * math.pi * 2);
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3.2
      ..strokeCap = StrokeCap.round
      ..color = Colors.white.withValues(alpha: (0.35 + pulse * 0.35) * strength);
    const len = 18.0;
    final rect = r.outerRect;
    final corners = [
      (Offset(rect.left, rect.top), 1.0, 1.0),
      (Offset(rect.right, rect.top), -1.0, 1.0),
      (Offset(rect.left, rect.bottom), 1.0, -1.0),
      (Offset(rect.right, rect.bottom), -1.0, -1.0),
    ];
    for (final (origin, dx, dy) in corners) {
      canvas.drawLine(origin, origin + Offset(len * dx, 0), paint);
      canvas.drawLine(origin, origin + Offset(0, len * dy), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _WorksheetGlowBorderPainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.isDark != isDark || oldDelegate.style != style;
}

class _WorksheetInnerMotifPainter extends CustomPainter {
  _WorksheetInnerMotifPainter({
    required this.t,
    required this.style,
    required this.accents,
    required this.strength,
    this.overlay = false,
  });

  final double t;
  final WorksheetFrameStyle style;
  final List<Color> accents;
  final double strength;
  final bool overlay;

  double get _alphaScale => overlay ? 1.65 : 1.0;

  @override
  void paint(Canvas canvas, Size size) {
    switch (style) {
      case WorksheetFrameStyle.projects:
        _paintProjectCells(canvas, size);
      case WorksheetFrameStyle.cashier:
        _paintCashierTicks(canvas, size);
      case WorksheetFrameStyle.familyTree:
        _paintTreeBranches(canvas, size);
      case WorksheetFrameStyle.header:
        _paintHeaderBands(canvas, size);
      case WorksheetFrameStyle.standard:
        _paintStandardDots(canvas, size);
    }
  }

  void _paintProjectCells(Canvas canvas, Size size) {
    const cols = 3;
    const rows = 2;
    final cellW = size.width / (cols + 1);
    final cellH = size.height / (rows + 1);
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        final phase = t * math.pi * 2 + (r * cols + c) * 0.55;
        final alpha = (0.08 + 0.14 * ((math.sin(phase) + 1) / 2)) * strength * _alphaScale;
        final left = cellW * (c + 0.55) + math.sin(phase) * 3;
        final top = cellH * (r + 0.55) + math.cos(phase) * 3;
        canvas.drawRRect(
          RRect.fromRectAndRadius(Rect.fromLTWH(left, top, cellW * 0.72, cellH * 0.62), const Radius.circular(10)),
          Paint()..color = accents[0].withValues(alpha: alpha),
        );
        canvas.drawRRect(
          RRect.fromRectAndRadius(Rect.fromLTWH(left, top, cellW * 0.72, cellH * 0.62), const Radius.circular(10)),
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 1.6
            ..color = accents[1].withValues(alpha: alpha * 1.4),
        );
      }
    }
  }

  void _paintCashierTicks(Canvas canvas, Size size) {
    for (var i = 0; i < 7; i++) {
      final phase = t * math.pi * 2 + i * 0.65;
      final h = size.height * (0.18 + ((math.sin(phase) + 1) / 2) * 0.55);
      final x = size.width * (0.08 + i * 0.13);
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTWH(x, size.height - h - 12, 10, h), const Radius.circular(4)),
        Paint()..color = accents[1].withValues(alpha: (0.12 + 0.18 * strength) * _alphaScale),
      );
    }
    for (var i = 0; i < 5; i++) {
      final phase = t * math.pi * 2 + i * 1.1;
      canvas.drawCircle(
        Offset(size.width * (0.15 + i * 0.17) + math.sin(phase) * 8, size.height * 0.22 + math.cos(phase) * 6),
        4 + (math.sin(phase) + 1) * 2,
        Paint()..color = accents[0].withValues(alpha: 0.16 * strength * _alphaScale),
      );
    }
  }

  void _paintTreeBranches(Canvas canvas, Size size) {
    final root = Offset(size.width * 0.5, size.height * 0.82);
    final trunk = Paint()
      ..strokeWidth = 2.8
      ..strokeCap = StrokeCap.round
      ..color = accents[2].withValues(alpha: 0.28 * strength * _alphaScale);
    canvas.drawLine(root, Offset(size.width * 0.5, size.height * 0.52), trunk);
    for (var i = 0; i < 4; i++) {
      final sway = math.sin(t * math.pi * 2 + i) * 8;
      final start = Offset(size.width * 0.5, size.height * (0.52 + i * 0.06));
      canvas.drawLine(
        start,
        Offset(size.width * (0.22 + i * 0.18) + sway, size.height * (0.18 + (i % 2) * 0.08)),
        trunk..strokeWidth = 2.2,
      );
      canvas.drawCircle(
        Offset(size.width * (0.22 + i * 0.18) + sway, size.height * (0.16 + (i % 2) * 0.08)),
        5 + i.toDouble(),
        Paint()..color = accents[0].withValues(alpha: 0.22 * strength * _alphaScale),
      );
    }
  }

  void _paintHeaderBands(Canvas canvas, Size size) {
    for (var i = 0; i < 3; i++) {
      final bandY = size.height * (0.15 + i * 0.28 + math.sin(t * math.pi * 2 + i) * 0.02);
      canvas.drawLine(
        Offset(-20 + t * (size.width + 40), bandY),
        Offset(size.width * 0.35 + t * (size.width + 40), bandY + 8),
        Paint()
          ..strokeWidth = 2.4
          ..color = Colors.white.withValues(alpha: 0.08 * strength * _alphaScale),
      );
    }
  }

  void _paintStandardDots(Canvas canvas, Size size) {
    for (var i = 0; i < 12; i++) {
      final phase = t * math.pi * 2 + i * 0.7;
      final alpha = (0.06 + 0.12 * ((math.sin(phase) + 1) / 2)) * strength * _alphaScale;
      canvas.drawCircle(
        Offset(size.width * ((i * 0.19) % 0.92 + 0.04), size.height * ((i * 0.23) % 0.88 + 0.06)),
        2.5 + alpha * 4,
        Paint()..color = accents[1].withValues(alpha: alpha),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _WorksheetInnerMotifPainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.style != style;
}
