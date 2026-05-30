import 'dart:math' as math;
import 'package:flutter/material.dart';

/// Polished 3D-style die with rich idle motion before roll.
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
  int _flashOutcome = 1;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 700));
    _spin.addListener(() {
      if (widget.rolling) {
        setState(() => _flashOutcome = 1 + (DateTime.now().millisecond ~/ 120) % 5);
      }
    });
    _idle = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat();
    if (widget.rolling) {
      _spin.repeat();
      _idle.stop();
    }
  }

  @override
  void didUpdateWidget(covariant Ngmy3DDiceCube oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.rolling && !_spin.isAnimating) {
      _spin.repeat();
      _idle.stop();
    } else if (!widget.rolling && oldWidget.rolling) {
      _spin.stop();
      _spin.reset();
      if (!_idle.isAnimating) _idle.repeat();
    }
  }

  @override
  void dispose() {
    _spin.dispose();
    _idle.dispose();
    super.dispose();
  }

  static const _outcomes = [1, 2, 3, -1, -2];

  String _label(int v) => v > 0 ? '+$v' : '$v';

  Color _color(int v) => v > 0 ? const Color(0xFF16A34A) : const Color(0xFFDC2626);

  Widget _orbitSparkle(double s, double angle, double pulse) {
    final r = s * 0.62;
    final x = math.cos(angle) * r;
    final y = math.sin(angle) * r;
    return Transform.translate(
      offset: Offset(x, y),
      child: Container(
        width: 6 + pulse * 4,
        height: 6 + pulse * 4,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Color.lerp(const Color(0xFFA78BFA), const Color(0xFFFBBF24), pulse)!.withValues(alpha: 0.5 + pulse * 0.45),
          boxShadow: [
            BoxShadow(
              color: const Color(0xFF7C3AED).withValues(alpha: 0.55),
              blurRadius: 8 + pulse * 6,
            ),
          ],
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
    final label = show != null ? _label(show) : '?';
    final color = show != null ? _color(show) : Colors.white;
    final t = widget.rolling ? _spin.value * math.pi * 2 : 0.0;
    final idle = _idle.value * math.pi * 2;
    final pulse = widget.rolling ? 0.0 : (math.sin(idle) + 1) * 0.5;
    final swayZ = widget.rolling ? 0.0 : math.sin(idle) * 0.07;
    final wobbleY = widget.rolling ? t * 1.4 : 0.38 + math.sin(idle * 1.3) * 0.22;
    final tiltX = widget.rolling ? 0.55 + math.sin(t) * 0.35 : 0.52 + math.sin(idle * 0.9) * 0.12;
    final breathe = widget.rolling ? 1.0 : 1.0 + math.sin(idle * 1.1) * 0.05;
    final glowSize = s * (1.15 + pulse * 0.12);

    return SizedBox(
      width: s * 1.5,
      height: s * 1.5,
      child: Stack(
        alignment: Alignment.center,
        clipBehavior: Clip.none,
        children: [
          if (!widget.rolling) ...[
            Container(
              width: glowSize,
              height: glowSize,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF7C3AED).withValues(alpha: 0.35 + pulse * 0.25),
                    blurRadius: 28 + pulse * 18,
                    spreadRadius: 4 + pulse * 6,
                  ),
                  BoxShadow(
                    color: const Color(0xFF22D3EE).withValues(alpha: 0.15 + pulse * 0.2),
                    blurRadius: 36 + pulse * 12,
                    spreadRadius: 2,
                  ),
                ],
              ),
            ),
            for (var i = 0; i < 8; i++)
              _orbitSparkle(s, idle + i * math.pi / 4, pulse),
          ],
          Positioned(
            bottom: s * 0.08,
            child: Container(
              width: s * 0.92,
              height: s * 0.18,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(s * 0.5),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: widget.rolling ? 0.35 : 0.45 + pulse * 0.1),
                    blurRadius: s * 0.12,
                    spreadRadius: s * 0.02,
                  ),
                ],
              ),
            ),
          ),
          Transform(
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
                          Color.lerp(const Color(0xFFFFFFFF), const Color(0xFFE9D5FF), pulse * 0.35)!,
                          const Color(0xFFF1F5F9),
                          const Color(0xFFCBD5E1),
                        ],
                ),
                border: Border.all(
                  color: Color.lerp(const Color(0xFF94A3B8), const Color(0xFF7C3AED), pulse * 0.5)!,
                  width: 2.5,
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: 0.28),
                    blurRadius: 14,
                    offset: const Offset(4, 10),
                  ),
                  if (!widget.rolling)
                    BoxShadow(
                      color: const Color(0xFF7C3AED).withValues(alpha: 0.25 + pulse * 0.35),
                      blurRadius: 20 + pulse * 12,
                      spreadRadius: pulse * 2,
                    ),
                  BoxShadow(
                    color: Colors.white.withValues(alpha: 0.85),
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
                            begin: Alignment(-1 + math.cos(idle) * 0.6, -1),
                            end: Alignment(1, 1),
                            colors: [
                              Colors.white.withValues(alpha: 0.0),
                              Colors.white.withValues(alpha: 0.22 + pulse * 0.2),
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
                      width: s * 0.22,
                      height: s * 0.14,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(6),
                        gradient: LinearGradient(
                          colors: [Colors.white.withValues(alpha: 0.9), Colors.white.withValues(alpha: 0.0)],
                        ),
                      ),
                    ),
                  ),
                  Center(
                    child: Text(
                      label,
                      style: TextStyle(
                        fontSize: s * 0.38,
                        fontWeight: FontWeight.w900,
                        color: color,
                        height: 1,
                        shadows: [
                          Shadow(color: Colors.black.withValues(alpha: 0.15), blurRadius: 4, offset: const Offset(0, 2)),
                          if (!widget.rolling)
                            Shadow(
                              color: const Color(0xFF7C3AED).withValues(alpha: 0.35 + pulse * 0.3),
                              blurRadius: 10 + pulse * 8,
                            ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
