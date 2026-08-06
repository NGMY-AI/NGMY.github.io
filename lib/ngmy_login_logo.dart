import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

const String _kNgmyLogoAsset = 'assets/images/ngmy_logo.png';
const String _kNgmyDefaultLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

const double _kOuterSize = 156;
const double _kRingWidth = 5.5;
const double _kAvatarSize = _kOuterSize - (_kRingWidth * 2) - 2;
/// Fixed stage — nothing outside this box affects login layout.
const double _kStageSize = 336;
const double _kMaxFingerReach = 186;

/// Login hero — bright idle aura + classic touch-reactive ring (fixed size).
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
    _orbitSpark = AnimationController(vsync: this, duration: const Duration(seconds: 7))..repeat();
    _smokeDrift = AnimationController(vsync: this, duration: const Duration(milliseconds: 3600))..repeat();
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
    final center = const Offset(_kStageSize / 2, _kStageSize / 2);
    final delta = local - center;
    if (delta.distance < 4) return;
    final reach = (delta.distance / (_kOuterSize / 2)).clamp(0.55, _kMaxFingerReach / (_kOuterSize / 2));
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
    final cacheSize = (_kAvatarSize * MediaQuery.devicePixelRatioOf(context)).ceil();
    Widget image = Image.asset(
      _kNgmyLogoAsset,
      fit: BoxFit.cover,
      alignment: Alignment.center,
      cacheWidth: cacheSize,
      filterQuality: FilterQuality.high,
      errorBuilder: (_, __, ___) {
        final network = (widget.logoUrl ?? '').trim();
        if (network.isNotEmpty) {
          return Image.network(
            network,
            fit: BoxFit.cover,
            alignment: Alignment.center,
            gaplessPlayback: true,
            cacheWidth: cacheSize,
            filterQuality: FilterQuality.high,
            errorBuilder: (_, __, ___) => _fallbackLogo(),
          );
        }
        return Image.network(
          _kNgmyDefaultLogoUrl,
          fit: BoxFit.cover,
          alignment: Alignment.center,
          cacheWidth: cacheSize,
          filterQuality: FilterQuality.high,
          errorBuilder: (_, __, ___) => _fallbackLogo(),
        );
      },
    );
    return ClipOval(
      child: SizedBox(
        width: _kAvatarSize,
        height: _kAvatarSize,
        child: image,
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
    final stageCenter = _kStageSize / 2;
    final touching = _pointerDown;
    final strength = touching ? _touchStrength.clamp(0.0, 3.6) : 0.0;

    return Center(
      child: SizedBox(
        width: _kStageSize,
        height: _kStageSize,
        child: Material(
        color: Colors.transparent,
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
                clipBehavior: Clip.hardEdge,
                alignment: Alignment.center,
                children: [
                  CustomPaint(
                    size: const Size(_kStageSize, _kStageSize),
                    painter: _NgmyIdleAuraPainter(
                      idlePulse: _idlePulse.value,
                      orbitT: _orbitSpark.value,
                      smokeT: _smokeDrift.value,
                      isDark: isDark,
                    ),
                  ),
                  if (touching)
                    for (var i = 0; i < 3; i++)
                      Container(
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
                  if (touching)
                    Container(
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
                  Positioned(
                    left: stageCenter - _kOuterSize / 2,
                    top: stageCenter - _kOuterSize / 2,
                    child: CustomPaint(
                      size: const Size(_kOuterSize, _kOuterSize),
                      painter: _NgmyTouchRingPainter(
                        fingerOffset: touching ? _fingerOffset : null,
                        touchStrength: fxStrength,
                        isTouching: touching,
                        idlePulse: _idlePulse.value,
                        orbitT: _orbitSpark.value,
                        ripple: ripple,
                        isDark: isDark,
                      ),
                    ),
                  ),
                  Positioned(
                    left: stageCenter - _kAvatarSize / 2,
                    top: stageCenter - _kAvatarSize / 2,
                    child: _profileLogo(),
                  ),
                ],
              );
            },
          ),
        ),
      ),
      ),
    );
  }
}

/// Centered title badge under the login logo.
class NgmyLoginTitleFrame extends StatelessWidget {
  const NgmyLoginTitleFrame({super.key, required this.isLogin, required this.isDark});

  final bool isLogin;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final label = isLogin ? 'NGMY' : 'Create Account';
    if (!isLogin) {
      return Text(
        label,
        textAlign: TextAlign.center,
        style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900, letterSpacing: 0.5),
      );
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 11),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isDark
              ? [const Color(0xFF1A1F2E).withValues(alpha: 0.92), const Color(0xFF151922).withValues(alpha: 0.88)]
              : [Colors.white.withValues(alpha: 0.95), const Color(0xFFF5F3FF)],
        ),
        border: Border.all(
          color: isDark ? const Color(0xFF7C3AED).withValues(alpha: 0.55) : const Color(0xFF6200EE).withValues(alpha: 0.38),
          width: 1.6,
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF6200EE).withValues(alpha: isDark ? 0.28 : 0.14),
            blurRadius: 18,
            offset: const Offset(0, 6),
          ),
          BoxShadow(
            color: const Color(0xFF38BDF8).withValues(alpha: isDark ? 0.12 : 0.08),
            blurRadius: 12,
            spreadRadius: -2,
          ),
        ],
      ),
      child: Text(
        label,
        textAlign: TextAlign.center,
        style: TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.w900,
          letterSpacing: 2.2,
          color: isDark ? Colors.white : const Color(0xFF111827),
          shadows: isDark
              ? [Shadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.45), blurRadius: 12)]
              : null,
        ),
      ),
    );
  }
}

class _NgmyIdleAuraPainter extends CustomPainter {
  const _NgmyIdleAuraPainter({
    required this.idlePulse,
    required this.orbitT,
    required this.smokeT,
    required this.isDark,
  });

  final double idlePulse;
  final double orbitT;
  final double smokeT;
  final bool isDark;

  Offset get _center => const Offset(_kStageSize / 2, _kStageSize / 2);

  double get _radius => _kOuterSize / 2 - _kRingWidth / 2;

  @override
  void paint(Canvas canvas, Size size) {
    final center = _center;
    final radius = _radius;
    final glow = 0.22 + idlePulse * 0.18;

    for (final layer in [
      (radius + 18, const Color(0xFF38BDF8), glow * 0.38),
      (radius + 32, const Color(0xFF2563EB), glow * 0.24),
      (radius + 48, const Color(0xFF1E3A5F), glow * 0.14),
    ]) {
      canvas.drawCircle(
        center,
        layer.$1,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.5
          ..color = layer.$2.withValues(alpha: layer.$3),
      );
    }

    for (var i = 0; i < 3; i++) {
      final start = orbitT * math.pi * 2 + i * (math.pi * 2 / 3);
      canvas.drawArc(
        Rect.fromCircle(center: center, radius: radius + 10 + i * 5),
        start,
        0.55 + idlePulse * 0.15,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 3
          ..strokeCap = StrokeCap.round
          ..color = const Color(0xFF38BDF8).withValues(alpha: 0.58 + idlePulse * 0.28),
      );
    }

    const wisps = 7;
    for (var i = 0; i < wisps; i++) {
      final phase = (smokeT + i * 0.14) % 1.0;
      final angle = (i / wisps) * math.pi * 2 + orbitT * math.pi * 0.75;
      final drift = radius + 14 + phase * 34;
      final p = Offset(
        center.dx + math.cos(angle) * drift,
        center.dy + math.sin(angle) * drift - phase * 22,
      );
      final alpha = (1 - phase) * (0.55 + idlePulse * 0.25);
      canvas.drawCircle(p, 4 + phase * 3, Paint()..color = const Color(0xFF38BDF8).withValues(alpha: alpha));
      canvas.drawCircle(
        p,
        9 + phase * 14,
        Paint()
          ..color = const Color(0xFF7DD3FC).withValues(alpha: alpha * 0.55)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4),
      );
    }

    const count = 9;
    for (var i = 0; i < count; i++) {
      final t = orbitT + i / count;
      final angle = t * math.pi * 2;
      final wobble = math.sin((smokeT + i * 0.13) * math.pi * 2) * 4;
      final r = radius + 6 + wobble;
      final p = Offset(center.dx + math.cos(angle) * r, center.dy + math.sin(angle) * r);
      final alpha = 0.65 + math.sin((orbitT + i) * math.pi * 2) * 0.3;
      _drawBrightSpark(canvas, p, 5.5 + idlePulse * 1.5, alpha);
    }

    final idleAngle = -math.pi / 2 + orbitT * math.pi * 2;
    final dot = Offset(center.dx + math.cos(idleAngle) * radius, center.dy + math.sin(idleAngle) * radius);
    _drawBrightSpark(canvas, dot, 7 + idlePulse * 2, 0.95);
  }

  void _drawBrightSpark(Canvas canvas, Offset p, double size, double alpha) {
    canvas.drawCircle(
      p,
      size + 3,
      Paint()
        ..color = const Color(0xFF38BDF8).withValues(alpha: alpha * 0.45)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3),
    );
    canvas.drawCircle(p, size * 0.55, Paint()..color = Colors.white.withValues(alpha: alpha));
    canvas.drawCircle(p, size * 0.35, Paint()..color = const Color(0xFF2563EB).withValues(alpha: alpha));
  }

  @override
  bool shouldRepaint(covariant _NgmyIdleAuraPainter old) {
    return old.idlePulse != idlePulse || old.orbitT != orbitT || old.smokeT != smokeT || old.isDark != isDark;
  }
}

/// Ring + finger trail — classic touch reaction (pre-stabilize style).
class _NgmyTouchRingPainter extends CustomPainter {
  const _NgmyTouchRingPainter({
    required this.fingerOffset,
    required this.touchStrength,
    required this.isTouching,
    required this.idlePulse,
    required this.orbitT,
    required this.ripple,
    required this.isDark,
  });

  final Offset? fingerOffset;
  final double touchStrength;
  final bool isTouching;
  final double idlePulse;
  final double orbitT;
  final double ripple;
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

    if (isTouching) {
      final sweep = 0.85 + touchStrength * 1.5 + ripple * 0.5;
      final highlight = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = _kRingWidth + 3 + touchStrength * 4 + ripple * 2
        ..strokeCap = StrokeCap.round
        ..shader = SweepGradient(
          startAngle: fingerAngle - sweep / 2,
          endAngle: fingerAngle + sweep / 2,
          colors: [
            const Color(0xFF2563EB).withValues(alpha: 0.04),
            const Color(0xFF38BDF8).withValues(alpha: 0.5 + touchStrength * 0.35),
            Colors.white.withValues(alpha: 0.94 + touchStrength * 0.06),
            const Color(0xFF38BDF8).withValues(alpha: 0.5 + touchStrength * 0.35),
            const Color(0xFF2563EB).withValues(alpha: 0.04),
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

      if (hasFinger) {
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
    }

    final innerEdge = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2
      ..color = Colors.white.withValues(alpha: isDark ? 0.16 : 0.78);
    canvas.drawCircle(center, _kAvatarSize / 2 + 0.5, innerEdge);
  }

  @override
  bool shouldRepaint(covariant _NgmyTouchRingPainter old) {
    return old.fingerOffset != fingerOffset ||
        old.touchStrength != touchStrength ||
        old.isTouching != isTouching ||
        old.idlePulse != idlePulse ||
        old.orbitT != orbitT ||
        old.ripple != ripple ||
        old.isDark != isDark;
  }
}
