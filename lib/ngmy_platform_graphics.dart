import 'dart:ui' show ImageFilter;

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

/// Frosted clip without GPU backdrop blur when [ngmyPreferLightGraphics] is true.
Widget ngmyClipBackdrop({
  required BorderRadius borderRadius,
  required Widget child,
  double sigma = 14,
}) {
  if (ngmyPreferLightGraphics) {
    return ClipRRect(borderRadius: borderRadius, child: child);
  }
  return ClipRRect(
    borderRadius: borderRadius,
    child: BackdropFilter(
      filter: ImageFilter.blur(sigmaX: sigma, sigmaY: sigma),
      child: child,
    ),
  );
}
