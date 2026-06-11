import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

import 'ngmy_bottom_nav_frame.dart';

/// Bottom navigation for App Studio — matches NGMY main app frosted pill bar.
class NgmyAppStudioBottomNav extends StatelessWidget {
  const NgmyAppStudioBottomNav({
    super.key,
    required this.index,
    required this.onChanged,
    required this.isDark,
  });

  final int index;
  final ValueChanged<int> onChanged;
  final bool isDark;

  static const _labels = ['My Apps', 'Create', 'Templates', 'Gallery', 'AI'];
  static const _icons = [
    Icons.folder_special_rounded,
    Icons.add_circle_outline_rounded,
    Icons.grid_view_rounded,
    Icons.public_rounded,
    Icons.smart_toy_rounded,
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(14, 0, 14, 10),
      child: NgmySculptedBottomNavFrame(
        child: Row(
          children: List.generate(_labels.length, (i) {
            final selected = i == index;
            final accent = switch (i) {
              0 => const Color(0xFF6366F1),
              1 => const Color(0xFF10B981),
              2 => const Color(0xFF8B5CF6),
              3 => const Color(0xFF0EA5E9),
              _ => const Color(0xFFF59E0B),
            };
            return Expanded(
              child: InkWell(
                onTap: () => onChanged(i),
                borderRadius: BorderRadius.circular(22),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 220),
                  padding: const EdgeInsets.symmetric(vertical: 8),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(22),
                    color: selected ? accent.withValues(alpha: isDark ? 0.28 : 0.14) : Colors.transparent,
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(_icons[i], size: selected ? 24 : 22, color: selected ? accent : (isDark ? Colors.white60 : Colors.black54)),
                      const SizedBox(height: 2),
                      Text(
                        _labels[i],
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          fontSize: 9,
                          fontWeight: selected ? FontWeight.w800 : FontWeight.w600,
                          color: selected ? accent : (isDark ? Colors.white54 : Colors.black45),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          }),
        ),
      ),
    );
  }
}

/// Frosted content frame for studio tabs.
class NgmyAppStudioContentFrame extends StatelessWidget {
  const NgmyAppStudioContentFrame({
    super.key,
    required this.child,
    required this.isDark,
  });

  final Widget child;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(22),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
        child: Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: isDark
                  ? [
                      Colors.white.withValues(alpha: 0.06),
                      const Color(0xFF1E293B).withValues(alpha: 0.55),
                    ]
                  : [
                      Colors.white.withValues(alpha: 0.72),
                      Colors.white.withValues(alpha: 0.42),
                    ],
            ),
            border: Border.all(color: (isDark ? Colors.white : Colors.black).withValues(alpha: 0.1)),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: isDark ? 0.25 : 0.06),
                blurRadius: 18,
                offset: const Offset(0, 6),
              ),
            ],
          ),
          child: child,
        ),
      ),
    );
  }
}

/// Animated robotic header shimmer for App Studio.
class NgmyAppStudioHeader extends StatelessWidget {
  const NgmyAppStudioHeader({super.key, required this.animation});

  final Animation<double> animation;

  @override
  Widget build(BuildContext context) {
    final pulse = (math.sin(animation.value * 2 * math.pi) + 1) / 2;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(18, 52, 18, 14),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Color.lerp(const Color(0xFF0F172A), const Color(0xFF312E81), pulse)!,
            Color.lerp(const Color(0xFF312E81), const Color(0xFF7C3AED), pulse * 0.6)!,
          ],
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF7C3AED).withValues(alpha: 0.2 + pulse * 0.15),
            blurRadius: 24,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white.withValues(alpha: 0.35 + pulse * 0.2)),
              boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.25 + pulse * 0.2), blurRadius: 16)],
            ),
            child: const Icon(Icons.hub_rounded, color: Colors.white, size: 22),
          ),
          const SizedBox(width: 12),
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('NGMY App Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                Text('Build · AI · Cloud sync', style: TextStyle(color: Colors.white70, fontSize: 11)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
