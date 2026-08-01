import 'dart:async';

import 'package:flutter/foundation.dart';
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
      step: 1,
      icon: Icons.language_rounded,
      accent: Color(0xFF60A5FA),
      title: 'Open Safari',
      body: 'Visit ngmy.org in Safari on your iPhone.',
      hint: 'Safari only — not Chrome or in-app browsers.',
    ),
    _InstallSlide(
      step: 2,
      icon: Icons.ios_share_rounded,
      accent: Color(0xFF8B5CF6),
      title: 'Tap Share',
      body: 'Tap the Share button at the bottom of Safari.',
      hint: 'It looks like a square with an arrow pointing up.',
    ),
    _InstallSlide(
      step: 3,
      icon: Icons.add_box_outlined,
      accent: Color(0xFF6366F1),
      title: 'Add to Home Screen',
      body: 'Scroll the menu and tap Add to Home Screen.',
      hint: 'You may need to scroll down in the share sheet.',
    ),
    _InstallSlide(
      step: 4,
      icon: Icons.apps_rounded,
      accent: Color(0xFF14B8A6),
      title: 'Tap Add',
      body: 'Confirm Add — NGMY appears on your home screen like an app.',
      hint: 'Open it anytime with one tap, full screen.',
    ),
  ];

  int _index = 0;
  Timer? _timer;
  late final AnimationController _pulse;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat(reverse: true);
    _timer = Timer.periodic(const Duration(milliseconds: 3800), (_) {
      if (!mounted) return;
      setState(() => _index = (_index + 1) % _slides.length);
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final slide = _slides[_index];
    final subColor = widget.isDark ? Colors.white60 : Colors.black54;
    final titleColor = widget.isDark ? Colors.white : const Color(0xFF0F172A);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)]),
                borderRadius: BorderRadius.circular(999),
              ),
              child: const Text(
                'SAVE NGMY LIKE AN APP',
                style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 0.6),
              ),
            ),
            const Spacer(),
            Text(
              'Step ${slide.step}/${_slides.length}',
              style: TextStyle(color: subColor, fontSize: 10, fontWeight: FontWeight.w700),
            ),
          ],
        ),
        const SizedBox(height: 6),
        SizedBox(
          height: 118,
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 520),
            switchInCurve: Curves.easeOutCubic,
            switchOutCurve: Curves.easeInCubic,
            transitionBuilder: (child, anim) {
              final slideIn = Tween<Offset>(begin: const Offset(0.08, 0), end: Offset.zero).animate(anim);
              return FadeTransition(
                opacity: anim,
                child: SlideTransition(position: slideIn, child: child),
              );
            },
            child: KeyedSubtree(
              key: ValueKey<int>(_index),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  _PhoneMockup(slide: slide, pulse: _pulse, isDark: widget.isDark),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          slide.title,
                          style: TextStyle(color: titleColor, fontSize: 15, fontWeight: FontWeight.w900, height: 1.15),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          slide.body,
                          style: TextStyle(color: subColor, fontSize: 11.5, height: 1.35, fontWeight: FontWeight.w500),
                        ),
                        const SizedBox(height: 5),
                        Text(
                          slide.hint,
                          style: TextStyle(
                            color: slide.accent.withValues(alpha: widget.isDark ? 0.95 : 0.85),
                            fontSize: 10,
                            height: 1.3,
                            fontWeight: FontWeight.w600,
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
        const SizedBox(height: 6),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: List.generate(_slides.length, (i) {
            final on = i == _index;
            return AnimatedContainer(
              duration: const Duration(milliseconds: 280),
              margin: const EdgeInsets.symmetric(horizontal: 3),
              width: on ? 18 : 6,
              height: 6,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(999),
                gradient: on ? const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)]) : null,
                color: on ? null : (widget.isDark ? Colors.white24 : Colors.black12),
              ),
            );
          }),
        ),
        if (!kIsWeb) ...[
          const SizedBox(height: 6),
          Text(
            'Open ngmy.org in Safari on your phone to install.',
            textAlign: TextAlign.center,
            style: TextStyle(color: subColor, fontSize: 10, fontWeight: FontWeight.w600),
          ),
        ],
      ],
    );
  }
}

class _InstallSlide {
  const _InstallSlide({
    required this.step,
    required this.icon,
    required this.accent,
    required this.title,
    required this.body,
    required this.hint,
  });
  final int step;
  final IconData icon;
  final Color accent;
  final String title;
  final String body;
  final String hint;
}

class _PhoneMockup extends StatelessWidget {
  const _PhoneMockup({required this.slide, required this.pulse, required this.isDark});

  final _InstallSlide slide;
  final AnimationController pulse;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: pulse,
      builder: (context, _) {
        final glow = 0.35 + pulse.value * 0.25;
        return Container(
          width: 78,
          height: 118,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: isDark ? Colors.white24 : Colors.black12, width: 1.5),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: isDark ? [const Color(0xFF1E293B), const Color(0xFF0F172A)] : [const Color(0xFFF8FAFC), const Color(0xFFE2E8F0)],
            ),
            boxShadow: [
              BoxShadow(color: slide.accent.withValues(alpha: glow), blurRadius: 16, spreadRadius: -2),
            ],
          ),
          child: Stack(
            alignment: Alignment.center,
            children: [
              Positioned(
                top: 6,
                child: Container(
                  width: 28,
                  height: 4,
                  decoration: BoxDecoration(color: isDark ? Colors.white24 : Colors.black12, borderRadius: BorderRadius.circular(999)),
                ),
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: LinearGradient(colors: [slide.accent, slide.accent.withValues(alpha: 0.65)]),
                      boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.45), blurRadius: 10)],
                    ),
                    child: Icon(slide.icon, color: Colors.white, size: 22),
                  ),
                  const SizedBox(height: 8),
                  Container(
                    width: 46,
                    height: 5,
                    decoration: BoxDecoration(
                      color: isDark ? Colors.white12 : Colors.black12,
                      borderRadius: BorderRadius.circular(999),
                    ),
                  ),
                  const SizedBox(height: 4),
                  Container(
                    width: 36,
                    height: 5,
                    decoration: BoxDecoration(
                      color: isDark ? Colors.white10 : Colors.black.withValues(alpha: 0.06),
                      borderRadius: BorderRadius.circular(999),
                    ),
                  ),
                ],
              ),
              if (slide.step == 2)
                Positioned(
                  bottom: 10,
                  child: Container(
                    padding: const EdgeInsets.all(5),
                    decoration: BoxDecoration(
                      color: slide.accent.withValues(alpha: 0.92),
                      borderRadius: BorderRadius.circular(8),
                      boxShadow: [BoxShadow(color: slide.accent.withValues(alpha: 0.5), blurRadius: 8)],
                    ),
                    child: const Icon(Icons.ios_share_rounded, color: Colors.white, size: 14),
                  ),
                ),
              if (slide.step == 4)
                Positioned(
                  bottom: 14,
                  right: 12,
                  child: Container(
                    width: 22,
                    height: 22,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(6),
                      gradient: const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)]),
                    ),
                    child: const Center(child: Text('N', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11))),
                  ),
                ),
            ],
          ),
        );
      },
    );
  }
}
