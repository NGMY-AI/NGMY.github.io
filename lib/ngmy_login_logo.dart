import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

const String _kNgmyLogoAsset = 'assets/images/ngmy_logo.png';
const String _kNgmyDefaultLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

/// Login hero — NGMY logo in an animated ring. Tap for welcome popup.
class NgmyLoginLogoHero extends StatefulWidget {
  final String? logoUrl;

  const NgmyLoginLogoHero({super.key, this.logoUrl});

  @override
  State<NgmyLoginLogoHero> createState() => _NgmyLoginLogoHeroState();
}

class _NgmyLoginLogoHeroState extends State<NgmyLoginLogoHero> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _spin;
  bool _showingPopup = false;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _spin = AnimationController(vsync: this, duration: const Duration(seconds: 14))..repeat();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _spin.dispose();
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

  Widget _logoImage() {
    return Image.asset(
      _kNgmyLogoAsset,
      fit: BoxFit.contain,
      errorBuilder: (_, __, ___) {
        final network = (widget.logoUrl ?? '').trim();
        if (network.isNotEmpty) {
          return Image.network(
            network,
            fit: BoxFit.contain,
            gaplessPlayback: true,
            errorBuilder: (_, __, ___) => _fallbackLogoText(),
          );
        }
        return Image.network(
          _kNgmyDefaultLogoUrl,
          fit: BoxFit.contain,
          errorBuilder: (_, __, ___) => _fallbackLogoText(),
        );
      },
    );
  }

  Widget _fallbackLogoText() {
    return const Center(
      child: Text(
        'NGMY',
        style: TextStyle(fontWeight: FontWeight.w900, fontSize: 22, color: Color(0xFF1E3A5F), letterSpacing: 1.2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final innerBg = isDark ? const Color(0xFF1A1F2E) : Colors.white;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _playWelcomePopup,
        customBorder: const CircleBorder(),
        child: AnimatedBuilder(
          animation: Listenable.merge([_pulse, _spin]),
          builder: (_, __) {
            final breathe = 1.0 + _pulse.value * 0.035;
            final glow = 0.22 + _pulse.value * 0.28;
            return Transform.scale(
              scale: breathe,
              child: SizedBox(
                width: 132,
                height: 132,
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      width: 128,
                      height: 128,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: const Color(0xFF2563EB).withValues(alpha: glow),
                            blurRadius: 22 + _pulse.value * 14,
                            spreadRadius: 1 + _pulse.value * 3,
                          ),
                          BoxShadow(
                            color: const Color(0xFF1E3A5F).withValues(alpha: glow * 0.55),
                            blurRadius: 10 + _pulse.value * 8,
                            spreadRadius: 0,
                          ),
                        ],
                      ),
                    ),
                    Transform.rotate(
                      angle: _spin.value * math.pi * 2,
                      child: Container(
                        width: 124,
                        height: 124,
                        padding: const EdgeInsets.all(3.2),
                        decoration: const BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: SweepGradient(
                            colors: [
                              Color(0xFF1E3A5F),
                              Color(0xFF2563EB),
                              Color(0xFF38BDF8),
                              Color(0xFF2563EB),
                              Color(0xFF1E3A5F),
                            ],
                            stops: [0.0, 0.28, 0.5, 0.72, 1.0],
                          ),
                        ),
                        child: Container(
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: innerBg,
                            border: Border.all(
                              color: isDark ? const Color(0xFF334155) : const Color(0xFFE2E8F0),
                              width: 1.2,
                            ),
                          ),
                          padding: const EdgeInsets.all(14),
                          child: _logoImage(),
                        ),
                      ),
                    ),
                    IgnorePointer(
                      child: Container(
                        width: 118,
                        height: 118,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: Colors.white.withValues(alpha: isDark ? 0.12 : 0.65),
                            width: 1.4,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
