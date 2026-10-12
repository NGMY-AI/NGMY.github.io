import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Widest that phone-designed screens get on a computer. Every screen that
/// uses [NgmyDesktopColumn] or [ngmyDesktopPanelWidth] shares this size, so
/// NGMY Hub, Help + Insurance, Store and the Creator toolkit tools all match.
const double kNgmyDesktopMaxWidth = 1700;

/// True on computers / big tablets (phones and small tablets: false).
bool ngmyIsDesktopWide(BuildContext context) => MediaQuery.sizeOf(context).width > 1100;

/// Width for a pop-up panel on a computer: as wide as the NGMY Hub column.
/// Returns [phoneWidth] unchanged on phones.
double ngmyDesktopPanelWidth(BuildContext context, double phoneWidth) {
  if (!ngmyIsDesktopWide(context)) return phoneWidth;
  final w = MediaQuery.sizeOf(context).width;
  return math.min(kNgmyDesktopMaxWidth, w - 80);
}

/// Keeps phone-designed screens a comfortable width on computers.
///
/// On a wide window the content sits in a centered column [maxWidth] wide, and
/// the content is told the screen is that wide (so cards sized from the screen
/// width shrink too). Phones and small tablets are left exactly as they are.
class NgmyDesktopColumn extends StatelessWidget {
  const NgmyDesktopColumn({super.key, required this.child, this.maxWidth = kNgmyDesktopMaxWidth, this.background});

  final Widget child;
  final double maxWidth;

  /// Colour beside the column. Defaults to the theme's page colour.
  final Color? background;

  static bool isWide(BuildContext context, {double maxWidth = kNgmyDesktopMaxWidth}) =>
      MediaQuery.sizeOf(context).width > maxWidth + 80;

  /// Wraps a pushed page so it opens the same width as NGMY Hub on computers.
  static Widget page(Widget child, {Color? background}) => NgmyDesktopColumn(background: background, child: child);

  @override
  Widget build(BuildContext context) {
    final mq = MediaQuery.of(context);
    if (mq.size.width <= maxWidth + 80) return child;
    return ColoredBox(
      color: background ?? Theme.of(context).scaffoldBackgroundColor,
      child: Center(
        child: SizedBox(
          width: maxWidth,
          child: MediaQuery(
            data: mq.copyWith(size: Size(maxWidth, mq.size.height)),
            child: child,
          ),
        ),
      ),
    );
  }
}
