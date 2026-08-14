import 'package:flutter/material.dart';

/// Bottom-nav icon for the Tool Hub (frames) tab.
class NgmyToolHubNavIcon extends StatelessWidget {
  const NgmyToolHubNavIcon({super.key, this.dimmed = false, this.size = 30});

  final bool dimmed;
  final double size;

  static const _accent = Color(0xFF22C55E);
  static const _accent2 = Color(0xFF7C3AED);

  @override
  Widget build(BuildContext context) {
    if (dimmed) {
      final isDark = Theme.of(context).brightness == Brightness.dark;
      return Icon(
        Icons.view_quilt_rounded,
        size: size * 0.92,
        color: isDark ? Colors.white70 : const Color(0xFF0F172A),
      );
    }
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Positioned(
            left: 0,
            top: 0,
            child: Container(
              width: size * 0.62,
              height: size * 0.42,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(4),
                gradient: const LinearGradient(colors: [_accent, Color(0xFF16A34A)]),
                boxShadow: [BoxShadow(color: _accent.withValues(alpha: 0.35), blurRadius: 6, offset: const Offset(0, 2))],
              ),
            ),
          ),
          Positioned(
            right: 0,
            top: size * 0.06,
            child: Container(
              width: size * 0.58,
              height: size * 0.38,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(4),
                gradient: const LinearGradient(colors: [_accent2, Color(0xFF5B21B6)]),
                boxShadow: [BoxShadow(color: _accent2.withValues(alpha: 0.35), blurRadius: 6, offset: const Offset(0, 2))],
              ),
            ),
          ),
          Positioned(
            left: size * 0.08,
            bottom: 0,
            child: Container(
              width: size * 0.84,
              height: size * 0.38,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(4),
                gradient: const LinearGradient(colors: [Color(0xFF0EA5E9), Color(0xFF2563EB)]),
                border: Border.all(color: Colors.white.withValues(alpha: 0.55), width: 1),
              ),
              child: Icon(Icons.play_arrow_rounded, size: size * 0.28, color: Colors.white),
            ),
          ),
        ],
      ),
    );
  }
}
