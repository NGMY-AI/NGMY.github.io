import 'dart:math' as math;
import 'package:flutter/material.dart';

/// 3D-style die with lively idle reactions before roll.
class Ngmy3DDiceCube extends StatefulWidget {
  final bool rolling;
  final int? outcome;
  final double size;

  const Ngmy3DDiceCube({
    super.key,
    required this.rolling,
    this.outcome,
    this.size = 148,
  });

  @override
  State<Ngmy3DDiceCube> createState() => _Ngmy3DDiceCubeState();
}

class _Ngmy3DDiceCubeState extends State<Ngmy3DDiceCube> with TickerProviderStateMixin {
  late AnimationController _spin;
  late AnimationController _idle;
  late AnimationController _react;
  int _flashOutcome = 1;
  int _hintIndex = 0;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 650));
    _spin.addListener(() {
      if (widget.rolling) {
        setState(() {
          _flashOutcome = 1 + (DateTime.now().millisecond ~/ 90) % 5;
        });
      }
    });
    _idle = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat();
    _react = AnimationController(vsync: this, duration: const Duration(milliseconds: 1100))..repeat();
    _react.addListener(() {
      if (!widget.rolling && widget.outcome == null) {
        final tick = (_react.value * 10).floor();
        if (tick != _hintIndex) setState(() => _hintIndex = tick);
      }
    });
    if (widget.rolling) {
      _spin.repeat();
      _idle.stop();
      _react.stop();
    }
  }

  @override
  void didUpdateWidget(covariant Ngmy3DDiceCube oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.rolling && !_spin.isAnimating) {
      _spin.repeat();
      _idle.stop();
      _react.stop();
    } else if (!widget.rolling && oldWidget.rolling) {
      _spin.stop();
      _spin.reset();
      if (!_idle.isAnimating) _idle.repeat();
      if (!_react.isAnimating) _react.repeat();
    }
  }

  @override
  void dispose() {
    _spin.dispose();
    _idle.dispose();
    _react.dispose();
    super.dispose();
  }

  static const _outcomes = [1, 2, 3, -1, -2];

  String _label(int v) => v > 0 ? '+$v' : '$v';

  Color _color(int v) => v > 0 ? const Color(0xFF16A34A) : const Color(0xFFDC2626);

  Widget _orbitSparkle(double s, double angle, double pulse, int i) {
    final r = s * 0.72;
    final wobble = math.sin(angle * 2 + i) * s * 0.04;
    return Transform.translate(
      offset: Offset(math.cos(angle) * r + wobble, math.sin(angle) * r),
      child: Transform.rotate(
        angle: angle + i,
        child: Container(
          width: 7 + pulse * 5,
          height: 7 + pulse * 5,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: Color.lerp(const Color(0xFFA78BFA), const Color(0xFFFBBF24), (i % 3) / 2.0)!
                .withValues(alpha: 0.55 + pulse * 0.4),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF7C3AED).withValues(alpha: 0.7),
                blurRadius: 10 + pulse * 8,
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final s = widget.size;
    final show = widget.rolling
        ? (widget.outcome ?? _outcomes[_flashOutcome % _outcomes.length])
        : widget.outcome;
    final idleHint = !widget.rolling && show == null ? _outcomes[_hintIndex % _outcomes.length] : null;
    final label = show != null ? _label(show) : (idleHint != null ? _label(idleHint) : '?');
    final color = show != null
        ? _color(show)
        : (idleHint != null ? _color(idleHint).withValues(alpha: 0.45) : Colors.white);
    final t = widget.rolling ? _spin.value * math.pi * 2 : 0.0;
    final idle = _idle.value * math.pi * 2;
    final react = _react.value * math.pi * 2;
    final pulse = widget.rolling ? 0.0 : (math.sin(idle) + 1) * 0.5;
    final pop = widget.rolling ? 0.0 : (math.sin(react) + 1) * 0.5;
    final swayZ = widget.rolling ? math.sin(t) * 0.12 : math.sin(idle) * 0.11 + math.sin(react * 2) * 0.05;
    final bobY = widget.rolling ? 0.0 : math.sin(idle * 1.6) * s * 0.045;
    final wobbleY = widget.rolling ? t * 2.2 : 0.38 + math.sin(idle * 1.3) * 0.28 + math.sin(react * 1.7) * 0.12;
    final tiltX = widget.rolling ? 0.55 + math.sin(t) * 0.42 : 0.52 + math.sin(idle * 0.9) * 0.14 + math.sin(react) * 0.08;
    final breathe = widget.rolling ? 1.0 + math.sin(t * 2) * 0.06 : 1.0 + math.sin(idle * 1.1) * 0.07 + pop * 0.06;
    final orbitAngle = idle * 0.9 + react * 1.4;
    final glowSize = s * (1.2 + pulse * 0.15 + pop * 0.08);
    final box = s * 1.55;

    return SizedBox(
      width: box,
      height: box,
      child: Stack(
        alignment: Alignment.center,
        clipBehavior: Clip.none,
        children: [
          if (!widget.rolling) ...[
            Transform.scale(
              scale: 1.0 + pop * 0.08,
              child: Container(
                width: glowSize,
                height: glowSize,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFF7C3AED).withValues(alpha: 0.4 + pulse * 0.3),
                      blurRadius: 32 + pulse * 22,
                      spreadRadius: 6 + pulse * 8,
                    ),
                    BoxShadow(
                      color: const Color(0xFF22D3EE).withValues(alpha: 0.2 + pop * 0.25),
                      blurRadius: 40 + pop * 16,
                      spreadRadius: 3,
                    ),
                  ],
                ),
              ),
            ),
            for (var i = 0; i < 12; i++) _orbitSparkle(s, orbitAngle + i * math.pi / 6, pulse, i),
          ],
          Transform.translate(
            offset: Offset(0, bobY + s * 0.06),
            child: Container(
              width: s * 0.92,
              height: s * 0.16,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(s * 0.5),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: 0.4 + pulse * 0.15),
                    blurRadius: s * 0.14,
                    spreadRadius: s * 0.02,
                  ),
                ],
              ),
            ),
          ),
          Transform.translate(
            offset: Offset(0, bobY),
            child: Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.0025)
                ..rotateZ(swayZ)
                ..scale(breathe)
                ..rotateX(tiltX)
                ..rotateY(wobbleY),
              child: Container(
                width: s,
                height: s,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(s * 0.2),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: widget.rolling
                        ? const [Color(0xFFFFFFFF), Color(0xFFF1F5F9), Color(0xFFCBD5E1)]
                        : [
                            Color.lerp(const Color(0xFFFFFFFF), const Color(0xFFE9D5FF), pulse * 0.45)!,
                            const Color(0xFFF1F5F9),
                            const Color(0xFFCBD5E1),
                          ],
                  ),
                  border: Border.all(
                    color: Color.lerp(const Color(0xFF94A3B8), const Color(0xFF7C3AED), pulse * 0.65)!,
                    width: 3,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: 0.3),
                      blurRadius: 16,
                      offset: const Offset(4, 12),
                    ),
                    if (!widget.rolling)
                      BoxShadow(
                        color: const Color(0xFF7C3AED).withValues(alpha: 0.3 + pulse * 0.4),
                        blurRadius: 24 + pop * 16,
                        spreadRadius: pop * 3,
                      ),
                    BoxShadow(
                      color: Colors.white.withValues(alpha: 0.9),
                      blurRadius: 0,
                      offset: const Offset(-2, -2),
                    ),
                  ],
                ),
                child: Stack(
                  children: [
                    if (!widget.rolling)
                      Positioned.fill(
                        child: DecoratedBox(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(s * 0.2),
                            gradient: LinearGradient(
                              begin: Alignment(-1 + math.cos(orbitAngle) * 0.8, -1),
                              end: Alignment(1, 1),
                              colors: [
                                Colors.white.withValues(alpha: 0.0),
                                Colors.white.withValues(alpha: 0.28 + pop * 0.25),
                                Colors.white.withValues(alpha: 0.0),
                              ],
                            ),
                          ),
                        ),
                      ),
                    Positioned(
                      top: s * 0.06,
                      left: s * 0.08,
                      child: Container(
                        width: s * 0.24,
                        height: s * 0.15,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(6),
                          gradient: LinearGradient(
                            colors: [Colors.white.withValues(alpha: 0.95), Colors.white.withValues(alpha: 0.0)],
                          ),
                        ),
                      ),
                    ),
                    Center(
                      child: AnimatedScale(
                        scale: widget.rolling ? 1.0 : 0.92 + pop * 0.14,
                        duration: const Duration(milliseconds: 120),
                        child: Text(
                          label,
                          style: TextStyle(
                            fontSize: s * 0.4,
                            fontWeight: FontWeight.w900,
                            color: color,
                            height: 1,
                            shadows: [
                              Shadow(color: Colors.black.withValues(alpha: 0.18), blurRadius: 5, offset: const Offset(0, 2)),
                              if (!widget.rolling)
                                Shadow(
                                  color: const Color(0xFF7C3AED).withValues(alpha: 0.4 + pulse * 0.35),
                                  blurRadius: 12 + pop * 10,
                                ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
