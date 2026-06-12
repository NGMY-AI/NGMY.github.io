import 'dart:ui' show ImageFilter;

import 'package:flutter/material.dart';

/// Solid UI panels only. [BackdropFilter] blurs/smears entire screens on web & iOS PWA.
bool get ngmyPreferLightGraphics => true;

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
