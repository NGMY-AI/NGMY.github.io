import 'package:flutter/material.dart';

import 'ngmy_business_card_studio.dart';
import 'ngmy_item_reminder.dart';
import 'ngmy_item_reminder_storage.dart';

/// Scroll padding so list content can pass behind the floating bottom nav.
double ngmyMarketHubBottomPadding(BuildContext context) {
  return 110 + MediaQuery.paddingOf(context).bottom;
}

/// Hub launcher — tap a frame to open a tool (nothing opens inline).
class NgmyMarketHubScreen extends StatefulWidget {
  const NgmyMarketHubScreen({
    super.key,
    required this.userEmail,
    this.username = '',
  });

  final String userEmail;
  final String username;

  @override
  State<NgmyMarketHubScreen> createState() => _NgmyMarketHubScreenState();
}

class _NgmyMarketHubScreenState extends State<NgmyMarketHubScreen> {
  int _dueReminders = 0;

  @override
  void initState() {
    super.initState();
    _refreshBadges();
  }

  Future<void> _refreshBadges() async {
    final due = await ngmyItemReminderDueCount(userEmail: widget.userEmail);
    if (mounted) setState(() => _dueReminders = due);
  }

  @override
  Widget build(BuildContext context) {
    final bottomPad = ngmyMarketHubBottomPadding(context);
    return Scaffold(
      backgroundColor: const Color(0xFF05070C),
      body: SafeArea(
        bottom: false,
        child: SingleChildScrollView(
          padding: EdgeInsets.fromLTRB(16, 12, 16, bottomPad),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _hero(),
              const SizedBox(height: 18),
              const Text('Tap a frame to open', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
              const SizedBox(height: 4),
              Text(
                'Tools open full-screen — nothing loads until you tap.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12),
              ),
              const SizedBox(height: 14),
              _frameTile(
                index: 1,
                title: 'Business Card Creator',
                subtitle: '20 modern templates · drag to move · save & download PNG',
                icon: Icons.badge_rounded,
                colors: const [Color(0xFF0B1020), Color(0xFF312E81), Color(0xFF065F46)],
                accent: const Color(0xFF22C55E),
                onTap: () => showNgmyBusinessCardStudioDialog(context, userEmail: widget.userEmail),
              ),
              const SizedBox(height: 12),
              _frameTile(
                index: 2,
                title: 'Where I Put It',
                subtitle: 'Save where you left keys, wallet, etc. · schedule push reminders',
                icon: Icons.place_rounded,
                colors: const [Color(0xFF0B1020), Color(0xFF3B0764), Color(0xFF1E1B4B)],
                accent: const Color(0xFFA78BFA),
                badge: _dueReminders > 0 ? '$_dueReminders due' : null,
                onTap: () async {
                  await showNgmyItemReminderDialog(context, userEmail: widget.userEmail);
                  await _refreshBadges();
                },
              ),
              const SizedBox(height: 14),
              Text(
                'More frames coming soon. Business cards and reminders are saved on this device.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.38), fontSize: 11, height: 1.35),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _hero() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF0B1020), Color(0xFF111827), Color(0xFF312E81)],
        ),
        border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.28)),
        boxShadow: [BoxShadow(color: const Color(0xFF22C55E).withValues(alpha: 0.14), blurRadius: 28, offset: const Offset(0, 14))],
      ),
      child: Stack(
        children: [
          Positioned(right: -24, top: -24, child: Icon(Icons.dashboard_customize_rounded, color: Colors.white.withValues(alpha: 0.07), size: 140)),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    width: 48,
                    height: 48,
                    decoration: BoxDecoration(color: const Color(0xFF22C55E), borderRadius: BorderRadius.circular(16)),
                    child: const Icon(Icons.grid_view_rounded, color: Colors.black, size: 26),
                  ),
                  const SizedBox(width: 12),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('NGMY TOOL HUB', style: TextStyle(color: Color(0xFF86EFAC), fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.1)),
                        SizedBox(height: 2),
                        Text('Personal Frames', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24)),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 14),
              Text(
                widget.username.trim().isEmpty
                    ? 'Pick a frame below — each tool opens on its own screen.'
                    : 'Hey ${widget.username.trim()} — tap a frame when you need it.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.68), fontSize: 12.5, height: 1.35, fontWeight: FontWeight.w600),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _frameTile({
    required int index,
    required String title,
    required String subtitle,
    required IconData icon,
    required List<Color> colors,
    required Color accent,
    required VoidCallback onTap,
    String? badge,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(26),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(26),
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: colors),
            border: Border.all(color: accent.withValues(alpha: 0.32)),
            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.12), blurRadius: 18, offset: const Offset(0, 8))],
          ),
          padding: const EdgeInsets.all(16),
          child: Row(
            children: [
              Container(
                width: 52,
                height: 52,
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: [accent, accent.withValues(alpha: 0.55)]),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Icon(icon, color: Colors.white, size: 28),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
                          decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(6)),
                          child: Text('FRAME $index', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 0.8)),
                        ),
                        if (badge != null) ...[
                          const SizedBox(width: 8),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                            decoration: BoxDecoration(color: accent.withValues(alpha: 0.25), borderRadius: BorderRadius.circular(8)),
                            child: Text(badge, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 9)),
                          ),
                        ],
                      ],
                    ),
                    const SizedBox(height: 6),
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                    const SizedBox(height: 3),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11, height: 1.25)),
                  ],
                ),
              ),
              Icon(Icons.arrow_forward_ios_rounded, color: accent.withValues(alpha: 0.85), size: 18),
            ],
          ),
        ),
      ),
    );
  }
}
