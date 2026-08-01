import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Animated onboarding slides teaching users to save NGMY to their iPhone home screen.
class NgmyHomeInstallGuideCard extends StatefulWidget {
  const NgmyHomeInstallGuideCard({super.key, required this.isDark});

  final bool isDark;

  @override
  State<NgmyHomeInstallGuideCard> createState() => _NgmyHomeInstallGuideCardState();
}

class _NgmyHomeInstallGuideCardState extends State<NgmyHomeInstallGuideCard> with TickerProviderStateMixin {
  static const _slides = <_InstallSlide>[
    _InstallSlide(
      id: 'safari',
      icon: Icons.more_horiz_rounded,
      accent: Color(0xFF38BDF8),
      accent2: Color(0xFF2563EB),
      title: 'Tap the 3 dots',
      body: 'Open ngmy.org in Safari, then tap ••• at the bottom.',
      phoneHint: 'bottom',
    ),
    _InstallSlide(
      id: 'share',
      icon: Icons.ios_share_rounded,
      accent: Color(0xFFA78BFA),
      accent2: Color(0xFF7C3AED),
      title: 'Tap Share',
      body: 'In the menu, tap Share to open the share sheet.',
      phoneHint: 'share',
    ),
    _InstallSlide(
      id: 'more',
      icon: Icons.more_horiz_rounded,
      accent: Color(0xFF818CF8),
      accent2: Color(0xFF4F46E5),
      title: 'Tap More',
      body: 'At the bottom of Share, tap More (•••).',
      phoneHint: 'more',
    ),
    _InstallSlide(
      id: 'add',
      icon: Icons.add_to_home_screen_rounded,
      accent: Color(0xFF34D399),
      accent2: Color(0xFF059669),
      title: 'Add to Home Screen',
      body: 'Tap Add to Home Screen in the list.',
      phoneHint: 'add',
    ),
    _InstallSlide(
      id: 'home',
      icon: Icons.apps_rounded,
      accent: Color(0xFF22D3EE),
      accent2: Color(0xFF8B5CF6),
      title: 'NGMY on your phone',
      body: 'Tap Add — NGMY sits on your home screen like an app.',
      phoneHint: 'home',
    ),
  ];

  int _index = 0;
  Timer? _timer;
  late final AnimationController _pulse;
  late final AnimationController _shimmer;
  late final AnimationController _orbit;
  late final AnimationController _slidePop;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
    _shimmer = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(seconds: 5))..repeat();
    _slidePop = AnimationController(vsync: this, duration: const Duration(milliseconds: 680));
    _slidePop.forward();
    _timer = Timer.periodic(const Duration(milliseconds: 4200), (_) => _advanceSlide());
  }

  void _advanceSlide() {
    if (!mounted) return;
    _slidePop.reverse().then((_) {
      if (!mounted) return;
      setState(() => _index = (_index + 1) % _slides.length);
      _slidePop.forward(from: 0);
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _pulse.dispose();
    _shimmer.dispose();
    _orbit.dispose();
    _slidePop.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final slide = _slides[_index];
    final subColor = widget.isDark ? Colors.white.withValues(alpha: 0.78) : const Color(0xFF334155);
    final titleColor = widget.isDark ? Colors.white : const Color(0xFF0F172A);

    return AnimatedBuilder(
      animation: Listenable.merge([_pulse, _shimmer, _orbit, _slidePop]),
      builder: (context, _) {
        final pop = Curves.elasticOut.transform(_slidePop.value.clamp(0.0, 1.0));
        final breathe = 0.92 + _pulse.value * 0.08;

        return Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(child: _HeroBadge(shimmer: _shimmer.value, pulse: _pulse.value, slide: slide)),
            const SizedBox(height: 4),
            Expanded(
              child: Center(
                child: Transform.scale(
                  scale: 0.88 + pop * 0.12,
                  child: Opacity(
                    opacity: 0.35 + pop * 0.65,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        _PhoneStage(
                          slide: slide,
                          pulse: _pulse.value,
                          orbit: _orbit.value,
                          isDark: widget.isDark,
                        ),
                        const SizedBox(height: 10),
                        Text(
                          slide.title,
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: titleColor,
                            fontSize: 17,
                            fontWeight: FontWeight.w900,
                            height: 1.1,
                            letterSpacing: -0.2,
                            shadows: widget.isDark
                                ? [Shadow(color: slide.accent.withValues(alpha: 0.45 * breathe), blurRadius: 14)]
                                : null,
                          ),
                        ),
                        const SizedBox(height: 5),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 6),
                          child: Text(
                            slide.body,
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: subColor,
                              fontSize: 13.5,
                              height: 1.28,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}

class _HeroBadge extends StatelessWidget {
  const _HeroBadge({required this.shimmer, required this.pulse, required this.slide});

  final double shimmer;
  final double pulse;
  final _InstallSlide slide;

  @override
  Widget build(BuildContext context) {
    final glow = 0.35 + pulse * 0.35;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 7),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(999),
        gradient: LinearGradient(
          begin: Alignment(-1 + shimmer * 2, -0.5),
          end: Alignment(1 - shimmer * 2, 0.5),
          colors: [slide.accent, slide.accent2, slide.accent],
        ),
        boxShadow: [
          BoxShadow(color: slide.accent.withValues(alpha: glow), blurRadius: 18, spreadRadius: 1),
          BoxShadow(color: slide.accent2.withValues(alpha: glow * 0.7), blurRadius: 28, spreadRadius: -2),
        ],
        border: Border.all(color: Colors.white.withValues(alpha: 0.35 + pulse * 0.2), width: 1.2),
      ),
      child: ShaderMask(
        blendMode: BlendMode.srcIn,
        shaderCallback: (bounds) => LinearGradient(
          begin: Alignment(-1 + shimmer * 2.5, 0),
          end: Alignment(1 - shimmer * 2.5, 0),
          colors: const [Colors.white, Color(0xFFE0F2FE), Colors.white],
          stops: const [0.0, 0.5, 1.0],
        ).createShader(bounds),
        child: const Text(
          'SAVE NGMY LIKE AN APP',
          style: TextStyle(
            color: Colors.white,
            fontSize: 12.5,
            fontWeight: FontWeight.w900,
            letterSpacing: 1.1,
          ),
        ),
      ),
    );
  }
}

class _PhoneStage extends StatelessWidget {
  const _PhoneStage({
    required this.slide,
    required this.pulse,
    required this.orbit,
    required this.isDark,
  });

  final _InstallSlide slide;
  final double pulse;
  final double orbit;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final glow = 0.4 + pulse * 0.35;
    return SizedBox(
      width: 130,
      height: 148,
      child: Stack(
        alignment: Alignment.center,
        clipBehavior: Clip.none,
        children: [
          ...List.generate(6, (i) {
            final angle = orbit * math.pi * 2 + i * math.pi / 3;
            final r = 52 + math.sin(orbit * math.pi * 2 + i) * 6;
            return Positioned(
              left: 65 + math.cos(angle) * r - 5,
              top: 74 + math.sin(angle) * r * 0.55 - 5,
              child: Container(
                width: 10,
                height: 10,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: (i.isEven ? slide.accent : slide.accent2).withValues(alpha: 0.25 + pulse * 0.35),
                  boxShadow: [
                    BoxShadow(
                      color: slide.accent.withValues(alpha: 0.55),
                      blurRadius: 10,
                      spreadRadius: 1,
                    ),
                  ],
                ),
              ),
            );
          }),
          Transform.scale(
            scale: 1.0 + pulse * 0.03,
            child: _PhoneMockup(slide: slide, pulse: pulse, isDark: isDark, glow: glow),
          ),
        ],
      ),
    );
  }
}

class _InstallSlide {
  const _InstallSlide({
    required this.id,
    required this.icon,
    required this.accent,
    required this.accent2,
    required this.title,
    required this.body,
    required this.phoneHint,
  });
  final String id;
  final IconData icon;
  final Color accent;
  final Color accent2;
  final String title;
  final String body;
  final String phoneHint;
}

class _PhoneMockup extends StatelessWidget {
  const _PhoneMockup({
    required this.slide,
    required this.pulse,
    required this.isDark,
    required this.glow,
  });

  final _InstallSlide slide;
  final double pulse;
  final bool isDark;
  final double glow;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 96,
      height: 138,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        border: Border.all(
          color: Color.lerp(slide.accent, Colors.white, 0.35)!.withValues(alpha: 0.55 + pulse * 0.25),
          width: 2,
        ),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isDark
              ? [const Color(0xFF1E293B), const Color(0xFF0F172A), slide.accent2.withValues(alpha: 0.25)]
              : [const Color(0xFFF8FAFC), const Color(0xFFE2E8F0), slide.accent.withValues(alpha: 0.12)],
        ),
        boxShadow: [
          BoxShadow(color: slide.accent.withValues(alpha: glow), blurRadius: 22, spreadRadius: -1),
          BoxShadow(color: slide.accent2.withValues(alpha: glow * 0.75), blurRadius: 32, spreadRadius: -4),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          children: [
            Positioned.fill(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: RadialGradient(
                    center: Alignment(0, -0.2 + pulse * 0.15),
                    radius: 0.95,
                    colors: [
                      slide.accent.withValues(alpha: 0.22 + pulse * 0.12),
                      Colors.transparent,
                    ],
                  ),
                ),
              ),
            ),
            Positioned(
              top: 7,
              left: 0,
              right: 0,
              child: Center(
                child: Container(
                  width: 34,
                  height: 5,
                  decoration: BoxDecoration(
                    color: isDark ? Colors.white24 : Colors.black12,
                    borderRadius: BorderRadius.circular(999),
                  ),
                ),
              ),
            ),
            Center(
              child: Container(
                width: 52,
                height: 52,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(colors: [slide.accent, slide.accent2]),
                  boxShadow: [
                    BoxShadow(color: slide.accent.withValues(alpha: 0.65), blurRadius: 16, spreadRadius: 1),
                  ],
                ),
                child: Icon(slide.icon, color: Colors.white, size: 28),
              ),
            ),
            if (slide.phoneHint == 'bottom' || slide.phoneHint == 'share')
              Positioned(
                bottom: 10,
                left: 0,
                right: 0,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _ToolbarDot(active: slide.phoneHint == 'bottom', accent: slide.accent, icon: Icons.more_horiz_rounded),
                    const SizedBox(width: 14),
                    _ToolbarDot(active: slide.phoneHint == 'share', accent: slide.accent, icon: Icons.ios_share_rounded),
                    const SizedBox(width: 14),
                    _ToolbarDot(active: false, accent: slide.accent, icon: Icons.bookmark_outline_rounded),
                  ],
                ),
              ),
            if (slide.phoneHint == 'more')
              Positioned(
                bottom: 8,
                left: 10,
                right: 10,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                  decoration: BoxDecoration(
                    color: isDark ? Colors.white.withValues(alpha: 0.08) : Colors.black.withValues(alpha: 0.05),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: slide.accent.withValues(alpha: 0.85), width: 1.6),
                    boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.45), blurRadius: 10)],
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.more_horiz_rounded, color: slide.accent, size: 18),
                      const SizedBox(width: 4),
                      Text('More', style: TextStyle(color: slide.accent, fontSize: 10, fontWeight: FontWeight.w900)),
                    ],
                  ),
                ),
              ),
            if (slide.phoneHint == 'add')
              Positioned(
                bottom: 22,
                left: 12,
                right: 12,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 7),
                  decoration: BoxDecoration(
                    color: slide.accent.withValues(alpha: 0.18),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: slide.accent, width: 1.6),
                    boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.5), blurRadius: 12)],
                  ),
                  child: Row(
                    children: [
                      Icon(Icons.add_to_home_screen_rounded, color: slide.accent, size: 16),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Text(
                          'Add to Home Screen',
                          style: TextStyle(color: slide.accent, fontSize: 9.5, fontWeight: FontWeight.w900),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            if (slide.phoneHint == 'home')
              Positioned(
                bottom: 16,
                left: 0,
                right: 0,
                child: Wrap(
                  alignment: WrapAlignment.center,
                  spacing: 8,
                  runSpacing: 6,
                  children: [
                    _HomeIcon(accent: slide.accent2, label: null),
                    _HomeIcon(accent: slide.accent, label: 'N', highlight: true),
                    _HomeIcon(accent: slide.accent2, label: null),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _ToolbarDot extends StatelessWidget {
  const _ToolbarDot({required this.active, required this.accent, required this.icon});

  final bool active;
  final Color accent;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: active ? accent.withValues(alpha: 0.95) : Colors.white.withValues(alpha: 0.12),
        boxShadow: active ? [BoxShadow(color: accent.withValues(alpha: 0.65), blurRadius: 10)] : null,
        border: active ? null : Border.all(color: Colors.white24),
      ),
      child: Icon(icon, size: 12, color: active ? Colors.white : Colors.white70),
    );
  }
}

class _HomeIcon extends StatelessWidget {
  const _HomeIcon({required this.accent, required this.label, this.highlight = false});

  final Color accent;
  final String? label;
  final bool highlight;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: highlight ? 30 : 24,
      height: highlight ? 30 : 24,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(highlight ? 8 : 6),
        gradient: highlight ? LinearGradient(colors: [const Color(0xFF60A5FA), accent]) : null,
        color: highlight ? null : accent.withValues(alpha: 0.25),
        boxShadow: highlight ? [BoxShadow(color: accent.withValues(alpha: 0.65), blurRadius: 12)] : null,
        border: highlight ? Border.all(color: Colors.white54, width: 1.2) : null,
      ),
      child: label == null
          ? null
          : Center(
              child: Text(
                label!,
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13),
              ),
            ),
    );
  }
}
