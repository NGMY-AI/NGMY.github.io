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
      icon: Icons.explore_rounded,
      accent: Color(0xFF38BDF8),
      accent2: Color(0xFF2563EB),
      title: 'Open Safari',
      body: 'On your iPhone, open the Safari app first.',
      detail: 'Type ngmy.org in the address bar. Use Safari — not Chrome or an in-app browser.',
      phoneHint: 'safari',
    ),
    _InstallSlide(
      id: 'dots',
      icon: Icons.more_horiz_rounded,
      accent: Color(0xFF60A5FA),
      accent2: Color(0xFF3B82F6),
      title: 'Tap the 3 dots',
      body: 'At the bottom of Safari, tap the ••• menu button.',
      detail: 'It sits in the Safari toolbar along the bottom edge of the screen.',
      phoneHint: 'dots',
    ),
    _InstallSlide(
      id: 'share',
      icon: Icons.ios_share_rounded,
      accent: Color(0xFFA78BFA),
      accent2: Color(0xFF7C3AED),
      title: 'Tap Share',
      body: 'In the menu that opens, tap Share.',
      detail: 'Share looks like a square with an arrow pointing up.',
      phoneHint: 'share',
    ),
    _InstallSlide(
      id: 'more',
      icon: Icons.more_horiz_rounded,
      accent: Color(0xFF818CF8),
      accent2: Color(0xFF4F46E5),
      title: 'Tap More',
      body: 'On the Share sheet, scroll and tap More (•••).',
      detail: 'More is usually on the bottom row of the share options.',
      phoneHint: 'more',
    ),
    _InstallSlide(
      id: 'add',
      icon: Icons.add_to_home_screen_rounded,
      accent: Color(0xFF34D399),
      accent2: Color(0xFF059669),
      title: 'Add to Home Screen',
      body: 'Tap Add to Home Screen in the list.',
      detail: 'NGMY will appear on your home screen — open it anytime like a real app.',
      phoneHint: 'add',
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
    _slidePop = AnimationController(vsync: this, duration: const Duration(milliseconds: 620));
    _slidePop.forward();
    _timer = Timer.periodic(const Duration(seconds: 5), (_) => _advanceSlide());
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
    final titleColor = widget.isDark ? Colors.white : const Color(0xFF0F172A);
    final bodyColor = widget.isDark ? Colors.white.withValues(alpha: 0.88) : const Color(0xFF334155);

    return AnimatedBuilder(
      animation: Listenable.merge([_pulse, _shimmer, _orbit, _slidePop]),
      builder: (context, _) {
        final pop = Curves.easeOutCubic.transform(_slidePop.value.clamp(0.0, 1.0));
        final breathe = 0.92 + _pulse.value * 0.08;

        return Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.only(left: 54),
              child: Align(
                alignment: Alignment.centerRight,
                child: _HeroBadge(shimmer: _shimmer.value, pulse: _pulse.value, slide: slide),
              ),
            ),
            const SizedBox(height: 4),
            Expanded(
              child: Transform.translate(
                offset: Offset(8 * (1 - pop), 0),
                child: Opacity(
                  opacity: 0.4 + pop * 0.6,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      _PhoneStage(
                        slide: slide,
                        pulse: _pulse.value,
                        orbit: _orbit.value,
                        isDark: widget.isDark,
                      ),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            _LightTextFrame(
                              isDark: widget.isDark,
                              slide: slide,
                              pulse: _pulse.value,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    slide.title,
                                    style: TextStyle(
                                      color: titleColor,
                                      fontSize: 14.5,
                                      fontWeight: FontWeight.w900,
                                      height: 1.1,
                                      shadows: widget.isDark
                                          ? [Shadow(color: slide.accent.withValues(alpha: 0.35 * breathe), blurRadius: 10)]
                                          : null,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    slide.body,
                                    style: TextStyle(color: bodyColor, fontSize: 11.5, height: 1.3, fontWeight: FontWeight.w600),
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 6),
                            _AccentTextFrame(
                              isDark: widget.isDark,
                              slide: slide,
                              pulse: _pulse.value,
                              child: Text(
                                slide.detail,
                                style: TextStyle(
                                  color: slide.accent.withValues(alpha: widget.isDark ? 1 : 0.92),
                                  fontSize: 10.5,
                                  height: 1.32,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
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

class _LightTextFrame extends StatelessWidget {
  const _LightTextFrame({
    required this.isDark,
    required this.slide,
    required this.pulse,
    required this.child,
  });

  final bool isDark;
  final _InstallSlide slide;
  final double pulse;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isDark
              ? [
                  Colors.white.withValues(alpha: 0.14 + pulse * 0.04),
                  Colors.white.withValues(alpha: 0.06),
                ]
              : [
                  Colors.white.withValues(alpha: 0.95),
                  const Color(0xFFF1F5F9).withValues(alpha: 0.9),
                ],
        ),
        border: Border.all(
          color: isDark ? Colors.white.withValues(alpha: 0.22 + pulse * 0.08) : Colors.white,
          width: 1.2,
        ),
        boxShadow: [
          BoxShadow(color: slide.accent.withValues(alpha: 0.12 + pulse * 0.08), blurRadius: 12, offset: const Offset(0, 3)),
        ],
      ),
      child: child,
    );
  }
}

class _AccentTextFrame extends StatelessWidget {
  const _AccentTextFrame({
    required this.isDark,
    required this.slide,
    required this.pulse,
    required this.child,
  });

  final bool isDark;
  final _InstallSlide slide;
  final double pulse;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            slide.accent.withValues(alpha: isDark ? 0.22 + pulse * 0.06 : 0.14),
            slide.accent2.withValues(alpha: isDark ? 0.14 + pulse * 0.04 : 0.08),
          ],
        ),
        border: Border.all(color: slide.accent.withValues(alpha: 0.65 + pulse * 0.15), width: 1.3),
        boxShadow: [
          BoxShadow(color: slide.accent.withValues(alpha: 0.25 + pulse * 0.12), blurRadius: 14, spreadRadius: -2),
        ],
      ),
      child: child,
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
      padding: const EdgeInsets.symmetric(horizontal: 13, vertical: 6),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(999),
        gradient: LinearGradient(
          begin: Alignment(-1 + shimmer * 2, -0.5),
          end: Alignment(1 - shimmer * 2, 0.5),
          colors: [slide.accent, slide.accent2, slide.accent],
        ),
        boxShadow: [
          BoxShadow(color: slide.accent.withValues(alpha: glow), blurRadius: 16, spreadRadius: 0),
          BoxShadow(color: slide.accent2.withValues(alpha: glow * 0.65), blurRadius: 22, spreadRadius: -2),
        ],
        border: Border.all(color: Colors.white.withValues(alpha: 0.32 + pulse * 0.18), width: 1.1),
      ),
      child: ShaderMask(
        blendMode: BlendMode.srcIn,
        shaderCallback: (bounds) => LinearGradient(
          begin: Alignment(-1 + shimmer * 2.5, 0),
          end: Alignment(1 - shimmer * 2.5, 0),
          colors: const [Colors.white, Color(0xFFE0F2FE), Colors.white],
        ).createShader(bounds),
        child: const Text(
          'SAVE NGMY LIKE AN APP',
          style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 0.85),
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

  static const _phoneW = 84.0;
  static const _phoneH = 192.0;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 92,
      height: _phoneH,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.center,
        children: [
          ...List.generate(3, (i) {
            final angle = orbit * math.pi * 2 + i * 2.1;
            final r = 50 + math.sin(orbit * math.pi * 2 + i) * 5;
            return Positioned(
              left: 46 + math.cos(angle) * r - 3,
              top: 96 + math.sin(angle) * r * 0.4 - 3,
              child: Container(
                width: 7,
                height: 7,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: (i.isEven ? slide.accent : slide.accent2).withValues(alpha: 0.18 + pulse * 0.28),
                  boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.4), blurRadius: 8)],
                ),
              ),
            );
          }),
          _PhoneMockup(slide: slide, pulse: pulse, isDark: isDark, width: _phoneW, height: _phoneH),
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
    required this.detail,
    required this.phoneHint,
  });
  final String id;
  final IconData icon;
  final Color accent;
  final Color accent2;
  final String title;
  final String body;
  final String detail;
  final String phoneHint;
}

class _PhoneMockup extends StatelessWidget {
  const _PhoneMockup({
    required this.slide,
    required this.pulse,
    required this.isDark,
    required this.width,
    required this.height,
  });

  final _InstallSlide slide;
  final double pulse;
  final bool isDark;
  final double width;
  final double height;

  @override
  Widget build(BuildContext context) {
    final glow = 0.38 + pulse * 0.3;
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(17),
        border: Border.all(
          color: Color.lerp(slide.accent, Colors.white, 0.3)!.withValues(alpha: 0.5 + pulse * 0.22),
          width: 1.8,
        ),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isDark
              ? [const Color(0xFF1E293B), const Color(0xFF0F172A)]
              : [const Color(0xFFF8FAFC), const Color(0xFFE2E8F0)],
        ),
        boxShadow: [
          BoxShadow(color: slide.accent.withValues(alpha: glow), blurRadius: 18, spreadRadius: -1),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(15),
        child: Stack(
          children: [
            Positioned.fill(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: RadialGradient(
                    center: const Alignment(0, -0.2),
                    radius: 1.0,
                    colors: [slide.accent.withValues(alpha: 0.14 + pulse * 0.08), Colors.transparent],
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
                  width: 32,
                  height: 4,
                  decoration: BoxDecoration(
                    color: isDark ? Colors.white24 : Colors.black12,
                    borderRadius: BorderRadius.circular(999),
                  ),
                ),
              ),
            ),
            ...switch (slide.phoneHint) {
              'safari' => [
                Positioned(
                  top: 20,
                  left: 10,
                  right: 10,
                  child: Container(
                    height: 16,
                    decoration: BoxDecoration(
                      color: isDark ? Colors.white12 : Colors.black.withValues(alpha: 0.06),
                      borderRadius: BorderRadius.circular(7),
                      border: Border.all(color: slide.accent.withValues(alpha: 0.35)),
                    ),
                    alignment: Alignment.center,
                    child: Text(
                      'ngmy.org',
                      style: TextStyle(color: slide.accent, fontSize: 8, fontWeight: FontWeight.w800),
                    ),
                  ),
                ),
                Positioned(
                  top: 72,
                  left: 0,
                  right: 0,
                  child: _IconBubble(slide: slide, size: 40, iconSize: 22),
                ),
              ],
              'dots' => [
                Positioned(
                  bottom: 18,
                  left: 0,
                  right: 0,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _ToolbarDot(active: true, accent: slide.accent, icon: Icons.more_horiz_rounded),
                      const SizedBox(width: 14),
                      _ToolbarDot(active: false, accent: slide.accent, icon: Icons.ios_share_rounded),
                    ],
                  ),
                ),
              ],
              'share' => [
                Positioned(
                  bottom: 18,
                  left: 0,
                  right: 0,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _ToolbarDot(active: false, accent: slide.accent, icon: Icons.more_horiz_rounded),
                      const SizedBox(width: 14),
                      _ToolbarDot(active: true, accent: slide.accent, icon: Icons.ios_share_rounded),
                    ],
                  ),
                ),
              ],
              'more' => [
                Positioned(
                  bottom: 22,
                  left: 10,
                  right: 10,
                  child: Container(
                    height: 32,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(9),
                      border: Border.all(color: slide.accent, width: 1.5),
                      color: slide.accent.withValues(alpha: 0.14),
                      boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.35), blurRadius: 10)],
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.more_horiz_rounded, color: slide.accent, size: 16),
                        const SizedBox(width: 4),
                        Text('More', style: TextStyle(color: slide.accent, fontSize: 9, fontWeight: FontWeight.w900)),
                      ],
                    ),
                  ),
                ),
              ],
              'add' => [
                Positioned(
                  bottom: 24,
                  left: 8,
                  right: 8,
                  child: Container(
                    height: 38,
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(9),
                      border: Border.all(color: slide.accent, width: 1.5),
                      color: slide.accent.withValues(alpha: 0.12),
                      boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.4), blurRadius: 12)],
                    ),
                    child: Row(
                      children: [
                        Icon(Icons.add_to_home_screen_rounded, color: slide.accent, size: 18),
                        const SizedBox(width: 6),
                        Expanded(
                          child: Text(
                            'Add to Home Screen',
                            style: TextStyle(color: slide.accent, fontSize: 8.5, fontWeight: FontWeight.w900, height: 1.1),
                            maxLines: 2,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
              _ => const <Widget>[],
            },
          ],
        ),
      ),
    );
  }
}

class _IconBubble extends StatelessWidget {
  const _IconBubble({required this.slide, required this.size, required this.iconSize});

  final _InstallSlide slide;
  final double size;
  final double iconSize;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: LinearGradient(colors: [slide.accent, slide.accent2]),
          boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.55), blurRadius: 12)],
        ),
        child: Icon(slide.icon, color: Colors.white, size: iconSize),
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
      padding: const EdgeInsets.all(5),
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: active ? accent : Colors.white.withValues(alpha: 0.1),
        boxShadow: active ? [BoxShadow(color: accent.withValues(alpha: 0.55), blurRadius: 8)] : null,
        border: active ? null : Border.all(color: Colors.white24),
      ),
      child: Icon(icon, size: 12, color: active ? Colors.white : Colors.white70),
    );
  }
}
