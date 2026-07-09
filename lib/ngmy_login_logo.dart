import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

const String _kNgmyLogoAsset = 'assets/images/ngmy_logo.png';
const String _kNgmyDefaultLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

const double _kOuterSize = 124;
const double _kRingWidth = 4.5;
const double _kAvatarSize = _kOuterSize - (_kRingWidth * 2) - 2;

/// Login hero — circular profile-style NGMY logo with touch-reactive ring.
class NgmyLoginLogoHero extends StatefulWidget {
  final String? logoUrl;

  const NgmyLoginLogoHero({super.key, this.logoUrl});

  @override
  State<NgmyLoginLogoHero> createState() => _NgmyLoginLogoHeroState();
}

class _NgmyLoginLogoHeroState extends State<NgmyLoginLogoHero> with TickerProviderStateMixin {
  late final AnimationController _idlePulse;
  late final AnimationController _touchRipple;
  double? _fingerAngle;
  double _touchStrength = 0;
  bool _showingPopup = false;

  @override
  void initState() {
    super.initState();
    _idlePulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat(reverse: true);
    _touchRipple = AnimationController(vsync: this, duration: const Duration(milliseconds: 420));
  }

  @override
  void dispose() {
    _idlePulse.dispose();
    _touchRipple.dispose();
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

  void _updateFinger(Offset local) {
    final center = const Offset(_kOuterSize / 2, _kOuterSize / 2);
    final delta = local - center;
    final dist = delta.distance;
    if (dist < 18) return;
    final angle = math.atan2(delta.dy, delta.dx);
    final onRing = dist > (_kAvatarSize / 2) - 4;
    setState(() {
      _fingerAngle = angle;
      _touchStrength = onRing ? 1.0 : (dist / (_kOuterSize / 2)).clamp(0.45, 0.85);
    });
    if (!_touchRipple.isAnimating) {
      _touchRipple.forward(from: 0);
    }
  }

  void _releaseFinger() {
    setState(() => _touchStrength = 0);
  }

  Widget _profileLogo() {
    Widget image = Image.asset(
      _kNgmyLogoAsset,
      fit: BoxFit.cover,
      alignment: Alignment.center,
      errorBuilder: (_, __, ___) {
        final network = (widget.logoUrl ?? '').trim();
        if (network.isNotEmpty) {
          return Image.network(network, fit: BoxFit.cover, alignment: Alignment.center, gaplessPlayback: true, errorBuilder: (_, __, ___) => _fallbackLogo());
        }
        return Image.network(_kNgmyDefaultLogoUrl, fit: BoxFit.cover, alignment: Alignment.center, errorBuilder: (_, __, ___) => _fallbackLogo());
      },
    );
    return ClipOval(
      child: SizedBox(
        width: _kAvatarSize,
        height: _kAvatarSize,
        child: Transform.scale(scale: 1.18, child: image),
      ),
    );
  }

  Widget _fallbackLogo() {
    return Container(
      color: Colors.white,
      alignment: Alignment.center,
      child: const Text('NGMY', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: Color(0xFF1E3A5F))),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Material(
      color: Colors.transparent,
      child: Listener(
        onPointerDown: (e) => _updateFinger(e.localPosition),
        onPointerMove: (e) => _updateFinger(e.localPosition),
        onPointerUp: (_) => _releaseFinger(),
        onPointerCancel: (_) => _releaseFinger(),
        child: GestureDetector(
          onTap: () {
            _touchRipple.forward(from: 0);
            _playWelcomePopup();
          },
          child: AnimatedBuilder(
            animation: Listenable.merge([_idlePulse, _touchRipple]),
            builder: (_, __) {
              final idleGlow = 0.14 + _idlePulse.value * 0.12;
              final ripple = Curves.easeOut.transform(_touchRipple.value);
              final strength = (_touchStrength + ripple * 0.35).clamp(0.0, 1.0);
              return SizedBox(
                width: _kOuterSize + 16,
                height: _kOuterSize + 16,
                child: Center(
                  child: SizedBox(
                    width: _kOuterSize,
                    height: _kOuterSize,
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        if (strength > 0.05)
                          Container(
                            width: _kOuterSize + 8 + ripple * 10,
                            height: _kOuterSize + 8 + ripple * 10,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              boxShadow: [
                                BoxShadow(
                                  color: const Color(0xFF38BDF8).withValues(alpha: 0.25 + strength * 0.35),
                                  blurRadius: 16 + ripple * 12,
                                  spreadRadius: ripple * 2,
                                ),
                              ],
                            ),
                          ),
                        Container(
                          width: _kOuterSize,
                          height: _kOuterSize,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            boxShadow: [
                              BoxShadow(
                                color: const Color(0xFF2563EB).withValues(alpha: idleGlow + strength * 0.2),
                                blurRadius: 18 + strength * 10,
                                spreadRadius: strength * 1.5,
                              ),
                            ],
                          ),
                        ),
                        CustomPaint(
                          size: const Size(_kOuterSize, _kOuterSize),
                          painter: _NgmyReactiveRingPainter(
                            fingerAngle: _fingerAngle,
                            touchStrength: strength,
                            idlePulse: _idlePulse.value,
                            isDark: isDark,
                          ),
                        ),
                        _profileLogo(),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}

class _NgmyReactiveRingPainter extends CustomPainter {
  const _NgmyReactiveRingPainter({
    required this.fingerAngle,
    required this.touchStrength,
    required this.idlePulse,
    required this.isDark,
  });

  final double? fingerAngle;
  final double touchStrength;
  final double idlePulse;
  final bool isDark;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.width / 2 - _kRingWidth / 2;
    final rect = Rect.fromCircle(center: center, radius: radius);

    final base = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = _kRingWidth
      ..shader = ui.Gradient.linear(
        rect.topLeft,
        rect.bottomRight,
        [
          const Color(0xFF1E3A5F),
          Color.lerp(const Color(0xFF2563EB), const Color(0xFF38BDF8), idlePulse * 0.35)!,
          const Color(0xFF1E3A5F),
        ],
      );
    canvas.drawCircle(center, radius, base);

    final highlightAngle = fingerAngle ?? (-math.pi / 2 + idlePulse * math.pi * 0.08);
    final sweep = 0.55 + touchStrength * 0.85;
    final highlight = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = _kRingWidth + 1.2 + touchStrength * 1.8
      ..strokeCap = StrokeCap.round
      ..shader = SweepGradient(
        startAngle: highlightAngle - sweep / 2,
        endAngle: highlightAngle + sweep / 2,
        colors: [
          const Color(0xFF2563EB).withValues(alpha: 0.05),
          const Color(0xFF38BDF8).withValues(alpha: 0.55 + touchStrength * 0.4),
          Colors.white.withValues(alpha: 0.85 + touchStrength * 0.15),
          const Color(0xFF38BDF8).withValues(alpha: 0.55 + touchStrength * 0.4),
          const Color(0xFF2563EB).withValues(alpha: 0.05),
        ],
        stops: const [0.0, 0.35, 0.5, 0.65, 1.0],
        transform: GradientRotation(highlightAngle),
      ).createShader(rect);
    canvas.drawArc(rect, highlightAngle - sweep / 2, sweep, false, highlight);

    if (touchStrength > 0.08) {
      final dotR = radius;
      final dot = Offset(center.dx + math.cos(highlightAngle) * dotR, center.dy + math.sin(highlightAngle) * dotR);
      canvas.drawCircle(
        dot,
        3.5 + touchStrength * 2.2,
        Paint()
          ..color = Colors.white.withValues(alpha: 0.7 + touchStrength * 0.3)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3),
      );
      canvas.drawCircle(
        dot,
        2 + touchStrength,
        Paint()..color = const Color(0xFF38BDF8),
      );
    }

    final innerEdge = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1
      ..color = (isDark ? Colors.white : Colors.white).withValues(alpha: isDark ? 0.14 : 0.75);
    canvas.drawCircle(center, _kAvatarSize / 2 + 0.5, innerEdge);
  }

  @override
  bool shouldRepaint(covariant _NgmyReactiveRingPainter old) {
    return old.fingerAngle != fingerAngle ||
        old.touchStrength != touchStrength ||
        old.idlePulse != idlePulse ||
        old.isDark != isDark;
  }
}
