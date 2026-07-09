import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

const String _kNgmyLogoAsset = 'assets/images/ngmy_logo.png';
const String _kNgmyDefaultLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

const double _kOuterSize = 124;
const double _kRingWidth = 5;
const double _kAvatarSize = _kOuterSize - (_kRingWidth * 2) - 2;
const double _kHitSize = 280;
const double _kMaxFingerReach = 148;

/// Login hero — circular profile NGMY logo with ambient + touch-reactive ring FX.
class NgmyLoginLogoHero extends StatefulWidget {
  final String? logoUrl;

  const NgmyLoginLogoHero({super.key, this.logoUrl});

  @override
  State<NgmyLoginLogoHero> createState() => _NgmyLoginLogoHeroState();
}

class _NgmyLoginLogoHeroState extends State<NgmyLoginLogoHero> with TickerProviderStateMixin {
  late final AnimationController _idlePulse;
  late final AnimationController _orbitSpark;
  late final AnimationController _smokeDrift;
  late final AnimationController _touchRipple;
  Offset? _fingerOffset;
  double _touchStrength = 0;
  bool _pointerDown = false;
  Offset? _pointerDownPos;
  bool _showingPopup = false;

  @override
  void initState() {
    super.initState();
    _idlePulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat(reverse: true);
    _orbitSpark = AnimationController(vsync: this, duration: const Duration(seconds: 9))..repeat();
    _smokeDrift = AnimationController(vsync: this, duration: const Duration(milliseconds: 4200))..repeat();
    _touchRipple = AnimationController(vsync: this, duration: const Duration(milliseconds: 900));
  }

  @override
  void dispose() {
    _idlePulse.dispose();
    _orbitSpark.dispose();
    _smokeDrift.dispose();
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
          'dismissOnTap': true,
        },
      );
    } finally {
      _showingPopup = false;
    }
  }

  void _onPointerDown(PointerDownEvent e) {
    _pointerDown = true;
    _pointerDownPos = e.localPosition;
    _touchRipple.forward(from: 0);
    _applyFinger(e.localPosition);
  }

  void _onPointerMove(PointerMoveEvent e) {
    if (!_pointerDown) return;
    _applyFinger(e.localPosition);
  }

  void _onPointerUp(PointerUpEvent e) {
    final down = _pointerDownPos;
    final wasTap = down != null && (e.localPosition - down).distance < 14;
    _clearFinger();
    if (wasTap) {
      _touchRipple.forward(from: 0);
      _playWelcomePopup();
    }
  }

  void _applyFinger(Offset local) {
    final center = const Offset(_kHitSize / 2, _kHitSize / 2);
    final delta = local - center;
    final dist = delta.distance;
    if (dist < 4) return;

    final reach = (dist / (_kOuterSize / 2)).clamp(0.55, _kMaxFingerReach / (_kOuterSize / 2));
    setState(() {
      _fingerOffset = delta;
      _touchStrength = reach;
    });
  }

  void _clearFinger() {
    setState(() {
      _pointerDown = false;
      _pointerDownPos = null;
      _fingerOffset = null;
      _touchStrength = 0;
    });
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
    final logoCenter = _kHitSize / 2;
    final touching = _pointerDown;
    final strength = touching ? _touchStrength.clamp(0.0, 3.6) : 0.0;

    return Material(
      color: Colors.transparent,
      child: SizedBox(
        width: _kHitSize,
        height: _kHitSize,
        child: Listener(
          behavior: HitTestBehavior.translucent,
          onPointerDown: _onPointerDown,
          onPointerMove: _onPointerMove,
          onPointerUp: _onPointerUp,
          onPointerCancel: (_) => _clearFinger(),
          child: AnimatedBuilder(
            animation: Listenable.merge([_idlePulse, _orbitSpark, _smokeDrift, _touchRipple]),
            builder: (_, __) {
              final ripple = Curves.easeOutCubic.transform(_touchRipple.value);
              final fxStrength = touching ? strength + ripple * 0.25 : 0.0;
              final idleGlow = 0.16 + _idlePulse.value * 0.14;

              return Stack(
                clipBehavior: Clip.none,
                alignment: Alignment.center,
                children: [
                  if (touching)
                    for (var i = 0; i < 3; i++)
                      Positioned(
                        child: Container(
                          width: _kOuterSize + 22 + ripple * (42 + i * 24) + fxStrength * 34,
                          height: _kOuterSize + 22 + ripple * (42 + i * 24) + fxStrength * 34,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            border: Border.all(
                              color: const Color(0xFF38BDF8).withValues(alpha: (0.38 - i * 0.1) * fxStrength.clamp(0, 1.3)),
                              width: 2.4 + fxStrength,
                            ),
                          ),
                        ),
                      ),
                  Positioned(
                    child: Container(
                      width: _kOuterSize + 12 + fxStrength * 22,
                      height: _kOuterSize + 12 + fxStrength * 22,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: const Color(0xFF38BDF8).withValues(alpha: idleGlow + fxStrength * 0.32),
                            blurRadius: 24 + fxStrength * 32 + ripple * 18,
                            spreadRadius: 2 + fxStrength * 8,
                          ),
                          BoxShadow(
                            color: const Color(0xFF2563EB).withValues(alpha: idleGlow * 0.7 + fxStrength * 0.2),
                            blurRadius: 14 + fxStrength * 18,
                            spreadRadius: fxStrength * 2.5,
                          ),
                        ],
                      ),
                    ),
                  ),
                  Positioned(
                    left: logoCenter - _kOuterSize / 2,
                    top: logoCenter - _kOuterSize / 2,
                    child: CustomPaint(
                      size: const Size(_kOuterSize, _kOuterSize),
                      painter: _NgmyReactiveRingPainter(
                        fingerOffset: touching ? _fingerOffset : null,
                        touchStrength: fxStrength,
                        isTouching: touching,
                        idlePulse: _idlePulse.value,
                        orbitT: _orbitSpark.value,
                        smokeT: _smokeDrift.value,
                        ripple: ripple,
                        isDark: isDark,
                      ),
                    ),
                  ),
                  Positioned(
                    left: logoCenter - _kAvatarSize / 2,
                    top: logoCenter - _kAvatarSize / 2,
                    child: _profileLogo(),
                  ),
                ],
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
    required this.fingerOffset,
    required this.touchStrength,
    required this.isTouching,
    required this.idlePulse,
    required this.orbitT,
    required this.smokeT,
    required this.ripple,
    required this.isDark,
  });

  final Offset? fingerOffset;
  final double touchStrength;
  final bool isTouching;
  final double idlePulse;
  final double orbitT;
  final double smokeT;
  final double ripple;
  final bool isDark;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.width / 2 - _kRingWidth / 2;
    final rect = Rect.fromCircle(center: center, radius: radius);

    _paintIdleSmoke(canvas, center, radius);
    _paintOrbitingSparks(canvas, center, radius);

    final base = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = _kRingWidth
      ..shader = ui.Gradient.linear(
        rect.topLeft,
        rect.bottomRight,
        [
          const Color(0xFF1E3A5F),
          Color.lerp(const Color(0xFF2563EB), const Color(0xFF38BDF8), idlePulse * 0.45)!,
          const Color(0xFF1E3A5F),
        ],
      );
    canvas.drawCircle(center, radius, base);

    final idleAngle = -math.pi / 2 + orbitT * math.pi * 2;
    final hasFinger = isTouching && fingerOffset != null;
    final fingerAngle = hasFinger ? math.atan2(fingerOffset!.dy, fingerOffset!.dx) : idleAngle;
    final fingerDist = hasFinger ? fingerOffset!.distance : 0.0;
    final reach = hasFinger ? fingerDist.clamp(radius * 0.55, _kMaxFingerReach) : radius;

    final sweep = isTouching ? 0.85 + touchStrength * 1.5 + ripple * 0.5 : 0.45 + idlePulse * 0.12;
    final highlight = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = _kRingWidth + (isTouching ? 3 + touchStrength * 4 + ripple * 2 : 1.2)
      ..strokeCap = StrokeCap.round
      ..shader = SweepGradient(
        startAngle: fingerAngle - sweep / 2,
        endAngle: fingerAngle + sweep / 2,
        colors: [
          const Color(0xFF2563EB).withValues(alpha: isTouching ? 0.04 : 0.02),
          const Color(0xFF38BDF8).withValues(alpha: isTouching ? 0.5 + touchStrength * 0.35 : 0.25 + idlePulse * 0.15),
          Colors.white.withValues(alpha: isTouching ? 0.94 + touchStrength * 0.06 : 0.55 + idlePulse * 0.2),
          const Color(0xFF38BDF8).withValues(alpha: isTouching ? 0.5 + touchStrength * 0.35 : 0.25 + idlePulse * 0.15),
          const Color(0xFF2563EB).withValues(alpha: isTouching ? 0.04 : 0.02),
        ],
        stops: const [0.0, 0.32, 0.5, 0.68, 1.0],
        transform: GradientRotation(fingerAngle),
      ).createShader(rect);
    canvas.drawArc(rect, fingerAngle - sweep / 2, sweep, false, highlight);

    if (hasFinger && touchStrength > 0.08) {
      final ringPoint = Offset(center.dx + math.cos(fingerAngle) * radius, center.dy + math.sin(fingerAngle) * radius);
      final fingerPoint = Offset(center.dx + math.cos(fingerAngle) * reach, center.dy + math.sin(fingerAngle) * reach);

      final trail = Paint()
        ..shader = ui.Gradient.linear(
          ringPoint,
          fingerPoint,
          [
            const Color(0xFF38BDF8).withValues(alpha: 0.2),
            Colors.white.withValues(alpha: 0.82 + touchStrength * 0.18),
            const Color(0xFF38BDF8).withValues(alpha: 0.45),
          ],
        )
        ..strokeWidth = 3.5 + touchStrength * 3.2
        ..strokeCap = StrokeCap.round;
      canvas.drawLine(ringPoint, fingerPoint, trail);

      final glow = Paint()
        ..color = Colors.white.withValues(alpha: 0.6 + touchStrength * 0.25)
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, 10 + touchStrength * 8);
      canvas.drawCircle(fingerPoint, 10 + touchStrength * 9 + ripple * 8, glow);
      canvas.drawCircle(fingerPoint, 4.5 + touchStrength * 3.5, Paint()..color = const Color(0xFF38BDF8));
    }

    if (!isTouching) {
      final dot = Offset(center.dx + math.cos(idleAngle) * radius, center.dy + math.sin(idleAngle) * radius);
      final dotSize = 3.5 + idlePulse * 1.8;
      canvas.drawCircle(
        dot,
        dotSize + 3,
        Paint()
          ..color = const Color(0xFF38BDF8).withValues(alpha: 0.2 + idlePulse * 0.12)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5),
      );
      canvas.drawCircle(dot, dotSize, Paint()..color = Colors.white.withValues(alpha: 0.7 + idlePulse * 0.15));
    } else {
      final dot = Offset(center.dx + math.cos(fingerAngle) * radius, center.dy + math.sin(fingerAngle) * radius);
      final dotSize = 5 + touchStrength * 5 + idlePulse * 1.5;
      canvas.drawCircle(
        dot,
        dotSize + 5,
        Paint()
          ..color = const Color(0xFF38BDF8).withValues(alpha: 0.3 + touchStrength * 0.25)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 7),
      );
      canvas.drawCircle(dot, dotSize, Paint()..color = Colors.white.withValues(alpha: 0.9));
    }

    final innerEdge = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2
      ..color = Colors.white.withValues(alpha: isDark ? 0.16 : 0.78);
    canvas.drawCircle(center, _kAvatarSize / 2 + 0.5, innerEdge);
  }

  void _paintOrbitingSparks(Canvas canvas, Offset center, double radius) {
    const count = 7;
    for (var i = 0; i < count; i++) {
      final t = orbitT + i / count;
      final angle = t * math.pi * 2;
      final wobble = math.sin((smokeT + i * 0.17) * math.pi * 2) * 3;
      final r = radius + 2 + wobble;
      final p = Offset(center.dx + math.cos(angle) * r, center.dy + math.sin(angle) * r);
      final alpha = 0.35 + math.sin((orbitT + i) * math.pi * 2) * 0.25 + idlePulse * 0.2;
      canvas.drawCircle(
        p,
        2.2 + idlePulse * 1.2,
        Paint()
          ..color = const Color(0xFF38BDF8).withValues(alpha: alpha)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3),
      );
    }
  }

  void _paintIdleSmoke(Canvas canvas, Offset center, double radius) {
    const wisps = 5;
    for (var i = 0; i < wisps; i++) {
      final phase = (smokeT + i * 0.19) % 1.0;
      final angle = (i / wisps) * math.pi * 2 + orbitT * math.pi * 0.6;
      final drift = radius + 8 + phase * 26;
      final p = Offset(
        center.dx + math.cos(angle) * drift,
        center.dy + math.sin(angle) * drift - phase * 18,
      );
      final alpha = (1 - phase) * (0.22 + idlePulse * 0.12);
      canvas.drawCircle(
        p,
        5 + phase * 11,
        Paint()
          ..color = const Color(0xFF93C5FD).withValues(alpha: alpha)
          ..maskFilter = MaskFilter.blur(BlurStyle.normal, 8 + phase * 6),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _NgmyReactiveRingPainter old) {
    return old.fingerOffset != fingerOffset ||
        old.touchStrength != touchStrength ||
        old.isTouching != isTouching ||
        old.idlePulse != idlePulse ||
        old.orbitT != orbitT ||
        old.smokeT != smokeT ||
        old.ripple != ripple ||
        old.isDark != isDark;
  }
}
