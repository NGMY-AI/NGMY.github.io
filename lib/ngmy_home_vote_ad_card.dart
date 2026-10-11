import 'dart:math' as math;


import 'package:flutter/material.dart';

import 'ngmy_home_vote_ads.dart';
import 'ngmy_image_memo.dart';

ImageProvider? ngmyVoteAdImageProvider(String raw) {
  final u = raw.trim();
  if (u.isEmpty) return null;
  if (u.startsWith('data:image')) {
    final comma = u.indexOf(',');
    if (comma <= 0 || comma >= u.length - 1) return null;
    try {
      return ngmyMemoImage(u);
    } catch (_) {
      return null;
    }
  }
  if (u.startsWith('http://') || u.startsWith('https://')) return NetworkImage(u);
  return ngmyMemoImage(u);
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
              _Backdrop(styleId: style.id, accent: accent, bg: bg, pulse: _pulse.value, orbit: _orbit.value),
              if (bg != null)
                Opacity(
                  opacity: style.id == 'portrait' ? 0.35 : 0.72,
                  child: Transform.scale(
                    scale: 1.05 + _pulse.value * 0.025,
                    child: Image(image: bg, fit: BoxFit.cover, gaplessPlayback: true, errorBuilder: (_, __, ___) => const SizedBox.shrink()),
                  ),
                ),
              _Wash(styleId: style.id),
              if (c.showMarquee && style.id != 'editorial' && style.id != 'parade')
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
              if (style.id == 'rally')
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
                    margin: const EdgeInsets.all(6),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: accent.withValues(alpha: 0.55 + _pulse.value * 0.25), width: 2),
                    ),
                  ),
                ),
              if (style.id != 'editorial')
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
                              Colors.white.withValues(alpha: style.id == 'neon' ? 0.18 : 0.10),
                              Colors.white.withValues(alpha: 0),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              Padding(
                padding: EdgeInsets.fromLTRB(
                  14,
                  c.showMarquee && style.id != 'editorial' && style.id != 'parade' ? 28 : 14,
                  14,
                  14,
                ),
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
  const _Backdrop({required this.styleId, required this.accent, required this.bg, required this.pulse, this.orbit = 0});
  final String styleId;
  final Color accent;
  final ImageProvider? bg;
  final double pulse;
  final double orbit;

  @override
  Widget build(BuildContext context) {
    switch (styleId) {
      case 'billboard':
        return DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [const Color(0xFF450A0A), accent.withValues(alpha: 0.55), const Color(0xFF0B0F19)],
            ),
          ),
        );
      case 'ticker':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF020617)),
            Positioned(
              right: -40,
              top: -30,
              child: Transform.rotate(
                angle: 0.35,
                child: Container(
                  width: 160,
                  height: 220,
                  color: accent.withValues(alpha: 0.18),
                ),
              ),
            ),
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              height: 54,
              child: ColoredBox(color: accent.withValues(alpha: 0.22)),
            ),
          ],
        );
      case 'rally':
        return Stack(
          fit: StackFit.expand,
          children: [
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [const Color(0xFF431407), accent.withValues(alpha: 0.45), const Color(0xFF111827)],
                ),
              ),
            ),
            Positioned(
              left: -30,
              top: 40,
              child: Transform.rotate(
                angle: -0.55,
                child: Container(width: 280, height: 48, color: Colors.white.withValues(alpha: 0.12)),
              ),
            ),
          ],
        );
      case 'spotlight':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF050505)),
            Center(
              child: Container(
                width: 200 + pulse * 28,
                height: 200 + pulse * 28,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(
                    colors: [accent.withValues(alpha: 0.38), accent.withValues(alpha: 0.08), Colors.transparent],
                  ),
                ),
              ),
            ),
          ],
        );
      case 'portrait':
        return DecoratedBox(
          decoration: BoxDecoration(
            gradient: SweepGradient(
              colors: [
                const Color(0xFF1E1B4B),
                accent.withValues(alpha: 0.55),
                const Color(0xFF0F172A),
                const Color(0xFF1E1B4B),
              ],
            ),
          ),
        );
      case 'neon':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF05010F)),
            Positioned.fill(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: RadialGradient(
                    center: const Alignment(0, -0.2),
                    radius: 1.1,
                    colors: [accent.withValues(alpha: 0.22), Colors.transparent],
                  ),
                ),
              ),
            ),
          ],
        );
      case 'parade':
        return Column(
          children: [
            Expanded(child: ColoredBox(color: accent.withValues(alpha: 0.85))),
            const Expanded(flex: 2, child: ColoredBox(color: Color(0xFF0F172A))),
            Expanded(child: ColoredBox(color: Colors.white.withValues(alpha: 0.92))),
          ],
        );
      case 'editorial':
        return DecoratedBox(
          decoration: BoxDecoration(
            color: const Color(0xFFF5F5F4),
            border: Border.all(color: const Color(0xFF1C1917), width: 3),
          ),
        );
      case 'stadium':
        return Stack(
          fit: StackFit.expand,
          children: [
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [const Color(0xFF1E3A8A), accent.withValues(alpha: 0.35), const Color(0xFF020617)],
                ),
              ),
            ),
            for (final y in [0.22, 0.48, 0.74])
              Positioned(
                left: 12,
                right: 12,
                top: (y * 220).clamp(20, 200),
                child: Container(height: 1, color: Colors.white.withValues(alpha: 0.12)),
              ),
          ],
        );
      case 'ballot':
        return DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [const Color(0xFF0B1F4D), accent.withValues(alpha: 0.35), const Color(0xFF020617)],
            ),
          ),
        );
      case 'hologram':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF00060F)),
            CustomPaint(painter: _ScanlinePainter(accent, orbit)),
          ],
        );
      case 'confetti':
        return Stack(
          fit: StackFit.expand,
          children: [
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  center: const Alignment(0, -0.3),
                  radius: 1.2,
                  colors: [accent.withValues(alpha: 0.55), const Color(0xFF1E0B3D)],
                ),
              ),
            ),
            CustomPaint(painter: _ConfettiPainter(orbit)),
          ],
        );
      case 'patriot':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF0A1A3F)),
            CustomPaint(painter: _FlagWavePainter(accent, orbit)),
          ],
        );
      case 'magazine':
        return const ColoredBox(color: Color(0xFFF4EFE6));
      case 'radar':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF02140E)),
            CustomPaint(painter: _RadarPainter(accent, orbit)),
          ],
        );
      case 'seal':
        return DecoratedBox(
          decoration: BoxDecoration(
            gradient: RadialGradient(radius: 1.1, colors: [const Color(0xFF3A2A06), const Color(0xFF0C0904)]),
          ),
        );
      case 'swiss':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFFF5F5F0)),
            Positioned(right: 0, top: 0, width: 120, height: 120, child: ColoredBox(color: accent)),
            const Positioned(right: 120, top: 0, width: 40, height: 60, child: ColoredBox(color: Color(0xFF111111))),
            Positioned(left: 0, bottom: 0, width: 80, height: 36, child: ColoredBox(color: accent.withValues(alpha: 0.35))),
          ],
        );
      case 'aurora':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF07071A)),
            for (var i = 0; i < 3; i++)
              Align(
                alignment: Alignment(
                  math.cos(orbit * math.pi * 2 + i * 2.1) * 0.9,
                  math.sin(orbit * math.pi * 2 + i * 2.1) * 0.7,
                ),
                child: Container(
                  width: 220,
                  height: 220,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(colors: [
                      [accent, const Color(0xFF22D3EE), const Color(0xFFF472B6)][i].withValues(alpha: 0.55),
                      Colors.transparent,
                    ]),
                  ),
                ),
              ),
          ],
        );
      case 'split':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF0B0B0F)),
            ClipPath(clipper: _DiagonalClipper(), child: ColoredBox(color: accent)),
          ],
        );
      case 'fireworks':
        return Stack(
          fit: StackFit.expand,
          children: [
            const DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xFF020617), Color(0xFF1E1B4B), Color(0xFF312E81)],
                ),
              ),
            ),
            CustomPaint(painter: _FireworksPainter(accent, orbit)),
          ],
        );
      case 'liquid':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF14052B)),
            CustomPaint(painter: _LiquidBlobPainter(accent, orbit)),
          ],
        );
      case 'onair':
        return Stack(
          fit: StackFit.expand,
          children: [
            const DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF0F0A1E), Color(0xFF2A0E2E), Color(0xFF0B0B14)],
                ),
              ),
            ),
            CustomPaint(painter: _EqualizerBgPainter(accent, orbit)),
          ],
        );
      case 'globe':
        return Stack(
          fit: StackFit.expand,
          children: [
            const DecoratedBox(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(0.6, 0),
                  radius: 1.1,
                  colors: [Color(0xFF0C4A6E), Color(0xFF020617)],
                ),
              ),
            ),
            CustomPaint(painter: _TwinkleStarsPainter(orbit)),
          ],
        );
      case 'countdown':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF0C0A09)),
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  center: const Alignment(-0.55, 0.15),
                  radius: 0.9,
                  colors: [accent.withValues(alpha: 0.32 + pulse * 0.12), Colors.transparent],
                ),
              ),
            ),
            CustomPaint(painter: _DashedOrbitsPainter(accent, orbit)),
          ],
        );
      case 'prism':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF07070C)),
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: SweepGradient(
                  center: const Alignment(0.7, -0.6),
                  transform: GradientRotation(orbit * math.pi * 2),
                  colors: [
                    const Color(0xFFF472B6).withValues(alpha: 0.35),
                    const Color(0xFFFACC15).withValues(alpha: 0.25),
                    const Color(0xFF4ADE80).withValues(alpha: 0.25),
                    const Color(0xFF22D3EE).withValues(alpha: 0.35),
                    const Color(0xFFA78BFA).withValues(alpha: 0.35),
                    const Color(0xFFF472B6).withValues(alpha: 0.35),
                  ],
                ),
              ),
            ),
          ],
        );
      case 'sunrise':
        return DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [
                const Color(0xFF1E1B4B),
                Color.lerp(const Color(0xFF7C2D12), const Color(0xFF9D174D), pulse)!,
                const Color(0xFFF97316),
              ],
              stops: const [0, 0.55, 1],
            ),
          ),
        );
      case 'matrix':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF000502)),
            CustomPaint(painter: _DigitalRainPainter(accent, orbit)),
          ],
        );
      case 'ripple':
        return Stack(
          fit: StackFit.expand,
          children: [
            const DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xFF042F2E), Color(0xFF0B3B4F), Color(0xFF020617)],
                ),
              ),
            ),
            CustomPaint(painter: _WaveLinesPainter(accent, orbit)),
          ],
        );
      case 'stage':
        return Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF0A0505)),
            CustomPaint(painter: _StagePainter(accent, orbit)),
          ],
        );
      case 'cinematic':
      default:
        return Stack(
          fit: StackFit.expand,
          children: [
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [const Color(0xFF0B1220), const Color(0xFF111827), accent.withValues(alpha: 0.45)],
                ),
              ),
            ),
            Positioned(top: 0, left: 0, right: 0, height: 18, child: ColoredBox(color: Colors.black.withValues(alpha: 0.55))),
            Positioned(bottom: 0, left: 0, right: 0, height: 28, child: ColoredBox(color: Colors.black.withValues(alpha: 0.7))),
          ],
        );
    }
  }
}

class _Wash extends StatelessWidget {
  const _Wash({required this.styleId});
  final String styleId;

  @override
  Widget build(BuildContext context) {
    if (const {'editorial', 'parade', 'magazine', 'swiss', 'split'}.contains(styleId)) {
      return const SizedBox.shrink();
    }
    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: switch (styleId) {
            'billboard' => [
                Colors.black.withValues(alpha: 0.05),
                Colors.black.withValues(alpha: 0.45),
                Colors.black.withValues(alpha: 0.9),
              ],
            'spotlight' => [
                Colors.black.withValues(alpha: 0.35),
                Colors.black.withValues(alpha: 0.15),
                Colors.black.withValues(alpha: 0.75),
              ],
            'ticker' => [
                Colors.black.withValues(alpha: 0.25),
                Colors.transparent,
                Colors.black.withValues(alpha: 0.55),
              ],
            'fireworks' || 'liquid' || 'onair' || 'globe' || 'countdown' || 'prism' || 'sunrise' || 'matrix' || 'ripple' || 'stage' => [
                Colors.transparent,
                Colors.black.withValues(alpha: 0.05),
                Colors.black.withValues(alpha: 0.35),
              ],
            _ => [
                Colors.black.withValues(alpha: 0.18),
                Colors.black.withValues(alpha: 0.35),
                Colors.black.withValues(alpha: 0.82),
              ],
          },
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

  bool get _lightFace => const {'editorial', 'parade', 'magazine', 'swiss'}.contains(styleId);
  Color get _ink => _lightFace ? const Color(0xFF0F172A) : Colors.white;
  Color get _muted => _lightFace
      ? const Color(0xFF334155)
      : Colors.white.withValues(alpha: 0.9);

  Widget? _face({double size = 70, bool square = false}) {
    if (!showCircle || face == null) return null;
    return Transform.scale(
      scale: breathe,
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(square ? 12 : 999),
          border: Border.all(color: accent, width: 2.5),
          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 14)],
          image: DecorationImage(image: face!, fit: BoxFit.cover),
        ),
      ),
    );
  }

  /// Candidate photo, or a glowing ballot badge when there is none.
  Widget _faceOr(double size, IconData icon, {bool square = false}) {
    return _face(size: size, square: square) ??
        Container(
          width: size,
          height: size,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(square ? 8 : 999),
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(accent, Colors.white, 0.25)!, Color.lerp(accent, Colors.black, 0.35)!]),
            border: Border.all(color: Colors.white.withValues(alpha: 0.7), width: 2),
            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.4), blurRadius: 14)],
          ),
          child: Icon(icon, color: Colors.white, size: size * 0.48),
        );
  }

  @override
  Widget build(BuildContext context) {
    switch (styleId) {
      case 'portrait':
        return Column(
          children: [
            Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.4)),
            const Spacer(),
            if (_face(size: 92) != null) _face(size: 92)!,
            const SizedBox(height: 8),
            Text(name, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 20)),
            const SizedBox(height: 4),
            Text(support, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontWeight: FontWeight.w600, fontSize: 11)),
            const Spacer(),
            _CtaChip(label: cta, accent: accent, pulse: breathe),
          ],
        );

      case 'billboard':
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
              color: accent,
              child: Text(headline, style: const TextStyle(color: Color(0xFF111827), fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.4)),
            ),
            const Spacer(),
            Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 30, height: 0.92, letterSpacing: -0.8)),
            const SizedBox(height: 6),
            Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontWeight: FontWeight.w700, fontSize: 12)),
            const SizedBox(height: 10),
            Row(
              children: [
                _CtaChip(label: cta, accent: accent, pulse: breathe),
                const Spacer(),
                if (_face(size: 52) != null) _face(size: 52)!,
              ],
            ),
          ],
        );

      case 'ticker':
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
                  color: const Color(0xFFEF4444),
                  child: const Text('BREAKING', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 1)),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(headline, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12)),
                ),
              ],
            ),
            const Spacer(),
            Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                if (_face(size: 64, square: true) != null) ...[
                  _face(size: 64, square: true)!,
                  const SizedBox(width: 10),
                ],
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 18)),
                      const SizedBox(height: 4),
                      Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11, fontWeight: FontWeight.w600)),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              color: Colors.black.withValues(alpha: 0.55),
              child: Text(cta, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.1)),
            ),
          ],
        );

      case 'rally':
        return Stack(
          children: [
            Positioned(
              right: -8,
              top: 24,
              child: Transform.rotate(
                angle: -0.2,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  color: accent,
                  child: Text(headline, style: const TextStyle(color: Color(0xFF111827), fontWeight: FontWeight.w900, fontSize: 11)),
                ),
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 36),
                Text('STAND WITH', style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 2)),
                const SizedBox(height: 4),
                Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 26, height: 0.95)),
                const Spacer(),
                Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontWeight: FontWeight.w600, fontSize: 12)),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(child: _CtaChip(label: cta, accent: accent, pulse: breathe)),
                    if (_face(size: 48) != null) ...[const SizedBox(width: 8), _face(size: 48)!],
                  ],
                ),
              ],
            ),
          ],
        );

      case 'spotlight':
        return Column(
          children: [
            Text(headline, textAlign: TextAlign.center, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 2)),
            const Spacer(),
            if (_face(size: 88) != null) _face(size: 88)!,
            const SizedBox(height: 10),
            Text(name, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 22)),
            const SizedBox(height: 6),
            Text(support, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11.5)),
            const Spacer(),
            _CtaChip(label: cta, accent: accent, pulse: breathe),
          ],
        );

      case 'neon':
        return Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: accent.withValues(alpha: 0.7), width: 1.6),
            boxShadow: [
              BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 16),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(Icons.bolt_rounded, color: accent, size: 18),
                  const SizedBox(width: 6),
                  Expanded(child: Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.2))),
                ],
              ),
              const Spacer(),
              Row(
                children: [
                  if (_face(size: 62) != null) ...[_face(size: 62)!, const SizedBox(width: 10)],
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 18, shadows: [Shadow(color: accent, blurRadius: 10)])),
                        const SizedBox(height: 4),
                        Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Align(alignment: Alignment.centerRight, child: _CtaChip(label: cta, accent: accent, pulse: breathe)),
            ],
          ),
        );

      case 'parade':
        return Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(headline, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.5)),
            const Spacer(),
            Row(
              children: [
                if (_face(size: 58) != null) ...[_face(size: 58)!, const SizedBox(width: 10)],
                Expanded(
                  child: Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                ),
              ],
            ),
            const Spacer(),
            Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF0F172A), fontWeight: FontWeight.w700, fontSize: 12)),
            const SizedBox(height: 6),
            Align(
              alignment: Alignment.centerLeft,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                color: const Color(0xFF0F172A),
                child: Text(cta, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1)),
              ),
            ),
          ],
        );

      case 'editorial':
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('THE BALLOT', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 2.2)),
            const SizedBox(height: 4),
            Container(height: 2, width: 42, color: const Color(0xFF1C1917)),
            const SizedBox(height: 8),
            Text(headline, style: const TextStyle(color: Color(0xFF1C1917), fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 0.6)),
            const SizedBox(height: 6),
            Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF0C0A09), fontWeight: FontWeight.w900, fontSize: 22, height: 1.05, letterSpacing: -0.3)),
            const SizedBox(height: 6),
            Expanded(
              child: Text(support, maxLines: 4, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF44403C), fontSize: 11.5, height: 1.35, fontWeight: FontWeight.w600)),
            ),
            Row(
              children: [
                if (_face(size: 44, square: true) != null) ...[_face(size: 44, square: true)!, const SizedBox(width: 8)],
                Expanded(
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                    decoration: BoxDecoration(border: Border.all(color: const Color(0xFF1C1917), width: 1.4)),
                    child: Text(cta, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF1C1917), fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.8)),
                  ),
                ),
              ],
            ),
          ],
        );

      case 'stadium':
        return Column(
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 6),
              decoration: BoxDecoration(
                color: Colors.black.withValues(alpha: 0.45),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: accent.withValues(alpha: 0.5)),
              ),
              child: Text(headline, textAlign: TextAlign.center, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.6)),
            ),
            const Spacer(),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (_face(size: 72) != null) _face(size: 72)!,
              ],
            ),
            const SizedBox(height: 8),
            Text(name, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 20)),
            const SizedBox(height: 4),
            Text(support, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
            const Spacer(),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 8),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [accent, Color.lerp(accent, Colors.white, 0.2)!]),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Text(cta, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF0F172A), fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1)),
            ),
          ],
        );

      case 'ballot':
        // A real-looking paper ballot with the candidate ticked.
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.6)),
            const SizedBox(height: 8),
            Expanded(
              child: Transform.rotate(
                angle: -0.025,
                child: Container(
                  padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFFFDF7),
                    borderRadius: BorderRadius.circular(6),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 14, offset: const Offset(0, 6))],
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('OFFICIAL BALLOT', style: TextStyle(color: Color(0xFF64748B), fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 2)),
                      const Divider(height: 10, color: Color(0xFFCBD5E1)),
                      Row(
                        children: [
                          Container(
                            width: 26,
                            height: 26,
                            decoration: BoxDecoration(border: Border.all(color: const Color(0xFF0F172A), width: 2)),
                            child: Transform.scale(
                              scale: breathe,
                              child: Icon(Icons.check_rounded, color: accent, size: 24),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Text(name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF0F172A), fontWeight: FontWeight.w900, fontSize: 18)),
                          ),
                          if (_face(size: 40, square: true) != null) _face(size: 40, square: true)!,
                        ],
                      ),
                      const SizedBox(height: 6),
                      Expanded(
                        child: Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF475569), fontSize: 11, fontWeight: FontWeight.w600)),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(height: 8),
            Align(alignment: Alignment.centerRight, child: _CtaChip(label: cta, accent: accent, pulse: breathe)),
          ],
        );

      case 'hologram':
        // Robotic HUD: corner brackets, targeting ring around the photo, data readouts.
        return Stack(
          children: [
            Positioned.fill(child: CustomPaint(painter: _HudBracketPainter(accent))),
            Padding(
              padding: const EdgeInsets.all(8),
              child: Row(
                children: [
                  SizedBox(
                    width: 104,
                    height: 104,
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        Transform.rotate(
                          angle: orbit * math.pi * 2,
                          child: CustomPaint(size: const Size.square(104), painter: _TargetRingPainter(accent)),
                        ),
                        if (_face(size: 72) != null)
                          _face(size: 72)!
                        else
                          Icon(Icons.how_to_vote_rounded, color: accent, size: 44),
                      ],
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text('> IDENTITY CONFIRMED', style: TextStyle(color: accent, fontFamily: 'monospace', fontSize: 9.5, fontWeight: FontWeight.w700, letterSpacing: 1)),
                        const SizedBox(height: 4),
                        Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 19, letterSpacing: 1, shadows: [Shadow(color: accent, blurRadius: 12)])),
                        const SizedBox(height: 4),
                        Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent.withValues(alpha: 0.85), fontFamily: 'monospace', fontSize: 10)),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            Expanded(
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(99),
                                child: LinearProgressIndicator(
                                  value: 0.25 + 0.75 * ((orbit * 3) % 1),
                                  minHeight: 4,
                                  color: accent,
                                  backgroundColor: accent.withValues(alpha: 0.15),
                                ),
                              ),
                            ),
                            const SizedBox(width: 6),
                            Text('${(((orbit * 3) % 1) * 100).round()}%', style: TextStyle(color: accent, fontFamily: 'monospace', fontSize: 9)),
                          ],
                        ),
                        const SizedBox(height: 8),
                        _CtaChip(label: cta, accent: accent, pulse: breathe),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        );

      case 'confetti':
        return Column(
          children: [
            Text(headline, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 2)),
            const Spacer(),
            if (_face(size: 80) != null) _face(size: 80)!,
            const SizedBox(height: 8),
            Text(name, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 24, shadows: const [Shadow(color: Colors.black54, blurRadius: 8)])),
            Text(support, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11, fontWeight: FontWeight.w600)),
            const Spacer(),
            _CtaChip(label: cta, accent: accent, pulse: breathe),
          ],
        );

      case 'patriot':
        return Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(children: [
                    for (var i = 0; i < 5; i++) Icon(Icons.star_rounded, size: 14, color: Colors.white.withValues(alpha: 0.9)),
                  ]),
                  const Spacer(),
                  Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.6)),
                  Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 26, height: 0.95)),
                  const SizedBox(height: 4),
                  Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11, fontWeight: FontWeight.w600)),
                  const SizedBox(height: 8),
                  _CtaChip(label: cta, accent: accent, pulse: breathe),
                ],
              ),
            ),
            if (_face(size: 86) != null) ...[const SizedBox(width: 10), _face(size: 86)!],
          ],
        );

      case 'magazine':
        // Cover: giant masthead, big photo, barcode.
        return Stack(
          children: [
            Positioned(
              top: -6,
              left: 0,
              right: 0,
              child: Text(
                'VOTE',
                style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 66, height: 1, letterSpacing: -2),
              ),
            ),
            if (_face(size: 112, square: true) != null)
              Positioned(right: 0, bottom: 26, child: _face(size: 112, square: true)!),
            Positioned(
              left: 0,
              bottom: 26,
              right: 124,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(headline, style: const TextStyle(color: Color(0xFF7F1D1D), fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.4)),
                  Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF0C0A09), fontWeight: FontWeight.w900, fontSize: 20, height: 1)),
                  const SizedBox(height: 4),
                  Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF44403C), fontSize: 10.5, fontWeight: FontWeight.w600)),
                ],
              ),
            ),
            Positioned(
              left: 0,
              bottom: 0,
              child: Row(
                children: [
                  for (var i = 0; i < 22; i++)
                    Container(width: i % 3 == 0 ? 2.4 : 1.2, height: 18, margin: const EdgeInsets.only(right: 1.4), color: const Color(0xFF0C0A09)),
                ],
              ),
            ),
            Positioned(
              right: 0,
              bottom: 0,
              child: Text(cta, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1)),
            ),
          ],
        );

      case 'radar':
        return Row(
          children: [
            SizedBox(
              width: 116,
              height: 116,
              child: Center(
                child: _face(size: 64) ?? Icon(Icons.how_to_vote_rounded, color: accent, size: 40),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('TARGET LOCKED', style: TextStyle(color: accent, fontFamily: 'monospace', fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.6)),
                  const SizedBox(height: 4),
                  Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 20)),
                  Text(headline, style: TextStyle(color: accent.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 11)),
                  const SizedBox(height: 4),
                  Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 10.5)),
                  const SizedBox(height: 8),
                  _CtaChip(label: cta, accent: accent, pulse: breathe),
                ],
              ),
            ),
          ],
        );

      case 'seal':
        return Row(
          children: [
            SizedBox(
              width: 124,
              height: 124,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Transform.rotate(
                    angle: orbit * math.pi * 2,
                    child: CustomPaint(size: const Size.square(124), painter: _SealStarsPainter(accent)),
                  ),
                  Container(
                    width: 92,
                    height: 92,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(colors: [Color.lerp(accent, Colors.white, 0.35)!, accent, Color.lerp(accent, Colors.black, 0.45)!]),
                      boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.5), blurRadius: 18)],
                    ),
                    child: _face(size: 78) ?? const Icon(Icons.verified_rounded, color: Colors.white, size: 46),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('APPROVED BY THE PEOPLE', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 9.5, letterSpacing: 1.4)),
                  const SizedBox(height: 4),
                  Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 21, height: 1)),
                  const SizedBox(height: 4),
                  Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
                  const SizedBox(height: 8),
                  _CtaChip(label: cta, accent: accent, pulse: breathe),
                ],
              ),
            ),
          ],
        );

      case 'swiss':
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(headline, style: const TextStyle(color: Color(0xFF111111), fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 0.4)),
            const Spacer(),
            Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Expanded(
                  child: Text(
                    name,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(color: Color(0xFF111111), fontWeight: FontWeight.w900, fontSize: 32, height: 0.9, letterSpacing: -1.2),
                  ),
                ),
                if (_face(size: 64, square: true) != null) _face(size: 64, square: true)!,
              ],
            ),
            const SizedBox(height: 6),
            Container(height: 3, width: 60, color: accent),
            const SizedBox(height: 6),
            Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF333333), fontSize: 11, fontWeight: FontWeight.w600)),
            const SizedBox(height: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              color: const Color(0xFF111111),
              child: Text(cta, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1)),
            ),
          ],
        );

      case 'aurora':
        return Center(
          child: Container(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.10),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                if (_face(size: 70) != null) ...[_face(size: 70)!, const SizedBox(width: 12)],
                Flexible(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.4)),
                      Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 21)),
                      const SizedBox(height: 4),
                      Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
                      const SizedBox(height: 8),
                      _CtaChip(label: cta, accent: accent, pulse: breathe),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );

      case 'split':
        return Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(headline, style: const TextStyle(color: Color(0xFF0B0B0F), fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.4)),
                  const Spacer(),
                  if (_face(size: 84) != null) _face(size: 84)!,
                  const Spacer(),
                ],
              ),
            ),
            Expanded(
              flex: 2,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  const Spacer(),
                  Text(name, textAlign: TextAlign.right, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 24, height: 0.95)),
                  const SizedBox(height: 4),
                  Text(support, textAlign: TextAlign.right, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
                  const SizedBox(height: 8),
                  _CtaChip(label: cta, accent: accent, pulse: breathe),
                ],
              ),
            ),
          ],
        );

      case 'fireworks':
        return Column(
          children: [
            Text(headline, textAlign: TextAlign.center, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 2.4, shadows: [Shadow(color: accent, blurRadius: 12)])),
            const Spacer(),
            Container(
              padding: const EdgeInsets.all(3),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: SweepGradient(
                  transform: GradientRotation(orbit * math.pi * 4),
                  colors: [accent, Colors.white, accent.withValues(alpha: 0.2), accent],
                ),
                boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.45 * breathe), blurRadius: 22)],
              ),
              child: _faceOr(74, Icons.how_to_vote_rounded),
            ),
            const SizedBox(height: 8),
            ShaderMask(
              shaderCallback: (r) => LinearGradient(colors: [Colors.white, accent, Colors.white], stops: [0, (orbit * 2) % 1, 1]).createShader(r),
              child: Text(name, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 23, letterSpacing: 0.4)),
            ),
            const SizedBox(height: 2),
            Text(support, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11, fontWeight: FontWeight.w600)),
            const Spacer(),
            _CtaChip(label: cta, accent: accent, pulse: breathe),
          ],
        );

      case 'liquid':
        final w1 = 0.5 + 0.5 * math.sin(orbit * math.pi * 2);
        final w2 = 0.5 + 0.5 * math.cos(orbit * math.pi * 2);
        return Center(
          child: Container(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.12),
              borderRadius: BorderRadius.circular(26),
              border: Border.all(color: Colors.white.withValues(alpha: 0.32)),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 20, offset: const Offset(0, 8))],
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Transform.scale(
                  scale: breathe,
                  child: Container(
                    width: 78,
                    height: 78,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(22 + w1 * 26),
                        topRight: Radius.circular(22 + w2 * 26),
                        bottomRight: Radius.circular(48 - w1 * 26),
                        bottomLeft: Radius.circular(48 - w2 * 26),
                      ),
                      border: Border.all(color: Colors.white, width: 2.5),
                      gradient: LinearGradient(colors: [accent, const Color(0xFFA78BFA)]),
                      image: showCircle && face != null ? DecorationImage(image: face!, fit: BoxFit.cover) : null,
                    ),
                    child: showCircle && face != null ? null : const Icon(Icons.how_to_vote_rounded, color: Colors.white, size: 36),
                  ),
                ),
                const SizedBox(width: 12),
                Flexible(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(99)),
                        child: Text(headline, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9.5, letterSpacing: 1.2)),
                      ),
                      const SizedBox(height: 5),
                      Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 21, height: 1.05)),
                      const SizedBox(height: 3),
                      Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 11)),
                      const SizedBox(height: 8),
                      _CtaChip(label: cta, accent: accent, pulse: breathe),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );

      case 'onair':
        final lamp = ((breathe - 0.94) / 0.06).clamp(0.0, 1.0);
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                  decoration: BoxDecoration(
                    color: Color.lerp(const Color(0xFF7F1D1D), accent, lamp),
                    borderRadius: BorderRadius.circular(6),
                    boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.7 * lamp), blurRadius: 16)],
                  ),
                  child: const Text('ON AIR', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 2)),
                ),
                const SizedBox(width: 8),
                Expanded(child: Text(headline, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.4))),
              ],
            ),
            const Spacer(),
            Row(
              children: [
                SizedBox(
                  width: 78,
                  height: 78,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      Transform.rotate(angle: orbit * math.pi * 6, child: CustomPaint(size: const Size.square(78), painter: _VinylRingPainter(accent))),
                      _faceOr(52, Icons.mic_rounded),
                    ],
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 21, height: 1.02)),
                      const SizedBox(height: 4),
                      Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11, fontWeight: FontWeight.w600)),
                    ],
                  ),
                ),
              ],
            ),
            const Spacer(),
            Row(
              children: [
                _CtaChip(label: cta, accent: accent, pulse: breathe),
                const Spacer(),
                Text('VOTE FM 98.6', style: TextStyle(color: accent, fontFamily: 'monospace', fontWeight: FontWeight.w800, fontSize: 9.5, letterSpacing: 1)),
              ],
            ),
            const SizedBox(height: 22),
          ],
        );

      case 'globe':
        return Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(border: Border.all(color: accent.withValues(alpha: 0.7)), borderRadius: BorderRadius.circular(99)),
                    child: Text('NATIONWIDE', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 1.8)),
                  ),
                  const SizedBox(height: 6),
                  Text(headline, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2)),
                  const SizedBox(height: 2),
                  Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 21, height: 1.02)),
                  const SizedBox(height: 4),
                  Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
                  const SizedBox(height: 10),
                  _CtaChip(label: cta, accent: accent, pulse: breathe),
                ],
              ),
            ),
            SizedBox(
              width: 140,
              height: 140,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  CustomPaint(size: const Size.square(140), painter: _GlobePainter(accent, orbit)),
                  _faceOr(58, Icons.how_to_vote_rounded),
                ],
              ),
            ),
          ],
        );

      case 'countdown':
        final ticks = orbit * 70;
        final step = ticks.floor() % 10;
        final frac = ticks % 1;
        Widget digit(String d, {bool flip = false}) => Container(
              width: 20,
              height: 26,
              alignment: Alignment.center,
              margin: const EdgeInsets.only(left: 3),
              decoration: BoxDecoration(
                color: const Color(0xFF1C1917),
                borderRadius: BorderRadius.circular(4),
                border: Border.all(color: accent.withValues(alpha: 0.55)),
              ),
              child: Transform(
                alignment: Alignment.center,
                transform: Matrix4.diagonal3Values(1, flip && frac < 0.18 ? (frac / 0.18).clamp(0.05, 1.0) : 1, 1),
                child: Text(d, style: TextStyle(color: accent, fontFamily: 'monospace', fontWeight: FontWeight.w900, fontSize: 15)),
              ),
            );
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Text('COUNTDOWN', style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontFamily: 'monospace', fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 2)),
                const Spacer(),
                digit('0'),
                digit('0'),
                Padding(padding: const EdgeInsets.only(left: 3), child: Text(':', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 15))),
                digit('0'),
                digit('${9 - step}', flip: true),
              ],
            ),
            const Spacer(),
            Row(
              children: [
                SizedBox(
                  width: 92,
                  height: 92,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      CustomPaint(size: const Size.square(92), painter: _CountdownRingPainter(accent, (step + frac) / 10)),
                      _faceOr(66, Icons.timer_rounded),
                    ],
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(headline, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.4)),
                      const SizedBox(height: 2),
                      Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 21, height: 1.02)),
                      const SizedBox(height: 4),
                      Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
                    ],
                  ),
                ),
              ],
            ),
            const Spacer(),
            Row(
              children: [
                Expanded(
                  child: Row(
                    children: [
                      for (var i = 0; i < 10; i++)
                        Expanded(
                          child: Container(
                            height: 6,
                            margin: const EdgeInsets.only(right: 3),
                            decoration: BoxDecoration(
                              color: i <= step ? accent : Colors.white.withValues(alpha: 0.12),
                              borderRadius: BorderRadius.circular(2),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
                const SizedBox(width: 8),
                _CtaChip(label: cta, accent: accent, pulse: breathe),
              ],
            ),
          ],
        );

      case 'prism':
        const rainbow = [Color(0xFFF472B6), Color(0xFFFACC15), Color(0xFF4ADE80), Color(0xFF22D3EE), Color(0xFFA78BFA), Color(0xFFF472B6)];
        return Center(
          child: Container(
            padding: const EdgeInsets.all(1.8),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(22),
              gradient: SweepGradient(transform: GradientRotation(orbit * math.pi * 2), colors: rainbow),
              boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 20)],
            ),
            child: Container(
              padding: const EdgeInsets.fromLTRB(12, 12, 14, 12),
              decoration: BoxDecoration(color: const Color(0xF20B0B14), borderRadius: BorderRadius.circular(20)),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    padding: const EdgeInsets.all(3),
                    decoration: BoxDecoration(shape: BoxShape.circle, gradient: SweepGradient(transform: GradientRotation(-orbit * math.pi * 4), colors: rainbow)),
                    child: _faceOr(68, Icons.diamond_rounded),
                  ),
                  const SizedBox(width: 12),
                  Flexible(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        ShaderMask(
                          shaderCallback: (r) => LinearGradient(colors: rainbow, transform: GradientRotation(orbit * math.pi * 2)).createShader(r),
                          child: Text(headline, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.6)),
                        ),
                        const SizedBox(height: 2),
                        Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 21, height: 1.02)),
                        const SizedBox(height: 4),
                        Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
                        const SizedBox(height: 8),
                        _CtaChip(label: cta, accent: accent, pulse: breathe),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );

      case 'sunrise':
        return Stack(
          children: [
            Positioned.fill(child: CustomPaint(painter: _SunrisePainter(accent, orbit, breathe))),
            Align(alignment: const Alignment(0.48, 0.18), child: _faceOr(64, Icons.wb_sunny_rounded)),
            Positioned(
              left: 0,
              top: 0,
              bottom: 0,
              width: 180,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('A NEW DAY', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 2.6)),
                  const SizedBox(height: 2),
                  Text(headline, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1)),
                  const SizedBox(height: 8),
                  Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, height: 1, shadows: [Shadow(color: Colors.black38, blurRadius: 8)])),
                  const SizedBox(height: 4),
                  Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 11, fontWeight: FontWeight.w600)),
                  const Spacer(),
                  _CtaChip(label: cta, accent: accent, pulse: breathe),
                ],
              ),
            ),
          ],
        );

      case 'matrix':
        final cursor = ((orbit * 14) % 1) < 0.5;
        return Center(
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.black.withValues(alpha: 0.78),
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: accent.withValues(alpha: 0.65)),
              boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 18)],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('> ${headline.toLowerCase().replaceAll(' ', '_')}${cursor ? '_' : ' '}', style: TextStyle(color: accent, fontFamily: 'monospace', fontWeight: FontWeight.w800, fontSize: 10.5)),
                const SizedBox(height: 8),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: SizedBox(
                        width: 62,
                        height: 62,
                        child: Stack(
                          children: [
                            Positioned.fill(child: _faceOr(62, Icons.terminal_rounded, square: true)),
                            Positioned(
                              left: 0,
                              right: 0,
                              top: ((orbit * 4) % 1) * 62 - 2,
                              child: Container(height: 3, color: accent.withValues(alpha: 0.8)),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Flexible(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('ACCESS GRANTED', style: TextStyle(color: accent.withValues(alpha: 0.8), fontFamily: 'monospace', fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 1.4)),
                          Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, height: 1.05, shadows: [Shadow(color: accent, blurRadius: 10)])),
                          const SizedBox(height: 3),
                          Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent.withValues(alpha: 0.85), fontFamily: 'monospace', fontSize: 9.5)),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                _CtaChip(label: cta, accent: accent, pulse: breathe),
              ],
            ),
          ),
        );

      case 'ripple':
        final pop = Curves.elasticOut.transform((((orbit * 2) % 1).clamp(0.0, 0.6) / 0.6).toDouble());
        return Column(
          children: [
            Text(headline, textAlign: TextAlign.center, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 2)),
            Expanded(
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Positioned.fill(child: CustomPaint(painter: _RipplePainter(accent, orbit))),
                  _faceOr(72, Icons.how_to_vote_rounded),
                  Transform.translate(
                    offset: const Offset(28, 26),
                    child: Transform.scale(
                      scale: pop,
                      child: Container(
                        width: 24,
                        height: 24,
                        decoration: BoxDecoration(color: accent, shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                        child: const Icon(Icons.check_rounded, size: 15, color: Color(0xFF042F2E)),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Text(name, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 21)),
            Text(support, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
            const SizedBox(height: 8),
            _CtaChip(label: cta, accent: accent, pulse: breathe),
          ],
        );

      case 'stage':
        return Column(
          children: [
            Text('LIVE ON STAGE', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 3)),
            const SizedBox(height: 2),
            Text(headline, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2)),
            const Spacer(),
            Container(
              padding: const EdgeInsets.all(3),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: accent,
                boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.6), blurRadius: 26 * breathe)],
              ),
              child: _faceOr(76, Icons.star_rounded),
            ),
            const SizedBox(height: 8),
            Text(name, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 0.4)),
            Text(support, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontSize: 11)),
            const Spacer(),
            _CtaChip(label: cta, accent: accent, pulse: breathe),
          ],
        );

      case 'cinematic':
      default:
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                _LiveTag(pulse: breathe),
                const Spacer(),
                Text('FEATURE', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.4)),
              ],
            ),
            const Spacer(),
            Text(headline, style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.5)),
            const SizedBox(height: 6),
            Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                if (_face(size: 74) != null) ...[
                  Transform.translate(
                    offset: Offset(math.cos(orbit * math.pi * 2) * 2, math.sin(orbit * math.pi * 2) * 2),
                    child: _face(size: 74)!,
                  ),
                  const SizedBox(width: 12),
                ],
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 22, height: 1.02)),
                      const SizedBox(height: 4),
                      Text(support, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: _muted, fontWeight: FontWeight.w600, fontSize: 11.5)),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            Align(alignment: Alignment.centerRight, child: _CtaChip(label: cta, accent: accent, pulse: breathe)),
          ],
        );
    }
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

// ── Painters for the 2026-10 slide styles ──────────────────────────────────

class _ScanlinePainter extends CustomPainter {
  _ScanlinePainter(this.color, this.t);
  final Color color;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final line = Paint()..color = color.withValues(alpha: 0.07);
    for (var y = 0.0; y < s.height; y += 4) {
      canvas.drawRect(Rect.fromLTWH(0, y, s.width, 1), line);
    }
    final grid = Paint()
      ..color = color.withValues(alpha: 0.08)
      ..strokeWidth = 1;
    for (var x = 0.0; x < s.width; x += 28) {
      canvas.drawLine(Offset(x, 0), Offset(x, s.height), grid);
    }
    final sweepY = (t * 3 % 1) * s.height;
    canvas.drawRect(
      Rect.fromLTWH(0, sweepY - 18, s.width, 36),
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [color.withValues(alpha: 0), color.withValues(alpha: 0.22), color.withValues(alpha: 0)],
        ).createShader(Rect.fromLTWH(0, sweepY - 18, s.width, 36)),
    );
  }

  @override
  bool shouldRepaint(covariant _ScanlinePainter old) => old.t != t || old.color != color;
}

class _HudBracketPainter extends CustomPainter {
  _HudBracketPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke;
    const l = 18.0;
    for (final c in [Offset.zero, Offset(s.width, 0), Offset(0, s.height), Offset(s.width, s.height)]) {
      final dx = c.dx == 0 ? l : -l;
      final dy = c.dy == 0 ? l : -l;
      canvas.drawLine(c, c + Offset(dx, 0), p);
      canvas.drawLine(c, c + Offset(0, dy), p);
    }
  }

  @override
  bool shouldRepaint(covariant _HudBracketPainter old) => old.color != color;
}

class _TargetRingPainter extends CustomPainter {
  _TargetRingPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 2;
    final arc = Paint()
      ..color = color
      ..strokeWidth = 2.5
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    for (var i = 0; i < 4; i++) {
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), i * math.pi / 2 + 0.25, math.pi / 2 - 0.5, false, arc);
    }
    final thin = Paint()
      ..color = color.withValues(alpha: 0.4)
      ..strokeWidth = 1
      ..style = PaintingStyle.stroke;
    canvas.drawCircle(c, r - 7, thin);
    for (var i = 0; i < 4; i++) {
      final a = i * math.pi / 2;
      canvas.drawLine(c + Offset(math.cos(a) * (r - 12), math.sin(a) * (r - 12)), c + Offset(math.cos(a) * (r + 2), math.sin(a) * (r + 2)), arc..strokeWidth = 1.5);
    }
  }

  @override
  bool shouldRepaint(covariant _TargetRingPainter old) => old.color != color;
}

class _ConfettiPainter extends CustomPainter {
  _ConfettiPainter(this.t);
  final double t;
  static const _colors = [Color(0xFFFACC15), Color(0xFFF472B6), Color(0xFF22D3EE), Color(0xFF4ADE80), Color(0xFFFB923C), Colors.white];
  @override
  void paint(Canvas canvas, Size s) {
    for (var i = 0; i < 46; i++) {
      final seed = (i * 7919) % 997 / 997.0;
      final x = (seed * s.width + math.sin(t * math.pi * 2 + i) * 12) % s.width;
      final y = ((seed * 1.7 + t * (0.6 + seed)) % 1) * (s.height + 20) - 10;
      canvas.save();
      canvas.translate(x, y);
      canvas.rotate(t * math.pi * 4 * (seed - 0.5) + i);
      canvas.drawRect(const Rect.fromLTWH(-3, -1.6, 6, 3.2), Paint()..color = _colors[i % _colors.length].withValues(alpha: 0.9));
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(covariant _ConfettiPainter old) => old.t != t;
}

class _FlagWavePainter extends CustomPainter {
  _FlagWavePainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    const stripes = 7;
    final h = s.height / stripes;
    for (var i = 0; i < stripes; i++) {
      final path = Path();
      final top = i * h;
      path.moveTo(0, top);
      for (var x = 0.0; x <= s.width; x += 8) {
        path.lineTo(x, top + math.sin(x / 38 + t * math.pi * 2) * 6);
      }
      for (var x = s.width; x >= 0; x -= 8) {
        path.lineTo(x, top + h + math.sin(x / 38 + t * math.pi * 2) * 6);
      }
      path.close();
      canvas.drawPath(path, Paint()..color = (i.isEven ? accent : Colors.white).withValues(alpha: i.isEven ? 0.55 : 0.08));
    }
  }

  @override
  bool shouldRepaint(covariant _FlagWavePainter old) => old.t != t || old.accent != accent;
}

class _RadarPainter extends CustomPainter {
  _RadarPainter(this.color, this.t);
  final Color color;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(72, s.height / 2);
    final ring = Paint()
      ..color = color.withValues(alpha: 0.35)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;
    for (var r = 20.0; r <= 100; r += 20) {
      canvas.drawCircle(c, r, ring);
    }
    canvas.drawLine(c - const Offset(100, 0), c + const Offset(100, 0), ring);
    canvas.drawLine(c - const Offset(0, 100), c + const Offset(0, 100), ring);
    final a = t * math.pi * 2;
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: 100),
      a - 0.9,
      0.9,
      true,
      Paint()
        ..shader = SweepGradient(
          startAngle: a - 0.9,
          endAngle: a,
          colors: [color.withValues(alpha: 0), color.withValues(alpha: 0.45)],
        ).createShader(Rect.fromCircle(center: c, radius: 100)),
    );
  }

  @override
  bool shouldRepaint(covariant _RadarPainter old) => old.t != t || old.color != color;
}

class _SealStarsPainter extends CustomPainter {
  _SealStarsPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 4;
    final dot = Paint()..color = color;
    for (var i = 0; i < 24; i++) {
      final a = i / 24 * math.pi * 2;
      canvas.drawCircle(c + Offset(math.cos(a) * r, math.sin(a) * r), i.isEven ? 3 : 1.6, dot);
    }
    canvas.drawCircle(
      c,
      r - 9,
      Paint()
        ..color = color.withValues(alpha: 0.5)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1,
    );
  }

  @override
  bool shouldRepaint(covariant _SealStarsPainter old) => old.color != color;
}

class _DiagonalClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size s) => Path()
    ..moveTo(0, 0)
    ..lineTo(s.width * 0.48, 0)
    ..lineTo(s.width * 0.32, s.height)
    ..lineTo(0, s.height)
    ..close();

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

// ── Painters for the animated 2026-10 set ──────────────────────────────────

double _vSeed(int i, int salt) => ((i * 7919 + salt * 104729) % 997) / 997.0;

class _FireworksPainter extends CustomPainter {
  _FireworksPainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final colors = [accent, const Color(0xFFF472B6), const Color(0xFF22D3EE), Colors.white, const Color(0xFF4ADE80)];
    for (var k = 0; k < 5; k++) {
      final p = (t * 2.5 + k * 0.2) % 1;
      final cx = s.width * (0.1 + 0.8 * _vSeed(k, 3));
      final cy = s.height * (0.16 + 0.32 * _vSeed(k, 11));
      final col = colors[k % colors.length];
      if (p < 0.22) {
        final q = Curves.easeOut.transform(p / 0.22);
        final y = s.height - (s.height - cy) * q;
        canvas.drawLine(
          Offset(cx, y),
          Offset(cx, y + 16),
          Paint()
            ..strokeWidth = 2
            ..strokeCap = StrokeCap.round
            ..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [col, col.withValues(alpha: 0)]).createShader(Rect.fromLTWH(cx - 1, y, 2, 16)),
        );
        continue;
      }
      final q = (p - 0.22) / 0.78;
      final r = 8 + 64 * Curves.easeOutCubic.transform(q);
      final fade = (1 - q).clamp(0.0, 1.0);
      final c = Offset(cx, cy);
      for (var j = 0; j < 22; j++) {
        final a = j / 22 * math.pi * 2 + k;
        final dir = Offset(math.cos(a), math.sin(a));
        final pos = c + dir * r + Offset(0, q * q * 22);
        final tail = c + dir * (r - 9) + Offset(0, q * q * 18);
        final pc = (j.isEven ? col : colors[(k + 2) % colors.length]).withValues(alpha: fade);
        canvas.drawLine(tail, pos, Paint()
          ..color = pc.withValues(alpha: fade * 0.6)
          ..strokeWidth = 1.4
          ..strokeCap = StrokeCap.round);
        canvas.drawCircle(pos, 0.8 + 1.6 * fade, Paint()..color = pc);
      }
    }
    // City skyline with flickering windows.
    final sky = Paint()..color = const Color(0xFF020617);
    var x = 0.0;
    var i = 0;
    while (x < s.width) {
      final w = 18 + _vSeed(i, 5) * 22;
      final h = 18 + _vSeed(i, 9) * 34;
      canvas.drawRect(Rect.fromLTWH(x, s.height - h, w + 1, h), sky);
      for (var wy = s.height - h + 5; wy < s.height - 4; wy += 7) {
        for (var wx = x + 4; wx < x + w - 3; wx += 6) {
          final on = _vSeed((wx * 3 + wy).round(), (t * 6).floor()) > 0.72;
          if (on) canvas.drawRect(Rect.fromLTWH(wx, wy, 2.4, 3), Paint()..color = accent.withValues(alpha: 0.55));
        }
      }
      x += w + 2;
      i++;
    }
  }

  @override
  bool shouldRepaint(covariant _FireworksPainter old) => old.t != t || old.accent != accent;
}

class _LiquidBlobPainter extends CustomPainter {
  _LiquidBlobPainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final colors = [accent, const Color(0xFF8B5CF6), const Color(0xFF22D3EE), const Color(0xFFFB7185)];
    final tau = math.pi * 2;
    for (var i = 0; i < 4; i++) {
      final c = Offset(
        s.width * (0.15 + 0.25 * i) + math.cos(t * tau + i * 1.3) * s.width * 0.12,
        s.height * 0.5 + math.sin(t * tau + i * 1.7) * s.height * 0.32,
      );
      final base = s.height * (0.42 + 0.06 * i % 0.2);
      final path = Path();
      for (var k = 0; k <= 48; k++) {
        final th = k / 48 * tau;
        final r = base * (1 + 0.14 * math.sin(3 * th + t * tau + i) + 0.08 * math.sin(5 * th - t * tau * 2 + i));
        final p = c + Offset(math.cos(th) * r, math.sin(th) * r);
        if (k == 0) {
          path.moveTo(p.dx, p.dy);
        } else {
          path.lineTo(p.dx, p.dy);
        }
      }
      path.close();
      canvas.drawPath(
        path,
        Paint()
          ..color = colors[i].withValues(alpha: 0.7)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 26),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _LiquidBlobPainter old) => old.t != t || old.accent != accent;
}

class _EqualizerBgPainter extends CustomPainter {
  _EqualizerBgPainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final tau = math.pi * 2;
    const step = 9.0;
    final n = (s.width / step).ceil();
    final rect = Rect.fromLTWH(0, s.height - 70, s.width, 70);
    final shader = LinearGradient(begin: Alignment.bottomCenter, end: Alignment.topCenter, colors: [accent, const Color(0xFFF0ABFC), const Color(0xFF22D3EE)]).createShader(rect);
    final bar = Paint()..shader = shader;
    for (var i = 0; i < n; i++) {
      final v = (math.sin(t * tau * 6 + i * 0.55) * (0.6 + 0.4 * math.sin(t * tau * 10 + i * 1.3))).abs();
      final h = 6 + v * 58;
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(i * step + 1, s.height - h, step - 3, h), const Radius.circular(2)), bar..color = Colors.white.withValues(alpha: 0.35));
    }
    final wave = Path();
    for (var x = 0.0; x <= s.width; x += 3) {
      final y = s.height * 0.42 + math.sin(x / 22 + t * tau * 4) * 10 * math.sin(x / s.width * math.pi);
      if (x == 0) {
        wave.moveTo(x, y);
      } else {
        wave.lineTo(x, y);
      }
    }
    canvas.drawPath(wave, Paint()
      ..color = accent.withValues(alpha: 0.25)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5);
  }

  @override
  bool shouldRepaint(covariant _EqualizerBgPainter old) => old.t != t || old.accent != accent;
}

class _VinylRingPainter extends CustomPainter {
  _VinylRingPainter(this.accent);
  final Color accent;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    canvas.drawCircle(c, r, Paint()..color = const Color(0xFF0A0A0A));
    final groove = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.6
      ..color = Colors.white.withValues(alpha: 0.12);
    for (var rr = r - 3; rr > r * 0.7; rr -= 2.2) {
      canvas.drawCircle(c, rr, groove);
    }
    canvas.drawArc(Rect.fromCircle(center: c, radius: r - 4), -0.6, 0.9, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3
      ..color = Colors.white.withValues(alpha: 0.22));
    canvas.drawCircle(c, r, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5
      ..color = accent.withValues(alpha: 0.8));
  }

  @override
  bool shouldRepaint(covariant _VinylRingPainter old) => old.accent != accent;
}

class _TwinkleStarsPainter extends CustomPainter {
  _TwinkleStarsPainter(this.t);
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    for (var i = 0; i < 60; i++) {
      final p = Offset(_vSeed(i, 1) * s.width, _vSeed(i, 2) * s.height);
      final tw = 0.5 + 0.5 * math.sin(t * math.pi * 2 * 3 + i);
      canvas.drawCircle(p, 0.6 + _vSeed(i, 4) * 1.1, Paint()..color = Colors.white.withValues(alpha: 0.2 + 0.6 * tw));
    }
  }

  @override
  bool shouldRepaint(covariant _TwinkleStarsPainter old) => old.t != t;
}

class _GlobePainter extends CustomPainter {
  _GlobePainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 10;
    final tau = math.pi * 2;
    canvas.drawCircle(c, r + 8, Paint()
      ..color = accent.withValues(alpha: 0.18)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
    canvas.drawCircle(c, r, Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.4), colors: [accent.withValues(alpha: 0.35), const Color(0xFF020617)]).createShader(Rect.fromCircle(center: c, radius: r)));
    final line = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;
    for (var k = -2; k <= 2; k++) {
      final y = c.dy + r * k / 3;
      final hw = math.sqrt(math.max(0, r * r - (y - c.dy) * (y - c.dy)));
      canvas.drawOval(Rect.fromCenter(center: Offset(c.dx, y), width: hw * 2, height: hw * 0.22), line..color = accent.withValues(alpha: 0.3));
    }
    for (var k = 0; k < 6; k++) {
      final a = k / 6 * math.pi + t * tau;
      final w = (r * math.cos(a)).abs() * 2;
      canvas.drawOval(Rect.fromCenter(center: c, width: w, height: r * 2), line..color = accent.withValues(alpha: 0.2 + 0.35 * math.sin(a).abs()));
    }
    canvas.drawCircle(c, r, line..color = accent.withValues(alpha: 0.85));
    // Cities pulse as they rotate into view.
    for (var i = 0; i < 7; i++) {
      final lon = _vSeed(i, 7) * tau + t * tau;
      final lat = (_vSeed(i, 13) - 0.5) * 2.2;
      if (math.cos(lon) <= 0) continue;
      final p = c + Offset(r * math.cos(lat) * math.sin(lon), r * math.sin(lat) * 0.9);
      final pulse = (t * 6 + i * 0.3) % 1;
      canvas.drawCircle(p, 2.2, Paint()..color = Colors.white);
      canvas.drawCircle(p, 2 + pulse * 7, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1
        ..color = accent.withValues(alpha: 1 - pulse));
    }
    // Satellite on a tilted orbit.
    canvas.save();
    canvas.translate(c.dx, c.dy);
    canvas.rotate(-0.4);
    final orbitRect = Rect.fromCenter(center: Offset.zero, width: r * 2 + 18, height: r * 0.7);
    canvas.drawOval(orbitRect, line..color = Colors.white.withValues(alpha: 0.25));
    final sa = t * tau * 2;
    canvas.drawCircle(Offset(math.cos(sa) * orbitRect.width / 2, math.sin(sa) * orbitRect.height / 2), 3, Paint()..color = accent);
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _GlobePainter old) => old.t != t || old.accent != accent;
}

class _DashedOrbitsPainter extends CustomPainter {
  _DashedOrbitsPainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width * 0.22, s.height * 0.58);
    for (var k = 0; k < 3; k++) {
      final r = 70.0 + k * 34;
      final dir = k.isEven ? 1 : -1;
      final p = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.2
        ..color = accent.withValues(alpha: 0.18 - k * 0.04);
      const dashes = 36;
      for (var i = 0; i < dashes; i++) {
        final a = i / dashes * math.pi * 2 + dir * t * math.pi * 2 / (k + 1);
        canvas.drawArc(Rect.fromCircle(center: c, radius: r), a, math.pi / dashes, false, p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DashedOrbitsPainter old) => old.t != t || old.accent != accent;
}

class _CountdownRingPainter extends CustomPainter {
  _CountdownRingPainter(this.accent, this.progress);
  final Color accent;
  final double progress;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 4;
    canvas.drawCircle(c, r, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 5
      ..color = Colors.white.withValues(alpha: 0.08));
    for (var i = 0; i < 60; i++) {
      final a = i / 60 * math.pi * 2;
      final inner = i % 5 == 0 ? r - 9 : r - 6;
      canvas.drawLine(c + Offset(math.cos(a), math.sin(a)) * inner, c + Offset(math.cos(a), math.sin(a)) * (r - 3.5), Paint()
        ..strokeWidth = 1
        ..color = Colors.white.withValues(alpha: 0.18));
    }
    final sweep = progress * math.pi * 2;
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), -math.pi / 2, sweep, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 5
      ..strokeCap = StrokeCap.round
      ..shader = SweepGradient(startAngle: 0, endAngle: math.pi * 2, transform: const GradientRotation(-math.pi / 2), colors: [accent.withValues(alpha: 0.2), accent]).createShader(Rect.fromCircle(center: c, radius: r)));
    final end = c + Offset(math.cos(sweep - math.pi / 2), math.sin(sweep - math.pi / 2)) * r;
    canvas.drawCircle(end, 6, Paint()
      ..color = accent.withValues(alpha: 0.5)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
    canvas.drawCircle(end, 3.5, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _CountdownRingPainter old) => old.progress != progress || old.accent != accent;
}

class _SunrisePainter extends CustomPainter {
  _SunrisePainter(this.accent, this.t, this.breathe);
  final Color accent;
  final double t;
  final double breathe;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width * 0.74, s.height * 0.59);
    final tau = math.pi * 2;
    // Rotating rays.
    canvas.save();
    canvas.translate(c.dx, c.dy);
    canvas.rotate(t * tau / 3);
    final ray = Paint()..color = Colors.white.withValues(alpha: 0.10);
    for (var i = 0; i < 14; i++) {
      final a = i / 14 * tau;
      final path = Path()
        ..moveTo(0, 0)
        ..lineTo(math.cos(a - 0.08) * 220, math.sin(a - 0.08) * 220)
        ..lineTo(math.cos(a + 0.08) * 220, math.sin(a + 0.08) * 220)
        ..close();
      canvas.drawPath(path, ray);
    }
    canvas.restore();
    final sr = 46 * breathe;
    canvas.drawCircle(c, sr + 26, Paint()
      ..color = accent.withValues(alpha: 0.35)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 22));
    canvas.drawCircle(c, sr, Paint()..shader = RadialGradient(colors: [const Color(0xFFFFF7ED), accent, const Color(0xFFF97316)]).createShader(Rect.fromCircle(center: c, radius: sr)));
    // Two layers of hills drifting slowly.
    for (var layer = 0; layer < 2; layer++) {
      final base = s.height * (layer == 0 ? 0.80 : 0.90);
      final amp = layer == 0 ? 16.0 : 10.0;
      final shift = t * tau * (layer == 0 ? 1 : -1);
      final path = Path()..moveTo(0, s.height);
      for (var x = 0.0; x <= s.width; x += 6) {
        path.lineTo(x, base + math.sin(x / (layer == 0 ? 52 : 34) + shift) * amp);
      }
      path
        ..lineTo(s.width, s.height + 20)
        ..lineTo(0, s.height + 20)
        ..close();
      canvas.drawPath(path, Paint()..color = layer == 0 ? const Color(0xE63B0764) : const Color(0xFF1E1B4B));
    }
    // A few birds gliding across.
    final bird = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.4
      ..strokeCap = StrokeCap.round
      ..color = const Color(0xFF1E1B4B);
    for (var i = 0; i < 3; i++) {
      final bx = ((t * 1.5 + i * 0.27) % 1) * (s.width + 40) - 20;
      final by = s.height * (0.22 + i * 0.07) + math.sin(t * tau * 3 + i) * 4;
      final flap = math.sin(t * tau * 18 + i) * 3;
      final path = Path()
        ..moveTo(bx - 6, by - flap)
        ..quadraticBezierTo(bx - 3, by - 3, bx, by)
        ..quadraticBezierTo(bx + 3, by - 3, bx + 6, by - flap);
      canvas.drawPath(path, bird);
    }
  }

  @override
  bool shouldRepaint(covariant _SunrisePainter old) => old.t != t || old.breathe != breathe || old.accent != accent;
}

class _DigitalRainPainter extends CustomPainter {
  _DigitalRainPainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    const col = 13.0;
    final n = (s.width / col).ceil();
    for (var i = 0; i < n; i++) {
      final speed = 0.6 + _vSeed(i, 3) * 0.9;
      final head = ((t * speed * 4 + _vSeed(i, 8)) % 1) * (s.height + 140) - 40;
      for (var j = 0; j < 12; j++) {
        final y = head - j * 10;
        if (y < -8 || y > s.height) continue;
        final a = (1 - j / 12) * 0.75;
        final on = _vSeed(i * 31 + j, (t * 20).floor() + i) > 0.25;
        if (!on) continue;
        final color = j == 0 ? Colors.white.withValues(alpha: 0.9) : accent.withValues(alpha: a);
        final glyph = _vSeed(i * 17 + j, (t * 10).floor()) > 0.5;
        canvas.drawRRect(
          RRect.fromRectAndRadius(Rect.fromLTWH(i * col + 3, y, glyph ? 6 : 3, 7), const Radius.circular(1)),
          Paint()..color = color,
        );
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DigitalRainPainter old) => old.t != t || old.accent != accent;
}

class _WaveLinesPainter extends CustomPainter {
  _WaveLinesPainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final tau = math.pi * 2;
    for (var k = 0; k < 6; k++) {
      final base = s.height * (0.15 + k * 0.15);
      final path = Path();
      for (var x = 0.0; x <= s.width; x += 4) {
        final y = base + math.sin(x / (30 + k * 6) + t * tau * (k.isEven ? 2 : -2) + k) * (5 + k * 1.2);
        if (x == 0) {
          path.moveTo(x, y);
        } else {
          path.lineTo(x, y);
        }
      }
      canvas.drawPath(path, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.2
        ..color = accent.withValues(alpha: 0.10 + k * 0.02));
    }
  }

  @override
  bool shouldRepaint(covariant _WaveLinesPainter old) => old.t != t || old.accent != accent;
}

class _RipplePainter extends CustomPainter {
  _RipplePainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final maxR = math.max(s.width, s.height) * 0.55;
    for (var k = 0; k < 4; k++) {
      final p = (t * 2 + k / 4) % 1;
      final r = 38 + p * (maxR - 38);
      canvas.drawCircle(c, r, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.4 * (1 - p) + 0.4
        ..color = accent.withValues(alpha: (1 - p) * 0.7));
    }
    canvas.drawCircle(c, 44, Paint()
      ..color = accent.withValues(alpha: 0.35)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
  }

  @override
  bool shouldRepaint(covariant _RipplePainter old) => old.t != t || old.accent != accent;
}

class _StagePainter extends CustomPainter {
  _StagePainter(this.accent, this.t);
  final Color accent;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final tau = math.pi * 2;
    // Floor glow.
    final floor = Rect.fromCenter(center: Offset(s.width / 2, s.height * 0.92), width: s.width * 0.9, height: 60);
    canvas.drawOval(floor, Paint()..shader = RadialGradient(colors: [accent.withValues(alpha: 0.45), Colors.transparent]).createShader(floor));
    // Two sweeping spotlight beams.
    for (var k = 0; k < 2; k++) {
      final origin = Offset(k == 0 ? s.width * 0.12 : s.width * 0.88, -6);
      final target = Offset(s.width / 2 + math.sin(t * tau * 2 + k * math.pi) * s.width * 0.22, s.height * 0.95);
      final dir = target - origin;
      final normal = Offset(-dir.dy, dir.dx) / dir.distance;
      final path = Path()
        ..moveTo(origin.dx - normal.dx * 4, origin.dy)
        ..lineTo(target.dx - normal.dx * 46, target.dy - normal.dy * 46)
        ..lineTo(target.dx + normal.dx * 46, target.dy + normal.dy * 46)
        ..lineTo(origin.dx + normal.dx * 4, origin.dy)
        ..close();
      canvas.drawPath(
        path,
        Paint()
          ..shader = LinearGradient(
            begin: Alignment(k == 0 ? -0.8 : 0.8, -1),
            end: Alignment.bottomCenter,
            colors: [Colors.white.withValues(alpha: 0.38), accent.withValues(alpha: 0.10)],
          ).createShader(Offset.zero & s),
      );
    }
    // Swaying curtains.
    for (final left in [true, false]) {
      final sway = math.sin(t * tau + (left ? 0 : 1.5)) * 4;
      final w = 30 + sway;
      final rect = left ? Rect.fromLTWH(0, 0, w, s.height) : Rect.fromLTWH(s.width - w, 0, w, s.height);
      final path = Path()..moveTo(rect.left, 0);
      if (left) {
        path
          ..lineTo(rect.right, 0)
          ..quadraticBezierTo(rect.right - 10, s.height * 0.5, rect.right + 6, s.height)
          ..lineTo(0, s.height);
      } else {
        path
          ..lineTo(s.width, 0)
          ..lineTo(s.width, s.height)
          ..lineTo(rect.left - 6, s.height)
          ..quadraticBezierTo(rect.left + 10, s.height * 0.5, rect.left, 0);
      }
      path.close();
      canvas.drawPath(
        path,
        Paint()
          ..shader = LinearGradient(
            colors: const [Color(0xFF7F1D1D), Color(0xFF450A0A), Color(0xFF991B1B), Color(0xFF450A0A)],
            stops: const [0, 0.35, 0.6, 1],
            tileMode: TileMode.repeated,
          ).createShader(Rect.fromLTWH(rect.left, 0, 12, s.height)),
      );
    }
    // Valance scallops along the top.
    final val = Paint()..color = const Color(0xFF7F1D1D);
    for (var x = 0.0; x < s.width; x += 24) {
      canvas.drawArc(Rect.fromLTWH(x, -12, 24, 24), 0, math.pi, true, val);
    }
  }

  @override
  bool shouldRepaint(covariant _StagePainter old) => old.t != t || old.accent != accent;
}
