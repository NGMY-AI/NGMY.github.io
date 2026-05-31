import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

const String _kNgmyDefaultLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

/// Login hero logo — tap the dot circle for a full-screen NGMY 3D popup (like weekend clock-in).
class NgmyLoginLogoHero extends StatefulWidget {
  final String? logoUrl;

  const NgmyLoginLogoHero({super.key, this.logoUrl});

  @override
  State<NgmyLoginLogoHero> createState() => _NgmyLoginLogoHeroState();
}

class _NgmyLoginLogoHeroState extends State<NgmyLoginLogoHero> with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;
  bool _showingPopup = false;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _playWelcomePopup() async {
    if (!mounted || _showingPopup) return;
    _showingPopup = true;
    try {
      await Ngmy3DFloatingPopup.show(
        context,
        config: {
          'enabled': true,
          'themeId': 'ngmy',
          'title': 'NGMY',
          'subtitle': 'Next Generation — Make Yours',
          'orbitWords': const ['NGMY', 'GROW', 'EARN', 'SHOP', 'PLAY', 'WIN', 'JOIN', 'YOU'],
          'durationMs': 6000,
        },
      );
    } finally {
      _showingPopup = false;
    }
  }

  Widget _dotCircle() {
    return AnimatedBuilder(
      animation: _pulse,
      builder: (_, __) {
        final glow = 0.35 + _pulse.value * 0.45;
        return Container(
          width: 110,
          height: 110,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            gradient: RadialGradient(
              colors: [
                const Color(0xFF6200EE).withValues(alpha: glow),
                const Color(0xFF00B25A).withValues(alpha: glow * 0.55),
                Colors.white.withValues(alpha: 0.08),
              ],
            ),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF6200EE).withValues(alpha: 0.25 + _pulse.value * 0.2),
                blurRadius: 18 + _pulse.value * 10,
                spreadRadius: 1 + _pulse.value * 2,
              ),
            ],
          ),
          child: Icon(
            Icons.blur_on_rounded,
            size: 72 + _pulse.value * 6,
            color: Color.lerp(const Color(0xFF6200EE), const Color(0xFF00B25A), _pulse.value),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final url = (widget.logoUrl ?? '').trim().isNotEmpty ? widget.logoUrl!.trim() : _kNgmyDefaultLogoUrl;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _playWelcomePopup,
        borderRadius: BorderRadius.circular(30),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(30),
          child: Image.network(
            url,
            width: 110,
            height: 110,
            fit: BoxFit.cover,
            gaplessPlayback: true,
            errorBuilder: (_, __, ___) {
              if (url != _kNgmyDefaultLogoUrl) {
                return Image.network(
                  _kNgmyDefaultLogoUrl,
                  width: 110,
                  height: 110,
                  fit: BoxFit.cover,
                  errorBuilder: (_, __, ___) => _dotCircle(),
                );
              }
              return _dotCircle();
            },
          ),
        ),
      ),
    );
  }
}
