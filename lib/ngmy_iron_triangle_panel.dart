import 'package:flutter/material.dart';

/// Shiny brushed-iron Iron Triangle pick panel (FAST / CHEAP / GOOD).
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

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(14),
          child: Stack(
            children: [
              CustomPaint(
                painter: const NgmyIronMetalPainter(),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(12, 14, 12, 10),
                  child: Column(
                    children: [
                      CustomPaint(
                        size: const Size(56, 48),
                        painter: NgmyChromeTrianglePainter(
                          fastOn: triFast,
                          cheapOn: triCheap,
                          goodOn: triGood,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        'THE IRON TRIANGLE',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.82),
                          letterSpacing: 3.2,
                          fontSize: 9,
                          fontWeight: FontWeight.w900,
                          shadows: const [Shadow(color: Colors.black54, blurRadius: 2, offset: Offset(0, 1))],
                        ),
                      ),
                      const SizedBox(height: 8),
                      _ironRow(keyName: 'fast', label: 'FAST', active: triFast, accent: const Color(0xFFF97316)),
                      _ironRow(keyName: 'cheap', label: 'CHEAP', active: triCheap, accent: const Color(0xFF34D399)),
                      _ironRow(keyName: 'good', label: 'GOOD', active: triGood, accent: const Color(0xFF60A5FA)),
                    ],
                  ),
                ),
              ),
              ..._rivets(),
            ],
          ),
        ),
        const SizedBox(height: 8),
        Container(
          // Fixed height so the panel never grows/shrinks as toggles change
          // which result message (1 vs 2 lines) is shown.
          height: 56,
          alignment: Alignment.center,
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: LinearGradient(
              colors: [
                const Color(0xFF1E293B).withValues(alpha: 0.95),
                const Color(0xFF0F172A).withValues(alpha: 0.98),
              ],
            ),
            border: Border.all(color: const Color(0xFF64748B).withValues(alpha: 0.5)),
            boxShadow: [
              BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 8, offset: const Offset(0, 3)),
            ],
          ),
          child: Text(
            resultText,
            textAlign: TextAlign.center,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: Colors.white.withValues(alpha: 0.88),
              fontWeight: FontWeight.w600,
              fontSize: 11,
              height: 1.35,
            ),
          ),
        ),
      ],
    );
  }

  List<Widget> _rivets() {
    Widget rivet(Alignment a) => Align(
          alignment: a,
          child: Container(
            width: 9,
            height: 9,
            margin: const EdgeInsets.all(7),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: const RadialGradient(
                colors: [Color(0xFFE2E8F0), Color(0xFF64748B), Color(0xFF334155)],
                stops: [0.0, 0.55, 1.0],
              ),
              border: Border.all(color: Colors.black.withValues(alpha: 0.55)),
              boxShadow: [
                BoxShadow(color: Colors.white.withValues(alpha: 0.25), blurRadius: 1, offset: const Offset(-0.5, -0.5)),
                BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 2, offset: const Offset(1, 1)),
              ],
            ),
          ),
        );
    return [
      rivet(Alignment.topLeft),
      rivet(Alignment.topRight),
      rivet(Alignment.bottomLeft),
      rivet(Alignment.bottomRight),
    ];
  }

  Widget _ironRow({
    required String keyName,
    required String label,
    required bool active,
    required Color accent,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5),
      child: Row(
        children: [
          Container(
            width: 8,
            height: 8,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                colors: active ? [accent, accent.withValues(alpha: 0.5)] : [const Color(0xFF475569), const Color(0xFF1E293B)],
              ),
              boxShadow: active ? [BoxShadow(color: accent.withValues(alpha: 0.65), blurRadius: 6)] : null,
            ),
          ),
          const SizedBox(width: 10),
          Text(
            label,
            style: TextStyle(
              color: active ? Colors.white : Colors.white.withValues(alpha: 0.38),
              fontSize: 13,
              fontWeight: FontWeight.w900,
              letterSpacing: 1.8,
              shadows: active ? [Shadow(color: accent.withValues(alpha: 0.5), blurRadius: 4)] : null,
            ),
          ),
          const Spacer(),
          _IronTogglePill(active: active, accent: accent, onTap: () => onToggle(keyName, !active)),
        ],
      ),
    );
  }
}

class _IronTogglePill extends StatelessWidget {
  const _IronTogglePill({required this.active, required this.accent, required this.onTap});

  final bool active;
  final Color accent;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        width: 46,
        height: 26,
        padding: const EdgeInsets.all(3),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: active
                ? [accent.withValues(alpha: 0.85), accent.withValues(alpha: 0.45)]
                : [const Color(0xFF475569), const Color(0xFF1E293B)],
          ),
          border: Border.all(color: active ? accent : const Color(0xFF64748B), width: 1.2),
          boxShadow: [
            BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 4, offset: const Offset(0, 2)),
            if (active) BoxShadow(color: accent.withValues(alpha: 0.45), blurRadius: 8),
          ],
        ),
        child: Align(
          alignment: active ? Alignment.centerRight : Alignment.centerLeft,
          child: Container(
            width: 18,
            height: 18,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Color(0xFFF8FAFC), Color(0xFFCBD5E1), Color(0xFF94A3B8)],
              ),
              boxShadow: const [BoxShadow(color: Colors.black38, blurRadius: 2, offset: Offset(0, 1))],
            ),
          ),
        ),
      ),
    );
  }
}

class NgmyIronMetalPainter extends CustomPainter {
  const NgmyIronMetalPainter();

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    canvas.drawRect(
      rect,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF6B7280), Color(0xFF374151), Color(0xFF1F2937), Color(0xFF4B5563)],
          stops: [0.0, 0.35, 0.7, 1.0],
        ).createShader(rect),
    );

    final brush = Paint()..color = Colors.white.withValues(alpha: 0.04)..strokeWidth = 1;
    for (var y = 0.0; y < size.height; y += 3) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y + size.width * 0.08), brush);
    }

    final shine = Paint()
      ..shader = LinearGradient(
        begin: const Alignment(-1.0, -1.0),
        end: const Alignment(0.6, 0.8),
        colors: [Colors.white.withValues(alpha: 0.28), Colors.transparent, Colors.black.withValues(alpha: 0.15)],
        stops: const [0.0, 0.42, 1.0],
      ).createShader(rect);
    canvas.drawRect(rect, shine);

    canvas.drawRect(
      rect,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.5
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Colors.white.withValues(alpha: 0.45), const Color(0xFF111827)],
        ).createShader(rect),
    );
  }

  @override
  bool shouldRepaint(covariant NgmyIronMetalPainter old) => false;
}

class NgmyChromeTrianglePainter extends CustomPainter {
  NgmyChromeTrianglePainter({required this.fastOn, required this.cheapOn, required this.goodOn});

  final bool fastOn;
  final bool cheapOn;
  final bool goodOn;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final top = Offset(w * 0.5, h * 0.08);
    final left = Offset(w * 0.12, h * 0.88);
    final right = Offset(w * 0.88, h * 0.88);

    final path = Path()
      ..moveTo(top.dx, top.dy)
      ..lineTo(right.dx, right.dy)
      ..lineTo(left.dx, left.dy)
      ..close();
    final bounds = Rect.fromLTWH(0, 0, w, h);

    // Drop shadow under the plate so it reads as a solid cast-iron slab.
    canvas.drawPath(
      path.shift(const Offset(0, 2.2)),
      Paint()
        ..color = Colors.black.withValues(alpha: 0.45)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2.5),
    );

    // Solid forged-iron fill — dark gunmetal core, not a thin wire outline.
    canvas.drawPath(
      path,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF94A3B8), Color(0xFF475569), Color(0xFF1E293B), Color(0xFF111827)],
          stops: [0.0, 0.32, 0.72, 1.0],
        ).createShader(bounds),
    );

    // Diagonal brushed-metal sheen across the slab.
    canvas.drawPath(
      path,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment(-1.0, -1.0),
          end: Alignment(0.5, 0.7),
          colors: [Color(0x40FFFFFF), Colors.transparent, Color(0x33000000)],
          stops: [0.0, 0.45, 1.0],
        ).createShader(bounds),
    );

    // Bright bevel edge along the top-left faces, dark edge bottom-right —
    // the classic cast-metal highlight/shadow pairing.
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.6
        ..strokeJoin = StrokeJoin.round
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFF1F5F9), Color(0xFF64748B), Color(0xFF020617)],
        ).createShader(bounds),
    );

    _vertex(canvas, top, fastOn, const Color(0xFFF97316));
    _vertex(canvas, left, cheapOn, const Color(0xFF34D399));
    _vertex(canvas, right, goodOn, const Color(0xFF60A5FA));
  }

  void _vertex(Canvas canvas, Offset c, bool on, Color color) {
    canvas.drawCircle(
      c,
      on ? 6.5 : 5,
      Paint()
        ..shader = RadialGradient(
          colors: on
              ? [Colors.white, color, color.withValues(alpha: 0.6)]
              : [const Color(0xFFCBD5E1), const Color(0xFF64748B), const Color(0xFF334155)],
        ).createShader(Rect.fromCircle(center: c, radius: 7)),
    );
    if (on) {
      canvas.drawCircle(c, 9, Paint()..color = color.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3));
    }
  }

  @override
  bool shouldRepaint(covariant NgmyChromeTrianglePainter old) =>
      old.fastOn != fastOn || old.cheapOn != cheapOn || old.goodOn != goodOn;
}
