import 'package:flutter/material.dart';

/// Keeps phone-designed screens a comfortable width on computers.
///
/// On a wide window the content sits in a centered column [maxWidth] wide, and
/// the content is told the screen is that wide (so cards sized from the screen
/// width shrink too). Phones and small tablets are left exactly as they are.
class NgmyDesktopColumn extends StatelessWidget {
  const NgmyDesktopColumn({super.key, required this.child, this.maxWidth = 680, this.background});

  final Widget child;
  final double maxWidth;

  /// Colour beside the column. Defaults to the theme's page colour.
  final Color? background;

  static bool isWide(BuildContext context, {double maxWidth = 680}) =>
      MediaQuery.sizeOf(context).width > maxWidth + 80;

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
