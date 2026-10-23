import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_service_texture.dart';

/// Colours of one 3D tile: a lit top, a darker bottom, a solid edge underneath and a glow.
class NgmyTileColors {
  const NgmyTileColors(this.top, this.bottom, this.edge, this.glow);
  final Color top;
  final Color bottom;
  final Color edge;
  final Color glow;

  static NgmyTileColors of(NgmyServiceLook? look) {
    switch (look) {
      case NgmyServiceLook.house:
        return const NgmyTileColors(Color(0xFF7A3A0C), Color(0xFF2A1406), Color(0xFF140A03), Color(0xFFFF8A1F));
      case NgmyServiceLook.money:
        return const NgmyTileColors(Color(0xFF0E6B45), Color(0xFF062A1B), Color(0xFF03150E), Color(0xFF22E07A));
      case NgmyServiceLook.moving:
        return const NgmyTileColors(Color(0xFF14568F), Color(0xFF0A2140), Color(0xFF05101F), Color(0xFF38BDF8));
      case NgmyServiceLook.general:
        return const NgmyTileColors(Color(0xFF55309A), Color(0xFF1E1040), Color(0xFF0E0821), Color(0xFFA78BFA));
      case null:
        return const NgmyTileColors(Color(0xFF1D5E78), Color(0xFF0A2230), Color(0xFF05111A), Color(0xFF22D3EE));
    }
  }
}

/// A raised, glossy card: it floats gently, sinks and tilts when pressed, and glows when chosen.
class NgmyTile3D extends StatefulWidget {
  const NgmyTile3D({
    super.key,
    required this.colors,
    required this.float,
    required this.phase,
    required this.selected,
    required this.onTap,
    required this.child,
  });

  final NgmyTileColors colors;

  /// A repeating 0..1 value shared by every tile; [phase] offsets each tile so they bob in turn.
  final Animation<double> float;
  final double phase;
  final bool selected;
  final VoidCallback onTap;
  final Widget child;

  @override
  State<NgmyTile3D> createState() => _NgmyTile3DState();
}

class _NgmyTile3DState extends State<NgmyTile3D> {
  bool _down = false;

  @override
  Widget build(BuildContext context) {
    final c = widget.colors;
    const radius = 20.0;
    return AnimatedBuilder(
      animation: widget.float,
      builder: (context, child) {
        final bob = math.sin((widget.float.value + widget.phase) * math.pi * 2) * 1.6;
        return Transform.translate(offset: Offset(0, _down ? 0 : bob), child: child);
      },
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => setState(() => _down = true),
        onTapCancel: () => setState(() => _down = false),
        onTapUp: (_) => setState(() => _down = false),
        onTap: () {
          HapticFeedback.selectionClick();
          widget.onTap();
        },
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 140),
          curve: Curves.easeOut,
          transformAlignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.0012)
            ..rotateX(_down ? 0.09 : 0)
            ..translate(0.0, _down ? 4.0 : 0.0, 0.0)
            ..scale(_down ? 0.975 : (widget.selected ? 1.02 : 1.0)),
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(radius),
              // The thick darker edge under the card is what makes it look raised.
              boxShadow: [
                BoxShadow(color: c.edge, offset: Offset(0, _down ? 2 : 6)),
                BoxShadow(color: Colors.black.withOpacity(0.45), blurRadius: _down ? 8 : 18, offset: Offset(0, _down ? 4 : 11)),
                if (widget.selected) BoxShadow(color: c.glow.withOpacity(0.55), blurRadius: 22, spreadRadius: -2),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(radius),
              child: Stack(children: [
                Positioned.fill(
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [c.top, c.bottom]),
                    ),
                  ),
                ),
                // Soft light on the upper half, like a glossy surface.
                Positioned(
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 62,
                  child: DecoratedBox(
                    decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withOpacity(0.2), Colors.white.withOpacity(0)])),
                  ),
                ),
                // A glow in the corner in the colour of the service.
                Positioned(
                  right: -26,
                  top: -26,
                  child: Container(width: 100, height: 100, decoration: BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [c.glow.withOpacity(0.32), Colors.transparent]))),
                ),
                Positioned.fill(
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(radius),
                      border: Border.all(color: widget.selected ? c.glow : Colors.white.withOpacity(0.22), width: widget.selected ? 1.8 : 1),
                    ),
                  ),
                ),
                widget.child,
              ]),
            ),
          ),
        ),
      ),
    );
  }
}

/// One frame around all the tiles: a dark glass panel with a slowly breathing glowing edge and a sweeping shine.
class NgmyTileFrame extends StatelessWidget {
  const NgmyTileFrame({super.key, required this.animation, required this.child, this.glow = const Color(0xFF22D3EE)});

  final Animation<double> animation;
  final Widget child;
  final Color glow;

  @override
  Widget build(BuildContext context) {
    const radius = 30.0;
    return AnimatedBuilder(
      animation: animation,
      builder: (context, child) {
        final t = animation.value;
        final breathe = 0.28 + 0.3 * t;
        return Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(radius),
            gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF111B2E), Color(0xFF0A0F1C), Color(0xFF14102A)]),
            border: Border.all(color: glow.withOpacity(breathe), width: 1.6),
            boxShadow: [BoxShadow(color: glow.withOpacity(0.1 + 0.16 * t), blurRadius: 30, spreadRadius: -6)],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(radius),
            child: Stack(children: [
              Positioned.fill(child: CustomPaint(painter: _FramePainter(t, glow))),
              child!,
            ]),
          ),
        );
      },
      child: Padding(padding: const EdgeInsets.all(12), child: child),
    );
  }
}

class _FramePainter extends CustomPainter {
  _FramePainter(this.t, this.glow);
  final double t;
  final Color glow;

  @override
  void paint(Canvas canvas, Size size) {
    // A fine dotted texture.
    final dot = Paint()..color = Colors.white.withOpacity(0.05);
    for (double y = 9; y < size.height; y += 18) {
      for (double x = 9; x < size.width; x += 18) {
        canvas.drawCircle(Offset(x, y), 0.9, dot);
      }
    }
    // A diagonal shine that drifts across the frame.
    final x = -size.width * 0.4 + (size.width * 1.8) * t;
    final rect = Rect.fromLTWH(x, 0, size.width * 0.35, size.height);
    canvas.save();
    canvas.drawRect(
      rect,
      Paint()..shader = LinearGradient(colors: [Colors.transparent, glow.withOpacity(0.1), Colors.transparent]).createShader(rect),
    );
    canvas.restore();
    // Soft light in the top corner.
    final c = Offset(size.width, 0);
    canvas.drawCircle(c, size.shortestSide * 0.7, Paint()..shader = RadialGradient(colors: [glow.withOpacity(0.14), Colors.transparent]).createShader(Rect.fromCircle(center: c, radius: size.shortestSide * 0.7)));
  }

  @override
  bool shouldRepaint(covariant _FramePainter old) => old.t != t;
}
