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
  const _Backdrop({required this.styleId, required this.accent, required this.bg, required this.pulse});
  final String styleId;
  final Color accent;
  final ImageProvider? bg;
  final double pulse;

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
    if (styleId == 'editorial' || styleId == 'parade') {
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

  Color get _ink => styleId == 'editorial' || styleId == 'parade' ? const Color(0xFF0F172A) : Colors.white;
  Color get _muted => styleId == 'editorial' || styleId == 'parade'
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
