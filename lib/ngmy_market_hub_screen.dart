import 'package:flutter/material.dart';

import 'ngmy_business_card_studio.dart';
import 'ngmy_item_reminder.dart';
import 'ngmy_item_reminder_service.dart';
import 'ngmy_item_reminder_storage.dart';
import 'ngmy_daily_tools.dart';

/// Scroll padding so list content can pass behind the floating bottom nav.
double ngmyMarketHubBottomPadding(BuildContext context) {
  return 110 + MediaQuery.paddingOf(context).bottom;
}

/// Hub launcher — large YouTube-style frame cards; tap to open each tool.
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
    ngmyStartItemReminderWatcher(widget.userEmail);
    _refreshBadges();
  }

  @override
  void dispose() {
    super.dispose();
  }

  Future<void> _refreshBadges() async {
    final due = await ngmyItemReminderDueCount(userEmail: widget.userEmail);
    if (mounted) setState(() => _dueReminders = due);
  }

  @override
  Widget build(BuildContext context) {
    final bottomPad = ngmyMarketHubBottomPadding(context);
    final width = MediaQuery.sizeOf(context).width - 32;
    final thumbH = width * 9 / 16;

    return Scaffold(
      backgroundColor: const Color(0xFF05070C),
      body: SafeArea(
        bottom: false,
        child: ListView(
          padding: EdgeInsets.fromLTRB(16, 8, 16, bottomPad),
          children: [
            _youtubeFrame(
              title: 'Business Card Creator',
              subtitle: '37 luxurious templates · drag · save PNG',
              thumbHeight: thumbH,
              gradient: const [Color(0xFF0B1020), Color(0xFF065F46), Color(0xFF134E4A)],
              accent: const Color(0xFF22C55E),
              preview: _BusinessCardThumbPreview(accent: const Color(0xFF22C55E)),
              onTap: () => showNgmyBusinessCardStudioDialog(context, userEmail: widget.userEmail),
            ),
            const SizedBox(height: 18),
            _youtubeFrame(
              title: 'Where I Put It',
              subtitle: 'Keys · wallet · kids bag — schedule reminders',
              thumbHeight: thumbH,
              gradient: const [Color(0xFF0B1020), Color(0xFF3B0764), Color(0xFF1E1B4B)],
              accent: const Color(0xFFA78BFA),
              badge: _dueReminders > 0 ? '$_dueReminders due' : null,
              preview: _ReminderThumbPreview(accent: const Color(0xFFA78BFA)),
              onTap: () async {
                await showNgmyItemReminderDialog(context, userEmail: widget.userEmail);
                await _refreshBadges();
                await ngmyCheckItemRemindersNow(userEmail: widget.userEmail);
              },
            ),
            const SizedBox(height: 18),
            _youtubeFrame(
              title: 'Key Fob Vault',
              subtitle: 'Car info · spare key · dealer & locksmith — lost-key ready',
              thumbHeight: thumbH,
              gradient: const [Color(0xFF0C1929), Color(0xFF1E3A5F), Color(0xFF0E4D6E)],
              accent: const Color(0xFF38BDF8),
              preview: _DailyThumbPreview(icon: Icons.key_rounded, accent: Color(0xFF38BDF8), label: 'MY KEY FOB'),
              onTap: () => showNgmyKeyFobVaultDialog(context, userEmail: widget.userEmail),
            ),
            const SizedBox(height: 18),
            _youtubeFrame(
              title: 'Park My Car',
              subtitle: 'GPS pin · garage level · open in Maps when you forget',
              thumbHeight: thumbH,
              gradient: const [Color(0xFF022C22), Color(0xFF064E3B), Color(0xFF14532D)],
              accent: const Color(0xFF34D399),
              preview: _DailyThumbPreview(icon: Icons.local_parking_rounded, accent: Color(0xFF34D399), label: 'SAVE SPOT'),
              onTap: () => showNgmyParkMyCarDialog(context, userEmail: widget.userEmail),
            ),
            const SizedBox(height: 18),
            _youtubeFrame(
              title: 'Roadside Ready',
              subtitle: 'Insurance · AAA · emergency — one tap to call',
              thumbHeight: thumbH,
              gradient: const [Color(0xFF1C1400), Color(0xFF713F12), Color(0xFF422006)],
              accent: const Color(0xFFFBBF24),
              preview: _DailyThumbPreview(icon: Icons.car_crash_rounded, accent: Color(0xFFFBBF24), label: 'BREAKDOWN'),
              onTap: () => showNgmyRoadsideReadyDialog(context, userEmail: widget.userEmail),
            ),
          ],
        ),
      ),
    );
  }

  Widget _youtubeFrame({
    required String title,
    required String subtitle,
    required double thumbHeight,
    required List<Color> gradient,
    required Color accent,
    required Widget preview,
    required VoidCallback onTap,
    String? badge,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(14),
              child: SizedBox(
                width: double.infinity,
                height: thumbHeight,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    DecoratedBox(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: gradient),
                      ),
                    ),
                    preview,
                    Positioned(
                      left: 0,
                      right: 0,
                      bottom: 0,
                      child: Container(
                        height: thumbHeight * 0.45,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [Colors.transparent, Colors.black.withValues(alpha: 0.82)],
                          ),
                        ),
                      ),
                    ),
                    Positioned(
                      right: 12,
                      bottom: 12,
                      child: Container(
                        width: 52,
                        height: 52,
                        decoration: BoxDecoration(
                          color: Colors.black.withValues(alpha: 0.55),
                          shape: BoxShape.circle,
                          border: Border.all(color: accent.withValues(alpha: 0.7), width: 2),
                        ),
                        child: Icon(Icons.play_arrow_rounded, color: accent, size: 32),
                      ),
                    ),
                    if (badge != null)
                      Positioned(
                        left: 12,
                        top: 12,
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                          decoration: BoxDecoration(
                            color: accent,
                            borderRadius: BorderRadius.circular(8),
                            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.4), blurRadius: 10)],
                          ),
                          child: Text(badge, style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 11)),
                        ),
                      ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 10),
            Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16, height: 1.2)),
            const SizedBox(height: 3),
            Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.48), fontSize: 12, height: 1.25)),
          ],
        ),
      ),
    );
  }
}

class _BusinessCardThumbPreview extends StatelessWidget {
  const _BusinessCardThumbPreview({required this.accent});

  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Transform.rotate(
        angle: -0.06,
        child: Container(
          width: 200,
          height: 114,
          margin: const EdgeInsets.only(bottom: 24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: const LinearGradient(colors: [Color(0xFF0A0A0A), Color(0xFF171717)]),
            border: Border.all(color: const Color(0xFFD4AF37).withValues(alpha: 0.6)),
            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 24, offset: const Offset(0, 12))],
          ),
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('KB PABLO QR', style: TextStyle(color: const Color(0xFFD4AF37), fontWeight: FontWeight.w300, fontSize: 11, letterSpacing: 2)),
              const Spacer(),
              Container(height: 2, width: 40, color: const Color(0xFFD4AF37)),
              const SizedBox(height: 6),
              Text('Business Card Studio', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 9)),
            ],
          ),
        ),
      ),
    );
  }
}

class _ReminderThumbPreview extends StatelessWidget {
  const _ReminderThumbPreview({required this.accent});

  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.key_rounded, color: accent.withValues(alpha: 0.9), size: 56),
          const SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            decoration: BoxDecoration(
              color: Colors.black.withValues(alpha: 0.35),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: accent.withValues(alpha: 0.4)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.location_on_rounded, color: accent, size: 18),
                const SizedBox(width: 6),
                Text('Kitchen counter · 2 hr', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w700, fontSize: 12)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _DailyThumbPreview extends StatelessWidget {
  const _DailyThumbPreview({required this.icon, required this.accent, required this.label});

  final IconData icon;
  final Color accent;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: accent.withValues(alpha: 0.92), size: 52),
          const SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
            decoration: BoxDecoration(
              color: Colors.black.withValues(alpha: 0.4),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: accent.withValues(alpha: 0.45)),
            ),
            child: Text(label, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.2)),
          ),
        ],
      ),
    );
  }
}
