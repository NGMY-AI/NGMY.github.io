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

/// Compact centered top pill — matches bottom nav bar style, text-width only.
class NgmyAppStudioTopBar extends StatelessWidget {
  const NgmyAppStudioTopBar({
    super.key,
    required this.onBack,
    required this.isDark,
  });

  final VoidCallback onBack;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final borderNeutral = isDark ? Colors.white : Colors.black;
    return SafeArea(
      bottom: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(14, 6, 14, 4),
        child: Center(
          child: ClipRRect(
            borderRadius: BorderRadius.circular(30),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: isDark
                        ? [
                            Colors.white.withValues(alpha: 0.1),
                            const Color(0xFF1E293B).withValues(alpha: 0.55),
                          ]
                        : [
                            Colors.white.withValues(alpha: 0.78),
                            Colors.white.withValues(alpha: 0.5),
                          ],
                  ),
                  border: Border.all(color: borderNeutral.withValues(alpha: 0.12)),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: isDark ? 0.22 : 0.06),
                      blurRadius: 14,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(4, 2, 10, 2),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        tooltip: 'Back to NGMY Hub',
                        onPressed: onBack,
                        visualDensity: VisualDensity.compact,
                        padding: EdgeInsets.zero,
                        constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
                        icon: Icon(
                          Icons.arrow_back_rounded,
                          size: 20,
                          color: isDark ? Colors.white : const Color(0xFF1E293B),
                        ),
                      ),
                      Icon(Icons.hub_rounded, size: 17, color: isDark ? const Color(0xFF818CF8) : const Color(0xFF6366F1)),
                      const SizedBox(width: 6),
                      Text(
                        'App Studio',
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          fontSize: 14,
                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
