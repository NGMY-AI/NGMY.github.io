import 'package:flutter/material.dart';

import 'ngmy_business_card_studio.dart';
import 'ngmy_business_essentials.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_menu_studio.dart';
import 'ngmy_menu_storage.dart';

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
  int _menuCount = 0;
  int _essentialsCount = 0;

  @override
  void initState() {
    super.initState();
    _refreshBadges();
  }

  @override
  void dispose() {
    super.dispose();
  }

  Future<void> _refreshBadges() async {
    final results = await Future.wait([
      ngmyMenuCount(userEmail: widget.userEmail),
      ngmyBusinessEssentialsTotalCount(userEmail: widget.userEmail),
    ]);
    if (mounted) {
      setState(() {
        _menuCount = results[0];
        _essentialsCount = results[1];
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final bottomPad = ngmyMarketHubBottomPadding(context);
    final width = MediaQuery.sizeOf(context).width - 32;
    final thumbH = width * 9 / 16;

    return Scaffold(
      backgroundColor: t.scaffold,
      body: SafeArea(
        bottom: false,
        child: ListView(
          padding: EdgeInsets.fromLTRB(16, 8, 16, bottomPad),
          children: [
            _youtubeFrame(
              t: t,
              title: 'Business Card Creator',
              subtitle: '37 luxurious templates · drag · save PNG',
              thumbHeight: thumbH,
              darkGradient: const [Color(0xFF0B1020), Color(0xFF065F46), Color(0xFF134E4A)],
              lightGradient: const [Color(0xFFE2E8F0), Color(0xFFD1FAE5), Color(0xFFECFDF5)],
              accent: const Color(0xFF22C55E),
              preview: _BusinessCardThumbPreview(accent: const Color(0xFF22C55E), isDark: t.isDark),
              onTap: () => showNgmyBusinessCardStudioDialog(context, userEmail: widget.userEmail),
            ),
            const SizedBox(height: 18),
            _youtubeFrame(
              t: t,
              title: 'Menu Studio',
              subtitle: 'Restaurant menus · publish online · custom QR codes',
              thumbHeight: thumbH,
              darkGradient: const [Color(0xFF1A1410), Color(0xFF3D2E1F), Color(0xFF0F172A)],
              lightGradient: const [Color(0xFFFFF8E7), Color(0xFFFEF3C7), Color(0xFFFDE68A)],
              accent: const Color(0xFFB8860B),
              badge: _menuCount > 0 ? '$_menuCount saved' : null,
              preview: _MenuStudioThumbPreview(accent: const Color(0xFFB8860B), isDark: t.isDark),
              onTap: () async {
                await showNgmyMenuStudioDialog(context, userEmail: widget.userEmail);
                await _refreshBadges();
              },
            ),
            const SizedBox(height: 18),
            _youtubeFrame(
              t: t,
              title: 'Business Essentials',
              subtitle: 'Contacts · site map · hotlines — pick inside',
              thumbHeight: thumbH,
              darkGradient: const [Color(0xFF0F172A), Color(0xFF1E3A8A), Color(0xFF0E7490)],
              lightGradient: const [Color(0xFFE0F2FE), Color(0xFFDBEAFE), Color(0xFFE0F7FA)],
              accent: const Color(0xFF38BDF8),
              badge: _essentialsCount > 0 ? '$_essentialsCount saved' : null,
              preview: _EssentialsThumbPreview(isDark: t.isDark),
              onTap: () async {
                await showNgmyBusinessEssentialsHub(context, userEmail: widget.userEmail);
                await _refreshBadges();
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _youtubeFrame({
    required NgmyHubTheme t,
    required String title,
    required String subtitle,
    required double thumbHeight,
    required List<Color> darkGradient,
    required List<Color> lightGradient,
    required Color accent,
    required Widget preview,
    required VoidCallback onTap,
    String? badge,
  }) {
    final gradient = t.frameGradient(darkGradient, lightGradient);
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
                            colors: [Colors.transparent, t.overlayDark],
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
                          color: t.isDark ? Colors.black.withValues(alpha: 0.55) : Colors.white.withValues(alpha: 0.85),
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
            Text(title, style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 16, height: 1.2)),
            const SizedBox(height: 3),
            Text(subtitle, style: TextStyle(color: t.muted, fontSize: 12, height: 1.25)),
          ],
        ),
      ),
    );
  }
}

class _MenuStudioThumbPreview extends StatelessWidget {
  const _MenuStudioThumbPreview({required this.accent, required this.isDark});

  final Color accent;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Transform.rotate(
        angle: -0.04,
        child: Container(
          width: 200,
          height: 114,
          margin: const EdgeInsets.only(bottom: 24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: LinearGradient(
              colors: isDark ? const [Color(0xFF1A1410), Color(0xFF0A0A0A)] : const [Color(0xFFFFF8E7), Color(0xFFFEF3C7)],
            ),
            border: Border.all(color: accent.withValues(alpha: 0.65)),
            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.3), blurRadius: 24, offset: const Offset(0, 12))],
          ),
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(Icons.restaurant_menu_rounded, color: accent, size: 22),
              const SizedBox(height: 8),
              Text('YOUR MENU', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.2)),
              const Spacer(),
              Text('Burgers · Drinks · QR', style: TextStyle(color: isDark ? Colors.white54 : const Color(0xFF64748B), fontSize: 9)),
            ],
          ),
        ),
      ),
    );
  }
}

class _BusinessCardThumbPreview extends StatelessWidget {
  const _BusinessCardThumbPreview({required this.accent, required this.isDark});

  final Color accent;
  final bool isDark;

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
            gradient: LinearGradient(
              colors: isDark ? const [Color(0xFF0A0A0A), Color(0xFF171717)] : const [Color(0xFFF8FAFC), Color(0xFFE2E8F0)],
            ),
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
              Text('Business Card Studio', style: TextStyle(color: isDark ? Colors.white.withValues(alpha: 0.5) : const Color(0xFF64748B), fontSize: 9)),
            ],
          ),
        ),
      ),
    );
  }
}

class _ReminderThumbPreview extends StatelessWidget {
  const _ReminderThumbPreview({required this.accent, required this.isDark});

  final Color accent;
  final bool isDark;

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
              color: isDark ? Colors.black.withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.92),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: accent.withValues(alpha: 0.4)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.location_on_rounded, color: accent, size: 18),
                const SizedBox(width: 6),
                Text('Kitchen counter · 2 hr', style: TextStyle(color: isDark ? Colors.white.withValues(alpha: 0.85) : const Color(0xFF334155), fontWeight: FontWeight.w700, fontSize: 12)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _EssentialsThumbPreview extends StatelessWidget {
  const _EssentialsThumbPreview({required this.isDark});

  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
          _miniTile(Icons.contacts_rounded, const Color(0xFF38BDF8), isDark),
          const SizedBox(width: 6),
          _miniTile(Icons.map_rounded, const Color(0xFF34D399), isDark),
          const SizedBox(width: 6),
          _miniTile(Icons.phone_in_talk_rounded, const Color(0xFFFBBF24), isDark),
        ],
      ),
    );
  }

  static Widget _miniTile(IconData icon, Color accent, bool isDark) {
    return Container(
      width: 52,
      height: 52,
      decoration: BoxDecoration(
        color: isDark ? Colors.black.withValues(alpha: 0.4) : Colors.white.withValues(alpha: 0.92),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: accent.withValues(alpha: 0.55), width: 1.2),
      ),
      child: Icon(icon, color: accent, size: 22),
    );
  }
}
