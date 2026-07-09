import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

const String _kNgmyLogoAsset = 'assets/images/ngmy_logo.png';
const String _kNgmyDefaultLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

const double _kOuterSize = 156;
const double _kRingWidth = 5.5;
const double _kAvatarSize = _kOuterSize - (_kRingWidth * 2) - 2;
/// Fixed layout box — animations paint inside here so the login screen never shifts.
const double _kStageSize = 336;
const double _kMaxFingerReach = 186;

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
    final stageCenter = _kStageSize / 2;
    final touching = _pointerDown;
    final strength = touching ? _touchStrength.clamp(0.0, 3.6) : 0.0;

    return SizedBox(
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

              return Stack(
                clipBehavior: Clip.none,
                alignment: Alignment.center,
                children: [
                  CustomPaint(
                    size: const Size(_kStageSize, _kStageSize),
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

  Offset get _center => const Offset(_kStageSize / 2, _kStageSize / 2);

  double get _radius => _kOuterSize / 2 - _kRingWidth / 2;

  @override
  void paint(Canvas canvas, Size size) {
    final center = _center;
    final radius = _radius;
    final ringRect = Rect.fromCircle(center: center, radius: radius);

    _paintIdleGlow(canvas, center, radius);
    _paintIdleSmoke(canvas, center, radius);
    _paintOrbitingSparks(canvas, center, radius);
    _paintIdleOrbitArcs(canvas, center, radius);

    final base = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = _kRingWidth
      ..shader = ui.Gradient.linear(
        ringRect.topLeft,
        ringRect.bottomRight,
        [
          const Color(0xFF1E3A5F),
          Color.lerp(const Color(0xFF2563EB), const Color(0xFF38BDF8), idlePulse * 0.55)!,
          const Color(0xFF1E3A5F),
        ],
      );
    canvas.drawCircle(center, radius, base);

    final idleAngle = -math.pi / 2 + orbitT * math.pi * 2;
    final hasFinger = isTouching && fingerOffset != null;
    final fingerAngle = hasFinger ? math.atan2(fingerOffset!.dy, fingerOffset!.dx) : idleAngle;
    final fingerDist = hasFinger ? fingerOffset!.distance : 0.0;
    final reach = hasFinger ? fingerDist.clamp(radius * 0.55, _kMaxFingerReach) : radius;

    final sweep = isTouching ? 0.85 + touchStrength * 1.5 + ripple * 0.5 : 0.62 + idlePulse * 0.18;
    final highlight = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = _kRingWidth + (isTouching ? 3 + touchStrength * 4 + ripple * 2 : 2.2)
      ..strokeCap = StrokeCap.round
      ..shader = SweepGradient(
        startAngle: fingerAngle - sweep / 2,
        endAngle: fingerAngle + sweep / 2,
        colors: [
          const Color(0xFF2563EB).withValues(alpha: isTouching ? 0.06 : 0.12),
          const Color(0xFF38BDF8).withValues(alpha: isTouching ? 0.55 + touchStrength * 0.35 : 0.72 + idlePulse * 0.2),
          Colors.white.withValues(alpha: isTouching ? 0.96 : 0.88 + idlePulse * 0.1),
          const Color(0xFF38BDF8).withValues(alpha: isTouching ? 0.55 + touchStrength * 0.35 : 0.72 + idlePulse * 0.2),
          const Color(0xFF2563EB).withValues(alpha: isTouching ? 0.06 : 0.12),
        ],
        stops: const [0.0, 0.32, 0.5, 0.68, 1.0],
        transform: GradientRotation(fingerAngle),
      ).createShader(ringRect);
    canvas.drawArc(ringRect, fingerAngle - sweep / 2, sweep, false, highlight);

    if (isTouching) {
      for (var i = 0; i < 3; i++) {
        final r = radius + 14 + ripple * (36 + i * 22) + touchStrength * 28;
        canvas.drawCircle(
          center,
          r,
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2.2 + touchStrength * 0.6
            ..color = const Color(0xFF38BDF8).withValues(alpha: (0.34 - i * 0.09) * touchStrength.clamp(0, 1.3)),
        );
      }
    }

    if (hasFinger && touchStrength > 0.08) {
      final ringPoint = Offset(center.dx + math.cos(fingerAngle) * radius, center.dy + math.sin(fingerAngle) * radius);
      final fingerPoint = Offset(center.dx + math.cos(fingerAngle) * reach, center.dy + math.sin(fingerAngle) * reach);

      final trail = Paint()
        ..shader = ui.Gradient.linear(
          ringPoint,
          fingerPoint,
          [
            const Color(0xFF38BDF8).withValues(alpha: 0.35),
            Colors.white.withValues(alpha: 0.9 + touchStrength * 0.1),
            const Color(0xFF2563EB).withValues(alpha: 0.55),
          ],
        )
        ..strokeWidth = 4 + touchStrength * 3.5
        ..strokeCap = StrokeCap.round;
      canvas.drawLine(ringPoint, fingerPoint, trail);

      final glow = Paint()
        ..color = Colors.white.withValues(alpha: 0.72 + touchStrength * 0.22)
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, 8 + touchStrength * 6);
      canvas.drawCircle(fingerPoint, 12 + touchStrength * 10 + ripple * 8, glow);
      canvas.drawCircle(fingerPoint, 5 + touchStrength * 3.5, Paint()..color = const Color(0xFF38BDF8));
    }

    if (!isTouching) {
      final dot = Offset(center.dx + math.cos(idleAngle) * radius, center.dy + math.sin(idleAngle) * radius);
      _drawBrightSpark(canvas, dot, 7 + idlePulse * 2, 0.95);
    } else {
      final dot = Offset(center.dx + math.cos(fingerAngle) * radius, center.dy + math.sin(fingerAngle) * radius);
      _drawBrightSpark(canvas, dot, 8 + touchStrength * 5, 1.0);
    }

    final innerEdge = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.4
      ..color = Colors.white.withValues(alpha: isDark ? 0.2 : 0.85);
    canvas.drawCircle(center, _kAvatarSize / 2 + 0.5, innerEdge);
  }

  void _paintIdleGlow(Canvas canvas, Offset center, double radius) {
    final glow = 0.22 + idlePulse * 0.18 + (isTouching ? touchStrength * 0.15 : 0);
    final layers = [
      (radius + 18, const Color(0xFF38BDF8), glow * 0.35),
      (radius + 32, const Color(0xFF2563EB), glow * 0.22),
      (radius + 48, const Color(0xFF1E3A5F), glow * 0.12),
    ];
    for (final layer in layers) {
      canvas.drawCircle(
        center,
        layer.$1,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.5
          ..color = layer.$2.withValues(alpha: layer.$3),
      );
    }
  }

  void _paintIdleOrbitArcs(Canvas canvas, Offset center, double radius) {
    for (var i = 0; i < 3; i++) {
      final start = orbitT * math.pi * 2 + i * (math.pi * 2 / 3);
      final arcPaint = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..strokeCap = StrokeCap.round
        ..color = const Color(0xFF38BDF8).withValues(alpha: 0.55 + idlePulse * 0.25);
      canvas.drawArc(
        Rect.fromCircle(center: center, radius: radius + 10 + i * 5),
        start,
        0.55 + idlePulse * 0.15,
        false,
        arcPaint,
      );
    }
  }

  void _paintOrbitingSparks(Canvas canvas, Offset center, double radius) {
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
  }

  void _paintIdleSmoke(Canvas canvas, Offset center, double radius) {
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
      final core = Paint()..color = const Color(0xFF38BDF8).withValues(alpha: alpha);
      canvas.drawCircle(p, 4 + phase * 3, core);
      canvas.drawCircle(
        p,
        9 + phase * 14,
        Paint()
          ..color = const Color(0xFF7DD3FC).withValues(alpha: alpha * 0.55)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4),
      );
    }
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
