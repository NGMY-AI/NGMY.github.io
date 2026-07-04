import 'package:flutter/material.dart';

const Color kSwahiliLessonBgLight = Color(0xFFFAF7F2);
const Color kSwahiliLessonBgDark = Color(0xFF0F1419);
const Color kSwahiliPathBg = Color(0xFF3D9A5F);
const Color kSwahiliSchoolBgLight = Color(0xFFF5F7FA);
const Color kSwahiliSchoolBgDark = Color(0xFF0F1419);

Color swahiliLessonBackground(BuildContext context) =>
    Theme.of(context).brightness == Brightness.dark ? kSwahiliLessonBgDark : kSwahiliLessonBgLight;

/// Opaque route with zero open animation — prevents white flash on web/PWA.
Route<T> ngmySwahiliInstantRoute<T extends Object?>(
  BuildContext context,
  Widget child, {
  Color? background,
}) {
  final bg = background ?? swahiliLessonBackground(context);
  return PageRouteBuilder<T>(
    opaque: true,
    barrierColor: bg,
    transitionDuration: Duration.zero,
    reverseTransitionDuration: const Duration(milliseconds: 160),
    pageBuilder: (ctx, _, __) => _SwahiliRouteShell(background: bg, child: child),
    transitionsBuilder: (_, animation, __, child) {
      if (animation.value >= 1.0) return child;
      return FadeTransition(opacity: animation, child: child);
    },
  );
}

/// Wraps pushed pages so the first painted frame is never default white.
class _SwahiliRouteShell extends StatelessWidget {
  const _SwahiliRouteShell({required this.background, required this.child});

  final Color background;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return ColoredBox(
      color: background,
      child: Theme(
        data: Theme.of(context).copyWith(
          scaffoldBackgroundColor: background,
          canvasColor: background,
          dialogBackgroundColor: background,
        ),
        child: child,
      ),
    );
  }
}
