import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_nav.dart';
import 'ngmy_overlay_guard.dart';
import 'ngmy_swahili_school.dart';

bool _swahiliReminderOpen = false;

/// Show pop-ups for Kiswahili words the user marked to review on every app open.
Future<void> ngmyCheckSwahiliWordRemindersNow({String? userEmail}) async {
  if (_swahiliReminderOpen) return;
  if (!ngmyShouldAllowGlobalInterrupt()) return;

  final progress = await loadSwahiliProgress(userEmail);
  if (progress.wordReminders.isEmpty) return;

  final ctx = ngmyRootNavigatorKey.currentContext;
  if (ctx == null || !ctx.mounted) return;

  for (final item in progress.wordReminders) {
    if (!ctx.mounted) break;
    await showNgmySwahiliWordReminderPopup(ctx, item: item);
  }
}

Future<void> showNgmySwahiliWordReminderPopup(
  BuildContext context, {
  required SwahiliWordReminder item,
}) async {
  if (_swahiliReminderOpen) return;
  _swahiliReminderOpen = true;
  try {
    await showGeneralDialog<void>(
      context: context,
      useRootNavigator: true,
      barrierDismissible: true,
      barrierColor: Colors.black.withValues(alpha: 0.72),
      transitionDuration: const Duration(milliseconds: 260),
      pageBuilder: (ctx, _, __) => _SwahiliWordReminderDialog(item: item),
      transitionBuilder: (ctx, anim, _, child) {
        return FadeTransition(
          opacity: anim,
          child: ScaleTransition(
            scale: Tween<double>(begin: 0.94, end: 1).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)),
            child: child,
          ),
        );
      },
    );
  } finally {
    _swahiliReminderOpen = false;
  }
}

class _SwahiliWordReminderDialog extends StatelessWidget {
  const _SwahiliWordReminderDialog({required this.item});

  final SwahiliWordReminder item;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final card = isDark ? const Color(0xFF1A2030) : Colors.white;

    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 22),
        child: Material(
          color: card,
          borderRadius: BorderRadius.circular(22),
          child: Container(
            width: double.infinity,
            constraints: const BoxConstraints(maxWidth: 400),
            padding: const EdgeInsets.fromLTRB(22, 20, 22, 16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: const Color(0xFF4AAF6E).withValues(alpha: 0.45), width: 2),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      width: 40,
                      height: 40,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(color: const Color(0xFF4AAF6E), width: 2),
                        color: const Color(0xFF4AAF6E).withValues(alpha: 0.12),
                      ),
                      child: ClipOval(
                        child: Image.asset(
                          'assets/images/ngmy_logo.png',
                          fit: BoxFit.cover,
                          errorBuilder: (_, __, ___) => const Icon(Icons.school_rounded, color: Color(0xFF2D7A4A), size: 20),
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        'Kiswahili School / Shule',
                        style: TextStyle(
                          fontWeight: FontWeight.w800,
                          fontSize: 12,
                          color: isDark ? Colors.white70 : const Color(0xFF64748B),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Text(
                  item.swahili,
                  style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.w900,
                    color: isDark ? Colors.white : const Color(0xFF1E3A5F),
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  item.english,
                  style: TextStyle(
                    fontSize: 17,
                    fontWeight: FontWeight.w700,
                    color: isDark ? Colors.white70 : const Color(0xFF475569),
                  ),
                ),
                if (item.pronunciation.isNotEmpty) ...[
                  const SizedBox(height: 6),
                  Text(
                    'Tamkwa / Say: ${item.pronunciation}',
                    style: TextStyle(
                      fontSize: 13,
                      fontStyle: FontStyle.italic,
                      color: isDark ? Colors.white54 : const Color(0xFF94A3B8),
                    ),
                  ),
                ],
                const SizedBox(height: 18),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton(
                    onPressed: () => Navigator.of(context, rootNavigator: true).pop(),
                    style: FilledButton.styleFrom(
                      backgroundColor: const Color(0xFF4AAF6E),
                      minimumSize: const Size(double.infinity, 46),
                    ),
                    child: const Text('Nimeelewa / Got it', style: TextStyle(fontWeight: FontWeight.w800)),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
