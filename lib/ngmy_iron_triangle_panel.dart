import 'dart:math' as math;

import 'package:flutter/material.dart';

final math.Random _ngmyTriRandom = math.Random();

/// The Iron Triangle rule: you can only have two of FAST, CHEAP and GOOD. When a third is turned on, one of the
/// other two turns off. Which one is chosen at random (not in a fixed order), so it never feels like it just goes
/// round in a line (fast turns off cheap, cheap turns off good, good turns off fast...).
String ngmyIronTrianglePickDrop(Set<String> candidates, {math.Random? random}) {
  final list = candidates.toList()..sort();
  if (list.length == 1) return list.first;
  return list[(random ?? _ngmyTriRandom).nextInt(list.length)];
}

/// The Iron Triangle panel (FAST / CHEAP / GOOD), made to look like a real plate of brushed steel: fine brushed
/// grain, a bright bevel, engraved words, slotted screws in the corners, a polished triangle and metal switches.
class NgmyIronTrianglePanel extends StatelessWidget {
  const NgmyIronTrianglePanel({
    super.key,
    required this.triFast,
    required this.triCheap,
    required this.triGood,
    required this.onToggle,
    required this.resultText,
  });

  final bool triFast;
  final bool triCheap;
  final bool triGood;
  final void Function(String key, bool value) onToggle;
  final String resultText;

  static const _fastC = Color(0xFFF97316);
  static const _cheapC = Color(0xFF22C55E);
  static const _goodC = Color(0xFF3B82F6);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          key: const Key('iron-triangle-steel'),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            boxShadow: const [
              BoxShadow(color: Color(0x40000000), blurRadius: 14, offset: Offset(0, 6)),
              BoxShadow(color: Color(0x26000000), blurRadius: 2, offset: Offset(0, 1)),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: CustomPaint(
              painter: const NgmyIronMetalPainter(),
              child: Stack(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 16, 16, 12),
                    child: Column(
                      children: [
                        CustomPaint(
                          size: const Size(72, 62),
                          painter: NgmyChromeTrianglePainter(fastOn: triFast, cheapOn: triCheap, goodOn: triGood),
                        ),
                        const SizedBox(height: 8),
                        const _Engraved('THE IRON TRIANGLE', size: 10.5, spacing: 3.4),
                        const SizedBox(height: 4),
                        const _Engraved('Pick any two', size: 10, spacing: 0.6, weight: FontWeight.w700),
                        const SizedBox(height: 10),
                        _ironRow(keyName: 'fast', label: 'FAST', active: triFast, accent: _fastC),
                        _groove(),
                        _ironRow(keyName: 'cheap', label: 'CHEAP', active: triCheap, accent: _cheapC),
                        _groove(),
                        _ironRow(keyName: 'good', label: 'GOOD', active: triGood, accent: _goodC),
                      ],
                    ),
                  ),
                  ..._screws(),
                ],
              ),
            ),
          ),
        ),
        const SizedBox(height: 8),
        // An engraved dark-steel label plate under the panel for the result.
        Container(
          height: 56,
          alignment: Alignment.center,
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: const LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFF4B5563), Color(0xFF1F2937), Color(0xFF374151)],
            ),
            border: Border.all(color: const Color(0xFF9CA3AF), width: 1.2),
            boxShadow: const [BoxShadow(color: Color(0x40000000), blurRadius: 8, offset: Offset(0, 3))],
          ),
          child: Text(
            resultText,
            textAlign: TextAlign.center,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(
              color: Color(0xFFF3F4F6),
              fontWeight: FontWeight.w700,
              fontSize: 11.5,
              height: 1.35,
              shadows: [Shadow(color: Colors.black54, blurRadius: 1, offset: Offset(0, 1))],
            ),
          ),
        ),
      ],
    );
  }

  /// A thin cut line in the steel between rows.
  Widget _groove() => Container(
        height: 2,
        margin: const EdgeInsets.symmetric(vertical: 2),
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0x55374151), Color(0x88FFFFFF)],
          ),
        ),
      );

  List<Widget> _screws() {
    Widget screw(Alignment a, double angle) => Align(
          alignment: a,
          child: Padding(padding: const EdgeInsets.all(7), child: _Screw(angle: angle)),
        );
    return [
      screw(Alignment.topLeft, 0.4),
      screw(Alignment.topRight, -0.7),
      screw(Alignment.bottomLeft, 1.1),
      screw(Alignment.bottomRight, -0.2),
    ];
  }

  Widget _ironRow({required String keyName, required String label, required bool active, required Color accent}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        children: [
          // A small lamp set into the steel.
          Container(
            width: 12,
            height: 12,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                center: const Alignment(-0.3, -0.4),
                colors: active ? [Colors.white, accent, Color.lerp(accent, Colors.black, 0.4)!] : const [Color(0xFFD1D5DB), Color(0xFF6B7280), Color(0xFF374151)],
                stops: const [0, 0.5, 1],
              ),
              border: Border.all(color: const Color(0xFF4B5563), width: 1),
              boxShadow: active ? [BoxShadow(color: accent.withValues(alpha: 0.7), blurRadius: 8)] : null,
            ),
          ),
          const SizedBox(width: 12),
          _Engraved(label, size: 14, spacing: 2.2, dim: !active),
          const Spacer(),
          _MetalSwitch(key: Key('iron-switch-$keyName'), active: active, accent: accent, onTap: () => onToggle(keyName, !active)),
        ],
      ),
    );
  }
}

/// Words cut into the steel: dark letters with a light edge below them.
class _Engraved extends StatelessWidget {
  const _Engraved(this.text, {required this.size, required this.spacing, this.weight = FontWeight.w900, this.dim = false});

  final String text;
  final double size;
  final double spacing;
  final FontWeight weight;
  final bool dim;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
        color: dim ? const Color(0xFF6B7280) : const Color(0xFF1F2937),
        fontSize: size,
        fontWeight: weight,
        letterSpacing: spacing,
        shadows: const [Shadow(color: Color(0xCCFFFFFF), offset: Offset(0, 1), blurRadius: 0)],
      ),
    );
  }
}

class _Screw extends StatelessWidget {
  const _Screw({required this.angle});

  final double angle;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 12,
      height: 12,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: const RadialGradient(
          center: Alignment(-0.35, -0.4),
          colors: [Color(0xFFF9FAFB), Color(0xFFB0B7C3), Color(0xFF6B7280)],
          stops: [0, 0.55, 1],
        ),
        border: Border.all(color: const Color(0xFF4B5563), width: 0.8),
        boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 1.5, offset: Offset(0.5, 1))],
      ),
      child: Center(
        child: Transform.rotate(
          angle: angle,
          child: Container(width: 8, height: 1.6, color: const Color(0xFF4B5563)),
        ),
      ),
    );
  }
}

/// A metal slide switch: a dark slot cut into the plate and a polished steel knob.
class _MetalSwitch extends StatelessWidget {
  const _MetalSwitch({super.key, required this.active, required this.accent, required this.onTap});

  final bool active;
  final Color accent;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        width: 54,
        height: 28,
        padding: const EdgeInsets.all(3),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: active
                ? [Color.lerp(accent, Colors.black, 0.35)!, accent]
                : const [Color(0xFF374151), Color(0xFF6B7280)],
          ),
          border: Border.all(color: const Color(0xFF4B5563), width: 1),
          boxShadow: const [BoxShadow(color: Color(0x80FFFFFF), offset: Offset(0, 1))],
        ),
        child: AnimatedAlign(
          duration: const Duration(milliseconds: 180),
          alignment: active ? Alignment.centerRight : Alignment.centerLeft,
          child: Container(
            width: 22,
            height: 22,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Color(0xFFFFFFFF), Color(0xFFD1D5DB), Color(0xFF9CA3AF), Color(0xFFE5E7EB)],
                stops: [0, 0.4, 0.75, 1],
              ),
              border: Border.all(color: const Color(0xFF6B7280), width: 0.8),
              boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 3, offset: Offset(0, 1.5))],
            ),
          ),
        ),
      ),
    );
  }
}

/// Brushed steel: a silver base with light and dark bands, fine grain lines, a soft shine across, and a bevel
/// (bright top-left edge, dark bottom-right edge).
class NgmyIronMetalPainter extends CustomPainter {
  const NgmyIronMetalPainter();

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    canvas.drawRect(
      rect,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFFF3F4F6), Color(0xFFD1D5DB), Color(0xFFE5E7EB), Color(0xFFB8BEC8), Color(0xFFD9DDE3)],
          stops: [0.0, 0.28, 0.5, 0.78, 1.0],
        ).createShader(rect),
    );

    // Fine brushed grain (fixed seed, so it does not change between frames).
    final r = math.Random(7);
    for (var y = 0.0; y < size.height; y += 1.6) {
      final light = r.nextBool();
      canvas.drawLine(
        Offset(0, y),
        Offset(size.width, y + r.nextDouble() * 0.8),
        Paint()
          ..color = (light ? Colors.white : const Color(0xFF6B7280)).withValues(alpha: 0.05 + r.nextDouble() * 0.10)
          ..strokeWidth = 0.7,
      );
    }

    // A soft diagonal shine.
    canvas.drawRect(
      rect,
      Paint()
        ..shader = LinearGradient(
          begin: const Alignment(-1.0, -0.6),
          end: const Alignment(1.0, 0.6),
          colors: [Colors.white.withValues(alpha: 0.0), Colors.white.withValues(alpha: 0.45), Colors.white.withValues(alpha: 0.0)],
          stops: const [0.3, 0.48, 0.66],
        ).createShader(rect),
    );

    // Bevel: bright top and left edges, dark bottom and right edges.
    final edge = Paint()..strokeWidth = 2.2;
    canvas.drawLine(Offset(0, 1), Offset(size.width, 1), edge..color = Colors.white.withValues(alpha: 0.95));
    canvas.drawLine(const Offset(1, 0), Offset(1, size.height), edge..color = Colors.white.withValues(alpha: 0.75));
    canvas.drawLine(Offset(0, size.height - 1), Offset(size.width, size.height - 1), edge..color = const Color(0xFF4B5563).withValues(alpha: 0.85));
    canvas.drawLine(Offset(size.width - 1, 0), Offset(size.width - 1, size.height), edge..color = const Color(0xFF6B7280).withValues(alpha: 0.75));
  }

  @override
  bool shouldRepaint(covariant NgmyIronMetalPainter old) => false;
}

/// A polished steel triangle plate with a lamp at each corner (lit when that choice is on).
class NgmyChromeTrianglePainter extends CustomPainter {
  NgmyChromeTrianglePainter({required this.fastOn, required this.cheapOn, required this.goodOn});

  final bool fastOn;
  final bool cheapOn;
  final bool goodOn;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final top = Offset(w * 0.5, h * 0.10);
    final left = Offset(w * 0.10, h * 0.88);
    final right = Offset(w * 0.90, h * 0.88);
    final path = Path()
      ..moveTo(top.dx, top.dy)
      ..lineTo(right.dx, right.dy)
      ..lineTo(left.dx, left.dy)
      ..close();
    final bounds = Rect.fromLTWH(0, 0, w, h);

    canvas.drawPath(
      path.shift(const Offset(0, 2.5)),
      Paint()
        ..color = Colors.black.withValues(alpha: 0.35)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2.5),
    );
    // Polished chrome: bright, dark and bright again.
    canvas.drawPath(
      path,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFFFFFFF), Color(0xFF9CA3AF), Color(0xFF4B5563), Color(0xFFD1D5DB), Color(0xFF6B7280)],
          stops: [0.0, 0.3, 0.5, 0.72, 1.0],
        ).createShader(bounds),
    );
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.8
        ..strokeJoin = StrokeJoin.round
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFFFFFFF), Color(0xFF6B7280), Color(0xFF1F2937)],
        ).createShader(bounds),
    );
    _vertex(canvas, top, fastOn, NgmyIronTrianglePanel._fastC);
    _vertex(canvas, left, cheapOn, NgmyIronTrianglePanel._cheapC);
    _vertex(canvas, right, goodOn, NgmyIronTrianglePanel._goodC);
  }

  void _vertex(Canvas canvas, Offset c, bool on, Color color) {
    if (on) {
      canvas.drawCircle(c, 10, Paint()..color = color.withValues(alpha: 0.40)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3.5));
    }
    canvas.drawCircle(
      c,
      on ? 7 : 5.5,
      Paint()
        ..shader = RadialGradient(
          center: const Alignment(-0.3, -0.4),
          colors: on ? [Colors.white, color, Color.lerp(color, Colors.black, 0.35)!] : const [Color(0xFFE5E7EB), Color(0xFF9CA3AF), Color(0xFF4B5563)],
        ).createShader(Rect.fromCircle(center: c, radius: 7)),
    );
    canvas.drawCircle(c, on ? 7 : 5.5, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = const Color(0xFF374151));
  }

  @override
  bool shouldRepaint(covariant NgmyChromeTrianglePainter old) =>
      old.fastOn != fastOn || old.cheapOn != cheapOn || old.goodOn != goodOn;
}
