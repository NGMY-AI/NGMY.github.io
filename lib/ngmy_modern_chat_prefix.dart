import 'package:flutter/material.dart';

/// Compact modern message icon for input prefixes (not legacy Material chat icons).
class NgmyModernChatPrefixIcon extends StatelessWidget {
  const NgmyModernChatPrefixIcon({super.key, this.size = 26});

  final double size;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size,
      child: DecoratedBox(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(size * 0.32),
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF6366F1), Color(0xFF8B5CF6), Color(0xFFEC4899)],
          ),
          boxShadow: [
            BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.45), blurRadius: 6, offset: const Offset(0, 2)),
          ],
        ),
        child: CustomPaint(painter: _NgmyModernBubbleGlyphPainter(strokeWidth: size * 0.07)),
      ),
    );
  }
}

class _NgmyModernBubbleGlyphPainter extends CustomPainter {
  _NgmyModernBubbleGlyphPainter({required this.strokeWidth});

  final double strokeWidth;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;

    final shine = Paint()
      ..shader = RadialGradient(
        center: const Alignment(-0.6, -0.7),
        radius: 0.55,
        colors: [Colors.white.withValues(alpha: 0.35), Colors.transparent],
      ).createShader(Rect.fromLTWH(0, 0, w, h));
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(0, 0, w, h), Radius.circular(w * 0.32)),
      shine,
    );

    final body = RRect.fromRectAndRadius(
      Rect.fromCenter(center: Offset(w * 0.5, h * 0.42), width: w * 0.52, height: h * 0.36),
      Radius.circular(h * 0.12),
    );
    final bubble = Path()..addRRect(body);
    final tail = Path()
      ..moveTo(w * 0.34, h * 0.56)
      ..quadraticBezierTo(w * 0.22, h * 0.72, w * 0.4, h * 0.68)
      ..lineTo(w * 0.46, h * 0.56)
      ..close();
    final shape = Path.combine(PathOperation.union, bubble, tail);

    canvas.drawPath(
      shape,
      Paint()
        ..color = Colors.white
        ..style = PaintingStyle.fill,
    );
    canvas.drawPath(
      shape,
      Paint()
        ..color = Colors.white.withValues(alpha: 0.55)
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeWidth * 0.35,
    );

    canvas.drawCircle(Offset(w * 0.44, h * 0.42), w * 0.028, Paint()..color = const Color(0xFF8B5CF6).withValues(alpha: 0.85));
    canvas.drawCircle(Offset(w * 0.52, h * 0.42), w * 0.028, Paint()..color = const Color(0xFF8B5CF6).withValues(alpha: 0.85));
    canvas.drawCircle(Offset(w * 0.6, h * 0.42), w * 0.028, Paint()..color = const Color(0xFF8B5CF6).withValues(alpha: 0.85));
  }

  @override
  bool shouldRepaint(covariant _NgmyModernBubbleGlyphPainter old) => false;
}
