import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_home_vote_ads.dart';

ImageProvider? ngmyVoteAdImageProvider(String raw) {
  final u = raw.trim();
  if (u.isEmpty) return null;
  if (u.startsWith('data:image')) {
    final comma = u.indexOf(',');
    if (comma <= 0 || comma >= u.length - 1) return null;
    try {
      return MemoryImage(base64Decode(u.substring(comma + 1)));
    } catch (_) {
      return null;
    }
  }
  if (u.startsWith('http://') || u.startsWith('https://')) return NetworkImage(u);
  try {
    final bytes = base64Decode(u);
    if (bytes.isEmpty) return null;
    return MemoryImage(Uint8List.fromList(bytes));
  } catch (_) {
    return null;
  }
}

/// Home-deck sized (252px) animated voting advertisement.
class NgmyHomeVoteAdCard extends StatefulWidget {
  const NgmyHomeVoteAdCard({
    super.key,
    required this.campaign,
    this.isDark = true,
    this.compact = false,
    this.forceHeight,
  });

  final NgmyHomeVoteAdCampaign campaign;
  final bool isDark;
  final bool compact;
  final double? forceHeight;

  @override
  State<NgmyHomeVoteAdCard> createState() => _NgmyHomeVoteAdCardState();
}

class _NgmyHomeVoteAdCardState extends State<NgmyHomeVoteAdCard> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _shimmer;
  late final AnimationController _orbit;
  late final AnimationController _enter;
  late final AnimationController _marquee;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1700))..repeat(reverse: true);
    _shimmer = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(seconds: 7))..repeat();
    _enter = AnimationController(vsync: this, duration: const Duration(milliseconds: 650))..forward();
    _marquee = AnimationController(vsync: this, duration: const Duration(seconds: 12))..repeat();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _shimmer.dispose();
    _orbit.dispose();
    _enter.dispose();
    _marquee.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final fixed = widget.forceHeight;
    Widget face = AnimatedBuilder(
      animation: Listenable.merge([_pulse, _shimmer, _orbit, _enter, _marquee]),
      builder: (context, _) {
        final c = widget.campaign;
        final style = ngmyVoteAdSlideStyleById(c.slideStyle);
        final accent = c.accent;
        final enter = Curves.easeOutCubic.transform(_enter.value.clamp(0.0, 1.0));
        final breathe = 0.94 + _pulse.value * 0.06;
        final bg = ngmyVoteAdImageProvider(c.effectiveBackground);
        final faceImg = ngmyVoteAdImageProvider(c.photoUrl);
        final name = c.candidateName.trim().isEmpty ? 'CANDIDATE' : c.candidateName.trim().toUpperCase();
        final headline = c.headline.trim().isEmpty ? 'VOTE NOW' : c.headline.trim().toUpperCase();
        final support = c.supportLine.trim().isEmpty
            ? (c.bioNote.trim().isEmpty ? 'Your voice. Your community. Your choice.' : c.bioNote.trim())
            : c.supportLine.trim();
        final cta = c.ctaText.trim().isEmpty ? 'CAST YOUR BALLOT' : c.ctaText.trim().toUpperCase();
        final marquee = c.marqueeText.trim().isEmpty
            ? 'VOTE · SUPPORT THIS CANDIDATE · MAKE YOUR VOICE COUNT ·'
            : c.marqueeText.trim();

        return ClipRRect(
          borderRadius: BorderRadius.circular(fixed != null ? 18 : 0),
          child: Stack(
            fit: StackFit.expand,
            children: [
              _Backdrop(styleId: style.id, accent: accent, bg: bg, pulse: _pulse.value),
              if (bg != null)
                Opacity(
                  opacity: style.id == 'portrait' ? 0.35 : 0.72,
                  child: Transform.scale(
                    scale: 1.05 + _pulse.value * 0.025,
                    child: Image(image: bg, fit: BoxFit.cover, gaplessPlayback: true, errorBuilder: (_, __, ___) => const SizedBox.shrink()),
                  ),
                ),
              _Wash(styleId: style.id),
              if (c.showMarquee)
                Positioned(
                  top: 0,
                  left: 0,
                  right: 0,
                  child: _MarqueeBand(
                    text: marquee,
                    progress: _marquee.value,
                    accent: accent,
                  ),
                ),
              if (style.id == 'rally' || style.id == 'parade')
                Positioned(
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 10,
                  child: ColoredBox(color: accent),
                ),
              if (style.id == 'neon')
                IgnorePointer(
                  child: Container(
                    decoration: BoxDecoration(
                      border: Border.all(color: accent.withValues(alpha: 0.55 + _pulse.value * 0.25), width: 2),
                    ),
                  ),
                ),
              IgnorePointer(
                child: Transform.translate(
                  offset: Offset((_shimmer.value * 2.4 - 0.7) * 240, 0),
                  child: Transform.rotate(
                    angle: -0.4,
                    child: Container(
                      width: 64,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            Colors.white.withValues(alpha: 0),
                            Colors.white.withValues(alpha: 0.12),
                            Colors.white.withValues(alpha: 0),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.fromLTRB(14, c.showMarquee ? 28 : 14, 14, 14),
                child: Opacity(
                  opacity: 0.35 + enter * 0.65,
                  child: Transform.translate(
                    offset: Offset(0, 8 * (1 - enter)),
                    child: _SlideBody(
                      styleId: style.id,
                      name: name,
                      headline: headline,
                      support: support,
                      cta: cta,
                      accent: accent,
                      breathe: breathe,
                      face: faceImg,
                      showCircle: c.showCirclePhoto && faceImg != null,
                      orbit: _orbit.value,
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );

    if (fixed != null) {
      return SizedBox(height: fixed, width: double.infinity, child: face);
    }
    return face;
  }
}

class _Backdrop extends StatelessWidget {
  const _Backdrop({required this.styleId, required this.accent, required this.bg, required this.pulse});
  final String styleId;
  final Color accent;
  final ImageProvider? bg;
  final double pulse;

  @override
  Widget build(BuildContext context) {
    final colors = switch (styleId) {
      'billboard' => const [Color(0xFF7F1D1D), Color(0xFF111827)],
      'ticker' => const [Color(0xFF0C4A6E), Color(0xFF020617)],
      'rally' => const [Color(0xFF7C2D12), Color(0xFF111827)],
      'spotlight' => const [Color(0xFF0A0A0A), Color(0xFF1C1917)],
      'portrait' => const [Color(0xFF1E1B4B), Color(0xFF0F172A)],
      'neon' => const [Color(0xFF090014), Color(0xFF020617)],
      'parade' => const [Color(0xFF064E3B), Color(0xFF111827)],
      'editorial' => const [Color(0xFF1C1917), Color(0xFF292524)],
      'stadium' => const [Color(0xFF1E3A8A), Color(0xFF0F172A)],
      _ => const [Color(0xFF052E16), Color(0xFF0F172A), Color(0xFF7F1D1D)],
    };
    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: colors.length == 2 ? colors : colors,
        ),
      ),
      child: styleId == 'spotlight'
          ? Center(
              child: Container(
                width: 180 + pulse * 20,
                height: 180 + pulse * 20,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(
                    colors: [accent.withValues(alpha: 0.28), Colors.transparent],
                  ),
                ),
              ),
            )
          : null,
    );
  }
}

class _Wash extends StatelessWidget {
  const _Wash({required this.styleId});
  final String styleId;

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: styleId == 'billboard'
              ? [
                  Colors.black.withValues(alpha: 0.05),
                  Colors.black.withValues(alpha: 0.55),
                  Colors.black.withValues(alpha: 0.88),
                ]
              : [
                  Colors.black.withValues(alpha: 0.18),
                  Colors.black.withValues(alpha: 0.4),
                  Colors.black.withValues(alpha: 0.84),
                ],
        ),
      ),
    );
  }
}

class _MarqueeBand extends StatelessWidget {
  const _MarqueeBand({required this.text, required this.progress, required this.accent});
  final String text;
  final double progress;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    final loop = '$text   $text   $text   ';
    return Container(
      height: 22,
      color: Colors.black.withValues(alpha: 0.55),
      child: ClipRect(
        child: Stack(
          children: [
            Positioned(
              left: -progress * 420,
              top: 0,
              bottom: 0,
              child: Row(
                children: [
                  Text(
                    loop,
                    style: TextStyle(
                      color: accent,
                      fontWeight: FontWeight.w900,
                      fontSize: 10,
                      letterSpacing: 1.2,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SlideBody extends StatelessWidget {
  const _SlideBody({
    required this.styleId,
    required this.name,
    required this.headline,
    required this.support,
    required this.cta,
    required this.accent,
    required this.breathe,
    required this.face,
    required this.showCircle,
    required this.orbit,
  });

  final String styleId;
  final String name;
  final String headline;
  final String support;
  final String cta;
  final Color accent;
  final double breathe;
  final ImageProvider? face;
  final bool showCircle;
  final double orbit;

  @override
  Widget build(BuildContext context) {
    if (styleId == 'portrait') {
      return Column(
        children: [
          Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.4)),
          const Spacer(),
          if (showCircle && face != null)
            Transform.scale(
              scale: breathe,
              child: Container(
                width: 86,
                height: 86,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(color: accent, width: 3),
                  boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.4), blurRadius: 18)],
                  image: DecorationImage(image: face!, fit: BoxFit.cover),
                ),
              ),
            ),
          const SizedBox(height: 8),
          Text(name, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
          const SizedBox(height: 4),
          Text(support, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontWeight: FontWeight.w600, fontSize: 11)),
          const Spacer(),
          _CtaChip(label: cta, accent: accent, pulse: breathe),
        ],
      );
    }

    if (styleId == 'billboard') {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 1.6)),
          const Spacer(),
          Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28, height: 0.95, letterSpacing: -0.5)),
          const SizedBox(height: 6),
          Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 12)),
          const SizedBox(height: 10),
          Row(
            children: [
              _CtaChip(label: cta, accent: accent, pulse: breathe),
              const Spacer(),
              if (showCircle && face != null)
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white, width: 2),
                    image: DecorationImage(image: face!, fit: BoxFit.cover),
                  ),
                ),
            ],
          ),
        ],
      );
    }

    // Default / cinematic / rally / neon / etc.
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            _LiveTag(pulse: breathe),
            const Spacer(),
            _CtaChip(label: headline, accent: accent, pulse: breathe),
          ],
        ),
        const Spacer(),
        Row(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            if (showCircle && face != null) ...[
              Transform.translate(
                offset: Offset(math.cos(orbit * math.pi * 2) * 2, math.sin(orbit * math.pi * 2) * 2),
                child: Transform.scale(
                  scale: breathe,
                  child: Container(
                    width: 70,
                    height: 70,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: accent, width: 2.5),
                      boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 14)],
                      image: DecorationImage(image: face!, fit: BoxFit.cover),
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 12),
            ],
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    name,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w900,
                      fontSize: styleId == 'editorial' ? 18 : 20,
                      height: 1.05,
                      letterSpacing: styleId == 'editorial' ? 0.8 : 0.3,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    support,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontWeight: FontWeight.w600, fontSize: 11.5, height: 1.25),
                  ),
                  const SizedBox(height: 8),
                  Text(cta, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.1)),
                ],
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class _LiveTag extends StatelessWidget {
  const _LiveTag({required this.pulse});
  final double pulse;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: Colors.black.withValues(alpha: 0.45),
        borderRadius: BorderRadius.circular(99),
        border: Border.all(color: Colors.white24),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 7,
            height: 7,
            decoration: BoxDecoration(
              color: Color.lerp(const Color(0xFFEF4444), const Color(0xFFFCA5A5), pulse - 0.94),
              shape: BoxShape.circle,
            ),
          ),
          const SizedBox(width: 5),
          const Text('LIVE AD', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 0.8)),
        ],
      ),
    );
  }
}

class _CtaChip extends StatelessWidget {
  const _CtaChip({required this.label, required this.accent, required this.pulse});
  final String label;
  final Color accent;
  final double pulse;

  @override
  Widget build(BuildContext context) {
    return Transform.scale(
      scale: 0.98 + (pulse - 0.94),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(99),
          gradient: LinearGradient(colors: [accent, Color.lerp(accent, Colors.white, 0.25)!]),
          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 10)],
        ),
        child: Text(
          label,
          style: const TextStyle(color: Color(0xFF111827), fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.5),
        ),
      ),
    );
  }
}
