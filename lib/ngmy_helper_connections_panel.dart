import 'package:flutter/material.dart';

import 'ngmy_helper_permissions.dart';

/// Collapsible status panel — top of Helper chat. No action buttons; user commands the AI.
class NgmyHelperConnectionsPanel extends StatelessWidget {
  final bool isDark;
  final NgmyHelperPermissions permissions;
  final int contactCount;
  final int callMemoryCount;
  final int calendarCount;
  final bool isAdmin;
  final bool kbMode;
  final VoidCallback? onToggleKbMode;

  const NgmyHelperConnectionsPanel({
    super.key,
    required this.isDark,
    required this.permissions,
    required this.contactCount,
    required this.callMemoryCount,
    required this.calendarCount,
    this.isAdmin = false,
    this.kbMode = false,
    this.onToggleKbMode,
  });

  @override
  Widget build(BuildContext context) {
    final bg = isDark ? const Color(0xFF151C28) : Colors.white;
    final border = isDark ? Colors.white12 : const Color(0xFFE2E8F0);
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return AnimatedSize(
      duration: const Duration(milliseconds: 220),
      curve: Curves.easeOutCubic,
      child: Container(
        width: double.infinity,
        margin: const EdgeInsets.fromLTRB(14, 0, 14, 8),
        padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
        decoration: BoxDecoration(
          color: bg,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: border),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.2 : 0.06), blurRadius: 12, offset: const Offset(0, 4))],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Icon(Icons.hub_rounded, size: 18, color: isDark ? const Color(0xFF4ADE80) : const Color(0xFF00B25A)),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    'Phone connections',
                    style: TextStyle(color: fg, fontWeight: FontWeight.w800, fontSize: 13),
                  ),
                ),
                if (isAdmin && onToggleKbMode != null)
                  TextButton(
                    onPressed: onToggleKbMode,
                    style: TextButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      minimumSize: Size.zero,
                      tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                    ),
                    child: Text(kbMode ? 'Switch to AI' : 'Help topics', style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700)),
                  ),
              ],
            ),
            const SizedBox(height: 8),
            _row('Contacts', permissions.contacts, contactCount > 0 ? '$contactCount linked' : 'ready when allowed', fg, muted),
            _row('Calendar', permissions.calendar, calendarCount > 0 ? '$calendarCount events' : 'ready when allowed', fg, muted),
            _row('Calls & voicemail', permissions.calls, callMemoryCount > 0 ? '$callMemoryCount remembered' : 'ready when allowed', fg, muted),
            const SizedBox(height: 8),
            Text(
              permissions.allGrantedOnce
                  ? 'Connected on this phone. Just tell NGMY what you need — no buttons required.'
                  : 'Say "allow access" once in chat to connect everything permanently on this device.',
              style: TextStyle(color: muted, fontSize: 11, height: 1.35),
            ),
          ],
        ),
      ),
    );
  }

  Widget _row(String label, bool on, String detail, Color fg, Color muted) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Row(
        children: [
          Icon(on ? Icons.check_circle_rounded : Icons.radio_button_unchecked_rounded, size: 16, color: on ? const Color(0xFF22C55E) : muted),
          const SizedBox(width: 8),
          Expanded(
            child: Text(label, style: TextStyle(color: fg, fontSize: 12, fontWeight: FontWeight.w600)),
          ),
          Text(detail, style: TextStyle(color: muted, fontSize: 11)),
        ],
      ),
    );
  }
}
