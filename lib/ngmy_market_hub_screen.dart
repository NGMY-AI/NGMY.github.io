import 'package:flutter/material.dart';

import 'ngmy_business_card_studio.dart';
import 'ngmy_business_essentials.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_hud_tech_shell.dart';
import 'ngmy_menu_studio.dart';
import 'ngmy_menu_storage.dart';

/// Scroll padding so list content can pass behind the floating bottom nav.
double ngmyMarketHubBottomPadding(BuildContext context) {
  return 110 + MediaQuery.paddingOf(context).bottom;
}

/// Hub launcher — large HUD tech frames; tap to open each tool.
class NgmyMarketHubScreen extends StatefulWidget {
  const NgmyMarketHubScreen({
    super.key,
    required this.userEmail,
    this.username = '',
    this.isAdmin = false,
  });

  final String userEmail;
  final String username;
  final bool isAdmin;

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
        child: NgmyHudMotion(
          builder: (context, pulse, scan, orbit) {
            return ListView(
              padding: EdgeInsets.fromLTRB(16, 8, 16, bottomPad),
              children: [
                _hudFrame(
                  t: t,
                  title: 'Business Card Creator',
                  subtitle: '',
                  thumbHeight: thumbH,
                  colors: const [
                    Color(0xFF22C55E),
                    Color(0xFF065F46),
                    Color(0xFF134E4A),
                  ],
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  phase: 0,
                  preview: _BusinessCardThumbPreview(
                    accent: const Color(0xFF22C55E),
                    isDark: t.isDark,
                  ),
                  onTap: () => showNgmyBusinessCardStudioDialog(
                    context,
                    userEmail: widget.userEmail,
                    isAdmin: widget.isAdmin,
                  ),
                ),
                const SizedBox(height: 18),
                _hudFrame(
                  t: t,
                  title: 'Menu Studio',
                  subtitle: '',
                  thumbHeight: thumbH,
                  colors: const [
                    Color(0xFFB8860B),
                    Color(0xFFD4AF37),
                    Color(0xFF3D2E1F),
                  ],
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  phase: 0.22,
                  badge: _menuCount > 0 ? '$_menuCount saved' : null,
                  preview: _MenuStudioThumbPreview(
                    accent: const Color(0xFFB8860B),
                    isDark: t.isDark,
                  ),
                  onTap: () async {
                    await showNgmyMenuStudioDialog(
                      context,
                      userEmail: widget.userEmail,
                      isAdmin: widget.isAdmin,
                    );
                    await _refreshBadges();
                  },
                ),
                const SizedBox(height: 18),
                _hudFrame(
                  t: t,
                  title: 'Business Essentials',
                  subtitle: '',
                  thumbHeight: thumbH,
                  colors: const [
                    Color(0xFF38BDF8),
                    Color(0xFF1E3A8A),
                    Color(0xFF0E7490),
                  ],
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  phase: 0.44,
                  badge: _essentialsCount > 0
                      ? '$_essentialsCount saved'
                      : null,
                  preview: _EssentialsThumbPreview(isDark: t.isDark),
                  onTap: () async {
                    await showNgmyBusinessEssentialsHub(
                      context,
                      userEmail: widget.userEmail,
                    );
                    await _refreshBadges();
                  },
                ),
              ],
            );
          },
        ),
      ),
    );
  }

  Widget _hudFrame({
    required NgmyHubTheme t,
    required String title,
    required String subtitle,
    required double thumbHeight,
    required List<Color> colors,
    required double pulse,
    required double scan,
    required double orbit,
    required double phase,
    required Widget preview,
    required VoidCallback onTap,
    String? badge,
    String? frameCenterLabel,
  }) {
    final hasTitle = title.trim().isNotEmpty;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(
          height: thumbHeight,
          child: NgmyHudTechFrame(
            colors: colors,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            phase: phase,
            borderRadius: 18,
            onTap: onTap,
            child: Stack(
              fit: StackFit.expand,
              children: [
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
                        colors: [
                          Colors.transparent,
                          Colors.black.withValues(alpha: 0.72),
                        ],
                      ),
                    ),
                  ),
                ),
                if (frameCenterLabel != null &&
                    frameCenterLabel.trim().isNotEmpty)
                  Center(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 28),
                      child: Text(
                        frameCenterLabel,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: 22,
                          letterSpacing: 0.4,
                          shadows: [
                            Shadow(
                              color: Colors.black.withValues(alpha: 0.55),
                              blurRadius: 14,
                              offset: const Offset(0, 4),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                Positioned(
                  right: 14,
                  bottom: 14,
                  child: NgmyHudMiniOrb(
                    colors: colors,
                    pulse: pulse,
                    orbit: (orbit + phase) % 1.0,
                    size: 52,
                    icon: Icons.play_arrow_rounded,
                  ),
                ),
                if (badge != null)
                  Positioned(
                    top: 12,
                    left: 12,
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 10,
                        vertical: 5,
                      ),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(999),
                        color: Colors.black.withValues(alpha: 0.45),
                        border: Border.all(
                          color: colors.first.withValues(alpha: 0.7),
                        ),
                      ),
                      child: Text(
                        badge,
                        style: TextStyle(
                          color: colors.first,
                          fontWeight: FontWeight.w900,
                          fontSize: 11,
                          letterSpacing: 0.4,
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ),
        if (hasTitle) ...[
          const SizedBox(height: 10),
          Text(
            title,
            style: TextStyle(
              color: t.title,
              fontWeight: FontWeight.w900,
              fontSize: 16,
              letterSpacing: 0.2,
            ),
          ),
        ],
        if (subtitle.trim().isNotEmpty) ...[
          const SizedBox(height: 3),
          Text(
            subtitle,
            style: TextStyle(
              color: t.subtitle,
              fontWeight: FontWeight.w600,
              fontSize: 12.5,
            ),
          ),
        ],
      ],
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
              colors: isDark
                  ? const [Color(0xFF0A0A0A), Color(0xFF171717)]
                  : const [Color(0xFFF8FAFC), Color(0xFFE2E8F0)],
            ),
            border: Border.all(
              color: const Color(0xFFD4AF37).withValues(alpha: 0.6),
            ),
            boxShadow: [
              BoxShadow(
                color: accent.withValues(alpha: 0.25),
                blurRadius: 24,
                offset: const Offset(0, 12),
              ),
            ],
          ),
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'KB PABLO QR',
                style: TextStyle(
                  color: const Color(0xFFD4AF37),
                  fontWeight: FontWeight.w300,
                  fontSize: 11,
                  letterSpacing: 2,
                ),
              ),
              const Spacer(),
              Container(height: 2, width: 40, color: const Color(0xFFD4AF37)),
              const SizedBox(height: 6),
              Text(
                'Business Card Studio',
                style: TextStyle(
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.5)
                      : const Color(0xFF64748B),
                  fontSize: 9,
                ),
              ),
            ],
          ),
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
              colors: isDark
                  ? const [Color(0xFF1A1410), Color(0xFF0A0A0A)]
                  : const [Color(0xFFFFF8E7), Color(0xFFFEF3C7)],
            ),
            border: Border.all(color: accent.withValues(alpha: 0.65)),
            boxShadow: [
              BoxShadow(
                color: accent.withValues(alpha: 0.3),
                blurRadius: 24,
                offset: const Offset(0, 12),
              ),
            ],
          ),
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(Icons.restaurant_menu_rounded, color: accent, size: 22),
              const SizedBox(height: 8),
              Text(
                'YOUR MENU',
                style: TextStyle(
                  color: accent,
                  fontWeight: FontWeight.w900,
                  fontSize: 12,
                  letterSpacing: 1.2,
                ),
              ),
              const Spacer(),
              Text(
                'Burgers · Drinks · QR',
                style: TextStyle(
                  color: isDark ? Colors.white54 : const Color(0xFF64748B),
                  fontSize: 9,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _EssentialsThumbPreview extends StatelessWidget {
  const _EssentialsThumbPreview({required this.isDark});

  final bool isDark;

  @override
  Widget build(BuildContext context) {
    const accent = Color(0xFF38BDF8);
    return Center(
      child: Transform.rotate(
        angle: -0.05,
        child: Container(
          width: 200,
          height: 114,
          margin: const EdgeInsets.only(bottom: 24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: isDark
                  ? const [
                      Color(0xFF0B1220),
                      Color(0xFF0E7490),
                      Color(0xFF1E3A8A),
                    ]
                  : const [
                      Color(0xFFF0F9FF),
                      Color(0xFFE0F2FE),
                      Color(0xFFBAE6FD),
                    ],
            ),
            border: Border.all(
              color: accent.withValues(alpha: 0.65),
              width: 1.3,
            ),
            boxShadow: [
              BoxShadow(
                color: accent.withValues(alpha: 0.3),
                blurRadius: 24,
                offset: const Offset(0, 12),
              ),
            ],
          ),
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    width: 28,
                    height: 28,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8),
                      gradient: const LinearGradient(
                        colors: [Color(0xFF38BDF8), Color(0xFF0EA5E9)],
                      ),
                    ),
                    child: const Icon(
                      Icons.business_center_rounded,
                      color: Colors.white,
                      size: 16,
                    ),
                  ),
                  const Spacer(),
                  _miniDot(const Color(0xFF38BDF8)),
                  const SizedBox(width: 4),
                  _miniDot(const Color(0xFFA78BFA)),
                  const SizedBox(width: 4),
                  _miniDot(const Color(0xFFEC4899)),
                ],
              ),
              const SizedBox(height: 10),
              Text(
                'ESSENTIALS',
                style: TextStyle(
                  color: isDark ? Colors.white : const Color(0xFF0C4A6E),
                  fontWeight: FontWeight.w900,
                  fontSize: 13,
                  letterSpacing: 1.3,
                ),
              ),
              const Spacer(),
              Text(
                'Notes · Contacts · Tools',
                style: TextStyle(
                  color: isDark ? Colors.white54 : const Color(0xFF64748B),
                  fontSize: 9,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  static Widget _miniDot(Color color) {
    return Container(
      width: 8,
      height: 8,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: color.withValues(alpha: 0.85),
        boxShadow: [
          BoxShadow(color: color.withValues(alpha: 0.45), blurRadius: 4),
        ],
      ),
    );
  }
}
