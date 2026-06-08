import 'package:flutter/material.dart';

/// Minimal message glyph — no background box, modern outline only.
class NgmyModernChatPrefixIcon extends StatelessWidget {
  const NgmyModernChatPrefixIcon({super.key, this.size = 22});

  final double size;

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      size: Size(size, size),
      painter: const _MinimalMessageStrokePainter(),
    );
  }
}

class _MinimalMessageStrokePainter extends CustomPainter {
  const _MinimalMessageStrokePainter();

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;

    final body = RRect.fromRectAndRadius(
      Rect.fromCenter(center: Offset(w * 0.52, h * 0.44), width: w * 0.72, height: h * 0.48),
      Radius.circular(h * 0.14),
    );
    final bubble = Path()..addRRect(body);
    final tail = Path()
      ..moveTo(w * 0.28, h * 0.62)
      ..quadraticBezierTo(w * 0.12, h * 0.82, w * 0.34, h * 0.78)
      ..quadraticBezierTo(w * 0.38, h * 0.66, w * 0.4, h * 0.62)
      ..close();
    final shape = Path.combine(PathOperation.union, bubble, tail);

    canvas.drawPath(
      shape,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = w * 0.085
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF67E8F9), Color(0xFFA78BFA), Color(0xFFF472B6)],
        ).createShader(Rect.fromLTWH(0, 0, w, h)),
    );

    final dotPaint = Paint()..color = const Color(0xFF67E8F9).withValues(alpha: 0.95);
    canvas.drawCircle(Offset(w * 0.42, h * 0.44), w * 0.028, dotPaint);
    canvas.drawCircle(Offset(w * 0.52, h * 0.44), w * 0.028, dotPaint);
    canvas.drawCircle(Offset(w * 0.62, h * 0.44), w * 0.028, dotPaint);
  }

  @override
  bool shouldRepaint(covariant _MinimalMessageStrokePainter old) => false;
}
