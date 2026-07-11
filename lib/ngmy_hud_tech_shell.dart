import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

/// Ink / surface tokens for HUD chrome — dark mode unchanged, light mode readable.
class NgmyHudInk {
  NgmyHudInk._();

  static bool isDark(BuildContext context) => Theme.of(context).brightness == Brightness.dark;

  static Color title(BuildContext context) =>
      isDark(context) ? Colors.white : const Color(0xFF0F172A);

  static Color subtitle(BuildContext context, {double pulse = 0}) => isDark(context)
      ? Colors.white.withValues(alpha: 0.58 + pulse * 0.08)
      : const Color(0xFF475569);

  static Color muted(BuildContext context) =>
      isDark(context) ? Colors.white54 : const Color(0xFF64748B);

  static Color faint(BuildContext context) =>
      isDark(context) ? Colors.white38 : const Color(0xFF94A3B8);

  static Color icon(BuildContext context) =>
      isDark(context) ? Colors.white.withValues(alpha: 0.9) : const Color(0xFF1E293B);

  static Color panel(BuildContext context) => isDark(context)
      ? Colors.white.withValues(alpha: 0.06)
      : const Color(0xFFF1F5F9);

  static Color panelBorder(BuildContext context) => isDark(context)
      ? Colors.white.withValues(alpha: 0.14)
      : const Color(0xFFCBD5E1);
}

/// Shared pulse / scan / orbit clocks — same motion language as home tech frames.
class NgmyHudMotion extends StatefulWidget {
  const NgmyHudMotion({super.key, required this.builder});

  final Widget Function(BuildContext context, double pulse, double scan, double orbit) builder;

  @override
  State<NgmyHudMotion> createState() => _NgmyHudMotionState();
}

class _NgmyHudMotionState extends State<NgmyHudMotion> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _scan;
  late final AnimationController _orbit;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
    _scan = AnimationController(vsync: this, duration: const Duration(milliseconds: 3400))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(milliseconds: 9000))..repeat();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _scan.dispose();
    _orbit.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([_pulse, _scan, _orbit]),
      builder: (context, _) {
        final pulse = Curves.easeInOut.transform(_pulse.value);
        return widget.builder(context, pulse, _scan.value, _orbit.value);
      },
    );
  }
}

/// Robotic HUD chrome around any launcher / advisor card content.
class NgmyHudTechFrame extends StatelessWidget {
  const NgmyHudTechFrame({
    super.key,
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.child,
    this.onTap,
    this.borderRadius = 22,
    this.padding = EdgeInsets.zero,
    this.phase = 0,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final Widget child;
  final VoidCallback? onTap;
  final double borderRadius;
  final EdgeInsetsGeometry padding;
  /// Offsets scan/orbit so neighboring cards don't animate in lockstep.
  final double phase;

  @override
  Widget build(BuildContext context) {
    final dark = NgmyHudInk.isDark(context);
    final glow = 0.35 + pulse * 0.35;
    final scanV = (scan + phase) % 1.0;
    final orbitV = (orbit + phase * 0.7) % 1.0;
    final fill = dark
        ? [
            const Color(0xFF0B1220).withValues(alpha: 0.92),
            colors.first.withValues(alpha: 0.28 + pulse * 0.12),
            colors.last.withValues(alpha: 0.22),
            const Color(0xFF020617).withValues(alpha: 0.95),
          ]
        : [
            Colors.white.withValues(alpha: 0.98),
            colors.first.withValues(alpha: 0.14 + pulse * 0.08),
            colors.last.withValues(alpha: 0.10),
            const Color(0xFFF8FAFC),
          ];
    final borderColor = dark
        ? colors.first.withValues(alpha: 0.22 + pulse * 0.12)
        : colors.first.withValues(alpha: 0.45 + pulse * 0.15);

    Widget framed = CustomPaint(
      painter: NgmyHudFramePainter(
        colors: colors,
        pulse: pulse,
        scan: scanV,
        orbit: orbitV,
        glow: glow,
        borderRadius: borderRadius,
        lightMode: !dark,
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(borderRadius),
        child: LayoutBuilder(
          builder: (context, constraints) {
            // Never force infinite height — that blanks Creator Toolkit in scroll views.
            final fillH = constraints.hasBoundedHeight && constraints.maxHeight.isFinite;
            final content = Container(
              width: double.infinity,
              height: fillH ? constraints.maxHeight : null,
              padding: padding,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(borderRadius),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: fill,
                ),
                border: Border.all(color: borderColor),
                boxShadow: dark
                    ? null
                    : [
                        BoxShadow(
                          color: colors.first.withValues(alpha: 0.12 + pulse * 0.08),
                          blurRadius: 16,
                          offset: const Offset(0, 6),
                        ),
                      ],
              ),
              child: child,
            );
            // Heavy blur milks light pastel backgrounds — keep crisp in light mode.
            if (!dark) return content;
            return BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 14, sigmaY: 14),
              child: content,
            );
          },
        ),
      ),
    );

    if (onTap == null) return framed;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(borderRadius),
        child: framed,
      ),
    );
  }
}

/// Compact animated orb used inside toolkit / hub tiles.
class NgmyHudMiniOrb extends StatelessWidget {
  const NgmyHudMiniOrb({
    super.key,
    required this.colors,
    required this.pulse,
    required this.orbit,
    this.size = 56,
    this.icon,
  });

  final List<Color> colors;
  final double pulse;
  final double orbit;
  final double size;
  final IconData? icon;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        alignment: Alignment.center,
        children: [
          CustomPaint(
            size: Size.square(size),
            painter: NgmyHudMiniOrbPainter(colors: colors, pulse: pulse, orbit: orbit),
          ),
          if (icon != null)
            Icon(icon, color: Colors.white.withValues(alpha: 0.95), size: size * 0.42),
        ],
      ),
    );
  }
}

class NgmyHudFramePainter extends CustomPainter {
  NgmyHudFramePainter({
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.glow,
    this.borderRadius = 22,
    this.lightMode = false,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final double glow;
  final double borderRadius;
  final bool lightMode;

  @override
  void paint(Canvas canvas, Size size) {
    final r = RRect.fromRectAndRadius(Offset.zero & size, Radius.circular(borderRadius));
    final midStroke = lightMode
        ? colors.first.withValues(alpha: 0.55)
        : Colors.white.withValues(alpha: 0.35);
    final border = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = lightMode ? 1.8 : 1.4
      ..shader = LinearGradient(
        colors: [
          colors.first.withValues(alpha: 0.35 + glow * 0.45),
          midStroke,
          colors.last.withValues(alpha: 0.45 + glow * 0.35),
        ],
      ).createShader(Offset.zero & size);
    canvas.drawRRect(r, border);

    final sy = size.height * scan;
    final scanPaint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          colors.first.withValues(alpha: 0.0),
          colors.first.withValues(alpha: lightMode ? 0.16 : 0.22),
          colors.first.withValues(alpha: 0.0),
        ],
      ).createShader(Rect.fromLTWH(0, sy - 18, size.width, 36));
    canvas.drawRect(Rect.fromLTWH(6, sy - 18, size.width - 12, 36), scanPaint);

    final cx = size.width - 22;
    final cy = 22.0;
    final tick = Paint()
      ..color = colors.last.withValues(alpha: lightMode ? 0.85 : 0.7)
      ..strokeWidth = 1.5;
    for (var i = 0; i < 6; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 3);
      canvas.drawCircle(Offset(cx + math.cos(a) * 8, cy + math.sin(a) * 8), 1.2, tick);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyHudFramePainter old) =>
      old.pulse != pulse ||
      old.scan != scan ||
      old.orbit != orbit ||
      old.glow != glow ||
      old.lightMode != lightMode;
}

class NgmyHudMiniOrbPainter extends CustomPainter {
  NgmyHudMiniOrbPainter({
    required this.colors,
    required this.pulse,
    required this.orbit,
  });

  final List<Color> colors;
  final double pulse;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide * 0.32;
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        radius + i * 3.2 + pulse * 2.2,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: 0.12 * i),
      );
    }
    canvas.drawCircle(
      c,
      radius,
      Paint()
        ..shader = RadialGradient(
          colors: [
            Colors.white.withValues(alpha: 0.55),
            colors.first.withValues(alpha: 0.85),
            colors.last.withValues(alpha: 0.55),
          ],
        ).createShader(Rect.fromCircle(center: c, radius: radius)),
    );
    canvas.drawCircle(
      c,
      radius + 2,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = Colors.white.withValues(alpha: 0.55 + pulse * 0.35),
    );
    for (var i = 0; i < 4; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 2);
      final p = Offset(c.dx + math.cos(a) * (radius + 8), c.dy + math.sin(a) * (radius + 8));
      canvas.drawCircle(p, 2.0, Paint()..color = colors[i % colors.length]);
      canvas.drawLine(c, p, Paint()..color = colors.first.withValues(alpha: 0.35)..strokeWidth = 1);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyHudMiniOrbPainter old) => old.pulse != pulse || old.orbit != orbit;
}

/// Animated header used inside Creator Toolkit tools (dialogs + pages).
class NgmyToolkitAliveHeader extends StatelessWidget {
  const NgmyToolkitAliveHeader({
    super.key,
    required this.title,
    required this.colors,
    required this.pulse,
    required this.orbit,
    this.subtitle,
    this.icon,
    this.onClose,
    this.trailing,
    this.dense = false,
  });

  final String title;
  final String? subtitle;
  final List<Color> colors;
  final double pulse;
  final double orbit;
  final IconData? icon;
  final VoidCallback? onClose;
  final Widget? trailing;
  final bool dense;

  @override
  Widget build(BuildContext context) {
    final titleColor = NgmyHudInk.title(context);
    final subColor = NgmyHudInk.subtitle(context, pulse: pulse);
    return Padding(
      padding: EdgeInsets.fromLTRB(dense ? 12 : 16, dense ? 10 : 14, 8, dense ? 6 : 8),
      child: Row(
        children: [
          NgmyHudMiniOrb(
            colors: colors,
            pulse: pulse,
            orbit: orbit,
            size: dense ? 40 : 46,
            icon: icon,
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: titleColor,
                    fontWeight: FontWeight.w900,
                    fontSize: dense ? 16 : 18,
                    letterSpacing: 0.4,
                    shadows: [
                      Shadow(color: colors.first.withValues(alpha: 0.45 + pulse * 0.25), blurRadius: 12),
                    ],
                  ),
                ),
                if (subtitle != null && subtitle!.trim().isNotEmpty) ...[
                  const SizedBox(height: 2),
                  Text(
                    subtitle!,
                    style: TextStyle(
                      color: subColor,
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ],
            ),
          ),
          if (trailing != null) trailing!,
          if (onClose != null)
            IconButton(
              onPressed: onClose,
              icon: Icon(Icons.close_rounded, color: NgmyHudInk.muted(context), size: 22),
            ),
        ],
      ),
    );
  }
}

/// Glowing animated panel for toolkit dialogs.
class NgmyToolkitAlivePanel extends StatelessWidget {
  const NgmyToolkitAlivePanel({
    super.key,
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.child,
    this.width,
    this.maxHeight,
    this.borderRadius = 22,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final Widget child;
  final double? width;
  final double? maxHeight;
  final double borderRadius;

  @override
  Widget build(BuildContext context) {
    final dark = NgmyHudInk.isDark(context);
    return Container(
      width: width,
      constraints: maxHeight == null ? null : BoxConstraints(maxHeight: maxHeight!),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(borderRadius),
        boxShadow: [
          BoxShadow(
            color: colors.first.withValues(alpha: 0.16 + pulse * 0.14),
            blurRadius: 28 + pulse * 10,
            spreadRadius: 1,
          ),
          BoxShadow(
            color: Colors.black.withValues(alpha: dark ? 0.55 : 0.12),
            blurRadius: dark ? 24 : 16,
            offset: const Offset(0, 12),
          ),
        ],
      ),
      child: NgmyHudTechFrame(
        colors: colors,
        pulse: pulse,
        scan: scan,
        orbit: orbit,
        borderRadius: borderRadius,
        child: child,
      ),
    );
  }
}

/// Soft animated section card for content blocks inside toolkit tools.
class NgmyToolkitAliveSection extends StatelessWidget {
  const NgmyToolkitAliveSection({
    super.key,
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.child,
    this.padding = const EdgeInsets.all(12),
    this.phase = 0,
    this.onTap,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final Widget child;
  final EdgeInsetsGeometry padding;
  final double phase;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return NgmyHudTechFrame(
      colors: colors,
      pulse: pulse,
      scan: scan,
      orbit: orbit,
      phase: phase,
      borderRadius: 16,
      padding: padding,
      onTap: onTap,
      child: child,
    );
  }
}

/// Full-page alive backdrop + optional top header strip.
class NgmyToolkitAlivePageChrome extends StatelessWidget {
  const NgmyToolkitAlivePageChrome({
    super.key,
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.child,
    this.header,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final Widget child;
  final Widget? header;

  @override
  Widget build(BuildContext context) {
    final dark = NgmyHudInk.isDark(context);
    final pageColors = dark
        ? [
            const Color(0xFF0B1220),
            Color.lerp(const Color(0xFF111827), colors.first.withValues(alpha: 0.22), pulse)!,
            Color.lerp(const Color(0xFF0B1020), colors.last.withValues(alpha: 0.18), 1 - pulse)!,
          ]
        : [
            const Color(0xFFF1F5F9),
            Color.lerp(Colors.white, colors.first.withValues(alpha: 0.12), pulse)!,
            Color.lerp(const Color(0xFFE2E8F0), colors.last.withValues(alpha: 0.10), 1 - pulse)!,
          ];
    return Stack(
      fit: StackFit.expand,
      children: [
        DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: pageColors,
            ),
          ),
        ),
        Positioned(
          top: -40,
          right: -30,
          child: IgnorePointer(
            child: Container(
              width: 160,
              height: 160,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    colors.first.withValues(alpha: (dark ? 0.22 : 0.18) + pulse * 0.12),
                    colors.first.withValues(alpha: 0),
                  ],
                ),
              ),
            ),
          ),
        ),
        Positioned(
          bottom: 80,
          left: -50,
          child: IgnorePointer(
            child: Container(
              width: 180,
              height: 180,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    colors.last.withValues(alpha: (dark ? 0.16 : 0.12) + (1 - pulse) * 0.1),
                    colors.last.withValues(alpha: 0),
                  ],
                ),
              ),
            ),
          ),
        ),
        Column(
          children: [
            if (header != null)
              NgmyHudTechFrame(
                colors: colors,
                pulse: pulse,
                scan: scan,
                orbit: orbit,
                borderRadius: 0,
                child: SafeArea(bottom: false, child: header!),
              ),
            Expanded(child: child),
          ],
        ),
      ],
    );
  }
}

/// Pulsing action chip / button shell for toolkit interiors.
class NgmyToolkitAliveButton extends StatelessWidget {
  const NgmyToolkitAliveButton({
    super.key,
    required this.colors,
    required this.pulse,
    required this.label,
    required this.onTap,
    this.icon,
    this.selected = true,
  });

  final List<Color> colors;
  final double pulse;
  final String label;
  final VoidCallback onTap;
  final IconData? icon;
  final bool selected;

  @override
  Widget build(BuildContext context) {
    final dark = NgmyHudInk.isDark(context);
    final idleFg = dark ? Colors.white.withValues(alpha: 0.55) : const Color(0xFF475569);
    final idleBg = dark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF1F5F9);
    final idleBorder = dark ? Colors.white.withValues(alpha: 0.12) : const Color(0xFFCBD5E1);
    // Selected stays on accent gradient — white label is always readable.
    final fg = selected ? Colors.white.withValues(alpha: 0.95) : idleFg;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 220),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            gradient: selected
                ? LinearGradient(colors: [
                    Color.lerp(colors.first, colors.last, pulse)!,
                    colors.last,
                  ])
                : null,
            color: selected ? null : idleBg,
            border: Border.all(
              color: selected ? colors.first.withValues(alpha: 0.7) : idleBorder,
            ),
            boxShadow: selected
                ? [BoxShadow(color: colors.first.withValues(alpha: 0.28 + pulse * 0.2), blurRadius: 12 + pulse * 6)]
                : null,
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              if (icon != null) ...[
                Icon(icon, size: 16, color: fg),
                const SizedBox(width: 6),
              ],
              Text(
                label,
                style: TextStyle(
                  color: selected ? Colors.white : idleFg,
                  fontWeight: FontWeight.w800,
                  fontSize: 12,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
