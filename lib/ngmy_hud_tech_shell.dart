import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_hub_form_ui.dart';
import 'ngmy_offline_close_button.dart';
import 'ngmy_offline_icons.dart';
import 'ngmy_platform_graphics.dart';

/// Ink / surface tokens for HUD chrome — dark mode unchanged, light mode high-contrast.
class NgmyHudInk {
  NgmyHudInk._();

  static bool isDark(BuildContext context) => Theme.of(context).brightness == Brightness.dark;

  /// Light mode, plain and calm: no moving scan lines, glowing rings or tinted fills.
  /// NGMY Advisors keep their own look ([NgmyHudKeepLook]).
  static bool calm(BuildContext context) => !isDark(context) && !NgmyHudKeepLook.of(context);

  static Color title(BuildContext context) =>
      isDark(context) ? Colors.white : const Color(0xFF0F172A);

  static Color subtitle(BuildContext context, {double pulse = 0}) => isDark(context)
      ? Colors.white.withValues(alpha: 0.82 + pulse * 0.06)
      : const Color(0xFF1E293B);

  static Color muted(BuildContext context) =>
      isDark(context) ? Colors.white54 : const Color(0xFF334155);

  static Color faint(BuildContext context) =>
      isDark(context) ? Colors.white38 : const Color(0xFF475569);

  static Color icon(BuildContext context) =>
      isDark(context) ? Colors.white.withValues(alpha: 0.95) : const Color(0xFF0F172A);

  static Color panel(BuildContext context) => isDark(context)
      ? Colors.white.withValues(alpha: 0.06)
      : (calm(context) ? const Color(0xFFF7F8FA) : const Color(0xFFE2E8F0));

  static Color panelBorder(BuildContext context) => isDark(context)
      ? Colors.white.withValues(alpha: 0.14)
      : (calm(context) ? NgmyCalmLight.border : const Color(0xFF94A3B8));
}

/// Wrap a page that keeps its futuristic look in light mode too (NGMY Advisors).
class NgmyHudKeepLook extends InheritedWidget {
  const NgmyHudKeepLook({super.key, required super.child});

  static bool of(BuildContext context) =>
      context.getInheritedWidgetOfExactType<NgmyHudKeepLook>() != null;

  @override
  bool updateShouldNotify(NgmyHudKeepLook oldWidget) => false;
}

/// The calm light look (the design the owner chose from two reference pictures): thick pure white
/// cards on a very light grey page, lifted by a wide soft shadow all round, with no hard edge line.
/// The shadow has no negative spread (that drew a dark ledge with corners under each card), and every
/// card clips what is inside it to its round corners.
class NgmyCalmLight {
  NgmyCalmLight._();

  static const Color page = Colors.white; // pure white (the owner: light should be actual light, not greyish)
  static const Color card = Colors.white;
  static const Color border = Color(0xFFDDE1E7);
  static const double borderWidth = 1.2;
  static const Color ink = Color(0xFF0B1220);
  static const Color sub = Color(0xFF4B5563);

  /// ONE colour for every frame and icon tile in light mode (the owner does not want each frame in its own
  /// colour): NGMY purple. Frames get a thin purple edge, icon tiles are purple with a white icon.
  static const Color brand = Color(0xFF7C3AED);
  static const Color brandEdge = Color(0xFFC4B5FD);
  static const double brandEdgeWidth = 1.5;

  /// The two colours of the light look: a soft sky blue and a soft lavender. Tiles take them a whole row at a
  /// time (one row blue, the next row purple), never mixed tile by tile (the owner's choice).
  static const Color toneA = Color(0xFF38BDF8);
  static const Color toneB = Color(0xFFA78BFA);

  /// The colour for tile [index] in a grid of [columns]: whole rows alternate blue, purple, blue...
  static Color checkerTone(int index, {int columns = 2}) => (index ~/ columns).isEven ? toneA : toneB;

  /// A tile with colour: a light wash of [tone] (white words never needed), a thin edge of the same colour
  /// and a soft shadow of that colour.
  static BoxDecoration tintCardDecoration(Color tone, {double radius = 24}) {
    final p = framePalette(tone, strong: true);
    return BoxDecoration(
      borderRadius: BorderRadius.circular(radius < 22 ? 22 : radius),
      gradient: LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        // White at the top, a soft clear wash of the colour at the bottom.
        colors: [Color.lerp(Colors.white, tone, 0.06)!, Color.lerp(Colors.white, tone, 0.20)!, Color.lerp(Colors.white, tone, 0.30)!],
        stops: const [0, 0.55, 1],
      ),
      border: Border.all(color: p[0].withValues(alpha: 0.85), width: 1.5),
      boxShadow: [
        // A soft shadow of the same colour under the tile, so it sits on the page.
        BoxShadow(color: p[1].withValues(alpha: 0.26), blurRadius: 18, offset: const Offset(0, 8)),
        const BoxShadow(color: Color(0x0A0F172A), blurRadius: 3, offset: Offset(0, 1)),
      ],
    );
  }

  /// A wide soft shadow all round the card, a little deeper below.
  static const List<BoxShadow> shadow = [
    BoxShadow(color: Color(0x1C0F172A), blurRadius: 30, offset: Offset(0, 10)),
    BoxShadow(color: Color(0x0D0F172A), blurRadius: 4, offset: Offset(0, 1)),
  ];

  /// The accent made dark enough to read on white.
  static Color accentInk(Color c) {
    final h = HSLColor.fromColor(c);
    return h.withLightness(h.lightness.clamp(0.22, 0.42)).withSaturation(h.saturation.clamp(0.0, 0.75)).toColor();
  }

  /// A very light wash of the accent, for the icon tile behind an icon.
  static Color accentWash(Color c) => Color.lerp(Colors.white, c, 0.13)!;

  static BoxDecoration cardDecoration({double radius = 24}) => BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(radius < 22 ? 22 : radius),
        border: Border.all(color: brandEdge, width: brandEdgeWidth),
        boxShadow: shadow,
      );

  /// A card filled with its own colour (home frames): a rich gradient of the accent, white words.
  static BoxDecoration colourCardDecoration(Color accent, {double radius = 24}) {
    final hsl = HSLColor.fromColor(accent);
    final base = hsl.withLightness(hsl.lightness.clamp(0.38, 0.45)).withSaturation(hsl.saturation.clamp(0.60, 0.88)).toColor();
    final deep = hsl.withLightness((hsl.lightness.clamp(0.38, 0.45) - 0.11).clamp(0.22, 0.40)).withSaturation(hsl.saturation.clamp(0.60, 0.90)).toColor();
    return BoxDecoration(
      borderRadius: BorderRadius.circular(radius),
      gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [base, deep]),
      boxShadow: [
        BoxShadow(color: deep.withValues(alpha: 0.30), blurRadius: 26, offset: const Offset(0, 10)),
        const BoxShadow(color: Color(0x0D0F172A), blurRadius: 4, offset: Offset(0, 1)),
      ],
    );
  }

  /// The four colours of a colourful frame for [accent]: bright rim, rim end, inside top, inside bottom.
  static List<Color> framePalette(Color accent, {required bool strong}) {
    final hsl = HSLColor.fromColor(accent);
    Color at(double l, double s) => hsl.withLightness(l).withSaturation(s).toColor();
    final s = hsl.saturation.clamp(0.65, 0.92);
    final rimA = at(0.52, s);
    final rimB = at(0.44, s);
    if (strong) return [rimA, rimB, at(0.44, s), at(0.30, s)];
    return [rimA, rimB, Color.lerp(Colors.white, accent, 0.10)!, Color.lerp(Colors.white, accent, 0.24)!];
  }
}

/// The colourful frame (the owner's reference look): a thick bright rim, a gradient inside with soft
/// waves and glowing dots (still, nothing moves), round corners, and a soft coloured shadow under it.
/// [strong] fills the inside with rich colour (white words go on it); otherwise the inside is a light
/// wash of the colour so dark words stay easy to read.
class NgmyCalmColourFrame extends StatelessWidget {
  const NgmyCalmColourFrame({
    super.key,
    required this.accent,
    required this.child,
    this.strong = false,
    this.radius = 26,
    this.rim = 7,
    this.padding = EdgeInsets.zero,
    this.onTap,
  });

  final Color accent;
  final Widget child;
  final bool strong;
  final double radius;
  final double rim;
  final EdgeInsetsGeometry padding;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final p = NgmyCalmLight.framePalette(accent, strong: strong);
    final inner = radius - rim < 6 ? 6.0 : radius - rim;
    Widget frame = LayoutBuilder(
      builder: (context, constraints) {
        final fillH = constraints.hasBoundedHeight && constraints.maxHeight.isFinite;
        return Container(
          key: const Key('ngmy-calm-colour-frame'),
          width: double.infinity,
          height: fillH ? constraints.maxHeight : null,
          padding: EdgeInsets.all(rim),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(radius),
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [p[0], p[1]]),
            boxShadow: [
              BoxShadow(color: p[1].withValues(alpha: 0.30), blurRadius: 26, offset: const Offset(0, 10)),
              const BoxShadow(color: Color(0x0D0F172A), blurRadius: 4, offset: Offset(0, 1)),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(inner),
            child: CustomPaint(
              painter: _NgmyCalmWavesPainter(top: p[2], bottom: p[3], strong: strong),
              child: Padding(padding: padding, child: child),
            ),
          ),
        );
      },
    );
    if (onTap == null) return frame;
    return Material(
      color: Colors.transparent,
      child: InkWell(onTap: onTap, borderRadius: BorderRadius.circular(radius), child: frame),
    );
  }
}

class _NgmyCalmWavesPainter extends CustomPainter {
  _NgmyCalmWavesPainter({required this.top, required this.bottom, required this.strong});

  final Color top;
  final Color bottom;
  final bool strong;

  @override
  void paint(Canvas canvas, Size size) {
    final r = Offset.zero & size;
    canvas.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [top, bottom]).createShader(r));
    final w = size.width, h = size.height;
    final light = Colors.white.withValues(alpha: strong ? 0.13 : 0.45);
    // Two soft waves across the lower half.
    final wave1 = Path()
      ..moveTo(0, h * 0.55)
      ..cubicTo(w * 0.30, h * 0.30, w * 0.55, h * 0.85, w, h * 0.50)
      ..lineTo(w, h)
      ..lineTo(0, h)
      ..close();
    canvas.drawPath(wave1, Paint()..color = light);
    final wave2 = Path()
      ..moveTo(0, h * 0.80)
      ..cubicTo(w * 0.35, h * 0.62, w * 0.65, h * 1.02, w, h * 0.74)
      ..lineTo(w, h)
      ..lineTo(0, h)
      ..close();
    canvas.drawPath(wave2, Paint()..color = (strong ? Colors.black : bottom).withValues(alpha: strong ? 0.10 : 0.35));
    // A few soft glowing dots.
    for (final d in const [(0.18, 0.18, 0.06), (0.80, 0.22, 0.045), (0.62, 0.12, 0.03), (0.30, 0.70, 0.035)]) {
      final c = Offset(w * d.$1, h * d.$2);
      final rad = size.shortestSide * d.$3 * 2.2;
      canvas.drawCircle(
        c,
        rad,
        Paint()
          ..shader = RadialGradient(colors: [Colors.white.withValues(alpha: strong ? 0.40 : 0.70), Colors.white.withValues(alpha: 0)])
              .createShader(Rect.fromCircle(center: c, radius: rad)),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _NgmyCalmWavesPainter old) => old.top != top || old.bottom != bottom || old.strong != strong;
}

/// Tells icon tiles inside a coloured tile which of the two colours to wear.
class NgmyCalmToneScope extends InheritedWidget {
  const NgmyCalmToneScope({super.key, required this.tone, required super.child});

  final Color tone;

  static Color? of(BuildContext context) => context.getInheritedWidgetOfExactType<NgmyCalmToneScope>()?.tone;

  @override
  bool updateShouldNotify(NgmyCalmToneScope oldWidget) => oldWidget.tone != tone;
}

/// A rounded tile with the icon in the accent colour, used instead of the glowing orb in calm light.
class NgmyCalmIconTile extends StatelessWidget {
  const NgmyCalmIconTile({super.key, required this.accent, required this.size, this.icon, this.emoji});

  final Color accent;
  final double size;
  final IconData? icon;
  final String? emoji;

  @override
  Widget build(BuildContext context) {
    // Like a phone app icon: a rich colour tile, lighter at the top, with a white icon and a soft coloured shadow.
    final hsl = HSLColor.fromColor(accent);
    final base = hsl.withLightness(hsl.lightness.clamp(0.40, 0.50)).withSaturation(hsl.saturation.clamp(0.55, 0.85)).toColor();
    final top = Color.lerp(base, Colors.white, 0.22)!;
    final hasEmoji = emoji != null && emoji!.trim().isNotEmpty;
    return Container(
      key: const Key('ngmy-calm-icon'),
      width: size,
      height: size,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(size * 0.28),
        color: hasEmoji ? NgmyCalmLight.accentWash(accent) : null,
        gradient: hasEmoji
            ? null
            : LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [top, base]),
      ),
      alignment: Alignment.center,
      child: hasEmoji
          ? NgmyOfflineEmoji(emoji!, fontSize: size * 0.48)
          : (icon != null ? Icon(icon, color: Colors.white, size: size * 0.5) : null),
    );
  }
}

/// Shared pulse / scan / orbit clocks — same motion language as home tech frames.
class NgmyHudMotion extends StatefulWidget {
  const NgmyHudMotion({super.key, required this.builder});

  final Widget Function(BuildContext context, double pulse, double scan, double orbit) builder;

  @override
  State<NgmyHudMotion> createState() => _NgmyHudMotionState();
}

class _NgmyHudMotionState extends State<NgmyHudMotion> {
  // One light timer instead of three animation clocks. The clocks asked the screen for a new frame 60 times a second
  // (so the whole page was redrawn non-stop, even though the cards only changed ~11 times a second). The timer gives
  // the same pulse / scan / orbit values ~11 times a second, and nothing is redrawn in between.
  static const _pulseMs = 2200; // there and back (repeat with reverse)
  static const _scanMs = 3400;
  static const _orbitMs = 9000;
  static const _tickMs = 90;

  final Stopwatch _clock = Stopwatch();
  Timer? _timer;
  bool _scrolling = false;
  bool _calm = false;
  bool _tickerEnabled = true;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _calm = NgmyHudInk.calm(context);
    // Like the animation clocks before: still while the page is hidden under another screen.
    _tickerEnabled = TickerMode.valuesOf(context).enabled;
    _syncClock();
  }

  @override
  void dispose() {
    _timer?.cancel();
    _timer = null;
    super.dispose();
  }

  bool get _shouldMove => !_scrolling && !_calm && _tickerEnabled;

  void _syncClock() {
    if (_shouldMove) {
      if (!_clock.isRunning) _clock.start();
      _timer ??= Timer.periodic(const Duration(milliseconds: _tickMs), (_) {
        if (!mounted || !_shouldMove) return;
        setState(() {});
      });
    } else {
      _clock.stop();
      _timer?.cancel();
      _timer = null;
    }
  }

  void _setScrolling(bool v) {
    if (_scrolling == v) return;
    _scrolling = v;
    _syncClock();
  }

  @override
  Widget build(BuildContext context) {
    final calm = NgmyHudInk.calm(context);
    if (calm != _calm) {
      _calm = calm;
      _syncClock();
    }
    if (_calm) {
      return widget.builder(context, 0, 0, 0);
    }
    final ms = _clock.elapsedMilliseconds;
    final pulsePhase = (ms % (_pulseMs * 2)) / _pulseMs; // 0..2
    final pulseRaw = pulsePhase <= 1 ? pulsePhase : 2 - pulsePhase;
    final pulse = Curves.easeInOut.transform(pulseRaw.clamp(0.0, 1.0));
    final scan = (ms % _scanMs) / _scanMs;
    final orbit = (ms % _orbitMs) / _orbitMs;
    return NotificationListener<ScrollNotification>(
      onNotification: (n) {
        if (n is ScrollStartNotification) _setScrolling(true);
        if (n is ScrollEndNotification) _setScrolling(false);
        return false;
      },
      child: widget.builder(context, pulse, scan, orbit),
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
    this.calmTone,
    this.fitContent = false,
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
  /// Light mode: give the tile colour (one of [NgmyCalmLight.toneA] / [NgmyCalmLight.toneB]). Without it the tile is white.
  final Color? calmTone;
  /// True: the frame is only as tall as what is inside (no empty space at the bottom), up to the room it has.
  final bool fitContent;

  @override
  Widget build(BuildContext context) {
    if (NgmyHudInk.calm(context)) {
      final card = LayoutBuilder(
        builder: (context, constraints) {
          final fillH = !fitContent && constraints.hasBoundedHeight && constraints.maxHeight.isFinite;
          return Container(
            key: const Key('ngmy-calm-card'),
            width: double.infinity,
            height: fillH ? constraints.maxHeight : null,
            padding: padding,
            decoration: calmTone != null
                ? NgmyCalmLight.tintCardDecoration(calmTone!, radius: borderRadius)
                : NgmyCalmLight.cardDecoration(radius: borderRadius),
            // Whatever is inside keeps to the round corners (no square corners at the bottom).
            clipBehavior: Clip.antiAlias,
            // Its own drawing surface, so buttons drawn with Ink inside show on top of the white card (not hidden behind it).
            child: Material(
              type: MaterialType.transparency,
              child: calmTone != null ? NgmyCalmToneScope(tone: calmTone!, child: child) : child,
            ),
          );
        },
      );
      if (onTap == null) return card;
      return Material(
        color: Colors.transparent,
        child: InkWell(onTap: onTap, borderRadius: BorderRadius.circular(borderRadius), child: card),
      );
    }
    final dark = NgmyHudInk.isDark(context);
    final glow = 0.35 + pulse * 0.35;
    final scanV = (scan + phase) % 1.0;
    final orbitV = (orbit + phase * 0.7) % 1.0;
    // Opaque fills only — translucent + BackdropFilter made Advisors look milky/blurry.
    // Light mode: keep strong accent color so labels/icons stay readable (no washed-out pastels).
    final fill = dark
        ? [
            const Color(0xFF0B1220),
            Color.lerp(const Color(0xFF0B1220), colors.first, 0.28 + pulse * 0.08)!,
            Color.lerp(const Color(0xFF020617), colors.last, 0.18)!,
            const Color(0xFF020617),
          ]
        : [
            Color.lerp(Colors.white, colors.first, 0.22 + pulse * 0.06)!,
            Color.lerp(const Color(0xFFF8FAFC), colors.first, 0.38)!,
            Color.lerp(const Color(0xFFF1F5F9), colors.last, 0.32)!,
            Color.lerp(Colors.white, colors.last, 0.18)!,
          ];
    final borderColor = dark
        ? colors.first.withValues(alpha: 0.22 + pulse * 0.12)
        : colors.first.withValues(alpha: 0.72 + pulse * 0.18);

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
            final fillH = !fitContent && constraints.hasBoundedHeight && constraints.maxHeight.isFinite;
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
                          color: colors.first.withValues(alpha: 0.22 + pulse * 0.10),
                          blurRadius: 18,
                          offset: const Offset(0, 6),
                        ),
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.08),
                          blurRadius: 10,
                          offset: const Offset(0, 3),
                        ),
                      ],
              ),
              child: child,
            );
            return content;
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
    this.emoji,
  });

  final List<Color> colors;
  final double pulse;
  final double orbit;
  final double size;
  final IconData? icon;
  final String? emoji;

  @override
  Widget build(BuildContext context) {
    if (NgmyHudInk.calm(context)) {
      // One colour for every icon tile (not each tile in its own colour).
      return NgmyCalmIconTile(accent: NgmyCalmToneScope.of(context) ?? NgmyCalmLight.brand, size: size, icon: icon, emoji: emoji);
    }
    final dark = NgmyHudInk.isDark(context);
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        alignment: Alignment.center,
        children: [
          CustomPaint(
            size: Size.square(size),
            painter: NgmyHudMiniOrbPainter(
              colors: colors,
              pulse: pulse,
              orbit: orbit,
              lightMode: !dark,
            ),
          ),
          if (emoji != null && emoji!.trim().isNotEmpty)
            NgmyOfflineEmoji(emoji!, fontSize: size * 0.42)
          else if (icon != null)
            Icon(
              icon,
              color: dark ? Colors.white.withValues(alpha: 0.95) : const Color(0xFF0F172A),
              size: size * 0.42,
            ),
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
        ? colors.first.withValues(alpha: 0.92)
        : Colors.white.withValues(alpha: 0.35);
    final border = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = lightMode ? 2.2 : 1.4
      ..shader = LinearGradient(
        colors: [
          colors.first.withValues(alpha: lightMode ? 0.85 : 0.35 + glow * 0.45),
          midStroke,
          colors.last.withValues(alpha: lightMode ? 0.88 : 0.45 + glow * 0.35),
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
    this.lightMode = false,
  });

  final List<Color> colors;
  final double pulse;
  final double orbit;
  final bool lightMode;

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
          ..strokeWidth = lightMode ? 1.4 : 1
          ..color = colors.first.withValues(alpha: lightMode ? 0.28 * i : 0.12 * i),
      );
    }
    canvas.drawCircle(
      c,
      radius,
      Paint()
        ..shader = RadialGradient(
          colors: lightMode
              ? [
                  Color.lerp(Colors.white, colors.first, 0.35)!,
                  colors.first,
                  colors.last,
                ]
              : [
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
        ..strokeWidth = lightMode ? 2.4 : 2
        ..color = lightMode
            ? colors.last.withValues(alpha: 0.85 + pulse * 0.15)
            : Colors.white.withValues(alpha: 0.55 + pulse * 0.35),
    );
    for (var i = 0; i < 4; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 2);
      final p = Offset(c.dx + math.cos(a) * (radius + 8), c.dy + math.sin(a) * (radius + 8));
      canvas.drawCircle(p, 2.0, Paint()..color = colors[i % colors.length]);
      canvas.drawLine(c, p, Paint()..color = colors.first.withValues(alpha: lightMode ? 0.55 : 0.35)..strokeWidth = 1);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyHudMiniOrbPainter old) =>
      old.pulse != pulse || old.orbit != orbit || old.lightMode != lightMode;
}

/// Frosted glass pill — matches home bottom-nav frame (transparent + curved ends).
class NgmyToolkitGlassPillFrame extends StatelessWidget {
  const NgmyToolkitGlassPillFrame({
    super.key,
    required this.child,
    this.accent = const Color(0xFF67E8F9),
    this.borderRadius = 30,
    this.padding = EdgeInsets.zero,
    this.bare = false,
  });

  final Widget child;
  final Color accent;
  final double borderRadius;
  final EdgeInsetsGeometry padding;
  /// Border + soft sheen only — no solid fill so content shows through.
  final bool bare;

  @override
  Widget build(BuildContext context) {
    if (NgmyHudInk.calm(context)) {
      return Container(
        key: const Key('ngmy-calm-pill'),
        padding: padding,
        decoration: bare
            ? BoxDecoration(
                borderRadius: BorderRadius.circular(borderRadius),
                border: Border.all(color: NgmyCalmLight.border, width: NgmyCalmLight.borderWidth),
              )
            : NgmyCalmLight.cardDecoration(radius: borderRadius),
        child: Material(type: MaterialType.transparency, child: child),
      );
    }
    final dark = NgmyHudInk.isDark(context);
    final fill = bare
        ? (dark
            ? [
                Colors.white.withValues(alpha: 0.05),
                Colors.white.withValues(alpha: 0.02),
                Colors.transparent,
              ]
            : [
                Colors.white.withValues(alpha: 0.10),
                Colors.white.withValues(alpha: 0.04),
                Colors.transparent,
              ])
        : (dark
            ? [
                const Color(0xFF1E293B),
                const Color(0xFF0F172A),
                const Color(0xFF111827),
              ]
            : [
                Colors.white,
                const Color(0xFFF8FAFC),
                const Color(0xFFE0F2FE),
              ]);
    return DecoratedBox(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(borderRadius),
        boxShadow: bare
            ? [
                BoxShadow(
                  color: accent.withValues(alpha: dark ? 0.12 : 0.10),
                  blurRadius: 12,
                  offset: const Offset(0, 3),
                ),
              ]
            : [
                BoxShadow(
                  color: accent.withValues(alpha: dark ? 0.18 : 0.14),
                  blurRadius: 18,
                  offset: const Offset(0, 4),
                ),
                BoxShadow(
                  color: Colors.black.withValues(alpha: dark ? 0.22 : 0.08),
                  blurRadius: 14,
                  offset: const Offset(0, 6),
                ),
              ],
      ),
      child: ngmyClipBackdrop(
        borderRadius: BorderRadius.circular(borderRadius),
        sigma: bare ? 10 : 22,
        child: DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(borderRadius),
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: fill,
              ),
              border: Border.all(
                color: accent.withValues(alpha: dark ? 0.48 : 0.36),
                width: 1.35,
              ),
            ),
            child: Stack(
              children: [
                if (!bare)
                  Positioned(
                    left: 12,
                    right: 12,
                    top: 0,
                    height: 16,
                    child: IgnorePointer(
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.vertical(top: Radius.circular(borderRadius - 2)),
                          gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [
                              Colors.white.withValues(alpha: dark ? 0.20 : 0.48),
                              Colors.white.withValues(alpha: 0),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                Padding(padding: padding, child: child),
              ],
            ),
          ),
      ),
    );
  }
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
    this.emoji,
    this.onClose,
    this.onIconTap,
    this.trailing,
    this.dense = false,
    this.framed = false,
  });

  /// The name in a frame in the middle (like the Construction Lab and Core Protocol) instead of at the side.
  final bool framed;
  final String title;
  final String? subtitle;
  final List<Color> colors;
  final double pulse;
  final double orbit;
  final IconData? icon;
  final String? emoji;
  final VoidCallback? onClose;
  final VoidCallback? onIconTap;
  final Widget? trailing;
  final bool dense;

  @override
  Widget build(BuildContext context) {
    final titleColor = NgmyHudInk.title(context);
    final subColor = NgmyHudInk.subtitle(context, pulse: pulse);
    return Padding(
      padding: EdgeInsets.fromLTRB(dense ? 12 : 14, dense ? 8 : 10, 6, dense ? 8 : 10),
      child: Row(
        children: [
          Builder(
            builder: (context) {
              final orb = NgmyHudMiniOrb(
                colors: colors,
                pulse: pulse,
                orbit: orbit,
                size: dense ? 40 : 44,
                icon: icon,
                emoji: emoji,
              );
              if (onIconTap == null) return orb;
              return GestureDetector(
                onTap: onIconTap,
                behavior: HitTestBehavior.opaque,
                child: orb,
              );
            },
          ),
          const SizedBox(width: 12),
          if (framed)
            Expanded(child: NgmyFramedTitle(title: title, subtitle: subtitle ?? '', accent: colors.first))
          else
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: titleColor,
                    fontWeight: FontWeight.w900,
                    fontSize: dense ? 16 : 17,
                    letterSpacing: 0.3,
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
            NgmyOfflineCloseButton(
              onPressed: onClose!,
              color: NgmyHudInk.muted(context),
              size: 40,
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
    this.fitContent = false,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final Widget child;
  final double? width;
  final double? maxHeight;
  final double borderRadius;
  /// True: the panel is only as tall as what is inside, up to [maxHeight].
  final bool fitContent;

  @override
  Widget build(BuildContext context) {
    final dark = NgmyHudInk.isDark(context);
    if (NgmyHudInk.calm(context)) {
      return Container(
        width: width,
        constraints: maxHeight == null ? null : BoxConstraints(maxHeight: maxHeight!),
        decoration: NgmyCalmLight.cardDecoration(radius: borderRadius),
        clipBehavior: Clip.antiAlias,
        child: Material(type: MaterialType.transparency, child: child),
      );
    }
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
        fitContent: fitContent,
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
    this.overlayHeader = false,
    this.headerBare = false,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final Widget child;
  final Widget? header;
  /// Float the header over content so menus scroll up behind it.
  final bool overlayHeader;
  /// Header frame without opaque fill.
  final bool headerBare;

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
    final topInset = MediaQuery.paddingOf(context).top;
    final headerBlock = header == null
        ? null
        : Padding(
            padding: EdgeInsets.fromLTRB(12, overlayHeader ? topInset + 8 : 8, 12, 6),
            child: NgmyToolkitGlassPillFrame(
              accent: Color.lerp(colors.first, const Color(0xFF67E8F9), 0.35)!,
              borderRadius: 30,
              bare: headerBare,
              child: header!,
            ),
          );

    final calm = NgmyHudInk.calm(context);
    return Stack(
      fit: StackFit.expand,
      children: [
        if (calm)
          const ColoredBox(color: NgmyCalmLight.page)
        else
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: pageColors,
              ),
            ),
          ),
        if (!calm)
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
        if (!calm)
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
        if (overlayHeader) ...[
          Positioned.fill(
            child: MediaQuery.removePadding(
              context: context,
              removeTop: true,
              child: child,
            ),
          ),
          if (headerBlock != null)
            Positioned(
              top: 0,
              left: 0,
              right: 0,
              child: headerBlock,
            ),
        ] else
          Column(
            children: [
              if (headerBlock != null) SafeArea(bottom: false, child: headerBlock),
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
    final calm = NgmyHudInk.calm(context);
    final calmFill = NgmyCalmLight.accentInk(colors.first);
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
            gradient: selected && !calm
                ? LinearGradient(colors: [
                    Color.lerp(colors.first, colors.last, pulse)!,
                    colors.last,
                  ])
                : null,
            color: calm ? (selected ? calmFill : Colors.white) : (selected ? null : idleBg),
            border: Border.all(
              color: calm ? (selected ? calmFill : NgmyCalmLight.border) : (selected ? colors.first.withValues(alpha: 0.7) : idleBorder),
            ),
            boxShadow: selected && !calm
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
