import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_home_vote_ads.dart';

/// Full-bleed animated voting advertisement for the home card deck.
/// Styled like the install-guide promo — photo, motion, and campaign copy.
class NgmyHomeVoteAdCard extends StatefulWidget {
  const NgmyHomeVoteAdCard({
    super.key,
    required this.campaign,
    this.isDark = true,
    this.compact = false,
  });

  final NgmyHomeVoteAdCampaign campaign;
  final bool isDark;
  final bool compact;

  @override
  State<NgmyHomeVoteAdCard> createState() => _NgmyHomeVoteAdCardState();
}

class _NgmyHomeVoteAdCardState extends State<NgmyHomeVoteAdCard> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _shimmer;
  late final AnimationController _orbit;
  late final AnimationController _enter;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
    _shimmer = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(seconds: 6))..repeat();
    _enter = AnimationController(vsync: this, duration: const Duration(milliseconds: 700))..forward();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _shimmer.dispose();
    _orbit.dispose();
    _enter.dispose();
    super.dispose();
  }

  ImageProvider? get _photo {
    final u = widget.campaign.photoUrl.trim();
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
    if (u.startsWith('http://') || u.startsWith('https://')) {
      return NetworkImage(u);
    }
    try {
      final bytes = base64Decode(u);
      if (bytes.isEmpty) return null;
      return MemoryImage(Uint8List.fromList(bytes));
    } catch (_) {
      return null;
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.campaign;
    final name = c.candidateName.trim().isEmpty ? 'CANDIDATE' : c.candidateName.trim().toUpperCase();
    final bio = c.bioNote.trim().isEmpty ? 'Cast your vote in Civic Registry Voting.' : c.bioNote.trim();
    final headline = c.headline.trim().isEmpty ? 'VOTE NOW' : c.headline.trim().toUpperCase();
    final photo = _photo;
    final pad = widget.compact ? 10.0 : 14.0;

    return AnimatedBuilder(
      animation: Listenable.merge([_pulse, _shimmer, _orbit, _enter]),
      builder: (context, _) {
        final enter = Curves.easeOutCubic.transform(_enter.value.clamp(0.0, 1.0));
        final breathe = 0.94 + _pulse.value * 0.06;
        final shimmerX = (_shimmer.value * 2.2) - 0.6;
        final orbit = _orbit.value * math.pi * 2;

        return ClipRRect(
          borderRadius: BorderRadius.circular(widget.compact ? 14 : 18),
          child: Stack(
            fit: StackFit.expand,
            children: [
              // Photo / fallback backdrop
              DecoratedBox(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF052E16), Color(0xFF0F172A), Color(0xFF7F1D1D)],
                  ),
                ),
              ),
              if (photo != null)
                Opacity(
                  opacity: 0.55 + enter * 0.45,
                  child: Transform.scale(
                    scale: 1.04 + _pulse.value * 0.03,
                    child: Image(
                      image: photo,
                      fit: BoxFit.cover,
                      width: double.infinity,
                      height: double.infinity,
                      gaplessPlayback: true,
                      errorBuilder: (_, __, ___) => const SizedBox.shrink(),
                    ),
                  ),
                ),
              // Dark cinematic wash so text stays readable
              DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [
                      Colors.black.withValues(alpha: 0.15),
                      Colors.black.withValues(alpha: 0.35),
                      Colors.black.withValues(alpha: 0.82),
                    ],
                    stops: const [0.0, 0.45, 1.0],
                  ),
                ),
              ),
              // Moving shimmer streak
              IgnorePointer(
                child: Transform.translate(
                  offset: Offset(shimmerX * 220, 0),
                  child: Transform.rotate(
                    angle: -0.35,
                    child: Container(
                      width: 70,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            Colors.white.withValues(alpha: 0),
                            Colors.white.withValues(alpha: 0.14),
                            Colors.white.withValues(alpha: 0),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              // Soft orbiting glow
              Positioned(
                right: 18 + math.cos(orbit) * 10,
                top: 18 + math.sin(orbit) * 8,
                child: Container(
                  width: 54,
                  height: 54,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(
                      colors: [
                        const Color(0xFFFACC15).withValues(alpha: 0.35 * breathe),
                        const Color(0xFFFACC15).withValues(alpha: 0),
                      ],
                    ),
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.fromLTRB(pad, pad, pad, pad),
                child: Opacity(
                  opacity: 0.35 + enter * 0.65,
                  child: Transform.translate(
                    offset: Offset(0, 10 * (1 - enter)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            _LiveBadge(pulse: _pulse.value),
                            const Spacer(),
                            _VotePill(label: headline, pulse: _pulse.value),
                          ],
                        ),
                        const Spacer(),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            if (photo != null) ...[
                              Transform.scale(
                                scale: breathe,
                                child: Container(
                                  width: widget.compact ? 56 : 72,
                                  height: widget.compact ? 56 : 72,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    border: Border.all(color: const Color(0xFFFACC15), width: 2.4),
                                    boxShadow: [
                                      BoxShadow(
                                        color: const Color(0xFFFACC15).withValues(alpha: 0.35 * breathe),
                                        blurRadius: 16,
                                      ),
                                    ],
                                    image: DecorationImage(image: photo, fit: BoxFit.cover),
                                  ),
                                ),
                              ),
                              SizedBox(width: widget.compact ? 10 : 12),
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
                                      fontSize: widget.compact ? 16 : 20,
                                      height: 1.05,
                                      letterSpacing: 0.4,
                                      shadows: [
                                        Shadow(
                                          color: const Color(0xFFFACC15).withValues(alpha: 0.35 * breathe),
                                          blurRadius: 12,
                                        ),
                                      ],
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    bio,
                                    maxLines: widget.compact ? 2 : 3,
                                    overflow: TextOverflow.ellipsis,
                                    style: TextStyle(
                                      color: Colors.white.withValues(alpha: 0.9),
                                      fontWeight: FontWeight.w600,
                                      fontSize: widget.compact ? 10.5 : 12,
                                      height: 1.25,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _LiveBadge extends StatelessWidget {
  const _LiveBadge({required this.pulse});
  final double pulse;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
      decoration: BoxDecoration(
        color: Colors.black.withValues(alpha: 0.45),
        borderRadius: BorderRadius.circular(99),
        border: Border.all(color: Colors.white.withValues(alpha: 0.2)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 7,
            height: 7,
            decoration: BoxDecoration(
              color: Color.lerp(const Color(0xFFEF4444), const Color(0xFFFCA5A5), pulse),
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(color: const Color(0xFFEF4444).withValues(alpha: 0.55), blurRadius: 6 + pulse * 4),
              ],
            ),
          ),
          const SizedBox(width: 6),
          const Text(
            'CAMPAIGN AD',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 0.8),
          ),
        ],
      ),
    );
  }
}

class _VotePill extends StatelessWidget {
  const _VotePill({required this.label, required this.pulse});
  final String label;
  final double pulse;

  @override
  Widget build(BuildContext context) {
    return Transform.scale(
      scale: 0.98 + pulse * 0.04,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(99),
          gradient: const LinearGradient(colors: [Color(0xFFFACC15), Color(0xFFF59E0B)]),
          boxShadow: [
            BoxShadow(color: const Color(0xFFFACC15).withValues(alpha: 0.35 + pulse * 0.2), blurRadius: 10),
          ],
        ),
        child: Text(
          label,
          style: const TextStyle(color: Color(0xFF111827), fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.6),
        ),
      ),
    );
  }
}
