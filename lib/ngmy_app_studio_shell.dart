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

/// Solid content frame — no BackdropFilter (avoids whole-app blur on web/phone).
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
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 0, 12, 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        color: isDark ? const Color(0xFF111827) : Colors.white,
        border: Border.all(color: (isDark ? Colors.white : Colors.black).withValues(alpha: 0.08)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: isDark ? 0.2 : 0.05),
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      clipBehavior: Clip.antiAlias,
      child: child,
    );
  }
}

/// Compact centered top pill with back to NGMY Hub.
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
    return SafeArea(
      bottom: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(14, 6, 14, 4),
        child: Center(
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              color: isDark ? const Color(0xFF1E293B) : Colors.white,
              border: Border.all(color: (isDark ? Colors.white : Colors.black).withValues(alpha: 0.1)),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: isDark ? 0.18 : 0.06),
                  blurRadius: 10,
                  offset: const Offset(0, 3),
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
    );
  }
}
