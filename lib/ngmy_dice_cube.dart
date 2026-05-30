import 'dart:math' as math;
import 'package:flutter/material.dart';

/// Polished 3D-style die — single solid face; gentle hang/sway when idle.
class Ngmy3DDiceCube extends StatefulWidget {
  final bool rolling;
  /// When not rolling: show this outcome on the face (+1, +2, +3, −1, −2).
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
  late AnimationController _sway;
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
    _sway = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 2400),
    )..repeat(reverse: true);
    if (widget.rolling) _spin.repeat();
  }

  @override
  void didUpdateWidget(covariant Ngmy3DDiceCube oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.rolling && !_spin.isAnimating) {
      _spin.repeat();
      _sway.stop();
    } else if (!widget.rolling && oldWidget.rolling) {
      _spin.stop();
      _spin.reset();
      if (!_sway.isAnimating) _sway.repeat(reverse: true);
    }
  }

  @override
  void dispose() {
    _spin.dispose();
    _sway.dispose();
    super.dispose();
  }

  static const _outcomes = [1, 2, 3, -1, -2];

  String _label(int v) => v > 0 ? '+$v' : '$v';

  Color _color(int v) => v > 0 ? const Color(0xFF16A34A) : const Color(0xFFDC2626);

  @override
  Widget build(BuildContext context) {
    final s = widget.size;
    final show = widget.rolling
        ? (widget.outcome ?? _outcomes[_flashOutcome % _outcomes.length])
        : widget.outcome;
    final label = show != null ? _label(show) : '?';
    final color = show != null ? _color(show) : Colors.white;
    final t = widget.rolling ? _spin.value * math.pi * 2 : 0.0;
    final sway = widget.rolling ? 0.0 : math.sin(_sway.value * math.pi * 2) * 0.09;

    return SizedBox(
      width: s * 1.35,
      height: s * 1.45,
      child: Stack(
        alignment: Alignment.topCenter,
        clipBehavior: Clip.none,
        children: [
          // Hanging string (fixed at top — die sways below)
          Positioned(
            top: 0,
            child: Container(
              width: 2,
              height: s * 0.14,
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.35),
                borderRadius: BorderRadius.circular(1),
              ),
            ),
          ),
          Positioned(
            top: s * 0.14,
            child: Transform(
              alignment: Alignment.topCenter,
              transform: Matrix4.identity()..rotateZ(sway),
              child: Stack(
                alignment: Alignment.center,
                clipBehavior: Clip.none,
                children: [
                  Positioned(
                    bottom: s * 0.02,
                    child: Container(
                      width: s * 0.92,
                      height: s * 0.18,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(s * 0.5),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.45),
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
                      ..rotateX(widget.rolling ? 0.55 + math.sin(t) * 0.35 : 0.52 + sway * 0.35)
                      ..rotateY(widget.rolling ? t * 1.4 : 0.38),
                    child: Container(
                      width: s,
                      height: s,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(s * 0.2),
                        gradient: const LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [Color(0xFFFFFFFF), Color(0xFFF1F5F9), Color(0xFFCBD5E1)],
                        ),
                        border: Border.all(color: const Color(0xFF94A3B8), width: 2.5),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.28),
                            blurRadius: 14,
                            offset: const Offset(4, 10),
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
            ),
          ),
        ],
      ),
    );
  }
}
