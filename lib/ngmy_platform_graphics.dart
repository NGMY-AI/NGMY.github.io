import 'dart:ui' show ImageFilter;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Solid UI panels only. [BackdropFilter] blurs/smears entire screens on web & iOS PWA.
bool get ngmyPreferLightGraphics => true;

/// Opaque surfaces — avoids washed-out, blurry glass stacking on web PWA.
bool get ngmyCrispUi => ngmyPreferLightGraphics;

Color ngmyCrispSurfaceColor(BuildContext context, {bool elevated = false}) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  if (!ngmyCrispUi) {
    return (isDark ? const Color(0xFF111827) : Colors.white).withValues(alpha: elevated ? 0.72 : 0.70);
  }
  if (isDark) return elevated ? const Color(0xFF1F2937) : const Color(0xFF1A1F2E);
  return elevated ? Colors.white : const Color(0xFFF8FAFC);
}

Color ngmyCrispBorderColor(BuildContext context) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  return isDark ? Colors.white.withValues(alpha: 0.14) : Colors.black.withValues(alpha: 0.08);
}

/// Call once from [main] — keeps CanvasKit/image scaling sharp on web PWA.
void ngmyInitCrispRendering() {
  if (!kIsWeb) return;
  PaintingBinding.instance.imageCache
    // Kept modest: iPhone Safari closes the page when the app holds too much picture memory.
    ..maximumSizeBytes = 64 << 20
    ..maximumSize = 300;
}

/// Locks OS text scaling so labels stay pixel-crisp (especially web/iOS PWA).
Widget ngmyCrispAppWrapper(BuildContext context, Widget child) {
  final mq = MediaQuery.of(context);
  return MediaQuery(
    data: mq.copyWith(
      textScaler: mq.textScaler.clamp(minScaleFactor: 1.0, maxScaleFactor: 1.0),
      boldText: false,
    ),
    child: child,
  );
}

/// Drop-in [MaterialApp.builder] so standalone guest links receive the same
/// sharp text metrics as the signed-in app.
Widget ngmyCrispMaterialAppBuilder(BuildContext context, Widget? child) {
  return ngmyCrispAppWrapper(
    context,
    child ?? const SizedBox.shrink(),
  );
}

/// Frosted clip without GPU backdrop blur when [ngmyPreferLightGraphics] is true.
Widget ngmyClipBackdrop({
  required BorderRadius borderRadius,
  required Widget child,
  double sigma = 14,
  /// For bars that float over scrolling content (page headers): blur is off on phones, so a
  /// see-through glass bar let the text scrolling underneath show through and the page looked
  /// hazy / blurry. Solid puts the page's own background under the glass so it reads clean.
  bool solid = false,
}) {
  if (ngmyPreferLightGraphics) {
    if (!solid) return ClipRRect(borderRadius: borderRadius, child: child);
    return ClipRRect(
      borderRadius: borderRadius,
      child: Builder(
        builder: (context) => ColoredBox(
          color: Theme.of(context).brightness == Brightness.dark ? const Color(0xFF15171C) : const Color(0xFFF8FAFC),
          child: child,
        ),
      ),
    );
  }
  return ClipRRect(
    borderRadius: borderRadius,
    child: BackdropFilter(
      filter: ImageFilter.blur(sigmaX: sigma, sigmaY: sigma),
      child: child,
    ),
  );
}

/// Stand-in for [BackdropFilter] on cards that animate or sit in long scrolling pages: draws
/// the child only. A live backdrop blur re-renders every frame on iPhone web — it made the
/// Civic Registry stutter while scrolling and, left running, crash.
class NgmyNoBackdrop extends StatelessWidget {
  const NgmyNoBackdrop({super.key, this.filter, required this.child});
  final ImageFilter? filter;
  final Widget child;

  @override
  Widget build(BuildContext context) => child;
}
